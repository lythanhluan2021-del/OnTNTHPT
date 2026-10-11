import { NextRequest, NextResponse } from "next/server";
import { GoogleDriveStorage } from "@/lib/db/googleDriveStorage";
import { StorageAdapter } from "@/lib/db/storageAdapter";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const status = await GoogleDriveStorage.checkStatus();
    const users = await StorageAdapter.getUsers();
    const attempts = await StorageAdapter.getAttempts();

    return NextResponse.json({
      success: true,
      status: {
        ...status,
        localUsersCount: users.length,
        localAttemptsCount: attempts.length,
      },
    });
  } catch (error: any) {
    console.error("Lỗi kiểm tra Google Drive Storage:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Lỗi máy chủ kiểm tra Google Drive." },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const action = body.action || "sync_all"; // "backup_to_drive" | "restore_from_drive" | "sync_all"

    const serviceAccount = body.serviceAccount || undefined;

    // 1. Sao lưu dữ liệu hiện tại lên Google Drive (Backup)
    if (action === "backup_to_drive") {
      const users = await StorageAdapter.getUsers();
      const attempts = await StorageAdapter.getAttempts();

      const userOk = await GoogleDriveStorage.syncUsers(users, serviceAccount);
      const attemptOk = await GoogleDriveStorage.syncAttempts(attempts, serviceAccount);

      if (!userOk && !attemptOk) {
        return NextResponse.json(
          {
            success: false,
            message: "Không thể lưu tệp lên Google Drive. Vui lòng kiểm tra quyền chia sẻ thư mục cho email Service Account.",
          },
          { status: 400 }
        );
      }

      return NextResponse.json({
        success: true,
        message: `Đã sao lưu thành công ${users.length} tài khoản người dùng và ${attempts.length} kết quả làm bài lên Google Drive!`,
        usersCount: users.length,
        attemptsCount: attempts.length,
      });
    }

    // 2. Khôi phục dữ liệu từ Google Drive về hệ thống (Restore)
    if (action === "restore_from_drive") {
      const driveUsers = await GoogleDriveStorage.loadUsers(serviceAccount);
      const driveAttempts = await GoogleDriveStorage.loadAttempts(serviceAccount);

      let restoredUsers = 0;
      let restoredAttempts = 0;

      if (driveUsers && Array.isArray(driveUsers)) {
        await StorageAdapter.saveUsers(driveUsers);
        restoredUsers = driveUsers.length;
      }

      if (driveAttempts && Array.isArray(driveAttempts)) {
        await StorageAdapter.saveAttemptsBatch(driveAttempts);
        restoredAttempts = driveAttempts.length;
      }

      return NextResponse.json({
        success: true,
        message: `Đã khôi phục thành công ${restoredUsers} tài khoản người dùng từ Google Drive vào hệ thống!`,
        restoredUsers,
        restoredAttempts,
      });
    }

    // 3. Đồng bộ 2 chiều (Sync All): Đọc từ Drive nếu hệ thống trống, hoặc đẩy lên Drive nếu Drive chưa có
    const users = await StorageAdapter.getUsers();
    const attempts = await StorageAdapter.getAttempts();

    const driveUsers = await GoogleDriveStorage.loadUsers(serviceAccount);
    if (!driveUsers || driveUsers.length === 0) {
      // Đẩy dữ liệu hiện tại lên Drive
      await GoogleDriveStorage.syncUsers(users, serviceAccount);
      await GoogleDriveStorage.syncAttempts(attempts, serviceAccount);
    } else if (users.length <= 1 && driveUsers.length > 1) {
      // Khôi phục từ Drive về
      await StorageAdapter.saveUsers(driveUsers);
    } else {
      // Cập nhật bản mới nhất lên Drive
      await GoogleDriveStorage.syncUsers(users, serviceAccount);
      await GoogleDriveStorage.syncAttempts(attempts, serviceAccount);
    }

    const updatedStatus = await GoogleDriveStorage.checkStatus(serviceAccount);

    return NextResponse.json({
      success: true,
      message: "Đồng bộ hai chiều với Google Drive hoàn tất thành công!",
      status: updatedStatus,
    });
  } catch (error: any) {
    console.error("Lỗi thao tác Google Drive Storage:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Lỗi thao tác Google Drive." },
      { status: 500 }
    );
  }
}
