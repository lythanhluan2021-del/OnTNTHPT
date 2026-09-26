import { Question, MockExamQuestion, DifficultyLevel } from "@/types";
import { ExamMatrixConfig } from "@/types/examManagement";
import { shuffleArray, shuffleQuestionOptions } from "@/lib/questionShuffler";

export interface MatrixGenerationResult {
  questions: MockExamQuestion[];
  totalMc: number;
  totalTf: number;
  warnings: string[];
}

/**
 * Sinh đề thi trắc nghiệm chuẩn ma trận từ các chủ đề được chọn và 4 mức độ kiến thức
 */
export function generateExamFromMatrix(
  allQuestions: Question[],
  config: ExamMatrixConfig
): MatrixGenerationResult {
  const warnings: string[] = [];
  const {
    selectedTopicIds,
    mcCountByLevel,
    tfCountByLevel,
    shuffleQuestions = true,
    shuffleOptions = true,
  } = config;

  // 1. Lọc ngân hàng câu hỏi theo các chủ đề được giáo viên chọn
  const pool = allQuestions.filter((q) => {
    if (selectedTopicIds.length === 0) return true; // Nếu không chọn thì lấy tất cả
    return selectedTopicIds.includes(q.topicId);
  });

  // Tách riêng MC (Phần 1) và TF (Phần 2) một cách chuẩn xác
  const isTfQuestion = (q: Question) =>
    q.type === "true_false" ||
    (q.tfItems && q.tfItems.length > 0) ||
    (q.statements && q.statements.length > 0);

  const mcPool = pool.filter((q) => !isTfQuestion(q));
  const tfPool = pool.filter((q) => isTfQuestion(q));

  // Phân nhóm câu hỏi theo 4 mức độ nhận thức
  const groupQuestionsByLevel = (questions: Question[]) => {
    const map: Record<DifficultyLevel, Question[]> = {
      NhanBiet: [],
      ThongHieu: [],
      VanDung: [],
      VanDungCao: [],
    };

    questions.forEach((q) => {
      const diff = (q.difficulty as DifficultyLevel) || "ThongHieu";
      if (map[diff]) {
        map[diff].push(q);
      } else {
        map.ThongHieu.push(q);
      }
    });

    return map;
  };

  const mcByLevel = groupQuestionsByLevel(mcPool);
  const tfByLevel = groupQuestionsByLevel(tfPool);

  const selectedMcQuestions: Question[] = [];
  const selectedTfQuestions: Question[] = [];

  const levels: DifficultyLevel[] = ["NhanBiet", "ThongHieu", "VanDung", "VanDungCao"];

  const totalMcRequested =
    (mcCountByLevel.NhanBiet || 0) +
    (mcCountByLevel.ThongHieu || 0) +
    (mcCountByLevel.VanDung || 0) +
    (mcCountByLevel.VanDungCao || 0);

  const totalTfRequested =
    (tfCountByLevel.NhanBiet || 0) +
    (tfCountByLevel.ThongHieu || 0) +
    (tfCountByLevel.VanDung || 0) +
    (tfCountByLevel.VanDungCao || 0);

  // Bốc câu hỏi Trắc nghiệm nhiều lựa chọn (Phần 1) theo từng mức độ
  levels.forEach((lvl) => {
    const needed = mcCountByLevel[lvl] || 0;
    if (needed <= 0) return;

    const available = shuffleArray(mcByLevel[lvl]);
    const taken = available.slice(0, needed);
    selectedMcQuestions.push(...taken);
  });

  // Cơ chế bù thông minh cho Phần 1 nếu một mức độ bị thiếu câu
  if (selectedMcQuestions.length < totalMcRequested) {
    const pickedIds = new Set(selectedMcQuestions.map((q) => q.id));
    const remaining = shuffleArray(mcPool.filter((q) => !pickedIds.has(q.id)));
    const needed = totalMcRequested - selectedMcQuestions.length;
    const backup = remaining.slice(0, needed);
    selectedMcQuestions.push(...backup);
    if (backup.length > 0) {
      warnings.push(
        `Đã tự động lấy thêm ${backup.length} câu trắc nghiệm từ mức độ khả dụng khác để đảm bảo đủ ${totalMcRequested} câu theo yêu cầu.`
      );
    }
  }

  // Bốc câu hỏi Đúng / Sai (Phần 2) theo từng mức độ
  levels.forEach((lvl) => {
    const needed = tfCountByLevel[lvl] || 0;
    if (needed <= 0) return;

    const available = shuffleArray(tfByLevel[lvl]);
    const taken = available.slice(0, needed);
    selectedTfQuestions.push(...taken);
  });

  // Cơ chế bù thông minh cho Phần 2 nếu một mức độ bị thiếu câu
  if (selectedTfQuestions.length < totalTfRequested) {
    const pickedIds = new Set(selectedTfQuestions.map((q) => q.id));
    const remaining = shuffleArray(tfPool.filter((q) => !pickedIds.has(q.id)));
    const needed = totalTfRequested - selectedTfQuestions.length;
    const backup = remaining.slice(0, needed);
    selectedTfQuestions.push(...backup);
    if (backup.length > 0) {
      warnings.push(
        `Đã tự động lấy thêm ${backup.length} câu Đúng/Sai từ mức độ khả dụng khác để đảm bảo đủ ${totalTfRequested} câu theo yêu cầu.`
      );
    }
  }

  // Đảo thứ tự câu hỏi nếu bật shuffleQuestions
  const finalMc = shuffleQuestions ? shuffleArray(selectedMcQuestions) : selectedMcQuestions;
  const finalTf = shuffleQuestions ? shuffleArray(selectedTfQuestions) : selectedTfQuestions;

  // Gán examIndex và xáo trộn các phương án A,B,C,D nếu bật shuffleOptions
  const examQuestions: MockExamQuestion[] = [];

  finalMc.forEach((q, idx) => {
    const preparedQ = shuffleOptions ? shuffleQuestionOptions(q) : q;
    examQuestions.push({
      ...preparedQ,
      examIndex: idx + 1,
      part: "mc",
      type: "multiple_choice",
    });
  });

  const mcCount = examQuestions.length;

  finalTf.forEach((q, idx) => {
    const preparedQ = shuffleOptions ? shuffleQuestionOptions(q) : q;
    const tfItems = preparedQ.tfItems || (preparedQ.statements ? preparedQ.statements.map((s) => ({ id: s.id as any, content: s.content, correctAnswer: s.isCorrect })) : []);
    const statements = preparedQ.statements || tfItems.map((it) => ({ id: it.id, content: it.content, isCorrect: it.correctAnswer }));
    examQuestions.push({
      ...preparedQ,
      examIndex: mcCount + idx + 1,
      part: "tf",
      type: "true_false",
      tfItems,
      statements,
    });
  });

  return {
    questions: examQuestions,
    totalMc: finalMc.length,
    totalTf: finalTf.length,
    warnings,
  };
}

