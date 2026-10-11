/**
 * Hệ thống Đọc đề bài thông minh (Smart Question Audio Reader 2.0)
 * Hỗ trợ đa nguồn TTS: FPT.AI (Giọng Miền Tây / MC Bắc), OpenAI Studio (Nova, Shimmer, Echo...),
 * Google Cloud Neural2, và Web Speech fallback.
 * Hỗ trợ nhập và lưu trữ API Key cá nhân của người dùng.
 */

export type TTSProvider = "fpt" | "openai" | "google" | "browser";
export type VoiceGender = "female" | "male";

export interface TTSVoiceOption {
  id: string;
  name: string;
  region: "mientay" | "mienbac" | "mientrung" | "studio" | "standard";
  gender: VoiceGender;
  provider: TTSProvider;
  apiVoiceKey: string;
  description: string;
  badge: string;
  recommended?: boolean;
}

export const VOICE_OPTIONS: TTSVoiceOption[] = [
  // FPT.AI - Chuyên gia tiếng Việt & Giọng Miền Tây
  {
    id: "fpt_thuminh",
    name: "Thu Minh",
    region: "mientay",
    gender: "female",
    provider: "fpt",
    apiVoiceKey: "thuminh",
    description: "Giọng Nữ Miền Tây Nam Bộ ngọt ngào, ấm áp, truyền cảm tự nhiên",
    badge: "🌾 Nữ Miền Tây",
    recommended: true,
  },
  {
    id: "fpt_minhquang",
    name: "Minh Quang",
    region: "mientay",
    gender: "male",
    provider: "fpt",
    apiVoiceKey: "minhquang",
    description: "Giọng Nam Miền Tây Nam Bộ trầm ấm, gần gũi, chân phương",
    badge: "🌾 Nam Miền Tây",
    recommended: true,
  },
  {
    id: "fpt_maingoc",
    name: "Mai Ngọc",
    region: "mientay",
    gender: "female",
    provider: "fpt",
    apiVoiceKey: "maingoc",
    description: "Giọng Nữ Nam Bộ dịu dàng, trong trẻo, nhả chữ chậm rãi",
    badge: "🌾 Nữ Nam Bộ",
  },
  {
    id: "fpt_banmai",
    name: "Ban Mai",
    region: "mienbac",
    gender: "female",
    provider: "fpt",
    apiVoiceKey: "banmai",
    description: "Giọng Nữ MC Miền Bắc trong trẻo, phát thanh viên chuẩn sư phạm",
    badge: "🎙️ Nữ MC Trong Trẻo",
    recommended: true,
  },
  {
    id: "fpt_thuha",
    name: "Thu Hà",
    region: "mienbac",
    gender: "female",
    provider: "fpt",
    apiVoiceKey: "thuha",
    description: "Giọng Nữ MC Miền Bắc trẻ trung, nhịp điệu sinh động",
    badge: "🎙️ Nữ MC Bắc",
  },
  {
    id: "fpt_leminh",
    name: "Lê Minh",
    region: "mienbac",
    gender: "male",
    provider: "fpt",
    apiVoiceKey: "leminh",
    description: "Giọng Nam MC Miền Bắc đĩnh đạc, rõ nét, chuẩn phòng thu",
    badge: "🎙️ Nam MC Bắc",
  },

  // OpenAI TTS Studio - Đỉnh cao phòng thu siêu trong trẻo
  {
    id: "openai_nova",
    name: "Nova (Studio)",
    region: "studio",
    gender: "female",
    provider: "openai",
    apiVoiceKey: "nova",
    description: "Giọng Nữ MC AI thế hệ mới, cực kỳ trong trẻo, mượt mà",
    badge: "✨ Studio Nữ MC",
    recommended: true,
  },
  {
    id: "openai_shimmer",
    name: "Shimmer (Studio)",
    region: "studio",
    gender: "female",
    provider: "openai",
    apiVoiceKey: "shimmer",
    description: "Giọng Nữ thanh thoát, sâu lắng, truyền cảm tự nhiên",
    badge: "✨ Studio Nữ",
  },
  {
    id: "openai_echo",
    name: "Echo (Studio)",
    region: "studio",
    gender: "male",
    provider: "openai",
    apiVoiceKey: "echo",
    description: "Giọng Nam trầm ấm, vang sáng, phong cách người dẫn chương trình",
    badge: "✨ Studio Nam MC",
  },
  {
    id: "openai_onyx",
    name: "Onyx (Studio)",
    region: "studio",
    gender: "male",
    provider: "openai",
    apiVoiceKey: "onyx",
    description: "Giọng Nam chững chạc, uy quyền, chuẩn mực phòng thu",
    badge: "✨ Studio Nam",
  },

  // Google Cloud
  {
    id: "google_neural2_a",
    name: "Google Neural2 Nữ",
    region: "standard",
    gender: "female",
    provider: "google",
    apiVoiceKey: "vi-VN-Neural2-A",
    description: "Mạng nơ-ron Google tiếng Việt tự nhiên",
    badge: "🌐 Google Nữ",
  },
  {
    id: "google_neural2_d",
    name: "Google Neural2 Nam",
    region: "standard",
    gender: "male",
    provider: "google",
    apiVoiceKey: "vi-VN-Neural2-D",
    description: "Mạng nơ-ron Google Nam trầm rõ ràng",
    badge: "🌐 Google Nam",
  },

  // Browser Fallback (Không cần API key)
  {
    id: "browser_female",
    name: "Giọng Nữ Mặc Định",
    region: "standard",
    gender: "female",
    provider: "browser",
    apiVoiceKey: "browser_female",
    description: "Giọng đọc mặc định tích hợp sẵn của thiết bị (Miễn phí)",
    badge: "💻 Mặc định",
  },
  {
    id: "browser_male",
    name: "Giọng Nam Mặc Định",
    region: "standard",
    gender: "male",
    provider: "browser",
    apiVoiceKey: "browser_male",
    description: "Giọng đọc mặc định tích hợp sẵn của thiết bị (Miễn phí)",
    badge: "💻 Mặc định",
  },
];

