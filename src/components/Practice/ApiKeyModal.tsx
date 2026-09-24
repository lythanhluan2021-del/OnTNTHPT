"use client";

import React, { useState, useEffect } from "react";
import {
  X,
  Key,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Cpu,
  ShieldCheck,
  Eye,
  EyeOff,
  RefreshCw,
  Copy,
  Check,
  Zap,
} from "lucide-react";

interface ApiKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onKeySaved?: (apiKey: string, model: string) => void;
}

export const ApiKeyModal: React.FC<ApiKeyModalProps> = ({
  isOpen,
  onClose,
  onKeySaved,
}) => {
  const [apiKey, setApiKey] = useState("");
  const [selectedModel, setSelectedModel] = useState("gemini-3.8-flash");
  const [showKey, setShowKey] = useState(false);
  const [isTesting, setIsTesting] = useState(false);
  const [testResult, setTestResult] = useState<{
    status: "idle" | "success" | "error";
    message: string;
  }>({ status: "idle", message: "" });
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedKey = localStorage.getItem("custom_gemini_api_key") || "";
      const savedModel =
        localStorage.getItem("custom_gemini_model") || "gemini-3.8-flash";
      setApiKey(savedKey);
      setSelectedModel(savedModel);
      if (savedKey) {
        setTestResult({
          status: "success",
          message: "Đã có API Key lưu trong trình duyệt.",
        });
      } else {
        setTestResult({ status: "idle", message: "" });
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleTestConnection = async () => {
    const trimmedKey = apiKey.trim();
    if (!trimmedKey) {
      setTestResult({
        status: "error",
        message: "Vui lòng nhập API Key để kiểm tra.",
      });
      return;
    }

    setIsTesting(true);
    setTestResult({ status: "idle", message: "" });

    try {
      const res = await fetch("/api/socratic", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          testConnection: true,
          customApiKey: trimmedKey,
          model: selectedModel,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setTestResult({
          status: "success",
          message: `Kết nối thành công với ${selectedModel}! Trợ lý AI thực đã sẵn sàng.`,
        });
        // Tự động lưu
        localStorage.setItem("custom_gemini_api_key", trimmedKey);
        localStorage.setItem("custom_gemini_model", selectedModel);
        if (onKeySaved) onKeySaved(trimmedKey, selectedModel);
      } else {
        setTestResult({
          status: "error",
          message:
            data.error ||
            "Không thể kết nối với Gemini. Vui lòng kiểm tra lại API Key.",
        });
      }
    } catch (err: any) {
      setTestResult({
        status: "error",
        message: "Lỗi mạng hoặc không thể gọi API: " + (err.message || ""),
      });
    } finally {
      setIsTesting(false);
    }
  };

  const handleSave = () => {
    const trimmedKey = apiKey.trim();
    if (typeof window !== "undefined") {
      if (trimmedKey) {
        localStorage.setItem("custom_gemini_api_key", trimmedKey);
        localStorage.setItem("custom_gemini_model", selectedModel);
        setTestResult({
          status: "success",
          message: "Đã lưu API Key thành công!",
        });
      } else {
        localStorage.removeItem("custom_gemini_api_key");
        setTestResult({
          status: "idle",
          message: "Đã xóa API Key cá nhân. Chuyển về chế độ Offline.",
        });
      }
      if (onKeySaved) onKeySaved(trimmedKey, selectedModel);
    }
    setTimeout(() => {
      onClose();
    }, 600);
  };

  const handleClearKey = () => {
    setApiKey("");
    if (typeof window !== "undefined") {
      localStorage.removeItem("custom_gemini_api_key");
    }
    setTestResult({
      status: "idle",
      message: "Đã xóa API Key. Ứng dụng sẽ dùng bộ máy Offline.",
    });
    if (onKeySaved) onKeySaved("", selectedModel);
  };

  const handleCopyStudioUrl = () => {
    navigator.clipboard.writeText("https://aistudio.google.com/app/apikey");
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/70 dark:bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-lg bg-[#e6ecf5] dark:bg-[#1a1f26] rounded-neu md:rounded-neu-lg shadow-neu-flat dark:shadow-[8px_8px_24px_#101317,-8px_-8px_24px_#242b35] border border-slate-300/60 dark:border-slate-800 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="p-4 border-b border-slate-300/70 dark:border-slate-800 flex items-center justify-between bg-[#e6ecf5] dark:bg-[#1f252e]">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-neu-blue">
              <Sparkles className="w-4 h-4 text-amber-300" />
            </div>
            <div>
              <h3 className="font-bold text-slate-800 dark:text-slate-100 text-sm sm:text-base flex items-center gap-2">
                <span>Cấu hình Trợ Lý Gemini AI Thực</span>
                <span className="text-[10px] bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded-full font-bold border border-blue-300/60 dark:border-blue-800">
                  Miễn phí 100%
                </span>
              </h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Thế hệ Google Gemini 3 • Tư duy Socratic phản xạ sâu
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-neu-sm bg-[#e6ecf5] dark:bg-[#202734] shadow-neu-flat dark:shadow-none active:shadow-neu-inset text-slate-600 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
          {/* Hướng dẫn 3 bước nhanh */}
          <div className="p-3.5 rounded-neu-sm bg-gradient-to-br from-blue-50/90 to-indigo-50/70 dark:from-blue-950/30 dark:to-indigo-950/20 border border-blue-200 dark:border-blue-900/60 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="font-bold text-blue-900 dark:text-blue-200 text-xs uppercase flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-500" />
                Cách lấy API Key Miễn phí (Chưa tới 1 phút):
              </span>
              <button
                type="button"
                onClick={handleCopyStudioUrl}
                className="text-[11px] text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1 font-medium"
              >
                {copiedLink ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-500" />
                    <span>Đã chép link</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Chép link</span>
                  </>
                )}
              </button>
            </div>

            <ol className="list-decimal list-inside space-y-1.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              <li>
                Truy cập cổng Google AI Studio:{" "}
                <a
                  href="https://aistudio.google.com/app/apikey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 underline font-bold inline-flex items-center gap-0.5"
                >
                  aistudio.google.com/app/apikey
                  <ExternalLink className="w-3 h-3" />
                </a>{" "}
                (Đăng nhập Gmail cá nhân bất kỳ, <strong>không cần thẻ ngân hàng</strong>).
              </li>
              <li>
                Bấm nút xanh <strong>"Create API key"</strong> &gt; Chọn{" "}
                <strong>"Create key in new project"</strong>.
              </li>
              <li>
                Copy chuỗi khóa (bắt đầu bằng <code>AIzaSy...</code>) và dán vào
                ô bên dưới.
              </li>
            </ol>
          </div>

          {/* Ô nhập API Key */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-200">
              Google Gemini API Key của em:
            </label>
            <div className="relative flex items-center">
              <div className="absolute left-3 text-slate-400">
                <Key className="w-4 h-4" />
              </div>
              <input
                type={showKey ? "text" : "password"}
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="Dán mã AIzaSy..."
                className="w-full pl-9 pr-20 py-2.5 rounded-neu-sm bg-[#e6ecf5] dark:bg-[#202734] shadow-neu-inset dark:shadow-none border border-slate-300 dark:border-slate-700 text-xs sm:text-sm font-mono text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => setShowKey(!showKey)}
                className="absolute right-2.5 p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                title={showKey ? "Ẩn khóa" : "Hiện khóa"}
              >
                {showKey ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              Khóa API được lưu cục bộ trên máy của em (Local Storage), tuyệt đối
              an toàn.
            </p>
          </div>

          {/* Lựa chọn mô hình Gemini */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-200">
              Mô hình AI:
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setSelectedModel("gemini-2.5-flash")}
                className={`p-2.5 rounded-neu-sm text-left border transition text-xs ${
                  selectedModel === "gemini-2.5-flash"
                    ? "bg-blue-50 dark:bg-blue-950/50 border-blue-500 text-blue-900 dark:text-blue-200 font-bold shadow-neu-flat-xs"
                    : "bg-[#e6ecf5] dark:bg-[#202734] border-slate-300/80 dark:border-slate-700 text-slate-700 dark:text-slate-300"
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                  <span>Gemini Flash (Khuyên dùng)</span>
                </div>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 font-normal">
                  Tự động tối ưu • Tư duy sâu &amp; chính xác
                </p>
              </button>

              <button
                type="button"
                onClick={() => setSelectedModel("gemini-2.0-flash")}
                className={`p-2.5 rounded-neu-sm text-left border transition text-xs ${
                  selectedModel === "gemini-2.0-flash"
                    ? "bg-blue-50 dark:bg-blue-950/50 border-blue-500 text-blue-900 dark:text-blue-200 font-bold shadow-neu-flat-xs"
                    : "bg-[#e6ecf5] dark:bg-[#202734] border-slate-300/80 dark:border-slate-700 text-slate-700 dark:text-slate-300"
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-amber-500" />
                  <span>Gemini 2.0 / 1.5</span>
                </div>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 font-normal">
                  Độ trễ thấp • Tương thích mọi tài khoản
                </p>
              </button>
            </div>
          </div>

          {/* Trạng thái kiểm tra kết nối */}
          {testResult.message && (
            <div
              className={`p-2.5 rounded-neu-sm text-xs flex items-start gap-2 ${
                testResult.status === "success"
                  ? "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800"
                  : testResult.status === "error"
                  ? "bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-300 border border-rose-300 dark:border-rose-800"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
              }`}
            >
              {testResult.status === "success" ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
              ) : testResult.status === "error" ? (
                <AlertCircle className="w-4 h-4 text-rose-600 dark:text-rose-400 flex-shrink-0 mt-0.5" />
              ) : null}
              <div className="flex-1 leading-snug">{testResult.message}</div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-3.5 sm:p-4 border-t border-slate-300/70 dark:border-slate-800 bg-[#e6ecf5] dark:bg-[#1f252e] flex flex-wrap items-center justify-between gap-2">
          {apiKey ? (
            <button
              type="button"
              onClick={handleClearKey}
              className="text-xs text-rose-600 dark:text-rose-400 hover:underline font-semibold"
            >
              Xóa API Key
            </button>
          ) : (
            <span className="text-[11px] text-slate-500 dark:text-slate-400">
              Chưa có key: Hoạt động chế độ Offline
            </span>
          )}

          <div className="flex items-center gap-2 ml-auto">
            <button
              type="button"
              onClick={handleTestConnection}
              disabled={isTesting || !apiKey.trim()}
              className="px-3 py-2 rounded-neu-sm text-xs font-bold bg-[#e6ecf5] dark:bg-[#202734] shadow-neu-flat-xs dark:shadow-none active:shadow-neu-inset text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 hover:text-blue-600 dark:hover:text-blue-400 disabled:opacity-50 flex items-center gap-1.5 transition cursor-pointer"
            >
              {isTesting ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin text-blue-600" />
                  <span>Đang thử...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>Kiểm tra kết nối</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handleSave}
              className="px-4 py-2 rounded-neu-sm text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-neu-blue active:scale-95 transition cursor-pointer"
            >
              Lưu &amp; Bắt đầu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
