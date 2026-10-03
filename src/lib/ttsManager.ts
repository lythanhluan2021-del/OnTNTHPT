/**
 * Hệ thống Đọc đề bài thông minh (Smart Question Audio Reader)
 * Hỗ trợ giọng đọc tiếng Việt Nam/Nữ, tối ưu hoá ngữ điệu và phát âm câu hỏi thi THPT
 */

export type VoiceGender = "female" | "male";

export interface TTSState {
  isEnabled: boolean;
  gender: VoiceGender;
  isSpeaking: boolean;
  isPaused: boolean;
  rate: number;
}

type TTSListener = (state: TTSState) => void;

/**
 * Hàm chuẩn hoá văn bản đề bài trước khi đọc (Text Normalization)
 * Chuyển đổi mã Markdown, công thức toán LaTeX, code Python thành lời đọc tự nhiên, êm tai
 */
export function normalizeTextForSpeech(text: string): string {
  if (!text) return "";

  let cleaned = text;

  // 1. Chuyển đổi khối mã code
  cleaned = cleaned.replace(/```[a-z]*\n([\s\S]*?)```/gi, " . Đoạn mã lập trình: $1 . ");
  cleaned = cleaned.replace(/`([^`]+)`/g, "$1");

  // 2. Chuyển đổi công thức LaTeX phổ biến
  // Phân số: \frac{a}{b} -> a phần b
  cleaned = cleaned.replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, "$1 phần $2");
  // Căn bậc hai: \sqrt{x} -> căn bậc hai của x
  cleaned = cleaned.replace(/\\sqrt\{([^}]+)\}/g, "căn bậc hai của $1");
  // Lũy thừa: ^2 -> bình phương, ^3 -> lập phương, ^n -> mũ n
  cleaned = cleaned.replace(/\^2\b/g, " bình phương");
  cleaned = cleaned.replace(/\^3\b/g, " lập phương");
  cleaned = cleaned.replace(/\^\{([^}]+)\}/g, " mũ $1");
  cleaned = cleaned.replace(/\^([a-zA-Z0-9]+)/g, " mũ $1");
  // Ký hiệu toán học: \ge, \le, \neq, \times, \pm, \approx
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

  // 3. Chuẩn hoá các dạng câu hỏi đặc thù
  // Điền khuyết dấu ba chấm ... -> tạo khoảng lặng ngắn
  cleaned = cleaned.replace(/\.{3,}/g, " ... , ");

  // Dấu gạch chân điền từ ___ -> "chỗ trống"
  cleaned = cleaned.replace(/_{3,}/g, " chỗ trống ");

  // Nhấn mạnh các từ khóa bẫy phủ định
  cleaned = cleaned.replace(/\b(KHÔNG|KHÔNG ĐÚNG|SAI|NGOẠI TRỪ)\b/g, ", $1 ,");

  // Ký hiệu Đúng/Sai: (Đ/S)
  cleaned = cleaned.replace(/\(Đ\/S\)/gi, " Đúng hoặc Sai ");

  // 4. Xóa các ký tự định dạng Markdown
  cleaned = cleaned.replace(/\*\*([^*]+)\*\*/g, "$1");
  cleaned = cleaned.replace(/\*([^*]+)\*/g, "$1");
  cleaned = cleaned.replace(/__([^_]+)__/g, "$1");
  cleaned = cleaned.replace(/_([^_]+)_/g, "$1");
  cleaned = cleaned.replace(/^#+\s+/gm, ""); // Xóa tiêu đề Markdown
  cleaned = cleaned.replace(/^\s*[-*+]\s+/gm, " , "); // Danh sách gạch đầu dòng

  // 5. Chuẩn hoá khoảng trắng và dấu ngắt nghỉ
  cleaned = cleaned.replace(/[ \t]+/g, " ");
  cleaned = cleaned.replace(/\n+/g, " . ");
  cleaned = cleaned.trim();

  return cleaned;
}

class TTSManager {
  private isEnabled: boolean = false;
  private gender: VoiceGender = "female";
  private rate: number = 0.95;
  private voices: SpeechSynthesisVoice[] = [];
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private listeners: Set<TTSListener> = new Set();
  private isSpeakingState: boolean = false;
  private isPausedState: boolean = false;

  constructor() {
    if (typeof window !== "undefined") {
      try {
        const savedEnabled = localStorage.getItem("thpt_tts_enabled");
        if (savedEnabled !== null) {
          this.isEnabled = savedEnabled === "true";
        }
        const savedGender = localStorage.getItem("thpt_tts_gender") as VoiceGender;
        if (savedGender === "female" || savedGender === "male") {
          this.gender = savedGender;
        }
        const savedRate = localStorage.getItem("thpt_tts_rate");
        if (savedRate) {
          const parsed = parseFloat(savedRate);
          if (!isNaN(parsed) && parsed >= 0.7 && parsed <= 1.5) {
            this.rate = parsed;
          }
        }
      } catch {
        // Bỏ qua lỗi truy cập localStorage
      }

      this.initVoices();
    }
  }

  private initVoices() {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;

    const load = () => {
      this.voices = window.speechSynthesis.getVoices();
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
    return {
      isEnabled: this.isEnabled,
      gender: this.gender,
      isSpeaking: this.isSpeakingState,
      isPaused: this.isPausedState,
      rate: this.rate,
    };
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

  public setGender(gender: VoiceGender) {
    if (this.gender !== gender) {
      this.gender = gender;
      if (typeof window !== "undefined") {
        try {
          localStorage.setItem("thpt_tts_gender", gender);
        } catch {}
      }
      // Nếu đang đọc, khởi động lại câu hiện tại với giọng mới
      if (this.isSpeakingState && this.currentUtterance) {
        const text = this.currentUtterance.text;
        this.stop();
        this.speakRaw(text);
      } else {
        this.notify();
      }
    }
  }

  public setRate(rate: number) {
    this.rate = Math.max(0.7, Math.min(1.4, rate));
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("thpt_tts_rate", String(this.rate));
      } catch {}
    }
    this.notify();
  }

  /**
   * Tìm kiếm giọng đọc tiếng Việt tối ưu nhất theo giới tính (Nam / Nữ)
   */
  private getBestVoice(): SpeechSynthesisVoice | null {
    if (this.voices.length === 0 && typeof window !== "undefined") {
      this.voices = window.speechSynthesis.getVoices();
    }

    const viVoices = this.voices.filter((v) =>
      v.lang.toLowerCase().startsWith("vi")
    );

    if (viVoices.length === 0) {
      // Nếu không có giọng vi-VN, lấy giọng mặc định của trình duyệt
      return this.voices.find((v) => v.default) || this.voices[0] || null;
    }

    if (this.gender === "female") {
      // Ưu tiên giọng nữ: HoaiMy, Linh, Lan, Female, Google tiếng Việt
      const femaleVoice = viVoices.find((v) =>
        /hoaimy|female|nữ|linh|lan|mai|my|google/i.test(v.name)
      );
      return femaleVoice || viVoices[0];
    } else {
      // Ưu tiên giọng nam: NamMinh, Nam, Minh, Male
      const maleVoice = viVoices.find((v) =>
        /namminh|nam|minh|male|an|huy|khoa/i.test(v.name)
      );
      // Nếu không có voice nam riêng, dùng voice tiếng Việt sẵn có kết hợp hạ pitch
      return maleVoice || viVoices[0];
    }
  }

  /**
   * Đọc nội dung câu hỏi sau khi đã qua bộ chuẩn hoá text
   */
  public speakQuestion(rawContent: string, questionPrefix?: string) {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;

    this.stop();

    const normalizedContent = normalizeTextForSpeech(rawContent);
    if (!normalizedContent) return;

    const fullText = questionPrefix
      ? `${questionPrefix} . ${normalizedContent}`
      : normalizedContent;

    this.speakRaw(fullText);
  }

  /**
   * Phát âm văn bản thô qua SpeechSynthesisUtterance
   */
  private speakRaw(text: string) {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    const voice = this.getBestVoice();
    if (voice) {
      utterance.voice = voice;
      utterance.lang = voice.lang || "vi-VN";
    } else {
      utterance.lang = "vi-VN";
    }

    // Tinh chỉnh âm học theo giới tính:
    // Nữ: pitch thanh thoát nhẹ nhàng (1.05)
    // Nam: pitch trầm ấm, dứt khoát (0.88)
    if (this.gender === "female") {
      utterance.pitch = 1.05;
      utterance.rate = this.rate;
    } else {
      utterance.pitch = 0.88;
      utterance.rate = this.rate;
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
      // Lỗi 'interrupted' thường xảy ra khi người dùng chuyển câu hoặc bấm stop, đây là hành vi bình thường
      if (e.error !== "interrupted" && e.error !== "canceled") {
        console.warn("TTS playback warning:", e.error);
      }
      this.isSpeakingState = false;
      this.isPausedState = false;
      this.currentUtterance = null;
      this.notify();
    };

    utterance.onpause = () => {
      this.isPausedState = true;
      this.notify();
    };

    utterance.onresume = () => {
      this.isPausedState = false;
      this.notify();
    };

    this.currentUtterance = utterance;

    // Khắc phục lỗi SpeechSynthesis bị ngắt trên Chrome khi câu quá dài
    window.speechSynthesis.speak(utterance);
  }

  public stop() {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    this.isSpeakingState = false;
    this.isPausedState = false;
    this.currentUtterance = null;
    this.notify();
  }

  public pause() {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
        window.speechSynthesis.pause();
        this.isPausedState = true;
        this.notify();
      }
    }
  }

  public resume() {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
        this.isPausedState = false;
        this.notify();
      }
    }
  }
}

// Khởi tạo Singleton duy nhất toàn ứng dụng
export const ttsManager = new TTSManager();
