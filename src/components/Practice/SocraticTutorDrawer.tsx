"use client";

import React, { useState } from "react";
import { Question, SocraticMessage } from "@/types";
import { generateSocraticGuidance, sanitizeTutorResponse } from "@/lib/socraticEngine";
import { LatexRenderer } from "../UI/LatexRenderer";
import {
  X,
  Send,
  Bot,
  User,
  ShieldCheck,
  Sparkles,
  HelpCircle,
} from "lucide-react";

interface SocraticTutorDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  question: Question;
}

export const SocraticTutorDrawer: React.FC<SocraticTutorDrawerProps> = ({
  isOpen,
  onClose,
  question,
}) => {
  const [messages, setMessages] = useState<SocraticMessage[]>([
    {
      id: "welcome",
      sender: "tutor",
      text: `Chào em! Thầy là Trợ lý Socratic đồng hành ôn thi THPT. Thầy sẽ giúp em phân tích định lý và phương pháp dựa trên tài liệu **"${question.sourceDocTitle || "Tài liệu Drive"}"**. \n\nEm đang gặp khó khăn ở bước nào trong câu này?`,
      timestamp: Date.now(),
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

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
      const rawAnswer = generateSocraticGuidance(question, text, studentQuestionsCount);
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

  const quickPrompts = [
    "Nhắc lại công thức cốt lõi",
    "Em chưa biết bắt đầu từ đâu",
    "Có phải đáp án B không thầy?",
  ];

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-end md:justify-center md:items-center bg-slate-900/50 backdrop-blur-sm">
      <div className="w-full max-w-lg bg-[#e6ecf5] rounded-t-neu-lg md:rounded-neu shadow-neu-flat max-h-[85vh] h-[80vh] flex flex-col overflow-hidden">
        {/* Tutor Header */}
        <div className="p-3.5 border-b border-slate-300/70 flex items-center justify-between bg-[#e6ecf5] shadow-neu-flat-xs">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-neu-blue">
              <Bot className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="font-bold text-slate-800 text-xs sm:text-sm">
                  Gia Sư Socratic THPT
                </h3>
                <span className="flex items-center gap-1 text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.2 rounded-full font-medium">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  Chuẩn tài liệu Drive
                </span>
              </div>
              <p className="text-[10px] text-slate-500">
                Gợi mở tư duy • Tuyệt đối không cho đáp án
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
                className={`max-w-[82%] p-3 rounded-neu-sm text-xs sm:text-sm leading-relaxed ${
                  msg.sender === "student"
                    ? "bg-blue-600 text-white shadow-neu-blue rounded-tr-none"
                    : "bg-[#e6ecf5] text-slate-800 shadow-neu-flat-sm rounded-tl-none border border-slate-200"
                }`}
              >
                <LatexRenderer content={msg.text} />
              </div>
              {msg.sender === "student" && (
                <div className="w-6 h-6 rounded-full bg-slate-300 text-slate-700 flex items-center justify-center flex-shrink-0 text-[10px] mt-1">
                  <User className="w-3.5 h-3.5" />
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2 text-slate-500 text-xs pl-8">
              <span className="animate-pulse">Gia sư đang phân tích tài liệu...</span>
            </div>
          )}
        </div>

        {/* Quick Suggestion Chips */}
        <div className="px-3 py-2 border-t border-slate-300/40 flex items-center gap-2 overflow-x-auto no-scrollbar">
          {quickPrompts.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(prompt)}
              className="text-[11px] whitespace-nowrap py-1 px-2.5 rounded-full bg-[#e6ecf5] shadow-neu-flat-xs active:shadow-neu-inset text-slate-700 hover:text-blue-600 flex items-center gap-1 font-medium"
            >
              <Sparkles className="w-3 h-3 text-amber-500" />
              <span>{prompt}</span>
            </button>
          ))}
        </div>

        {/* Input box */}
        <div className="p-3 border-t border-slate-300/60 bg-[#e6ecf5] flex items-center gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder="Hỏi về lý thuyết, phương pháp..."
            className="flex-1 py-2 px-3 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset-sm text-xs sm:text-sm text-slate-800 outline-none placeholder:text-slate-400"
          />
          <button
            onClick={() => handleSendMessage()}
            disabled={!inputText.trim()}
            className={`p-2.5 rounded-neu-sm font-semibold transition ${
              inputText.trim()
                ? "bg-blue-600 text-white shadow-neu-blue active:shadow-neu-blue-pressed"
                : "bg-slate-300 text-slate-400 opacity-60 cursor-not-allowed"
            }`}
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
