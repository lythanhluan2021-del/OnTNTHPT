import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { text, provider = "fpt", voice = "thuminh", speed = 1.0, apiKey = "" } = body;

    if (!text || typeof text !== "string") {
      return NextResponse.json(
        { success: false, message: "Thiếu nội dung văn bản cần chuyển thành giọng nói." },
        { status: 400 }
      );
    }

    // 1. NHÀ CUNG CẤP: FPT.AI Text to Speech (Chuyên gia giọng Tiếng Việt, Miền Tây, MC)
    if (provider === "fpt") {
      const activeKey = apiKey?.trim() || process.env.FPT_AI_API_KEY || "";
      if (!activeKey) {
        return NextResponse.json(
          {
            success: false,
            fallback: true,
            message:
              "Chưa có API Key FPT.AI. Vui lòng nhập API Key cá nhân trong phần cài đặt giọng đọc (miễn phí 100.000 ký tự/tháng tại fpt.ai).",
          },
          { status: 400 }
        );
      }

      // Kiểm tra nếu người dùng nhầm lẫn dán key của Google (AQ...) hoặc OpenAI (sk...) vào FPT
      if (activeKey.startsWith("AQ.") || activeKey.startsWith("AIza")) {
        return NextResponse.json(
          {
            success: false,
            message:
              "Khóa bạn vừa dán là Google Gemini API Key (dành cho Trợ lý AI), không phải khóa FPT.AI. Để nghe giọng Miền Tây hoặc MC, vui lòng lấy API Key FPT miễn phí tại console.fpt.ai (hoặc chuyển sang tab 'Trình Duyệt' để nghe miễn phí không cần key).",
          },
          { status: 400 }
        );
      }
      if (activeKey.startsWith("sk-")) {
        return NextResponse.json(
          {
            success: false,
            message:
              "Khóa bạn vừa dán là OpenAI API Key. Vui lòng chuyển sang tab 'OpenAI Studio' bên cạnh để sử dụng giọng Nova / Echo trong trẻo.",
          },
          { status: 400 }
        );
      }

      // Giọng FPT: thuminh (Nữ Miền Tây/Nam), minhquang (Nam Miền Tây/Nam), maingoc (Nữ Nam), banmai (Nữ Bắc MC), thuha (Nữ Bắc), leminh (Nam Bắc MC)
      let fptSpeed = "";
      if (speed < 0.95) fptSpeed = "-1";
      else if (speed > 1.1) fptSpeed = "1";

      const fptRes = await fetch("https://api.fpt.ai/hmi/tts/v5", {
        method: "POST",
        headers: {
          "api_key": activeKey,
          "api-key": activeKey,
          "voice": voice || "thuminh",
          "speed": fptSpeed,
          "Cache-Control": "no-cache",
        },
        body: text,
      });

      if (!fptRes.ok) {
        const errorText = await fptRes.text();
        let errMsg = `Lỗi kết nối FPT.AI (${fptRes.status}): Vui lòng kiểm tra lại API Key hoặc hạn mức gói cước.`;
        if (errorText.includes("Invalid authentication")) {
          errMsg = "API Key FPT.AI không hợp lệ. Vui lòng sao chép lại mã API Key tại console.fpt.ai.";
        }
        return NextResponse.json(
          {
            success: false,
            message: errMsg,
            detail: errorText,
          },
          { status: fptRes.status }
        );
      }

      const fptData = await fptRes.json();
      if (
        (fptData.error !== 0 && fptData.error !== undefined) ||
        fptData.message?.toLowerCase().includes("invalid authentication")
      ) {
        return NextResponse.json(
          {
            success: false,
            message:
              fptData.message === "Invalid authentication credentials"
                ? "API Key FPT.AI không hợp lệ. Vui lòng kiểm tra lại mã key trên trang console.fpt.ai."
                : fptData.message || "FPT.AI từ chối tạo giọng đọc. Vui lòng kiểm tra API key.",
          },
          { status: 400 }
        );
      }

      const audioUrl = fptData.async;

      // Chờ nhẹ tối đa 3 lần để đảm bảo tệp mp3 trên CDN FPT đã sẵn sàng
      if (audioUrl) {
        for (let i = 0; i < 4; i++) {
          try {
            const headCheck = await fetch(audioUrl, { method: "HEAD" });
            if (headCheck.ok) break;
          } catch {
            // Ignored
          }
          await new Promise((r) => setTimeout(r, 450));
        }
      }

      return NextResponse.json({
        success: true,
        provider: "fpt",
        voice,
        audioUrl,
      });
    }

    // 2. NHÀ CUNG CẤP: OpenAI Audio Speech API (tts-1)
    if (provider === "openai") {
      const activeKey = apiKey?.trim() || process.env.OPENAI_API_KEY || "";
      if (!activeKey) {
        return NextResponse.json(
          {
            success: false,
            fallback: true,
            message: "Chưa có API Key OpenAI. Vui lòng nhập API Key cá nhân trong cài đặt giọng đọc.",
          },
          { status: 400 }
        );
      }

      // Giọng OpenAI: nova, shimmer, alloy, echo, onyx, fable
      const openaiVoice = voice || "nova";
      const clampedSpeed = Math.max(0.7, Math.min(1.3, speed));

      const openaiRes = await fetch("https://api.openai.com/v1/audio/speech", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${activeKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "tts-1",
          input: text,
          voice: openaiVoice,
          speed: clampedSpeed,
        }),
      });

      if (!openaiRes.ok) {
        const errJson = await openaiRes.json().catch(() => ({}));
        return NextResponse.json(
          {
            success: false,
            message:
              errJson.error?.message ||
              `Lỗi OpenAI TTS (${openaiRes.status}): Vui lòng kiểm tra API Key hoặc số dư tài khoản.`,
          },
          { status: openaiRes.status }
        );
      }

      const audioBuffer = await openaiRes.arrayBuffer();
      return new NextResponse(audioBuffer, {
        headers: {
          "Content-Type": "audio/mpeg",
          "Cache-Control": "public, max-age=86400",
        },
      });
    }

    // 3. NHÀ CUNG CẤP: Google Cloud Text-to-Speech (Neural2 / WaveNet)
    if (provider === "google") {
      const activeKey = apiKey?.trim() || process.env.GOOGLE_TTS_API_KEY || "";
      if (!activeKey) {
        return NextResponse.json(
          {
            success: false,
            fallback: true,
            message: "Chưa có API Key Google Cloud TTS. Vui lòng nhập API Key trong cài đặt.",
          },
          { status: 400 }
        );
      }

      const googleVoice = voice || "vi-VN-Neural2-A";
      const googleRes = await fetch(
        `https://texttospeech.googleapis.com/v1/text:synthesize?key=${activeKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            input: { text },
            voice: {
              languageCode: "vi-VN",
              name: googleVoice,
            },
            audioConfig: {
              audioEncoding: "MP3",
              speakingRate: speed,
            },
          }),
        }
      );

      if (!googleRes.ok) {
        const errJson = await googleRes.json().catch(() => ({}));
        const rawMsg = errJson.error?.message || "";
        let friendlyMessage = `Lỗi Google TTS (${googleRes.status}): Vui lòng kiểm tra lại cấu hình.`;

        if (
          rawMsg.includes("API keys are not supported") ||
          rawMsg.includes("Expected OAuth2")
        ) {
          friendlyMessage =
            "Google Cloud Text-to-Speech yêu cầu cấu hình OAuth2 / Service Account trong GCP Console và không hỗ trợ API Key thông thường (hoặc đây là Key của Gemini AI Studio). Để có giọng Miền Tây hoặc giọng MC tự nhiên nhất, Thầy/Cô vui lòng chuyển sang mục FPT.AI Voice (miễn phí 100.000 ký tự tại fpt.ai) hoặc OpenAI Studio.";
        } else if (rawMsg) {
          friendlyMessage = `Lỗi Google TTS: ${rawMsg}`;
        }

        return NextResponse.json(
          {
            success: false,
            message: friendlyMessage,
          },
          { status: googleRes.status }
        );
      }

      const gData = await googleRes.json();
      if (!gData.audioContent) {
        return NextResponse.json(
          { success: false, message: "Google TTS không trả về nội dung âm thanh." },
          { status: 400 }
        );
      }

      const audioBuffer = Buffer.from(gData.audioContent, "base64");
      return new NextResponse(audioBuffer, {
        headers: {
          "Content-Type": "audio/mpeg",
          "Cache-Control": "public, max-age=86400",
        },
      });
    }

    return NextResponse.json(
      {
        success: false,
        message: `Nhà cung cấp giọng đọc "${provider}" không hợp lệ.`,
      },
      { status: 400 }
    );
  } catch (error: any) {
    console.error("[TTS API Server Error]:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Lỗi máy chủ phát âm thanh." },
      { status: 500 }
    );
  }
}
