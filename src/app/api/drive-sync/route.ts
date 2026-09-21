import { NextRequest, NextResponse } from "next/server";
import { parseGoogleSheetData, normalizeGoogleSheetUrl } from "@/lib/driveSync";

export async function POST(req: NextRequest) {
  try {
    const { sheetUrl } = await req.json();

    if (!sheetUrl) {
      return NextResponse.json(
        { error: "Vui lòng cung cấp link Google Drive hoặc Google Sheets!" },
        { status: 400 }
      );
    }

    const exportUrl = normalizeGoogleSheetUrl(sheetUrl);

    // Tải dữ liệu từ Google Sheets công khai
    const response = await fetch(exportUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        {
          error:
            "Không thể tải nội dung bảng tính. Vui lòng kiểm tra quyền chia sẻ: 'Bất kỳ ai có đường liên kết đều có thể xem' (Anyone with link can view).",
        },
        { status: 400 }
      );
    }

    const csvText = await response.text();
    const parsed = parseGoogleSheetData(csvText);

    return NextResponse.json({
      success: true,
      data: parsed,
      count: parsed.questions.length,
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Lỗi xử lý tài liệu Google Drive" },
      { status: 500 }
    );
  }
}
