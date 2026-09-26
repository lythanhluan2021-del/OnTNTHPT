import { DifficultyLevel, MockExamQuestion, TrueFalseItem, MockExamOption, MockExamStatement } from "@/types";
// @ts-ignore
import mammoth from "mammoth";

export interface ParsedExamResult {
  title: string;
  questions: MockExamQuestion[];
  warnings: string[];
  totalParsed: number;
}

/**
 * Chuyển đổi mã HTML từ mammoth thành văn bản đề thi có giữ nguyên thẻ <u> (đáp án gạch chân)
 */
export function convertHtmlToExamText(html: string): string {
  return html
    // Chuyển các thẻ ngắt dòng / đoạn thành dấu xuống dòng
    .replace(/<\/(?:p|div|h[1-6]|li|tr)>/gi, "\n")
    .replace(/<br\s*\/?>/gi, "\n")
    // Giữ lại thẻ <u> và </u>, loại bỏ tất cả các thẻ HTML khác
    .replace(/<(?!u|\/u)[^>]+>/gi, "")
    // Giải mã các thực thể HTML đặc thù (bao gồm cả [<g>] và [<br>])
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&amp;/gi, "&")
    .replace(/&nbsp;/gi, " ")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    // Dọn dẹp khoảng cách dòng thừa
    .replace(/\n{3,}/g, "\n\n");
}

/**
 * Trích xuất text từ file tải lên (.docx, .txt), bảo toàn định dạng gạch chân <u>
 */
export async function extractTextFromFile(file: File): Promise<string> {
  const fileExt = file.name.split(".").pop()?.toLowerCase();

  if (fileExt === "docx") {
    const arrayBuffer = await file.arrayBuffer();
    // Sử dụng convertToHtml với styleMap u => u để giữ lại toàn bộ định dạng gạch chân của Word
    const result = await mammoth.convertToHtml(
      { arrayBuffer },
      { styleMap: ["u => u", "strike => del"] }
    );
    return convertHtmlToExamText(result.value || "");
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

// Regex nhận diện các phương án A, B, C, D của Trắc nghiệm 4 lựa chọn (Phần I)
// Bắt buộc CHỮ HOA, hỗ trợ <u>A</u>., <u>A.</u>, _A._, A., A)
const mcRegexA = /(?:^|\n)\s*(?:<u>\s*A[\).:]\s*<\/u>|<u>\s*A\s*<\/u>[\).:]|_A[\).:]_|A[\).:])\s*/;
const mcRegexB = /(?:^|\n)\s*(?:<u>\s*B[\).:]\s*<\/u>|<u>\s*B\s*<\/u>[\).:]|_B[\).:]_|B[\).:])\s*/;
const mcRegexC = /(?:^|\n)\s*(?:<u>\s*C[\).:]\s*<\/u>|<u>\s*C\s*<\/u>[\).:]|_C[\).:]_|C[\).:])\s*/;
const mcRegexD = /(?:^|\n)\s*(?:<u>\s*D[\).:]\s*<\/u>|<u>\s*D\s*<\/u>[\).:]|_D[\).:]_|D[\).:])\s*/;

// Regex nhận diện các ý a, b, c, d của Trắc nghiệm Đúng / Sai (Phần II)
// Bắt buộc CHỮ THƯỜNG, hỗ trợ <u>a)</u>, <u>a</u>), _a)_, a), a.
const tfRegexA = /(?:^|\n)\s*(?:<u>\s*a[\).:]\s*<\/u>|<u>\s*a\s*<\/u>[\).:]|_a[\).:]_|a[\).:])\s*/;
const tfRegexB = /(?:^|\n)\s*(?:<u>\s*b[\).:]\s*<\/u>|<u>\s*b\s*<\/u>[\).:]|_b[\).:]_|b[\).:])\s*/;
const tfRegexC = /(?:^|\n)\s*(?:<u>\s*c[\).:]\s*<\/u>|<u>\s*c\s*<\/u>[\).:]|_c[\).:]_|c[\).:])\s*/;
const tfRegexD = /(?:^|\n)\s*(?:<u>\s*d[\).:]\s*<\/u>|<u>\s*d\s*<\/u>[\).:]|_d[\).:]_|d[\).:])\s*/;

