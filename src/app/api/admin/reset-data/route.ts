import { NextRequest, NextResponse } from "next/server";
import { StorageAdapter } from "@/lib/db/storageAdapter";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    // Mặc định là purgeAllStudents = true để dọn sạch toàn bộ học sinh mẫu và trả về 0 học sinh
    const purgeAllStudents = body.purgeAllStudents !== false;

    const result = await StorageAdapter.resetMockData(purgeAllStudents);

    return NextResponse.json({
      success: true,
      message: result.message,
      remainingUsers: result.remainingUsers,
    });
  } catch (error: any) {
    console.error("[ResetDataAPI] Lỗi khi dọn dẹp dữ liệu:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Lỗi trong quá trình dọn dẹp dữ liệu." },
      { status: 500 }
    );
  }
}
