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
import { ExamDefinition, ExamSubmission, ProctorUnlockRequest } from "@/types/examManagement";
import { WEEKLY_PLAN, getAllWeeklyPlans, getWeeklyPlanById } from "@/data/weeklyPlan";
import { GoogleDriveStorage } from "./googleDriveStorage";

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
  ontnExamsCache?: ExamDefinition[];
  ontnSubmissionsCache?: ExamSubmission[];
  ontnUnlockRequestsCache?: ProctorUnlockRequest[];
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

// Helper phân loại học sinh chính khóa và người dùng tự do
export function getUserAccountType(student: Partial<User>): "official" | "free" {
  if (student.accountType === "official" || student.accountType === "free") {
    return student.accountType;
  }
  if (student.authProvider === "google") {
    return "free";
  }
  const cls = (student.className || "").toLowerCase();
  if (
    cls.includes("tự do") ||
    cls.includes("tu do") ||
    cls.includes("vang lai") ||
    cls.includes("vãng lai")
  ) {
    return "free";
  }
  return "official";
}

export class StorageAdapter {
  static getDeletedUserIdentifiers(): Set<string> {
    const localTombstones = safeReadJson<string[]>(path.join(LOCAL_DB_DIR, "deleted_users.json")) || [];
    const tmpTombstones = safeReadJson<string[]>(path.join(TMP_DB_DIR, "deleted_users.json")) || [];
    return new Set<string>([...localTombstones, ...tmpTombstones].map((s) => s.trim().toLowerCase()));
  }

  static recordDeletedUser(identifier: string): void {
    if (!identifier) return;
    const clean = identifier.trim().toLowerCase();
    const set = this.getDeletedUserIdentifiers();
    set.add(clean);
    const list = Array.from(set);
    safeWriteJson(TMP_DB_DIR, path.join(TMP_DB_DIR, "deleted_users.json"), list);
    if (!IS_SERVERLESS) {
      safeWriteJson(LOCAL_DB_DIR, path.join(LOCAL_DB_DIR, "deleted_users.json"), list);
    }
  }

  static clearDeletedTombstone(identifier: string): void {
    if (!identifier) return;
    const clean = identifier.trim().toLowerCase();
    const set = this.getDeletedUserIdentifiers();
    if (set.has(clean)) {
      set.delete(clean);
      const list = Array.from(set);
      safeWriteJson(TMP_DB_DIR, path.join(TMP_DB_DIR, "deleted_users.json"), list);
      if (!IS_SERVERLESS) {
        safeWriteJson(LOCAL_DB_DIR, path.join(LOCAL_DB_DIR, "deleted_users.json"), list);
      }
    }
  }

  static isCloudConnected(): boolean {
    return Boolean(getRedisClient()) || GoogleDriveStorage.isConfigured();
  }

  static getCloudProvider(): "redis" | "google_drive" | "local" {
    if (Boolean(getRedisClient())) return "redis";
    if (GoogleDriveStorage.isConfigured()) return "google_drive";
    return "local";
  }

