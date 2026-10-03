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
  Search,
  Folder,
  FolderOpen,
  PanelLeftClose,
  Sparkles,
  Calendar,
} from "lucide-react";

export interface WeekColorTheme {
  name: string;
  // Card-level Chroma-Neumorphism styling
  cardNeumorphicBg: string;
  cardBorderNormal: string;
  cardBorderActive: string;
  cardGlowActive: string;

  // Header and icon styling
  folderText: string;
  folderActiveBg: string;
  chevronActive: string;

  // Badge
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  badgeIcon: string;

  // Inner Indented Tray
  trayBg: string;
  trayBorder: string;
  treeLineActive: string;

  // Sub-card
  subCardActiveBg: string;
  subCardActiveText: string;
  subCardActiveBorder: string;
  subCardActiveChevron: string;
  dotColor: string;
}

const WEEK_COLOR_PALETTES: WeekColorTheme[] = [
  // 1. Cyan / Sky Blue (Tuần 2 - 6: Python)
  {
    name: "Sky Blue",
    cardNeumorphicBg: "bg-gradient-to-br from-sky-100/70 via-sky-50/40 to-[#e6ecf5] dark:from-sky-950/40 dark:via-[#161d27] dark:to-[#141923]",
    cardBorderNormal: "border-sky-200/70 dark:border-sky-900/50",
    cardBorderActive: "border-sky-400 dark:border-sky-500",
    cardGlowActive: "shadow-[0_0_15px_rgba(56,189,248,0.22)]",
    badgeBg: "bg-sky-100 dark:bg-sky-950/70",
    badgeText: "text-sky-800 dark:text-sky-300",
    badgeBorder: "border-sky-300/80 dark:border-sky-800",
    badgeIcon: "text-sky-600 dark:text-sky-400",
    folderText: "text-sky-600 dark:text-sky-400",
    folderActiveBg: "bg-sky-100/80 dark:bg-sky-900/60 text-sky-700 dark:text-sky-300",
    chevronActive: "text-sky-600 dark:text-sky-400",
    trayBg: "bg-sky-100/25 dark:bg-sky-950/20",
    trayBorder: "border-sky-200/80 dark:border-sky-900/60",
    treeLineActive: "bg-sky-500 dark:bg-sky-400",
    subCardActiveBg: "bg-sky-50/90 dark:bg-sky-950/80",
    subCardActiveText: "text-sky-950 dark:text-sky-100",
    subCardActiveBorder: "border-l-4 border-sky-500 dark:border-sky-400",
    subCardActiveChevron: "text-sky-600 dark:text-sky-400",
    dotColor: "bg-sky-500",
  },
  // 2. Purple / Violet (Tuần 7: Trí tuệ nhân tạo)
  {
    name: "Violet",
    cardNeumorphicBg: "bg-gradient-to-br from-purple-100/70 via-purple-50/40 to-[#e6ecf5] dark:from-purple-950/40 dark:via-[#181627] dark:to-[#141923]",
    cardBorderNormal: "border-purple-200/70 dark:border-purple-900/50",
    cardBorderActive: "border-purple-400 dark:border-purple-500",
    cardGlowActive: "shadow-[0_0_15px_rgba(192,132,252,0.22)]",
    badgeBg: "bg-purple-100 dark:bg-purple-950/70",
    badgeText: "text-purple-800 dark:text-purple-300",
    badgeBorder: "border-purple-300/80 dark:border-purple-800",
    badgeIcon: "text-purple-600 dark:text-purple-400",
    folderText: "text-purple-600 dark:text-purple-400",
    folderActiveBg: "bg-purple-100/80 dark:bg-purple-900/60 text-purple-700 dark:text-purple-300",
    chevronActive: "text-purple-600 dark:text-purple-400",
    trayBg: "bg-purple-100/25 dark:bg-purple-950/20",
    trayBorder: "border-purple-200/80 dark:border-purple-900/60",
    treeLineActive: "bg-purple-500 dark:bg-purple-400",
    subCardActiveBg: "bg-purple-50/90 dark:bg-purple-950/80",
    subCardActiveText: "text-purple-950 dark:text-purple-100",
    subCardActiveBorder: "border-l-4 border-purple-500 dark:border-purple-400",
    subCardActiveChevron: "text-purple-600 dark:text-purple-400",
    dotColor: "bg-purple-500",
  },
  // 3. Emerald / Mint Green (Tuần 8 - 10: Mạng máy tính & Internet)
  {
    name: "Emerald",
    cardNeumorphicBg: "bg-gradient-to-br from-emerald-100/70 via-emerald-50/40 to-[#e6ecf5] dark:from-emerald-950/40 dark:via-[#141e1c] dark:to-[#141923]",
    cardBorderNormal: "border-emerald-200/70 dark:border-emerald-900/50",
    cardBorderActive: "border-emerald-400 dark:border-emerald-500",
    cardGlowActive: "shadow-[0_0_15px_rgba(52,211,153,0.22)]",
    badgeBg: "bg-emerald-100 dark:bg-emerald-950/70",
    badgeText: "text-emerald-800 dark:text-emerald-300",
    badgeBorder: "border-emerald-300/80 dark:border-emerald-800",
    badgeIcon: "text-emerald-600 dark:text-emerald-400",
    folderText: "text-emerald-600 dark:text-emerald-400",
    folderActiveBg: "bg-emerald-100/80 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300",
    chevronActive: "text-emerald-600 dark:text-emerald-400",
    trayBg: "bg-emerald-100/25 dark:bg-emerald-950/20",
    trayBorder: "border-emerald-200/80 dark:border-emerald-900/60",
    treeLineActive: "bg-emerald-500 dark:bg-emerald-400",
    subCardActiveBg: "bg-emerald-50/90 dark:bg-emerald-950/80",
    subCardActiveText: "text-emerald-950 dark:text-emerald-100",
    subCardActiveBorder: "border-l-4 border-emerald-500 dark:border-emerald-400",
    subCardActiveChevron: "text-emerald-600 dark:text-emerald-400",
    dotColor: "bg-emerald-500",
  },
  // 4. Amber / Gold (Tuần 11 - 13: Giao thức mạng & An toàn)
  {
    name: "Amber",
    cardNeumorphicBg: "bg-gradient-to-br from-amber-100/70 via-amber-50/40 to-[#e6ecf5] dark:from-amber-950/40 dark:via-[#1e1b14] dark:to-[#141923]",
    cardBorderNormal: "border-amber-200/70 dark:border-amber-900/50",
    cardBorderActive: "border-amber-400 dark:border-amber-500",
    cardGlowActive: "shadow-[0_0_15px_rgba(251,191,36,0.22)]",
    badgeBg: "bg-amber-100 dark:bg-amber-950/70",
    badgeText: "text-amber-800 dark:text-amber-300",
    badgeBorder: "border-amber-300/80 dark:border-amber-800",
    badgeIcon: "text-amber-600 dark:text-amber-400",
    folderText: "text-amber-600 dark:text-amber-400",
    folderActiveBg: "bg-amber-100/80 dark:bg-amber-900/60 text-amber-700 dark:text-amber-300",
    chevronActive: "text-amber-600 dark:text-amber-400",
    trayBg: "bg-amber-100/25 dark:bg-amber-950/20",
    trayBorder: "border-amber-200/80 dark:border-amber-900/60",
    treeLineActive: "bg-amber-500 dark:bg-amber-400",
    subCardActiveBg: "bg-amber-50/90 dark:bg-amber-950/80",
    subCardActiveText: "text-amber-950 dark:text-amber-100",
    subCardActiveBorder: "border-l-4 border-amber-500 dark:border-amber-400",
    subCardActiveChevron: "text-amber-600 dark:text-amber-400",
    dotColor: "bg-amber-500",
  },
  // 5. Indigo / Deep Cobalt (Tuần 14 - 17: Thiết kế Web HTML/CSS)
  {
    name: "Indigo",
    cardNeumorphicBg: "bg-gradient-to-br from-indigo-100/70 via-indigo-50/40 to-[#e6ecf5] dark:from-indigo-950/40 dark:via-[#161729] dark:to-[#141923]",
    cardBorderNormal: "border-indigo-200/70 dark:border-indigo-900/50",
    cardBorderActive: "border-indigo-400 dark:border-indigo-500",
    cardGlowActive: "shadow-[0_0_15px_rgba(129,140,248,0.22)]",
    badgeBg: "bg-indigo-100 dark:bg-indigo-950/70",
    badgeText: "text-indigo-800 dark:text-indigo-300",
    badgeBorder: "border-indigo-300/80 dark:border-indigo-800",
    badgeIcon: "text-indigo-600 dark:text-indigo-400",
    folderText: "text-indigo-600 dark:text-indigo-400",
    folderActiveBg: "bg-indigo-100/80 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300",
    chevronActive: "text-indigo-600 dark:text-indigo-400",
    trayBg: "bg-indigo-100/25 dark:bg-indigo-950/20",
    trayBorder: "border-indigo-200/80 dark:border-indigo-900/60",
    treeLineActive: "bg-indigo-500 dark:bg-indigo-400",
    subCardActiveBg: "bg-indigo-50/90 dark:bg-indigo-950/80",
    subCardActiveText: "text-indigo-950 dark:text-indigo-100",
    subCardActiveBorder: "border-l-4 border-indigo-500 dark:border-indigo-400",
    subCardActiveChevron: "text-indigo-600 dark:text-indigo-400",
    dotColor: "bg-indigo-500",
  },
  // 6. Rose / Pink Red (Tuần 18 - 20: Ôn tập HK1 & Dự án)
  {
    name: "Rose",
    cardNeumorphicBg: "bg-gradient-to-br from-rose-100/70 via-rose-50/40 to-[#e6ecf5] dark:from-rose-950/40 dark:via-[#22151c] dark:to-[#141923]",
    cardBorderNormal: "border-rose-200/70 dark:border-rose-900/50",
    cardBorderActive: "border-rose-400 dark:border-rose-500",
    cardGlowActive: "shadow-[0_0_15px_rgba(251,113,133,0.22)]",
    badgeBg: "bg-rose-100 dark:bg-rose-950/70",
    badgeText: "text-rose-800 dark:text-rose-300",
    badgeBorder: "border-rose-300/80 dark:border-rose-800",
    badgeIcon: "text-rose-600 dark:text-rose-400",
    folderText: "text-rose-600 dark:text-rose-400",
    folderActiveBg: "bg-rose-100/80 dark:bg-rose-900/60 text-rose-700 dark:text-rose-300",
    chevronActive: "text-rose-600 dark:text-rose-400",
    trayBg: "bg-rose-100/25 dark:bg-rose-950/20",
    trayBorder: "border-rose-200/80 dark:border-rose-900/60",
    treeLineActive: "bg-rose-500 dark:bg-rose-400",
    subCardActiveBg: "bg-rose-50/90 dark:bg-rose-950/80",
    subCardActiveText: "text-rose-950 dark:text-rose-100",
    subCardActiveBorder: "border-l-4 border-rose-500 dark:border-rose-400",
    subCardActiveChevron: "text-rose-600 dark:text-rose-400",
    dotColor: "bg-rose-500",
  },
  // 7. Teal / Deep Sea Green (Tuần 21 - 25: CSDL & Hệ CSDL Quan hệ)
  {
    name: "Teal",
    cardNeumorphicBg: "bg-gradient-to-br from-teal-100/70 via-teal-50/40 to-[#e6ecf5] dark:from-teal-950/40 dark:via-[#141d1e] dark:to-[#141923]",
    cardBorderNormal: "border-teal-200/70 dark:border-teal-900/50",
    cardBorderActive: "border-teal-400 dark:border-teal-500",
    cardGlowActive: "shadow-[0_0_15px_rgba(45,212,191,0.22)]",
    badgeBg: "bg-teal-100 dark:bg-teal-950/70",
    badgeText: "text-teal-800 dark:text-teal-300",
    badgeBorder: "border-teal-300/80 dark:border-teal-800",
    badgeIcon: "text-teal-600 dark:text-teal-400",
    folderText: "text-teal-600 dark:text-teal-400",
    folderActiveBg: "bg-teal-100/80 dark:bg-teal-900/60 text-teal-700 dark:text-teal-300",
    chevronActive: "text-teal-600 dark:text-teal-400",
    trayBg: "bg-teal-100/25 dark:bg-teal-950/20",
    trayBorder: "border-teal-200/80 dark:border-teal-900/60",
    treeLineActive: "bg-teal-500 dark:bg-teal-400",
    subCardActiveBg: "bg-teal-50/90 dark:bg-teal-950/80",
    subCardActiveText: "text-teal-950 dark:text-teal-100",
    subCardActiveBorder: "border-l-4 border-teal-500 dark:border-teal-400",
    subCardActiveChevron: "text-teal-600 dark:text-teal-400",
    dotColor: "bg-teal-500",
  },
  // 8. Orange / Coral (Tuần 26 - 29: Thiết kế CSDL & Bảng dữ liệu)
  {
    name: "Orange",
    cardNeumorphicBg: "bg-gradient-to-br from-orange-100/70 via-orange-50/40 to-[#e6ecf5] dark:from-orange-950/40 dark:via-[#211814] dark:to-[#141923]",
    cardBorderNormal: "border-orange-200/70 dark:border-orange-900/50",
    cardBorderActive: "border-orange-400 dark:border-orange-500",
    cardGlowActive: "shadow-[0_0_15px_rgba(251,146,60,0.22)]",
    badgeBg: "bg-orange-100 dark:bg-orange-950/70",
    badgeText: "text-orange-800 dark:text-orange-300",
    badgeBorder: "border-orange-300/80 dark:border-orange-800",
    badgeIcon: "text-orange-600 dark:text-orange-400",
    folderText: "text-orange-600 dark:text-orange-400",
    folderActiveBg: "bg-orange-100/80 dark:bg-orange-900/60 text-orange-700 dark:text-orange-300",
    chevronActive: "text-orange-600 dark:text-orange-400",
    trayBg: "bg-orange-100/25 dark:bg-orange-950/20",
    trayBorder: "border-orange-200/80 dark:border-orange-900/60",
    treeLineActive: "bg-orange-500 dark:bg-orange-400",
    subCardActiveBg: "bg-orange-50/90 dark:bg-orange-950/80",
    subCardActiveText: "text-orange-950 dark:text-orange-100",
    subCardActiveBorder: "border-l-4 border-orange-500 dark:border-orange-400",
    subCardActiveChevron: "text-orange-600 dark:text-orange-400",
    dotColor: "bg-orange-500",
  },
  // 9. Fuchsia / Magenta (Tuần 30 - 32: Truy vấn SQL)
  {
    name: "Fuchsia",
    cardNeumorphicBg: "bg-gradient-to-br from-fuchsia-100/70 via-fuchsia-50/40 to-[#e6ecf5] dark:from-fuchsia-950/40 dark:via-[#211425] dark:to-[#141923]",
    cardBorderNormal: "border-fuchsia-200/70 dark:border-fuchsia-900/50",
    cardBorderActive: "border-fuchsia-400 dark:border-fuchsia-500",
    cardGlowActive: "shadow-[0_0_15px_rgba(232,121,249,0.22)]",
    badgeBg: "bg-fuchsia-100 dark:bg-fuchsia-950/70",
    badgeText: "text-fuchsia-800 dark:text-fuchsia-300",
    badgeBorder: "border-fuchsia-300/80 dark:border-fuchsia-800",
    badgeIcon: "text-fuchsia-600 dark:text-fuchsia-400",
    folderText: "text-fuchsia-600 dark:text-fuchsia-400",
    folderActiveBg: "bg-fuchsia-100/80 dark:bg-fuchsia-900/60 text-fuchsia-700 dark:text-fuchsia-300",
    chevronActive: "text-fuchsia-600 dark:text-fuchsia-400",
    trayBg: "bg-fuchsia-100/25 dark:bg-fuchsia-950/20",
    trayBorder: "border-fuchsia-200/80 dark:border-fuchsia-900/60",
    treeLineActive: "bg-fuchsia-500 dark:bg-fuchsia-400",
    subCardActiveBg: "bg-fuchsia-50/90 dark:bg-fuchsia-950/80",
    subCardActiveText: "text-fuchsia-950 dark:text-fuchsia-100",
    subCardActiveBorder: "border-l-4 border-fuchsia-500 dark:border-fuchsia-400",
    subCardActiveChevron: "text-fuchsia-600 dark:text-fuchsia-400",
    dotColor: "bg-fuchsia-500",
  },
  // 10. Lime / Cyber Green (Tuần 33 - 35: Tổng lực thi)
  {
    name: "Lime",
    cardNeumorphicBg: "bg-gradient-to-br from-lime-100/70 via-lime-50/40 to-[#e6ecf5] dark:from-lime-950/40 dark:via-[#191e14] dark:to-[#141923]",
    cardBorderNormal: "border-lime-200/70 dark:border-lime-900/50",
    cardBorderActive: "border-lime-400 dark:border-lime-500",
    cardGlowActive: "shadow-[0_0_15px_rgba(163,230,53,0.22)]",
    badgeBg: "bg-lime-100 dark:bg-lime-950/70",
    badgeText: "text-lime-800 dark:text-lime-300",
    badgeBorder: "border-lime-300/80 dark:border-lime-800",
    badgeIcon: "text-lime-600 dark:text-lime-400",
    folderText: "text-lime-600 dark:text-lime-400",
    folderActiveBg: "bg-lime-100/80 dark:bg-lime-900/60 text-lime-700 dark:text-lime-300",
    chevronActive: "text-lime-600 dark:text-lime-400",
    trayBg: "bg-lime-100/25 dark:bg-lime-950/20",
    trayBorder: "border-lime-200/80 dark:border-lime-900/60",
    treeLineActive: "bg-lime-500 dark:bg-lime-400",
    subCardActiveBg: "bg-lime-50/90 dark:bg-lime-950/80",
    subCardActiveText: "text-lime-950 dark:text-lime-100",
    subCardActiveBorder: "border-l-4 border-lime-500 dark:border-lime-400",
    subCardActiveChevron: "text-lime-600 dark:text-lime-400",
    dotColor: "bg-lime-500",
  },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  subjects: Subject[];
  selectedSubjectId: string;
  onSelectSubject: (subjectId: string) => void;
  selectedTopicId: string;
  onSelectTopic: (topicId: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onClose,
  subjects,
  selectedSubjectId,
  onSelectSubject,
  selectedTopicId,
  onSelectTopic,
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
            Object.entries(filteredGroupedChapters).map(([chapterTitle, topicList], chapterIndex) => {
              const isExpanded = expandedChapters[chapterTitle] ?? true;
              const hasActiveTopic = topicList.some((t) => t.id === selectedTopicId);
              const totalChapterQuestions = topicList.reduce(
                (acc, t) => acc + (t.totalQuestions || 0),
                0
              );
              const { week: chapterWeek, cleanChapter } = parseChapterInfo(chapterTitle);
              const theme = WEEK_COLOR_PALETTES[chapterIndex % WEEK_COLOR_PALETTES.length];

              return (
                <div
                  key={chapterTitle}
                  className={`rounded-neu-sm ${theme.cardNeumorphicBg} transition-all duration-300 overflow-hidden ${
                    hasActiveTopic
                      ? `shadow-neu-flat border-2 ${theme.cardBorderActive} ${theme.cardGlowActive}`
                      : `shadow-neu-flat-xs border hover:shadow-neu-flat ${theme.cardBorderNormal}`
                  }`}
                >
                  {/* Accordion Chapter Header - CẤP BẬC CHA (TIÊU ĐỀ LỚN MANG MÀU ĐẶC TRƯNG TỪNG TUẦN) */}
                  <button
                    onClick={() => toggleChapter(chapterTitle)}
                    className="w-full text-left p-3 flex items-center justify-between gap-2.5 transition-colors hover:bg-white/40 dark:hover:bg-white/5 text-slate-800 dark:text-slate-200"
                    aria-expanded={isExpanded}
                  >
                    <div className="flex items-start gap-2.5 min-w-0 flex-1">
                      <div
                        className={`p-1.5 rounded-neu-xs shadow-neu-flat-xs flex-shrink-0 mt-0.5 transition-all ${
                          hasActiveTopic
                            ? `${theme.folderActiveBg} shadow-sm`
                            : "text-slate-600 dark:text-slate-400 bg-white/70 dark:bg-[#202734]"
                        }`}
                      >
                        {isExpanded ? (
                          <FolderOpen className={`w-4 h-4 ${theme.folderText}`} />
                        ) : (
                          <Folder className={`w-4 h-4 ${hasActiveTopic ? theme.folderText : "text-slate-500 dark:text-slate-400"}`} />
                        )}
                      </div>
                      <div className="min-w-0 flex-1 space-y-1">
                        {/* Hàng nhãn chương: Huy hiệu tuần học lớn mang màu chủ đạo */}
                        {chapterWeek && (
                          <div className="flex items-center gap-1.5">
                            <span className={`inline-flex items-center gap-1 text-[10px] font-extrabold px-2 py-0.5 rounded-full ${theme.badgeBg} ${theme.badgeText} border ${theme.badgeBorder} shadow-neu-flat-xs`}>
                              <Calendar className={`w-3 h-3 ${theme.badgeIcon} flex-shrink-0`} />
                              <span>{chapterWeek}</span>
                            </span>
                          </div>
                        )}
                        <h3 className="text-xs font-black text-slate-800 dark:text-slate-100 leading-snug break-words tracking-tight">
                          {cleanChapter}
                        </h3>
                        <div className="flex items-center gap-1.5 text-[10px] text-slate-500 dark:text-slate-400 font-semibold">
                          <span>{topicList.length} bài học</span>
                          <span>•</span>
                          <span>{totalChapterQuestions} câu hỏi</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-1 rounded-neu-xs text-slate-500 dark:text-slate-400 shadow-neu-flat-xs flex-shrink-0 self-center">
                      {isExpanded ? (
                        <ChevronDown className={`w-3.5 h-3.5 ${hasActiveTopic ? theme.chevronActive : "text-slate-600 dark:text-slate-300"}`} />
                      ) : (
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                      )}
                    </div>
                  </button>

                  {/* Danh sách các bài học con - CẤP BẬC CON (TIÊU ĐỀ NHỎ BÊN TRONG CÓ NHÁNH CÂY TREE-LINE ĐỒNG BỘ MÀU) */}
                  {isExpanded && (
                    <div className={`p-2.5 pt-2 ${theme.trayBg} shadow-neu-inset-sm border-t ${theme.trayBorder}`}>
                      {/* Vùng nhánh cây phân cấp (Tree Branch Guide) */}
                      <div className="relative pl-3.5 ml-2 border-l-2 border-slate-300/80 dark:border-slate-700/80 space-y-2 py-0.5">
                        {topicList.map((topic) => {
                          const isCurrent = topic.id === selectedTopicId;
                          const { week: topicWeek, cleanName } = parseTopicInfo(topic.name);

                          return (
                            <div key={topic.id} className="relative">
                              {/* Đường nhánh ngang nối từ cây phân cấp vào thẻ bài học con */}
                              <span
                                className={`absolute -left-[14px] top-4 w-2.5 h-0.5 transition-colors ${
                                  isCurrent
                                    ? theme.treeLineActive
                                    : "bg-slate-300/90 dark:bg-slate-700"
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
                                    ? `${theme.subCardActiveBg} ${theme.subCardActiveText} shadow-neu-inset font-bold ${theme.subCardActiveBorder}`
                                    : "bg-[#e6ecf5]/85 dark:bg-[#1b212c]/85 text-slate-700 dark:text-slate-300 shadow-neu-flat-xs hover:text-slate-900 dark:hover:text-white hover:bg-white/80 dark:hover:bg-[#202735] active:shadow-neu-inset"
                                }`}
                              >
                                <div className="flex-1 min-w-0 space-y-1.5">
                                  {/* Tên bài học rõ ràng */}
                                  <p className="text-xs font-bold leading-snug break-words">
                                    {cleanName}
                                  </p>

                                  {/* Hàng thông tin chi tiết bài học con */}
                                  <div className="flex items-center gap-1.5 flex-wrap">
                                    {/* Tuần riêng nếu khác tuần chương */}
                                    {topicWeek && topicWeek !== chapterWeek && (
                                      <span className={`inline-flex items-center gap-1 text-[10px] font-extrabold px-1.5 py-0.5 rounded-full ${theme.badgeBg} ${theme.badgeText} border ${theme.badgeBorder}`}>
                                        <Calendar className={`w-2.5 h-2.5 ${theme.badgeIcon}`} />
                                        <span>{topicWeek}</span>
                                      </span>
                                    )}

                                    {/* Huy hiệu Lý thuyết nếu có */}
                                    {topic.hasTheory && (
                                      <span className="inline-flex items-center gap-1 text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border border-amber-200/80 dark:border-amber-800/80 shadow-neu-flat-xs">
                                        <BookOpen className="w-2.5 h-2.5 text-amber-600 dark:text-amber-400" />
                                        <span>Lý thuyết</span>
                                      </span>
                                    )}

                                    {/* Phân rã số lượng câu hỏi */}
                                    <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
                                      {topic.mcCount && topic.tfCount ? (
                                        <span>
                                          {topic.totalQuestions} câu{" "}
                                          <span className="text-slate-400 dark:text-slate-500 font-normal">
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
                                      isCurrent ? `${theme.subCardActiveChevron} translate-x-0.5` : "text-slate-400"
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
