import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// Bộ đệm âm thanh RAM trên Server (lưu trữ 1000 tệp âm thanh gần nhất để phát ngay lập tức)
const serverAudioCache = new Map<string, { buffer: Buffer; mimeType: string; jsonUrl?: string }>();

// Hàm chia đoạn văn bản thông minh và tải âm thanh tiếng Việt từ Google Audio Stream
async function fetchGoogleTranslateAudio(text: string): Promise<Buffer> {
  const clean = text.replace(/[\r\n\t]+/g, " ").trim();
  const sentences = clean.split(/(?<=[.?!;,:])\s+/);
  const chunks: string[] = [];
  let currentChunk = "";

  for (const s of sentences) {
    if ((currentChunk + " " + s).trim().length <= 170) {
      currentChunk = (currentChunk + " " + s).trim();
    } else {
      if (currentChunk) chunks.push(currentChunk);
      if (s.length <= 170) {
        currentChunk = s;
      } else {
        const words = s.split(" ");
        let sub = "";
        for (const w of words) {
          if ((sub + " " + w).trim().length <= 170) {
            sub = (sub + " " + w).trim();
          } else {
            if (sub) chunks.push(sub);
            sub = w;
          }
        }
        currentChunk = sub;
      }
    }
  }
  if (currentChunk) chunks.push(currentChunk);
  if (chunks.length === 0) chunks.push(clean.slice(0, 170));

  const audioBuffers: Buffer[] = [];
  for (const chunk of chunks) {
    if (!chunk.trim()) continue;
    const url = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(chunk.trim())}&tl=vi&client=tw-ob`;
    const res = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
        Referer: "https://translate.google.com/",
      },
    });
    if (res.ok) {
      const buf = await res.arrayBuffer();
      audioBuffers.push(Buffer.from(buf));
    }
  }

  if (audioBuffers.length === 0) {
    throw new Error("Không thể tải âm thanh từ Google Audio Stream");
  }

  return Buffer.concat(audioBuffers);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      text,
      provider = "free",
      voice = "google_stream_female",
      speed = 1.0,
      apiKey = "",
    } = body;

    if (!text || typeof text !== "string") {
      return NextResponse.json(
        { success: false, message: "Thiếu nội dung văn bản cần chuyển thành giọng nói." },
        { status: 400 }
      );
    }

    // 0. Kiểm tra Server-side Memory Cache để trả kết quả ngay tức thì (< 5ms)
    const cacheKey = `${provider}_${voice}_${speed}_${text.trim()}`;
    if (serverAudioCache.has(cacheKey)) {
      const cached = serverAudioCache.get(cacheKey)!;
      if (cached.jsonUrl) {
        return NextResponse.json({
          success: true,
          provider,
          voice,
          audioUrl: cached.jsonUrl,
          cached: true,
        });
      }
      return new NextResponse(new Uint8Array(cached.buffer), {
        headers: {
          "Content-Type": cached.mimeType,
          "Cache-Control": "public, max-age=86400",
          "X-Cache": "HIT",
        },
      });
    }

    // 1. NHÀ CUNG CẤP: MIỄN PHÍ 100% (Google Stream MP3 cho giọng Nữ Mai Linh)
    if (provider === "free" || provider === "google") {
      // Giọng nam không đi qua route này (được trình duyệt phát Native)
      if (voice === "native_male" || voice === "free_male") {
        return NextResponse.json(
          {
            success: false,
            message:
              "Giọng Nam Quốc Tuấn được phát trực tiếp bằng Native Speech Engine trên thiết bị để đảm bảo chất âm trầm ấm trung thực.",
          },
          { status: 400 }
        );
      }

      try {
        const audioBuffer = await fetchGoogleTranslateAudio(text);
        if (serverAudioCache.size > 1000) {
          const firstKey = serverAudioCache.keys().next().value;
          if (firstKey) serverAudioCache.delete(firstKey);
        }
        serverAudioCache.set(cacheKey, { buffer: audioBuffer, mimeType: "audio/mpeg" });

        return new NextResponse(new Uint8Array(audioBuffer), {
          headers: {
            "Content-Type": "audio/mpeg",
            "Cache-Control": "public, max-age=86400",
            "X-TTS-Engine": "google-stream",
          },
        });
      } catch (err: any) {
        return NextResponse.json(
          { success: false, message: "Lỗi tải âm thanh Google Stream: " + err.message },
          { status: 500 }
        );
      }
    }

    // 2. NHÀ CUNG CẤP: FPT.AI (Chuyên gia giọng Miền Tây & MC Bắc chuẩn - Yêu cầu Key)
    if (provider === "fpt") {
      const activeKey = apiKey?.trim() || process.env.FPT_AI_API_KEY || "";
      if (!activeKey) {
        return NextResponse.json(
          {
            success: false,
            message:
              "Chưa có API Key FPT.AI. Vui lòng nhập API Key cá nhân trong cài đặt giọng đọc (miễn phí 100.000 ký tự/tháng tại console.fpt.ai) hoặc chọn nhóm giọng Miễn Phí.",
          },
          { status: 400 }
        );
      }

      // Cảnh báo nếu dán nhầm key của Google hoặc OpenAI
      if (activeKey.startsWith("AQ.") || activeKey.startsWith("AIza")) {
        return NextResponse.json(
          {
            success: false,
            message:
              "Khóa bạn vừa dán là Google API Key, không phải khóa FPT.AI. Để nghe giọng Miền Tây / MC, vui lòng lấy API Key FPT miễn phí tại console.fpt.ai.",
          },
          { status: 400 }
        );
      }
      if (activeKey.startsWith("sk-")) {
        return NextResponse.json(
          {
            success: false,
            message:
              "Khóa bạn vừa dán là OpenAI API Key. Vui lòng chuyển sang tab 'OpenAI Studio' để sử dụng giọng Nova / Echo.",
          },
          { status: 400 }
        );
      }

      let fptSpeed = "";
      if (speed < 0.95) fptSpeed = "-1";
      else if (speed > 1.1) fptSpeed = "1";

      const fptRes = await fetch("https://api.fpt.ai/hmi/tts/v5", {
        method: "POST",
        headers: {
          api_key: activeKey,
          "api-key": activeKey,
          voice: voice || "thuminh",
          speed: fptSpeed,
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

      // Chờ nhẹ tối đa 4 lần để CDN FPT sẵn sàng tệp mp3
      if (audioUrl) {
        for (let i = 0; i < 4; i++) {
          try {
            const headCheck = await fetch(audioUrl, { method: "HEAD" });
            if (headCheck.ok) break;
          } catch {}
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

    // 3. NHÀ CUNG CẤP: OpenAI Audio Speech API (tts-1)
    if (provider === "openai") {
      const activeKey = apiKey?.trim() || process.env.OPENAI_API_KEY || "";
      if (!activeKey) {
        return NextResponse.json(
          {
            success: false,
            message:
              "Chưa có API Key OpenAI. Vui lòng nhập API Key trong cài đặt giọng đọc hoặc chọn nhóm giọng Miễn Phí.",
          },
          { status: 400 }
        );
      }

      const openaiVoice = voice || "nova";
      const clampedSpeed = Math.max(0.7, Math.min(1.3, speed));

      const openaiRes = await fetch("https://api.openai.com/v1/audio/speech", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${activeKey}`,
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

    return NextResponse.json(
      {
        success: false,
        message: `Nhà cung cấp giọng đọc "${provider}" không được hỗ trợ.`,
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
