import { Question, TrueFalseItem } from "@/types";

const MC_KEYS: ("A" | "B" | "C" | "D")[] = ["A", "B", "C", "D"];
const TF_KEYS: ("a" | "b" | "c" | "d")[] = ["a", "b", "c", "d"];

/**
 * Thuật toán xáo trộn ngẫu nhiên Fisher-Yates chuẩn xác
 */
export function shuffleArray<T>(array: T[]): T[] {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/**
 * Kiểm tra xem các phương án trắc nghiệm có chứa tham chiếu vị trí cố định hay không.
 * Ví dụ: "Cả A và B", "Tất cả các đáp án trên", "Cả 3 phương án trên".
 * Nếu có, ta không nên đảo thứ tự đáp án của câu hỏi đó để tránh làm hỏng nghĩa câu hỏi.
 */
export function hasPositionalOptionReferences(
  options: { id: string; content: string }[]
): boolean {
  const positionalPatterns = [
    /\bcả\s+[A-D]\s*(và|với|,)\s*[A-D]/i,
    /\btất cả (các )?(đáp án|phương án|câu|ý) trên/i,
    /\bcả (3|ba|bốn|4) (phương án|đáp án|ý) trên/i,
    /\bkhông có (đáp án|phương án) nào ở trên/i,
    /\b(đáp án|phương án)\s+[A-D]\s+và\s+[A-D]/i,
  ];

  return options.some((opt) =>
    positionalPatterns.some((pattern) => pattern.test(opt.content))
  );
}

/**
 * Kiểm tra xem các ý Đúng/Sai có chứa tham chiếu đến ý khác không (ví dụ "như ý a").
 */
export function hasPositionalTFReferences(tfItems: TrueFalseItem[]): boolean {
  const tfPatterns = [
    /\b(ý|câu)\s+[a-d]\b/i,
    /\bở trên\b/i,
  ];
  return tfItems.some((item) =>
    tfPatterns.some((pattern) => pattern.test(item.content))
  );
}

/**
 * Đảo ngẫu nhiên các phương án lựa chọn trong 1 câu hỏi:
 * - Trắc nghiệm 4 lựa chọn: Hoán vị A, B, C, D và cập nhật lại correctAnswer tương ứng 100% chuẩn xác.
 * - Đúng / Sai: Hoán vị thứ tự các ý a, b, c, d mà vẫn giữ nguyên tính đúng/sai của từng ý.
 */
export function shuffleQuestionOptions(question: Question): Question {
  // 1. Xử lý câu hỏi Đúng / Sai (Phần 2)
  if (question.type === "true_false" && question.tfItems && question.tfItems.length > 0) {
    if (hasPositionalTFReferences(question.tfItems)) {
      return { ...question };
    }

    const shuffledItems = shuffleArray(question.tfItems);
    const reindexedItems: TrueFalseItem[] = shuffledItems.map((item, idx) => ({
      ...item,
      id: (TF_KEYS[idx] || item.id) as "a" | "b" | "c" | "d",
    }));

    return {
      ...question,
      tfItems: reindexedItems,
    };
  }

  // 2. Xử lý câu hỏi Trắc nghiệm 4 lựa chọn (Phần 1)
  if (question.options && question.options.length > 0) {
    // Nếu có tham chiếu tương đối (Cả A và B, Tất cả các đáp án trên...), giữ nguyên thứ tự đáp án
    if (hasPositionalOptionReferences(question.options)) {
      return { ...question };
    }

    // Tìm nội dung của đáp án đúng hiện tại
    const originalCorrectOption = question.options.find(
      (opt) => opt.id === question.correctAnswer
    );

    // Xáo trộn mảng các lựa chọn
    const shuffledOptions = shuffleArray(question.options);

    // Gán lại nhãn A, B, C, D theo vị trí mới
    const reindexedOptions = shuffledOptions.map((opt, idx) => ({
      id: (MC_KEYS[idx] || opt.id) as "A" | "B" | "C" | "D",
      content: opt.content,
    }));

    // Cập nhật correctAnswer sang nhãn mới dựa trên nội dung ban đầu
    let updatedCorrectAnswer: "A" | "B" | "C" | "D" | undefined = question.correctAnswer;
    if (originalCorrectOption) {
      const matchingOption = reindexedOptions.find(
        (opt) => opt.content === originalCorrectOption.content
      );
      if (matchingOption) {
        updatedCorrectAnswer = matchingOption.id;
      }
    }

    return {
      ...question,
      options: reindexedOptions,
      correctAnswer: updatedCorrectAnswer,
    };
  }

  return { ...question };
}

export interface ShuffleOptionsConfig {
  shuffleQuestions?: boolean;
  shuffleOptions?: boolean;
}

/**
 * Xáo trộn toàn bộ câu hỏi trong một chủ đề:
 * - Đảo ngẫu nhiên thứ tự các câu hỏi.
 * - Đảo ngẫu nhiên các phương án đáp án trong từng câu hỏi.
 */
export function shuffleTopicQuestions(
  questions: Question[],
  config: ShuffleOptionsConfig = { shuffleQuestions: true, shuffleOptions: true }
): Question[] {
  const { shuffleQuestions = true, shuffleOptions = true } = config;

  let result = [...questions];

  // 1. Đảo ngẫu nhiên thứ tự các câu hỏi
  if (shuffleQuestions && result.length > 1) {
    result = shuffleArray(result);
  }

  // 2. Đảo ngẫu nhiên các phương án trong từng câu hỏi
  if (shuffleOptions) {
    result = result.map((q) => shuffleQuestionOptions(q));
  }

  return result;
}
