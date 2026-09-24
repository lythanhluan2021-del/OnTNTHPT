"use client";

import React, { useState } from "react";
import { WeekPlanItem, StudentAttempt } from "@/types";
import { WEEKLY_PLAN } from "@/data/weeklyPlan";
import { soundManager } from "@/lib/audioEffects";
import {
  Target,
  Trophy,
  Flame,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Calendar,
  Award,
  Zap,
} from "lucide-react";

interface WeeklyGoalCardProps {
  selectedTopicId: string;
  attempts: StudentAttempt[];
  onSelectTopic?: (topicId: string) => void;
}

export const WeeklyGoalCard: React.FC<WeeklyGoalCardProps> = ({
  selectedTopicId,
  attempts,
  onSelectTopic,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Tìm tuần học tương ứng với chủ đề đang chọn
  const currentWeek =
    WEEKLY_PLAN.find((w) => w.topicIds.includes(selectedTopicId)) || WEEKLY_PLAN[0];

  // Tính số câu đã làm và độ chính xác của tuần này
  const weekAttempts = attempts.filter((att) =>
    currentWeek.topicIds.includes(att.topicId)
  );

  // Đếm số câu hỏi duy nhất đã trả lời
  const uniqueQuestionsAttempted = new Set(weekAttempts.map((att) => att.questionId)).size;
  const correctAttempts = weekAttempts.filter((att) => att.isCorrect).length;
  const totalAttempts = weekAttempts.length;
  const accuracyRate =
    totalAttempts > 0 ? Math.round((correctAttempts / totalAttempts) * 100) : 0;

  // Mục tiêu tuần: tối thiểu 20 câu hoặc toàn bộ nếu ít hơn
  const targetCount = Math.min(25, currentWeek.totalTargetQuestions || 25);
  const progressPercent = Math.min(
    100,
    Math.round((uniqueQuestionsAttempted / targetCount) * 100)
  );

  const isCompleted = progressPercent >= 100;

  // Cấp bậc thành tích tuần
  const getMilestone = (percent: number) => {
    if (percent >= 100) {
      return { title: "Hoàn Thành Xuất Sắc 🏆", color: "text-amber-500", bg: "bg-amber-50 dark:bg-amber-950/50" };
    }
    if (percent >= 75) {
      return { title: "Gần Về Đích 🚀", color: "text-emerald-600", bg: "bg-emerald-50 dark:bg-emerald-950/50" };
    }
    if (percent >= 50) {
      return { title: "Đang Tăng Tốc ⚡", color: "text-blue-600", bg: "bg-blue-50 dark:bg-blue-950/50" };
    }
    if (percent >= 25) {
      return { title: "Đang Khởi Động 🌱", color: "text-indigo-600", bg: "bg-indigo-50 dark:bg-indigo-950/50" };
    }
    return { title: "Bắt Đầu Nhiệm Vụ 🎯", color: "text-slate-500", bg: "bg-slate-100 dark:bg-slate-800" };
  };

  const milestone = getMilestone(progressPercent);

  return (
    <div className="w-full bg-[#e6ecf5] dark:bg-[#1a1f26] rounded-2xl p-3 shadow-neu-flat border border-white/60 dark:border-white/5 transition-all">
      {/* Header bar */}
      <div
        className="flex items-center justify-between gap-2 cursor-pointer"
        onClick={() => {
          soundManager.playClick();
          setIsExpanded(!isExpanded);
        }}
      >
        <div className="flex items-center gap-2.5 min-w-0">
          <div
            className={`p-2 rounded-xl shadow-neu-flat-xs flex-shrink-0 ${
              isCompleted
                ? "bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400"
                : "bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400"
            }`}
          >
            {isCompleted ? <Trophy className="w-4 h-4 animate-bounce" /> : <Flame className="w-4 h-4" />}
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-xs font-black text-slate-800 dark:text-slate-100 truncate">
                Nhiệm Vụ {currentWeek.weekDisplay}
              </span>
              <span
                className={`text-[10px] font-bold px-2 py-0.2 rounded-full border ${milestone.bg} ${milestone.color} border-current/20`}
              >
                {milestone.title}
              </span>
            </div>
            <div className="flex items-center gap-2 text-[10px] text-slate-500 dark:text-slate-400 font-medium">
              <span>Tiến độ: <strong className="text-blue-600 dark:text-blue-400">{uniqueQuestionsAttempted}/{targetCount} câu</strong></span>
              <span>•</span>
              <span>Độ chính xác: <strong className={accuracyRate >= 70 ? "text-emerald-600 dark:text-emerald-400" : "text-amber-600"}>{accuracyRate}%</strong></span>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            soundManager.playClick();
            setIsExpanded(!isExpanded);
          }}
          className="p-1.5 rounded-neu-sm bg-[#e6ecf5] dark:bg-[#202734] shadow-neu-flat-xs active:shadow-neu-inset text-slate-600 dark:text-slate-300 flex-shrink-0"
        >
          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>

      {/* Thanh tiến độ động (Progress Bar) */}
      <div className="mt-2.5">
        <div className="w-full h-2.5 rounded-full bg-slate-200 dark:bg-slate-800 shadow-neu-inset overflow-hidden p-0.5">
          <div
            className={`h-full rounded-full transition-all duration-500 ${
              isCompleted
                ? "bg-gradient-to-r from-amber-400 to-amber-500 shadow-sm"
                : "bg-gradient-to-r from-blue-500 to-indigo-600 shadow-sm"
            }`}
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Nội dung chi tiết nhiệm vụ khi mở rộng */}
      {isExpanded && (
        <div className="mt-3 pt-3 border-t border-slate-200/80 dark:border-slate-800 space-y-3 animate-fade-in text-xs">
          <div className="space-y-1">
            <span className="font-bold text-slate-700 dark:text-slate-200 block">
              Mục tiêu theo Kế hoạch Giáo dục:
            </span>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              {currentWeek.title} ({currentWeek.chapter}).
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 text-center text-[11px]">
            <div className="p-2 rounded-neu-sm bg-[#e6ecf5] dark:bg-[#202734] shadow-neu-flat-xs space-y-0.5">
              <span className="text-slate-500 dark:text-slate-400 block text-[10px]">Mục tiêu số câu</span>
              <strong className="text-slate-800 dark:text-slate-100">{targetCount} câu / tuần</strong>
            </div>
            <div className="p-2 rounded-neu-sm bg-[#e6ecf5] dark:bg-[#202734] shadow-neu-flat-xs space-y-0.5">
              <span className="text-slate-500 dark:text-slate-400 block text-[10px]">Độ chính xác chuẩn</span>
              <strong className="text-emerald-600 dark:text-emerald-400">≥ 70% (Đạt)</strong>
            </div>
          </div>

          {isCompleted && (
            <div className="p-2.5 rounded-neu-sm bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 text-center space-y-1">
              <p className="font-black text-amber-700 dark:text-amber-300 flex items-center justify-center gap-1">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Bạn đã hoàn thành mục tiêu của {currentWeek.weekDisplay}!</span>
              </p>
              <p className="text-[10px] text-slate-600 dark:text-slate-400">
                Hãy tiếp tục duy trì phong độ hoặc thi thử 50 phút để kiểm tra toàn diện nhé.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
