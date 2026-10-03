"use client";

import React, { useState, useEffect } from "react";
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
  Zap,
  Target,
  Star,
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
  onQuickSprint?: () => void;
  wrongQuestionsCount?: number;
  onReviewMistakes?: () => void;
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
  onQuickSprint,
  wrongQuestionsCount,
  onReviewMistakes,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const STAGE_SIZE = 10;
  const isMultiStage = totalQuestions > 12;
  const totalStages = Math.ceil(totalQuestions / STAGE_SIZE);

  // Chặng đang được chọn hiển thị (mặc định theo câu hỏi hiện tại)
  const [selectedStage, setSelectedStage] = useState<number | "all">(
    Math.floor(currentIndex / STAGE_SIZE)
  );

  // Tự động đồng bộ tab chặng khi học sinh chuyển câu sang chặng khác
  useEffect(() => {
    const curStage = Math.floor(currentIndex / STAGE_SIZE);
    if (selectedStage !== "all" && curStage !== selectedStage) {
      setSelectedStage(curStage);
    }
  }, [currentIndex]);

  const answeredCount = Array.from({ length: totalQuestions }, (_, i) => isAnswered(i)).filter(Boolean).length;
  const flaggedCount = isFlagged ? Array.from({ length: totalQuestions }, (_, i) => isFlagged(i)).filter(Boolean).length : 0;

  // Tính thống kê cho từng chặng (số sao ⭐⭐⭐)
  const getStageStats = (stageIdx: number) => {
    const start = stageIdx * STAGE_SIZE;
    const end = Math.min((stageIdx + 1) * STAGE_SIZE, totalQuestions);
    const count = end - start;
    let answered = 0;
    let correct = 0;
    for (let i = start; i < end; i++) {
      if (isAnswered(i)) answered++;
      if (isCorrect && isCorrect(i) === true) correct++;
    }
    const isCompleted = answered === count && count > 0;
    let stars = 0;
    if (isCompleted) {
      const rate = correct / count;
      stars = rate >= 0.9 ? 3 : rate >= 0.7 ? 2 : 1;
    }
    return { start, end, count, answered, correct, isCompleted, stars };
  };

  // Xác định phạm vi các câu hỏi hiển thị trong lưới
  const displayRange = (() => {
    if (!isMultiStage || selectedStage === "all") {
      return { start: 0, end: totalQuestions };
    }
    const start = selectedStage * STAGE_SIZE;
    const end = Math.min((selectedStage + 1) * STAGE_SIZE, totalQuestions);
    return { start, end };
  })();

  return (
    <div className="w-full bg-[#e6ecf5] dark:bg-[#1a1f26] rounded-2xl p-3 shadow-neu-flat dark:shadow-[5px_5px_12px_#12151a,-5px_-5px_12px_#222932] border border-white/60 dark:border-white/5 transition-all">
      {/* Header bar */}
      <div className="flex items-center justify-between gap-2 cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400">
            <LayoutGrid className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                Bảng câu hỏi ({answeredCount}/{totalQuestions})
              </span>
              {isMultiStage && (
                <span className="text-[10px] font-black px-1.5 py-0.2 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                  {totalStages} chặng
                </span>
              )}
            </div>
            <div className="flex items-center gap-2 text-[10px] text-slate-500 dark:text-slate-400 font-medium">
              <span className="text-emerald-600 dark:text-emerald-400">Đã làm: {answeredCount}</span>
              {flaggedCount > 0 && <span className="text-amber-600 dark:text-amber-400">Đã ghim: {flaggedCount}</span>}
              <span>Còn lại: {totalQuestions - answeredCount}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          {/* Nút Luyện nhanh 10 câu */}
          {onQuickSprint && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                soundManager.playClick();
                onQuickSprint();
              }}
              className="p-1.5 sm:px-2 rounded-neu-sm text-xs font-bold bg-amber-50 dark:bg-amber-950/60 hover:bg-amber-100 text-amber-700 dark:text-amber-300 border border-amber-300/60 shadow-neu-flat-xs active:shadow-neu-inset transition flex items-center gap-1 cursor-pointer"
              title="Luyện nhanh 10 câu ngẫu nhiên (5 phút)"
            >
              <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
              <span className="hidden sm:inline text-[10px]">10 câu nhanh</span>
            </button>
          )}

          {/* Nút Ôn lại câu sai nếu có */}
          {wrongQuestionsCount && wrongQuestionsCount > 0 && onReviewMistakes ? (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                soundManager.playClick();
                onReviewMistakes();
              }}
              className="p-1.5 sm:px-2 rounded-neu-sm text-xs font-bold bg-rose-50 dark:bg-rose-950/60 hover:bg-rose-100 text-rose-700 dark:text-rose-300 border border-rose-300/60 shadow-neu-flat-xs active:shadow-neu-inset transition flex items-center gap-1 animate-pulse cursor-pointer"
              title={`Sổ tay phục thù: Luyện lại ${wrongQuestionsCount} câu em từng làm sai`}
            >
              <Target className="w-3.5 h-3.5 text-rose-500" />
              <span className="hidden sm:inline text-[10px]">{wrongQuestionsCount} câu sai</span>
            </button>
          ) : null}

          {/* Nút Đảo câu hỏi & đáp án */}
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

          {/* Nút Làm lại chủ đề */}
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
          {/* Thanh chuyển chặng luyện tập nhỏ gọn (Bite-sized Stages) */}
          {isMultiStage && (
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
              <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider flex-shrink-0">
                Chặng:
              </span>
              {Array.from({ length: totalStages }).map((_, sIdx) => {
                const stats = getStageStats(sIdx);
                const isStageActive = selectedStage === sIdx;
                return (
                  <button
                    key={sIdx}
                    type="button"
                    onClick={() => {
                      soundManager.playClick();
                      setSelectedStage(sIdx);
                      if (currentIndex < stats.start || currentIndex >= stats.end) {
                        onSelectIndex(stats.start);
                      }
                    }}
                    className={`px-2.5 py-1 rounded-neu-xs font-bold text-[11px] whitespace-nowrap transition-all flex items-center gap-1 flex-shrink-0 ${
                      isStageActive
                        ? "bg-blue-600 text-white shadow-neu-flat-xs font-extrabold scale-102"
                        : "bg-[#e6ecf5] dark:bg-[#202734] text-slate-700 dark:text-slate-300 shadow-neu-flat-xs hover:text-blue-600"
                    }`}
                  >
                    <span>Chặng {sIdx + 1}</span>
                    <span className="text-[10px] opacity-80">({stats.start + 1}-{stats.end})</span>
                    {stats.stars > 0 && (
                      <span className="text-amber-400">
                        {"⭐".repeat(stats.stars)}
                      </span>
                    )}
                  </button>
                );
              })}
              <button
                type="button"
                onClick={() => {
                  soundManager.playClick();
                  setSelectedStage("all");
                }}
                className={`px-2 py-1 rounded-neu-xs font-semibold text-[10px] whitespace-nowrap transition-all flex-shrink-0 ${
                  selectedStage === "all"
                    ? "bg-slate-700 text-white font-bold"
                    : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                }`}
              >
                Tất cả ({totalQuestions})
              </button>
            </div>
          )}

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
            <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-1.5">
              {Array.from(
                { length: displayRange.end - displayRange.start },
                (_, offset) => {
                  const i = displayRange.start + offset;
                  const answered = isAnswered(i);
                  const active = i === currentIndex;
                  const flagged = isFlagged ? isFlagged(i) : false;
                  const correct = isCorrect ? isCorrect(i) : null;

                  let btnClass =
                    "bg-[#e6ecf5] dark:bg-[#212730] text-slate-700 dark:text-slate-300 shadow-neu-flat-xs hover:border-blue-400";

                  if (correct === true) {
                    btnClass = "bg-emerald-500 text-white font-bold shadow-md";
                  } else if (correct === false) {
                    btnClass = "bg-rose-500 text-white font-bold shadow-md";
                  } else if (active) {
                    btnClass =
                      "bg-blue-600 text-white font-extrabold shadow-neu-inset scale-105 border-2 border-blue-400";
                  } else if (flagged) {
                    btnClass =
                      "bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border-2 border-amber-500 font-bold";
                  } else if (answered) {
                    btnClass =
                      "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-400/80 font-bold";
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
                }
              )}
            </div>
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
