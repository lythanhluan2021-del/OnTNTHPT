"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Question, StudentAttempt, Subject, Topic, MockExam, ExamResult } from "@/types";
import { INITIAL_QUESTIONS, INITIAL_SUBJECTS } from "@/data/sampleBank";
import { Sidebar } from "@/components/Layout/Sidebar";
import { Header } from "@/components/Layout/Header";
import { FixedBottomBar } from "@/components/Layout/FixedBottomBar";
import { QuestionCard } from "@/components/Practice/QuestionCard";
import { StepHintPanel } from "@/components/Practice/StepHintPanel";
import { SocraticTutorDrawer } from "@/components/Practice/SocraticTutorDrawer";
import { StatsDashboard } from "@/components/Analytics/StatsDashboard";
import { SubjectSwitchModal } from "@/components/Layout/SubjectSwitchModal";
import { TheoryViewer } from "@/components/Theory/TheoryViewer";
import { soundManager } from "@/lib/audioEffects";
import {
  BookOpen,
  ListOrdered,
  CheckCheck,
  Terminal,
  Globe,
  Database,
  Shuffle,
  RotateCcw,
  Sparkles,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { LoginModal } from "@/components/Auth/LoginModal";
import { StudentLoginGate } from "@/components/Auth/StudentLoginGate";
import { PythonIde } from "@/components/PythonIde/PythonIde";
import { PythonIdeDrawer } from "@/components/PythonIde/PythonIdeDrawer";
import { HtmlCssIde } from "@/components/HtmlCssIde/HtmlCssIde";
import { HtmlCssIdeDrawer } from "@/components/HtmlCssIde/HtmlCssIdeDrawer";
import { SqlIde } from "@/components/SqlStudio/SqlIde";
import { SqlIdeDrawer } from "@/components/SqlStudio/SqlIdeDrawer";
import { MockExamView } from "@/components/Exam/MockExamView";
import { ExamResultModal } from "@/components/Exam/ExamResultModal";
import { QuestionPalette } from "@/components/Practice/QuestionPalette";
import { WeeklyGoalCard } from "@/components/Practice/WeeklyGoalCard";
import { generateMockExam } from "@/data/mockExamGenerator";
import { shuffleTopicQuestions } from "@/lib/questionShuffler";

export default function AppHome() {
  const { user, isLoggedIn, isAuthLoading } = useAuth();

  // 1. Data States
  const [subjects, setSubjects] = useState<Subject[]>(INITIAL_SUBJECTS);
  const [questions, setQuestions] = useState<Question[]>(INITIAL_QUESTIONS);
  const [attempts, setAttempts] = useState<StudentAttempt[]>([]);

  // 2. Navigation States
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>("tin-hoc-12");
  const [selectedTopicId, setSelectedTopicId] = useState<string>(
    INITIAL_SUBJECTS[0].topics[0].id
  );
  const [activeTab, setActiveTab] = useState<"practice" | "analytics" | "theory" | "ide" | "web-ide" | "sql-ide">("practice");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [ideCodeToRun, setIdeCodeToRun] = useState<string | undefined>(undefined);
  const [isIdeDrawerOpen, setIsIdeDrawerOpen] = useState(false);
  const [ideDrawerCode, setIdeDrawerCode] = useState<string | undefined>(undefined);
  const [ideDrawerStdin, setIdeDrawerStdin] = useState<string | undefined>(undefined);
  const [ideDrawerTitle, setIdeDrawerTitle] = useState<string | undefined>(undefined);
  const [ideDrawerTargetAnswer, setIdeDrawerTargetAnswer] = useState<string | undefined>(undefined);
  const [ideDrawerQuestionNumber, setIdeDrawerQuestionNumber] = useState<number | string | undefined>(undefined);

  // Web IDE (HTML & CSS) States
  const [webIdeCodeToRun, setWebIdeCodeToRun] = useState<{ html?: string; css?: string } | undefined>(undefined);
  const [isWebIdeDrawerOpen, setIsWebIdeDrawerOpen] = useState(false);
  const [webIdeDrawerHtml, setWebIdeDrawerHtml] = useState<string | undefined>(undefined);
  const [webIdeDrawerCss, setWebIdeDrawerCss] = useState<string | undefined>(undefined);
  const [webIdeDrawerTitle, setWebIdeDrawerTitle] = useState<string | undefined>(undefined);
  const [webIdeDrawerTargetAnswer, setWebIdeDrawerTargetAnswer] = useState<string | undefined>(undefined);
  const [webIdeDrawerQuestionNumber, setWebIdeDrawerQuestionNumber] = useState<number | string | undefined>(undefined);

  // SQL Studio (CSDL & Truy vấn SQL) States
  const [sqlCodeToRun, setSqlCodeToRun] = useState<string | undefined>(undefined);
  const [sqlDatasetIdToRun, setSqlDatasetIdToRun] = useState<string | undefined>(undefined);
  const [isSqlDrawerOpen, setIsSqlDrawerOpen] = useState(false);
  const [sqlDrawerQuery, setSqlDrawerQuery] = useState<string | undefined>(undefined);
  const [sqlDrawerDatasetId, setSqlDrawerDatasetId] = useState<string | undefined>(undefined);
  const [sqlDrawerTitle, setSqlDrawerTitle] = useState<string | undefined>(undefined);
  const [sqlDrawerTargetQuestionId, setSqlDrawerTargetQuestionId] = useState<string | undefined>(undefined);

  // Mặc định mở sidebar trên màn hình máy tính (>= 768px)
  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth >= 768) {
      setIsSidebarOpen(true);
    }
  }, []);
  const [isSubjectModalOpen, setIsSubjectModalOpen] = useState(false);

  // 3. Question Practice States
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<"A" | "B" | "C" | "D" | null>(
    null
  );
  const [selectedTF, setSelectedTF] = useState<Record<string, boolean | null>>({});
  const [hasAnswered, setHasAnswered] = useState(false);
  const [hintLevel, setHintLevel] = useState(0);
  const [isHintOpen, setIsHintOpen] = useState(false);
  const [isSocraticOpen, setIsSocraticOpen] = useState(false);
  const [questionStartTime, setQuestionStartTime] = useState<number>(Date.now());
  const [activeQuestionFormat, setActiveQuestionFormat] = useState<"all" | "mc" | "tf">("mc");

  // Đảo ngẫu nhiên câu hỏi & đáp án (Tránh học thuộc lòng theo vị trí)
  const [isShuffleEnabled, setIsShuffleEnabled] = useState<boolean>(true);
  const [shuffleSeed, setShuffleSeed] = useState<number>(0);
  const [sessionAnswers, setSessionAnswers] = useState<
    Record<
      string,
      {
        answered: boolean;
        isCorrect: boolean;
        selectedOption?: "A" | "B" | "C" | "D" | null;
        selectedTF?: Record<string, boolean>;
      }
    >
  >({});
  const [shuffleToastMessage, setShuffleToastMessage] = useState<string | null>(null);

  // 4. Mock Exam (Thi thử 50 phút chuẩn Bộ GD&ĐT) States
  const [activeMockExam, setActiveMockExam] = useState<MockExam | null>(null);
  const [examResult, setExamResult] = useState<ExamResult | null>(null);
  const [isExamResultModalOpen, setIsExamResultModalOpen] = useState(false);
  const [reviewModeResult, setReviewModeResult] = useState<ExamResult | null>(null);

  const handleStartMockExam = () => {
    soundManager.playClick();
    const newExam = generateMockExam(
      questions,
      `Đề thi thử Tốt nghiệp THPT 2026 - Môn Tin học (${new Date().toLocaleDateString("vi-VN")})`
    );
    setActiveMockExam(newExam);
    setReviewModeResult(null);
    setExamResult(null);
    setIsExamResultModalOpen(false);
  };

  const handleFinishMockExam = (result: ExamResult) => {
    setExamResult(result);
    setIsExamResultModalOpen(true);
    // Lưu lịch sử thi thử
    try {
      const savedExams = localStorage.getItem("thpt_mock_exam_results");
      const list = savedExams ? JSON.parse(savedExams) : [];
      list.unshift(result);
      localStorage.setItem("thpt_mock_exam_results", JSON.stringify(list.slice(0, 50)));
    } catch {
      // Ignored
    }
  };

  const handleReviewExam = () => {
    setReviewModeResult(examResult);
    setIsExamResultModalOpen(false);
  };

  const handleRetakeExam = () => {
    setIsExamResultModalOpen(false);
    handleStartMockExam();
  };

  const handleExitExam = () => {
    setActiveMockExam(null);
    setReviewModeResult(null);
    setIsExamResultModalOpen(false);
  };

  const isPracticeQuestionAnswered = (idx: number) => {
    const q = topicQuestions[idx];
    if (!q) return false;
    return Boolean(sessionAnswers[q.id]?.answered);
  };

  const isPracticeQuestionCorrect = (idx: number): boolean | null => {
    const q = topicQuestions[idx];
    if (!q) return null;
    const sessionItem = sessionAnswers[q.id];
    if (!sessionItem || !sessionItem.answered) return null;
    return sessionItem.isCorrect;
  };

  // Nạp lịch sử và dữ liệu đã đồng bộ từ localStorage với cơ chế kiểm soát phiên bản chuẩn KH GD1
  useEffect(() => {
    try {
      const STRUCTURE_VERSION = "2026_GD1_V9_CHUYEN_DE_12E";
      const currentVer = localStorage.getItem("thpt_structure_version");

      if (currentVer !== STRUCTURE_VERSION) {
        // Tự động dọn sạch cache cũ chứa các câu hỏi bị lỗi bóc tách để nạp ngân hàng câu hỏi chuẩn xác 100%
        localStorage.removeItem("thpt_custom_subjects");
        localStorage.removeItem("thpt_custom_questions");
        localStorage.setItem("thpt_structure_version", STRUCTURE_VERSION);
        setSubjects(INITIAL_SUBJECTS);
        setQuestions(INITIAL_QUESTIONS);
      } else {
        const savedSubjects = localStorage.getItem("thpt_custom_subjects");
        if (savedSubjects) {
          const parsedS = JSON.parse(savedSubjects);
          if (Array.isArray(parsedS) && parsedS.length > 0) {
            // Chỉ cập nhật số lượng câu hỏi nếu có file mới từ Drive, KHÔNG BAO GIỜ append các topic lạ/cũ
            const merged = INITIAL_SUBJECTS.map((initSubj) => {
              const found = parsedS.find((s: any) => s.id === initSubj.id);
              if (found && found.topics && found.topics.length > 0) {
                const updatedTopics = initSubj.topics.map((initTop) => {
                  const foundTop = found.topics.find((t: any) => t.id === initTop.id);
                  if (foundTop && (foundTop.totalQuestions || 0) > initTop.totalQuestions) {
                    return { ...initTop, totalQuestions: foundTop.totalQuestions };
                  }
                  return initTop;
                });
                return { ...initSubj, topics: updatedTopics };
              }
              return initSubj;
            });
            setSubjects(merged);
          }
        }
      }

      // Nạp lịch sử làm bài và tự động map các topicId cũ nếu có
      const savedAttempts = localStorage.getItem("thpt_attempts");
      if (savedAttempts) {
        const parsedAttempts = JSON.parse(savedAttempts);
        if (Array.isArray(parsedAttempts)) {
          const normalizedAttempts = parsedAttempts.map((att: any) => {
            if (att.topicId === "tin-ai-dung-sai") return { ...att, topicId: "tin-ai-tri-tue-nhan-tao" };
            if (att.topicId === "tin-python-dung-sai") return { ...att, topicId: "tin-lap-trinh-python" };
            if (att.topicId === "tin-mang-dung-sai") return { ...att, topicId: "tin-thiet-bi-giao-thuc-mang" };
            return att;
          });
          setAttempts(normalizedAttempts);
        }
      }

      // Nạp câu hỏi tùy chỉnh (loại trừ ID trùng và map ID chuẩn)
      const savedQuestions = localStorage.getItem("thpt_custom_questions");
      if (savedQuestions) {
        const parsedQ = JSON.parse(savedQuestions);
        if (Array.isArray(parsedQ) && parsedQ.length > 0) {
          const initIds = new Set(INITIAL_QUESTIONS.map((q) => q.id));
          const normalizedQ = parsedQ.map((q: any) => {
            if (q.topicId === "tin-ai-dung-sai") return { ...q, topicId: "tin-ai-tri-tue-nhan-tao" };
            if (q.topicId === "tin-python-dung-sai") return { ...q, topicId: "tin-lap-trinh-python" };
            if (q.topicId === "tin-mang-dung-sai") return { ...q, topicId: "tin-thiet-bi-giao-thuc-mang" };
            return q;
          }).filter((q: any) => !initIds.has(q.id));

          setQuestions([...INITIAL_QUESTIONS, ...normalizedQ]);
          localStorage.setItem("thpt_custom_questions", JSON.stringify(normalizedQ));
        }
      }
    } catch {
      // Ignored
    }
  }, []);

  // Tự động đồng bộ các lượt làm bài từ localStorage lên máy chủ khi học sinh đăng nhập
  useEffect(() => {
    if (!user) return;
    try {
      const raw = localStorage.getItem("thpt_attempts");
      if (!raw) return;
      const localAttempts: StudentAttempt[] = JSON.parse(raw);
      if (Array.isArray(localAttempts) && localAttempts.length > 0) {
        const enriched = localAttempts.map((att) => ({
          ...att,
          studentId: att.studentId || user.id || user.username,
          studentName: att.studentName || user.fullName,
          className: att.className || user.className,
        }));
        localStorage.setItem("thpt_attempts", JSON.stringify(enriched));
        setAttempts(enriched);

        fetch("/api/student/attempts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ attempts: enriched }),
        }).catch((err) => console.warn("Lỗi đồng bộ attempts lên máy chủ:", err));
      }
    } catch {
      // Ignored
    }
  }, [user]);

  // Thông tin tiêu đề hiển thị trên Header và trạng thái Lý thuyết
  const currentSubject = subjects.find((s) => s.id === selectedSubjectId);
  const currentTopic = currentSubject?.topics.find((t) => t.id === selectedTopicId);
  const currentHasTheory = Boolean(
    currentTopic?.hasTheory ||
    selectedTopicId === "tin-ai-tri-tue-nhan-tao" ||
    selectedTopicId === "tin-lap-trinh-python" ||
    selectedTopicId === "tin-thiet-bi-giao-thuc-mang"
  );
  const isPythonTopic = Boolean(
    selectedTopicId === "tin-lap-trinh-python" ||
    selectedTopicId === "tin-python-dung-sai" ||
    currentTopic?.name?.toLowerCase().includes("python")
  );
  const isWebTopic = Boolean(
    selectedTopicId === "tin-chuyen-de-12f-web" ||
    selectedTopicId === "tin-12f" ||
    selectedTopicId === "tin-chuyen-de-12e-web" ||
    selectedTopicId === "tin-12e" ||
    selectedTopicId === "tin-tao-trang-web-html-css" ||
    currentTopic?.name?.toLowerCase().includes("html") ||
    currentTopic?.name?.toLowerCase().includes("trang web")
  );
  const isSqlTopic = Boolean(
    selectedTopicId === "tin-co-so-du-lieu-sql" ||
    selectedTopicId === "tin-chuyen-de-11f" ||
    selectedTopicId === "tin-11f" ||
    selectedTopicId === "tin-csdl-quan-he" ||
    currentTopic?.name?.toLowerCase().includes("csdl") ||
    currentTopic?.name?.toLowerCase().includes("cơ sở dữ liệu") ||
    currentTopic?.name?.toLowerCase().includes("sql")
  );

  // Lọc toàn bộ câu hỏi theo chủ đề (hỗ trợ cả alias cũ nếu có trong bộ nhớ tạm)
  const allTopicQuestions = useMemo(() => {
    return questions.filter((q) => {
      if (selectedTopicId === "tin-ai-tri-tue-nhan-tao") {
        return q.topicId === "tin-ai-tri-tue-nhan-tao" || q.topicId === "tin-ai-dung-sai";
      }
      if (selectedTopicId === "tin-lap-trinh-python") {
        return q.topicId === "tin-lap-trinh-python" || q.topicId === "tin-python-dung-sai";
      }
      if (selectedTopicId === "tin-thiet-bi-giao-thuc-mang") {
        return q.topicId === "tin-thiet-bi-giao-thuc-mang" || q.topicId === "tin-mang-dung-sai";
      }
      return q.topicId === selectedTopicId;
    });
  }, [questions, selectedTopicId]);

  // Đếm số lượng câu hỏi trắc nghiệm 4 lựa chọn và Đúng / Sai
  const mcQuestionsCount = useMemo(() => {
    return allTopicQuestions.filter((q) => q.type !== "true_false").length;
  }, [allTopicQuestions]);

  const tfQuestionsCount = useMemo(() => {
    return allTopicQuestions.filter((q) => q.type === "true_false").length;
  }, [allTopicQuestions]);

  // Tự động điều chỉnh định dạng nếu chủ đề không có dạng câu hỏi đang chọn
  useEffect(() => {
    if (activeQuestionFormat === "tf" && tfQuestionsCount === 0 && mcQuestionsCount > 0) {
      setActiveQuestionFormat("mc");
    } else if (activeQuestionFormat === "mc" && mcQuestionsCount === 0 && tfQuestionsCount > 0) {
      setActiveQuestionFormat("tf");
    }
  }, [selectedTopicId, mcQuestionsCount, tfQuestionsCount, activeQuestionFormat]);

  // Danh sách câu hỏi hiển thị theo định dạng đang chọn (MC hoặc TF), hỗ trợ đảo câu hỏi & đáp án
  const topicQuestions = useMemo(() => {
    let baseList: Question[] = [];
    if (activeQuestionFormat === "mc") {
      const mcList = allTopicQuestions.filter((q) => q.type !== "true_false");
      baseList = mcList.length > 0 ? mcList : allTopicQuestions;
    } else if (activeQuestionFormat === "tf") {
      const tfList = allTopicQuestions.filter((q) => q.type === "true_false");
      baseList = tfList.length > 0 ? tfList : allTopicQuestions;
    } else {
      baseList = allTopicQuestions;
    }

    if (!isShuffleEnabled) {
      return baseList;
    }

    // Đảo ngẫu nhiên cả thứ tự câu hỏi và các phương án A, B, C, D (hoặc a, b, c, d)
    return shuffleTopicQuestions(baseList, {
      shuffleQuestions: isShuffleEnabled,
      shuffleOptions: isShuffleEnabled,
    });
  }, [allTopicQuestions, activeQuestionFormat, isShuffleEnabled, shuffleSeed]);

  // Reset session answers khi đổi chủ đề hoặc đổi dạng bài
  useEffect(() => {
    setSessionAnswers({});
    setCurrentQuestionIndex(0);
  }, [selectedTopicId, activeQuestionFormat]);

  // Câu hỏi hiện tại
  const currentQuestion = topicQuestions[currentQuestionIndex] || topicQuestions[0];

  // Đồng bộ trạng thái câu hỏi khi chuyển câu, chuyển chủ đề hoặc đổi dạng bài
  useEffect(() => {
    const q = topicQuestions[currentQuestionIndex];
    if (q && sessionAnswers[q.id]?.answered) {
      const state = sessionAnswers[q.id];
      setSelectedOption(state.selectedOption || null);
      setSelectedTF(state.selectedTF || {});
      setHasAnswered(true);
    } else {
      setSelectedOption(null);
      setSelectedTF({});
      setHasAnswered(false);
    }
    setHintLevel(0);
    setIsHintOpen(false);
    setQuestionStartTime(Date.now());
  }, [currentQuestionIndex, selectedTopicId, activeQuestionFormat, topicQuestions, sessionAnswers]);

  // Chọn Đúng / Sai cho từng ý câu hỏi Phần 2
  const handleSelectTF = (itemId: string, value: boolean) => {
    setSelectedTF((prev) => ({ ...prev, [itemId]: value }));
  };

  // Xử lý kiểm tra đáp án
  const handleCheckAnswer = () => {
    if (!currentQuestion || hasAnswered) return;

    const timeSpent = Math.max(
      1,
      Math.round((Date.now() - questionStartTime) / 1000)
    );

    // 1. Kiểm tra cho dạng câu hỏi Đúng / Sai (Phần 2)
    if (currentQuestion.type === "true_false") {
      const items = currentQuestion.tfItems || [];
      if (Object.keys(selectedTF).length === 0) return;

      let correctCount = 0;
      items.forEach((item) => {
        if (selectedTF[item.id] === item.correctAnswer) {
          correctCount++;
        }
      });

      const isAllCorrect = correctCount === items.length;
      if (correctCount >= 3) {
        soundManager.playCorrect();
      } else {
        soundManager.playIncorrect();
      }

      const newAttempt: StudentAttempt = {
        id: "att-" + Date.now() + "-" + Math.random().toString(36).slice(2, 6),
        studentId: user?.id || user?.username,
        studentName: user?.fullName,
        className: user?.className,
        questionId: currentQuestion.id,
        subjectId: currentQuestion.subjectId,
        topicId: currentQuestion.topicId,
        selectedOption: null,
        selectedTF: selectedTF as any,
        isCorrect: isAllCorrect,
        hintsViewed: hintLevel,
        socraticQuestionsAsked: 0,
        timeSpentSeconds: timeSpent,
        timestamp: Date.now(),
      };

      const updatedAttempts = [...attempts, newAttempt];
      setAttempts(updatedAttempts);
      setHasAnswered(true);

      // Lưu kết quả vào phiên làm bài hiện tại
      setSessionAnswers((prev) => ({
        ...prev,
        [currentQuestion.id]: {
          answered: true,
          isCorrect: isAllCorrect,
          selectedOption: null,
          selectedTF: { ...(selectedTF as Record<string, boolean>) },
        },
      }));

      try {
        localStorage.setItem("thpt_attempts", JSON.stringify(updatedAttempts));
      } catch {
        // Storage error handled
      }

      // Tự động đồng bộ kết quả lên máy chủ nếu học sinh đã đăng nhập
      if (user) {
        fetch("/api/student/attempts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newAttempt),
        }).catch((err) => console.warn("Lỗi đồng bộ kết quả:", err));
      }
      return;
    }

    // 2. Kiểm tra cho dạng câu hỏi Trắc nghiệm 4 lựa chọn (Phần 1)
    if (!selectedOption) return;

    const isCorrect = selectedOption === currentQuestion.correctAnswer;
    if (isCorrect) {
      soundManager.playCorrect();
    } else {
      soundManager.playIncorrect();
    }

    const newAttempt: StudentAttempt = {
      id: "att-" + Date.now() + "-" + Math.random().toString(36).slice(2, 6),
      studentId: user?.id || user?.username,
      studentName: user?.fullName,
      className: user?.className,
      questionId: currentQuestion.id,
      subjectId: currentQuestion.subjectId,
      topicId: currentQuestion.topicId,
      selectedOption,
      isCorrect,
      hintsViewed: hintLevel,
      socraticQuestionsAsked: 0,
      timeSpentSeconds: timeSpent,
      timestamp: Date.now(),
    };

    const updatedAttempts = [...attempts, newAttempt];
    setAttempts(updatedAttempts);
    setHasAnswered(true);

    // Lưu kết quả vào phiên làm bài hiện tại
    setSessionAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: {
        answered: true,
        isCorrect,
        selectedOption,
        selectedTF: {},
      },
    }));

    try {
      localStorage.setItem("thpt_attempts", JSON.stringify(updatedAttempts));
    } catch {
      // Storage error handled
    }

    // Tự động đồng bộ kết quả lên máy chủ nếu học sinh đã đăng nhập
    if (user) {
      fetch("/api/student/attempts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newAttempt),
      }).catch((err) => console.warn("Lỗi đồng bộ kết quả:", err));
    }
  };

  // Chuyển sang câu tiếp theo
  const handleNextQuestion = () => {
    soundManager.playClick();
    if (currentQuestionIndex < topicQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      // Đã hết câu trong chủ đề -> chuyển sang tab Phân tích kết quả
      setActiveTab("analytics");
    }
  };

  // Bật / Tắt chế độ đảo câu hỏi & đáp án
  const handleToggleShuffle = () => {
    soundManager.playClick();
    const nextState = !isShuffleEnabled;
    setIsShuffleEnabled(nextState);
    setShuffleSeed(Date.now());
    setSessionAnswers({});
    setCurrentQuestionIndex(0);
    setShuffleToastMessage(
      nextState
        ? "🔀 Đã BẬT xáo trộn câu hỏi & đáp án! Thứ tự câu và các phương án A,B,C,D đã được làm mới."
        : "📋 Đã TẮT xáo trộn. Câu hỏi hiển thị theo thứ tự mặc định của tài liệu."
    );
    setTimeout(() => setShuffleToastMessage(null), 3500);
  };

  // Làm lại chủ đề với bộ câu hỏi & đáp án đảo hoàn toàn mới
  const handleRetakeAndShuffleTopic = (targetTopicId?: string) => {
    soundManager.playClick();
    if (targetTopicId && targetTopicId !== selectedTopicId) {
      setSelectedTopicId(targetTopicId);
    }
    setShuffleSeed(Date.now());
    setSessionAnswers({});
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setSelectedTF({});
    setHasAnswered(false);
    setHintLevel(0);
    setIsHintOpen(false);
    setActiveTab("practice");
    setShuffleToastMessage("✨ Đã xáo trộn mới toàn bộ câu hỏi và đáp án! Bắt đầu lượt làm bài mới.");
    setTimeout(() => setShuffleToastMessage(null), 3500);
  };

  // Tăng bậc gợi ý
  const handleAdvanceHint = () => {
    soundManager.playHint();
    setHintLevel((prev) => Math.min(prev + 1, 3));
    setIsHintOpen(true);
  };

  const handleToggleHint = () => {
    soundManager.playHint();
    if (hintLevel === 0) {
      setHintLevel(1);
      setIsHintOpen(true);
    } else {
      setIsHintOpen((prev) => !prev);
    }
  };

  // Chọn môn học
  const handleSelectSubject = (subjId: string) => {
    setSelectedSubjectId(subjId);
    const subj = subjects.find((s) => s.id === subjId);
    if (subj && subj.topics.length > 0) {
      setSelectedTopicId(subj.topics[0].id);
      setCurrentQuestionIndex(0);
    }
  };

  // Chọn chủ đề để ôn luyện
  const handleSelectTopic = (topicId: string) => {
    setSelectedTopicId(topicId);
    setCurrentQuestionIndex(0);
    setActiveTab("practice");
  };

  // 1. Chờ khôi phục phiên đăng nhập từ trình duyệt (tránh chớp nháy giao diện)
  if (isAuthLoading) {
    return (
      <div className="min-h-screen bg-[#e6ecf5] flex flex-col items-center justify-center p-4 antialiased">
        <div className="p-6 rounded-neu bg-[#e6ecf5] shadow-neu-flat border border-white/80 flex flex-col items-center space-y-3 max-w-xs w-full text-center animate-pulse">
          <div className="w-12 h-12 rounded-neu-sm bg-blue-100 flex items-center justify-center text-blue-600 shadow-neu-flat-xs">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-sm font-black text-slate-800">Đang Tải Dữ Liệu Ôn Tập...</h2>
            <p className="text-[11px] text-slate-500 font-medium pt-0.5">Trường THPT Nguyễn Sinh Sắc</p>
          </div>
        </div>
      </div>
    );
  }

  // 2. Bắt buộc học sinh phải đăng nhập mới được xem câu hỏi và làm bài
  if (!isLoggedIn) {
    return <StudentLoginGate />;
  }

  // 3. Chế độ Thi thử Tốt nghiệp THPT 50 phút chuẩn Bộ GD&ĐT
  if (activeMockExam) {
    return (
      <>
        <MockExamView
          exam={activeMockExam}
          studentName={user?.fullName || "Học sinh THPT"}
          className={user?.className}
          initialReviewResult={reviewModeResult}
          onFinishExam={handleFinishMockExam}
          onExitExam={handleExitExam}
        />
        <ExamResultModal
          isOpen={isExamResultModalOpen}
          result={examResult}
          onReviewExam={handleReviewExam}
          onRetakeExam={handleRetakeExam}
          onClose={handleExitExam}
        />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-[#e6ecf5] flex flex-col antialiased">
      {/* Sidebar bên trái chứa toàn bộ cấu trúc bài học */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        subjects={subjects}
        selectedSubjectId={selectedSubjectId}
        onSelectSubject={handleSelectSubject}
        selectedTopicId={selectedTopicId}
        onSelectTopic={handleSelectTopic}
      />

      {/* Main Content Area */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          isSidebarOpen ? "md:pl-80" : "md:pl-0"
        }`}
      >
        {/* Header cho mobile & desktop */}
        <Header
          onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
          activeTab={activeTab}
          onChangeTab={setActiveTab}
          subjectTitle={currentSubject?.name || "Môn học"}
          topicTitle={currentTopic?.name || "Chủ đề"}
          onOpenSubjectModal={() => setIsSubjectModalOpen(true)}
          isPythonTopic={isPythonTopic}
          isWebTopic={isWebTopic}
          isSqlTopic={isSqlTopic}
          onStartMockExam={handleStartMockExam}
        />

        {/* Khung nội dung chính */}
        <main
          className={`flex-1 w-full mx-auto p-3 sm:p-4 space-y-4 ${
            activeTab === "ide" || activeTab === "web-ide" || activeTab === "sql-ide" ? "max-w-5xl" : "max-w-md"
          }`}
        >
          {/* Bộ chuyển đổi nhanh 1-chạm giữa Lý thuyết, Phần 1 (4 lựa chọn), Phần 2 (Đúng / Sai), Chạy Code Python, Web IDE & SQL Studio */}
          {activeTab !== "analytics" && (currentHasTheory || tfQuestionsCount > 0 || isPythonTopic || isWebTopic || isSqlTopic) && (
            <div className="flex items-center gap-1.5 sm:gap-2 p-1.5 rounded-neu-sm bg-[#e6ecf5] dark:bg-[#181d24] shadow-neu-inset-sm dark:shadow-none border border-transparent dark:border-slate-800">
              {currentHasTheory && (
                <button
                  onClick={() => {
                    soundManager.playClick();
                    setActiveTab("theory");
                  }}
                  className={`flex-1 flex flex-col items-center justify-center gap-1 py-2 px-1.5 rounded-neu-sm text-[11px] font-semibold transition-all ${
                    activeTab === "theory"
                      ? "bg-[#e6ecf5] dark:bg-[#202734] text-blue-600 dark:text-blue-400 shadow-neu-inset dark:shadow-none font-bold border border-transparent dark:border-blue-600/50"
                      : "bg-[#e6ecf5] dark:bg-[#181d24] text-slate-600 dark:text-slate-400 shadow-neu-flat-sm dark:shadow-none active:shadow-neu-inset hover:text-blue-600 dark:hover:text-blue-300"
                  }`}
                  title="Xem tóm tắt lý thuyết trọng tâm"
                >
                  <BookOpen className={`w-4 h-4 ${activeTab === "theory" ? "text-blue-600 dark:text-blue-400" : "text-blue-500 dark:text-slate-400"}`} />
                  <span className="truncate w-full text-center leading-tight">
                    Lý thuyết
                  </span>
                </button>
              )}

              {mcQuestionsCount > 0 && (
                <button
                  onClick={() => {
                    soundManager.playClick();
                    setActiveTab("practice");
                    setActiveQuestionFormat("mc");
                    setCurrentQuestionIndex(0);
                  }}
                  className={`flex-1 flex flex-col items-center justify-center gap-1 py-2 px-1.5 rounded-neu-sm text-[11px] font-semibold transition-all ${
                    activeTab === "practice" && activeQuestionFormat === "mc"
                      ? "bg-[#e6ecf5] dark:bg-[#202734] text-blue-600 dark:text-blue-400 shadow-neu-inset dark:shadow-none font-bold border border-transparent dark:border-blue-600/50"
                      : "bg-[#e6ecf5] dark:bg-[#181d24] text-slate-600 dark:text-slate-400 shadow-neu-flat-sm dark:shadow-none active:shadow-neu-inset hover:text-blue-600 dark:hover:text-blue-300"
                  }`}
                  title="Phần 1: Trắc nghiệm 4 lựa chọn"
                >
                  <ListOrdered
                    className={`w-4 h-4 ${
                      activeTab === "practice" && activeQuestionFormat === "mc"
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-indigo-600 dark:text-slate-400"
                    }`}
                  />
                  <div className="flex items-center justify-center gap-1 w-full leading-tight">
                    <span className="truncate">Phần 1</span>
                    <span
                      className={`text-[9px] px-1.5 py-0.2 rounded-full font-bold ${
                        activeTab === "practice" && activeQuestionFormat === "mc"
                          ? "bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300"
                          : "bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                      }`}
                    >
                      {mcQuestionsCount}
                    </span>
                  </div>
                </button>
              )}

              {tfQuestionsCount > 0 && (
                <button
                  onClick={() => {
                    soundManager.playClick();
                    setActiveTab("practice");
                    setActiveQuestionFormat("tf");
                    setCurrentQuestionIndex(0);
                  }}
                  className={`flex-1 flex flex-col items-center justify-center gap-1 py-2 px-1.5 rounded-neu-sm text-[11px] font-semibold transition-all ${
                    activeTab === "practice" && activeQuestionFormat === "tf"
                      ? "bg-[#e6ecf5] dark:bg-[#202734] text-blue-600 dark:text-blue-400 shadow-neu-inset dark:shadow-none font-bold border border-transparent dark:border-blue-600/50"
                      : "bg-[#e6ecf5] dark:bg-[#181d24] text-slate-600 dark:text-slate-400 shadow-neu-flat-sm dark:shadow-none active:shadow-neu-inset hover:text-blue-600 dark:hover:text-blue-300"
                  }`}
                  title="Phần 2: Trắc nghiệm Đúng / Sai"
                >
                  <CheckCheck
                    className={`w-4 h-4 ${
                      activeTab === "practice" && activeQuestionFormat === "tf"
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-cyan-600 dark:text-slate-400"
                    }`}
                  />
                  <div className="flex items-center justify-center gap-1 w-full leading-tight">
                    <span className="truncate">Phần 2</span>
                    <span
                      className={`text-[9px] px-1.5 py-0.2 rounded-full font-bold ${
                        activeTab === "practice" && activeQuestionFormat === "tf"
                          ? "bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300"
                          : "bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                      }`}
                    >
                      {tfQuestionsCount}
                    </span>
                  </div>
                </button>
              )}

              {isPythonTopic && (
                <button
                  onClick={() => {
                    soundManager.playClick();
                    setActiveTab("ide");
                  }}
                  className={`flex-1 flex flex-col items-center justify-center gap-1 py-2 px-1.5 rounded-neu-sm text-[11px] font-semibold transition-all ${
                    activeTab === "ide"
                      ? "bg-[#e6ecf5] dark:bg-[#202734] text-blue-600 dark:text-blue-400 shadow-neu-inset dark:shadow-none font-bold border border-transparent dark:border-blue-600/50"
                      : "bg-[#e6ecf5] dark:bg-[#181d24] text-slate-600 dark:text-slate-400 shadow-neu-flat-sm dark:shadow-none active:shadow-neu-inset hover:text-blue-600 dark:hover:text-blue-300"
                  }`}
                  title="Mở trình soạn thảo & Chạy code Python"
                >
                  <Terminal
                    className={`w-4 h-4 ${
                      activeTab === "ide" ? "text-blue-600 dark:text-blue-400" : "text-emerald-600 dark:text-slate-400"
                    }`}
                  />
                  <span className="truncate w-full text-center leading-tight">
                    Chạy Code
                  </span>
                </button>
              )}

              {isWebTopic && (
                <button
                  onClick={() => {
                    soundManager.playClick();
                    setActiveTab("web-ide");
                  }}
                  className={`flex-1 flex flex-col items-center justify-center gap-1 py-2 px-1.5 rounded-neu-sm text-[11px] font-semibold transition-all ${
                    activeTab === "web-ide"
                      ? "bg-[#e6ecf5] dark:bg-[#202734] text-blue-600 dark:text-blue-400 shadow-neu-inset dark:shadow-none font-bold border border-transparent dark:border-blue-600/50"
                      : "bg-[#e6ecf5] dark:bg-[#181d24] text-slate-600 dark:text-slate-400 shadow-neu-flat-sm dark:shadow-none active:shadow-neu-inset hover:text-blue-600 dark:hover:text-blue-300"
                  }`}
                  title="Mở trình soạn thảo & Xem trước HTML & CSS (Web IDE)"
                >
                  <Globe
                    className={`w-4 h-4 ${
                      activeTab === "web-ide" ? "text-blue-600 dark:text-blue-400" : "text-blue-500 dark:text-slate-400"
                    }`}
                  />
                  <span className="truncate w-full text-center leading-tight">
                    Web IDE
                  </span>
                </button>
              )}

              {isSqlTopic && (
                <button
                  onClick={() => {
                    soundManager.playClick();
                    setActiveTab("sql-ide");
                  }}
                  className={`flex-1 flex flex-col items-center justify-center gap-1 py-2 px-1.5 rounded-neu-sm text-[11px] font-semibold transition-all ${
                    activeTab === "sql-ide"
                      ? "bg-[#e6ecf5] dark:bg-[#202734] text-emerald-700 dark:text-emerald-400 shadow-neu-inset dark:shadow-none font-bold border border-transparent dark:border-emerald-600/50"
                      : "bg-[#e6ecf5] dark:bg-[#181d24] text-slate-600 dark:text-slate-400 shadow-neu-flat-sm dark:shadow-none active:shadow-neu-inset hover:text-emerald-700 dark:hover:text-emerald-300"
                  }`}
                  title="Mở SQL Studio & Truy vấn Cơ sở dữ liệu mẫu"
                >
                  <Database
                    className={`w-4 h-4 ${
                      activeTab === "sql-ide" ? "text-emerald-600 dark:text-emerald-400" : "text-emerald-600 dark:text-slate-400"
                    }`}
                  />
                  <span className="truncate w-full text-center leading-tight">
                    SQL Studio
                  </span>
                </button>
              )}
            </div>
          )}

          {activeTab === "ide" ? (
            /* Tab Trình soạn thảo & Chạy Code Python */
            <div className="w-full pb-20 animate-fade-in">
              <PythonIde initialCode={ideCodeToRun} />
            </div>
          ) : activeTab === "web-ide" ? (
            /* Tab Trình soạn thảo & Xem trước HTML & CSS Web IDE */
            <div className="w-full pb-20 animate-fade-in">
              <HtmlCssIde
                initialHtml={webIdeCodeToRun?.html}
                initialCss={webIdeCodeToRun?.css}
              />
            </div>
          ) : activeTab === "sql-ide" ? (
            /* Tab Trực quan hóa & Truy vấn CSDL SQL Studio */
            <div className="w-full pb-20 animate-fade-in">
              <SqlIde
                initialQuery={sqlCodeToRun}
                initialDatasetId={sqlDatasetIdToRun}
              />
            </div>
          ) : activeTab === "theory" ? (
            /* Tab Tóm Tắt & Tra Cứu Lý Thuyết Trọng Tâm */
            <TheoryViewer
              topicId={selectedTopicId}
              onStartPractice={(part) => {
                setActiveTab("practice");
                if (part === "tf" && tfQuestionsCount > 0) {
                  setActiveQuestionFormat("tf");
                } else {
                  setActiveQuestionFormat("mc");
                }
                setCurrentQuestionIndex(0);
              }}
              onOpenIdeWithCode={(codeSnippet) => {
                setIdeCodeToRun(codeSnippet);
                setActiveTab("ide");
              }}
              onOpenWebIdeWithCode={(codeSnippet) => {
                if (codeSnippet.includes("<") || codeSnippet.includes("<!DOCTYPE")) {
                  setWebIdeCodeToRun({ html: codeSnippet, css: "" });
                } else {
                  setWebIdeCodeToRun({
                    html: `<div class="box">\n  <h3>Ví dụ thực hành</h3>\n  <p>Đoạn văn được áp dụng kiểu CSS.</p>\n</div>`,
                    css: codeSnippet,
                  });
                }
                setActiveTab("web-ide");
              }}
              onOpenSqlIdeWithCode={(codeSnippet) => {
                setSqlCodeToRun(codeSnippet);
                setActiveTab("sql-ide");
              }}
            />
          ) : activeTab === "practice" ? (
            <>
              {currentQuestion ? (
                <>
                  {/* Nhiệm vụ học tập theo tuần chuẩn Kế hoạch GD1 */}
                  <WeeklyGoalCard
                    selectedTopicId={selectedTopicId}
                    attempts={attempts}
                    onSelectTopic={handleSelectTopic}
                  />

                  {/* Toast thông báo xáo trộn thành công */}
                  {shuffleToastMessage && (
                    <div className="p-2.5 rounded-neu-sm bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold text-center shadow-lg animate-fade-in flex items-center justify-center gap-2">
                      <Sparkles className="w-4 h-4 text-amber-300 animate-pulse flex-shrink-0" />
                      <span>{shuffleToastMessage}</span>
                    </div>
                  )}

                  {/* Thanh điều khiển Đảo câu hỏi & Làm lại chủ đề */}
                  <div className="flex flex-wrap items-center justify-between gap-2 p-2.5 rounded-2xl bg-[#e6ecf5] dark:bg-[#1a1f26] shadow-neu-flat dark:shadow-[5px_5px_12px_#12151a,-5px_-5px_12px_#222932] border border-white/60 dark:border-white/5">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={handleToggleShuffle}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-neu-sm text-xs font-bold transition-all shadow-neu-flat-xs active:shadow-neu-inset cursor-pointer ${
                          isShuffleEnabled
                            ? "bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 border border-blue-400/50"
                            : "bg-[#e6ecf5] dark:bg-[#202734] text-slate-600 dark:text-slate-400 border border-slate-300/60 dark:border-slate-700"
                        }`}
                        title="Bật/Tắt chế độ đảo thứ tự câu hỏi và hoán vị đáp án A, B, C, D"
                      >
                        <Shuffle className="w-3.5 h-3.5" />
                        <span>Đảo câu &amp; đáp án: <strong>{isShuffleEnabled ? "Bật" : "Tắt"}</strong></span>
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleRetakeAndShuffleTopic()}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-neu-sm bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold shadow-neu-flat-xs active:shadow-neu-inset hover:opacity-95 transition cursor-pointer"
                      title="Làm lại chủ đề này với đề và đáp án xáo trộn hoàn toàn mới"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Làm lại chủ đề (Đảo mới)</span>
                    </button>
                  </div>

                  {/* Bảng ma trận điều hướng câu hỏi nhanh 1-chạm */}
                  {topicQuestions.length > 1 && (
                    <QuestionPalette
                      totalQuestions={topicQuestions.length}
                      currentIndex={currentQuestionIndex}
                      onSelectIndex={(idx) => {
                        setCurrentQuestionIndex(idx);
                      }}
                      isAnswered={isPracticeQuestionAnswered}
                      isCorrect={isPracticeQuestionCorrect}
                      isShuffled={isShuffleEnabled}
                      onToggleShuffle={handleToggleShuffle}
                      onRetakeTopic={() => handleRetakeAndShuffleTopic()}
                    />
                  )}

                  {/* Thẻ câu hỏi và các phương án */}
                  <QuestionCard
                    question={currentQuestion}
                    currentIndex={currentQuestionIndex}
                    totalInTopic={topicQuestions.length}
                    selectedOption={selectedOption}
                    onSelectOption={setSelectedOption}
                    selectedTF={selectedTF}
                    onSelectTF={handleSelectTF}
                    hasAnswered={hasAnswered}
                    onOpenIde={(codeSnippet, title, defaultInput, targetAnswer, questionNumber) => {
                      if (codeSnippet) {
                        setIdeDrawerCode(codeSnippet);
                      }
                      setIdeDrawerTitle(title);
                      setIdeDrawerStdin(defaultInput);
                      setIdeDrawerTargetAnswer(targetAnswer);
                      setIdeDrawerQuestionNumber(questionNumber);
                      setIsIdeDrawerOpen(true);
                    }}
                    onOpenWebIde={(htmlSnippet, cssSnippet, title, targetAnswer, questionNumber) => {
                      if (htmlSnippet !== undefined) {
                        setWebIdeDrawerHtml(htmlSnippet);
                      }
                      if (cssSnippet !== undefined) {
                        setWebIdeDrawerCss(cssSnippet);
                      }
                      setWebIdeDrawerTitle(title);
                      setWebIdeDrawerTargetAnswer(targetAnswer);
                      setWebIdeDrawerQuestionNumber(questionNumber);
                      setIsWebIdeDrawerOpen(true);
                    }}
                    onOpenSqlIde={(query, datasetId, title, targetQuestionId) => {
                      setSqlDrawerQuery(query);
                      setSqlDrawerDatasetId(datasetId);
                      setSqlDrawerTitle(title);
                      setSqlDrawerTargetQuestionId(targetQuestionId);
                      setIsSqlDrawerOpen(true);
                    }}
                    onAskAiTutor={() => setIsSocraticOpen(true)}
                  />

                  {/* Bảng Gợi ý Socratic theo từng bậc */}
                  <StepHintPanel
                    question={currentQuestion}
                    hintLevel={hintLevel}
                    onAdvanceHint={handleAdvanceHint}
                    isOpen={isHintOpen}
                    onClose={() => setIsHintOpen(false)}
                  />

                  {/* Thông báo khi hoàn thành câu hỏi cuối cùng của chủ đề */}
                  {currentQuestionIndex === topicQuestions.length - 1 && hasAnswered && (
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/40 dark:to-indigo-950/40 border border-blue-200 dark:border-blue-800 shadow-neu-flat text-center space-y-3 animate-fade-in">
                      <div className="flex items-center justify-center gap-2 text-blue-700 dark:text-blue-300 font-bold text-sm">
                        <Sparkles className="w-5 h-5 text-amber-500 animate-bounce" />
                        <span>Chúc mừng! Bạn đã hoàn thành tất cả câu hỏi của chủ đề này!</span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        Hãy làm lại với đề và đáp án đảo ngẫu nhiên mới để kiểm tra sự vững vàng của kiến thức.
                      </p>
                      <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
                        <button
                          type="button"
                          onClick={() => handleRetakeAndShuffleTopic()}
                          className="px-4 py-2 rounded-neu-sm bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold shadow-neu-flat-xs active:shadow-neu-inset flex items-center gap-2 hover:opacity-95 transition cursor-pointer"
                        >
                          <RotateCcw className="w-4 h-4" />
                          <span>Làm lại chủ đề (Đảo mới)</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setActiveTab("analytics")}
                          className="px-4 py-2 rounded-neu-sm bg-[#e6ecf5] dark:bg-[#202734] text-slate-700 dark:text-slate-300 text-xs font-bold shadow-neu-flat-xs active:shadow-neu-inset border border-slate-300/60 dark:border-slate-700 transition cursor-pointer"
                        >
                          <span>Xem phân tích điểm yếu</span>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Khoảng đệm để không bị che bởi Fixed Bottom Bar */}
                  <div className="h-20" />
                </>
              ) : (
                <div className="p-6 rounded-neu bg-[#e6ecf5] shadow-neu-flat text-center space-y-2">
                  <p className="text-sm font-bold text-slate-700">
                    Chủ đề này hiện chưa có câu hỏi ôn tập
                  </p>
                  <p className="text-xs text-slate-500">
                    Thầy cô quản trị viên sẽ sớm cập nhật ngân hàng câu hỏi mới từ Google Drive.
                  </p>
                </div>
              )}
            </>
          ) : (
            /* Tab Thống Kê & Phân Tích Điểm Yếu */
            <StatsDashboard
              topics={currentSubject?.topics || []}
              questions={questions}
              attempts={attempts}
              onSelectTopicToPractice={(topicId) => {
                handleRetakeAndShuffleTopic(topicId);
              }}
            />
          )}
        </main>
      </div>

      {/* Thanh nút bấm luôn cố định ở mép dưới, màu xanh dương (khi ở tab Luyện tập) */}
      {activeTab === "practice" && currentQuestion && (
        <FixedBottomBar
          hasAnswered={hasAnswered}
          selectedOption={selectedOption}
          canSubmit={
            currentQuestion.type === "true_false"
              ? Object.keys(selectedTF).length > 0
              : !!selectedOption
          }
          isLastQuestion={currentQuestionIndex === topicQuestions.length - 1}
          onCheckAnswer={handleCheckAnswer}
          onNextQuestion={handleNextQuestion}
          onRetakeTopic={() => handleRetakeAndShuffleTopic()}
          onToggleHint={handleToggleHint}
          onOpenSocraticTutor={() => setIsSocraticOpen(true)}
          hintLevel={hintLevel}
        />
      )}

      {/* Cửa sổ Gia sư Socratic tương tác động (Không lộ đáp án) */}
      {currentQuestion && (
        <SocraticTutorDrawer
          isOpen={isSocraticOpen}
          onClose={() => setIsSocraticOpen(false)}
          question={currentQuestion}
          selectedOption={selectedOption}
          hasAnswered={hasAnswered}
          isCorrect={
            hasAnswered
              ? currentQuestion.type === "true_false"
                ? true
                : selectedOption === currentQuestion.correctAnswer
              : undefined
          }
        />
      )}

      {/* Hộp thoại chuyển đổi môn ôn tập thông minh */}
      <SubjectSwitchModal
        isOpen={isSubjectModalOpen}
        onClose={() => setIsSubjectModalOpen(false)}
        subjects={subjects}
        selectedSubjectId={selectedSubjectId}
        onSelectSubject={handleSelectSubject}
      />

      {/* Cửa sổ Python IDE Drawer nổi để học sinh thử nghiệm code khi đang làm bài */}
      <PythonIdeDrawer
        isOpen={isIdeDrawerOpen}
        onClose={() => setIsIdeDrawerOpen(false)}
        initialCode={ideDrawerCode}
        initialStdin={ideDrawerStdin}
        exerciseTitle={ideDrawerTitle}
        exerciseTargetAnswer={ideDrawerTargetAnswer}
        exerciseQuestionNumber={ideDrawerQuestionNumber}
      />

      {/* Cửa sổ Web IDE (HTML & CSS) Drawer nổi để học sinh xem trước trang web khi đang làm bài */}
      <HtmlCssIdeDrawer
        isOpen={isWebIdeDrawerOpen}
        onClose={() => setIsWebIdeDrawerOpen(false)}
        initialHtml={webIdeDrawerHtml}
        initialCss={webIdeDrawerCss}
        exerciseTitle={webIdeDrawerTitle}
        exerciseTargetAnswer={webIdeDrawerTargetAnswer}
        exerciseQuestionNumber={webIdeDrawerQuestionNumber}
      />

      {/* Cửa sổ SQL Studio Drawer nổi để học sinh truy vấn CSDL khi đang làm bài */}
      <SqlIdeDrawer
        isOpen={isSqlDrawerOpen}
        onClose={() => setIsSqlDrawerOpen(false)}
        initialQuery={sqlDrawerQuery}
        initialDatasetId={sqlDrawerDatasetId}
        exerciseTitle={sqlDrawerTitle}
        exerciseTargetQuestionId={sqlDrawerTargetQuestionId}
      />

      {/* Cổng đăng nhập cho Học sinh & Giáo viên */}
      <LoginModal />
    </div>
  );
}
