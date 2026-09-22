import fs from "fs";
import path from "path";
import { User, StudentAttempt, StudentProgressSummary, AdminDashboardOverview } from "@/types";

const DB_DIR = path.join(process.cwd(), "src", "data", "db");
const USERS_FILE = path.join(DB_DIR, "users.json");
const ATTEMPTS_FILE = path.join(DB_DIR, "attempts.json");

function ensureDirExists() {
  if (!fs.existsSync(DB_DIR)) {
    fs.mkdirSync(DB_DIR, { recursive: true });
  }
}

// Dữ liệu khởi tạo mặc định cho Admin và học sinh đại diện
const INITIAL_USERS: User[] = [
  {
    id: "usr-admin",
    username: "admin",
    fullName: "Thầy Lý Thành Luân (Quản trị viên)",
    role: "admin",
    isActive: true,
    password: "admin", // Hoặc thptnss2026
    createdAt: 1726000000000,
    lastLoginAt: Date.now(),
  },
  {
    id: "hs-12a1-01",
    username: "hs12a1_01",
    fullName: "Nguyễn Văn An",
    role: "student",
    className: "12A1",
    schoolYear: "2026-2027",
    isActive: true,
    password: "123",
    createdAt: 1726000000000,
    lastLoginAt: Date.now() - 3600000,
  },
  {
    id: "hs-12a1-02",
    username: "hs12a1_02",
    fullName: "Trần Thị Bích",
    role: "student",
    className: "12A1",
    schoolYear: "2026-2027",
    isActive: true,
    password: "123",
    createdAt: 1726000000000,
    lastLoginAt: Date.now() - 7200000,
  },
  {
    id: "hs-12a1-03",
    username: "hs12a1_03",
    fullName: "Lê Hoàng Long",
    role: "student",
    className: "12A1",
    schoolYear: "2026-2027",
    isActive: true,
    password: "123",
    createdAt: 1726000000000,
    lastLoginAt: Date.now() - 1800000,
  },
  {
    id: "hs-12a1-04",
    username: "hs12a1_04",
    fullName: "Phạm Minh Tuấn",
    role: "student",
    className: "12A1",
    schoolYear: "2026-2027",
    isActive: true,
    password: "123",
    createdAt: 1726000000000,
    lastLoginAt: Date.now() - 86400000,
  },
  {
    id: "hs-12a1-05",
    username: "hs12a1_05",
    fullName: "Võ Kim Ngân",
    role: "student",
    className: "12A1",
    schoolYear: "2026-2027",
    isActive: true,
    password: "123",
    createdAt: 1726000000000,
  },
  {
    id: "hs-12a2-01",
    username: "hs12a2_01",
    fullName: "Đặng Quốc Bảo",
    role: "student",
    className: "12A2",
    schoolYear: "2026-2027",
    isActive: true,
    password: "123",
    createdAt: 1726000000000,
    lastLoginAt: Date.now() - 14400000,
  },
  {
    id: "hs-12a2-02",
    username: "hs12a2_02",
    fullName: "Huỳnh Mỹ Duyên",
    role: "student",
    className: "12A2",
    schoolYear: "2026-2027",
    isActive: true,
    password: "123",
    createdAt: 1726000000000,
  },
  {
    id: "hs-12a3-01",
    username: "hs12a3_01",
    fullName: "Mai Tấn Tài",
    role: "student",
    className: "12A3",
    schoolYear: "2026-2027",
    isActive: true,
    password: "123",
    createdAt: 1726000000000,
    lastLoginAt: Date.now() - 28800000,
  },
  {
    id: "hs-12a3-02",
    username: "hs12a3_02",
    fullName: "Nguyễn Thùy Linh",
    role: "student",
    className: "12A3",
    schoolYear: "2026-2027",
    isActive: true,
    password: "123",
    createdAt: 1726000000000,
  },
];

