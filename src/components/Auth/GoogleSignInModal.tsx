"use client";

import React, { useState } from "react";
import { soundManager } from "@/lib/audioEffects";
import { Mail, User, School, X, Sparkles, AlertCircle, CheckCircle2, ArrowRight } from "lucide-react";

interface GoogleSignInModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (data: { email: string; fullName: string; className: string }) => Promise<{ success: boolean; message: string }>;
}

const COMMON_CLASSES = ["12A1", "12A2", "12A3", "12A4", "12A5", "12A6", "12A7", "Lớp Tự Do"];

export const GoogleSignInModal: React.FC<GoogleSignInModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [className, setClassName] = useState("12A1");
  const [customClass, setCustomClass] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    soundManager.playClick();

    const cleanEmail = email.trim().toLowerCase();
    if (!cleanEmail || !cleanEmail.includes("@")) {
      soundManager.playError();
      setError("Vui lòng nhập địa chỉ Email Google (Gmail) hợp lệ.");
      return;
    }

    const cleanName = fullName.trim() || cleanEmail.split("@")[0];
    const finalClass = className === "other" ? (customClass.trim() || "12A1") : className;

    setIsSubmitting(true);
    setError(null);

    try {
      const res = await onSuccess({
        email: cleanEmail,
        fullName: cleanName,
        className: finalClass,
      });

      if (res.success) {
        soundManager.playSuccess();
        onClose();
      } else {
        soundManager.playError();
        setError(res.message || "Đăng nhập Google thất bại.");
      }
    } catch (err: any) {
      soundManager.playError();
      setError(err.message || "Lỗi kết nối máy chủ khi đăng nhập.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="w-full max-w-md bg-[#e6ecf5] rounded-neu shadow-neu-flat border border-white/90 p-6 sm:p-7 space-y-5 relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Nút đóng modal */}
        <button
          type="button"
          onClick={() => {
            soundManager.playClick();
            onClose();
          }}
          className="absolute top-4 right-4 p-2 rounded-neu-sm bg-[#e6ecf5] shadow-neu-flat-xs hover:shadow-neu-inset text-slate-500 hover:text-slate-800 transition"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header với Icon Google */}
        <div className="text-center space-y-2 pt-1">
          <div className="w-14 h-14 mx-auto rounded-neu bg-white shadow-neu-flat-xs flex items-center justify-center border border-white/80">
            <svg className="w-7 h-7" viewBox="0 0 24 24">
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
          </div>
          <h2 className="text-base sm:text-lg font-black text-slate-800 tracking-tight">
            Đăng Nhập Bằng Google
          </h2>
          <p className="text-[11px] text-slate-500 font-medium max-w-xs mx-auto">
            Hệ thống tự động liên kết tài khoản để Thầy ghi nhận điểm số và lưu tiến trình lên Google Drive.
          </p>
        </div>

        {/* Thông báo lỗi */}
        {error && (
          <div className="p-3 rounded-neu-sm bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold flex items-start gap-2 shadow-neu-flat-xs animate-in slide-in-from-top-1">
            <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-rose-600" />
            <span>{error}</span>
          </div>
        )}

        {/* Form nhập thông tin Google */}
        <form onSubmit={handleSubmit} className="space-y-3.5">
          {/* Email */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5 px-1">
              <Mail className="w-3.5 h-3.5 text-blue-600" />
              <span>Địa chỉ Email Google (Gmail):</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ví dụ: nguyenvana@gmail.com"
              required
              autoFocus
              className="w-full px-3.5 py-2.5 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
            />
          </div>

          {/* Họ và tên */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5 px-1">
              <User className="w-3.5 h-3.5 text-blue-600" />
              <span>Họ và Tên của bạn:</span>
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="ví dụ: Nguyễn Văn An"
              required
              className="w-full px-3.5 py-2.5 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
            />
            <span className="text-[10px] text-slate-500 px-1">
              * Tên này sẽ xuất hiện trong Bảng Xếp Hạng & Báo Cáo của Thầy.
            </span>
          </div>

          {/* Chọn Lớp học */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5 px-1">
              <School className="w-3.5 h-3.5 text-blue-600" />
              <span>Lớp học:</span>
            </label>
            <div className="grid grid-cols-4 gap-1.5">
              {COMMON_CLASSES.map((cls) => (
                <button
                  key={cls}
                  type="button"
                  onClick={() => {
                    soundManager.playClick();
                    setClassName(cls);
                  }}
                  className={`py-1.5 px-2 rounded-neu-sm text-xs font-bold transition ${
                    className === cls
                      ? "bg-blue-600 text-white shadow-neu-blue"
                      : "bg-[#e6ecf5] text-slate-700 shadow-neu-flat-xs hover:shadow-neu-inset"
                  }`}
                >
                  {cls}
                </button>
              ))}
              <button
                type="button"
                onClick={() => {
                  soundManager.playClick();
                  setClassName("other");
                }}
                className={`py-1.5 px-2 rounded-neu-sm text-xs font-bold transition ${
                  className === "other"
                    ? "bg-blue-600 text-white shadow-neu-blue"
                    : "bg-[#e6ecf5] text-slate-700 shadow-neu-flat-xs hover:shadow-neu-inset"
                }`}
              >
                Khác...
              </button>
            </div>
            {className === "other" && (
              <input
                type="text"
                value={customClass}
                onChange={(e) => setCustomClass(e.target.value)}
                placeholder="Nhập tên lớp của bạn (ví dụ: 12A8, 12B1)..."
                className="w-full mt-2 px-3.5 py-2 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
              />
            )}
          </div>

          {/* Ghi chú bảo mật */}
          <div className="p-2.5 rounded-neu-sm bg-blue-50/70 border border-blue-200/50 text-[10px] text-blue-900 leading-normal flex items-start gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
            <span>
              Tài khoản được cấp quyền ôn luyện toàn bộ 35 tuần, có gia sư AI gợi ý Socratic và tự động đồng bộ kết quả lên Google Drive.
            </span>
          </div>

          {/* Nút Submit */}
          <div className="pt-1 flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                soundManager.playClick();
                onClose();
              }}
              disabled={isSubmitting}
              className="w-1/3 py-2.5 rounded-neu-sm font-bold text-xs text-slate-600 bg-[#e6ecf5] shadow-neu-flat-xs hover:shadow-neu-inset transition"
            >
              Hủy Bỏ
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-2/3 py-2.5 rounded-neu-sm font-bold text-xs text-white bg-blue-600 hover:bg-blue-700 shadow-neu-blue active:shadow-neu-blue-pressed transition flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer"
            >
              {isSubmitting ? (
                <span className="inline-block animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
              ) : (
                <ArrowRight className="w-4 h-4" />
              )}
              <span>{isSubmitting ? "Đang kết nối..." : "Vào Học Bằng Google"}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
