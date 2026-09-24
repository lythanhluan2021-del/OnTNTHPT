"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import {
  Users,
  UserCheck,
  Award,
  TrendingUp,
  AlertTriangle,
  Search,
  Filter,
  Plus,
  FileSpreadsheet,
  KeyRound,
  Trash2,
  Eye,
  ArrowLeft,
  RefreshCw,
  CheckCircle2,
  XCircle,
  Clock,
  Sparkles,
  BookOpen,
  ShieldCheck,
  Layers,
  Lock,
  Unlock,
  GraduationCap,
  X,
  ChevronRight,
  LogOut,
  AlertCircle,
  Check,
  Cloud,
  Database,
  ExternalLink,
  Calendar,
  Grid,
  BarChart3,
  CloudDownload,
  Printer,
  Compass,
} from "lucide-react";
import { soundManager } from "@/lib/audioEffects";
import { useAuth } from "@/contexts/AuthContext";
import {
  StudentProgressSummary,
  AdminDashboardOverview,
  StudentAttempt,
  User,
  WeekPlanItem,
  StudentWeeklyProgress,
  WeeklyProgressOverview,
  WeeklyMatrixRow,
  DriveSyncStatus,
  Subject,
  Question,
} from "@/types";
import { WEEKLY_PLAN } from "@/data/weeklyPlan";
import { INITIAL_QUESTIONS, INITIAL_SUBJECTS } from "@/data/sampleBank";
import { DriveSyncModal } from "@/components/Drive/DriveSyncModal";
import { PrintableReportModal } from "@/components/Admin/PrintableReportModal";
import { CompetencyRadarCard } from "@/components/Analytics/CompetencyRadarCard";

