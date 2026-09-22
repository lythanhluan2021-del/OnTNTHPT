"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Subject, Topic } from "@/types";
import { soundManager } from "@/lib/audioEffects";
import {
  BookOpen,
  Calculator,
  Atom,
  Laptop,
  ChevronRight,
  ChevronDown,
  X,
  Layers,
  GraduationCap,
  CloudDownload,
  Search,
  Folder,
  FolderOpen,
  PanelLeftClose,
  Sparkles,
  Calendar,
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

  // Trạng thái tìm kiếm bài học
  const [searchQuery, setSearchQuery] = useState("");

  // Trạng thái thu gọn / mở rộng từng chương (mặc định mở chương có topic đang chọn)
  const [expandedChapters, setExpandedChapters] = useState<Record<string, boolean>>({});

  // Helper bóc tách Tuần học và Tên bài học rõ ràng
  const parseTopicInfo = (rawName: string) => {
    // Nhận diện định dạng (Tuần X) hoặc (Tuần X – Y)
    const weekMatch = rawName.match(/\((Tuần\s*[\d\s–-]+)\)/i);
    const week = weekMatch ? weekMatch[1].trim() : null;
    // Bỏ phần (Tuần ...) ở cuối tên bài để hiển thị độc lập đẹp mắt
    const cleanName = rawName.replace(/\s*\((Tuần\s*[\d\s–-]+)\)\s*$/i, "").trim();
    return { week, cleanName };
  };

  // Helper bóc tách Tuần học và Tên chương / Chủ đề lớn
  const parseChapterInfo = (rawChapter: string) => {
    const weekMatch = rawChapter.match(/\((Tuần\s*[\d\s–-]+)\)/i);
    const week = weekMatch ? weekMatch[1].trim() : null;
    const cleanChapter = rawChapter.replace(/\s*\((Tuần\s*[\d\s–-]+)\)\s*$/i, "").trim();
    return { week, cleanChapter };
  };

  // Nhóm topics theo Chapter
  const groupedChapters = useMemo(() => {
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

  // Lọc topics theo từ khóa tìm kiếm
  const filteredGroupedChapters = useMemo(() => {
    if (!searchQuery.trim()) return groupedChapters;
    const q = searchQuery.toLowerCase().trim();
    const filtered: { [chapter: string]: Topic[] } = {};

    Object.entries(groupedChapters).forEach(([chapter, topics]) => {
      const matchChapter = chapter.toLowerCase().includes(q);
      const matchingTopics = topics.filter(
        (t) =>
          matchChapter ||
          t.name.toLowerCase().includes(q) ||
          t.chapter.toLowerCase().includes(q)
      );
      if (matchingTopics.length > 0) {
        filtered[chapter] = matchChapter ? topics : matchingTopics;
      }
    });

    return filtered;
  }, [groupedChapters, searchQuery]);

  // Tự động mở tất cả khi người dùng tìm kiếm, hoặc mở chương có topic đang chọn
  useEffect(() => {
    if (searchQuery.trim()) {
      const allOpen: Record<string, boolean> = {};
      Object.keys(filteredGroupedChapters).forEach((ch) => {
        allOpen[ch] = true;
      });
      setExpandedChapters(allOpen);
    }
  }, [searchQuery, filteredGroupedChapters]);

  // Khởi tạo các chương mở mặc định khi đổi môn học hoặc tải trang
  useEffect(() => {
    if (!currentSubject) return;
    const initial: Record<string, boolean> = {};
    currentSubject.topics.forEach((t) => {
      initial[t.chapter] = true;
    });
    setExpandedChapters(initial);
  }, [selectedSubjectId, currentSubject]);

  // Đảm bảo chương chứa topic đang chọn luôn được mở rộng
  useEffect(() => {
    if (!currentSubject) return;
    const activeChapter = currentSubject.topics.find((t) => t.id === selectedTopicId)?.chapter;
    if (activeChapter) {
      setExpandedChapters((prev) => ({
        ...prev,
        [activeChapter]: true,
      }));
    }
  }, [selectedTopicId, currentSubject]);

  // Toggle thu gọn / mở rộng 1 chương cụ thể
  const toggleChapter = (chapterTitle: string) => {
    soundManager.playClick();
    setExpandedChapters((prev) => ({
      ...prev,
      [chapterTitle]: !prev[chapterTitle],
    }));
  };

  // Mở tất cả / Thu gọn tất cả các chương
  const handleToggleAll = (expand: boolean) => {
    soundManager.playClick();
    const nextState: Record<string, boolean> = {};
    Object.keys(groupedChapters).forEach((ch) => {
      nextState[ch] = expand;
    });
    setExpandedChapters(nextState);
  };

  // Tổng số bài học
  const totalTopicsCount = currentSubject?.topics.length || 0;

  return (
    <>
      {/* Backdrop overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 transition-opacity md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar Drawer container (hỗ trợ thu gọn/mở rộng mượt mà trên cả desktop và mobile) */}
      <aside
        className={`fixed top-0 left-0 bottom-0 w-80 max-w-[85vw] bg-[#e6ecf5] z-50 transform transition-transform duration-300 ease-in-out flex flex-col shadow-neu-flat border-r border-slate-300/60 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="p-3.5 sm:p-4 border-b border-slate-300/60 flex items-center justify-between">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-neu-sm bg-[#e6ecf5] shadow-neu-flat flex items-center justify-center text-blue-600 font-bold">
              <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h2 className="font-bold text-slate-800 text-sm sm:text-base leading-tight">
                Cấu Trúc Bài Học
              </h2>
              <p className="text-[11px] sm:text-xs text-slate-500 font-medium">
                Ôn thi tốt nghiệp THPT
              </p>
            </div>
          </div>

          {/* Nút thu gọn sidebar */}
          <button
            onClick={() => {
              soundManager.playClick();
              onClose();
            }}
            className="p-2 rounded-neu-sm bg-[#e6ecf5] shadow-neu-flat active:shadow-neu-inset text-slate-600 hover:text-blue-600 transition"
            aria-label="Thu gọn danh mục bài học"
            title="Thu gọn sidebar"
          >
            <PanelLeftClose className="w-4 h-4 hidden md:block" />
            <X className="w-4 h-4 md:hidden" />
          </button>
        </div>

        {/* Subject selector tab (Neumorphic segmented pills) */}
        <div className="p-3 pb-2">
          <div className="text-[11px] font-bold text-slate-500 mb-1.5 uppercase tracking-wider px-1">
            Chọn môn học
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            {subjects.map((subj) => {
              const isSelected = subj.id === selectedSubjectId;
              return (
                <button
                  key={subj.id}
                  onClick={() => {
                    soundManager.playClick();
                    onSelectSubject(subj.id);
                  }}
                  className={`flex flex-col items-center justify-center gap-1 py-2 px-1.5 rounded-neu-sm text-[11px] font-semibold transition-all ${
                    isSelected
                      ? "bg-[#e6ecf5] text-blue-600 shadow-neu-inset"
                      : "bg-[#e6ecf5] text-slate-600 shadow-neu-flat-sm active:shadow-neu-inset hover:text-blue-600"
                  }`}
                >
                  {subj.id.includes("tin") ? (
                    <Laptop className="w-4 h-4 text-indigo-600" />
                  ) : subj.id.includes("toan") ? (
                    <Calculator className="w-4 h-4 text-blue-600" />
                  ) : (
                    <Atom className="w-4 h-4 text-cyan-600" />
                  )}
                  <span className="truncate w-full text-center leading-tight">
                    {subj.name.replace(" học", "")}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Google Drive Status Bar button */}
        <div className="px-3 pb-2">
          <button
            onClick={() => {
              soundManager.playClick();
              onOpenDriveModal();
            }}
            className="w-full flex items-center justify-between p-2 rounded-neu-sm bg-[#e6ecf5] shadow-neu-flat-xs active:shadow-neu-inset text-xs font-medium text-slate-700 hover:text-blue-600 transition"
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

        {/* Search box for quick lesson filter */}
        <div className="px-3 pb-2">
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm bài học, chủ đề..."
              className="w-full pl-8 pr-7 py-1.5 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset-sm text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>

        {/* Lesson Controls: Header & Expand/Collapse All */}
        <div className="px-3 py-1 flex items-center justify-between border-t border-slate-300/40 text-[11px] font-semibold text-slate-600">
          <span className="inline-flex items-center gap-1.5 uppercase tracking-wider font-bold text-slate-700 text-[10px]">
            <BookOpen className="w-3.5 h-3.5 text-blue-600" />
            <span>Bài học ({totalTopicsCount})</span>
          </span>

          <div className="flex items-center gap-1 text-[11px]">
            <button
              onClick={() => handleToggleAll(true)}
              className="hover:text-blue-600 text-slate-600 px-1.5 py-0.5 rounded hover:bg-slate-200/60 transition"
              title="Mở rộng tất cả các chương bài học"
            >
              Mở tất cả
            </button>
            <span className="text-slate-400">•</span>
            <button
              onClick={() => handleToggleAll(false)}
              className="hover:text-blue-600 text-slate-600 px-1.5 py-0.5 rounded hover:bg-slate-200/60 transition"
              title="Thu gọn tất cả các chương bài học"
            >
              Thu gọn
            </button>
          </div>
        </div>

        {/* Lesson & Topic Tree (Accordion thu gọn / mở rộng) */}
        <div className="flex-1 overflow-y-auto px-3 py-1.5 space-y-2.5">
          {Object.keys(filteredGroupedChapters).length === 0 ? (
            <div className="p-4 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset-sm text-center space-y-1 my-2">
              <p className="text-xs text-slate-500">
                Không tìm thấy bài học nào phù hợp với &quot;{searchQuery}&quot;.
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="text-xs text-blue-600 font-bold hover:underline"
              >
                Xóa tìm kiếm
              </button>
            </div>
          ) : (
            Object.entries(filteredGroupedChapters).map(([chapterTitle, topicList]) => {
              const isExpanded = expandedChapters[chapterTitle] ?? true;
              const hasActiveTopic = topicList.some((t) => t.id === selectedTopicId);
              const totalChapterQuestions = topicList.reduce(
                (acc, t) => acc + (t.totalQuestions || 0),
                0
              );
              const { week: chapterWeek, cleanChapter } = parseChapterInfo(chapterTitle);

              return (
                <div
                  key={chapterTitle}
                  className={`rounded-neu-sm bg-[#e6ecf5] transition-all overflow-hidden ${
                    hasActiveTopic ? "shadow-neu-flat border border-blue-300/80" : "shadow-neu-flat-xs"
                  }`}
                >
                  {/* Accordion Chapter Header - CẤP BẬC CHA (TIÊU ĐỀ LỚN) */}
                  <button
                    onClick={() => toggleChapter(chapterTitle)}
                    className={`w-full text-left p-3 flex items-center justify-between gap-2.5 transition-colors ${
                      hasActiveTopic
                        ? "bg-blue-100/50 text-blue-950"
                        : "hover:bg-slate-200/50 text-slate-800"
                    }`}
                    aria-expanded={isExpanded}
                  >
                    <div className="flex items-start gap-2.5 min-w-0 flex-1">
                      <div
                        className={`p-1.5 rounded-neu-xs shadow-neu-flat-xs flex-shrink-0 mt-0.5 ${
                          hasActiveTopic ? "text-blue-600 bg-white" : "text-slate-600 bg-[#e6ecf5]"
                        }`}
                      >
                        {isExpanded ? (
                          <FolderOpen className="w-4 h-4 text-blue-600" />
                        ) : (
                          <Folder className="w-4 h-4 text-slate-500" />
                        )}
                      </div>
                      <div className="min-w-0 flex-1 space-y-1">
                        {/* Hàng nhãn chương: Huy hiệu tuần học lớn (nếu có) */}
                        {chapterWeek && (
                          <div className="flex items-center gap-1.5">
                            <span className="inline-flex items-center gap-1 text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 border border-blue-200/80 shadow-neu-flat-xs">
                              <Calendar className="w-3 h-3 text-blue-600 flex-shrink-0" />
                              <span>{chapterWeek}</span>
                            </span>
                          </div>
                        )}
                        <h3 className="text-xs font-black text-slate-800 leading-snug break-words tracking-tight">
                          {cleanChapter}
                        </h3>
                        <div className="flex items-center gap-1.5 text-[10px] text-slate-500 font-semibold">
                          <span>{topicList.length} bài học</span>
                          <span>•</span>
                          <span>{totalChapterQuestions} câu hỏi</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-1 rounded-neu-xs text-slate-500 shadow-neu-flat-xs flex-shrink-0 self-center">
                      {isExpanded ? (
                        <ChevronDown className="w-3.5 h-3.5 text-blue-600" />
                      ) : (
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                      )}
                    </div>
                  </button>

                  {/* Danh sách các bài học con - CẤP BẬC CON (TIÊU ĐỀ NHỎ BÊN TRONG CÓ NHÁNH CÂY TREE-LINE) */}
                  {isExpanded && (
                    <div className="p-2.5 pt-2 bg-slate-200/30 border-t border-slate-200/90">
                      {/* Vùng nhánh cây phân cấp (Tree Branch Guide) */}
                      <div className="relative pl-3.5 ml-2 border-l-2 border-slate-300/80 space-y-2 py-0.5">
                        {topicList.map((topic) => {
                          const isCurrent = topic.id === selectedTopicId;
                          const { week: topicWeek, cleanName } = parseTopicInfo(topic.name);

                          return (
                            <div key={topic.id} className="relative">
                              {/* Đường nhánh ngang nối từ cây phân cấp vào thẻ bài học con */}
                              <span
                                className={`absolute -left-[14px] top-4 w-2.5 h-0.5 transition-colors ${
                                  isCurrent ? "bg-blue-600" : "bg-slate-300/90"
                                }`}
                              />

                              <button
                                onClick={() => {
                                  soundManager.playClick();
                                  onSelectTopic(topic.id);
                                  if (typeof window !== "undefined" && window.innerWidth < 768) {
                                    onClose();
                                  }
                                }}
                                className={`w-full text-left p-2.5 rounded-neu-sm transition-all flex items-start justify-between gap-2 ${
                                  isCurrent
                                    ? "bg-blue-50 text-blue-900 shadow-neu-inset font-bold border-l-3 border-blue-600"
                                    : "bg-[#e6ecf5] text-slate-700 shadow-neu-flat-xs hover:text-blue-700 active:shadow-neu-inset"
                                }`}
                              >
                                <div className="flex-1 min-w-0 space-y-1.5">
                                  {/* Tên bài học rõ ràng */}
                                  <p className="text-xs font-bold text-slate-800 leading-snug break-words">
                                    {cleanName}
                                  </p>

                                  {/* Hàng thông tin chi tiết bài học con */}
                                  <div className="flex items-center gap-1.5 flex-wrap">
                                    {/* Tuần riêng nếu khác tuần chương */}
                                    {topicWeek && topicWeek !== chapterWeek && (
                                      <span className="inline-flex items-center gap-1 text-[10px] font-extrabold px-1.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                                        <Calendar className="w-2.5 h-2.5 text-blue-600" />
                                        <span>{topicWeek}</span>
                                      </span>
                                    )}

                                    {/* Huy hiệu Lý thuyết nếu có */}
                                    {topic.hasTheory && (
                                      <span className="inline-flex items-center gap-1 text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-200/80 shadow-neu-flat-xs">
                                        <BookOpen className="w-2.5 h-2.5 text-amber-600" />
                                        <span>Lý thuyết</span>
                                      </span>
                                    )}

                                    {/* Phân rã số lượng câu hỏi */}
                                    <span className="text-[10px] text-slate-500 font-medium">
                                      {topic.mcCount && topic.tfCount ? (
                                        <span>
                                          {topic.totalQuestions} câu{" "}
                                          <span className="text-slate-400 font-normal">
                                            ({topic.mcCount} TN • {topic.tfCount} Đ/S)
                                          </span>
                                        </span>
                                      ) : (
                                        <span>{topic.totalQuestions} câu hỏi</span>
                                      )}
                                    </span>
                                  </div>
                                </div>

                                <div className="pt-1 flex-shrink-0">
                                  <ChevronRight
                                    className={`w-4 h-4 transition-transform ${
                                      isCurrent ? "text-blue-600 translate-x-0.5" : "text-slate-400"
                                    }`}
                                  />
                                </div>
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div className="p-2.5 border-t border-slate-300/60 text-center flex items-center justify-center gap-1.5 text-[11px] text-slate-500 font-medium">
          <Sparkles className="w-3 h-3 text-blue-500" />
          <span>Hệ thống tự động đồng bộ tài liệu</span>
        </div>
      </aside>
    </>
  );
};