/**
 * Bộ phân tích cú pháp thông minh bóc tách đề thi từ văn bản thô hoặc văn bản từ Word
 */
export function parseExamRawText(rawText: string, defaultTopicId: string = "tin-thi-kiem-tra"): ParsedExamResult {
  const warnings: string[] = [];
  const questions: MockExamQuestion[] = [];
  const normalized = rawText.replace(/\r\n/g, "\n").replace(/\r/g, "\n");

  const answerKeyMap = extractAnswerKeyMap(normalized);

  // 1. Phân tách khối câu hỏi: Ưu tiên dùng delimiter [<br>] nếu trong đề có xuất hiện
  let rawBlocks: string[] = [];
  const hasBrDelimiter = /\[\s*<\s*br\s*\/?\s*>\s*\]|\[\s*br\s*\/?\s*\]/i.test(normalized);

  if (hasBrDelimiter) {
    rawBlocks = normalized
      .split(/(?:\[\s*<\s*br\s*\/?\s*>\s*\]|\[\s*br\s*\/?\s*\])/i)
      .map((b) => b.trim())
      .filter(Boolean);
  } else {
    const questionSplitRegex = /(?:^|\n)(?=(?:Câu|Bài|Q)\s*\d+[\s.:-])/i;
    rawBlocks = normalized.split(questionSplitRegex).map((b) => b.trim()).filter(Boolean);
  }

  // Theo dõi trạng thái Section đang duyệt: "mc" (Phần I) hoặc "tf" (Phần II)
  let currentSection: "mc" | "tf" | "unknown" = "unknown";
  let currentExamIndex = 1;

  for (let block of rawBlocks) {
    // A. Kiểm tra và chuyển đổi trạng thái Phần I vs Phần II
    if (/PHẦN\s*(?:1|I\b|THỨ NHẤT)|TRẮC NGHIỆM.*PHƯƠNG ÁN LỰA CHỌN/i.test(block)) {
      currentSection = "mc";
    }
    if (/PHẦN\s*(?:2|II\b|THỨ HAI)|TRẮC NGHIỆM.*ĐÚNG\s*SAI/i.test(block)) {
      currentSection = "tf";
    }

    // B. Dọn dẹp thẻ nhóm [<g>]...[</g>] của các phần mềm tạo đề
    block = block.replace(/\[\s*<\s*g\s*>\s*\][\s\S]*?\[\s*<\s*\/g\s*>\s*\]/gi, "").trim();

    // Dọn dẹp dòng tiêu đề Phần nếu nằm dính trong block câu hỏi
    block = block.replace(/^(?:PHẦN\s*(?:1|2|I|II|THỨ NHẤT|THỨ HAI)[^\n]*\n*)+/gi, "").trim();

    // Bỏ qua nếu block rỗng hoặc chỉ là tiêu đề chung / bảng đáp án
    if (!block || /^(?:BẢNG ĐÁP ÁN|HƯỚNG DẪN CHẤM|ĐỀ THI|TRƯỜNG THPT)/i.test(block)) {
      continue;
    }

    // C. Tìm tiêu đề câu hỏi: Câu 1, Câu 2, Bài 1, Q1...
    const headerMatch = block.match(/^(?:Câu|Bài|Q)\s*(\d+)[\s.:-]\s*([\s\S]*)/i);
    if (!headerMatch) {
      continue;
    }

    const questionNumber = parseInt(headerMatch[1], 10);
    const bodyAndOptions = headerMatch[2].trim();

    // D. Nhận diện dạng câu hỏi:
    const hasTfStructure = tfRegexA.test(bodyAndOptions) && tfRegexB.test(bodyAndOptions);
    const hasMcStructure = mcRegexA.test(bodyAndOptions) && mcRegexB.test(bodyAndOptions);

    let isTF = false;
    if (currentSection === "tf") {
      isTF = true;
    } else if (currentSection === "mc") {
      isTF = false;
    } else {
      isTF = hasTfStructure && !hasMcStructure;
    }

    if (isTF) {
      const parsedTF = parseTrueFalseQuestion(
        questionNumber,
        bodyAndOptions,
        currentExamIndex,
        defaultTopicId
      );
      if (parsedTF) {
        questions.push(parsedTF);
        currentExamIndex++;
      } else {
        warnings.push(`Không thể bóc tách đầy đủ các ý Đúng/Sai cho Câu ${questionNumber}`);
      }
    } else {
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
      } else {
        warnings.push(`Không thể bóc tách phương án lựa chọn cho Câu ${questionNumber}`);
      }
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
 * Bóc tách 1 câu trắc nghiệm 4 lựa chọn A, B, C, D (Phần 1)
 * Hỗ trợ nhận diện đáp án đúng qua thẻ gạch chân <u>A</u>., <u>A.</u>, dấu * hoặc bảng đáp án
 */
function parseMultipleChoiceQuestion(
  questionNumber: number,
  bodyText: string,
  examIndex: number,
  topicId: string,
  fallbackAnswer?: string
): MockExamQuestion | null {
  const matchA = bodyText.search(mcRegexA);
  const matchB = bodyText.search(mcRegexB);
  const matchC = bodyText.search(mcRegexC);
  const matchD = bodyText.search(mcRegexD);

  if (matchA === -1 || matchB === -1) {
    return null;
  }

  // Nội dung đề bài
  const content = bodyText.slice(0, matchA).replace(/\[\s*<\s*br\s*\/?\s*>\s*\]/gi, "").trim();

  // Tách từng đoạn phương án
  const segmentA = bodyText.slice(matchA, matchB);
  const segmentB = matchC !== -1 ? bodyText.slice(matchB, matchC) : bodyText.slice(matchB);
  const segmentC = matchC !== -1 && matchD !== -1 ? bodyText.slice(matchC, matchD) : (matchC !== -1 ? bodyText.slice(matchC) : "");
  const segmentD = matchD !== -1 ? bodyText.slice(matchD) : "";

  // 1. Nhận diện đáp án đúng qua gạch chân <u> hoặc ký tự gạch dưới _A_
  let detectedAnswer: "A" | "B" | "C" | "D" = (fallbackAnswer as any) || "A";

  const isUnderlineA = /<u>\s*A/i.test(segmentA) || /A[\).:]\s*<u>/i.test(segmentA) || /_A[\).:]_/.test(segmentA);
  const isUnderlineB = /<u>\s*B/i.test(segmentB) || /B[\).:]\s*<u>/i.test(segmentB) || /_B[\).:]_/.test(segmentB);
  const isUnderlineC = /<u>\s*C/i.test(segmentC) || /C[\).:]\s*<u>/i.test(segmentC) || /_C[\).:]_/.test(segmentC);
  const isUnderlineD = /<u>\s*D/i.test(segmentD) || /D[\).:]\s*<u>/i.test(segmentD) || /_D[\).:]_/.test(segmentD);

  if (isUnderlineA) detectedAnswer = "A";
  else if (isUnderlineB) detectedAnswer = "B";
  else if (isUnderlineC) detectedAnswer = "C";
  else if (isUnderlineD) detectedAnswer = "D";
  else {
    // 2. Nhận diện qua từ khóa "Đáp án: X" ở cuối
    const ansMatch = segmentD.match(/(?:Đáp án|Chọn|Key)\s*[:=]\s*([A-D])/i);
    if (ansMatch) {
      detectedAnswer = ansMatch[1].toUpperCase() as "A" | "B" | "C" | "D";
    } else {
      // 3. Nhận diện qua dấu hoa thị * hoặc nhãn (Đúng)
      if (segmentA.includes("(Đúng)") || segmentA.includes("*")) detectedAnswer = "A";
      else if (segmentB.includes("(Đúng)") || segmentB.includes("*")) detectedAnswer = "B";
      else if (segmentC.includes("(Đúng)") || segmentC.includes("*")) detectedAnswer = "C";
      else if (segmentD.includes("(Đúng)") || segmentD.includes("*")) detectedAnswer = "D";
    }
  }

  // Hàm làm sạch chuỗi phương án
  const cleanOption = (s: string) => {
    return s
      .replace(/(?:^|\n)\s*(?:<u>\s*[A-D][\).:]\s*<\/u>|<u>\s*[A-D]\s*<\/u>[\).:]|_?[A-D][\).:]_?)\s*/i, "")
      .replace(/(?:Đáp án|Chọn|Key)\s*[:=]\s*[A-D]/gi, "")
      .replace(/<\/?u>/gi, "")
      .replace(/\[\s*<\s*br\s*\/?\s*>\s*\]/gi, "")
      .replace(/\s*\*+/g, "")
      .replace(/\s*\(Đúng\)/gi, "")
      .trim();
  };

  // Xác định mức độ nhận thức
  let difficulty: DifficultyLevel = "ThongHieu";
  if (/\[NB\]|nhận biết/i.test(content)) difficulty = "NhanBiet";
  else if (/\[VD\]|vận dụng(?! cao)/i.test(content)) difficulty = "VanDung";
  else if (/\[VDC\]|vận dụng cao/i.test(content)) difficulty = "VanDungCao";

  const cleanContent = content
    .replace(/\[(?:NB|TH|VD|VDC)\]/gi, "")
    .replace(/<\/?u>/gi, "")
    .trim();

  return {
    id: `exam-parsed-${questionNumber}-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    examIndex,
    part: "mc",
    subjectId: "tin-hoc-12",
    topicId,
    topicName: "Kiểm tra định kỳ (Phần I)",
    chapterName: "Đề kiểm tra",
    difficulty,
    type: "multiple_choice",
    content: cleanContent,
    options: [
      { id: "A", content: cleanOption(segmentA) },
      { id: "B", content: cleanOption(segmentB) },
      { id: "C", content: cleanOption(segmentC) },
      { id: "D", content: cleanOption(segmentD) },
    ],
    correctAnswer: detectedAnswer,
    correctOptionId: detectedAnswer,
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
 * Hỗ trợ nhận diện đúng/sai qua:
 * 1. Gạch chân <u>a)</u> (ý được gạch chân là ĐÚNG, ý không gạch chân là SAI)
 * 2. Đuôi .D / .S, (D) / (S), (Đúng) / (Sai)
 */
function parseTrueFalseQuestion(
  questionNumber: number,
  bodyText: string,
  examIndex: number,
  topicId: string
): MockExamQuestion | null {
  const matchA = bodyText.search(tfRegexA);
  const matchB = bodyText.search(tfRegexB);
  const matchC = bodyText.search(tfRegexC);
  const matchD = bodyText.search(tfRegexD);

  if (matchA === -1 || matchB === -1) {
    return null;
  }

  let content = bodyText.slice(0, matchA).replace(/\[\s*<\s*br\s*\/?\s*>\s*\]/gi, "").trim();
  // Xóa đuôi .S hoặc .D vô tình dính vào cuối câu đề dẫn
  content = content.replace(/\.[DS]$/i, ".").replace(/<\/?u>/gi, "").trim();

  const segmentA = bodyText.slice(matchA, matchB);
  const segmentB = matchC !== -1 ? bodyText.slice(matchB, matchC) : bodyText.slice(matchB);
  const segmentC = matchC !== -1 && matchD !== -1 ? bodyText.slice(matchC, matchD) : (matchC !== -1 ? bodyText.slice(matchC) : "");
  const segmentD = matchD !== -1 ? bodyText.slice(matchD) : "";

  const segments: { id: "a" | "b" | "c" | "d"; raw: string }[] = [
    { id: "a", raw: segmentA },
    { id: "b", raw: segmentB },
    { id: "c", raw: segmentC },
    { id: "d", raw: segmentD },
  ];

  // Kiểm tra xem đề thi có sử dụng gạch chân <u> để đánh dấu ý Đúng không
  const anyUnderline = segments.some((s) => /<u>/i.test(s.raw) || /_[a-d][\).:]_/i.test(s.raw));

  const tfItems: TrueFalseItem[] = segments.map(({ id, raw }) => {
    let cleanText = raw
      .replace(/(?:^|\n)\s*(?:<u>\s*[a-d][\).:]\s*<\/u>|<u>\s*[a-d]\s*<\/u>[\).:]|_?[a-d][\).:]_?)\s*/i, "")
      .replace(/\[\s*<\s*br\s*\/?\s*>\s*\]/gi, "")
      .trim();

    let isCorrect = true;
    const hasUnderline = /<u>/i.test(raw) || /_[a-d][\).:]_/i.test(raw);

    // Kiểm tra các đuôi đánh dấu đặc thù: .D, .Đ, (D), [D], (Đúng), hoặc .S, (S), [S], (Sai)
    const isExplicitTrue =
      /\.(?:D|Đ)$/i.test(cleanText) ||
      /\s*[-–:]?\s*(?:\([DĐ]\)|\[[DĐ]\]|\(Đúng\)|\bĐúng\b)$/i.test(cleanText);

    const isExplicitFalse =
      /\.(?:S)$/i.test(cleanText) ||
      /\s*[-–:]?\s*(?:\([S]\)|\[[S]\]|\(Sai\)|\bSai\b)$/i.test(cleanText);

    if (isExplicitTrue) {
      isCorrect = true;
    } else if (isExplicitFalse) {
      isCorrect = false;
    } else if (anyUnderline) {
      // Trường hợp dùng gạch chân: Ý có gạch chân là ĐÚNG, ý không gạch chân là SAI
      isCorrect = hasUnderline;
    }

    // Làm sạch hoàn toàn đuôi .D, .S, (Đúng), (Sai) và thẻ <u> khỏi nội dung hiển thị cho học sinh
    cleanText = cleanText
      .replace(/\.(?:[DĐS])$/i, ".") // thay đuôi .D hoặc .S thành dấu chấm kết thúc câu
      .replace(/\s*[-–:]?\s*(?:\([DĐS]\)|\[[DĐS]\]|\(Đúng\)|\(Sai\)|\b(?:Đúng|Sai)\b)\s*$/i, "")
      .replace(/<\/?u>/gi, "")
      .trim();

    return {
      id,
      content: cleanText,
      correctAnswer: isCorrect,
    };
  });

  const statements: MockExamStatement[] = tfItems.map((it) => ({
    id: it.id,
    content: it.content,
    isCorrect: it.correctAnswer,
  }));

  // Xác định mức độ nhận thức
  let difficulty: DifficultyLevel = "VanDung";
  if (/\[NB\]|nhận biết/i.test(content)) difficulty = "NhanBiet";
  else if (/\[TH\]|thông hiểu/i.test(content)) difficulty = "ThongHieu";
  else if (/\[VDC\]|vận dụng cao/i.test(content)) difficulty = "VanDungCao";

  return {
    id: `exam-parsed-tf-${questionNumber}-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    examIndex,
    part: "tf",
    subjectId: "tin-hoc-12",
    topicId,
    topicName: "Kiểm tra định kỳ (Phần II: Đúng/Sai)",
    chapterName: "Đề kiểm tra",
    difficulty,
    type: "true_false",
    content: content.replace(/\[(?:NB|TH|VD|VDC)\]/gi, "").trim(),
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
