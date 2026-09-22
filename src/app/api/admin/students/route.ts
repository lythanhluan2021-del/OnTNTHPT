import { NextRequest, NextResponse } from "next/server";
import { StorageAdapter } from "@/lib/db/storageAdapter";
import { User } from "@/types";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const className = searchParams.get("class");

    let students = StorageAdapter.getUsers().filter((u) => u.role === "student");
    if (className && className !== "all") {
      students = students.filter((s) => s.className === className);
    }

    const safeStudents = students.map(({ password: _, ...s }) => s);

    return NextResponse.json({
      success: true,
      students: safeStudents,
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Hỗ trợ cả 2 chế độ: Thêm đơn lẻ ({ fullName, username, password, className })
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
          const newUser = StorageAdapter.createUser({
            username: item.username.trim(),
            fullName: item.fullName.trim(),
            role: "student",
            className: item.className ? item.className.trim() : "12A1",
            schoolYear: item.schoolYear || "2026-2027",
            password: item.password ? item.password.trim() : "123",
            isActive: true,
          });
          created.push(newUser);
        } catch (e: any) {
          errors.push(`Học sinh "${item.username}": ${e.message}`);
        }
      }

      return NextResponse.json({
        success: true,
        message: `Đã nhập thành công ${created.length} học sinh.`,
        createdCount: created.length,
        errors,
      });
    }

    // Thêm đơn lẻ
    const { username, fullName, className, password } = body;
    if (!username || !fullName) {
      return NextResponse.json(
        { success: false, message: "Vui lòng cung cấp Tên đăng nhập và Họ tên học sinh." },
        { status: 400 }
      );
    }

    const newUser = StorageAdapter.createUser({
      username: username.trim(),
      fullName: fullName.trim(),
      role: "student",
      className: className ? className.trim() : "12A1",
      schoolYear: "2026-2027",
      password: password ? password.trim() : "123",
      isActive: true,
    });

    const { password: _, ...safeUser } = newUser;

    return NextResponse.json({
      success: true,
      message: `Đã cấp tài khoản cho học sinh "${fullName}" thành công!`,
      student: safeUser,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || "Lỗi tạo tài khoản học sinh." },
      { status: 400 }
    );
  }
}
