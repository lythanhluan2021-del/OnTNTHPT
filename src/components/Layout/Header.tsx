"use client";

import { Menu, BookOpenCheck, BarChart3 } from "lucide-react";

interface HeaderProps {
  onToggleSidebar: () => void;
  activeTab: "practice" | "analytics";
  onChangeTab: (tab: "practice" | "analytics") => void;
  subjectTitle: string;
  topicTitle: string;
}

export const Header: React.FC<HeaderProps> = ({
  onToggleSidebar,
  activeTab,
  onChangeTab,
  subjectTitle,
  topicTitle,
}) => {
  return (
    <header className="sticky top-0 z-30 bg-[#e6ecf5] px-4 py-3 border-b border-slate-300/60 shadow-neu-flat-sm">
      <div className="max-w-md mx-auto flex items-center justify-between gap-2">
        {/* Left: Hamburger menu toggle */}
        <button
          onClick={onToggleSidebar}
          className="p-2.5 rounded-neu-sm bg-[#e6ecf5] shadow-neu-flat active:shadow-neu-inset text-slate-700 transition"
          aria-label="Mở danh mục bài học"
        >
          <Menu className="w-5 h-5 text-slate-800" />
        </button>

        {/* Center: Subject & Topic name */}
        <div className="flex-1 text-center min-w-0 px-2">
          <div className="text-[11px] font-bold uppercase tracking-wider text-blue-600 truncate">
            {subjectTitle}
          </div>
          <h1 className="text-sm font-extrabold text-slate-800 truncate leading-tight">
            {topicTitle}
          </h1>
        </div>

        {/* Right: Tab switchers (Practice vs Analytics) */}
        <div className="flex items-center gap-1.5 p-1 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset-sm">
          <button
            onClick={() => onChangeTab("practice")}
            className={`p-2 rounded-lg transition-all ${
              activeTab === "practice"
                ? "bg-[#e6ecf5] text-blue-600 shadow-neu-flat-xs"
                : "text-slate-500 hover:text-slate-700"
            }`}
            title="Luyện tập câu hỏi"
          >
            <BookOpenCheck className="w-4 h-4" />
          </button>
          <button
            onClick={() => onChangeTab("analytics")}
            className={`p-2 rounded-lg transition-all ${
              activeTab === "analytics"
                ? "bg-[#e6ecf5] text-blue-600 shadow-neu-flat-xs"
                : "text-slate-500 hover:text-slate-700"
            }`}
            title="Thống kê & Phân tích điểm yếu"
          >
            <BarChart3 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
