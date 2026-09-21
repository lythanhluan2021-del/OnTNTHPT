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
  Key,
  FolderGit2,
  FileText,
} from "lucide-react";

interface DriveSyncModalProps {
  isOpen: boolean;
  onClose: () => void;
  syncStatus: DriveSyncStatus;
  subjects: Subject[];
  selectedSubjectId: string;
  onSync: (sheetUrl: string, targetSubjectId?: string) => Promise<boolean>;
  onScanFolder?: (
    folderId: string,
    serviceAccountKey: string
  ) => Promise<{ count: number; subjectsCount: number; tree: any }>;
}

export const DriveSyncModal: React.FC<DriveSyncModalProps> = ({
  isOpen,
  onClose,
  syncStatus,
  subjects,
  selectedSubjectId,
  onSync,
  onScanFolder,
}) => {
  const [syncMode, setSyncMode] = useState<"folder_scanner" | "single_sheet">(
    "folder_scanner"
  );

  // States cho Folder Scanner qua Service Account
  const [folderId, setFolderId] = useState("19toY6VB5iERD2D9-tirycSjEz_YQbowL");
  const [serviceAccountJson, setServiceAccountJson] = useState("");
  const [scanTree, setScanTree] = useState<any>(null);

  // States cho Single Sheet URL
  const [activeSubjectId, setActiveSubjectId] = useState<string>(selectedSubjectId);
  const [subjectUrls, setSubjectUrls] = useState<{ [subjectId: string]: string }>({});

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    try {
      const savedUrls = localStorage.getItem("thpt_drive_subject_urls");
      if (savedUrls) setSubjectUrls(JSON.parse(savedUrls));

      const savedSaKey = localStorage.getItem("thpt_sa_key");
      if (savedSaKey) setServiceAccountJson(savedSaKey);

      const savedFolderId = localStorage.getItem("thpt_root_folder_id");
      if (savedFolderId) setFolderId(savedFolderId);
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

  const handleScanFolderSubmit = async () => {
    if (!serviceAccountJson.trim()) {
      setMessage("Vui lòng dán nội dung file JSON Service Account hoặc cấu hình biến môi trường!");
      setIsError(true);
      return;
    }

    setIsLoading(true);
    setMessage(null);
    setIsError(false);

    try {
      if (onScanFolder) {
        const result = await onScanFolder(folderId.trim(), serviceAccountJson.trim());
        setScanTree(result.tree);
        setMessage(
          `🎉 Đã quét xong thư mục OnTNTHPT! Nạp thành công ${result.count} câu hỏi từ ${result.subjectsCount} môn học.`
        );
        setIsError(false);
        try {
          localStorage.setItem("thpt_sa_key", serviceAccountJson.trim());
          localStorage.setItem("thpt_root_folder_id", folderId.trim());
        } catch {
          // Ignored
        }
      }
    } catch (err: any) {
      setMessage(err.message || "Lỗi quét thư mục Google Drive qua Service Account");
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSingleSheetSubmit = async () => {
    if (!currentUrl.trim()) {
      setMessage("Vui lòng dán link file Google Sheets vào ô dưới!");
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
            <div className="w-10 h-10 rounded-neu-sm bg-[#e6ecf5] shadow-neu-flat flex items-center justify-center text-blue-600">
              <FolderGit2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-800 text-sm sm:text-base">
                Quét Thư Mục Google Drive (OnTNTHPT)
              </h3>
              <p className="text-[11px] text-slate-500">
                Tự động duyệt thư mục con &amp; bóc tách câu hỏi từng chủ đề
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

        {/* Tab chuyển đổi chế độ */}
        <div className="grid grid-cols-2 gap-2 p-1 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset-sm">
          <button
            onClick={() => setSyncMode("folder_scanner")}
            className={`py-2 px-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
              syncMode === "folder_scanner"
                ? "bg-[#e6ecf5] text-blue-700 shadow-neu-flat-xs"
                : "text-slate-500 hover:text-slate-800"
            }`}
          >
            <FolderOpen className="w-4 h-4 text-blue-600" />
            <span>Quét Thư Mục Gốc (Tự động)</span>
          </button>

          <button
            onClick={() => setSyncMode("single_sheet")}
            className={`py-2 px-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
              syncMode === "single_sheet"
                ? "bg-[#e6ecf5] text-blue-700 shadow-neu-flat-xs"
                : "text-slate-500 hover:text-slate-800"
            }`}
          >
            <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
            <span>Dán Link Sheets Riêng</span>
          </button>
        </div>

        {/* ================= CHẾ ĐỘ 1: QUÉT TỰ ĐỘNG QUA SERVICE ACCOUNT ================= */}
        {syncMode === "folder_scanner" ? (
          <div className="space-y-3 pt-1">
            {/* Hướng dẫn 3 bước */}
            <div className="p-3 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset-sm space-y-2 text-xs text-slate-700">
              <div className="flex items-center gap-1.5 font-bold text-slate-800 text-[11px] sm:text-xs">
                <Info className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>Quy trình quét tự động qua Google Service Account:</span>
              </div>
              <ol className="list-decimal pl-4 space-y-1.5 text-[11px] text-slate-600 leading-relaxed">
                <li>
                  Tạo Service Account trên <strong>Google Cloud Console</strong> và tải file khóa <strong>JSON</strong>.
                </li>
                <li>
                  Mở thư mục <strong>OnTNTHPT</strong> trên Drive $\rightarrow$ bấm <strong>Chia sẻ</strong> cho email của Service Account (quyền Người xem).
                </li>
                <li>
                  Dán nội dung JSON vào ô dưới và bấm <strong>&ldquo;Bắt Đầu Quét Thư Mục Drive&rdquo;</strong>. Hệ thống sẽ tự động vào các thư mục con (Tin, Toán,...) đọc từng file đề bạn tải lên!
                </li>
              </ol>
            </div>

            {/* Input Folder ID */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 flex items-center justify-between">
                <span>ID Thư Mục Gốc Trên Drive (OnTNTHPT):</span>
              </label>
              <input
                type="text"
                value={folderId}
                onChange={(e) => setFolderId(e.target.value)}
                placeholder="19toY6VB5iERD2D9-tirycSjEz_YQbowL"
                className="w-full p-2.5 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset-sm text-xs font-mono text-slate-800 outline-none"
              />
            </div>

            {/* Input Service Account JSON */}
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                  <Key className="w-3.5 h-3.5 text-blue-600" />
                  <span>Nội dung Khóa JSON của Service Account:</span>
                </label>
                {serviceAccountJson && (
                  <span className="text-[10px] text-emerald-700 font-semibold">
                    ✓ Đã lưu khóa
                  </span>
                )}
              </div>
              <textarea
                rows={4}
                value={serviceAccountJson}
                onChange={(e) => setServiceAccountJson(e.target.value)}
                placeholder='{"type": "service_account", "project_id": "...", "client_email": "...", "private_key": "..."}'
                className="w-full p-2.5 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset-sm text-[11px] font-mono text-slate-800 outline-none placeholder:text-slate-400 resize-none"
              />
            </div>

            {/* Cây thư mục sau khi quét */}
            {scanTree && (
              <div className="p-3 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset-sm space-y-2">
                <p className="text-xs font-bold text-slate-800">
                  📁 Cây thư mục phát hiện trên Drive:
                </p>
                <div className="space-y-1.5 text-xs text-slate-700 pl-2 border-l-2 border-blue-400">
                  {scanTree.subfolders.map((sub: any) => (
                    <div key={sub.folderId} className="space-y-1">
                      <div className="font-bold flex items-center gap-1.5 text-blue-800">
                        <FolderOpen className="w-3.5 h-3.5" />
                        <span>Thư mục môn: {sub.folderName}</span>
                        <span className="text-[10px] bg-blue-100 text-blue-700 px-1.5 rounded-full font-semibold">
                          {sub.files.length} tệp
                        </span>
                      </div>
                      <div className="pl-4 space-y-0.5 text-[11px] text-slate-500">
                        {sub.files.map((f: any) => (
                          <div key={f.id} className="flex items-center gap-1">
                            <FileText className="w-3 h-3 text-slate-400" />
                            <span className="truncate">{f.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          /* ================= CHẾ ĐỘ 2: DÁN LINK TỪNG MÔN ================= */
          <div className="space-y-3 pt-1">
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

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">
                Link Google Sheets trong thư mục &ldquo;{folderName}&rdquo;:
              </label>
              <input
                type="text"
                value={currentUrl}
                onChange={(e) => handleUrlChange(e.target.value)}
                placeholder={`Dán link Google Sheets môn ${folderName} vào đây...`}
                className="w-full p-2.5 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset-sm text-xs text-slate-800 outline-none placeholder:text-slate-400"
              />
            </div>
          </div>
        )}

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
            <span className="leading-snug">{message}</span>
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

          {syncMode === "folder_scanner" ? (
            <button
              onClick={handleScanFolderSubmit}
              disabled={isLoading}
              className="px-4 py-2.5 rounded-neu-sm bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-neu-blue active:shadow-neu-blue-pressed text-xs font-bold flex items-center gap-2 cursor-pointer"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? "animate-spin" : ""}`} />
              <span>{isLoading ? "Đang quét thư mục Drive..." : "Quét Toàn Bộ Thư Mục OnTNTHPT"}</span>
            </button>
          ) : (
            <button
              onClick={handleSingleSheetSubmit}
              disabled={isLoading}
              className="px-4 py-2.5 rounded-neu-sm bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-neu-blue active:shadow-neu-blue-pressed text-xs font-bold flex items-center gap-2 cursor-pointer"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? "animate-spin" : ""}`} />
              <span>{isLoading ? "Đang nạp..." : `Đồng Bộ Môn ${folderName}`}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
