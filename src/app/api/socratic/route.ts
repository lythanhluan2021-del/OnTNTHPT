import { NextRequest, NextResponse } from "next/server";
import { generateSocraticGuidance, sanitizeTutorResponse } from "@/lib/socraticEngine";
import { Question } from "@/types";

export async function POST(req: NextRequest) {
  try {
    const { question, prompt, historyCount }: { question: Question; prompt: string; historyCount: number } =
      await req.json();

    if (!question || !prompt) {
      return NextResponse.json(
        { error: "Thiếu dữ liệu câu hỏi hoặc câu hỏi của học sinh." },
        { status: 400 }
      );
    }

    // Sinh phản hồi gợi mở tư duy dựa trên tài liệu
    const rawResponse = generateSocraticGuidance(question, prompt, historyCount || 0);

    // Chạy qua Guardrail bảo vệ đáp án
    const safeResponse = sanitizeTutorResponse(rawResponse, question);

    return NextResponse.json({
      success: true,
      response: safeResponse,
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Lỗi xử lý gia sư Socratic" },
      { status: 500 }
    );
  }
}
