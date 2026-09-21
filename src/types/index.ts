export type DifficultyLevel = "NhanBiet" | "ThongHieu" | "VanDung" | "VanDungCao";

export interface Question {
  id: string;
  subjectId: string;
  topicId: string;
  topicName: string;
  chapterName: string;
  difficulty: DifficultyLevel;
  content: string; // May include LaTeX: \( f(x) = x^3 - 3x \)
  options: {
    id: "A" | "B" | "C" | "D";
    content: string;
  }[];
  correctAnswer: "A" | "B" | "C" | "D";
  hints: {
    level1_concept: string; // Lý thuyết, định lý cốt lõi
    level2_formula: string; // Công thức và phương pháp tiếp cận
    level3_steps: string;   // Dẫn dắt từng bước suy luận (không nêu kết quả)
  };
  explanation?: string; // Lời giải chi tiết (chỉ mở sau khi học sinh đã hoàn thành)
  sourceDocId?: string; // ID tài liệu Google Drive cung cấp
  sourceDocTitle?: string;
}

export interface Topic {
  id: string;
  name: string;
  subjectId: string;
  chapter: string;
  totalQuestions: number;
}

export interface Subject {
  id: string;
  name: string;
  icon: string;
  topics: Topic[];
}

export interface StudentAttempt {
  id: string;
  questionId: string;
  subjectId: string;
  topicId: string;
  selectedOption: "A" | "B" | "C" | "D" | null;
  isCorrect: boolean;
  hintsViewed: number; // 0, 1, 2, 3
  socraticQuestionsAsked: number;
  timeSpentSeconds: number;
  timestamp: number;
}

export interface TopicAnalytics {
  topicId: string;
  topicName: string;
  chapterName: string;
  totalAnswered: number;
  correctCount: number;
  accuracyRate: number; // 0 -> 100
  averageHintsUsed: number;
  weakPoints: string[]; // Các dạng kiến thức chưa đạt
  status: "Dat" | "CanLuyenTap" | "ChuaDat";
}

export interface SocraticMessage {
  id: string;
  sender: "student" | "tutor" | "system";
  text: string;
  timestamp: number;
}

export interface DriveSyncStatus {
  lastSyncedAt?: number;
  sheetUrl?: string;
  totalImported: number;
  status: "idle" | "syncing" | "success" | "error";
  message?: string;
}
