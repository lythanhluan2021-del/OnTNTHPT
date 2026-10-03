/**
 * Hệ thống âm thanh tương tác sử dụng Web Audio API thuần (không cần tệp mp3 ngoài, không lo lỗi tải)
 * Tăng hứng thú học tập cho học sinh khi trả lời đúng / sai / nhận gợi ý
 */

class SoundManager {
  private ctx: AudioContext | null = null;
  private soundEnabled: boolean = false;

  constructor() {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("thpt_sound_enabled");
        if (saved !== null) {
          this.soundEnabled = saved === "true";
        }
      } catch {
        // Ignored
      }
    }
  }

  private initCtx() {
    if (!this.ctx && typeof window !== "undefined") {
      const AudioContextClass =
        window.AudioContext || (window as any).webkitAudioContext;
      if (AudioContextClass) {
        this.ctx = new AudioContextClass();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  public isEnabled(): boolean {
    return this.soundEnabled;
  }

  public toggleSound(): boolean {
    this.soundEnabled = !this.soundEnabled;
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("thpt_sound_enabled", String(this.soundEnabled));
      } catch {
        // Ignored
      }
    }
    return this.soundEnabled;
  }

  /**
   * Âm thanh chúc mừng trả lời ĐÚNG (Hợp âm tươi vui C5 -> E5 -> G5 -> C6)
   */
  public playCorrect() {
    if (!this.soundEnabled) return;
    this.initCtx();
    if (!this.ctx) return;

    const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
    const startTime = this.ctx.currentTime;

    notes.forEach((freq, idx) => {
      const osc = this.ctx!.createOscillator();
      const gain = this.ctx!.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, startTime + idx * 0.08);

      gain.gain.setValueAtTime(0, startTime + idx * 0.08);
      gain.gain.linearRampToValueAtTime(0.2, startTime + idx * 0.08 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + idx * 0.08 + 0.35);

      osc.connect(gain);
      gain.connect(this.ctx!.destination);

      osc.start(startTime + idx * 0.08);
      osc.stop(startTime + idx * 0.08 + 0.4);
    });
  }

  public playSuccess() {
    this.playCorrect();
  }

  /**
   * Âm thanh nhẹ nhàng khi trả lời CHƯA ĐÚNG (động viên học sinh xem gợi ý)
   */
  public playIncorrect() {
    if (!this.soundEnabled) return;
    this.initCtx();
    if (!this.ctx) return;

    const notes = [329.63, 261.63]; // E4, C4 (âm trầm êm dịu)
    const startTime = this.ctx.currentTime;

    notes.forEach((freq, idx) => {
      const osc = this.ctx!.createOscillator();
      const gain = this.ctx!.createGain();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, startTime + idx * 0.12);

      gain.gain.setValueAtTime(0, startTime + idx * 0.12);
      gain.gain.linearRampToValueAtTime(0.15, startTime + idx * 0.12 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + idx * 0.12 + 0.3);

      osc.connect(gain);
      gain.connect(this.ctx!.destination);

      osc.start(startTime + idx * 0.12);
      osc.stop(startTime + idx * 0.12 + 0.35);
    });
  }

  public playError() {
    this.playIncorrect();
  }

  /**
   * Âm thanh khi mở GỢI Ý hoặc GIA SƯ (tia sáng ý tưởng / bóng đèn)
   */
  public playHint() {
    if (!this.soundEnabled) return;
    this.initCtx();
    if (!this.ctx) return;

    const notes = [880, 1174.66, 1396.91]; // A5, D6, F6
    const startTime = this.ctx.currentTime;

    notes.forEach((freq, idx) => {
      const osc = this.ctx!.createOscillator();
      const gain = this.ctx!.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, startTime + idx * 0.06);

      gain.gain.setValueAtTime(0, startTime + idx * 0.06);
      gain.gain.linearRampToValueAtTime(0.12, startTime + idx * 0.06 + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + idx * 0.06 + 0.25);

      osc.connect(gain);
      gain.connect(this.ctx!.destination);

      osc.start(startTime + idx * 0.06);
      osc.stop(startTime + idx * 0.06 + 0.3);
    });
  }

  /**
   * Âm thanh bấm nút Neumorphic (pop nhẹ nhàng)
   */
  public playClick() {
    if (!this.soundEnabled) return;
    this.initCtx();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(800, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(400, this.ctx.currentTime + 0.04);

    gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.05);
  }

  /**
   * Âm thanh Combo chuỗi đúng liên tiếp (cao dần theo cấp độ)
   */
  public playCombo(combo: number) {
    if (!this.soundEnabled) return;
    this.initCtx();
    if (!this.ctx) return;

    const baseFreq = 523.25; // C5
    const multiplier = 1 + Math.min(combo * 0.08, 0.8);
    const notes = [baseFreq * multiplier, (baseFreq * 1.25) * multiplier, (baseFreq * 1.5) * multiplier];
    const startTime = this.ctx.currentTime;

    notes.forEach((freq, idx) => {
      const osc = this.ctx!.createOscillator();
      const gain = this.ctx!.createGain();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, startTime + idx * 0.06);

      gain.gain.setValueAtTime(0, startTime + idx * 0.06);
      gain.gain.linearRampToValueAtTime(0.18, startTime + idx * 0.06 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + idx * 0.06 + 0.28);

      osc.connect(gain);
      gain.connect(this.ctx!.destination);

      osc.start(startTime + idx * 0.06);
      osc.stop(startTime + idx * 0.06 + 0.3);
    });
  }

  /**
   * Âm thanh Khúc nhạc Chiến Thắng (Victory Fanfare khi qua màn/hoàn thành chặng)
   */
  public playFanfare() {
    if (!this.soundEnabled) return;
    this.initCtx();
    if (!this.ctx) return;

    // G4, C5, E5, G5, C6 (hợp âm khải hoàn)
    const melody = [
      { freq: 392.00, time: 0, dur: 0.12 },
      { freq: 523.25, time: 0.12, dur: 0.12 },
      { freq: 659.25, time: 0.24, dur: 0.12 },
      { freq: 783.99, time: 0.36, dur: 0.18 },
      { freq: 1046.50, time: 0.54, dur: 0.45 },
    ];
    const startTime = this.ctx.currentTime;

    melody.forEach((item) => {
      const osc = this.ctx!.createOscillator();
      const gain = this.ctx!.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(item.freq, startTime + item.time);

      gain.gain.setValueAtTime(0, startTime + item.time);
      gain.gain.linearRampToValueAtTime(0.25, startTime + item.time + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + item.time + item.dur);

      osc.connect(gain);
      gain.connect(this.ctx!.destination);

      osc.start(startTime + item.time);
      osc.stop(startTime + item.time + item.dur + 0.05);
    });
  }
}

export const soundManager = new SoundManager();
