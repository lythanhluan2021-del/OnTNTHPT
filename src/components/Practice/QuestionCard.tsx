"use client";

import React from "react";
import { Question } from "@/types";
import { LatexRenderer } from "../UI/LatexRenderer";
import { Check, X, Bookmark, FileText, CheckCircle2, XCircle } from "lucide-react";
import { soundManager } from "@/lib/audioEffects";

interface QuestionCardProps {
  question: Question;
  currentIndex: number;
  totalInTopic: number;
  selectedOption: "A" | "B" | "C" | "D" | null;
  onSelectOption: (optionId: "A" | "B" | "C" | "D") => void;
  // Dành cho dạng câu hỏi Đúng/Sai (Phần 2)
  selectedTF?: Record<string, boolean | null>;
  onSelectTF?: (itemId: string, value: boolean) => void;
  hasAnswered: boolean;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  currentIndex,
  totalInTopic,
  selectedOption,
  onSelectOption,
  selectedTF = {},
  onSelectTF,
  hasAnswered,
}) => {
  const isTrueFalse = question.type === "true_false" && question.tfItems && question.tfItems.length > 0;

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

  // Tính điểm chuẩn THPT cho câu Đúng/Sai (1 ý: 0.1đ, 2 ý: 0.25đ, 3 ý: 0.5đ, 4 ý: 1.0đ)
  const getTFScore = () => {
    if (!isTrueFalse || !hasAnswered || !question.tfItems) return null;
    let correctCount = 0;
    question.tfItems.forEach((item) => {
      if (selectedTF[item.id] === item.correctAnswer) {
        correctCount++;
      }
    });

    let score = "0.0";
    if (correctCount === 1) score = "0.1";
    else if (correctCount === 2) score = "0.25";
    else if (correctCount === 3) score = "0.5";
    else if (correctCount === 4) score = "1.0";

    return { correctCount, total: question.tfItems.length, score };
  };

  const tfScore = getTFScore();

  return (
    <div className="space-y-4">
      {/* Khung thẻ câu hỏi với Viền chuyển sắc mỏng xoay quanh (Animated Rotating Gradient Border) */}
      <div className="relative p-[1.5px] rounded-[20px] overflow-hidden shadow-[0_10px_28px_-6px_rgba(37,99,235,0.15)]">
        {/* Lớp chuyển sắc mỏng xoay vòng tròn quang học */}
        <div className="absolute -inset-[150%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0deg,#3b82f6_70deg,#6366f1_140deg,#06b6d4_210deg,#3b82f6_280deg,transparent_360deg)] opacity-90 pointer-events-none" />

        {/* Nội dung Thẻ đề bài Kính Cường Lực Gorilla Glass trong suốt, phảng phất sắc xanh êm dịu */}
        <div className="relative z-10 overflow-hidden p-4 sm:p-5 rounded-[18.5px] bg-gradient-to-br from-white/95 via-sky-50/35 to-blue-100/25 backdrop-blur-md space-y-3">
          {/* Vệt sáng khúc xạ quang học của kính cường lực */}
          <div className="absolute -top-12 -right-12 w-36 h-36 bg-gradient-to-br from-blue-400/15 via-indigo-300/10 to-transparent rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-tr from-sky-400/10 to-transparent rounded-full blur-xl pointer-events-none" />

          <div className="relative z-10 flex items-center justify-between text-xs">
            <span className="font-extrabold text-blue-700 bg-white/80 border border-blue-100/80 px-2.5 py-1 rounded-full shadow-xs backdrop-blur-xs flex items-center gap-1.5">
              <span>Câu {currentIndex + 1} / {totalInTopic}</span>
              {isTrueFalse && (
                <span className="text-[10px] bg-blue-600 text-white px-1.5 py-0.5 rounded-full font-bold">
                  Đúng / Sai
                </span>
              )}
            </span>
            <span
              className={`font-semibold px-2.5 py-0.5 rounded-full border text-[11px] shadow-xs backdrop-blur-xs bg-white/70 ${badge.color}`}
            >
              {badge.label}
            </span>
          </div>

          {/* Nguồn tài liệu trích xuất */}
          {question.sourceDocTitle && (
            <div className="relative z-10 inline-flex items-center gap-1.5 text-[11px] text-slate-500 bg-white/50 px-2.5 py-0.5 rounded-full border border-slate-200/60 max-w-full font-medium">
              <FileText className="w-3.5 h-3.5 text-blue-500 shrink-0" />
              <span className="truncate">{question.sourceDocTitle}</span>
            </div>
          )}

          {/* Nội dung câu hỏi / Tình huống */}
          <div className="relative z-10 text-slate-900 text-sm sm:text-base font-semibold leading-relaxed pt-1">
            <LatexRenderer content={question.content} />
          </div>

          {/* Điểm số dạng Đúng / Sai khi đã làm xong */}
          {hasAnswered && tfScore && (
            <div className="relative z-10 mt-2 p-2.5 rounded-neu-sm bg-blue-50/90 border border-blue-200/80 shadow-xs flex items-center justify-between text-xs font-semibold text-blue-900">
              <span>
                Kết quả: Đúng <strong>{tfScore.correctCount}/{tfScore.total}</strong> ý
              </span>
              <span className="bg-blue-600 text-white px-2 py-0.5 rounded-full text-xs font-bold shadow-xs">
                +{tfScore.score} điểm THPT
              </span>
            </div>
          )}
        </div>
      </div>

      {/* DẠNG 1: CÂU HỎI TRẮC NGHIỆM NHIỀU LỰA CHỌN (A, B, C, D) */}
      {!isTrueFalse && question.options && (
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
                onClick={() => {
                  if (!hasAnswered) {
                    soundManager.playClick();
                    onSelectOption(opt.id);
                  }
                }}
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
      )}

      {/* DẠNG 2: CÂU HỎI TRẮC NGHIỆM ĐÚNG / SAI (MỖI Ý a, b, c, d) */}
      {isTrueFalse && question.tfItems && (
        <div className="space-y-3">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider px-1">
            Chọn Đúng (Đ) hoặc Sai (S) cho từng ý dưới đây:
          </div>

          {question.tfItems.map((item) => {
            const userChoice = selectedTF[item.id];
            const isAnswered = hasAnswered;
            const isItemCorrect = isAnswered && userChoice === item.correctAnswer;
            const isItemWrong = isAnswered && userChoice !== undefined && userChoice !== null && userChoice !== item.correctAnswer;

            return (
              <div
                key={item.id}
                className={`p-3.5 rounded-neu-sm bg-[#e6ecf5] shadow-neu-flat-sm space-y-2.5 transition-all ${
                  isAnswered
                    ? isItemCorrect
                      ? "border-2 border-emerald-500 bg-emerald-50/40"
                      : isItemWrong
                      ? "border-2 border-rose-500 bg-rose-50/40"
                      : ""
                    : ""
                }`}
              >
                <div className="flex items-start gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-800 font-extrabold text-xs flex items-center justify-center flex-shrink-0 shadow-neu-flat-xs">
                    {item.id})
                  </span>
                  <div className="flex-1 text-xs sm:text-sm text-slate-800 font-medium leading-relaxed pt-0.5">
                    <LatexRenderer content={item.content} />
                  </div>
                </div>

                {/* Nút chọn Đúng / Sai */}
                <div className="flex items-center justify-end gap-2 pt-1">
                  {/* Nút Đúng */}
                  <button
                    onClick={() => {
                      if (!hasAnswered && onSelectTF) {
                        soundManager.playClick();
                        onSelectTF(item.id, true);
                      }
                    }}
                    disabled={hasAnswered}
                    className={`px-3 py-1.5 rounded-neu-sm text-xs font-bold transition-all flex items-center gap-1.5 ${
                      userChoice === true
                        ? "bg-emerald-600 text-white shadow-neu-inset"
                        : "bg-[#e6ecf5] text-emerald-800 shadow-neu-flat-xs active:shadow-neu-inset"
                    } ${
                      hasAnswered && item.correctAnswer === true
                        ? "ring-2 ring-emerald-500 ring-offset-1 font-extrabold"
                        : ""
                    }`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Đúng</span>
                  </button>

                  {/* Nút Sai */}
                  <button
                    onClick={() => {
                      if (!hasAnswered && onSelectTF) {
                        soundManager.playClick();
                        onSelectTF(item.id, false);
                      }
                    }}
                    disabled={hasAnswered}
                    className={`px-3 py-1.5 rounded-neu-sm text-xs font-bold transition-all flex items-center gap-1.5 ${
                      userChoice === false
                        ? "bg-rose-600 text-white shadow-neu-inset"
                        : "bg-[#e6ecf5] text-rose-800 shadow-neu-flat-xs active:shadow-neu-inset"
                    } ${
                      hasAnswered && item.correctAnswer === false
                        ? "ring-2 ring-rose-500 ring-offset-1 font-extrabold"
                        : ""
                    }`}
                  >
                    <XCircle className="w-3.5 h-3.5" />
                    <span>Sai</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Phân tích lời giải sau khi làm xong */}
      {hasAnswered && question.explanation && (
        <div className="p-4 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset space-y-2 border-l-4 border-emerald-500">
          <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800 uppercase">
            <Bookmark className="w-4 h-4" />
            <span>Phân tích lời giải sau khi hoàn thành:</span>
          </div>
          <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            <LatexRenderer content={question.explanation} />
          </div>
        </div>
      )}
    </div>
  );
};
