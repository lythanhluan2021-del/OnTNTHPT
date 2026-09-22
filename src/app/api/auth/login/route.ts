import { NextRequest, NextResponse } from "next/server";
import { StorageAdapter } from "@/lib/db/storageAdapter";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { username, password } = body;

    if (!username || !password) {
      return NextResponse.json(
        { success: false, message: "Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu." },
        { status: 400 }
      );
    }

    const user = await StorageAdapter.getUserByUsername(username);

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "Tài khoản không tồn tại. Vui lòng kiểm tra lại hoặc liên hệ giáo viên cấp tài khoản.",
        },
        { status: 401 }
      );
    }

    if (!user.isActive) {
      return NextResponse.json(
        {
          success: false,
          message: "Tài khoản này đang tạm thời bị khóa. Vui lòng liên hệ giáo viên quản trị.",
        },
        { status: 403 }
      );
    }

    // Kiểm tra mật khẩu (hỗ trợ pass "admin" hoặc "thptnss2026" cho tài khoản admin, hoặc mật khẩu được lưu)
    const isValidPassword =
      user.password === password ||
      (user.role === "admin" && (password === "thptnss2026" || password === "admin"));

    if (!isValidPassword) {
      return NextResponse.json(
        { success: false, message: "Mật khẩu không chính xác. Vui lòng thử lại." },
        { status: 401 }
      );
    }

    // Cập nhật thời điểm đăng nhập gần nhất (không chặn đăng nhập nếu hệ thống tệp read-only)
    try {
      await StorageAdapter.updateUser(user.id, { lastLoginAt: Date.now() });
    } catch (e) {
      console.warn("Bỏ qua cập nhật lastLoginAt:", e);
    }

    // Trả về thông tin an toàn (bỏ trường password)
    const { password: _, ...safeUser } = user;

    return NextResponse.json({
      success: true,
      message: "Đăng nhập thành công!",
      user: safeUser,
    });
  } catch (error: any) {
    console.error("Lỗi đăng nhập:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Lỗi máy chủ nội bộ." },
      { status: 500 }
    );
  }
}