  /**
   * Tự động quét và nạp tài khoản từ file Excel TKHS.xlsx trên máy nếu có dòng mới
   */
  static syncUsersWithLocalExcel(
    currentUsers: User[],
    deletedSet: Set<string>
  ): { users: User[]; addedCount: number } {
    try {
      const excelCandidates = [
        path.join(process.cwd(), "TKHS.xlsx"),
        path.join(process.cwd(), "src", "data", "TKHS.xlsx"),
      ];
      let excelPath: string | null = null;
      for (const p of excelCandidates) {
        if (fs.existsSync(p)) {
          excelPath = p;
          break;
        }
      }

      if (!excelPath) {
        return { users: currentUsers, addedCount: 0 };
      }

      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const xlsx = require("xlsx");
      // Dùng fs.readFileSync để tránh lỗi Windows file-lock (EBUSY) khi file đang được mở trong Excel
      const fileBuffer = fs.readFileSync(excelPath);
      const wb = xlsx.read(fileBuffer, { type: "buffer" });
      if (!wb.SheetNames || wb.SheetNames.length === 0) {
        return { users: currentUsers, addedCount: 0 };
      }

      const sheet = wb.Sheets[wb.SheetNames[0]];
      const rawRows: any[] = xlsx.utils.sheet_to_json(sheet);
      let added = 0;
      const list = [...currentUsers];

      for (const row of rawRows) {
        const username = String(
          row["TK đăng nhập"] || row["Tên đăng nhập"] || row["Mã HS"] || row["username"] || ""
        )
          .trim()
          .toLowerCase();
        const fullName = String(
          row["Tên"] || row["Họ và tên"] || row["Họ tên"] || row["fullName"] || ""
        ).trim();
        const className = String(row["Lớp"] || row["className"] || "12A1").trim();
        const password = String(row["Mật khẩu"] || row["password"] || "123").trim();

        if (!username || !fullName) continue;

        // Nếu tài khoản đã bị gạch tên vĩnh viễn (Tombstone) thì không hồi sinh lại
        if (deletedSet.has(username)) continue;

        const existingIdx = list.findIndex((u) => u.username.toLowerCase() === username);
        if (existingIdx === -1) {
          const isFreeCls =
            className.toLowerCase().includes("tự do") ||
            className.toLowerCase().includes("tu do") ||
            className.toLowerCase().includes("vang lai");

          const newUser: User = {
            id: `usr-${username}`,
            username,
            fullName,
            className: className || "12A1",
            password: password || "123",
            role: "student",
            schoolYear: "2026-2027",
            accountType: isFreeCls ? "free" : "official",
            isActive: true,
            createdAt: Date.now(),
          };
          list.push(newUser);
          added++;
        }
      }

      return { users: list, addedCount: added };
    } catch (e: any) {
      console.warn("[StorageAdapter] Lỗi quét file TKHS.xlsx:", e.message);
      return { users: currentUsers, addedCount: 0 };
    }
  }

