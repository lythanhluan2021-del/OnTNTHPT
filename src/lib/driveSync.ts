import { Question, Subject, Topic } from "../types";

/**
 * Xử lý dữ liệu CSV/TSV từ Google Sheets xuất bản (Publish to Web)
 * Hoặc JSON từ Google Apps Script / Drive API
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

  // Bỏ qua dòng tiêu đề
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    // Phân tách CSV đơn giản hoặc tab
    const cols = line.includes("\t") ? line.split("\t") : line.split(",");

    if (cols.length < 10) continue;

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
    ] = cols.map((c) => c.replace(/^["']|["']$/g, "").trim());

    if (!id || !content || !optA || !optB || !correctAnswer) continue;

    // Lưu subject
    if (!subjectMap.has(subjectId)) {
      subjectMap.set(subjectId, {
        id: subjectId,
        name: subjectName || subjectId,
        icon: "BookOpen",
        topics: [],
      });
    }

    // Lưu topic
    if (!topicMap.has(topicId)) {
      const newTopic: Topic = {
        id: topicId,
        name: topicName || topicId,
        subjectId: subjectId,
        chapter: chapterName || "Chương tổng quát",
        totalQuestions: 0,
      };
      topicMap.set(topicId, newTopic);
    }
    const topic = topicMap.get(topicId)!;
    topic.totalQuestions += 1;

    questions.push({
      id,
      subjectId,
      topicId,
      topicName: topicName || topicId,
      chapterName: chapterName || "Chương tổng quát",
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
        level1_concept: hint1 || "Đọc kỹ giả thiết đề bài và định lý liên quan.",
        level2_formula: hint2 || "Áp dụng công thức chuẩn trong bài học.",
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

  return {
    questions,
    topics: Array.from(topicMap.values()),
    subjects,
  };
}
