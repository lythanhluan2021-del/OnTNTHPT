import { NextRequest, NextResponse } from "next/server";
import { StorageAdapter } from "@/lib/db/storageAdapter";
import { GoogleSheetsSync } from "@/lib/db/googleSheetsSync";
import { GoogleDriveStorage } from "@/lib/db/googleDriveStorage";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const action = searchParams.get("action");

    const users = await StorageAdapter.getUsers();
    const attempts = await StorageAdapter.getAttempts();

    // 1. Xuất file CSV tiến độ học sinh để mở Google Sheets / Excel
    if (action === "export_progress_csv") {
      const csv = GoogleSheetsSync.generateProgressCsv(users, attempts);
      return new NextResponse(csv, {
        headers: {
          "Content-Type": "text/csv; charset=utf-8",
          "Content-Disposition": 'attachment; filename="SINO_Bao_Cao_Tien_Do_Hoc_Sinh.csv"',
        },
      });
    }

    // 2. Xuất file CSV nhật ký đăng nhập
    if (action === "export_login_csv") {
      const csv = GoogleSheetsSync.generateLoginHistoryCsv(users);
      return new NextResponse(csv, {
        headers: {
          "Content-Type": "text/csv; charset=utf-8",
          "Content-Disposition": 'attachment; filename="SINO_Nhat_Ky_Dang_Nhap.csv"',
        },
      });
    }

    // 3. Trả về dữ liệu JSON báo cáo tiến độ cho Admin Dashboard
    const progressList = GoogleSheetsSync.computeStudentProgress(users, attempts);
    const folderId = GoogleDriveStorage.getFolderId();

    return NextResponse.json({
      success: true,
      data: {
        students: progressList,
        summary: {
          totalStudents: progressList.length,
          activeCount: progressList.filter((p) => p.totalQuestions > 0).length,
          excellentCount: progressList.filter((p) => p.rating === "Xuất Sắc").length,
          goodCount: progressList.filter((p) => p.rating === "Khá").length,
          averageCount: progressList.filter((p) => p.rating === "Trung Bình").length,
          needsHelpCount: progressList.filter((p) => p.rating === "Cần Cố Gắng").length,
          notStartedCount: progressList.filter((p) => p.rating === "Chưa Tham Gia").length,
          totalQuestionsDone: attempts.length,
          averageScoreOverall:
            progressList.length > 0
              ? Math.round(
                  (progressList.reduce((acc, p) => acc + p.averageScore, 0) /
                    Math.max(1, progressList.filter((p) => p.totalQuestions > 0).length)) *
                    10
                ) / 10
              : 0,
        },
        googleDrive: {
          folderId,
          folderUrl: `https://drive.google.com/drive/folders/${folderId}`,
          isConfigured: GoogleDriveStorage.isConfigured(),
        },
      },
    });
  } catch (error: any) {
    console.error("Lỗi API google-sheet-sync:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Lỗi nạp dữ liệu tiến trình học sinh." },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const users = await StorageAdapter.getUsers();
    const attempts = await StorageAdapter.getAttempts();

    const result = await GoogleSheetsSync.syncToGoogleDrive(users, attempts);

    return NextResponse.json(result);
  } catch (error: any) {
    console.error("Lỗi đồng bộ sang Google Sheet:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Lỗi thực hiện đồng bộ." },
      { status: 500 }
    );
  }
}
