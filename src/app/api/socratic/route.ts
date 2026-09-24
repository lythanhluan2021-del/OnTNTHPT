import { NextRequest, NextResponse } from "next/server";
import { generateSocraticGuidance, sanitizeTutorResponse } from "@/lib/socraticEngine";
import { Question } from "@/types";

/**
 * Gọi REST API tới Google Gemini (Hỗ trợ thế hệ Gemini 3)
 */
async function callGeminiApi(
  model: string,
  apiKey: string,
  systemInstruction: string,
  userMessage: string
): Promise<string> {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

  const payload = {
    contents: [
      {
        role: "user",
        parts: [{ text: userMessage }],
      },
    ],
    systemInstruction: {
      parts: [{ text: systemInstruction }],
    },
    generationConfig: {
      temperature: 0.4,
      maxOutputTokens: 300, // Đảm bảo câu trả lời luôn ngắn gọn, không lan man
    },
  };

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    const errorMsg =
      errorData?.error?.message ||
      `Lỗi từ Gemini API (Mã phản hồi: ${response.status})`;
    throw new Error(errorMsg);
  }

  const data = await response.json();
  const text =
    data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || "";

  if (!text) {
    throw new Error("Gemini không trả về nội dung hợp lệ.");
  }

  return text;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // 1. CHẾ ĐỘ KIỂM TRA KẾT NỐI (TEST CONNECTION)
    if (body.testConnection) {
      const apiKey = body.customApiKey?.trim() || process.env.GEMINI_API_KEY || "";
      const model = body.model?.trim() || "gemini-3.8-flash";

      if (!apiKey) {
        return NextResponse.json(
          { error: "Vui lòng nhập API Key để kiểm tra." },
          { status: 400 }
        );
      }

      try {
        await callGeminiApi(
          model,
          apiKey,
          "Bạn là trợ lý kiểm tra kết nối API.",
          "Hãy phản hồi duy nhất 1 từ: 'OK'."
        );
        return NextResponse.json({
          success: true,
          message: `Kết nối thành công tới ${model}!`,
        });
      } catch (testErr: any) {
        // Nếu model 3.8 bận hoặc chưa khả dụng, thử fallback sang 3.5-flash-lite
        if (model === "gemini-3.8-flash") {
          try {
            await callGeminiApi(
              "gemini-3.5-flash-lite",
              apiKey,
              "Bạn là trợ lý kiểm tra kết nối API.",
              "Hãy phản hồi duy nhất 1 từ: 'OK'."
            );
            return NextResponse.json({
              success: true,
              message: "Kết nối thành công (qua mô hình Gemini 3.5 Lite)!",
              fallbackModel: "gemini-3.5-flash-lite",
            });
          } catch (fallbackErr: any) {
            return NextResponse.json(
              { error: testErr.message || fallbackErr.message },
              { status: 400 }
            );
          }
        }
        return NextResponse.json(
          { error: testErr.message || "Lỗi kiểm tra API Key." },
          { status: 400 }
        );
      }
    }

    // 2. CHẾ ĐỘ GIA SƯ SOCRATIC TƯ DUY
    const {
      question,
      prompt,
      historyCount,
      selectedOption,
      isCorrect,
      customApiKey,
      model = "gemini-3.8-flash",
    }: {
      question: Question;
      prompt: string;
      historyCount?: number;
      selectedOption?: "A" | "B" | "C" | "D" | null;
      isCorrect?: boolean;
      customApiKey?: string;
      model?: string;
    } = body;

    if (!question || !prompt) {
      return NextResponse.json(
        { error: "Thiếu dữ liệu câu hỏi hoặc nội dung trò chuyện." },
        { status: 400 }
      );
    }

    const apiKey = customApiKey?.trim() || process.env.GEMINI_API_KEY || "";

    // Nếu không có API Key, tự động chạy bộ máy Offline cực nhanh
    if (!apiKey) {
      const rawFallback = generateSocraticGuidance(
        question,
        prompt,
        historyCount || 0,
        selectedOption,
        isCorrect
      );
      const safeFallback = sanitizeTutorResponse(rawFallback, question);
      return NextResponse.json({
        success: true,
        response: safeFallback,
        engine: "offline",
      });
    }

    // XÂY DỰNG SOCRATIC SYSTEM PROMPT CHUẨN SƯ PHẠM GDPT 2018
    const optionsText = question.options
      ? question.options.map((opt) => `${opt.id}. ${opt.content}`).join("\n")
      : "Dạng câu hỏi Đúng / Sai hoặc thực hành";

    const systemInstruction = `Bạn là Trợ lý Gia sư Socratic đồng hành ôn thi Tốt nghiệp THPT môn Tin học (Chương trình GDPT 2018).

NGUYÊN TẮC SƯ PHẠM CỐT LÕI (BẮT BUỘC):
1. TUYỆT ĐỐI KHÔNG TIẾT LỘ ĐÁP ÁN ĐÚNG hay nói kiểu "hãy chọn phương án X" hay "đáp án là X".
2. TRẢ LỜI CỰC KỲ NGẮN GỌN VÀ SÚC TÍCH: Chỉ từ 3 đến tối đa 5 dòng (dưới 70 từ).
3. ĐI THẲNG VÀO TRỌNG TÂM:
   - Nếu học sinh chọn sai phương án, hãy chỉ ra ngay BẪY TƯ DUY của phương án đó (vì sao phương án đó vi phạm điều kiện đề bài).
   - Nêu ngắn gọn 1 nguyên tắc kiến thức cốt lõi.
   - Kết thúc bằng 1 câu hỏi gợi mở để học sinh tự đối chiếu từ khóa trong đề.
4. Định dạng Markdown rõ ràng với in đậm (**từ khóa**) và gạch đầu dòng (•) để học sinh nắm bắt trong 3 giây.
5. Không chào hỏi thủ tục, không rườm rà.`;

    const userMessage = `NGỮ CẢNH CÂU HỎI:
- Đề bài: ${question.content}
- Chuyên đề: ${question.chapterName || question.topicName}
- Các phương án:
${optionsText}
- Phương án đúng trong đáp án: ${question.correctAnswer || "Chưa cung cấp"} (ĐÂY LÀ CHÂN LÝ THAM KHẢO, BẠN TUYỆT ĐỐI KHÔNG ĐƯỢC NÓI CHO HỌC SINH BIẾT)
- Phương án học sinh đã chọn: ${selectedOption || "Chưa chọn"} (Kết quả: ${isCorrect ? "Đúng" : isCorrect === false ? "Sai" : "Chưa chấm"})
- Lý thuyết tài liệu gợi ý: ${question.hints?.level1_concept || ""}

CÂU HỎI / THẮC MẮC CỦA HỌC SINH:
"${prompt}"

Hãy phản hồi theo phương pháp Socratic cực kỳ ngắn gọn (3-4 dòng), chỉ rõ bẫy và gợi mở suy luận!`;

    try {
      let rawAI = "";
      try {
        rawAI = await callGeminiApi(model, apiKey, systemInstruction, userMessage);
      } catch (primaryErr: any) {
        // Thử dự phòng sang Gemini 3.5 Lite nếu model 3.8 gặp sự cố
        console.warn(`Model ${model} thất bại, thử fallback sang gemini-3.5-flash-lite:`, primaryErr.message);
        rawAI = await callGeminiApi(
          "gemini-3.5-flash-lite",
          apiKey,
          systemInstruction,
          userMessage
        );
      }

      // Chạy qua Guardrail bảo vệ đáp án 2 lớp
      const safeAI = sanitizeTutorResponse(rawAI, question);

      return NextResponse.json({
        success: true,
        response: safeAI,
        engine: "gemini",
      });
    } catch (aiErr: any) {
      console.error("Lỗi gọi Gemini API, chuyển sang Offline Engine:", aiErr.message);
      // Fallback êm ái sang bộ máy nội bộ nếu mất mạng hoặc key lỗi
      const fallbackText = generateSocraticGuidance(
        question,
        prompt,
        historyCount || 0,
        selectedOption,
        isCorrect
      );
      const safeFallback = sanitizeTutorResponse(fallbackText, question);
      return NextResponse.json({
        success: true,
        response: safeFallback,
        engine: "offline_fallback",
        warning: "Đã chuyển sang bộ máy Offline do lỗi kết nối Gemini API.",
      });
    }
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Lỗi xử lý yêu cầu Socratic" },
      { status: 500 }
    );
  }
}
