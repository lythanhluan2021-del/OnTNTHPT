"use client";

import React from "react";
import { ExamResult } from "@/types";
import { soundManager } from "@/lib/audioEffects";
import {
  Trophy,
  Award,
  Clock,
  AlertTriangle,
  RotateCcw,
  BookOpenCheck,
  CheckCircle2,
  XCircle,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";

interface ExamResultModalProps {
  isOpen: boolean;
  result: ExamResult | null;
  onReviewExam: () => void;
  onRetakeExam: () => void;
  onClose: () => void;
}

export const ExamResultModal: React.FC<ExamResultModalProps> = ({
  isOpen,
  result,
  onReviewExam,
  onRetakeExam,
  onClose,
}) => {
  if (!isOpen || !result) return null;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins} phút ${secs < 10 ? "0" : ""}${secs} giây`;
  };

  const getRankBadge = (score: number) => {
    if (score >= 9.0) {
      return { text: "Xuất Sắc 🎉", color: "text-amber-500 bg-amber-50 dark:bg-amber-950/40 border-amber-300" };
    }
    if (score >= 8.0) {
      return { text: "Giỏi 🌟", color: "text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300" };
    }
    if (score >= 6.5) {
      return { text: "Khá 👍", color: "text-blue-600 bg-blue-50 dark:bg-blue-950/40 border-blue-300" };
    }
    if (score >= 5.0) {
      return { text: "Trung Bình ⚡", color: "text-slate-600 bg-slate-100 dark:bg-slate-800 border-slate-300" };
    }
    return { text: "Cần Cố Gắng ⚠️", color: "text-rose-600 bg-rose-50 dark:bg-rose-950/40 border-rose-300" };
  };

  const rank = getRankBadge(result.totalScore);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-lg bg-[#e6ecf5] dark:bg-[#1a1f26] rounded-neu-lg p-5 sm:p-6 shadow-neu-flat dark:shadow-[8px_8px_20px_#101317,-8px_-8px_20px_#242b35] border border-white/80 dark:border-white/10 space-y-5 animate-scale-up max-h-[92vh] overflow-y-auto">
        {/* Header với icon huy chương */}
        <div className="text-center space-y-2">
          <div className="inline-flex p-3 rounded-2xl bg-blue-100 dark:bg-blue-900/40 shadow-neu-flat-sm text-blue-600 dark:text-blue-400">
            <Trophy className="w-8 h-8" />
          </div>
          <h2 className="text-lg sm:text-xl font-black text-slate-800 dark:text-slate-100">
            KẾT QUẢ THI THỬ THPT
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
            {result.examTitle}
          </p>
        </div>

        {/* Điểm tổng kết to nổi bật */}
        <div className="p-4 rounded-neu bg-[#e6ecf5] dark:bg-[#212730] shadow-neu-inset text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Điểm Xét Tốt Nghiệp THPT
          </span>
          <div className="flex items-baseline justify-center gap-1.5">
            <span className="text-4xl sm:text-5xl font-black text-blue-600 dark:text-blue-400">
              {result.totalScore.toFixed(2)}
            </span>
            <span className="text-lg font-bold text-slate-400">/ 10.0</span>
          </div>
          <div>
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-black border ${rank.color}`}
            >
              {rank.text}
            </span>
          </div>
        </div>

        {/* Bảng chi tiết điểm từng phần */}
        <div className="grid grid-cols-2 gap-3">
          {/* Phần 1 */}
          <div className="p-3 rounded-neu-sm bg-[#e6ecf5] dark:bg-[#212730] shadow-neu-flat-sm space-y-1 text-center">
            <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400">
              Phần 1 (24 câu MC)
            </span>
            <div className="text-lg font-black text-slate-800 dark:text-slate-200">
              {result.mcScore.toFixed(2)} <span className="text-xs font-normal text-slate-400">/ 6.0 đ</span>
            </div>
            <p className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">
              Đúng {result.totalCorrectMc}/24 câu
            </p>
          </div>

          {/* Phần 2 */}
          <div className="p-3 rounded-neu-sm bg-[#e6ecf5] dark:bg-[#212730] shadow-neu-flat-sm space-y-1 text-center">
            <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400">
              Phần 2 (4 câu Đ/S)
            </span>
            <div className="text-lg font-black text-slate-800 dark:text-slate-200">
              {result.tfScore.toFixed(2)} <span className="text-xs font-normal text-slate-400">/ 4.0 đ</span>
            </div>
            <p className="text-[10px] text-cyan-600 dark:text-cyan-400 font-semibold">
              Đúng {result.totalCorrectTfStatements}/16 ý
            </p>
          </div>
        </div>

        {/* Thống kê thời gian và gian lận */}
        <div className="p-3 rounded-neu-sm bg-[#e6ecf5] dark:bg-[#212730] shadow-neu-flat-xs flex items-center justify-between text-xs text-slate-600 dark:text-slate-300">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-blue-500" />
            <span>Thời gian làm: <strong>{formatTime(result.timeSpentSeconds)}</strong></span>
          </div>
          <div className="flex items-center gap-1.5">
            {result.tabSwitchCount > 0 ? (
              <span className="flex items-center gap-1 text-rose-600 font-bold" title="Số lần rời màn hình làm bài">
                <ShieldAlert className="w-4 h-4" />
                <span>Rời tab: {result.tabSwitchCount} lần</span>
              </span>
            ) : (
              <span className="text-emerald-600 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Tập trung 100%
              </span>
            )}
          </div>
        </div>

        {/* Nút hành động */}
        <div className="space-y-2 pt-2">
          {/* Xem lại chi tiết */}
          <button
            type="button"
            onClick={() => {
              soundManager.playClick();
              onReviewExam();
            }}
            className="w-full py-2.5 px-4 rounded-neu-sm bg-blue-600 hover:bg-blue-700 text-white font-black text-sm shadow-neu-blue active:shadow-neu-blue-pressed transition flex items-center justify-center gap-2"
          >
            <BookOpenCheck className="w-4 h-4" />
            <span>Xem Lại Đáp Án & Lời Giải Chi Tiết</span>
          </button>

          <div className="flex gap-2">
            {/* Thi lại */}
            <button
              type="button"
              onClick={() => {
                soundManager.playClick();
                onRetakeExam();
              }}
              className="flex-1 py-2 px-3 rounded-neu-sm bg-[#e6ecf5] dark:bg-[#212730] hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs shadow-neu-flat-xs active:shadow-neu-inset transition flex items-center justify-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Làm Đề Khác</span>
            </button>

            {/* Thoát */}
            <button
              type="button"
              onClick={() => {
                soundManager.playClick();
                onClose();
              }}
              className="flex-1 py-2 px-3 rounded-neu-sm bg-[#e6ecf5] dark:bg-[#212730] hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs shadow-neu-flat-xs active:shadow-neu-inset transition flex items-center justify-center gap-1.5"
            >
              <span>Về Luyện Tập</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
