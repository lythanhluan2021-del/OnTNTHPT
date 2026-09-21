"use client";

import { Lightbulb, HelpCircle, CheckCircle, ArrowRight } from "lucide-react";
import { soundManager } from "@/lib/audioEffects";

interface FixedBottomBarProps {
  hasAnswered: boolean;
  selectedOption: string | null;
  canSubmit?: boolean;
  onCheckAnswer: () => void;
  onNextQuestion: () => void;
  onToggleHint: () => void;
  onOpenSocraticTutor: () => void;
  hintLevel: number;
}

export const FixedBottomBar: React.FC<FixedBottomBarProps> = ({
  hasAnswered,
  selectedOption,
  canSubmit,
  onCheckAnswer,
  onNextQuestion,
  onToggleHint,
  onOpenSocraticTutor,
  hintLevel,
}) => {
  const isReady = canSubmit !== undefined ? canSubmit : !!selectedOption;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#e6ecf5]/95 backdrop-blur-md border-t border-slate-300/70 px-4 py-3 pb-6 md:pb-4 shadow-neu-flat">
      <div className="max-w-md mx-auto space-y-2">
        {/* Hàng nút phụ: Gợi ý và Gia sư Socratic (cố định màu xanh dương) */}
        <div className="grid grid-cols-2 gap-2.5">
          <button
            onClick={() => {
              soundManager.playHint();
              onToggleHint();
            }}
            className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-neu-sm bg-gradient-to-r from-blue-700 to-blue-600 text-white font-semibold text-xs shadow-neu-blue active:shadow-neu-blue-pressed transition duration-150"
          >
            <Lightbulb className="w-4 h-4 text-yellow-300 fill-yellow-300" />
            <span>
              {hintLevel === 0
                ? "Gợi Ý Bước Làm"
                : `Gợi Ý Nấc ${hintLevel}/3`}
            </span>
          </button>

          <button
            onClick={() => {
              soundManager.playClick();
              onOpenSocraticTutor();
            }}
            className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-neu-sm bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-xs shadow-neu-blue active:shadow-neu-blue-pressed transition duration-150"
          >
            <HelpCircle className="w-4 h-4 text-blue-200" />
            <span>Gia Sư Socratic</span>
          </button>
        </div>

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
