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

    const updated = await StorageAdapter.updateUser(id, body);
    const { password: _, ...safeUser } = updated;

    return NextResponse.json({
      success: true,
      message: "Cập nhật thông tin học sinh thành công.",
      student: safeUser,
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
        { success: false, message: "Không tìm thấy học sinh cần xóa." },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Đã xóa học sinh khỏi danh sách.",
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || "Lỗi khi xóa học sinh." },
      { status: 400 }
    );
  }
}
