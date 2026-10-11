/**
 * Hệ thống Đọc đề bài thông minh (Smart Question Audio Reader 2.0)
 * Tích hợp đa nguồn giọng nói miễn phí và chất lượng cao:
 * 1. MIỄN PHÍ 100% (Không cần bất kỳ Key nào):
 *    - 🌸 Mai Linh (Nữ Tự Nhiên - Google Stream MP3)
 *    - 👔 Quốc Tuấn (Nam Trầm Ấm - Native Engine)
 *    - ✨ Nam Minh / Hoài My (Microsoft Neural AI - Tự động nhận diện trên Windows/Edge)
 * 2. FPT.AI (Gói Miễn Phí 100.000 ký tự/tháng):
 *    - 🌾 Giọng Miền Tây (Thu Minh / Minh Quang) & 🎙️ Giọng MC Bắc (Ban Mai / Lê Minh)
 * 3. OpenAI Studio: ✨ Nova & Echo chuẩn phòng thu quốc tế.
 */

export type TTSProvider = "free" | "fpt" | "openai" | "google" | "browser";
export type VoiceGender = "female" | "male";

export interface TTSVoiceOption {
  id: string;
  name: string;
  region: "mientay" | "mienbac" | "studio" | "standard";
  gender: VoiceGender;
  category: "free" | "fpt" | "openai";
  provider: TTSProvider;
  apiVoiceKey: string;
  description: string;
  badge: string;
  recommended?: boolean;
}

export const BASE_VOICE_OPTIONS: TTSVoiceOption[] = [
  // 1. MIỄN PHÍ 100% - KHÔNG CẦN API KEY
  {
    id: "free_female",
    name: "Mai Linh (Nữ Tự Nhiên)",
    region: "standard",
    gender: "female",
    category: "free",
    provider: "free",
    apiVoiceKey: "google_stream_female",
    description: "Giọng Nữ chuẩn tiếng Việt ngọt ngào, trong trẻo, mượt mà (Phát âm Google Stream)",
    badge: "🌸 Nữ Tự Nhiên",
    recommended: true,
  },
  {
    id: "free_male",
    name: "Quốc Tuấn (Nam Trầm Ấm)",
    region: "standard",
    gender: "male",
    category: "free",
    provider: "free",
    apiVoiceKey: "native_male",
    description: "Giọng Nam trầm ấm, đĩnh đạc, rõ ràng, phong thái sư phạm (Phát âm Native Engine)",
    badge: "👔 Nam Trầm Ấm",
    recommended: true,
  },

  // 2. FPT.AI - Chuyên gia Tiếng Việt (Miễn phí 100.000 ký tự/tháng)
  {
    id: "fpt_thuminh",
    name: "Thu Minh (Nữ Miền Tây)",
    region: "mientay",
    gender: "female",
    category: "fpt",
    provider: "fpt",
    apiVoiceKey: "thuminh",
    description: "Giọng Nữ Nam Bộ Miền Tây ngọt ngào, truyền cảm tự nhiên (Chính thức từ FPT.AI)",
    badge: "🌾 Nữ Miền Tây",
    recommended: true,
  },
  {
    id: "fpt_minhquang",
    name: "Minh Quang (Nam Miền Tây)",
    region: "mientay",
    gender: "male",
    category: "fpt",
    provider: "fpt",
    apiVoiceKey: "minhquang",
    description: "Giọng Nam Nam Bộ Miền Tây trầm ấm, gần gũi, chân phương (Chính thức từ FPT.AI)",
    badge: "🌾 Nam Miền Tây",
    recommended: true,
  },
  {
    id: "fpt_banmai",
    name: "Ban Mai (Nữ MC Bắc)",
    region: "mienbac",
    gender: "female",
    category: "fpt",
    provider: "fpt",
    apiVoiceKey: "banmai",
    description: "Giọng Nữ phát thanh viên truyền hình chuẩn sư phạm trong trẻo (Chính thức từ FPT.AI)",
    badge: "🎙️ Nữ MC Bắc",
  },
  {
    id: "fpt_leminh",
    name: "Lê Minh (Nam MC Bắc)",
    region: "mienbac",
    gender: "male",
    category: "fpt",
    provider: "fpt",
    apiVoiceKey: "leminh",
    description: "Giọng Nam MC đĩnh đạc, rành mạch, chuẩn phòng thu (Chính thức từ FPT.AI)",
    badge: "🎙️ Nam MC Bắc",
  },

  // 3. OpenAI TTS Studio - Đỉnh cao phòng thu quốc tế
  {
    id: "openai_nova",
    name: "Nova (Nữ Studio)",
    region: "studio",
    gender: "female",
    category: "openai",
    provider: "openai",
    apiVoiceKey: "nova",
    description: "Giọng Nữ MC AI thế hệ mới, cực kỳ trong trẻo, mượt mà chuẩn phòng thu quốc tế",
    badge: "✨ Nữ Studio",
  },
  {
    id: "openai_echo",
    name: "Echo (Nam Studio)",
    region: "studio",
    gender: "male",
    category: "openai",
    provider: "openai",
    apiVoiceKey: "echo",
    description: "Giọng Nam MC vang sáng, phong cách người dẫn chương trình chuyên nghiệp",
    badge: "✨ Nam Studio",
  },
];

