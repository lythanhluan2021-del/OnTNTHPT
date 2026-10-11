import { NextRequest, NextResponse } from "next/server";
import { StorageAdapter } from "@/lib/db/storageAdapter";
import { User } from "@/types";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, fullName, avatarUrl, className } = body;

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { success: false, message: "Email Google không hợp lệ." },
        { status: 400 }
      );
    }

    const cleanEmail = email.trim().toLowerCase();
    const cleanName = fullName?.trim() || cleanEmail.split("@")[0];
    const generatedUsername = cleanEmail.split("@")[0].replace(/[^a-z0-9_]/gi, "_").toLowerCase();

    // Lấy toàn bộ danh sách người dùng hiện tại
    const users = await StorageAdapter.getUsers();

    // Tìm kiếm xem người dùng đã tồn tại chưa (qua email hoặc username trùng khớp)
    let user = users.find(
      (u) =>
        (u.email && u.email.toLowerCase() === cleanEmail) ||
        u.username.toLowerCase() === generatedUsername
    );

    if (user) {
      // Cập nhật thông tin phiên đăng nhập mới
      const updatedUser: User = {
        ...user,
        email: cleanEmail,
        fullName: user.fullName || cleanName,
        avatarUrl: avatarUrl || user.avatarUrl,
        authProvider: "google",
        lastLoginAt: Date.now(),
        className: user.className || className || "Lớp Tự Do",
        accountType: user.accountType || "free",
      };

      const updatedUsers = users.map((u) => (u.id === user!.id ? updatedUser : u));
      await StorageAdapter.saveUsers(updatedUsers);

      const { password: _, ...safeUser } = updatedUser;
      return NextResponse.json({
        success: true,
        message: `Chào mừng ${safeUser.fullName} đã đăng nhập thành công bằng tài khoản Google!`,
        user: safeUser,
        isNewUser: false,
      });
    } else {
      // Tạo tài khoản mới cho học sinh đăng nhập lần đầu bằng Google
      const newUser: User = {
        id: `usr-gg-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`,
        username: generatedUsername,
        fullName: cleanName,
        email: cleanEmail,
        role: "student",
        className: className || "Lớp Tự Do",
        schoolYear: "2026 - 2027",
        isActive: true,
        createdAt: Date.now(),
        lastLoginAt: Date.now(),
        authProvider: "google",
        accountType: "free",
        avatarUrl: avatarUrl || undefined,
      };

      const updatedUsers = [...users, newUser];
      // Tự động lưu và đồng bộ lên Google Drive (ontn_users.json)
      await StorageAdapter.saveUsers(updatedUsers);

      const { password: _, ...safeUser } = newUser;
      return NextResponse.json({
        success: true,
        message: `Chào mừng học sinh mới ${safeUser.fullName}! Tài khoản đã được liên kết và đồng bộ lên Google Drive.`,
        user: safeUser,
        isNewUser: true,
      });
    }
  } catch (error: any) {
    console.error("Lỗi xác thực Google Sign-In:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Lỗi máy chủ khi đăng nhập Google." },
      { status: 500 }
    );
  }
}
