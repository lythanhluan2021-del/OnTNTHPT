"use client";

import React from "react";
import { Question } from "@/types";
import { LatexRenderer } from "../UI/LatexRenderer";
import { Check, X, Bookmark, FileText } from "lucide-react";

interface QuestionCardProps {
  question: Question;
  currentIndex: number;
  totalInTopic: number;
  selectedOption: "A" | "B" | "C" | "D" | null;
  onSelectOption: (optionId: "A" | "B" | "C" | "D") => void;
  hasAnswered: boolean;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  currentIndex,
  totalInTopic,
  selectedOption,
  onSelectOption,
  hasAnswered,
}) => {
  const getDifficultyBadge = (difficulty: string) => {
    switch (difficulty) {
      case "NhanBiet":
        return {
          label: "Nhận biết",
          color: "text-emerald-700 bg-emerald-100 border-emerald-300",
        };
      case "ThongHieu":
        return {
          label: "Thông hiểu",
          color: "text-blue-700 bg-blue-100 border-blue-300",
        };
      case "VanDung":
        return {
          label: "Vận dụng",
          color: "text-amber-700 bg-amber-100 border-amber-300",
        };
      case "VanDungCao":
        return {
          label: "Vận dụng cao",
          color: "text-purple-700 bg-purple-100 border-purple-300",
        };
      default:
        return {
          label: "Chuẩn THPT",
          color: "text-slate-700 bg-slate-100 border-slate-300",
        };
    }
  };

  const badge = getDifficultyBadge(question.difficulty);

  return (
    <div className="space-y-4">
      {/* Question Header & Card */}
      <div className="p-4 sm:p-5 rounded-neu bg-[#e6ecf5] shadow-neu-flat space-y-3">
        <div className="flex items-center justify-between text-xs">
          <span className="font-extrabold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-neu-sm shadow-neu-flat-xs">
            Câu {currentIndex + 1} / {totalInTopic}
          </span>
          <span
            className={`font-semibold px-2 py-0.5 rounded-full border text-[11px] ${badge.color}`}
          >
            {badge.label}
          </span>
        </div>

        {/* Source citation */}
        {question.sourceDocTitle && (
          <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-medium">
            <FileText className="w-3.5 h-3.5 text-blue-500" />
            <span className="truncate">{question.sourceDocTitle}</span>
          </div>
        )}

        {/* Question Statement */}
        <div className="text-slate-800 text-sm sm:text-base font-medium leading-relaxed pt-1">
          <LatexRenderer content={question.content} />
        </div>
      </div>

      {/* Answer Options List */}
      <div className="space-y-3">
        <div className="text-xs font-bold text-slate-500 uppercase tracking-wider px-1">
          Chọn một phương án đúng:
        </div>
        {question.options.map((opt) => {
          const isSelected = selectedOption === opt.id;
          const isCorrect = question.correctAnswer === opt.id;

          let optionStyle =
            "bg-[#e6ecf5] text-slate-700 shadow-neu-flat-sm active:shadow-neu-inset hover:text-blue-700";

          if (isSelected && !hasAnswered) {
            optionStyle =
              "bg-[#e6ecf5] text-blue-700 shadow-neu-inset border-2 border-blue-500/40 font-semibold";
          } else if (hasAnswered) {
            if (isCorrect) {
              optionStyle =
                "bg-emerald-50 text-emerald-900 border-2 border-emerald-500 shadow-neu-flat-xs font-semibold";
            } else if (isSelected && !isCorrect) {
              optionStyle =
                "bg-rose-50 text-rose-900 border-2 border-rose-500 shadow-neu-flat-xs";
            }
          }

          return (
            <button
              key={opt.id}
              onClick={() => !hasAnswered && onSelectOption(opt.id)}
              disabled={hasAnswered}
              className={`w-full text-left p-3.5 rounded-neu-sm transition-all flex items-start gap-3 ${optionStyle}`}
            >
              {/* Option Letter Circle */}
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 transition-all ${
                  isSelected && !hasAnswered
                    ? "bg-blue-600 text-white shadow-neu-blue"
                    : hasAnswered && isCorrect
                    ? "bg-emerald-600 text-white"
                    : hasAnswered && isSelected && !isCorrect
                    ? "bg-rose-600 text-white"
                    : "bg-[#e6ecf5] text-slate-600 shadow-neu-flat-xs"
                }`}
              >
                {opt.id}
              </div>

              {/* Option Math/Text Content */}
              <div className="flex-1 text-sm pt-0.5 leading-snug">
                <LatexRenderer content={opt.content} />
              </div>

              {/* Validation Icon */}
              {hasAnswered && isCorrect && (
                <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 self-center" />
              )}
              {hasAnswered && isSelected && !isCorrect && (
                <X className="w-5 h-5 text-rose-600 flex-shrink-0 self-center" />
              )}
            </button>
          );
        })}
      </div>

      {/* Detailed explanation (Only available after student submits) */}
      {hasAnswered && question.explanation && (
        <div className="p-4 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset space-y-2 border-l-4 border-emerald-500">
          <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800 uppercase">
            <Bookmark className="w-4 h-4" />
            <span>Phân tích lời giải sau khi làm xong:</span>
          </div>
          <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            <LatexRenderer content={question.explanation} />
          </div>
        </div>
      )}
    </div>
  );
};
