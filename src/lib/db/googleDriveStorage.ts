import { getDefaultServiceAccount, getGoogleAccessToken, ServiceAccountCredentials } from "../googleAuth";
import { User, StudentAttempt } from "@/types";

const DEFAULT_FOLDER_ID = "19toY6VB5iERD2D9-tirycSjEz_YQbowL";
const USERS_FILE_NAME = "ontn_users.json";
const ATTEMPTS_FILE_NAME = "ontn_attempts.json";

export interface DriveStorageStatus {
  isConfigured: boolean;
  isConnected: boolean;
  folderId: string;
  clientEmail?: string;
  usersFileId?: string | null;
  attemptsFileId?: string | null;
  usersCount?: number;
  attemptsCount?: number;
  lastSyncAt?: number;
  errorMessage?: string | null;
}

// In-Memory cache metadata tránh gọi Drive API liên tục trong cùng 1 request
let lastDriveStatus: DriveStorageStatus = {
  isConfigured: false,
  isConnected: false,
  folderId: DEFAULT_FOLDER_ID,
};

export class GoogleDriveStorage {
  /**
   * Lấy Folder ID Google Drive lưu trữ CSDL của Thầy
   */
  static getFolderId(): string {
    return (
      process.env.GOOGLE_DRIVE_FOLDER_ID ||
      process.env.NEXT_PUBLIC_GOOGLE_DRIVE_FOLDER_ID ||
      DEFAULT_FOLDER_ID
    );
  }

  /**
   * Kiểm tra xem cấu hình Service Account Google Drive có sẵn không
   */
  static isConfigured(customCreds?: ServiceAccountCredentials | null): boolean {
    const creds = customCreds || getDefaultServiceAccount();
    return Boolean(creds && creds.client_email && creds.private_key);
  }

  /**
   * Lấy Access Token với quyền đọc/ghi Google Drive
   */
  static async getAccessToken(customCreds?: ServiceAccountCredentials | null): Promise<string | null> {
    const creds = customCreds || getDefaultServiceAccount();
    if (!creds || !creds.client_email || !creds.private_key) {
      return null;
    }
    try {
      return await getGoogleAccessToken(creds, "https://www.googleapis.com/auth/drive");
    } catch (e: any) {
      console.warn("[GoogleDriveStorage] Lỗi lấy Access Token từ Service Account:", e.message);
      return null;
    }
  }

  /**
   * Tìm kiếm ID của tệp theo tên nằm trong thư mục Drive
   */
  static async findFileId(
    token: string,
    fileName: string,
    folderId: string = this.getFolderId()
  ): Promise<string | null> {
    try {
      const q = encodeURIComponent(`'${folderId}' in parents and name = '${fileName}' and trashed = false`);
      const res = await fetch(
        `https://www.googleapis.com/drive/v3/files?q=${q}&fields=files(id,name,mimeType,modifiedTime)&pageSize=5`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!res.ok) return null;
      const data = await res.json();
      if (data.files && data.files.length > 0) {
        return data.files[0].id;
      }
      return null;
    } catch {
      return null;
    }
  }

  /**
   * Đọc tệp JSON từ Google Drive
   */
  static async readJsonFile<T>(
    token: string,
    fileName: string,
    folderId: string = this.getFolderId()
  ): Promise<T | null> {
    try {
      const fileId = await this.findFileId(token, fileName, folderId);
      if (!fileId) return null;

      const res = await fetch(`https://www.googleapis.com/drive/v3/files/${fileId}?alt=media`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) return null;
      return (await res.json()) as T;
    } catch (err: any) {
      console.warn(`[GoogleDriveStorage] Lỗi đọc tệp "${fileName}" từ Drive:`, err.message);
      return null;
    }
  }

  /**
   * Ghi hoặc cập nhật tệp JSON lên Google Drive
   */
  static async writeJsonFile(
    token: string,
    fileName: string,
    data: any,
    folderId: string = this.getFolderId()
  ): Promise<string | null> {
    try {
      const existingFileId = await this.findFileId(token, fileName, folderId);
      const jsonContent = JSON.stringify(data, null, 2);

      if (existingFileId) {
        // Cập nhật nội dung tệp hiện có (uploadType=media)
        const updateRes = await fetch(
          `https://www.googleapis.com/upload/drive/v3/files/${existingFileId}?uploadType=media&supportsAllDrives=true`,
          {
            method: "PATCH",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json; charset=UTF-8",
            },
            body: jsonContent,
          }
        );

        if (!updateRes.ok) {
          const errText = await updateRes.text();
          throw new Error(`Cập nhật tệp "${fileName}" thất bại (${updateRes.status}): ${errText}`);
        }

        return existingFileId;
      } else {
        // Tạo tệp mới dạng multipart trong folder cha
        const metadata = {
          name: fileName,
          parents: [folderId],
          mimeType: "application/json",
        };

        const boundary = "-------314159265358979323846";
        const delimiter = `\r\n--${boundary}\r\n`;
        const closeDelimiter = `\r\n--${boundary}--`;

        const multipartRequestBody =
          delimiter +
          "Content-Type: application/json; charset=UTF-8\r\n\r\n" +
          JSON.stringify(metadata) +
          delimiter +
          "Content-Type: application/json; charset=UTF-8\r\n\r\n" +
          jsonContent +
          closeDelimiter;

        const createRes = await fetch(
          "https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&supportsAllDrives=true",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": `multipart/related; boundary=${boundary}`,
            },
            body: multipartRequestBody,
          }
        );