export default function AdminDashboardPage() {
  const { user, isLoggedIn, isAdmin, login, logout } = useAuth();

  // 1. Data States
  const [overview, setOverview] = useState<AdminDashboardOverview | null>(null);
  const [students, setStudents] = useState<StudentProgressSummary[]>([]);
  const [attempts, setAttempts] = useState<StudentAttempt[]>([]);
  const [allUserAccounts, setAllUserAccounts] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // 2. Filter & Search States
  const [selectedClass, setSelectedClass] = useState<string>("all");
  const [selectedStatusFilter, setSelectedStatusFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // 3. Modal States
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isResetPasswordModalOpen, setIsResetPasswordModalOpen] = useState(false);
  const [isCloudHelpModalOpen, setIsCloudHelpModalOpen] = useState(false);
  const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);
  const [activeStudent, setActiveStudent] = useState<StudentProgressSummary | null>(null);

  // 4. Form States for Single / Bulk Creation
  const [createMode, setCreateMode] = useState<"single" | "bulk">("single");
  const [newStudentForm, setNewStudentForm] = useState({
    username: "",
    fullName: "",
    className: "12A1",
    password: "123",
  });
  const [bulkInputText, setBulkInputText] = useState(
    `hs12a1_06, Hoàng Văn Thái, 12A1, 123\nhs12a1_07, Nguyễn Thị Mai Lan, 12A1, 123\nhs12a2_03, Vũ Đức Hùng, 12A2, 123`
  );
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formNotification, setFormNotification] = useState<{ type: "success" | "error"; message: string } | null>(null);

  // 5. Form State for Reset Password & Reset Mock Data
  const [newPasswordVal, setNewPasswordVal] = useState("123");
  const [isResetting, setIsResetting] = useState(false);

  // 6. Weekly Plan & Matrix States
  const [activeTab, setActiveTab] = useState<"overview" | "weekly" | "matrix" | "competencies">("overview");
  const [allWeeks, setAllWeeks] = useState<WeekPlanItem[]>(WEEKLY_PLAN);
  const [selectedWeekId, setSelectedWeekId] = useState<string>("tuan-02-06");
  const [selectedSemester, setSelectedSemester] = useState<1 | 2 | "all">("all");
  const [weeklyOverview, setWeeklyOverview] = useState<WeeklyProgressOverview | null>(null);
  const [isWeeklyLoading, setIsWeeklyLoading] = useState(false);
  const [weeklySearchQuery, setWeeklySearchQuery] = useState("");
  const [weeklyStatusFilter, setWeeklyStatusFilter] = useState<"all" | "completed" | "inProgress" | "notStarted">("all");

  const [matrixWeeks, setMatrixWeeks] = useState<WeekPlanItem[]>([]);
  const [matrixRows, setMatrixRows] = useState<WeeklyMatrixRow[]>([]);
  const [isMatrixLoading, setIsMatrixLoading] = useState(false);
  const [matrixSearchQuery, setMatrixSearchQuery] = useState("");

  // 7. Google Drive Sync States
  const [isDriveModalOpen, setIsDriveModalOpen] = useState(false);
  const [adminSubjects, setAdminSubjects] = useState<Subject[]>(INITIAL_SUBJECTS);
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>("tin-hoc-12");
  const [driveSyncStatus, setDriveSyncStatus] = useState<DriveSyncStatus>({
    status: "idle",
    totalImported: INITIAL_QUESTIONS.length,
  });

  // Nạp môn học tùy chỉnh từ localStorage (nếu có từ trước)
  useEffect(() => {
    try {
      const savedSubjects = localStorage.getItem("thpt_custom_subjects");
      if (savedSubjects) {
        const parsed = JSON.parse(savedSubjects);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setAdminSubjects(parsed);
        }
      }
    } catch {
      // Ignored
    }
  }, []);

  // 8. Admin Login Form (if not logged in as Admin)
  const [adminUsernameInput, setAdminUsernameInput] = useState("");
  const [adminPasswordInput, setAdminPasswordInput] = useState("");
  const [adminLoginError, setAdminLoginError] = useState("");
  const [isAdminLoggingIn, setIsAdminLoggingIn] = useState(false);

  // Fetch Dashboard Data
  const fetchData = async (cls = selectedClass) => {
    try {
      setIsRefreshing(true);
      const res = await fetch(`/api/admin/dashboard?class=${cls}`);
      const data = await res.json();
      if (data.success) {
        setOverview(data.data.overview);
        setStudents(data.data.students);
      }

      // Lấy toàn bộ lượt làm bài và tài khoản để chi tiết
      const attRes = await fetch("/api/student/attempts");
      const attData = await attRes.json();
      if (attData.success) {
        setAttempts(attData.attempts);
      }

      const usersRes = await fetch(`/api/admin/students?class=${cls}`);
      const usersData = await usersRes.json();
      if (usersData.success) {
        setAllUserAccounts(usersData.students);
      }
    } catch (err) {
      console.error("Lỗi nạp dữ liệu dashboard:", err);
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  };

  // Fetch Weekly Data
  const fetchWeeklyData = async (weekId = selectedWeekId, cls = selectedClass) => {
    try {
      setIsWeeklyLoading(true);
      const res = await fetch(`/api/admin/weekly-progress?weekId=${weekId}&class=${cls}`);
      const data = await res.json();
      if (data.success) {
        if (data.allWeeks) setAllWeeks(data.allWeeks);
        setWeeklyOverview({
          week: data.week,
          totalStudents: data.totalStudents,
          participatedCount: data.participatedCount,
          completedCount: data.completedCount,
          completionRate: data.completionRate,
          averageScore: data.averageScore,
          passRate: data.passRate,
          atRiskCount: data.atRiskCount,
          notStartedCount: data.notStartedCount,
          students: data.students,
        });
      }
    } catch (err) {
      console.error("Lỗi nạp tiến độ tuần:", err);
    } finally {
      setIsWeeklyLoading(false);
    }
  };

  // Fetch Matrix Data
  const fetchMatrixData = async (cls = selectedClass) => {
    try {
      setIsMatrixLoading(true);
      const res = await fetch(`/api/admin/weekly-progress?mode=matrix&class=${cls}`);
      const data = await res.json();
      if (data.success) {
        setMatrixWeeks(data.weeks || []);
        setMatrixRows(data.rows || []);
      }
    } catch (err) {
      console.error("Lỗi nạp ma trận tiến độ:", err);
    } finally {
      setIsMatrixLoading(false);
    }
  };

  useEffect(() => {
    if (isAdmin) {
      if (activeTab === "overview") {
        fetchData(selectedClass);
      } else if (activeTab === "weekly") {
        fetchWeeklyData(selectedWeekId, selectedClass);
      } else if (activeTab === "matrix") {
        fetchMatrixData(selectedClass);
      }
    } else {
      setIsLoading(false);
    }
  }, [isAdmin, activeTab, selectedClass, selectedWeekId]);

  // Tự động làm mới dữ liệu khi Thầy chuyển tab quay lại trang Admin
  useEffect(() => {
    if (!isAdmin) return;
    const handleFocus = () => {
      if (activeTab === "overview") fetchData(selectedClass);
      else if (activeTab === "weekly") fetchWeeklyData(selectedWeekId, selectedClass);
      else if (activeTab === "matrix") fetchMatrixData(selectedClass);
    };
    window.addEventListener("focus", handleFocus);
    return () => window.removeEventListener("focus", handleFocus);
  }, [isAdmin, activeTab, selectedClass, selectedWeekId]);

  // Tự động làm mới dữ liệu ngầm mỗi 8 giây (Realtime Polling)
  useEffect(() => {
    if (!isAdmin) return;
    const interval = setInterval(() => {
      if (activeTab === "overview") {
        fetchData(selectedClass);
      } else if (activeTab === "weekly") {
        fetchWeeklyData(selectedWeekId, selectedClass);
      } else if (activeTab === "matrix") {
        fetchMatrixData(selectedClass);
      }
    }, 8000);

    return () => clearInterval(interval);
  }, [isAdmin, activeTab, selectedClass, selectedWeekId]);

  // Filtered Weeks for Selector (by Semester)
  const filteredWeeksBySemester = useMemo(() => {
    if (selectedSemester === "all") return allWeeks;
    return allWeeks.filter((w) => w.semester === selectedSemester);
  }, [allWeeks, selectedSemester]);

  // Filtered Weekly Students
  const filteredWeeklyStudents = useMemo(() => {
    if (!weeklyOverview) return [];
    return weeklyOverview.students.filter((st) => {
      if (weeklySearchQuery.trim()) {
        const q = weeklySearchQuery.toLowerCase();
        const matchName = st.fullName.toLowerCase().includes(q);
        const matchUser = st.username.toLowerCase().includes(q);
        const matchClass = st.className.toLowerCase().includes(q);
        if (!matchName && !matchUser && !matchClass) return false;
      }
      if (weeklyStatusFilter !== "all") {
        if (weeklyStatusFilter === "completed" && st.status !== "HoanThanh") return false;
        if (weeklyStatusFilter === "inProgress" && st.status !== "DangLam") return false;
        if (weeklyStatusFilter === "notStarted" && st.status !== "ChuaThamGia") return false;
      }
      return true;
    });
  }, [weeklyOverview, weeklySearchQuery, weeklyStatusFilter]);

  // Filtered Matrix Rows
  const filteredMatrixRows = useMemo(() => {
    if (!matrixRows) return [];
    if (!matrixSearchQuery.trim()) return matrixRows;
    const q = matrixSearchQuery.toLowerCase();
    return matrixRows.filter((r) => {
      return (
        r.fullName.toLowerCase().includes(q) ||
        r.username.toLowerCase().includes(q) ||
        r.className.toLowerCase().includes(q)
      );
    });
  }, [matrixRows, matrixSearchQuery]);

  // Handle Admin Quick Login
  const handleAdminLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsAdminLoggingIn(true);
    setAdminLoginError("");

    const res = await login(adminUsernameInput, adminPasswordInput);
    setIsAdminLoggingIn(false);
    if (!res.success) {
      soundManager.playError();
      setAdminLoginError(res.message);
    } else {
      soundManager.playSuccess();
    }
  };

  // Filtered Students List
  const filteredStudents = useMemo(() => {
    return students.filter((st) => {
      // 1. Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchName = st.fullName.toLowerCase().includes(q);
        const matchUser = st.username.toLowerCase().includes(q);
        const matchClass = st.className.toLowerCase().includes(q);
        if (!matchName && !matchUser && !matchClass) return false;
      }

      // 2. Status Filter
      if (selectedStatusFilter !== "all") {
        if (selectedStatusFilter === "passed" && st.estimatedScore < 5.0) return false;
        if (selectedStatusFilter === "atRisk" && (st.estimatedScore >= 5.0 || st.totalQuestionsAttempted === 0)) return false;
        if (selectedStatusFilter === "notStarted" && st.totalQuestionsAttempted > 0) return false;
        if (selectedStatusFilter === "excellent" && st.estimatedScore < 8.0) return false;
      }

      return true;
    });
  }, [students, searchQuery, selectedStatusFilter]);

  // Handle Add Single Student
  const handleCreateSingle = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStudentForm.username.trim() || !newStudentForm.fullName.trim()) {
      setFormNotification({ type: "error", message: "Vui lòng nhập đầy đủ Tên đăng nhập và Họ tên học sinh." });
      return;
    }

    setFormSubmitting(true);
    setFormNotification(null);

    try {
      const res = await fetch("/api/admin/students", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newStudentForm),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Không thể tạo tài khoản.");
      }

      soundManager.playSuccess();
      setFormNotification({ type: "success", message: data.message });
      setNewStudentForm({ username: "", fullName: "", className: newStudentForm.className, password: "123" });
      fetchData(selectedClass);
    } catch (err: any) {
      soundManager.playError();
      setFormNotification({ type: "error", message: err.message });
    } finally {
      setFormSubmitting(false);
    }
  };

  // Handle Bulk Import Students
  const handleBulkImport = async () => {
    if (!bulkInputText.trim()) {
      setFormNotification({ type: "error", message: "Vui lòng dán danh sách học sinh." });
      return;
    }

    const lines = bulkInputText.trim().split("\n");
    const parsedStudents: any[] = [];

    lines.forEach((line) => {
      const parts = line.split(",").map((p) => p.trim());
      if (parts.length >= 2) {
        parsedStudents.push({
          username: parts[0],
          fullName: parts[1],
          className: parts[2] || "12A1",
          password: parts[3] || "123",
        });
      }
    });

    if (parsedStudents.length === 0) {
      setFormNotification({ type: "error", message: "Định dạng không đúng. Mỗi dòng: Mã HS, Họ tên, Lớp, Mật khẩu" });
      return;
    }

    setFormSubmitting(true);
    setFormNotification(null);

    try {
      const res = await fetch("/api/admin/students", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ students: parsedStudents }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Không thể nhập danh sách.");
      }

      soundManager.playSuccess();
      setFormNotification({ type: "success", message: data.message });
      fetchData(selectedClass);
    } catch (err: any) {
      soundManager.playError();
      setFormNotification({ type: "error", message: err.message });
    } finally {
      setFormSubmitting(false);
    }
  };

  // Handle Reset Password
  const handleResetPassword = async () => {
    if (!activeStudent || !newPasswordVal.trim()) return;

    try {
      const res = await fetch(`/api/admin/students/${activeStudent.studentId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: newPasswordVal.trim() }),
      });

      const data = await res.json();
      if (data.success) {
        soundManager.playSuccess();
        alert(`Đã cấp lại mật khẩu mới ("${newPasswordVal}") cho học sinh ${activeStudent.fullName}!`);
        setIsResetPasswordModalOpen(false);
      } else {
        soundManager.playError();
        alert("Lỗi: " + data.message);
      }
    } catch (err) {
      alert("Lỗi kết nối máy chủ");
    }
  };

  // Handle Toggle Active/Lock Status
  const handleToggleLock = async (st: StudentProgressSummary) => {
    const userAcc = allUserAccounts.find((u) => u.id === st.studentId);
    const newStatus = userAcc ? !userAcc.isActive : false;

    if (!confirm(`Bạn có chắc chắn muốn ${newStatus ? "MỞ KHÓA" : "TẠM KHÓA"} tài khoản của em ${st.fullName}?`)) {
      return;
    }

    try {
      const res = await fetch(`/api/admin/students/${st.studentId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isActive: newStatus }),
      });

      const data = await res.json();
      if (data.success) {
        soundManager.playSuccess();
        fetchData(selectedClass);
      }
    } catch (err) {
      soundManager.playError();
    }
  };

  // Handle Delete Student
  const handleDeleteStudent = async (st: StudentProgressSummary) => {
    if (!confirm(`Xác nhận XÓA tài khoản của học sinh ${st.fullName} (${st.username})? Toàn bộ kết quả sẽ bị xóa vĩnh viễn.`)) {
      return;
    }

    try {
      const res = await fetch(`/api/admin/students/${st.studentId}`, {
        method: "DELETE",
      });

      const data = await res.json();
      if (data.success) {
        soundManager.playSuccess();
        fetchData(selectedClass);
      } else {
        alert(data.message);
      }
    } catch (err) {
      soundManager.playError();
    }
  };

  // Export to CSV Function
  const exportToCSV = () => {
    soundManager.playClick();
    if (students.length === 0) return;

    const headers = [
      "STT",
      "Mã Học Sinh",
      "Họ và Tên",
      "Lớp",
      "Số Câu Đã Làm",
      "Số Câu Đúng",
      "Tỷ Lệ Đúng (%)",
      "Điểm THPT Dự Kiến",
      "Thời Gian Ôn Luyện (Phút)",
      "Chủ Đề Còn Yếu",
      "Xếp Loại",
    ];

    const rows = filteredStudents.map((s, idx) => [
      idx + 1,
      `"${s.username}"`,
      `"${s.fullName}"`,
      `"${s.className}"`,
      s.totalQuestionsAttempted,
      s.correctAnswers,
      s.accuracyRate + "%",
      s.estimatedScore.toFixed(1),
      s.totalTimeMinutes,
      `"${s.weakTopics.join("; ") || "Không có"}"`,
      `"${
        s.status === "XuatSac"
          ? "Xuất sắc"
          : s.status === "Dat"
          ? "Đạt chuẩn"
          : s.status === "CanCoGang"
          ? "Cần cố gắng"
          : s.status === "NguyCoYeu"
          ? "Nguy cơ yếu"
          : "Chưa tham gia"
      }"`,
    ]);

    const csvContent = "\uFEFF" + [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `Bao_Cao_Tien_Do_On_Thi_THPT_${selectedClass}_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Export Weekly Report CSV
  const exportWeeklyCSV = () => {
    if (!weeklyOverview) return;
    soundManager.playClick();

    const headers = [
      "STT",
      "Mã Học Sinh",
      "Họ và Tên",
      "Lớp",
      "Chuyên Đề Tuần",
      "Số Câu Đã Làm",
      "Tổng Câu Tuần",
      "Số Câu Đúng",
      "Tỷ Lệ Đúng (%)",
      "Điểm Số (Thang 10)",
      "Thời Gian Làm (Phút)",
      "Số Lần Dùng Gợi Ý",
      "Trạng Thái Hoàn Thành",
    ];

    const rows = weeklyOverview.students.map((s, idx) => [
      idx + 1,
      `"${s.username}"`,
      `"${s.fullName}"`,
      `"${s.className}"`,
      `"${weeklyOverview.week.weekDisplay}: ${weeklyOverview.week.title}"`,
      s.questionsAttempted,
      s.totalWeekQuestions,
      s.correctAnswers,
      `${s.accuracyRate}%`,
      s.score,
      s.timeSpentMinutes,
      s.hintsUsed,
      `"${
        s.status === "HoanThanh"
          ? "Đã hoàn thành"
          : s.status === "DangLam"
          ? "Đang làm dở"
          : "Chưa tham gia"
      }"`,
    ]);

    const csvContent = "\uFEFF" + [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute(
      "download",
      `Bao_Cao_Tien_Do_${weeklyOverview.week.id}_${selectedClass}_${new Date().toISOString().slice(0, 10)}.csv`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Handle Reset Mock Data
  const handleResetData = async () => {
    const confirmed = window.confirm(
      "⚠️ XÁC NHẬN DỌN DẸP DỮ LIỆU:\n\nThầy có chắc chắn muốn dọn sạch toàn bộ học sinh mẫu và lịch sử bài làm thử nghiệm?\n\n• Tài khoản Quản trị viên (Admin Thầy Luân) sẽ được BẢO LƯU tuyệt đối.\n• Toàn bộ học sinh và lịch sử làm bài sẽ được đưa về 0 để Thầy sẵn sàng thêm danh sách học sinh thật.\n\nBấm OK để tiếp tục dọn dẹp."
    );
    if (!confirmed) return;

    setIsResetting(true);
    setFormNotification(null);

    try {
      soundManager.playClick();
      const res = await fetch("/api/admin/reset-data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ purgeAllStudents: true }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Không thể dọn dẹp dữ liệu.");
      }

      soundManager.playSuccess();
      setFormNotification({ type: "success", message: data.message });
      await fetchData(selectedClass);
    } catch (err: any) {
      soundManager.playError();
      setFormNotification({ type: "error", message: err.message || "Lỗi khi dọn dữ liệu." });
    } finally {
      setIsResetting(false);
    }
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

      let currentQuestions: Question[] = [];
      try {
        const savedQ = localStorage.getItem("thpt_custom_questions");
        currentQuestions = savedQ ? JSON.parse(savedQ) : INITIAL_QUESTIONS;
      } catch {
        currentQuestions = INITIAL_QUESTIONS;
      }

      let updatedQuestions = newQuestions;

      if (targetSubjectId) {
        const normalized = newQuestions.map((q: any) => ({
          ...q,
          subjectId: targetSubjectId,
        }));
        const otherQuestions = currentQuestions.filter((q) => q.subjectId !== targetSubjectId);
        updatedQuestions = [...otherQuestions, ...normalized];

        if (newSubjects && newSubjects.length > 0) {
          const newTopics = newSubjects[0].topics.map((t: any) => ({
            ...t,
            subjectId: targetSubjectId,
          }));
          const updatedSubjects = adminSubjects.map((s) =>
            s.id === targetSubjectId ? { ...s, topics: newTopics } : s
          );
          setAdminSubjects(updatedSubjects);
          try {
            localStorage.setItem("thpt_custom_subjects", JSON.stringify(updatedSubjects));
          } catch {
            // ignore
          }
        }
      } else {
        updatedQuestions = newQuestions;
        if (newSubjects && newSubjects.length > 0) {
          setAdminSubjects(newSubjects);
          try {
            localStorage.setItem("thpt_custom_subjects", JSON.stringify(newSubjects));
          } catch {
            // ignore
          }
        }
      }

      try {
        localStorage.setItem("thpt_custom_questions", JSON.stringify(updatedQuestions));
      } catch {
        // Quota full fallback
      }

      soundManager.playSuccess();
      setDriveSyncStatus({
        status: "success",
        totalImported: updatedQuestions.length,
        sheetUrl,
        lastSyncedAt: Date.now(),
        message: `Đã nạp thành công ${newQuestions.length} câu hỏi chuẩn từ Google Drive!`,
      });
      return true;
    } catch (err: any) {
      soundManager.playError();
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
      let currentQuestions: Question[] = [];
      try {
        const savedQ = localStorage.getItem("thpt_custom_questions");
        currentQuestions = savedQ ? JSON.parse(savedQ) : INITIAL_QUESTIONS;
      } catch {
        currentQuestions = INITIAL_QUESTIONS;
      }
      const initialIds = new Set(scannedQuestions.map((q: any) => q.id));
      const mergedQuestions = [
        ...scannedQuestions,
        ...currentQuestions.filter((q) => !initialIds.has(q.id)),
      ];
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
          const updatedTopics = initSubj.topics.map((initTop) => {
            const foundTop = found.topics.find((t: any) => t.id === initTop.id);
            if (foundTop && (foundTop.totalQuestions || 0) > initTop.totalQuestions) {
              return { ...initTop, totalQuestions: foundTop.totalQuestions };
            }
            return initTop;
          });
          return {
            ...initSubj,
            topics: updatedTopics,
          };
        }
        return initSubj;
      });

      setAdminSubjects(mergedSubjects);
      try {
        localStorage.setItem("thpt_custom_subjects", JSON.stringify(mergedSubjects));
      } catch {
        // Fallback
      }
    }

    soundManager.playSuccess();
    setDriveSyncStatus({
      status: "success",
      totalImported: json.count,
      lastSyncedAt: Date.now(),
      message: `Đã quét và nạp thành công ${json.count} câu hỏi từ ${json.subjectsCount} môn!`,
    });

    return {
      count: json.count,
      subjectsCount: json.subjectsCount,
      tree,
    };
  };

  // 1. Nếu đã đăng nhập với vai trò Học sinh mà cố tình truy cập /admin
  if (isLoggedIn && !isAdmin) {
    return (
      <div className="min-h-screen bg-[#e6ecf5] flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-[#e6ecf5] rounded-neu shadow-neu-flat p-8 border border-white/70 space-y-5 text-center">
          <div className="w-16 h-16 mx-auto rounded-neu bg-rose-100 flex items-center justify-center text-rose-600 shadow-neu-flat-xs">
            <Lock className="w-8 h-8" />
          </div>
          <div className="space-y-1.5">
            <h1 className="text-lg font-black text-slate-800">
              Khu Vực Quản Trị Hạn Chế
            </h1>
            <p className="text-xs text-slate-600 leading-relaxed">
              Tài khoản <strong>{user?.fullName}</strong> ({user?.className}) là tài khoản <strong>Học sinh</strong>, không có quyền truy cập trang Quản trị này.
            </p>
          </div>
          <Link
            href="/"
            className="w-full py-3 rounded-neu font-bold text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-neu-flat transition flex items-center justify-center gap-2 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Quay lại trang Ôn Luyện</span>
          </Link>
        </div>
      </div>
    );
  }

  // 2. Nếu chưa đăng nhập với vai trò Admin, hiển thị form xác thực quản trị bảo mật
  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-[#e6ecf5] flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-[#e6ecf5] rounded-neu shadow-neu-flat p-8 border border-white/70 space-y-6">
          <div className="text-center space-y-2">
            <div className="w-16 h-16 mx-auto rounded-neu bg-indigo-100 flex items-center justify-center text-indigo-700 shadow-neu-flat-sm">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h1 className="text-xl font-black text-slate-800">
              Trang Quản Trị Ôn Thi THPT
            </h1>
            <p className="text-xs text-slate-500 font-medium leading-relaxed">
              Khu vực dành riêng cho Giáo viên & Ban Giám Hiệu Trường THPT Nguyễn Sinh Sắc để theo dõi tiến độ và cấp tài khoản học sinh.
            </p>
          </div>

          {adminLoginError && (
            <div className="p-3 rounded-neu-sm bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold flex items-center gap-2 shadow-neu-flat-xs">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{adminLoginError}</span>
            </div>
          )}

          <form onSubmit={handleAdminLogin} className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 px-1">
                Tài khoản Quản trị viên:
              </label>
              <input
                type="text"
                value={adminUsernameInput}
                onChange={(e) => setAdminUsernameInput(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
                placeholder="Nhập tài khoản quản trị..."
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 px-1">
                Mật khẩu:
              </label>
              <input
                type="password"
                value={adminPasswordInput}
                onChange={(e) => setAdminPasswordInput(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={isAdminLoggingIn}
              className="w-full py-3 rounded-neu font-bold text-sm text-white bg-indigo-600 hover:bg-indigo-700 shadow-neu-flat active:shadow-neu-inset transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <KeyRound className="w-4 h-4" />
              <span>{isAdminLoggingIn ? "Đang xác thực..." : "Xác Thực Quản Trị"}</span>
            </button>
          </form>

          <div className="pt-2 border-t border-slate-300/60 flex items-center justify-between text-xs">
            <Link
              href="/"
              className="font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Quay lại trang Ôn Luyện</span>
            </Link>
            <span className="text-[11px] text-slate-400 font-semibold">
              GV: Lý Thành Luân
            </span>
          </div>
        </div>
      </div>
    );
  }

  // Active Student Attempts for Detail Modal
  const activeStudentAttempts = activeStudent
    ? attempts.filter((a) => a.studentId === activeStudent.studentId)
    : [];

  return (
    <div className="min-h-screen bg-[#e6ecf5] text-slate-800 p-3 sm:p-6 space-y-6">
      {/* Top Header Bar */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#e6ecf5] p-4 sm:p-5 rounded-neu shadow-neu-flat border border-white/60">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-neu-sm bg-indigo-100 flex items-center justify-center text-indigo-700 shadow-neu-flat-xs flex-shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-base sm:text-lg font-black text-slate-800">
                Dashboard Quản Lý Ôn Thi Tốt Nghiệp THPT
              </h1>
              <span className="text-[10px] uppercase tracking-wider font-extrabold bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded-full shadow-neu-flat-xs">
                Admin
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium">
              Trường THPT Nguyễn Sinh Sắc • Năm học 2026 - 2027 • Phụ trách: Thầy Lý Thành Luân
            </p>
            {/* Huy hiệu trạng thái Lưu trữ Đám mây Thời gian thực */}
            <div className="flex items-center gap-2 pt-1">
              {overview?.isCloudConnected ? (
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black shadow-neu-flat-xs border border-emerald-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <Database className="w-3 h-3 text-emerald-700" />
                  <span>Đám Mây Upstash Redis: Đã Kết Nối (Lưu Thời Gian Thực Toàn Trường)</span>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    soundManager.playClick();
                    setIsCloudHelpModalOpen(true);
                  }}
                  className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-100 hover:bg-amber-200 text-amber-900 text-[10px] font-bold shadow-neu-flat-xs border border-amber-300 transition cursor-pointer"
                  title="Bấm xem hướng dẫn kết nối Upstash Redis miễn phí"
                >
                  <Cloud className="w-3 h-3 text-amber-700" />
                  <span>Chế độ Cục Bộ • Bấm để Kích Hoạt Lưu Trữ Đám Mây Realtime (1-Click)</span>
                  <ExternalLink className="w-2.5 h-2.5 text-amber-700" />
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-auto flex-wrap">
          {/* Huy hiệu Realtime Live */}
          <div
            className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-neu-sm bg-indigo-50/80 text-indigo-700 text-[11px] font-bold shadow-neu-flat-xs border border-indigo-200/60"
            title="Dashboard tự động cập nhật kết quả làm bài của học sinh ngầm mỗi 8 giây"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Realtime (8s)</span>
          </div>

          {/* Nút Kết Nối & Đồng Bộ Google Drive */}
          <button
            type="button"
            onClick={() => {
              soundManager.playClick();
              setIsDriveModalOpen(true);
            }}
            className="p-2 sm:px-3 sm:py-2 rounded-neu-sm bg-emerald-50 hover:bg-emerald-100 text-emerald-800 shadow-neu-flat-xs active:shadow-neu-inset text-xs font-bold flex items-center gap-2 transition cursor-pointer border border-emerald-300/70"
            title="Quản lý kết nối & đồng bộ Ngân hàng câu hỏi từ Google Drive"
          >
            <CloudDownload className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span className="inline">Nguồn Google Drive</span>
            <span className="text-[10px] bg-emerald-200/90 text-emerald-800 font-extrabold px-2 py-0.5 rounded-full">
              Khép kín
            </span>
          </button>

          <button
            onClick={() => fetchData(selectedClass)}
            disabled={isRefreshing}
            className="p-2 sm:px-3 sm:py-2 rounded-neu-sm bg-[#e6ecf5] shadow-neu-flat-xs active:shadow-neu-inset text-slate-700 text-xs font-bold flex items-center gap-1.5 transition"
            title="Làm mới dữ liệu"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? "animate-spin text-blue-600" : ""}`} />
            <span className="hidden sm:inline">Làm mới</span>
          </button>

          <Link
            href="/"
            className="p-2 sm:px-3.5 sm:py-2 rounded-neu-sm bg-blue-50 text-blue-700 shadow-neu-flat-xs active:shadow-neu-inset text-xs font-bold flex items-center gap-1.5 hover:bg-blue-100 transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Vào Trang Luyện Thi</span>
          </Link>

          <button
            onClick={() => {
              soundManager.playClick();
              logout();
            }}
            className="p-2 sm:px-3 sm:py-2 rounded-neu-sm bg-rose-50 text-rose-600 shadow-neu-flat-xs active:shadow-neu-inset text-xs font-bold flex items-center gap-1.5 hover:bg-rose-100 transition"
            title="Đăng xuất"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Thoát</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto space-y-6">
        {/* Navigation Tabs Bar */}
        <div className="flex items-center gap-2 p-1.5 bg-[#e6ecf5] rounded-neu shadow-neu-inset-sm max-w-fit flex-wrap">
          <button
            onClick={() => {
              soundManager.playClick();
              setActiveTab("overview");
            }}
            className={`px-4 py-2 rounded-neu-sm text-xs font-bold transition flex items-center gap-2 cursor-pointer ${
              activeTab === "overview"
                ? "bg-blue-600 text-white shadow-neu-blue"
                : "text-slate-600 hover:text-slate-900 shadow-none hover:bg-white/40"
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Tổng Quan Toàn Trường</span>
          </button>

          <button
            onClick={() => {
              soundManager.playClick();
              setActiveTab("weekly");
              if (!weeklyOverview) {
                fetchWeeklyData(selectedWeekId, selectedClass);
              }
            }}
            className={`px-4 py-2 rounded-neu-sm text-xs font-bold transition flex items-center gap-2 cursor-pointer ${
              activeTab === "weekly"
                ? "bg-blue-600 text-white shadow-neu-blue"
                : "text-slate-600 hover:text-slate-900 shadow-none hover:bg-white/40"
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Tiến Độ Theo Kế Hoạch Tuần</span>
          </button>

          <button
            onClick={() => {
              soundManager.playClick();
              setActiveTab("matrix");
              if (matrixRows.length === 0) {
                fetchMatrixData(selectedClass);
              }
            }}
            className={`px-4 py-2 rounded-neu-sm text-xs font-bold transition flex items-center gap-2 cursor-pointer ${
              activeTab === "matrix"
                ? "bg-blue-600 text-white shadow-neu-blue"
                : "text-slate-600 hover:text-slate-900 shadow-none hover:bg-white/40"
            }`}
          >
            <Grid className="w-3.5 h-3.5" />
            <span>Ma Trận 35 Tuần Toàn Khóa</span>
          </button>

          <button
            onClick={() => {
              soundManager.playClick();
              setActiveTab("competencies");
            }}
            className={`px-4 py-2 rounded-neu-sm text-xs font-bold transition flex items-center gap-2 cursor-pointer ${
              activeTab === "competencies"
                ? "bg-blue-600 text-white shadow-neu-blue"
                : "text-slate-600 hover:text-slate-900 shadow-none hover:bg-white/40"
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Radar 5 Mạch Năng Lực</span>
          </button>
        </div>

        {/* ======================================================== */}
        {/* TAB 1: TỔNG QUAN TOÀN TRƯỜNG */}
        {/* ======================================================== */}
        {activeTab === "overview" && (
          <>
            {/* KPI Metric Cards */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4">
          {/* Sĩ số học sinh */}
          <div className="bg-[#e6ecf5] p-4 rounded-neu shadow-neu-flat border border-white/60 flex flex-col justify-between">
            <div className="flex items-center justify-between text-slate-500">
              <span className="text-xs font-bold">Tổng Sĩ Số</span>
              <Users className="w-4 h-4 text-blue-600" />
            </div>
            <div className="mt-2">
              <span className="text-2xl sm:text-3xl font-black text-slate-800">
                {overview?.totalStudents || 0}
              </span>
              <span className="text-xs text-slate-500 font-semibold ml-1">học sinh</span>
            </div>
            <p className="text-[11px] text-slate-500 font-medium mt-1">
              Đã cấp tài khoản ôn tập
            </p>
          </div>

          {/* Học sinh tích cực */}
          <div className="bg-[#e6ecf5] p-4 rounded-neu shadow-neu-flat border border-white/60 flex flex-col justify-between">
            <div className="flex items-center justify-between text-slate-500">
              <span className="text-xs font-bold">Đã Tham Gia</span>
              <UserCheck className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="mt-2">
              <span className="text-2xl sm:text-3xl font-black text-emerald-700">
                {overview?.activeStudents || 0}
              </span>
              <span className="text-xs text-slate-500 font-semibold ml-1">
                ({overview && overview.totalStudents > 0 ? Math.round((overview.activeStudents / overview.totalStudents) * 100) : 0}%)
              </span>
            </div>
            <p className="text-[11px] text-emerald-600 font-medium mt-1">
              Đã hoàn thành bài tập
            </p>
          </div>

          {/* Điểm trung bình vs Mục tiêu 6.00 */}
          <div className="bg-[#e6ecf5] p-4 rounded-neu shadow-neu-flat border border-white/60 flex flex-col justify-between">
            <div className="flex items-center justify-between text-slate-500">
              <span className="text-xs font-bold">Điểm Trung Bình</span>
              <TrendingUp className="w-4 h-4 text-indigo-600" />
            </div>
            <div className="mt-2 flex items-baseline gap-1">
              <span className={`text-2xl sm:text-3xl font-black ${(overview?.averageScore || 0) >= 6.0 ? "text-indigo-700" : "text-amber-600"}`}>
                {overview?.averageScore || 0}
              </span>
              <span className="text-xs text-slate-500 font-semibold">/ 10</span>
            </div>
            <div className="text-[11px] font-semibold mt-1 flex items-center gap-1 text-slate-600">
              <span>Mục tiêu GD1:</span>
              <span className="font-bold text-indigo-600">6.00 đ</span>
              {(overview?.averageScore || 0) >= 6.0 ? (
                <Check className="w-3 h-3 text-emerald-600" />
              ) : null}
            </div>
          </div>

          {/* Tỷ lệ Đạt chuẩn >= 5.0đ vs Mục tiêu 73% */}
          <div className="bg-[#e6ecf5] p-4 rounded-neu shadow-neu-flat border border-white/60 flex flex-col justify-between">
            <div className="flex items-center justify-between text-slate-500">
              <span className="text-xs font-bold">Tỷ Lệ Đạt (≥5.0đ)</span>
              <Award className="w-4 h-4 text-blue-600" />
            </div>
            <div className="mt-2">
              <span className={`text-2xl sm:text-3xl font-black ${(overview?.passRate || 0) >= 73 ? "text-blue-700" : "text-amber-600"}`}>
                {overview?.passRate || 0}%
              </span>
            </div>
            <div className="text-[11px] font-semibold mt-1 flex items-center gap-1 text-slate-600">
              <span>Chỉ tiêu trường:</span>
              <span className="font-bold text-blue-600">≥ 73%</span>
              {(overview?.passRate || 0) >= 73 ? (
                <Check className="w-3 h-3 text-emerald-600" />
              ) : null}
            </div>
          </div>

          {/* Học sinh cần phụ đạo */}
          <div className="bg-[#e6ecf5] p-4 rounded-neu shadow-neu-flat border border-white/60 flex flex-col justify-between col-span-2 md:col-span-1">
            <div className="flex items-center justify-between text-slate-500">
              <span className="text-xs font-bold">Cần Phụ Đạo</span>
              <AlertTriangle className="w-4 h-4 text-rose-600" />
            </div>
            <div className="mt-2">
              <span className="text-2xl sm:text-3xl font-black text-rose-600">
                {overview?.atRiskCount || 0}
              </span>
              <span className="text-xs text-slate-500 font-semibold ml-1">em (&lt;5đ)</span>
            </div>
            <p className="text-[11px] text-rose-600 font-medium mt-1">
              Cần GV đôn đốc, phụ đạo
            </p>
          </div>
        </div>

        {/* Action Controls & Filtering Bar */}
        <div className="bg-[#e6ecf5] p-4 rounded-neu shadow-neu-flat border border-white/60 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          {/* Lọc Lớp & Trạng Thái & Tìm kiếm */}
          <div className="flex flex-wrap items-center gap-2 flex-1">
            {/* Lọc Lớp */}
            <div className="flex items-center gap-1 bg-[#e6ecf5] px-2.5 py-1.5 rounded-neu-sm shadow-neu-inset-sm">
              <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
              <select
                value={selectedClass}
                onChange={(e) => {
                  setSelectedClass(e.target.value);
                  fetchData(e.target.value);
                }}
                aria-label="Lọc theo lớp"
                className="bg-transparent text-xs font-bold text-slate-700 focus:outline-none cursor-pointer"
              >
                <option value="all">Tất cả các lớp</option>
                {overview?.classes?.map((c) => (
                  <option key={c} value={c}>
                    Lớp {c}
                  </option>
                ))}
              </select>
            </div>

            {/* Lọc Trạng thái học lực */}
            <div className="flex items-center gap-1 bg-[#e6ecf5] px-2.5 py-1.5 rounded-neu-sm shadow-neu-inset-sm">
              <Filter className="w-3.5 h-3.5 text-indigo-600" />
              <select
                value={selectedStatusFilter}
                onChange={(e) => setSelectedStatusFilter(e.target.value)}
                aria-label="Lọc theo kết quả"
                className="bg-transparent text-xs font-bold text-slate-700 focus:outline-none cursor-pointer"
              >
                <option value="all">Tất cả kết quả</option>
                <option value="excellent">Xuất sắc (≥ 8.0đ)</option>
                <option value="passed">Đạt chuẩn (≥ 5.0đ)</option>
                <option value="atRisk">Cần rèn luyện (&lt; 5.0đ)</option>
                <option value="notStarted">Chưa làm bài</option>
              </select>
            </div>

            {/* Ô tìm kiếm theo tên hoặc mã HS */}
            <div className="flex items-center gap-2 bg-[#e6ecf5] px-3 py-1.5 rounded-neu-sm shadow-neu-inset flex-1 min-w-[200px]">
              <Search className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm học sinh theo tên, mã HS..."
                className="w-full bg-transparent text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>
          </div>

          {/* Action Buttons: Add / Bulk / Export */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={() => {
                soundManager.playClick();
                setCreateMode("single");
                setFormNotification(null);
                setIsAddModalOpen(true);
              }}
              className="px-3 py-2 rounded-neu-sm bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-neu-blue active:shadow-neu-blue-pressed transition flex items-center gap-1.5"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Cấp Tài Khoản</span>
            </button>

            <button
              onClick={() => {
                soundManager.playClick();
                setCreateMode("bulk");
                setFormNotification(null);
                setIsAddModalOpen(true);
              }}
              className="px-3 py-2 rounded-neu-sm bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-neu-flat-xs active:shadow-neu-inset transition flex items-center gap-1.5"
            >
              <Layers className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Nhập Danh Sách (Bulk)</span>
              <span className="sm:hidden">Bulk</span>
            </button>

            <button
              onClick={exportToCSV}
              className="px-3 py-2 rounded-neu-sm bg-[#e6ecf5] hover:bg-emerald-50 text-emerald-700 font-bold text-xs shadow-neu-flat-xs active:shadow-neu-inset transition flex items-center gap-1.5 border border-emerald-300/60"
              title="Xuất dữ liệu ra Excel / CSV"
            >
              <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600" />
              <span className="hidden sm:inline">Xuất Báo Cáo</span>
            </button>

            <button
              onClick={() => {
                soundManager.playClick();
                setIsPrintModalOpen(true);
              }}
              className="px-3 py-2 rounded-neu-sm bg-[#e6ecf5] hover:bg-blue-50 text-blue-700 font-bold text-xs shadow-neu-flat-xs active:shadow-neu-inset transition flex items-center gap-1.5 border border-blue-300/60"
              title="Xem và in biên bản báo cáo PDF chuẩn sư phạm A4"
            >
              <Printer className="w-3.5 h-3.5 text-blue-600" />
              <span className="hidden sm:inline">In Báo Cáo (PDF)</span>
            </button>

            <button
              onClick={handleResetData}
              disabled={isResetting}
              className="px-3 py-2 rounded-neu-sm bg-[#e6ecf5] hover:bg-rose-50 text-rose-700 font-bold text-xs shadow-neu-flat-xs active:shadow-neu-inset transition flex items-center gap-1.5 border border-rose-300/60 cursor-pointer disabled:opacity-50"
              title="Dọn sạch dữ liệu mẫu để sẵn sàng thêm tài khoản học sinh thật"
            >
              <Trash2 className={`w-3.5 h-3.5 text-rose-600 ${isResetting ? "animate-spin" : ""}`} />
              <span className="hidden sm:inline">{isResetting ? "Đang dọn..." : "Dọn Dữ Liệu Mẫu"}</span>
              <span className="sm:hidden">Dọn Mẫu</span>
            </button>
          </div>
        </div>

        {/* Student Progress Table */}
        <div className="bg-[#e6ecf5] rounded-neu shadow-neu-flat border border-white/60 overflow-hidden">
          <div className="p-4 border-b border-slate-300/60 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2 className="text-sm font-black text-slate-800">
                Bảng Tiến Độ & Đánh Giá Năng Lực Học Sinh
              </h2>
              <span className="text-xs text-slate-500 font-semibold">
                ({filteredStudents.length} học sinh hiển thị)
              </span>
            </div>
            <div className="text-[11px] text-slate-500 font-medium hidden sm:block">
              Chuẩn đầu ra THPT môn Tin học: <strong>Mục tiêu ≥ 6.00đ</strong>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-200/60 text-slate-600 uppercase font-bold text-[10px] tracking-wider border-b border-slate-300">
                <tr>
                  <th className="py-3 px-3 text-center w-12">STT</th>
                  <th className="py-3 px-3">Mã HS / Đăng Nhập</th>
                  <th className="py-3 px-3">Họ và Tên</th>
                  <th className="py-3 px-3 text-center">Lớp</th>
                  <th className="py-3 px-3 text-center">Số Câu</th>
                  <th className="py-3 px-3 text-center">Tỷ Lệ Đúng</th>
                  <th className="py-3 px-3 text-center">Điểm Dự Kiến</th>
                  <th className="py-3 px-3">Chủ Đề Còn Yếu</th>
                  <th className="py-3 px-3 text-center">Trạng Thái</th>
                  <th className="py-3 px-3 text-right">Thao Tác</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-300/40">
                {filteredStudents.length === 0 ? (
                  <tr>
                    <td colSpan={10} className="py-10 text-center text-slate-500 font-medium">
                      Không tìm thấy học sinh nào phù hợp với bộ lọc hiện tại.
                    </td>
                  </tr>
                ) : (
                  filteredStudents.map((st, idx) => {
                    const userAccount = allUserAccounts.find((u) => u.id === st.studentId);
                    const isAccountActive = userAccount ? userAccount.isActive : true;

                    return (
                      <tr
                        key={st.studentId}
                        className={`hover:bg-blue-50/40 transition ${!isAccountActive ? "opacity-60 bg-slate-100" : ""}`}
                      >
                        {/* STT */}
                        <td className="py-3 px-3 text-center font-bold text-slate-500">
                          {idx + 1}
                        </td>

                        {/* Username */}
                        <td className="py-3 px-3 font-mono font-bold text-slate-700">
                          {st.username}
                        </td>

                        {/* Full Name */}
                        <td className="py-3 px-3">
                          <button
                            onClick={() => {
                              setActiveStudent(st);
                              setIsDetailModalOpen(true);
                            }}
                            className="font-bold text-slate-800 hover:text-blue-700 text-left transition flex items-center gap-1.5"
                          >
                            <span>{st.fullName}</span>
                            {!isAccountActive && (
                              <span className="text-[9px] bg-rose-100 text-rose-700 px-1.5 py-0.2 rounded font-bold">
                                Bị Khóa
                              </span>
                            )}
                          </button>
                        </td>

                        {/* Class */}
                        <td className="py-3 px-3 text-center font-bold text-blue-700">
                          {st.className}
                        </td>

                        {/* Total Attempted */}
                        <td className="py-3 px-3 text-center font-bold text-slate-700">
                          {st.totalQuestionsAttempted}
                        </td>

                        {/* Accuracy Rate */}
                        <td className="py-3 px-3 text-center">
                          <div className="flex items-center justify-center gap-1 font-bold">
                            <span
                              className={
                                st.accuracyRate >= 80
                                  ? "text-emerald-600"
                                  : st.accuracyRate >= 50
                                  ? "text-blue-600"
                                  : st.totalQuestionsAttempted === 0
                                  ? "text-slate-400"
                                  : "text-rose-600"
                              }
                            >
                              {st.totalQuestionsAttempted > 0 ? `${st.accuracyRate}%` : "—"}
                            </span>
                          </div>
                        </td>

                        {/* Estimated THPT Score */}
                        <td className="py-3 px-3 text-center">
                          {st.totalQuestionsAttempted > 0 ? (
                            <span
                              className={`px-2 py-0.5 rounded-full font-black text-xs shadow-neu-flat-xs ${
                                st.estimatedScore >= 8.0
                                  ? "bg-emerald-100 text-emerald-800"
                                  : st.estimatedScore >= 6.5
                                  ? "bg-blue-100 text-blue-800"
                                  : st.estimatedScore >= 5.0
                                  ? "bg-amber-100 text-amber-800"
                                  : "bg-rose-100 text-rose-800"
                              }`}
                            >
                              {st.estimatedScore.toFixed(1)} đ
                            </span>
                          ) : (
                            <span className="text-slate-400 font-semibold">Chưa thi</span>
                          )}
                        </td>

                        {/* Weak Topics */}
                        <td className="py-3 px-3 max-w-[200px]">
                          {st.weakTopics.length > 0 ? (
                            <div className="flex flex-wrap gap-1">
                              {st.weakTopics.map((wt) => (
                                <span
                                  key={wt}
                                  className="text-[10px] font-bold bg-rose-50 text-rose-700 px-1.5 py-0.5 rounded border border-rose-200"
                                  title={wt}
                                >
                                  {wt.replace("tin-", "").replace(/-/g, " ")}
                                </span>
                              ))}
                            </div>
                          ) : st.totalQuestionsAttempted > 0 ? (
                            <span className="text-[11px] text-emerald-600 font-bold flex items-center gap-1">
                              <CheckCircle2 className="w-3 h-3" /> Nắm vững
                            </span>
                          ) : (
                            <span className="text-[11px] text-slate-400">—</span>
                          )}
                        </td>

                        {/* Status Badge */}
                        <td className="py-3 px-3 text-center">
                          {st.status === "XuatSac" && (
                            <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-[10px]">
                              Xuất Sắc
                            </span>
                          )}
                          {st.status === "Dat" && (
                            <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 font-extrabold text-[10px]">
                              Đạt Chuẩn
                            </span>
                          )}
                          {st.status === "CanCoGang" && (
                            <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-extrabold text-[10px]">
                              Cần Cố Gắng
                            </span>
                          )}
                          {st.status === "NguyCoYeu" && (
                            <span className="px-2 py-0.5 rounded-full bg-rose-100 text-rose-800 font-extrabold text-[10px]">
                              Nguy Cơ Yếu
                            </span>
                          )}
                          {st.status === "ChuaThamGia" && (
                            <span className="px-2 py-0.5 rounded-full bg-slate-200 text-slate-600 font-bold text-[10px]">
                              Chưa Ôn
                            </span>
                          )}
                        </td>

                        {/* Actions */}
                        <td className="py-3 px-3 text-right">
                          <div className="flex items-center justify-end gap-1">
                            {/* Chi tiết */}
                            <button
                              onClick={() => {
                                soundManager.playClick();
                                setActiveStudent(st);
                                setIsDetailModalOpen(true);
                              }}
                              className="p-1.5 rounded-neu-sm bg-[#e6ecf5] shadow-neu-flat-xs active:shadow-neu-inset text-blue-600 hover:text-blue-800 transition"
                              title="Xem chi tiết tiến độ"
                            >
                              <Eye className="w-3.5 h-3.5" />
                            </button>

                            {/* Cấp lại mật khẩu */}
                            <button
                              onClick={() => {
                                soundManager.playClick();
                                setActiveStudent(st);
                                setNewPasswordVal("123");
                                setIsResetPasswordModalOpen(true);
                              }}
                              className="p-1.5 rounded-neu-sm bg-[#e6ecf5] shadow-neu-flat-xs active:shadow-neu-inset text-amber-600 hover:text-amber-800 transition"
                              title="Cấp lại mật khẩu"
                            >
                              <KeyRound className="w-3.5 h-3.5" />
                            </button>

                            {/* Khóa / Mở khóa */}
                            <button
                              onClick={() => handleToggleLock(st)}
                              className={`p-1.5 rounded-neu-sm bg-[#e6ecf5] shadow-neu-flat-xs active:shadow-neu-inset transition ${
                                isAccountActive
                                  ? "text-slate-600 hover:text-rose-600"
                                  : "text-rose-600 hover:text-emerald-600"
                              }`}
                              title={isAccountActive ? "Khóa tài khoản" : "Mở khóa tài khoản"}
                            >
                              {isAccountActive ? (
                                <Unlock className="w-3.5 h-3.5" />
                              ) : (
                                <Lock className="w-3.5 h-3.5" />
                              )}
                            </button>

                            {/* Xóa */}
                            <button
                              onClick={() => handleDeleteStudent(st)}
                              className="p-1.5 rounded-neu-sm bg-[#e6ecf5] shadow-neu-flat-xs active:shadow-neu-inset text-rose-500 hover:text-rose-700 transition"
                              title="Xóa học sinh"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
        </>
      )}

      {/* ======================================================== */}
      {/* TAB 2: TIẾN ĐỘ THEO KẾ HOẠCH TUẦN (35 TUẦN GD1) */}
      {/* ======================================================== */}
      {activeTab === "weekly" && (
        <div className="space-y-6">
          {/* 1. Header & Controls of Weekly Plan */}
          <div className="bg-[#e6ecf5] p-4 rounded-neu shadow-neu-flat border border-white/60 space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <h2 className="text-sm font-black text-slate-800 uppercase tracking-wide">
                    Theo Dõi Tiến Độ Theo Kế Hoạch Tuần (35 Tuần GD1)
                  </h2>
                </div>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  Bám sát Kế hoạch ôn tập Giai đoạn 1 (KH ON TAP GD1_MOI.docx) - Trường THPT Nguyễn Sinh Sắc
                </p>
              </div>

              {/* Học kỳ & Lớp selectors */}
              <div className="flex items-center gap-2 flex-wrap">
                {/* Học kỳ Pill Selector */}
                <div className="flex items-center gap-1 bg-[#e6ecf5] p-1 rounded-neu-sm shadow-neu-inset-sm">
                  <button
                    onClick={() => setSelectedSemester("all")}
                    className={`px-2.5 py-1 text-xs font-bold rounded transition cursor-pointer ${
                      selectedSemester === "all"
                        ? "bg-blue-600 text-white shadow-neu-blue"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Cả Năm (35 Tuần)
                  </button>
                  <button
                    onClick={() => setSelectedSemester(1)}
                    className={`px-2.5 py-1 text-xs font-bold rounded transition cursor-pointer ${
                      selectedSemester === 1
                        ? "bg-blue-600 text-white shadow-neu-blue"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Học Kỳ I (Tuần 2–18)
                  </button>
                  <button
                    onClick={() => setSelectedSemester(2)}
                    className={`px-2.5 py-1 text-xs font-bold rounded transition cursor-pointer ${
                      selectedSemester === 2
                        ? "bg-blue-600 text-white shadow-neu-blue"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Học Kỳ II (Tuần 19–35)
                  </button>
                </div>

                {/* Lọc theo lớp */}
                <div className="flex items-center gap-1 bg-[#e6ecf5] px-2.5 py-1.5 rounded-neu-sm shadow-neu-inset-sm">
                  <Users className="w-3.5 h-3.5 text-blue-600" />
                  <select
                    value={selectedClass}
                    onChange={(e) => {
                      setSelectedClass(e.target.value);
                      fetchWeeklyData(selectedWeekId, e.target.value);
                    }}
                    className="bg-transparent text-xs font-bold text-slate-700 focus:outline-none cursor-pointer"
                  >
                    <option value="all">Tất cả các lớp</option>
                    {overview?.classes?.map((c) => (
                      <option key={c} value={c}>
                        Lớp {c}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Week Selector Carousel / Cards */}
            <div className="pt-2 border-t border-slate-300/60">
              <label className="text-xs font-bold text-slate-600 block mb-2">
                Chọn chuyên đề tuần cần theo dõi ({filteredWeeksBySemester.length} mốc chuyên đề):
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5 max-h-48 overflow-y-auto pr-1">
                {filteredWeeksBySemester.map((w) => {
                  const isSelected = w.id === selectedWeekId;
                  return (
                    <button
                      key={w.id}
                      onClick={() => {
                        soundManager.playClick();
                        setSelectedWeekId(w.id);
                        fetchWeeklyData(w.id, selectedClass);
                      }}
                      className={`p-2.5 rounded-neu-sm text-left transition flex flex-col justify-between border cursor-pointer ${
                        isSelected
                          ? "bg-blue-600 text-white border-blue-700 shadow-neu-blue"
                          : "bg-[#e6ecf5] hover:bg-white/60 text-slate-700 border-white/70 shadow-neu-flat-xs active:shadow-neu-inset"
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <span className={`text-[11px] font-black uppercase ${isSelected ? "text-blue-100" : "text-blue-700"}`}>
                            {w.weekDisplay}
                          </span>
                          <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded-full ${isSelected ? "bg-white/20 text-white" : "bg-slate-200 text-slate-600"}`}>
                            HK{w.semester} • {w.periods}t
                          </span>
                        </div>
                        <h4 className={`text-xs font-bold mt-1 line-clamp-2 leading-tight ${isSelected ? "text-white" : "text-slate-800"}`}>
                          {w.title}
                        </h4>
                      </div>
                      <div className={`text-[10px] font-medium mt-2 pt-1 border-t flex items-center justify-between ${isSelected ? "border-white/20 text-blue-100" : "border-slate-300/60 text-slate-500"}`}>
                        <span>Chỉ tiêu:</span>
                        <span className="font-bold">{w.totalTargetQuestions} câu</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* 2. Selected Week Details & KPI Metric Cards */}
          {isWeeklyLoading ? (
            <div className="bg-[#e6ecf5] p-12 rounded-neu shadow-neu-flat text-center space-y-3">
              <RefreshCw className="w-8 h-8 text-blue-600 animate-spin mx-auto" />
              <p className="text-xs font-bold text-slate-600">Đang tổng hợp dữ liệu tuần từ Đám mây Redis...</p>
            </div>
          ) : weeklyOverview ? (
            <div className="space-y-6">
              {/* Banner Tuần Đang Chọn */}
              <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white p-4 sm:p-5 rounded-neu shadow-neu-flat flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-white/15 text-[11px] font-extrabold uppercase tracking-wide">
                    <span>{weeklyOverview.week.weekDisplay}</span>
                    <span>•</span>
                    <span>Học kỳ {weeklyOverview.week.semester}</span>
                    <span>•</span>
                    <span>Thời lượng: {weeklyOverview.week.periods} tiết</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-black leading-tight">
                    {weeklyOverview.week.title}
                  </h3>
                  <p className="text-xs text-blue-100/90 font-medium">
                    {weeklyOverview.week.chapter} • Chỉ tiêu: {weeklyOverview.week.totalTargetQuestions} câu hỏi
                  </p>
                </div>

                <button
                  onClick={exportWeeklyCSV}
                  className="self-start md:self-auto px-4 py-2.5 rounded-neu-sm bg-white hover:bg-blue-50 text-blue-800 font-bold text-xs shadow-neu-flat-xs active:shadow-neu-inset transition flex items-center gap-2 flex-shrink-0 cursor-pointer"
                >
                  <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
                  <span>Xuất Báo Cáo Tuần (CSV)</span>
                </button>
              </div>

              {/* 4 Thẻ KPI của Tuần */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                {/* Tỷ lệ hoàn thành tuần */}
                <div className="bg-[#e6ecf5] p-4 rounded-neu shadow-neu-flat border border-white/60 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-slate-500">
                    <span className="text-xs font-bold">Hoàn Thành Tuần</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div className="mt-2">
                    <span className="text-2xl sm:text-3xl font-black text-emerald-700">
                      {weeklyOverview.completionRate}%
                    </span>
                    <span className="text-xs text-slate-500 font-semibold ml-1.5">
                      ({weeklyOverview.completedCount}/{weeklyOverview.totalStudents} HS)
                    </span>
                  </div>
                  <p className="text-[11px] text-emerald-600 font-medium mt-1">
                    Đạt ≥ 5.0đ hoặc đủ số câu tuần
                  </p>
                </div>

                {/* Điểm trung bình tuần */}
                <div className="bg-[#e6ecf5] p-4 rounded-neu shadow-neu-flat border border-white/60 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-slate-500">
                    <span className="text-xs font-bold">Điểm Trung Bình Tuần</span>
                    <TrendingUp className="w-4 h-4 text-indigo-600" />
                  </div>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className={`text-2xl sm:text-3xl font-black ${weeklyOverview.averageScore >= 6.0 ? "text-indigo-700" : "text-amber-600"}`}>
                      {weeklyOverview.averageScore}
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">/ 10</span>
                  </div>
                  <div className="text-[11px] font-semibold mt-1 flex items-center gap-1 text-slate-600">
                    <span>Mục tiêu GD1:</span>
                    <span className="font-bold text-indigo-600">≥ 6.00đ</span>
                  </div>
                </div>

                {/* Đang làm / Đã tham gia */}
                <div className="bg-[#e6ecf5] p-4 rounded-neu shadow-neu-flat border border-white/60 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-slate-500">
                    <span className="text-xs font-bold">Đã Bắt Đầu Làm</span>
                    <Clock className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="mt-2">
                    <span className="text-2xl sm:text-3xl font-black text-blue-700">
                      {weeklyOverview.participatedCount}
                    </span>
                    <span className="text-xs text-slate-500 font-semibold ml-1.5">
                      / {weeklyOverview.totalStudents} HS
                    </span>
                  </div>
                  <p className="text-[11px] text-blue-600 font-medium mt-1">
                    Đã làm ít nhất 1 câu tuần này
                  </p>
                </div>

                {/* Báo động: Chưa tham gia tuần này */}
                <div className="bg-[#e6ecf5] p-4 rounded-neu shadow-neu-flat border border-white/60 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-slate-500">
                    <span className="text-xs font-bold">Chưa Làm Bài Tuần Này</span>
                    <AlertTriangle className="w-4 h-4 text-rose-600" />
                  </div>
                  <div className="mt-2">
                    <span className={`text-2xl sm:text-3xl font-black ${weeklyOverview.notStartedCount > 0 ? "text-rose-600" : "text-slate-600"}`}>
                      {weeklyOverview.notStartedCount}
                    </span>
                    <span className="text-xs text-slate-500 font-semibold ml-1.5">học sinh</span>
                  </div>
                  <p className="text-[11px] text-rose-600 font-medium mt-1">
                    Cần GV nhắc nhở nộp bài
                  </p>
                </div>
              </div>

              {/* 3. Bảng Chi Tiết Học Sinh Theo Tuần */}
              <div className="bg-[#e6ecf5] rounded-neu shadow-neu-flat border border-white/60 overflow-hidden">
                {/* Toolbar lọc học sinh trong tuần */}
                <div className="p-4 border-b border-slate-300/60 flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-black text-slate-800">
                      Danh Sách Tiến Độ Học Sinh: {weeklyOverview.week.weekDisplay}
                    </h4>
                    <span className="text-xs text-slate-500 font-semibold">
                      ({filteredWeeklyStudents.length} học sinh hiển thị)
                    </span>
                  </div>

                  <div className="flex items-center gap-2 flex-wrap">
                    {/* Lọc trạng thái tuần */}
                    <div className="flex items-center gap-1 bg-[#e6ecf5] px-2.5 py-1.5 rounded-neu-sm shadow-neu-inset-sm">
                      <Filter className="w-3.5 h-3.5 text-blue-600" />
                      <select
                        value={weeklyStatusFilter}
                        onChange={(e) => setWeeklyStatusFilter(e.target.value as any)}
                        className="bg-transparent text-xs font-bold text-slate-700 focus:outline-none cursor-pointer"
                      >
                        <option value="all">Tất cả trạng thái</option>
                        <option value="completed">Đã hoàn thành tuần</option>
                        <option value="inProgress">Đang làm dở</option>
                        <option value="notStarted">Chưa làm bài</option>
                      </select>
                    </div>

                    {/* Tìm kiếm tên / mã */}
                    <div className="flex items-center gap-2 bg-[#e6ecf5] px-3 py-1.5 rounded-neu-sm shadow-neu-inset min-w-[200px]">
                      <Search className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                      <input
                        type="text"
                        value={weeklySearchQuery}
                        onChange={(e) => setWeeklySearchQuery(e.target.value)}
                        placeholder="Tìm học sinh trong tuần..."
                        className="w-full bg-transparent text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none"
                      />
                      {weeklySearchQuery && (
                        <button onClick={() => setWeeklySearchQuery("")} className="text-slate-400 hover:text-slate-600 cursor-pointer">
                          <X className="w-3 h-3" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Bảng bảng điểm tuần */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-200/60 text-slate-600 uppercase font-bold text-[10px] tracking-wider border-b border-slate-300">
                      <tr>
                        <th className="py-3 px-3 text-center w-12">STT</th>
                        <th className="py-3 px-3">Mã HS</th>
                        <th className="py-3 px-3">Họ và Tên</th>
                        <th className="py-3 px-3 text-center">Lớp</th>
                        <th className="py-3 px-3 text-center">Số Câu Làm</th>
                        <th className="py-3 px-3 text-center">Số Câu Đúng</th>
                        <th className="py-3 px-3 text-center">Tỷ Lệ Đúng</th>
                        <th className="py-3 px-3 text-center">Điểm Tuần</th>
                        <th className="py-3 px-3 text-center">Thời Gian</th>
                        <th className="py-3 px-3 text-center">Trạng Thái Tuần</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-300/40">
                      {filteredWeeklyStudents.length === 0 ? (
                        <tr>
                          <td colSpan={10} className="py-10 text-center text-slate-500 font-medium">
                            Không có học sinh nào phù hợp với bộ lọc hiện tại.
                          </td>
                        </tr>
                      ) : (
                        filteredWeeklyStudents.map((st, idx) => (
                          <tr key={st.studentId} className="hover:bg-blue-50/40 transition">
                            <td className="py-3 px-3 text-center font-bold text-slate-500">{idx + 1}</td>
                            <td className="py-3 px-3 font-mono font-bold text-slate-700">{st.username}</td>
                            <td className="py-3 px-3 font-bold text-slate-800">{st.fullName}</td>
                            <td className="py-3 px-3 text-center font-bold text-blue-700">{st.className}</td>
                            <td className="py-3 px-3 text-center font-bold text-slate-700">
                              {st.questionsAttempted} / {st.totalWeekQuestions}
                            </td>
                            <td className="py-3 px-3 text-center font-bold text-emerald-700">{st.correctAnswers}</td>
                            <td className="py-3 px-3 text-center">
                              <span className={`font-bold ${st.accuracyRate >= 70 ? "text-emerald-700" : st.accuracyRate >= 50 ? "text-blue-700" : "text-amber-600"}`}>
                                {st.questionsAttempted > 0 ? `${st.accuracyRate}%` : "—"}
                              </span>
                            </td>
                            <td className="py-3 px-3 text-center">
                              {st.questionsAttempted > 0 ? (
                                <span className={`px-2 py-0.5 rounded-full font-black text-xs ${st.score >= 8.0 ? "bg-emerald-100 text-emerald-800" : st.score >= 5.0 ? "bg-blue-100 text-blue-800" : "bg-rose-100 text-rose-800"}`}>
                                  {st.score.toFixed(1)} đ
                                </span>
                              ) : (
                                <span className="text-slate-400 font-bold">—</span>
                              )}
                            </td>
                            <td className="py-3 px-3 text-center text-slate-600 font-medium">
                              {st.timeSpentMinutes > 0 ? `${st.timeSpentMinutes}p` : "—"}
                            </td>
                            <td className="py-3 px-3 text-center">
                              {st.status === "HoanThanh" && (
                                <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-[10px]">
                                  Đã Hoàn Thành
                                </span>
                              )}
                              {st.status === "DangLam" && (
                                <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-extrabold text-[10px]">
                                  Đang Làm Dở
                                </span>
                              )}
                              {st.status === "ChuaThamGia" && (
                                <span className="px-2 py-0.5 rounded-full bg-slate-200 text-slate-600 font-bold text-[10px]">
                                  Chưa Tham Gia
                                </span>
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
          ) : null}
        </div>
      )}

      {/* ======================================================== */}
      {/* TAB 3: MA TRẬN TIẾN ĐỘ 35 TUẦN TOÀN KHÓA */}
      {/* ======================================================== */}
      {activeTab === "matrix" && (
        <div className="space-y-6">
          <div className="bg-[#e6ecf5] p-4 rounded-neu shadow-neu-flat border border-white/60 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <Grid className="w-5 h-5 text-indigo-600" />
                  <h2 className="text-sm font-black text-slate-800 uppercase tracking-wide">
                    Ma Trận Tiến Độ Toàn Khóa (35 Tuần Ôn Tập)
                  </h2>
                </div>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  Xem toàn cảnh mức độ hoàn thành bài tập của từng học sinh qua tất cả các tuần học trong năm.
                </p>
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                {/* Lọc theo lớp */}
                <div className="flex items-center gap-1 bg-[#e6ecf5] px-2.5 py-1.5 rounded-neu-sm shadow-neu-inset-sm">
                  <Users className="w-3.5 h-3.5 text-indigo-600" />
                  <select
                    value={selectedClass}
                    onChange={(e) => {
                      setSelectedClass(e.target.value);
                      fetchMatrixData(e.target.value);
                    }}
                    className="bg-transparent text-xs font-bold text-slate-700 focus:outline-none cursor-pointer"
                  >
                    <option value="all">Tất cả các lớp</option>
                    {overview?.classes?.map((c) => (
                      <option key={c} value={c}>
                        Lớp {c}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Tìm kiếm */}
                <div className="flex items-center gap-2 bg-[#e6ecf5] px-3 py-1.5 rounded-neu-sm shadow-neu-inset min-w-[180px]">
                  <Search className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                  <input
                    type="text"
                    value={matrixSearchQuery}
                    onChange={(e) => setMatrixSearchQuery(e.target.value)}
                    placeholder="Tìm theo tên học sinh..."
                    className="w-full bg-transparent text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Chú giải trạng thái (Legend) */}
            <div className="flex items-center gap-4 text-xs font-bold pt-2 border-t border-slate-300/60 flex-wrap">
              <span className="text-slate-500 font-medium">Chú giải:</span>
              <div className="flex items-center gap-1.5 text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded text-[10px]">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                <span>Đã hoàn thành tuần (≥ 5.0đ)</span>
              </div>
              <div className="flex items-center gap-1.5 text-amber-800 bg-amber-100 px-2 py-0.5 rounded text-[10px]">
                <Clock className="w-3 h-3 text-amber-600" />
                <span>Đang làm dở</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-500 bg-slate-200 px-2 py-0.5 rounded text-[10px]">
                <span>— Chưa tham gia</span>
              </div>
            </div>
          </div>

          {/* Bảng Ma Trận Cuộn Ngang */}
          {isMatrixLoading ? (
            <div className="bg-[#e6ecf5] p-12 rounded-neu shadow-neu-flat text-center space-y-3">
              <RefreshCw className="w-8 h-8 text-indigo-600 animate-spin mx-auto" />
              <p className="text-xs font-bold text-slate-600">Đang tổng hợp ma trận 35 tuần từ Đám mây Redis...</p>
            </div>
          ) : (
            <div className="bg-[#e6ecf5] rounded-neu shadow-neu-flat border border-white/60 overflow-hidden">
              <div className="overflow-x-auto max-h-[70vh]">
                <table className="w-full text-left text-xs border-collapse">
                  <thead className="bg-slate-200/90 text-slate-700 uppercase font-bold text-[10px] tracking-wider sticky top-0 z-20 shadow-sm">
                    <tr>
                      <th className="py-3 px-3 text-center sticky left-0 z-30 bg-slate-200/95 w-12 border-r border-slate-300">
                        STT
                      </th>
                      <th className="py-3 px-3 sticky left-12 z-30 bg-slate-200/95 min-w-[140px] border-r border-slate-300">
                        Họ và Tên
                      </th>
                      <th className="py-3 px-2 text-center sticky left-[188px] z-30 bg-slate-200/95 w-16 border-r border-slate-300">
                        Lớp
                      </th>
                      <th className="py-3 px-2 text-center sticky left-[252px] z-30 bg-slate-200/95 w-20 border-r border-slate-300 text-indigo-700">
                        Đã Đạt
                      </th>
                      {matrixWeeks.map((w) => (
                        <th
                          key={w.id}
                          className="py-2.5 px-2 text-center min-w-[90px] border-r border-slate-300"
                          title={`${w.weekDisplay}: ${w.title}`}
                        >
                          <div className="text-[10px] font-black text-blue-700">{w.weekDisplay}</div>
                          <div className="text-[9px] text-slate-500 font-medium truncate max-w-[85px]">
                            {w.title.split(":")[0]}
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-300/40">
                    {filteredMatrixRows.length === 0 ? (
                      <tr>
                        <td colSpan={matrixWeeks.length + 4} className="py-10 text-center text-slate-500 font-medium">
                          Không có học sinh nào phù hợp.
                        </td>
                      </tr>
                    ) : (
                      filteredMatrixRows.map((row, idx) => (
                        <tr key={row.studentId} className="hover:bg-blue-50/40 transition">
                          <td className="py-2.5 px-3 text-center font-bold text-slate-500 sticky left-0 z-10 bg-[#e6ecf5] border-r border-slate-300">
                            {idx + 1}
                          </td>
                          <td className="py-2.5 px-3 font-bold text-slate-800 sticky left-12 z-10 bg-[#e6ecf5] border-r border-slate-300 whitespace-nowrap">
                            {row.fullName}
                          </td>
                          <td className="py-2.5 px-2 text-center font-bold text-blue-700 sticky left-[188px] z-10 bg-[#e6ecf5] border-r border-slate-300">
                            {row.className}
                          </td>
                          <td className="py-2.5 px-2 text-center font-black text-indigo-700 sticky left-[252px] z-10 bg-[#e6ecf5] border-r border-slate-300">
                            {row.totalCompletedWeeks}/{matrixWeeks.length}
                          </td>
                          {matrixWeeks.map((w) => {
                            const cell = row.weeks[w.id];
                            return (
                              <td key={w.id} className="py-2 px-2 text-center border-r border-slate-300/50">
                                {cell?.status === "HoanThanh" ? (
                                  <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-extrabold text-[10px] shadow-neu-flat-xs">
                                    <Check className="w-2.5 h-2.5 text-emerald-600" />
                                    <span>{cell.score.toFixed(1)}đ</span>
                                  </span>
                                ) : cell?.status === "DangLam" ? (
                                  <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 font-bold text-[10px]">
                                    {cell.completedCount} câu
                                  </span>
                                ) : (
                                  <span className="text-slate-300 font-bold">—</span>
                                )}
                              </td>
                            );
                          })}
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ======================================================== */}
      {/* TAB 4: PHÂN TÍCH 5 MẠCH NĂNG LỰC GDPT 2018 TOÀN TRƯỜNG */}
      {/* ======================================================== */}
      {activeTab === "competencies" && (
        <div className="space-y-6">
          <div className="bg-[#e6ecf5] p-5 rounded-neu shadow-neu-flat border border-white/60 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h2 className="text-base sm:text-lg font-black text-slate-800 flex items-center gap-2">
                  <Compass className="w-5 h-5 text-blue-600" />
                  <span>
                    Đánh Giá Năng Lực Tin Học GDPT 2018 - {selectedClass === "all" ? "Toàn Trường" : `Lớp ${selectedClass}`}
                  </span>
                </h2>
                <p className="text-xs text-slate-500 font-medium">
                  Tổng hợp mức độ đạt được của 5 mạch năng lực cốt lõi theo Thông tư 32/2018/TT-BGDĐT
                </p>
              </div>

              {/* Bộ lọc Lớp */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-600">Lớp học:</span>
                <select
                  value={selectedClass}
                  onChange={(e) => {
                    setSelectedClass(e.target.value);
                  }}
                  className="px-3 py-1.5 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset text-xs font-bold text-slate-700 outline-none"
                >
                  <option value="all">Tất cả các lớp</option>
                  {(overview?.classes || []).map((c) => (
                    <option key={c} value={c}>
                      Lớp {c}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            <CompetencyRadarCard
              questions={INITIAL_QUESTIONS}
              attempts={
                selectedClass === "all"
                  ? attempts
                  : attempts.filter((a) => a.className === selectedClass)
              }
            />
          </div>
        </div>
      )}
      </div>

      {/* ======================================================== */}
      {/* MODAL 1: CẤP TÀI KHOẢN (ĐƠN LẺ & HÀNG LOẠT BULK IMPORT) */}
      {/* ======================================================== */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
          <div className="w-full max-w-lg bg-[#e6ecf5] rounded-neu shadow-neu-flat p-6 relative border border-white/70 space-y-4 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsAddModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#e6ecf5] shadow-neu-flat-xs active:shadow-neu-inset text-slate-500 hover:text-slate-800"
              aria-label="Đóng"
            >
              <X className="w-4 h-4" />
            </button>

            <div>
              <h2 className="text-base font-black text-slate-800">
                {createMode === "single" ? "Cấp Tài Khoản Học Sinh Mới" : "Nhập Danh Sách Hàng Loạt (Bulk Import)"}
              </h2>
              <p className="text-xs text-slate-500">
                Tài khoản được tạo sẽ có quyền đăng nhập làm bài ngay lập tức.
              </p>
            </div>

            {/* Switch Mode Tabs */}
            <div className="grid grid-cols-2 gap-2 p-1 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset-sm">
              <button
                type="button"
                onClick={() => {
                  setCreateMode("single");
                  setFormNotification(null);
                }}
                className={`py-2 text-xs font-bold rounded-lg transition ${
                  createMode === "single"
                    ? "bg-[#e6ecf5] text-blue-700 shadow-neu-flat-xs"
                    : "text-slate-500"
                }`}
              >
                Cấp Từng Em
              </button>
              <button
                type="button"
                onClick={() => {
                  setCreateMode("bulk");
                  setFormNotification(null);
                }}
                className={`py-2 text-xs font-bold rounded-lg transition ${
                  createMode === "bulk"
                    ? "bg-[#e6ecf5] text-indigo-700 shadow-neu-flat-xs"
                    : "text-slate-500"
                }`}
              >
                Nhập Hàng Loạt (Theo Lớp)
              </button>
            </div>

            {/* Notification alert */}
            {formNotification && (
              <div
                className={`p-3 rounded-neu-sm text-xs font-semibold flex items-start gap-2 shadow-neu-flat-xs ${
                  formNotification.type === "success"
                    ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                    : "bg-rose-50 text-rose-800 border border-rose-200"
                }`}
              >
                {formNotification.type === "success" ? (
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                )}
                <span>{formNotification.message}</span>
              </div>
            )}

            {/* TAB 1: FORM CẤP ĐƠN LẺ */}
            {createMode === "single" ? (
              <form onSubmit={handleCreateSingle} className="space-y-3.5">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 px-1">
                    Họ và Tên học sinh:
                  </label>
                  <input
                    type="text"
                    value={newStudentForm.fullName}
                    onChange={(e) =>
                      setNewStudentForm({ ...newStudentForm, fullName: e.target.value })
                    }
                    placeholder="Ví dụ: Nguyễn Văn Hoàng"
                    className="w-full px-3.5 py-2.5 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 px-1">
                      Tên Đăng Nhập (Mã HS):
                    </label>
                    <input
                      type="text"
                      value={newStudentForm.username}
                      onChange={(e) =>
                        setNewStudentForm({ ...newStudentForm, username: e.target.value })
                      }
                      placeholder="hs12a1_06"
                      className="w-full px-3.5 py-2.5 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                      required
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 px-1">
                      Lớp:
                    </label>
                    <input
                      type="text"
                      value={newStudentForm.className}
                      onChange={(e) =>
                        setNewStudentForm({ ...newStudentForm, className: e.target.value })
                      }
                      placeholder="12A1"
                      className="w-full px-3.5 py-2.5 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 px-1">
                    Mật khẩu ban đầu:
                  </label>
                  <input
                    type="text"
                    value={newStudentForm.password}
                    onChange={(e) =>
                      setNewStudentForm({ ...newStudentForm, password: e.target.value })
                    }
                    placeholder="123"
                    className="w-full px-3.5 py-2.5 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={formSubmitting}
                  className="w-full py-2.5 rounded-neu font-bold text-xs text-white bg-blue-600 hover:bg-blue-700 shadow-neu-blue active:shadow-neu-blue-pressed transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Plus className="w-4 h-4" />
                  <span>{formSubmitting ? "Đang tạo..." : "Xác Nhận Tạo Tài Khoản"}</span>
                </button>
              </form>
            ) : (
              /* TAB 2: BULK IMPORT */
              <div className="space-y-3">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 px-1 flex items-center justify-between">
                    <span>Dán danh sách học sinh:</span>
                    <span className="text-[10px] text-slate-500 font-normal">
                      Cấu trúc: Mã HS, Họ tên, Lớp, Mật khẩu
                    </span>
                  </label>
                  <textarea
                    rows={6}
                    value={bulkInputText}
                    onChange={(e) => setBulkInputText(e.target.value)}
                    className="w-full p-3 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset font-mono text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
                    placeholder="hs12a1_06, Hoàng Văn Thái, 12A1, 123"
                  />
                </div>

                <div className="p-2.5 rounded-neu-sm bg-indigo-50 text-[11px] text-indigo-800 leading-relaxed font-medium">
                  💡 <strong>Gợi ý:</strong> Bạn có thể copy trực tiếp cột từ Excel rồi paste vào đây. Mỗi dòng tương ứng với 1 học sinh.
                </div>

                <button
                  type="button"
                  onClick={handleBulkImport}
                  disabled={formSubmitting}
                  className="w-full py-2.5 rounded-neu font-bold text-xs text-white bg-indigo-600 hover:bg-indigo-700 shadow-neu-flat active:shadow-neu-inset transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Layers className="w-4 h-4" />
                  <span>{formSubmitting ? "Đang xử lý..." : "Bắt Đầu Nhập Danh Sách"}</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODAL 2: CHI TIẾT TIẾN ĐỘ HỌC TẬP TỪNG HỌC SINH */}
      {/* ======================================================== */}
      {isDetailModalOpen && activeStudent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
          <div className="w-full max-w-2xl bg-[#e6ecf5] rounded-neu shadow-neu-flat p-6 relative border border-white/70 space-y-4 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsDetailModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#e6ecf5] shadow-neu-flat-xs active:shadow-neu-inset text-slate-500 hover:text-slate-800"
              aria-label="Đóng"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header info */}
            <div className="flex items-center gap-3 border-b border-slate-300/60 pb-3">
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white font-black text-lg flex items-center justify-center shadow-neu-flat-xs">
                {activeStudent.fullName.charAt(0).toUpperCase()}
              </div>
              <div>
                <h2 className="text-base font-black text-slate-800">
                  {activeStudent.fullName}
                </h2>
                <p className="text-xs text-slate-500 font-medium">
                  Mã đăng nhập: <strong className="text-slate-700 font-mono">{activeStudent.username}</strong> • Lớp: <strong className="text-blue-700">{activeStudent.className}</strong>
                </p>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              <div className="p-3 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset-sm text-center">
                <span className="text-[10px] font-bold text-slate-500 uppercase">Tổng Câu Làm</span>
                <p className="text-xl font-black text-slate-800">{activeStudent.totalQuestionsAttempted}</p>
              </div>
              <div className="p-3 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset-sm text-center">
                <span className="text-[10px] font-bold text-slate-500 uppercase">Tỷ Lệ Đúng</span>
                <p className="text-xl font-black text-emerald-600">{activeStudent.accuracyRate}%</p>
              </div>
              <div className="p-3 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset-sm text-center">
                <span className="text-[10px] font-bold text-slate-500 uppercase">Điểm Dự Kiến</span>
                <p className="text-xl font-black text-blue-700">{activeStudent.estimatedScore.toFixed(1)} đ</p>
              </div>
              <div className="p-3 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset-sm text-center">
                <span className="text-[10px] font-bold text-slate-500 uppercase">Thời Gian Ôn</span>
                <p className="text-xl font-black text-slate-700">{activeStudent.totalTimeMinutes} p</p>
              </div>
            </div>

            {/* Chuyên đề còn yếu */}
            <div className="space-y-1.5">
              <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Chủ Đề Cần Ôn Luyện Bổ Sung:
              </h3>
              {activeStudent.weakTopics.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {activeStudent.weakTopics.map((wt) => (
                    <span
                      key={wt}
                      className="px-2.5 py-1 rounded-neu-sm bg-rose-50 border border-rose-200 text-rose-700 font-bold text-xs shadow-neu-flat-xs"
                    >
                      ⚠️ {wt.replace("tin-", "").replace(/-/g, " ")}
                    </span>
                  ))}
                </div>
              ) : (
                <div className="p-2.5 rounded-neu-sm bg-emerald-50 text-emerald-800 text-xs font-semibold flex items-center gap-1.5 border border-emerald-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Học sinh nắm vững các chủ đề đã làm bài, không có chủ đề cảnh báo.</span>
                </div>
              )}
            </div>

            {/* Lịch sử các câu hỏi gần nhất */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Nhật Ký Các Câu Hỏi Đã Làm Gần Nhất ({activeStudentAttempts.length} lượt):
              </h3>
              <div className="max-h-52 overflow-y-auto divide-y divide-slate-300/40 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset p-2">
                {activeStudentAttempts.length === 0 ? (
                  <p className="text-center py-4 text-xs text-slate-500">
                    Chưa có lượt làm bài nào được ghi nhận.
                  </p>
                ) : (
                  activeStudentAttempts.map((att, i) => (
                    <div key={att.id || i} className="py-2 px-2 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        {att.isCorrect ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        ) : (
                          <XCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
                        )}
                        <div>
                          <p className="font-bold text-slate-800">
                            {att.questionId}
                          </p>
                          <p className="text-[10px] text-slate-500">
                            Chủ đề: {att.topicId.replace("tin-", "").replace(/-/g, " ")}
                          </p>
                        </div>
                      </div>
                      <div className="text-right text-[11px] text-slate-500">
                        <span className="font-semibold text-slate-700">{att.timeSpentSeconds || 0}s</span>
                        <p className="text-[9px] text-slate-400">
                          {new Date(att.timestamp).toLocaleTimeString("vi-VN")}
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setIsDetailModalOpen(false)}
                className="px-4 py-2 rounded-neu-sm bg-[#e6ecf5] shadow-neu-flat-xs active:shadow-neu-inset text-xs font-bold text-slate-700 hover:text-slate-900"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODAL 3: CẤP LẠI MẬT KHẨU CHO HỌC SINH */}
      {/* ======================================================== */}
      {isResetPasswordModalOpen && activeStudent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
          <div className="w-full max-w-sm bg-[#e6ecf5] rounded-neu shadow-neu-flat p-6 relative border border-white/70 space-y-4">
            <button
              onClick={() => setIsResetPasswordModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#e6ecf5] shadow-neu-flat-xs active:shadow-neu-inset text-slate-500 hover:text-slate-800"
              aria-label="Đóng"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="text-center space-y-1">
              <div className="w-10 h-10 mx-auto rounded-neu-sm bg-amber-100 flex items-center justify-center text-amber-700 shadow-neu-flat-xs">
                <KeyRound className="w-5 h-5" />
              </div>
              <h2 className="text-sm font-black text-slate-800">
                Cấp Lại Mật Khẩu
              </h2>
              <p className="text-xs text-slate-500">
                Học sinh: <strong>{activeStudent.fullName}</strong> ({activeStudent.username})
              </p>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 px-1">
                Nhập mật khẩu mới:
              </label>
              <input
                type="text"
                value={newPasswordVal}
                onChange={(e) => setNewPasswordVal(e.target.value)}
                placeholder="123"
                className="w-full px-3.5 py-2.5 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset text-xs font-mono text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500/40"
              />
            </div>

            <div className="flex gap-2 pt-2">
              <button
                type="button"
                onClick={() => setIsResetPasswordModalOpen(false)}
                className="flex-1 py-2 rounded-neu-sm bg-[#e6ecf5] shadow-neu-flat-xs active:shadow-neu-inset text-xs font-bold text-slate-600"
              >
                Hủy
              </button>
              <button
                type="button"
                onClick={handleResetPassword}
                className="flex-1 py-2 rounded-neu-sm bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-neu-flat-xs active:shadow-neu-inset"
              >
                Lưu Mật Khẩu
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODAL 4: HƯỚNG DẪN KÍCH HOẠT LƯU TRỮ CLOUD REALTIME      */}
      {/* ======================================================== */}
      {isCloudHelpModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
          <div className="w-full max-w-xl bg-[#e6ecf5] rounded-neu shadow-neu-flat p-6 relative border border-white/70 space-y-4 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsCloudHelpModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#e6ecf5] shadow-neu-flat-xs active:shadow-neu-inset text-slate-500 hover:text-slate-800"
              aria-label="Đóng"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 border-b border-slate-300/60 pb-3">
              <div className="w-12 h-12 rounded-neu-sm bg-blue-100 flex items-center justify-center text-blue-700 shadow-neu-flat-xs flex-shrink-0">
                <Database className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-base font-black text-slate-800">
                  Kích Hoạt Lưu Trữ Đám Mây Upstash Redis
                </h2>
                <p className="text-xs text-slate-500 font-medium">
                  Đồng bộ tiến độ làm bài của toàn bộ học sinh theo thời gian thực (Miễn phí 100%)
                </p>
              </div>
            </div>

            <div className="space-y-3 text-xs text-slate-700 leading-relaxed">
              <p>
                Để học sinh làm bài trên bất kỳ thiết bị nào (điện thoại, máy tính ở nhà) mà Thầy mở Dashboard là <strong>thấy ngay điểm số cập nhật tức thì theo thời gian thực</strong>, Thầy có thể kích hoạt Database Upstash Redis miễn phí 100% theo 1 trong 2 cách sau:
              </p>

              {/* Cách 1 */}
              <div className="p-3 rounded-neu-sm bg-white/70 shadow-neu-flat-xs border border-white/90 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-[11px] font-black flex items-center justify-center flex-shrink-0">
                    A
                  </span>
                  <strong className="text-slate-800">Cách 1: Tạo trực tiếp trên Vercel Storage (1-Click)</strong>
                </div>
                <ol className="list-decimal pl-7 text-[11px] text-slate-600 space-y-1">
                  <li>Truy cập <strong>vercel.com</strong> $\rightarrow$ Mở dự án <strong>OnTNTHPT</strong>.</li>
                  <li>Bấm tab <strong>Storage</strong> $\rightarrow$ <strong>Create Database</strong> $\rightarrow$ Chọn <strong>KV</strong> (hoặc <strong>Upstash Redis</strong>).</li>
                  <li>Bấm <strong>Connect to Project</strong> $\rightarrow$ Chọn <strong>OnTNTHPT</strong> $\rightarrow$ Bấm <strong>Redeploy</strong> dự án.</li>
                </ol>
              </div>

              {/* Cách 2 */}
              <div className="p-3 rounded-neu-sm bg-white/70 shadow-neu-flat-xs border border-white/90 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-600 text-white text-[11px] font-black flex items-center justify-center flex-shrink-0">
                    B
                  </span>
                  <strong className="text-slate-800">Cách 2: Tạo trên Upstash.com (Miễn phí 100%, không cần thẻ)</strong>
                </div>
                <ol className="list-decimal pl-7 text-[11px] text-slate-600 space-y-1">
                  <li>Truy cập <strong>console.upstash.com</strong> $\rightarrow$ Đăng nhập bằng tài khoản Google (1 click).</li>
                  <li>Bấm <strong>Create Database</strong> $\rightarrow$ Đặt tên <code>ontnthpt</code>, chọn Region <code>Singapore</code> $\rightarrow$ Bấm <strong>Create</strong>.</li>
                  <li>Cuộn xuống mục <strong>REST API</strong> $\rightarrow$ Chọn tab <strong>.env</strong> $\rightarrow$ Copy 2 giá trị <code>UPSTASH_REDIS_REST_URL</code> và <code>UPSTASH_REDIS_REST_TOKEN</code>.</li>
                  <li>Quay lại <strong>Vercel</strong> $\rightarrow$ Mở dự án <code>OnTNTHPT</code> $\rightarrow$ <strong>Settings</strong> $\rightarrow$ <strong>Environment Variables</strong> $\rightarrow$ Thêm 2 biến này vào $\rightarrow$ Bấm <strong>Redeploy</strong>.</li>
                </ol>
              </div>

              <div className="p-3 rounded-neu-sm bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-medium leading-relaxed">
                🎉 <strong>Hoàn tất:</strong> Sau khi hoàn tất 1 trong 2 cách trên và Redeploy, ứng dụng tự động chuyển huy hiệu sang 🟢 <strong>Đã Kết Nối</strong>. Mọi tiến trình làm bài của từng học sinh từ bất kỳ máy nào sẽ được lưu trữ vĩnh viễn và đồng bộ thời gian thực vào Dashboard của Thầy!
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => setIsCloudHelpModalOpen(false)}
                className="px-4 py-2 rounded-neu-sm bg-[#e6ecf5] shadow-neu-flat-xs active:shadow-neu-inset text-xs font-bold text-slate-700 hover:text-slate-900"
              >
                Đã Hiểu
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Quản lý & Đồng bộ Ngân hàng câu hỏi Google Drive */}
      <DriveSyncModal
        isOpen={isDriveModalOpen}
        onClose={() => setIsDriveModalOpen(false)}
        syncStatus={driveSyncStatus}
        subjects={adminSubjects}
        selectedSubjectId={selectedSubjectId}
        onSync={handleDriveSync}
        onScanFolder={handleScanFolder}
      />

      {/* Modal Báo cáo Sư phạm & In ấn PDF chuẩn A4 */}
      <PrintableReportModal
        isOpen={isPrintModalOpen}
        onClose={() => setIsPrintModalOpen(false)}
        students={students}
        overview={overview}
        selectedClass={selectedClass}
      />
    </div>
  );
}
