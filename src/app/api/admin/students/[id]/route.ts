import { NextRequest, NextResponse } from "next/server";
import { StorageAdapter } from "@/lib/db/storageAdapter";

export const dynamic = "force-dynamic";

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const body = await req.json();

    // Nếu không nhập mật khẩu mới (hoặc chuỗi rỗng), giữ nguyên mật khẩu cũ
    if (typeof body.password === "string" && !body.password.trim()) {
      delete body.password;
    }

    if (body.username) {
      body.username = body.username.trim().toLowerCase();
    }
    if (body.fullName) {
      body.fullName = body.fullName.trim();
    }
    if (body.className) {
      body.className = body.className.trim();
    }

    const updated = await StorageAdapter.updateUser(id, body);
    const { password: _, ...safeUser } = updated;

    return NextResponse.json({
      success: true,
      message: "Cập nhật thông tin người dùng thành công.",
      student: safeUser,
      user: safeUser,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || "Lỗi cập nhật." },
      { status: 400 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const ok = await StorageAdapter.deleteUser(id);

    if (!ok) {
      return NextResponse.json(
        { success: false, message: "Không tìm thấy người dùng cần xóa." },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Đã xóa tài khoản người dùng và dọn dẹp dữ liệu thành công.",
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || "Lỗi khi xóa người dùng." },
      { status: 400 }
    );
  }
}
