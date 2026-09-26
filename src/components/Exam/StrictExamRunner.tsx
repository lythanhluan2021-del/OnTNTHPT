"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  ExamDefinition,
  ExamSubmission,
  ViolationEvent,
  ExamSubmissionDetail,
} from "@/types/examManagement";
import { ExamAnswerState } from "@/types";
import { soundManager } from "@/lib/audioEffects";
import { LatexRenderer } from "@/components/UI/LatexRenderer";
import { QuestionPalette } from "@/components/Practice/QuestionPalette";
import {
  Clock,
  ShieldAlert,
  AlertTriangle,
  Send,
  Flag,
  CheckCircle2,
  XCircle,
  Maximize2,
  Lock,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { calculateTrueFalseItemScore } from "@/data/mockExamGenerator";

interface StrictExamRunnerProps {
  exam: ExamDefinition;
  studentName: string;
  studentId: string;
  className: string;
  onFinishExam: (submission: ExamSubmission) => void;
  onCancelExam?: () => void;
}

export const StrictExamRunner: React.FC<StrictExamRunnerProps> = ({
  exam,
  studentName,
  studentId,
  className,
  onFinishExam,
  onCancelExam,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<ExamAnswerState>(() => {
    // Thử khôi phục từ LocalStorage nếu rớt mạng
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem(`thpt_active_exam_${exam.id}_${studentId}`);
        if (saved) return JSON.parse(saved);
      } catch {
        // Ignored
      }
    }
    return {
      mcAnswers: {},
      tfAnswers: {},
      flaggedQuestions: {},
    };
  });

  const [remainingSeconds, setRemainingSeconds] = useState(exam.durationMinutes * 60);
  const [startTime] = useState(Date.now());
  const [violations, setViolations] = useState<ViolationEvent[]>([]);
  const [tabSwitchCount, setTabSwitchCount] = useState(0);
  const [showViolationModal, setShowViolationModal] = useState(false);
  const [violationMessage, setViolationMessage] = useState("");
  const [isFullscreen, setIsFullscreen] = useState(true);
  const [showConfirmSubmit, setShowConfirmSubmit] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const maxViolations = exam.antiCheatConfig.maxViolations || 3;

  // Tự động lưu bài làm mỗi khi thay đổi câu trả lời
  useEffect(() => {
    try {
      localStorage.setItem(
        `thpt_active_exam_${exam.id}_${studentId}`,
        JSON.stringify(answers)
      );
    } catch {
      // Ignored
    }
  }, [answers, exam.id, studentId]);

  // Bộ đếm thời gian làm bài
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setRemainingSeconds((prev) => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          handleAutoSubmit("Hết thời gian làm bài");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // Hàm ghi nhận vi phạm quy chế
  const recordViolation = (type: ViolationEvent["type"], description: string) => {
    const newViolation: ViolationEvent = {
      timestamp: Date.now(),
      type,
      description,
    };

    setViolations((prev) => [...prev, newViolation]);
    setTabSwitchCount((prev) => {
      const nextCount = prev + 1;
      soundManager.playError();
      setViolationMessage(description);
      setShowViolationModal(true);

      // Nếu vượt quá số lần vi phạm cho phép -> Đình chỉ thi ngay
      if (nextCount >= maxViolations) {
        handleDisqualifySubmit(nextCount);
      }
      return nextCount;
    });
  };

  // 1. Chống chuyển Tab & Rời màn hình thi
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        recordViolation(
          "tab_switch",
          "Hệ thống phát hiện bạn vừa chuyển sang Tab khác hoặc thu nhỏ trình duyệt!"
        );
      }
    };

    const handleWindowBlur = () => {
      // Bắt sự kiện người dùng alt-tab sang ứng dụng ngoài
      recordViolation(
        "window_blur",
        "Hệ thống phát hiện bạn vừa rời khỏi cửa sổ bài thi (mở ứng dụng ngoài)!"
      );
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("blur", handleWindowBlur);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("blur", handleWindowBlur);
    };
  }, [maxViolations]);

  // 2. Bắt buộc Toàn Màn Hình (Fullscreen Lock)
  useEffect(() => {
    if (!exam.antiCheatConfig.enableFullscreen) return;

    // Yêu cầu toàn màn hình khi bắt đầu
    const enterFullscreen = async () => {
      try {
        if (!document.fullscreenElement) {
          await document.documentElement.requestFullscreen();
          setIsFullscreen(true);
        }
      } catch {
        // Trình duyệt có thể chặn nếu chưa có tương tác click
      }
    };

    enterFullscreen();

    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        setIsFullscreen(false);
        recordViolation(
          "fullscreen_exit",
          "Bạn vừa thoát khỏi chế độ Toàn Màn Hình bắt buộc!"
        );
      } else {
        setIsFullscreen(true);
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, [exam.antiCheatConfig.enableFullscreen]);

  // 3. Khóa Chuột Phải, Bôi Đen, Copy, Paste, DevTools F12
  useEffect(() => {
    if (!exam.antiCheatConfig.blockCopyPaste) return;

    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // F12
      if (e.key === "F12") {
        e.preventDefault();
        recordViolation("devtools_attempt", "Hành vi bấm phím F12 bị nghiêm cấm trong giờ thi!");
        return false;
      }

      // Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
      if (
        (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "i" || e.key === "J" || e.key === "j")) ||
        (e.ctrlKey && (e.key === "U" || e.key === "u"))
      ) {
        e.preventDefault();
        recordViolation("devtools_attempt", "Cố tình mở công cụ lập trình DevTools!");
        return false;
      }

      // Ctrl+C, Ctrl+V, Ctrl+X
      if (e.ctrlKey && (e.key === "c" || e.key === "C" || e.key === "v" || e.key === "V" || e.key === "x" || e.key === "X")) {
        e.preventDefault();
        recordViolation("copy_attempt", "Hành vi sao chép / dán nội dung bị vô hiệu hoá!");
        return false;
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [exam.antiCheatConfig.blockCopyPaste]);

  const currentQ = exam.questions[currentIndex] || exam.questions[0];

  // Chọn đáp án trắc nghiệm MC
  const handleSelectMc = (qId: string, optId: "A" | "B" | "C" | "D") => {
    soundManager.playClick();
    setAnswers((prev) => ({
      ...prev,
      mcAnswers: { ...prev.mcAnswers, [qId]: optId },
    }));
  };

  // Chọn đáp án Đúng/Sai
  const handleSelectTf = (qId: string, itemId: string, val: boolean) => {
    soundManager.playClick();
    setAnswers((prev) => {
      const current = prev.tfAnswers[qId] || {};
      return {
        ...prev,
        tfAnswers: {
          ...prev.tfAnswers,
          [qId]: { ...current, [itemId]: val },
        },
      };
    });
  };

  // Gắn cờ câu hỏi khó
  const handleToggleFlag = (idx: number) => {
    const q = exam.questions[idx];
    if (!q) return;
    soundManager.playClick();
    setAnswers((prev) => ({
      ...prev,
      flaggedQuestions: {
        ...prev.flaggedQuestions,
        [q.id]: !prev.flaggedQuestions[q.id],
      },
    }));
  };

  // Chấm điểm tự động chuẩn Bộ GD&ĐT
  const calculateFinalScores = () => {
    const mcQuestions = exam.questions.filter((q) => q.part === "mc");
    const tfQuestions = exam.questions.filter((q) => q.part === "tf");

    let totalCorrectMc = 0;
    let totalCorrectTfStatements = 0;
    let totalTfScore = 0;

    const details: ExamSubmissionDetail[] = [];

    // Chấm Phần 1 (MC)
    mcQuestions.forEach((q) => {
      const studentAns = answers.mcAnswers[q.id] || null;
      const isCorrect = studentAns === q.correctAnswer;
      if (isCorrect) totalCorrectMc++;

      details.push({
        questionId: q.id,
        type: "multiple_choice",
        studentAnswer: studentAns,
        correctAnswer: q.correctAnswer,
        isCorrect,
        earnedScore: isCorrect ? 0.25 : 0,
        maxScore: 0.25,
      });
    });

    const mcTotalScore = (totalCorrectMc / (mcQuestions.length || 1)) * 6.0;

    // Chấm Phần 2 (TF) theo chuẩn Bộ GD&ĐT
    tfQuestions.forEach((q) => {
      const studentTfObj = answers.tfAnswers[q.id] || {};
      const items = q.tfItems || [];
      let statementCorrectCount = 0;

      items.forEach((item) => {
        if (studentTfObj[item.id] === item.correctAnswer) {
          statementCorrectCount++;
          totalCorrectTfStatements++;
        }
      });

      const earned = calculateTrueFalseItemScore(statementCorrectCount);
      totalTfScore += earned;

      details.push({
        questionId: q.id,
        type: "true_false",
        studentAnswer: studentTfObj,
        correctAnswer: items.reduce((acc, it) => ({ ...acc, [it.id]: it.correctAnswer }), {}),
        isCorrect: statementCorrectCount === 4,
        earnedScore: earned,
        maxScore: 1.0,
      });
    });

    // Làm tròn thang điểm 10
    const rawTotal = mcTotalScore + totalTfScore;
    const finalTotal = Math.min(10, Math.round(rawTotal * 100) / 100);

    return {
      mcScore: Math.round(mcTotalScore * 100) / 100,
      tfScore: Math.round(totalTfScore * 100) / 100,
      totalScore: finalTotal,
      totalCorrectMc,
      totalCorrectTfStatements,
      details,
    };
  };

  // Nộp bài thi chính thức
  const handleSubmitExam = (isAuto: boolean = false, isDisqualified: boolean = false) => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    if (timerRef.current) clearInterval(timerRef.current);

    const scores = calculateFinalScores();
    const timeSpent = Math.max(1, Math.round((Date.now() - startTime) / 1000));

    const submission: ExamSubmission = {
      id: `sub-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      examId: exam.id,
      examTitle: exam.title,
      studentId,
      studentName,
      className,
      startTime,
      submitTime: Date.now(),
      timeSpentSeconds: timeSpent,
      tabSwitchCount,
      violations,
      isDisqualified,
      disqualifiedReason: isDisqualified
        ? `Vi phạm quy chế thi ${tabSwitchCount} lần (quá giới hạn cho phép ${maxViolations} lần).`
        : undefined,
      isAutoSubmitted: isAuto,
      mcScore: isDisqualified ? 0 : scores.mcScore,
      tfScore: isDisqualified ? 0 : scores.tfScore,
      totalScore: isDisqualified ? 0 : scores.totalScore,
      totalCorrectMc: scores.totalCorrectMc,
      totalCorrectTfStatements: scores.totalCorrectTfStatements,
      details: scores.details,
    };

    // Dọn sạch LocalStorage sau khi nộp
    try {
      localStorage.removeItem(`thpt_active_exam_${exam.id}_${studentId}`);
    } catch {
      // Ignored
    }

    if (isDisqualified) {
      soundManager.playError();
    } else {
      soundManager.playCorrect();
    }

    onFinishExam(submission);
  };

  const handleAutoSubmit = (reason: string) => {
    handleSubmitExam(true, false);
  };

  const handleDisqualifySubmit = (count: number) => {
    handleSubmitExam(true, true);
  };

  // Định dạng thời gian
  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;
  const timeFormatted = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  const isLowTime = remainingSeconds <= 300;
  const isCriticalTime = remainingSeconds <= 60;

  // Tính số lượng câu đã làm
  const isQuestionAnswered = (idx: number) => {
    const q = exam.questions[idx];
    if (!q) return false;
    if (q.part === "mc") {
      return !!answers.mcAnswers[q.id];
    }
    const tf = answers.tfAnswers[q.id];
    return !!tf && Object.keys(tf).length > 0;
  };

  const answeredTotal = exam.questions.filter((_, idx) => isQuestionAnswered(idx)).length;
  const isTrueFalse = currentQ?.part === "tf";

  return (
    <div
      className="min-h-screen bg-[#e6ecf5] dark:bg-[#12151a] flex flex-col antialiased select-none"
      onContextMenu={(e) => e.preventDefault()}
    >
      {/* 1. THANH TIÊU ĐỀ THI TRỰC TUYẾN CHỐNG GIAN LẬN */}
      <header className="sticky top-0 z-30 bg-[#e6ecf5]/95 dark:bg-[#1a1f26]/95 backdrop-blur-md border-b border-slate-300 dark:border-slate-800 shadow-neu-flat px-4 py-2.5">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 min-w-0">
            <div className="p-1.5 rounded-neu-sm bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400">
              <Lock className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <h1 className="text-xs sm:text-sm font-black text-slate-800 dark:text-slate-100 truncate">
                {exam.title}
              </h1>
              <div className="flex items-center gap-2 text-[10px] text-slate-500 dark:text-slate-400">
                <span>Thí sinh: <strong>{studentName}</strong> ({className})</span>
                <span className="hidden sm:inline">•</span>
                <span className="hidden sm:inline">Tiến độ: {answeredTotal}/{exam.totalQuestions}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {/* Cảnh báo số lần chuyển Tab vi phạm */}
            <div
              className={`px-2.5 py-1 rounded-full text-xs font-black flex items-center gap-1.5 border transition ${
                tabSwitchCount > 0
                  ? "bg-rose-100 dark:bg-rose-950/80 text-rose-700 dark:text-rose-300 border-rose-400 animate-pulse"
                  : "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-300"
              }`}
              title="Số lần phát hiện rời màn hình / chuyển tab"
            >
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>Vi phạm: {tabSwitchCount}/{maxViolations}</span>
            </div>

            {/* Đồng hồ đếm ngược */}
            <div
              className={`px-3 py-1.5 rounded-neu-sm flex items-center gap-1.5 font-mono text-xs sm:text-sm font-black shadow-neu-flat-xs border ${
                isCriticalTime
                  ? "bg-rose-600 text-white border-rose-700 animate-bounce"
                  : isLowTime
                  ? "bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-200 border-amber-400"
                  : "bg-[#e6ecf5] dark:bg-[#202734] text-blue-700 dark:text-blue-300 border-blue-400/40"
              }`}
            >
              <Clock className="w-4 h-4" />
              <span>{timeFormatted}</span>
            </div>

            {/* Nút Nộp Bài Thi */}
            <button
              type="button"
              onClick={() => setShowConfirmSubmit(true)}
              className="px-3.5 py-1.5 rounded-neu-sm bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs sm:text-sm font-bold shadow-neu-blue active:shadow-neu-blue-pressed flex items-center gap-1.5 hover:opacity-95 transition cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Nộp Bài</span>
            </button>
          </div>
        </div>
      </header>

      {/* 2. NỘI DUNG CHÍNH CỦA BÀI THI */}
      <main className="max-w-4xl mx-auto w-full p-4 space-y-4 flex-1 pb-24">
        {/* Bảng điều hướng câu hỏi */}
        <QuestionPalette
          totalQuestions={exam.totalQuestions}
          currentIndex={currentIndex}
          onSelectIndex={(idx) => setCurrentIndex(idx)}
          isAnswered={isQuestionAnswered}
          isFlagged={(idx) => {
            const q = exam.questions[idx];
            return !!(q && answers.flaggedQuestions[q.id]);
          }}
          onToggleFlag={handleToggleFlag}
          partDividerIndex={exam.mcCount}
        />

        {/* Thẻ câu hỏi hiện tại */}
        {currentQ && (
          <div className="p-4 sm:p-6 rounded-2xl bg-[#e6ecf5] dark:bg-[#1a1f26] shadow-neu-flat border border-white/60 dark:border-white/5 space-y-4">
            <div className="flex items-center justify-between gap-2 border-b border-slate-200/80 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-blue-600 text-white text-xs font-black">
                  Câu {currentIndex + 1}
                </span>
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                  {currentQ.part === "mc" ? "Phần 1: Trắc nghiệm 4 lựa chọn" : "Phần 2: Đúng / Sai"}
                </span>
              </div>

              <button
                type="button"
                onClick={() => handleToggleFlag(currentIndex)}
                className={`p-1.5 rounded-neu-sm text-xs font-bold transition flex items-center gap-1 ${
                  answers.flaggedQuestions[currentQ.id]
                    ? "bg-amber-100 text-amber-800 dark:bg-amber-950/80 dark:text-amber-300 border border-amber-500"
                    : "bg-[#e6ecf5] dark:bg-[#202734] text-slate-500 dark:text-slate-400 shadow-neu-flat-xs"
                }`}
                title="Đánh dấu câu hỏi để xem lại sau"
              >
                <Flag className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Ghim</span>
              </button>
            </div>

            {/* Nội dung đề bài */}
            <div className="text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-100 leading-relaxed">
              <LatexRenderer content={currentQ.content} />
            </div>

            {/* DẠNG 1: TRẮC NGHIỆM 4 LỰA CHỌN (PHẦN 1) */}
            {!isTrueFalse && currentQ.options && (
              <div className="space-y-2.5 pt-2">
                {currentQ.options.map((opt) => {
                  const isSelected = answers.mcAnswers[currentQ.id] === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => handleSelectMc(currentQ.id, opt.id)}
                      className={`w-full text-left p-3.5 rounded-neu-sm transition flex items-start gap-3 cursor-pointer ${
                        isSelected
                          ? "bg-blue-600 text-white shadow-neu-blue font-bold"
                          : "bg-[#e6ecf5] dark:bg-[#202734] text-slate-700 dark:text-slate-200 shadow-neu-flat-xs active:shadow-neu-inset hover:border-blue-400"
                      }`}
                    >
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 ${
                          isSelected ? "bg-white text-blue-700" : "bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
                        }`}
                      >
                        {opt.id}
                      </div>
                      <div className="flex-1 text-sm pt-0.5 leading-snug">
                        <LatexRenderer content={opt.content} />
                      </div>
                    </button>
                  );
                })}
              </div>
            )}

            {/* DẠNG 2: ĐÚNG / SAI (PHẦN 2) */}
            {isTrueFalse && currentQ.tfItems && (
              <div className="space-y-3 pt-2">
                {currentQ.tfItems.map((item) => {
                  const userChoice = answers.tfAnswers[currentQ.id]?.[item.id];
                  return (
                    <div
                      key={item.id}
                      className="p-3.5 rounded-neu-sm bg-[#e6ecf5] dark:bg-[#202734] shadow-neu-flat-xs space-y-2 border border-slate-300/40 dark:border-slate-800"
                    >
                      <div className="flex items-start gap-2">
                        <span className="font-bold text-blue-600 dark:text-blue-400 text-xs">
                          {item.id})
                        </span>
                        <div className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-snug">
                          <LatexRenderer content={item.content} />
                        </div>
                      </div>

                      <div className="flex items-center justify-end gap-2 pt-1 border-t border-slate-200/60 dark:border-slate-700/60">
                        <button
                          type="button"
                          onClick={() => handleSelectTf(currentQ.id, item.id, true)}
                          className={`px-3 py-1.5 rounded-neu-sm text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                            userChoice === true
                              ? "bg-emerald-600 text-white shadow-neu-inset"
                              : "bg-[#e6ecf5] dark:bg-[#1a1f26] text-emerald-800 dark:text-emerald-300 shadow-neu-flat-xs"
                          }`}
                        >
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Đúng</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => handleSelectTf(currentQ.id, item.id, false)}
                          className={`px-3 py-1.5 rounded-neu-sm text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                            userChoice === false
                              ? "bg-rose-600 text-white shadow-neu-inset"
                              : "bg-[#e6ecf5] dark:bg-[#1a1f26] text-rose-800 dark:text-rose-300 shadow-neu-flat-xs"
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
          </div>
        )}

        {/* Thanh chuyển câu trước / sau */}
        <div className="flex items-center justify-between gap-3 pt-2">
          <button
            type="button"
            disabled={currentIndex === 0}
            onClick={() => {
              soundManager.playClick();
              setCurrentIndex((prev) => Math.max(0, prev - 1));
            }}
            className="px-4 py-2 rounded-neu-sm bg-[#e6ecf5] dark:bg-[#202734] text-slate-700 dark:text-slate-300 text-xs font-bold shadow-neu-flat-xs active:shadow-neu-inset disabled:opacity-40 flex items-center gap-1.5 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Câu trước</span>
          </button>

          <span className="text-xs font-bold text-slate-500">
            {currentIndex + 1} / {exam.totalQuestions}
          </span>

          <button
            type="button"
            disabled={currentIndex === exam.totalQuestions - 1}
            onClick={() => {
              soundManager.playClick();
              setCurrentIndex((prev) => Math.min(exam.totalQuestions - 1, prev + 1));
            }}
            className="px-4 py-2 rounded-neu-sm bg-[#e6ecf5] dark:bg-[#202734] text-slate-700 dark:text-slate-300 text-xs font-bold shadow-neu-flat-xs active:shadow-neu-inset disabled:opacity-40 flex items-center gap-1.5 cursor-pointer"
          >
            <span>Câu tiếp theo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </main>

      {/* 3. MODAL CẢNH BÁO VI PHẠM AN NINH PHÒNG THI */}
      {showViolationModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
          <div className="max-w-md w-full p-6 rounded-2xl bg-[#e6ecf5] dark:bg-[#1a1f26] shadow-2xl border-4 border-rose-500 space-y-4 text-center">
            <div className="w-14 h-14 rounded-full bg-rose-100 text-rose-600 mx-auto flex items-center justify-center shadow-lg animate-bounce">
              <ShieldAlert className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <h2 className="text-lg font-black text-rose-700 dark:text-rose-400 uppercase tracking-wide">
                Cảnh Báo Vi Phạm Quy Chế Thi
              </h2>
              <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                {violationMessage}
              </p>
            </div>

            <div className="p-3 rounded-neu-sm bg-rose-50 dark:bg-rose-950/60 border border-rose-300 text-xs font-bold text-rose-800 dark:text-rose-200">
              Số lần vi phạm: {tabSwitchCount} / {maxViolations} lần cho phép.
              {tabSwitchCount >= maxViolations
                ? " Bạn đã bị đình chỉ thi và bài làm sẽ bị hủy điểm!"
                : " Nếu vượt quá số lần cho phép, bài thi sẽ bị tự động khóa và hủy điểm!"}
            </div>

            <button
              type="button"
              onClick={async () => {
                soundManager.playClick();
                setShowViolationModal(false);
                try {
                  if (exam.antiCheatConfig.enableFullscreen && !document.fullscreenElement) {
                    await document.documentElement.requestFullscreen();
                  }
                } catch {
                  // Ignored
                }
              }}
              className="w-full py-3 rounded-neu font-bold text-sm bg-blue-600 text-white shadow-neu-blue active:shadow-neu-blue-pressed cursor-pointer"
            >
              Tôi Đã Hiểu Và Quay Lại Làm Bài Ngay
            </button>
          </div>
        </div>
      )}

      {/* 4. MODAL XÁC NHẬN NỘP BÀI THI */}
      {showConfirmSubmit && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
          <div className="max-w-sm w-full p-5 rounded-2xl bg-[#e6ecf5] dark:bg-[#1a1f26] shadow-2xl border border-white/60 space-y-4 text-center">
            <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 mx-auto flex items-center justify-center">
              <Send className="w-6 h-6" />
            </div>

            <div className="space-y-1">
              <h3 className="text-base font-black text-slate-800 dark:text-slate-100">
                Xác Nhận Nộp Bài Thi?
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Bạn đã trả lời <strong>{answeredTotal}/{exam.totalQuestions}</strong> câu hỏi.
                {answeredTotal < exam.totalQuestions && (
                  <span className="block text-amber-600 font-bold mt-1">
                    Vẫn còn {exam.totalQuestions - answeredTotal} câu chưa hoàn thành!
                  </span>
                )}
              </p>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <button
                type="button"
                onClick={() => setShowConfirmSubmit(false)}
                className="flex-1 py-2.5 rounded-neu-sm bg-[#e6ecf5] dark:bg-[#202734] text-slate-700 dark:text-slate-300 text-xs font-bold shadow-neu-flat-xs active:shadow-neu-inset"
              >
                Làm tiếp
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowConfirmSubmit(false);
                  handleSubmitExam(false, false);
                }}
                className="flex-1 py-2.5 rounded-neu-sm bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold shadow-neu-blue active:shadow-neu-blue-pressed"
              >
                Nộp bài ngay
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
