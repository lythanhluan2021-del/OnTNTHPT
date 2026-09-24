"use client";

import React, { useState, useEffect, useRef, useTransition } from "react";
import {
  Play,
  Square,
  RotateCcw,
  Copy,
  Check,
  Trash2,
  Terminal,
  BookOpen,
  Sparkles,
  AlertCircle,
  HelpCircle,
  Clock,
  ChevronDown,
  Layers,
  Code2,
  Maximize2,
  Minimize2,
  Share2,
} from "lucide-react";
import { pythonRunner, PythonRunResult, PyodideStatus } from "@/lib/pyodideRunner";
import { PYTHON_TEMPLATES, PythonTemplate } from "@/data/pythonTemplates";
import {
  PYTHON_QUESTION_EXERCISES_LIST,
  PYTHON_QUESTION_EXERCISES,
  PythonQuestionExercise,
} from "@/data/pythonQuestionCodes";
import { soundManager } from "@/lib/audioEffects";

interface PythonIdeProps {
  initialCode?: string;
  initialStdin?: string;
  exerciseTitle?: string;
  exerciseTargetAnswer?: string;
  exerciseQuestionNumber?: number | string;
  onClose?: () => void;
  isModal?: boolean;
}

export const PythonIde: React.FC<PythonIdeProps> = ({
  initialCode,
  initialStdin = "",
  exerciseTitle,
  exerciseTargetAnswer,
  exerciseQuestionNumber,
  onClose,
  isModal = false,
}) => {
  const [code, setCode] = useState<string>(
    initialCode ||
      PYTHON_TEMPLATES[0].code
  );
  const [stdin, setStdin] = useState<string>(initialStdin || PYTHON_TEMPLATES[0].defaultInput || "");
  const [stdout, setStdout] = useState<string>("");
  const [stderr, setStderr] = useState<string>("");
  const [errorAdvice, setErrorAdvice] = useState<string | null>(null);
  const [executionTime, setExecutionTime] = useState<number | null>(null);
  const [runnerStatus, setRunnerStatus] = useState<PyodideStatus>("idle");
  const [statusMessage, setStatusMessage] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);
  const [showStdin, setShowStdin] = useState<boolean>(false);
  const [showTemplateModal, setShowTemplateModal] = useState<boolean>(false);
  const [templateModalTab, setTemplateModalTab] = useState<"exam" | "basic">("exam");
  const [activeExerciseInfo, setActiveExerciseInfo] = useState<{
    title: string;
    targetAnswer?: string;
    questionNumber?: number | string;
  } | null>(
    exerciseTitle
      ? {
          title: exerciseTitle,
          targetAnswer: exerciseTargetAnswer,
          questionNumber: exerciseQuestionNumber,
        }
      : null
  );
  const [mobileTab, setMobileTab] = useState<"editor" | "output">("editor");

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const lineNumbersRef = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Theo dõi trạng thái Web Worker & Pyodide
  useEffect(() => {
    // Kích hoạt preload Pyodide ngay khi component mount
    pythonRunner.preload();

    const unsubStatus = pythonRunner.addStatusListener((status, msg) => {
      setRunnerStatus(status);
      if (msg) setStatusMessage(msg);
    });

    return () => {
      unsubStatus();
    };
  }, []);

  // Cập nhật khi props thay đổi từ bên ngoài
  useEffect(() => {
    if (initialCode !== undefined) {
      setCode(initialCode);
    }
    if (initialStdin !== undefined) {
      setStdin(initialStdin);
      if (initialStdin.trim()) setShowStdin(true);
    }
    if (exerciseTitle) {
      setActiveExerciseInfo({
        title: exerciseTitle,
        targetAnswer: exerciseTargetAnswer,
        questionNumber: exerciseQuestionNumber,
      });
    }
  }, [initialCode, initialStdin, exerciseTitle, exerciseTargetAnswer, exerciseQuestionNumber]);

  // Cuộn đồng bộ số dòng với textarea
  const handleScroll = () => {
    if (textareaRef.current && lineNumbersRef.current) {
      lineNumbersRef.current.scrollTop = textareaRef.current.scrollTop;
    }
  };

  // Tính số dòng
  const lineCount = Math.max(code.split("\n").length, 1);
  const lineNumbers = Array.from({ length: lineCount }, (_, i) => i + 1);

  // Xử lý phím Tab và phím Enter (tự động lùi dòng và giữ thụt lề)
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Phím tắt Ctrl+Enter hoặc Cmd+Enter để chạy mã nhanh
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      e.preventDefault();
      handleRun();
      return;
    }

    const target = e.currentTarget;
    const start = target.selectionStart;
    const end = target.selectionEnd;

    // Xử lý phím Tab (thêm 4 dấu cách)
    if (e.key === "Tab") {
      e.preventDefault();
      const newCode = code.substring(0, start) + "    " + code.substring(end);
      setCode(newCode);
      setTimeout(() => {
        target.selectionStart = target.selectionEnd = start + 4;
      }, 0);
      return;
    }

    // Xử lý phím Enter (tự động tính toán thụt lề dòng trước)
    if (e.key === "Enter") {
      e.preventDefault();
      // Tìm dòng hiện tại
      const linesBefore = code.substring(0, start).split("\n");
      const currentLine = linesBefore[linesBefore.length - 1];
      const indentMatch = currentLine.match(/^\s*/);
      let indent = indentMatch ? indentMatch[0] : "";

      // Nếu dòng trước kết thúc bằng dấu hai chấm ":", tăng thêm 4 dấu cách
      if (currentLine.trim().endsWith(":")) {
        indent += "    ";
      }

      const insertText = "\n" + indent;
      const newCode = code.substring(0, start) + insertText + code.substring(end);
      setCode(newCode);

      setTimeout(() => {
        target.selectionStart = target.selectionEnd = start + insertText.length;
      }, 0);
      return;
    }

    // Tự động đóng cặp ngoặc hoặc nháy
    const pairs: Record<string, string> = {
      "(": ")",
      "[": "]",
      "{": "}",
      '"': '"',
      "'": "'",
    };

    if (pairs[e.key] && start === end) {
      e.preventDefault();
      const closeChar = pairs[e.key];
      const newCode = code.substring(0, start) + e.key + closeChar + code.substring(end);
      setCode(newCode);
      setTimeout(() => {
        target.selectionStart = target.selectionEnd = start + 1;
      }, 0);
    }
  };

  // Thực thi mã nguồn Python
  const handleRun = async () => {
    if (runnerStatus === "running") return;

    soundManager.playClick();
    setStdout("");
    setStderr("");
    setErrorAdvice(null);
    setExecutionTime(null);

    // Trên điện thoại, tự động chuyển sang tab kết quả để học sinh nhìn thấy ngay
    if (window.innerWidth < 768) {
      setMobileTab("output");
    }

    // Tự động mở ô input nếu code có lệnh input() mà stdin đang rỗng
    if (code.includes("input(") && !stdin.trim()) {
      setShowStdin(true);
    }

    try {
      const result = await pythonRunner.run(code, stdin);
      setStdout(result.stdout);
      setStderr(result.stderr);
      setErrorAdvice(result.errorAdvice || null);
      setExecutionTime(result.executionTimeMs);

      if (result.success) {
        soundManager.playCorrect();
      } else {
        soundManager.playIncorrect();
      }

      // Tự động cuộn xuống cuối màn hình kết quả
      setTimeout(() => {
        if (terminalRef.current) {
          terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
      }, 50);
    } catch (err: any) {
      setStderr("Lỗi thực thi: " + (err.message || String(err)));
      soundManager.playIncorrect();
    }
  };

  // Dừng thực thi
  const handleStop = () => {
    soundManager.playClick();
    pythonRunner.stopExecution();
  };

  // Sao chép mã nguồn
  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard fallback
    }
  };

  // Chọn bài mẫu từ thư viện cơ bản
  const handleSelectTemplate = (template: PythonTemplate) => {
    soundManager.playClick();
    setCode(template.code);
    if (template.defaultInput !== undefined) {
      setStdin(template.defaultInput);
      if (template.defaultInput) {
        setShowStdin(true);
      }
    } else {
      setStdin("");
    }
    setActiveExerciseInfo({
      title: template.title,
    });
    setStdout("");
    setStderr("");
    setErrorAdvice(null);
    setShowTemplateModal(false);
  };

  // Chọn bài tập trích xuất từ câu hỏi đề thi THPT
  const handleSelectExamExercise = (exercise: PythonQuestionExercise) => {
    soundManager.playClick();
    setCode(exercise.runnableCode);
    if (exercise.defaultInput !== undefined) {
      setStdin(exercise.defaultInput);
      if (exercise.defaultInput) {
        setShowStdin(true);
      }
    } else {
      setStdin("");
    }
    setActiveExerciseInfo({
      title: exercise.title,
      targetAnswer: exercise.targetAnswer,
      questionNumber: exercise.questionNumber,
    });
    setStdout("");
    setStderr("");
    setErrorAdvice(null);
    setShowTemplateModal(false);
  };

  return (
    <div className="flex flex-col h-full rounded-neu bg-[#e6ecf5] shadow-neu-flat border border-white/80 overflow-hidden">
      {/* 1. Header Toolbar */}
      <div className="p-3 sm:p-4 border-b border-slate-200/80 bg-[#e6ecf5] flex flex-wrap items-center justify-between gap-2.5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-neu-sm bg-blue-100 flex items-center justify-center text-blue-600 shadow-neu-flat-xs">
            <Terminal className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xs sm:text-sm font-black text-slate-800 tracking-tight">
                Python IDE (CPython 3.12 WebAssembly)
              </h3>
              {/* Status Indicator */}
              <span
                className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold ${
                  runnerStatus === "running"
                    ? "bg-blue-100 text-blue-700 animate-pulse"
                    : runnerStatus === "loading"
                    ? "bg-amber-100 text-amber-700 animate-pulse"
                    : runnerStatus === "ready"
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-slate-200 text-slate-600"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    runnerStatus === "running"
                      ? "bg-blue-600"
                      : runnerStatus === "loading"
                      ? "bg-amber-500"
                      : runnerStatus === "ready"
                      ? "bg-emerald-500"
                      : "bg-slate-400"
                  }`}
                />
                <span>
                  {runnerStatus === "running"
                    ? "Đang chạy..."
                    : runnerStatus === "loading"
                    ? "Đang tải Python..."
                    : runnerStatus === "ready"
                    ? "Sẵn sàng"
                    : "Khởi động"}
                </span>
              </span>
            </div>
            <p className="text-[10px] text-slate-500 hidden sm:block">
              Chạy trực tiếp 100% trên trình duyệt • Không tốn tài nguyên • Hỗ trợ phím tắt Ctrl + Enter
            </p>
          </div>
        </div>

        {/* Nút hành động */}
        <div className="flex items-center gap-1.5">
          {/* Nút mở Thư viện bài mẫu */}
          <button
            onClick={() => setShowTemplateModal(true)}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-neu-sm bg-[#e6ecf5] text-slate-700 hover:text-blue-600 text-xs font-bold shadow-neu-flat-sm active:shadow-neu-inset transition-all"
            title="Chọn bài tập mẫu từ chương trình Tin học 10 & 12"
          >
            <BookOpen className="w-3.5 h-3.5 text-blue-600" />
            <span className="hidden xs:inline">Bài mẫu</span>
            <ChevronDown className="w-3 h-3 text-slate-400" />
          </button>

          {/* Nút sao chép mã */}
          <button
            onClick={handleCopyCode}
            className="p-1.5 rounded-neu-sm bg-[#e6ecf5] text-slate-600 hover:text-blue-600 shadow-neu-flat-sm active:shadow-neu-inset transition-all"
            title="Sao chép toàn bộ mã nguồn"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
          </button>

          {/* Nút xóa sạch editor */}
          <button
            onClick={() => {
              if (window.confirm("Bạn có chắc chắn muốn xóa sạch toàn bộ mã nguồn đang soạn?")) {
                setCode("");
                setStdout("");
                setStderr("");
                setErrorAdvice(null);
              }
            }}
            className="p-1.5 rounded-neu-sm bg-[#e6ecf5] text-slate-600 hover:text-rose-600 shadow-neu-flat-sm active:shadow-neu-inset transition-all"
            title="Xóa trắng mã nguồn"
          >
            <Trash2 className="w-4 h-4" />
          </button>

          {/* Nút Dừng hoặc Chạy code */}
          {runnerStatus === "running" ? (
            <button
              onClick={handleStop}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-neu-sm bg-rose-600 text-white font-bold text-xs shadow-md hover:bg-rose-700 active:scale-95 transition-all"
            >
              <Square className="w-3.5 h-3.5 fill-current" />
              <span>Dừng lại</span>
            </button>
          ) : (
            <button
              onClick={handleRun}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-neu-sm bg-blue-600 text-white font-bold text-xs shadow-neu-blue hover:bg-blue-700 active:scale-95 transition-all"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Chạy code</span>
            </button>
          )}

          {isModal && onClose && (
            <button
              onClick={onClose}
              className="p-1.5 ml-1 rounded-neu-sm bg-[#e6ecf5] text-slate-500 hover:text-slate-800 shadow-neu-flat-sm active:shadow-neu-inset"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Banner thông tin bài tập đề thi đang thực hành */}
      {activeExerciseInfo && (
        <div className="px-3 sm:px-4 py-2 bg-blue-100/90 border-b border-blue-200/90 flex flex-wrap items-center justify-between gap-2 text-xs animate-fade-in">
          <div className="flex items-center gap-2 min-w-0">
            <span className="px-2 py-0.5 rounded-full bg-blue-700 text-white text-[10px] font-black shrink-0 shadow-xs">
              {activeExerciseInfo.questionNumber
                ? typeof activeExerciseInfo.questionNumber === "number"
                  ? `Câu ${activeExerciseInfo.questionNumber}`
                  : activeExerciseInfo.questionNumber
                : "Thực hành"}
            </span>
            <span className="font-bold text-slate-800 truncate">
              {activeExerciseInfo.title}
            </span>
          </div>
          {activeExerciseInfo.targetAnswer && (
            <div className="flex items-center gap-1.5 shrink-0">
              <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-300 shadow-xs flex items-center gap-1">
                <span>🎯 Mục tiêu đối chiếu:</span>
                <span className="font-extrabold">{activeExerciseInfo.targetAnswer}</span>
              </span>
            </div>
          )}
        </div>
      )}

      {/* 2. Thanh chuyển Tab trên màn hình nhỏ (Mobile Tab Bar) */}
      <div className="flex md:hidden border-b border-slate-200 bg-[#e6ecf5] p-1 gap-1">
        <button
          onClick={() => setMobileTab("editor")}
          className={`flex-1 py-1.5 rounded-neu-sm text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
            mobileTab === "editor"
              ? "bg-[#e6ecf5] text-blue-600 shadow-neu-inset"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          <Code2 className="w-3.5 h-3.5" />
          <span>Mã nguồn Python</span>
        </button>
        <button
          onClick={() => setMobileTab("output")}
          className={`flex-1 py-1.5 rounded-neu-sm text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
            mobileTab === "output"
              ? "bg-[#e6ecf5] text-blue-600 shadow-neu-inset"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          <Terminal className="w-3.5 h-3.5" />
          <span>Màn hình Output</span>
          {(stdout || stderr) && (
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          )}
        </button>
      </div>

      {/* 3. Vùng làm việc chính: Chia cột trên Desktop, Tab trên Mobile */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden min-h-[380px] max-h-[700px]">
        {/* CỘT TRÁI: Trình soạn thảo Code (Editor) */}
        <div
          className={`flex flex-col border-r border-slate-200/80 bg-[#1e293b] text-slate-100 ${
            mobileTab === "editor" ? "flex" : "hidden md:flex"
          }`}
        >
          {/* Header nhỏ của Editor */}
          <div className="px-3 py-1.5 bg-[#0f172a] text-slate-400 text-[11px] font-mono flex items-center justify-between border-b border-slate-800">
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              main.py
            </span>
            <span className="text-[10px] text-slate-500">
              {lineCount} dòng • {code.length} ký tự
            </span>
          </div>

          {/* Vùng viết Code có số dòng bên trái */}
          <div className="flex-1 relative flex overflow-hidden font-mono text-xs sm:text-sm">
            {/* Cột đánh số dòng */}
            <div
              ref={lineNumbersRef}
              className="w-10 sm:w-12 py-3 bg-[#0f172a]/60 text-slate-500 text-right pr-2.5 select-none overflow-hidden border-r border-slate-800/80 font-mono text-[11px] sm:text-xs"
            >
              {lineNumbers.map((n) => (
                <div key={n} className="leading-6 h-6">
                  {n}
                </div>
              ))}
            </div>

            {/* Textarea viết mã */}
            <textarea
              ref={textareaRef}
              value={code}
              onChange={(e) => setCode(e.target.value)}
              onScroll={handleScroll}
              onKeyDown={handleKeyDown}
              spellCheck={false}
              autoCapitalize="off"
              autoComplete="off"
              autoCorrect="off"
              placeholder="# Viết mã nguồn Python tại đây..."
              className="flex-1 p-3 bg-transparent text-slate-100 resize-none outline-none leading-6 font-mono whitespace-pre overflow-auto tab-4 select-text"
              style={{ tabSize: 4 }}
            />
          </div>

          {/* Khung Dữ liệu đầu vào (Standard Input / stdin) */}
          <div className="border-t border-slate-800 bg-[#0f172a]">
            <button
              type="button"
              onClick={() => setShowStdin(!showStdin)}
              className="w-full px-3 py-1.5 text-[11px] font-mono text-slate-400 hover:text-slate-200 flex items-center justify-between"
            >
              <span className="flex items-center gap-1.5">
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform ${showStdin ? "rotate-180" : ""}`}
                />
                <span>Dữ liệu đầu vào (Standard Input cho input())</span>
                {stdin.trim() && (
                  <span className="px-1.5 py-0.2 rounded bg-blue-900 text-blue-300 text-[10px]">
                    Có dữ liệu
                  </span>
                )}
              </span>
              <span className="text-[10px] text-slate-500">
                {showStdin ? "Thu gọn" : "Mở rộng"}
              </span>
            </button>

            {showStdin && (
              <div className="p-2.5 pt-0">
                <textarea
                  value={stdin}
                  onChange={(e) => setStdin(e.target.value)}
                  rows={2}
                  placeholder="Nhập giá trị đầu vào cho các lệnh input() (mỗi dòng một giá trị)..."
                  className="w-full p-2 rounded bg-slate-900 text-slate-200 font-mono text-xs outline-none border border-slate-700/60 focus:border-blue-500 resize-y"
                />
              </div>
            )}
          </div>
        </div>

        {/* CỘT PHẢI: Màn hình kết quả xuất (Terminal Output) */}
        <div
          className={`flex flex-col bg-[#0f172a] text-slate-100 ${
            mobileTab === "output" ? "flex" : "hidden md:flex"
          }`}
        >
          {/* Header của Terminal */}
          <div className="px-3 py-1.5 bg-[#0b0f19] text-slate-400 text-[11px] font-mono flex items-center justify-between border-b border-slate-800">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              Terminal Output
            </span>
            <div className="flex items-center gap-2">
              {executionTime !== null && (
                <span className="text-[10px] text-slate-400 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-blue-400" />
                  {executionTime} ms
                </span>
              )}
              {(stdout || stderr) && (
                <button
                  onClick={() => {
                    setStdout("");
                    setStderr("");
                    setErrorAdvice(null);
                  }}
                  className="text-[10px] text-slate-400 hover:text-slate-200"
                >
                  Xóa kết quả
                </button>
              )}
            </div>
          </div>

          {/* Vùng hiển thị Output */}
          <div
            ref={terminalRef}
            className="flex-1 p-3 font-mono text-xs sm:text-sm overflow-auto space-y-2 select-text"
          >
            {/* Khi chưa chạy lần nào */}
            {!stdout && !stderr && runnerStatus !== "running" && (
              <div className="text-slate-500 italic text-xs py-8 text-center space-y-2">
                <Sparkles className="w-6 h-6 mx-auto text-slate-600 opacity-60" />
                <p>Nhấn nút &ldquo;Chạy code&rdquo; (hoặc phím tắt Ctrl + Enter) để thực thi chương trình.</p>
                <p className="text-[11px] text-slate-600">
                  Kết quả in ra từ print() hoặc thông báo lỗi sẽ xuất hiện tại đây.
                </p>
              </div>
            )}

            {/* Khi đang thực thi */}
            {runnerStatus === "running" && (
              <div className="flex items-center gap-2 text-blue-400 text-xs py-4 animate-pulse">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
                <span>Đang thực thi mã nguồn...</span>
              </div>
            )}

            {/* Đầu ra tiêu chuẩn stdout */}
            {stdout && (
              <div className="text-emerald-300 whitespace-pre-wrap leading-relaxed">
                {stdout}
              </div>
            )}

            {/* Lỗi biên dịch / Runtime error */}
            {stderr && (
              <div className="space-y-2 pt-1">
                <div className="p-2.5 rounded bg-rose-950/60 border border-rose-800/80 text-rose-300 whitespace-pre-wrap text-xs font-mono leading-relaxed">
                  <div className="flex items-center gap-1.5 text-rose-400 font-bold mb-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>Lỗi thực thi (Runtime / Syntax Error)</span>
                  </div>
                  {stderr}
                </div>

                {/* Hộp gợi ý tiếng Việt thông minh cho học sinh */}
                {errorAdvice && (
                  <div className="p-2.5 rounded bg-amber-950/40 border border-amber-700/80 text-amber-200 text-xs leading-relaxed flex items-start gap-2">
                    <HelpCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-amber-300">Giải thích nguyên nhân & Cách sửa:</p>
                      <p className="mt-0.5 text-amber-100">{errorAdvice}</p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Footer nhỏ của Terminal */}
          <div className="p-2 bg-[#0b0f19] border-t border-slate-800 text-[10px] text-slate-500 flex items-center justify-between">
            <span>Python 3.12 (Pyodide WebAssembly)</span>
            <span>Trường THPT Nguyễn Sinh Sắc</span>
          </div>
        </div>
      </div>

      {/* 4. Modal chọn bài tập mẫu & bài tập từ đề thi */}
      {showTemplateModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 antialiased animate-fade-in">
          <div className="w-full max-w-xl rounded-neu bg-[#e6ecf5] shadow-neu-flat border border-white/80 p-4 sm:p-5 space-y-3.5 max-h-[88vh] flex flex-col">
            <div className="flex items-center justify-between border-b border-slate-200 pb-2.5">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-neu-sm bg-blue-100 flex items-center justify-center text-blue-600 shadow-neu-flat-xs">
                  <BookOpen className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-black text-slate-800">
                  Thư Viện Bài Tập & Code Mẫu Python
                </h3>
              </div>
              <button
                onClick={() => setShowTemplateModal(false)}
                className="p-1 rounded-neu-sm bg-[#e6ecf5] text-slate-500 hover:text-slate-800 shadow-neu-flat-sm active:shadow-neu-inset"
              >
                ✕
              </button>
            </div>

            {/* Thanh chuyển đổi 2 Tab: Bài tập từ Đề thi vs Kiến thức SGK */}
            <div className="flex items-center gap-1.5 p-1 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset-sm">
              <button
                type="button"
                onClick={() => setTemplateModalTab("exam")}
                className={`flex-1 py-1.5 px-2 rounded-neu-sm text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                  templateModalTab === "exam"
                    ? "bg-[#e6ecf5] text-blue-700 shadow-neu-flat-sm font-extrabold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <span>🎯 Bài tập từ Đề thi ({PYTHON_QUESTION_EXERCISES_LIST.length} câu)</span>
              </button>
              <button
                type="button"
                onClick={() => setTemplateModalTab("basic")}
                className={`flex-1 py-1.5 px-2 rounded-neu-sm text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                  templateModalTab === "basic"
                    ? "bg-[#e6ecf5] text-blue-700 shadow-neu-flat-sm font-extrabold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <span>📚 Kiến thức SGK ({PYTHON_TEMPLATES.length} bài)</span>
              </button>
            </div>

            <p className="text-[11px] text-slate-500">
              {templateModalTab === "exam"
                ? "Chọn một câu hỏi trong đề ôn thi THPT để nạp mã nguồn hoàn chỉnh và chạy kiểm chứng kết quả:"
                : "Chọn cấu trúc lập trình cơ bản để xem ví dụ và thực hành:"}
            </p>

            <div className="flex-1 overflow-y-auto space-y-2 pr-1">
              {templateModalTab === "exam" ? (
                PYTHON_QUESTION_EXERCISES_LIST.map((item) => (
                  <button
                    key={item.questionId}
                    type="button"
                    onClick={() => handleSelectExamExercise(item)}
                    className="w-full text-left p-3 rounded-neu-sm bg-[#e6ecf5] shadow-neu-flat-sm hover:shadow-neu-inset transition-all border border-white/60 space-y-1.5 group"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <span className="px-1.5 py-0.2 rounded bg-blue-600 text-white text-[10px] font-bold shrink-0">
                          {typeof item.questionNumber === "number" ? `Câu ${item.questionNumber}` : item.questionNumber}
                        </span>
                        <span className="font-bold text-xs text-slate-800 group-hover:text-blue-600 truncate">
                          {item.title}
                        </span>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 text-[10px] font-bold shrink-0">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-tight">
                      {item.summary}
                    </p>
                    <div className="flex items-center justify-between text-[10px] pt-0.5 border-t border-slate-200/60 text-slate-500">
                      <span className="font-mono text-emerald-700 font-semibold truncate max-w-[320px]">
                        🎯 {item.targetAnswer}
                      </span>
                      <span className="text-blue-600 font-bold group-hover:underline">
                        Nạp vào IDE ➔
                      </span>
                    </div>
                  </button>
                ))
              ) : (
                PYTHON_TEMPLATES.map((tmpl) => (
                  <button
                    key={tmpl.id}
                    type="button"
                    onClick={() => handleSelectTemplate(tmpl)}
                    className="w-full text-left p-3 rounded-neu-sm bg-[#e6ecf5] shadow-neu-flat-sm hover:shadow-neu-inset transition-all border border-white/60 space-y-1 group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs text-slate-800 group-hover:text-blue-600">
                        {tmpl.title}
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-slate-200 text-slate-700 text-[10px] font-bold">
                        {tmpl.category}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-tight">
                      {tmpl.description}
                    </p>
                  </button>
                ))
              )}
            </div>

            <div className="pt-2 border-t border-slate-200 text-right">
              <button
                type="button"
                onClick={() => setShowTemplateModal(false)}
                className="px-4 py-1.5 rounded-neu-sm bg-[#e6ecf5] text-slate-700 text-xs font-bold shadow-neu-flat-sm active:shadow-neu-inset hover:text-blue-600"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
