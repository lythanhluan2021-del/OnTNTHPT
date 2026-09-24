"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
  BookOpen,
  BookOpenCheck,
  BarChart3,
  ChevronDown,
  Volume2,
  VolumeX,
  User as UserIcon,
  LogIn,
  LogOut,
  ShieldCheck,
  LayoutDashboard,
  GraduationCap,
  Terminal,
} from "lucide-react";
import { soundManager } from "@/lib/audioEffects";
import { useAuth } from "@/contexts/AuthContext";

interface HeaderProps {
  onToggleSidebar: () => void;
  activeTab: "practice" | "analytics" | "theory" | "ide";
  onChangeTab: (tab: "practice" | "analytics" | "theory" | "ide") => void;
  subjectTitle: string;
  topicTitle: string;
  onOpenSubjectModal: () => void;
  isPythonTopic?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  onToggleSidebar,
  activeTab,
  onChangeTab,
  subjectTitle,
  topicTitle,
  onOpenSubjectModal,
  isPythonTopic = false,
}) => {
  const { user, isLoggedIn, isAdmin, openLoginModal, logout } = useAuth();
  const [isSoundOn, setIsSoundOn] = useState(soundManager.isEnabled());
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleToggleSound = () => {
    const next = soundManager.toggleSound();
    setIsSoundOn(next);
    if (next) soundManager.playClick();
  };

  // Đóng menu khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-30 bg-[#e6ecf5] px-3 sm:px-4 py-2.5 border-b border-slate-300/60 shadow-neu-flat-sm">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-1.5 sm:gap-2">
        {/* Left: Hamburger menu toggle */}
        <button
          onClick={() => {
            soundManager.playClick();
            onToggleSidebar();
          }}
          className="p-2 sm:p-2.5 rounded-neu-sm bg-[#e6ecf5] shadow-neu-flat active:shadow-neu-inset text-slate-700 transition flex-shrink-0"
          aria-label="Mở danh mục bài học"
        >
          <Menu className="w-4 h-4 sm:w-5 sm:h-5 text-slate-800" />
        </button>

        {/* Center: Subject & Topic name with clickable subject switcher */}
        <div className="flex-1 text-center min-w-0 px-1 sm:px-2">
          <button
            onClick={() => {
              soundManager.playClick();
              onOpenSubjectModal();
            }}
            className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50/80 px-2 py-0.5 rounded-full shadow-neu-flat-xs active:shadow-neu-inset transition max-w-full"
            title="Bấm để đổi môn học khác"
          >
            <span className="truncate">{subjectTitle}</span>
            <ChevronDown className="w-3 h-3 text-blue-600 flex-shrink-0" />
          </button>
          <h1 className="text-xs sm:text-sm font-extrabold text-slate-800 truncate leading-tight pt-0.5">
            {topicTitle}
          </h1>
        </div>

        {/* Right: Sound toggle, Tabs & User Auth Profile */}
        <div className="flex items-center gap-1.5 flex-shrink-0">
          {/* Nhóm chuyển Tab */}
          <div className="flex items-center gap-0.5 sm:gap-1 p-0.5 sm:p-1 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset-sm">
            {/* Nút bật/tắt âm thanh */}
            <button
              onClick={handleToggleSound}
              className={`p-1.5 rounded-lg transition-all ${
                isSoundOn
                  ? "bg-[#e6ecf5] text-blue-600 shadow-neu-flat-xs font-bold"
                  : "text-slate-400 hover:text-slate-600"
              }`}
              title={isSoundOn ? "Âm thanh: Đang bật (Bấm để tắt)" : "Âm thanh: Đang tắt (Bấm để bật)"}
            >
              {isSoundOn ? <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
            </button>

            <button
              onClick={() => {
                soundManager.playClick();
                onChangeTab("theory");
              }}
              className={`p-1.5 rounded-lg transition-all ${
                activeTab === "theory"
                  ? "bg-[#e6ecf5] text-blue-600 shadow-neu-flat-xs font-bold"
                  : "text-slate-500 hover:text-slate-700"
              }`}
              title="Tóm tắt Lý thuyết bài học"
            >
              <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>

            <button
              onClick={() => {
                soundManager.playClick();
                onChangeTab("practice");
              }}
              className={`p-1.5 rounded-lg transition-all ${
                activeTab === "practice"
                  ? "bg-[#e6ecf5] text-blue-600 shadow-neu-flat-xs font-bold"
                  : "text-slate-500 hover:text-slate-700"
              }`}
              title="Luyện tập câu hỏi"
            >
              <BookOpenCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>

            {isPythonTopic && (
              <button
                onClick={() => {
                  soundManager.playClick();
                  onChangeTab("ide");
                }}
                className={`p-1.5 rounded-lg transition-all ${
                  activeTab === "ide"
                    ? "bg-[#e6ecf5] text-blue-600 shadow-neu-flat-xs font-bold"
                    : "text-slate-500 hover:text-blue-600"
                }`}
                title="Python IDE - Chạy thử chương trình"
              >
                <Terminal className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600" />
              </button>
            )}

            <button
              onClick={() => {
                soundManager.playClick();
                onChangeTab("analytics");
              }}
              className={`p-1.5 rounded-lg transition-all ${
                activeTab === "analytics"
                  ? "bg-[#e6ecf5] text-blue-600 shadow-neu-flat-xs"
                  : "text-slate-500 hover:text-slate-700"
              }`}
              title="Thống kê & Phân tích điểm yếu"
            >
              <BarChart3 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>

          {/* User Profile / Login Button */}
          <div className="relative" ref={menuRef}>
            {isLoggedIn && user ? (
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center gap-1.5 p-1 sm:px-2.5 sm:py-1 rounded-neu-sm bg-[#e6ecf5] shadow-neu-flat-xs active:shadow-neu-inset transition"
                title="Tài khoản học tập"
              >
                <div
                  className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-sm ${
                    isAdmin ? "bg-indigo-600" : "bg-blue-600"
                  }`}
                >
                  {user.fullName ? user.fullName.charAt(0).toUpperCase() : "U"}
                </div>
                <div className="hidden md:flex flex-col text-left">
                  <span className="text-[11px] font-bold text-slate-800 leading-tight max-w-[100px] truncate">
                    {user.fullName}
                  </span>
                  <span className="text-[9px] text-blue-600 font-semibold leading-none">
                    {isAdmin ? "Giáo viên" : user.className || "Học sinh"}
                  </span>
                </div>
                <ChevronDown className="w-3 h-3 text-slate-500 hidden sm:block" />
              </button>
            ) : (
              <button
                onClick={() => {
                  soundManager.playClick();
                  openLoginModal();
                }}
                className="flex items-center gap-1.5 py-1 px-2.5 sm:px-3 rounded-neu-sm bg-blue-600 text-white font-bold text-xs shadow-neu-blue active:shadow-neu-blue-pressed hover:bg-blue-700 transition"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Đăng Nhập</span>
              </button>
            )}

            {/* User Dropdown Menu */}
            {isUserMenuOpen && user && (
              <div className="absolute right-0 mt-2 w-64 rounded-neu bg-[#e6ecf5] shadow-neu-flat border border-white/80 p-3 z-50 animate-in fade-in zoom-in-95 duration-150 space-y-2.5">
                {/* User Header */}
                <div className="border-b border-slate-300/60 pb-2">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white ${
                        isAdmin ? "bg-indigo-600" : "bg-blue-600"
                      }`}
                    >
                      {user.fullName.charAt(0).toUpperCase()}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-bold text-slate-800 truncate">
                        {user.fullName}
                      </p>
                      <p className="text-[10px] text-slate-500 flex items-center gap-1">
                        {isAdmin ? (
                          <span className="text-indigo-600 font-semibold flex items-center gap-0.5">
                            <ShieldCheck className="w-3 h-3" /> Quản trị viên
                          </span>
                        ) : (
                          <span className="text-blue-600 font-semibold flex items-center gap-0.5">
                            <GraduationCap className="w-3 h-3" /> Lớp {user.className || "12"}
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Admin Quick Link */}
                {isAdmin && (
                  <Link
                    href="/admin"
                    onClick={() => setIsUserMenuOpen(false)}
                    className="w-full flex items-center gap-2 px-2.5 py-2 rounded-neu-sm bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold text-xs shadow-neu-flat-xs active:shadow-neu-inset transition"
                  >
                    <LayoutDashboard className="w-4 h-4 text-indigo-600" />
                    <span>Vào Dashboard Quản Trị</span>
                  </Link>
                )}

                {/* Logout Button */}
                <button
                  onClick={() => {
                    soundManager.playClick();
                    logout();
                    setIsUserMenuOpen(false);
                  }}
                  className="w-full flex items-center gap-2 px-2.5 py-2 rounded-neu-sm bg-[#e6ecf5] hover:bg-rose-50 text-rose-600 hover:text-rose-700 font-bold text-xs shadow-neu-flat-xs active:shadow-neu-inset transition"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Đăng Xuất</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
