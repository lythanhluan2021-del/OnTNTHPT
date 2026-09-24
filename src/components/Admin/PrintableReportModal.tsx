"use client";

import React, { useRef } from "react";
import { StudentProgressSummary, AdminDashboardOverview } from "@/types";
import { soundManager } from "@/lib/audioEffects";
import { Printer, Download, X, Award, CheckCircle2, AlertTriangle, FileText } from "lucide-react";

interface PrintableReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  students: StudentProgressSummary[];
  overview: AdminDashboardOverview | null;
  selectedClass: string;
}

export const PrintableReportModal: React.FC<PrintableReportModalProps> = ({
  isOpen,
  onClose,
  students,
  overview,
  selectedClass,
}) => {
  const printAreaRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const handlePrint = () => {
    soundManager.playClick();
    window.print();
  };

  const filteredStudents =
    selectedClass === "all"
      ? students
      : students.filter((s) => s.className?.toLowerCase() === selectedClass.toLowerCase());

  const totalAttempted = filteredStudents.filter((s) => s.totalQuestionsAttempted > 0).length;
  const passCount = filteredStudents.filter((s) => s.estimatedScore >= 5.0).length;
  const avgScore =
    filteredStudents.length > 0
      ? filteredStudents.reduce((acc, s) => acc + s.estimatedScore, 0) / filteredStudents.length
      : 0;

  const currentDate = new Date().toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in print:p-0 print:bg-white print:static">
      <div className="w-full max-w-4xl bg-white dark:bg-[#1a1f26] rounded-neu-lg shadow-2xl border border-slate-200 dark:border-white/10 flex flex-col max-h-[92vh] print:max-h-none print:shadow-none print:border-none print:rounded-none">
        {/* Modal Action Bar (Hidden when printing) */}
        <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#202734] print:hidden rounded-t-neu-lg">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-100">
                Báo Cáo Sư Phạm & In Ấn PDF
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Xuất biên bản kết quả ôn thi tốt nghiệp THPT theo quy chuẩn Bộ GD&ĐT
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-neu-sm bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-neu-blue active:shadow-neu-blue-pressed transition"
            >
              <Printer className="w-4 h-4" />
              <span>In Báo Cáo / Lưu PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-neu-sm bg-[#e6ecf5] dark:bg-[#212730] text-slate-600 dark:text-slate-300 hover:text-rose-600 transition shadow-neu-flat-xs"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Content Body */}
        <div
          ref={printAreaRef}
          className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 text-slate-800 dark:text-slate-200 print:text-black print:p-0 print:overflow-visible font-serif"
        >
          {/* Header Quốc hiệu & Đơn vị */}
          <div className="grid grid-cols-2 gap-4 text-center pb-4 border-b border-slate-300 print:border-black">
            <div className="space-y-1">
              <p className="text-xs uppercase font-medium">SỞ GIÁO DỤC VÀ ĐÀO TẠO</p>
              <p className="text-xs sm:text-sm font-bold uppercase tracking-tight">
                TRƯỜNG THPT NGUYỄN SINH SẮC
              </p>
              <p className="text-[11px] italic">Tổ chuyên môn: Tin học</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs sm:text-sm font-bold uppercase">
                CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
              </p>
              <p className="text-xs font-semibold underline underline-offset-4">
                Độc lập - Tự do - Hạnh phúc
              </p>
              <p className="text-[11px] italic pt-1">
                Lấp Vò, ngày {new Date().getDate()} tháng {new Date().getMonth() + 1} năm {new Date().getFullYear()}
              </p>
            </div>
          </div>

          {/* Tiêu đề Báo Cáo */}
          <div className="text-center space-y-1 pt-2">
            <h1 className="text-base sm:text-lg font-black uppercase tracking-wide">
              BÁO CÁO TIẾN ĐỘ & KẾT QUẢ ÔN THI TỐT NGHIỆP THPT
            </h1>
            <p className="text-xs sm:text-sm font-semibold">
              Môn: Tin học • Khóa thi năm 2026 • Kế hoạch Giáo dục Giai đoạn 1
            </p>
            <p className="text-xs italic text-slate-600 print:text-slate-700">
              (Phạm vi: {selectedClass === "all" ? "Toàn bộ khối 12" : `Lớp ${selectedClass}`})
            </p>
          </div>

          {/* Bảng Tổng Hợp Chỉ Tiêu (KPIs) */}
          <div className="border border-slate-300 print:border-black rounded-lg p-4 bg-slate-50/50 print:bg-transparent space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 print:text-black">
              I. BẢNG TỔNG KẾT CHỈ TIÊU CHUYÊN MÔN
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-2 border border-slate-200 print:border-slate-400 rounded">
                <span className="text-slate-500 print:text-black block text-[11px]">Tổng số học sinh:</span>
                <strong className="text-sm">{filteredStudents.length} học sinh</strong>
              </div>
              <div className="p-2 border border-slate-200 print:border-slate-400 rounded">
                <span className="text-slate-500 print:text-black block text-[11px]">Đã tham gia ôn luyện:</span>
                <strong className="text-sm">
                  {totalAttempted}/{filteredStudents.length} (
                  {filteredStudents.length > 0
                    ? Math.round((totalAttempted / filteredStudents.length) * 100)
                    : 0}
                  %)
                </strong>
              </div>
              <div className="p-2 border border-slate-200 print:border-slate-400 rounded">
                <span className="text-slate-500 print:text-black block text-[11px]">Điểm trung bình quy đổi:</span>
                <strong className="text-sm text-blue-700 print:text-black">
                  {avgScore.toFixed(2)} / 10.0
                </strong>
              </div>
              <div className="p-2 border border-slate-200 print:border-slate-400 rounded">
                <span className="text-slate-500 print:text-black block text-[11px]">Tỷ lệ đạt (≥ 5.0đ):</span>
                <strong className="text-sm text-emerald-700 print:text-black">
                  {filteredStudents.length > 0
                    ? Math.round((passCount / filteredStudents.length) * 100)
                    : 0}
                  % (Chỉ tiêu: 73%)
                </strong>
              </div>
            </div>
          </div>

          {/* Bảng Danh Sách Học Sinh Chi Tiết */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 print:text-black">
              II. DANH SÁCH HỌC SINH VÀ PHÂN HÓA HỌC LỰC
            </h4>
            <div className="overflow-x-auto border border-slate-300 print:border-black rounded-lg">
              <table className="w-full text-[11px] text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100 print:bg-slate-200 border-b border-slate-300 print:border-black font-bold">
                    <th className="p-2 text-center border-r border-slate-300 print:border-black w-10">STT</th>
                    <th className="p-2 border-r border-slate-300 print:border-black">Mã định danh</th>
                    <th className="p-2 border-r border-slate-300 print:border-black">Họ và tên học sinh</th>
                    <th className="p-2 text-center border-r border-slate-300 print:border-black w-14">Lớp</th>
                    <th className="p-2 text-center border-r border-slate-300 print:border-black">Số câu làm</th>
                    <th className="p-2 text-center border-r border-slate-300 print:border-black">Tỷ lệ đúng</th>
                    <th className="p-2 text-center border-r border-slate-300 print:border-black">Điểm THPT</th>
                    <th className="p-2 border-r border-slate-300 print:border-black">Chủ đề cần bồi dưỡng</th>
                    <th className="p-2 text-center">Xếp loại</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredStudents.map((s, idx) => (
                    <tr
                      key={s.studentId || s.username}
                      className="border-b border-slate-200 print:border-slate-300 hover:bg-slate-50/50 print:hover:bg-transparent"
                    >
                      <td className="p-2 text-center border-r border-slate-200 print:border-slate-300">
                        {idx + 1}
                      </td>
                      <td className="p-2 font-mono border-r border-slate-200 print:border-slate-300">
                        {s.username}
                      </td>
                      <td className="p-2 font-bold border-r border-slate-200 print:border-slate-300">
                        {s.fullName}
                      </td>
                      <td className="p-2 text-center border-r border-slate-200 print:border-slate-300">
                        {s.className}
                      </td>
                      <td className="p-2 text-center border-r border-slate-200 print:border-slate-300">
                        {s.totalQuestionsAttempted}
                      </td>
                      <td className="p-2 text-center border-r border-slate-200 print:border-slate-300 font-semibold">
                        {s.accuracyRate}%
                      </td>
                      <td className="p-2 text-center border-r border-slate-200 print:border-slate-300 font-black">
                        {s.estimatedScore.toFixed(1)}
                      </td>
                      <td className="p-2 border-r border-slate-200 print:border-slate-300 text-[10px] text-slate-600 print:text-black">
                        {s.weakTopics && s.weakTopics.length > 0 ? s.weakTopics.join(", ") : "Nắm vững"}
                      </td>
                      <td className="p-2 text-center font-bold">
                        {s.status === "XuatSac"
                          ? "Xuất sắc"
                          : s.status === "Dat"
                          ? "Đạt"
                          : s.status === "CanCoGang"
                          ? "Cần cố gắng"
                          : s.status === "NguyCoYeu"
                          ? "Nguy cơ yếu"
                          : "Chưa tham gia"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Phần Ký Tên Ban Giám Hiệu & Giáo Viên */}
          <div className="grid grid-cols-3 gap-4 text-center pt-8 text-xs font-serif break-inside-avoid">
            <div className="space-y-16">
              <p className="font-bold uppercase">GIÁO VIÊN BỘ MÔN</p>
              <p className="italic text-slate-500 print:text-black">(Ký và ghi rõ họ tên)</p>
            </div>
            <div className="space-y-16">
              <p className="font-bold uppercase">TỔ TRƯỞNG CHUYÊN MÔN</p>
              <p className="italic text-slate-500 print:text-black">(Ký và ghi rõ họ tên)</p>
            </div>
            <div className="space-y-16">
              <p className="font-bold uppercase">HIỆU TRƯỞNG</p>
              <p className="italic text-slate-500 print:text-black">(Ký, đóng dấu)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
