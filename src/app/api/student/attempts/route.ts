import { NextRequest, NextResponse } from "next/server";
import { StorageAdapter } from "@/lib/db/storageAdapter";
import { StudentAttempt } from "@/types";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const studentId = searchParams.get("studentId");

    const attempts = StorageAdapter.getAttempts(studentId || undefined);
    return NextResponse.json({ success: true, attempts });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Hỗ trợ cả gửi 1 attempt hoặc mảng attempts
    if (Array.isArray(body.attempts)) {
      StorageAdapter.saveAttemptsBatch(body.attempts);
      return NextResponse.json({
        success: true,
        message: `Đã lưu ${body.attempts.length} lượt làm bài.`,
      });
    }

    const attempt: StudentAttempt = body;
    if (!attempt.questionId) {
      return NextResponse.json(
        { success: false, message: "Thiếu questionId." },
        { status: 400 }
      );
    }

    StorageAdapter.saveAttempt(attempt);

    return NextResponse.json({
      success: true,
      message: "Đã lưu kết quả làm bài thành công!",
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || "Lỗi lưu kết quả." },
      { status: 500 }
    );
  }
}
