import { Question, DifficultyLevel, MockExamQuestion } from "./index";

export type ExamStatus = "draft" | "published" | "closed";
export type ExamSourceType = "uploaded_file" | "matrix_bank" | "manual";

export interface AntiCheatConfig {
  enableFullscreen: boolean; // Bắt buộc chế độ toàn màn hình
  maxViolations: number; // Số lần vi phạm (chuyển tab/thoát màn hình) tối đa trước khi tự đình chỉ/nộp bài (mặc định: 3)
  blockCopyPaste: boolean; // Khóa chuột phải, bôi đen văn bản, Ctrl+C, Ctrl+V, F12 DevTools
  autoSubmitOnTimeout: boolean; // Tự động nộp bài khi hết giờ đếm ngược
}

export interface ExamMatrixLevelConfig {
  NhanBiet: number;
  ThongHieu: number;
  VanDung: number;
  VanDungCao: number;
}

export interface ExamMatrixConfig {
  selectedTopicIds: string[];
  mcCountByLevel: ExamMatrixLevelConfig;
  tfCountByLevel: ExamMatrixLevelConfig;
  shuffleQuestions: boolean;
  shuffleOptions: boolean;
}

export interface ExamDefinition {
  id: string;
  title: string;
  subjectId: string;
  description?: string;
  durationMinutes: number; // 15, 45, 50, 90...
  targetClasses: string[]; // ["12A1", "12A2"] hoặc ["all"]
  status: ExamStatus;
  sourceType: ExamSourceType;
  examPassword?: string; // Mật khẩu vào phòng thi (nếu có)
  antiCheatConfig: AntiCheatConfig;
  matrixConfig?: ExamMatrixConfig;
  totalQuestions: number;
  mcCount: number;
  tfCount: number;
  questions: MockExamQuestion[];
  createdAt: number;
  updatedAt: number;
  publishedAt?: number;
  closedAt?: number;
}

export interface ViolationEvent {
  timestamp: number;
  type: "tab_switch" | "fullscreen_exit" | "window_blur" | "copy_attempt" | "devtools_attempt";
  description: string;
}

export interface ExamSubmissionDetail {
  questionId: string;
  type: "multiple_choice" | "true_false";
  studentAnswer: any;
  correctAnswer: any;
  isCorrect: boolean;
  earnedScore: number;
  maxScore: number;
}

export interface ExamSubmission {
  id: string;
  examId: string;
  examTitle: string;
  studentId: string;
  studentName: string;
  className: string;
  startTime: number;
  submitTime: number;
  timeSpentSeconds: number;
  tabSwitchCount: number;
  violations: ViolationEvent[];
  isDisqualified: boolean; // Bị đình chỉ thi do vi phạm quy chế
  disqualifiedReason?: string;
  isAutoSubmitted: boolean; // Nộp bài do hết giờ hoặc do vi phạm
  mcScore: number; // Điểm phần 1
  tfScore: number; // Điểm phần 2
  totalScore: number; // Thang điểm 10 chuẩn Bộ GD&ĐT
  totalCorrectMc: number;
  totalCorrectTfStatements: number;
  details: ExamSubmissionDetail[];
}

export interface ExamStatsReport {
  examId: string;
  examTitle: string;
  totalParticipants: number;
  submittedCount: number;
  disqualifiedCount: number;
  averageScore: number;
  highestScore: number;
  lowestScore: number;
  passRate: number; // Tỷ lệ >= 5.0đ
  excellentRate: number; // Tỷ lệ >= 8.0đ
  scoreDistribution: {
    under5: number;
    from5to65: number;
    from65to8: number;
    from8to10: number;
  };
  itemAnalysis: {
    questionIndex: number;
    questionId: string;
    content: string;
    type: "multiple_choice" | "true_false";
    correctCount: number;
    accuracyRate: number; // % HS làm đúng
    topicName?: string;
    difficulty: DifficultyLevel;
  }[];
}
