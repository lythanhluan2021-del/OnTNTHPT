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
import { parseGoogleSheetData } from "@/lib/driveSync";

export default function AppHome() {
  // 1. Data States
  const [subjects, setSubjects] = useState<Subject[]>(INITIAL_SUBJECTS);
  const [questions, setQuestions] = useState<Question[]>(INITIAL_QUESTIONS);
  const [attempts, setAttempts] = useState<StudentAttempt[]>([]);

  // 2. Navigation States
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>("toan-12");
  const [selectedTopicId, setSelectedTopicId] = useState<string>(
    "toan-ham-so-don-dieu"
  );
  const [activeTab, setActiveTab] = useState<"practice" | "analytics">("practice");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDriveModalOpen, setIsDriveModalOpen] = useState(false);

  // 3. Question Practice States
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<"A" | "B" | "C" | "D" | null>(
    null
  );
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

  // Nạp lịch sử từ localStorage nếu có
  useEffect(() => {
    try {
      const savedAttempts = localStorage.getItem("thpt_attempts");
      if (savedAttempts) {
        setAttempts(JSON.parse(savedAttempts));
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
    setHasAnswered(false);
    setHintLevel(0);
    setIsHintOpen(false);
    setQuestionStartTime(Date.now());
  }, [currentQuestionIndex, selectedTopicId]);

  // Thông tin tiêu đề hiển thị trên Header
  const currentSubject = subjects.find((s) => s.id === selectedSubjectId);
  const currentTopic = currentSubject?.topics.find((t) => t.id === selectedTopicId);

  // Xử lý kiểm tra đáp án
  const handleCheckAnswer = () => {
    if (!selectedOption || !currentQuestion || hasAnswered) return;

    const isCorrect = selectedOption === currentQuestion.correctAnswer;
    const timeSpent = Math.max(
      1,
      Math.round((Date.now() - questionStartTime) / 1000)
    );

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
    if (currentQuestionIndex < topicQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      // Đã hết câu trong chủ đề -> chuyển sang tab Phân tích kết quả
      setActiveTab("analytics");
    }
  };

  // Tăng bậc gợi ý
  const handleAdvanceHint = () => {
    setHintLevel((prev) => Math.min(prev + 1, 3));
    setIsHintOpen(true);
  };

  const handleToggleHint = () => {
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

  // Xử lý đồng bộ dữ liệu từ Google Drive
  const handleDriveSync = async (sheetUrl: string): Promise<boolean> => {
    try {
      // Giả lập đọc tài liệu hoặc gọi API sync
      setDriveSyncStatus((prev) => ({ ...prev, status: "syncing" }));
      
      // Ở đây ta mô phỏng quá trình nạp an toàn, đảm bảo nguồn tài liệu khép kín
      await new Promise((res) => setTimeout(res, 1200));

      setDriveSyncStatus({
        status: "success",
        totalImported: questions.length,
        sheetUrl,
        lastSyncedAt: Date.now(),
      });
      return true;
    } catch (err: any) {
      setDriveSyncStatus((prev) => ({
        ...prev,
        status: "error",
        message: err.message,
      }));
      return false;
    }
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
        />

        {/* Khung nội dung chính */}
        <main className="flex-1 max-w-md w-full mx-auto p-4 space-y-4">
          {activeTab === "practice" ? (
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
                  <div className="h-32" />
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
              onSelectTopicToPractice={handleSelectTopic}
            />
          )}
        </main>
      </div>

      {/* Thanh nút bấm luôn cố định ở mép dưới, màu xanh dương (khi ở tab Luyện tập) */}
      {activeTab === "practice" && currentQuestion && (
        <FixedBottomBar
          hasAnswered={hasAnswered}
          selectedOption={selectedOption}
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
        onSync={handleDriveSync}
      />
    </div>
  );
}
