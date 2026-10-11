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
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
        "Referer": "https://translate.google.com/",
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

// Hàm gắn RIFF WAV Header cho dữ liệu thô PCM từ Gemini AI Audio để thẻ <audio> phát được ngay
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

    // 3. NHÀ CUNG CẤP: Google Gemini AI Voice (gemini-2.0-flash) & Google Cloud Voice
    if (provider === "google") {
      const activeKey =
        apiKey?.trim() ||
        process.env.GEMINI_API_KEY ||
        process.env.GOOGLE_TTS_API_KEY ||
        "";

      // 3A. Nếu chọn giọng Google Chuẩn miễn phí hoặc không có API Key:
      // Phát ngay qua Google Audio Stream mượt mà, không robot, không độ trễ
      if (voice === "google_stream_female" || voice === "google_stream_male" || !activeKey) {
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
        } catch (streamErr: any) {
          console.warn("[Google Stream TTS Error]:", streamErr);
        }
      }

      // 3B. Khi có API Key Google AI Studio và chọn giọng Gemini:
      let geminiVoiceName = "Aoede"; // Nữ Miền Tây
      let styleInstruction =
        "Bạn là phát thanh viên AI người miền Tây Nam Bộ. Hãy đọc to rõ ràng đoạn văn bản sau bằng tiếng Việt với chất giọng Nữ Miền Tây ngọt ngào, truyền cảm, có cảm xúc tự nhiên, phát âm chân phương, nhẹ nhàng. Không thêm bất kỳ lời dẫn hay bình luận nào, chỉ đọc đúng từng chữ trong nội dung.";

      if (voice === "gemini_mientay_nam" || voice === "google_gemini_mientay_nam") {
        geminiVoiceName = "Puck"; // Nam Miền Tây
        styleInstruction =
          "Bạn là phát thanh viên AI người miền Tây Nam Bộ. Hãy đọc to rõ ràng đoạn văn bản sau bằng tiếng Việt với chất giọng Nam Miền Tây trầm ấm, đĩnh đạc, mộc mạc, truyền cảm hứng. Không thêm bất kỳ lời dẫn hay bình luận nào, chỉ đọc đúng từng chữ trong nội dung.";
      } else if (voice === "gemini_mc_nu" || voice === "google_gemini_mc_nu") {
        geminiVoiceName = "Kore"; // Nữ MC
        styleInstruction =
          "Bạn là phát thanh viên MC truyền hình chuyên nghiệp. Hãy đọc to rõ ràng đoạn văn bản sau bằng tiếng Việt với giọng Nữ MC trong trẻo, lưu loát, ngắt nghỉ khoa học, lôi cuốn. Không thêm bất kỳ lời dẫn hay bình luận nào, chỉ đọc đúng từng chữ trong nội dung.";
      } else if (voice === "gemini_mc_nam" || voice === "google_gemini_mc_nam") {
        geminiVoiceName = "Charon"; // Nam MC
        styleInstruction =
          "Bạn là phát thanh viên MC truyền hình chuyên nghiệp. Hãy đọc to rõ ràng đoạn văn bản sau bằng tiếng Việt với giọng Nam MC đĩnh đạc, ấm áp, nhịp điệu rành mạch, phong thái sư phạm. Không thêm bất kỳ lời dẫn hay bình luận nào, chỉ đọc đúng từng chữ trong nội dung.";
      }

      // Thử gọi Gemini 2.0 Flash Audio chính thức
      if (activeKey) {
        try {
          const ttsModels = ["gemini-2.0-flash", "gemini-2.0-flash-exp"];
          let geminiRes: Response | null = null;

          for (const model of ttsModels) {
            const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${activeKey}`;
            const geminiPayload = {
              contents: [
                {
                  role: "user",
                  parts: [
                    {
                      text: `${styleInstruction}\n\nNội dung văn bản cần đọc chính xác:\n${text}`,
                    },
                  ],
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
            }
          }

          if (geminiRes && geminiRes.ok) {
            const geminiData = await geminiRes.json();
            const candidate = geminiData.candidates?.[0];
            const audioPart = candidate?.content?.parts?.find(
              (p: any) => p.inlineData && p.inlineData.data
            );

            if (audioPart && audioPart.inlineData?.data) {
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
          }
        } catch (geminiError: any) {
          console.warn("[Gemini Audio Fetch Warning]:", geminiError.message);
        }
      }

      // 3C. NẾU GEMINI BỊ LỖI HOẶC QUOTA: TỰ ĐỘNG DỰ PHÒNG SANG GOOGLE AUDIO STREAM CHUẨN
      // Đảm bảo TUYỆT ĐỐI không bao giờ bị rơi vào giọng robot của trình duyệt!
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
            "X-TTS-Engine": "google-stream-fallback",
          },
        });
      } catch (err: any) {
        return NextResponse.json(
          { success: false, message: "Không thể tạo giọng đọc: " + err.message },
          { status: 500 }
        );
      }
    }

    // 4. NHÀ CUNG CẤP: Browser / Miễn phí: Phát ngay qua Google Audio Stream thay vì giọng robot
    if (provider === "browser") {
      try {
        const audioBuffer = await fetchGoogleTranslateAudio(text);
        return new NextResponse(new Uint8Array(audioBuffer), {
          headers: {
            "Content-Type": "audio/mpeg",
            "Cache-Control": "public, max-age=86400",
            "X-TTS-Engine": "google-stream",
          },
        });
      } catch {}
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
