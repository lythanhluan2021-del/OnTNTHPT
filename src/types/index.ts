export type DifficultyLevel = "NhanBiet" | "ThongHieu" | "VanDung" | "VanDungCao";

export type QuestionType = "multiple_choice" | "true_false";

export interface TrueFalseItem {
  id: "a" | "b" | "c" | "d";
  content: string;
  correctAnswer: boolean; // true: Đúng, false: Sai
}

export interface Question {
  id: string;
  subjectId: string;
  topicId: string;
  topicName: string;
  chapterName: string;
  difficulty: DifficultyLevel;
  type?: QuestionType; // 'multiple_choice' (mặc định) hoặc 'true_false'
  content: string; // Đề bài hoặc ngữ cảnh tình huống
  // Dành cho dạng trắc nghiệm 4 lựa chọn
  options?: {
    id: "A" | "B" | "C" | "D";
    content: string;
  }[];
  correctAnswer?: "A" | "B" | "C" | "D";
  // Dành cho dạng trắc nghiệm Đúng / Sai (Phần 2)
  tfItems?: TrueFalseItem[];
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
  mcCount?: number;
  tfCount?: number;
  hasTheory?: boolean;
}

export interface Subject {
  id: string;
  name: string;
  icon: string;
  driveUrl?: string; // Link file Google Sheets nằm trong thư mục môn đó
  topics: Topic[];
}

export interface StudentAttempt {
  id: string;
  studentId?: string;
  studentName?: string;
  className?: string;
  questionId: string;
  subjectId: string;
  topicId: string;
  selectedOption: "A" | "B" | "C" | "D" | null;
  selectedTF?: Record<string, boolean>; // Lưu đáp án học sinh chọn cho từng ý a, b, c, d
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

// =================== AUTH & QUẢN LÝ HỌC SINH ===================
export type UserRole = "admin" | "teacher" | "student";

export interface User {
  id: string;
  username: string;
  fullName: string;
  role: UserRole;
  className?: string;
  schoolYear?: string;
  isActive: boolean;
  createdAt: number;
  lastLoginAt?: number;
  password?: string; // Lưu ý chỉ dùng nội bộ server
}

export interface StudentProgressSummary {
  studentId: string;
  username: string;
  fullName: string;
  className: string;
  totalQuestionsAttempted: number;
  correctAnswers: number;
  accuracyRate: number; // 0 - 100%
  estimatedScore: number; // Thang điểm 10 THPT
  totalTimeMinutes: number;
  socraticHintsUsed: number;
  weakTopics: string[]; // Các chủ đề có tỷ lệ đúng < 50%
  completedWeeks: number[]; // Các tuần học đã làm bài
  lastActiveAt?: number;
  status: "XuatSac" | "Dat" | "CanCoGang" | "NguyCoYeu" | "ChuaThamGia";
}

export interface AdminDashboardOverview {
  totalStudents: number;
  activeStudents: number;
  averageScore: number;
  passRate: number; // Tỷ lệ >= 5.0đ
  targetPassRate: number; // 73% theo KH GD1
  targetAverageScore: number; // 6.00 theo KH GD1
  atRiskCount: number; // Số học sinh < 5.0đ
  classes: string[];
  recentActivities: {
    studentName: string;
    className: string;
    topicName: string;
    isCorrect: boolean;
    timestamp: number;
  }[];
}

