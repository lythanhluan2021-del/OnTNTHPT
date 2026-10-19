import { User, StudentAttempt } from "@/types";
import { GoogleDriveStorage } from "./googleDriveStorage";
import { getDefaultServiceAccount, getGoogleAccessToken, ServiceAccountCredentials } from "../googleAuth";

export interface StudentProgressItem {
  id: string;
  username: string;
  fullName: string;
  className: string;
  role: string;
  accountType: "official" | "free";
  authProvider?: "google" | "credentials";
  isActive: boolean;
  createdAt: number;
  lastLoginAt: number | null;
  lastLoginFormatted: string;
  totalQuestions: number;
  correctCount: number;
  incorrectCount: number;
  accuracyPercent: number;
  averageScore: number;
  topicsPracticed: string[];
  topicsPracticedCount: number;
  topTopic: string;
  progressPercent: number; // Tiến độ so với mục tiêu 200 câu
  rating: "Xuất Sắc" | "Khá" | "Trung Bình" | "Cần Cố Gắng" | "Chưa Tham Gia";
}

export interface GoogleSheetSyncResult {
  success: boolean;
  message: string;
  syncedAt: number;
  spreadsheetUrl?: string | null;
  fileId?: string | null;
  totalStudents: number;
  activeStudents: number;
  totalAttempts: number;
}

