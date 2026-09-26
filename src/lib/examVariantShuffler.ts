import { MockExamQuestion, MockExamOption, MockExamStatement } from "../types";
import { ExamVariant } from "../types/examManagement";

/**
 * Thuật toán xáo trộn mảng chuẩn Fisher-Yates
 */
function shuffleArray<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * Sinh các mã đề hoán vị ngẫu nhiên (VD: Mã 101, 102, 103, 104)
 * - Đảo ngẫu nhiên vị trí các câu hỏi trong Phần 1 (Nhiều lựa chọn)
 * - Đảo ngẫu nhiên vị trí các phương án A, B, C, D và bảo toàn chính xác đáp án đúng
 * - Đảo ngẫu nhiên vị trí các câu hỏi trong Phần 2 (Đúng/Sai)
 * - Tạo Bảng đáp án ma trận (Answer Key Map) cho từng mã đề
 */
export function generateExamVariants(
  baseQuestions: MockExamQuestion[],
  variantCodes: string[] = ["101", "102", "103", "104"]
): ExamVariant[] {
  const mcQuestions = baseQuestions.filter((q) => q.part === "mc" || q.type === "multiple_choice");
  const tfQuestions = baseQuestions.filter((q) => q.part === "tf" || q.type === "true_false");

  return variantCodes.map((code, variantIdx) => {
    // Nếu là mã đề đầu tiên (101), giữ nguyên thứ tự gốc để làm đề tham chiếu
    const shouldShuffle = variantIdx > 0;

    // 1. Xáo trộn câu hỏi Phần 1
    const shuffledMc = shouldShuffle ? shuffleArray(mcQuestions) : [...mcQuestions];

    // Xáo trộn phương án A, B, C, D của từng câu Phần 1
    const processedMc: MockExamQuestion[] = shuffledMc.map((q) => {
      if (!q.options || q.options.length < 2) return q;

      const currentCorrect = q.correctOptionId || q.correctAnswer;
      const originalCorrectOption = q.options.find((opt) => opt.id === currentCorrect);
      const originalCorrectText = originalCorrectOption?.content;

      // Xáo trộn các phương án
      const shuffledOptions = shouldShuffle ? shuffleArray(q.options) : [...q.options];
      const standardLabels: ("A" | "B" | "C" | "D")[] = ["A", "B", "C", "D"];

      let newCorrectOptionId: "A" | "B" | "C" | "D" = "A";
      const relabeledOptions: MockExamOption[] = shuffledOptions.map((opt, optIdx) => {
        const newId: "A" | "B" | "C" | "D" = standardLabels[optIdx] || "A";
        if (opt.content === originalCorrectText || opt.id === currentCorrect) {
          newCorrectOptionId = newId;
        }
        return {
          id: newId,
          content: opt.content,
        };
      });

      return {
        ...q,
        options: relabeledOptions,
        correctOptionId: newCorrectOptionId,
        correctAnswer: newCorrectOptionId,
      };
    });

    // 2. Xáo trộn câu hỏi Phần 2 (Giữ nguyên thứ tự các ý a, b, c, d vì tính logic ngữ cảnh)
    const shuffledTf = shouldShuffle ? shuffleArray(tfQuestions) : [...tfQuestions];

    // Gộp cả 2 phần thành bộ đề của mã này
    const variantQuestions = [...processedMc, ...shuffledTf];

    // Tạo bảng tra cứu đáp án đúng
    const answerKeyMap: Record<string, any> = {};
    variantQuestions.forEach((q) => {
      if (q.part === "mc" || q.type === "multiple_choice") {
        answerKeyMap[q.id] = q.correctOptionId || q.correctAnswer;
      } else if (q.statements || q.tfItems) {
        const stmtMap: Record<string, boolean> = {};
        const items: any[] = q.statements || q.tfItems || [];
        items.forEach((st) => {
          stmtMap[st.id] = st.isCorrect !== undefined ? st.isCorrect : st.correctAnswer;
        });
        answerKeyMap[q.id] = stmtMap;
      }
    });

    return {
      code,
      questions: variantQuestions,
      answerKeyMap,
    };
  });
}
