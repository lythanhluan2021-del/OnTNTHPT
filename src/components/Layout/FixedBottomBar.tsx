"use client";

import { CheckCircle, ArrowRight } from "lucide-react";
import { soundManager } from "@/lib/audioEffects";

interface FixedBottomBarProps {
  hasAnswered: boolean;
  selectedOption: string | null;
  canSubmit?: boolean;
  onCheckAnswer: () => void;
  onNextQuestion: () => void;
  onToggleHint?: () => void;
  onOpenSocraticTutor?: () => void;
  hintLevel?: number;
}

export const FixedBottomBar: React.FC<FixedBottomBarProps> = ({
  hasAnswered,
  selectedOption,
  canSubmit,
  onCheckAnswer,
  onNextQuestion,
}) => {
  const isReady = canSubmit !== undefined ? canSubmit : !!selectedOption;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#e6ecf5]/95 backdrop-blur-md border-t border-slate-300/70 px-4 py-3 pb-6 md:pb-4 shadow-neu-flat">
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
                : "bg-slate-300 text-slate-500 shadow-neu-flat-xs cursor-not-allowed opacity-70"
            }`}
          >
            <CheckCircle className="w-4 h-4" />
            <span>Kiểm Tra Đáp Án</span>
          </button>
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
