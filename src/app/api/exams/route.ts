import { NextRequest, NextResponse } from "next/server";
import { StorageAdapter } from "@/lib/db/storageAdapter";
import { ExamDefinition } from "@/types/examManagement";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const isPublishedOnly = searchParams.get("published") === "true";

    const allExams = await StorageAdapter.getExams();
    const exams = isPublishedOnly
      ? allExams.filter((e) => e.status === "published")
      : allExams;

    return NextResponse.json({ success: true, exams });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (body.exams && Array.isArray(body.exams)) {
      await StorageAdapter.saveExams(body.exams);
      return NextResponse.json({
        success: true,
        message: `Đã lưu danh sách ${body.exams.length} kỳ thi thành công!`,
      });
    }

    const exam: ExamDefinition = body.exam || body;
    if (!exam.id || !exam.title) {
      return NextResponse.json(
        { success: false, message: "Dữ liệu kỳ thi không hợp lệ." },
        { status: 400 }
      );
    }

    await StorageAdapter.saveExam(exam);
    return NextResponse.json({
      success: true,
      message: `Đã xuất bản/lưu kỳ thi "${exam.title}" lên máy chủ thành công!`,
      exam,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || "Lỗi lưu kỳ thi." },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ success: false, message: "Thiếu mã kỳ thi (id)." }, { status: 400 });
    }

    await StorageAdapter.deleteExam(id);
    return NextResponse.json({ success: true, message: `Đã xóa kỳ thi ${id} thành công!` });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
