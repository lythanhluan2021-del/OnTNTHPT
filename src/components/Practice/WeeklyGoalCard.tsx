"use client";

import React, { useState } from "react";
import { StudentAttempt } from "@/types";
import { WEEKLY_PLAN } from "@/data/weeklyPlan";
import { soundManager } from "@/lib/audioEffects";
import {
  Trophy,
  Flame,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Sparkles,
  AlertTriangle,
  BookOpen,
  Target,
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

  // Lọc các lượt làm bài thuộc chuyên đề / tuần này
  const weekAttempts = attempts.filter((att) =>
    currentWeek.topicIds.includes(att.topicId)
  );

  // Đếm số câu hỏi duy nhất đã làm
  const uniqueQuestionsAttempted = new Set(weekAttempts.map((att) => att.questionId)).size;
  const correctAttempts = weekAttempts.filter((att) => att.isCorrect).length;
  const totalAttempts = weekAttempts.length;
  const accuracyRate =
    totalAttempts > 0 ? Math.round((correctAttempts / totalAttempts) * 100) : 0;

  // Tổng số câu hỏi của chuyên đề tuần này (Mẫu số chuẩn mực, không bao giờ nhỏ hơn số câu đã làm)
  const totalQuestionsInTopic = Math.max(
    currentWeek.totalTargetQuestions || 25,
    uniqueQuestionsAttempted
  );

  // Tiến độ làm bài thực tế (%)
  const progressPercent = totalQuestionsInTopic > 0
    ? Math.min(100, Math.round((uniqueQuestionsAttempted / totalQuestionsInTopic) * 100))
    : 0;

  // =========================================================================
  // HỆ THỐNG RÀNG BUỘC SƯ PHẠM ĐÁNH GIÁ DANH HIỆU (PEDAGOGICAL CONSTRAINT)
  // Đánh giá đồng thời cả TIẾN ĐỘ SỐ LƯỢNG và ĐỘ CHÍNH XÁC (CHẤT LƯỢNG)
  // =========================================================================
  const evaluateMilestone = () => {
    // 1. Trường hợp cảnh báo: Làm nhiều câu nhưng tỉ lệ sai quá cao (khoanh bừa, hổng kiến thức)
    if (uniqueQuestionsAttempted >= 10 && accuracyRate < 50) {
      return {
        title: "Cần Cải Thiện Chất Lượng ⚠️",
        color: "text-rose-600 dark:text-rose-400",
        bg: "bg-rose-50 dark:bg-rose-950/50",
        badgeBorder: "border-rose-400/50",
        barColor: "bg-gradient-to-r from-rose-500 to-amber-500",
        status: "warning",
        message: `Bạn đã làm ${uniqueQuestionsAttempted}/${totalQuestionsInTopic} câu nhưng độ chính xác chỉ đạt ${accuracyRate}%. Cần xem lại phần Lý thuyết và dùng Trợ lý Socratic để nắm chắc phương pháp giải trước khi luyện tiếp!`,
        advice: "Hãy ôn lại lý thuyết trọng tâm hoặc hỏi Thầy/Cô AI để hiểu rõ bản chất câu hỏi.",
      };
    }

    // 2. Xuất sắc: Làm >= 80% câu VÀ độ chính xác cao >= 80% (tương đương điểm Giỏi >= 8.0)
    if (progressPercent >= 80 && accuracyRate >= 80) {
      return {
        title: "Hoàn Thành Xuất Sắc 🏆",
        color: "text-amber-500 dark:text-amber-400",
        bg: "bg-amber-50 dark:bg-amber-950/50",
        badgeBorder: "border-amber-400/50",
        barColor: "bg-gradient-to-r from-amber-400 to-amber-500",
        status: "excellent",
        message: `Xuất sắc! Bạn đã hoàn thành ${uniqueQuestionsAttempted}/${totalQuestionsInTopic} câu với độ chính xác rất cao (${accuracyRate}%). Kiến thức chuyên đề này đã rất vững vàng!`,
        advice: "Bạn đã sẵn sàng thi thử đề 50 phút chuẩn ma trận tốt nghiệp THPT.",
      };
    }

    // 3. Đạt chuẩn tốt nghiệp: Làm >= 65% câu VÀ độ chính xác >= 65% (điểm Khá >= 6.5)
    if (progressPercent >= 65 && accuracyRate >= 65) {
      return {
        title: "Đạt Chuẩn Tốt Nghiệp 🌟",
        color: "text-emerald-600 dark:text-emerald-400",
        bg: "bg-emerald-50 dark:bg-emerald-950/50",
        badgeBorder: "border-emerald-400/50",
        barColor: "bg-gradient-to-r from-emerald-500 to-teal-500",
        status: "passed",
        message: `Chúc mừng bạn đã đạt chuẩn kiến thức chuyên đề (${uniqueQuestionsAttempted}/${totalQuestionsInTopic} câu, độ chính xác ${accuracyRate}%).`,
        advice: "Rèn luyện thêm các câu vận dụng cao để nâng điểm số lên mức Giỏi.",
      };
    }

    // 4. Đã làm nhiều câu nhưng độ chính xác chỉ ở mức trung bình (50% - 64%)
    if (progressPercent >= 50 && accuracyRate >= 50) {
      return {
        title: "Hoàn Thành Cơ Bản 📚",
        color: "text-blue-600 dark:text-blue-400",
        bg: "bg-blue-50 dark:bg-blue-950/50",
        badgeBorder: "border-blue-400/50",
        barColor: "bg-gradient-to-r from-blue-500 to-indigo-500",
        status: "basic",
        message: `Đã làm ${uniqueQuestionsAttempted}/${totalQuestionsInTopic} câu với độ chính xác ${accuracyRate}%. Bạn đã nắm được phần cơ bản nhưng cần cẩn thận hơn để tránh bẫy đề thi.`,
        advice: "Chú ý phân tích kỹ đề bài và loại trừ các phương án gây nhiễu.",
      };
    }

    // 5. Đang tiến hành tích cực
    if (progressPercent >= 30) {
      return {
        title: "Đang Tăng Tốc ⚡",
        color: "text-indigo-600 dark:text-indigo-400",
        bg: "bg-indigo-50 dark:bg-indigo-950/50",
        badgeBorder: "border-indigo-400/50",
        barColor: "bg-gradient-to-r from-blue-500 to-indigo-600",
        status: "in_progress",
        message: `Đang duy trì tiến độ tốt (${uniqueQuestionsAttempted}/${totalQuestionsInTopic} câu, chính xác ${accuracyRate}%). Hãy tiếp tục phấn đấu!`,
        advice: "Mục tiêu tối thiểu là 25 câu hỏi mỗi tuần theo Kế hoạch Giáo dục.",
      };
    }

    // 6. Mới khởi động
    if (uniqueQuestionsAttempted > 0) {
      return {
        title: "Đang Khởi Động 🌱",
        color: "text-sky-600 dark:text-sky-400",
        bg: "bg-sky-50 dark:bg-sky-950/50",
        badgeBorder: "border-sky-400/50",
        barColor: "bg-gradient-to-r from-sky-500 to-blue-500",
        status: "starting",
        message: `Đã làm ${uniqueQuestionsAttempted}/${totalQuestionsInTopic} câu. Hãy đọc kỹ phần Lý thuyết trước khi chọn đáp án nhé!`,
        advice: "Bắt đầu từ các câu Nhận biết để củng cố nền tảng.",
      };
    }

    return {
      title: "Bắt Đầu Nhiệm Vụ 🎯",
      color: "text-slate-500 dark:text-slate-400",
      bg: "bg-slate-100 dark:bg-slate-800",
      badgeBorder: "border-slate-300 dark:border-slate-700",
      barColor: "bg-slate-400",
      status: "not_started",
      message: `Chuyên đề gồm ${totalQuestionsInTopic} câu hỏi chuẩn ma trận GDPT 2018. Hãy hoàn thành tối thiểu 25 câu trong tuần này!`,
      advice: "Nắm vững lý thuyết để đạt độ chính xác trên 70%.",
    };
  };

  const evaluation = evaluateMilestone();

  return (
    <div className="w-full bg-[#e6ecf5] dark:bg-[#1a1f26] rounded-2xl p-3 shadow-neu-flat dark:shadow-[5px_5px_12px_#12151a,-5px_-5px_12px_#222932] border border-white/60 dark:border-slate-800 transition-all">
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
              evaluation.status === "excellent"
                ? "bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400"
                : evaluation.status === "warning"
                ? "bg-rose-100 dark:bg-rose-900/40 text-rose-600 dark:text-rose-400"
                : evaluation.status === "passed"
                ? "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400"
                : "bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400"
            }`}
          >
            {evaluation.status === "excellent" ? (
              <Trophy className="w-4 h-4 animate-bounce" />
            ) : evaluation.status === "warning" ? (
              <AlertTriangle className="w-4 h-4 text-rose-600 dark:text-rose-400" />
            ) : (
              <Flame className="w-4 h-4" />
            )}
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-xs font-black text-slate-800 dark:text-slate-100 truncate">
                Nhiệm Vụ {currentWeek.weekDisplay}
              </span>
              <span
                className={`text-[10px] font-bold px-2 py-0.2 rounded-full border ${evaluation.bg} ${evaluation.color} ${evaluation.badgeBorder}`}
              >
                {evaluation.title}
              </span>
            </div>
            <div className="flex items-center gap-2 text-[10px] text-slate-500 dark:text-slate-400 font-medium">
              <span>
                Tiến độ:{" "}
                <strong className="text-blue-600 dark:text-blue-400">
                  {uniqueQuestionsAttempted}/{totalQuestionsInTopic} câu ({progressPercent}%)
                </strong>
              </span>
              <span>•</span>
              <span>
                Độ chính xác:{" "}
                <strong
                  className={
                    accuracyRate >= 70
                      ? "text-emerald-600 dark:text-emerald-400 font-bold"
                      : accuracyRate >= 50
                      ? "text-blue-600 dark:text-blue-400 font-bold"
                      : "text-rose-600 dark:text-rose-400 font-black"
                  }
                >
                  {accuracyRate}%
                </strong>
              </span>
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
          title={isExpanded ? "Thu gọn" : "Xem chi tiết chỉ tiêu"}
        >
          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>

      {/* Thanh tiến độ động (Progress Bar) */}
      <div className="mt-2.5">
        <div className="w-full h-2.5 rounded-full bg-slate-200 dark:bg-slate-800 shadow-neu-inset overflow-hidden p-0.5">
          <div
            className={`h-full rounded-full transition-all duration-500 ${evaluation.barColor} shadow-sm`}
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Nội dung chi tiết nhiệm vụ khi mở rộng */}
      {isExpanded && (
        <div className="mt-3 pt-3 border-t border-slate-200/80 dark:border-slate-800 space-y-3 animate-fade-in text-xs">
          <div className="space-y-1">
            <span className="font-bold text-slate-700 dark:text-slate-200 block">
              Mục tiêu theo Kế hoạch Giáo dục Tin học:
            </span>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              {currentWeek.title} ({currentWeek.chapter}).
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 text-center text-[11px]">
            <div className="p-2 rounded-neu-sm bg-[#e6ecf5] dark:bg-[#202734] shadow-neu-flat-xs space-y-0.5 border border-slate-200/60 dark:border-slate-800">
              <span className="text-slate-500 dark:text-slate-400 block text-[10px]">Chỉ tiêu tối thiểu tuần</span>
              <strong className="text-slate-800 dark:text-slate-100">
                {uniqueQuestionsAttempted >= 25 ? (
                  <span className="text-emerald-600 dark:text-emerald-400">≥ 25 câu (Đã đạt)</span>
                ) : (
                  <span>25 câu / tuần</span>
                )}
              </strong>
            </div>
            <div className="p-2 rounded-neu-sm bg-[#e6ecf5] dark:bg-[#202734] shadow-neu-flat-xs space-y-0.5 border border-slate-200/60 dark:border-slate-800">
              <span className="text-slate-500 dark:text-slate-400 block text-[10px]">Độ chính xác chuẩn đầu ra</span>
              <strong className={accuracyRate >= 70 ? "text-emerald-600 dark:text-emerald-400" : "text-amber-600 dark:text-amber-400"}>
                ≥ 70% (Chuẩn THPT)
              </strong>
            </div>
          </div>

          {/* Khối đánh giá sư phạm đa trạng thái */}
          <div
            className={`p-2.5 rounded-neu-sm border text-xs space-y-1 ${
              evaluation.status === "warning"
                ? "bg-rose-50/80 dark:bg-rose-950/40 border-rose-300 dark:border-rose-800 text-rose-900 dark:text-rose-200"
                : evaluation.status === "excellent"
                ? "bg-amber-50/80 dark:bg-amber-950/40 border-amber-300 dark:border-amber-800 text-amber-900 dark:text-amber-200"
                : evaluation.status === "passed"
                ? "bg-emerald-50/80 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200"
                : "bg-blue-50/80 dark:bg-blue-950/40 border-blue-300 dark:border-blue-800 text-blue-900 dark:text-blue-200"
            }`}
          >
            <p className="font-bold flex items-center gap-1.5">
              {evaluation.status === "warning" ? (
                <AlertTriangle className="w-4 h-4 text-rose-600 dark:text-rose-400 flex-shrink-0" />
              ) : evaluation.status === "excellent" ? (
                <Sparkles className="w-4 h-4 text-amber-500 flex-shrink-0" />
              ) : (
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              )}
              <span>{evaluation.message}</span>
            </p>
            <p className="text-[10px] opacity-85 leading-relaxed pl-5">
              💡 <strong>Lời khuyên sư phạm:</strong> {evaluation.advice}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
