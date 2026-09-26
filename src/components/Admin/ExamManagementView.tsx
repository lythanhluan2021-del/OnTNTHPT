"use client";

import React, { useState, useEffect, useMemo } from "react";
import {
  ExamDefinition,
  ExamSubmission,
  ExamStatus,
  ExamStatsReport,
  ExamMatrixConfig,
  ExamVariant,
  ItemDifficultyStat,
  AtRiskStudent,
  ProctorUnlockRequest,
} from "@/types/examManagement";
import { Subject, Question, DifficultyLevel, MockExamQuestion } from "@/types";
import { parseExamRawText, extractTextFromFile } from "@/lib/examFileParser";
import { generateExamFromMatrix } from "@/lib/matrixExamGenerator";
import { generateExamVariants } from "@/lib/examVariantShuffler";
import { analyzeExamResults } from "@/lib/examAnalyticsHelper";
import { soundManager } from "@/lib/audioEffects";
import { LatexRenderer } from "@/components/UI/LatexRenderer";
import { PaperExamPrintModal } from "@/components/Exam/PaperExamPrintModal";
import { ClassRosterModal } from "@/components/Exam/ClassRosterModal";
import { QuestionEditModal } from "@/components/Exam/QuestionEditModal";
import { ExamReportPrintModal } from "@/components/Exam/ExamReportPrintModal";
import {
  FileText,
  Upload,
  Sparkles,
  Plus,
  Trash2,
  Eye,
  ShieldAlert,
  CheckCircle2,
  XCircle,
  BarChart3,
  Users,
  Clock,
  Lock,
  Unlock,
  Download,
  RefreshCw,
  Layers,
  Sliders,
  AlertTriangle,
  Send,
  Printer,
  ChevronRight,
  Search,
  Dice5,
  Edit3,
  BookOpen,
  UserCheck,
  Check,
  AlertOctagon,
  Award,
  Video,
  ShieldCheck,
} from "lucide-react";

interface ExamManagementViewProps {
  subjects: Subject[];
  questions: Question[];
  allClasses: string[];
}

