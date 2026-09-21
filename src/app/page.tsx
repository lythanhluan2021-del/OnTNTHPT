"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Question, StudentAttempt, Subject, Topic, DriveSyncStatus } from "@/types";
import { INITIAL_QUESTIONS, INITIAL_SUBJECTS } from "@/data/sampleBank";
import { Sidebar } from "@/components/Layout/Sidebar";
import { Header } from "@/components/Layout/Header";
import { FixedBottomBar } from "@/components/Layout/FixedBottomBar";
import { QuestionCard } from "@/components/Practice/QuestionCard";
import { StepHintPanel } from "@/components/Practice/StepHintPanel";
import { SocraticTutorDrawer } from "@/components/Practice/SocraticTutorDrawer";
import { StatsDashboard } from "@/components/Analytics/StatsDashboard";
import { DriveSyncModal } from "@/components/Drive/DriveSyncModal";
import { SubjectSwitchModal } from "@/components/Layout/SubjectSwitchModal";
import { TheoryViewer } from "@/components/Theory/TheoryViewer";
import { parseGoogleSheetData } from "@/lib/driveSync";
import { soundManager } from "@/lib/audioEffects";
import { BookOpen } from "lucide-react";

export default function AppHome() {
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
  const [isDriveModalOpen, setIsDriveModalOpen] = useState(false);
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

  // 4. Google Drive Sync Status
  const [driveSyncStatus, setDriveSyncStatus] = useState<DriveSyncStatus>({
    status: "idle",
    totalImported: INITIAL_QUESTIONS.length,
  });

  // Nạp lịch sử và dữ liệu đã đồng bộ từ localStorage nếu có (bảo toàn cấu trúc bài học)
  useEffect(() => {
    try {
      const savedAttempts = localStorage.getItem("thpt_attempts");
      if (savedAttempts) {
        setAttempts(JSON.parse(savedAttempts));
      }
      const savedQuestions = localStorage.getItem("thpt_custom_questions");
      if (savedQuestions) {
        const parsedQ = JSON.parse(savedQuestions);
        if (Array.isArray(parsedQ) && parsedQ.length > 0) {
          const initIds = new Set(INITIAL_QUESTIONS.map((q) => q.id));
          setQuestions([
            ...INITIAL_QUESTIONS,
            ...parsedQ.filter((q: any) => !initIds.has(q.id)),
          ]);
        }
      }
      const savedSubjects = localStorage.getItem("thpt_custom_subjects");
      if (savedSubjects) {
        const parsedS = JSON.parse(savedSubjects);
        if (
          Array.isArray(parsedS) &&
          parsedS.length > 0 &&
          parsedS.some((s: any) => s.topics && s.topics.length > 0)
        ) {
          // Gộp với INITIAL_SUBJECTS để luôn cập nhật đầy đủ các chủ đề theo kế hoạch ôn tập mới
          const merged = INITIAL_SUBJECTS.map((initSubj) => {
            const found = parsedS.find((s: any) => s.id === initSubj.id);
            if (found && found.topics && found.topics.length > 0) {
              const updatedTopics = [
                ...initSubj.topics.map((initTop) => {
                  const foundTop = found.topics.find((t: any) => t.id === initTop.id);
                  if (foundTop && (foundTop.totalQuestions || 0) > initTop.totalQuestions) {
                    return foundTop;
                  }
                  return initTop;
                }),
                ...found.topics.filter(
                  (t: any) => !initSubj.topics.some((it) => it.id === t.id)
                ),
              ];
              return { ...found, topics: updatedTopics };
            }
            return initSubj;
          });
          setSubjects(merged);
        } else {
          // Xóa cache rỗng không hợp lệ
          localStorage.removeItem("thpt_custom_subjects");
          setSubjects(INITIAL_SUBJECTS);
        }
      }
    } catch {
      // Ignored
    }
  }, []);

  // Lọc danh sách câu hỏi theo chủ đề đang chọn
  const topicQuestions = useMemo(() => {
    return questions.filter((q) => q.topicId === selectedTopicId);
  }, [questions, selectedTopicId]);

  // Câu hỏi hiện tại
  const currentQuestion = topicQuestions[currentQuestionIndex] || topicQuestions[0];

  // Reset trạng thái câu hỏi khi chuyển câu hoặc chuyển chủ đề
  useEffect(() => {
    setSelectedOption(null);
    setSelectedTF({});
    setHasAnswered(false);
    setHintLevel(0);
    setIsHintOpen(false);
    setQuestionStartTime(Date.now());
  }, [currentQuestionIndex, selectedTopicId]);

  // Chọn Đúng / Sai cho từng ý câu hỏi Phần 2
  const handleSelectTF = (itemId: string, value: boolean) => {
    setSelectedTF((prev) => ({ ...prev, [itemId]: value }));
  };

  // Thông tin tiêu đề hiển thị trên Header
  const currentSubject = subjects.find((s) => s.id === selectedSubjectId);
  const currentTopic = currentSubject?.topics.find((t) => t.id === selectedTopicId);

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
        id: "att-" + Date.now(),
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
      id: "att-" + Date.now(),
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

  // Xử lý đồng bộ dữ liệu từ Google Drive (theo từng môn học hoặc tất cả)
  const handleDriveSync = async (
    sheetUrl: string,
    targetSubjectId?: string
  ): Promise<boolean> => {
    try {
      setDriveSyncStatus((prev) => ({ ...prev, status: "syncing", message: undefined }));
      
      const res = await fetch("/api/drive-sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sheetUrl }),
      });

      const json = await res.json();
      if (!res.ok || json.error) {
        throw new Error(json.error || "Không thể đồng bộ từ Google Drive");
      }

      const { questions: newQuestions, subjects: newSubjects } = json.data;

      if (!newQuestions || newQuestions.length === 0) {
        throw new Error("Không có câu hỏi hợp lệ trong bảng tính Google Drive này!");
      }

      let updatedQuestions = newQuestions;

      // Nếu đồng bộ cho 1 môn cụ thể trong thư mục riêng
      if (targetSubjectId) {
        const normalized = newQuestions.map((q: any) => ({
          ...q,
          subjectId: targetSubjectId,
        }));
        const otherQuestions = questions.filter((q) => q.subjectId !== targetSubjectId);
        updatedQuestions = [...otherQuestions, ...normalized];
        setQuestions(updatedQuestions);

        if (newSubjects && newSubjects.length > 0) {
          const newTopics = newSubjects[0].topics.map((t: any) => ({
            ...t,
            subjectId: targetSubjectId,
          }));
          setSubjects((prev) =>
            prev.map((s) => (s.id === targetSubjectId ? { ...s, topics: newTopics } : s))
          );
          setSelectedSubjectId(targetSubjectId);
          if (newTopics.length > 0) {
            setSelectedTopicId(newTopics[0].id);
          }
        }
      } else {
        // Đồng bộ tổng quát
        setQuestions(newQuestions);
        if (newSubjects && newSubjects.length > 0) {
          setSubjects(newSubjects);
          setSelectedSubjectId(newSubjects[0].id);
          if (newSubjects[0].topics.length > 0) {
            setSelectedTopicId(newSubjects[0].topics[0].id);
          }
        }
      }

      setCurrentQuestionIndex(0);

      // Lưu trữ an toàn trong localStorage
      try {
        localStorage.setItem("thpt_custom_questions", JSON.stringify(updatedQuestions));
      } catch {
        // Quota full fallback
      }

      setDriveSyncStatus({
        status: "success",
        totalImported: updatedQuestions.length,
        sheetUrl,
        lastSyncedAt: Date.now(),
        message: `Đã nạp thành công ${newQuestions.length} câu hỏi chuẩn từ Google Drive!`,
      });
      return true;
    } catch (err: any) {
      setDriveSyncStatus((prev) => ({
        ...prev,
        status: "error",
        message: err.message,
      }));
      throw err;
    }
  };

  // Xử lý quét tự động toàn bộ thư mục OnTNTHPT qua Service Account
  const handleScanFolder = async (
    targetFolderId: string,
    serviceAccountKey: string
  ): Promise<{ count: number; subjectsCount: number; tree: any }> => {
    const res = await fetch("/api/drive-folder-sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        folderId: targetFolderId,
        serviceAccount: serviceAccountKey,
      }),
    });

    const json = await res.json();
    if (!res.ok || json.error) {
      throw new Error(json.error + (json.hint ? ` (${json.hint})` : ""));
    }

    const { questions: scannedQuestions, subjects: scannedSubjects, tree } = json.data;

    if (scannedQuestions && scannedQuestions.length > 0) {
      const initialIds = new Set(scannedQuestions.map((q: any) => q.id));
      const mergedQuestions = [
        ...scannedQuestions,
        ...INITIAL_QUESTIONS.filter((q) => !initialIds.has(q.id)),
      ];
      setQuestions(mergedQuestions);
      try {
        localStorage.setItem("thpt_custom_questions", JSON.stringify(mergedQuestions));
      } catch {
        // Fallback
      }
    }

    if (scannedSubjects && scannedSubjects.length > 0) {
      const mergedSubjects = INITIAL_SUBJECTS.map((initSubj) => {
        const found = scannedSubjects.find((s: any) => s.id === initSubj.id);
        if (found && found.topics && found.topics.length > 0) {
          return {
            ...initSubj,
            topics: found.topics,
          };
        }
        return initSubj;
      });

      setSubjects(mergedSubjects);
      setSelectedSubjectId(mergedSubjects[0].id);
      if (mergedSubjects[0].topics.length > 0) {
        setSelectedTopicId(mergedSubjects[0].topics[0].id);
      }
      try {
        localStorage.setItem("thpt_custom_subjects", JSON.stringify(mergedSubjects));
      } catch {
        // Fallback
      }
    }

    setCurrentQuestionIndex(0);

    return {
      count: json.count,
      subjectsCount: json.subjectsCount,
      tree,
    };
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
        onOpenDriveModal={() => setIsDriveModalOpen(true)}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col md:pl-80">
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
          {activeTab === "theory" ? (
            /* Tab Tóm Tắt & Tra Cứu Lý Thuyết Trọng Tâm */
            <TheoryViewer
              topicId={selectedTopicId}
              onStartPractice={(part) => {
                if (part === "tf") {
                  setSelectedTopicId("tin-ai-dung-sai");
                } else {
                  setSelectedTopicId("tin-ai-tri-tue-nhan-tao");
                }
                setCurrentQuestionIndex(0);
                setActiveTab("practice");
              }}
            />
          ) : activeTab === "practice" ? (
            <>
              {currentQuestion ? (
                <>
                  {/* Bộ chuyển đổi nhanh giữa Lý thuyết, Phần 1 (Nhiều lựa chọn) và Phần 2 (Đúng / Sai) */}
                  {selectedSubjectId === "tin-hoc-12" &&
                    (selectedTopicId === "tin-ai-tri-tue-nhan-tao" || selectedTopicId === "tin-ai-dung-sai") && (
                      <div className="flex items-center p-1 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset-sm gap-1 text-xs font-bold">
                        <button
                          onClick={() => {
                            soundManager.playClick();
                            setActiveTab("theory");
                          }}
                          className="py-2 px-2 rounded-neu-xs text-slate-700 hover:text-blue-700 flex items-center justify-center gap-1 transition-all shadow-neu-flat-xs active:shadow-neu-inset"
                          title="Xem tóm tắt lý thuyết chủ đề này"
                        >
                          <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                          <span className="text-[11px] font-extrabold">Lý thuyết</span>
                        </button>

                        <button
                          onClick={() => {
                            soundManager.playClick();
                            setSelectedTopicId("tin-ai-tri-tue-nhan-tao");
                            setCurrentQuestionIndex(0);
                          }}
                          className={`flex-1 py-2 px-1.5 rounded-neu-xs transition-all text-center flex items-center justify-center gap-1 ${
                            selectedTopicId === "tin-ai-tri-tue-nhan-tao"
                              ? "bg-blue-600 text-white shadow-neu-blue font-extrabold"
                              : "text-slate-600 hover:text-blue-700"
                          }`}
                        >
                          <span className="truncate">🔘 P1: 4 lựa chọn</span>
                          <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                            selectedTopicId === "tin-ai-tri-tue-nhan-tao" ? "bg-blue-100 text-blue-900" : "bg-slate-200 text-slate-700"
                          }`}>
                            76
                          </span>
                        </button>

                        <button
                          onClick={() => {
                            soundManager.playClick();
                            setSelectedTopicId("tin-ai-dung-sai");
                            setCurrentQuestionIndex(0);
                          }}
                          className={`flex-1 py-2 px-1.5 rounded-neu-xs transition-all text-center flex items-center justify-center gap-1 ${
                            selectedTopicId === "tin-ai-dung-sai"
                              ? "bg-blue-600 text-white shadow-neu-blue font-extrabold"
                              : "text-slate-600 hover:text-blue-700"
                          }`}
                        >
                          <span className="truncate">⚖️ P2: Đúng / Sai</span>
                          <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                            selectedTopicId === "tin-ai-dung-sai" ? "bg-blue-100 text-blue-900" : "bg-slate-200 text-slate-700"
                          }`}>
                            20
                          </span>
                        </button>
                      </div>
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
                <div className="p-6 rounded-neu bg-[#e6ecf5] shadow-neu-flat text-center space-y-3">
                  <p className="text-sm text-slate-600">
                    Chủ đề này chưa có câu hỏi trong dữ liệu Google Drive.
                  </p>
                  <button
                    onClick={() => setIsDriveModalOpen(true)}
                    className="py-2 px-4 rounded-neu-sm bg-blue-600 text-white shadow-neu-blue font-semibold text-xs"
                  >
                    Đồng bộ từ Google Drive
                  </button>
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

      {/* Hộp thoại kết nối & đồng bộ Google Drive */}
      <DriveSyncModal
        isOpen={isDriveModalOpen}
        onClose={() => setIsDriveModalOpen(false)}
        syncStatus={driveSyncStatus}
        subjects={subjects}
        selectedSubjectId={selectedSubjectId}
        onSync={handleDriveSync}
        onScanFolder={handleScanFolder}
      />

      {/* Hộp thoại chuyển đổi môn ôn tập thông minh */}
      <SubjectSwitchModal
        isOpen={isSubjectModalOpen}
        onClose={() => setIsSubjectModalOpen(false)}
        subjects={subjects}
        selectedSubjectId={selectedSubjectId}
        onSelectSubject={handleSelectSubject}
      />
    </div>
  );
}
