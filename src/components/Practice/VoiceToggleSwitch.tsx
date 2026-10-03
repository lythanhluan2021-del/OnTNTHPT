"use client";

import React, { useEffect, useState } from "react";
import { Volume2, VolumeX, Square, Play, RotateCcw } from "lucide-react";
import { ttsManager, TTSState, VoiceGender } from "@/lib/ttsManager";
import { soundManager } from "@/lib/audioEffects";

interface VoiceToggleSwitchProps {
  currentQuestionText?: string;
  questionNumber?: number;
  className?: string;
}

export const VoiceToggleSwitch: React.FC<VoiceToggleSwitchProps> = ({
  currentQuestionText,
  questionNumber,
  className = "",
}) => {
  const [ttsState, setTtsState] = useState<TTSState>(ttsManager.getState());

  useEffect(() => {
    const unsubscribe = ttsManager.subscribe((newState) => {
      setTtsState(newState);
    });
    return () => unsubscribe();
  }, []);

  const handleToggle = () => {
    soundManager.playClick();
    const nextState = ttsManager.toggleEnabled();
    if (nextState && currentQuestionText) {
      const prefix = questionNumber ? `Câu số ${questionNumber}` : undefined;
      ttsManager.speakQuestion(currentQuestionText, prefix);
    }
  };

  const handleGenderChange = (gender: VoiceGender) => {
    soundManager.playClick();
    ttsManager.setGender(gender);
  };

  const handleManualSpeak = () => {
    soundManager.playClick();
    if (ttsState.isSpeaking) {
      ttsManager.stop();
    } else if (currentQuestionText) {
      const prefix = questionNumber ? `Câu số ${questionNumber}` : undefined;
      ttsManager.speakQuestion(currentQuestionText, prefix);
    }
  };

  return (
    <div
      className={`inline-flex items-center gap-1.5 p-1 rounded-full bg-[#e6ecf5] dark:bg-[#1e2530] shadow-neu-flat-xs border border-white/40 dark:border-slate-800 text-xs transition-all select-none ${className}`}
    >
      {/* Nút gạt Bật/Tắt chế độ đọc câu hỏi */}
      <button
        type="button"
        onClick={handleToggle}
        className={`h-7 px-2.5 rounded-full flex items-center gap-1.5 font-bold transition-all cursor-pointer ${
          ttsState.isEnabled
            ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-neu-flat-xs shadow-blue-500/20"
            : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
        }`}
        title={
          ttsState.isEnabled
            ? "Đang bật chế độ tự động đọc câu hỏi (Bấm để tắt)"
            : "Bật chế độ tự động đọc câu hỏi bằng giọng nói"
        }
      >
        {ttsState.isEnabled ? (
          <Volume2 className="w-3.5 h-3.5 flex-shrink-0 animate-pulse" />
        ) : (
          <VolumeX className="w-3.5 h-3.5 flex-shrink-0 opacity-70" />
        )}
        <span className="whitespace-nowrap text-[11px]">
          {ttsState.isEnabled ? "Đọc đề: Bật" : "Đọc đề: Tắt"}
        </span>

        {/* Hiệu ứng sóng âm Equalizer khi đang đọc */}
        {ttsState.isEnabled && ttsState.isSpeaking && (
          <span className="flex items-center gap-0.5 ml-0.5">
            <span className="w-0.5 h-2.5 bg-amber-300 rounded-full animate-[bounce_0.6s_infinite_100ms]" />
            <span className="w-0.5 h-3.5 bg-amber-300 rounded-full animate-[bounce_0.6s_infinite_300ms]" />
            <span className="w-0.5 h-2 bg-amber-300 rounded-full animate-[bounce_0.6s_infinite_200ms]" />
          </span>
        )}
      </button>

      {/* Cụm điều khiển nhanh khi chế độ đọc đang BẬT */}
      {ttsState.isEnabled && (
        <>
          {/* Nút Dừng hoặc Đọc lại một chạm */}
          <button
            type="button"
            onClick={handleManualSpeak}
            className={`w-7 h-7 rounded-full flex items-center justify-center transition-all cursor-pointer ${
              ttsState.isSpeaking
                ? "bg-rose-500 text-white shadow-neu-flat-xs hover:bg-rose-600"
                : "bg-white/70 dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-neu-flat-xs hover:bg-white"
            }`}
            title={ttsState.isSpeaking ? "Dừng đọc" : "Đọc lại câu này"}
          >
            {ttsState.isSpeaking ? (
              <Square className="w-3 h-3 fill-current" />
            ) : (
              <RotateCcw className="w-3 h-3" />
            )}
          </button>

          {/* Bộ chọn Giọng Nam / Nữ */}
          <div className="flex items-center p-0.5 rounded-full bg-slate-300/40 dark:bg-slate-900/60 text-[10px] font-bold">
            <button
              type="button"
              onClick={() => handleGenderChange("female")}
              className={`px-2 py-0.5 rounded-full transition-all cursor-pointer ${
                ttsState.gender === "female"
                  ? "bg-blue-600 text-white shadow-sm font-black"
                  : "text-slate-600 dark:text-slate-400 hover:text-blue-600"
              }`}
              title="Giọng Nữ miền Nam ngọt ngào, truyền cảm"
            >
              👩 Nữ
            </button>
            <button
              type="button"
              onClick={() => handleGenderChange("male")}
              className={`px-2 py-0.5 rounded-full transition-all cursor-pointer ${
                ttsState.gender === "male"
                  ? "bg-blue-600 text-white shadow-sm font-black"
                  : "text-slate-600 dark:text-slate-400 hover:text-blue-600"
              }`}
              title="Giọng Nam trầm ấm, rõ ràng, dứt khoát"
            >
              👨 Nam
            </button>
          </div>
        </>
      )}
    </div>
  );
};
