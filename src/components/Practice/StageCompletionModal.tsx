"use client";

import React, { useEffect, useState } from "react";
import { soundManager } from "@/lib/audioEffects";
import {
  Trophy,
  Sparkles,
  ArrowRight,
  RotateCcw,
  CheckCircle2,
  Flame,
  Star,
  X,
} from "lucide-react";

interface StageCompletionModalProps {
  isOpen: boolean;
  onClose: () => void;
  stageIndex: number;
  stageName: string;
  totalQuestions: number;
  correctCount: number;
  maxCombo: number;
  hasNextStage: boolean;
  onNextStage: () => void;
  onRetryStage: () => void;
}

export const StageCompletionModal: React.FC<StageCompletionModalProps> = ({
  isOpen,
  onClose,
  stageIndex,
  stageName,
  totalQuestions,
  correctCount,
  maxCombo,
  hasNextStage,
  onNextStage,
  onRetryStage,
}) => {
  const [showConfetti, setShowConfetti] = useState(false);

  const accuracy = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

  // Đánh giá số sao ⭐ (1 - 3 sao)
  const stars = accuracy >= 90 ? 3 : accuracy >= 70 ? 2 : 1;

  useEffect(() => {
    if (isOpen) {
      soundManager.playFanfare();
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      {/* Pháo hoa giấy Confetti (CSS thuần) */}
      {showConfetti && (
        <div className="pointer-events-none fixed inset-0 overflow-hidden z-50">
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2.5 h-2.5 rounded-sm animate-confetti"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-5%`,
                backgroundColor: [
                  "#3b82f6",
                  "#10b981",
                  "#f59e0b",
                  "#ec4899",
                  "#8b5cf6",
                  "#06b6d4",
                ][i % 6],
                animationDelay: `${Math.random() * 1.5}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            />
          ))}
        </div>
      )}

      {/* Modal Box */}
      <div className="relative w-full max-w-sm rounded-neu bg-[#e6ecf5] dark:bg-[#1a1f26] p-6 shadow-neu-flat border border-white/80 dark:border-white/10 text-center space-y-4 animate-scale-up">
        {/* Nút đóng */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-1.5 rounded-neu-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 shadow-neu-flat-xs active:shadow-neu-inset"
          title="Đóng"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Biểu tượng cúp vinh danh */}
        <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-tr from-amber-400 to-amber-200 flex items-center justify-center text-amber-900 shadow-neu-flat-xs animate-bounce">
          <Trophy className="w-8 h-8" />
        </div>

        {/* Tiêu đề chặng */}
        <div className="space-y-1">
          <span className="text-[11px] font-black uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Hoàn Thành {stageName}
          </span>
          <h2 className="text-xl font-black text-slate-800 dark:text-slate-100">
            {stars === 3
              ? "Xuất Sắc Tuyệt Đối! 🏆"
              : stars === 2
              ? "Làm Rất Tốt! 🌟"
              : "Hoàn Thành Chặng! 👏"}
          </h2>
        </div>

        {/* Hàng sao đánh giá ⭐⭐⭐ */}
        <div className="flex items-center justify-center gap-2 py-1">
          {[1, 2, 3].map((starIdx) => {
            const isEarned = starIdx <= stars;
            return (
              <div
                key={starIdx}
                className={`p-2 rounded-full shadow-neu-flat-xs transition-transform duration-300 ${
                  isEarned
                    ? "bg-amber-100 dark:bg-amber-950/80 text-amber-500 scale-110"
                    : "bg-slate-200 dark:bg-slate-800 text-slate-400 opacity-40 scale-90"
                }`}
              >
                <Star
                  className={`w-6 h-6 ${
                    isEarned ? "fill-amber-400 text-amber-500" : ""
                  }`}
                />
              </div>
            );
          })}
        </div>

        {/* Thống kê chặng */}
        <div className="grid grid-cols-2 gap-2.5 p-3 rounded-neu-sm bg-slate-200/50 dark:bg-slate-800/40 shadow-neu-inset-sm text-left">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[10px] text-slate-500 font-medium">Độ chính xác</p>
              <p className="text-xs font-black text-slate-800 dark:text-slate-200">
                {correctCount}/{totalQuestions} ({accuracy}%)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400">
              <Flame className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[10px] text-slate-500 font-medium">Chuỗi đúng cao nhất</p>
              <p className="text-xs font-black text-slate-800 dark:text-slate-200">
                {maxCombo > 0 ? `🔥 x${maxCombo} câu` : "Chưa có"}
              </p>
            </div>
          </div>
        </div>

        {/* Lời khích lệ sư phạm */}
        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
          {stars === 3
            ? "Kiến thức chặng này của em đã rất vững chắc. Hãy tiếp tục giữ vững phong độ ở chặng tiếp theo nhé!"
            : stars === 2
            ? "Em đã nắm được hầu hết các câu hỏi then chốt. Ôn lại 1-2 câu sai là sẽ đạt điểm tuyệt đối!"
            : "Hoàn thành là bước đầu của thành công! Em có thể bấm làm lại để săn trọn 3 Sao Vàng nhé."}
        </p>

        {/* Các nút hành động */}
        <div className="space-y-2 pt-1">
          {hasNextStage ? (
            <button
              onClick={() => {
                soundManager.playClick();
                onNextStage();
              }}
              className="w-full py-3 px-4 rounded-neu-sm bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-extrabold text-sm shadow-neu-flat active:shadow-neu-inset flex items-center justify-center gap-2 transition cursor-pointer"
            >
              <span>Tiếp Tục Sang Chặng Sau</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={onClose}
              className="w-full py-3 px-4 rounded-neu-sm bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-sm shadow-neu-flat active:shadow-neu-inset flex items-center justify-center gap-2 transition cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Em Đã Chinh Phục Hết Các Chặng!</span>
            </button>
          )}

          <button
            onClick={() => {
              soundManager.playClick();
              onRetryStage();
            }}
            className="w-full py-2.5 px-4 rounded-neu-sm bg-[#e6ecf5] dark:bg-[#202734] text-slate-700 dark:text-slate-300 font-bold text-xs shadow-neu-flat-xs active:shadow-neu-inset hover:text-blue-600 dark:hover:text-blue-400 flex items-center justify-center gap-1.5 transition cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Luyện Lại Chặng Này (Săn 3 Sao)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
