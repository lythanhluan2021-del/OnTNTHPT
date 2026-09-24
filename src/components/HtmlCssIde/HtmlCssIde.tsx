"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Globe,
  Play,
  RotateCcw,
  Copy,
  Check,
  Trash2,
  BookOpen,
  Smartphone,
  Monitor,
  ExternalLink,
  Code2,
  Palette,
  CheckCircle2,
  X,
  Sparkles,
  Info,
  Laptop,
} from "lucide-react";
import {
  HTML_CSS_PROJECT_TEMPLATES,
  HTML_CSS_QUESTION_EXERCISES,
  HtmlCssProjectTemplate,
  HtmlCssQuestionExercise,
} from "@/data/htmlCssTemplates";
import { soundManager } from "@/lib/audioEffects";

interface HtmlCssIdeProps {
  initialHtml?: string;
  initialCss?: string;
  exerciseTitle?: string;
  exerciseTargetAnswer?: string;
  exerciseQuestionNumber?: number | string;
  onClose?: () => void;
  isModal?: boolean;
}

export const HtmlCssIde: React.FC<HtmlCssIdeProps> = ({
  initialHtml,
  initialCss,
  exerciseTitle,
  exerciseTargetAnswer,
  exerciseQuestionNumber,
  onClose,
  isModal = false,
}) => {
  const [htmlCode, setHtmlCode] = useState<string>(
    initialHtml !== undefined
      ? initialHtml
      : HTML_CSS_PROJECT_TEMPLATES[0].html
  );
  const [cssCode, setCssCode] = useState<string>(
    initialCss !== undefined
      ? initialCss
      : HTML_CSS_PROJECT_TEMPLATES[0].css
  );

  const [activeEditorTab, setActiveEditorTab] = useState<"html" | "css">("html");
  const [mobileTab, setMobileTab] = useState<"editor" | "preview">("editor");
  const [deviceMode, setDeviceMode] = useState<"desktop" | "mobile">("desktop");
  const [copied, setCopied] = useState<boolean>(false);
  const [showTemplateModal, setShowTemplateModal] = useState<boolean>(false);
  const [templateModalTab, setTemplateModalTab] = useState<"exam" | "projects">("exam");
  const [selectedCategory, setSelectedCategory] = useState<string>("Tất cả");
  const [iframeKey, setIframeKey] = useState<number>(0);

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

  const htmlTextareaRef = useRef<HTMLTextAreaElement>(null);
  const cssTextareaRef = useRef<HTMLTextAreaElement>(null);
  const htmlLineRef = useRef<HTMLDivElement>(null);
  const cssLineRef = useRef<HTMLDivElement>(null);

  // Sync props when updated from outside
  useEffect(() => {
    if (initialHtml !== undefined) {
      setHtmlCode(initialHtml);
    }
    if (initialCss !== undefined) {
      setCssCode(initialCss);
    }
    if (exerciseTitle) {
      setActiveExerciseInfo({
        title: exerciseTitle,
        targetAnswer: exerciseTargetAnswer,
        questionNumber: exerciseQuestionNumber,
      });
      // Default to HTML tab
      setActiveEditorTab("html");
    }
  }, [initialHtml, initialCss, exerciseTitle, exerciseTargetAnswer, exerciseQuestionNumber]);

  // Combine HTML and CSS into complete HTML document
  const generateFullDocument = (html: string, css: string) => {
    const isFullHtmlDoc = html.includes("<!DOCTYPE") || html.includes("<html");
    if (isFullHtmlDoc) {
      if (css.trim()) {
        if (html.includes("</head>")) {
          return html.replace("</head>", `<style>\n${css}\n</style>\n</head>`);
        } else {
          return `<style>\n${css}\n</style>\n` + html;
        }
      }
      return html;
    }

    return `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Xem trước Web IDE</title>
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      padding: 12px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      line-height: 1.5;
    }
    ${css}
  </style>
</head>
<body>
${html}
</body>
</html>`;
  };

  const previewDocument = generateFullDocument(htmlCode, cssCode);

  // Synchronize line scroll with textarea
  const handleScroll = (type: "html" | "css") => {
    if (type === "html" && htmlTextareaRef.current && htmlLineRef.current) {
      htmlLineRef.current.scrollTop = htmlTextareaRef.current.scrollTop;
    } else if (type === "css" && cssTextareaRef.current && cssLineRef.current) {
      cssLineRef.current.scrollTop = cssTextareaRef.current.scrollTop;
    }
  };

  const currentCode = activeEditorTab === "html" ? htmlCode : cssCode;
  const lineCount = Math.max(currentCode.split("\n").length, 1);
  const lineNumbers = Array.from({ length: lineCount }, (_, i) => i + 1);

  // Keyboard shortcut handlers
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      e.preventDefault();
      handleRefresh();
      return;
    }

    const target = e.currentTarget;
    const start = target.selectionStart;
    const end = target.selectionEnd;
    const isHtml = activeEditorTab === "html";
    const setter = isHtml ? setHtmlCode : setCssCode;
    const val = isHtml ? htmlCode : cssCode;

    // Tab key indent (2 spaces)
    if (e.key === "Tab") {
      e.preventDefault();
      const newText = val.substring(0, start) + "  " + val.substring(end);
      setter(newText);
      setTimeout(() => {
        target.selectionStart = target.selectionEnd = start + 2;
      }, 0);
      return;
    }

    // Enter key (keep indentation)
    if (e.key === "Enter") {
      e.preventDefault();
      const linesBefore = val.substring(0, start).split("\n");
      const currentLine = linesBefore[linesBefore.length - 1];
      const indentMatch = currentLine.match(/^\s*/);
      let indent = indentMatch ? indentMatch[0] : "";

      // In CSS, if line ends with '{', increase indent
      if (!isHtml && currentLine.trim().endsWith("{")) {
        indent += "  ";
      }

      const insertText = "\n" + indent;
      const newText = val.substring(0, start) + insertText + val.substring(end);
      setter(newText);
      setTimeout(() => {
        target.selectionStart = target.selectionEnd = start + insertText.length;
      }, 0);
      return;
    }

    // Auto-close brackets & quotes
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
      const newText = val.substring(0, start) + e.key + closeChar + val.substring(end);
      setter(newText);
      setTimeout(() => {
        target.selectionStart = target.selectionEnd = start + 1;
      }, 0);
    }
  };

  const handleRefresh = () => {
    soundManager.playCorrect();
    setIframeKey((prev) => prev + 1);
    if (window.innerWidth < 768) {
      setMobileTab("preview");
    }
  };

  const handleResetCode = () => {
    soundManager.playClick();
    if (confirm("Bạn có muốn đặt lại mã nguồn về bài mẫu ban đầu không?")) {
      const first = HTML_CSS_PROJECT_TEMPLATES[0];
      setHtmlCode(first.html);
      setCssCode(first.css);
      setActiveExerciseInfo(null);
      setIframeKey((prev) => prev + 1);
    }
  };

  const handleCopyCode = async () => {
    soundManager.playClick();
    try {
      const textToCopy = `<!-- HTML -->\n${htmlCode}\n\n/* CSS */\n${cssCode}`;
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  const handleOpenInNewTab = () => {
    soundManager.playClick();
    const blob = new Blob([previewDocument], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    window.open(url, "_blank");
  };

  const handleSelectTemplate = (template: HtmlCssProjectTemplate) => {
    soundManager.playCorrect();
    setHtmlCode(template.html);
    setCssCode(template.css);
    setActiveExerciseInfo(null);
    setShowTemplateModal(false);
    setIframeKey((prev) => prev + 1);
    if (window.innerWidth < 768) {
      setMobileTab("editor");
    }
  };

  const handleSelectExercise = (exercise: HtmlCssQuestionExercise) => {
    soundManager.playCorrect();
    setHtmlCode(exercise.html);
    setCssCode(exercise.css);
    setActiveExerciseInfo({
      title: exercise.title,
      targetAnswer: exercise.targetAnswer,
      questionNumber: exercise.questionNumber,
    });
    setShowTemplateModal(false);
    setIframeKey((prev) => prev + 1);
    if (window.innerWidth < 768) {
      setMobileTab("editor");
    }
  };

  const examExercisesList = Object.values(HTML_CSS_QUESTION_EXERCISES);
  const categories = ["Tất cả", ...Array.from(new Set(examExercisesList.map((e) => e.category)))];
  const filteredExercises =
    selectedCategory === "Tất cả"
      ? examExercisesList
      : examExercisesList.filter((e) => e.category === selectedCategory);

  return (
    <div className="flex flex-col h-full w-full bg-neu-bg text-neu-dark font-sans overflow-hidden">
      {/* 1. Header Toolbar */}
      <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 bg-neu-bg border-b border-neu-shadowDark/40 shadow-xs shrink-0 z-20">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="p-1.5 sm:p-2 rounded-neu-sm bg-neu-bg shadow-neu-flat text-neu-accent">
            <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 animate-spin-slow" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-xs sm:text-sm text-gray-800">
                HTML & CSS Web IDE
              </span>
              <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-semibold bg-blue-100 text-blue-700 rounded-full border border-blue-200">
                Chuyên đề 12F • Live Sandbox
              </span>
            </div>
            <p className="text-[10px] text-gray-500 hidden md:block">
              Soạn thảo HTML/CSS và xem trước trang web thời gian thực • Phù hợp chuẩn Tin học 12
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-1.5 sm:space-x-2">
          {/* Templates library button */}
          <button
            onClick={() => {
              soundManager.playClick();
              setShowTemplateModal(true);
            }}
            className="flex items-center space-x-1 px-2.5 sm:px-3 py-1.5 rounded-neu-sm bg-neu-bg shadow-neu-flat hover:shadow-neu-inset text-blue-600 text-xs font-medium transition-all"
            title="Thư viện bài mẫu & câu hỏi đề thi"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">Bài mẫu</span>
          </button>

          {/* Copy code button */}
          <button
            onClick={handleCopyCode}
            className="p-1.5 sm:p-2 rounded-neu-sm bg-neu-bg shadow-neu-flat hover:shadow-neu-inset text-gray-600 hover:text-gray-800 text-xs transition-all"
            title="Sao chép toàn bộ mã nguồn"
          >
            {copied ? (
              <Check className="w-3.5 h-3.5 text-green-600" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
          </button>

          {/* Reset button */}
          <button
            onClick={handleResetCode}
            className="p-1.5 sm:p-2 rounded-neu-sm bg-neu-bg shadow-neu-flat hover:shadow-neu-inset text-gray-600 hover:text-red-600 text-xs transition-all"
            title="Đặt lại mã nguồn mặc định"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>

          {/* Run / Refresh button */}
          <button
            onClick={handleRefresh}
            className="flex items-center space-x-1 px-3 sm:px-3.5 py-1.5 rounded-neu-sm bg-blue-600 hover:bg-blue-700 text-white shadow-neu-blue active:shadow-neu-blue-pressed text-xs font-semibold transition-all cursor-pointer"
            title="Cập nhật trang web (Ctrl + Enter)"
          >
            <Play className="w-3.5 h-3.5 fill-white" />
            <span>Cập nhật</span>
          </button>

          {isModal && onClose && (
            <button
              onClick={onClose}
              className="p-1.5 rounded-neu-sm bg-neu-bg shadow-neu-flat hover:shadow-neu-inset text-gray-500 hover:text-gray-800 ml-1"
              title="Đóng cửa sổ"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* 2. Banner bài tập từ đề thi (nếu đang ở chế độ làm bài) */}
      {activeExerciseInfo && (
        <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 border-b border-blue-200/80 px-3 sm:px-4 py-2 flex items-center justify-between text-xs shrink-0 animate-fade-in">
          <div className="flex items-center space-x-2 overflow-hidden">
            <span className="shrink-0 px-2 py-0.5 bg-blue-600 text-white font-bold rounded-md text-[11px] shadow-xs">
              {typeof activeExerciseInfo.questionNumber === "number"
                ? `Câu ${activeExerciseInfo.questionNumber}`
                : activeExerciseInfo.questionNumber || "Bài tập"}
            </span>
            <div className="truncate">
              <span className="font-semibold text-gray-800 mr-2">
                {activeExerciseInfo.title}
              </span>
              {activeExerciseInfo.targetAnswer && (
                <span className="inline-flex items-center text-blue-700 font-medium bg-blue-100/80 px-2 py-0.5 rounded text-[11px] border border-blue-200">
                  🎯 Đối chiếu: {activeExerciseInfo.targetAnswer}
                </span>
              )}
            </div>
          </div>
          <button
            onClick={() => setActiveExerciseInfo(null)}
            className="shrink-0 text-gray-400 hover:text-gray-600 p-1 ml-2"
            title="Đóng thông tin bài tập"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* 3. Mobile Tab Switcher (chỉ hiện trên màn hình nhỏ < md) */}
      <div className="flex md:hidden bg-neu-bg border-b border-neu-shadowDark/30 px-3 py-1.5 shrink-0 space-x-2">
        <button
          onClick={() => {
            soundManager.playClick();
            setMobileTab("editor");
          }}
          className={`flex-1 flex items-center justify-center space-x-1.5 py-1.5 rounded-neu-sm text-xs font-semibold transition-all ${
            mobileTab === "editor"
              ? "bg-neu-bg shadow-neu-inset text-blue-600"
              : "bg-neu-bg shadow-neu-flat text-gray-600"
          }`}
        >
          <Code2 className="w-3.5 h-3.5" />
          <span>Mã nguồn ({activeEditorTab.toUpperCase()})</span>
        </button>

        <button
          onClick={() => {
            soundManager.playClick();
            setMobileTab("preview");
          }}
          className={`flex-1 flex items-center justify-center space-x-1.5 py-1.5 rounded-neu-sm text-xs font-semibold transition-all ${
            mobileTab === "preview"
              ? "bg-neu-bg shadow-neu-inset text-blue-600"
              : "bg-neu-bg shadow-neu-flat text-gray-600"
          }`}
        >
          <Globe className="w-3.5 h-3.5" />
          <span>Xem trang web</span>
        </button>
      </div>

      {/* 4. Main Body: Split view Desktop (50/50) or Tabbed Mobile */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden relative">
        {/* Left: Code Editor */}
        <div
          className={`flex-1 flex flex-col border-b md:border-b-0 md:border-r border-neu-shadowDark/40 min-h-0 ${
            mobileTab === "editor" ? "flex" : "hidden md:flex"
          }`}
        >
          {/* Sub-tabs HTML / CSS */}
          <div className="flex items-center justify-between px-3 py-1.5 bg-gray-100/70 border-b border-gray-200/80 shrink-0">
            <div className="flex items-center space-x-1">
              <button
                onClick={() => {
                  soundManager.playClick();
                  setActiveEditorTab("html");
                }}
                className={`flex items-center space-x-1.5 px-3 py-1 rounded-md text-xs font-semibold transition-all ${
                  activeEditorTab === "html"
                    ? "bg-white shadow-xs text-orange-600 border border-gray-200"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                <Code2 className="w-3.5 h-3.5 text-orange-500" />
                <span>HTML (Nội dung)</span>
              </button>

              <button
                onClick={() => {
                  soundManager.playClick();
                  setActiveEditorTab("css");
                }}
                className={`flex items-center space-x-1.5 px-3 py-1 rounded-md text-xs font-semibold transition-all ${
                  activeEditorTab === "css"
                    ? "bg-white shadow-xs text-blue-600 border border-gray-200"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                <Palette className="w-3.5 h-3.5 text-blue-500" />
                <span>CSS (Định kiểu)</span>
              </button>
            </div>

            <div className="text-[11px] text-gray-400 font-mono hidden sm:block">
              {activeEditorTab === "html" ? "index.html" : "styles.css"} • {lineCount} dòng
            </div>
          </div>

          {/* Editor Area with Line numbers */}
          <div className="flex-1 flex overflow-hidden bg-white relative font-mono text-xs sm:text-[13px] leading-relaxed">
            {/* HTML Editor */}
            {activeEditorTab === "html" ? (
              <>
                <div
                  ref={htmlLineRef}
                  className="w-10 sm:w-12 bg-gray-50/80 border-r border-gray-200 text-gray-400 select-none py-3 text-right pr-2 font-mono shrink-0 overflow-hidden"
                >
                  {lineNumbers.map((num) => (
                    <div key={num} className="h-5 leading-5 text-[11px]">
                      {num}
                    </div>
                  ))}
                </div>
                <textarea
                  ref={htmlTextareaRef}
                  value={htmlCode}
                  onChange={(e) => setHtmlCode(e.target.value)}
                  onScroll={() => handleScroll("html")}
                  onKeyDown={handleKeyDown}
                  spellCheck={false}
                  placeholder="<!-- Nhập mã nguồn HTML vào đây... -->"
                  className="flex-1 p-3 resize-none outline-hidden border-none text-gray-800 font-mono text-xs sm:text-[13px] leading-5 whitespace-pre overflow-auto bg-transparent selection:bg-orange-100"
                />
              </>
            ) : (
              /* CSS Editor */
              <>
                <div
                  ref={cssLineRef}
                  className="w-10 sm:w-12 bg-gray-50/80 border-r border-gray-200 text-gray-400 select-none py-3 text-right pr-2 font-mono shrink-0 overflow-hidden"
                >
                  {lineNumbers.map((num) => (
                    <div key={num} className="h-5 leading-5 text-[11px]">
                      {num}
                    </div>
                  ))}
                </div>
                <textarea
                  ref={cssTextareaRef}
                  value={cssCode}
                  onChange={(e) => setCssCode(e.target.value)}
                  onScroll={() => handleScroll("css")}
                  onKeyDown={handleKeyDown}
                  spellCheck={false}
                  placeholder="/* Nhập mã định dạng CSS vào đây... */"
                  className="flex-1 p-3 resize-none outline-hidden border-none text-gray-800 font-mono text-xs sm:text-[13px] leading-5 whitespace-pre overflow-auto bg-transparent selection:bg-blue-100"
                />
              </>
            )}
          </div>

          {/* Quick status bar */}
          <div className="px-3 py-1 bg-gray-50 border-t border-gray-200 text-[10.5px] text-gray-500 flex justify-between items-center shrink-0">
            <span>Tab = 2 spaces • Enter = Tự động lùi dòng</span>
            <span className="font-mono text-gray-400">Ctrl + Enter: Cập nhật</span>
          </div>
        </div>

        {/* Right: Mock Browser Preview */}
        <div
          className={`flex-1 flex flex-col bg-gray-100 min-h-0 ${
            mobileTab === "preview" ? "flex" : "hidden md:flex"
          }`}
        >
          {/* Mockup Browser Window Header */}
          <div className="bg-gray-200/90 border-b border-gray-300 px-3 py-1.5 flex items-center justify-between shrink-0 space-x-2">
            {/* macOS-style Window Buttons */}
            <div className="flex items-center space-x-1.5 shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 inline-block"></span>
            </div>

            {/* Address bar mockup */}
            <div className="flex-1 max-w-sm mx-2 bg-white rounded-md px-2.5 py-1 flex items-center space-x-1.5 text-xs text-gray-500 border border-gray-300 shadow-2xs overflow-hidden">
              <span className="text-green-600 font-mono text-[10px]">https://</span>
              <span className="truncate text-[11px] text-gray-700 font-sans">
                chuyende12f-web.edu.vn/preview.html
              </span>
            </div>

            {/* Browser Controls */}
            <div className="flex items-center space-x-1 shrink-0">
              {/* Device view switcher */}
              <div className="hidden sm:flex items-center bg-gray-300/80 rounded-md p-0.5">
                <button
                  onClick={() => {
                    soundManager.playClick();
                    setDeviceMode("desktop");
                  }}
                  className={`p-1 rounded text-xs transition-all ${
                    deviceMode === "desktop"
                      ? "bg-white text-blue-600 shadow-2xs"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                  title="Chế độ Máy tính (100% chiều rộng)"
                >
                  <Laptop className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => {
                    soundManager.playClick();
                    setDeviceMode("mobile");
                  }}
                  className={`p-1 rounded text-xs transition-all ${
                    deviceMode === "mobile"
                      ? "bg-white text-blue-600 shadow-2xs"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                  title="Chế độ Điện thoại (Khung 375px)"
                >
                  <Smartphone className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Refresh button */}
              <button
                onClick={handleRefresh}
                className="p-1 rounded hover:bg-gray-300 text-gray-600 hover:text-gray-900 transition-colors"
                title="Tải lại trang web"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>

              {/* Open in new tab */}
              <button
                onClick={handleOpenInNewTab}
                className="p-1 rounded hover:bg-gray-300 text-gray-600 hover:text-gray-900 transition-colors"
                title="Mở toàn màn hình trong tab mới"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Browser Content Area (Iframe Sandbox) */}
          <div className="flex-1 bg-gray-100 overflow-auto flex items-center justify-center p-2 sm:p-4">
            {deviceMode === "mobile" ? (
              /* Mobile Phone Mockup Frame */
              <div className="w-[375px] h-[640px] max-h-full bg-white rounded-[32px] border-[8px] border-gray-800 shadow-2xl overflow-hidden flex flex-col relative transition-all">
                {/* Phone Speaker Notch */}
                <div className="h-5 bg-gray-800 w-full flex items-center justify-center shrink-0">
                  <div className="w-12 h-1 bg-gray-600 rounded-full"></div>
                </div>
                {/* Screen Content */}
                <iframe
                  key={iframeKey}
                  sandbox="allow-scripts"
                  srcDoc={previewDocument}
                  title="Mobile Web Preview"
                  className="flex-1 w-full h-full border-none bg-white"
                />
                {/* Phone Bottom Home Bar */}
                <div className="h-3 bg-white w-full flex items-center justify-center shrink-0">
                  <div className="w-20 h-0.5 bg-gray-300 rounded-full"></div>
                </div>
              </div>
            ) : (
              /* Full Desktop / Responsive Frame */
              <div className="w-full h-full bg-white rounded-md shadow-xs overflow-hidden flex flex-col">
                <iframe
                  key={iframeKey}
                  sandbox="allow-scripts"
                  srcDoc={previewDocument}
                  title="Desktop Web Preview"
                  className="w-full h-full border-none bg-white"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 5. Modal Chọn Bài Mẫu & Câu Hỏi Đề Thi */}
      {showTemplateModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-fade-in">
          <div className="bg-neu-bg w-full max-w-2xl max-h-[85vh] rounded-neu shadow-2xl flex flex-col overflow-hidden border border-neu-shadowDark/40">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-neu-shadowDark/30">
              <div className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-blue-600" />
                <h3 className="font-bold text-sm sm:text-base text-gray-800">
                  Thư viện Bài mẫu & Câu hỏi Đề thi HTML/CSS
                </h3>
              </div>
              <button
                onClick={() => setShowTemplateModal(false)}
                className="p-1 rounded-neu-sm bg-neu-bg shadow-neu-flat hover:shadow-neu-inset text-gray-500 hover:text-gray-800"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Tabs */}
            <div className="flex border-b border-neu-shadowDark/20 bg-gray-100/50 px-4 pt-2">
              <button
                onClick={() => {
                  soundManager.playClick();
                  setTemplateModalTab("exam");
                }}
                className={`pb-2 px-3 text-xs sm:text-sm font-semibold border-b-2 transition-all flex items-center space-x-1.5 ${
                  templateModalTab === "exam"
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-800"
                }`}
              >
                <span>🎯 Bài tập Đề thi 12F ({examExercisesList.length} bài)</span>
              </button>
              <button
                onClick={() => {
                  soundManager.playClick();
                  setTemplateModalTab("projects");
                }}
                className={`pb-2 px-3 text-xs sm:text-sm font-semibold border-b-2 transition-all flex items-center space-x-1.5 ${
                  templateModalTab === "projects"
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-800"
                }`}
              >
                <span>📚 Dự án Web mẫu ({HTML_CSS_PROJECT_TEMPLATES.length} dự án)</span>
              </button>
            </div>

            {/* Category Filter Pills (chỉ cho tab exam) */}
            {templateModalTab === "exam" && (
              <div className="px-4 py-2 bg-neu-bg border-b border-neu-shadowDark/20 flex items-center space-x-1.5 overflow-x-auto text-xs shrink-0">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      soundManager.playClick();
                      setSelectedCategory(cat);
                    }}
                    className={`px-2.5 py-1 rounded-full whitespace-nowrap font-medium transition-all ${
                      selectedCategory === cat
                        ? "bg-blue-600 text-white shadow-xs"
                        : "bg-gray-200/80 text-gray-600 hover:bg-gray-300/80"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}

            {/* Modal Body List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {templateModalTab === "exam" ? (
                /* Danh sách bài tập từ đề thi */
                filteredExercises.map((exercise) => (
                  <div
                    key={exercise.questionId}
                    className="p-3.5 rounded-neu-sm bg-white border border-gray-200 shadow-2xs hover:border-blue-300 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-700">
                          {typeof exercise.questionNumber === "number"
                            ? `Câu ${exercise.questionNumber}`
                            : exercise.questionNumber}
                        </span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-gray-100 text-gray-600">
                          {exercise.category}
                        </span>
                      </div>
                      <h4 className="font-semibold text-xs sm:text-sm text-gray-800 line-clamp-1">
                        {exercise.title}
                      </h4>
                      <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">
                        {exercise.summary}
                      </p>
                      <div className="mt-1.5 text-[11px] text-blue-600 font-medium">
                        🎯 {exercise.targetAnswer}
                      </div>
                    </div>

                    <button
                      onClick={() => handleSelectExercise(exercise)}
                      className="shrink-0 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-neu-sm text-xs font-semibold shadow-xs flex items-center justify-center space-x-1 cursor-pointer"
                    >
                      <span>Nạp vào IDE</span>
                    </button>
                  </div>
                ))
              ) : (
                /* Danh sách 4 dự án mẫu */
                HTML_CSS_PROJECT_TEMPLATES.map((project) => (
                  <div
                    key={project.id}
                    className="p-4 rounded-neu-sm bg-white border border-gray-200 shadow-2xs hover:border-blue-300 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div className="flex-1 min-w-0">
                      <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-indigo-100 text-indigo-700">
                        {project.category}
                      </span>
                      <h4 className="font-bold text-sm text-gray-800 mt-1">
                        {project.title}
                      </h4>
                      <p className="text-xs text-gray-600 mt-1">
                        {project.description}
                      </p>
                      <p className="text-[11px] text-emerald-600 mt-1 font-medium">
                        💡 Gợi ý: {project.previewTips}
                      </p>
                    </div>

                    <button
                      onClick={() => handleSelectTemplate(project)}
                      className="shrink-0 px-3.5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-neu-sm text-xs font-semibold shadow-xs flex items-center justify-center space-x-1 cursor-pointer"
                    >
                      <span>Khởi tạo dự án này</span>
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-4 py-2.5 bg-gray-100/60 border-t border-neu-shadowDark/30 text-right">
              <button
                onClick={() => setShowTemplateModal(false)}
                className="px-4 py-1.5 rounded-neu-sm bg-neu-bg shadow-neu-flat hover:shadow-neu-inset text-xs font-semibold text-gray-600"
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
