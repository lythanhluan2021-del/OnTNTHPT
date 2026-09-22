import fs from "fs";
import path from "path";
import os from "os";
import { Redis } from "@upstash/redis";
import {
  User,
  StudentAttempt,
  StudentProgressSummary,
  AdminDashboardOverview,
  WeekPlanItem,
  StudentWeeklyProgress,
  WeeklyProgressOverview,
  WeeklyMatrixRow,
} from "@/types";
import { WEEKLY_PLAN, getAllWeeklyPlans, getWeeklyPlanById } from "@/data/weeklyPlan";

const IS_SERVERLESS = Boolean(
  process.env.VERCEL ||
  process.env.AWS_LAMBDA_FUNCTION_NAME ||
  (typeof process.cwd === "function" && process.cwd().startsWith("/var/task"))
);

const TMP_DB_DIR = path.join(os.tmpdir(), "ontnthpt-db");
const LOCAL_DB_DIR = path.join(process.cwd(), "src", "data", "db");

// Bộ nhớ đệm toàn cục duy trì dữ liệu trên Serverless và kết nối Redis
const globalForStorage = globalThis as unknown as {
  ontnUsersCache?: User[];
  ontnAttemptsCache?: StudentAttempt[];
  ontnRedisClient?: Redis | null;
};

// Tự động nhận diện linh hoạt mọi tiền tố do Vercel sinh ra (KV_, STORAGE_, UPSTASH_)
function getRedisCredentials(): { url?: string; token?: string } {
  let url =
    process.env.KV_REST_API_URL ||
    process.env.UPSTASH_REDIS_REST_URL ||
    process.env.STORAGE_REST_API_URL ||
    process.env.STORAGE_KV_REST_API_URL ||
    process.env.STORAGE_URL;

  let token =
    process.env.KV_REST_API_TOKEN ||
    process.env.UPSTASH_REDIS_REST_TOKEN ||
    process.env.STORAGE_REST_API_TOKEN ||
    process.env.STORAGE_KV_REST_API_TOKEN ||
    process.env.STORAGE_TOKEN;

  if (!url || !token) {
    for (const [k, v] of Object.entries(process.env)) {
      if (typeof v === "string" && v.startsWith("https://")) {
        if (k.includes("REST_API_URL") || k.includes("REDIS_REST_URL") || k.includes("KV_REST_URL")) {
          url = url || v.trim();
        }
      }
      if (typeof v === "string" && (k.includes("REST_API_TOKEN") || k.includes("REDIS_TOKEN") || k.includes("KV_TOKEN"))) {
        if (!k.includes("READ_ONLY")) {
          token = token || v.trim();
        }
      }
    }
  }

  return { url, token };
}

// Khởi tạo Upstash Redis Client
function getRedisClient(): Redis | null {
  if (globalForStorage.ontnRedisClient !== undefined) {
    return globalForStorage.ontnRedisClient;
  }

  const { url, token } = getRedisCredentials();

  if (url && token) {
    try {
      globalForStorage.ontnRedisClient = new Redis({
        url: url.trim(),
        token: token.trim(),
      });
      console.log("[StorageAdapter] 🟢 Đã kết nối thành công tới Đám mây Upstash Redis!");
    } catch (e) {
      console.warn("[StorageAdapter] ⚠️ Khởi tạo Upstash Redis thất bại, chuyển về fallback:", e);
      globalForStorage.ontnRedisClient = null;
    }
  } else {
    globalForStorage.ontnRedisClient = null;
  }

  return globalForStorage.ontnRedisClient;
}

function safeReadJson<T>(filePath: string): T | null {
  try {
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, "utf-8");
      return JSON.parse(data) as T;
    }
  } catch {
    // Bỏ qua lỗi đọc file
  }
  return null;
}

function safeWriteJson(dirPath: string, filePath: string, data: any): boolean {
  try {
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
    return true;
  } catch {
    // Bỏ qua lỗi ghi trên hệ thống tệp Read-Only (Vercel /var/task), dữ liệu vẫn duy trì ở in-memory
    return false;
  }
}

// Dữ liệu khởi tạo mặc định cho Admin (Không tạo học sinh giả lập)
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
];

// Dữ liệu làm bài mặc định ban đầu (rỗng, sẵn sàng đón học sinh làm bài thật)
const INITIAL_ATTEMPTS: StudentAttempt[] = [];

