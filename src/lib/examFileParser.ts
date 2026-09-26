import { DifficultyLevel, MockExamQuestion, TrueFalseItem } from "@/types";
// @ts-ignore
import mammoth from "mammoth";

export interface ParsedExamResult {
  title: string;
  questions: MockExamQuestion[];
  warnings: string[];
  totalParsed: number;
}

/**
 * Trích xuất text từ file tải lên (.docx, .txt)
 */
export async function extractTextFromFile(file: File): Promise<string> {
  const fileExt = file.name.split(".").pop()?.toLowerCase();

  if (fileExt === "docx") {
    const arrayBuffer = await file.arrayBuffer();
    const result = await mammoth.extractRawText({ arrayBuffer });
    return result.value || "";
  }

  // File txt hoặc các định dạng văn bản thuần
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => resolve((e.target?.result as string) || "");
    reader.onerror = (e) => reject(e);
    reader.readAsText(file, "UTF-8");
  });
}

/**
 * Trích xuất bảng đáp án ở cuối văn bản nếu có.
 * Ví dụ: "BẢNG ĐÁP ÁN: 1.A 2.B 3.C 4.D..." hoặc "1-A, 2-C, 3-B..."
 */
function extractAnswerKeyMap(text: string): Record<number, string> {
  const answerMap: Record<number, string> = {};
  
  // Tìm khối bảng đáp án
  const answerKeyRegex = /(?:bảng đáp án|đáp án tham khảo|hướng dẫn chấm)[\s\S]*$/i;
  const match = text.match(answerKeyRegex);
  
  if (match) {
    const block = match[0];
    const pairRegex = /(\d+)\s*[-.:/]\s*([A-D])/gi;
    let m;
    while ((m = pairRegex.exec(block)) !== null) {
      answerMap[parseInt(m[1], 10)] = m[2].toUpperCase();
    }
  }

  return answerMap;
}

/**
 * Bộ phân tích cú pháp thông minh bóc tách đề thi từ văn bản thô
 */
export function parseExamRawText(rawText: string, defaultTopicId: string = "tin-thi-kiem-tra"): ParsedExamResult {
  const warnings: string[] = [];
  const questions: MockExamQuestion[] = [];
  const normalized = rawText.replace(/\r\n/g, "\n").replace(/\r/g, "\n");

  const answerKeyMap = extractAnswerKeyMap(normalized);

  // Tách văn bản thành các khối câu hỏi dựa trên "Câu 1", "Câu 2", "Bài 1",...
  // Regular expression tìm điểm bắt đầu của câu hỏi mới
  const questionSplitRegex = /(?:^|\n)(?=(?:Câu|Bài|Q)\s*\d+[\s.:])/i;
  const rawBlocks = normalized.split(questionSplitRegex).map((b) => b.trim()).filter(Boolean);

  let currentExamIndex = 1;

  for (const block of rawBlocks) {
    // Bỏ qua nếu block là tiêu đề hoặc bảng đáp án cuối bài
    if (/^(?:BẢNG ĐÁP ÁN|HƯỚNG DẪN CHẤM|PHẦN I|PHẦN II|ĐỀ THI|TRƯỜNG THPT)/i.test(block) && !/^[A-D][.:\)]/m.test(block)) {
      continue;
    }

    const headerMatch = block.match(/^(?:Câu|Bài|Q)\s*(\d+)[\s.:]\s*([\s\S]*)/i);
    if (!headerMatch) continue;

    const questionNumber = parseInt(headerMatch[1], 10);
    const bodyAndOptions = headerMatch[2].trim();

    // 1. Kiểm tra ưu tiên nhận diện Trắc nghiệm 4 lựa chọn (Phần 1: A, B, C, D in hoa)
    const mcMatchA = bodyAndOptions.match(/(?:^|\n)\s*A[\).:]\s*/);
    const mcMatchB = bodyAndOptions.match(/(?:^|\n)\s*B[\).:]\s*/);
    const mcMatchC = bodyAndOptions.match(/(?:^|\n)\s*C[\).:]\s*/);
    const mcMatchD = bodyAndOptions.match(/(?:^|\n)\s*D[\).:]\s*/);

    if (mcMatchA && mcMatchB && (mcMatchC || mcMatchD)) {
      const parsedMC = parseMultipleChoiceQuestion(
        questionNumber,
        bodyAndOptions,
        currentExamIndex,
        defaultTopicId,
        answerKeyMap[questionNumber]
      );
      if (parsedMC) {
        questions.push(parsedMC);
        currentExamIndex++;
        continue;
      }
    }

    // 2. Kiểm tra dạng Đúng / Sai (Phần 2: a, b, c, d chữ thường)
    const tfMatchA = bodyAndOptions.match(/(?:^|\n)\s*a[\).:]\s*/);
    const tfMatchB = bodyAndOptions.match(/(?:^|\n)\s*b[\).:]\s*/);

    if (tfMatchA && tfMatchB) {
      const parsedTF = parseTrueFalseQuestion(
        questionNumber,
        bodyAndOptions,
        currentExamIndex,
        defaultTopicId
      );
      if (parsedTF) {
        questions.push(parsedTF);
        currentExamIndex++;
        continue;
      } else {
        warnings.push(`Không thể bóc tách đầy đủ các ý Đúng/Sai cho Câu ${questionNumber}`);
      }
      continue;
    }

    // 3. Fallback: Nếu không rơi vào 2 trường hợp trên, thử parse MC
    const fallbackMC = parseMultipleChoiceQuestion(
      questionNumber,
      bodyAndOptions,
      currentExamIndex,
      defaultTopicId,
      answerKeyMap[questionNumber]
    );
    if (fallbackMC) {
      questions.push(fallbackMC);
      currentExamIndex++;
    } else {
      warnings.push(`Không nhận diện được định dạng câu hỏi cho Câu ${questionNumber}`);
    }
  }

  return {
    title: `Đề kiểm tra nạp từ file (${questions.length} câu)`,
    questions,
    warnings,
    totalParsed: questions.length,
  };
}

