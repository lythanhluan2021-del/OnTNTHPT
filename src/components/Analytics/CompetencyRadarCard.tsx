"use client";

import React, { useState } from "react";
import { Question, StudentAttempt } from "@/types";
import { calculateCompetencyScores } from "@/lib/competencyEngine";
import {
  Compass,
  Award,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  TrendingUp,
  BookOpen,
} from "lucide-react";

interface CompetencyRadarCardProps {
  questions: Question[];
  attempts: StudentAttempt[];
  onSelectTopic?: (topicId: string) => void;
}

export const CompetencyRadarCard: React.FC<CompetencyRadarCardProps> = ({
  questions,
  attempts,
  onSelectTopic,
}) => {
  const competencies = calculateCompetencyScores(questions, attempts);
  const [selectedCode, setSelectedCode] = useState<string | null>(null);

  // Tính điểm trung bình tất cả các năng lực
  const attemptedComps = competencies.filter((c) => c.totalAttempted > 0);
  const averageScore =
    attemptedComps.length > 0
      ? Math.round(
          attemptedComps.reduce((sum, c) => sum + c.score, 0) / attemptedComps.length
        )
      : 0;

  // Tìm năng lực mạnh nhất và yếu nhất
  const sortedComps = [...competencies].sort((a, b) => b.score - a.score);
  const strongest = attemptedComps.length > 0 ? sortedComps[0] : null;
  const weakest =
    attemptedComps.length > 0
      ? [...attemptedComps].sort((a, b) => a.score - b.score)[0]
      : null;

  // =================== SVG RADAR COMPUTATION ===================
  const size = 300;
  const cx = size / 2;
  const cy = size / 2 - 5;
  const radius = 95;
  const totalAxes = 5;

  // Tọa độ góc của từng trục: bắt đầu từ đỉnh trên cùng (-PI/2)
  const getCoordinates = (index: number, valueRatio: number) => {
    const angle = -Math.PI / 2 + (index * 2 * Math.PI) / totalAxes;
    const r = Math.max(0.08, valueRatio) * radius; // ít nhất 8% để không bị xẹp hoàn toàn vào tâm
    return {
      x: cx + r * Math.cos(angle),
      y: cy + r * Math.sin(angle),
      labelX: cx + (radius + 24) * Math.cos(angle),
      labelY: cy + (radius + 18) * Math.sin(angle),
    };
  };

  // Tạo đường đa giác cho các vòng lưới (25%, 50%, 75%, 100%)
  const gridLevels = [0.25, 0.5, 0.75, 1.0];
  const gridPolygons = gridLevels.map((level) => {
    return Array.from({ length: totalAxes })
      .map((_, i) => {
        const { x, y } = getCoordinates(i, level);
        return `${x},${y}`;
      })
      .join(" ");
  });

  // Tọa độ đa giác dữ liệu thực tế
  const dataPoints = competencies.map((comp, idx) => {
    const ratio = comp.totalAttempted > 0 ? comp.score / 100 : 0.05;
    return getCoordinates(idx, ratio);
  });
  const dataPolygonString = dataPoints.map((p) => `${p.x},${p.y}`).join(" ");

  return (
    <div className="p-4 sm:p-5 rounded-neu bg-[#e6ecf5] dark:bg-[#1a1f26] shadow-neu-flat dark:shadow-[6px_6px_16px_#12151a,-6px_-6px_16px_#222932] space-y-4 border border-blue-200/40 dark:border-slate-800">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-neu-blue">
            <Compass className="w-4 h-4 animate-[spin_10s_linear_infinite]" />
          </div>
          <div>
            <h3 className="font-bold text-slate-800 dark:text-slate-100 text-xs sm:text-sm">
              Biểu Đồ Radar Năng Lực Tin Học GDPT 2018
            </h3>
            <p className="text-[10px] text-slate-500 dark:text-slate-400">
              Đánh giá chuẩn 5 mạch năng lực cốt lõi theo Bộ GD&ĐT
            </p>
          </div>
        </div>

        <div className="text-right">
          <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 block">
            Chỉ số Năng lực
          </span>
          <span className="text-lg font-black text-blue-600 dark:text-blue-400">
            {averageScore}%
          </span>
        </div>
      </div>

      {/* SVG Radar Visualizer */}
      <div className="relative flex justify-center py-1">
        <svg
          viewBox={`0 0 ${size} ${size - 10}`}
          className="w-full max-w-[310px] h-auto overflow-visible select-none drop-shadow-sm"
        >
          <defs>
            <linearGradient id="radarFillGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.25" />
            </linearGradient>
            <filter id="radarGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Vòng lưới nền (Concentric Pentagons) */}
          {gridPolygons.map((points, idx) => (
            <polygon
              key={idx}
              points={points}
              className="fill-none stroke-slate-300 dark:stroke-slate-700/60"
              strokeWidth={idx === gridPolygons.length - 1 ? "1.5" : "1"}
              strokeDasharray={idx < gridPolygons.length - 1 ? "3 3" : undefined}
            />
          ))}

          {/* Các trục nan hoa từ tâm */}
          {Array.from({ length: totalAxes }).map((_, i) => {
            const outer = getCoordinates(i, 1.0);
            return (
              <line
                key={i}
                x1={cx}
                y1={cy}
                x2={outer.x}
                y2={outer.y}
                className="stroke-slate-300 dark:stroke-slate-700/60"
                strokeWidth="1"
              />
            );
          })}

          {/* Nhãn mức tỷ lệ phần trăm trên trục đứng */}
          {gridLevels.map((level, idx) => (
            <text
              key={idx}
              x={cx + 4}
              y={cy - level * radius + 10}
              className="text-[8px] fill-slate-400 dark:fill-slate-500 font-mono select-none"
            >
              {Math.round(level * 100)}%
            </text>
          ))}

          {/* Đa giác dữ liệu học sinh */}
          <polygon
            points={dataPolygonString}
            fill="url(#radarFillGrad)"
            stroke="#2563eb"
            strokeWidth="2.5"
            className="transition-all duration-700 ease-out"
            filter="url(#radarGlow)"
          />

          {/* Các điểm nút và nhãn tên trục */}
          {competencies.map((comp, idx) => {
            const pt = dataPoints[idx];
            const coord = getCoordinates(idx, 1.0);
            const isSelected = selectedCode === comp.code;

            return (
              <g
                key={comp.code}
                onClick={() => setSelectedCode(isSelected ? null : comp.code)}
                className="cursor-pointer group"
              >
                {/* Điểm nút trên biểu đồ */}
                <circle
                  cx={pt.x}
                  cy={pt.y}
                  r={isSelected ? "6" : "4.5"}
                  className={`transition-all duration-300 ${
                    comp.totalAttempted === 0
                      ? "fill-slate-400 stroke-slate-200 dark:stroke-slate-700"
                      : comp.score >= 80
                      ? "fill-emerald-500 stroke-white dark:stroke-[#1a1f26]"
                      : comp.score >= 65
                      ? "fill-blue-500 stroke-white dark:stroke-[#1a1f26]"
                      : "fill-amber-500 stroke-white dark:stroke-[#1a1f26]"
                  }`}
                  strokeWidth="2"
                />

                {/* Nhãn trục */}
                <text
                  x={coord.labelX}
                  y={coord.labelY}
                  textAnchor="middle"
                  dominantBaseline="central"
                  className={`text-[10px] font-bold transition-colors select-none ${
                    isSelected
                      ? "fill-blue-600 dark:fill-blue-400 font-black"
                      : "fill-slate-700 dark:fill-slate-300 group-hover:fill-blue-600"
                  }`}
                >
                  {comp.code}
                </text>
                <text
                  x={coord.labelX}
                  y={coord.labelY + 11}
                  textAnchor="middle"
                  dominantBaseline="central"
                  className={`text-[8px] font-bold select-none ${
                    comp.totalAttempted === 0
                      ? "fill-slate-400 dark:fill-slate-500"
                      : comp.score >= 80
                      ? "fill-emerald-600 dark:fill-emerald-400"
                      : comp.score >= 65
                      ? "fill-blue-600 dark:fill-blue-400"
                      : "fill-amber-600 dark:fill-amber-400"
                  }`}
                >
                  {comp.totalAttempted > 0 ? `${comp.score}%` : "Chưa làm"}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Thẻ chuẩn đoán nhanh Sư phạm */}
      {attemptedComps.length > 0 && (
        <div className="grid grid-cols-2 gap-2 text-xs">
          {strongest && (
            <div className="p-2.5 rounded-neu-sm bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-300/60 dark:border-emerald-800/60 space-y-1">
              <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-800 dark:text-emerald-300">
                <Award className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span>Năng lực nổi trội:</span>
              </div>
              <p className="text-[11px] font-semibold text-slate-800 dark:text-slate-100 truncate">
                {strongest.code}: {strongest.shortName} ({strongest.score}%)
              </p>
            </div>
          )}

          {weakest && weakest.score < 80 && (
            <div className="p-2.5 rounded-neu-sm bg-amber-50/70 dark:bg-amber-950/40 border border-amber-300/60 dark:border-amber-800/60 space-y-1">
              <div className="flex items-center gap-1 text-[11px] font-bold text-amber-800 dark:text-amber-300">
                <AlertCircle className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                <span>Cần ưu tiên bồi dưỡng:</span>
              </div>
              <p className="text-[11px] font-semibold text-slate-800 dark:text-slate-100 truncate">
                {weakest.code}: {weakest.shortName} ({weakest.score}%)
              </p>
            </div>
          )}
        </div>
      )}

      {/* Danh sách chi tiết 5 Mạch Năng lực */}
      <div className="space-y-2.5 pt-1">
        <div className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center justify-between">
          <span>Chi tiết 5 Mạch Năng Lực Cốt Lõi</span>
          <span className="text-[10px] text-slate-400 font-normal">
            Bấm để xem khuyến nghị ôn luyện
          </span>
        </div>

        {competencies.map((comp) => {
          const isSelected = selectedCode === comp.code;

          return (
            <div
              key={comp.code}
              className={`p-3 rounded-neu-sm bg-[#e6ecf5] dark:bg-[#1f252e] shadow-neu-flat-xs dark:shadow-none border transition-all ${
                isSelected
                  ? "border-blue-500 dark:border-blue-500 ring-1 ring-blue-500/30"
                  : "border-slate-300/50 dark:border-slate-800"
              }`}
            >
              {/* Header dòng */}
              <div
                onClick={() => setSelectedCode(isSelected ? null : comp.code)}
                className="flex items-center justify-between cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-blue-100 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 font-black text-xs flex items-center justify-center flex-shrink-0 shadow-neu-flat-xs border border-blue-200 dark:border-blue-800/50">
                    {comp.code}
                  </span>
                  <div>
                    <div className="text-xs font-bold text-slate-800 dark:text-slate-100">
                      {comp.shortName}
                    </div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400">
                      {comp.totalAttempted > 0
                        ? `${comp.correctCount}/${comp.totalAttempted} câu đúng`
                        : "Chưa có lượt làm bài"}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      comp.status === "XuatSac"
                        ? "bg-emerald-100 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300"
                        : comp.status === "Dat"
                        ? "bg-blue-100 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300"
                        : comp.status === "CanLuyenTap"
                        ? "bg-amber-100 dark:bg-amber-950/70 text-amber-700 dark:text-amber-300"
                        : "bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                    }`}
                  >
                    {comp.totalAttempted > 0 ? `${comp.score}%` : "Chưa làm"}
                  </span>
                </div>
              </div>

              {/* Thanh tiến độ năng lực */}
              <div className="w-full h-1.5 bg-slate-300/60 dark:bg-slate-800 rounded-full mt-2.5 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    comp.status === "XuatSac"
                      ? "bg-emerald-500"
                      : comp.status === "Dat"
                      ? "bg-blue-500"
                      : comp.status === "CanLuyenTap"
                      ? "bg-amber-500"
                      : "bg-slate-400"
                  }`}
                  style={{ width: `${comp.totalAttempted > 0 ? comp.score : 0}%` }}
                />
              </div>

              {/* Chi tiết sư phạm mở rộng khi bấm vào */}
              {isSelected && (
                <div className="mt-3 pt-3 border-t border-slate-300/60 dark:border-slate-800 space-y-2 animate-fadeIn text-xs">
                  <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    <strong>Nội dung:</strong> {comp.fullName}. {comp.description}
                  </p>

                  <div className="p-2.5 rounded-neu-sm bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200/60 dark:border-blue-900/40 text-[11px] space-y-1">
                    <div className="flex items-center gap-1 font-bold text-blue-800 dark:text-blue-300">
                      <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                      <span>Lời khuyên sư phạm:</span>
                    </div>
                    <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                      {comp.actionAdvice}
                    </p>
                  </div>

                  {onSelectTopic && (
                    <button
                      onClick={() => onSelectTopic(comp.recommendedTopicId)}
                      className="w-full mt-1 py-1.5 px-3 rounded-neu-sm bg-[#e6ecf5] dark:bg-[#202734] shadow-neu-flat-xs active:shadow-neu-inset text-blue-700 dark:text-blue-300 hover:text-blue-800 font-bold text-xs flex items-center justify-center gap-1.5 border border-slate-300/40 dark:border-slate-700/60 transition"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                      <span>Ôn luyện: {comp.recommendedTopicName}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