export let VOICE_OPTIONS: TTSVoiceOption[] = [...BASE_VOICE_OPTIONS];

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
  hasServerKey: boolean;
  errorMessage?: string | null;
}

type TTSListener = (state: TTSState) => void;

/**
 * Chuẩn hoá văn bản đề bài trước khi đọc (Text Normalization)
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

  // 3. Chuẩn hoá các thuật ngữ Tin học & Tiếng Anh thông dụng
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

  // Điền khuyết dấu ba chấm ...
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

  // 6. Chuẩn hoá khoảng trắng
  cleaned = cleaned.replace(/[ \t]+/g, " ");
  cleaned = cleaned.replace(/\n+/g, " . ");
  cleaned = cleaned.trim();

  return cleaned;
}

class TTSManager {
  private isEnabled: boolean = false;
  private provider: TTSProvider = "free";
  private voiceId: string = "free_female";
  private gender: VoiceGender = "female";
  private speed: number = 1.0;

  private fptApiKey: string = "";
  private openaiApiKey: string = "";
  private hasServerFptKey: boolean = false;
  private hasServerOpenaiKey: boolean = false;

  private isSpeakingState: boolean = false;
  private isPausedState: boolean = false;
  private isLoadingState: boolean = false;
  private errorMessageState: string | null = null;

  private currentAudio: HTMLAudioElement | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private audioCache: Map<string, string> = new Map();
  private listeners: Set<TTSListener> = new Set();
  private browserVoices: SpeechSynthesisVoice[] = [];
  private currentAbortController: AbortController | null = null;

  constructor() {
    if (typeof window !== "undefined") {
      this.loadConfigFromStorage();
      this.initBrowserVoices();
      this.checkServerKeys();
    }
  }

  private async checkServerKeys() {
    try {
      const res = await fetch("/api/tts/status");
      if (res.ok) {
        const data = await res.json();
        this.hasServerFptKey = Boolean(data.hasServerFptKey);
        this.hasServerOpenaiKey = Boolean(data.hasServerOpenaiKey);
        this.notify();
      }
    } catch {
      // Ignored
    }
  }

  private loadConfigFromStorage() {
    try {
      const savedEnabled = localStorage.getItem("thpt_tts_enabled");
      if (savedEnabled !== null) this.isEnabled = savedEnabled === "true";

      const savedProvider = localStorage.getItem("thpt_tts_provider") as TTSProvider;
      if (savedProvider && ["free", "fpt", "openai"].includes(savedProvider)) {
        this.provider = savedProvider;
      } else {
        this.provider = "free";
      }

      const savedVoiceId = localStorage.getItem("thpt_tts_voice_id");
      if (savedVoiceId) {
        this.voiceId = savedVoiceId;
      } else {
        this.voiceId = this.provider === "free" ? "free_female" : "fpt_thuminh";
      }

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
    } catch {
      // Ignored
    }
  }

  private initBrowserVoices() {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    const load = () => {
      this.browserVoices = window.speechSynthesis.getVoices();
      this.updateDynamicBrowserVoices();
    };
    load();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = load;
    }
  }

  /**
   * Tự động quét và bổ sung các giọng AI tiếng Việt có sẵn trên thiết bị (Microsoft Edge Neural, Chrome)
   */
  private updateDynamicBrowserVoices() {
    const viVoices = this.browserVoices.filter((v) =>
      v.lang.toLowerCase().startsWith("vi")
    );

    const dynamicVoices: TTSVoiceOption[] = [];

    // Nhận diện Microsoft NamMinh Online (Natural)
    const namMinh = viVoices.find((v) => /namminh/i.test(v.name));
    if (namMinh) {
      dynamicVoices.push({
        id: "browser_namminh",
        name: "Nam Minh (Nam Microsoft AI)",
        region: "standard",
        gender: "male",
        category: "free",
        provider: "free",
        apiVoiceKey: namMinh.name,
        description: "Giọng Nam AI cao cấp của Microsoft, trầm ấm, chuẩn phát thanh viên (Có sẵn trên Edge)",
        badge: "✨ Nam Microsoft AI",
        recommended: true,
      });
    }

    // Nhận diện Microsoft HoaiMy Online (Natural)
    const hoaiMy = viVoices.find((v) => /hoaimy/i.test(v.name));
    if (hoaiMy) {
      dynamicVoices.push({
        id: "browser_hoaimy",
        name: "Hoài My (Nữ Microsoft AI)",
        region: "standard",
        gender: "female",
        category: "free",
        provider: "free",
        apiVoiceKey: hoaiMy.name,
        description: "Giọng Nữ AI cao cấp của Microsoft, trong trẻo, lưu loát, tự nhiên (Có sẵn trên Edge)",
        badge: "✨ Nữ Microsoft AI",
        recommended: true,
      });
    }

    // Nhận diện Google tiếng Việt
    const googleVi = viVoices.find((v) => /google/i.test(v.name));
    if (googleVi) {
      dynamicVoices.push({
        id: "browser_google_vi",
        name: "Google Tiếng Việt (Chrome)",
        region: "standard",
        gender: "female",
        category: "free",
        provider: "free",
        apiVoiceKey: googleVi.name,
        description: "Giọng đọc tiếng Việt tích hợp sẵn trong trình duyệt Google Chrome",
        badge: "🌐 Google Trình Duyệt",
      });
    }

    if (dynamicVoices.length > 0) {
      // Ghép vào VOICE_OPTIONS
      const existingIds = new Set(BASE_VOICE_OPTIONS.map((v) => v.id));
      const filtered = dynamicVoices.filter((v) => !existingIds.has(v.id));
      VOICE_OPTIONS = [
        BASE_VOICE_OPTIONS[0],
        BASE_VOICE_OPTIONS[1],
        ...filtered,
        ...BASE_VOICE_OPTIONS.slice(2),
      ];
      this.notify();
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
      hasServerKey: this.provider === "fpt" ? this.hasServerFptKey : this.hasServerOpenaiKey,
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

  public clearCache() {
    this.audioCache.clear();
  }

  /**
   * Lưu và áp dụng cấu hình giọng đọc
   */
  public saveAndApplyConfig(config: {
    provider: TTSProvider;
    voiceId: string;
    speed?: number;
    fptKey?: string;
    openaiKey?: string;
    enabled?: boolean;
  }) {
    this.stop();
    this.audioCache.clear();

    if (config.fptKey !== undefined) {
      this.fptApiKey = config.fptKey.trim();
      if (typeof window !== "undefined") localStorage.setItem("thpt_tts_fpt_key", this.fptApiKey);
    }
    if (config.openaiKey !== undefined) {
      this.openaiApiKey = config.openaiKey.trim();
      if (typeof window !== "undefined") localStorage.setItem("thpt_tts_openai_key", this.openaiApiKey);
    }

    const targetVoice =
      VOICE_OPTIONS.find((v) => v.id === config.voiceId) ||
      VOICE_OPTIONS.find((v) => v.provider === config.provider) ||
      VOICE_OPTIONS[0];

    this.voiceId = targetVoice.id;
    this.provider = targetVoice.provider;
    this.gender = targetVoice.gender;

    if (config.speed !== undefined) {
      this.speed = Math.max(0.75, Math.min(1.3, config.speed));
    }
    if (config.enabled !== undefined) {
      this.isEnabled = config.enabled;
    }

    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("thpt_tts_voice_id", this.voiceId);
        localStorage.setItem("thpt_tts_provider", this.provider);
        localStorage.setItem("thpt_tts_gender", this.gender);
        localStorage.setItem("thpt_tts_speed", String(this.speed));
        localStorage.setItem("thpt_tts_enabled", String(this.isEnabled));
      } catch {}
    }

    this.notify();
  }

  public setProvider(provider: TTSProvider) {
    const normProvider = provider === "google" || provider === "browser" ? "free" : provider;
    this.provider = normProvider;

    const matchingVoice =
      VOICE_OPTIONS.find((v) => v.provider === normProvider && v.gender === this.gender) ||
      VOICE_OPTIONS.find((v) => v.provider === normProvider) ||
      VOICE_OPTIONS[0];

    this.voiceId = matchingVoice.id;
    this.gender = matchingVoice.gender;
    this.audioCache.clear();

    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("thpt_tts_provider", this.provider);
        localStorage.setItem("thpt_tts_voice_id", this.voiceId);
        localStorage.setItem("thpt_tts_gender", this.gender);
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
      this.audioCache.clear();

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

  /**
   * Đổi Nam / Nữ nhanh: Ghép cặp chính xác theo từng danh mục
   */
  public setGender(gender: VoiceGender) {
    this.gender = gender;
    const currentVoice = this.getActiveVoice();

    let nextVoice: TTSVoiceOption | undefined;

    // 1. Cùng danh mục VÀ cùng phong cách vùng miền
    nextVoice = VOICE_OPTIONS.find(
      (v) =>
        v.provider === currentVoice.provider &&
        v.gender === gender &&
        v.region === currentVoice.region
    );

    // 2. Cùng danh mục
    if (!nextVoice) {
      nextVoice = VOICE_OPTIONS.find(
        (v) => v.provider === currentVoice.provider && v.gender === gender
      );
    }

    // 3. Khớp giới tính bất kỳ
    if (!nextVoice) {
      nextVoice = VOICE_OPTIONS.find((v) => v.gender === gender);
    }

    if (nextVoice) {
      this.voiceId = nextVoice.id;
      this.provider = nextVoice.provider;
    }

    this.audioCache.clear();

    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("thpt_tts_gender", gender);
        localStorage.setItem("thpt_tts_voice_id", this.voiceId);
        localStorage.setItem("thpt_tts_provider", this.provider);
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

  public setApiKey(provider: "fpt" | "openai", key: string) {
    const trimmed = key.trim();
    if (provider === "fpt") {
      this.fptApiKey = trimmed;
      if (typeof window !== "undefined") localStorage.setItem("thpt_tts_fpt_key", trimmed);
    } else if (provider === "openai") {
      this.openaiApiKey = trimmed;
      if (typeof window !== "undefined") localStorage.setItem("thpt_tts_openai_key", trimmed);
    }
    this.notify();
  }

  public getStoredApiKey(provider: "fpt" | "openai" | "free" | "google"): string {
    if (provider === "fpt") return this.fptApiKey;
    if (provider === "openai") return this.openaiApiKey;
    return "";
  }

  public hasServerKeyConfigured(provider: "fpt" | "openai"): boolean {
    return provider === "fpt" ? this.hasServerFptKey : this.hasServerOpenaiKey;
  }

  /**
   * Đọc câu hỏi thông minh
   */
  public async speakQuestion(rawContent: string, questionPrefix?: string) {
    if (typeof window === "undefined") return;

    if (this.currentAbortController) {
      this.currentAbortController.abort();
      this.currentAbortController = null;
    }

    this.stop();
    this.errorMessageState = null;

    const normalizedContent = normalizeTextForSpeech(rawContent);
    if (!normalizedContent) return;

    const fullText = questionPrefix
      ? `${questionPrefix} . ${normalizedContent}`
      : normalizedContent;

    const activeVoice = this.getActiveVoice();

    // 1. CÁC GIỌNG PHÁT NATIVE TRÊN THIẾT BỊ (Quốc Tuấn, Nam Minh, Hoài My...)
    if (
      activeVoice.id === "free_male" ||
      activeVoice.id.startsWith("browser_")
    ) {
      this.speakBrowserUtterance(fullText, activeVoice.gender, activeVoice.apiVoiceKey);
      return;
    }

    // 2. GIỌNG NỮ MIỄN PHÍ: Phát qua Google Stream MP3 (có RAM Cache 0ms)
    if (activeVoice.id === "free_female") {
      const cacheKey = `free_female_${this.speed}_${fullText}`;
      if (this.audioCache.has(cacheKey)) {
        this.playAudioUrl(this.audioCache.get(cacheKey)!, "female", "google_stream_female");
        return;
      }

      this.isLoadingState = true;
      this.notify();

      const controller = new AbortController();
      this.currentAbortController = controller;

      try {
        const res = await fetch("/api/tts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          signal: controller.signal,
          body: JSON.stringify({
            text: fullText,
            provider: "free",
            voice: "google_stream_female",
            speed: this.speed,
          }),
        });

        if (controller.signal.aborted) return;
        if (!res.ok) {
          const errData = await res.json().catch(() => ({}));
          throw new Error(errData.message || `Lỗi API (${res.status})`);
        }

        const blob = await res.blob();
        const finalAudioUrl = URL.createObjectURL(blob);
        if (controller.signal.aborted) return;

        this.audioCache.set(cacheKey, finalAudioUrl);
        this.isLoadingState = false;
        this.currentAbortController = null;
        this.playAudioUrl(finalAudioUrl, "female", "google_stream_female");
      } catch (err: any) {
        if (err.name === "AbortError" || controller.signal.aborted) return;
        this.isLoadingState = false;
        this.currentAbortController = null;
        this.errorMessageState = `Lỗi phát âm: ${err.message}`;
        this.notify();
        this.speakBrowserUtterance(fullText, "female");
      }
      return;
    }

    // 3. GIỌNG FPT.AI HOẶC OPENAI STUDIO: Có thể dùng Key người dùng hoặc Key máy chủ
    const apiKey = this.getActiveApiKey();
    const canUseKey = Boolean(apiKey || (activeVoice.provider === "fpt" && this.hasServerFptKey));

    if (!canUseKey) {
      this.errorMessageState = `Giọng "${activeVoice.name}" cần API Key ${activeVoice.provider.toUpperCase()}. Vui lòng dán mã Key trong Cài đặt hoặc chọn nhóm giọng Miễn Phí.`;
      this.notify();
      return;
    }

    const cacheKey = `${activeVoice.id}_${this.speed}_${fullText}`;
    if (this.audioCache.has(cacheKey)) {
      this.playAudioUrl(this.audioCache.get(cacheKey)!, activeVoice.gender, activeVoice.apiVoiceKey);
      return;
    }

    this.isLoadingState = true;
    this.notify();

    const controller = new AbortController();
    this.currentAbortController = controller;

    try {
      const res = await fetch("/api/tts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          text: fullText,
          provider: activeVoice.provider,
          voice: activeVoice.apiVoiceKey,
          speed: this.speed,
          apiKey: apiKey,
        }),
      });

      if (controller.signal.aborted) return;

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.message || `Lỗi API (${res.status})`);
      }

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

      if (controller.signal.aborted) return;

      this.audioCache.set(cacheKey, finalAudioUrl);
      this.isLoadingState = false;
      this.currentAbortController = null;
      this.playAudioUrl(finalAudioUrl, activeVoice.gender, activeVoice.apiVoiceKey);
    } catch (err: any) {
      if (err.name === "AbortError" || controller.signal.aborted) return;
      this.isLoadingState = false;
      this.currentAbortController = null;
      this.errorMessageState = `Lỗi giọng đọc: ${err.message}`;
      this.notify();
    }
  }

  /**
   * Tải trước (pre-fetch) âm thanh của câu hỏi tiếp theo chạy ngầm
   */
  public async prefetchQuestion(rawContent: string, questionPrefix?: string) {
    if (typeof window === "undefined" || !this.isEnabled) return;
    const activeVoice = this.getActiveVoice();

    // Giọng máy không cần tải mạng
    if (activeVoice.id === "free_male" || activeVoice.id.startsWith("browser_")) return;

    const apiKey = this.getActiveApiKey();
    const canUseKey = Boolean(apiKey || (activeVoice.provider === "fpt" && this.hasServerFptKey));
    if ((activeVoice.provider === "fpt" || activeVoice.provider === "openai") && !canUseKey) {
      return;
    }

    const normalizedContent = normalizeTextForSpeech(rawContent);
    if (!normalizedContent) return;

    const fullText = questionPrefix
      ? `${questionPrefix} . ${normalizedContent}`
      : normalizedContent;

    const cacheKey = `${activeVoice.id}_${this.speed}_${fullText}`;
    if (this.audioCache.has(cacheKey)) return;

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

      if (!res.ok) return;

      const contentType = res.headers.get("content-type") || "";
      let finalAudioUrl = "";

      if (contentType.includes("application/json")) {
        const data = await res.json();
        if (data.audioUrl) finalAudioUrl = data.audioUrl;
      } else {
        const blob = await res.blob();
        finalAudioUrl = URL.createObjectURL(blob);
      }

      if (finalAudioUrl) {
        this.audioCache.set(cacheKey, finalAudioUrl);
        try {
          const preAudio = new Audio(finalAudioUrl);
          preAudio.preload = "auto";
          preAudio.load();
        } catch {}
      }
    } catch {}
  }

  /**
   * Phát âm thanh qua thẻ HTMLAudioElement
   */
  private playAudioUrl(url: string, gender?: VoiceGender, voiceKey?: string) {
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
   * Phát âm qua Web Speech API (Trình duyệt) với phân biệt Nam/Nữ rõ rệt
   */
  private speakBrowserUtterance(text: string, forceGender?: VoiceGender, specificVoiceName?: string) {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;

    const currentGender = forceGender || this.gender;

    window.speechSynthesis.cancel();

    setTimeout(() => {
      try {
        if (window.speechSynthesis.paused) {
          window.speechSynthesis.resume();
        }

        const utterance = new SpeechSynthesisUtterance(text);
        const { voice, isNativeMale } = this.getBestBrowserVoice(currentGender, specificVoiceName);

        if (voice) {
          utterance.voice = voice;
          utterance.lang = voice.lang || "vi-VN";
        } else {
          utterance.lang = "vi-VN";
        }

        if (currentGender === "female") {
          utterance.pitch = 1.05;
          utterance.rate = this.speed;
        } else {
          // Với giọng Nam:
          // Nếu có giọng nam thật (Microsoft NamMinh): pitch 0.98
          // Nếu chỉ có giọng nữ: hạ pitch xuống 0.55 để tạo âm vực nam trầm ấm, rành mạch!
          utterance.pitch = isNativeMale ? 0.98 : 0.55;
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
    }, 100);
  }

  private getBestBrowserVoice(
    gender: VoiceGender,
    specificVoiceName?: string
  ): {
    voice: SpeechSynthesisVoice | null;
    isNativeMale: boolean;
  } {
    if (typeof window !== "undefined") {
      const liveVoices = window.speechSynthesis.getVoices();
      if (liveVoices.length > 0) {
        this.browserVoices = liveVoices;
      }
    }

    // Nếu chỉ định tên cụ thể (ví dụ: browser_namminh -> "Microsoft NamMinh Online")
    if (specificVoiceName && specificVoiceName !== "native_male") {
      const exact = this.browserVoices.find((v) =>
        v.name.toLowerCase().includes(specificVoiceName.toLowerCase())
      );
      if (exact) {
        const isMale = /nam|minh|male|an|huy/i.test(exact.name);
        return { voice: exact, isNativeMale: isMale };
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
      // Tìm giọng nam thật nếu hệ thống có (Microsoft NamMinh, An, Minh, Male...)
      const nativeMale = viVoices.find((v) =>
        /namminh|nam|minh|male|an|huy|khoa/i.test(v.name)
      );
      if (nativeMale) {
        return { voice: nativeMale, isNativeMale: true };
      }
      return { voice: viVoices[0], isNativeMale: false };
    }
  }

  /**
   * Dừng phát âm thanh ngay lập tức
   */
  public stop() {
    if (this.currentAbortController) {
      this.currentAbortController.abort();
      this.currentAbortController = null;
    }

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

    // 1. Giọng Native Trên Thiết Bị (Quốc Tuấn, Nam Minh, Hoài My...)
    if (targetVoice.id === "free_male" || targetVoice.id.startsWith("browser_")) {
      this.speakBrowserUtterance(sampleText, targetVoice.gender, targetVoice.apiVoiceKey);
      return { success: true };
    }

    // 2. Giọng Nữ Miễn Phí -> Phát Google Stream MP3
    if (targetVoice.id === "free_female") {
      this.isLoadingState = true;
      this.notify();
      try {
        const res = await fetch("/api/tts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            text: sampleText,
            provider: "free",
            voice: "google_stream_female",
            speed: this.speed,
          }),
        });

        if (!res.ok) {
          const err = await res.json().catch(() => ({}));
          throw new Error(err.message || `Lỗi phản hồi (${res.status})`);
        }

        const blob = await res.blob();
        const finalAudioUrl = URL.createObjectURL(blob);
        this.isLoadingState = false;
        this.playAudioUrl(finalAudioUrl, "female", "google_stream_female");
        return { success: true };
      } catch (err: any) {
        this.isLoadingState = false;
        this.notify();
        return { success: false, message: err.message };
      }
    }

    // 3. Giọng FPT.AI hoặc OpenAI Studio
    const apiKey = targetVoice.provider === "fpt" ? this.fptApiKey : this.openaiApiKey;
    const canUseKey = Boolean(apiKey || (targetVoice.provider === "fpt" && this.hasServerFptKey));

    if (!canUseKey) {
      return {
        success: false,
        message: `Chưa có API Key cho ${targetVoice.provider.toUpperCase()}. Vui lòng dán mã API Key cá nhân để nghe thử giọng ${targetVoice.name}.`,
      };
    }

    this.isLoadingState = true;
    this.notify();

    try {
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
      this.playAudioUrl(finalAudioUrl, targetVoice.gender, targetVoice.apiVoiceKey);
      return { success: true };
    } catch (err: any) {
      this.isLoadingState = false;
      this.notify();
      return { success: false, message: err.message };
    }
  }
}

// Khởi tạo Singleton duy nhất toàn ứng dụng
export const ttsManager = new TTSManager();
