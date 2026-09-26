"use client";

import React, { useState, useEffect, useMemo } from "react";
import {
  ExamDefinition,
  ExamSubmission,
  ExamStatus,
  ExamStatsReport,
  ExamMatrixConfig,
} from "@/types/examManagement";
import { Subject, Question, DifficultyLevel } from "@/types";
import { parseExamRawText, extractTextFromFile } from "@/lib/examFileParser";
import { generateExamFromMatrix } from "@/lib/matrixExamGenerator";
import { soundManager } from "@/lib/audioEffects";
import { LatexRenderer } from "@/components/UI/LatexRenderer";
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
} from "lucide-react";

interface ExamManagementViewProps {
  subjects: Subject[];
  questions: Question[];
  allClasses: string[];
}

export const ExamManagementView: React.FC<ExamManagementViewProps> = ({
  subjects,
  questions,
  allClasses,
}) => {
  // 1. Tab hiện tại trong module Khảo thí
  const [activeSubTab, setActiveSubTab] = useState<"list" | "create_file" | "create_matrix" | "report">("list");

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
    // Dữ liệu mẫu kỳ thi định kỳ đầu tiên
    return [
      {
        id: "exam-sample-50p-01",
        title: "Kiểm tra định kỳ Giữa Học kỳ I - Môn Tin học 12 (50 phút)",
        subjectId: "tin-hoc-12",
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
        questions: questions.slice(0, 28).map((q, idx) => ({
          ...q,
          examIndex: idx + 1,
          part: idx < 24 ? "mc" : "tf",
        })),
        createdAt: Date.now() - 86400000 * 2,
        updatedAt: Date.now() - 86400000 * 2,
        publishedAt: Date.now() - 86400000 * 2,
      },
    ];
  });

  // 3. Danh sách bài nộp của học sinh
  const [submissions, setSubmissions] = useState<ExamSubmission[]>(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("thpt_admin_exam_submissions");
        if (saved) return JSON.parse(saved);
      } catch {
        // Ignored
      }
    }
    return [];
  });

  // Lưu danh sách đề thi vào localStorage
  useEffect(() => {
    try {
      localStorage.setItem("thpt_admin_exams", JSON.stringify(exams));
    } catch {
      // Ignored
    }
  }, [exams]);

  // Lưu bài nộp vào localStorage
  useEffect(() => {
    try {
      localStorage.setItem("thpt_admin_exam_submissions", JSON.stringify(submissions));
    } catch {
      // Ignored
    }
  }, [submissions]);

  // Kỳ thi đang được chọn để xem báo cáo
  const [selectedExamId, setSelectedExamId] = useState<string>(exams[0]?.id || "");

  // 4. Form States cho tạo đề từ File nguồn
  const [fileTitle, setFileTitle] = useState("Bài kiểm tra 45 phút - Tin học 12");
  const [fileDuration, setFileDuration] = useState(45);
  const [fileTargetClass, setFileTargetClass] = useState("all");
  const [fileExamPassword, setFileExamPassword] = useState("");
  const [fileMaxViolations, setFileMaxViolations] = useState(3);
  const [rawTextContent, setRawTextContent] = useState("");
  const [parsedQuestions, setParsedQuestions] = useState<any[]>([]);
  const [parseWarnings, setParseWarnings] = useState<string[]>([]);
  const [isParsingFile, setIsParsingFile] = useState(false);

  // 5. Form States cho tạo đề theo Ma trận 4 mức độ
  const [matrixTitle, setMatrixTitle] = useState("Đề kiểm tra Ma trận 4 mức độ - Tin học 12");
  const [matrixDuration, setMatrixDuration] = useState(50);
  const [matrixTargetClass, setMatrixTargetClass] = useState("all");
  const [matrixMaxViolations, setMatrixMaxViolations] = useState(3);
  const [selectedTopicIds, setSelectedTopicIds] = useState<string[]>([
    "tin-lap-trinh-python",
    "tin-ai-tri-tue-nhan-tao",
    "tin-thiet-bi-giao-thuc-mang",
  ]);

  // Ma trận số câu MC Phần 1
  const [mcLevels, setMcLevels] = useState({
    NhanBiet: 8,
    ThongHieu: 8,
    VanDung: 6,
    VanDungCao: 2,
  });

  // Ma trận số câu TF Phần 2
  const [tfLevels, setTfLevels] = useState({
    NhanBiet: 1,
    ThongHieu: 1,
    VanDung: 1,
    VanDungCao: 1,
  });

  // Tất cả chủ đề có sẵn
  const allTopics = useMemo(() => {
    const list: { id: string; name: string }[] = [];
    subjects.forEach((s) => {
      s.topics.forEach((t) => {
        list.push({ id: t.id, name: `${t.name} (${s.name})` });
      });
    });
    return list;
  }, [subjects]);

  // Xử lý nạp file Word (.docx) hoặc Text
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    soundManager.playClick();
    setIsParsingFile(true);
    try {
      const text = await extractTextFromFile(file);
      setRawTextContent(text);
      const parsed = parseExamRawText(text);
      setParsedQuestions(parsed.questions);
      setParseWarnings(parsed.warnings);
      if (file.name) {
        setFileTitle(file.name.replace(/\.[^/.]+$/, ""));
      }
    } catch (err) {
      alert("Lỗi khi đọc file Word/Text: " + err);
    } finally {
      setIsParsingFile(false);
    }
  };

  // Xử lý phân tích từ văn bản dán vào textarea
  const handleParsePastedText = () => {
    if (!rawTextContent.trim()) return;
    soundManager.playClick();
    const parsed = parseExamRawText(rawTextContent);
    setParsedQuestions(parsed.questions);
    setParseWarnings(parsed.warnings);
  };

  // Lưu đề thi từ File nguồn
  const handleSaveFileExam = (status: ExamStatus = "published") => {
    if (parsedQuestions.length === 0) {
      alert("Vui lòng tải file hoặc dán nội dung đề thi trước khi lưu!");
      return;
    }

    soundManager.playSuccess();
    const newExam: ExamDefinition = {
      id: `exam-file-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      title: fileTitle || "Bài kiểm tra nạp từ file",
      subjectId: "tin-hoc-12",
      durationMinutes: fileDuration,
      targetClasses: fileTargetClass === "all" ? ["all"] : [fileTargetClass],
      status,
      sourceType: "uploaded_file",
      examPassword: fileExamPassword || undefined,
      antiCheatConfig: {
        enableFullscreen: true,
        maxViolations: fileMaxViolations,
        blockCopyPaste: true,
        autoSubmitOnTimeout: true,
      },
      totalQuestions: parsedQuestions.length,
      mcCount: parsedQuestions.filter((q) => q.part === "mc").length,
      tfCount: parsedQuestions.filter((q) => q.part === "tf").length,
      questions: parsedQuestions,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      publishedAt: status === "published" ? Date.now() : undefined,
    };

    setExams([newExam, ...exams]);
    setActiveSubTab("list");
    setSelectedExamId(newExam.id);
  };

  // Lưu đề thi từ Ma trận 4 mức độ
  const handleGenerateAndSaveMatrixExam = (status: ExamStatus = "published") => {
    soundManager.playSuccess();
    const matrixConfig: ExamMatrixConfig = {
      selectedTopicIds,
      mcCountByLevel: mcLevels,
      tfCountByLevel: tfLevels,
      shuffleQuestions: true,
      shuffleOptions: true,
    };

    const res = generateExamFromMatrix(questions, matrixConfig);

    if (res.questions.length === 0) {
      alert("Không tìm thấy câu hỏi phù hợp với ma trận đã chọn!");
      return;
    }

    const newExam: ExamDefinition = {
      id: `exam-mat-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      title: matrixTitle || "Đề kiểm tra chuẩn ma trận",
      subjectId: "tin-hoc-12",
      durationMinutes: matrixDuration,
      targetClasses: matrixTargetClass === "all" ? ["all"] : [matrixTargetClass],
      status,
      sourceType: "matrix_bank",
      antiCheatConfig: {
        enableFullscreen: true,
        maxViolations: matrixMaxViolations,
        blockCopyPaste: true,
        autoSubmitOnTimeout: true,
      },
      matrixConfig,
      totalQuestions: res.questions.length,
      mcCount: res.totalMc,
      tfCount: res.totalTf,
      questions: res.questions,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      publishedAt: status === "published" ? Date.now() : undefined,
    };

    setExams([newExam, ...exams]);
    setActiveSubTab("list");
    setSelectedExamId(newExam.id);
  };

  // Đổi trạng thái bài thi: Xuất bản <-> Đóng đề
  const handleToggleExamStatus = (examId: string) => {
    soundManager.playClick();
    setExams((prev) =>
      prev.map((ex) => {
        if (ex.id !== examId) return ex;
        const nextStatus: ExamStatus = ex.status === "published" ? "closed" : "published";
        return {
          ...ex,
          status: nextStatus,
          publishedAt: nextStatus === "published" ? Date.now() : ex.publishedAt,
          closedAt: nextStatus === "closed" ? Date.now() : undefined,
          updatedAt: Date.now(),
        };
      })
    );
  };

  // Xóa đề thi
  const handleDeleteExam = (examId: string) => {
    if (!confirm("Thầy cô có chắc chắn muốn xóa bài kiểm tra này không?")) return;
    soundManager.playClick();
    setExams((prev) => prev.filter((e) => e.id !== examId));
  };

  // Kỳ thi đang được chọn báo cáo
  const currentExam = exams.find((e) => e.id === selectedExamId) || exams[0];
  const currentSubmissions = useMemo(() => {
    if (!currentExam) return [];
    return submissions.filter((s) => s.examId === currentExam.id);
  }, [submissions, currentExam]);

  // Thống kê & Phổ điểm của kỳ thi
  const reportStats: ExamStatsReport = useMemo(() => {
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
      };
    }

    const subs = currentSubmissions;
    const total = subs.length;
    const disqualified = subs.filter((s) => s.isDisqualified).length;

    let sum = 0;
    let highest = 0;
    let lowest = 10;
    let passCount = 0;
    let excellentCount = 0;

    const dist = { under5: 0, from5to65: 0, from65to8: 0, from8to10: 0 };

    subs.forEach((s) => {
      const sc = s.totalScore;
      sum += sc;
      if (sc > highest) highest = sc;
      if (sc < lowest) lowest = sc;
      if (sc >= 5.0) passCount++;
      if (sc >= 8.0) excellentCount++;

      if (sc < 5.0) dist.under5++;
      else if (sc < 6.5) dist.from5to65++;
      else if (sc < 8.0) dist.from65to8++;
      else dist.from8to10++;
    });

    const itemAnalysis = currentExam.questions.map((q) => {
      let correct = 0;
      subs.forEach((s) => {
        const d = s.details.find((it) => it.questionId === q.id);
        if (d && d.isCorrect) correct++;
      });

      return {
        questionIndex: q.examIndex,
        questionId: q.id,
        content: q.content,
        type: (q.part === "mc" ? "multiple_choice" : "true_false") as any,
        correctCount: correct,
        accuracyRate: total > 0 ? Math.round((correct / total) * 100) : 0,
        topicName: q.topicName,
        difficulty: (q.difficulty as DifficultyLevel) || "ThongHieu",
      };
    });

    return {
      examId: currentExam.id,
      examTitle: currentExam.title,
      totalParticipants: total,
      submittedCount: total - disqualified,
      disqualifiedCount: disqualified,
      averageScore: total > 0 ? Math.round((sum / total) * 100) / 100 : 0,
      highestScore: total > 0 ? highest : 0,
      lowestScore: total > 0 ? lowest : 0,
      passRate: total > 0 ? Math.round((passCount / total) * 100) : 0,
      excellentRate: total > 0 ? Math.round((excellentCount / total) * 100) : 0,
      scoreDistribution: dist,
      itemAnalysis,
    };
  }, [currentExam, currentSubmissions]);

  // Xuất file CSV / Excel danh sách điểm
  const handleExportCsv = () => {
    if (currentSubmissions.length === 0) {
      alert("Chưa có học sinh nộp bài trong kỳ thi này!");
      return;
    }

    soundManager.playClick();
    let csv = "\uFEFFMã bài thi,Tên bài thi,Tên học sinh,Lớp,Điểm Phần 1,Điểm Phần 2,Tổng điểm,Số lần vi phạm,Trạng thái\n";
    currentSubmissions.forEach((s) => {
      csv += `"${s.examId}","${s.examTitle}","${s.studentName}","${s.className}",${s.mcScore},${s.tfScore},${s.totalScore},${s.tabSwitchCount},"${s.isDisqualified ? "Đình chỉ" : "Hợp lệ"}"\n`;
    });

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `BangDiem_${currentExam?.title.slice(0, 20)}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* 1. Header & Tabs Navigation */}
      <div className="bg-[#e6ecf5] dark:bg-[#1a1f26] p-4 rounded-2xl shadow-neu-flat border border-white/60 dark:border-white/5 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-base sm:text-lg font-black text-slate-800 dark:text-slate-100 flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-blue-600" />
            <span>Hệ Thống Khảo Thí &amp; Kiểm Tra Chống Gian Lận</span>
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Tạo đề từ file Word/PDF, sinh đề ma trận 4 mức độ, giám sát chống chuyển tab, tự động chấm điểm Bộ GD&amp;ĐT
          </p>
        </div>

        {/* Tab Switch Buttons */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-neu-sm bg-[#e6ecf5] dark:bg-[#12151a] shadow-neu-inset-sm">
          <button
            type="button"
            onClick={() => setActiveSubTab("list")}
            className={`px-3 py-1.5 rounded-neu-sm text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
              activeSubTab === "list"
                ? "bg-blue-600 text-white shadow-neu-blue"
                : "text-slate-600 dark:text-slate-400 hover:text-blue-600"
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Danh sách đề thi ({exams.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveSubTab("create_file")}
            className={`px-3 py-1.5 rounded-neu-sm text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
              activeSubTab === "create_file"
                ? "bg-blue-600 text-white shadow-neu-blue"
                : "text-slate-600 dark:text-slate-400 hover:text-blue-600"
            }`}
          >
            <Upload className="w-3.5 h-3.5" />
            <span>Thêm từ file Word / PDF</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveSubTab("create_matrix")}
            className={`px-3 py-1.5 rounded-neu-sm text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
              activeSubTab === "create_matrix"
                ? "bg-blue-600 text-white shadow-neu-blue"
                : "text-slate-600 dark:text-slate-400 hover:text-blue-600"
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>Sinh đề Ma trận 4 mức độ</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveSubTab("report")}
            className={`px-3 py-1.5 rounded-neu-sm text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
              activeSubTab === "report"
                ? "bg-blue-600 text-white shadow-neu-blue"
                : "text-slate-600 dark:text-slate-400 hover:text-blue-600"
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Báo cáo &amp; Phổ điểm</span>
          </button>
        </div>
      </div>

      {/* 2. TAB 1: DANH SÁCH CÁC BÀI KIỂM TRA ĐÃ TẠO */}
      {activeSubTab === "list" && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {exams.map((ex) => (
              <div
                key={ex.id}
                className="p-4 rounded-2xl bg-[#e6ecf5] dark:bg-[#1a1f26] shadow-neu-flat border border-white/60 dark:border-white/5 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`text-[10px] font-black px-2.5 py-0.5 rounded-full border ${
                        ex.status === "published"
                          ? "bg-emerald-100 text-emerald-800 border-emerald-300 dark:bg-emerald-950/80 dark:text-emerald-300"
                          : ex.status === "closed"
                          ? "bg-slate-200 text-slate-700 border-slate-300 dark:bg-slate-800 dark:text-slate-400"
                          : "bg-amber-100 text-amber-800 border-amber-300"
                      }`}
                    >
                      {ex.status === "published" ? "🟢 Đang mở thi" : ex.status === "closed" ? "🔴 Đã đóng" : "🟡 Bản nháp"}
                    </span>

                    <span className="text-[10px] font-bold text-slate-500">
                      {ex.sourceType === "uploaded_file" ? "Nạp từ File" : "Sinh từ Ma trận"}
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-800 dark:text-slate-100 text-sm line-clamp-2">
                    {ex.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-blue-600" />
                      {ex.durationMinutes} phút
                    </span>
                    <span>•</span>
                    <span>{ex.totalQuestions} câu ({ex.mcCount} MC + {ex.tfCount} TF)</span>
                    <span>•</span>
                    <span>Lớp: {ex.targetClasses.includes("all") ? "Toàn khối" : ex.targetClasses.join(", ")}</span>
                  </div>

                  {/* Chống gian lận badges */}
                  <div className="flex items-center gap-1.5 text-[10px] text-slate-500 pt-1">
                    <span className="px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-semibold">
                      Toàn màn hình
                    </span>
                    <span className="px-1.5 py-0.5 rounded bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300 font-semibold">
                      Max {ex.antiCheatConfig.maxViolations} lần vi phạm
                    </span>
                    <span className="px-1.5 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 font-semibold">
                      Khóa Copy/Paste
                    </span>
                  </div>
                </div>

                {/* Các nút hành động */}
                <div className="pt-2 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => handleToggleExamStatus(ex.id)}
                      className={`p-1.5 rounded-neu-sm text-xs font-bold transition flex items-center gap-1 ${
                        ex.status === "published"
                          ? "bg-amber-100 text-amber-800 hover:bg-amber-200 border border-amber-300"
                          : "bg-emerald-100 text-emerald-800 hover:bg-emerald-200 border border-emerald-300"
                      }`}
                      title={ex.status === "published" ? "Bấm để đóng bài thi" : "Bấm để mở bài thi cho học sinh"}
                    >
                      {ex.status === "published" ? <Lock className="w-3.5 h-3.5" /> : <Unlock className="w-3.5 h-3.5" />}
                      <span className="text-[10px]">{ex.status === "published" ? "Đóng thi" : "Mở thi"}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setSelectedExamId(ex.id);
                        setActiveSubTab("report");
                      }}
                      className="p-1.5 rounded-neu-sm bg-[#e6ecf5] dark:bg-[#202734] text-blue-700 dark:text-blue-300 hover:bg-blue-50 text-xs font-bold shadow-neu-flat-xs flex items-center gap-1 border border-blue-300/40"
                      title="Xem kết quả & phổ điểm bài thi này"
                    >
                      <BarChart3 className="w-3.5 h-3.5" />
                      <span className="text-[10px]">Phổ điểm</span>
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleDeleteExam(ex.id)}
                    className="p-1.5 rounded-neu-sm text-rose-600 hover:bg-rose-100 dark:hover:bg-rose-950 transition"
                    title="Xóa bài thi này"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. TAB 2: TẠO ĐỀ TỪ FILE NGUỒN (WORD / PDF / TEXT) */}
      {activeSubTab === "create_file" && (
        <div className="bg-[#e6ecf5] dark:bg-[#1a1f26] p-5 rounded-2xl shadow-neu-flat border border-white/60 dark:border-white/5 space-y-5">
          <div className="border-b border-slate-200/80 dark:border-slate-800 pb-3">
            <h3 className="font-bold text-slate-800 dark:text-slate-100 text-sm sm:text-base flex items-center gap-2">
              <Upload className="w-4 h-4 text-blue-600" />
              <span>Nạp Đề Kiểm Tra Từ File Word (.docx) hoặc Văn Bản Thuần</span>
            </h3>
            <p className="text-xs text-slate-500 pt-0.5">
              Hệ thống tự động nhận dạng cấu trúc câu hỏi Phần 1 (A, B, C, D) và Phần 2 (Ý a, b, c, d Đúng/Sai) kèm đáp án
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                Tên bài kiểm tra
              </label>
              <input
                type="text"
                value={fileTitle}
                onChange={(e) => setFileTitle(e.target.value)}
                placeholder="VD: Kiểm tra định kỳ 45 phút - Tin học 12"
                className="w-full px-3 py-2 rounded-neu-sm bg-[#e6ecf5] dark:bg-[#12151a] text-xs font-medium border border-slate-300 dark:border-slate-700 shadow-neu-inset-sm focus:outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                Thời gian làm bài (phút)
              </label>
              <input
                type="number"
                min="5"
                max="180"
                value={fileDuration}
                onChange={(e) => setFileDuration(parseInt(e.target.value, 10) || 45)}
                className="w-full px-3 py-2 rounded-neu-sm bg-[#e6ecf5] dark:bg-[#12151a] text-xs font-medium border border-slate-300 dark:border-slate-700 shadow-neu-inset-sm focus:outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                Đối tượng lớp tham gia
              </label>
              <select
                value={fileTargetClass}
                onChange={(e) => setFileTargetClass(e.target.value)}
                className="w-full px-3 py-2 rounded-neu-sm bg-[#e6ecf5] dark:bg-[#12151a] text-xs font-medium border border-slate-300 dark:border-slate-700 shadow-neu-inset-sm focus:outline-none"
              >
                <option value="all">Tất cả các lớp (Toàn trường)</option>
                {allClasses.map((cls) => (
                  <option key={cls} value={cls}>
                    Chỉ dành cho lớp {cls}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Thiết lập Quy chế Chống gian lận */}
          <div className="p-3.5 rounded-neu-sm bg-[#e6ecf5] dark:bg-[#12151a] shadow-neu-inset-sm space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-blue-700 dark:text-blue-400">
              <ShieldAlert className="w-4 h-4" />
              <span>Cấu hình giám sát phòng thi chống gian lận:</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600 dark:text-slate-300">
              <label className="flex items-center gap-2">
                <input type="checkbox" checked disabled className="rounded text-blue-600" />
                <span>Bắt buộc Toàn màn hình</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" checked disabled className="rounded text-blue-600" />
                <span>Khóa chuột phải, cấm Copy/Paste/F12</span>
              </label>
              <div className="flex items-center gap-2">
                <span>Số lần chuyển tab tối đa:</span>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={fileMaxViolations}
                  onChange={(e) => setFileMaxViolations(parseInt(e.target.value, 10) || 3)}
                  className="w-14 px-2 py-0.5 rounded bg-white dark:bg-slate-800 text-xs font-bold border border-slate-300"
                />
              </div>
            </div>
          </div>

          {/* Kéo thả File hoặc Dán nội dung */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                1. Tải file Word (.docx) hoặc dán văn bản đề thi:
              </span>
              <label className="px-3 py-1.5 rounded-neu-sm bg-blue-600 text-white text-xs font-bold shadow-neu-blue active:shadow-neu-blue-pressed flex items-center gap-1.5 cursor-pointer hover:bg-blue-700">
                <Upload className="w-3.5 h-3.5" />
                <span>Chọn File Word (.docx)</span>
                <input
                  type="file"
                  accept=".docx,.txt"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
            </div>

            <textarea
              rows={8}
              value={rawTextContent}
              onChange={(e) => setRawTextContent(e.target.value)}
              placeholder="Dán nội dung đề thi vào đây nếu không tải file (Ví dụ: Câu 1: ... A. ... B. ... C. ... D. ... Đáp án: A)"
              className="w-full p-3 rounded-neu-sm bg-[#e6ecf5] dark:bg-[#12151a] text-xs font-mono border border-slate-300 dark:border-slate-700 shadow-neu-inset-sm focus:outline-none"
            />

            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={handleParsePastedText}
                className="px-4 py-2 rounded-neu-sm bg-[#e6ecf5] dark:bg-[#202734] text-blue-700 dark:text-blue-300 text-xs font-bold shadow-neu-flat-xs active:shadow-neu-inset flex items-center gap-1.5 border border-blue-400/40"
              >
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span>Phân tích cú pháp văn bản vừa dán</span>
              </button>

              <span className="text-xs text-slate-500 font-medium">
                {parsedQuestions.length > 0 && `Đã bóc tách thành công: ${parsedQuestions.length} câu hỏi`}
              </span>
            </div>
          </div>

          {/* Cảnh báo phân tích cú pháp nếu có */}
          {parseWarnings.length > 0 && (
            <div className="p-3 rounded-neu-sm bg-amber-50 dark:bg-amber-950/60 border border-amber-300 text-xs text-amber-800 dark:text-amber-200 space-y-1">
              <div className="font-bold flex items-center gap-1">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <span>Các lưu ý trong quá trình bóc tách đề:</span>
              </div>
              <ul className="list-disc pl-5 space-y-0.5">
                {parseWarnings.map((w, idx) => (
                  <li key={idx}>{w}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Xem trước câu hỏi đã bóc tách */}
          {parsedQuestions.length > 0 && (
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300">
                2. Xem trước &amp; kiểm tra các câu hỏi vừa bóc tách ({parsedQuestions.length} câu):
              </h4>
              <div className="max-h-80 overflow-y-auto space-y-2 p-3 rounded-neu-sm bg-[#e6ecf5] dark:bg-[#12151a] shadow-neu-inset-sm">
                {parsedQuestions.map((q, idx) => (
                  <div
                    key={q.id || idx}
                    className="p-3 rounded-neu-sm bg-[#e6ecf5] dark:bg-[#1a1f26] shadow-neu-flat-xs space-y-2 text-xs"
                  >
                    <div className="flex items-center justify-between font-bold">
                      <span className="text-blue-600 dark:text-blue-400">
                        Câu {idx + 1} ({q.part === "mc" ? "Trắc nghiệm 4 lựa chọn" : "Đúng/Sai"}):
                      </span>
                      <span className="text-slate-500">
                        Đáp án chuẩn: <strong>{q.part === "mc" ? q.correctAnswer : "Theo từng ý"}</strong>
                      </span>
                    </div>
                    <p className="font-medium text-slate-800 dark:text-slate-200">{q.content}</p>
                  </div>
                ))}
              </div>

              {/* Nút Lưu đề thi */}
              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => handleSaveFileExam("draft")}
                  className="px-4 py-2.5 rounded-neu-sm bg-[#e6ecf5] dark:bg-[#202734] text-slate-700 dark:text-slate-300 text-xs font-bold shadow-neu-flat-xs active:shadow-neu-inset border border-slate-300"
                >
                  Lưu bản nháp
                </button>
                <button
                  type="button"
                  onClick={() => handleSaveFileExam("published")}
                  className="px-5 py-2.5 rounded-neu-sm bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold shadow-neu-blue active:shadow-neu-blue-pressed flex items-center gap-1.5"
                >
                  <Send className="w-4 h-4" />
                  <span>Lưu &amp; Xuất Bản Đề Thi Ngay</span>
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* 4. TAB 3: SINH ĐỀ THEO MA TRẬN 4 MỨC ĐỘ TỪ NGÂN HÀNG CÂU HỎI */}
      {activeSubTab === "create_matrix" && (
        <div className="bg-[#e6ecf5] dark:bg-[#1a1f26] p-5 rounded-2xl shadow-neu-flat border border-white/60 dark:border-white/5 space-y-5">
          <div className="border-b border-slate-200/80 dark:border-slate-800 pb-3">
            <h3 className="font-bold text-slate-800 dark:text-slate-100 text-sm sm:text-base flex items-center gap-2">
              <Sliders className="w-4 h-4 text-blue-600" />
              <span>Sinh Đề Kiểm Tra Ngẫu Nhiên Theo Ma Trận 4 Mức Độ Nhận Thức</span>
            </h3>
            <p className="text-xs text-slate-500 pt-0.5">
              Hệ thống tự động bốc ngẫu nhiên câu hỏi theo đúng chủ đề và số câu Nhận biết, Thông hiểu, Vận dụng, Vận dụng cao
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                Tên bài kiểm tra
              </label>
              <input
                type="text"
                value={matrixTitle}
                onChange={(e) => setMatrixTitle(e.target.value)}
                placeholder="VD: Kiểm tra định kỳ Ma trận - Tin học 12"
                className="w-full px-3 py-2 rounded-neu-sm bg-[#e6ecf5] dark:bg-[#12151a] text-xs font-medium border border-slate-300 dark:border-slate-700 shadow-neu-inset-sm focus:outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                Thời gian làm bài (phút)
              </label>
              <input
                type="number"
                min="5"
                max="180"
                value={matrixDuration}
                onChange={(e) => setMatrixDuration(parseInt(e.target.value, 10) || 50)}
                className="w-full px-3 py-2 rounded-neu-sm bg-[#e6ecf5] dark:bg-[#12151a] text-xs font-medium border border-slate-300 dark:border-slate-700 shadow-neu-inset-sm focus:outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                Đối tượng lớp tham gia
              </label>
              <select
                value={matrixTargetClass}
                onChange={(e) => setMatrixTargetClass(e.target.value)}
                className="w-full px-3 py-2 rounded-neu-sm bg-[#e6ecf5] dark:bg-[#12151a] text-xs font-medium border border-slate-300 dark:border-slate-700 shadow-neu-inset-sm focus:outline-none"
              >
                <option value="all">Tất cả các lớp (Toàn trường)</option>
                {allClasses.map((cls) => (
                  <option key={cls} value={cls}>
                    Chỉ dành cho lớp {cls}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Chọn chủ đề đưa vào ma trận đề thi */}
          <div className="space-y-2">
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
              1. Tích chọn các chủ đề kiến thức đưa vào đề kiểm tra:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 p-3 rounded-neu-sm bg-[#e6ecf5] dark:bg-[#12151a] shadow-neu-inset-sm max-h-48 overflow-y-auto">
              {allTopics.map((top) => {
                const isChecked = selectedTopicIds.includes(top.id);
                return (
                  <label
                    key={top.id}
                    className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300 cursor-pointer p-1 rounded hover:bg-white/40 dark:hover:bg-slate-800/40"
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedTopicIds([...selectedTopicIds, top.id]);
                        } else {
                          setSelectedTopicIds(selectedTopicIds.filter((id) => id !== top.id));
                        }
                      }}
                      className="rounded text-blue-600"
                    />
                    <span className="truncate">{top.name}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Bảng cấu hình Ma trận 4 mức độ nhận thức */}
          <div className="space-y-3">
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
              2. Cấu hình số câu theo 4 mức độ nhận thức (Chuẩn Bộ GD&amp;ĐT):
            </span>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Phần 1: Trắc nghiệm 4 lựa chọn */}
              <div className="p-3.5 rounded-neu-sm bg-[#e6ecf5] dark:bg-[#12151a] shadow-neu-inset-sm space-y-3">
                <div className="flex items-center justify-between font-bold text-xs text-blue-700 dark:text-blue-300">
                  <span>Phần 1: Trắc nghiệm 4 lựa chọn (MC)</span>
                  <span>Tổng: {mcLevels.NhanBiet + mcLevels.ThongHieu + mcLevels.VanDung + mcLevels.VanDungCao} câu</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <label className="text-[11px] text-slate-600 dark:text-slate-400 block mb-0.5">Nhận biết:</label>
                    <input
                      type="number"
                      min="0"
                      value={mcLevels.NhanBiet}
                      onChange={(e) => setMcLevels({ ...mcLevels, NhanBiet: parseInt(e.target.value, 10) || 0 })}
                      className="w-full p-1.5 rounded bg-white dark:bg-slate-800 text-xs font-bold border border-slate-300"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] text-slate-600 dark:text-slate-400 block mb-0.5">Thông hiểu:</label>
                    <input
                      type="number"
                      min="0"
                      value={mcLevels.ThongHieu}
                      onChange={(e) => setMcLevels({ ...mcLevels, ThongHieu: parseInt(e.target.value, 10) || 0 })}
                      className="w-full p-1.5 rounded bg-white dark:bg-slate-800 text-xs font-bold border border-slate-300"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] text-slate-600 dark:text-slate-400 block mb-0.5">Vận dụng:</label>
                    <input
                      type="number"
                      min="0"
                      value={mcLevels.VanDung}
                      onChange={(e) => setMcLevels({ ...mcLevels, VanDung: parseInt(e.target.value, 10) || 0 })}
                      className="w-full p-1.5 rounded bg-white dark:bg-slate-800 text-xs font-bold border border-slate-300"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] text-slate-600 dark:text-slate-400 block mb-0.5">Vận dụng cao:</label>
                    <input
                      type="number"
                      min="0"
                      value={mcLevels.VanDungCao}
                      onChange={(e) => setMcLevels({ ...mcLevels, VanDungCao: parseInt(e.target.value, 10) || 0 })}
                      className="w-full p-1.5 rounded bg-white dark:bg-slate-800 text-xs font-bold border border-slate-300"
                    />
                  </div>
                </div>
              </div>

              {/* Phần 2: Trắc nghiệm Đúng / Sai */}
              <div className="p-3.5 rounded-neu-sm bg-[#e6ecf5] dark:bg-[#12151a] shadow-neu-inset-sm space-y-3">
                <div className="flex items-center justify-between font-bold text-xs text-indigo-700 dark:text-indigo-300">
                  <span>Phần 2: Trắc nghiệm Đúng / Sai (TF)</span>
                  <span>Tổng: {tfLevels.NhanBiet + tfLevels.ThongHieu + tfLevels.VanDung + tfLevels.VanDungCao} câu</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <label className="text-[11px] text-slate-600 dark:text-slate-400 block mb-0.5">Nhận biết:</label>
                    <input
                      type="number"
                      min="0"
                      value={tfLevels.NhanBiet}
                      onChange={(e) => setTfLevels({ ...tfLevels, NhanBiet: parseInt(e.target.value, 10) || 0 })}
                      className="w-full p-1.5 rounded bg-white dark:bg-slate-800 text-xs font-bold border border-slate-300"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] text-slate-600 dark:text-slate-400 block mb-0.5">Thông hiểu:</label>
                    <input
                      type="number"
                      min="0"
                      value={tfLevels.ThongHieu}
                      onChange={(e) => setTfLevels({ ...tfLevels, ThongHieu: parseInt(e.target.value, 10) || 0 })}
                      className="w-full p-1.5 rounded bg-white dark:bg-slate-800 text-xs font-bold border border-slate-300"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] text-slate-600 dark:text-slate-400 block mb-0.5">Vận dụng:</label>
                    <input
                      type="number"
                      min="0"
                      value={tfLevels.VanDung}
                      onChange={(e) => setTfLevels({ ...tfLevels, VanDung: parseInt(e.target.value, 10) || 0 })}
                      className="w-full p-1.5 rounded bg-white dark:bg-slate-800 text-xs font-bold border border-slate-300"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] text-slate-600 dark:text-slate-400 block mb-0.5">Vận dụng cao:</label>
                    <input
                      type="number"
                      min="0"
                      value={tfLevels.VanDungCao}
                      onChange={(e) => setTfLevels({ ...tfLevels, VanDungCao: parseInt(e.target.value, 10) || 0 })}
                      className="w-full p-1.5 rounded bg-white dark:bg-slate-800 text-xs font-bold border border-slate-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Nút hành động sinh đề */}
          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={() => handleGenerateAndSaveMatrixExam("draft")}
              className="px-4 py-2.5 rounded-neu-sm bg-[#e6ecf5] dark:bg-[#202734] text-slate-700 dark:text-slate-300 text-xs font-bold shadow-neu-flat-xs active:shadow-neu-inset border border-slate-300"
            >
              Sinh bản nháp
            </button>
            <button
              type="button"
              onClick={() => handleGenerateAndSaveMatrixExam("published")}
              className="px-5 py-2.5 rounded-neu-sm bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold shadow-neu-blue active:shadow-neu-blue-pressed flex items-center gap-1.5"
            >
              <Sparkles className="w-4 h-4" />
              <span>Sinh Đề Ngẫu Nhiên &amp; Xuất Bản Ngay</span>
            </button>
          </div>
        </div>
      )}

      {/* 5. TAB 4: BÁO CÁO KẾT QUẢ & PHỔ ĐIỂM KỲ THI */}
      {activeSubTab === "report" && (
        <div className="space-y-5">
          {/* Bộ chọn bài thi muốn xem báo cáo */}
          <div className="bg-[#e6ecf5] dark:bg-[#1a1f26] p-4 rounded-2xl shadow-neu-flat border border-white/60 dark:border-white/5 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                Chọn kỳ thi xem báo cáo:
              </span>
              <select
                value={selectedExamId}
                onChange={(e) => setSelectedExamId(e.target.value)}
                className="px-3 py-1.5 rounded-neu-sm bg-[#e6ecf5] dark:bg-[#12151a] text-xs font-bold border border-slate-300 dark:border-slate-700 shadow-neu-inset-sm focus:outline-none"
              >
                {exams.map((ex) => (
                  <option key={ex.id} value={ex.id}>
                    {ex.title} ({ex.status === "published" ? "Đang mở" : "Đã đóng"})
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleExportCsv}
                className="px-3.5 py-1.5 rounded-neu-sm bg-[#e6ecf5] dark:bg-[#202734] text-emerald-700 dark:text-emerald-300 text-xs font-bold shadow-neu-flat-xs active:shadow-neu-inset flex items-center gap-1.5 border border-emerald-400/50"
              >
                <Download className="w-3.5 h-3.5 text-emerald-600" />
                <span>Xuất file Excel</span>
              </button>
              <button
                type="button"
                onClick={() => window.print()}
                className="px-3.5 py-1.5 rounded-neu-sm bg-[#e6ecf5] dark:bg-[#202734] text-slate-700 dark:text-slate-300 text-xs font-bold shadow-neu-flat-xs active:shadow-neu-inset flex items-center gap-1.5 border border-slate-300"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>In biên bản coi thi</span>
              </button>
            </div>
          </div>

          {/* Thẻ chỉ số tổng quan kỳ thi */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-2xl bg-[#e6ecf5] dark:bg-[#1a1f26] shadow-neu-flat border border-white/60 dark:border-white/5 space-y-1">
              <span className="text-[11px] font-bold text-slate-500">Số thí sinh nộp bài</span>
              <div className="text-2xl font-black text-slate-800 dark:text-slate-100">
                {reportStats.totalParticipants} <span className="text-xs font-normal">học sinh</span>
              </div>
              <p className="text-[10px] text-rose-600 font-semibold">
                {reportStats.disqualifiedCount > 0 ? `${reportStats.disqualifiedCount} thí sinh bị đình chỉ thi` : "0 vi phạm nghiêm trọng"}
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#e6ecf5] dark:bg-[#1a1f26] shadow-neu-flat border border-white/60 dark:border-white/5 space-y-1">
              <span className="text-[11px] font-bold text-slate-500">Điểm trung bình</span>
              <div className="text-2xl font-black text-blue-600 dark:text-blue-400">
                {reportStats.averageScore} <span className="text-xs font-normal">/ 10</span>
              </div>
              <p className="text-[10px] text-slate-500">Cao nhất: {reportStats.highestScore}đ • Thấp: {reportStats.lowestScore}đ</p>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#e6ecf5] dark:bg-[#1a1f26] shadow-neu-flat border border-white/60 dark:border-white/5 space-y-1">
              <span className="text-[11px] font-bold text-slate-500">Tỷ lệ đạt (≥ 5.0đ)</span>
              <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400">
                {reportStats.passRate}%
              </div>
              <p className="text-[10px] text-slate-500">Chuẩn tốt nghiệp THPT</p>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#e6ecf5] dark:bg-[#1a1f26] shadow-neu-flat border border-white/60 dark:border-white/5 space-y-1">
              <span className="text-[11px] font-bold text-slate-500">Học sinh giỏi (≥ 8.0đ)</span>
              <div className="text-2xl font-black text-indigo-600 dark:text-indigo-400">
                {reportStats.excellentRate}%
              </div>
              <p className="text-[10px] text-slate-500">Xuất sắc &amp; Giỏi</p>
            </div>
          </div>

          {/* Phổ điểm trực quan (Score Distribution) */}
          <div className="bg-[#e6ecf5] dark:bg-[#1a1f26] p-5 rounded-2xl shadow-neu-flat border border-white/60 dark:border-white/5 space-y-3">
            <h3 className="font-bold text-slate-800 dark:text-slate-100 text-sm flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-blue-600" />
              <span>Phổ Điểm Thí Sinh ({reportStats.totalParticipants} bài làm)</span>
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3 rounded-neu-sm bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 text-center space-y-1">
                <span className="text-xs text-rose-700 dark:text-rose-300 font-bold">Dưới 5.0 (Chưa đạt)</span>
                <div className="text-xl font-black text-rose-800 dark:text-rose-200">
                  {reportStats.scoreDistribution.under5} HS
                </div>
              </div>

              <div className="p-3 rounded-neu-sm bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 text-center space-y-1">
                <span className="text-xs text-amber-700 dark:text-amber-300 font-bold">5.0 – 6.4 (Trung bình)</span>
                <div className="text-xl font-black text-amber-800 dark:text-amber-200">
                  {reportStats.scoreDistribution.from5to65} HS
                </div>
              </div>

              <div className="p-3 rounded-neu-sm bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 text-center space-y-1">
                <span className="text-xs text-blue-700 dark:text-blue-300 font-bold">6.5 – 7.9 (Khá)</span>
                <div className="text-xl font-black text-blue-800 dark:text-blue-200">
                  {reportStats.scoreDistribution.from65to8} HS
                </div>
              </div>

              <div className="p-3 rounded-neu-sm bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60 text-center space-y-1">
                <span className="text-xs text-emerald-700 dark:text-emerald-300 font-bold">8.0 – 10.0 (Giỏi)</span>
                <div className="text-xl font-black text-emerald-800 dark:text-emerald-200">
                  {reportStats.scoreDistribution.from8to10} HS
                </div>
              </div>
            </div>
          </div>

          {/* Bảng danh sách thí sinh nộp bài & Nhật ký vi phạm giám sát */}
          <div className="bg-[#e6ecf5] dark:bg-[#1a1f26] p-5 rounded-2xl shadow-neu-flat border border-white/60 dark:border-white/5 space-y-3">
            <h3 className="font-bold text-slate-800 dark:text-slate-100 text-sm flex items-center justify-between">
              <span>Danh Sách Kết Quả &amp; Nhật Ký Giám Sát Chống Gian Lận</span>
              <span className="text-xs font-normal text-slate-500">{currentSubmissions.length} thí sinh</span>
            </h3>

            {currentSubmissions.length === 0 ? (
              <div className="p-8 text-center rounded-neu-sm bg-[#e6ecf5] dark:bg-[#12151a] shadow-neu-inset-sm space-y-2">
                <Clock className="w-8 h-8 text-slate-400 mx-auto" />
                <p className="text-xs font-bold text-slate-600 dark:text-slate-400">
                  Chưa có thí sinh nào nộp bài thi này.
                </p>
                <p className="text-[11px] text-slate-500">
                  Khi học sinh vào làm và nộp bài trên giao diện phòng thi, kết quả và nhật ký vi phạm sẽ tự động hiển thị tại đây.
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-slate-300 dark:border-slate-700 text-slate-500 font-bold">
                      <th className="py-2.5 px-3">Họ và tên thí sinh</th>
                      <th className="py-2.5 px-3">Lớp</th>
                      <th className="py-2.5 px-3 text-center">Phần 1 (MC)</th>
                      <th className="py-2.5 px-3 text-center">Phần 2 (TF)</th>
                      <th className="py-2.5 px-3 text-center">Tổng điểm</th>
                      <th className="py-2.5 px-3 text-center">Số lần vi phạm</th>
                      <th className="py-2.5 px-3 text-right">Trạng thái bài thi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800 font-medium">
                    {currentSubmissions.map((s) => (
                      <tr key={s.id} className="hover:bg-white/40 dark:hover:bg-slate-800/40 transition">
                        <td className="py-2.5 px-3 font-bold text-slate-800 dark:text-slate-100">
                          {s.studentName}
                        </td>
                        <td className="py-2.5 px-3 text-slate-600 dark:text-slate-300">{s.className}</td>
                        <td className="py-2.5 px-3 text-center">{s.mcScore}đ</td>
                        <td className="py-2.5 px-3 text-center">{s.tfScore}đ</td>
                        <td className="py-2.5 px-3 text-center font-black text-sm text-blue-700 dark:text-blue-300">
                          {s.totalScore}
                        </td>
                        <td className="py-2.5 px-3 text-center">
                          <span
                            className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                              s.tabSwitchCount > 0
                                ? "bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300"
                                : "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"
                            }`}
                          >
                            {s.tabSwitchCount} lần
                          </span>
                        </td>
                        <td className="py-2.5 px-3 text-right">
                          <span
                            className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                              s.isDisqualified
                                ? "bg-rose-600 text-white"
                                : s.totalScore >= 5.0
                                ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                                : "bg-amber-100 text-amber-800 border border-amber-300"
                            }`}
                          >
                            {s.isDisqualified ? "Bị đình chỉ thi" : s.totalScore >= 5.0 ? "Đạt yêu cầu" : "Cần bồi dưỡng"}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