/**
 * Đếm số lượng câu hỏi khả dụng theo từng chủ đề và 4 mức độ nhận thức
 */
export function getTopicStatsMatrix(
  questions: Question[],
  topicIds: string[]
): Record<
  string,
  {
    topicId: string;
    total: number;
    mc: Record<DifficultyLevel, number>;
    tf: Record<DifficultyLevel, number>;
  }
> {
  const result: Record<string, any> = {};

  topicIds.forEach((tId) => {
    result[tId] = {
      topicId: tId,
      total: 0,
      mc: { NhanBiet: 0, ThongHieu: 0, VanDung: 0, VanDungCao: 0 },
      tf: { NhanBiet: 0, ThongHieu: 0, VanDung: 0, VanDungCao: 0 },
    };
  });

  questions.forEach((q) => {
    if (!result[q.topicId]) return;
    const diff = (q.difficulty as DifficultyLevel) || "ThongHieu";
    result[q.topicId].total++;
    const isTf = q.type === "true_false" || (q.tfItems && q.tfItems.length > 0) || (q.statements && q.statements.length > 0);
    if (isTf) {
      result[q.topicId].tf[diff] = (result[q.topicId].tf[diff] || 0) + 1;
    } else {
      result[q.topicId].mc[diff] = (result[q.topicId].mc[diff] || 0) + 1;
    }
  });

  return result;
}
