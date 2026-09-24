"use client";

import React from "react";
import { Question } from "@/types";
import { LatexRenderer } from "../UI/LatexRenderer";
import { Check, X, Bookmark, FileText, CheckCircle2, XCircle, Terminal, Globe, Database } from "lucide-react";
import { soundManager } from "@/lib/audioEffects";
import { PYTHON_QUESTION_EXERCISES } from "@/data/pythonQuestionCodes";
import { HTML_CSS_QUESTION_EXERCISES } from "@/data/htmlCssTemplates";
import { SQL_QUESTION_EXERCISES } from "@/data/sqlDatasets";

interface QuestionCardProps {
  question: Question;
  currentIndex: number;
  totalInTopic: number;
  selectedOption: "A" | "B" | "C" | "D" | null;
  onSelectOption: (optionId: "A" | "B" | "C" | "D") => void;
  // Dành cho dạng câu hỏi Đúng/Sai (Phần 2)
  selectedTF?: Record<string, boolean | null>;
  onSelectTF?: (itemId: string, value: boolean) => void;
  hasAnswered: boolean;
  onOpenIde?: (
    codeSnippet?: string,
    exerciseTitle?: string,
    defaultInput?: string,
    targetAnswer?: string,
    questionNumber?: number | string
  ) => void;
  onOpenWebIde?: (
    htmlSnippet?: string,
    cssSnippet?: string,
    exerciseTitle?: string,
    targetAnswer?: string,
    questionNumber?: number | string
  ) => void;
  onOpenSqlIde?: (
    query?: string,
    datasetId?: string,
    exerciseTitle?: string,
    targetQuestionId?: string
  ) => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  currentIndex,
  totalInTopic,
  selectedOption,
  onSelectOption,
  selectedTF = {},
  onSelectTF,
  hasAnswered,
  onOpenIde,
  onOpenWebIde,
  onOpenSqlIde,
}) => {
  const isTrueFalse = question.type === "true_false" && question.tfItems && question.tfItems.length > 0;
  const isPythonQuestion =
    question.topicId === "tin-lap-trinh-python" ||
    question.topicId === "tin-python-dung-sai" ||
    question.topicName?.toLowerCase().includes("python");

  const isWebQuestion =
    question.topicId === "tin-chuyen-de-12f-web" ||
    question.topicId === "tin-12f" ||
    question.topicId === "tin-tao-trang-web-html-css" ||
    question.topicName?.toLowerCase().includes("html") ||
    question.topicName?.toLowerCase().includes("trang web") ||
    Boolean(HTML_CSS_QUESTION_EXERCISES[question.id]);

  const isSqlQuestion =
    question.topicId === "tin-co-so-du-lieu-sql" ||
    question.topicId === "tin-chuyen-de-11f" ||
    question.topicId === "tin-11f" ||
    question.topicId === "tin-csdl-quan-he" ||
    question.topicName?.toLowerCase().includes("csdl") ||
    question.topicName?.toLowerCase().includes("cơ sở dữ liệu") ||
    Boolean(SQL_QUESTION_EXERCISES[question.id]) ||
    question.content.toLowerCase().includes("sql") ||
    question.content.toLowerCase().includes("select ") ||
    question.content.toLowerCase().includes("inner join");

  const getDifficultyBadge = (difficulty: string) => {
    switch (difficulty) {
      case "NhanBiet":
        return {
          label: "Nhận biết",
          color: "text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/60 border-emerald-300 dark:border-emerald-800",
        };
      case "ThongHieu":
        return {
          label: "Thông hiểu",
          color: "text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-950/60 border-blue-300 dark:border-blue-800",
        };
      case "VanDung":
        return {
          label: "Vận dụng",
          color: "text-amber-700 dark:text-amber-300 bg-amber-100 dark:bg-amber-950/60 border-amber-300 dark:border-amber-800",
        };
      case "VanDungCao":
        return {
          label: "Vận dụng cao",
          color: "text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-950/60 border-purple-300 dark:border-purple-800",
        };
      default:
        return {
          label: "Chuẩn THPT",
          color: "text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-700",
        };
    }
  };

  const badge = getDifficultyBadge(question.difficulty);

  // Tính điểm chuẩn THPT cho câu Đúng/Sai (1 ý: 0.1đ, 2 ý: 0.25đ, 3 ý: 0.5đ, 4 ý: 1.0đ)
  const getTFScore = () => {
    if (!isTrueFalse || !hasAnswered || !question.tfItems) return null;
    let correctCount = 0;
    question.tfItems.forEach((item) => {
      if (selectedTF[item.id] === item.correctAnswer) {
        correctCount++;
      }
    });

    let score = "0.0";
    if (correctCount === 1) score = "0.1";
    else if (correctCount === 2) score = "0.25";
    else if (correctCount === 3) score = "0.5";
    else if (correctCount === 4) score = "1.0";

    return { correctCount, total: question.tfItems.length, score };
  };

  const tfScore = getTFScore();

  return (
    <div className="space-y-4">
      {/* Khung thẻ câu hỏi với Viền chuyển sắc mỏng xoay quanh (Chỉ viền có hiệu ứng chuyển sắc, không áp dụng lên nền) */}
      <div className="relative p-[1.5px] rounded-neu overflow-hidden shadow-neu-flat bg-slate-300/60">
        {/* Vệt chuyển sắc mỏng xoay chuyển liên tục 360 độ xung quanh viền khung */}
        <div
          className="absolute -inset-[200%] animate-[spin_5s_linear_infinite] pointer-events-none"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, #00d2ff 60deg, #3b82f6 120deg, #6366f1 180deg, #a855f7 240deg, transparent 320deg)",
          }}
        />

        {/* Nội dung Thẻ đề bài: Nền chuẩn Neumorphic #e6ecf5 đồng nhất */}
        <div className="relative z-10 p-4 sm:p-5 rounded-[16.5px] bg-[#e6ecf5] dark:bg-[#1a1f26] space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="font-extrabold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-1 rounded-neu-sm shadow-neu-flat-xs flex items-center gap-1.5 border border-transparent dark:border-blue-800/60">
              <span>Câu {currentIndex + 1} / {totalInTopic}</span>
              {isTrueFalse && (
                <span className="text-[10px] bg-blue-600 text-white px-1.5 py-0.5 rounded-full font-bold">
                  Đúng / Sai
                </span>
              )}
            </span>
            <span
              className={`font-semibold px-2 py-0.5 rounded-full border text-[11px] ${badge.color}`}
            >
              {badge.label}
            </span>
          </div>

          {/* Nguồn tài liệu trích xuất */}
          {question.sourceDocTitle && (
            <div className="flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400 font-medium">
              <FileText className="w-3.5 h-3.5 text-blue-500" />
              <span className="truncate">{question.sourceDocTitle}</span>
            </div>
          )}

          {/* Nội dung câu hỏi / Tình huống */}
          <div className="text-slate-800 dark:text-slate-100 text-sm sm:text-base font-medium leading-relaxed pt-1">
            <LatexRenderer content={question.content} />
          </div>

          {/* Nút chạy thử nghiệm bài tập này trong Python IDE */}
          {isPythonQuestion && onOpenIde && (() => {
            const questionExercise = PYTHON_QUESTION_EXERCISES[question.id];
            return (
              <div className="pt-2 flex flex-wrap items-center justify-between gap-2 border-t border-slate-200/60 mt-1.5">
                <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-medium">
                  {questionExercise ? (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px] border border-emerald-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Có sẵn mã nguồn thực hành
                    </span>
                  ) : (
                    <span className="text-[11px] text-slate-500">Môi trường chạy code CPython</span>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => {
                    soundManager.playClick();
                    if (questionExercise) {
                      onOpenIde(
                        questionExercise.runnableCode,
                        questionExercise.title,
                        questionExercise.defaultInput,
                        questionExercise.targetAnswer,
                        questionExercise.questionNumber
                      );
                    } else {
                      onOpenIde(undefined, `Luyện tập câu ${currentIndex + 1}`);
                    }
                  }}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-neu-sm text-xs font-bold shadow-neu-flat-xs active:shadow-neu-inset transition-all ${
                    questionExercise
                      ? "bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 hover:text-blue-900 border border-blue-300/80 hover:border-blue-400"
                      : "bg-[#e6ecf5] text-slate-700 hover:text-blue-700 border border-slate-300/60"
                  }`}
                  title="Mở trình soạn thảo Python IDE để chạy thử và kiểm chứng câu hỏi này"
                >
                  <Terminal className="w-3.5 h-3.5 text-blue-600" />
                  <span>
                    {questionExercise ? "🧪 Chạy thử bài này trong IDE (1-Click)" : "Mở Python IDE"}
                  </span>
                </button>
              </div>
            );
          })()}

          {/* Nút xem thử nghiệm bài tập này trong HTML & CSS Web IDE */}
          {isWebQuestion && onOpenWebIde && (() => {
            const webExercise = HTML_CSS_QUESTION_EXERCISES[question.id];
            return (
              <div className="pt-2 flex flex-wrap items-center justify-between gap-2 border-t border-slate-200/60 mt-1.5">
                <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-medium">
                  {webExercise ? (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 font-bold text-[10px] border border-blue-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                      Có sẵn mã HTML/CSS thực hành
                    </span>
                  ) : (
                    <span className="text-[11px] text-slate-500">Môi trường xem trước Web (Sandbox)</span>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => {
                    soundManager.playClick();
                    if (webExercise) {
                      onOpenWebIde(
                        webExercise.html,
                        webExercise.css,
                        webExercise.title,
                        webExercise.targetAnswer,
                        webExercise.questionNumber
                      );
                    } else {
                      onOpenWebIde(undefined, undefined, `Thực hành câu ${currentIndex + 1}`);
                    }
                  }}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-neu-sm text-xs font-bold shadow-neu-flat-xs active:shadow-neu-inset transition-all ${
                    webExercise
                      ? "bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 hover:text-blue-900 border border-blue-300/80 hover:border-blue-400"
                      : "bg-[#e6ecf5] text-slate-700 hover:text-blue-700 border border-slate-300/60"
                  }`}
                  title="Mở trình soạn thảo Web IDE để xem trang web hiển thị và kiểm chứng câu hỏi này"
                >
                  <Globe className="w-3.5 h-3.5 text-blue-600" />
                  <span>
                    {webExercise ? "🌐 Xem thử trong Web IDE (1-Click)" : "Mở Web IDE"}
                  </span>
                </button>
              </div>
            );
          })()}

          {/* Nút kiểm tra/thực hành nhanh trên SQL Studio */}
          {isSqlQuestion && onOpenSqlIde && (() => {
            const sqlExercise = SQL_QUESTION_EXERCISES[question.id];
            return (
              <div className="pt-2 flex flex-wrap items-center justify-between gap-2 border-t border-slate-200/60 mt-1.5">
                <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-medium">
                  {sqlExercise ? (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px] border border-emerald-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Có sẵn CSDL &amp; câu lệnh SQL mẫu
                    </span>
                  ) : (
                    <span className="text-[11px] text-slate-500">Môi trường thử nghiệm SQL Studio</span>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => {
                    soundManager.playClick();
                    if (sqlExercise) {
                      onOpenSqlIde(
                        sqlExercise.runnableQuery,
                        sqlExercise.datasetId,
                        sqlExercise.title,
                        question.id
                      );
                    } else {
                      onOpenSqlIde(
                        undefined,
                        undefined,
                        `SQL Studio - Câu ${currentIndex + 1}`,
                        question.id
                      );
                    }
                  }}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-neu-sm text-xs font-bold shadow-neu-flat-xs active:shadow-neu-inset transition-all ${
                    sqlExercise
                      ? "bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 hover:text-emerald-900 border border-emerald-300/80 hover:border-emerald-400"
                      : "bg-[#e6ecf5] text-slate-700 hover:text-emerald-700 border border-slate-300/60"
                  }`}
                  title="Mở SQL Studio với cơ sở dữ liệu mẫu thực tế để truy vấn và kiểm chứng câu hỏi này"
                >
                  <Database className="w-3.5 h-3.5 text-emerald-600" />
                  <span>
                    {sqlExercise ? "⚡ Thử nghiệm trong SQL Studio (1-Click)" : "Mở SQL Studio"}
                  </span>
                </button>
              </div>
            );
          })()}

          {/* Điểm số dạng Đúng / Sai khi đã làm xong */}
          {hasAnswered && tfScore && (
            <div className="mt-2 p-2.5 rounded-neu-sm bg-blue-50/80 border border-blue-200 flex items-center justify-between text-xs font-semibold text-blue-900">
              <span>
                Kết quả: Đúng <strong>{tfScore.correctCount}/{tfScore.total}</strong> ý
              </span>
              <span className="bg-blue-600 text-white px-2 py-0.5 rounded-full text-xs font-bold">
                +{tfScore.score} điểm THPT
              </span>
            </div>
          )}
        </div>
      </div>

      {/* DẠNG 1: CÂU HỎI TRẮC NGHIỆM NHIỀU LỰA CHỌN (A, B, C, D) */}
      {!isTrueFalse && question.options && (
        <div className="space-y-3">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider px-1">
            Chọn một phương án đúng:
          </div>
          {question.options.map((opt) => {
            const isSelected = selectedOption === opt.id;
            const isCorrect = question.correctAnswer === opt.id;

            let optionStyle =
              "bg-[#e6ecf5] dark:bg-[#1a1f26] text-slate-700 dark:text-slate-200 shadow-neu-flat-sm active:shadow-neu-inset hover:text-blue-700 dark:hover:text-blue-400";

            if (isSelected && !hasAnswered) {
              optionStyle =
                "bg-[#e6ecf5] dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 shadow-neu-inset border-2 border-blue-500/40 dark:border-blue-500 font-semibold";
            } else if (hasAnswered) {
              if (isCorrect) {
                optionStyle =
                  "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-200 border-2 border-emerald-500 shadow-neu-flat-xs font-semibold";
              } else if (isSelected && !isCorrect) {
                optionStyle =
                  "bg-rose-50 dark:bg-rose-950/60 text-rose-900 dark:text-rose-200 border-2 border-rose-500 shadow-neu-flat-xs";
              }
            }

            return (
              <button
                key={opt.id}
                onClick={() => {
                  if (!hasAnswered) {
                    soundManager.playClick();
                    onSelectOption(opt.id);
                  }
                }}
                disabled={hasAnswered}
                className={`w-full text-left p-3.5 rounded-neu-sm transition-all flex items-start gap-3 ${optionStyle}`}
              >
                {/* Option Letter Circle */}
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 transition-all ${
                    isSelected && !hasAnswered
                      ? "bg-blue-600 text-white shadow-neu-blue"
                      : hasAnswered && isCorrect
                      ? "bg-emerald-600 text-white"
                      : hasAnswered && isSelected && !isCorrect
                      ? "bg-rose-600 text-white"
                      : "bg-[#e6ecf5] dark:bg-[#202734] text-slate-600 dark:text-slate-300 shadow-neu-flat-xs"
                  }`}
                >
                  {opt.id}
                </div>

                {/* Option Math/Text Content */}
                <div className="flex-1 text-sm pt-0.5 leading-snug">
                  <LatexRenderer content={opt.content} />
                </div>

                {/* Validation Icon */}
                {hasAnswered && isCorrect && (
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 self-center" />
                )}
                {hasAnswered && isSelected && !isCorrect && (
                  <X className="w-5 h-5 text-rose-600 flex-shrink-0 self-center" />
                )}
              </button>
            );
          })}
        </div>
      )}

      {/* DẠNG 2: CÂU HỎI TRẮC NGHIỆM ĐÚNG / SAI (MỖI Ý a, b, c, d) */}
      {isTrueFalse && question.tfItems && (
        <div className="space-y-3">
          <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider px-1">
            Chọn Đúng (Đ) hoặc Sai (S) cho từng ý dưới đây:
          </div>

          {question.tfItems.map((item) => {
            const userChoice = selectedTF[item.id];
            const isAnswered = hasAnswered;
            const isItemCorrect = isAnswered && userChoice === item.correctAnswer;
            const isItemWrong = isAnswered && userChoice !== undefined && userChoice !== null && userChoice !== item.correctAnswer;

            return (
              <div
                key={item.id}
                className={`p-3.5 rounded-neu-sm bg-[#e6ecf5] dark:bg-[#1a1f26] shadow-neu-flat-sm space-y-2.5 transition-all ${
                  isAnswered
                    ? isItemCorrect
                      ? "border-2 border-emerald-500 bg-emerald-50/40 dark:bg-emerald-950/40"
                      : isItemWrong
                      ? "border-2 border-rose-500 bg-rose-50/40 dark:bg-rose-950/40"
                      : ""
                    : ""
                }`}
              >
                <div className="flex items-start gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 font-extrabold text-xs flex items-center justify-center flex-shrink-0 shadow-neu-flat-xs">
                    {item.id})
                  </span>
                  <div className="flex-1 text-xs sm:text-sm text-slate-800 dark:text-slate-100 font-medium leading-relaxed pt-0.5">
                    <LatexRenderer content={item.content} />
                  </div>
                </div>

                {/* Nút chọn Đúng / Sai */}
                <div className="flex items-center justify-end gap-2 pt-1">
                  {/* Nút Đúng */}
                  <button
                    onClick={() => {
                      if (!hasAnswered && onSelectTF) {
                        soundManager.playClick();
                        onSelectTF(item.id, true);
                      }
                    }}
                    disabled={hasAnswered}
                    className={`px-3 py-1.5 rounded-neu-sm text-xs font-bold transition-all flex items-center gap-1.5 ${
                      userChoice === true
                        ? "bg-emerald-600 text-white shadow-neu-inset"
                        : "bg-[#e6ecf5] dark:bg-[#202734] text-emerald-800 dark:text-emerald-300 shadow-neu-flat-xs active:shadow-neu-inset"
                    } ${
                      hasAnswered && item.correctAnswer === true
                        ? "ring-2 ring-emerald-500 ring-offset-1 font-extrabold"
                        : ""
                    }`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Đúng</span>
                  </button>

                  {/* Nút Sai */}
                  <button
                    onClick={() => {
                      if (!hasAnswered && onSelectTF) {
                        soundManager.playClick();
                        onSelectTF(item.id, false);
                      }
                    }}
                    disabled={hasAnswered}
                    className={`px-3 py-1.5 rounded-neu-sm text-xs font-bold transition-all flex items-center gap-1.5 ${
                      userChoice === false
                        ? "bg-rose-600 text-white shadow-neu-inset"
                        : "bg-[#e6ecf5] dark:bg-[#202734] text-rose-800 dark:text-rose-300 shadow-neu-flat-xs active:shadow-neu-inset"
                    } ${
                      hasAnswered && item.correctAnswer === false
                        ? "ring-2 ring-rose-500 ring-offset-1 font-extrabold"
                        : ""
                    }`}
                  >
                    <XCircle className="w-3.5 h-3.5" />
                    <span>Sai</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Phân tích lời giải sau khi làm xong */}
      {hasAnswered && question.explanation && (
        <div className="p-4 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset space-y-2 border-l-4 border-emerald-500">
          <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800 uppercase">
            <Bookmark className="w-4 h-4" />
            <span>Phân tích lời giải sau khi hoàn thành:</span>
          </div>
          <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            <LatexRenderer content={question.explanation} />
          </div>
        </div>
      )}
    </div>
  );
};