// Helper so khớp lượt làm bài với học sinh linh hoạt và chính xác
export function matchStudentAttempt(attempt: StudentAttempt, student: User): boolean {
  if (attempt.studentId) {
    if (
      attempt.studentId === student.id ||
      attempt.studentId.toLowerCase() === student.username.toLowerCase()
    ) {
      return true;
    }
  }
  if (attempt.studentName && student.fullName) {
    if (attempt.studentName.trim().toLowerCase() === student.fullName.trim().toLowerCase()) {
      if (!attempt.className || !student.className || attempt.className === student.className) {
        return true;
      }
    }
  }
  return false;
}

export class StorageAdapter {
  static isCloudConnected(): boolean {
    return Boolean(getRedisClient());
  }

  static async getUsers(): Promise<User[]> {
    const redis = getRedisClient();

    // 1. Nếu có Upstash Redis, ưu tiên đọc trực tiếp từ Đám Mây thời gian thực
    if (redis) {
      try {
        const remoteUsers = await redis.get<User[]>("thpt:users");
        if (remoteUsers && Array.isArray(remoteUsers) && remoteUsers.length > 0) {
          // Tự động dọn dẹp các tài khoản học sinh mẫu (mock data cũ) nếu còn sót lại trong Redis
          const mockUserIds = new Set([
            "hs-12a1-01", "hs-12a1-02", "hs-12a1-03", "hs-12a1-04", "hs-12a1-05",
            "hs-12a2-01", "hs-12a2-02", "hs-12a3-01", "hs-12a3-02",
          ]);
          const hasMock = remoteUsers.some(
            (u) => mockUserIds.has(u.id) || (u.username.startsWith("hs12a") && u.createdAt === 1726000000000)
          );
          if (hasMock) {
            const cleanedUsers = remoteUsers.filter(
              (u) => !mockUserIds.has(u.id) && !(u.username.startsWith("hs12a") && u.createdAt === 1726000000000)
            );
            if (!cleanedUsers.some((u) => u.role === "admin")) {
              cleanedUsers.unshift(INITIAL_USERS[0]);
            }
            await redis.set("thpt:users", cleanedUsers);
            globalForStorage.ontnUsersCache = cleanedUsers;
            return cleanedUsers;
          }

          globalForStorage.ontnUsersCache = remoteUsers;
          return remoteUsers;
        } else {
          // Lần đầu cắm Redis: Khởi tạo danh sách mặc định lên Redis (chỉ có Admin)
          await redis.set("thpt:users", INITIAL_USERS);
          globalForStorage.ontnUsersCache = INITIAL_USERS;
          return INITIAL_USERS;
        }
      } catch (err) {
        console.warn("[StorageAdapter] ⚠️ Lỗi đọc từ Upstash Redis, dùng bộ nhớ đệm:", err);
      }
    }

    // 2. Nếu đã có trong RAM cache
    if (globalForStorage.ontnUsersCache && globalForStorage.ontnUsersCache.length > 0) {
      return globalForStorage.ontnUsersCache;
    }

    // 3. Đọc từ thư mục /tmp (Serverless)
    const tmpUsers = safeReadJson<User[]>(path.join(TMP_DB_DIR, "users.json"));
    if (tmpUsers && Array.isArray(tmpUsers) && tmpUsers.length > 0) {
      globalForStorage.ontnUsersCache = tmpUsers;
      return tmpUsers;
    }

    // 4. Đọc từ tệp dự án (cho phép đọc Read-Only trên Vercel /var/task)
    const localUsers = safeReadJson<User[]>(path.join(LOCAL_DB_DIR, "users.json"));
    if (localUsers && Array.isArray(localUsers) && localUsers.length > 0) {
      globalForStorage.ontnUsersCache = localUsers;
      safeWriteJson(TMP_DB_DIR, path.join(TMP_DB_DIR, "users.json"), localUsers);
      return localUsers;
    }

    // 5. Dự phòng danh sách mẫu ban đầu
    globalForStorage.ontnUsersCache = [...INITIAL_USERS];
    safeWriteJson(TMP_DB_DIR, path.join(TMP_DB_DIR, "users.json"), INITIAL_USERS);
    if (!IS_SERVERLESS) {
      safeWriteJson(LOCAL_DB_DIR, path.join(LOCAL_DB_DIR, "users.json"), INITIAL_USERS);
    }
    return globalForStorage.ontnUsersCache;
  }

