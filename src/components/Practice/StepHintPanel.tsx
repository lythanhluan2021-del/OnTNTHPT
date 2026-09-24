"use client";

import React from "react";
import { Question } from "@/types";
import { LatexRenderer } from "../UI/LatexRenderer";
import { Lightbulb, ShieldAlert, Sparkles } from "lucide-react";

interface StepHintPanelProps {
  question: Question;
  hintLevel: number;
  onAdvanceHint: () => void;
  isOpen: boolean;
  onClose: () => void;
}

export const StepHintPanel: React.FC<StepHintPanelProps> = ({
  question,
  hintLevel,
  onAdvanceHint,
  isOpen,
  onClose,
}) => {
  if (!isOpen && hintLevel === 0) return null;

  return (
    <div className="rounded-neu bg-[#e6ecf5] dark:bg-[#1a1f26] shadow-neu-flat dark:shadow-[5px_5px_12px_#12151a,-5px_-5px_12px_#222932] p-4 space-y-3 transition-all border border-blue-200/50 dark:border-blue-900/40">
      {/* Header of Hint panel */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-blue-800 dark:text-blue-300 font-bold text-xs uppercase tracking-wide">
          <Lightbulb className="w-4 h-4 text-amber-500 fill-amber-400" />
          <span>Hệ Thống Gợi Ý Từng Bước (Socratic)</span>
        </div>
        <span className="text-[11px] bg-blue-100 dark:bg-blue-950/70 text-blue-800 dark:text-blue-300 font-semibold px-2 py-0.5 rounded-full border border-blue-200 dark:border-blue-800/60">
          Nấc {hintLevel} / 3
        </span>
      </div>

      {/* Strict anti-cheat notice */}
      <div className="p-2.5 rounded-neu-sm bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-900/50 flex items-start gap-2 text-[11px] text-blue-900 dark:text-blue-200 leading-snug">
        <ShieldAlert className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
        <span>
          <strong>Nguyên tắc:</strong> Hệ thống chỉ định hướng lý thuyết và phương pháp tư duy, <strong>tuyệt đối không đưa ra đáp án</strong> để giúp bạn tự làm chủ kiến thức.
        </span>
      </div>

      {/* Hints by level */}
      <div className="space-y-2.5 pt-1">
        {/* Level 1 Hint */}
        {hintLevel >= 1 && (
          <div className="p-3 rounded-neu-sm bg-[#e6ecf5] dark:bg-[#1f252e] shadow-neu-inset-sm dark:shadow-none space-y-1 border border-transparent dark:border-slate-800">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 dark:text-slate-300">
              <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px]">
                1
              </span>
              <span>Lý thuyết & Khái niệm cốt lõi:</span>
            </div>
            <div className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 pl-6 leading-relaxed">
              <LatexRenderer content={question.hints.level1_concept} />
            </div>
          </div>
        )}

        {/* Level 2 Hint */}
        {hintLevel >= 2 && (
          <div className="p-3 rounded-neu-sm bg-[#e6ecf5] dark:bg-[#1f252e] shadow-neu-inset-sm dark:shadow-none space-y-1 border border-transparent dark:border-slate-800">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 dark:text-slate-300">
              <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px]">
                2
              </span>
              <span>Công thức & Phương pháp tiếp cận:</span>
            </div>
            <div className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 pl-6 leading-relaxed">
              <LatexRenderer content={question.hints.level2_formula} />
            </div>
          </div>
        )}

        {/* Level 3 Hint */}
        {hintLevel >= 3 && (
          <div className="p-3 rounded-neu-sm bg-[#e6ecf5] dark:bg-[#1f252e] shadow-neu-inset-sm dark:shadow-none space-y-1 border border-transparent dark:border-slate-800">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 dark:text-slate-300">
              <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px]">
                3
              </span>
              <span>Các bước phân tích dữ liệu:</span>
            </div>
            <div className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 pl-6 leading-relaxed">
              <LatexRenderer content={question.hints.level3_steps} />
            </div>
          </div>
        )}
      </div>

      {/* Button to unlock next hint */}
      {hintLevel < 3 && (
        <button
          onClick={onAdvanceHint}
          className="w-full py-2 px-3 rounded-neu-sm bg-[#e6ecf5] dark:bg-[#202734] shadow-neu-flat-xs dark:shadow-none active:shadow-neu-inset text-blue-700 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-200 font-bold text-xs flex items-center justify-center gap-1.5 border border-transparent dark:border-slate-700 transition"
        >
          <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
          <span>Mở gợi ý nấc tiếp theo ({hintLevel + 1}/3)</span>
        </button>
      )}
    </div>
  );
};
