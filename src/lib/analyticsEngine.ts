import { Question, StudentAttempt, Topic, TopicAnalytics } from "../types";

export function calculateTopicAnalytics(
  topics: Topic[],
  questions: Question[],
  attempts: StudentAttempt[]
): TopicAnalytics[] {
  return topics.map((topic) => {
    const topicQuestions = questions.filter((q) => q.topicId === topic.id);
    const topicAttempts = attempts.filter((a) => a.topicId === topic.id);

    const totalAnswered = topicAttempts.length;
    const correctCount = topicAttempts.filter((a) => a.isCorrect).length;
    const accuracyRate =
      totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0;

    const totalHints = topicAttempts.reduce((sum, a) => sum + a.hintsViewed, 0);
    const averageHintsUsed =
      totalAnswered > 0 ? Number((totalHints / totalAnswered).toFixed(1)) : 0;

    // Phân tích điểm yếu cụ thể dựa trên câu sai
    const wrongAttempts = topicAttempts.filter((a) => !a.isCorrect);
    const weakPoints: string[] = [];

    wrongAttempts.forEach((wrong) => {
      const q = questions.find((item) => item.id === wrong.questionId);
      if (q) {
        if (q.difficulty === "NhanBiet") {
          weakPoints.push("Cần xem lại định nghĩa và lý thuyết cơ bản (" + q.topicName + ")");
        } else if (q.difficulty === "ThongHieu") {
          weakPoints.push("Cần rèn luyện thêm kỹ năng biến đổi công thức (" + q.topicName + ")");
        } else {
          weakPoints.push("Cần củng cố tư duy giải toán vận dụng (" + q.topicName + ")");
        }
      }
    });

    // Lọc trùng điểm yếu
    const uniqueWeakPoints = Array.from(new Set(weakPoints));

    let status: "Dat" | "CanLuyenTap" | "ChuaDat" = "CanLuyenTap";
    if (totalAnswered === 0) {
      status = "CanLuyenTap";
    } else if (accuracyRate >= 80) {
      status = "Dat";
    } else if (accuracyRate >= 50) {
      status = "CanLuyenTap";
    } else {
      status = "ChuaDat";
    }

    return {
      topicId: topic.id,
      topicName: topic.name,
      chapterName: topic.chapter,
      totalAnswered,
      correctCount,
      accuracyRate,
      averageHintsUsed,
      weakPoints: uniqueWeakPoints,
      status,
    };
  });
}

export function getOverallStatistics(attempts: StudentAttempt[]) {
  const total = attempts.length;
  const correct = attempts.filter((a) => a.isCorrect).length;
  const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;
  const totalTimeMinutes = Math.round(
    attempts.reduce((sum, a) => sum + a.timeSpentSeconds, 0) / 60
  );
  const totalHintsUsed = attempts.reduce((sum, a) => sum + a.hintsViewed, 0);

  return {
    total,
    correct,
    accuracy,
    totalTimeMinutes,
    totalHintsUsed,
  };
}
