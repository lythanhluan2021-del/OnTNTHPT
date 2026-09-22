import { NextRequest, NextResponse } from "next/server";
import { StorageAdapter } from "@/lib/db/storageAdapter";
import { getAllWeeklyPlans } from "@/data/weeklyPlan";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const weekId = searchParams.get("weekId") || undefined;
    const className = searchParams.get("class") || undefined;
    const mode = searchParams.get("mode") || "week";

    if (mode === "matrix") {
      const matrixData = await StorageAdapter.getWeeklyMatrix(className);
      return NextResponse.json({
        success: true,
        weeks: matrixData.weeks,
        rows: matrixData.rows,
      });
    }

    const allWeeks = getAllWeeklyPlans();
    const progress = await StorageAdapter.getWeeklyProgress(weekId, className);

    return NextResponse.json({
      success: true,
      allWeeks,
      ...progress,
    });
  } catch (error: any) {
    console.error("[WeeklyProgressAPI] Lỗi khi lấy tiến độ tuần:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Lỗi khi lấy tiến độ theo tuần." },
      { status: 500 }
    );
  }
}
