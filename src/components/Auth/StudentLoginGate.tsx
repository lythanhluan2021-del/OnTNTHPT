"use client";

import React, { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { soundManager } from "@/lib/audioEffects";
import { Lock, User, School, KeyRound, AlertCircle, Sparkles, BookOpen, GraduationCap } from "lucide-react";

export const StudentLoginGate: React.FC = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      soundManager.playError();
      setErrorMessage("Vui lòng điền đầy đủ Tên đăng nhập và Mật khẩu.");
      return;
    }

    setIsLoading(true);
    setErrorMessage("");

    const res = await login(username.trim(), password.trim());
    setIsLoading(false);

    if (res.success) {
      soundManager.playSuccess();
    } else {
      soundManager.playError();
      setErrorMessage(res.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#e6ecf5] flex flex-col justify-center items-center p-4 antialiased">
      <div className="w-full max-w-md bg-[#e6ecf5] rounded-neu shadow-neu-flat p-6 sm:p-8 border border-white/80 space-y-6">
        {/* Header trường học & môn học */}
        <div className="text-center space-y-2">
          <div className="w-16 h-16 mx-auto rounded-neu bg-blue-100 flex items-center justify-center text-blue-700 shadow-neu-flat-xs">
            <School className="w-8 h-8 text-blue-600" />
          </div>
          <div className="space-y-1">
            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-blue-100/80 text-blue-800 text-[10px] font-black uppercase tracking-wider shadow-neu-flat-xs">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Năm Học 2026 - 2027</span>
            </span>
            <h1 className="text-lg sm:text-xl font-black text-slate-800 tracking-tight">
              Hệ Thống Ôn Thi Tốt Nghiệp THPT
            </h1>
            <p className="text-xs font-bold text-blue-700">
              Trường THPT Nguyễn Sinh Sắc
            </p>
            <p className="text-[11px] text-slate-500 font-medium">
              Phụ trách chuyên môn: Thầy Lý Thành Luân
            </p>
          </div>
        </div>

        {/* Lời nhắn hướng dẫn học sinh */}
        <div className="p-3 rounded-neu-sm bg-blue-50/70 border border-blue-200/60 text-[11px] text-blue-900 leading-relaxed space-y-1 shadow-neu-flat-xs">
          <div className="flex items-center gap-1.5 font-bold">
            <BookOpen className="w-3.5 h-3.5 text-blue-600" />
            <span>Khu vực ôn tập có hướng dẫn Socratic & AI:</span>
          </div>
          <p className="text-slate-600 text-[11px]">
            Học sinh đăng nhập bằng tài khoản và mật khẩu do Thầy/Cô cấp để bắt đầu ôn luyện theo kế hoạch 35 tuần và lưu tiến trình bài làm theo thời gian thực.
          </p>
        </div>

        {/* Thông báo lỗi nếu có */}
        {errorMessage && (
          <div className="p-3 rounded-neu-sm bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold flex items-start gap-2 shadow-neu-flat-xs animate-in slide-in-from-top-1">
            <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-rose-600" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Form đăng nhập dành riêng cho học sinh */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 px-1 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-blue-600" />
              <span>Tên đăng nhập (Mã học sinh):</span>
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Nhập tên đăng nhập do Thầy cấp..."
              autoCapitalize="none"
              autoCorrect="off"
              className="w-full px-3.5 py-2.5 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
              autoFocus
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 px-1 flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-blue-600" />
              <span>Mật khẩu:</span>
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-3.5 py-2.5 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 rounded-neu font-bold text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-neu-blue active:shadow-neu-blue-pressed transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
          >
            {isLoading ? (
              <span className="inline-block animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
            ) : (
              <KeyRound className="w-4 h-4" />
            )}
            <span>{isLoading ? "Đang xác thực tài khoản..." : "Đăng Nhập Vào Học"}</span>
          </button>
        </form>

        {/* Hỗ trợ trợ cấp lại tài khoản */}
        <div className="text-center pt-2 border-t border-slate-300/50">
          <p className="text-[11px] text-slate-500 leading-normal">
            Chưa có tài khoản hoặc quên mật khẩu? <br />
            Các em vui lòng báo trực tiếp với <strong>Thầy Lý Thành Luân</strong> để được cấp lại tài khoản.
          </p>
        </div>
      </div>

      {/* Footer nhỏ nhẹ */}
      <footer className="mt-6 text-center text-[11px] text-slate-400 font-medium">
        © 2026 Trường THPT Nguyễn Sinh Sắc • Ứng dụng Ôn Thi TN THPT Chuẩn Cấu Trúc GD1
      </footer>
    </div>
  );
};
