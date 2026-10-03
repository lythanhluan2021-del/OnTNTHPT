"use client";

import React, { useState, useEffect } from "react";
import { soundManager } from "@/lib/audioEffects";
import {
  LayoutGrid,
  ChevronUp,
  ChevronDown,
  Shuffle,
  RotateCcw,
  Zap,
  Target,
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
  const [isExpanded, setIsExpanded] = useState(true);

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
    <div className="w-full bg-[#e6ecf5] dark:bg-[#1a1f26] rounded-2xl p-3 sm:p-4 shadow-neu-flat border border-white/80 dark:border-white/5 transition-all space-y-3">
      {/* 1. Header Bar: Tối giản, thanh lịch, chuẩn Neumorphism (Không nhồi nhét nút) */}
      <div
        className="flex items-center justify-between gap-3 cursor-pointer select-none"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="p-2 rounded-neu-xs bg-[#e6ecf5] dark:bg-[#202734] text-blue-600 dark:text-blue-400 shadow-neu-flat-xs flex-shrink-0">
            <LayoutGrid className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h4 className="text-xs sm:text-sm font-black text-slate-800 dark:text-slate-100 tracking-tight">
                Bảng Câu Hỏi
              </h4>
              <span className="text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                {answeredCount}/{totalQuestions} câu
              </span>
              {isMultiStage && (
                <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900">
                  {totalStages} chặng
                </span>
              )}
            </div>
            <div className="flex items-center gap-2 text-[10px] text-slate-500 dark:text-slate-400 font-medium pt-0.5">
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Đã làm: {answeredCount}</span>
              <span>•</span>
              <span>Còn lại: {totalQuestions - answeredCount}</span>
              {flaggedCount > 0 && (
                <>
                  <span>•</span>
                  <span className="text-amber-600 dark:text-amber-400 font-semibold">Ghim: {flaggedCount}</span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Nút Thu gọn / Mở rộng duy nhất ở góc phải */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            soundManager.playClick();
            setIsExpanded(!isExpanded);
          }}
          className="p-2 rounded-neu-xs bg-[#e6ecf5] dark:bg-[#202734] shadow-neu-flat-xs active:shadow-neu-inset text-slate-600 dark:text-slate-300 transition-all hover:text-blue-600 flex-shrink-0"
          title={isExpanded ? "Thu gọn bảng câu hỏi" : "Mở rộng bảng câu hỏi"}
        >
          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>

      {/* 2. Vùng mở rộng: Chứa Thanh công cụ đồng bộ + Lưới nút số */}
      {isExpanded && (
        <div className="pt-2 border-t border-slate-300/60 dark:border-slate-800 space-y-3 animate-fade-in">
          {/* Thanh công cụ chế độ (Tự động thích ứng, không tràn viền, không bị che khuất) */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2 py-0.5">
            {/* Nút Đảo câu hỏi & đáp án */}
            {onToggleShuffle && (
              <button
                type="button"
                onClick={() => {
                  soundManager.playClick();
                  onToggleShuffle();
                }}
                className={`h-8 px-3 rounded-neu-xs text-xs font-bold transition-all flex items-center justify-center sm:justify-start gap-1.5 cursor-pointer ${
                  isShuffled
                    ? "bg-[#e6ecf5] dark:bg-[#202734] text-blue-600 dark:text-blue-400 shadow-neu-inset font-extrabold border border-blue-400/40"
                    : "bg-[#e6ecf5] dark:bg-[#202734] text-slate-600 dark:text-slate-300 shadow-neu-flat-xs active:shadow-neu-inset hover:text-blue-600"
                }`}
                title={isShuffled ? "Đang bật chế độ đảo câu hỏi và đáp án" : "Đang tắt đảo"}
              >
                <Shuffle className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                <span className="whitespace-nowrap">{isShuffled ? "Đảo: Bật" : "Đảo: Tắt"}</span>
              </button>
            )}

            {/* Nút Luyện nhanh 10 câu */}
            {onQuickSprint && (
              <button
                type="button"
                onClick={() => {
                  soundManager.playClick();
                  onQuickSprint();
                }}
                className="h-8 px-3 rounded-neu-xs text-xs font-bold bg-[#e6ecf5] dark:bg-[#202734] text-slate-700 dark:text-slate-200 shadow-neu-flat-xs active:shadow-neu-inset hover:text-amber-600 dark:hover:text-amber-400 transition-all flex items-center justify-center sm:justify-start gap-1.5 cursor-pointer"
                title="Luyện nhanh 10 câu ngẫu nhiên (5 phút)"
              >
                <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-400 flex-shrink-0" />
                <span className="whitespace-nowrap">10 câu nhanh</span>
              </button>
            )}

            {/* Nút Sổ tay câu sai (chỉ hiện khi có câu sai) */}
            {wrongQuestionsCount && wrongQuestionsCount > 0 && onReviewMistakes ? (
              <button
                type="button"
                onClick={() => {
                  soundManager.playClick();
                  onReviewMistakes();
                }}
                className="h-8 px-3 rounded-neu-xs text-xs font-bold bg-[#e6ecf5] dark:bg-[#202734] text-rose-600 dark:text-rose-400 shadow-neu-flat-xs active:shadow-neu-inset border border-rose-300/40 dark:border-rose-900/60 transition-all flex items-center justify-center sm:justify-start gap-1.5 cursor-pointer"
                title={`Sổ tay phục thù: Luyện lại ${wrongQuestionsCount} câu em từng làm sai`}
              >
                <Target className="w-3.5 h-3.5 text-rose-500 flex-shrink-0" />
                <span className="whitespace-nowrap">Ôn {wrongQuestionsCount} câu sai</span>
              </button>
            ) : null}

            {/* Nút Làm mới toàn bộ chủ đề */}
            {onRetakeTopic && (
              <button
                type="button"
                onClick={() => {
                  soundManager.playClick();
                  onRetakeTopic();
                }}
                className="h-8 px-3 rounded-neu-xs text-xs font-bold bg-[#e6ecf5] dark:bg-[#202734] text-slate-700 dark:text-slate-300 shadow-neu-flat-xs active:shadow-neu-inset hover:text-blue-600 dark:hover:text-blue-400 transition-all flex items-center justify-center sm:justify-start gap-1.5 cursor-pointer"
                title="Xáo trộn lại toàn bộ đề bài và đáp án"
              >
                <RotateCcw className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                <span className="whitespace-nowrap">Làm mới đề</span>
              </button>
            )}
          </div>

          {/* Danh sách các Chặng luyện tập (Tự động xuống hàng flex-wrap, 100% hiển thị rõ ràng, không bị che khuất) */}
          {isMultiStage && (
            <div className="p-2.5 rounded-neu-sm bg-slate-200/50 dark:bg-slate-800/40 space-y-2">
              <div className="flex items-center justify-between text-xs font-black text-slate-700 dark:text-slate-300">
                <span className="flex items-center gap-1.5">
                  <span>🏆 Danh Sách Các Chặng (10 câu/chặng)</span>
                </span>
                <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400">
                  {totalStages} chặng • Đang ở Chặng {(typeof selectedStage === 'number' ? selectedStage : 0) + 1}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2">
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
                      className={`h-8 px-3 rounded-neu-xs font-bold text-xs transition-all flex items-center gap-1.5 cursor-pointer ${
                        isStageActive
                          ? "bg-blue-600 text-white shadow-neu-flat-xs font-black scale-102 border-2 border-blue-400 ring-2 ring-blue-400/20"
                          : "bg-[#e6ecf5] dark:bg-[#202734] text-slate-700 dark:text-slate-300 shadow-neu-flat-xs active:shadow-neu-inset hover:text-blue-600 hover:bg-white/60"
                      }`}
                    >
                      <span>Chặng {sIdx + 1}</span>
                      <span className="text-[10px] opacity-75 font-normal">
                        ({stats.start + 1}-{stats.end})
                      </span>
                      {stats.stars > 0 && (
                        <span className="text-amber-400 text-[10px]">
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
                  className={`h-8 px-3 rounded-neu-xs font-bold text-xs transition-all cursor-pointer ${
                    selectedStage === "all"
                      ? "bg-slate-800 text-white font-black shadow-neu-flat-xs border-2 border-slate-600"
                      : "bg-[#e6ecf5] dark:bg-[#202734] text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 shadow-neu-flat-xs active:shadow-neu-inset"
                  }`}
                >
                  Tất cả ({totalQuestions})
                </button>
              </div>
            </div>
          )}

          {/* Chú thích màu sắc */}
          <div className="flex flex-wrap items-center gap-3 text-[10px] text-slate-500 dark:text-slate-400 px-1">
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

          {/* Lưới câu hỏi: Các nút tròn 3D Neumorphism sạch đẹp */}
          <div>
            <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-2">
              {Array.from(
                { length: displayRange.end - displayRange.start },
                (_, offset) => {
                  const i = displayRange.start + offset;
                  const answered = isAnswered(i);
                  const active = i === currentIndex;
                  const flagged = isFlagged ? isFlagged(i) : false;
                  const correct = isCorrect ? isCorrect(i) : null;

                  let btnClass =
                    "bg-[#e6ecf5] dark:bg-[#202734] text-slate-700 dark:text-slate-300 shadow-neu-flat-xs hover:text-blue-600";

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
                      className={`relative h-9 rounded-neu-sm text-xs font-bold transition-all active:scale-95 flex items-center justify-center cursor-pointer ${btnClass}`}
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
        </div>
      )}
    </div>
  );
};
