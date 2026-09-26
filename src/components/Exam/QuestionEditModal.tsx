"use client";

import React, { useState } from "react";
import { X, Check, CheckCircle2, XCircle, Edit3 } from "lucide-react";
import { MockExamQuestion, DifficultyLevel, MockExamOption, MockExamStatement } from "../../types";
import { soundManager } from "@/lib/audioEffects";

interface QuestionEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  question: MockExamQuestion | null;
  onSave: (updatedQuestion: MockExamQuestion) => void;
}

export function QuestionEditModal({
  isOpen,
  onClose,
  question,
  onSave,
}: QuestionEditModalProps) {
  if (!isOpen || !question) return null;

  const [content, setContent] = useState(question.content);
  const [difficulty, setDifficulty] = useState<DifficultyLevel>(question.difficulty || "ThongHieu");
  const [explanation, setExplanation] = useState(question.explanation || "");

  // Multiple choice options
  const [options, setOptions] = useState<MockExamOption[]>(
    question.options || [
      { id: "A", content: "" },
      { id: "B", content: "" },
      { id: "C", content: "" },
      { id: "D", content: "" },
    ]
  );
  const [correctOptionId, setCorrectOptionId] = useState(
    question.correctOptionId || question.correctAnswer || "A"
  );

  // True / False statements
  const initialStatements: MockExamStatement[] = question.statements || (question.tfItems?.map(it => ({ id: it.id, content: it.content, isCorrect: it.correctAnswer }))) || [
    { id: "a", content: "", isCorrect: true },
    { id: "b", content: "", isCorrect: false },
    { id: "c", content: "", isCorrect: true },
    { id: "d", content: "", isCorrect: false },
  ];
  const [statements, setStatements] = useState<MockExamStatement[]>(initialStatements);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updated: MockExamQuestion = {
      ...question,
      content,
      difficulty,
      explanation,
      options: question.type === "multiple_choice" ? options : undefined,
      correctOptionId: question.type === "multiple_choice" ? correctOptionId : undefined,
      correctAnswer: question.type === "multiple_choice" ? (correctOptionId as "A" | "B" | "C" | "D") : undefined,
      statements: question.type === "true_false" ? statements : undefined,
    };
    onSave(updated);
    soundManager.playSuccess();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
      <div className="w-full max-w-2xl bg-[#e6ecf5] rounded-neu shadow-neu-flat border border-white/80 p-5 sm:p-6 space-y-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between border-b border-slate-300/60 pb-3">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-neu-sm bg-blue-100 flex items-center justify-center text-blue-700 shadow-neu-flat-xs">
              <Edit3 className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm font-black text-slate-800">
                Rà Soát &amp; Biên Tập Câu Hỏi
              </h2>
              <p className="text-[11px] text-slate-500 font-medium">
                {question.type === "multiple_choice" ? "Phần I: 4 Lựa chọn" : "Phần II: Đúng / Sai"}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-[#e6ecf5] shadow-neu-flat-xs active:shadow-neu-inset text-slate-500 hover:text-slate-800"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          {/* Mức độ nhận thức */}
          <div className="flex items-center justify-between">
            <span className="font-bold text-slate-700">Mức độ nhận thức:</span>
            <div className="flex gap-1.5">
              {[
                { key: "NhanBiet" as DifficultyLevel, label: "Nhận biết" },
                { key: "ThongHieu" as DifficultyLevel, label: "Thông hiểu" },
                { key: "VanDung" as DifficultyLevel, label: "Vận dụng" },
                { key: "VanDungCao" as DifficultyLevel, label: "Vận dụng cao" },
              ].map(({ key, label }) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setDifficulty(key)}
                  className={`px-3 py-1 rounded-neu-sm text-xs font-black transition ${
                    difficulty === key
                      ? "bg-blue-600 text-white shadow-neu-blue"
                      : "bg-[#e6ecf5] text-slate-600 shadow-neu-flat-xs hover:bg-white"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Nội dung câu hỏi */}
          <div className="space-y-1">
            <label className="font-bold text-slate-700">Nội dung câu hỏi:</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={3}
              className="w-full p-3 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset text-xs text-slate-800 outline-none leading-relaxed"
              required
            />
          </div>

          {/* Phương án Phần 1 */}
          {question.type === "multiple_choice" && (
            <div className="space-y-2">
              <label className="font-bold text-slate-700">
                Các phương án lựa chọn (Tích chọn phương án đúng):
              </label>
              <div className="space-y-2">
                {options.map((opt, idx) => (
                  <div key={opt.id} className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setCorrectOptionId(opt.id)}
                      className={`w-7 h-7 rounded-full flex items-center justify-center font-black text-xs flex-shrink-0 transition ${
                        correctOptionId === opt.id
                          ? "bg-emerald-600 text-white shadow-xs"
                          : "bg-slate-200 text-slate-700 hover:bg-slate-300"
                      }`}
                      title={correctOptionId === opt.id ? "Đáp án đúng" : "Chọn làm đáp án đúng"}
                    >
                      {opt.id}
                    </button>
                    <input
                      type="text"
                      value={opt.content}
                      onChange={(e) => {
                        const updated = [...options];
                        updated[idx].content = e.target.value;
                        setOptions(updated);
                      }}
                      className="flex-1 px-3 py-2 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset text-xs text-slate-800 outline-none"
                      required
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Các ý Đúng/Sai Phần 2 */}
          {question.type === "true_false" && (
            <div className="space-y-2">
              <label className="font-bold text-slate-700">
                4 ý trắc nghiệm Đúng / Sai:
              </label>
              <div className="space-y-2.5">
                {statements.map((st, idx) => (
                  <div key={st.id} className="p-2.5 rounded-neu-sm bg-white/70 border border-slate-200 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-black text-indigo-900 uppercase">Ý {st.id})</span>
                      <div className="flex gap-1">
                        <button
                          type="button"
                          onClick={() => {
                            const updated = [...statements];
                            updated[idx].isCorrect = true;
                            setStatements(updated);
                          }}
                          className={`px-2.5 py-0.5 rounded text-[11px] font-black transition flex items-center gap-1 ${
                            st.isCorrect ? "bg-emerald-600 text-white shadow-xs" : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          <CheckCircle2 className="w-3 h-3" /> ĐÚNG
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            const updated = [...statements];
                            updated[idx].isCorrect = false;
                            setStatements(updated);
                          }}
                          className={`px-2.5 py-0.5 rounded text-[11px] font-black transition flex items-center gap-1 ${
                            !st.isCorrect ? "bg-rose-600 text-white shadow-xs" : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          <XCircle className="w-3 h-3" /> SAI
                        </button>
                      </div>
                    </div>
                    <textarea
                      value={st.content}
                      onChange={(e) => {
                        const updated = [...statements];
                        updated[idx].content = e.target.value;
                        setStatements(updated);
                      }}
                      rows={2}
                      className="w-full p-2 rounded bg-[#e6ecf5] shadow-neu-inset text-xs text-slate-800 outline-none resize-none"
                      required
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Lời giải thích */}
          <div className="space-y-1">
            <label className="font-bold text-slate-700">Lời giải chi tiết / Hướng dẫn tư duy:</label>
            <textarea
              value={explanation}
              onChange={(e) => setExplanation(e.target.value)}
              rows={2}
              placeholder="Giải thích vì sao chọn đáp án này..."
              className="w-full p-2.5 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset text-xs text-slate-800 outline-none leading-relaxed"
            />
          </div>

          <div className="pt-2 flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-neu-sm bg-[#e6ecf5] shadow-neu-flat-xs text-xs font-bold text-slate-600"
            >
              Hủy Bỏ
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-neu-sm bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-neu-blue flex items-center gap-1.5"
            >
              <Check className="w-3.5 h-3.5" />
              <span>Lưu Thay Đổi</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
