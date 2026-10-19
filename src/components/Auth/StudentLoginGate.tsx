"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useAuth } from "@/contexts/AuthContext";
import { soundManager } from "@/lib/audioEffects";
import { Lock, User, School, KeyRound, AlertCircle, Sparkles, BookOpen, GraduationCap } from "lucide-react";
import { GoogleSignInModal } from "./GoogleSignInModal";

export const StudentLoginGate: React.FC = () => {
  const { login, loginWithGoogle } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isGoogleModalOpen, setIsGoogleModalOpen] = useState(false);

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
        {/* Header SINO Brand & Logo */}
        <div className="text-center space-y-2.5">
          <div className="w-20 h-20 mx-auto rounded-neu bg-[#e6ecf5] flex items-center justify-center shadow-neu-flat border border-white/80 p-1.5 transition-transform hover:scale-105">
            <Image
              src="/sino_logo.png"
              alt="SINO Logo"
              width={76}
              height={76}
              className="w-full h-full object-contain rounded-neu-sm mix-blend-multiply"
              priority
            />
          </div>
          <div className="space-y-1">
            <div className="flex items-center justify-center gap-2">
              <h1 className="text-2xl font-black text-slate-800 tracking-tight">
                SINO
              </h1>
            </div>
            <p className="text-xs font-black text-blue-700 tracking-tight">
              Ôn thi thông minh, bứt phá điểm số
            </p>
            <p className="text-[11px] text-slate-500 font-medium">
              Bản quyền thuộc về Ban quản lý dự án Khoa học kỹ thuật
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
          <p className="text-slate-600 text-[11px]">
            Đây là ứng dụng giáo dục nội bộ. Không thu phí, không yêu cầu thông tin ngân hàng, thanh toán hay CCCD.
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
            <span>{isLoading ? "Đang xác thực tài khoản..." : "Đăng Nhập Bằng Mật Khẩu"}</span>
          </button>
        </form>

        {/* Divider */}
        <div className="relative flex items-center justify-center my-3">
          <div className="border-t border-slate-300 w-full" />
          <span className="bg-[#e6ecf5] px-3 text-[11px] font-bold text-slate-500 uppercase tracking-wider relative">
            Hoặc
          </span>
        </div>

        {/* Nút Đăng nhập bằng Google */}
        <button
          type="button"
          onClick={() => {
            soundManager.playClick();
            setIsGoogleModalOpen(true);
          }}
          disabled={isLoading}
          className="w-full py-2.5 px-4 rounded-neu font-bold text-xs text-slate-700 bg-white/80 hover:bg-white shadow-neu-flat-xs active:shadow-neu-inset border border-slate-300/60 transition flex items-center justify-center gap-2.5 cursor-pointer"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
            />
            <path
              fill="#34A853"
              d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
            />
            <path
              fill="#FBBC05"
              d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
            />
            <path
              fill="#EA4335"
              d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
            />
          </svg>
          <span>Đăng Nhập Nhanh Bằng Tài Khoản Google</span>
        </button>

        {/* Modal Đăng nhập Google hiện đại */}
        <GoogleSignInModal
          isOpen={isGoogleModalOpen}
          onClose={() => setIsGoogleModalOpen(false)}
          onSuccess={async (data) => {
            return await loginWithGoogle(data);
          }}
        />


      </div>

      {/* Footer nhỏ nhẹ */}
      <footer className="mt-6 text-center text-[11px] text-slate-400 font-medium">
        © 2026 SINO • Ôn thi thông minh, bứt phá điểm số
      </footer>
    </div>
  );
};
