"use client";

import React from "react";
import { Subject, Topic } from "@/types";
import {
  BookOpen,
  Calculator,
  Atom,
  ChevronRight,
  CheckCircle2,
  X,
  Layers,
  GraduationCap,
  CloudDownload,
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  subjects: Subject[];
  selectedSubjectId: string;
  onSelectSubject: (subjectId: string) => void;
  selectedTopicId: string;
  onSelectTopic: (topicId: string) => void;
  onOpenDriveModal: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onClose,
  subjects,
  selectedSubjectId,
  onSelectSubject,
  selectedTopicId,
  onSelectTopic,
  onOpenDriveModal,
}) => {
  const currentSubject =
    subjects.find((s) => s.id === selectedSubjectId) || subjects[0];

  // Nhóm topics theo Chapter
  const groupedChapters = React.useMemo(() => {
    if (!currentSubject) return {};
    const groups: { [chapter: string]: Topic[] } = {};
    currentSubject.topics.forEach((t) => {
      if (!groups[t.chapter]) {
        groups[t.chapter] = [];
      }
      groups[t.chapter].push(t);
    });
    return groups;
  }, [currentSubject]);

  return (
    <>
      {/* Backdrop overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 transition-opacity md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar Drawer container */}
      <aside
        className={`fixed top-0 left-0 bottom-0 w-80 max-w-[85vw] bg-[#e6ecf5] z-50 transform transition-transform duration-300 ease-in-out flex flex-col shadow-neu-flat ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0 md:static md:z-0"
        }`}
      >
        {/* Sidebar Header */}
        <div className="p-4 border-b border-slate-300/60 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-neu-sm bg-[#e6ecf5] shadow-neu-flat flex items-center justify-center text-blue-600 font-bold">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-bold text-slate-800 text-base leading-tight">
                Cấu Trúc Bài Học
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                Ôn thi tốt nghiệp THPT
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-neu-sm bg-[#e6ecf5] shadow-neu-flat active:shadow-neu-inset text-slate-600 md:hidden"
            aria-label="Đóng menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Subject selector tab (Neumorphic segmented pills) */}
        <div className="p-3">
          <div className="text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wider px-1">
            Chọn môn học
          </div>
          <div className="grid grid-cols-2 gap-2">
            {subjects.map((subj) => {
              const isSelected = subj.id === selectedSubjectId;
              return (
                <button
                  key={subj.id}
                  onClick={() => onSelectSubject(subj.id)}
                  className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-neu-sm text-xs font-semibold transition-all ${
                    isSelected
                      ? "bg-[#e6ecf5] text-blue-600 shadow-neu-inset"
                      : "bg-[#e6ecf5] text-slate-600 shadow-neu-flat-sm active:shadow-neu-inset"
                  }`}
                >
                  {subj.id.includes("toan") ? (
                    <Calculator className="w-4 h-4" />
                  ) : (
                    <Atom className="w-4 h-4" />
                  )}
                  <span>{subj.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Google Drive Status Bar button */}
        <div className="px-3 pb-2">
          <button
            onClick={onOpenDriveModal}
            className="w-full flex items-center justify-between p-2.5 rounded-neu-sm bg-[#e6ecf5] shadow-neu-flat-xs active:shadow-neu-inset text-xs font-medium text-slate-700 hover:text-blue-600 transition"
          >
            <span className="flex items-center gap-2">
              <CloudDownload className="w-4 h-4 text-emerald-600" />
              <span>Nguồn Google Drive</span>
            </span>
            <span className="text-[10px] bg-emerald-100 text-emerald-700 font-semibold px-2 py-0.5 rounded-full">
              Khép kín
            </span>
          </button>
        </div>

        {/* Lesson & Topic Tree */}
        <div className="flex-1 overflow-y-auto px-3 py-2 space-y-4">
          {Object.entries(groupedChapters).map(([chapterTitle, topicList]) => (
            <div key={chapterTitle} className="space-y-2">
              <div className="flex items-center gap-2 px-1 text-xs font-bold text-slate-600">
                <Layers className="w-3.5 h-3.5 text-blue-500" />
                <span className="truncate">{chapterTitle}</span>
              </div>

              <div className="space-y-1.5 pl-1">
                {topicList.map((topic) => {
                  const isCurrent = topic.id === selectedTopicId;
                  return (
                    <button
                      key={topic.id}
                      onClick={() => {
                        onSelectTopic(topic.id);
                        onClose();
                      }}
                      className={`w-full text-left p-3 rounded-neu-sm transition-all flex items-center justify-between ${
                        isCurrent
                          ? "bg-[#e6ecf5] text-blue-700 shadow-neu-inset font-semibold"
                          : "bg-[#e6ecf5] text-slate-700 shadow-neu-flat-sm hover:text-blue-600 active:shadow-neu-inset"
                      }`}
                    >
                      <div className="pr-2">
                        <p className="text-xs leading-snug">{topic.name}</p>
                        <span className="text-[10px] text-slate-500 font-normal">
                          {topic.totalQuestions} câu hỏi chuẩn
                        </span>
                      </div>
                      <ChevronRight
                        className={`w-4 h-4 flex-shrink-0 transition-transform ${
                          isCurrent ? "text-blue-600 rotate-90" : "text-slate-400"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Footer info */}
        <div className="p-3 border-t border-slate-300/60 text-center">
          <p className="text-[11px] text-slate-500 font-medium">
            🔒 Tuyệt đối không bịa đặt nguồn ngoài
          </p>
        </div>
      </aside>
    </>
  );
};
