"use client";

import React, { useState, useMemo } from "react";
import {
  Users,
  UserCheck,
  Search,
  Filter,
  FileSpreadsheet,
  Download,
  ExternalLink,
  RefreshCw,
  Award,
  TrendingUp,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Eye,
  BookOpen,
  ChevronRight,
  X,
  Sparkles,
} from "lucide-react";
import { StudentProgressItem } from "@/lib/db/googleSheetsSync";
import { soundManager } from "@/lib/audioEffects";

interface StudentProgressReportViewProps {
  students: StudentProgressItem[];
  isLoading: boolean;
  onRefresh: () => void;
  onSyncGoogleSheet: () => void;
  isSyncingSheet: boolean;
  syncMessage: string | null;
  googleDriveFolderUrl?: string | null;
  allClasses: string[];
}

export const StudentProgressReportView: React.FC<StudentProgressReportViewProps> = ({
  students,
  isLoading,
  onRefresh,
  onSyncGoogleSheet,
  isSyncingSheet,
  syncMessage,
  googleDriveFolderUrl,
  allClasses,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedClass, setSelectedClass] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<"all" | "active" | "inactive" | "busy">("all");
  const [selectedRating, setSelectedRating] = useState<string>("all");
  const [selectedStudentDetail, setSelectedStudentDetail] = useState<StudentProgressItem | null>(null);

  // Lọc danh sách học sinh
  const filteredStudents = useMemo(() => {
    return students.filter((s) => {
      // 1. Lọc theo lớp
      if (selectedClass !== "all" && s.className !== selectedClass) {
        return false;
      }

      // 2. Lọc theo trạng thái
      if (selectedStatus === "active" && s.totalQuestions === 0) return false;
      if (selectedStatus === "inactive" && s.totalQuestions > 0) return false;
      if (selectedStatus === "busy" && s.totalQuestions < 50) return false;

      // 3. Lọc theo xếp loại
      if (selectedRating !== "all" && s.rating !== selectedRating) return false;

      // 4. Tìm kiếm họ tên hoặc mã HS
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchName = s.fullName.toLowerCase().includes(q);
        const matchUser = s.username.toLowerCase().includes(q);
        const matchClass = s.className.toLowerCase().includes(q);
        if (!matchName && !matchUser && !matchClass) return false;
      }

      return true;
    });
  }, [students, selectedClass, selectedStatus, selectedRating, searchQuery]);

  // Thống kê nhanh
  const summaryMetrics = useMemo(() => {
    const total = students.length;
    const active = students.filter((s) => s.totalQuestions > 0).length;
    const totalQuestions = students.reduce((acc, s) => acc + s.totalQuestions, 0);
    const avgScore =
      active > 0
        ? Math.round((students.reduce((acc, s) => acc + s.averageScore, 0) / active) * 10) / 10
        : 0;

    const excellentCount = students.filter((s) => s.rating === "Xuất Sắc").length;
    const goodCount = students.filter((s) => s.rating === "Khá").length;

    return {
      total,
      active,
      activeRate: total > 0 ? Math.round((active / total) * 100) : 0,
      totalQuestions,
      avgScore,
      excellentCount,
      goodCount,
    };
  }, [students]);

  const handleExportCsv = () => {
    soundManager.playClick();
    window.open("/api/admin/google-sheet-sync?action=export_progress_csv", "_blank");
  };

  const handleExportLoginCsv = () => {
    soundManager.playClick();
    window.open("/api/admin/google-sheet-sync?action=export_login_csv", "_blank");
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* 1. Header Bar: Tiêu đề + Nút đồng bộ & Xuất file */}
      <div className="bg-[#e6ecf5] dark:bg-[#181f2a] p-5 rounded-neu shadow-neu-flat border border-white/60 dark:border-slate-700/60">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-neu-sm bg-blue-100 dark:bg-blue-950 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-neu-flat-xs flex-shrink-0">
                <FileSpreadsheet className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-black text-slate-800 dark:text-white flex items-center gap-2">
                  <span>Báo Cáo Thống Kê Tiến Trình Học Sinh Toàn Khóa</span>
                  <span className="text-[10px] bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 font-extrabold px-2 py-0.5 rounded-full shadow-neu-flat-xs">
                    Realtime Sync
                  </span>
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  Theo dõi thời gian thực số câu đã làm, điểm trung bình, lịch sử đăng nhập và tự động đồng bộ sang Google Sheet / Google Drive.
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap self-stretch sm:self-auto justify-end">
            {/* Nút Đồng bộ Google Sheet */}
            <button
              type="button"
              onClick={() => {
                soundManager.playClick();
                onSyncGoogleSheet();
              }}
              disabled={isSyncingSheet}
              className="px-3.5 py-2 rounded-neu-sm bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white shadow-neu-flat-xs text-xs font-bold flex items-center gap-2 transition cursor-pointer disabled:opacity-60 whitespace-nowrap"
              title="Ghi nhận ngay toàn bộ tiến độ học sinh sang Google Sheet trong thư mục Google Drive"
            >
              <FileSpreadsheet className={`w-4 h-4 ${isSyncingSheet ? "animate-spin" : ""}`} />
              <span>{isSyncingSheet ? "Đang đồng bộ..." : "Đồng Bộ Google Sheet"}</span>
            </button>

            {/* Nút Xuất Báo Cáo CSV / Excel */}
            <button
              type="button"
              onClick={handleExportCsv}
              className="px-3 py-2 rounded-neu-sm bg-[#e6ecf5] dark:bg-[#1f2633] hover:bg-white/60 dark:hover:bg-[#283244] text-slate-700 dark:text-slate-200 shadow-neu-flat-xs active:shadow-neu-inset text-xs font-bold flex items-center gap-1.5 transition cursor-pointer whitespace-nowrap"
              title="Tải tệp bảng tính CSV (chuẩn UTF-8 mở trên Google Trang Tính và Excel)"
            >
              <Download className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>Xuất Bảng Điểm CSV</span>
            </button>

            {/* Nút Mở Google Drive */}
            {googleDriveFolderUrl && (
              <a
                href={googleDriveFolderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-neu-sm bg-blue-50 dark:bg-blue-950/60 hover:bg-blue-100 text-blue-700 dark:text-blue-300 shadow-neu-flat-xs active:shadow-neu-inset text-xs font-bold flex items-center gap-1.5 transition whitespace-nowrap"
                title="Mở thư mục dự án trên Google Drive"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Mở Google Drive</span>
              </a>
            )}

            {/* Nút Làm mới */}
            <button
              type="button"
              onClick={() => {
                soundManager.playClick();
                onRefresh();
              }}
              disabled={isLoading}
              className="p-2 rounded-neu-sm bg-[#e6ecf5] dark:bg-[#1f2633] text-slate-700 dark:text-slate-200 shadow-neu-flat-xs active:shadow-neu-inset transition cursor-pointer"
              title="Làm mới báo cáo"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? "animate-spin text-blue-600" : ""}`} />
            </button>
          </div>
        </div>

        {/* Thông báo đồng bộ nếu có */}
        {syncMessage && (
          <div className="mt-3 p-2.5 rounded-neu-sm bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 text-xs font-bold flex items-center justify-between gap-2 shadow-neu-flat-xs animate-in slide-in-from-top-1">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
              <span>{syncMessage}</span>
            </div>
            {googleDriveFolderUrl && (
              <a
                href={googleDriveFolderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-[11px] font-extrabold text-emerald-700 dark:text-emerald-300 hover:text-emerald-900"
              >
                Xem tệp trên Drive &rarr;
              </a>
            )}
          </div>
        )}
      </div>

      {/* 2. Thẻ KPI Thống Kê Tiến Trình (4 Thẻ Neumorphic) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {/* Sĩ số học sinh */}
        <div className="bg-[#e6ecf5] dark:bg-[#181f2a] p-4 rounded-neu shadow-neu-flat border border-white/60 dark:border-slate-700/60 flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
            <span className="text-xs font-bold">Tổng Học Sinh</span>
            <Users className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          </div>
          <div className="mt-2">
            <span className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-white">
              {summaryMetrics.total}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold ml-1">học sinh</span>
          </div>
          <p className="text-[10px] text-slate-400 font-medium mt-1 truncate">
            {allClasses.length} lớp ôn tập khối 12
          </p>
        </div>

        {/* Đã tham gia ôn luyện */}
        <div className="bg-[#e6ecf5] dark:bg-[#181f2a] p-4 rounded-neu shadow-neu-flat border border-white/60 dark:border-slate-700/60 flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
            <span className="text-xs font-bold">Đã Vào Ôn Luyện</span>
            <UserCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-white">
              {summaryMetrics.active}
            </span>
            <span className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400">
              ({summaryMetrics.activeRate}%)
            </span>
          </div>
          <p className="text-[10px] text-slate-400 font-medium mt-1 truncate">
            {summaryMetrics.total - summaryMetrics.active} học sinh chưa bắt đầu
          </p>
        </div>

        {/* Tổng câu đã luyện */}
        <div className="bg-[#e6ecf5] dark:bg-[#181f2a] p-4 rounded-neu shadow-neu-flat border border-white/60 dark:border-slate-700/60 flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
            <span className="text-xs font-bold">Tổng Câu Đã Luyện</span>
            <TrendingUp className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
          </div>
          <div className="mt-2">
            <span className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-white">
              {summaryMetrics.totalQuestions.toLocaleString()}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold ml-1">lượt làm</span>
          </div>
          <p className="text-[10px] text-slate-400 font-medium mt-1 truncate">
            Lưu trực tiếp Google Drive realtime
          </p>
        </div>

        {/* Điểm trung bình */}
        <div className="bg-[#e6ecf5] dark:bg-[#181f2a] p-4 rounded-neu shadow-neu-flat border border-white/60 dark:border-slate-700/60 flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
            <span className="text-xs font-bold">Điểm TB Toàn Khối</span>
            <Award className="w-4 h-4 text-amber-500" />
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-white">
              {summaryMetrics.avgScore > 0 ? summaryMetrics.avgScore.toFixed(1) : "—"}
            </span>
            <span className="text-xs text-slate-500 font-semibold">/10</span>
          </div>
          <div className="mt-1 flex items-center gap-1.5 text-[10px] font-bold">
            <span className="text-emerald-600 dark:text-emerald-400">
              ⭐ {summaryMetrics.excellentCount} Xuất sắc
            </span>
            <span className="text-blue-600 dark:text-blue-400">
              • {summaryMetrics.goodCount} Khá
            </span>
          </div>
        </div>
      </div>

      {/* 3. Thanh Lọc & Tìm Kiếm Đa Chiều */}
      <div className="bg-[#e6ecf5] dark:bg-[#181f2a] p-4 rounded-neu shadow-neu-flat border border-white/60 dark:border-slate-700/60 space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          {/* Tìm kiếm */}
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm theo họ tên, mã HS..."
              className="w-full pl-9 pr-3.5 py-2 rounded-neu-sm bg-[#e6ecf5] dark:bg-[#12161f] shadow-neu-inset text-xs font-medium text-slate-800 dark:text-slate-100 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-blue-500/40"
            />
          </div>

          {/* Lọc theo lớp */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-600 dark:text-slate-400 flex-shrink-0">Lớp:</span>
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="w-full px-3 py-2 rounded-neu-sm bg-[#e6ecf5] dark:bg-[#12161f] shadow-neu-inset text-xs font-bold text-slate-700 dark:text-slate-200 outline-none cursor-pointer"
            >
              <option value="all">Tất cả các lớp ({students.length})</option>
              {allClasses.map((c) => {
                const count = students.filter((s) => s.className === c).length;
                return (
                  <option key={c} value={c}>
                    Lớp {c} ({count} HS)
                  </option>
                );
              })}
            </select>
          </div>

          {/* Lọc theo tiến độ */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-600 dark:text-slate-400 flex-shrink-0">Tiến độ:</span>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value as any)}
              className="w-full px-3 py-2 rounded-neu-sm bg-[#e6ecf5] dark:bg-[#12161f] shadow-neu-inset text-xs font-bold text-slate-700 dark:text-slate-200 outline-none cursor-pointer"
            >
              <option value="all">Tất cả tiến độ</option>
              <option value="active">Đã làm bài ({summaryMetrics.active})</option>
              <option value="busy">Tích cực (&ge;50 câu)</option>
              <option value="inactive">Chưa bắt đầu ({summaryMetrics.total - summaryMetrics.active})</option>
            </select>
          </div>

          {/* Lọc theo xếp loại */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-600 dark:text-slate-400 flex-shrink-0">Xếp loại:</span>
            <select
              value={selectedRating}
              onChange={(e) => setSelectedRating(e.target.value)}
              className="w-full px-3 py-2 rounded-neu-sm bg-[#e6ecf5] dark:bg-[#12161f] shadow-neu-inset text-xs font-bold text-slate-700 dark:text-slate-200 outline-none cursor-pointer"
            >
              <option value="all">Tất cả xếp loại</option>
              <option value="Xuất Sắc">⭐ Xuất Sắc (&ge;8.0)</option>
              <option value="Khá">👍 Khá (6.5 - 7.9)</option>
              <option value="Trung Bình">📘 Trung Bình (5.0 - 6.4)</option>
              <option value="Cần Cố Gắng">⚠️ Cần Cố Gắng (&lt;5.0)</option>
              <option value="Chưa Tham Gia">💤 Chưa Tham Gia</option>
            </select>
          </div>
        </div>

        {/* Thanh kết quả lọc */}
        <div className="flex items-center justify-between text-xs font-bold text-slate-500 dark:text-slate-400 pt-1 border-t border-slate-200/60 dark:border-slate-800">
          <span>
            Hiển thị <strong>{filteredStudents.length}</strong> / {students.length} học sinh
          </span>
          {(searchQuery || selectedClass !== "all" || selectedStatus !== "all" || selectedRating !== "all") && (
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedClass("all");
                setSelectedStatus("all");
                setSelectedRating("all");
              }}
              className="text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
            >
              Đặt lại bộ lọc
            </button>
          )}
        </div>
      </div>

      {/* 4. Bảng Thống Kê Tiến Trình Học Sinh Chi Tiết */}
      <div className="bg-[#e6ecf5] dark:bg-[#181f2a] rounded-neu shadow-neu-flat border border-white/60 dark:border-slate-700/60 overflow-hidden">
        <div className="p-4 border-b border-slate-200/70 dark:border-slate-800 flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2 font-black text-slate-800 dark:text-white text-sm">
            <span>Danh Sách Tiến Độ Chi Tiết Từng Học Sinh</span>
            <span className="text-xs text-slate-500 font-medium">
              (Tự động ghi nhận theo thời gian thực)
            </span>
          </div>
          <button
            type="button"
            onClick={handleExportLoginCsv}
            className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 cursor-pointer"
          >
            <Download className="w-3 h-3" />
            <span>Tải Nhật Ký Đăng Nhập CSV</span>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-200/50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 font-extrabold uppercase tracking-wider text-[10px]">
              <tr>
                <th className="py-3 px-3.5 text-center">STT</th>
                <th className="py-3 px-3">Học Sinh</th>
                <th className="py-3 px-3 text-center">Lớp</th>
                <th className="py-3 px-3">Lần Đăng Nhập Cuối</th>
                <th className="py-3 px-3 text-center">Tiến Độ Câu Hỏi</th>
                <th className="py-3 px-3 text-center">Tỷ Lệ Đúng</th>
                <th className="py-3 px-3 text-center">Điểm TB</th>
                <th className="py-3 px-3 text-center">Đánh Giá</th>
                <th className="py-3 px-3 text-center">Chi Tiết</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200/70 dark:divide-slate-800/80">
              {filteredStudents.length === 0 ? (
                <tr>
                  <td colSpan={9} className="py-12 text-center text-slate-500">
                    <AlertTriangle className="w-8 h-8 text-amber-500 mx-auto mb-2 opacity-70" />
                    <p className="font-bold text-sm">Không tìm thấy học sinh nào phù hợp với bộ lọc</p>
                    <p className="text-xs text-slate-400 mt-1">Thử thay đổi từ khóa tìm kiếm hoặc chọn lại lớp học</p>
                  </td>
                </tr>
              ) : (
                filteredStudents.map((s, idx) => {
                  const isRecentLogin =
                    s.lastLoginAt && Date.now() - s.lastLoginAt < 24 * 60 * 60 * 1000;

                  return (
                    <tr
                      key={s.id}
                      className="hover:bg-white/40 dark:hover:bg-slate-800/40 transition-colors"
                    >
                      {/* STT */}
                      <td className="py-3 px-3.5 text-center font-bold text-slate-500">
                        {idx + 1}
                      </td>

                      {/* Họ tên & Username */}
                      <td className="py-3 px-3">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-black flex items-center justify-center text-xs shadow-neu-flat-xs flex-shrink-0">
                            {s.fullName.slice(0, 1).toUpperCase()}
                          </div>
                          <div>
                            <div className="font-extrabold text-slate-800 dark:text-white flex items-center gap-1.5">
                              <span>{s.fullName}</span>
                              {s.authProvider === "google" && (
                                <span className="text-[9px] bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 px-1.5 py-0.2 rounded font-extrabold">
                                  Google
                                </span>
                              )}
                            </div>
                            <div className="text-[11px] text-slate-400 font-mono">
                              @{s.username}
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* Lớp */}
                      <td className="py-3 px-3 text-center">
                        <span className="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-extrabold text-[11px]">
                          {s.className}
                        </span>
                      </td>

                      {/* Lần đăng nhập cuối */}
                      <td className="py-3 px-3">
                        {s.lastLoginAt ? (
                          <div className="flex items-center gap-1.5">
                            <Clock className={`w-3.5 h-3.5 ${isRecentLogin ? "text-emerald-500" : "text-slate-400"}`} />
                            <div>
                              <div className="font-semibold text-slate-700 dark:text-slate-300">
                                {s.lastLoginFormatted}
                              </div>
                              {isRecentLogin && (
                                <span className="text-[9px] text-emerald-600 dark:text-emerald-400 font-extrabold">
                                  Hôm nay
                                </span>
                              )}
                            </div>
                          </div>
                        ) : (
                          <span className="text-slate-400 italic">Chưa đăng nhập</span>
                        )}
                      </td>

                      {/* Tiến độ câu hỏi */}
                      <td className="py-3 px-3 text-center">
                        <div className="w-28 mx-auto space-y-1">
                          <div className="flex justify-between text-[10px] font-bold text-slate-600 dark:text-slate-300">
                            <span>{s.totalQuestions} câu</span>
                            <span>{s.progressPercent}%</span>
                          </div>
                          <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                            <div
                              className={`h-full rounded-full transition-all duration-300 ${
                                s.progressPercent >= 75
                                  ? "bg-emerald-500"
                                  : s.progressPercent >= 40
                                  ? "bg-blue-500"
                                  : s.progressPercent > 0
                                  ? "bg-amber-500"
                                  : "bg-slate-400"
                              }`}
                              style={{ width: `${Math.max(s.progressPercent, s.totalQuestions > 0 ? 5 : 0)}%` }}
                            />
                          </div>
                        </div>
                      </td>

                      {/* Tỷ lệ đúng */}
                      <td className="py-3 px-3 text-center">
                        {s.totalQuestions > 0 ? (
                          <span
                            className={`px-2 py-0.5 rounded-full font-black text-xs ${
                              s.accuracyPercent >= 75
                                ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300"
                                : s.accuracyPercent >= 50
                                ? "bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300"
                                : "bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300"
                            }`}
                          >
                            {s.accuracyPercent}%
                          </span>
                        ) : (
                          <span className="text-slate-400">—</span>
                        )}
                      </td>

                      {/* Điểm TB */}
                      <td className="py-3 px-3 text-center font-black text-slate-800 dark:text-white text-sm">
                        {s.totalQuestions > 0 ? s.averageScore.toFixed(1) : "—"}
                      </td>

                      {/* Đánh giá */}
                      <td className="py-3 px-3 text-center">
                        <span
                          className={`px-2.5 py-0.5 rounded-full font-extrabold text-[10px] ${
                            s.rating === "Xuất Sắc"
                              ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300/60"
                              : s.rating === "Khá"
                              ? "bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 border border-blue-300/60"
                              : s.rating === "Trung Bình"
                              ? "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border border-amber-300/60"
                              : s.rating === "Cần Cố Gắng"
                              ? "bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 border border-rose-300/60"
                              : "bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400"
                          }`}
                        >
                          {s.rating}
                        </span>
                      </td>

                      {/* Thao tác chi tiết */}
                      <td className="py-3 px-3 text-center">
                        <button
                          type="button"
                          onClick={() => {
                            soundManager.playClick();
                            setSelectedStudentDetail(s);
                          }}
                          className="p-1.5 rounded-neu-xs bg-[#e6ecf5] dark:bg-[#1f2633] hover:bg-white text-blue-600 dark:text-blue-400 shadow-neu-flat-xs active:shadow-neu-inset transition cursor-pointer"
                          title="Xem hồ sơ tiến trình học tập"
                        >
                          <Eye className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* 5. Modal Xem Hồ Sơ Tiến Trình Học Sinh */}
      {selectedStudentDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-lg bg-[#e6ecf5] dark:bg-[#181f2a] rounded-neu shadow-neu-flat p-6 relative border border-white/60 dark:border-slate-700/60 space-y-5">
            {/* Nút đóng */}
            <button
              onClick={() => setSelectedStudentDetail(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#e6ecf5] dark:bg-[#202732] shadow-neu-flat-xs active:shadow-neu-inset text-slate-500 hover:text-slate-800 dark:hover:text-slate-100 transition cursor-pointer"
              aria-label="Đóng"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header modal */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-black text-lg flex items-center justify-center shadow-neu-flat-xs">
                {selectedStudentDetail.fullName.slice(0, 1).toUpperCase()}
              </div>
              <div>
                <h3 className="text-base font-black text-slate-800 dark:text-white flex items-center gap-2">
                  <span>{selectedStudentDetail.fullName}</span>
                  <span className="text-xs bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded-full font-bold">
                    Lớp {selectedStudentDetail.className}
                  </span>
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Mã học sinh: <code className="font-mono font-bold text-blue-600 dark:text-blue-400">@{selectedStudentDetail.username}</code>
                </p>
              </div>
            </div>

            {/* Thống kê chi tiết */}
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-3 rounded-neu-sm bg-[#e6ecf5] dark:bg-[#12161f] shadow-neu-inset">
                <div className="text-[10px] font-bold text-slate-500 uppercase">Tổng câu làm</div>
                <div className="text-xl font-black text-slate-800 dark:text-white mt-1">
                  {selectedStudentDetail.totalQuestions}
                </div>
              </div>
              <div className="p-3 rounded-neu-sm bg-[#e6ecf5] dark:bg-[#12161f] shadow-neu-inset">
                <div className="text-[10px] font-bold text-slate-500 uppercase">Tỷ lệ đúng</div>
                <div className="text-xl font-black text-emerald-600 dark:text-emerald-400 mt-1">
                  {selectedStudentDetail.accuracyPercent}%
                </div>
              </div>
              <div className="p-3 rounded-neu-sm bg-[#e6ecf5] dark:bg-[#12161f] shadow-neu-inset">
                <div className="text-[10px] font-bold text-slate-500 uppercase">Điểm TB</div>
                <div className="text-xl font-black text-blue-600 dark:text-blue-400 mt-1">
                  {selectedStudentDetail.averageScore.toFixed(1)}
                </div>
              </div>
            </div>

            {/* Thông tin bổ sung */}
            <div className="space-y-2 text-xs bg-white/40 dark:bg-slate-800/40 p-3.5 rounded-neu-sm border border-slate-200/60 dark:border-slate-700/60">
              <div className="flex justify-between">
                <span className="text-slate-500">Lần đăng nhập cuối:</span>
                <span className="font-bold text-slate-800 dark:text-white">
                  {selectedStudentDetail.lastLoginFormatted}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Hình thức tài khoản:</span>
                <span className="font-bold text-slate-800 dark:text-white">
                  {selectedStudentDetail.authProvider === "google" ? "Google Sign-In" : "Cấp bởi Giáo viên"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Số chuyên đề đã ôn:</span>
                <span className="font-bold text-slate-800 dark:text-white">
                  {selectedStudentDetail.topicsPracticedCount} chuyên đề
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Xếp loại tiến độ:</span>
                <span className="font-extrabold text-blue-600 dark:text-blue-400">
                  {selectedStudentDetail.rating}
                </span>
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="button"
                onClick={() => setSelectedStudentDetail(null)}
                className="px-4 py-2 rounded-neu-sm bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-neu-blue transition cursor-pointer"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
