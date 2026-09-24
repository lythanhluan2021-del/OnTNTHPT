import { Question, MockExam, MockExamQuestion, ExamResult, ExamAnswerState } from "@/types";

/**
 * Sinh một đề thi thử Tốt nghiệp THPT chuẩn ma trận Bộ GD&ĐT
 * Cấu trúc: 24 câu MC (Phần 1) + 4 câu TF (Phần 2)
 */
export function generateMockExam(
  allQuestions: Question[],
  customTitle: string = "Đề thi thử Tốt nghiệp THPT 2026 - Môn Tin học (Đề số 1)"
): MockExam {
  // Lọc riêng MC và TF
  const mcPool = allQuestions.filter((q) => q.type !== "true_false");
  const tfPool = allQuestions.filter((q) => q.type === "true_false" && q.tfItems && q.tfItems.length === 4);

  // Hàm xáo trộn ngẫu nhiên Fisher-Yates
  const shuffle = <T>(arr: T[]): T[] => {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  };

  const shuffledMc = shuffle(mcPool);
  const shuffledTf = shuffle(tfPool);

  // Chọn 24 câu MC
  const selectedMc: MockExamQuestion[] = shuffledMc.slice(0, 24).map((q, idx) => ({
    ...q,
    examIndex: idx + 1,
    part: "mc",
  }));

  // Chọn 4 câu TF
  const selectedTf: MockExamQuestion[] = shuffledTf.slice(0, 4).map((q, idx) => ({
    ...q,
    examIndex: selectedMc.length + idx + 1,
    part: "tf",
  }));

  const allExamQuestions = [...selectedMc, ...selectedTf];

  return {
    id: "exam-" + Date.now() + "-" + Math.random().toString(36).slice(2, 6),
    title: customTitle,
    subjectId: "tin-hoc-12",
    durationMinutes: 50,
    totalQuestions: allExamQuestions.length,
    questions: allExamQuestions,
    createdAt: Date.now(),
  };
}

/**
 * Thang điểm chuẩn Bộ GD&ĐT cho dạng câu hỏi Đúng/Sai (Phần 2)
 * Đúng 1 ý: 0.1đ | Đúng 2 ý: 0.25đ | Đúng 3 ý: 0.5đ | Đúng 4 ý: 1.0đ
 */
export function calculateTrueFalseItemScore(correctCount: number): number {
  switch (correctCount) {
    case 1:
      return 0.1;
    case 2:
      return 0.25;
    case 3:
      return 0.5;
    case 4:
      return 1.0;
    default:
      return 0.0;
  }
}

/**
 * Chấm điểm toàn diện bài thi thử THPT theo thang điểm 10.0
 */
export function gradeMockExam(
  exam: MockExam,
  answers: ExamAnswerState,
  studentName: string,
  className?: string,
  startTime: number = Date.now(),
  endTime: number = Date.now(),
  tabSwitchCount: number = 0
): ExamResult {
  let mcScore = 0;
  let tfScore = 0;
  let totalCorrectMc = 0;
  let totalCorrectTfStatements = 0;

  const details: ExamResult["details"] = [];

  exam.questions.forEach((q) => {
    if (q.part === "mc") {
      const studentAns = answers.mcAnswers[q.id] || null;
      const isCorrect = studentAns === q.correctAnswer;
      const earned = isCorrect ? 0.25 : 0;
      if (isCorrect) totalCorrectMc++;
      mcScore += earned;

      details.push({
        questionId: q.id,
        type: "multiple_choice",
        studentAnswer: studentAns,
        correctAnswer: q.correctAnswer,
        isCorrect,
        earnedScore: earned,
        maxScore: 0.25,
      });
    } else {
      // Phần 2: Đúng / Sai
      const studentTf = answers.tfAnswers[q.id] || {};
      const tfItems = q.tfItems || [];
      let correctInThisQuestion = 0;

      tfItems.forEach((it) => {
        if (studentTf[it.id] === it.correctAnswer) {
          correctInThisQuestion++;
          totalCorrectTfStatements++;
        }
      });

      const earned = calculateTrueFalseItemScore(correctInThisQuestion);
      tfScore += earned;

      details.push({
        questionId: q.id,
        type: "true_false",
        studentAnswer: studentTf,
        correctAnswer: tfItems.reduce((acc, it) => ({ ...acc, [it.id]: it.correctAnswer }), {}),
        isCorrect: correctInThisQuestion === 4,
        earnedScore: earned,
        maxScore: 1.0,
      });
    }
  });

  const rawTotal = mcScore + tfScore;
  const roundedTotal = Math.round(rawTotal * 100) / 100;

  return {
    examId: exam.id,
    examTitle: exam.title,
    studentName,
    className,
    startTime,
    endTime,
    timeSpentSeconds: Math.max(1, Math.round((endTime - startTime) / 1000)),
    tabSwitchCount,
    mcScore: Math.round(mcScore * 100) / 100,
    tfScore: Math.round(tfScore * 100) / 100,
    totalScore: roundedTotal,
    totalCorrectMc,
    totalCorrectTfStatements,
    details,
  };
}