  static async saveUsers(users: User[]): Promise<void> {
    globalForStorage.ontnUsersCache = [...users];

    // 1. Lưu vào Đám Mây Upstash Redis nếu có kết nối
    const redis = getRedisClient();
    if (redis) {
      try {
        await redis.set("thpt:users", users);
      } catch (err) {
        console.warn("[StorageAdapter] ⚠️ Lỗi lưu users lên Upstash Redis:", err);
      }
    }

    // 2. Ghi dự phòng vào /tmp
    safeWriteJson(TMP_DB_DIR, path.join(TMP_DB_DIR, "users.json"), users);

    // 3. Ghi vào LOCAL_DB_DIR nếu không phải serverless
    if (!IS_SERVERLESS) {
      safeWriteJson(LOCAL_DB_DIR, path.join(LOCAL_DB_DIR, "users.json"), users);
    }
  }

  static async getUserByUsername(username: string): Promise<User | undefined> {
    const users = await this.getUsers();
    return users.find((u) => u.username.toLowerCase() === username.trim().toLowerCase());
  }

  static async getUserById(id: string): Promise<User | undefined> {
    const users = await this.getUsers();
    return users.find((u) => u.id === id);
  }

  static async createUser(user: Omit<User, "id" | "createdAt">): Promise<User> {
    const users = await this.getUsers();
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
    await this.saveUsers(users);
    return newUser;
  }

  static async updateUser(id: string, updates: Partial<User>): Promise<User> {
    const users = await this.getUsers();
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
    await this.saveUsers(users);
    return updated;
  }

  static async deleteUser(id: string): Promise<boolean> {
    const users = await this.getUsers();
    const filtered = users.filter((u) => u.id !== id);
    if (filtered.length !== users.length) {
      await this.saveUsers(filtered);
      return true;
    }
    return false;
  }

  // =================== ATTEMPTS / TIẾN ĐỘ HỌC TẬP ===================

  static async getAttempts(studentId?: string): Promise<StudentAttempt[]> {
    const redis = getRedisClient();
    let allAttempts: StudentAttempt[] | null = null;

    // 1. Đọc từ Upstash Redis nếu có kết nối
    if (redis) {
      try {
        const remoteAttempts = await redis.get<StudentAttempt[]>("thpt:attempts");
        if (remoteAttempts && Array.isArray(remoteAttempts)) {
          // Tự động dọn dẹp các lượt làm bài mock data cũ (CHỈ lọc các ID mock thử nghiệm)
          const mockUserIds = new Set([
            "hs-12a1-01", "hs-12a1-02", "hs-12a1-03", "hs-12a1-04", "hs-12a1-05",
            "hs-12a2-01", "hs-12a2-02", "hs-12a3-01", "hs-12a3-02",
          ]);
          const hasMock = remoteAttempts.some(
            (a) => a.id.startsWith("att-mock-") || (a.studentId ? mockUserIds.has(a.studentId) : false)
          );
          if (hasMock) {
            const cleanedAttempts = remoteAttempts.filter(
              (a) => !a.id.startsWith("att-mock-") && !(a.studentId && mockUserIds.has(a.studentId))
            );
            await redis.set("thpt:attempts", cleanedAttempts);
            globalForStorage.ontnAttemptsCache = cleanedAttempts;
            return studentId
              ? cleanedAttempts.filter(
                  (a) => a.studentId === studentId || (a.studentName && a.studentName.toLowerCase() === studentId.toLowerCase())
                )
              : cleanedAttempts;
          }

          allAttempts = remoteAttempts;
        } else {
          // Khởi tạo attempts rỗng lên Redis
          await redis.set("thpt:attempts", INITIAL_ATTEMPTS);
          allAttempts = INITIAL_ATTEMPTS;
        }
        globalForStorage.ontnAttemptsCache = allAttempts;
      } catch (err) {
        console.warn("[StorageAdapter] ⚠️ Lỗi đọc attempts từ Upstash Redis:", err);
      }
    }

    if (!allAttempts) {
      if (globalForStorage.ontnAttemptsCache) {
        allAttempts = globalForStorage.ontnAttemptsCache;
      } else {
        const tmpAttempts = safeReadJson<StudentAttempt[]>(path.join(TMP_DB_DIR, "attempts.json"));
        if (tmpAttempts && Array.isArray(tmpAttempts)) {
          allAttempts = tmpAttempts;
        } else {
          const localAttempts = safeReadJson<StudentAttempt[]>(path.join(LOCAL_DB_DIR, "attempts.json"));
          if (localAttempts && Array.isArray(localAttempts)) {
            allAttempts = localAttempts;
          } else {
            allAttempts = [...INITIAL_ATTEMPTS];
          }
        }
        globalForStorage.ontnAttemptsCache = allAttempts;
      }
    }

    return studentId
      ? allAttempts.filter(
          (a) =>
            a.studentId === studentId ||
            (a.studentName && a.studentName.toLowerCase() === studentId.toLowerCase())
        )
      : allAttempts;
  }

