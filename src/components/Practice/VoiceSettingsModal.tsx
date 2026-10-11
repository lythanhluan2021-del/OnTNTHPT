"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import {
  X,
  Volume2,
  Key,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Play,
  Square,
  Sparkles,
  Info,
  Sliders,
  Check,
  Eye,
  EyeOff,
} from "lucide-react";
import {
  ttsManager,
  TTSState,
  TTSProvider,
  VOICE_OPTIONS,
} from "@/lib/ttsManager";
import { soundManager } from "@/lib/audioEffects";

interface VoiceSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentQuestionText?: string;
}

export const VoiceSettingsModal: React.FC<VoiceSettingsModalProps> = ({
  isOpen,
  onClose,
  currentQuestionText,
}) => {
  const [mounted, setMounted] = useState<boolean>(false);
  const [ttsState, setTtsState] = useState<TTSState>(ttsManager.getState());
  const [selectedProvider, setSelectedProvider] = useState<TTSProvider>(
    ttsState.provider === "google" || ttsState.provider === "browser" ? "free" : ttsState.provider
  );
  const [selectedVoiceId, setSelectedVoiceId] = useState<string>(ttsState.voiceId);
  const [speed, setSpeed] = useState<number>(ttsState.speed);

  // API Key inputs
  const [fptKey, setFptKey] = useState<string>("");
  const [openaiKey, setOpenaiKey] = useState<string>("");
  const [showKey, setShowKey] = useState<boolean>(false);

  // Testing voice state
  const [isTesting, setIsTesting] = useState<boolean>(false);
  const [testMessage, setTestMessage] = useState<{
    type: "success" | "error" | "info";
    text: string;
  } | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const unsubscribe = ttsManager.subscribe((st) => {
      setTtsState(st);
      setIsTesting(st.isLoading || st.isSpeaking);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (isOpen) {
      const curState = ttsManager.getState();
      const normProv: TTSProvider =
        curState.provider === "google" || curState.provider === "browser"
          ? "free"
          : curState.provider;
      setSelectedProvider(normProv);
      setSelectedVoiceId(curState.voiceId);
      setSpeed(curState.speed);
      setFptKey(ttsManager.getStoredApiKey("fpt"));
      setOpenaiKey(ttsManager.getStoredApiKey("openai"));
      setTestMessage(null);
    }
  }, [isOpen]);

  if (!isOpen || !mounted) return null;

  // Lọc danh sách giọng đọc theo nhà cung cấp đang chọn
  const availableVoices = VOICE_OPTIONS.filter((v) => v.provider === selectedProvider);

  // Đổi nhà cung cấp
  const handleSelectProvider = (prov: TTSProvider) => {
    soundManager.playClick();
    setSelectedProvider(prov);
    const defaultVoice = VOICE_OPTIONS.find((v) => v.provider === prov);
    if (defaultVoice) {
      setSelectedVoiceId(defaultVoice.id);
    }
    setTestMessage(null);
  };

  // Đổi giọng đọc
  const handleSelectVoice = (voiceId: string) => {
    soundManager.playClick();
    setSelectedVoiceId(voiceId);
    setTestMessage(null);
  };

  // Thử giọng đọc
  const handleTestVoice = async () => {
    soundManager.playClick();
    ttsManager.saveAndApplyConfig({
      provider: selectedProvider,
      voiceId: selectedVoiceId,
      speed,
      fptKey,
      openaiKey,
      enabled: ttsState.isEnabled,
    });

    setTestMessage({ type: "info", text: "Đang phát âm giọng đọc thử nghiệm..." });

    const res = await ttsManager.testVoice(selectedVoiceId);
    if (res.success) {
      setTestMessage({
        type: "success",
        text: "Phát âm thanh thành công! Giọng đọc hoạt động mượt mà.",
      });
    } else {
      setTestMessage({
        type: "error",
        text: res.message || "Lỗi khi gọi giọng đọc. Vui lòng kiểm tra lại API Key.",
      });
    }
  };

  // Dừng thử giọng
  const handleStopTest = () => {
    soundManager.playClick();
    ttsManager.stop();
    setIsTesting(false);
  };

  // Lưu và áp dụng cấu hình
  const handleSaveAndApply = () => {
    soundManager.playSuccess();
    ttsManager.saveAndApplyConfig({
      provider: selectedProvider,
      voiceId: selectedVoiceId,
      speed,
      fptKey,
      openaiKey,
      enabled: true,
    });

    // Nếu đang có câu hỏi trên màn hình, phát ngay với giọng mới
    if (currentQuestionText) {
      ttsManager.speakQuestion(currentQuestionText);
    }

    onClose();
  };

  const modalContent = (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-5 bg-slate-950/75 backdrop-blur-md animate-in fade-in duration-200"
      onClick={() => {
        soundManager.playClick();
        ttsManager.stop();
        onClose();
      }}
    >
      <div
        className="w-full max-w-2xl bg-[#e6ecf5] dark:bg-[#1a202c] rounded-2xl shadow-2xl p-4 sm:p-6 relative border border-white/80 dark:border-slate-800 flex flex-col max-h-[90vh] my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Nút đóng */}
        <button
          type="button"
          onClick={() => {
            soundManager.playClick();
            ttsManager.stop();
            onClose();
          }}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#e6ecf5] dark:bg-slate-800 shadow-neu-flat-xs active:shadow-neu-inset text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 cursor-pointer z-10"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Tiêu đề modal - Header */}
        <div className="flex items-center gap-3 flex-shrink-0 pr-8 pb-3 border-b border-slate-300/60 dark:border-slate-800">
          <div className="w-10 h-10 rounded-neu-sm bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-neu-flat-xs flex-shrink-0">
            <Volume2 className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-black text-slate-800 dark:text-slate-100 flex items-center gap-2">
              <span>Cài Đặt Giọng Đọc Đề Bài Thông Minh</span>
              <span className="text-[10px] uppercase tracking-wider font-extrabold bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-300 px-2 py-0.5 rounded-full">
                TTS 2.0
              </span>
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              Lựa chọn giọng đọc thực tế: Miễn phí không cần key, giọng Miền Tây / MC Bắc FPT.AI, hoặc giọng phòng thu OpenAI.
            </p>
          </div>
        </div>

        {/* Nội dung cuộn giữa */}
        <div className="flex-1 overflow-y-auto space-y-4 pr-1 sm:pr-2 py-3">
          {/* Thông báo kiểm tra kết nối */}
          {testMessage && (
            <div
              className={`p-3 rounded-neu-sm text-xs font-semibold flex items-start gap-2 shadow-neu-flat-xs ${
                testMessage.type === "success"
                  ? "bg-emerald-50 text-emerald-800 border border-emerald-300 dark:bg-emerald-950/40 dark:text-emerald-300"
                  : testMessage.type === "error"
                  ? "bg-rose-50 text-rose-800 border border-rose-300 dark:bg-rose-950/40 dark:text-rose-300"
                  : "bg-blue-50 text-blue-800 border border-blue-300 dark:bg-blue-950/40 dark:text-blue-300"
              }`}
            >
              {testMessage.type === "success" ? (
                <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-emerald-600" />
              ) : testMessage.type === "error" ? (
                <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-rose-600" />
              ) : (
                <Sparkles className="w-4 h-4 flex-shrink-0 mt-0.5 text-blue-600 animate-spin" />
              )}
              <span>{testMessage.text}</span>
            </div>
          )}

          {/* BƯỚC 1: CHỌN NHÓM NGUỒN GIỌNG ĐỌC */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center justify-between">
              <span>1. Chọn Nhóm Giọng Đọc (Engine):</span>
              <span className="text-[11px] font-normal text-slate-500">
                {selectedProvider === "free"
                  ? "Miễn phí 100%, không cần đăng ký tài khoản"
                  : selectedProvider === "fpt"
                  ? "Giọng Miền Tây & MC Bắc thực thụ"
                  : "Giọng phòng thu quốc tế"}
              </span>
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {/* Tab 1: Miễn phí 100% */}
              <button
                type="button"
                onClick={() => handleSelectProvider("free")}
                className={`p-3 rounded-neu-sm text-left transition flex flex-col justify-between cursor-pointer border ${
                  selectedProvider === "free"
                    ? "bg-emerald-50/90 dark:bg-emerald-950/50 border-emerald-500 shadow-neu-flat text-emerald-900 dark:text-emerald-200"
                    : "bg-[#e6ecf5] dark:bg-slate-800/60 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-white/40"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-extrabold text-xs flex items-center gap-1.5">
                    🌟 Miễn Phí 100%
                  </span>
                  {selectedProvider === "free" && <Check className="w-4 h-4 text-emerald-600" />}
                </div>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 mt-1.5 leading-snug">
                  🌸 Mai Linh (Nữ) &amp; 👔 Quốc Tuấn (Nam) • 0ms, không cần Key
                </span>
              </button>

              {/* Tab 2: FPT.AI Voice */}
              <button
                type="button"
                onClick={() => handleSelectProvider("fpt")}
                className={`p-3 rounded-neu-sm text-left transition flex flex-col justify-between cursor-pointer border ${
                  selectedProvider === "fpt"
                    ? "bg-blue-50/90 dark:bg-blue-950/50 border-blue-500 shadow-neu-blue text-blue-900 dark:text-blue-200"
                    : "bg-[#e6ecf5] dark:bg-slate-800/60 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-white/40"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-extrabold text-xs flex items-center gap-1.5">
                    🌾 FPT.AI Voice
                  </span>
                  {selectedProvider === "fpt" && <Check className="w-4 h-4 text-blue-600" />}
                </div>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 mt-1.5 leading-snug">
                  🌾 Giọng Miền Tây &amp; 🎙️ MC Bắc chuẩn bản quyền (Cần Key FPT)
                </span>
              </button>

              {/* Tab 3: OpenAI Studio */}
              <button
                type="button"
                onClick={() => handleSelectProvider("openai")}
                className={`p-3 rounded-neu-sm text-left transition flex flex-col justify-between cursor-pointer border ${
                  selectedProvider === "openai"
                    ? "bg-indigo-50/90 dark:bg-indigo-950/50 border-indigo-500 shadow-neu-flat text-indigo-900 dark:text-indigo-200"
                    : "bg-[#e6ecf5] dark:bg-slate-800/60 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-white/40"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-extrabold text-xs flex items-center gap-1.5">
                    ✨ OpenAI Studio
                  </span>
                  {selectedProvider === "openai" && <Check className="w-4 h-4 text-indigo-600" />}
                </div>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 mt-1.5 leading-snug">
                  ✨ Nova &amp; Echo • Siêu mượt mà chuẩn phòng thu (Cần OpenAI Key)
                </span>
              </button>
            </div>
          </div>

          {/* BƯỚC 2: HƯỚNG DẪN / NHẬP API KEY */}
          {selectedProvider === "free" ? (
            <div className="p-3.5 rounded-neu-sm bg-emerald-50/90 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-700/80 space-y-1.5 shadow-neu-flat-xs">
              <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 font-bold text-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Hoạt động ngay lập tức 100% • Không cần bất kỳ API Key nào!</span>
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                Nhóm giọng Miễn Phí cung cấp 2 giọng đọc tách bạch rõ rệt: <strong>🌸 Mai Linh (Nữ)</strong> phát qua luồng âm thanh trong trẻo, mượt mà và <strong>👔 Quốc Tuấn (Nam)</strong> phát âm trầm ấm, đĩnh đạc qua Native Engine của thiết bị. Chọn một trong hai giọng bên dưới rồi bấm <strong>&quot;Nghe Thử Câu Mẫu&quot;</strong>!
              </p>
            </div>
          ) : (
            <div className="p-3.5 rounded-neu-sm bg-white/60 dark:bg-slate-800/70 border border-slate-300 dark:border-slate-700 space-y-2.5">
              {selectedProvider === "fpt" && (
                <div className="text-[11px] text-blue-900 dark:text-blue-200 bg-blue-50/90 dark:bg-blue-950/40 p-2.5 rounded-neu-sm border border-blue-200 dark:border-blue-800 space-y-1">
                  <div className="font-bold flex items-center gap-1.5">
                    <span>🌾 Cách nhận API Key FPT để nghe Giọng Miền Tây &amp; MC (Miễn phí 100%):</span>
                  </div>
                  <ol className="list-decimal list-inside space-y-0.5 text-[10px] text-slate-600 dark:text-slate-300 pl-1">
                    <li>
                      Truy cập trang{" "}
                      <a
                        href="https://console.fpt.ai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 font-bold underline inline-flex items-center gap-0.5"
                      >
                        console.fpt.ai
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>{" "}
                      và đăng nhập bằng tài khoản Google (nhận 100.000 ký tự miễn phí mỗi tháng).
                    </li>
                    <li>
                      Vào mục <strong>Text to Speech</strong> ➔ Sao chép mã <strong>API Key</strong> (dạng chuỗi 32 ký tự).
                    </li>
                    <li>Dán mã vào ô bên dưới rồi bấm <strong>Nghe Thử Câu Mẫu</strong>.</li>
                  </ol>
                </div>
              )}

              {selectedProvider === "openai" && (
                <div className="text-[11px] text-indigo-900 dark:text-indigo-200 bg-indigo-50/90 dark:bg-indigo-950/40 p-2.5 rounded-neu-sm border border-indigo-200 dark:border-indigo-800 space-y-1">
                  <div className="font-bold flex items-center gap-1.5">
                    <span>✨ Sử dụng OpenAI TTS Studio:</span>
                  </div>
                  <p className="text-[10px] text-slate-600 dark:text-slate-300">
                    Lấy API Key cá nhân (dạng <code>sk-...</code>) tại{" "}
                    <a
                      href="https://platform.openai.com/api-keys"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 font-bold underline inline-flex items-center gap-0.5"
                    >
                      platform.openai.com/api-keys
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>{" "}
                    để trải nghiệm giọng đọc Nova và Echo đạt chuẩn phòng thu quốc tế.
                  </p>
                </div>
              )}

              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                  <Key className="w-3.5 h-3.5 text-indigo-600" />
                  <span>
                    Nhập API Key cá nhân của {selectedProvider === "fpt" ? "FPT.AI" : "OpenAI"}:
                  </span>
                </label>

                {selectedProvider === "fpt" && (
                  <a
                    href="https://console.fpt.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-blue-600 hover:underline font-bold inline-flex items-center gap-1"
                  >
                    <span>Lấy key miễn phí tại console.fpt.ai</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
                {selectedProvider === "openai" && (
                  <a
                    href="https://platform.openai.com/api-keys"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-indigo-600 hover:underline font-bold inline-flex items-center gap-1"
                  >
                    <span>Lấy OpenAI Key</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>

              <div className="relative flex items-center">
                <input
                  type={showKey ? "text" : "password"}
                  value={selectedProvider === "fpt" ? fptKey : openaiKey}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (selectedProvider === "fpt") setFptKey(val);
                    else setOpenaiKey(val);
                  }}
                  placeholder={
                    selectedProvider === "fpt"
                      ? "Dán API Key FPT.AI (32 ký tự, ví dụ: 4f9a72b...)"
                      : "Dán OpenAI API Key (sk-proj-...)"
                  }
                  className="w-full px-3.5 py-2 pr-10 rounded-neu-sm bg-[#e6ecf5] dark:bg-slate-900 shadow-neu-inset font-mono text-xs text-slate-800 dark:text-slate-100 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowKey(!showKey)}
                  className="absolute right-3 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                >
                  {showKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              <div className="text-[10px] text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <Info className="w-3 h-3 text-slate-400 flex-shrink-0" />
                <span>
                  Mã API Key được lưu trực tiếp trên trình duyệt máy bạn, tuyệt đối bảo mật và không lưu trữ trên máy chủ.
                </span>
              </div>
            </div>
          )}

          {/* BƯỚC 3: CHỌN GIỌNG ĐỌC CỤ THỂ */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center justify-between">
              <span>2. Chọn Giọng Đọc Cụ Thể Trong Nhóm Này:</span>
              <span className="text-[11px] text-slate-500 font-normal">
                Bấm để chọn và nghe thử bên dưới
              </span>
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-[220px] overflow-y-auto p-1 rounded-neu-sm bg-[#e6ecf5] dark:bg-slate-900/40 shadow-neu-inset-sm">
              {availableVoices.map((voice) => {
                const isSelected = selectedVoiceId === voice.id;
                return (
                  <div
                    key={voice.id}
                    onClick={() => handleSelectVoice(voice.id)}
                    className={`p-2.5 rounded-lg border transition cursor-pointer flex items-start gap-2.5 ${
                      isSelected
                        ? "bg-white dark:bg-slate-800 border-blue-500 shadow-neu-flat-xs text-slate-900 dark:text-white"
                        : "bg-white/40 dark:bg-slate-800/40 border-slate-300/60 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 hover:bg-white/80"
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full border flex items-center justify-center mt-0.5 flex-shrink-0 ${
                        isSelected
                          ? "border-blue-600 bg-blue-600 text-white"
                          : "border-slate-400"
                      }`}
                    >
                      {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="font-extrabold text-xs">{voice.name}</span>
                        <span
                          className={`text-[9px] font-bold px-1.5 py-0.2 rounded ${
                            voice.region === "mientay"
                              ? "bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300"
                              : voice.region === "studio"
                              ? "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-300"
                              : "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300"
                          }`}
                        >
                          {voice.badge}
                        </span>
                        {voice.recommended && (
                          <span className="text-[9px] bg-emerald-100 text-emerald-800 font-extrabold px-1 rounded">
                            Khuyên dùng
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug mt-1">
                        {voice.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* BƯỚC 4: TỐC ĐỘ PHÁT ÂM */}
          <div className="flex items-center justify-between p-3 rounded-neu-sm bg-white/50 dark:bg-slate-800/60 border border-slate-300 dark:border-slate-700 text-xs">
            <div className="flex items-center gap-1.5 font-bold text-slate-700 dark:text-slate-300">
              <Sliders className="w-3.5 h-3.5 text-blue-600" />
              <span>Tốc độ đọc câu hỏi:</span>
            </div>
            <div className="flex items-center gap-1 bg-[#e6ecf5] dark:bg-slate-900 p-0.5 rounded-lg shadow-neu-inset-sm">
              {[
                { val: 0.85, label: "0.85x Chậm" },
                { val: 1.0, label: "1.0x Chuẩn" },
                { val: 1.15, label: "1.15x Nhanh" },
              ].map((sp) => (
                <button
                  key={sp.val}
                  type="button"
                  onClick={() => setSpeed(sp.val)}
                  className={`px-2.5 py-1 rounded text-[11px] font-bold transition cursor-pointer ${
                    speed === sp.val
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-slate-600 dark:text-slate-400 hover:text-blue-600"
                  }`}
                >
                  {sp.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* NÚT THAO TÁC Ở ĐÁY */}
        <div className="flex-shrink-0 flex items-center justify-between gap-3 pt-3 border-t border-slate-300/80 dark:border-slate-700 flex-wrap sm:flex-nowrap">
          <div className="flex items-center gap-2">
            {isTesting ? (
              <button
                type="button"
                onClick={handleStopTest}
                className="px-3.5 py-2 rounded-neu-sm bg-rose-500 hover:bg-rose-600 text-white font-bold text-xs shadow-neu-flat transition flex items-center gap-1.5 cursor-pointer"
              >
                <Square className="w-3.5 h-3.5 fill-current" />
                <span>Dừng Nghe Thử</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={handleTestVoice}
                className="px-3.5 py-2 rounded-neu-sm bg-white dark:bg-slate-800 hover:bg-slate-100 text-blue-700 dark:text-blue-300 font-bold text-xs shadow-neu-flat-xs active:shadow-neu-inset transition flex items-center gap-1.5 cursor-pointer border border-blue-200 dark:border-slate-700"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Nghe Thử Câu Mẫu</span>
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                soundManager.playClick();
                ttsManager.stop();
                onClose();
              }}
              className="px-3.5 py-2 rounded-neu-sm bg-[#e6ecf5] dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-800 font-bold text-xs shadow-neu-flat-xs active:shadow-neu-inset transition cursor-pointer"
            >
              Hủy
            </button>
            <button
              type="button"
              onClick={handleSaveAndApply}
              className="px-4 py-2 rounded-neu font-bold text-xs text-white bg-blue-600 hover:bg-blue-700 shadow-neu-blue active:shadow-neu-blue-pressed transition flex items-center gap-1.5 cursor-pointer"
            >
              <Check className="w-3.5 h-3.5" />
              <span>Lưu &amp; Bật Giọng Đọc Này</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};
