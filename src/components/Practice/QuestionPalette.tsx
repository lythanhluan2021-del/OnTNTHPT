"use client";

import React, { useState } from "react";
import { soundManager } from "@/lib/audioEffects";
import {
  LayoutGrid,
  Bookmark,
  ChevronUp,
  ChevronDown,
  CheckCircle2,
  Clock,
  Shuffle,
  RotateCcw,
} from "lucide-react";

interface QuestionPaletteProps {
  totalQuestions: number;
  currentIndex: number;
  onSelectIndex: (index: number) => void;
  isAnswered: (index: number) => boolean;
  isFlagged?: (index: number) => boolean;
  isCorrect?: (index: number) => boolean | null; // Dùng khi xem lại bài (Review Mode)
  onToggleFlag?: (index: number) => void;
  partDividerIndex?: number; // Vị trí chuyển giữa Phần 1 và Phần 2 (ví dụ 24)
  isShuffled?: boolean;
  onToggleShuffle?: () => void;
  onRetakeTopic?: () => void;
}

export const QuestionPalette: React.FC<QuestionPaletteProps> = ({
  totalQuestions,
  currentIndex,
  onSelectIndex,
  isAnswered,
  isFlagged,
  isCorrect,
  onToggleFlag,
  partDividerIndex,
  isShuffled,
  onToggleShuffle,
  onRetakeTopic,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const answeredCount = Array.from({ length: totalQuestions }, (_, i) => isAnswered(i)).filter(Boolean).length;
  const flaggedCount = isFlagged ? Array.from({ length: totalQuestions }, (_, i) => isFlagged(i)).filter(Boolean).length : 0;

  return (
    <div className="w-full bg-[#e6ecf5] dark:bg-[#1a1f26] rounded-2xl p-3 shadow-neu-flat dark:shadow-[5px_5px_12px_#12151a,-5px_-5px_12px_#222932] border border-white/60 dark:border-white/5 transition-all">
      {/* Header bar */}
      <div className="flex items-center justify-between gap-2 cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400">
            <LayoutGrid className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
              Bảng câu hỏi ({answeredCount}/{totalQuestions})
            </span>
            <div className="flex items-center gap-2 text-[10px] text-slate-500 dark:text-slate-400 font-medium">
              <span className="text-emerald-600 dark:text-emerald-400">Đã làm: {answeredCount}</span>
              {flaggedCount > 0 && <span className="text-amber-600 dark:text-amber-400">Đã ghim: {flaggedCount}</span>}
              <span>Còn lại: {totalQuestions - answeredCount}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          {onToggleShuffle && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                soundManager.playClick();
                onToggleShuffle();
              }}
              className={`p-1.5 sm:px-2 rounded-neu-sm text-xs font-bold transition flex items-center gap-1 shadow-neu-flat-xs active:shadow-neu-inset ${
                isShuffled
                  ? "bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 border border-blue-400/50"
                  : "bg-[#e6ecf5] dark:bg-[#212730] text-slate-500 dark:text-slate-400"
              }`}
              title={isShuffled ? "Đảo câu hỏi & đáp án: Đang BẬT. Bấm để đổi." : "Đảo câu hỏi & đáp án: Đang TẮT. Bấm để bật."}
            >
              <Shuffle className="w-3.5 h-3.5" />
              <span className="hidden sm:inline text-[10px]">{isShuffled ? "Đảo: Bật" : "Đảo: Tắt"}</span>
            </button>
          )}

          {onRetakeTopic && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                soundManager.playClick();
                onRetakeTopic();
              }}
              className="p-1.5 sm:px-2.5 sm:py-1 rounded-neu-sm text-xs font-bold bg-[#e6ecf5] dark:bg-[#212730] hover:bg-blue-50 dark:hover:bg-blue-950/40 text-blue-700 dark:text-blue-300 shadow-neu-flat-xs active:shadow-neu-inset transition flex items-center gap-1 border border-blue-300/40 dark:border-blue-700/50"
              title="Làm lại chủ đề: Xáo trộn toàn bộ thứ tự câu hỏi và phương án A, B, C, D mới"
            >
              <RotateCcw className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span className="hidden sm:inline text-[10px]">Đảo &amp; Làm lại</span>
            </button>
          )}

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              soundManager.playClick();
              setIsExpanded(!isExpanded);
            }}
            className="p-1.5 rounded-neu-sm bg-[#e6ecf5] dark:bg-[#212730] shadow-neu-flat-xs active:shadow-neu-inset text-slate-600 dark:text-slate-300"
            title={isExpanded ? "Thu gọn bảng câu hỏi" : "Mở rộng bảng câu hỏi"}
          >
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Grid of question buttons */}
      {isExpanded && (
        <div className="mt-3 pt-3 border-t border-slate-200/80 dark:border-slate-800 space-y-3 animate-fade-in">
          {/* Chú thích màu sắc */}
          <div className="flex flex-wrap items-center gap-2 text-[10px] text-slate-500 dark:text-slate-400 px-1">
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> Đã làm
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600" /> Đang chọn
            </span>
            {isFlagged && (
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" /> Đã gắn cờ
              </span>
            )}
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" /> Chưa làm
            </span>
          </div>

          {/* Lưới câu hỏi */}
          <div>
            {partDividerIndex && partDividerIndex < totalQuestions && (
              <div className="text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5">
                Phần 1: Trắc nghiệm 4 lựa chọn (Câu 1 – {partDividerIndex})
              </div>
            )}
            <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 gap-1.5">
              {Array.from({ length: partDividerIndex || totalQuestions }, (_, i) => {
                const answered = isAnswered(i);
                const active = i === currentIndex;
                const flagged = isFlagged ? isFlagged(i) : false;
                const correct = isCorrect ? isCorrect(i) : null;

                let btnClass = "bg-[#e6ecf5] dark:bg-[#212730] text-slate-700 dark:text-slate-300 shadow-neu-flat-xs hover:border-blue-400";

                if (correct === true) {
                  btnClass = "bg-emerald-500 text-white font-bold shadow-md";
                } else if (correct === false) {
                  btnClass = "bg-rose-500 text-white font-bold shadow-md";
                } else if (active) {
                  btnClass = "bg-blue-600 text-white font-extrabold shadow-neu-inset scale-105 border-2 border-blue-400";
                } else if (flagged) {
                  btnClass = "bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border-2 border-amber-500 font-bold";
                } else if (answered) {
                  btnClass = "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-400/80 font-bold";
                }

                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => {
                      soundManager.playClick();
                      onSelectIndex(i);
                    }}
                    className={`relative py-1.5 rounded-lg text-xs font-bold transition-all active:scale-95 flex items-center justify-center ${btnClass}`}
                  >
                    <span>{i + 1}</span>
                    {flagged && (
                      <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-amber-500 ring-2 ring-white dark:ring-slate-900" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Phần 2 nếu có */}
            {partDividerIndex && partDividerIndex < totalQuestions && (
              <div className="mt-3">
                <div className="text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5">
                  Phần 2: Trắc nghiệm Đúng / Sai (Câu {partDividerIndex + 1} – {totalQuestions})
                </div>
                <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-1.5">
                  {Array.from({ length: totalQuestions - partDividerIndex }, (_, idx) => {
                    const i = partDividerIndex + idx;
                    const answered = isAnswered(i);
                    const active = i === currentIndex;
                    const flagged = isFlagged ? isFlagged(i) : false;
                    const correct = isCorrect ? isCorrect(i) : null;

                    let btnClass = "bg-[#e6ecf5] dark:bg-[#212730] text-slate-700 dark:text-slate-300 shadow-neu-flat-xs hover:border-blue-400";

                    if (correct === true) {
                      btnClass = "bg-emerald-500 text-white font-bold shadow-md";
                    } else if (correct === false) {
                      btnClass = "bg-rose-500 text-white font-bold shadow-md";
                    } else if (active) {
                      btnClass = "bg-blue-600 text-white font-extrabold shadow-neu-inset scale-105 border-2 border-blue-400";
                    } else if (flagged) {
                      btnClass = "bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border-2 border-amber-500 font-bold";
                    } else if (answered) {
                      btnClass = "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-400/80 font-bold";
                    }

                    return (
                      <button
                        key={i}
                        type="button"
                        onClick={() => {
                          soundManager.playClick();
                          onSelectIndex(i);
                        }}
                        className={`relative py-1.5 rounded-lg text-xs font-bold transition-all active:scale-95 flex items-center justify-center ${btnClass}`}
                      >
                        <span>{i + 1}</span>
                        {flagged && (
                          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-amber-500 ring-2 ring-white dark:ring-slate-900" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Nút hành động nhanh trong bảng câu hỏi */}
          {onRetakeTopic && (
            <div className="pt-2 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between gap-2">
              <span className="text-[10px] text-slate-500 dark:text-slate-400">
                Ôn luyện nhiều lần với đề và đáp án đảo ngẫu nhiên
              </span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  soundManager.playClick();
                  onRetakeTopic();
                }}
                className="px-3 py-1.5 rounded-neu-sm bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold shadow-neu-flat-xs active:shadow-neu-inset flex items-center gap-1.5 hover:opacity-95 transition cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Làm lại chủ đề (Đảo mới)</span>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