/**
 * Bóc tách 1 câu trắc nghiệm 4 lựa chọn A, B, C, D
 */
function parseMultipleChoiceQuestion(
  questionNumber: number,
  bodyText: string,
  examIndex: number,
  topicId: string,
  fallbackAnswer?: string
): MockExamQuestion | null {
  // Tìm các vị trí phương án A, B, C, D
  const optRegexA = /(?:^|\n)\s*A[\).:]\s*/;
  const optRegexB = /(?:^|\n)\s*B[\).:]\s*/;
  const optRegexC = /(?:^|\n)\s*C[\).:]\s*/;
  const optRegexD = /(?:^|\n)\s*D[\).:]\s*/;

  const matchA = bodyText.search(optRegexA);
  const matchB = bodyText.search(optRegexB);
  const matchC = bodyText.search(optRegexC);
  const matchD = bodyText.search(optRegexD);

  if (matchA === -1 || matchB === -1 || matchC === -1 || matchD === -1) {
    return null;
  }

  // Nội dung đề bài
  const content = bodyText.slice(0, matchA).trim();

  // Nội dung từng phương án
  const rawA = bodyText.slice(matchA, matchB).replace(/(?:^|\n)\s*A[\).:]\s*/, "").trim();
  const rawB = bodyText.slice(matchB, matchC).replace(/(?:^|\n)\s*B[\).:]\s*/, "").trim();
  const rawC = bodyText.slice(matchC, matchD).replace(/(?:^|\n)\s*C[\).:]\s*/, "").trim();
  
  // D kéo dài đến hết hoặc đến dòng "Đáp án:"
  let rawD = bodyText.slice(matchD).replace(/(?:^|\n)\s*D[\).:]\s*/, "").trim();

  let detectedAnswer: "A" | "B" | "C" | "D" = (fallbackAnswer as any) || "A";

  // Kiểm tra nếu có dòng "Đáp án: X" ở cuối
  const ansMatch = rawD.match(/(?:Đáp án|Chọn|Key)\s*[:=]\s*([A-D])/i);
  if (ansMatch) {
    detectedAnswer = ansMatch[1].toUpperCase() as "A" | "B" | "C" | "D";
    rawD = rawD.replace(/(?:Đáp án|Chọn|Key)\s*[:=]\s*[A-D]/i, "").trim();
  }

  // Kiểm tra dấu hoa thị hoặc từ khóa đánh dấu đáp án đúng: *A., A.*, (Đúng)
  if (rawA.includes("(Đúng)") || rawA.includes("*")) detectedAnswer = "A";
  if (rawB.includes("(Đúng)") || rawB.includes("*")) detectedAnswer = "B";
  if (rawC.includes("(Đúng)") || rawC.includes("*")) detectedAnswer = "C";
  if (rawD.includes("(Đúng)") || rawD.includes("*")) detectedAnswer = "D";

  // Dọn dẹp ký tự đánh dấu
  const clean = (s: string) => s.replace(/\s*\*+/g, "").replace(/\s*\(Đúng\)/gi, "").trim();

  // Xác định mức độ nhận thức
  let difficulty: DifficultyLevel = "ThongHieu";
  if (/\[NB\]|nhận biết/i.test(content)) difficulty = "NhanBiet";
  else if (/\[VD\]|vận dụng(?! cao)/i.test(content)) difficulty = "VanDung";
  else if (/\[VDC\]|vận dụng cao/i.test(content)) difficulty = "VanDungCao";

  return {
    id: `exam-parsed-${questionNumber}-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    examIndex,
    part: "mc",
    subjectId: "tin-hoc-12",
    topicId,
    topicName: "Kiểm tra định kỳ",
    chapterName: "Đề kiểm tra",
    difficulty,
    type: "multiple_choice",
    content: clean(content),
    options: [
      { id: "A", content: clean(rawA) },
      { id: "B", content: clean(rawB) },
      { id: "C", content: clean(rawC) },
      { id: "D", content: clean(rawD) },
    ],
    correctAnswer: detectedAnswer,
    hints: {
      level1_concept: "Nhớ lại kiến thức nền tảng trong bài học để giải quyết câu hỏi.",
      level2_formula: "Phân tích các từ khóa quan trọng và loại trừ các phương án gây nhiễu.",
      level3_steps: "Đối chiếu các lựa chọn để chọn phương án tối ưu nhất.",
    },
    explanation: `Đáp án đúng là ${detectedAnswer}.`,
  };
}

/**
 * Bóc tách 1 câu trắc nghiệm Đúng / Sai (Phần 2)
 */
function parseTrueFalseQuestion(
  questionNumber: number,
  bodyText: string,
  examIndex: number,
  topicId: string
): MockExamQuestion | null {
  const optRegexA = /(?:^|\n)\s*a[\).:]\s*/;
  const optRegexB = /(?:^|\n)\s*b[\).:]\s*/;
  const optRegexC = /(?:^|\n)\s*c[\).:]\s*/;
  const optRegexD = /(?:^|\n)\s*d[\).:]\s*/;

  const matchA = bodyText.search(optRegexA);
  const matchB = bodyText.search(optRegexB);
  const matchC = bodyText.search(optRegexC);
  const matchD = bodyText.search(optRegexD);

  if (matchA === -1 || matchB === -1) {
    return null;
  }

  const content = bodyText.slice(0, matchA).trim();

  const getSubItem = (
    subText: string,
    id: "a" | "b" | "c" | "d"
  ): TrueFalseItem => {
    let textClean = subText.trim();
    let isCorrect = true; // Mặc định là Đúng nếu không chỉ định rõ

    // Nhận diện đánh dấu: (Đúng), (Sai), [Đ], [S], hoặc cuối câu có "- Đúng", "- Sai"
    if (/\b(?:Sai|S|\(S\)|\(Sai\))\b/i.test(textClean)) {
      isCorrect = false;
      textClean = textClean.replace(/\s*[-–:]?\s*\(?(?:Sai|S)\)?\s*$/i, "").trim();
    } else if (/\b(?:Đúng|Đ|\(Đ\)|\(Đúng\))\b/i.test(textClean)) {
      isCorrect = true;
      textClean = textClean.replace(/\s*[-–:]?\s*\(?(?:Đúng|Đ)\)?\s*$/i, "").trim();
    }

    return {
      id,
      content: textClean,
      correctAnswer: isCorrect,
    };
  };

  const rawA = bodyText.slice(matchA, matchB).replace(/(?:^|\n)\s*a[\).:]\s*/, "").trim();
  const rawB = (matchC !== -1 ? bodyText.slice(matchB, matchC) : bodyText.slice(matchB))
    .replace(/(?:^|\n)\s*b[\).:]\s*/, "")
    .trim();
  const rawC = matchC !== -1 && matchD !== -1
    ? bodyText.slice(matchC, matchD).replace(/(?:^|\n)\s*c[\).:]\s*/, "").trim()
    : "Ý kiến c chưa nhập nội dung";
  const rawD = matchD !== -1
    ? bodyText.slice(matchD).replace(/(?:^|\n)\s*d[\).:]\s*/, "").trim()
    : "Ý kiến d chưa nhập nội dung";

  const tfItems: TrueFalseItem[] = [
    getSubItem(rawA, "a"),
    getSubItem(rawB, "b"),
    getSubItem(rawC, "c"),
    getSubItem(rawD, "d"),
  ];

  const statements = tfItems.map((it) => ({
    id: it.id,
    content: it.content,
    isCorrect: it.correctAnswer,
  }));

  return {
    id: `exam-parsed-tf-${questionNumber}-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    examIndex,
    part: "tf",
    subjectId: "tin-hoc-12",
    topicId,
    topicName: "Kiểm tra định kỳ (Phần 2: Đúng/Sai)",
    chapterName: "Đề kiểm tra",
    difficulty: "VanDung",
    type: "true_false",
    content,
    tfItems,
    statements,
    hints: {
      level1_concept: "Đọc kỹ từng ý để đối chiếu với kiến thức lý thuyết và thực tiễn.",
      level2_formula: "Mỗi ý là một khẳng định độc lập cần phán đoán Đúng hoặc Sai.",
      level3_steps: "Đánh giá từng mệnh đề a, b, c, d.",
    },
    explanation: "Đánh giá tính đúng/sai của từng khẳng định dựa trên chuẩn kiến thức THPT.",
  };
}
