"use client";

import { CheckCircle, ArrowRight, RotateCcw } from "lucide-react";
import { soundManager } from "@/lib/audioEffects";

interface FixedBottomBarProps {
  hasAnswered: boolean;
  selectedOption: string | null;
  canSubmit?: boolean;
  isLastQuestion?: boolean;
  onCheckAnswer: () => void;
  onNextQuestion: () => void;
  onRetakeTopic?: () => void;
  onToggleHint?: () => void;
  onOpenSocraticTutor?: () => void;
  hintLevel?: number;
}

export const FixedBottomBar: React.FC<FixedBottomBarProps> = ({
  hasAnswered,
  selectedOption,
  canSubmit,
  isLastQuestion,
  onCheckAnswer,
  onNextQuestion,
  onRetakeTopic,
}) => {
  const isReady = canSubmit !== undefined ? canSubmit : !!selectedOption;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#e6ecf5]/95 dark:bg-[#1a1f26]/95 backdrop-blur-md border-t border-slate-300/70 dark:border-slate-800 px-4 py-3 pb-6 md:pb-4 shadow-neu-flat">
      <div className="max-w-md mx-auto">
        {/* Nút hành động chính: Luôn cố định, màu xanh dương */}
        {!hasAnswered ? (
          <button
            onClick={() => {
              if (isReady) {
                onCheckAnswer();
              }
            }}
            disabled={!isReady}
            className={`w-full py-3 px-4 rounded-neu font-bold text-sm flex items-center justify-center gap-2 transition duration-200 ${
              isReady
                ? "bg-blue-600 text-white shadow-neu-blue active:shadow-neu-blue-pressed hover:bg-blue-700 cursor-pointer"
                : "bg-slate-300 dark:bg-[#202734] text-slate-500 dark:text-slate-400 shadow-neu-flat-xs cursor-not-allowed opacity-70"
            }`}
          >
            <CheckCircle className="w-4 h-4" />
            <span>Kiểm Tra Đáp Án</span>
          </button>
        ) : isLastQuestion ? (
          <div className="flex items-center gap-2">
            {onRetakeTopic && (
              <button
                type="button"
                onClick={() => {
                  soundManager.playClick();
                  onRetakeTopic();
                }}
                className="flex-1 py-3 px-2 rounded-neu font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 bg-[#e6ecf5] dark:bg-[#202734] text-blue-700 dark:text-blue-300 shadow-neu-flat-xs active:shadow-neu-inset border border-blue-400/40 hover:bg-blue-50 dark:hover:bg-blue-950/40 transition duration-200 cursor-pointer"
                title="Làm lại chủ đề với đề và đáp án đảo ngẫu nhiên mới"
              >
                <RotateCcw className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Làm lại (Đảo mới)</span>
              </button>
            )}
            <button
              type="button"
              onClick={() => {
                soundManager.playClick();
                onNextQuestion();
              }}
              className="flex-1 py-3 px-2 rounded-neu font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-neu-blue active:shadow-neu-blue-pressed transition duration-200 cursor-pointer"
            >
              <span>Xem phân tích</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <button
            onClick={() => {
              soundManager.playClick();
              onNextQuestion();
            }}
            className="w-full py-3 px-4 rounded-neu font-bold text-sm flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-neu-blue active:shadow-neu-blue-pressed transition duration-200 cursor-pointer"
          >
            <span>Câu Tiếp Theo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};
