import { NextRequest, NextResponse } from "next/server";
import { parseGoogleSheetData } from "@/lib/driveSync";

export async function POST(req: NextRequest) {
  try {
    const { sheetUrl } = await req.json();

    if (!sheetUrl) {
      return NextResponse.json(
        { error: "Vui lòng cung cấp link Google Drive hoặc Google Sheets!" },
        { status: 400 }
      );
    }

    // Tải dữ liệu từ URL Google Sheets công khai
    const response = await fetch(sheetUrl);
    if (!response.ok) {
      return NextResponse.json(
        { error: "Không thể truy cập tài liệu Google Drive. Vui lòng kiểm tra quyền chia sẻ." },
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
      { error: error.message || "Lỗi xử lý tài liệu" },
      { status: 500 }
    );
  }
}