  static async saveAttempt(attempt: StudentAttempt): Promise<void> {
    const attempts = await this.getAttempts();
    const updated = [...attempts, attempt];
    globalForStorage.ontnAttemptsCache = updated;

    // Lưu vào Upstash Redis
    const redis = getRedisClient();
    if (redis) {
      try {
        await redis.set("thpt:attempts", updated);
      } catch (err) {
        console.warn("[StorageAdapter] ⚠️ Lỗi lưu attempt lên Upstash Redis:", err);
      }
    }

    // Dự phòng /tmp và cục bộ
    safeWriteJson(TMP_DB_DIR, path.join(TMP_DB_DIR, "attempts.json"), updated);
    if (!IS_SERVERLESS) {
      safeWriteJson(LOCAL_DB_DIR, path.join(LOCAL_DB_DIR, "attempts.json"), updated);
    }
  }

  static async saveAttemptsBatch(newAttempts: StudentAttempt[]): Promise<void> {
    const attempts = await this.getAttempts();
    const existingIds = new Set(attempts.map((a) => a.id));
    const toAdd = newAttempts.filter((a) => !existingIds.has(a.id));
    if (toAdd.length > 0) {
      const updated = [...attempts, ...toAdd];
      globalForStorage.ontnAttemptsCache = updated;

      const redis = getRedisClient();
      if (redis) {
        try {
          await redis.set("thpt:attempts", updated);
        } catch (err) {
          console.warn("[StorageAdapter] ⚠️ Lỗi lưu attempts batch lên Upstash Redis:", err);
        }
      }

      safeWriteJson(TMP_DB_DIR, path.join(TMP_DB_DIR, "attempts.json"), updated);
      if (!IS_SERVERLESS) {
        safeWriteJson(LOCAL_DB_DIR, path.join(LOCAL_DB_DIR, "attempts.json"), updated);
      }
    }
  }

  // =================== RESET & DỌN DẸP DỮ LIỆU ===================

  /**
   * Dọn sạch toàn bộ dữ liệu học sinh & bài làm thử nghiệm, bảo lưu tài khoản Quản trị viên (Admin)
   */
  static async resetMockData(purgeAllStudents: boolean = true): Promise<{ success: boolean; message: string; remainingUsers: number }> {
    const currentUsers = await this.getUsers();
    // Luôn bảo lưu tài khoản admin
    let adminUsers = currentUsers.filter((u) => u.role === "admin");
    if (adminUsers.length === 0) {
      adminUsers = [INITIAL_USERS[0]];
    }

    let finalUsers: User[];
    let finalAttempts: StudentAttempt[];

    if (purgeAllStudents) {
      // Xóa toàn bộ học sinh để thầy nạp lại từ đầu
      finalUsers = adminUsers;
      finalAttempts = [];
    } else {
      // Chỉ dọn các học sinh mẫu mock data cũ
      const mockIds = new Set([
        "hs-12a1-01", "hs-12a1-02", "hs-12a1-03", "hs-12a1-04", "hs-12a1-05",
        "hs-12a2-01", "hs-12a2-02", "hs-12a3-01", "hs-12a3-02",
      ]);
      finalUsers = currentUsers.filter(
        (u) => u.role === "admin" || !mockIds.has(u.id)
      );
      const allAttempts = await this.getAttempts();
      finalAttempts = allAttempts.filter(
        (a) => !a.id.startsWith("att-mock-") && !(a.studentId && mockIds.has(a.studentId))
      );
    }

    // Ghi đè RAM cache
    globalForStorage.ontnUsersCache = finalUsers;
    globalForStorage.ontnAttemptsCache = finalAttempts;

    // Ghi đè Upstash Redis nếu có kết nối
    const redis = getRedisClient();
    if (redis) {
      try {
        await redis.set("thpt:users", finalUsers);
        await redis.set("thpt:attempts", finalAttempts);
      } catch (err) {
        console.warn("[StorageAdapter] ⚠️ Lỗi ghi reset lên Upstash Redis:", err);
      }
    }

    // Ghi dự phòng vào /tmp
    safeWriteJson(TMP_DB_DIR, path.join(TMP_DB_DIR, "users.json"), finalUsers);
    safeWriteJson(TMP_DB_DIR, path.join(TMP_DB_DIR, "attempts.json"), finalAttempts);

    // Ghi vào local nếu đang ở môi trường phát triển cục bộ
    if (!IS_SERVERLESS) {
      safeWriteJson(LOCAL_DB_DIR, path.join(LOCAL_DB_DIR, "users.json"), finalUsers);
      safeWriteJson(LOCAL_DB_DIR, path.join(LOCAL_DB_DIR, "attempts.json"), finalAttempts);
    }

    return {
      success: true,
      message: purgeAllStudents
        ? "Đã dọn sạch toàn bộ dữ liệu học sinh và bài làm mẫu. Hệ thống sẵn sàng tiếp nhận tài khoản học sinh mới!"
        : "Đã dọn dẹp các tài khoản học sinh mẫu thử nghiệm thành công.",
      remainingUsers: finalUsers.length,
    };
  }

