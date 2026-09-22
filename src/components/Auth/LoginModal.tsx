"use client";

import React, { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { soundManager } from "@/lib/audioEffects";
import { UserCheck, Lock, User, School, KeyRound, AlertCircle, X, ShieldAlert } from "lucide-react";

export const LoginModal: React.FC = () => {
  const { isLoginModalOpen, closeLoginModal, login } = useAuth();
  const [roleMode, setRoleMode] = useState<"student" | "admin">("student");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  if (!isLoginModalOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      setErrorMessage("Vui lòng điền đầy đủ Tên đăng nhập và Mật khẩu.");
      return;
    }

    setIsLoading(true);
    setErrorMessage("");

    const res = await login(username, password);
    setIsLoading(false);

    if (res.success) {
      soundManager.playSuccess();
      setUsername("");
      setPassword("");
    } else {
      soundManager.playError();
      setErrorMessage(res.message);
    }
  };

  const handleQuickFill = (u: string, p: string, r: "student" | "admin") => {
    soundManager.playClick();
    setRoleMode(r);
    setUsername(u);
    setPassword(p);
    setErrorMessage("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-[#e6ecf5] rounded-neu shadow-neu-flat p-6 relative border border-white/60 space-y-5">
        {/* Nút đóng */}
        <button
          onClick={() => {
            soundManager.playClick();
            closeLoginModal();
          }}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#e6ecf5] shadow-neu-flat-xs active:shadow-neu-inset text-slate-500 hover:text-slate-800 transition"
          aria-label="Đóng"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="text-center space-y-1 pt-1">
          <div className="w-12 h-12 mx-auto rounded-neu-sm bg-blue-100 flex items-center justify-center text-blue-700 shadow-neu-flat-xs mb-2">
            <School className="w-6 h-6" />
          </div>
          <h2 className="text-lg font-black text-slate-800">
            Cổng Đăng Nhập Ôn Thi THPT
          </h2>
          <p className="text-xs text-slate-500">
            Trường THPT Nguyễn Sinh Sắc • GV Lý Thành Luân
          </p>
        </div>

        {/* Tab chọn vai trò */}
        <div className="grid grid-cols-2 gap-2 p-1 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset-sm">
          <button
            type="button"
            onClick={() => {
              soundManager.playClick();
              setRoleMode("student");
              setErrorMessage("");
            }}
            className={`py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
              roleMode === "student"
                ? "bg-[#e6ecf5] text-blue-700 shadow-neu-flat-xs"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            <UserCheck className="w-4 h-4" />
            <span>Học Sinh</span>
          </button>
          <button
            type="button"
            onClick={() => {
              soundManager.playClick();
              setRoleMode("admin");
              setErrorMessage("");
            }}
            className={`py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
              roleMode === "admin"
                ? "bg-[#e6ecf5] text-indigo-700 shadow-neu-flat-xs"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            <ShieldAlert className="w-4 h-4" />
            <span>Giáo Viên / Admin</span>
          </button>
        </div>

        {/* Thông báo lỗi */}
        {errorMessage && (
          <div className="p-3 rounded-neu-sm bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold flex items-start gap-2 shadow-neu-flat-xs animate-in slide-in-from-top-1">
            <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Form đăng nhập */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-600 px-1 flex items-center gap-1">
              <User className="w-3.5 h-3.5 text-blue-600" />
              <span>
                {roleMode === "student" ? "Tài khoản do Admin cấp (Mã HS)" : "Tài khoản Quản trị viên"}
              </span>
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder={roleMode === "student" ? "Ví dụ: hs12a1_01" : "admin"}
              className="w-full px-3.5 py-2.5 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
              autoFocus
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-600 px-1 flex items-center gap-1">
              <Lock className="w-3.5 h-3.5 text-blue-600" />
              <span>Mật khẩu</span>
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-3.5 py-2.5 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
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
            <span>{isLoading ? "Đang xác thực..." : "Đăng Nhập"}</span>
          </button>
        </form>

        {/* Nút nạp nhanh tài khoản mẫu để trải nghiệm */}
        <div className="pt-2 border-t border-slate-300/60 text-center space-y-2">
          <p className="text-[11px] text-slate-500 font-medium">
            Tài khoản mẫu để thử nghiệm nhanh:
          </p>
          <div className="flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => handleQuickFill("hs12a1_01", "123", "student")}
              className="text-[11px] font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 px-2.5 py-1 rounded-neu-sm shadow-neu-flat-xs active:shadow-neu-inset transition"
            >
              Học sinh: Nguyễn Văn An (12A1)
            </button>
            <button
              type="button"
              onClick={() => handleQuickFill("admin", "admin", "admin")}
              className="text-[11px] font-bold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 px-2.5 py-1 rounded-neu-sm shadow-neu-flat-xs active:shadow-neu-inset transition"
            >
              Admin: Thầy Luân
            </button>
          </div>
        </div>

        {/* Ghi chú chính sách */}
        <div className="p-2.5 rounded-neu-sm bg-slate-200/50 text-[11px] text-slate-600 leading-tight">
          💡 <strong>Quy định:</strong> Toàn bộ tài khoản học sinh do Giáo viên quản trị cấp. Không cho phép tự đăng ký tự do để bảo đảm việc theo dõi kết quả chuẩn xác theo danh sách lớp.
        </div>
      </div>
    </div>
  );
};
