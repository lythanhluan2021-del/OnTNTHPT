import { NextRequest, NextResponse } from "next/server";
import { StorageAdapter } from "@/lib/db/storageAdapter";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const selectedClass = searchParams.get("class") || "all";

    const overview = await StorageAdapter.getAdminDashboardOverview(selectedClass);
    const students = await StorageAdapter.getStudentProgressSummaries(selectedClass);

    return NextResponse.json({
      success: true,
      data: {
        overview,
        students,
      },
    });
  } catch (error: any) {
    console.error("Lỗi lấy dữ liệu Admin Dashboard:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Lỗi máy chủ nội bộ." },
      { status: 500 }
    );
  }
}