  // =================== AGGREGATIONS & PROGRESS ===================

  static async getStudentProgressSummaries(className?: string): Promise<StudentProgressSummary[]> {
    const allUsers = await this.getUsers();
    const users = allUsers.filter((u) => u.role === "student");
    const filteredUsers = className && className !== "all"
      ? users.filter((u) => u.className === className)
      : users;

    const allAttempts = await this.getAttempts();

    return filteredUsers.map((student) => {
      const studentAttempts = allAttempts.filter((a) => matchStudentAttempt(a, student));
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

      // Tính toán các tuần học sinh đã hoàn thành bài tập thực tế
      const completedWeeks: number[] = [];
      WEEKLY_PLAN.forEach((w) => {
        const weekAttempts = studentAttempts.filter((a) => w.topicIds.includes(a.topicId));
        if (weekAttempts.length > 0) {
          const correct = weekAttempts.filter((a) => a.isCorrect).length;
          const score = (correct / weekAttempts.length) * 10;
          if (score >= 5.0 || weekAttempts.length >= Math.min(w.totalTargetQuestions, 5)) {
            w.weekNumbers.forEach((wn) => {
              if (!completedWeeks.includes(wn)) completedWeeks.push(wn);
            });
          }
        }
      });
      completedWeeks.sort((a, b) => a - b);

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
        completedWeeks,
        lastActiveAt: lastAttempt ? lastAttempt.timestamp : student.lastLoginAt,
        status,
      };
    });
  }

  static async getAdminDashboardOverview(className?: string): Promise<AdminDashboardOverview> {
    const students = await this.getStudentProgressSummaries(className);
    const allUsers = await this.getUsers();
    const users = allUsers.filter((u) => u.role === "student");
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
    const allAttempts = await this.getAttempts();
    const attempts = allAttempts.sort((a, b) => b.timestamp - a.timestamp).slice(0, 10);
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
      isCloudConnected: Boolean(getRedisClient()),
    };
  }

  // =================== TIẾN ĐỘ THEO KẾ HOẠCH TUẦN (GD1) ===================

  static async getWeeklyProgress(weekId?: string, className?: string): Promise<WeeklyProgressOverview> {
    const allWeeks = getAllWeeklyPlans();
    const currentWeek = (weekId ? getWeeklyPlanById(weekId) : null) || allWeeks[0];

    const allUsers = await this.getUsers();
    const studentUsers = allUsers.filter((u) => u.role === "student");
    const filteredUsers =
      className && className !== "all"
        ? studentUsers.filter((u) => u.className === className)
        : studentUsers;

    const allAttempts = await this.getAttempts();

    const students: StudentWeeklyProgress[] = filteredUsers.map((student) => {
      const weekAttempts = allAttempts.filter(
        (a) => matchStudentAttempt(a, student) && currentWeek.topicIds.includes(a.topicId)
      );

      const questionsAttempted = weekAttempts.length;
      const correctAnswers = weekAttempts.filter((a) => a.isCorrect).length;
      const accuracyRate =
        questionsAttempted > 0 ? Math.round((correctAnswers / questionsAttempted) * 100) : 0;
      const score =
        questionsAttempted > 0
          ? Number(((correctAnswers / questionsAttempted) * 10).toFixed(1))
          : 0;
      const timeSpentMinutes = Math.round(
        weekAttempts.reduce((sum, a) => sum + (a.timeSpentSeconds || 0), 0) / 60
      );
      const hintsUsed = weekAttempts.reduce(
        (sum, a) => sum + (a.hintsViewed || 0) + (a.socraticQuestionsAsked || 0),
        0
      );

      let status: StudentWeeklyProgress["status"] = "ChuaThamGia";
      if (questionsAttempted === 0) {
        status = "ChuaThamGia";
      } else if (
        questionsAttempted >= Math.min(currentWeek.totalTargetQuestions, 5) &&
        score >= 5.0
      ) {
        status = "HoanThanh";
      } else {
        status = "DangLam";
      }

      const lastAttempt = weekAttempts.sort((a, b) => b.timestamp - a.timestamp)[0];

      return {
        studentId: student.id,
        username: student.username,
        fullName: student.fullName,
        className: student.className || "12A1",
        weekId: currentWeek.id,
        questionsAttempted,
        totalWeekQuestions: currentWeek.totalTargetQuestions,
        correctAnswers,
        accuracyRate,
        score,
        timeSpentMinutes,
        hintsUsed,
        status,
        lastActiveAt: lastAttempt ? lastAttempt.timestamp : undefined,
      };
    });

    const totalStudents = filteredUsers.length;
    const participatedStudents = students.filter((s) => s.questionsAttempted > 0);
    const participatedCount = participatedStudents.length;
    const completedCount = students.filter((s) => s.status === "HoanThanh").length;
    const completionRate = totalStudents > 0 ? Math.round((completedCount / totalStudents) * 100) : 0;

    const averageScore =
      participatedCount > 0
        ? Number(
            (
              participatedStudents.reduce((sum, s) => sum + s.score, 0) /
              participatedCount
            ).toFixed(2)
          )
        : 0;

    const passedCount = participatedStudents.filter((s) => s.score >= 5.0).length;
    const passRate = participatedCount > 0 ? Math.round((passedCount / participatedCount) * 100) : 0;
    const atRiskCount = participatedStudents.filter((s) => s.score < 5.0).length;
    const notStartedCount = students.filter((s) => s.status === "ChuaThamGia").length;

    return {
      week: currentWeek,
      totalStudents,
      participatedCount,
      completedCount,
      completionRate,
      averageScore,
      passRate,
      atRiskCount,
      notStartedCount,
      students,
    };
  }

  static async getWeeklyMatrix(className?: string): Promise<{ weeks: WeekPlanItem[]; rows: WeeklyMatrixRow[] }> {
    const weeks = getAllWeeklyPlans();
    const allUsers = await this.getUsers();
    const studentUsers = allUsers.filter((u) => u.role === "student");
    const filteredUsers =
      className && className !== "all"
        ? studentUsers.filter((u) => u.className === className)
        : studentUsers;

    const allAttempts = await this.getAttempts();

    const rows: WeeklyMatrixRow[] = filteredUsers.map((student) => {
      const studentAttempts = allAttempts.filter((a) => matchStudentAttempt(a, student));
      const studentWeeks: WeeklyMatrixRow["weeks"] = {};
      let totalCompleted = 0;

      weeks.forEach((w) => {
        const wAttempts = studentAttempts.filter((a) => w.topicIds.includes(a.topicId));
        const questionsAttempted = wAttempts.length;
        const correctAnswers = wAttempts.filter((a) => a.isCorrect).length;
        const score =
          questionsAttempted > 0
            ? Number(((correctAnswers / questionsAttempted) * 10).toFixed(1))
            : 0;

        let status: "HoanThanh" | "DangLam" | "ChuaThamGia" = "ChuaThamGia";
        if (questionsAttempted === 0) {
          status = "ChuaThamGia";
        } else if (
          questionsAttempted >= Math.min(w.totalTargetQuestions, 5) &&
          score >= 5.0
        ) {
          status = "HoanThanh";
          totalCompleted++;
        } else {
          status = "DangLam";
        }

        studentWeeks[w.id] = {
          status,
          score,
          completedCount: questionsAttempted,
          totalCount: w.totalTargetQuestions,
        };
      });

      return {
        studentId: student.id,
        username: student.username,
        fullName: student.fullName,
        className: student.className || "12A1",
        weeks: studentWeeks,
        totalCompletedWeeks: totalCompleted,
      };
    });

    return { weeks, rows };
  }
}
