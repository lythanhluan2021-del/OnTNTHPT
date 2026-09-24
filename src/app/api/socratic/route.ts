import { NextRequest, NextResponse } from "next/server";
import { generateSocraticGuidance, sanitizeTutorResponse } from "@/lib/socraticEngine";
import { Question } from "@/types";

/**
 * Gọi REST API tới Google Gemini với cấu hình tương thích mọi phiên bản
 */
async function callGeminiApi(
  model: string,
  apiKey: string,
  systemInstruction: string,
  userMessage: string
): Promise<string> {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

  // Ghép nối system instruction vào nội dung để đảm bảo tương thích 100% với mọi model
  const promptText = `HƯỚNG DẪN HỆ THỐNG:\n${systemInstruction}\n\n---\n\n${userMessage}`;

  const payload = {
    contents: [
      {
        role: "user",
        parts: [{ text: promptText }],
      },
    ],
    generationConfig: {
      temperature: 0.4,
      maxOutputTokens: 1500, // Đảm bảo đủ token cho cả chuỗi suy luận (thinking) và câu trả lời hoàn chỉnh
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
      `Lỗi từ Gemini API (Mã: ${response.status})`;
    throw new Error(errorMsg);
  }

  const data = await response.json();
  const candidate = data?.candidates?.[0];
  const parts = candidate?.content?.parts || [];
  const text = parts
    .map((p: any) => p.text || "")
    .filter(Boolean)
    .join("\n")
    .trim();

  // Đảm bảo không trả về mẩu câu cụt ngắn bất thường
  if (!text || text.length < 25) {
    throw new Error("Gemini trả về phản hồi chưa hoàn chỉnh hoặc bị ngắt quãng.");
  }

  return text;
}

/**
 * Thử gọi theo chuỗi mô hình dự phòng (Cascade Fallback)
 * Giúp tự động nhận diện mô hình nào đang mở trên tài khoản Google AI Studio của học sinh
 */
async function callGeminiWithFallback(
  preferredModel: string,
  apiKey: string,
  systemInstruction: string,
  userMessage: string
): Promise<{ text: string; modelUsed: string }> {
  const candidateModels = Array.from(
    new Set([
      preferredModel,
      "gemini-2.5-flash",
      "gemini-2.0-flash",
      "gemini-1.5-flash",
      "gemini-1.5-flash-8b",
      "gemini-3.8-flash",
      "gemini-3.5-flash-lite",
      "gemini-1.5-pro",
    ])
  ).filter(Boolean);

  let lastError: any = null;

  for (const model of candidateModels) {
    try {
      const text = await callGeminiApi(model, apiKey, systemInstruction, userMessage);
      return { text, modelUsed: model };
    } catch (err: any) {
      lastError = err;
      // Nếu API key sai định dạng hoặc bị từ chối, dừng ngay không thử các model khác
      if (
        err.message?.includes("API_KEY_INVALID") ||
        err.message?.includes("API key not valid") ||
        err.message?.includes("PERMISSION_DENIED")
      ) {
        throw new Error("Khóa API không hợp lệ. Vui lòng kiểm tra lại mã API Key đã sao chép từ Google AI Studio.");
      }
    }
  }

  throw lastError || new Error("Không thể kết nối với mô hình Gemini khả dụng.");
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // 1. CHẾ ĐỘ KIỂM TRA KẾT NỐI (TEST CONNECTION)
    if (body.testConnection) {
      const apiKey = body.customApiKey?.trim() || process.env.GEMINI_API_KEY || "";
      const model = body.model?.trim() || "gemini-2.5-flash";

      if (!apiKey) {
        return NextResponse.json(
          { error: "Vui lòng nhập API Key để kiểm tra." },
          { status: 400 }
        );
      }

      try {
        const result = await callGeminiWithFallback(
          model,
          apiKey,
          "Bạn là trợ lý kiểm tra kết nối API.",
          "Hãy phản hồi duy nhất 1 từ: 'OK'."
        );
        return NextResponse.json({
          success: true,
          message: `Kết nối thành công! Đã xác thực với mô hình ${result.modelUsed}.`,
          modelUsed: result.modelUsed,
        });
      } catch (testErr: any) {
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
      model = "gemini-2.5-flash",
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

    // Nếu không có API Key, chạy bộ máy Offline nội bộ
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

NGUYÊN TẮC SƯ PHẠM CỐT LÕI (BẮT BUỘC TUÂN THỦ):
1. TUYỆT ĐỐI KHÔNG TIẾT LỘ ĐÁP ÁN ĐÚNG TRỰC TIẾP (không nói "hãy chọn C", "đáp án là C").
2. TRẢ LỜI CỰC KỲ NGẮN GỌN & SÚC TÍCH: Chỉ từ 3 đến tối đa 5 dòng.
3. ĐI THẲNG VÀO TRỌNG TÂM CÂU HỎI VÀ HOÀN THÀNH ĐẦY ĐỦ CẢ 3 Ý:
   • **Bản chất kiến thức:** 1 câu ngắn nêu nguyên lý cốt lõi câu hỏi đề cập.
   • **Bẫy cần lưu ý:** 1 câu phân tích bẫy tư duy hoặc lý do phương án chọn bị sai/loại trừ.
   • **Gợi mở suy luận:** 1 câu hỏi định hướng để học sinh tự đối chiếu từ khóa và tìm ra đáp án.
4. Định dạng Markdown in đậm (**từ khóa**). Tuyệt đối không dừng giữa chừng, không chào hỏi rườm rà.`;

    const userMessage = `NGỮ CẢNH CÂU HỎI THI THPT:
- Đề bài: ${question.content}
- Chuyên đề: ${question.chapterName || question.topicName}
- Các phương án:
${optionsText}
- Phương án đúng trong đáp án: ${question.correctAnswer || "Chưa cung cấp"} (ĐÂY LÀ CHÂN LÝ THAM KHẢO, BẠN TUYỆT ĐỐI KHÔNG ĐƯỢC TIẾT LỘ CHO HỌC SINH BIẾT)
- Phương án học sinh đã chọn: ${selectedOption || "Chưa chọn"} (Kết quả: ${isCorrect ? "Đúng" : isCorrect === false ? "Sai" : "Chưa chấm"})
- Lý thuyết sách giáo khoa tham khảo: ${question.hints?.level1_concept || ""}

YÊU CẦU CỦA HỌC SINH:
"${prompt}"

Hãy hoàn thiện câu trả lời đầy đủ 3 ý trên theo phương pháp Socratic ngắn gọn và chuẩn xác!`;

    try {
      const result = await callGeminiWithFallback(
        model,
        apiKey,
        systemInstruction,
        userMessage
      );

      // Chạy qua Guardrail bảo vệ đáp án 2 lớp
      const safeAI = sanitizeTutorResponse(result.text, question);

      return NextResponse.json({
        success: true,
        response: safeAI,
        engine: "gemini",
        modelUsed: result.modelUsed,
      });
    } catch (aiErr: any) {
      console.warn("Lỗi gọi Gemini API, chuyển sang Offline Engine:", aiErr.message);
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
        warning: aiErr.message || "Đã chuyển sang bộ máy Offline do lỗi kết nối Gemini API.",
      });
    }
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Lỗi xử lý yêu cầu Socratic" },
      { status: 500 }
    );
  }
}
