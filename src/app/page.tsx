"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Question, StudentAttempt, Subject, Topic } from "@/types";
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
import { BookOpen } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { LoginModal } from "@/components/Auth/LoginModal";

export default function AppHome() {
  const { user } = useAuth();

  // 1. Data States
  const [subjects, setSubjects] = useState<Subject[]>(INITIAL_SUBJECTS);
  const [questions, setQuestions] = useState<Question[]>(INITIAL_QUESTIONS);
  const [attempts, setAttempts] = useState<StudentAttempt[]>([]);

  // 2. Navigation States
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>("tin-hoc-12");
  const [selectedTopicId, setSelectedTopicId] = useState<string>(
    INITIAL_SUBJECTS[0].topics[0].id
  );
  const [activeTab, setActiveTab] = useState<"practice" | "analytics" | "theory">("practice");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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

  // Nạp lịch sử và dữ liệu đã đồng bộ từ localStorage với cơ chế kiểm soát phiên bản chuẩn KH GD1
  useEffect(() => {
    try {
      const STRUCTURE_VERSION = "2026_GD1_V5_MC_ACCURATE";
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

  // Danh sách câu hỏi hiển thị theo định dạng đang chọn (MC hoặc TF)
  const topicQuestions = useMemo(() => {
    if (activeQuestionFormat === "mc") {
      const mcList = allTopicQuestions.filter((q) => q.type !== "true_false");
      return mcList.length > 0 ? mcList : allTopicQuestions;
    }
    if (activeQuestionFormat === "tf") {
      const tfList = allTopicQuestions.filter((q) => q.type === "true_false");
      return tfList.length > 0 ? tfList : allTopicQuestions;
    }
    return allTopicQuestions;
  }, [allTopicQuestions, activeQuestionFormat]);

  // Câu hỏi hiện tại
  const currentQuestion = topicQuestions[currentQuestionIndex] || topicQuestions[0];

  // Reset trạng thái câu hỏi khi chuyển câu hoặc chuyển chủ đề hoặc đổi dạng bài
  useEffect(() => {
    setSelectedOption(null);
    setSelectedTF({});
    setHasAnswered(false);
    setHintLevel(0);
    setIsHintOpen(false);
    setQuestionStartTime(Date.now());
  }, [currentQuestionIndex, selectedTopicId, activeQuestionFormat]);

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
        />

        {/* Khung nội dung chính */}
        <main className="flex-1 max-w-md w-full mx-auto p-4 space-y-4">
          {/* Bộ chuyển đổi nhanh 1-chạm giữa Lý thuyết, Phần 1 (4 lựa chọn) và Phần 2 (Đúng / Sai) */}
          {activeTab !== "analytics" && (currentHasTheory || tfQuestionsCount > 0) && (
            <div className="flex items-center p-1 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset-sm gap-1 text-xs font-bold">
              {currentHasTheory && (
                <button
                  onClick={() => {
                    soundManager.playClick();
                    setActiveTab("theory");
                  }}
                  className={`py-2 px-3 rounded-neu-xs flex items-center justify-center gap-1.5 transition-all ${
                    activeTab === "theory"
                      ? "bg-blue-600 text-white shadow-neu-blue font-extrabold"
                      : "text-slate-700 hover:text-blue-700 shadow-neu-flat-xs active:shadow-neu-inset"
                  }`}
                  title="Xem toàn bộ lý thuyết đầy đủ 100%"
                >
                  <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                  <span className="text-[11px] font-extrabold">Lý thuyết</span>
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
                  className={`flex-1 py-2 px-2 rounded-neu-xs transition-all text-center flex items-center justify-center gap-1.5 ${
                    activeTab === "practice" && activeQuestionFormat === "mc"
                      ? "bg-blue-600 text-white shadow-neu-blue font-extrabold"
                      : "text-slate-600 hover:text-blue-700 shadow-neu-flat-xs active:shadow-neu-inset"
                  }`}
                >
                  <span className="truncate">🔘 P1: 4 lựa chọn</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                      activeTab === "practice" && activeQuestionFormat === "mc"
                        ? "bg-blue-100 text-blue-900"
                        : "bg-slate-200 text-slate-700"
                    }`}
                  >
                    {mcQuestionsCount}
                  </span>
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
                  className={`flex-1 py-2 px-2 rounded-neu-xs transition-all text-center flex items-center justify-center gap-1.5 ${
                    activeTab === "practice" && activeQuestionFormat === "tf"
                      ? "bg-blue-600 text-white shadow-neu-blue font-extrabold"
                      : "text-slate-600 hover:text-blue-700 shadow-neu-flat-xs active:shadow-neu-inset"
                  }`}
                >
                  <span className="truncate">⚖️ P2: Đúng / Sai</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                      activeTab === "practice" && activeQuestionFormat === "tf"
                        ? "bg-blue-100 text-blue-900"
                        : "bg-slate-200 text-slate-700"
                    }`}
                  >
                    {tfQuestionsCount}
                  </span>
                </button>
              )}
            </div>
          )}

          {activeTab === "theory" ? (
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
            />
          ) : activeTab === "practice" ? (
            <>
              {currentQuestion ? (
                <>
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
                  />

                  {/* Bảng Gợi ý Socratic theo từng bậc */}
                  <StepHintPanel
                    question={currentQuestion}
                    hintLevel={hintLevel}
                    onAdvanceHint={handleAdvanceHint}
                    isOpen={isHintOpen}
                    onClose={() => setIsHintOpen(false)}
                  />

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
                handleSelectTopic(topicId);
                setActiveTab("practice");
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
          onCheckAnswer={handleCheckAnswer}
          onNextQuestion={handleNextQuestion}
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

      {/* Cổng đăng nhập cho Học sinh & Giáo viên */}
      <LoginModal />
    </div>
  );
}
