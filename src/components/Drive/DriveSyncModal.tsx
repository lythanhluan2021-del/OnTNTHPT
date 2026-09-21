"use client";

import React, { useState, useEffect } from "react";
import { DriveSyncStatus, Subject } from "@/types";
import {
  X,
  CloudDownload,
  CheckCircle2,
  FileSpreadsheet,
  AlertCircle,
  FolderOpen,
  ShieldCheck,
  RefreshCw,
  Copy,
  Info,
  Laptop,
  Calculator,
  Atom,
  ArrowRight,
} from "lucide-react";

interface DriveSyncModalProps {
  isOpen: boolean;
  onClose: () => void;
  syncStatus: DriveSyncStatus;
  subjects: Subject[];
  selectedSubjectId: string;
  onSync: (sheetUrl: string, targetSubjectId?: string) => Promise<boolean>;
}

export const DriveSyncModal: React.FC<DriveSyncModalProps> = ({
  isOpen,
  onClose,
  syncStatus,
  subjects,
  selectedSubjectId,
  onSync,
}) => {
  const [activeSubjectId, setActiveSubjectId] = useState<string>(selectedSubjectId);
  const [subjectUrls, setSubjectUrls] = useState<{ [subjectId: string]: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);
  const [copied, setCopied] = useState(false);

  // Khởi tạo link từ localStorage hoặc props
  useEffect(() => {
    try {
      const saved = localStorage.getItem("thpt_drive_subject_urls");
      if (saved) {
        setSubjectUrls(JSON.parse(saved));
      }
    } catch {
      // Ignored
    }
  }, []);

  useEffect(() => {
    if (selectedSubjectId) {
      setActiveSubjectId(selectedSubjectId);
    }
  }, [selectedSubjectId]);

  if (!isOpen) return null;

  const currentUrl = subjectUrls[activeSubjectId] || "";

  const handleUrlChange = (newVal: string) => {
    setSubjectUrls((prev) => {
      const updated = { ...prev, [activeSubjectId]: newVal };
      try {
        localStorage.setItem("thpt_drive_subject_urls", JSON.stringify(updated));
      } catch {
        // Ignored
      }
      return updated;
    });
  };

  const sampleHeaders =
    "ID,MonHoc,TenMon,Chuong,MaChuDe,TenChuDe,MucDo,CauHoi,DapAnA,DapAnB,DapAnC,DapAnD,DapAnDung,GoiY_L1,GoiY_L2,GoiY_L3,GiaiThich";

  const handleCopyHeaders = () => {
    navigator.clipboard.writeText(sampleHeaders);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSyncSubmit = async () => {
    if (!currentUrl.trim()) {
      setMessage("Vui lòng dán link file Google Sheets của môn này vào ô bên dưới!");
      setIsError(true);
      return;
    }

    setIsLoading(true);
    setMessage(null);
    setIsError(false);

    try {
      await onSync(currentUrl.trim(), activeSubjectId);
      const subj = subjects.find((s) => s.id === activeSubjectId);
      setMessage(`Đã đồng bộ thành công dữ liệu cho môn ${subj?.name || "học"}!`);
      setIsError(false);
    } catch (err: any) {
      setMessage(err.message || "Không thể đồng bộ từ link Google Drive.");
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const currentSubjectObj = subjects.find((s) => s.id === activeSubjectId);
  const folderName =
    activeSubjectId === "tin-hoc-12"
      ? "Tin"
      : activeSubjectId === "toan-12"
      ? "Toán"
      : "Lý";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/50 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-lg bg-[#e6ecf5] rounded-neu shadow-neu-flat p-4 sm:p-5 space-y-4 max-h-[92vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-300/60 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-neu-sm bg-[#e6ecf5] shadow-neu-flat flex items-center justify-center text-emerald-600">
              <FolderOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-800 text-sm sm:text-base">
                Liên Kết Google Drive Theo Thư Mục Môn
              </h3>
              <p className="text-[11px] text-slate-500">
                Thư mục gốc: <strong>Drive của tôi &gt; OnTNTHPT</strong>
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

        {/* Tab chọn môn học cần liên kết */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-700">
            Chọn môn học bạn muốn liên kết tệp:
          </label>
          <div className="grid grid-cols-3 gap-2">
            {subjects.map((subj) => {
              const isSelected = subj.id === activeSubjectId;
              const hasUrl = Boolean(subjectUrls[subj.id]);
              return (
                <button
                  key={subj.id}
                  onClick={() => {
                    setActiveSubjectId(subj.id);
                    setMessage(null);
                  }}
                  className={`p-2.5 rounded-neu-sm flex flex-col items-center justify-center gap-1 transition-all ${
                    isSelected
                      ? "bg-[#e6ecf5] text-blue-700 shadow-neu-inset border-2 border-blue-500/50 font-bold"
                      : "bg-[#e6ecf5] text-slate-600 shadow-neu-flat-xs active:shadow-neu-inset hover:text-blue-600"
                  }`}
                >
                  {subj.id.includes("tin") ? (
                    <Laptop className="w-4 h-4 text-indigo-600" />
                  ) : subj.id.includes("toan") ? (
                    <Calculator className="w-4 h-4 text-blue-600" />
                  ) : (
                    <Atom className="w-4 h-4 text-cyan-600" />
                  )}
                  <span className="text-xs">{subj.name}</span>
                  <span
                    className={`text-[9px] px-1.5 py-0.2 rounded-full ${
                      hasUrl
                        ? "bg-emerald-100 text-emerald-800 font-semibold"
                        : "bg-slate-200 text-slate-500"
                    }`}
                  >
                    {hasUrl ? "Đã gắn link" : "Chưa có"}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Hướng Dẫn Thao Tác Trực Tiếp Với Thư Mục Của Môn */}
        <div className="p-3 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset-sm space-y-2 text-xs text-slate-700">
          <div className="flex items-center gap-1.5 font-bold text-slate-800 text-[11px] sm:text-xs">
            <Info className="w-4 h-4 text-blue-600 flex-shrink-0" />
            <span>Cách lấy link cho môn {currentSubjectObj?.name}:</span>
          </div>
          <ol className="list-decimal pl-4 space-y-1.5 text-[11px] text-slate-600 leading-relaxed">
            <li>
              Trên Google Drive của bạn, mở thư mục <strong>OnTNTHPT</strong> $\rightarrow$ Nhấp đúp mở thư mục <strong>&ldquo;{folderName}&rdquo;</strong>.
            </li>
            <li>
              Trong thư mục <strong>&ldquo;{folderName}&rdquo;</strong>: Bấm <strong>+ Mới (New)</strong> $\rightarrow$ chọn <strong>Google Trang tính (Google Sheets)</strong> để tạo file ngân hàng câu hỏi môn {folderName}.
            </li>
            <li>
              Tại góc trên bên phải file Sheets: Bấm <strong>Chia sẻ (Share)</strong> $\rightarrow$ đổi quyền thành <strong>&ldquo;Bất kỳ ai có đường liên kết đều có thể xem&rdquo;</strong> $\rightarrow$ Bấm <strong>Sao chép đường liên kết</strong>.
            </li>
            <li>
              Dán link vào ô bên dưới và bấm <strong>&ldquo;Đồng Bộ Môn {folderName}&rdquo;</strong>.
            </li>
          </ol>
        </div>

        {/* Nút sao chép Tiêu đề 17 cột mẫu chuẩn */}
        <div className="flex items-center justify-between p-2.5 rounded-neu-sm bg-[#e6ecf5] shadow-neu-flat-xs text-xs">
          <span className="text-[11px] font-semibold text-slate-600">
            Dòng tiêu đề 17 cột mẫu chuẩn:
          </span>
          <button
            onClick={handleCopyHeaders}
            className="flex items-center gap-1 px-2.5 py-1 rounded bg-blue-600 text-white font-medium text-[10px] shadow-neu-blue active:scale-95 transition"
          >
            <Copy className="w-3 h-3" />
            <span>{copied ? "Đã sao chép!" : "Sao chép 17 cột"}</span>
          </button>
        </div>

        {/* Input link file của môn đang chọn */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-700 flex items-center justify-between">
            <span>Link Google Sheets trong thư mục &ldquo;{folderName}&rdquo;:</span>
            {currentUrl && (
              <span className="text-[10px] text-emerald-700 font-normal">
                ✓ Đã lưu đường dẫn
              </span>
            )}
          </label>
          <input
            type="text"
            value={currentUrl}
            onChange={(e) => handleUrlChange(e.target.value)}
            placeholder={`Dán link file Google Sheets trong thư mục "${folderName}" vào đây...`}
            className="w-full p-2.5 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset-sm text-xs text-slate-800 outline-none placeholder:text-slate-400"
          />
        </div>

        {/* Thông báo trạng thái */}
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
        <div className="pt-1 flex items-center justify-end gap-2">
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
            <span>{isLoading ? "Đang nạp..." : `Đồng Bộ Môn ${folderName}`}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