export interface TTSState {
  isEnabled: boolean;
  provider: TTSProvider;
  voiceId: string;
  gender: VoiceGender;
  speed: number;
  isSpeaking: boolean;
  isPaused: boolean;
  isLoading: boolean;
  hasCustomKey: boolean;
  errorMessage?: string | null;
}

type TTSListener = (state: TTSState) => void;

/**
 * Hàm chuẩn hoá văn bản đề bài trước khi đọc (Text Normalization)
 * Chuyển đổi mã Markdown, công thức toán LaTeX, thuật ngữ Tin học thành lời đọc tự nhiên, êm tai
 */
export function normalizeTextForSpeech(text: string): string {
  if (!text) return "";

  let cleaned = text;

  // 1. Chuyển đổi khối mã code
  cleaned = cleaned.replace(/```[a-z]*\n([\s\S]*?)```/gi, " . Đoạn mã lập trình: $1 . ");
  cleaned = cleaned.replace(/`([^`]+)`/g, "$1");

  // 2. Chuyển đổi công thức LaTeX phổ biến
  cleaned = cleaned.replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, "$1 phần $2");
  cleaned = cleaned.replace(/\\sqrt\{([^}]+)\}/g, "căn bậc hai của $1");
  cleaned = cleaned.replace(/\^2\b/g, " bình phương");
  cleaned = cleaned.replace(/\^3\b/g, " lập phương");
  cleaned = cleaned.replace(/\^\{([^}]+)\}/g, " mũ $1");
  cleaned = cleaned.replace(/\^([a-zA-Z0-9]+)/g, " mũ $1");
  cleaned = cleaned.replace(/\\(?:ge|geq)\b/g, " lớn hơn hoặc bằng ");
  cleaned = cleaned.replace(/\\(?:le|leq)\b/g, " nhỏ hơn hoặc bằng ");
  cleaned = cleaned.replace(/\\neq\b/g, " khác ");
  cleaned = cleaned.replace(/\\times\b/g, " nhân ");
  cleaned = cleaned.replace(/\\pm\b/g, " cộng trừ ");
  cleaned = cleaned.replace(/\\approx\b/g, " xấp xỉ ");
  cleaned = cleaned.replace(/\\pi\b/g, " pi ");
  cleaned = cleaned.replace(/\\alpha\b/g, " an-pha ");
  cleaned = cleaned.replace(/\\beta\b/g, " bê-ta ");
  cleaned = cleaned.replace(/\\Delta\b/g, " đenta ");
  cleaned = cleaned.replace(/\\in\b/g, " thuộc ");
  cleaned = cleaned.replace(/\\notin\b/g, " không thuộc ");

  // Xóa các thẻ \text{...} và ký hiệu dollar $...$, $$...$$
  cleaned = cleaned.replace(/\\text\{([^}]+)\}/g, "$1");
  cleaned = cleaned.replace(/\$\$([^$]+)\$\$/g, "$1");
  cleaned = cleaned.replace(/\$([^$]+)\$/g, "$1");

  // 3. Chuẩn hoá các thuật ngữ Tin học & Tiếng Anh thông dụng để phát âm tự nhiên
  cleaned = cleaned.replace(/\bLAN\b/g, "mạng Lan");
  cleaned = cleaned.replace(/\bWAN\b/g, "mạng Oan");
  cleaned = cleaned.replace(/\bMAN\b/g, "mạng Man");
  cleaned = cleaned.replace(/\bWLAN\b/g, "mạng Oan-Lan");
  cleaned = cleaned.replace(/\bTCP\/IP\b/g, "Tê Cê Pê trên Ai Pi");
  cleaned = cleaned.replace(/\bIP\b/g, "Ai Pi");
  cleaned = cleaned.replace(/\bRouter\b/gi, "Rao-tơ");
  cleaned = cleaned.replace(/\bSwitch\b/gi, "Sù-uýt");
  cleaned = cleaned.replace(/\bModem\b/gi, "Mô-đem");
  cleaned = cleaned.replace(/\bHub\b/gi, "Hắp");
  cleaned = cleaned.replace(/\bHTML\b/g, "Hát Tê Em En");
  cleaned = cleaned.replace(/\bCSS\b/g, "Cê Ét Ét");
  cleaned = cleaned.replace(/\bSQL\b/g, "Ét Quy En");
  cleaned = cleaned.replace(/\bDBMS\b/g, "Hệ quản trị cơ sở dữ liệu");
  cleaned = cleaned.replace(/\bCSDL\b/g, "Cơ sở dữ liệu");
  cleaned = cleaned.replace(/\bAI\b/g, "Trí tuệ nhân tạo");
  cleaned = cleaned.replace(/\bUSB\b/g, "U Ét Bê");
  cleaned = cleaned.replace(/\bRAM\b/g, "bộ nhớ Ram");
  cleaned = cleaned.replace(/\bROM\b/g, "bộ nhớ Rom");
  cleaned = cleaned.replace(/\bCPU\b/g, "Cê Pê U");
  cleaned = cleaned.replace(/\bWi-Fi\b/gi, "Gai phai");

  // 4. Chuẩn hoá định dạng câu hỏi và đáp án
  cleaned = cleaned.replace(/\b(Câu\s+\d+)[:.]?\s*/gi, "$1 . ");
  cleaned = cleaned.replace(/\bA\.\s+/g, "Đáp án A: ");
  cleaned = cleaned.replace(/\bB\.\s+/g, "Đáp án B: ");
  cleaned = cleaned.replace(/\bC\.\s+/g, "Đáp án C: ");
  cleaned = cleaned.replace(/\bD\.\s+/g, "Đáp án D: ");
  cleaned = cleaned.replace(/\ba\)\s+/g, "Ý a: ");
  cleaned = cleaned.replace(/\bb\)\s+/g, "Ý b: ");
  cleaned = cleaned.replace(/\bc\)\s+/g, "Ý c: ");
  cleaned = cleaned.replace(/\bd\)\s+/g, "Ý d: ");

  // Điền khuyết dấu ba chấm ... -> tạo khoảng lặng ngắn
  cleaned = cleaned.replace(/\.{3,}/g, " ... , ");
  cleaned = cleaned.replace(/_{3,}/g, " chỗ trống ");

  // Nhấn mạnh các từ khóa bẫy phủ định
  cleaned = cleaned.replace(/\b(KHÔNG|KHÔNG ĐÚNG|SAI|NGOẠI TRỪ)\b/g, ", $1 ,");

  // Ký hiệu Đúng/Sai: (Đ/S)
  cleaned = cleaned.replace(/\(Đ\/S\)/gi, " Đúng hoặc Sai ");

  // 5. Xóa các ký tự định dạng Markdown
  cleaned = cleaned.replace(/\*\*([^*]+)\*\*/g, "$1");
  cleaned = cleaned.replace(/\*([^*]+)\*/g, "$1");
  cleaned = cleaned.replace(/__([^_]+)__/g, "$1");
  cleaned = cleaned.replace(/_([^_]+)_/g, "$1");
  cleaned = cleaned.replace(/^#+\s+/gm, "");
  cleaned = cleaned.replace(/^\s*[-*+]\s+/gm, " , ");

  // 6. Chuẩn hoá khoảng trắng và dấu ngắt nghỉ
  cleaned = cleaned.replace(/[ \t]+/g, " ");
  cleaned = cleaned.replace(/\n+/g, " . ");
  cleaned = cleaned.trim();

  return cleaned;
}

class TTSManager {
  private isEnabled: boolean = false;
  private provider: TTSProvider = "fpt";
  private voiceId: string = "fpt_thuminh";
  private gender: VoiceGender = "female";
  private speed: number = 1.0;

  private fptApiKey: string = "";
  private openaiApiKey: string = "";
  private googleApiKey: string = "";

  private isSpeakingState: boolean = false;
  private isPausedState: boolean = false;
  private isLoadingState: boolean = false;
  private errorMessageState: string | null = null;

  private currentAudio: HTMLAudioElement | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private audioCache: Map<string, string> = new Map(); // Cache audio URL / Blob
  private listeners: Set<TTSListener> = new Set();
  private browserVoices: SpeechSynthesisVoice[] = [];

  constructor() {
    if (typeof window !== "undefined") {
      this.loadConfigFromStorage();
      this.initBrowserVoices();
    }
  }

  private loadConfigFromStorage() {
    try {
      const savedEnabled = localStorage.getItem("thpt_tts_enabled");
      if (savedEnabled !== null) this.isEnabled = savedEnabled === "true";

      const savedProvider = localStorage.getItem("thpt_tts_provider") as TTSProvider;
      if (savedProvider && ["fpt", "openai", "google", "browser"].includes(savedProvider)) {
        this.provider = savedProvider;
      }

      const savedVoiceId = localStorage.getItem("thpt_tts_voice_id");
      if (savedVoiceId) this.voiceId = savedVoiceId;

      const savedGender = localStorage.getItem("thpt_tts_gender") as VoiceGender;
      if (savedGender === "female" || savedGender === "male") {
        this.gender = savedGender;
      }

      const savedSpeed = localStorage.getItem("thpt_tts_speed");
      if (savedSpeed) {
        const parsed = parseFloat(savedSpeed);
        if (!isNaN(parsed) && parsed >= 0.7 && parsed <= 1.4) {
          this.speed = parsed;
        }
      }

      this.fptApiKey = localStorage.getItem("thpt_tts_fpt_key") || "";
      this.openaiApiKey = localStorage.getItem("thpt_tts_openai_key") || "";
      this.googleApiKey = localStorage.getItem("thpt_tts_google_key") || "";

      // Nếu chọn FPT hoặc OpenAI mà chưa có key, kiểm tra và ưu tiên nhà cung cấp có key
      if (this.provider === "fpt" && !this.fptApiKey && this.openaiApiKey) {
        this.provider = "openai";
        this.voiceId = "openai_nova";
      } else if (this.provider !== "browser" && !this.getActiveApiKey()) {
        // Nếu chưa cấu hình key nào, mặc định voiceId là fpt_thuminh nhưng sẵn sàng fallback
      }
    } catch {
      // Ignored
    }
  }

  private initBrowserVoices() {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    const load = () => {
      this.browserVoices = window.speechSynthesis.getVoices();
    };
    load();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = load;
    }
  }

  public subscribe(listener: TTSListener): () => void {
    this.listeners.add(listener);
    listener(this.getState());
    return () => this.listeners.delete(listener);
  }

  private notify() {
    const state = this.getState();
    this.listeners.forEach((listener) => {
      try {
        listener(state);
      } catch (err) {
        console.error("TTS Listener error:", err);
      }
    });
  }

  public getState(): TTSState {
    const hasCustomKey = Boolean(this.getActiveApiKey());
    return {
      isEnabled: this.isEnabled,
      provider: this.provider,
      voiceId: this.voiceId,
      gender: this.gender,
      speed: this.speed,
      isSpeaking: this.isSpeakingState,
      isPaused: this.isPausedState,
      isLoading: this.isLoadingState,
      hasCustomKey,
      errorMessage: this.errorMessageState,
    };
  }

  public getActiveVoice(): TTSVoiceOption {
    return (
      VOICE_OPTIONS.find((v) => v.id === this.voiceId) ||
      VOICE_OPTIONS.find((v) => v.provider === this.provider && v.gender === this.gender) ||
      VOICE_OPTIONS[0]
    );
  }

  public getActiveApiKey(): string {
    if (this.provider === "fpt") return this.fptApiKey;
    if (this.provider === "openai") return this.openaiApiKey;
    if (this.provider === "google") return this.googleApiKey;
    return "";
  }

  public setEnabled(enabled: boolean): boolean {
    this.isEnabled = enabled;
    if (!enabled) {
      this.stop();
    }
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("thpt_tts_enabled", String(enabled));
      } catch {}
    }
    this.notify();
    return this.isEnabled;
  }

  public toggleEnabled(): boolean {
    return this.setEnabled(!this.isEnabled);
  }

  public setProvider(provider: TTSProvider) {
    this.provider = provider;
    // Tự động chuyển sang voice mặc định của provider tương ứng
    const matchingVoice = VOICE_OPTIONS.find(
      (v) => v.provider === provider && v.gender === this.gender
    ) || VOICE_OPTIONS.find((v) => v.provider === provider) || VOICE_OPTIONS[0];

    this.voiceId = matchingVoice.id;

    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("thpt_tts_provider", provider);
        localStorage.setItem("thpt_tts_voice_id", this.voiceId);
      } catch {}
    }
    this.notify();
  }

  public setVoiceId(voiceId: string) {
    const found = VOICE_OPTIONS.find((v) => v.id === voiceId);
    if (found) {
      this.voiceId = found.id;
      this.provider = found.provider;
      this.gender = found.gender;

      if (typeof window !== "undefined") {
        try {
          localStorage.setItem("thpt_tts_voice_id", this.voiceId);
          localStorage.setItem("thpt_tts_provider", this.provider);
          localStorage.setItem("thpt_tts_gender", this.gender);
        } catch {}
      }
      this.notify();
    }
  }

  public setGender(gender: VoiceGender) {
    this.gender = gender;
    const currentVoice = this.getActiveVoice();
    
    // Ưu tiên 1: Cùng nhà cung cấp VÀ cùng phong cách vùng miền (Miền Tây / MC / Studio)
    const matchingSameRegion = VOICE_OPTIONS.find(
      (v) => v.provider === this.provider && v.gender === gender && v.region === currentVoice.region
    );

    if (matchingSameRegion) {
      this.voiceId = matchingSameRegion.id;
    } else {
      // Ưu tiên 2: Cùng nhà cung cấp
      const matchingProvider = VOICE_OPTIONS.find(
        (v) => v.provider === this.provider && v.gender === gender
      );
      if (matchingProvider) {
        this.voiceId = matchingProvider.id;
      }
    }

    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("thpt_tts_gender", gender);
        localStorage.setItem("thpt_tts_voice_id", this.voiceId);
      } catch {}
    }
    this.notify();
  }

  public setSpeed(speed: number) {
    this.speed = Math.max(0.75, Math.min(1.3, speed));
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("thpt_tts_speed", String(this.speed));
      } catch {}
    }
    this.notify();
  }

  public setApiKey(provider: "fpt" | "openai" | "google", key: string) {
    const trimmed = key.trim();
    if (provider === "fpt") {
      this.fptApiKey = trimmed;
      if (typeof window !== "undefined") localStorage.setItem("thpt_tts_fpt_key", trimmed);
    } else if (provider === "openai") {
      this.openaiApiKey = trimmed;
      if (typeof window !== "undefined") localStorage.setItem("thpt_tts_openai_key", trimmed);
    } else if (provider === "google") {
      this.googleApiKey = trimmed;
      if (typeof window !== "undefined") localStorage.setItem("thpt_tts_google_key", trimmed);
    }
    this.notify();
  }

  public getStoredApiKey(provider: "fpt" | "openai" | "google"): string {
    if (provider === "fpt") return this.fptApiKey;
    if (provider === "openai") return this.openaiApiKey;
    if (provider === "google") return this.googleApiKey;
    return "";
  }

  /**
   * Đọc câu hỏi thông minh
   */
  public async speakQuestion(rawContent: string, questionPrefix?: string) {
    if (typeof window === "undefined") return;

    this.stop();
    this.errorMessageState = null;

    const normalizedContent = normalizeTextForSpeech(rawContent);
    if (!normalizedContent) return;

    const fullText = questionPrefix
      ? `${questionPrefix} . ${normalizedContent}`
      : normalizedContent;

    const activeVoice = this.getActiveVoice();
    const apiKey = this.getActiveApiKey();

    // 1. Nếu người dùng chọn giọng chất lượng cao (FPT / OpenAI / Google) và CÓ API KEY
    if (activeVoice.provider !== "browser" && apiKey) {
      const cacheKey = `${activeVoice.id}_${this.speed}_${fullText}`;
      if (this.audioCache.has(cacheKey)) {
        this.playAudioUrl(this.audioCache.get(cacheKey)!);
        return;
      }

      this.isLoadingState = true;
      this.notify();

      try {
        const res = await fetch("/api/tts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            text: fullText,
            provider: activeVoice.provider,
            voice: activeVoice.apiVoiceKey,
            speed: this.speed,
            apiKey: apiKey,
          }),
        });

        if (!res.ok) {
          const errData = await res.json().catch(() => ({}));
          throw new Error(errData.message || `Lỗi API (${res.status})`);
        }

        // Với FPT, response là JSON { audioUrl }
        // Với OpenAI / Google, response là binary audio/mpeg
        const contentType = res.headers.get("content-type") || "";
        let finalAudioUrl = "";

        if (contentType.includes("application/json")) {
          const data = await res.json();
          if (data.audioUrl) {
            finalAudioUrl = data.audioUrl;
          } else {
            throw new Error(data.message || "Không nhận được audio URL.");
          }
        } else {
          const blob = await res.blob();
          finalAudioUrl = URL.createObjectURL(blob);
        }

        this.audioCache.set(cacheKey, finalAudioUrl);
        this.isLoadingState = false;
        this.playAudioUrl(finalAudioUrl);
      } catch (err: any) {
        console.warn("[TTS] Lỗi phát âm thanh qua API, chuyển sang giọng máy dự phòng:", err);
        this.isLoadingState = false;
        this.errorMessageState = `API giọng đọc gặp sự cố (${err.message}). Đã chuyển về giọng mặc định.`;
        // Tự động fallback sang Web Speech để học sinh không bị gián đoạn ôn tập
        this.speakBrowserUtterance(fullText, this.gender);
      }
    } else {
      // 2. Chế độ mặc định Trình duyệt (Web Speech API)
      this.speakBrowserUtterance(fullText, this.gender);
    }
  }

  /**
   * Phát âm thanh qua thẻ HTMLAudioElement
   */
  private playAudioUrl(url: string) {
    this.stop();

    const audio = new Audio(url);
    this.currentAudio = audio;
    audio.playbackRate = this.speed;

    audio.onplay = () => {
      this.isSpeakingState = true;
      this.isPausedState = false;
      this.notify();
    };

    audio.onended = () => {
      this.isSpeakingState = false;
      this.isPausedState = false;
      this.currentAudio = null;
      this.notify();
    };

    audio.onerror = (e) => {
      console.warn("[TTS Audio Element Error]:", e);
      this.isSpeakingState = false;
      this.isPausedState = false;
      this.currentAudio = null;
      this.notify();
    };

    audio.play().catch((err) => {
      console.warn("[TTS Audio Autoplay Prevented]:", err);
      this.isSpeakingState = false;
      this.notify();
    });
  }

  /**
   * Phát âm qua Web Speech API (Trình duyệt) với phân biệt Nam/Nữ rõ nét
   */
  private speakBrowserUtterance(text: string, forceGender?: VoiceGender) {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;

    const currentGender = forceGender || this.gender;

    window.speechSynthesis.cancel();

    setTimeout(() => {
      try {
        if (window.speechSynthesis.paused) {
          window.speechSynthesis.resume();
        }

        const utterance = new SpeechSynthesisUtterance(text);
        const { voice, isNativeMale } = this.getBestBrowserVoice(currentGender);
        if (voice) {
          utterance.voice = voice;
          utterance.lang = voice.lang || "vi-VN";
        } else {
          utterance.lang = "vi-VN";
        }

        if (currentGender === "female") {
          utterance.pitch = 1.08;
          utterance.rate = this.speed;
        } else {
          // Với giọng Nam:
          // Nếu đã có giọng nam thật (Microsoft NamMinh): pitch 0.95
          // Nếu chỉ có giọng nữ mặc định (Google tiếng Việt trên Chrome): hạ pitch xuống 0.55 để tạo âm vực nam trầm ấm, đĩnh đạc!
          utterance.pitch = isNativeMale ? 0.95 : 0.55;
          utterance.rate = this.speed * 0.90;
        }

        utterance.onstart = () => {
          this.isSpeakingState = true;
          this.isPausedState = false;
          this.notify();
        };

        utterance.onend = () => {
          this.isSpeakingState = false;
          this.isPausedState = false;
          this.currentUtterance = null;
          this.notify();
        };

        utterance.onerror = (e) => {
          if (e.error !== "interrupted" && e.error !== "canceled") {
            console.warn("TTS SpeechSynthesis warning:", e.error);
          }
          this.isSpeakingState = false;
          this.isPausedState = false;
          this.currentUtterance = null;
          this.notify();
        };

        this.currentUtterance = utterance;
        window.speechSynthesis.speak(utterance);
      } catch (err) {
        console.warn("SpeechSynthesis error:", err);
      }
    }, 120);
  }

  private getBestBrowserVoice(gender: VoiceGender): {
    voice: SpeechSynthesisVoice | null;
    isNativeMale: boolean;
  } {
    if (typeof window !== "undefined") {
      const liveVoices = window.speechSynthesis.getVoices();
      if (liveVoices.length > 0) {
        this.browserVoices = liveVoices;
      }
    }

    const viVoices = this.browserVoices.filter((v) =>
      v.lang.toLowerCase().startsWith("vi")
    );

    if (viVoices.length === 0) {
      const fallback = this.browserVoices.find((v) => v.default) || this.browserVoices[0] || null;
      return { voice: fallback, isNativeMale: false };
    }

    if (gender === "female") {
      const female = viVoices.find((v) =>
        /hoaimy|female|nữ|linh|lan|mai|my/i.test(v.name)
      );
      return { voice: female || viVoices[0], isNativeMale: false };
    } else {
      // Ưu tiên 1: Tìm giọng nam thật nếu máy có cài (Microsoft NamMinh, An, Minh, Male...)
      const nativeMale = viVoices.find((v) =>
        /namminh|nam|minh|male|an|huy|khoa/i.test(v.name)
      );
      if (nativeMale) {
        return { voice: nativeMale, isNativeMale: true };
      }
      // Ưu tiên 2: Dùng giọng tiếng Việt có sẵn và hạ tần số pitch xuống 0.55
      return { voice: viVoices[0], isNativeMale: false };
    }
  }

  /**
   * Dừng phát âm thanh ngay lập tức
   */
  public stop() {
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio.currentTime = 0;
      this.currentAudio = null;
    }

    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }

    this.isSpeakingState = false;
    this.isPausedState = false;
    this.isLoadingState = false;
    this.currentUtterance = null;
    this.notify();
  }

  public pause() {
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.isPausedState = true;
      this.notify();
    } else if (typeof window !== "undefined" && "speechSynthesis" in window) {
      if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
        window.speechSynthesis.pause();
        this.isPausedState = true;
        this.notify();
      }
    }
  }

  public resume() {
    if (this.currentAudio) {
      this.currentAudio.play();
      this.isPausedState = false;
      this.notify();
    } else if (typeof window !== "undefined" && "speechSynthesis" in window) {
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
        this.isPausedState = false;
        this.notify();
      }
    }
  }

  /**
   * Thử giọng phát âm mẫu trong modal cài đặt
   */
  public async testVoice(voiceId?: string): Promise<{ success: boolean; message?: string }> {
    const targetVoice = voiceId
      ? VOICE_OPTIONS.find((v) => v.id === voiceId) || this.getActiveVoice()
      : this.getActiveVoice();

    const sampleText =
      targetVoice.region === "mientay"
        ? "Dạ chào bạn! Đây là giọng đọc Miền Tây Nam Bộ ấm áp, chúc bạn ôn thi tốt nghiệp Trung học Phổ thông đạt điểm cao nghen!"
        : targetVoice.region === "mienbac"
        ? "Chào bạn! Đây là giọng đọc phát thanh viên truyền cảm, chúc bạn ôn thi môn Tin học đạt kết quả xuất sắc nhất!"
        : targetVoice.gender === "male"
        ? "Chào bạn! Đây là giọng Nam trầm ấm, dứt khoát, sẵn sàng đồng hành cùng bạn ôn thi tốt nghiệp THPT."
        : "Chào bạn! Đây là giọng Nữ dịu dàng, trong trẻo, sẵn sàng đồng hành cùng bạn ôn thi tốt nghiệp THPT.";

    this.stop();
    this.isLoadingState = true;
    this.notify();

    const apiKey =
      targetVoice.provider === "fpt"
        ? this.fptApiKey
        : targetVoice.provider === "openai"
        ? this.openaiApiKey
        : targetVoice.provider === "google"
        ? this.googleApiKey
        : "";

    if (targetVoice.provider !== "browser" && !apiKey) {
      this.isLoadingState = false;
      this.notify();
      return {
        success: false,
        message: `Chưa nhập API Key cho ${targetVoice.provider.toUpperCase()}. Vui lòng dán API Key cá nhân để sử dụng giọng đọc này.`,
      };
    }

    try {
      if (targetVoice.provider === "browser") {
        this.isLoadingState = false;
        this.speakBrowserUtterance(sampleText, targetVoice.gender);
        return { success: true };
      }

      const res = await fetch("/api/tts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: sampleText,
          provider: targetVoice.provider,
          voice: targetVoice.apiVoiceKey,
          speed: this.speed,
          apiKey: apiKey,
        }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.message || `Lỗi phản hồi (${res.status})`);
      }

      const contentType = res.headers.get("content-type") || "";
      let finalAudioUrl = "";

      if (contentType.includes("application/json")) {
        const data = await res.json();
        finalAudioUrl = data.audioUrl;
      } else {
        const blob = await res.blob();
        finalAudioUrl = URL.createObjectURL(blob);
      }

      this.isLoadingState = false;
      this.playAudioUrl(finalAudioUrl);
      return { success: true };
    } catch (err: any) {
      this.isLoadingState = false;
      this.notify();
      return {
        success: false,
        message: err.message || "Lỗi kết nối giọng đọc.",
      };
    }
  }
}

// Khởi tạo Singleton duy nhất toàn ứng dụng
export const ttsManager = new TTSManager();
