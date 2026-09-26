"use client";

import React, { useState } from "react";
import { Printer, X, FileText, CheckCircle, Award } from "lucide-react";
import { ExamDefinition, ExamVariant } from "../../types/examManagement";
import { soundManager } from "@/lib/audioEffects";

interface PaperExamPrintModalProps {
  isOpen: boolean;
  onClose: () => void;
  exam: ExamDefinition;
}

export function PaperExamPrintModal({
  isOpen,
  onClose,
  exam,
}: PaperExamPrintModalProps) {
  const [activeTab, setActiveTab] = useState<"exam_paper" | "answer_key">("exam_paper");
  const [selectedVariantIndex, setSelectedVariantIndex] = useState<number>(0);

  if (!isOpen || !exam) return null;

  const variants = exam.variants && exam.variants.length > 0
    ? exam.variants
    : [
        {
          code: "101",
          questions: exam.questions,
          answerKeyMap: {},
        } as ExamVariant,
      ];

  const currentVariant = variants[selectedVariantIndex] || variants[0];
  const questions = currentVariant.questions;
  const mcQuestions = questions.filter((q) => q.type === "multiple_choice");
  const tfQuestions = questions.filter((q) => q.type === "true_false");

  const handlePrint = () => {
    soundManager.playClick();
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
      <div className="w-full max-w-4xl max-h-[92vh] bg-[#e6ecf5] rounded-neu shadow-neu-flat border border-white/80 flex flex-col overflow-hidden">
        {/* Header Controls (Ẩn khi in ấn) */}
        <div className="p-4 border-b border-slate-300/60 flex items-center justify-between gap-3 bg-[#e6ecf5] flex-shrink-0 print:hidden">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-neu-sm bg-blue-100 flex items-center justify-center text-blue-700 shadow-neu-flat-xs">
              <Printer className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-black text-slate-800">
                In Đề Thi Chuẩn Bộ GD&amp;ĐT &amp; Phiếu Soi Đáp Án
              </h2>
              <p className="text-[11px] text-slate-500 font-medium">
                {exam.title} • {exam.durationMinutes} phút
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Chọn Mã Đề */}
            {variants.length > 1 && (
              <div className="flex items-center gap-1.5 bg-[#e6ecf5] px-2.5 py-1 rounded-neu-sm shadow-neu-inset-sm">
                <span className="text-[11px] font-bold text-slate-600">Mã Đề:</span>
                <select
                  value={selectedVariantIndex}
                  onChange={(e) => setSelectedVariantIndex(Number(e.target.value))}
                  className="bg-transparent text-xs font-black text-blue-700 outline-none cursor-pointer"
                >
                  {variants.map((v, idx) => (
                    <option key={v.code} value={idx}>
                      Mã {v.code}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Chuyển tab Đề thi / Đáp án */}
            <div className="flex rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset-sm p-1">
              <button
                type="button"
                onClick={() => {
                  soundManager.playClick();
                  setActiveTab("exam_paper");
                }}
                className={`px-3 py-1 rounded-md text-xs font-bold transition ${
                  activeTab === "exam_paper"
                    ? "bg-blue-600 text-white shadow-neu-blue"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Đề Thi Giấy A4
              </button>
              <button
                type="button"
                onClick={() => {
                  soundManager.playClick();
                  setActiveTab("answer_key");
                }}
                className={`px-3 py-1 rounded-md text-xs font-bold transition ${
                  activeTab === "answer_key"
                    ? "bg-blue-600 text-white shadow-neu-blue"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Phiếu Soi Đáp Án
              </button>
            </div>

            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-neu-sm bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-neu-blue active:shadow-neu-inset transition flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>In Ngay (Print)</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-[#e6ecf5] shadow-neu-flat-xs active:shadow-neu-inset text-slate-500 hover:text-slate-800"
              aria-label="Đóng"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Khung nội dung in ấn chuẩn sư phạm A4 */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-white text-black font-serif print:p-0 print:overflow-visible">
          {activeTab === "exam_paper" ? (
            /* TAB 1: BẢN IN ĐỀ THI GIẤY CHUẨN A4 */
            <div className="max-w-3xl mx-auto space-y-6 text-sm leading-relaxed">
              {/* Header chuẩn Bộ GD&ĐT */}
              <div className="flex justify-between items-start border-b-2 border-black pb-4">
                <div className="text-center w-1/2 pr-2">
                  <p className="font-bold text-xs uppercase tracking-wider">
                    SỞ GIÁO DỤC VÀ ĐÀO TẠO ĐỒNG THÁP
                  </p>
                  <p className="font-bold text-xs uppercase">
                    TRƯỜNG THPT NGUYỄN SINH SẮC
                  </p>
                  <p className="text-[11px] italic mt-1 font-sans">
                    Năm học: {exam.academicYear || "2025 - 2026"}
                  </p>
                </div>

                <div className="text-center w-1/2 pl-2">
                  <p className="font-black text-xs uppercase">
                    {exam.title.toUpperCase()}
                  </p>
                  <p className="font-bold text-xs uppercase">
                    MÔN THI: TIN HỌC (LỚP 12)
                  </p>
                  <p className="text-[11px] italic mt-1 font-sans">
                    Thời gian làm bài: {exam.durationMinutes} phút (Không kể phát đề)
                  </p>
                  <div className="inline-block mt-1 px-3 py-0.5 border border-black font-bold font-mono text-xs">
                    Mã đề thi: {currentVariant.code}
                  </div>
                </div>
              </div>

              {/* Khung điền thông tin thí sinh */}
              <div className="border border-black p-2.5 text-xs font-sans space-y-1.5">
                <div className="flex justify-between">
                  <p>Họ và tên thí sinh: ..........................................................................................</p>
                  <p>Lớp: ............................</p>
                </div>
                <div className="flex justify-between">
                  <p>Số báo danh: ...................................................................................................</p>
                  <p>Phòng thi: .....................</p>
                </div>
              </div>

              {/* PHẦN I */}
              {mcQuestions.length > 0 && (
                <div className="space-y-4">
                  <div className="border-b border-black/40 pb-1">
                    <p className="font-bold text-xs uppercase">
                      PHẦN I. Thí sinh trả lời từ câu 1 đến câu {mcQuestions.length}. Mỗi câu hỏi thí sinh chỉ chọn một phương án.
                    </p>
                  </div>

                  <div className="space-y-4 text-xs">
                    {mcQuestions.map((q, idx) => (
                      <div key={q.id || idx} className="space-y-1.5 break-inside-avoid">
                        <p className="font-bold">
                          Câu {idx + 1}. <span className="font-normal">{q.content}</span>
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 pl-4">
                          {q.options?.map((opt) => (
                            <div key={opt.id} className="flex items-start gap-1.5">
                              <span className="font-bold">{opt.id}.</span>
                              <span>{opt.content}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* PHẦN II */}
              {tfQuestions.length > 0 && (
                <div className="space-y-4 pt-4 border-t border-black/30">
                  <div className="border-b border-black/40 pb-1">
                    <p className="font-bold text-xs uppercase">
                      PHẦN II. Thí sinh trả lời từ câu 1 đến câu {tfQuestions.length}. Trong mỗi ý a), b), c), d) ở mỗi câu, thí sinh chọn Đúng hoặc Sai.
                    </p>
                  </div>

                  <div className="space-y-4 text-xs">
                    {tfQuestions.map((q, idx) => (
                      <div key={q.id || idx} className="space-y-2 break-inside-avoid">
                        <p className="font-bold">
                          Câu {idx + 1}. <span className="font-normal">{q.content}</span>
                        </p>
                        <div className="pl-4 space-y-1">
                          {(q.statements || q.tfItems || []).map((st: any) => (
                            <div key={st.id} className="flex items-start justify-between gap-3 border-b border-dotted border-slate-300 pb-0.5">
                              <div>
                                <span className="font-bold">{st.id})</span> {st.content}
                              </div>
                              <span className="text-[10px] text-slate-500 font-sans italic flex-shrink-0">
                                [ Đúng / Sai ]
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Footer đề thi */}
              <div className="text-center pt-8 font-sans font-bold text-xs space-y-1 border-t border-black/40">
                <p>--- HẾT ---</p>
                <p className="text-[11px] font-normal italic text-slate-600">
                  Cán bộ coi thi không giải thích gì thêm. Thí sinh không được sử dụng tài liệu.
                </p>
              </div>
            </div>
          ) : (
            /* TAB 2: BẢNG ĐÁP ÁN MA TRẬN & PHIẾU SOI ĐIỂM */
            <div className="max-w-2xl mx-auto space-y-6 text-sm font-sans">
              <div className="text-center space-y-1 pb-4 border-b-2 border-black">
                <p className="font-bold text-xs uppercase">SỞ GIÁO DỤC VÀ ĐÀO TẠO ĐỒNG THÁP - TRƯỜNG THPT NGUYỄN SINH SẮC</p>
                <h3 className="font-black text-base uppercase text-blue-900">
                  HƯỚNG DẪN CHẤM &amp; ĐÁP ÁN CHÍNH THỨC
                </h3>
                <p className="font-bold text-xs">
                  {exam.title.toUpperCase()} • MÃ ĐỀ: <span className="font-mono text-base text-rose-700 font-black">{currentVariant.code}</span>
                </p>
              </div>

              {/* Đáp án Phần I */}
              {mcQuestions.length > 0 && (
                <div className="space-y-2">
                  <h4 className="font-bold text-xs uppercase text-slate-800 bg-slate-100 p-1.5 border border-slate-300">
                    PHẦN I: TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN (Mỗi câu đúng được {(6.0 / mcQuestions.length).toFixed(2)} điểm)
                  </h4>
                  <div className="grid grid-cols-6 sm:grid-cols-8 gap-2 text-center text-xs">
                    {mcQuestions.map((q, idx) => (
                      <div key={q.id || idx} className="border border-slate-300 p-1 rounded bg-slate-50">
                        <span className="text-[10px] text-slate-500 block font-semibold">C{idx + 1}</span>
                        <span className="font-black text-sm text-blue-800">{q.correctOptionId || q.correctAnswer || "A"}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Đáp án Phần II */}
              {tfQuestions.length > 0 && (
                <div className="space-y-2 pt-2">
                  <h4 className="font-bold text-xs uppercase text-slate-800 bg-slate-100 p-1.5 border border-slate-300">
                    PHẦN II: TRẮC NGHIỆM ĐÚNG / SAI (Thang điểm Bộ GD&amp;ĐT: 1 ý = 0.1đ; 2 ý = 0.25đ; 3 ý = 0.5đ; 4 ý = 1.0đ)
                  </h4>
                  <div className="space-y-3">
                    {tfQuestions.map((q, idx) => (
                      <div key={q.id || idx} className="border border-slate-300 p-2.5 rounded bg-slate-50 space-y-1.5 text-xs">
                        <span className="font-bold text-indigo-900 block">Câu {idx + 1}:</span>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                          {(q.statements || q.tfItems || []).map((st: any) => {
                            const isCorrectVal = st.isCorrect !== undefined ? st.isCorrect : st.correctAnswer;
                            return (
                              <div key={st.id} className="flex items-center justify-between p-1 border rounded bg-white">
                                <span className="font-bold">Ý {st.id}:</span>
                                <span className={`font-black px-2 py-0.5 rounded text-[11px] ${
                                  isCorrectVal ? "bg-emerald-100 text-emerald-800" : "bg-rose-100 text-rose-800"
                                }`}>
                                  {isCorrectVal ? "ĐÚNG" : "SAI"}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="text-right pt-6 text-xs italic">
                <p>Tổ Chuyên Môn Tin Học - THPT Nguyễn Sinh Sắc</p>
                <p className="font-bold not-italic">GV: Lý Thành Luân</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