export const ExamManagementView: React.FC<ExamManagementViewProps> = ({
  subjects,
  questions,
  allClasses: initialClasses,
}) => {
  // 1. Quản lý 3 Trụ Cột Nghiệp Vụ Tinh Gọn
  const [activePillar, setActivePillar] = useState<"design" | "proctoring" | "analytics">("design");

  // Danh sách các lớp học
  const [classList, setClassList] = useState<string[]>(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("thpt_admin_classes");
        if (saved) return JSON.parse(saved);
      } catch {
        // Ignored
      }
    }
    return initialClasses.length > 0 ? initialClasses : ["12A1", "12A2", "12A3", "12A4"];
  });

  const handleAddClass = (newCls: string) => {
    if (!classList.includes(newCls)) {
      const updated = [...classList, newCls];
      setClassList(updated);
      localStorage.setItem("thpt_admin_classes", JSON.stringify(updated));
    }
  };

  // 2. Danh sách kỳ thi đã lưu
  const [exams, setExams] = useState<ExamDefinition[]>(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("thpt_admin_exams");
        if (saved) return JSON.parse(saved);
      } catch {
        // Ignored
      }
    }
    const sampleQuestions = questions.slice(0, 28).map((q, idx) => ({
      ...q,
      examIndex: idx + 1,
      part: (idx < 24 ? "mc" : "tf") as "mc" | "tf",
    }));

    const sampleVariants = generateExamVariants(sampleQuestions, ["101", "102", "103", "104"]);

    return [
      {
        id: "exam-sample-50p-01",
        title: "Kiểm tra định kỳ Giữa Học kỳ I - Môn Tin học 12 (50 phút)",
        subjectId: "tin-hoc-12",
        examType: "giua_ky",
        academicYear: "2025 - 2026",
        durationMinutes: 50,
        targetClasses: ["all"],
        status: "published",
        sourceType: "matrix_bank",
        antiCheatConfig: {
          enableFullscreen: true,
          maxViolations: 3,
          blockCopyPaste: true,
          autoSubmitOnTimeout: true,
        },
        totalQuestions: 28,
        mcCount: 24,
        tfCount: 4,
        questions: sampleQuestions,
        variants: sampleVariants,
        createdAt: Date.now() - 86400000 * 2,
        updatedAt: Date.now() - 86400000 * 2,
        publishedAt: Date.now() - 86400000 * 2,
      },
    ];
  });

  // Chọn kỳ thi đang thao tác
  const [selectedExamId, setSelectedExamId] = useState<string>(exams[0]?.id || "");
  const currentExam = useMemo(() => {
    return exams.find((e) => e.id === selectedExamId) || exams[0];
  }, [exams, selectedExamId]);

  // 3. Danh sách bài nộp của học sinh
  const [submissions, setSubmissions] = useState<ExamSubmission[]>(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("thpt_exam_submissions");
        if (saved) return JSON.parse(saved);
      } catch {
        // Ignored
      }
    }
    return [
      {
        id: "sub-12a1-01",
        examId: "exam-sample-50p-01",
        examTitle: "Kiểm tra định kỳ Giữa Học kỳ I - Môn Tin học 12 (50 phút)",
        variantCode: "101",
        candidateNumber: "12A1_01",
        studentId: "12a101",
        studentName: "Nguyễn Văn An",
        className: "12A1",
        startTime: Date.now() - 3600000 * 3,
        submitTime: Date.now() - 3600000 * 2.2,
        timeSpentSeconds: 2880,
        tabSwitchCount: 0,
        violations: [],
        isDisqualified: false,
        isAutoSubmitted: false,
        mcScore: 5.5,
        tfScore: 3.5,
        totalScore: 9.0,
        totalCorrectMc: 22,
        totalCorrectTfStatements: 14,
        details: [],
      },
      {
        id: "sub-12a1-02",
        examId: "exam-sample-50p-01",
        variantCode: "102",
        candidateNumber: "12A1_02",
        studentId: "12a102",
        studentName: "Trần Thị Bình",
        className: "12A1",
        startTime: Date.now() - 3600000 * 3,
        submitTime: Date.now() - 3600000 * 2.1,
        timeSpentSeconds: 3000,
        tabSwitchCount: 1,
        violations: [
          {
            timestamp: Date.now() - 3600000 * 2.5,
            type: "tab_switch",
            description: "Chuyển sang tab khác lúc 09:15",
          },
        ],
        isDisqualified: false,
        isAutoSubmitted: false,
        mcScore: 4.5,
        tfScore: 2.5,
        totalScore: 7.0,
        totalCorrectMc: 18,
        totalCorrectTfStatements: 10,
        details: [],
      },
      {
        id: "sub-12a2-01",
        examId: "exam-sample-50p-01",
        variantCode: "103",
        candidateNumber: "12A2_05",
        studentId: "12a205",
        studentName: "Lê Hoàng Cường",
        className: "12A2",
        startTime: Date.now() - 3600000 * 3,
        submitTime: Date.now() - 3600000 * 2.8,
        timeSpentSeconds: 720,
        tabSwitchCount: 4,
        violations: [
          { timestamp: Date.now() - 3600000 * 2.9, type: "tab_switch", description: "Rời màn hình lần 1" },
          { timestamp: Date.now() - 3600000 * 2.85, type: "window_blur", description: "Alt+Tab mở ứng dụng khác" },
          { timestamp: Date.now() - 3600000 * 2.82, type: "tab_switch", description: "Mở tab ChatGPT" },
          { timestamp: Date.now() - 3600000 * 2.8, type: "fullscreen_exit", description: "Thoát toàn màn hình lần 4" },
        ],
        isDisqualified: true,
        disqualifiedReason: "Vi phạm quy chế thi trực tuyến 4 lần (vượt quá giới hạn 3 lần)",
        isAutoSubmitted: true,
        mcScore: 0.0,
        tfScore: 0.0,
        totalScore: 0.0,
        totalCorrectMc: 2,
        totalCorrectTfStatements: 1,
        details: [],
      },
    ];
  });

  // Tự động lưu kỳ thi vào localStorage
  const saveExams = (newExams: ExamDefinition[]) => {
    setExams(newExams);
    try {
      localStorage.setItem("thpt_admin_exams", JSON.stringify(newExams));
    } catch {
      // Ignored
    }
  };

  // =========================================================================
  // TRỤ CỘT 1: STATE SOẠN ĐỀ & TRỘN ĐỀ
  // =========================================================================
  const [sourceType, setSourceType] = useState<"file" | "matrix" | "topics">("matrix");
  const [examTitleInput, setExamTitleInput] = useState(currentExam?.title || "Kiểm tra định kỳ Môn Tin học 12");
  const [examDurationInput, setExamDurationInput] = useState(currentExam?.durationMinutes || 50);
  const [examTypeInput, setExamTypeInput] = useState<any>(currentExam?.examType || "giua_ky");
  const [academicYearInput, setAcademicYearInput] = useState(currentExam?.academicYear || "2025 - 2026");
  const [selectedClassesInput, setSelectedClassesInput] = useState<string[]>(currentExam?.targetClasses || ["all"]);

  // Nguồn 1: File Word / Text
  const [rawTextFileContent, setRawTextFileContent] = useState("");
  const [isParsingFile, setIsParsingFile] = useState(false);
  const [parseError, setParseError] = useState("");

  // Danh sách toàn bộ chủ đề có sẵn trong hệ thống
  const allTopics = useMemo(() => {
    const list: {
      id: string;
      name: string;
      chapter: string;
      totalQuestions: number;
      mcCount: number;
      tfCount: number;
    }[] = [];
    subjects.forEach((subj) => {
      subj.topics.forEach((top) => {
        const topQuestions = questions.filter((q) => q.topicId === top.id);
        const mc = topQuestions.filter((q) => q.type !== "true_false").length;
        const tf = topQuestions.filter((q) => q.type === "true_false").length;
        list.push({
          id: top.id,
          name: top.name,
          chapter: top.chapter || subj.name,
          totalQuestions: topQuestions.length || top.totalQuestions || 0,
          mcCount: mc || top.mcCount || 0,
          tfCount: tf || top.tfCount || 0,
        });
      });
    });
    return list;
  }, [subjects, questions]);

  // Nguồn 2: Ma trận 4 mức độ
  const [matrixTopicIds, setMatrixTopicIds] = useState<string[]>(() => {
    const tin12 = subjects.find((s) => s.id === "tin-hoc-12");
    return tin12 ? tin12.topics.map((t) => t.id) : [];
  });
  const [matrixMcLevels, setMatrixMcLevels] = useState({ NhanBiet: 8, ThongHieu: 8, VanDung: 6, VanDungCao: 2 });
  const [matrixTfLevels, setMatrixTfLevels] = useState({ NhanBiet: 1, ThongHieu: 1, VanDung: 1, VanDungCao: 1 });

  const handleSelectAllTopics = () => {
    setMatrixTopicIds(allTopics.map((t) => t.id));
    soundManager.playClick();
  };

  const handleDeselectAllTopics = () => {
    setMatrixTopicIds([]);
    soundManager.playClick();
  };

  const handleToggleTopic = (topicId: string) => {
    setMatrixTopicIds((prev) =>
      prev.includes(topicId) ? prev.filter((id) => id !== topicId) : [...prev, topicId]
    );
    soundManager.playClick();
  };

  const selectedTopicsAvailableQuestions = useMemo(() => {
    const selected = allTopics.filter((t) => matrixTopicIds.includes(t.id));
    const total = selected.reduce((sum, t) => sum + t.totalQuestions, 0);
    const totalMc = selected.reduce((sum, t) => sum + t.mcCount, 0);
    const totalTf = selected.reduce((sum, t) => sum + t.tfCount, 0);
    return { total, totalMc, totalTf };
  }, [allTopics, matrixTopicIds]);

  // Nguồn 3: Tự chọn từng câu hỏi từ ngân hàng
  const [pickerSelectedTopicId, setPickerSelectedTopicId] = useState<string>(
    subjects.find((s) => s.id === "tin-hoc-12")?.topics[0]?.id || "tin-lap-trinh-python"
  );
  const [pickerFilterType, setPickerFilterType] = useState<"all" | "mc" | "tf">("all");
  const [pickerSearchQuery, setPickerSearchQuery] = useState("");

  const pickerQuestions = useMemo(() => {
    return questions.filter((q) => {
      const matchTopic = q.topicId === pickerSelectedTopicId;
      const matchType =
        pickerFilterType === "all"
          ? true
          : pickerFilterType === "mc"
          ? q.type !== "true_false"
          : q.type === "true_false";
      const matchSearch = pickerSearchQuery
        ? q.content.toLowerCase().includes(pickerSearchQuery.toLowerCase())
        : true;
      return matchTopic && matchType && matchSearch;
    });
  }, [questions, pickerSelectedTopicId, pickerFilterType, pickerSearchQuery]);

  const handleTogglePickQuestion = (questionToAdd: Question) => {
    const isAlreadyIn = workingQuestions.some((q) => q.id === questionToAdd.id);
    if (isAlreadyIn) {
      setWorkingQuestions(workingQuestions.filter((q) => q.id !== questionToAdd.id));
      soundManager.playClick();
    } else {
      const newMockQ: MockExamQuestion = {
        ...questionToAdd,
        examIndex: workingQuestions.length + 1,
        part: (questionToAdd.type === "true_false" ? "tf" : "mc") as "mc" | "tf",
      };
      setWorkingQuestions([...workingQuestions, newMockQ]);
      soundManager.playSuccess();
    }
  };

  // Bộ câu hỏi đang biên tập
  const [workingQuestions, setWorkingQuestions] = useState<MockExamQuestion[]>(currentExam?.questions || []);
  const [editingQuestion, setEditingQuestion] = useState<MockExamQuestion | null>(null);
  const [isQuestionEditOpen, setIsQuestionEditOpen] = useState(false);

  // Modal in ấn đề giấy và danh sách lớp
  const [isPaperPrintOpen, setIsPaperPrintOpen] = useState(false);
  const [isClassRosterOpen, setIsClassRosterOpen] = useState(false);
  const [isReportPrintOpen, setIsReportPrintOpen] = useState(false);

  // Khi đổi kỳ thi đang chọn
  useEffect(() => {
    if (currentExam) {
      setExamTitleInput(currentExam.title);
      setExamDurationInput(currentExam.durationMinutes);
      setExamTypeInput(currentExam.examType || "giua_ky");
      setAcademicYearInput(currentExam.academicYear || "2025 - 2026");
      setSelectedClassesInput(currentExam.targetClasses || ["all"]);
      setWorkingQuestions(currentExam.questions || []);
    }
  }, [currentExam]);

  // Đếm số thí sinh đã có tài khoản sẵn sàng thi theo các lớp đã chọn
  const candidateCount = useMemo(() => {
    try {
      const raw = localStorage.getItem("thpt_user_accounts");
      if (!raw) return 0;
      const accounts: any[] = JSON.parse(raw);
      if (selectedClassesInput.includes("all")) {
        return accounts.filter((a) => a.role === "student").length;
      }
      return accounts.filter((a) => a.role === "student" && selectedClassesInput.includes(a.className)).length;
    } catch {
      return 0;
    }
  }, [selectedClassesInput]);

  // Xử lý nạp file Word (.docx) hoặc Text
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setIsParsingFile(true);
    setParseError("");
    try {
      const text = await extractTextFromFile(file);
      setRawTextFileContent(text);
      const parsed = parseExamRawText(text, "tin-hoc-12");
      if (parsed.questions.length === 0) {
        setParseError("Không tìm thấy câu hỏi hợp lệ trong tệp. Hãy kiểm tra định dạng Phần I, Phần II hoặc đáp án.");
        soundManager.playError();
      } else {
        setWorkingQuestions(parsed.questions);
        soundManager.playSuccess();
      }
    } catch (err: any) {
      setParseError(err.message || "Lỗi khi xử lý tệp Word/PDF.");
      soundManager.playError();
    } finally {
      setIsParsingFile(false);
    }
  };

  // Xử lý nạp text thủ công
  const handleParseRawText = () => {
    if (!rawTextFileContent.trim()) return;
    setIsParsingFile(true);
    setParseError("");
    try {
      const parsed = parseExamRawText(rawTextFileContent, "tin-hoc-12");
      if (parsed.questions.length === 0) {
        setParseError("Không tìm thấy câu hỏi hợp lệ từ văn bản đã dán.");
        soundManager.playError();
      } else {
        setWorkingQuestions(parsed.questions);
        soundManager.playSuccess();
      }
    } catch (err: any) {
      setParseError(err.message || "Lỗi khi bóc tách câu hỏi.");
      soundManager.playError();
    } finally {
      setIsParsingFile(false);
    }
  };

  // Xử lý sinh đề từ Ma trận
  const handleGenerateFromMatrix = () => {
    const config: ExamMatrixConfig = {
      selectedTopicIds: matrixTopicIds,
      mcCountByLevel: matrixMcLevels,
      tfCountByLevel: matrixTfLevels,
      shuffleQuestions: true,
      shuffleOptions: true,
    };
    const result = generateExamFromMatrix(questions, config);
    if (!result.questions || result.questions.length === 0) {
      alert("Không đủ câu hỏi trong ngân hàng với các chủ đề đã chọn!");
      soundManager.playError();
      return;
    }
    setWorkingQuestions(result.questions);
    soundManager.playSuccess();
  };

  // Trộn 4 mã đề hoán vị
  const handleShuffleVariants = () => {
    if (workingQuestions.length === 0) {
      alert("Vui lòng nạp hoặc sinh câu hỏi trước khi trộn đề!");
      return;
    }
    const variants = generateExamVariants(workingQuestions, ["101", "102", "103", "104"]);
    if (currentExam) {
      const updated = exams.map((ex) =>
        ex.id === currentExam.id ? { ...ex, variants, questions: workingQuestions } : ex
      );
      saveExams(updated);
    }
    soundManager.playSuccess();
    alert("🎉 Đã trộn thành công 4 mã đề hoán vị: 101, 102, 103, 104!");
  };

  // Lưu đề thi và Xuất bản lên phòng thi
  const handleSaveAndPublish = () => {
    if (workingQuestions.length === 0) {
      alert("Đề thi chưa có câu hỏi nào!");
      return;
    }

    const variants = currentExam?.variants && currentExam.variants.length > 0
      ? currentExam.variants
      : generateExamVariants(workingQuestions, ["101", "102", "103", "104"]);

    const newExam: ExamDefinition = {
      id: currentExam?.id || `exam-${Date.now()}`,
      title: examTitleInput,
      subjectId: "tin-hoc-12",
      examType: examTypeInput,
      academicYear: academicYearInput,
      durationMinutes: examDurationInput,
      targetClasses: selectedClassesInput,
      status: "published",
      sourceType: sourceType === "file" ? "uploaded_file" : "matrix_bank",
      antiCheatConfig: currentExam?.antiCheatConfig || {
        enableFullscreen: true,
        maxViolations: 3,
        blockCopyPaste: true,
        autoSubmitOnTimeout: true,
      },
      totalQuestions: workingQuestions.length,
      mcCount: workingQuestions.filter((q) => q.type === "multiple_choice").length,
      tfCount: workingQuestions.filter((q) => q.type === "true_false").length,
      questions: workingQuestions,
      variants,
      createdAt: currentExam?.createdAt || Date.now(),
      updatedAt: Date.now(),
      publishedAt: Date.now(),
    };

    const exists = exams.some((e) => e.id === newExam.id);
    const updated = exists ? exams.map((e) => (e.id === newExam.id ? newExam : e)) : [newExam, ...exams];
    saveExams(updated);
    setSelectedExamId(newExam.id);
    soundManager.playSuccess();
    alert(`🎉 Đã xuất bản kỳ thi "${newExam.title}"! Phòng thi đã sẵn sàng đón học sinh.`);
    setActivePillar("proctoring");
  };

  // Tạo kỳ thi mới hoàn toàn
  const handleCreateNewExam = () => {
    const id = `exam-${Date.now()}`;
    const newExam: ExamDefinition = {
      id,
      title: `Kiểm tra định kỳ Môn Tin học 12 (${new Date().toLocaleDateString("vi-VN")})`,
      subjectId: "tin-hoc-12",
      examType: "giua_ky",
      academicYear: "2025 - 2026",
      durationMinutes: 50,
      targetClasses: ["all"],
      status: "draft",
      sourceType: "matrix_bank",
      antiCheatConfig: {
        enableFullscreen: true,
        maxViolations: 3,
        blockCopyPaste: true,
        autoSubmitOnTimeout: true,
      },
      totalQuestions: 0,
      mcCount: 0,
      tfCount: 0,
      questions: [],
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    saveExams([newExam, ...exams]);
    setSelectedExamId(id);
    soundManager.playClick();
  };

  // Xóa kỳ thi
  const handleDeleteExam = (id: string, title: string) => {
    if (confirm(`Thầy có chắc chắn muốn xóa kỳ thi "${title}"?`)) {
      const updated = exams.filter((e) => e.id !== id);
      saveExams(updated);
      if (selectedExamId === id && updated.length > 0) {
        setSelectedExamId(updated[0].id);
      }
      soundManager.playClick();
    }
  };

  // Lưu chỉnh sửa câu hỏi từ QuestionEditModal
  const handleSaveQuestionEdit = (updatedQ: MockExamQuestion) => {
    const updated = workingQuestions.map((q) => (q.id === updatedQ.id ? updatedQ : q));
    setWorkingQuestions(updated);
    if (currentExam) {
      const updatedExams = exams.map((ex) =>
        ex.id === currentExam.id ? { ...ex, questions: updated } : ex
      );
      saveExams(updatedExams);
    }
  };

  // =========================================================================
  // TRỤ CỘT 2: GIÁM SÁT PHÒNG THI AN TOÀN
  // =========================================================================
  const [proctoringClassFilter, setProctoringClassFilter] = useState<string>("all");

  const currentExamSubmissions = useMemo(() => {
    return submissions.filter((s) => s.examId === currentExam?.id);
  }, [submissions, currentExam]);

  // Toggle trạng thái phòng thi
  const handleToggleExamStatus = () => {
    if (!currentExam) return;
    const nextStatus: ExamStatus = currentExam.status === "published" ? "closed" : "published";
    const updated = exams.map((e) => (e.id === currentExam.id ? { ...e, status: nextStatus } : e));
    saveExams(updated);
    soundManager.playClick();
  };

  // Cập nhật cấu hình an toàn
  const handleUpdateAntiCheat = (patch: Partial<ExamDefinition["antiCheatConfig"]>) => {
    if (!currentExam) return;
    const updated = exams.map((e) =>
      e.id === currentExam.id
        ? { ...e, antiCheatConfig: { ...e.antiCheatConfig, ...patch } }
        : e
    );
    saveExams(updated);
    soundManager.playClick();
  };

  // Mở khóa cho học sinh thi lại (nếu gặp sự cố)
  const handleResetStudentAttempt = (studentId: string, studentName: string) => {
    if (confirm(`Cho phép thí sinh "${studentName}" làm lại bài thi? Dữ liệu bài nộp cũ sẽ được thu hồi.`)) {
      const updated = submissions.filter(
        (s) => !(s.examId === currentExam?.id && s.studentId === studentId)
      );
      setSubmissions(updated);
      localStorage.setItem("thpt_exam_submissions", JSON.stringify(updated));
      soundManager.playSuccess();
    }
  };

  // Quản lý các yêu cầu mở khóa bài thi (Proctor Unlock Requests)
  const [unlockRequests, setUnlockRequests] = useState<ProctorUnlockRequest[]>(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("thpt_exam_unlock_requests");
        if (saved) return JSON.parse(saved);
      } catch {
        // Ignored
      }
    }
    return [];
  });

  // Đồng bộ thời gian thực các yêu cầu xin mở khóa bài thi
  useEffect(() => {
    const syncRequests = () => {
      try {
        const saved = localStorage.getItem("thpt_exam_unlock_requests");
        if (saved) setUnlockRequests(JSON.parse(saved));
      } catch {
        // Ignored
      }
    };
    const timer = setInterval(syncRequests, 1500);
    window.addEventListener("storage", syncRequests);
    return () => {
      clearInterval(timer);
      window.removeEventListener("storage", syncRequests);
    };
  }, []);

  // Giám thị phê duyệt mở khóa cho học sinh tiếp tục làm bài
  const handleApproveUnlock = (reqId: string) => {
    const updated = unlockRequests.map((r) =>
      r.id === reqId ? { ...r, status: "approved" as const } : r
    );
    setUnlockRequests(updated);
    try {
      localStorage.setItem("thpt_exam_unlock_requests", JSON.stringify(updated));
    } catch {
      // Ignored
    }
    soundManager.playSuccess();
  };

  // Giám thị bác bỏ yêu cầu mở khóa
  const handleRejectUnlock = (reqId: string) => {
    const updated = unlockRequests.map((r) =>
      r.id === reqId ? { ...r, status: "rejected" as const } : r
    );
    setUnlockRequests(updated);
    try {
      localStorage.setItem("thpt_exam_unlock_requests", JSON.stringify(updated));
    } catch {
      // Ignored
    }
    soundManager.playError();
  };

  // Danh sách yêu cầu mở khóa đang chờ duyệt cho kỳ thi này
  const pendingUnlockRequests = useMemo(() => {
    return unlockRequests.filter(
      (r) => r.status === "pending" && (!currentExam || r.examId === currentExam.id)
    );
  }, [unlockRequests, currentExam]);

  // =========================================================================
  // TRỤ CỘT 3: BÁO CÁO & PHÂN TÍCH SƯ PHẠM
  // =========================================================================
  const [analyticsClassFilter, setAnalyticsClassFilter] = useState<string>("all");

  const examAnalyticsReport: ExamStatsReport = useMemo(() => {
    if (!currentExam) {
      return {
        examId: "",
        examTitle: "",
        totalParticipants: 0,
        submittedCount: 0,
        disqualifiedCount: 0,
        averageScore: 0,
        highestScore: 0,
        lowestScore: 0,
        passRate: 0,
        excellentRate: 0,
        scoreDistribution: { under5: 0, from5to65: 0, from65to8: 0, from8to10: 0 },
        itemAnalysis: [],
        atRiskStudents: [],
      };
    }
    return analyzeExamResults(currentExam, currentExamSubmissions, analyticsClassFilter);
  }, [currentExam, currentExamSubmissions, analyticsClassFilter]);

  // Xuất file CSV
  const handleExportCSV = () => {
    if (currentExamSubmissions.length === 0) {
      alert("Chưa có dữ liệu bài thi để xuất file!");
      return;
    }
    const headers = ["STT", "SoBaoDanh", "HoVaTen", "Lop", "MaDe", "DiemPhan1", "DiemPhan2", "TongDiem", "ViPham", "TrangThai"];
    const rows = currentExamSubmissions.map((s, idx) => [
      idx + 1,
      s.candidateNumber || s.studentId,
      s.studentName,
      s.className,
      s.variantCode || "101",
      s.mcScore.toFixed(2),
      s.tfScore.toFixed(2),
      s.totalScore.toFixed(2),
      s.violations.length,
      s.isDisqualified ? "DinhChi" : "HoanThanh",
    ]);

    const csvContent = "\uFEFF" + [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `BangDiem_${currentExam?.id || "exam"}_${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
    soundManager.playSuccess();
  };

  return (
    <div className="space-y-6">
      {/* ===================================================================== */}
      {/* TOP HEADER: SELECTOR KỲ THI & NÚT TẠO KỲ THI MỚI */}
      {/* ===================================================================== */}
      <div className="bg-[#e6ecf5] p-4 sm:p-5 rounded-neu shadow-neu-flat border border-white/70 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-neu-sm bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-neu-flat-xs flex-shrink-0">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-base sm:text-lg font-black text-slate-800">
                Khảo Thí &amp; Kiểm Tra Chống Gian Lận (Chuẩn Sư Phạm 3 Trụ Cột)
              </h1>
              {currentExam && (
                <span
                  className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
                    currentExam.status === "published"
                      ? "bg-emerald-100 text-emerald-800"
                      : "bg-slate-200 text-slate-600"
                  }`}
                >
                  {currentExam.status === "published" ? "🟢 Đang Mở Thi" : "⚪ Đang Đóng"}
                </span>
              )}
            </div>
            <p className="text-xs text-slate-500 font-medium">
              Quy trình khép kín: Soạn &amp; Trộn đề ➔ Phòng thi chống gian lận ➔ Báo cáo &amp; In ấn
            </p>
          </div>
        </div>

        {/* Bộ chuyển đổi kỳ thi */}
        <div className="flex items-center gap-2 self-stretch md:self-auto justify-between md:justify-end">
          <div className="flex items-center gap-1.5 bg-[#e6ecf5] px-3 py-1.5 rounded-neu-sm shadow-neu-inset-sm">
            <span className="text-xs font-bold text-slate-600">Kỳ Thi:</span>
            <select
              value={selectedExamId}
              onChange={(e) => {
                soundManager.playClick();
                setSelectedExamId(e.target.value);
              }}
              className="bg-transparent text-xs font-bold text-blue-700 outline-none max-w-[200px] truncate cursor-pointer"
            >
              {exams.map((ex) => (
                <option key={ex.id} value={ex.id}>
                  {ex.title}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={handleCreateNewExam}
            className="px-3 py-2 rounded-neu-sm bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-neu-blue active:shadow-neu-inset transition flex items-center gap-1.5 cursor-pointer flex-shrink-0"
            title="Khởi tạo kỳ thi mới"
          >
            <Plus className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Tạo Kỳ Thi Mới</span>
          </button>
        </div>
      </div>

      {/* ===================================================================== */}
      {/* THANH ĐIỀU HƯỚNG 3 TRỤ CỘT NGHIỆP VỤ (3 PILLARS TABS) */}
      {/* ===================================================================== */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-1.5 bg-[#e6ecf5] rounded-neu shadow-neu-inset-sm">
        <button
          onClick={() => {
            soundManager.playClick();
            setActivePillar("design");
          }}
          className={`py-3 px-4 rounded-neu-sm text-xs font-black transition flex items-center justify-center gap-2 cursor-pointer ${
            activePillar === "design"
              ? "bg-blue-600 text-white shadow-neu-blue"
              : "text-slate-600 hover:text-slate-900 hover:bg-white/40"
          }`}
        >
          <Edit3 className="w-4 h-4" />
          <span>1. THIẾT KẾ &amp; SOẠN ĐỀ (TRƯỚC THI)</span>
        </button>

        <button
          onClick={() => {
            soundManager.playClick();
            setActivePillar("proctoring");
          }}
          className={`py-3 px-4 rounded-neu-sm text-xs font-black transition flex items-center justify-center gap-2 cursor-pointer ${
            activePillar === "proctoring"
              ? "bg-indigo-600 text-white shadow-neu-flat"
              : "text-slate-600 hover:text-slate-900 hover:bg-white/40"
          }`}
        >
          <ShieldAlert className="w-4 h-4" />
          <span>2. PHÒNG THI &amp; GIÁM SÁT (TRONG KHI THI)</span>
        </button>

        <button
          onClick={() => {
            soundManager.playClick();
            setActivePillar("analytics");
          }}
          className={`py-3 px-4 rounded-neu-sm text-xs font-black transition flex items-center justify-center gap-2 cursor-pointer ${
            activePillar === "analytics"
              ? "bg-emerald-600 text-white shadow-neu-flat"
              : "text-slate-600 hover:text-slate-900 hover:bg-white/40"
          }`}
        >
          <BarChart3 className="w-4 h-4" />
          <span>3. BÁO CÁO, CẢNH BÁO &amp; IN ẤN (SAU THI)</span>
        </button>
      </div>

      {/* ===================================================================== */}
      {/* TRỤ CỘT 1: THIẾT KẾ & SOẠN ĐỀ (TRƯỚC KHI THI) */}
      {/* ===================================================================== */}
      {activePillar === "design" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* CỘT TRÁI (4 CỘT): TỔ CHỨC KỲ THI, LỚP HỌC & THÍ SINH */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-[#e6ecf5] p-5 rounded-neu shadow-neu-flat border border-white/60 space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-300/60">
                <BookOpen className="w-4 h-4 text-blue-600" />
                <h3 className="text-xs font-black uppercase tracking-wider text-slate-800">
                  Thông Tin Kỳ Thi &amp; Phân Công Lớp
                </h3>
              </div>

              {/* Tên kỳ thi */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Tên kỳ thi / Đợt kiểm tra:</label>
                <input
                  type="text"
                  value={examTitleInput}
                  onChange={(e) => setExamTitleInput(e.target.value)}
                  className="w-full px-3 py-2 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset text-xs font-bold text-slate-800 outline-none"
                  placeholder="VD: Kiểm tra Giữa kỳ I - Tin học 12"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Loại kỳ thi:</label>
                  <select
                    value={examTypeInput}
                    onChange={(e) => setExamTypeInput(e.target.value)}
                    className="w-full px-2.5 py-2 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset text-xs font-bold text-slate-800 outline-none"
                  >
                    <option value="giua_ky">Giữa Học Kỳ</option>
                    <option value="cuoi_ky">Cuối Học Kỳ</option>
                    <option value="khao_sat">Khảo Sát / Đánh Giá</option>
                    <option value="thu_nghiem">Thi Thử TN THPT</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Thời gian (Phút):</label>
                  <input
                    type="number"
                    value={examDurationInput}
                    onChange={(e) => setExamDurationInput(Number(e.target.value))}
                    min={5}
                    max={180}
                    className="w-full px-3 py-2 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset text-xs font-bold text-slate-800 outline-none"
                  />
                </div>
              </div>

              {/* Lớp dự thi */}
              <div className="space-y-2 pt-2 border-t border-slate-300/60">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-700">Lớp được giao bài:</label>
                  <button
                    type="button"
                    onClick={() => setIsClassRosterOpen(true)}
                    className="text-[11px] font-black text-indigo-600 hover:text-indigo-800 flex items-center gap-1 cursor-pointer"
                  >
                    <Users className="w-3 h-3" />
                    <span>Quản lý Lớp &amp; SBD</span>
                  </button>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  <button
                    type="button"
                    onClick={() => setSelectedClassesInput(["all"])}
                    className={`px-2.5 py-1 rounded-md text-xs font-bold transition ${
                      selectedClassesInput.includes("all")
                        ? "bg-blue-600 text-white shadow-xs"
                        : "bg-[#e6ecf5] text-slate-600 shadow-neu-flat-xs hover:bg-white"
                    }`}
                  >
                    Toàn Khối 12
                  </button>

                  {classList.map((cls) => {
                    const isSelected = selectedClassesInput.includes(cls);
                    return (
                      <button
                        key={cls}
                        type="button"
                        onClick={() => {
                          if (selectedClassesInput.includes("all")) {
                            setSelectedClassesInput([cls]);
                          } else if (isSelected) {
                            const filtered = selectedClassesInput.filter((c) => c !== cls);
                            setSelectedClassesInput(filtered.length > 0 ? filtered : ["all"]);
                          } else {
                            setSelectedClassesInput([...selectedClassesInput, cls]);
                          }
                        }}
                        className={`px-2.5 py-1 rounded-md text-xs font-bold transition ${
                          !selectedClassesInput.includes("all") && isSelected
                            ? "bg-indigo-600 text-white shadow-xs"
                            : "bg-[#e6ecf5] text-slate-600 shadow-neu-flat-xs hover:bg-white"
                        }`}
                      >
                        Lớp {cls}
                      </button>
                    );
                  })}
                </div>

                <div className="p-2.5 rounded-neu-sm bg-indigo-50 border border-indigo-200 text-indigo-900 text-xs flex items-center justify-between">
                  <span>Thí sinh đã cấp tài khoản:</span>
                  <strong className="font-mono font-black text-sm">{candidateCount} em</strong>
                </div>
              </div>

              {/* Nút hành động chính */}
              <div className="pt-2 space-y-2">
                <button
                  type="button"
                  onClick={handleSaveAndPublish}
                  className="w-full py-3 rounded-neu-sm bg-blue-600 hover:bg-blue-700 text-white text-xs font-black shadow-neu-blue flex items-center justify-center gap-2 cursor-pointer transition active:scale-[0.98]"
                >
                  <Send className="w-4 h-4" />
                  <span>XUẤT BẢN LÊN PHÒNG THI ONLINE</span>
                </button>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setIsPaperPrintOpen(true)}
                    className="flex-1 py-2 rounded-neu-sm bg-[#e6ecf5] text-slate-700 hover:text-slate-900 text-xs font-bold shadow-neu-flat-xs flex items-center justify-center gap-1.5 cursor-pointer"
                    title="In bản đề giấy A4 và phiếu soi đáp án"
                  >
                    <Printer className="w-3.5 h-3.5 text-blue-600" />
                    <span>In Đề Giấy A4</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDeleteExam(currentExam.id, currentExam.title)}
                    className="p-2 rounded-neu-sm bg-rose-50 text-rose-600 hover:bg-rose-100 text-xs font-bold shadow-neu-flat-xs"
                    title="Xóa kỳ thi này"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* CỘT PHẢI (8 CỘT): NGUỒN ĐỀ, RÀ SOÁT CÂU HỎI & TRỘN ĐỀ */}
          <div className="lg:col-span-8 space-y-4">
            {/* Lựa chọn 3 Nguồn nạp đề */}
            <div className="bg-[#e6ecf5] p-5 rounded-neu shadow-neu-flat border border-white/60 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-300/60">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-blue-600" />
                  <h3 className="text-xs font-black uppercase tracking-wider text-slate-800">
                    Nguồn Đề &amp; Ngân Hàng Câu Hỏi
                  </h3>
                </div>

                <div className="flex rounded-neu-sm bg-slate-200/60 p-0.5 text-xs font-bold flex-wrap">
                  <button
                    type="button"
                    onClick={() => setSourceType("matrix")}
                    className={`px-3 py-1 rounded transition ${
                      sourceType === "matrix" ? "bg-white text-blue-700 shadow-xs" : "text-slate-600"
                    }`}
                  >
                    1. Tích Chọn Chủ Đề &amp; Ma Trận
                  </button>
                  <button
                    type="button"
                    onClick={() => setSourceType("topics")}
                    className={`px-3 py-1 rounded transition ${
                      sourceType === "topics" ? "bg-white text-indigo-700 shadow-xs" : "text-slate-600"
                    }`}
                  >
                    2. Chọn Từng Câu Từ Ngân Hàng
                  </button>
                  <button
                    type="button"
                    onClick={() => setSourceType("file")}
                    className={`px-3 py-1 rounded transition ${
                      sourceType === "file" ? "bg-white text-blue-700 shadow-xs" : "text-slate-600"
                    }`}
                  >
                    3. Nạp File Word (.docx) / PDF
                  </button>
                </div>
              </div>

              {/* NGUỒN 1: TÍCH CHỌN CHỦ ĐỀ & MA TRẬN 4 MỨC ĐỘ */}
              {sourceType === "matrix" && (
                <div className="space-y-4 text-xs">
                  {/* DANH SÁCH CHỦ ĐỀ HỆ THỐNG CÓ SẴN (CHECKBOXES) */}
                  <div className="space-y-2.5 p-3 rounded-neu-sm bg-white/70 border border-slate-200">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-200/80">
                      <div>
                        <span className="font-bold text-slate-800 text-xs flex items-center gap-1.5">
                          <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                          <span>Tích chọn các chuyên đề / chủ đề làm nguồn tạo đề:</span>
                        </span>
                        <p className="text-[11px] text-slate-500 mt-0.5">
                          Đã chọn: <strong className="text-blue-700">{matrixTopicIds.length}</strong> / {allTopics.length} chủ đề • Khả dụng: <strong className="text-emerald-700">{selectedTopicsAvailableQuestions.total} câu</strong> ({selectedTopicsAvailableQuestions.totalMc} MC + {selectedTopicsAvailableQuestions.totalTf} TF)
                        </p>
                      </div>

                      <div className="flex items-center gap-1.5 flex-shrink-0">
                        <button
                          type="button"
                          onClick={handleSelectAllTopics}
                          className="px-2.5 py-1 rounded bg-[#e6ecf5] hover:bg-white text-[11px] font-bold text-blue-700 shadow-neu-flat-xs cursor-pointer transition"
                        >
                          Chọn Tất Cả ({allTopics.length})
                        </button>
                        <button
                          type="button"
                          onClick={handleDeselectAllTopics}
                          className="px-2.5 py-1 rounded bg-[#e6ecf5] hover:bg-white text-[11px] font-bold text-slate-600 shadow-neu-flat-xs cursor-pointer transition"
                        >
                          Bỏ Chọn Hết
                        </button>
                      </div>
                    </div>

                    {/* Lưới các thẻ chủ đề có checkbox */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-56 overflow-y-auto pr-1">
                      {allTopics.map((top) => {
                        const isChecked = matrixTopicIds.includes(top.id);
                        return (
                          <div
                            key={top.id}
                            onClick={() => handleToggleTopic(top.id)}
                            className={`p-2.5 rounded-neu-sm border transition flex items-start gap-2.5 cursor-pointer select-none ${
                              isChecked
                                ? "bg-blue-50/90 border-blue-400 shadow-neu-flat-xs"
                                : "bg-white/50 border-slate-200 hover:bg-white"
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => {}} // Đã được xử lý bởi div onClick
                              className="w-4 h-4 mt-0.5 accent-blue-600 cursor-pointer rounded flex-shrink-0"
                            />
                            <div className="flex-1 min-w-0">
                              <p className={`font-bold text-xs leading-snug truncate ${isChecked ? "text-blue-900" : "text-slate-800"}`}>
                                {top.name}
                              </p>
                              <div className="flex items-center gap-2 mt-1 text-[10px] text-slate-500">
                                <span className="truncate max-w-[130px]">{top.chapter}</span>
                                <span>•</span>
                                <span className="font-semibold text-slate-700 font-mono">
                                  {top.totalQuestions} câu ({top.mcCount} MC, {top.tfCount} TF)
                                </span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* CẤU HÌNH MA TRẬN 4 MỨC ĐỘ */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Phần I: 4 Lựa chọn */}
                    <div className="p-3 rounded-neu-sm bg-white/70 border border-slate-200 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-800">Phần I: 4 Lựa chọn (Tối đa 6.0đ)</span>
                        <span className="font-black text-blue-700">
                          {matrixMcLevels.NhanBiet + matrixMcLevels.ThongHieu + matrixMcLevels.VanDung + matrixMcLevels.VanDungCao} câu
                        </span>
                      </div>
                      <div className="grid grid-cols-4 gap-2 text-center">
                        <div>
                          <span className="text-[10px] text-slate-500 block">NB</span>
                          <input
                            type="number"
                            value={matrixMcLevels.NhanBiet}
                            onChange={(e) => setMatrixMcLevels({ ...matrixMcLevels, NhanBiet: Number(e.target.value) })}
                            min={0}
                            className="w-full p-1 rounded bg-[#e6ecf5] shadow-neu-inset text-center font-bold"
                          />
                        </div>
                        <div>
                          <span className="text-[10px] text-slate-500 block">TH</span>
                          <input
                            type="number"
                            value={matrixMcLevels.ThongHieu}
                            onChange={(e) => setMatrixMcLevels({ ...matrixMcLevels, ThongHieu: Number(e.target.value) })}
                            min={0}
                            className="w-full p-1 rounded bg-[#e6ecf5] shadow-neu-inset text-center font-bold"
                          />
                        </div>
                        <div>
                          <span className="text-[10px] text-slate-500 block">VD</span>
                          <input
                            type="number"
                            value={matrixMcLevels.VanDung}
                            onChange={(e) => setMatrixMcLevels({ ...matrixMcLevels, VanDung: Number(e.target.value) })}
                            min={0}
                            className="w-full p-1 rounded bg-[#e6ecf5] shadow-neu-inset text-center font-bold"
                          />
                        </div>
                        <div>
                          <span className="text-[10px] text-slate-500 block">VDC</span>
                          <input
                            type="number"
                            value={matrixMcLevels.VanDungCao}
                            onChange={(e) => setMatrixMcLevels({ ...matrixMcLevels, VanDungCao: Number(e.target.value) })}
                            min={0}
                            className="w-full p-1 rounded bg-[#e6ecf5] shadow-neu-inset text-center font-bold"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Phần II: Đúng / Sai */}
                    <div className="p-3 rounded-neu-sm bg-white/70 border border-slate-200 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-800">Phần II: Đúng / Sai (Tối đa 4.0đ)</span>
                        <span className="font-black text-indigo-700">
                          {matrixTfLevels.NhanBiet + matrixTfLevels.ThongHieu + matrixTfLevels.VanDung + matrixTfLevels.VanDungCao} câu (16 ý)
                        </span>
                      </div>
                      <div className="grid grid-cols-4 gap-2 text-center">
                        <div>
                          <span className="text-[10px] text-slate-500 block">NB</span>
                          <input
                            type="number"
                            value={matrixTfLevels.NhanBiet}
                            onChange={(e) => setMatrixTfLevels({ ...matrixTfLevels, NhanBiet: Number(e.target.value) })}
                            min={0}
                            className="w-full p-1 rounded bg-[#e6ecf5] shadow-neu-inset text-center font-bold"
                          />
                        </div>
                        <div>
                          <span className="text-[10px] text-slate-500 block">TH</span>
                          <input
                            type="number"
                            value={matrixTfLevels.ThongHieu}
                            onChange={(e) => setMatrixTfLevels({ ...matrixTfLevels, ThongHieu: Number(e.target.value) })}
                            min={0}
                            className="w-full p-1 rounded bg-[#e6ecf5] shadow-neu-inset text-center font-bold"
                          />
                        </div>
                        <div>
                          <span className="text-[10px] text-slate-500 block">VD</span>
                          <input
                            type="number"
                            value={matrixTfLevels.VanDung}
                            onChange={(e) => setMatrixTfLevels({ ...matrixTfLevels, VanDung: Number(e.target.value) })}
                            min={0}
                            className="w-full p-1 rounded bg-[#e6ecf5] shadow-neu-inset text-center font-bold"
                          />
                        </div>
                        <div>
                          <span className="text-[10px] text-slate-500 block">VDC</span>
                          <input
                            type="number"
                            value={matrixTfLevels.VanDungCao}
                            onChange={(e) => setMatrixTfLevels({ ...matrixTfLevels, VanDungCao: Number(e.target.value) })}
                            min={0}
                            className="w-full p-1 rounded bg-[#e6ecf5] shadow-neu-inset text-center font-bold"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="button"
                      disabled={matrixTopicIds.length === 0}
                      onClick={handleGenerateFromMatrix}
                      className="px-5 py-2.5 rounded-neu-sm bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-neu-blue flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Sinh Đề Tự Động Từ {matrixTopicIds.length} Chủ Đề Đã Chọn</span>
                    </button>
                  </div>
                </div>
              )}

              {/* NGUỒN 2: CHỌN TỪNG CÂU HỎI TRỰC TIẾP TỪ NGÂN HÀNG */}
              {sourceType === "topics" && (
                <div className="space-y-3 text-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 rounded-neu-sm bg-white/70 border border-slate-200">
                    <div className="flex items-center gap-2 flex-1">
                      <span className="font-bold text-slate-700 whitespace-nowrap">Chọn chủ đề:</span>
                      <select
                        value={pickerSelectedTopicId}
                        onChange={(e) => setPickerSelectedTopicId(e.target.value)}
                        className="px-2.5 py-1.5 rounded bg-[#e6ecf5] shadow-neu-inset font-bold text-xs text-indigo-900 outline-none flex-1 max-w-xs"
                      >
                        {allTopics.map((top) => (
                          <option key={top.id} value={top.id}>
                            {top.name} ({top.totalQuestions} câu)
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex rounded bg-[#e6ecf5] p-0.5 text-[11px] font-bold">
                        <button
                          type="button"
                          onClick={() => setPickerFilterType("all")}
                          className={`px-2 py-1 rounded transition ${pickerFilterType === "all" ? "bg-white text-blue-700 shadow-xs" : "text-slate-600"}`}
                        >
                          Tất cả
                        </button>
                        <button
                          type="button"
                          onClick={() => setPickerFilterType("mc")}
                          className={`px-2 py-1 rounded transition ${pickerFilterType === "mc" ? "bg-white text-blue-700 shadow-xs" : "text-slate-600"}`}
                        >
                          4 Lựa chọn
                        </button>
                        <button
                          type="button"
                          onClick={() => setPickerFilterType("tf")}
                          className={`px-2 py-1 rounded transition ${pickerFilterType === "tf" ? "bg-white text-blue-700 shadow-xs" : "text-slate-600"}`}
                        >
                          Đúng / Sai
                        </button>
                      </div>

                      <input
                        type="text"
                        placeholder="Tìm câu hỏi..."
                        value={pickerSearchQuery}
                        onChange={(e) => setPickerSearchQuery(e.target.value)}
                        className="px-2 py-1 rounded bg-[#e6ecf5] shadow-neu-inset text-[11px] outline-none w-32"
                      />
                    </div>
                  </div>

                  {/* Danh sách câu hỏi của chủ đề này */}
                  <div className="max-h-72 overflow-y-auto space-y-2 pr-1">
                    {pickerQuestions.length === 0 ? (
                      <div className="text-center py-6 text-slate-500 italic">
                        Không tìm thấy câu hỏi nào phù hợp với bộ lọc.
                      </div>
                    ) : (
                      pickerQuestions.map((q, idx) => {
                        const isAdded = workingQuestions.some((wq) => wq.id === q.id);
                        return (
                          <div
                            key={q.id || idx}
                            className={`p-3 rounded-neu-sm border transition flex items-start justify-between gap-3 ${
                              isAdded ? "bg-blue-50/70 border-blue-400" : "bg-white/70 border-slate-200"
                            }`}
                          >
                            <div className="space-y-1 flex-1">
                              <div className="flex items-center gap-2">
                                <span className="font-bold text-slate-800">#{idx + 1}</span>
                                <span className="px-1.5 py-0.5 rounded text-[10px] font-black bg-blue-100 text-blue-800">
                                  {q.type === "true_false" ? "Đúng / Sai" : "4 Lựa chọn"}
                                </span>
                                <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-slate-100 text-slate-600">
                                  {q.difficulty}
                                </span>
                              </div>
                              <p className="text-slate-800 leading-snug line-clamp-2">{q.content}</p>
                            </div>

                            <button
                              type="button"
                              onClick={() => handleTogglePickQuestion(q)}
                              className={`px-3 py-1.5 rounded-neu-sm text-xs font-bold transition flex items-center gap-1 flex-shrink-0 cursor-pointer ${
                                isAdded
                                  ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs"
                                  : "bg-blue-600 hover:bg-blue-700 text-white shadow-neu-blue"
                              }`}
                            >
                              {isAdded ? (
                                <>
                                  <Check className="w-3.5 h-3.5" />
                                  <span>Đã Chọn</span>
                                </>
                              ) : (
                                <>
                                  <Plus className="w-3.5 h-3.5" />
                                  <span>Thêm Vào Đề</span>
                                </>
                              )}
                            </button>
                          </div>
                        );
                      })
                    )}
                  </div>
                </div>
              )}

              {/* NGUỒN 2: NẠP FILE WORD (.DOCX) / PDF */}
              {sourceType === "file" && (
                <div className="space-y-3 text-xs">
                  <div className="border-2 border-dashed border-slate-300 rounded-neu-sm p-4 text-center space-y-2 bg-[#e6ecf5] hover:bg-white/40 transition">
                    <Upload className="w-6 h-6 mx-auto text-blue-600" />
                    <div>
                      <p className="font-bold text-slate-800">Kéo thả hoặc chọn File Word (.docx) đề thi</p>
                      <p className="text-[11px] text-slate-500">Tự động nhận diện Phần I, Phần II và đáp án Đ/S</p>
                    </div>
                    <input
                      type="file"
                      accept=".docx,.txt"
                      onChange={handleFileUpload}
                      className="text-xs file:mr-2 file:py-1 file:px-3 file:rounded-md file:border-0 file:bg-blue-600 file:text-white file:font-bold cursor-pointer"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-slate-700">Hoặc sao chép &amp; dán văn bản đề thi vào đây:</label>
                    <textarea
                      value={rawTextFileContent}
                      onChange={(e) => setRawTextFileContent(e.target.value)}
                      rows={4}
                      placeholder="Câu 1: ...&#10;A. ...&#10;B. ...&#10;C. ...&#10;D. ...&#10;Đáp án: A"
                      className="w-full p-2.5 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset text-xs font-mono text-slate-800 outline-none resize-none"
                    />
                  </div>

                  {parseError && (
                    <div className="p-2.5 rounded-neu-sm bg-rose-50 border border-rose-200 text-rose-800 text-xs font-semibold flex items-center gap-2">
                      <AlertOctagon className="w-4 h-4 flex-shrink-0" />
                      <span>{parseError}</span>
                    </div>
                  )}

                  <div className="flex justify-end">
                    <button
                      type="button"
                      disabled={isParsingFile || !rawTextFileContent.trim()}
                      onClick={handleParseRawText}
                      className="px-4 py-2 rounded-neu-sm bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-neu-blue flex items-center gap-1.5 disabled:opacity-50"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{isParsingFile ? "Đang bóc tách..." : "Bóc Tách Câu Hỏi"}</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* DANH SÁCH CÂU HỎI ĐÃ NẠP (LIVE REVIEW & TRỘN ĐỀ) */}
            <div className="bg-[#e6ecf5] p-5 rounded-neu shadow-neu-flat border border-white/60 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-slate-300/60">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-blue-600" />
                  <h3 className="text-xs font-black uppercase tracking-wider text-slate-800">
                    Rà Soát Câu Hỏi ({workingQuestions.length} câu)
                  </h3>
                  {currentExam?.variants && currentExam.variants.length > 0 && (
                    <span className="text-[10px] font-black bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded-full">
                      Đã Trộn 4 Mã Đề (101 - 104)
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleShuffleVariants}
                    className="px-3 py-1.5 rounded-neu-sm bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-neu-flat flex items-center gap-1.5 cursor-pointer"
                  >
                    <Dice5 className="w-3.5 h-3.5" />
                    <span>Trộn 4 Mã Đề (101-104)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsPaperPrintOpen(true)}
                    className="px-3 py-1.5 rounded-neu-sm bg-[#e6ecf5] hover:bg-white text-blue-700 text-xs font-bold shadow-neu-flat-xs flex items-center gap-1.5 cursor-pointer"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>In Đề Giấy &amp; Đáp Án A4</span>
                  </button>
                </div>
              </div>

              {/* Danh sách câu hỏi cuộn được */}
              <div className="max-h-96 overflow-y-auto space-y-2.5 pr-1">
                {workingQuestions.length === 0 ? (
                  <div className="text-center py-10 text-xs text-slate-500 space-y-1">
                    <p>Chưa có câu hỏi nào trong đề thi này.</p>
                    <p className="text-[11px] text-slate-400">
                      Hãy chọn tab Ma trận hoặc Nạp file Word ở trên để thêm câu hỏi.
                    </p>
                  </div>
                ) : (
                  workingQuestions.map((q, idx) => (
                    <div
                      key={q.id || idx}
                      className="p-3 rounded-neu-sm bg-white/70 border border-slate-200 text-xs space-y-2 hover:border-blue-300 transition"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="font-black text-slate-800">Câu {idx + 1}:</span>
                          <span className="px-2 py-0.5 rounded text-[10px] font-black bg-blue-100 text-blue-800">
                            {q.type === "multiple_choice" ? "Phần I (MC)" : "Phần II (TF)"}
                          </span>
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-600">
                            {q.difficulty || "TH"}
                          </span>
                        </div>

                        <div className="flex items-center gap-1">
                          <button
                            type="button"
                            onClick={() => {
                              setEditingQuestion(q);
                              setIsQuestionEditOpen(true);
                            }}
                            className="p-1 text-blue-600 hover:text-blue-800 rounded"
                            title="Sửa câu hỏi này"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              setWorkingQuestions(workingQuestions.filter((_, i) => i !== idx));
                            }}
                            className="p-1 text-rose-500 hover:text-rose-700 rounded"
                            title="Xóa câu hỏi này"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      <p className="text-slate-800 font-medium leading-relaxed">{q.content}</p>

                      {/* Hiển thị tóm tắt phương án */}
                      {(q.type === "multiple_choice" || q.part === "mc") && q.options && (
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 pl-2 text-[11px]">
                          {q.options.map((opt) => (
                            <div
                              key={opt.id}
                              className={`p-1 rounded ${
                                opt.id === (q.correctOptionId || q.correctAnswer)
                                  ? "bg-emerald-100 font-bold text-emerald-900 border border-emerald-300"
                                  : "text-slate-600"
                              }`}
                            >
                              <strong>{opt.id}.</strong> {opt.content}
                            </div>
                          ))}
                        </div>
                      )}

                      {(q.type === "true_false" || q.part === "tf") && (q.statements || q.tfItems) && (
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 pl-2 text-[11px]">
                          {(q.statements || q.tfItems || []).map((st: any) => {
                            const isCorrectVal = st.isCorrect !== undefined ? st.isCorrect : st.correctAnswer;
                            return (
                              <div
                                key={st.id}
                                className={`p-1 rounded ${
                                  isCorrectVal
                                    ? "bg-emerald-50 text-emerald-900 font-semibold"
                                    : "bg-rose-50 text-rose-900 font-semibold"
                                }`}
                              >
                                <strong>{st.id})</strong> {isCorrectVal ? "Đúng" : "Sai"}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===================================================================== */}
      {/* TRỤ CỘT 2: PHÒNG THI & GIÁM SÁT AN TOÀN (TRONG KHI THI) */}
      {/* ===================================================================== */}
      {activePillar === "proctoring" && (
        <div className="space-y-6">
          {/* Cấu hình an toàn phòng thi */}
          <div className="bg-[#e6ecf5] p-5 rounded-neu shadow-neu-flat border border-white/60 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-300/60">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-neu-sm bg-indigo-100 flex items-center justify-center text-indigo-700 shadow-neu-flat-xs">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-slate-800">
                    Cấu Hình Phòng Thi An Toàn Tuyệt Đối &amp; Chống Gian Lận
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    Kỳ thi: <strong>{currentExam?.title}</strong> • {currentExam?.durationMinutes} phút
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleToggleExamStatus}
                  className={`px-4 py-2 rounded-neu-sm text-xs font-black shadow-neu-flat transition flex items-center gap-1.5 ${
                    currentExam?.status === "published"
                      ? "bg-rose-600 hover:bg-rose-700 text-white"
                      : "bg-emerald-600 hover:bg-emerald-700 text-white"
                  }`}
                >
                  {currentExam?.status === "published" ? (
                    <>
                      <Lock className="w-3.5 h-3.5" />
                      <span>ĐÓNG PHÒNG THI</span>
                    </>
                  ) : (
                    <>
                      <Unlock className="w-3.5 h-3.5" />
                      <span>MỞ PHÒNG THI CHO HỌC SINH</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Các tùy chọn giám sát đa tầng */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
              <div className="p-3 rounded-neu-sm bg-white/70 border border-slate-200 flex items-center justify-between">
                <div>
                  <span className="font-bold text-slate-800 block">Khóa Toàn Màn Hình</span>
                  <span className="text-[10px] text-slate-500">Bắt buộc Fullscreen</span>
                </div>
                <input
                  type="checkbox"
                  checked={currentExam?.antiCheatConfig.enableFullscreen}
                  onChange={(e) => handleUpdateAntiCheat({ enableFullscreen: e.target.checked })}
                  className="w-4 h-4 accent-blue-600 cursor-pointer"
                />
              </div>

              <div className="p-3 rounded-neu-sm bg-white/70 border border-slate-200 flex items-center justify-between">
                <div>
                  <span className="font-bold text-slate-800 block">Chặn F12 &amp; Copy/Paste</span>
                  <span className="text-[10px] text-slate-500">Khóa DevTools &amp; chuột phải</span>
                </div>
                <input
                  type="checkbox"
                  checked={currentExam?.antiCheatConfig.blockCopyPaste}
                  onChange={(e) => handleUpdateAntiCheat({ blockCopyPaste: e.target.checked })}
                  className="w-4 h-4 accent-blue-600 cursor-pointer"
                />
              </div>

              {/* TÍNH NĂNG MỚI: THỜI GIAN ÂN HẠN (GRACE PERIOD) */}
              <div className="p-3 rounded-neu-sm bg-white/70 border border-slate-200 flex items-center justify-between">
                <div>
                  <span className="font-bold text-slate-800 block">Thời Gian Ân Hạn</span>
                  <span className="text-[10px] text-slate-500">Tránh bắt nhầm Win/Zalo</span>
                </div>
                <select
                  value={currentExam?.antiCheatConfig.gracePeriodSeconds !== undefined ? currentExam.antiCheatConfig.gracePeriodSeconds : 4}
                  onChange={(e) => handleUpdateAntiCheat({ gracePeriodSeconds: Number(e.target.value) })}
                  className="p-1 rounded bg-[#e6ecf5] font-black text-indigo-700 outline-none cursor-pointer text-xs"
                >
                  <option value={0}>Tắt (0s)</option>
                  <option value={3}>3 giây</option>
                  <option value={4}>4s (Chuẩn)</option>
                  <option value={5}>5 giây</option>
                </select>
              </div>

              <div className="p-3 rounded-neu-sm bg-white/70 border border-slate-200 flex items-center justify-between">
                <div>
                  <span className="font-bold text-slate-800 block">Giới Hạn Vi Phạm</span>
                  <span className="text-[10px] text-slate-500">Tự đình chỉ nếu vượt quá</span>
                </div>
                <select
                  value={currentExam?.antiCheatConfig.maxViolations || 3}
                  onChange={(e) => handleUpdateAntiCheat({ maxViolations: Number(e.target.value) })}
                  className="p-1 rounded bg-[#e6ecf5] font-black text-rose-700 outline-none cursor-pointer"
                >
                  <option value={1}>1 lần</option>
                  <option value={2}>2 lần</option>
                  <option value={3}>3 lần</option>
                  <option value={5}>5 lần</option>
                </select>
              </div>

              {/* TÍNH NĂNG MỚI: CHO PHÉP XIN MỞ KHÓA */}
              <div className="p-3 rounded-neu-sm bg-white/70 border border-slate-200 flex items-center justify-between">
                <div>
                  <span className="font-bold text-slate-800 block">Cho Phép Xin Mở Khóa</span>
                  <span className="text-[10px] text-slate-500">Gửi giải trình cứu bài thi</span>
                </div>
                <input
                  type="checkbox"
                  checked={currentExam?.antiCheatConfig.allowProctorUnlock !== false}
                  onChange={(e) => handleUpdateAntiCheat({ allowProctorUnlock: e.target.checked })}
                  className="w-4 h-4 accent-blue-600 cursor-pointer"
                />
              </div>

              {/* TÍNH NĂNG MỚI: WEBCAM GIÁM THỊ PIP */}
              <div className="p-3 rounded-neu-sm bg-white/70 border border-slate-200 flex items-center justify-between">
                <div>
                  <span className="font-bold text-slate-800 block">Camera Giám Thị</span>
                  <span className="text-[10px] text-slate-500">Bật webcam theo dõi</span>
                </div>
                <input
                  type="checkbox"
                  checked={!!currentExam?.antiCheatConfig.enableWebcamProctor}
                  onChange={(e) => handleUpdateAntiCheat({ enableWebcamProctor: e.target.checked })}
                  className="w-4 h-4 accent-indigo-600 cursor-pointer"
                />
              </div>

              {/* TÍNH NĂNG MỚI: ĐỀ THI SINH ĐỘNG THEO MA TRẬN */}
              <div className="p-3 rounded-neu-sm bg-white/70 border border-slate-200 flex items-center justify-between">
                <div>
                  <span className="font-bold text-slate-800 block">Đề Thi Sinh Động</span>
                  <span className="text-[10px] text-slate-500">Mỗi HS 1 đề ngẫu nhiên</span>
                </div>
                <input
                  type="checkbox"
                  checked={!!currentExam?.antiCheatConfig.dynamicPerStudentExam}
                  onChange={(e) => handleUpdateAntiCheat({ dynamicPerStudentExam: e.target.checked })}
                  className="w-4 h-4 accent-emerald-600 cursor-pointer"
                />
              </div>

              <div className="p-3 rounded-neu-sm bg-white/70 border border-slate-200 flex items-center justify-between">
                <div>
                  <span className="font-bold text-slate-800 block">Mật Mã Phòng Thi</span>
                  <span className="text-[10px] text-slate-500">Mở đề đúng giờ G</span>
                </div>
                <input
                  type="text"
                  value={currentExam?.examPassword || ""}
                  onChange={(e) => {
                    const pass = e.target.value;
                    const updated = exams.map((ex) =>
                      ex.id === currentExam?.id ? { ...ex, examPassword: pass } : ex
                    );
                    saveExams(updated);
                  }}
                  placeholder="Để trống nếu tự do"
                  className="w-24 p-1 rounded bg-[#e6ecf5] shadow-neu-inset font-mono text-center font-bold text-slate-800"
                />
              </div>
            </div>
          </div>

          {/* BẢNG THÔNG BÁO YÊU CẦU XIN MỞ KHÓA BÀI THI */}
          {pendingUnlockRequests.length > 0 && (
            <div className="p-4 rounded-neu bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-400 shadow-neu-flat space-y-3 animate-fade-in">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-600 animate-bounce" />
                  <h4 className="text-xs font-black uppercase text-amber-900 tracking-wider">
                    Có {pendingUnlockRequests.length} Thí Sinh Xin Giám Thị Mở Khóa Bài Thi
                  </h4>
                </div>
                <span className="text-[10px] font-bold text-amber-800 bg-amber-200/70 px-2.5 py-0.5 rounded-full border border-amber-300">
                  Cần phê duyệt ngay
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {pendingUnlockRequests.map((req) => (
                  <div
                    key={req.id}
                    className="p-3.5 rounded-neu-sm bg-white/95 border border-amber-200 shadow-neu-flat-xs flex flex-col justify-between gap-2.5"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-black text-slate-800 text-xs">
                          {req.studentName} ({req.className})
                        </span>
                        <span className="text-[10px] font-black text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                          Vi phạm: {req.violationCount} lần
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-600 font-medium italic bg-slate-50 p-1.5 rounded border border-slate-100">
                        "{req.reason}"
                      </p>
                      <span className="text-[10px] text-slate-400 block">
                        Gửi lúc: {new Date(req.timestamp).toLocaleTimeString("vi-VN")}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 pt-1 border-t border-slate-100">
                      <button
                        type="button"
                        onClick={() => handleApproveUnlock(req.id)}
                        className="flex-1 py-1.5 px-3 rounded-neu-sm bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-neu-flat flex items-center justify-center gap-1 cursor-pointer transition"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Duyệt Mở Khóa Cho Thi Tiếp</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleRejectUnlock(req.id)}
                        className="py-1.5 px-3 rounded-neu-sm bg-rose-100 hover:bg-rose-200 text-rose-700 text-xs font-bold shadow-neu-flat-xs flex items-center justify-center gap-1 cursor-pointer transition"
                      >
                        <XCircle className="w-3.5 h-3.5" />
                        <span>Bác Bỏ</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* BẢNG GIÁM THỊ SỐ THEO THỜI GIAN THỰC */}
          <div className="bg-[#e6ecf5] rounded-neu shadow-neu-flat border border-white/60 overflow-hidden space-y-3 p-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-slate-300/60">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-indigo-700" />
                <h3 className="text-xs font-black uppercase tracking-wider text-slate-800">
                  Bảng Giám Thị Số: Theo Dõi Thí Sinh Trực Tuyến
                </h3>
                <span className="text-xs font-bold text-slate-500">
                  ({currentExamSubmissions.length} bài thi ghi nhận)
                </span>
              </div>

              {/* Lọc theo lớp */}
              <div className="flex items-center gap-2 text-xs">
                <span className="font-bold text-slate-600">Lớp:</span>
                <select
                  value={proctoringClassFilter}
                  onChange={(e) => setProctoringClassFilter(e.target.value)}
                  className="px-2.5 py-1 rounded bg-[#e6ecf5] shadow-neu-inset font-bold text-slate-700 outline-none"
                >
                  <option value="all">Tất cả các lớp</option>
                  {classList.map((c) => (
                    <option key={c} value={c}>
                      Lớp {c}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="overflow-x-auto rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-200/60 text-slate-600 uppercase font-bold text-[10px]">
                  <tr>
                    <th className="py-2.5 px-3 text-center w-12">STT</th>
                    <th className="py-2.5 px-3">SBD / Mã HS</th>
                    <th className="py-2.5 px-3">Họ và Tên</th>
                    <th className="py-2.5 px-3 text-center">Lớp</th>
                    <th className="py-2.5 px-3 text-center">Mã Đề</th>
                    <th className="py-2.5 px-3 text-center">Thời Gian Nộp</th>
                    <th className="py-2.5 px-3 text-center">Lỗi Vi Phạm</th>
                    <th className="py-2.5 px-3 text-center">Tổng Điểm</th>
                    <th className="py-2.5 px-3 text-center">Trạng Thái</th>
                    <th className="py-2.5 px-3 text-right">Giám Thị Xử Lý</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-300/40">
                  {currentExamSubmissions.length === 0 ? (
                    <tr>
                      <td colSpan={10} className="py-8 text-center text-slate-500 font-medium">
                        Chưa có thí sinh nào vào phòng thi này.
                      </td>
                    </tr>
                  ) : (
                    currentExamSubmissions
                      .filter((s) => proctoringClassFilter === "all" || s.className === proctoringClassFilter)
                      .map((sub, idx) => (
                        <tr key={sub.id || idx} className="hover:bg-indigo-50/40 transition">
                          <td className="py-2 px-3 text-center text-slate-500 font-bold">{idx + 1}</td>
                          <td className="py-2 px-3 font-mono font-bold text-indigo-900">
                            {sub.candidateNumber || sub.studentId}
                          </td>
                          <td className="py-2 px-3 font-semibold text-slate-800">{sub.studentName}</td>
                          <td className="py-2 px-3 text-center font-bold text-blue-700">{sub.className}</td>
                          <td className="py-2 px-3 text-center font-mono font-bold">{sub.variantCode || "101"}</td>
                          <td className="py-2 px-3 text-center text-slate-600 font-mono">
                            {new Date(sub.submitTime).toLocaleTimeString("vi-VN")}
                          </td>
                          <td className="py-2 px-3 text-center">
                            {sub.violations.length > 0 ? (
                              <span className="px-2 py-0.5 rounded text-[10px] font-black bg-rose-100 text-rose-800">
                                ⚠️ {sub.violations.length} lần
                              </span>
                            ) : (
                              <span className="text-emerald-700 font-bold text-[11px]">0 lỗi</span>
                            )}
                          </td>
                          <td className="py-2 px-3 text-center font-black text-sm">
                            {sub.isDisqualified ? (
                              <span className="text-rose-700">0.0 đ</span>
                            ) : (
                              <span className="text-blue-800">{sub.totalScore.toFixed(2)} đ</span>
                            )}
                          </td>
                          <td className="py-2 px-3 text-center">
                            {sub.isDisqualified ? (
                              <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-rose-200 text-rose-900">
                                BỊ ĐÌNH CHỈ
                              </span>
                            ) : (
                              <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-emerald-100 text-emerald-800">
                                Hoàn Thành
                              </span>
                            )}
                          </td>
                          <td className="py-2 px-3 text-right">
                            <button
                              type="button"
                              onClick={() => handleResetStudentAttempt(sub.studentId, sub.studentName)}
                              className="px-2 py-1 rounded bg-[#e6ecf5] hover:bg-white text-[11px] font-bold text-blue-700 shadow-neu-flat-xs"
                              title="Cho phép thí sinh này thi lại do sự cố kỹ thuật"
                            >
                              Mở Thi Lại
                            </button>
                          </td>
                        </tr>
                      ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ===================================================================== */}
      {/* TRỤ CỘT 3: BÁO CÁO, CẢNH BÁO SƯ PHẠM & IN ẤN (SAU KHI THI) */}
      {/* ===================================================================== */}
      {activePillar === "analytics" && (
        <div className="space-y-6">
          {/* Bộ lọc & Thanh công cụ in ấn */}
          <div className="bg-[#e6ecf5] p-4 rounded-neu shadow-neu-flat border border-white/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs">
              <span className="font-bold text-slate-700">Báo cáo cho:</span>
              <select
                value={analyticsClassFilter}
                onChange={(e) => setAnalyticsClassFilter(e.target.value)}
                className="px-3 py-1.5 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset text-xs font-bold text-slate-800 outline-none"
              >
                <option value="all">Toàn Trường / Tất cả các lớp</option>
                {classList.map((c) => (
                  <option key={c} value={c}>
                    Lớp {c}
                  </option>
                ))}
              </select>
            </div>

            {/* Các nút in ấn & xuất file */}
            <div className="flex items-center gap-2 flex-wrap">
              <button
                type="button"
                onClick={() => setIsReportPrintOpen(true)}
                className="px-3.5 py-1.5 rounded-neu-sm bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-neu-flat flex items-center gap-1.5 cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>In Hồ Sơ Sư Phạm A4 (Sổ Điểm &amp; Biên Bản)</span>
              </button>

              <button
                type="button"
                onClick={handleExportCSV}
                className="px-3 py-1.5 rounded-neu-sm bg-[#e6ecf5] hover:bg-white text-slate-700 text-xs font-bold shadow-neu-flat-xs flex items-center gap-1.5 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-emerald-600" />
                <span>Xuất File Excel (.csv)</span>
              </button>
            </div>
          </div>

          {/* 4 Thẻ KPI Phổ Điểm */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="p-4 rounded-neu bg-[#e6ecf5] shadow-neu-flat border border-white/60 text-center space-y-1">
              <span className="text-[10px] font-bold text-slate-500 uppercase">Thí Sinh Dự Thi</span>
              <p className="text-2xl font-black text-slate-800">{examAnalyticsReport.totalParticipants} em</p>
              <span className="text-[10px] text-slate-400">
                Hoàn thành: {examAnalyticsReport.submittedCount}
              </span>
            </div>

            <div className="p-4 rounded-neu bg-[#e6ecf5] shadow-neu-flat border border-white/60 text-center space-y-1">
              <span className="text-[10px] font-bold text-slate-500 uppercase">Điểm Trung Bình</span>
              <p className="text-2xl font-black text-blue-700">{examAnalyticsReport.averageScore} đ</p>
              <span className="text-[10px] text-slate-400">
                Cao: {examAnalyticsReport.highestScore} • Thấp: {examAnalyticsReport.lowestScore}
              </span>
            </div>

            <div className="p-4 rounded-neu bg-[#e6ecf5] shadow-neu-flat border border-white/60 text-center space-y-1">
              <span className="text-[10px] font-bold text-slate-500 uppercase">Đạt Chuẩn (&ge;5.0đ)</span>
              <p className="text-2xl font-black text-emerald-600">{examAnalyticsReport.passRate}%</p>
              <span className="text-[10px] text-slate-400">
                Mục tiêu tốt nghiệp THPT
              </span>
            </div>

            <div className="p-4 rounded-neu bg-[#e6ecf5] shadow-neu-flat border border-white/60 text-center space-y-1">
              <span className="text-[10px] font-bold text-slate-500 uppercase">Học Sinh Giỏi (&ge;8.0đ)</span>
              <p className="text-2xl font-black text-indigo-700">{examAnalyticsReport.excellentRate}%</p>
              <span className="text-[10px] text-slate-400">
                Phân hóa xuất sắc
              </span>
            </div>
          </div>

          {/* HỘP CẢNH BÁO SƯ PHẠM & CÂU HỎI KHÓ (PEDAGOGICAL INSIGHTS) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* CẢNH BÁO HỌC SINH NGUY CƠ */}
            <div className="bg-[#e6ecf5] p-5 rounded-neu shadow-neu-flat border border-white/60 space-y-3">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-300/60">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <h3 className="text-xs font-black uppercase tracking-wider text-slate-800">
                  Cảnh Báo Sớm: Học Sinh Có Nguy Cơ ({(examAnalyticsReport.atRiskStudents || []).length} em)
                </h3>
              </div>

              <div className="max-h-60 overflow-y-auto space-y-2 text-xs">
                {(examAnalyticsReport.atRiskStudents || []).length === 0 ? (
                  <div className="p-4 text-center text-slate-500 italic">
                    🎉 Không có học sinh nào bị cảnh báo nguy cơ trong đợt thi này.
                  </div>
                ) : (
                  (examAnalyticsReport.atRiskStudents || []).map((st, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-neu-sm bg-white/70 border border-slate-200 flex items-center justify-between gap-2"
                    >
                      <div>
                        <p className="font-bold text-slate-800">
                          {st.studentName} <span className="font-normal text-slate-500">({st.className})</span>
                        </p>
                        <p className="text-[10px] font-semibold text-rose-700">{st.reasonLabel}</p>
                      </div>
                      <span className="font-black text-sm text-rose-800">{st.score.toFixed(1)} đ</span>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* PHÂN TÍCH CÂU HỎI KHÓ NHẤT (ITEM DIFFICULTY) */}
            <div className="bg-[#e6ecf5] p-5 rounded-neu shadow-neu-flat border border-white/60 space-y-3">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-300/60">
                <Award className="w-4 h-4 text-blue-600" />
                <h3 className="text-xs font-black uppercase tracking-wider text-slate-800">
                  Phân Tích Câu Hỏi Có Tỷ Lệ Sai Cao Nhất (Cần Chữa Bài)
                </h3>
              </div>

              <div className="max-h-60 overflow-y-auto space-y-2 text-xs">
                {examAnalyticsReport.itemAnalysis.length === 0 ? (
                  <div className="p-4 text-center text-slate-500 italic">
                    Chưa có đủ dữ liệu bài làm để phân tích câu hỏi.
                  </div>
                ) : (
                  examAnalyticsReport.itemAnalysis.slice(0, 5).map((item, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-neu-sm bg-white/70 border border-slate-200 flex items-start justify-between gap-3"
                    >
                      <div className="space-y-0.5">
                        <p className="font-bold text-slate-800">
                          Câu {item.questionIndex}: <span className="font-normal text-slate-600">{item.content.slice(0, 70)}...</span>
                        </p>
                        <p className="text-[10px] text-slate-400">
                          Mức độ: <strong>{item.difficulty}</strong> • Chủ đề: <strong>{item.topicName}</strong>
                        </p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <span className="px-2 py-0.5 rounded font-black text-xs bg-rose-100 text-rose-800">
                          {item.wrongRate}% Sai
                        </span>
                        <p className="text-[10px] text-slate-400 mt-0.5">
                          {item.correctCount}/{item.totalAttempts} đúng
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* BẢNG ĐIỂM CHI TIẾT TỪNG THÍ SINH */}
          <div className="bg-[#e6ecf5] rounded-neu shadow-neu-flat border border-white/60 p-4 space-y-3">
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-800">
              Bảng Điểm Chi Tiết Thí Sinh
            </h3>

            <div className="overflow-x-auto rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-200/60 text-slate-600 uppercase font-bold text-[10px]">
                  <tr>
                    <th className="py-2.5 px-3 text-center w-12">STT</th>
                    <th className="py-2.5 px-3">SBD</th>
                    <th className="py-2.5 px-3">Họ và Tên</th>
                    <th className="py-2.5 px-3 text-center">Lớp</th>
                    <th className="py-2.5 px-3 text-center">Mã Đề</th>
                    <th className="py-2.5 px-3 text-center">Phần I (6đ)</th>
                    <th className="py-2.5 px-3 text-center">Phần II (4đ)</th>
                    <th className="py-2.5 px-3 text-center">Tổng Điểm</th>
                    <th className="py-2.5 px-3 text-center">Vi Phạm</th>
                    <th className="py-2.5 px-3 text-center">Trạng Thái</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-300/40">
                  {currentExamSubmissions.length === 0 ? (
                    <tr>
                      <td colSpan={10} className="py-8 text-center text-slate-500 font-medium">
                        Chưa có dữ liệu bài nộp.
                      </td>
                    </tr>
                  ) : (
                    currentExamSubmissions
                      .filter((s) => analyticsClassFilter === "all" || s.className === analyticsClassFilter)
                      .map((sub, idx) => (
                        <tr key={sub.id || idx} className="hover:bg-blue-50/40">
                          <td className="py-2 px-3 text-center text-slate-500 font-bold">{idx + 1}</td>
                          <td className="py-2 px-3 font-mono font-bold text-slate-800">
                            {sub.candidateNumber || sub.studentId}
                          </td>
                          <td className="py-2 px-3 font-semibold text-slate-800">{sub.studentName}</td>
                          <td className="py-2 px-3 text-center font-bold text-blue-700">{sub.className}</td>
                          <td className="py-2 px-3 text-center font-mono font-bold">{sub.variantCode || "101"}</td>
                          <td className="py-2 px-3 text-center">{sub.mcScore.toFixed(2)}</td>
                          <td className="py-2 px-3 text-center">{sub.tfScore.toFixed(2)}</td>
                          <td className="py-2 px-3 text-center font-black text-sm text-blue-900">
                            {sub.isDisqualified ? "0.0 đ" : `${sub.totalScore.toFixed(2)} đ`}
                          </td>
                          <td className="py-2 px-3 text-center">
                            {sub.violations.length > 0 ? (
                              <span className="text-rose-700 font-bold">{sub.violations.length} lần</span>
                            ) : (
                              <span className="text-slate-400">0</span>
                            )}
                          </td>
                          <td className="py-2 px-3 text-center">
                            {sub.isDisqualified ? (
                              <span className="text-rose-800 font-bold">Đình chỉ</span>
                            ) : (
                              <span className="text-emerald-800 font-bold">Hoàn thành</span>
                            )}
                          </td>
                        </tr>
                      ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ===================================================================== */}
      {/* CÁC MODAL HỖ TRỢ NGHIỆP VỤ */}
      {/* ===================================================================== */}

      {/* 1. Modal in đề thi A4 & Phiếu soi đáp án */}
      {isPaperPrintOpen && currentExam && (
        <PaperExamPrintModal
          isOpen={isPaperPrintOpen}
          onClose={() => setIsPaperPrintOpen(false)}
          exam={{ ...currentExam, questions: workingQuestions }}
        />
      )}

      {/* 2. Modal quản trị lớp & danh sách thí sinh */}
      {isClassRosterOpen && (
        <ClassRosterModal
          isOpen={isClassRosterOpen}
          onClose={() => setIsClassRosterOpen(false)}
          availableClasses={classList}
          onAddClass={handleAddClass}
        />
      )}

      {/* 3. Modal rà soát & chỉnh sửa câu hỏi */}
      {isQuestionEditOpen && editingQuestion && (
        <QuestionEditModal
          isOpen={isQuestionEditOpen}
          onClose={() => {
            setIsQuestionEditOpen(false);
            setEditingQuestion(null);
          }}
          question={editingQuestion}
          onSave={handleSaveQuestionEdit}
        />
      )}

      {/* 4. Modal in ấn báo cáo sư phạm chuẩn A4 */}
      {isReportPrintOpen && currentExam && (
        <ExamReportPrintModal
          isOpen={isReportPrintOpen}
          onClose={() => setIsReportPrintOpen(false)}
          exam={currentExam}
          submissions={currentExamSubmissions}
          report={examAnalyticsReport}
          selectedClass={analyticsClassFilter}
        />
      )}
    </div>
  );
};