// Dữ liệu làm bài mẫu khởi tạo
const INITIAL_ATTEMPTS: StudentAttempt[] = [
  // Nguyễn Văn An (12A1) - Học lực Xuất sắc
  { id: "att-01", studentId: "hs-12a1-01", studentName: "Nguyễn Văn An", className: "12A1", questionId: "Q-TIN-AI-01", subjectId: "tin-hoc-12", topicId: "tin-ai-tri-tue-nhan-tao", selectedOption: "A", isCorrect: true, hintsViewed: 0, socraticQuestionsAsked: 0, timeSpentSeconds: 25, timestamp: Date.now() - 3600000 },
  { id: "att-02", studentId: "hs-12a1-01", studentName: "Nguyễn Văn An", className: "12A1", questionId: "Q-TIN-AI-02", subjectId: "tin-hoc-12", topicId: "tin-ai-tri-tue-nhan-tao", selectedOption: "B", isCorrect: true, hintsViewed: 0, socraticQuestionsAsked: 0, timeSpentSeconds: 30, timestamp: Date.now() - 3500000 },
  { id: "att-03", studentId: "hs-12a1-01", studentName: "Nguyễn Văn An", className: "12A1", questionId: "Q-TIN-AI-03", subjectId: "tin-hoc-12", topicId: "tin-ai-tri-tue-nhan-tao", selectedOption: "C", isCorrect: true, hintsViewed: 1, socraticQuestionsAsked: 1, timeSpentSeconds: 45, timestamp: Date.now() - 3400000 },
  { id: "att-04", studentId: "hs-12a1-01", studentName: "Nguyễn Văn An", className: "12A1", questionId: "Q-TIN-PY-01", subjectId: "tin-hoc-12", topicId: "tin-lap-trinh-python", selectedOption: "B", isCorrect: true, hintsViewed: 0, socraticQuestionsAsked: 0, timeSpentSeconds: 20, timestamp: Date.now() - 3300000 },
  { id: "att-05", studentId: "hs-12a1-01", studentName: "Nguyễn Văn An", className: "12A1", questionId: "Q-TIN-PY-02", subjectId: "tin-hoc-12", topicId: "tin-lap-trinh-python", selectedOption: "A", isCorrect: true, hintsViewed: 0, socraticQuestionsAsked: 0, timeSpentSeconds: 15, timestamp: Date.now() - 3200000 },
  { id: "att-06", studentId: "hs-12a1-01", studentName: "Nguyễn Văn An", className: "12A1", questionId: "Q-TIN-PY-47", subjectId: "tin-hoc-12", topicId: "tin-lap-trinh-python", selectedOption: "B", isCorrect: true, hintsViewed: 0, socraticQuestionsAsked: 0, timeSpentSeconds: 25, timestamp: Date.now() - 3100000 },
  { id: "att-07", studentId: "hs-12a1-01", studentName: "Nguyễn Văn An", className: "12A1", questionId: "Q-TIN-NET-01", subjectId: "tin-hoc-12", topicId: "tin-thiet-bi-giao-thuc-mang", selectedOption: "A", isCorrect: true, hintsViewed: 0, socraticQuestionsAsked: 0, timeSpentSeconds: 30, timestamp: Date.now() - 3000000 },
  { id: "att-08", studentId: "hs-12a1-01", studentName: "Nguyễn Văn An", className: "12A1", questionId: "Q-TIN-NET-02", subjectId: "tin-hoc-12", topicId: "tin-thiet-bi-giao-thuc-mang", selectedOption: "C", isCorrect: true, hintsViewed: 0, socraticQuestionsAsked: 0, timeSpentSeconds: 22, timestamp: Date.now() - 2900000 },

  // Trần Thị Bích (12A1) - Đạt chuẩn khá
  { id: "att-09", studentId: "hs-12a1-02", studentName: "Trần Thị Bích", className: "12A1", questionId: "Q-TIN-AI-01", subjectId: "tin-hoc-12", topicId: "tin-ai-tri-tue-nhan-tao", selectedOption: "A", isCorrect: true, hintsViewed: 1, socraticQuestionsAsked: 0, timeSpentSeconds: 35, timestamp: Date.now() - 7200000 },
  { id: "att-10", studentId: "hs-12a1-02", studentName: "Trần Thị Bích", className: "12A1", questionId: "Q-TIN-AI-02", subjectId: "tin-hoc-12", topicId: "tin-ai-tri-tue-nhan-tao", selectedOption: "A", isCorrect: false, hintsViewed: 2, socraticQuestionsAsked: 1, timeSpentSeconds: 60, timestamp: Date.now() - 7100000 },
  { id: "att-11", studentId: "hs-12a1-02", studentName: "Trần Thị Bích", className: "12A1", questionId: "Q-TIN-PY-01", subjectId: "tin-hoc-12", topicId: "tin-lap-trinh-python", selectedOption: "B", isCorrect: true, hintsViewed: 0, socraticQuestionsAsked: 0, timeSpentSeconds: 25, timestamp: Date.now() - 7000000 },
  { id: "att-12", studentId: "hs-12a1-02", studentName: "Trần Thị Bích", className: "12A1", questionId: "Q-TIN-PY-47", subjectId: "tin-hoc-12", topicId: "tin-lap-trinh-python", selectedOption: "B", isCorrect: true, hintsViewed: 0, socraticQuestionsAsked: 0, timeSpentSeconds: 30, timestamp: Date.now() - 6900000 },

  // Lê Hoàng Long (12A1) - Chăm chỉ, tích cực
  { id: "att-13", studentId: "hs-12a1-03", studentName: "Lê Hoàng Long", className: "12A1", questionId: "Q-TIN-AI-26", subjectId: "tin-hoc-12", topicId: "tin-ai-tri-tue-nhan-tao", selectedOption: "C", isCorrect: true, hintsViewed: 0, socraticQuestionsAsked: 0, timeSpentSeconds: 20, timestamp: Date.now() - 1800000 },
  { id: "att-14", studentId: "hs-12a1-03", studentName: "Lê Hoàng Long", className: "12A1", questionId: "Q-TIN-NET-23", subjectId: "tin-hoc-12", topicId: "tin-thiet-bi-giao-thuc-mang", selectedOption: "C", isCorrect: true, hintsViewed: 0, socraticQuestionsAsked: 0, timeSpentSeconds: 18, timestamp: Date.now() - 1700000 },
  { id: "att-15", studentId: "hs-12a1-03", studentName: "Lê Hoàng Long", className: "12A1", questionId: "Q-TIN-NET-36", subjectId: "tin-hoc-12", topicId: "tin-thiet-bi-giao-thuc-mang", selectedOption: "D", isCorrect: true, hintsViewed: 1, socraticQuestionsAsked: 1, timeSpentSeconds: 40, timestamp: Date.now() - 1600000 },

  // Phạm Minh Tuấn (12A1) - Cần hỗ trợ phụ đạo (Điểm thấp)
  { id: "att-16", studentId: "hs-12a1-04", studentName: "Phạm Minh Tuấn", className: "12A1", questionId: "Q-TIN-PY-01", subjectId: "tin-hoc-12", topicId: "tin-lap-trinh-python", selectedOption: "A", isCorrect: false, hintsViewed: 1, socraticQuestionsAsked: 0, timeSpentSeconds: 50, timestamp: Date.now() - 86400000 },
  { id: "att-17", studentId: "hs-12a1-04", studentName: "Phạm Minh Tuấn", className: "12A1", questionId: "Q-TIN-PY-02", subjectId: "tin-hoc-12", topicId: "tin-lap-trinh-python", selectedOption: "C", isCorrect: false, hintsViewed: 2, socraticQuestionsAsked: 0, timeSpentSeconds: 65, timestamp: Date.now() - 86300000 },
  { id: "att-18", studentId: "hs-12a1-04", studentName: "Phạm Minh Tuấn", className: "12A1", questionId: "Q-TIN-PY-47", subjectId: "tin-hoc-12", topicId: "tin-lap-trinh-python", selectedOption: "A", isCorrect: false, hintsViewed: 2, socraticQuestionsAsked: 2, timeSpentSeconds: 80, timestamp: Date.now() - 86200000 },
  { id: "att-19", studentId: "hs-12a1-04", studentName: "Phạm Minh Tuấn", className: "12A1", questionId: "Q-TIN-AI-01", subjectId: "tin-hoc-12", topicId: "tin-ai-tri-tue-nhan-tao", selectedOption: "A", isCorrect: true, hintsViewed: 1, socraticQuestionsAsked: 0, timeSpentSeconds: 30, timestamp: Date.now() - 86100000 },

  // Đặng Quốc Bảo (12A2) - Khá tốt
  { id: "att-20", studentId: "hs-12a2-01", studentName: "Đặng Quốc Bảo", className: "12A2", questionId: "Q-TIN-NET-23", subjectId: "tin-hoc-12", topicId: "tin-thiet-bi-giao-thuc-mang", selectedOption: "C", isCorrect: true, hintsViewed: 0, socraticQuestionsAsked: 0, timeSpentSeconds: 22, timestamp: Date.now() - 14400000 },
  { id: "att-21", studentId: "hs-12a2-01", studentName: "Đặng Quốc Bảo", className: "12A2", questionId: "Q-TIN-NET-36", subjectId: "tin-hoc-12", topicId: "tin-thiet-bi-giao-thuc-mang", selectedOption: "D", isCorrect: true, hintsViewed: 0, socraticQuestionsAsked: 0, timeSpentSeconds: 26, timestamp: Date.now() - 14300000 },
];

