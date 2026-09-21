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
  Copy,
  Info,
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
  const [url, setUrl] = useState(syncStatus.sheetUrl || "");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const sampleHeaders =
    "ID,MonHoc,TenMon,Chuong,MaChuDe,TenChuDe,MucDo,CauHoi,DapAnA,DapAnB,DapAnC,DapAnD,DapAnDung,GoiY_L1,GoiY_L2,GoiY_L3,GiaiThich";

  const handleCopyHeaders = () => {
    navigator.clipboard.writeText(sampleHeaders);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSyncSubmit = async () => {
    if (!url.trim()) {
      setMessage("Vui lòng dán đường link Google Sheets vào ô dưới!");
      setIsError(true);
      return;
    }

    setIsLoading(true);
    setMessage(null);
    setIsError(false);

    try {
      await onSync(url.trim());
      setMessage("Đã đồng bộ thành công toàn bộ câu hỏi từ Google Drive!");
      setIsError(false);
    } catch (err: any) {
      setMessage(err.message || "Không thể đồng bộ từ link Google Drive.");
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-md bg-[#e6ecf5] rounded-neu shadow-neu-flat p-5 space-y-4 max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-300/60 pb-3">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-neu-sm bg-[#e6ecf5] shadow-neu-flat flex items-center justify-center text-emerald-600">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-800 text-sm sm:text-base">
                Kết Nối Google Drive
              </h3>
              <p className="text-[11px] text-slate-500">
                Nguồn tài liệu khép kín • Không bịa đặt nguồn ngoài
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-neu-sm bg-[#e6ecf5] shadow-neu-flat active:shadow-neu-inset text-slate-600"
            aria-label="Đóng"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Nguyên tắc cam kết */}
        <div className="p-3 rounded-neu-sm bg-emerald-50 border border-emerald-300 flex items-start gap-2 text-xs text-emerald-900 leading-relaxed">
          <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
          <span>
            <strong>Bảo toàn tài liệu:</strong> Hệ thống đọc trực tiếp câu hỏi và các nấc gợi ý từ file của bạn. Gia sư AI chỉ được phép dựa vào tài liệu này để hướng dẫn, tuyệt đối không bịa đặt nguồn ngoài.
          </span>
        </div>

        {/* 3 Bước Hướng Dẫn Nhanh */}
        <div className="p-3 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset-sm space-y-2 text-xs text-slate-700">
          <p className="font-bold text-slate-800 flex items-center gap-1.5">
            <Info className="w-3.5 h-3.5 text-blue-600" />
            <span>3 bước kết nối Google Sheets:</span>
          </p>
          <ol className="list-decimal pl-4 space-y-1 text-[11px] text-slate-600">
            <li>
              Tạo file Google Sheets và đặt hàng đầu tiên theo tiêu chuẩn cột.
            </li>
            <li>
              Bấm nút <strong>Chia sẻ (Share)</strong> ở góc phải Google Sheets $\rightarrow$ chuyển sang <strong>&quot;Bất kỳ ai có đường liên kết đều có thể xem&quot;</strong>.
            </li>
            <li>
              Sao chép link từ thanh địa chỉ trình duyệt, dán vào ô bên dưới rồi bấm <strong>Đồng Bộ Ngay</strong>.
            </li>
          </ol>
        </div>

        {/* Nút sao chép Tiêu đề cột mẫu */}
        <div className="flex items-center justify-between p-2 rounded-neu-sm bg-[#e6ecf5] shadow-neu-flat-xs text-xs">
          <span className="text-[11px] font-semibold text-slate-600">
            Dòng tiêu đề 17 cột mẫu chuẩn:
          </span>
          <button
            onClick={handleCopyHeaders}
            className="flex items-center gap-1 px-2 py-1 rounded bg-blue-600 text-white font-medium text-[10px] shadow-neu-blue active:scale-95 transition"
          >
            <Copy className="w-3 h-3" />
            <span>{copied ? "Đã chép!" : "Sao chép"}</span>
          </button>
        </div>

        {/* Input Drive URL */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-700">
            Đường link Google Sheets của bạn:
          </label>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://docs.google.com/spreadsheets/d/1BxiMVs.../edit?usp=sharing"
            className="w-full p-2.5 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset-sm text-xs text-slate-800 outline-none placeholder:text-slate-400"
          />
        </div>

        {/* Thông báo kết quả */}
        {message && (
          <div
            className={`p-2.5 rounded-neu-sm text-xs font-medium flex items-start gap-2 ${
              isError
                ? "bg-rose-50 text-rose-800 border border-rose-200"
                : "bg-emerald-50 text-emerald-800 border border-emerald-200"
            }`}
          >
            {isError ? (
              <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
            ) : (
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
            )}
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
            className="px-4 py-2 rounded-neu-sm bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-neu-blue active:shadow-neu-blue-pressed text-xs font-bold flex items-center gap-2 cursor-pointer"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? "animate-spin" : ""}`} />
            <span>{isLoading ? "Đang đồng bộ..." : "Đồng Bộ Ngay"}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
