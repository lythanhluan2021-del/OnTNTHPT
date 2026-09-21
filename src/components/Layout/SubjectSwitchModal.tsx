"use client";

import React from "react";
import { Subject } from "@/types";
import {
  Laptop,
  Calculator,
  Atom,
  CheckCircle2,
  X,
  Sparkles,
  BookOpen,
  ArrowRight,
} from "lucide-react";

interface SubjectSwitchModalProps {
  isOpen: boolean;
  onClose: () => void;
  subjects: Subject[];
  selectedSubjectId: string;
  onSelectSubject: (subjectId: string) => void;
}

export const SubjectSwitchModal: React.FC<SubjectSwitchModalProps> = ({
  isOpen,
  onClose,
  subjects,
  selectedSubjectId,
  onSelectSubject,
}) => {
  if (!isOpen) return null;

  const getSubjectIcon = (subjectId: string) => {
    if (subjectId.includes("tin")) {
      return <Laptop className="w-5 h-5 text-indigo-600" />;
    } else if (subjectId.includes("toan")) {
      return <Calculator className="w-5 h-5 text-blue-600" />;
    } else {
      return <Atom className="w-5 h-5 text-cyan-600" />;
    }
  };

  const getSubjectTag = (subjectId: string) => {
    if (subjectId.includes("tin")) {
      return { text: "File định hướng 2026", color: "bg-indigo-100 text-indigo-800 border-indigo-200" };
    } else if (subjectId.includes("toan")) {
      return { text: "Chuẩn BGD", color: "bg-blue-100 text-blue-800 border-blue-200" };
    } else {
      return { text: "Chuẩn BGD", color: "bg-cyan-100 text-cyan-800 border-cyan-200" };
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-md bg-[#e6ecf5] rounded-neu shadow-neu-flat p-5 space-y-4">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-300/60 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-neu-sm bg-[#e6ecf5] shadow-neu-flat flex items-center justify-center text-blue-600">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-800 text-sm sm:text-base">
                Chuyển Đổi Môn Ôn Luyện
              </h3>
              <p className="text-[11px] text-slate-500">
                Chọn môn học để làm bài theo cấu trúc chuẩn
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-neu-sm bg-[#e6ecf5] shadow-neu-flat active:shadow-neu-inset text-slate-600"
            aria-label="Đóng"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Subjects List */}
        <div className="space-y-3">
          {subjects.map((subj) => {
            const isSelected = subj.id === selectedSubjectId;
            const tag = getSubjectTag(subj.id);

            return (
              <button
                key={subj.id}
                onClick={() => {
                  onSelectSubject(subj.id);
                  onClose();
                }}
                className={`w-full text-left p-4 rounded-neu-sm transition-all flex items-center justify-between ${
                  isSelected
                    ? "bg-[#e6ecf5] shadow-neu-inset border-2 border-blue-500/50"
                    : "bg-[#e6ecf5] shadow-neu-flat-sm active:shadow-neu-inset hover:border-slate-300"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-neu-sm bg-[#e6ecf5] shadow-neu-flat-xs flex items-center justify-center flex-shrink-0">
                    {getSubjectIcon(subj.id)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-800 text-sm">
                        {subj.name}
                      </span>
                      <span
                        className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${tag.color}`}
                      >
                        {tag.text}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 pt-0.5">
                      {subj.topics.length} chuyên đề ôn tập trọng tâm
                    </p>
                  </div>
                </div>

                {isSelected ? (
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <ArrowRight className="w-4 h-4 text-slate-400 flex-shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        <div className="p-2.5 rounded-neu-sm bg-blue-50/60 border border-blue-200/60 text-[11px] text-blue-800 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-blue-600 flex-shrink-0" />
          <span>
            Hệ thống lưu trữ lịch sử và phân tích bài làm riêng biệt cho từng môn học.
          </span>
        </div>
      </div>
    </div>
  );
};
