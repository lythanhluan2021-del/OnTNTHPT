"use client";

import React, { useState, useEffect, useRef } from "react";
import { MockExam, ExamAnswerState, ExamResult, MockExamQuestion } from "@/types";
import { gradeMockExam } from "@/data/mockExamGenerator";
import { QuestionPalette } from "@/components/Practice/QuestionPalette";
import { soundManager } from "@/lib/audioEffects";
import {
  Clock,
  Flag,
  Send,
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  ShieldAlert,
  CheckCircle2,
  XCircle,
  HelpCircle,
  RotateCcw,
  BookOpen,
} from "lucide-react";
import { LatexRenderer } from "@/components/UI/LatexRenderer";

interface MockExamViewProps {
  exam: MockExam;
  studentName: string;
  className?: string;
  initialReviewResult?: ExamResult | null;
  onFinishExam: (result: ExamResult) => void;
  onExitExam: () => void;
}

export const MockExamView: React.FC<MockExamViewProps> = ({
  exam,
  studentName,
  className,
  initialReviewResult = null,
  onFinishExam,
  onExitExam,
}) => {
  const isReviewMode = !!initialReviewResult;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<ExamAnswerState>({
    mcAnswers: {},
    tfAnswers: {},
    flaggedQuestions: {},
  });
  const [remainingSeconds, setRemainingSeconds] = useState(exam.durationMinutes * 60);
  const [startTime] = useState(Date.now());
  const [tabSwitchCount, setTabSwitchCount] = useState(0);
  const [showTabWarning, setShowTabWarning] = useState(false);
  const [showConfirmSubmit, setShowConfirmSubmit] = useState(false);
  const [showExitConfirm, setShowExitConfirm] = useState(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Khôi phục câu trả lời nếu đang ở chế độ xem lại bài (Review Mode)
  useEffect(() => {
    if (initialReviewResult) {
      const mcMap: Record<string, "A" | "B" | "C" | "D" | null> = {};
      const tfMap: Record<string, Record<string, boolean | null>> = {};

      initialReviewResult.details.forEach((det) => {
        if (det.type === "multiple_choice") {
          mcMap[det.questionId] = det.studentAnswer;
        } else {
          tfMap[det.questionId] = det.studentAnswer || {};
        }
      });

      setAnswers({
        mcAnswers: mcMap,
        tfAnswers: tfMap,
        flaggedQuestions: {},
      });
    }
  }, [initialReviewResult]);

  // Bộ đếm thời gian 50 phút
  useEffect(() => {
    if (isReviewMode) return;

    timerRef.current = setInterval(() => {
      setRemainingSeconds((prev) => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          handleAutoSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isReviewMode]);

  // Giám sát chuyển tab / rời màn hình thi (Anti-Cheat)
  useEffect(() => {
    if (isReviewMode) return;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        setTabSwitchCount((prev) => {
          const next = prev + 1;
          return next;
        });
      } else {
        setShowTabWarning(true);
        soundManager.playError();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isReviewMode]);

  // Xử lý nộp bài
  const handleSubmitExam = () => {
    const endTime = Date.now();
    const result = gradeMockExam(
      exam,
      answers,
      studentName,
      className,
      startTime,
      endTime,
      tabSwitchCount
    );
    soundManager.playSuccess();
    onFinishExam(result);
  };

  const handleAutoSubmit = () => {
    soundManager.playSuccess();
    handleSubmitExam();
  };

  // Định dạng thời gian MM:SS
  const formatTimer = (totalSecs: number) => {
    const m = Math.floor(totalSecs / 60);
    const s = totalSecs % 60;
    return `${m < 10 ? "0" : ""}${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const currentQ: MockExamQuestion | undefined = exam.questions[currentIndex];

  // Xử lý chọn đáp án MC
  const handleSelectMC = (optionKey: "A" | "B" | "C" | "D") => {
    if (isReviewMode || !currentQ) return;
    soundManager.playClick();
    setAnswers((prev) => ({
      ...prev,
      mcAnswers: {
        ...prev.mcAnswers,
        [currentQ.id]: optionKey,
      },
    }));
  };

  // Xử lý chọn đáp án Đúng / Sai
  const handleSelectTF = (itemId: string, val: boolean) => {
    if (isReviewMode || !currentQ) return;
    soundManager.playClick();
    setAnswers((prev) => ({
      ...prev,
      tfAnswers: {
        ...prev.tfAnswers,
        [currentQ.id]: {
          ...(prev.tfAnswers[currentQ.id] || {}),
          [itemId]: val,
        },
      },
    }));
  };

  // Toggle gắn cờ câu hỏi
  const handleToggleFlag = (idx: number) => {
    const targetQ = exam.questions[idx];
    if (!targetQ) return;
    soundManager.playClick();
    setAnswers((prev) => ({
      ...prev,
      flaggedQuestions: {
        ...prev.flaggedQuestions,
        [targetQ.id]: !prev.flaggedQuestions[targetQ.id],
      },
    }));
  };

  // Kiểm tra câu hỏi đã làm chưa
  const checkIsAnswered = (idx: number) => {
    const q = exam.questions[idx];
    if (!q) return false;
    if (q.part === "mc") {
      return !!answers.mcAnswers[q.id];
    } else {
      const tfAns = answers.tfAnswers[q.id];
      return tfAns && Object.keys(tfAns).length > 0;
    }
  };

  const checkIsFlagged = (idx: number) => {
    const q = exam.questions[idx];
    return q ? !!answers.flaggedQuestions[q.id] : false;
  };

  // Kiểm tra đúng/sai khi đang ở chế độ xem lại (Review Mode)
  const checkIsCorrect = (idx: number): boolean | null => {
    if (!initialReviewResult) return null;
    const q = exam.questions[idx];
    if (!q) return null;
    const det = initialReviewResult.details.find((d) => d.questionId === q.id);
    if (!det) return null;
    return det.isCorrect;
  };

  const isCurrentFlagged = currentQ ? !!answers.flaggedQuestions[currentQ.id] : false;
  const isTimerCritical = remainingSeconds <= 300 && !isReviewMode; // dưới 5 phút

  // Chi tiết câu hiện tại trong kết quả thi (nếu đang ở chế độ Review)
  const currentDetail = initialReviewResult?.details.find((d) => d.questionId === currentQ?.id);

  const answeredCount = exam.questions.filter((_, idx) => checkIsAnswered(idx)).length;

  return (
    <div className="min-h-screen bg-[#e6ecf5] dark:bg-[#13171e] text-slate-800 dark:text-slate-100 flex flex-col transition-colors pb-16">
      {/* 1. Header cố định của phòng thi */}
      <header className="sticky top-0 z-40 bg-[#e6ecf5]/95 dark:bg-[#1a1f26]/95 backdrop-blur-md px-3 sm:px-4 py-2.5 border-b border-slate-300/80 dark:border-slate-800 shadow-neu-flat-sm">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-2">
          {/* Nút thoát */}
          <button
            type="button"
            onClick={() => {
              soundManager.playClick();
              if (isReviewMode) {
                onExitExam();
              } else {
                setShowExitConfirm(true);
              }
            }}
            className="p-2 rounded-neu-sm bg-[#e6ecf5] dark:bg-[#212730] shadow-neu-flat-xs active:shadow-neu-inset text-slate-700 dark:text-slate-300 transition"
            title={isReviewMode ? "Quay lại" : "Dừng làm bài"}
          >
            <ArrowLeft className="w-4 h-4" />
          </button>

          {/* Tiêu đề & Thông tin thí sinh */}
          <div className="flex-1 text-center min-w-0">
            <h1 className="text-xs sm:text-sm font-extrabold text-slate-800 dark:text-slate-100 truncate">
              {exam.title}
            </h1>
            <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
              Thí sinh: <span className="font-bold text-blue-600 dark:text-blue-400">{studentName}</span>
              {className ? ` (${className})` : ""}
              {tabSwitchCount > 0 && !isReviewMode && (
                <span className="text-rose-500 font-bold ml-2">⚠️ Rời tab: {tabSwitchCount}</span>
              )}
            </p>
          </div>

          {/* Đồng hồ đếm ngược / Trạng thái nộp bài */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {!isReviewMode ? (
              <div
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-neu-sm shadow-neu-inset font-mono font-bold text-xs sm:text-sm transition-all ${
                  isTimerCritical
                    ? "bg-rose-50 dark:bg-rose-950/40 text-rose-600 animate-pulse border border-rose-400"
                    : "bg-[#e6ecf5] dark:bg-[#212730] text-blue-600 dark:text-blue-400"
                }`}
                title="Thời gian làm bài còn lại"
              >
                <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>{formatTimer(remainingSeconds)}</span>
              </div>
            ) : (
              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-300">
                Chế độ xem lại
              </span>
            )}

            {!isReviewMode && (
              <button
                type="button"
                onClick={() => {
                  soundManager.playClick();
                  setShowConfirmSubmit(true);
                }}
                className="flex items-center gap-1 px-3 py-1.5 rounded-neu-sm bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-neu-blue active:shadow-neu-blue-pressed transition"
              >
                <Send className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Nộp Bài</span>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* 2. Cảnh báo chuyển tab (Anti-Cheat modal/toast) */}
      {showTabWarning && !isReviewMode && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-sm bg-[#e6ecf5] dark:bg-[#1a1f26] rounded-neu-lg p-5 shadow-neu-flat dark:shadow-[8px_8px_20px_#101317,-8px_-8px_20px_#242b35] border-2 border-rose-500 space-y-4 text-center">
            <div className="inline-flex p-3 rounded-2xl bg-rose-100 dark:bg-rose-900/40 text-rose-600">
              <ShieldAlert className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-extrabold text-slate-800 dark:text-slate-100">
                Cảnh Báo Kỷ Luật Phòng Thi
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Bạn vừa chuyển sang tab khác hoặc rời màn hình làm bài! Hệ thống đã ghi nhận{" "}
                <strong className="text-rose-600">{tabSwitchCount} lần rời tab</strong> vào biên bản thi.
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                soundManager.playClick();
                setShowTabWarning(false);
              }}
              className="w-full py-2.5 rounded-neu-sm bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-neu-flat-xs active:shadow-neu-inset transition"
            >
              Tôi Đã Hiểu & Quay Lại Làm Bài
            </button>
          </div>
        </div>
      )}

      {/* 3. Modal xác nhận nộp bài */}
      {showConfirmSubmit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-sm bg-[#e6ecf5] dark:bg-[#1a1f26] rounded-neu-lg p-5 shadow-neu-flat dark:shadow-[8px_8px_20px_#101317,-8px_-8px_20px_#242b35] border border-white/80 dark:border-white/10 space-y-4 text-center">
            <div className="inline-flex p-3 rounded-2xl bg-blue-100 dark:bg-blue-900/40 text-blue-600">
              <Send className="w-7 h-7" />
            </div>
            <div className="space-y-1.5">
              <h3 className="text-base font-extrabold text-slate-800 dark:text-slate-100">
                Xác Nhận Nộp Bài Thi?
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                Bạn đã hoàn thành <strong>{answeredCount}/{exam.totalQuestions}</strong> câu hỏi.
                {answeredCount < exam.totalQuestions && (
                  <span className="block text-amber-600 font-semibold mt-1">
                    ⚠️ Còn {exam.totalQuestions - answeredCount} câu chưa trả lời!
                  </span>
                )}
              </p>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setShowConfirmSubmit(false)}
                className="flex-1 py-2 rounded-neu-sm bg-[#e6ecf5] dark:bg-[#212730] text-slate-700 dark:text-slate-300 font-bold text-xs shadow-neu-flat-xs active:shadow-neu-inset"
              >
                Làm Tiếp
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowConfirmSubmit(false);
                  handleSubmitExam();
                }}
                className="flex-1 py-2 rounded-neu-sm bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-neu-blue active:shadow-neu-blue-pressed"
              >
                Nộp Luôn
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 4. Modal xác nhận thoát thi giữa chừng */}
      {showExitConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-sm bg-[#e6ecf5] dark:bg-[#1a1f26] rounded-neu-lg p-5 shadow-neu-flat dark:shadow-[8px_8px_20px_#101317,-8px_-8px_20px_#242b35] border border-white/80 dark:border-white/10 space-y-4 text-center">
            <div className="inline-flex p-3 rounded-2xl bg-amber-100 dark:bg-amber-900/40 text-amber-600">
              <AlertTriangle className="w-7 h-7" />
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-extrabold text-slate-800 dark:text-slate-100">
                Dừng Làm Bài Thi?
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                Nếu thoát bây giờ, kết quả thi lần này sẽ không được lưu. Bạn có chắc chắn muốn rời phòng thi?
              </p>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setShowExitConfirm(false)}
                className="flex-1 py-2 rounded-neu-sm bg-blue-600 text-white font-bold text-xs shadow-neu-blue"
              >
                Tiếp Tục Thi
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowExitConfirm(false);
                  onExitExam();
                }}
                className="flex-1 py-2 rounded-neu-sm bg-rose-50 text-rose-600 font-bold text-xs border border-rose-300 hover:bg-rose-100"
              >
                Thoát Ra
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 5. Khung nội dung chính */}
      <main className="flex-1 max-w-3xl w-full mx-auto p-3 sm:p-4 space-y-4">
        {/* Bảng ma trận điều hướng câu hỏi */}
        <QuestionPalette
          totalQuestions={exam.totalQuestions}
          currentIndex={currentIndex}
          onSelectIndex={(idx) => setCurrentIndex(idx)}
          isAnswered={checkIsAnswered}
          isFlagged={!isReviewMode ? checkIsFlagged : undefined}
          isCorrect={isReviewMode ? checkIsCorrect : undefined}
          onToggleFlag={!isReviewMode ? handleToggleFlag : undefined}
          partDividerIndex={24}
        />

        {/* Nội dung câu hỏi đang chọn */}
        {currentQ ? (
          <div className="bg-[#e6ecf5] dark:bg-[#1a1f26] rounded-2xl p-4 sm:p-6 shadow-neu-flat dark:shadow-[6px_6px_16px_#101317,-6px_-6px_16px_#242b35] border border-white/60 dark:border-white/5 space-y-4 animate-fade-in">
            {/* Thanh tiêu đề câu hỏi */}
            <div className="flex items-center justify-between gap-2 border-b border-slate-200/80 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-neu-sm bg-blue-600 text-white font-black text-xs shadow-neu-flat-xs">
                  Câu {currentQ.examIndex} / {exam.totalQuestions}
                </span>
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  {currentQ.part === "mc" ? "Phần 1 (0.25đ)" : "Phần 2 (Tối đa 1.0đ)"}
                </span>
              </div>

              {/* Nút cờ & kết quả review */}
              <div className="flex items-center gap-2">
                {isReviewMode && currentDetail && (
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold border ${
                      currentDetail.isCorrect
                        ? "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-300"
                        : "bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border-rose-300"
                    }`}
                  >
                    {currentDetail.isCorrect ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5" /> +{currentDetail.earnedScore}đ
                      </>
                    ) : (
                      <>
                        <XCircle className="w-3.5 h-3.5" /> +{currentDetail.earnedScore}đ
                      </>
                    )}
                  </span>
                )}

                {!isReviewMode && (
                  <button
                    type="button"
                    onClick={() => handleToggleFlag(currentIndex)}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded-neu-sm text-xs font-bold transition ${
                      isCurrentFlagged
                        ? "bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-300 border border-amber-400 shadow-neu-inset-sm"
                        : "bg-[#e6ecf5] dark:bg-[#212730] text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 shadow-neu-flat-xs"
                    }`}
                    title={isCurrentFlagged ? "Bỏ gắn cờ câu hỏi" : "Gắn cờ để xem lại sau"}
                  >
                    <Flag className={`w-3.5 h-3.5 ${isCurrentFlagged ? "fill-amber-500 text-amber-500" : ""}`} />
                    <span>{isCurrentFlagged ? "Đã ghim" : "Ghim"}</span>
                  </button>
                )}
              </div>
            </div>

            {/* Nội dung đề bài */}
            <div className="text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-100 leading-relaxed">
              <LatexRenderer content={currentQ.content} />
            </div>

            {/* Phần 1: 4 Lựa chọn A, B, C, D */}
            {currentQ.part === "mc" && currentQ.options && (
              <div className="space-y-2.5 pt-2">
                {currentQ.options.map((opt) => {
                  const isSelected = answers.mcAnswers[currentQ.id] === opt.id;
                  const isCorrect = currentQ.correctAnswer === opt.id;

                  let cardStyle = "bg-[#e6ecf5] dark:bg-[#212730] shadow-neu-flat-sm active:shadow-neu-inset text-slate-700 dark:text-slate-200 hover:border-blue-400";
                  let keyBadge = "bg-[#e6ecf5] dark:bg-[#1a1f26] text-slate-600 dark:text-slate-300 shadow-neu-flat-xs";

                  if (isReviewMode) {
                    if (isCorrect) {
                      cardStyle = "bg-emerald-50 dark:bg-emerald-950/60 border-2 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-bold shadow-md";
                      keyBadge = "bg-emerald-500 text-white";
                    } else if (isSelected && !isCorrect) {
                      cardStyle = "bg-rose-50 dark:bg-rose-950/60 border-2 border-rose-500 text-rose-900 dark:text-rose-200 font-bold shadow-md";
                      keyBadge = "bg-rose-500 text-white";
                    }
                  } else {
                    if (isSelected) {
                      cardStyle = "bg-blue-50/80 dark:bg-blue-950/60 border-2 border-blue-500 text-blue-900 dark:text-blue-100 font-bold shadow-neu-inset";
                      keyBadge = "bg-blue-600 text-white";
                    }
                  }

                  return (
                    <button
                      key={opt.id}
                      type="button"
                      disabled={isReviewMode}
                      onClick={() => handleSelectMC(opt.id)}
                      className={`w-full text-left p-3 rounded-neu-sm transition-all flex items-start gap-3 border border-transparent ${cardStyle}`}
                    >
                      <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5 ${keyBadge}`}>
                        {opt.id}
                      </span>
                      <div className="flex-1 text-xs sm:text-sm leading-snug">
                        <LatexRenderer content={opt.content} />
                      </div>
                      {isReviewMode && isCorrect && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      )}
                      {isReviewMode && isSelected && !isCorrect && (
                        <XCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                      )}
                    </button>
                  );
                })}
              </div>
            )}

            {/* Phần 2: Đúng / Sai cho 4 ý a, b, c, d */}
            {currentQ.part === "tf" && currentQ.tfItems && (
              <div className="space-y-3 pt-2">
                <p className="text-xs text-slate-500 dark:text-slate-400 italic">
                  * Chọn Đúng hoặc Sai cho mỗi ý a), b), c), d) dưới đây:
                </p>
                {currentQ.tfItems.map((item) => {
                  const studentChoice = answers.tfAnswers[currentQ.id]?.[item.id];
                  const isStatementCorrect = studentChoice === item.correctAnswer;

                  return (
                    <div
                      key={item.id}
                      className="p-3 rounded-neu-sm bg-[#e6ecf5] dark:bg-[#212730] shadow-neu-flat-xs border border-white/40 dark:border-white/5 space-y-2"
                    >
                      <div className="flex items-start gap-2">
                        <span className="font-bold text-xs text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5">
                          {item.id})
                        </span>
                        <div className="flex-1 text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-snug">
                          <LatexRenderer content={item.content} />
                        </div>
                      </div>

                      {/* Nút bấm chọn Đúng / Sai */}
                      <div className="flex items-center justify-end gap-2 pt-1">
                        {/* Nút Đúng */}
                        <button
                          type="button"
                          disabled={isReviewMode}
                          onClick={() => handleSelectTF(item.id, true)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1 ${
                            studentChoice === true
                              ? isReviewMode
                                ? item.correctAnswer === true
                                  ? "bg-emerald-600 text-white font-black"
                                  : "bg-rose-600 text-white font-black"
                                : "bg-blue-600 text-white shadow-neu-inset"
                              : "bg-[#e6ecf5] dark:bg-[#1a1f26] text-slate-600 dark:text-slate-300 shadow-neu-flat-xs hover:text-blue-600"
                          }`}
                        >
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Đúng</span>
                        </button>

                        {/* Nút Sai */}
                        <button
                          type="button"
                          disabled={isReviewMode}
                          onClick={() => handleSelectTF(item.id, false)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1 ${
                            studentChoice === false
                              ? isReviewMode
                                ? item.correctAnswer === false
                                  ? "bg-emerald-600 text-white font-black"
                                  : "bg-rose-600 text-white font-black"
                                : "bg-blue-600 text-white shadow-neu-inset"
                              : "bg-[#e6ecf5] dark:bg-[#1a1f26] text-slate-600 dark:text-slate-300 shadow-neu-flat-xs hover:text-blue-600"
                          }`}
                        >
                          <XCircle className="w-3.5 h-3.5" />
                          <span>Sai</span>
                        </button>
                      </div>

                      {/* Hiển thị đáp án đúng khi ở chế độ Review */}
                      {isReviewMode && (
                        <div className="mt-1 pt-1 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px]">
                          <span className="text-slate-500">
                            Đáp án chuẩn: <strong>{item.correctAnswer ? "Đúng" : "Sai"}</strong>
                          </span>
                          <span
                            className={
                              isStatementCorrect
                                ? "text-emerald-600 font-bold"
                                : "text-rose-600 font-bold"
                            }
                          >
                            {isStatementCorrect ? "✓ Chính xác" : "✗ Chưa đúng"}
                          </span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {/* Hộp giải thích chi tiết khi ở chế độ Review */}
            {isReviewMode && currentQ.explanation && (
              <div className="mt-4 p-4 rounded-neu-sm bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 space-y-1.5 animate-fade-in">
                <div className="flex items-center gap-1.5 text-xs font-bold text-blue-700 dark:text-blue-300">
                  <BookOpen className="w-4 h-4" />
                  <span>Giải Thích Chi Tiết:</span>
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                  {currentQ.explanation}
                </p>
              </div>
            )}
          </div>
        ) : null}
      </main>

      {/* 6. Thanh điều hướng cố định ở mép dưới */}
      <footer className="fixed bottom-0 left-0 right-0 z-30 bg-[#e6ecf5]/95 dark:bg-[#1a1f26]/95 backdrop-blur-md px-4 py-2 border-t border-slate-300/80 dark:border-slate-800 shadow-neu-flat-sm">
        <div className="max-w-3xl mx-auto flex items-center justify-between gap-3">
          <button
            type="button"
            disabled={currentIndex === 0}
            onClick={() => {
              soundManager.playClick();
              setCurrentIndex((prev) => Math.max(0, prev - 1));
            }}
            className="flex items-center gap-1 px-3 py-2 rounded-neu-sm bg-[#e6ecf5] dark:bg-[#212730] shadow-neu-flat-xs active:shadow-neu-inset text-xs font-bold text-slate-700 dark:text-slate-300 disabled:opacity-40"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Câu Trước</span>
          </button>

          <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
            {currentIndex + 1} / {exam.totalQuestions}
          </span>

          <button
            type="button"
            disabled={currentIndex === exam.totalQuestions - 1}
            onClick={() => {
              soundManager.playClick();
              setCurrentIndex((prev) => Math.min(exam.totalQuestions - 1, prev + 1));
            }}
            className="flex items-center gap-1 px-3 py-2 rounded-neu-sm bg-blue-600 text-white shadow-neu-blue active:shadow-neu-blue-pressed text-xs font-bold disabled:opacity-40"
          >
            <span>Câu Tiếp</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </footer>
    </div>
  );
};
