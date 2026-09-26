import { ExamDefinition, ExamSubmission, ExamStatsReport, ItemDifficultyStat, AtRiskStudent } from "../types/examManagement";

export function analyzeExamResults(
  exam: ExamDefinition,
  submissions: ExamSubmission[],
  filterClass?: string
): ExamStatsReport {
  // Lọc theo lớp nếu được chỉ định
  const filteredSubmissions = filterClass && filterClass !== "all"
    ? submissions.filter((s) => s.className === filterClass)
    : submissions;

  const totalParticipants = filteredSubmissions.length;
  const submittedCount = filteredSubmissions.filter((s) => !s.isDisqualified).length;
  const disqualifiedCount = filteredSubmissions.filter((s) => s.isDisqualified).length;

  if (totalParticipants === 0) {
    return {
      examId: exam.id,
      examTitle: exam.title,
      totalParticipants: 0,
      submittedCount: 0,
      disqualifiedCount: 0,
      averageScore: 0,
      highestScore: 0,
      lowestScore: 0,
      passRate: 0,
      excellentRate: 0,
      scoreDistribution: {
        under5: 0,
        from5to65: 0,
        from65to8: 0,
        from8to10: 0,
      },
      itemAnalysis: [],
      atRiskStudents: [],
    };
  }

  const scores = filteredSubmissions.map((s) => s.totalScore);
  const totalScoreSum = scores.reduce((sum, score) => sum + score, 0);
  const averageScore = Math.round((totalScoreSum / totalParticipants) * 100) / 100;
  const highestScore = Math.max(...scores);
  const lowestScore = Math.min(...scores);

  const passCount = scores.filter((s) => s >= 5.0).length;
  const excellentCount = scores.filter((s) => s >= 8.0).length;
  const passRate = Math.round((passCount / totalParticipants) * 100);
  const excellentRate = Math.round((excellentCount / totalParticipants) * 100);

  const scoreDistribution = {
    under5: scores.filter((s) => s < 5.0).length,
    from5to65: scores.filter((s) => s >= 5.0 && s < 6.5).length,
    from65to8: scores.filter((s) => s >= 6.5 && s < 8.0).length,
    from8to10: scores.filter((s) => s >= 8.0).length,
  };

  // 1. Phân tích độ khó từng câu hỏi (Item Difficulty Analysis)
  const questionMap = new Map<string, { correct: number; total: number }>();
  filteredSubmissions.forEach((sub) => {
    sub.details.forEach((det) => {
      const existing = questionMap.get(det.questionId) || { correct: 0, total: 0 };
      existing.total += 1;
      if (det.isCorrect) {
        existing.correct += 1;
      }
      questionMap.set(det.questionId, existing);
    });
  });

  const itemAnalysis: ItemDifficultyStat[] = exam.questions.map((q, idx) => {
    const stat = questionMap.get(q.id) || { correct: 0, total: 0 };
    const accuracyRate = stat.total > 0 ? Math.round((stat.correct / stat.total) * 100) : 0;
    const wrongRate = 100 - accuracyRate;

    return {
      questionIndex: idx + 1,
      questionId: q.id,
      content: q.content,
      type: q.type || (q.part === "tf" ? "true_false" : "multiple_choice"),
      correctCount: stat.correct,
      totalAttempts: stat.total,
      accuracyRate,
      wrongRate,
      difficulty: q.difficulty || "TH",
      topicName: q.topicId?.replace("tin-", "").replace(/-/g, " "),
    };
  });

  // Sắp xếp các câu có tỷ lệ làm sai cao nhất lên đầu để giáo viên chú ý chữa bài
  itemAnalysis.sort((a, b) => b.wrongRate - a.wrongRate);

  // 2. Nhận diện học sinh có nguy cơ cần cảnh báo sớm (At-risk Students)
  const atRiskStudents: AtRiskStudent[] = [];
  filteredSubmissions.forEach((sub) => {
    if (sub.isDisqualified) {
      atRiskStudents.push({
        studentId: sub.studentId,
        studentName: sub.studentName,
        className: sub.className,
        candidateNumber: sub.candidateNumber,
        score: sub.totalScore,
        reason: "vi_pham_nhieu",
        reasonLabel: "Bị đình chỉ thi do vi phạm quy chế nhiều lần",
      });
    } else if (sub.totalScore <= 1.0) {
      atRiskStudents.push({
        studentId: sub.studentId,
        studentName: sub.studentName,
        className: sub.className,
        candidateNumber: sub.candidateNumber,
        score: sub.totalScore,
        reason: "diem_liet",
        reasonLabel: "Điểm liệt (≤ 1.0đ) - Nguy cơ trượt tốt nghiệp",
      });
    } else if (sub.totalScore < 5.0) {
      atRiskStudents.push({
        studentId: sub.studentId,
        studentName: sub.studentName,
        className: sub.className,
        candidateNumber: sub.candidateNumber,
        score: sub.totalScore,
        reason: "duoi_tb",
        reasonLabel: "Dưới trung bình (< 5.0đ) - Cần phụ đạo bổ sung",
      });
    } else if (sub.timeSpentSeconds < 300 && sub.totalScore < 6.0) {
      atRiskStudents.push({
        studentId: sub.studentId,
        studentName: sub.studentName,
        className: sub.className,
        candidateNumber: sub.candidateNumber,
        score: sub.totalScore,
        reason: "nop_qua_nhanh",
        reasonLabel: "Nộp bài quá nhanh (< 5 phút) với điểm thấp",
      });
    }
  });

  return {
    examId: exam.id,
    examTitle: exam.title,
    totalParticipants,
    submittedCount,
    disqualifiedCount,
    averageScore,
    highestScore,
    lowestScore,
    passRate,
    excellentRate,
    scoreDistribution,
    itemAnalysis,
    atRiskStudents,
  };
}