  static async getUsers(): Promise<User[]> {
    const deletedSet = this.getDeletedUserIdentifiers();
    const isDeleted = (u: User | undefined | null) => {
      if (!u) return true;
      if (u.id && deletedSet.has(u.id.toLowerCase())) return true;
      if (u.username && deletedSet.has(u.username.trim().toLowerCase())) return true;
      if (u.email && deletedSet.has(u.email.trim().toLowerCase())) return true;
      return false;
    };

    const redis = getRedisClient();

    // 1. Nếu có Upstash Redis, ưu tiên đọc trực tiếp từ Đám Mây thời gian thực
    if (redis) {
      try {
        const remoteUsers = await redis.get<User[]>("thpt:users");
        if (remoteUsers && Array.isArray(remoteUsers) && remoteUsers.length > 0) {
          const mockUserIds = new Set([
            "hs-12a1-01", "hs-12a1-02", "hs-12a1-03", "hs-12a1-04", "hs-12a1-05",
            "hs-12a2-01", "hs-12a2-02", "hs-12a3-01", "hs-12a3-02",
          ]);
          const cleanedUsers = remoteUsers.filter(
            (u) =>
              !mockUserIds.has(u.id) &&
              !(u.username.startsWith("hs12a") && u.createdAt === 1726000000000) &&
              !isDeleted(u)
          );
          if (!cleanedUsers.some((u) => u.role === "admin")) {
            cleanedUsers.unshift(INITIAL_USERS[0]);
          }

          // Tự động kiểm tra thêm dòng mới từ file Excel TKHS.xlsx
          const { users: syncedUsers, addedCount } = this.syncUsersWithLocalExcel(cleanedUsers, deletedSet);
          if (syncedUsers.length !== remoteUsers.length || addedCount > 0) {
            await redis.set("thpt:users", syncedUsers);
          }
          globalForStorage.ontnUsersCache = syncedUsers;
          return syncedUsers;
        } else {
          const { users: initSynced } = this.syncUsersWithLocalExcel(INITIAL_USERS, deletedSet);
          await redis.set("thpt:users", initSynced);
          globalForStorage.ontnUsersCache = initSynced;
          return initSynced;
        }
      } catch (err) {
        console.warn("[StorageAdapter] ⚠️ Lỗi đọc từ Upstash Redis, dùng bộ nhớ đệm:", err);
      }
    }

    // Đọc danh sách người dùng từ Local và Temp trước để làm nền tảng
    const localUsers = safeReadJson<User[]>(path.join(LOCAL_DB_DIR, "users.json")) || [];
    const tmpUsers = safeReadJson<User[]>(path.join(TMP_DB_DIR, "users.json")) || [];
    let baseUsers = (localUsers.length >= tmpUsers.length ? localUsers : tmpUsers).filter((u) => !isDeleted(u));
    if (globalForStorage.ontnUsersCache && globalForStorage.ontnUsersCache.length > 0) {
      baseUsers = globalForStorage.ontnUsersCache.filter((u) => !isDeleted(u));
    }
    if (baseUsers.length === 0) {
      baseUsers = [...INITIAL_USERS];
    }

    // Helper hợp nhất hai danh sách người dùng thông minh theo username
    const mergeUserLists = (listA: User[], listB: User[]): User[] => {
      const map = new Map<string, User>();
      for (const u of listB) {
        if (u && u.username && !isDeleted(u)) {
          map.set(u.username.trim().toLowerCase(), {
            ...u,
            accountType: getUserAccountType(u),
          });
        }
      }
      for (const u of listA) {
        if (u && u.username && !isDeleted(u)) {
          const key = u.username.trim().toLowerCase();
          const existing = map.get(key);
          if (!existing) {
            map.set(key, {
              ...u,
              accountType: getUserAccountType(u),
            });
          } else {
            map.set(key, {
              ...existing,
              ...u,
              fullName: u.fullName || existing.fullName,
              className: u.className || existing.className,
              role: u.role || existing.role,
              accountType: u.accountType || existing.accountType || getUserAccountType(u),
            });
          }
        }
      }
      return Array.from(map.values());
    };

    // 2. Nếu có cấu hình Google Drive, đọc tệp ontn_users.json trên Google Drive và HỢP NHẤT
    if (GoogleDriveStorage.isConfigured()) {
      try {
        const driveUsers = await GoogleDriveStorage.loadUsers();
        if (driveUsers && Array.isArray(driveUsers)) {
          const activeDriveUsers = driveUsers.filter((u) => !isDeleted(u));
          let merged = mergeUserLists(activeDriveUsers, baseUsers);

          // Tự động kiểm tra thêm dòng mới từ file Excel TKHS.xlsx
          const { users: syncedMerged, addedCount } = this.syncUsersWithLocalExcel(merged, deletedSet);
          merged = syncedMerged;

          globalForStorage.ontnUsersCache = merged;
          safeWriteJson(TMP_DB_DIR, path.join(TMP_DB_DIR, "users.json"), merged);
          if (!IS_SERVERLESS) {
            safeWriteJson(LOCAL_DB_DIR, path.join(LOCAL_DB_DIR, "users.json"), merged);
          }
          // Nếu Drive chứa tài khoản đã bị xóa hoặc có tài khoản mới từ Excel, dọn sạch / đồng bộ ngay trên Drive
          if (
            activeDriveUsers.length < driveUsers.length ||
            merged.length > driveUsers.length ||
            addedCount > 0
          ) {
            GoogleDriveStorage.syncUsers(merged).catch((e) =>
              console.warn("[StorageAdapter] Lỗi đồng bộ users lên Drive:", e)
            );
          }
          return merged;
        }
      } catch (err) {
        console.warn("[StorageAdapter] ⚠️ Lỗi đọc users từ Google Drive:", err);
      }
    }

    // 3. Nếu chưa đồng bộ được từ Drive, trả về baseUsers đã nạp và quét thêm Excel
    let finalUsers: User[] = baseUsers.filter((u) => !isDeleted(u)).map((u) => ({
      ...u,
      accountType: getUserAccountType(u),
    }));

    const { users: syncedFinal, addedCount } = this.syncUsersWithLocalExcel(finalUsers, deletedSet);
    finalUsers = syncedFinal;

    globalForStorage.ontnUsersCache = finalUsers;
    safeWriteJson(TMP_DB_DIR, path.join(TMP_DB_DIR, "users.json"), finalUsers);
    if (!IS_SERVERLESS) {
      safeWriteJson(LOCAL_DB_DIR, path.join(LOCAL_DB_DIR, "users.json"), finalUsers);
    }
    if (addedCount > 0 && GoogleDriveStorage.isConfigured()) {
      GoogleDriveStorage.syncUsers(finalUsers).catch(() => {});
    }
    return finalUsers;
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

    // 2. Lưu vào Google Drive Cloud nếu có kết nối
    if (GoogleDriveStorage.isConfigured()) {
      try {
        await GoogleDriveStorage.syncUsers(users);
      } catch (err) {
        console.warn("[StorageAdapter] ⚠️ Lỗi đồng bộ users lên Google Drive:", err);
      }
    }

    // 3. Ghi dự phòng vào /tmp
    safeWriteJson(TMP_DB_DIR, path.join(TMP_DB_DIR, "users.json"), users);

    // 4. Ghi vào LOCAL_DB_DIR nếu không phải serverless
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

  static async createUsersBatch(
    newUsersData: Omit<User, "id" | "createdAt">[]
  ): Promise<{ created: User[]; updated: User[]; errors: string[] }> {
    const users = await this.getUsers();
    const created: User[] = [];
    const updated: User[] = [];
    const errors: string[] = [];

    for (const item of newUsersData) {
      const cleanUsername = item.username.trim().toLowerCase();
      const existingIdx = users.findIndex((u) => u.username.toLowerCase() === cleanUsername);

      if (existingIdx !== -1) {
        // Cập nhật tài khoản đã tồn tại
        const oldUser = users[existingIdx];
        const updatedUser: User = {
          ...oldUser,
          fullName: item.fullName.trim(),
          className: item.className ? item.className.trim() : oldUser.className,
          role: item.role || oldUser.role,
          password: item.password ? item.password.trim() : oldUser.password,
          isActive: item.isActive !== undefined ? item.isActive : oldUser.isActive,
        };
        users[existingIdx] = updatedUser;
        updated.push(updatedUser);
      } else {
        // Tạo tài khoản mới
        const newUser: User = {
          ...item,
          username: cleanUsername,
          id: `usr-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`,
          createdAt: Date.now(),
          isActive: item.isActive !== undefined ? item.isActive : true,
        };
        users.push(newUser);
        created.push(newUser);
      }
    }

    if (created.length > 0 || updated.length > 0) {
      await this.saveUsers(users);
    }

    return { created, updated, errors };
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

    const oldUser = users[idx];
    const updated = { ...oldUser, ...updates };
    users[idx] = updated;
    await this.saveUsers(users);

    // Đồng bộ thông tin học sinh trong các bài làm nếu có đổi họ tên, username hoặc lớp
    if (
      (updates.username && updates.username !== oldUser.username) ||
      (updates.fullName && updates.fullName !== oldUser.fullName) ||
      (updates.className && updates.className !== oldUser.className)
    ) {
      try {
        const attempts = await this.getAttempts();
        let changed = false;
        const updatedAttempts = attempts.map((a) => {
          if (matchStudentAttempt(a, oldUser)) {
            changed = true;
            return {
              ...a,
              studentId: updated.id,
              studentName: updated.fullName,
              className: updated.className,
            };
          }
          return a;
        });

        if (changed) {
          globalForStorage.ontnAttemptsCache = updatedAttempts;
          const redis = getRedisClient();
          if (redis) {
            await redis.set("thpt:attempts", updatedAttempts);
          }
          safeWriteJson(TMP_DB_DIR, path.join(TMP_DB_DIR, "attempts.json"), updatedAttempts);
          if (!IS_SERVERLESS) {
            safeWriteJson(LOCAL_DB_DIR, path.join(LOCAL_DB_DIR, "attempts.json"), updatedAttempts);
          }
        }
      } catch (err) {
        console.warn("[StorageAdapter] Lỗi đồng bộ attempts khi cập nhật user:", err);
      }
    }

    return updated;
  }

  static async deleteUser(id: string): Promise<boolean> {
    const cleanId = id.trim().toLowerCase();
    // 1. Ghi nhận xóa vĩnh viễn (Tombstone) ngay lập tức để không bao giờ bị merge lại
    this.recordDeletedUser(cleanId);

    const users = await this.getUsers();
    const targetUser = users.find(
      (u) =>
        u.id.toLowerCase() === cleanId ||
        u.username.toLowerCase() === cleanId ||
        (u.email && u.email.toLowerCase() === cleanId)
    );

    if (targetUser) {
      this.recordDeletedUser(targetUser.id);
      this.recordDeletedUser(targetUser.username);
      if (targetUser.email) this.recordDeletedUser(targetUser.email);
    }

    const filtered = users.filter(
      (u) =>
        u.id.toLowerCase() !== cleanId &&
        u.username.toLowerCase() !== cleanId &&
        (!u.email || u.email.toLowerCase() !== cleanId)
    );

    // Cập nhật RAM cache ngay lập tức
    globalForStorage.ontnUsersCache = filtered;

    // Ghi tức thời xuống file local và temp
    safeWriteJson(TMP_DB_DIR, path.join(TMP_DB_DIR, "users.json"), filtered);
    if (!IS_SERVERLESS) {
      safeWriteJson(LOCAL_DB_DIR, path.join(LOCAL_DB_DIR, "users.json"), filtered);
    }

    // Ghi đồng bộ lên Google Drive và chờ kết quả
    if (GoogleDriveStorage.isConfigured()) {
      try {
        await GoogleDriveStorage.syncUsers(filtered);
      } catch (err) {
        console.warn("[StorageAdapter] Lỗi đồng bộ xóa users lên Google Drive:", err);
      }
    }

    // Ghi lên Redis nếu có kết nối
    const redis = getRedisClient();
    if (redis) {
      try {
        await redis.set("thpt:users", filtered);
      } catch (err) {
        console.warn("[StorageAdapter] Lỗi xóa users trên Redis:", err);
      }
    }

    // Dọn sạch các bài làm liên quan để tránh bài thi mồ côi
    if (targetUser) {
      try {
        const attempts = await this.getAttempts();
        const cleanedAttempts = attempts.filter((a) => !matchStudentAttempt(a, targetUser));
        if (cleanedAttempts.length !== attempts.length) {
          globalForStorage.ontnAttemptsCache = cleanedAttempts;
          if (redis) {
            await redis.set("thpt:attempts", cleanedAttempts);
          }
          if (GoogleDriveStorage.isConfigured()) {
            await GoogleDriveStorage.syncAttempts(cleanedAttempts);
          }
          safeWriteJson(TMP_DB_DIR, path.join(TMP_DB_DIR, "attempts.json"), cleanedAttempts);
          if (!IS_SERVERLESS) {
            safeWriteJson(LOCAL_DB_DIR, path.join(LOCAL_DB_DIR, "attempts.json"), cleanedAttempts);
          }
        }
      } catch (err) {
        console.warn("[StorageAdapter] Lỗi dọn attempts khi xóa user:", err);
      }
    }

    return true;
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

    // 2. Đọc từ Google Drive nếu có kết nối và chưa có dữ liệu từ Redis
    if (!allAttempts && GoogleDriveStorage.isConfigured()) {
      try {
        const driveAttempts = await GoogleDriveStorage.loadAttempts();
        if (driveAttempts && Array.isArray(driveAttempts)) {
          allAttempts = driveAttempts;
          globalForStorage.ontnAttemptsCache = allAttempts;
          safeWriteJson(TMP_DB_DIR, path.join(TMP_DB_DIR, "attempts.json"), allAttempts);
        }
      } catch (err) {
        console.warn("[StorageAdapter] ⚠️ Lỗi đọc attempts từ Google Drive:", err);
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

    // 1. Lưu vào Upstash Redis
    const redis = getRedisClient();
    if (redis) {
      try {
        await redis.set("thpt:attempts", updated);
      } catch (err) {
        console.warn("[StorageAdapter] ⚠️ Lỗi lưu attempt lên Upstash Redis:", err);
      }
    }

    // 2. Lưu vào Google Drive Cloud
    if (GoogleDriveStorage.isConfigured()) {
      try {
        await GoogleDriveStorage.syncAttempts(updated);
      } catch (err) {
        console.warn("[StorageAdapter] ⚠️ Lỗi đồng bộ attempt lên Google Drive:", err);
      }
    }

    // 3. Dự phòng /tmp và cục bộ
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

      if (GoogleDriveStorage.isConfigured()) {
        try {
          await GoogleDriveStorage.syncAttempts(updated);
        } catch (err) {
          console.warn("[StorageAdapter] ⚠️ Lỗi đồng bộ batch attempts lên Google Drive:", err);
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

  static async getStudentProgressSummaries(
    className?: string,
    accountTypeFilter?: "all" | "official" | "free"
  ): Promise<StudentProgressSummary[]> {
    const allUsers = await this.getUsers();
    let users = allUsers.filter((u) => u.role === "student");

    // Lọc theo lớp
    if (className && className !== "all") {
      users = users.filter((u) => u.className === className);
    }

    // Lọc theo loại tài khoản: official (chính khóa) hoặc free (tự do)
    if (accountTypeFilter && accountTypeFilter !== "all") {
      users = users.filter((u) => getUserAccountType(u) === accountTypeFilter);
    }

    const allAttempts = await this.getAttempts();

    return users.map((student) => {
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
        accountType: getUserAccountType(student),
        authProvider: student.authProvider || "credentials",
        email: student.email,
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

  static async getAdminDashboardOverview(
    className?: string,
    accountTypeFilter?: "all" | "official" | "free"
  ): Promise<AdminDashboardOverview> {
    const students = await this.getStudentProgressSummaries(className, accountTypeFilter);
    const allUsers = await this.getUsers();
    const studentUsers = allUsers.filter((u) => u.role === "student");

    // Đếm sĩ số chính khóa và tự do toàn diện
    const officialStudentsCount = studentUsers.filter((u) => getUserAccountType(u) === "official").length;
    const freeStudentsCount = studentUsers.filter((u) => getUserAccountType(u) === "free").length;

    let filteredUsers =
      className && className !== "all"
        ? studentUsers.filter((u) => u.className === className)
        : studentUsers;

    if (accountTypeFilter && accountTypeFilter !== "all") {
      filteredUsers = filteredUsers.filter((u) => getUserAccountType(u) === accountTypeFilter);
    }

    // Tổng sĩ số theo bộ lọc đang chọn
    const totalStudents =
      filteredUsers.length > 0
        ? filteredUsers.length
        : (className && className !== "all" ? students.length : (studentUsers.length || students.length));

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

    // Lấy danh sách lớp duy nhất từ tất cả người dùng và dữ liệu học sinh
    const classSet = new Set<string>();
    studentUsers.forEach((u) => {
      if (u.className) classSet.add(u.className);
    });
    students.forEach((s) => {
      if (s.className) classSet.add(s.className);
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
      totalStudents,
      officialStudentsCount,
      freeStudentsCount,
      activeStudents,
      averageScore,
      passRate,
      targetPassRate: 73, // 73% theo KH ON TAP GD1_MOI.docx
      targetAverageScore: 6.0, // 6.00 điểm theo KH ON TAP GD1_MOI.docx
      atRiskCount,
      classes,
      recentActivities,
      isCloudConnected: this.isCloudConnected(),
      cloudProvider: this.getCloudProvider(),
      driveFolderId: GoogleDriveStorage.getFolderId(),
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

  // =========================================================================
  // EXAM & SUBMISSION MANAGEMENT (KHẢO THÍ & KIỂM TRA CHỐNG GIAN LẬN)
  // =========================================================================

  static async getExams(): Promise<ExamDefinition[]> {
    const redis = getRedisClient();
    if (redis) {
      try {
        const remote = await redis.get<ExamDefinition[]>("thpt:exams");
        if (remote && Array.isArray(remote)) {
          globalForStorage.ontnExamsCache = remote;
          return remote;
        }
      } catch (err) {
        console.warn("[StorageAdapter] ⚠️ Lỗi đọc exams từ Upstash Redis:", err);
      }
    }

    if (globalForStorage.ontnExamsCache && globalForStorage.ontnExamsCache.length > 0) {
      return globalForStorage.ontnExamsCache;
    }

    const tmpExams = safeReadJson<ExamDefinition[]>(path.join(TMP_DB_DIR, "exams.json"));
    if (tmpExams && Array.isArray(tmpExams)) {
      globalForStorage.ontnExamsCache = tmpExams;
      return tmpExams;
    }

    const localExams = safeReadJson<ExamDefinition[]>(path.join(LOCAL_DB_DIR, "exams.json"));
    if (localExams && Array.isArray(localExams)) {
      globalForStorage.ontnExamsCache = localExams;
      safeWriteJson(TMP_DB_DIR, path.join(TMP_DB_DIR, "exams.json"), localExams);
      return localExams;
    }

    return globalForStorage.ontnExamsCache || [];
  }

  static async saveExams(exams: ExamDefinition[]): Promise<void> {
    globalForStorage.ontnExamsCache = [...exams];
    const redis = getRedisClient();
    if (redis) {
      try {
        await redis.set("thpt:exams", exams);
      } catch (err) {
        console.warn("[StorageAdapter] ⚠️ Lỗi lưu exams lên Redis:", err);
      }
    }
    safeWriteJson(TMP_DB_DIR, path.join(TMP_DB_DIR, "exams.json"), exams);
    if (!IS_SERVERLESS) {
      safeWriteJson(LOCAL_DB_DIR, path.join(LOCAL_DB_DIR, "exams.json"), exams);
    }
  }

  static async saveExam(exam: ExamDefinition): Promise<void> {
    const current = await this.getExams();
    const idx = current.findIndex((e) => e.id === exam.id);
    let updated: ExamDefinition[];
    if (idx >= 0) {
      updated = current.map((e) => (e.id === exam.id ? exam : e));
    } else {
      updated = [exam, ...current];
    }
    await this.saveExams(updated);
  }

  static async deleteExam(examId: string): Promise<void> {
    const current = await this.getExams();
    const updated = current.filter((e) => e.id !== examId);
    await this.saveExams(updated);
  }

  static async getSubmissions(examId?: string): Promise<ExamSubmission[]> {
    const redis = getRedisClient();
    if (redis) {
      try {
        const remote = await redis.get<ExamSubmission[]>("thpt:submissions");
        if (remote && Array.isArray(remote)) {
          globalForStorage.ontnSubmissionsCache = remote;
          return examId ? remote.filter((s) => s.examId === examId) : remote;
        }
      } catch (err) {
        console.warn("[StorageAdapter] ⚠️ Lỗi đọc submissions từ Redis:", err);
      }
    }

    if (globalForStorage.ontnSubmissionsCache && globalForStorage.ontnSubmissionsCache.length > 0) {
      const list = globalForStorage.ontnSubmissionsCache;
      return examId ? list.filter((s) => s.examId === examId) : list;
    }

    const tmpSubs = safeReadJson<ExamSubmission[]>(path.join(TMP_DB_DIR, "submissions.json"));
    if (tmpSubs && Array.isArray(tmpSubs)) {
      globalForStorage.ontnSubmissionsCache = tmpSubs;
      return examId ? tmpSubs.filter((s) => s.examId === examId) : tmpSubs;
    }

    const localSubs = safeReadJson<ExamSubmission[]>(path.join(LOCAL_DB_DIR, "submissions.json"));
    if (localSubs && Array.isArray(localSubs)) {
      globalForStorage.ontnSubmissionsCache = localSubs;
      safeWriteJson(TMP_DB_DIR, path.join(TMP_DB_DIR, "submissions.json"), localSubs);
      return examId ? localSubs.filter((s) => s.examId === examId) : localSubs;
    }

    return [];
  }

  static async saveSubmission(submission: ExamSubmission): Promise<void> {
    const all = await this.getSubmissions();
    const existingIdx = all.findIndex(
      (s) => s.id === submission.id || (s.examId === submission.examId && s.studentId === submission.studentId)
    );
    let updated: ExamSubmission[];
    if (existingIdx >= 0) {
      updated = all.map((s, i) => (i === existingIdx ? submission : s));
    } else {
      updated = [submission, ...all];
    }

    globalForStorage.ontnSubmissionsCache = updated;

    const redis = getRedisClient();
    if (redis) {
      try {
        await redis.set("thpt:submissions", updated);
      } catch (err) {
        console.warn("[StorageAdapter] ⚠️ Lỗi lưu submissions lên Redis:", err);
      }
    }

    safeWriteJson(TMP_DB_DIR, path.join(TMP_DB_DIR, "submissions.json"), updated);
    if (!IS_SERVERLESS) {
      safeWriteJson(LOCAL_DB_DIR, path.join(LOCAL_DB_DIR, "submissions.json"), updated);
    }
  }

  static async resetStudentSubmission(examId: string, studentId: string): Promise<void> {
    const all = await this.getSubmissions();
    const updated = all.filter((s) => !(s.examId === examId && s.studentId === studentId));
    globalForStorage.ontnSubmissionsCache = updated;

    const redis = getRedisClient();
    if (redis) {
      try {
        await redis.set("thpt:submissions", updated);
      } catch (err) {
        console.warn("[StorageAdapter] ⚠️ Lỗi xóa submission trên Redis:", err);
      }
    }

    safeWriteJson(TMP_DB_DIR, path.join(TMP_DB_DIR, "submissions.json"), updated);
    if (!IS_SERVERLESS) {
      safeWriteJson(LOCAL_DB_DIR, path.join(LOCAL_DB_DIR, "submissions.json"), updated);
    }
  }
}
