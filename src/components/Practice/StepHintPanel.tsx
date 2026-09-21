"use client";

import React from "react";
import { Question } from "@/types";
import { LatexRenderer } from "../UI/LatexRenderer";
import { Lightbulb, ShieldAlert, Sparkles, ChevronDown, CheckCircle } from "lucide-react";

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
    <div className="rounded-neu bg-[#e6ecf5] shadow-neu-flat p-4 space-y-3 transition-all border border-blue-200/50">
      {/* Header of Hint panel */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-blue-800 font-bold text-xs uppercase tracking-wide">
          <Lightbulb className="w-4 h-4 text-amber-500 fill-amber-400" />
          <span>Hệ Thống Gợi Ý Từng Bước (Socratic)</span>
        </div>
        <span className="text-[11px] bg-blue-100 text-blue-800 font-semibold px-2 py-0.5 rounded-full">
          Nấc {hintLevel} / 3
        </span>
      </div>

      {/* Strict anti-cheat notice */}
      <div className="p-2.5 rounded-neu-sm bg-blue-50/70 border border-blue-200/80 flex items-start gap-2 text-[11px] text-blue-900 leading-snug">
        <ShieldAlert className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
        <span>
          <strong>Nguyên tắc:</strong> Hệ thống chỉ định hướng công thức và phương pháp tư duy, <strong>tuyệt đối không đưa ra đáp án</strong> để giúp bạn tự làm chủ kiến thức.
        </span>
      </div>

      {/* Hints by level */}
      <div className="space-y-2.5 pt-1">
        {/* Level 1 Hint */}
        {hintLevel >= 1 && (
          <div className="p-3 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset-sm space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
              <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px]">
                1
              </span>
              <span>Lý thuyết & Khái niệm cốt lõi:</span>
            </div>
            <div className="text-xs sm:text-sm text-slate-800 pl-6 leading-relaxed">
              <LatexRenderer content={question.hints.level1_concept} />
            </div>
          </div>
        )}

        {/* Level 2 Hint */}
        {hintLevel >= 2 && (
          <div className="p-3 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset-sm space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
              <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px]">
                2
              </span>
              <span>Công thức & Phương pháp tiếp cận:</span>
            </div>
            <div className="text-xs sm:text-sm text-slate-800 pl-6 leading-relaxed">
              <LatexRenderer content={question.hints.level2_formula} />
            </div>
          </div>
        )}

        {/* Level 3 Hint */}
        {hintLevel >= 3 && (
          <div className="p-3 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset-sm space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
              <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px]">
                3
              </span>
              <span>Các bước phân tích dữ liệu:</span>
            </div>
            <div className="text-xs sm:text-sm text-slate-800 pl-6 leading-relaxed">
              <LatexRenderer content={question.hints.level3_steps} />
            </div>
          </div>
        )}
      </div>

      {/* Button to unlock next hint */}
      {hintLevel < 3 && (
        <button
          onClick={onAdvanceHint}
          className="w-full py-2 px-3 rounded-neu-sm bg-[#e6ecf5] shadow-neu-flat-xs active:shadow-neu-inset text-blue-700 font-bold text-xs flex items-center justify-center gap-1.5 hover:text-blue-800 transition"
        >
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          <span>Mở gợi ý nấc tiếp theo ({hintLevel + 1}/3)</span>
        </button>
      )}
    </div>
  );
};
