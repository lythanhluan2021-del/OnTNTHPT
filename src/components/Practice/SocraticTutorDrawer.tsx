"use client";

import React, { useState, useEffect } from "react";
import { Question, SocraticMessage } from "@/types";
import {
  generateSocraticGuidance,
  getInitialSocraticMessage,
  sanitizeTutorResponse,
} from "@/lib/socraticEngine";
import { LatexRenderer } from "../UI/LatexRenderer";
import {
  X,
  Send,
  Bot,
  User,
  ShieldCheck,
  Sparkles,
  HelpCircle,
  Lightbulb,
} from "lucide-react";

interface SocraticTutorDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  question: Question;
  selectedOption?: "A" | "B" | "C" | "D" | null;
  hasAnswered?: boolean;
  isCorrect?: boolean;
}

export const SocraticTutorDrawer: React.FC<SocraticTutorDrawerProps> = ({
  isOpen,
  onClose,
  question,
  selectedOption,
  hasAnswered,
  isCorrect,
}) => {
  const getInitialMessage = (): string => {
    return getInitialSocraticMessage(question, selectedOption, hasAnswered, isCorrect);
  };

  const [messages, setMessages] = useState<SocraticMessage[]>([]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Khởi tạo lại hội thoại khi mở drawer hoặc đổi câu hỏi
  useEffect(() => {
    if (isOpen) {
      setMessages([
        {
          id: "welcome-" + question.id,
          sender: "tutor",
          text: getInitialMessage(),
          timestamp: Date.now(),
        },
      ]);
    }
  }, [isOpen, question.id, hasAnswered, isCorrect, selectedOption]);

  if (!isOpen) return null;

  const handleSendMessage = (textToSend?: string) => {
    const text = (textToSend || inputText).trim();
    if (!text) return;

    const userMsg: SocraticMessage = {
      id: "u-" + Date.now(),
      sender: "student",
      text,
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText("");
    setIsTyping(true);

    // Tính toán câu trả lời Socratic
    setTimeout(() => {
      const studentQuestionsCount = messages.filter((m) => m.sender === "student").length;
      const rawAnswer = generateSocraticGuidance(
        question,
        text,
        studentQuestionsCount,
        selectedOption,
        isCorrect
      );
      // Chạy qua Guardrail kiểm duyệt bảo mật đáp án
      const safeAnswer = sanitizeTutorResponse(rawAnswer, question);

      const tutorMsg: SocraticMessage = {
        id: "t-" + Date.now(),
        sender: "tutor",
        text: safeAnswer,
        timestamp: Date.now(),
      };

      setMessages((prev) => [...prev, tutorMsg]);
      setIsTyping(false);
    }, 600);
  };

  // Các gợi ý câu hỏi nhanh tùy biến theo chuyên đề
  const getQuickPrompts = () => {
    const topicId = question.topicId || "";
    const topicName = question.topicName || "";

    if (hasAnswered && isCorrect === false) {
      return [
        `Vì sao chọn ${selectedOption || "phương án này"} lại sai?`,
        "Chỉ ra bẫy thường gặp trong câu này",
        "Nhắc lại khái niệm trọng tâm",
        "Hướng dẫn từng bước suy luận đúng",
      ];
    }
    if (topicId.includes("python") || topicName.toLowerCase().includes("python")) {
      return [
        "Hướng dẫn cách chạy tay thuật toán",
        "Giải thích cú pháp vòng lặp/hàm",
        "Em chưa hiểu luồng biến đổi dữ liệu",
      ];
    }
    if (topicId.includes("sql") || topicName.toLowerCase().includes("csdl")) {
      return [
        "Cú pháp mệnh đề WHERE và JOIN",
        "Cách xác định khóa chính & khóa ngoại",
        "Bảng nào chứa dữ liệu cần tìm?",
      ];
    }
    if (topicId.includes("web") || topicName.toLowerCase().includes("web")) {
      return [
        "Ý nghĩa của thẻ HTML trong đề",
        "Thuộc tính CSS nào điều khiển hiển thị?",
        "Em chưa rõ cấu trúc khối",
      ];
    }
    return [
      "Nhắc lại kiến thức cốt lõi",
      "Em chưa biết bắt đầu phân tích từ đâu",
      "Có phải câu này chọn đáp án B không?",
    ];
  };

  const quickPrompts = getQuickPrompts();

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-end md:justify-center md:items-center bg-slate-900/60 dark:bg-black/75 backdrop-blur-sm transition-opacity">
      <div className="w-full max-w-lg bg-[#e6ecf5] dark:bg-[#1a1f26] rounded-t-neu-lg md:rounded-neu shadow-neu-flat dark:shadow-[8px_8px_20px_#12151a,-8px_-8px_20px_#222932] max-h-[85vh] h-[80vh] flex flex-col overflow-hidden border border-slate-300/40 dark:border-slate-800">
        {/* Tutor Header */}
        <div className="p-3.5 border-b border-slate-300/70 dark:border-slate-800 flex items-center justify-between bg-[#e6ecf5] dark:bg-[#1f252e] shadow-neu-flat-xs dark:shadow-none">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-neu-blue">
              <Bot className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="font-bold text-slate-800 dark:text-slate-100 text-xs sm:text-sm">
                  Trợ Lý Socratic 2.0
                </h3>
                <span className="flex items-center gap-1 text-[10px] bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 px-1.5 py-0.2 rounded-full font-medium border border-emerald-300/50 dark:border-emerald-800/60">
                  <ShieldCheck className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                  Bảo vệ đáp án • GDPT 2018
                </span>
              </div>
              <p className="text-[10px] text-slate-500 dark:text-slate-400">
                Định hướng tư duy phản tư • Tuyệt đối không cho đáp án
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-neu-sm bg-[#e6ecf5] dark:bg-[#202734] shadow-neu-flat dark:shadow-none active:shadow-neu-inset text-slate-600 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 transition"
            title="Đóng cửa sổ"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Message history */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-2.5 ${
                msg.sender === "student" ? "justify-end" : "justify-start"
              }`}
            >
              {msg.sender === "tutor" && (
                <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 text-[10px] mt-1 shadow-neu-blue">
                  <Bot className="w-3.5 h-3.5" />
                </div>
              )}
              <div
                className={`max-w-[85%] p-3 rounded-neu-sm text-xs sm:text-sm leading-relaxed ${
                  msg.sender === "student"
                    ? "bg-blue-600 text-white shadow-neu-blue rounded-tr-none"
                    : "bg-[#e6ecf5] dark:bg-[#222934] text-slate-800 dark:text-slate-100 shadow-neu-flat-sm dark:shadow-none rounded-tl-none border border-slate-200 dark:border-slate-700/60"
                }`}
              >
                <LatexRenderer content={msg.text} />
              </div>
              {msg.sender === "student" && (
                <div className="w-6 h-6 rounded-full bg-slate-300 dark:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center flex-shrink-0 text-[10px] mt-1">
                  <User className="w-3.5 h-3.5" />
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs pl-8">
              <span className="animate-pulse">Trợ lý Socratic đang phân tích dữ liệu...</span>
            </div>
          )}
        </div>

        {/* Quick Suggestion Chips */}
        <div className="px-3 py-2 border-t border-slate-300/40 dark:border-slate-800/80 flex items-center gap-2 overflow-x-auto no-scrollbar bg-slate-200/40 dark:bg-[#1a1f26]">
          {quickPrompts.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(prompt)}
              className="text-[11px] whitespace-nowrap py-1 px-2.5 rounded-full bg-[#e6ecf5] dark:bg-[#222934] shadow-neu-flat-xs dark:shadow-none active:shadow-neu-inset text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1 font-medium border border-slate-300/60 dark:border-slate-700/60 transition"
            >
              <Sparkles className="w-3 h-3 text-amber-500 flex-shrink-0" />
              <span>{prompt}</span>
            </button>
          ))}
        </div>

        {/* Input box */}
        <div className="p-3 border-t border-slate-300/60 dark:border-slate-800 bg-[#e6ecf5] dark:bg-[#1f252e] flex items-center gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder="Hỏi về lý thuyết, bẫy sai, cách suy luận..."
            className="flex-1 py-2 px-3 rounded-neu-sm bg-[#e6ecf5] dark:bg-[#181d24] shadow-neu-inset-sm dark:shadow-none text-xs sm:text-sm text-slate-800 dark:text-slate-100 outline-none placeholder:text-slate-400 dark:placeholder:text-slate-500 border border-transparent dark:border-slate-700/70 focus:border-blue-500"
          />
          <button
            onClick={() => handleSendMessage()}
            disabled={!inputText.trim()}
            className={`p-2.5 rounded-neu-sm font-semibold transition ${
              inputText.trim()
                ? "bg-blue-600 text-white shadow-neu-blue active:shadow-neu-blue-pressed hover:bg-blue-700"
                : "bg-slate-300 dark:bg-slate-800 text-slate-400 dark:text-slate-600 opacity-60 cursor-not-allowed"
            }`}
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
