import { Question, Subject, Topic } from "../types";

/**
 * Tự động chuẩn hóa đường dẫn Google Sheets
 * Chuyển đổi link chia sẻ / xem thông thường thành link xuất CSV trực tiếp
 */
export function normalizeGoogleSheetUrl(url: string): string {
  const trimmed = url.trim();

  // Trường hợp 1: Link xem/sửa thông thường: https://docs.google.com/spreadsheets/d/<ID>/edit...
  const match = trimmed.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
  if (match && !trimmed.includes("/d/e/")) {
    const sheetId = match[1];
    const gidMatch = trimmed.match(/[#&?]gid=([0-9]+)/);
    const gid = gidMatch ? `&gid=${gidMatch[1]}` : "";
    return `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv${gid}`;
  }

  // Trường hợp 2: Link xuất bản HTML: https://docs.google.com/spreadsheets/d/e/.../pubhtml
  if (trimmed.includes("/pubhtml")) {
    return trimmed.replace("/pubhtml", "/pub?output=csv");
  }

  return trimmed;
}

/**
 * Phân tích dòng CSV xử lý được dấu ngoặc kép và dấu phẩy bên trong dữ liệu
 */
function parseCsvLine(line: string): string[] {
  const result: string[] = [];
  let current = "";
  let insideQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      if (insideQuotes && line[i + 1] === '"') {
        current += '"';
        i++; // Bỏ qua escape double quotes
      } else {
        insideQuotes = !insideQuotes;
      }
    } else if (char === "," && !insideQuotes) {
      result.push(current.trim());
      current = "";
    } else {
      current += char;
    }
  }
  result.push(current.trim());
  return result;
}

/**
 * Xử lý dữ liệu CSV từ Google Sheets của giáo viên
 */
export function parseGoogleSheetData(csvContent: string): {
  questions: Question[];
  topics: Topic[];
  subjects: Subject[];
} {
  const lines = csvContent.trim().split(/\r?\n/);
  if (lines.length <= 1) {
    throw new Error("Tệp Google Sheets trống hoặc không đúng định dạng!");
  }

  const questions: Question[] = [];
  const topicMap = new Map<string, Topic>();
  const subjectMap = new Map<string, Subject>();

  // Bỏ qua dòng tiêu đề (Header)
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    const cols = line.includes("\t")
      ? line.split("\t").map((c) => c.replace(/^["']|["']$/g, "").trim())
      : parseCsvLine(line).map((c) => c.replace(/^["']|["']$/g, "").trim());

    if (cols.length < 8) continue;

    const [
      id,
      subjectId,
      subjectName,
      chapterName,
      topicId,
      topicName,
      difficulty,
      content,
      optA,
      optB,
      optC,
      optD,
      correctAnswer,
      hint1,
      hint2,
      hint3,
      explanation,
    ] = cols;

    if (!id || !content || !optA || !optB || !correctAnswer) continue;

    const sId = subjectId || "tin-hoc-12";
    const sName = subjectName || "Tin học 12";
    const tId = topicId || "chu-de-tong-hop";
    const tName = topicName || "Chuyên đề tổng hợp";
    const cName = chapterName || "Chương ôn tập chung";

    // Lưu subject
    if (!subjectMap.has(sId)) {
      subjectMap.set(sId, {
        id: sId,
        name: sName,
        icon: sId.includes("tin") ? "Laptop" : sId.includes("toan") ? "Calculator" : "BookOpen",
        topics: [],
      });
    }

    // Lưu topic
    if (!topicMap.has(tId)) {
      const newTopic: Topic = {
        id: tId,
        name: tName,
        subjectId: sId,
        chapter: cName,
        totalQuestions: 0,
      };
      topicMap.set(tId, newTopic);
    }
    const topic = topicMap.get(tId)!;
    topic.totalQuestions += 1;

    questions.push({
      id,
      subjectId: sId,
      topicId: tId,
      topicName: tName,
      chapterName: cName,
      difficulty: (difficulty as any) || "ThongHieu",
      content,
      options: [
        { id: "A", content: optA },
        { id: "B", content: optB },
        { id: "C", content: optC || "" },
        { id: "D", content: optD || "" },
      ],
      correctAnswer: (correctAnswer.toUpperCase() as any) || "A",
      hints: {
        level1_concept: hint1 || "Đọc kỹ giả thiết đề bài và định lý cốt lõi.",
        level2_formula: hint2 || "Áp dụng công thức và phương pháp trong bài học.",
        level3_steps: hint3 || "Thực hiện phép tính theo các dữ kiện đã cho.",
      },
      explanation: explanation || "",
      sourceDocTitle: "Đồng bộ từ Google Drive / Sheets của Thầy/Cô",
    });
  }

  // Gắn topics vào subjects
  const subjects = Array.from(subjectMap.values()).map((subj) => ({
    ...subj,
    topics: Array.from(topicMap.values()).filter((t) => t.subjectId === subj.id),
  }));

  if (questions.length === 0) {
    throw new Error(
      "Không tìm thấy câu hỏi hợp lệ trong bảng tính. Vui lòng kiểm tra lại cấu trúc các cột."
    );
  }

  return {
    questions,
    topics: Array.from(topicMap.values()),
    subjects,
  };
}
