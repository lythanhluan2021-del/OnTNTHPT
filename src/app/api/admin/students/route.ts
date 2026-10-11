import { NextRequest, NextResponse } from "next/server";
import { StorageAdapter } from "@/lib/db/storageAdapter";
import { User } from "@/types";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const className = searchParams.get("class");
    const role = searchParams.get("role"); // "all" | "student" | "teacher" | "admin"

    let allUsers = await StorageAdapter.getUsers();

    if (role && role !== "all") {
      allUsers = allUsers.filter((u) => u.role === role);
    }

    if (className && className !== "all") {
      allUsers = allUsers.filter((s) => s.className === className);
    }

    const safeUsers = allUsers.map(({ password: _, ...s }) => s);
    const safeStudents = safeUsers.filter((u) => u.role === "student");

    return NextResponse.json({
      success: true,
      users: safeUsers,
      students: safeStudents,
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Hỗ trợ cả 2 chế độ: Thêm đơn lẻ ({ fullName, username, password, className, role })
    // hoặc Thêm hàng loạt ({ students: [...] })
    if (Array.isArray(body.students)) {
      const created: User[] = [];
      const errors: string[] = [];

      for (const item of body.students) {
        if (!item.username || !item.fullName) {
          errors.push(`Bỏ qua mục thiếu dữ liệu: ${JSON.stringify(item)}`);
          continue;
        }

        try {
          const userRole = item.role === "admin" || item.role === "teacher" ? item.role : "student";
          const newUser = await StorageAdapter.createUser({
            username: item.username.trim().toLowerCase(),
            fullName: item.fullName.trim(),
            role: userRole,
            className: item.className ? item.className.trim() : (userRole === "student" ? "12A1" : "Tổ Tin"),
            schoolYear: item.schoolYear || "2026-2027",
            password: item.password ? item.password.trim() : "123",
            isActive: item.isActive !== undefined ? item.isActive : true,
          });
          created.push(newUser);
        } catch (e: any) {
          errors.push(`Người dùng "${item.username}": ${e.message}`);
        }
      }

      return NextResponse.json({
        success: true,
        message: `Đã nhập thành công ${created.length} tài khoản người dùng.`,
        createdCount: created.length,
        errors,
      });
    }

    // Thêm đơn lẻ
    const { username, fullName, className, password, role } = body;
    if (!username || !fullName) {
      return NextResponse.json(
        { success: false, message: "Vui lòng cung cấp Tên đăng nhập và Họ tên người dùng." },
        { status: 400 }
      );
    }

    const userRole = role === "admin" || role === "teacher" ? role : "student";

    const newUser = await StorageAdapter.createUser({
      username: username.trim().toLowerCase(),
      fullName: fullName.trim(),
      role: userRole,
      className: className ? className.trim() : (userRole === "student" ? "12A1" : "Tổ Tin"),
      schoolYear: "2026-2027",
      password: password ? password.trim() : "123",
      isActive: true,
    });

    const { password: _, ...safeUser } = newUser;

    return NextResponse.json({
      success: true,
      message: `Đã cấp tài khoản cho ${userRole === "student" ? "học sinh" : userRole === "teacher" ? "giáo viên" : "quản trị viên"} "${fullName}" thành công!`,
      student: safeUser,
      user: safeUser,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || "Lỗi tạo tài khoản người dùng." },
      { status: 400 }
    );
  }
}