export class StorageAdapter {
  static getUsers(): User[] {
    ensureDirExists();
    if (!fs.existsSync(USERS_FILE)) {
      fs.writeFileSync(USERS_FILE, JSON.stringify(INITIAL_USERS, null, 2), "utf-8");
      return INITIAL_USERS;
    }
    try {
      const data = fs.readFileSync(USERS_FILE, "utf-8");
      return JSON.parse(data);
    } catch {
      return INITIAL_USERS;
    }
  }

  static saveUsers(users: User[]) {
    ensureDirExists();
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2), "utf-8");
  }

  static getUserByUsername(username: string): User | undefined {
    const users = this.getUsers();
    return users.find((u) => u.username.toLowerCase() === username.trim().toLowerCase());
  }

  static getUserById(id: string): User | undefined {
    const users = this.getUsers();
    return users.find((u) => u.id === id);
  }

  static createUser(user: Omit<User, "id" | "createdAt">): User {
    const users = this.getUsers();
    const existing = users.find((u) => u.username.toLowerCase() === user.username.toLowerCase());
    if (existing) {
      throw new Error(`Tên đăng nhập "${user.username}" đã tồn tại trên hệ thống.`);
    }

    const newUser: User = {
      ...user,
      id: `usr-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`,
      createdAt: Date.now(),
      isActive: user.isActive !== undefined ? user.isActive : true,
    };

    users.push(newUser);
    this.saveUsers(users);
    return newUser;
  }

  static updateUser(id: string, updates: Partial<User>): User {
    const users = this.getUsers();
    const idx = users.findIndex((u) => u.id === id);
    if (idx === -1) {
      throw new Error(`Không tìm thấy người dùng có ID: ${id}`);
    }

    // Không cho phép trùng username
    if (updates.username) {
      const dup = users.find(
        (u) => u.id !== id && u.username.toLowerCase() === updates.username!.toLowerCase()
      );
      if (dup) {
        throw new Error(`Tên đăng nhập "${updates.username}" đã được sử dụng.`);
      }
    }

    const updated = { ...users[idx], ...updates };
    users[idx] = updated;
    this.saveUsers(users);
    return updated;
  }

  static deleteUser(id: string): boolean {
    const users = this.getUsers();
    const filtered = users.filter((u) => u.id !== id);
    if (filtered.length !== users.length) {
      this.saveUsers(filtered);
      return true;
    }
    return false;
  }

  // =================== ATTEMPTS / TIẾN ĐỘ HỌC TẬP ===================

  static getAttempts(studentId?: string): StudentAttempt[] {
    ensureDirExists();
    if (!fs.existsSync(ATTEMPTS_FILE)) {
      fs.writeFileSync(ATTEMPTS_FILE, JSON.stringify(INITIAL_ATTEMPTS, null, 2), "utf-8");
      return studentId ? INITIAL_ATTEMPTS.filter((a) => a.studentId === studentId) : INITIAL_ATTEMPTS;
    }
    try {
      const data = fs.readFileSync(ATTEMPTS_FILE, "utf-8");
      const attempts: StudentAttempt[] = JSON.parse(data);
      return studentId ? attempts.filter((a) => a.studentId === studentId) : attempts;
    } catch {
      return INITIAL_ATTEMPTS;
    }
  }

  static saveAttempt(attempt: StudentAttempt) {
    ensureDirExists();
    const attempts = this.getAttempts();
    attempts.push(attempt);
    fs.writeFileSync(ATTEMPTS_FILE, JSON.stringify(attempts, null, 2), "utf-8");
  }

  static saveAttemptsBatch(newAttempts: StudentAttempt[]) {
    ensureDirExists();
    const attempts = this.getAttempts();
    // Tránh duplicate theo ID
    const existingIds = new Set(attempts.map((a) => a.id));
    const toAdd = newAttempts.filter((a) => !existingIds.has(a.id));
    if (toAdd.length > 0) {
      attempts.push(...toAdd);
      fs.writeFileSync(ATTEMPTS_FILE, JSON.stringify(attempts, null, 2), "utf-8");
    }
  }

  // =================== AGGREGATIONS & PROGRESS ===================

  static getStudentProgressSummaries(className?: string): StudentProgressSummary[] {
    const users = this.getUsers().filter((u) => u.role === "student");
    const filteredUsers = className && className !== "all"
      ? users.filter((u) => u.className === className)
      : users;

    const allAttempts = this.getAttempts();

    return filteredUsers.map((student) => {
      const studentAttempts = allAttempts.filter((a) => a.studentId === student.id);
      const totalQuestionsAttempted = studentAttempts.length;
      const correctAnswers = studentAttempts.filter((a) => a.isCorrect).length;
      const accuracyRate =
        totalQuestionsAttempted > 0
          ? Math.round((correctAnswers / totalQuestionsAttempted) * 100)
          : 0;

      // Tính điểm THPT ước tính trên thang điểm 10
      const estimatedScore =
        totalQuestionsAttempted > 0
          ? Number(((correctAnswers / totalQuestionsAttempted) * 10).toFixed(1))
          : 0;

      const totalTimeMinutes = Math.round(
        studentAttempts.reduce((sum, a) => sum + (a.timeSpentSeconds || 0), 0) / 60
      );

      const socraticHintsUsed = studentAttempts.reduce(
        (sum, a) => sum + (a.hintsViewed || 0) + (a.socraticQuestionsAsked || 0),
        0
      );

      // Phân tích chủ đề yếu (< 50% đúng)
      const topicStats: Record<string, { total: number; correct: number }> = {};
      studentAttempts.forEach((a) => {
        if (!topicStats[a.topicId]) topicStats[a.topicId] = { total: 0, correct: 0 };
        topicStats[a.topicId].total++;
        if (a.isCorrect) topicStats[a.topicId].correct++;
      });

      const weakTopics: string[] = [];
      Object.entries(topicStats).forEach(([tid, st]) => {
        if (st.total >= 2 && st.correct / st.total < 0.5) {
          weakTopics.push(tid);
        }
      });

      const lastAttempt = studentAttempts.sort((a, b) => b.timestamp - a.timestamp)[0];

      // Đánh giá xếp loại trạng thái
      let status: StudentProgressSummary["status"] = "ChuaThamGia";
      if (totalQuestionsAttempted === 0) {
        status = "ChuaThamGia";
      } else if (estimatedScore >= 8.0) {
        status = "XuatSac";
      } else if (estimatedScore >= 5.0) {
        status = "Dat";
      } else if (estimatedScore >= 3.5) {
        status = "CanCoGang";
      } else {
        status = "NguyCoYeu";
      }

      return {
        studentId: student.id,
        username: student.username,
        fullName: student.fullName,
        className: student.className || "12A1",
        totalQuestionsAttempted,
        correctAnswers,
        accuracyRate,
        estimatedScore,
        totalTimeMinutes,
        socraticHintsUsed,
        weakTopics,
        completedWeeks: [2, 3, 7], // Mẫu các tuần hoàn thành
        lastActiveAt: lastAttempt ? lastAttempt.timestamp : student.lastLoginAt,
        status,
      };
    });
  }

  static getAdminDashboardOverview(className?: string): AdminDashboardOverview {
    const students = this.getStudentProgressSummaries(className);
    const users = this.getUsers().filter((u) => u.role === "student");
    const activeStudents = students.filter((s) => s.totalQuestionsAttempted > 0).length;

    const participated = students.filter((s) => s.totalQuestionsAttempted > 0);
    const averageScore =
      participated.length > 0
        ? Number((participated.reduce((sum, s) => sum + s.estimatedScore, 0) / participated.length).toFixed(2))
        : 0;

    const passed = participated.filter((s) => s.estimatedScore >= 5.0).length;
    const passRate =
      participated.length > 0 ? Math.round((passed / participated.length) * 100) : 0;

    const atRiskCount = participated.filter((s) => s.estimatedScore < 5.0).length;

    // Lấy danh sách lớp duy nhất
    const classSet = new Set<string>();
    users.forEach((u) => {
      if (u.className) classSet.add(u.className);
    });
    const classes = Array.from(classSet).sort();

    // Lấy hoạt động gần đây
    const attempts = this.getAttempts().sort((a, b) => b.timestamp - a.timestamp).slice(0, 10);
    const recentActivities = attempts.map((a) => ({
      studentName: a.studentName || "Học sinh",
      className: a.className || "12A1",
      topicName: a.topicId,
      isCorrect: a.isCorrect,
      timestamp: a.timestamp,
    }));

    return {
      totalStudents: users.length,
      activeStudents,
      averageScore,
      passRate,
      targetPassRate: 73, // 73% theo KH ON TAP GD1_MOI.docx
      targetAverageScore: 6.0, // 6.00 điểm theo KH ON TAP GD1_MOI.docx
      atRiskCount,
      classes,
      recentActivities,
    };
  }
}
