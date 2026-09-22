import fs from "fs";
import path from "path";
import os from "os";
import { Redis } from "@upstash/redis";
import { User, StudentAttempt, StudentProgressSummary, AdminDashboardOverview } from "@/types";

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

// Khởi tạo Upstash Redis Client (Tự động nhận diện cả UPSTASH_REDIS_REST_* và KV_REST_API_* từ Vercel)
function getRedisClient(): Redis | null {
  if (globalForStorage.ontnRedisClient !== undefined) {
    return globalForStorage.ontnRedisClient;
  }

  const url =
    process.env.UPSTASH_REDIS_REST_URL ||
    process.env.KV_REST_API_URL ||
    process.env.NEXT_PUBLIC_UPSTASH_REDIS_REST_URL;
  const token =
    process.env.UPSTASH_REDIS_REST_TOKEN ||
    process.env.KV_REST_API_TOKEN ||
    process.env.NEXT_PUBLIC_UPSTASH_REDIS_REST_TOKEN;

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
          globalForStorage.ontnUsersCache = remoteUsers;
          return remoteUsers;
        } else {
          // Lần đầu cắm Redis: Khởi tạo danh sách mẫu lên Redis
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
          allAttempts = remoteAttempts;
        } else {
          // Lần đầu cắm Redis: Khởi tạo attempts mẫu
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

    return studentId ? allAttempts.filter((a) => a.studentId === studentId) : allAttempts;
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

  // =================== AGGREGATIONS & PROGRESS ===================

  static async getStudentProgressSummaries(className?: string): Promise<StudentProgressSummary[]> {
    const allUsers = await this.getUsers();
    const users = allUsers.filter((u) => u.role === "student");
    const filteredUsers = className && className !== "all"
      ? users.filter((u) => u.className === className)
      : users;

    const allAttempts = await this.getAttempts();

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
}
