import { NextRequest, NextResponse } from "next/server";
import { StorageAdapter } from "@/lib/db/storageAdapter";
import { ExamSubmission } from "@/types/examManagement";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const examId = searchParams.get("examId") || undefined;

    const submissions = await StorageAdapter.getSubmissions(examId);
    return NextResponse.json({ success: true, submissions });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const submission: ExamSubmission = await req.json();

    if (!submission.examId || !submission.studentId) {
      return NextResponse.json(
        { success: false, message: "Dữ liệu bài nộp thiếu thông tin bắt buộc (examId, studentId)." },
        { status: 400 }
      );
    }

    await StorageAdapter.saveSubmission(submission);
    return NextResponse.json({
      success: true,
      message: "Đã lưu bài thi của thí sinh lên máy chủ thành công!",
      submissionId: submission.id,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || "Lỗi lưu bài nộp." },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const examId = searchParams.get("examId");
    const studentId = searchParams.get("studentId");

    if (!examId || !studentId) {
      return NextResponse.json(
        { success: false, message: "Thiếu thông tin examId hoặc studentId." },
        { status: 400 }
      );
    }

    await StorageAdapter.resetStudentSubmission(examId, studentId);
    return NextResponse.json({
      success: true,
      message: "Đã thu hồi bài nộp thành công, cho phép thí sinh làm lại bài thi.",
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