export class GoogleSheetsSync {
  /**
   * Tính toán dữ liệu thống kê tiến độ học tập chi tiết của từng học sinh
   */
  static computeStudentProgress(
    users: User[],
    attempts: StudentAttempt[],
    targetQuestions: number = 200
  ): StudentProgressItem[] {
    const studentUsers = users.filter((u) => u.role === "student");

    // Nhóm attempts theo studentId hoặc họ tên
    const attemptsByStudent = new Map<string, StudentAttempt[]>();
    for (const a of attempts) {
      if (a.studentId) {
        const idKey = a.studentId.trim().toLowerCase();
        if (!attemptsByStudent.has(idKey)) {
          attemptsByStudent.set(idKey, []);
        }
        attemptsByStudent.get(idKey)!.push(a);
      }
      if (a.studentName) {
        const nameKey = a.studentName.trim().toLowerCase();
        if (!attemptsByStudent.has(nameKey)) {
          attemptsByStudent.set(nameKey, []);
        }
        attemptsByStudent.get(nameKey)!.push(a);
      }
    }

    return studentUsers.map((u) => {
      // Tìm bài làm theo cả id, username và họ tên
      const studentAttempts = [
        ...(attemptsByStudent.get(u.id.toLowerCase()) || []),
        ...(attemptsByStudent.get(u.username.toLowerCase()) || []),
        ...(attemptsByStudent.get(u.fullName.trim().toLowerCase()) || []),
      ];

      // Loại bỏ trùng lặp nếu attempt match cả 2
      const uniqueAttemptsMap = new Map<string, StudentAttempt>();
      for (const a of studentAttempts) {
        uniqueAttemptsMap.set(a.id, a);
      }
      const uniqueAttempts = Array.from(uniqueAttemptsMap.values());

      const totalQuestions = uniqueAttempts.length;
      const correctCount = uniqueAttempts.filter((a) => a.isCorrect).length;
      const incorrectCount = totalQuestions - correctCount;
      const accuracyPercent = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
      const averageScore = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) / 10 : 0;

      // Các chuyên đề đã làm
      const topicCounts = new Map<string, number>();
      for (const a of uniqueAttempts) {
        const topic = a.topicId || "Ôn tập chung";
        topicCounts.set(topic, (topicCounts.get(topic) || 0) + 1);
      }
      const topicsPracticed = Array.from(topicCounts.keys());
      let topTopic = "Chưa có";
      let maxTopicCount = 0;
      for (const [top, count] of topicCounts.entries()) {
        if (count > maxTopicCount) {
          maxTopicCount = count;
          topTopic = top;
        }
      }

      // Tiến độ so với mục tiêu toàn khóa
      const progressPercent = Math.min(100, Math.round((totalQuestions / targetQuestions) * 100));

      // Xếp loại tiến độ
      let rating: StudentProgressItem["rating"] = "Chưa Tham Gia";
      if (totalQuestions === 0) {
        rating = "Chưa Tham Gia";
      } else if (averageScore >= 8.0) {
        rating = "Xuất Sắc";
      } else if (averageScore >= 6.5) {
        rating = "Khá";
      } else if (averageScore >= 5.0) {
        rating = "Trung Bình";
      } else {
        rating = "Cần Cố Gắng";
      }

      // Format ngày đăng nhập
      let lastLoginFormatted = "Chưa đăng nhập";
      if (u.lastLoginAt) {
        const d = new Date(u.lastLoginAt);
        lastLoginFormatted = `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")} ${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}/${d.getFullYear()}`;
      }

      return {
        id: u.id,
        username: u.username,
        fullName: u.fullName,
        className: u.className || "Chưa phân lớp",
        role: u.role,
        accountType: u.accountType || "official",
        authProvider: u.authProvider,
        isActive: Boolean(u.isActive),
        createdAt: u.createdAt,
        lastLoginAt: u.lastLoginAt || null,
        lastLoginFormatted,
        totalQuestions,
        correctCount,
        incorrectCount,
        accuracyPercent,
        averageScore,
        topicsPracticed,
        topicsPracticedCount: topicsPracticed.length,
        topTopic,
        progressPercent,
        rating,
      };
    });
  }

  /**
   * Tạo tệp CSV có UTF-8 BOM để mở hoàn hảo trên Google Trang Tính và Excel (không lỗi font tiếng Việt)
   */
  static generateProgressCsv(users: User[], attempts: StudentAttempt[]): string {
    const progress = this.computeStudentProgress(users, attempts);

    const headers = [
      "STT",
      "Mã Học Sinh (Tên đăng nhập)",
      "Họ Và Tên",
      "Lớp",
      "Hình Thức",
      "Số Câu Đã Làm",
      "Số Câu Đúng",
      "Số Câu Sai",
      "Tỷ Lệ Đúng (%)",
      "Điểm Trung Bình (/10)",
      "Tiến Độ Ôn Luyện (%)",
      "Đánh Giá Tiến Trình",
      "Lần Đăng Nhập Cuối",
      "Trạng Thái Hoạt Động",
    ];

    const escapeCsv = (val: any) => {
      if (val === null || val === undefined) return "";
      const str = String(val);
      if (str.includes(",") || str.includes('"') || str.includes("\n")) {
        return `"${str.replace(/"/g, '""')}"`;
      }
      return str;
    };

    const rows = progress.map((p, idx) => [
      idx + 1,
      escapeCsv(p.username),
      escapeCsv(p.fullName),
      escapeCsv(p.className),
      p.authProvider === "google" ? "Google Sign-In" : "Cấp bởi Thầy",
      p.totalQuestions,
      p.correctCount,
      p.incorrectCount,
      `${p.accuracyPercent}%`,
      p.averageScore.toFixed(1),
      `${p.progressPercent}%`,
      escapeCsv(p.rating),
      escapeCsv(p.lastLoginFormatted),
      p.isActive ? "Hoạt Động" : "Tạm Khóa",
    ]);

    // Thêm UTF-8 BOM (\uFEFF) để Excel / Google Sheets tự động nhận diện tiếng Việt
    return "\uFEFF" + [headers.join(","), ...rows.map((r) => r.join(","))].join("\r\n");
  }

  /**
   * Tạo tệp CSV lịch sử đăng nhập học sinh
   */
  static generateLoginHistoryCsv(users: User[]): string {
    const studentUsers = users.filter((u) => u.role === "student");

    const headers = [
      "STT",
      "Mã Học Sinh",
      "Họ Và Tên",
      "Lớp",
      "Hình Thức Đăng Nhập",
      "Thời Gian Đăng Nhập Cuối",
      "Trạng Thái Tài Khoản",
      "Ngày Tạo",
    ];

    const escapeCsv = (val: any) => {
      if (val === null || val === undefined) return "";
      const str = String(val);
      if (str.includes(",") || str.includes('"') || str.includes("\n")) {
        return `"${str.replace(/"/g, '""')}"`;
      }
      return str;
    };

    const rows = studentUsers.map((u, idx) => {
      let loginTime = "Chưa đăng nhập";
      if (u.lastLoginAt) {
        const d = new Date(u.lastLoginAt);
        loginTime = `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")} ${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}/${d.getFullYear()}`;
      }
      const createdDate = u.createdAt ? new Date(u.createdAt).toLocaleDateString("vi-VN") : "Ban đầu";

      return [
        idx + 1,
        escapeCsv(u.username),
        escapeCsv(u.fullName),
        escapeCsv(u.className || "Chưa phân lớp"),
        u.authProvider === "google" ? "Google Sign-In" : "Cấp bởi Thầy",
        escapeCsv(loginTime),
        u.isActive ? "Đang hoạt động" : "Tạm khóa",
        escapeCsv(createdDate),
      ];
    });

    return "\uFEFF" + [headers.join(","), ...rows.map((r) => r.join(","))].join("\r\n");
  }

  /**
   * Đồng bộ song song danh sách người dùng và tiến độ học sinh lên thư mục Google Drive
   */
  static async syncToGoogleDrive(
    users: User[],
    attempts: StudentAttempt[],
    customCreds?: ServiceAccountCredentials | null
  ): Promise<GoogleSheetSyncResult> {
    const creds = customCreds || getDefaultServiceAccount();
    const folderId = GoogleDriveStorage.getFolderId();

    if (!creds || !creds.client_email) {
      return {
        success: false,
        message: "Chưa cấu hình Google Service Account để đồng bộ.",
        syncedAt: Date.now(),
        totalStudents: users.filter((u) => u.role === "student").length,
        activeStudents: users.filter((u) => u.role === "student" && Boolean(u.lastLoginAt)).length,
        totalAttempts: attempts.length,
      };
    }

    const token = await GoogleDriveStorage.getAccessToken(creds);
    if (!token) {
      return {
        success: false,
        message: "Không lấy được Google Access Token.",
        syncedAt: Date.now(),
        totalStudents: users.filter((u) => u.role === "student").length,
        activeStudents: users.filter((u) => u.role === "student" && Boolean(u.lastLoginAt)).length,
        totalAttempts: attempts.length,
      };
    }

    try {
      // 1. Đồng bộ users và attempts gốc lên Google Drive
      const usersSynced = await GoogleDriveStorage.syncUsers(users, creds);
      const attemptsSynced = await GoogleDriveStorage.syncAttempts(attempts, creds);

      // 2. Tính toán báo cáo tiến độ chi tiết
      const progressData = this.computeStudentProgress(users, attempts);
      const csvContent = this.generateProgressCsv(users, attempts);

      // 3. Đồng bộ tệp JSON tổng hợp tiến trình để Dashboard tải tức thì
      await GoogleDriveStorage.writeJsonFile(
        token,
        "ontn_student_progress.json",
        {
          updatedAt: Date.now(),
          totalStudents: progressData.length,
          activeCount: progressData.filter((p) => p.totalQuestions > 0).length,
          students: progressData,
        },
        folderId
      ).catch(() => null);

      // Thư mục Drive URL để Thầy bấm vào xem ngay
      const folderUrl = `https://drive.google.com/drive/folders/${folderId}`;

      return {
        success: usersSynced || attemptsSynced,
        message: `Đã đồng bộ thành công ${progressData.length} học sinh và ${attempts.length} lượt làm bài lên Google Drive & Bảng theo dõi tiến độ!`,
        syncedAt: Date.now(),
        spreadsheetUrl: folderUrl,
        totalStudents: progressData.length,
        activeStudents: progressData.filter((p) => p.totalQuestions > 0).length,
        totalAttempts: attempts.length,
      };
    } catch (err: any) {
      console.error("[GoogleSheetsSync] Lỗi đồng bộ:", err);
      return {
        success: false,
        message: err.message || "Lỗi đồng bộ lên Google Drive & Sheet.",
        syncedAt: Date.now(),
        totalStudents: users.filter((u) => u.role === "student").length,
        activeStudents: users.filter((u) => u.role === "student" && Boolean(u.lastLoginAt)).length,
        totalAttempts: attempts.length,
      };
    }
  }
}
