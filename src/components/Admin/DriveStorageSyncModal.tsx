"use client";

import React, { useState, useEffect } from "react";
import { soundManager } from "@/lib/audioEffects";
import {
  Cloud,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
  UploadCloud,
  DownloadCloud,
  Copy,
  ExternalLink,
  ShieldCheck,
  X,
  FileText,
  Users,
  Database,
  Key,
} from "lucide-react";

interface DriveStorageSyncModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRefreshData: () => void;
}

interface StorageStatus {
  isConfigured: boolean;
  isConnected: boolean;
  folderId: string;
  clientEmail?: string;
  usersFileId?: string | null;
  attemptsFileId?: string | null;
  localUsersCount?: number;
  localAttemptsCount?: number;
  errorMessage?: string | null;
}

export const DriveStorageSyncModal: React.FC<DriveStorageSyncModalProps> = ({
  isOpen,
  onClose,
  onRefreshData,
}) => {
  const [status, setStatus] = useState<StorageStatus | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [actionInProgress, setActionInProgress] = useState<string | null>(null);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [copiedKey, setCopiedKey] = useState(false);

  const checkStatus = async () => {
    setIsLoading(true);
    setMessage(null);
    try {
      const res = await fetch("/api/admin/drive-storage");
      const data = await res.json();
      if (data.success && data.status) {
        setStatus(data.status);
      } else {
        setStatus({
          isConfigured: false,
          isConnected: false,
          folderId: "19toY6VB5iERD2D9-tirycSjEz_YQbowL",
          errorMessage: data.message || "Không thể kiểm tra trạng thái Google Drive.",
        });
      }
    } catch (e: any) {
      setStatus({
        isConfigured: false,
        isConnected: false,
        folderId: "19toY6VB5iERD2D9-tirycSjEz_YQbowL",
        errorMessage: e.message || "Lỗi kết nối tới máy chủ.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      checkStatus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleAction = async (action: "sync_all" | "backup_to_drive" | "restore_from_drive") => {
    soundManager.playClick();
    setActionInProgress(action);
    setMessage(null);
    try {
      const res = await fetch("/api/admin/drive-storage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action }),
      });
      const data = await res.json();
      if (data.success) {
        soundManager.playSuccess();
        setMessage({ type: "success", text: data.message || "Thao tác thành công!" });
        onRefreshData();
        await checkStatus();
      } else {
        soundManager.playError();
        setMessage({ type: "error", text: data.message || "Thao tác thất bại." });
      }
    } catch (e: any) {
      soundManager.playError();
      setMessage({ type: "error", text: "Lỗi kết nối: " + e.message });
    } finally {
      setActionInProgress(null);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-2xl bg-[#e6ecf5] rounded-neu shadow-neu-flat p-5 sm:p-6 border border-white/70 space-y-5 max-h-[92vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-300/60 pb-3">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-neu-sm bg-emerald-100 flex items-center justify-center text-emerald-700 shadow-neu-flat-xs flex-shrink-0">
              <Cloud className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-black text-slate-800 flex items-center gap-2">
                <span>Quản Lý Lưu Trữ Đám Mây Google Drive</span>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 font-extrabold px-2 py-0.5 rounded-full border border-emerald-300">
                  Realtime + Bền Vững
                </span>
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                Tự động lưu trữ danh sách học sinh và kết quả bài làm vào Google Drive của Thầy
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              soundManager.playClick();
              onClose();
            }}
            className="p-2 rounded-full bg-[#e6ecf5] shadow-neu-flat-xs active:shadow-neu-inset text-slate-500 hover:text-slate-800 transition cursor-pointer"
            aria-label="Đóng"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Thông báo kết quả thao tác */}
        {message && (
          <div
            className={`p-3 rounded-neu-sm text-xs font-semibold flex items-start gap-2 shadow-neu-flat-xs animate-in slide-in-from-top-1 ${
              message.type === "success"
                ? "bg-emerald-50 border border-emerald-300 text-emerald-800"
                : "bg-rose-50 border border-rose-300 text-rose-800"
            }`}
          >
            {message.type === "success" ? (
              <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-emerald-600 mt-0.5" />
            ) : (
              <AlertCircle className="w-4 h-4 flex-shrink-0 text-rose-600 mt-0.5" />
            )}
            <span className="leading-relaxed">{message.text}</span>
          </div>
        )}

        {/* Trạng thái kết nối Google Drive */}
        <div className="p-4 rounded-neu-sm bg-white/70 shadow-neu-flat-xs border border-white/90 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-black text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <Database className="w-4 h-4 text-emerald-600" />
              <span>Tình trạng kết nối Google Drive:</span>
            </span>
            <button
              onClick={checkStatus}
              disabled={isLoading}
              className="text-[11px] font-bold text-slate-600 hover:text-slate-900 flex items-center gap-1 p-1 rounded transition cursor-pointer"
              title="Kiểm tra lại kết nối"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? "animate-spin text-emerald-600" : ""}`} />
              <span>Kiểm tra</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
            <div className="p-2.5 rounded bg-[#e6ecf5]/80 shadow-neu-inset-sm space-y-1">
              <span className="text-[11px] text-slate-500 font-medium">Tài khoản Service Account:</span>
              <p className="font-bold text-slate-800 truncate" title={status?.clientEmail || "Chưa phát hiện"}>
                {status?.clientEmail || "drive-scanner@onthithpt-509307.iam.gserviceaccount.com"}
              </p>
              <div className="flex items-center gap-1.5 pt-0.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-bold text-emerald-700">Đã kích hoạt & sẵn sàng</span>
              </div>
            </div>

            <div className="p-2.5 rounded bg-[#e6ecf5]/80 shadow-neu-inset-sm space-y-1">
              <span className="text-[11px] text-slate-500 font-medium">Thư mục Google Drive đích:</span>
              <p className="font-bold text-slate-800 font-mono text-[11px] truncate" title={status?.folderId}>
                {status?.folderId || "19toY6VB5iERD2D9-tirycSjEz_YQbowL"}
              </p>
              <span className="text-[10px] font-medium text-slate-500">
                Thư mục ôn thi gốc THPT Nguyễn Sinh Sắc
              </span>
            </div>
          </div>

          {/* Chi tiết các tệp dữ liệu */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs pt-1">
            <div className="p-2.5 rounded border border-slate-200 bg-white/60 space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-700 flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-blue-600" />
                  <span>Tệp CSDL Học Sinh:</span>
                </span>
                <span className="text-[10px] font-extrabold bg-blue-100 text-blue-800 px-1.5 py-0.2 rounded">
                  ontn_users.json
                </span>
              </div>
              <p className="text-[11px] text-slate-600">
                Hiện có: <strong>{status?.localUsersCount ?? 0}</strong> tài khoản trong bộ nhớ hệ thống
              </p>
            </div>

            <div className="p-2.5 rounded border border-slate-200 bg-white/60 space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-700 flex items-center gap-1">
                  <FileText className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Tệp CSDL Bài Làm:</span>
                </span>
                <span className="text-[10px] font-extrabold bg-indigo-100 text-indigo-800 px-1.5 py-0.2 rounded">
                  ontn_attempts.json
                </span>
              </div>
              <p className="text-[11px] text-slate-600">
                Hiện có: <strong>{status?.localAttemptsCount ?? 0}</strong> lượt làm bài đã ghi nhận
              </p>
            </div>
          </div>
        </div>

        {/* 3 Nút Tác vụ Đồng Bộ 1-Click */}
        <div className="space-y-2">
          <span className="text-xs font-black text-slate-700 uppercase tracking-wider">
            Thao tác đồng bộ dữ liệu:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {/* Nút 1: Đồng bộ 2 chiều */}
            <button
              type="button"
              onClick={() => handleAction("sync_all")}
              disabled={Boolean(actionInProgress)}
              className="p-3 rounded-neu-sm bg-blue-600 hover:bg-blue-700 text-white shadow-neu-blue active:shadow-neu-blue-pressed text-xs font-bold flex flex-col items-center justify-center gap-1.5 transition cursor-pointer disabled:opacity-50"
            >
              <RefreshCw className={`w-5 h-5 ${actionInProgress === "sync_all" ? "animate-spin" : ""}`} />
              <span>Đồng Bộ 2 Chiều</span>
              <span className="text-[10px] opacity-80 font-normal">Tự động hợp nhất dữ liệu</span>
            </button>

            {/* Nút 2: Sao lưu lên Drive */}
            <button
              type="button"
              onClick={() => handleAction("backup_to_drive")}
              disabled={Boolean(actionInProgress)}
              className="p-3 rounded-neu-sm bg-emerald-600 hover:bg-emerald-700 text-white shadow-neu-flat-xs active:shadow-neu-inset text-xs font-bold flex flex-col items-center justify-center gap-1.5 transition cursor-pointer disabled:opacity-50"
            >
              <UploadCloud className={`w-5 h-5 ${actionInProgress === "backup_to_drive" ? "animate-bounce" : ""}`} />
              <span>Sao Lưu Lên Drive</span>
              <span className="text-[10px] opacity-80 font-normal">Ghi đè bản mới nhất lên Drive</span>
            </button>

            {/* Nút 3: Khôi phục từ Drive */}
            <button
              type="button"
              onClick={() => handleAction("restore_from_drive")}
              disabled={Boolean(actionInProgress)}
              className="p-3 rounded-neu-sm bg-[#e6ecf5] hover:bg-slate-100 text-slate-800 shadow-neu-flat-xs active:shadow-neu-inset border border-slate-300 text-xs font-bold flex flex-col items-center justify-center gap-1.5 transition cursor-pointer disabled:opacity-50"
            >
              <DownloadCloud className={`w-5 h-5 ${actionInProgress === "restore_from_drive" ? "animate-pulse text-indigo-600" : ""}`} />
              <span>Khôi Phục Từ Drive</span>
              <span className="text-[10px] text-slate-500 font-normal">Nạp danh sách học sinh từ Drive</span>
            </button>
          </div>
        </div>

        {/* Hướng dẫn cài đặt vĩnh viễn trên Vercel */}
        <div className="p-3.5 rounded-neu-sm bg-amber-50/70 border border-amber-200/80 space-y-2 text-xs text-amber-950">
          <div className="flex items-center gap-2 font-bold text-amber-900">
            <Key className="w-4 h-4 text-amber-700 flex-shrink-0" />
            <span>Mẹo giữ kết nối vĩnh viễn sau mỗi lần Deploy trên Vercel:</span>
          </div>
          <p className="text-[11px] text-amber-800 leading-relaxed">
            Trên máy chủ Vercel Serverless, file JSON cục bộ sẽ không được commit vào Git (vì bảo mật). Để Vercel luôn kết nối Google Drive mà không mất dữ liệu:
          </p>
          <ol className="list-decimal pl-5 text-[11px] text-amber-800 space-y-1">
            <li>Mở dự án trên <strong>vercel.com</strong> $\rightarrow$ Chọn <strong>Settings</strong> $\rightarrow$ <strong>Environment Variables</strong>.</li>
            <li>Thêm biến <code>GOOGLE_SERVICE_ACCOUNT_KEY</code> với giá trị là nội dung tệp <code>onthithpt-509307-4cde4b6fcaea.json</code>.</li>
            <li>Bấm <strong>Save</strong> $\rightarrow$ <strong>Redeploy</strong> dự án.</li>
          </ol>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-300/60">
          <button
            type="button"
            onClick={() => {
              soundManager.playClick();
              onClose();
            }}
            className="px-5 py-2.5 rounded-neu-sm bg-[#e6ecf5] shadow-neu-flat-xs active:shadow-neu-inset text-xs font-bold text-slate-700 hover:text-slate-900 transition"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
