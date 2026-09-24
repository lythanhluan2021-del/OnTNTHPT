"use client";

import React from "react";
import { Question, StudentAttempt, Topic } from "@/types";
import { calculateTopicAnalytics, getOverallStatistics } from "@/lib/analyticsEngine";
import { CompetencyRadarCard } from "./CompetencyRadarCard";
import {
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  Lightbulb,
  Award,
  ArrowRight,
  BookOpen,
  History,
} from "lucide-react";

interface StatsDashboardProps {
  topics: Topic[];
  questions: Question[];
  attempts: StudentAttempt[];
  onSelectTopicToPractice: (topicId: string) => void;
}

export const StatsDashboard: React.FC<StatsDashboardProps> = ({
  topics,
  questions,
  attempts,
  onSelectTopicToPractice,
}) => {
  const overall = getOverallStatistics(attempts);
  const topicStats = calculateTopicAnalytics(topics, questions, attempts);

  // Lọc các chủ đề cần cải thiện
  const weakTopics = topicStats.filter(
    (t) => t.status === "ChuaDat" || t.status === "CanLuyenTap"
  );

  return (
    <div className="space-y-5 pb-24 max-w-md mx-auto px-1">
      {/* Overview Stat Cards */}
      <div className="grid grid-cols-2 gap-3">
        {/* Card 1: Tỷ lệ chính xác */}
        <div className="p-3.5 rounded-neu bg-[#e6ecf5] dark:bg-[#1a1f26] shadow-neu-flat dark:shadow-[5px_5px_12px_#12151a,-5px_-5px_12px_#222932] space-y-1 border border-transparent dark:border-slate-800">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs font-semibold">
            <span>Tỷ lệ chính xác</span>
            <TrendingUp className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          </div>
          <div className="text-2xl font-black text-slate-800 dark:text-slate-100">
            {overall.accuracy}%
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">
            {overall.correct}/{overall.total} câu trả lời đúng
          </p>
        </div>

        {/* Card 2: Thời gian ôn tập */}
        <div className="p-3.5 rounded-neu bg-[#e6ecf5] dark:bg-[#1a1f26] shadow-neu-flat dark:shadow-[5px_5px_12px_#12151a,-5px_-5px_12px_#222932] space-y-1 border border-transparent dark:border-slate-800">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs font-semibold">
            <span>Thời gian luyện</span>
            <Clock className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
          </div>
          <div className="text-2xl font-black text-slate-800 dark:text-slate-100">
            {overall.totalTimeMinutes} <span className="text-xs font-normal">phút</span>
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">Tập trung suy luận</p>
        </div>

        {/* Card 3: Gợi ý Socratic đã dùng */}
        <div className="p-3.5 rounded-neu bg-[#e6ecf5] dark:bg-[#1a1f26] shadow-neu-flat dark:shadow-[5px_5px_12px_#12151a,-5px_-5px_12px_#222932] space-y-1 border border-transparent dark:border-slate-800">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs font-semibold">
            <span>Gợi ý Socratic</span>
            <Lightbulb className="w-4 h-4 text-amber-500" />
          </div>
          <div className="text-2xl font-black text-slate-800 dark:text-slate-100">
            {overall.totalHintsUsed} <span className="text-xs font-normal">lần</span>
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">Không bỏ cuộc</p>
        </div>

        {/* Card 4: Trạng thái chung */}
        <div className="p-3.5 rounded-neu bg-[#e6ecf5] dark:bg-[#1a1f26] shadow-neu-flat dark:shadow-[5px_5px_12px_#12151a,-5px_-5px_12px_#222932] space-y-1 border border-transparent dark:border-slate-800">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs font-semibold">
            <span>Đánh giá chung</span>
            <Award className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          </div>
          <div className="text-lg font-bold text-slate-800 dark:text-slate-100 pt-1">
            {overall.accuracy >= 80
              ? "Xuất sắc 🎉"
              : overall.accuracy >= 50
              ? "Khá tốt 💪"
              : "Cần cố gắng 📚"}
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">Dựa theo chuẩn THPT</p>
        </div>
      </div>

      {/* Biểu Đồ Radar Năng Lực Tin Học GDPT 2018 (SVG Mạng Nhện 5 Trục) */}
      <CompetencyRadarCard
        questions={questions}
        attempts={attempts}
        onSelectTopic={onSelectTopicToPractice}
      />

      {/* Phân Tích Chỗ Chưa Đạt (Weakness Diagnostics) */}
      <div className="p-4 rounded-neu bg-[#e6ecf5] dark:bg-[#1a1f26] shadow-neu-flat dark:shadow-[5px_5px_12px_#12151a,-5px_-5px_12px_#222932] space-y-3 border border-transparent dark:border-slate-800">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
          <h3 className="font-bold text-slate-800 dark:text-slate-100 text-sm">
            Phân Tích Bài Làm & Điểm Chưa Đạt
          </h3>
        </div>
        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
          Hệ thống theo dõi các lỗi sai và nấc gợi ý bạn đã dùng để chỉ ra chính xác lỗ hổng kiến thức cần bồi dưỡng:
        </p>

        {weakTopics.length === 0 ? (
          <div className="p-4 text-center rounded-neu-sm bg-[#e6ecf5] dark:bg-[#1f252e] shadow-neu-inset-sm dark:shadow-none space-y-2 border border-transparent dark:border-slate-800">
            <CheckCircle className="w-8 h-8 text-emerald-500 mx-auto" />
            <p className="text-xs text-slate-700 dark:text-slate-300 font-semibold">
              Tuyệt vời! Bạn đang nắm rất chắc tất cả các chủ đề đã làm.
            </p>
          </div>
        ) : (
          <div className="space-y-3 pt-1">
            {weakTopics.map((topic) => (
              <div
                key={topic.topicId}
                className="p-3 rounded-neu-sm bg-[#e6ecf5] dark:bg-[#1f252e] shadow-neu-inset-sm dark:shadow-none space-y-2 border-l-4 border-amber-500 border border-transparent dark:border-slate-800"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-100">
                    {topic.topicName}
                  </span>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      topic.status === "ChuaDat"
                        ? "bg-rose-100 dark:bg-rose-950/70 text-rose-700 dark:text-rose-300"
                        : "bg-amber-100 dark:bg-amber-950/70 text-amber-700 dark:text-amber-300"
                    }`}
                  >
                    Độ chính xác: {topic.accuracyRate}%
                  </span>
                </div>

                {/* Danh sách các điểm chưa đạt */}
                {topic.weakPoints.length > 0 ? (
                  <div className="space-y-1">
                    <p className="text-[11px] font-semibold text-rose-700 dark:text-rose-400">
                      Cụ thể các vị trí cần lưu ý:
                    </p>
                    <ul className="text-[11px] text-slate-600 dark:text-slate-300 space-y-1 list-disc pl-4">
                      {topic.weakPoints.map((wp, idx) => (
                        <li key={idx}>{wp}</li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Chưa có đủ lượt làm để xác định cụ thể điểm yếu. Hãy làm thêm các câu trong chủ đề này.
                  </p>
                )}

                {/* Nút hành động ôn lại */}
                <button
                  onClick={() => onSelectTopicToPractice(topic.topicId)}
                  className="w-full py-1.5 px-2 rounded-neu-sm bg-[#e6ecf5] dark:bg-[#202734] shadow-neu-flat-xs dark:shadow-none active:shadow-neu-inset text-blue-700 dark:text-blue-300 text-xs font-bold flex items-center justify-center gap-1.5 hover:text-blue-800 dark:hover:text-blue-200 border border-slate-300/40 dark:border-slate-700/60 transition"
                >
                  <BookOpen className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  <span>Ôn luyện lại dạng bài này</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lịch Sử Các Câu Đã Làm */}
      <div className="p-4 rounded-neu bg-[#e6ecf5] dark:bg-[#1a1f26] shadow-neu-flat dark:shadow-[5px_5px_12px_#12151a,-5px_-5px_12px_#222932] space-y-3 border border-transparent dark:border-slate-800">
        <div className="flex items-center gap-2">
          <History className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <h3 className="font-bold text-slate-800 dark:text-slate-100 text-sm">
            Lịch Sử Làm Bài Gần Đây
          </h3>
        </div>

        {attempts.length === 0 ? (
          <p className="text-xs text-slate-500 dark:text-slate-400 text-center py-4">
            Chưa có câu hỏi nào được nộp. Hãy bắt đầu luyện tập ở mục Ôn Luyện!
          </p>
        ) : (
          <div className="space-y-2 max-h-60 overflow-y-auto">
            {attempts
              .slice(-10)
              .reverse()
              .map((attempt) => {
                const q = questions.find((item) => item.id === attempt.questionId);
                return (
                  <div
                    key={attempt.id}
                    className="p-2.5 rounded-neu-sm bg-[#e6ecf5] dark:bg-[#1f252e] shadow-neu-flat-xs dark:shadow-none flex items-center justify-between text-xs border border-transparent dark:border-slate-800"
                  >
                    <div>
                      <div className="font-semibold text-slate-800 dark:text-slate-100">
                        {q?.topicName || "Câu hỏi"}
                      </div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400">
                        Dùng {attempt.hintsViewed} gợi ý • {attempt.timeSpentSeconds}s
                      </div>
                    </div>
                    <span
                      className={`font-bold px-2 py-0.5 rounded-full text-[10px] ${
                        attempt.isCorrect
                          ? "bg-emerald-100 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300"
                          : "bg-rose-100 dark:bg-rose-950/70 text-rose-700 dark:text-rose-300"
                      }`}
                    >
                      {attempt.isCorrect ? "Đúng" : "Sai"}
                    </span>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
};
