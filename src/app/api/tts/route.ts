import { NextRequest, NextResponse } from "next/server";
import { synthesizeEdgeTTS } from "@/lib/edgeTts";

export const dynamic = "force-dynamic";

// Bộ đệm âm thanh RAM trên Server (lưu trữ 1000 tệp âm thanh gần nhất để phát ngay lập tức)
const serverAudioCache = new Map<string, { buffer: Buffer; mimeType: string; jsonUrl?: string }>();

// Hàm gắn RIFF WAV Header cho dữ liệu thô PCM từ Google Gemini AI Audio
function convertPcmToWav(pcmData: Buffer, sampleRate: number = 24000): Buffer {
  if (pcmData.length >= 4 && pcmData.toString("ascii", 0, 4) === "RIFF") {
    return pcmData;
  }
  const numChannels = 1;
  const bitsPerSample = 16;
  const byteRate = (sampleRate * numChannels * bitsPerSample) / 8;
  const blockAlign = (numChannels * bitsPerSample) / 8;
  const dataSize = pcmData.length;
  const header = Buffer.alloc(44);

  header.write("RIFF", 0);
  header.writeUInt32LE(36 + dataSize, 4);
  header.write("WAVE", 8);
  header.write("fmt ", 12);
  header.writeUInt32LE(16, 16); // Subchunk1Size
  header.writeUInt16LE(1, 20); // AudioFormat: 1 (PCM)
  header.writeUInt16LE(numChannels, 22); // Mono
  header.writeUInt32LE(sampleRate, 24); // 24000Hz
  header.writeUInt32LE(byteRate, 28);
  header.writeUInt16LE(blockAlign, 32);
  header.writeUInt16LE(bitsPerSample, 34);
  header.write("data", 36);
  header.writeUInt32LE(dataSize, 40);

  return Buffer.concat([header, pcmData]);
}

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
      provider = "edge",
      voice = "vi-VN-HoaiMyNeural",
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

    // 1. NHÀ CUNG CẤP: MICROSOFT EDGE NEURAL TTS (100% Miễn phí, chất lượng phòng thu đỉnh cao)
    if (provider === "edge") {
      let edgeVoice = "vi-VN-HoaiMyNeural";
      const vLower = (voice || "").toLowerCase();
      if (vLower.includes("namminh") || vLower.includes("male") || vLower.includes("nam")) {
        edgeVoice = "vi-VN-NamMinhNeural";
      } else if (vLower.includes("hoaimy") || vLower.includes("female") || vLower.includes("nu")) {
        edgeVoice = "vi-VN-HoaiMyNeural";
      } else if (voice.startsWith("vi-VN-")) {
        edgeVoice = voice;
      }

      try {
        const audioBuffer = await synthesizeEdgeTTS(text, {
          voice: edgeVoice,
          rate: typeof speed === "number" ? speed : 1.0,
        });

        if (serverAudioCache.size > 1000) {
          const firstKey = serverAudioCache.keys().next().value;
          if (firstKey) serverAudioCache.delete(firstKey);
        }
        serverAudioCache.set(cacheKey, { buffer: audioBuffer, mimeType: "audio/mpeg" });

        return new NextResponse(new Uint8Array(audioBuffer), {
          headers: {
            "Content-Type": "audio/mpeg",
            "Cache-Control": "public, max-age=86400",
            "X-TTS-Engine": "edge-neural",
            "X-TTS-Voice": edgeVoice,
          },
        });
      } catch (err: any) {
        console.error("[Edge TTS Error]:", err);
        // Fallback sang Google Stream nếu Edge gặp sự cố mạng
        try {
          const fallbackBuffer = await fetchGoogleTranslateAudio(text);
          return new NextResponse(new Uint8Array(fallbackBuffer), {
            headers: {
              "Content-Type": "audio/mpeg",
              "Cache-Control": "public, max-age=86400",
              "X-TTS-Engine": "google-stream-fallback",
            },
          });
        } catch {
          return NextResponse.json(
            { success: false, message: `Lỗi phát âm Microsoft Edge TTS: ${err.message}` },
            { status: 500 }
          );
        }
      }
    }

    // 2. NHÀ CUNG CẤP: MIỄN PHÍ DỰ PHÒNG (Google Stream MP3 / Microsoft Edge)
    if (provider === "free") {
      const vLower = (voice || "").toLowerCase();
      // Nếu chọn giọng Nam -> Tổng hợp giọng Nam Minh Neural của Edge
      if (vLower.includes("nam") || vLower.includes("male")) {
        try {
          const audioBuffer = await synthesizeEdgeTTS(text, {
            voice: "vi-VN-NamMinhNeural",
            rate: typeof speed === "number" ? speed : 1.0,
          });
          return new NextResponse(new Uint8Array(audioBuffer), {
            headers: {
              "Content-Type": "audio/mpeg",
              "Cache-Control": "public, max-age=86400",
              "X-TTS-Engine": "edge-neural-male",
            },
          });
        } catch (_) {
          // Native device fallback handled on client
          return NextResponse.json(
            {
              success: false,
              message: "Giọng Nam sử dụng Native Engine của thiết bị.",
            },
            { status: 400 }
          );
        }
      }

      // Giọng Nữ -> Ưu tiên Hoài My Neural, fallback Google Stream
      try {
        const audioBuffer = await synthesizeEdgeTTS(text, {
          voice: "vi-VN-HoaiMyNeural",
          rate: typeof speed === "number" ? speed : 1.0,
        });
        return new NextResponse(new Uint8Array(audioBuffer), {
          headers: {
            "Content-Type": "audio/mpeg",
            "Cache-Control": "public, max-age=86400",
            "X-TTS-Engine": "edge-neural-female",
          },
        });
      } catch {
        try {
          const audioBuffer = await fetchGoogleTranslateAudio(text);
          return new NextResponse(new Uint8Array(audioBuffer), {
            headers: {
              "Content-Type": "audio/mpeg",
              "Cache-Control": "public, max-age=86400",
              "X-TTS-Engine": "google-stream",
            },
          });
        } catch (err: any) {
          return NextResponse.json(
            { success: false, message: "Lỗi tải âm thanh: " + err.message },
            { status: 500 }
          );
        }
      }
    }

    // 2. NHÀ CUNG CẤP: Google Gemini AI Audio (gemini-2.0-flash)
    if (provider === "gemini" || provider === "google") {
      const activeKey =
        apiKey?.trim() ||
        process.env.GEMINI_API_KEY ||
        process.env.GOOGLE_TTS_API_KEY ||
        "";

      if (!activeKey) {
        return NextResponse.json(
          {
            success: false,
            message:
              "Chưa có Google Gemini API Key. Vui lòng nhập API Key trong phần Cài đặt giọng đọc hoặc kích hoạt Trợ lý AI (miễn phí tại aistudio.google.com).",
          },
          { status: 400 }
        );
      }

      // Xác định tên giọng Gemini chính thức (Aoede, Puck, Charon, Kore, Fenrir)
      let geminiVoiceName = "Aoede";
      const vLower = (voice || "").toLowerCase();
      if (vLower.includes("puck")) geminiVoiceName = "Puck";
      else if (vLower.includes("charon")) geminiVoiceName = "Charon";
      else if (vLower.includes("kore")) geminiVoiceName = "Kore";
      else if (vLower.includes("fenrir")) geminiVoiceName = "Fenrir";
      else if (vLower.includes("aoede")) geminiVoiceName = "Aoede";

      const promptInstruction = `Bạn là một người đọc đề thi tốt nghiệp THPT chuyên nghiệp. Hãy đọc to, rõ ràng, dứt khoát và tự nhiên từng từ trong văn bản sau bằng tiếng Việt, tuyệt đối không thêm bất kỳ lời dẫn hay bình luận nào:\n\n${text}`;

      const ttsModels = ["gemini-2.0-flash", "gemini-2.0-flash-exp"];
      let geminiRes: Response | null = null;
      let lastErrorText = "";

      for (const model of ttsModels) {
        try {
          const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${activeKey}`;
          const geminiPayload = {
            contents: [
              {
                role: "user",
                parts: [{ text: promptInstruction }],
              },
            ],
            generationConfig: {
              responseModalities: ["AUDIO"],
              speechConfig: {
                voiceConfig: {
                  prebuiltVoiceConfig: {
                    voiceName: geminiVoiceName,
                  },
                },
              },
            },
          };

          const res = await fetch(geminiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(geminiPayload),
          });

          if (res.ok) {
            geminiRes = res;
            break;
          } else {
            lastErrorText = await res.text();
            if (res.status === 429) {
              await new Promise((r) => setTimeout(r, 1200));
            }
          }
        } catch (e: any) {
          lastErrorText = e.message;
        }
      }

      if (!geminiRes || !geminiRes.ok) {
        let userMsg = `Lỗi Google Gemini AI: ${lastErrorText}`;
        if (lastErrorText.includes("RESOURCE_EXHAUSTED") || lastErrorText.includes("429")) {
          userMsg =
            "Google Gemini API đang bị nghẽn (vượt giới hạn 15 yêu cầu/phút của gói miễn phí). Vui lòng đợi vài giây và bấm thử lại.";
        } else if (lastErrorText.includes("API_KEY_INVALID")) {
          userMsg = "Google Gemini API Key không hợp lệ. Vui lòng kiểm tra lại mã key tại aistudio.google.com.";
        }
        return NextResponse.json({ success: false, message: userMsg }, { status: 400 });
      }

      const geminiData = await geminiRes.json();
      const candidate = geminiData.candidates?.[0];
      const audioPart = candidate?.content?.parts?.find(
        (p: any) => p.inlineData && p.inlineData.data
      );

      if (!audioPart || !audioPart.inlineData?.data) {
        return NextResponse.json(
          { success: false, message: "Gemini không trả về dữ liệu âm thanh cho nội dung này." },
          { status: 500 }
        );
      }

      const rawBase64 = audioPart.inlineData.data;
      let sampleRate = 24000;
      const rateMatch = (audioPart.inlineData.mimeType || "").match(/rate=(\d+)/);
      if (rateMatch) {
        sampleRate = parseInt(rateMatch[1], 10);
      }
      const rawPcm = Buffer.from(rawBase64, "base64");
      const audioBuffer = convertPcmToWav(rawPcm, sampleRate);
      const mimeType = "audio/wav";

      if (serverAudioCache.size > 1000) {
        const firstKey = serverAudioCache.keys().next().value;
        if (firstKey) serverAudioCache.delete(firstKey);
      }
      serverAudioCache.set(cacheKey, { buffer: audioBuffer, mimeType });

      return new NextResponse(new Uint8Array(audioBuffer), {
        headers: {
          "Content-Type": mimeType,
          "Cache-Control": "public, max-age=86400",
          "X-TTS-Engine": "gemini-audio",
        },
      });
    }

    // 3. NHÀ CUNG CẤP: FPT.AI (Chuyên gia giọng Miền Tây & MC Bắc chuẩn - Yêu cầu Key)
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
              "Khóa bạn vừa dán là Google API Key, không phải khóa FPT.AI. Vui lòng chuyển sang tab 'Google Gemini AI' để sử dụng.",
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

    // 4. NHÀ CUNG CẤP: OpenAI Audio Speech API (tts-1)
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
