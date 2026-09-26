"use client";

import React, { useState } from "react";
import { Printer, X, FileSpreadsheet, ShieldAlert, Award, AlertTriangle } from "lucide-react";
import { ExamDefinition, ExamSubmission, ExamStatsReport } from "../../types/examManagement";
import { soundManager } from "@/lib/audioEffects";

interface ExamReportPrintModalProps {
  isOpen: boolean;
  onClose: () => void;
  exam: ExamDefinition;
  submissions: ExamSubmission[];
  report: ExamStatsReport;
  selectedClass: string;
}

export function ExamReportPrintModal({
  isOpen,
  onClose,
  exam,
  submissions,
  report,
  selectedClass,
}: ExamReportPrintModalProps) {
  const [reportType, setReportType] = useState<"score_sheet" | "incident_log" | "quality_report">("score_sheet");

  if (!isOpen || !exam) return null;

  const filteredSubmissions = selectedClass && selectedClass !== "all"
    ? submissions.filter((s) => s.className === selectedClass)
    : submissions;

  const handlePrint = () => {
    soundManager.playClick();
    window.print();
  };

  const getRank = (score: number) => {
    if (score >= 8.0) return "Giỏi";
    if (score >= 6.5) return "Khá";
    if (score >= 5.0) return "Trung bình";
    if (score >= 3.0) return "Yếu";
    return "Kém (Liệt)";
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
      <div className="w-full max-w-4xl max-h-[92vh] bg-[#e6ecf5] rounded-neu shadow-neu-flat border border-white/80 flex flex-col overflow-hidden">
        {/* Header (Ẩn khi in ấn) */}
        <div className="p-4 border-b border-slate-300/60 flex items-center justify-between gap-3 bg-[#e6ecf5] flex-shrink-0 print:hidden">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-neu-sm bg-emerald-100 flex items-center justify-center text-emerald-700 shadow-neu-flat-xs">
              <Printer className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-black text-slate-800">
                In Báo Cáo Sư Phạm &amp; Hồ Sơ Khảo Thí Chuẩn A4
              </h2>
              <p className="text-[11px] text-slate-500 font-medium">
                {exam.title} • {selectedClass === "all" ? "Toàn Khối" : `Lớp ${selectedClass}`}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset-sm p-1">
              <button
                type="button"
                onClick={() => {
                  soundManager.playClick();
                  setReportType("score_sheet");
                }}
                className={`px-3 py-1 rounded-md text-xs font-bold transition ${
                  reportType === "score_sheet"
                    ? "bg-emerald-600 text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Sổ Điểm Lớp A4
              </button>
              <button
                type="button"
                onClick={() => {
                  soundManager.playClick();
                  setReportType("incident_log");
                }}
                className={`px-3 py-1 rounded-md text-xs font-bold transition ${
                  reportType === "incident_log"
                    ? "bg-rose-600 text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Biên Bản Coi Thi &amp; Vi Phạm
              </button>
              <button
                type="button"
                onClick={() => {
                  soundManager.playClick();
                  setReportType("quality_report");
                }}
                className={`px-3 py-1 rounded-md text-xs font-bold transition ${
                  reportType === "quality_report"
                    ? "bg-blue-600 text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Báo Cáo Phổ Điểm Sư Phạm
              </button>
            </div>

            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-neu-sm bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-neu-flat flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>In Bản A4 (Print)</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-[#e6ecf5] shadow-neu-flat-xs active:shadow-neu-inset text-slate-500 hover:text-slate-800"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Nội dung in ấn */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 bg-white text-black font-serif print:p-0 print:overflow-visible">
          {reportType === "score_sheet" && (
            /* TAB 1: SỔ ĐIỂM TỔNG HỢP THEO LỚP */
            <div className="space-y-6 text-xs leading-relaxed max-w-3xl mx-auto">
              {/* Header */}
              <div className="flex justify-between items-start border-b-2 border-black pb-3">
                <div className="text-center w-1/2 pr-2">
                  <p className="font-bold uppercase tracking-wider text-[11px]">SỞ GD&amp;ĐT TỈNH ĐỒNG THÁP</p>
                  <p className="font-black uppercase text-xs">TRƯỜNG THPT NGUYỄN SINH SẮC</p>
                  <p className="text-[10px] italic font-sans mt-0.5">Tổ Chuyên Môn: Tin Học</p>
                </div>
                <div className="text-center w-1/2 pl-2">
                  <p className="font-bold uppercase text-[11px]">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</p>
                  <p className="font-bold text-[10px] italic">Độc lập - Tự do - Hạnh phúc</p>
                  <p className="text-[10px] italic font-sans mt-1">
                    Ngày in: {new Date().toLocaleDateString("vi-VN")}
                  </p>
                </div>
              </div>

              <div className="text-center space-y-1 py-2">
                <h3 className="font-black text-base uppercase text-black font-sans">
                  BẢNG TỔNG HỢP ĐIỂM KIỂM TRA ĐỊNH KỲ
                </h3>
                <p className="font-bold text-xs">
                  {exam.title.toUpperCase()} • {selectedClass === "all" ? "TOÀN TRƯỜNG" : `LỚP ${selectedClass}`}
                </p>
                <p className="text-[11px] italic font-sans">
                  Môn thi: Tin học 12 • Thời gian làm bài: {exam.durationMinutes} phút
                </p>
              </div>

              {/* Bảng điểm */}
              <table className="w-full border-collapse border border-black text-center text-[11px] font-sans">
                <thead>
                  <tr className="bg-slate-100 font-bold border-b border-black">
                    <th className="border border-black p-1.5 w-10">STT</th>
                    <th className="border border-black p-1.5 w-24">Số Báo Danh</th>
                    <th className="border border-black p-1.5 text-left pl-2">Họ và Tên Thí Sinh</th>
                    <th className="border border-black p-1.5 w-14">Lớp</th>
                    <th className="border border-black p-1.5 w-16">Mã Đề</th>
                    <th className="border border-black p-1.5 w-16">Phần I (6đ)</th>
                    <th className="border border-black p-1.5 w-16">Phần II (4đ)</th>
                    <th className="border border-black p-1.5 w-20">Tổng Điểm</th>
                    <th className="border border-black p-1.5 w-20">Xếp Loại</th>
                    <th className="border border-black p-1.5 w-24">Ghi Chú</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredSubmissions.length === 0 ? (
                    <tr>
                      <td colSpan={10} className="p-4 italic text-slate-500">
                        Chưa có bài thi nào được ghi nhận.
                      </td>
                    </tr>
                  ) : (
                    filteredSubmissions.map((sub, idx) => (
                      <tr key={sub.id || idx} className="border-b border-black">
                        <td className="border border-black p-1">{idx + 1}</td>
                        <td className="border border-black p-1 font-mono font-bold">{sub.candidateNumber || sub.studentId}</td>
                        <td className="border border-black p-1 text-left pl-2 font-medium">{sub.studentName}</td>
                        <td className="border border-black p-1 font-bold">{sub.className}</td>
                        <td className="border border-black p-1 font-mono">{sub.variantCode || "101"}</td>
                        <td className="border border-black p-1">{sub.mcScore.toFixed(2)}</td>
                        <td className="border border-black p-1">{sub.tfScore.toFixed(2)}</td>
                        <td className="border border-black p-1 font-black text-sm">
                          {sub.isDisqualified ? "0.0 (ĐH)" : sub.totalScore.toFixed(2)}
                        </td>
                        <td className="border border-black p-1 font-semibold">
                          {sub.isDisqualified ? "Đình chỉ" : getRank(sub.totalScore)}
                        </td>
                        <td className="border border-black p-1 text-[10px] italic">
                          {sub.isDisqualified ? "Vi phạm quy chế" : sub.tabSwitchCount > 0 ? `Cảnh báo ${sub.tabSwitchCount}L` : "Bình thường"}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>

              {/* Thống kê chân trang */}
              <div className="grid grid-cols-3 gap-4 pt-2 font-sans text-[11px] border border-black p-2.5">
                <div>
                  <p>Tổng thí sinh dự thi: <strong>{filteredSubmissions.length}</strong></p>
                  <p>Số bài hoàn thành: <strong>{filteredSubmissions.filter((s) => !s.isDisqualified).length}</strong></p>
                </div>
                <div>
                  <p>Điểm trung bình: <strong>{report.averageScore} đ</strong></p>
                  <p>Điểm cao nhất: <strong>{report.highestScore} đ</strong> (Thấp: {report.lowestScore} đ)</p>
                </div>
                <div>
                  <p>Tỷ lệ đạt chuẩn (&ge;5.0đ): <strong>{report.passRate}%</strong></p>
                  <p>Tỷ lệ giỏi (&ge;8.0đ): <strong>{report.excellentRate}%</strong></p>
                </div>
              </div>

              {/* Chữ ký */}
              <div className="grid grid-cols-2 text-center pt-8 font-sans">
                <div>
                  <p className="font-bold text-xs uppercase">CÁN BỘ COI THI</p>
                  <p className="text-[10px] italic">(Ký và ghi rõ họ tên)</p>
                  <div className="h-16" />
                </div>
                <div>
                  <p className="font-bold text-xs uppercase">GIÁO VIÊN BỘ MÔN</p>
                  <p className="text-[10px] italic">(Ký và ghi rõ họ tên)</p>
                  <div className="h-16" />
                  <p className="font-bold text-xs">LÝ THÀNH LUÂN</p>
                </div>
              </div>
            </div>
          )}

          {reportType === "incident_log" && (
            /* TAB 2: BIÊN BẢN COI THI & XỬ LÝ VI PHẠM */
            <div className="space-y-6 text-xs leading-relaxed max-w-3xl mx-auto font-sans">
              <div className="flex justify-between items-start border-b-2 border-black pb-3">
                <div className="text-center w-1/2 pr-2">
                  <p className="font-bold uppercase text-[11px]">TRƯỜNG THPT NGUYỄN SINH SẮC</p>
                  <p className="font-black uppercase text-xs">HỘI ĐỒNG KHẢO THÍ &amp; KIỂM TRA</p>
                </div>
                <div className="text-center w-1/2 pl-2">
                  <p className="font-bold uppercase text-[11px]">BIÊN BẢN GIÁM SÁT COI THI</p>
                  <p className="text-[10px] italic">Số: ...... /BB-KTTHPT</p>
                </div>
              </div>

              <div className="text-center space-y-1">
                <h3 className="font-black text-base uppercase text-rose-900">
                  BIÊN BẢN GHI NHẬN TÌNH HÌNH PHÒNG THI &amp; VI PHẠM QUY CHẾ
                </h3>
                <p className="font-bold text-xs">
                  {exam.title.toUpperCase()} • KHÓA NGÀY {new Date(exam.createdAt).toLocaleDateString("vi-VN")}
                </p>
              </div>

              <div className="space-y-1.5 text-xs">
                <p><strong>1. Thời gian bắt đầu:</strong> {new Date(exam.createdAt).toLocaleTimeString("vi-VN")} • Thời gian làm bài: {exam.durationMinutes} phút</p>
                <p><strong>2. Hình thức thi:</strong> Trực tuyến trên hệ thống khảo thí có kích hoạt chống gian lận đa tầng (Fullscreen lockdown &amp; blur detection).</p>
                <p><strong>3. Tình hình trật tự phòng thi:</strong></p>
                <p className="pl-4 italic text-slate-700">
                  Phần lớn thí sinh thực hiện nghiêm túc quy chế thi. Hệ thống tự động ghi nhận các lần chuyển tab, rời tiêu điểm màn hình và áp dụng chế tài kỷ luật tự động.
                </p>
              </div>

              {/* Danh sách vi phạm */}
              <div className="space-y-2 pt-2">
                <p className="font-bold text-xs uppercase text-rose-800">
                  4. Danh sách thí sinh vi phạm quy chế thi trực tuyến:
                </p>
                <table className="w-full border-collapse border border-black text-left text-[11px]">
                  <thead>
                    <tr className="bg-rose-50 font-bold border-b border-black text-center">
                      <th className="border border-black p-1.5 w-10">STT</th>
                      <th className="border border-black p-1.5 w-24">Số Báo Danh</th>
                      <th className="border border-black p-1.5">Họ và Tên Thí Sinh</th>
                      <th className="border border-black p-1.5 w-16 text-center">Lớp</th>
                      <th className="border border-black p-1.5 w-20 text-center">Số Lần Lỗi</th>
                      <th className="border border-black p-1.5">Hành Vi Ghi Nhận</th>
                      <th className="border border-black p-1.5 w-28 text-center">Biện Pháp Xử Lý</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredSubmissions.filter((s) => s.violations.length > 0 || s.isDisqualified).length === 0 ? (
                      <tr>
                        <td colSpan={7} className="p-3 text-center italic text-emerald-700">
                          🎉 Toàn bộ thí sinh tuân thủ tuyệt đối quy chế thi, không có trường hợp vi phạm nào.
                        </td>
                      </tr>
                    ) : (
                      filteredSubmissions
                        .filter((s) => s.violations.length > 0 || s.isDisqualified)
                        .map((sub, idx) => (
                          <tr key={sub.id || idx} className="border-b border-black">
                            <td className="border border-black p-1 text-center">{idx + 1}</td>
                            <td className="border border-black p-1 font-mono font-bold text-center">{sub.candidateNumber || sub.studentId}</td>
                            <td className="border border-black p-1 font-bold">{sub.studentName}</td>
                            <td className="border border-black p-1 text-center">{sub.className}</td>
                            <td className="border border-black p-1 text-center font-bold text-rose-700">{sub.violations.length}</td>
                            <td className="border border-black p-1 text-[10px]">
                              {sub.violations.map((v) => v.description).slice(0, 2).join("; ") || "Chuyển tab / rời màn hình thi"}
                            </td>
                            <td className="border border-black p-1 text-center font-bold">
                              {sub.isDisqualified ? (
                                <span className="text-rose-800">Đình chỉ thi (0 điểm)</span>
                              ) : (
                                <span className="text-amber-800">Cảnh cáo</span>
                              )}
                            </td>
                          </tr>
                        ))
                    )}
                  </tbody>
                </table>
              </div>

              <div className="grid grid-cols-2 text-center pt-8">
                <div>
                  <p className="font-bold text-xs uppercase">THƯ KÝ HỘI ĐỒNG THI</p>
                  <div className="h-16" />
                </div>
                <div>
                  <p className="font-bold text-xs uppercase">TRƯỞNG BAN COI THI</p>
                  <div className="h-16" />
                </div>
              </div>
            </div>
          )}

          {reportType === "quality_report" && (
            /* TAB 3: BÁO CÁO PHÂN TÍCH PHỔ ĐIỂM SƯ PHẠM */
            <div className="space-y-6 text-xs leading-relaxed max-w-3xl mx-auto font-sans">
              <div className="text-center space-y-1 border-b-2 border-black pb-3">
                <p className="font-bold text-xs uppercase">TRƯỜNG THPT NGUYỄN SINH SẮC - TỔ TIN HỌC</p>
                <h3 className="font-black text-base uppercase text-blue-900">
                  BÁO CÁO PHÂN TÍCH CHẤT LƯỢNG ĐỀ &amp; MA TRẬN NHẬN THỨC
                </h3>
                <p className="font-bold text-xs">
                  {exam.title.toUpperCase()} • NĂM HỌC 2025 - 2026
                </p>
              </div>

              {/* 4 Nhóm phổ điểm */}
              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="border border-black p-2 bg-slate-50">
                  <span className="text-[10px] text-slate-600 block">Dưới 5.0đ (Yếu)</span>
                  <p className="text-lg font-black text-rose-700">{report.scoreDistribution.under5} em</p>
                </div>
                <div className="border border-black p-2 bg-slate-50">
                  <span className="text-[10px] text-slate-600 block">5.0 - 6.4đ (TB)</span>
                  <p className="text-lg font-black text-amber-700">{report.scoreDistribution.from5to65} em</p>
                </div>
                <div className="border border-black p-2 bg-slate-50">
                  <span className="text-[10px] text-slate-600 block">6.5 - 7.9đ (Khá)</span>
                  <p className="text-lg font-black text-blue-700">{report.scoreDistribution.from65to8} em</p>
                </div>
                <div className="border border-black p-2 bg-slate-50">
                  <span className="text-[10px] text-slate-600 block">8.0 - 10.0đ (Giỏi)</span>
                  <p className="text-lg font-black text-emerald-700">{report.scoreDistribution.from8to10} em</p>
                </div>
              </div>

              {/* Top câu hỏi khó nhất */}
              <div className="space-y-2">
                <h4 className="font-bold text-xs uppercase text-slate-800 border-b border-black pb-1">
                  TOP CÂU HỎI CÓ TỶ LỆ HỌC SINH LÀM SAI CAO NHẤT (CẦN CHỮA BÀI):
                </h4>
                <div className="space-y-2">
                  {report.itemAnalysis.slice(0, 5).map((item, idx) => (
                    <div key={item.questionId || idx} className="border border-slate-300 p-2 rounded bg-slate-50 flex items-start justify-between gap-3 text-xs">
                      <div>
                        <p className="font-bold text-slate-900">
                          Câu {item.questionIndex}: <span className="font-normal text-slate-700">{item.content}</span>
                        </p>
                        <p className="text-[10px] text-slate-500 mt-0.5">
                          Mức độ: <strong>{item.difficulty}</strong> • Chủ đề: <strong>{item.topicName}</strong>
                        </p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <span className="px-2 py-0.5 rounded font-black text-xs bg-rose-100 text-rose-800">
                          {item.wrongRate}% HS sai
                        </span>
                        <p className="text-[10px] text-slate-400 mt-0.5">{item.correctCount}/{item.totalAttempts} đúng</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Kiến nghị sư phạm */}
              <div className="border border-black p-3 space-y-1 text-xs">
                <p className="font-bold uppercase">KIẾN NGHỊ SƯ PHẠM CỦA GIÁO VIÊN BỘ MÔN:</p>
                <p className="italic text-slate-700">
                  1. Cần tăng cường phụ đạo cho {report.scoreDistribution.under5} học sinh có điểm dưới trung bình, đặc biệt các chuyên đề có tỷ lệ sai trên 50%.<br />
                  2. Tiếp tục duy trì phương pháp rèn luyện tư duy trắc nghiệm Đúng/Sai (Phần II) nhằm nâng cao độ chính xác phân hóa cho học sinh khá giỏi.
                </p>
              </div>

              <div className="text-right pt-6">
                <p className="italic text-[11px]">Cao Lãnh, ngày {new Date().getDate()} tháng {new Date().getMonth() + 1} năm {new Date().getFullYear()}</p>
                <p className="font-bold text-xs uppercase mt-1">GIÁO VIÊN BỘ MÔN TIN HỌC</p>
                <div className="h-16" />
                <p className="font-bold text-xs">LÝ THÀNH LUÂN</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
