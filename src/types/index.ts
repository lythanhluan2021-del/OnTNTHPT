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
  isCloudConnected?: boolean;
}

// =================== KẾ HOẠCH ÔN TẬP THEO TUẦN (GD1) ===================
export interface WeekPlanItem {
  id: string; // e.g. "tuan-02-06", "tuan-07", etc.
  weekDisplay: string; // "Tuần 2 – 6", "Tuần 7", ...
  weekNumber: number; // Tuần bắt đầu (2, 7, 8, ...)
  weekNumbers: number[]; // [2, 3, 4, 5, 6] hoặc [7]
  title: string; // "Luyện tập NNLT Python", "Giới thiệu Trí tuệ Nhân tạo", ...
  chapter: string; // "Phần 1: Luyện tập NNLT Python (Tuần 2 – 6)"
  periods: number; // Số tiết (ví dụ: 10, 2, 6)
  topicIds: string[]; // ['tin-lap-trinh-python']
  subjectId: string; // 'tin-hoc-12'
  semester: 1 | 2;
  totalTargetQuestions: number; // Tổng số câu hỏi chỉ tiêu của tuần
}

export interface StudentWeeklyProgress {
  studentId: string;
  username: string;
  fullName: string;
  className: string;
  weekId: string;
  questionsAttempted: number;
  totalWeekQuestions: number;
  correctAnswers: number;
  accuracyRate: number; // 0 - 100%
  score: number; // Thang điểm 10
  timeSpentMinutes: number;
  hintsUsed: number;
  status: "HoanThanh" | "DangLam" | "ChuaThamGia";
  lastActiveAt?: number;
}

export interface WeeklyProgressOverview {
  week: WeekPlanItem;
  totalStudents: number;
  participatedCount: number; // Số HS đã làm ít nhất 1 câu
  completedCount: number; // Số HS đã hoàn thành >= 80% câu hỏi tuần
  completionRate: number; // (completedCount / totalStudents) * 100
  averageScore: number; // Điểm trung bình tuần của các HS đã tham gia
  passRate: number; // Tỷ lệ HS đạt >= 5.0đ trong tuần
  atRiskCount: number; // Số HS < 5.0đ trong tuần
  notStartedCount: number; // Số HS chưa làm câu nào của tuần
  students: StudentWeeklyProgress[];
}

export interface WeeklyMatrixRow {
  studentId: string;
  username: string;
  fullName: string;
  className: string;
  weeks: Record<
    string,
    {
      status: "HoanThanh" | "DangLam" | "ChuaThamGia";
      score: number;
      completedCount: number;
      totalCount: number;
    }
  >;
  totalCompletedWeeks: number;
}

export type ThemeMode = "light" | "dark";

export interface MockExamQuestion extends Question {
  examIndex: number;
  part: "mc" | "tf";
}

export interface MockExam {
  id: string;
  title: string;
  subjectId: string;
  durationMinutes: number;
  totalQuestions: number;
  questions: MockExamQuestion[];
  createdAt: number;
}

export interface ExamAnswerState {
  mcAnswers: Record<string, "A" | "B" | "C" | "D" | null>;
  tfAnswers: Record<string, Record<string, boolean | null>>;
  flaggedQuestions: Record<string, boolean>;
}

export interface ExamResult {
  examId: string;
  examTitle: string;
  studentName: string;
  className?: string;
  startTime: number;
  endTime: number;
  timeSpentSeconds: number;
  tabSwitchCount: number;
  mcScore: number;
  tfScore: number;
  totalScore: number;
  totalCorrectMc: number;
  totalCorrectTfStatements: number;
  details: {
    questionId: string;
    type: "multiple_choice" | "true_false";
    studentAnswer: any;
    correctAnswer: any;
    isCorrect: boolean;
    earnedScore: number;
    maxScore: number;
  }[];
}

// =================== ĐÁNH GIÁ NĂNG LỰC TIN HỌC GDPT 2018 ===================
export type CompetencyCode = "NLa" | "NLb" | "NLc" | "NLd" | "NLe";

export interface CompetencyScore {
  code: CompetencyCode;
  shortName: string;
  fullName: string;
  description: string;
  score: number; // 0 - 100%
  totalAttempted: number;
  correctCount: number;
  status: "XuatSac" | "Dat" | "CanLuyenTap" | "ChuaThamGia";
  recommendedTopicId: string;
  recommendedTopicName: string;
  actionAdvice: string;
}

export * from "./examManagement";



