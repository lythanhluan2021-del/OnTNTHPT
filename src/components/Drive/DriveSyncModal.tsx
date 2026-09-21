"use client";

import React, { useState } from "react";
import { DriveSyncStatus } from "@/types";
import {
  X,
  CloudDownload,
  CheckCircle2,
  FileSpreadsheet,
  AlertCircle,
  ExternalLink,
  ShieldCheck,
  RefreshCw,
} from "lucide-react";

interface DriveSyncModalProps {
  isOpen: boolean;
  onClose: () => void;
  syncStatus: DriveSyncStatus;
  onSync: (sheetUrl: string) => Promise<boolean>;
}

export const DriveSyncModal: React.FC<DriveSyncModalProps> = ({
  isOpen,
  onClose,
  syncStatus,
  onSync,
}) => {
  const [url, setUrl] = useState(
    syncStatus.sheetUrl ||
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vSampleLinkTHPT/pub?output=csv"
  );
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSyncSubmit = async () => {
    setIsLoading(true);
    setMessage(null);
    try {
      const ok = await onSync(url);
      if (ok) {
        setMessage("Đã đồng bộ thành công tài liệu từ Google Drive của bạn!");
      } else {
        setMessage("Đã nạp và cập nhật lại dữ liệu an toàn từ tài liệu chỉ định.");
      }
    } catch (err: any) {
      setMessage("Lỗi: " + (err.message || "Không thể tải từ link Google Drive"));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
      <div className="w-full max-w-md bg-[#e6ecf5] rounded-neu shadow-neu-flat p-5 space-y-4 max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-300/60 pb-3">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-neu-sm bg-[#e6ecf5] shadow-neu-flat flex items-center justify-center text-emerald-600">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-800 text-sm">
                Kết Nối Google Drive
              </h3>
              <p className="text-[11px] text-slate-500">
                Chỉ sử dụng tài liệu thầy/cô cung cấp
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-neu-sm bg-[#e6ecf5] shadow-neu-flat active:shadow-neu-inset text-slate-600"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Commitment Badge */}
        <div className="p-3 rounded-neu-sm bg-emerald-50 border border-emerald-300 flex items-start gap-2 text-xs text-emerald-900">
          <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
          <span>
            <strong>Nguyên tắc bảo toàn nội dung:</strong> Ứng dụng chỉ nạp câu hỏi và lý thuyết từ thư mục/Google Sheet bạn liên kết, <strong>tuyệt đối không bịa đặt nguồn ngoài</strong>.
          </span>
        </div>

        {/* Input Drive URL */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-700">
            Liên kết Google Sheets / Drive (Xuất bản dạng CSV hoặc Web):
          </label>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://docs.google.com/spreadsheets/d/.../pub?output=csv"
            className="w-full p-2.5 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset-sm text-xs text-slate-800 outline-none placeholder:text-slate-400"
          />
        </div>

        {/* Format guide */}
        <div className="p-3 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset-sm space-y-1.5 text-[11px] text-slate-600">
          <p className="font-bold text-slate-800">
            Cấu trúc cột Google Sheet khuyến nghị:
          </p>
          <p className="font-mono text-[10px] bg-slate-200/70 p-1.5 rounded text-slate-700 break-all leading-relaxed">
            ID, MonHoc, TenMon, Chuong, MaChuDe, TenChuDe, MucDo, CauHoi, DapAnA, DapAnB, DapAnC, DapAnD, DapAnDung, GoiY_L1, GoiY_L2, GoiY_L3, GiaiThich
          </p>
          <p className="text-slate-500 italic">
            * Các công thức toán có thể nhập định dạng LaTeX: <code>\( f(x) = x^2 \)</code>.
          </p>
        </div>

        {/* Status notification */}
        {message && (
          <div className="p-2.5 rounded-neu-sm bg-blue-50 text-blue-800 text-xs font-medium flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
            <span>{message}</span>
          </div>
        )}

        {/* Action Buttons */}
        <div className="pt-2 flex items-center justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-neu-sm bg-[#e6ecf5] shadow-neu-flat-xs active:shadow-neu-inset text-xs font-semibold text-slate-600"
          >
            Đóng
          </button>

          <button
            onClick={handleSyncSubmit}
            disabled={isLoading}
            className="px-4 py-2 rounded-neu-sm bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-neu-blue active:shadow-neu-blue-pressed text-xs font-bold flex items-center gap-2"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? "animate-spin" : ""}`} />
            <span>{isLoading ? "Đang đồng bộ..." : "Đồng Bộ Ngay"}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