        if (!createRes.ok) {
          const errText = await createRes.text();
          throw new Error(`Tạo mới tệp "${fileName}" thất bại (${createRes.status}): ${errText}`);
        }

        const createData = await createRes.json();
        return createData.id || null;
      }
    } catch (err: any) {
      console.error(`[GoogleDriveStorage] Lỗi ghi tệp "${fileName}" lên Google Drive:`, err);
      throw err;
    }
  }

  /**
   * Đọc danh sách tài khoản người dùng từ tệp ontn_users.json trên Google Drive
   */
  static async loadUsers(customCreds?: ServiceAccountCredentials | null): Promise<User[] | null> {
    const token = await this.getAccessToken(customCreds);
    if (!token) return null;
    const users = await this.readJsonFile<User[]>(token, USERS_FILE_NAME);
    if (Array.isArray(users) && users.length > 0) {
      return users;
    }
    return null;
  }

  /**
   * Đồng bộ lưu danh sách tài khoản người dùng lên tệp ontn_users.json trên Google Drive
   */
  static async syncUsers(users: User[], customCreds?: ServiceAccountCredentials | null): Promise<boolean> {
    const token = await this.getAccessToken(customCreds);
    if (!token) return false;
    const fileId = await this.writeJsonFile(token, USERS_FILE_NAME, users);
    return Boolean(fileId);
  }

  /**
   * Đọc danh sách bài làm & tiến độ học sinh từ tệp ontn_attempts.json trên Google Drive
   */
  static async loadAttempts(customCreds?: ServiceAccountCredentials | null): Promise<StudentAttempt[] | null> {
    const token = await this.getAccessToken(customCreds);
    if (!token) return null;
    const attempts = await this.readJsonFile<StudentAttempt[]>(token, ATTEMPTS_FILE_NAME);
    if (Array.isArray(attempts)) {
      return attempts;
    }
    return null;
  }

  /**
   * Đồng bộ lưu bài làm học sinh lên tệp ontn_attempts.json trên Google Drive
   */
  static async syncAttempts(
    attempts: StudentAttempt[],
    customCreds?: ServiceAccountCredentials | null
  ): Promise<boolean> {
    const token = await this.getAccessToken(customCreds);
    if (!token) return false;
    const fileId = await this.writeJsonFile(token, ATTEMPTS_FILE_NAME, attempts);
    return Boolean(fileId);
  }

  /**
   * Kiểm tra tình trạng kết nối & thông số lưu trữ Google Drive Cloud
   */
  static async checkStatus(customCreds?: ServiceAccountCredentials | null): Promise<DriveStorageStatus> {
    const creds = customCreds || getDefaultServiceAccount();
    const folderId = this.getFolderId();

    if (!creds || !creds.client_email) {
      lastDriveStatus = {
        isConfigured: false,
        isConnected: false,
        folderId,
        errorMessage: "Chưa cấu hình Google Service Account (GOOGLE_SERVICE_ACCOUNT_KEY).",
      };
      return lastDriveStatus;
    }

    const token = await this.getAccessToken(creds);
    if (!token) {
      lastDriveStatus = {
        isConfigured: true,
        isConnected: false,
        folderId,
        clientEmail: creds.client_email,
        errorMessage: "Không thể lấy Access Token từ Google Service Account. Kiểm tra private key.",
      };
      return lastDriveStatus;
    }

    try {
      const usersFileId = await this.findFileId(token, USERS_FILE_NAME, folderId);
      const attemptsFileId = await this.findFileId(token, ATTEMPTS_FILE_NAME, folderId);

      lastDriveStatus = {
        isConfigured: true,
        isConnected: true,
        folderId,
        clientEmail: creds.client_email,
        usersFileId,
        attemptsFileId,
        lastSyncAt: Date.now(),
      };
      return lastDriveStatus;
    } catch (e: any) {
      lastDriveStatus = {
        isConfigured: true,
        isConnected: false,
        folderId,
        clientEmail: creds.client_email,
        errorMessage: e.message || "Lỗi kết nối tới thư mục Google Drive.",
      };
      return lastDriveStatus;
    }
  }
}
