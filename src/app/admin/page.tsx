"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
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
  Edit3,
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
  ShieldAlert,
  Upload,
  FileUp,
  Download,
} from "lucide-react";
import * as XLSX from "xlsx";
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
import { DriveStorageSyncModal } from "@/components/Admin/DriveStorageSyncModal";
import { PrintableReportModal } from "@/components/Admin/PrintableReportModal";
import { ExamManagementView } from "@/components/Admin/ExamManagementView";
import { UserManagementView } from "@/components/Admin/UserManagementView";
import { StudentProgressReportView } from "@/components/Admin/StudentProgressReportView";
import { StudentProgressItem } from "@/lib/db/googleSheetsSync";

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
  const [accountTypeFilter, setAccountTypeFilter] = useState<"all" | "official" | "free">("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // 3. Modal States
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isResetPasswordModalOpen, setIsResetPasswordModalOpen] = useState(false);
  const [isEditStudentModalOpen, setIsEditStudentModalOpen] = useState(false);
  const [editingStudentForm, setEditingStudentForm] = useState({
    id: "",
    username: "",
    fullName: "",
    className: "12A1",
    accountType: "official" as "official" | "free",
    newPassword: "",
  });
  const [isEditingSubmitting, setIsEditingSubmitting] = useState(false);
  const [editStudentError, setEditStudentError] = useState("");
  const [isCloudHelpModalOpen, setIsCloudHelpModalOpen] = useState(false);
  const [isDriveStorageModalOpen, setIsDriveStorageModalOpen] = useState(false);
  const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);
  const [activeStudent, setActiveStudent] = useState<StudentProgressSummary | null>(null);

  // 4. Form States for Single / Bulk Creation
  const [createMode, setCreateMode] = useState<"single" | "bulk">("single");
  const [bulkImportMethod, setBulkImportMethod] = useState<"excel" | "paste">("excel");
  const [excelFile, setExcelFile] = useState<File | null>(null);
  const [parsedExcelStudents, setParsedExcelStudents] = useState<
    Array<{ fullName: string; username: string; className: string; password: string }>
  >([]);
  const [excelParseError, setExcelParseError] = useState<string | null>(null);
  const [isDraggingExcel, setIsDraggingExcel] = useState(false);
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
  const [activeTab, setActiveTab] = useState<"overview" | "users" | "progress" | "weekly" | "matrix" | "exams">("overview");
  const [progressStudents, setProgressStudents] = useState<StudentProgressItem[]>([]);
  const [isProgressLoading, setIsProgressLoading] = useState(false);
  const [isSyncingGoogleSheet, setIsSyncingGoogleSheet] = useState(false);
  const [googleSheetSyncMessage, setGoogleSheetSyncMessage] = useState<string | null>(null);
  const [googleSheetUrl, setGoogleSheetUrl] = useState<string | null>(null);
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

  // Nạp dữ liệu học sinh & tổng quan từ cache để tránh nhấp nháy khi chuyển trang
  useEffect(() => {
    try {
      const cachedStudents = localStorage.getItem("thpt_students_cache");
      const cachedOverview = localStorage.getItem("thpt_overview_cache");
      if (cachedStudents) {
        const parsed = JSON.parse(cachedStudents);
        if (Array.isArray(parsed) && parsed.length > 0) setStudents(parsed);
      }
      if (cachedOverview) {
        const parsed = JSON.parse(cachedOverview);
        if (parsed) setOverview(parsed);
      }
    } catch {}
  }, []);

  // Fetch Dashboard Data
  const fetchData = async (cls = selectedClass, accType = accountTypeFilter) => {
    try {
      setIsRefreshing(true);
      const res = await fetch(`/api/admin/dashboard?class=${cls}&accountType=${accType}`);
      const data = await res.json();
      if (data.success && data.data) {
        if (data.data.overview) {
          setOverview(data.data.overview);
          try {
            localStorage.setItem("thpt_overview_cache", JSON.stringify(data.data.overview));
          } catch {}
        }
        if (Array.isArray(data.data.students)) {
          if (data.data.students.length > 0) {
            setStudents(data.data.students);
            try {
              localStorage.setItem("thpt_students_cache", JSON.stringify(data.data.students));
            } catch {}
          } else {
            // Nếu serverless cold-start instance vừa trả về mảng rỗng trong khi cache client có học sinh,
            // giữ lại danh sách học sinh từ cache để tránh giao diện của Thầy bị giật từ 11 thành 0
            const cachedStudents = localStorage.getItem("thpt_students_cache");
            if (cachedStudents) {
              try {
                const parsed = JSON.parse(cachedStudents);
                if (Array.isArray(parsed) && parsed.length > 0) {
                  setStudents(parsed);
                }
              } catch {}
            } else {
              setStudents([]);
            }
          }
        }
      }

      // Lấy toàn bộ lượt làm bài và tài khoản để chi tiết
      const attRes = await fetch("/api/student/attempts");
      const attData = await attRes.json();
      if (attData.success && Array.isArray(attData.attempts)) {
        setAttempts(attData.attempts);
      }

      const usersRes = await fetch("/api/admin/students?role=all");
      const usersData = await usersRes.json();
      if (usersData.success) {
        const accs = usersData.users || usersData.students || [];
        setAllUserAccounts(accs);
        if (accs.length > 0) {
          try {
            localStorage.setItem("thpt_users_cache", JSON.stringify(accs));
          } catch {}
        }
      }
    } catch (err) {
      console.error("Lỗi nạp dữ liệu dashboard:", err);
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  };

  // Nạp dữ liệu báo cáo tiến trình học sinh & Google Sheet
  const fetchProgressReport = async () => {
    try {
      setIsProgressLoading(true);
      const res = await fetch("/api/admin/google-sheet-sync");
      const data = await res.json();
      if (data.success && data.data) {
        setProgressStudents(data.data.students || []);
        if (data.data.googleDrive?.folderUrl) {
          setGoogleSheetUrl(data.data.googleDrive.folderUrl);
        }
      }
    } catch (err) {
      console.error("Lỗi nạp tiến trình học sinh:", err);
    } finally {
      setIsProgressLoading(false);
    }
  };

  // Đồng bộ song song sang Google Sheet trên Google Drive
  const handleSyncGoogleSheet = async () => {
    try {
      setIsSyncingGoogleSheet(true);
      setGoogleSheetSyncMessage(null);
      const res = await fetch("/api/admin/google-sheet-sync", { method: "POST" });
      const data = await res.json();
      if (data.success) {
        soundManager.playSuccess();
        setGoogleSheetSyncMessage(data.message);
        if (data.spreadsheetUrl) {
          setGoogleSheetUrl(data.spreadsheetUrl);
        }
        await fetchProgressReport();
      } else {
        soundManager.playError();
        setGoogleSheetSyncMessage(data.message || "Đồng bộ thất bại");
      }
    } catch (err: any) {
      soundManager.playError();
      setGoogleSheetSyncMessage(err.message || "Lỗi kết nối đồng bộ");
    } finally {
      setIsSyncingGoogleSheet(false);
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
      } else if (activeTab === "progress") {
        fetchProgressReport();
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
      else if (activeTab === "progress") fetchProgressReport();
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
      } else if (activeTab === "progress") {
        fetchProgressReport();
      } else if (activeTab === "weekly") {
        fetchWeeklyData(selectedWeekId, selectedClass);
      } else if (activeTab === "matrix") {
        fetchMatrixData(selectedClass);
      }
    }, 8000);

    return () => clearInterval(interval);
  }, [isAdmin, activeTab, selectedClass, selectedWeekId]);

  // Tự động tính toán các chỉ số KPI theo thời gian thực (Reactive Realtime Metrics)
  // Luôn phản ánh tức thời theo sĩ số thực tế và bộ lọc lớp đang chọn
  const kpiMetrics = useMemo(() => {
    let targetStudents = selectedClass && selectedClass !== "all"
      ? students.filter((s) => s.className === selectedClass)
      : students;

    if (accountTypeFilter !== "all") {
      targetStudents = targetStudents.filter(
        (s) => (s.accountType || (s.authProvider === "google" || s.className?.toLowerCase().includes("tự do") ? "free" : "official")) === accountTypeFilter
      );
    }

    const officialCount = (selectedClass && selectedClass !== "all"
      ? students.filter((s) => s.className === selectedClass)
      : students
    ).filter(
      (s) => (s.accountType || (s.authProvider === "google" || s.className?.toLowerCase().includes("tự do") ? "free" : "official")) === "official"
    ).length;

    const freeCount = (selectedClass && selectedClass !== "all"
      ? students.filter((s) => s.className === selectedClass)
      : students
    ).filter(
      (s) => (s.accountType || (s.authProvider === "google" || s.className?.toLowerCase().includes("tự do") ? "free" : "official")) === "free"
    ).length;

    const totalStudents = targetStudents.length > 0
      ? targetStudents.length
      : (overview && (selectedClass === "all" || !selectedClass) ? (overview.totalStudents || 0) : 0);

    const participated = targetStudents.filter((s) => s.totalQuestionsAttempted > 0);
    const activeStudents = participated.length > 0
      ? participated.length
      : (overview && (selectedClass === "all" || !selectedClass) ? (overview.activeStudents || 0) : 0);

    const activePercent = totalStudents > 0 ? Math.round((activeStudents / totalStudents) * 100) : 0;

    const averageScore = participated.length > 0
      ? Number((participated.reduce((sum, s) => sum + s.estimatedScore, 0) / participated.length).toFixed(2))
      : (overview && (selectedClass === "all" || !selectedClass) ? (overview.averageScore || 0) : 0);

    const passedCount = participated.filter((s) => s.estimatedScore >= 5.0).length;
    const passRate = participated.length > 0
      ? Math.round((passedCount / participated.length) * 100)
      : (overview && (selectedClass === "all" || !selectedClass) ? (overview.passRate || 0) : 0);

    const atRiskCount = participated.filter((s) => s.estimatedScore < 5.0).length > 0
      ? participated.filter((s) => s.estimatedScore < 5.0).length
      : (overview && (selectedClass === "all" || !selectedClass) ? (overview.atRiskCount || 0) : 0);

    return {
      totalStudents,
      officialCount,
      freeCount,
      activeStudents,
      activePercent,
      averageScore,
      passRate,
      atRiskCount,
    };
  }, [students, overview, selectedClass, accountTypeFilter]);

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
      // 0. Account Type Filter (Chính khóa vs Tự do)
      if (accountTypeFilter !== "all") {
        const type = st.accountType || (st.authProvider === "google" || st.className?.toLowerCase().includes("tự do") ? "free" : "official");
        if (type !== accountTypeFilter) return false;
      }

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
  }, [students, searchQuery, selectedStatusFilter, accountTypeFilter]);

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

  // Hàm phân tích các hàng dữ liệu (Rows) từ Excel hoặc Paste
  const parseStudentRows = (rows: any[][]) => {
    if (!rows || rows.length === 0) {
      throw new Error("Tệp bảng tính không có dữ liệu.");
    }

    // 1. Dò tìm dòng tiêu đề (Header row)
    let headerIdx = -1;
    let nameCol = -1;
    let userCol = -1;
    let classCol = -1;
    let passCol = -1;

    for (let r = 0; r < Math.min(rows.length, 5); r++) {
      const row = (rows[r] || []).map((c) => String(c || "").trim().toLowerCase());
      for (let c = 0; c < row.length; c++) {
        const val = row[c];
        if (!val) continue;

        if (
          val === "tên" ||
          val.includes("họ và tên") ||
          val.includes("họ tên") ||
          val.includes("fullname") ||
          val === "name" ||
          val.includes("học sinh")
        ) {
          if (!val.includes("đăng nhập") && !val.includes("tk") && !val.includes("mã")) {
            nameCol = c;
          }
        }
        if (
          val.includes("đăng nhập") ||
          val.includes("tk") ||
          val.includes("mã hs") ||
          val.includes("tài khoản") ||
          val.includes("username") ||
          val === "mahs" ||
          val === "user"
        ) {
          userCol = c;
        }
        if (val.includes("lớp") || val.includes("class")) {
          classCol = c;
        }
        if (val.includes("mật khẩu") || val.includes("pass") || val.includes("mk")) {
          passCol = c;
        }
      }

      if (nameCol !== -1 && userCol !== -1) {
        headerIdx = r;
        break;
      }
    }

    const dataStart = headerIdx !== -1 ? headerIdx + 1 : 0;
    const candidates: Array<{ fullName: string; username: string; className: string; password: string }> = [];

    for (let r = dataStart; r < rows.length; r++) {
      const row = rows[r];
      if (!row || row.length === 0) continue;
      const nonEmpties = row.filter((c) => c !== undefined && c !== null && String(c).trim() !== "");
      if (nonEmpties.length === 0) continue;

      let fullName = "";
      let username = "";
      let className = "12A1";
      let password = "123";

      if (nameCol !== -1 && userCol !== -1) {
        fullName = String(row[nameCol] || "").trim();
        username = String(row[userCol] || "").trim().toLowerCase();
        if (classCol !== -1 && row[classCol]) className = String(row[classCol]).trim();
        if (passCol !== -1 && row[passCol]) password = String(row[passCol]).trim();
      } else {
        // Fallback heuristic:
        let usable = row.map((c) => String(c || "").trim()).filter((c) => c.length > 0);
        if (usable.length >= 3 && /^\d+$/.test(usable[0])) {
          usable = usable.slice(1);
        }

        if (usable.length >= 2) {
          const isUser0 = /^[a-z0-9_.-]+$/i.test(usable[0]) && !usable[0].includes(" ");
          const isUser1 = /^[a-z0-9_.-]+$/i.test(usable[1]) && !usable[1].includes(" ");

          if (isUser1 && !isUser0) {
            fullName = usable[0];
            username = usable[1].toLowerCase();
          } else {
            username = usable[0].toLowerCase();
            fullName = usable[1];
          }

          if (usable[2]) className = usable[2];
          if (usable[3]) password = usable[3];
        }
      }

      if (
        username.includes("tên") ||
        username.includes("đăng nhập") ||
        fullName.includes("họ và tên") ||
        fullName.toLowerCase() === "tên"
      ) {
        continue;
      }

      if (fullName && username) {
        candidates.push({ fullName, username, className, password });
      }
    }

    if (candidates.length === 0) {
      throw new Error("Không trích xuất được học sinh hợp lệ nào từ bảng tính. Vui lòng kiểm tra định dạng cột.");
    }

    return candidates;
  };

  // Đọc file Excel từ máy tính của Thầy
  const handleProcessExcelFile = (file: File) => {
    setExcelFile(file);
    setExcelParseError(null);
    setFormNotification(null);

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const buffer = e.target?.result as ArrayBuffer;
        const workbook = XLSX.read(buffer, { type: "array" });
        if (!workbook.SheetNames || workbook.SheetNames.length === 0) {
          throw new Error("Tệp Excel không có trang tính (sheet) nào.");
        }
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 }) as any[][];
        const students = parseStudentRows(rows);
        setParsedExcelStudents(students);
        soundManager.playSuccess();
      } catch (err: any) {
        setExcelParseError(err.message || "Lỗi đọc tệp Excel.");
        setParsedExcelStudents([]);
        soundManager.playError();
      }
    };
    reader.onerror = () => {
      setExcelParseError("Không thể đọc tệp từ thiết bị của bạn.");
      setParsedExcelStudents([]);
      soundManager.playError();
    };
    reader.readAsArrayBuffer(file);
  };

  // Tải về file Excel mẫu
  const handleDownloadSampleExcel = () => {
    soundManager.playClick();
    const sampleData = [
      ["STT", "Tên", "TK đăng nhập", "Lớp", "Mật khẩu"],
      [1, "Nguyễn Tấn Đạt", "ntdat12a1", "12A1", "123"],
      [2, "Đinh Đức Tiến", "ddtien12a1", "12A1", "123"],
      [3, "Lê Công Định", "lcdinh12a1", "12A1", "123"],
      [4, "Nguyễn Hoàng Huy", "nhhuy12a4", "12A4", "123"],
      [5, "Hồ Minh Kha", "hmkha12a4", "12A4", "123"],
    ];
    const ws = XLSX.utils.aoa_to_sheet(sampleData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "DanhSachHocSinh");
    XLSX.writeFile(wb, "Mau_Danh_Sach_Hoc_Sinh.xlsx");
  };

  // Handle Bulk Import Students (Hỗ trợ cả File Excel và Dán Text)
  const handleBulkImport = async () => {
    let studentsToImport: Array<{ fullName: string; username: string; className: string; password: string }> = [];

    if (bulkImportMethod === "excel") {
      if (parsedExcelStudents.length === 0) {
        setFormNotification({
          type: "error",
          message: "Vui lòng chọn hoặc kéo thả tệp Excel hợp lệ trước khi bắt đầu nhập.",
        });
        return;
      }
      studentsToImport = parsedExcelStudents;
    } else {
      if (!bulkInputText.trim()) {
        setFormNotification({ type: "error", message: "Vui lòng dán danh sách học sinh." });
        return;
      }

      const rawLines = bulkInputText.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
      const rows = rawLines.map((line) => {
        if (line.includes("\t")) return line.split("\t");
        if (line.includes(",")) return line.split(",");
        if (line.includes(";")) return line.split(";");
        if (line.includes("|")) return line.split("|");
        return line.split(/\s{2,}/);
      });

      try {
        studentsToImport = parseStudentRows(rows);
      } catch (e: any) {
        setFormNotification({ type: "error", message: e.message || "Lỗi định dạng danh sách." });
        return;
      }
    }

    setFormSubmitting(true);
    setFormNotification(null);

    try {
      const res = await fetch("/api/admin/students", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ students: studentsToImport }),
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
      setFormNotification({ type: "error", message: err.message || "Lỗi khi nhập danh sách." });
    } finally {
      setFormSubmitting(false);
    }
  };

  // Handle Open Edit Student Modal
  const handleOpenEditModal = (st: StudentProgressSummary) => {
    soundManager.playClick();
    const userAcc = allUserAccounts.find(
      (u) => u.id === st.studentId || u.username.toLowerCase() === st.username.toLowerCase()
    );
    const resolvedAccountType =
      st.accountType ||
      userAcc?.accountType ||
      (st.authProvider === "google" || st.className?.toLowerCase().includes("tự do") ? "free" : "official");

    setEditingStudentForm({
      id: userAcc?.id || st.studentId,
      username: st.username,
      fullName: st.fullName,
      className: st.className || "12A1",
      accountType: resolvedAccountType,
      newPassword: "",
    });
    setEditStudentError("");
    setIsEditStudentModalOpen(true);
  };

  // Handle Save Edit Student
  const handleSaveEditStudent = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingStudentForm.fullName.trim() || !editingStudentForm.username.trim()) {
      setEditStudentError("Vui lòng điền đầy đủ Họ tên và Tên đăng nhập.");
      return;
    }

    try {
      setIsEditingSubmitting(true);
      setEditStudentError("");

      const payload: any = {
        fullName: editingStudentForm.fullName.trim(),
        username: editingStudentForm.username.trim().toLowerCase(),
        className: editingStudentForm.className.trim(),
        accountType: editingStudentForm.accountType,
      };
      if (editingStudentForm.newPassword.trim()) {
        payload.password = editingStudentForm.newPassword.trim();
      }

      const res = await fetch(`/api/admin/students/${editingStudentForm.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data.success) {
        soundManager.playSuccess();
        setIsEditStudentModalOpen(false);
        fetchData(selectedClass);
      } else {
        soundManager.playError();
        setEditStudentError(data.message || "Không thể cập nhật thông tin học sinh.");
      }
    } catch (err: any) {
      soundManager.playError();
      setEditStudentError("Lỗi kết nối tới máy chủ.");
    } finally {
      setIsEditingSubmitting(false);
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
    if (
      !confirm(
        `⚠️ XÁC NHẬN XÓA TÀI KHOẢN:\n\nBạn có chắc chắn muốn XÓA VĨNH VIỄN tài khoản của học sinh:\n"${st.fullName}" (${st.username})?\n\n• Tài khoản sẽ được xóa sạch khỏi cơ sở dữ liệu và Google Drive.\n• Toàn bộ kết quả bài làm sẽ được dọn dẹp sạch sẽ.\n\nBấm OK để thực hiện.`
      )
    ) {
      return;
    }

    const cleanId = st.studentId;
    const cleanUser = st.username.toLowerCase();

    // 1. Cập nhật lạc quan (Optimistic Update) ngay lập tức trên màn hình
    setStudents((prev) => prev.filter((s) => s.studentId !== cleanId && s.username.toLowerCase() !== cleanUser));
    setAllUserAccounts((prev) => prev.filter((u) => u.id !== cleanId && u.username.toLowerCase() !== cleanUser));

    // Xóa ngay trong localStorage cache để không bị hồi sinh
    try {
      const cached = localStorage.getItem("thpt_students_cache");
      if (cached) {
        const parsed = JSON.parse(cached);
        const clean = parsed.filter((s: any) => s.studentId !== cleanId && s.username.toLowerCase() !== cleanUser);
        localStorage.setItem("thpt_students_cache", JSON.stringify(clean));
      }
      const cachedU = localStorage.getItem("thpt_users_cache");
      if (cachedU) {
        const parsedU = JSON.parse(cachedU);
        const cleanU = parsedU.filter((u: any) => u.id !== cleanId && u.username.toLowerCase() !== cleanUser);
        localStorage.setItem("thpt_users_cache", JSON.stringify(cleanU));
      }
    } catch {}

    try {
      const res = await fetch(`/api/admin/students/${st.studentId}`, {
        method: "DELETE",
      });

      const data = await res.json();
      if (data.success) {
        soundManager.playSuccess();
        await fetchData(selectedClass);
      } else {
        alert(data.message);
        await fetchData(selectedClass);
      }
    } catch (err: any) {
      soundManager.playError();
      alert("Lỗi kết nối máy chủ khi xóa: " + (err.message || err));
      await fetchData(selectedClass);
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
      "Phân Loại",
      "Lớp",
      "Số Câu Đã Làm",
      "Số Câu Đúng",
      "Tỷ Lệ Đúng (%)",
      "Điểm THPT Dự Kiến",
      "Thời Gian Ôn Luyện (Phút)",
      "Chủ Đề Còn Yếu",
      "Xếp Loại",
    ];

    const rows = filteredStudents.map((s, idx) => {
      const isFree = (s.accountType || (s.authProvider === "google" || s.className?.toLowerCase().includes("tự do") ? "free" : "official")) === "free";
      return [
        idx + 1,
        `"${s.username}"`,
        `"${s.fullName}"`,
        `"${isFree ? "Tự do (Google/Vãng lai)" : "Chính khóa (Excel)"}"`,
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
      ];
    });

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
      "⚠️ XÁC NHẬN DỌN DẸP DỮ LIỆU:\n\nBạn có chắc chắn muốn dọn sạch toàn bộ học sinh mẫu và lịch sử bài làm thử nghiệm?\n\n• Tài khoản Quản trị viên (Admin) sẽ được BẢO LƯU tuyệt đối.\n• Toàn bộ học sinh và lịch sử làm bài sẽ được đưa về 0 để sẵn sàng thêm danh sách học sinh thật.\n\nBấm OK để tiếp tục dọn dẹp."
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
            <div className="w-16 h-16 mx-auto rounded-neu bg-[#e6ecf5] flex items-center justify-center shadow-neu-flat p-1 border border-white/80">
              <Image
                src="/sino_logo.png"
                alt="SINO"
                width={56}
                height={56}
                className="w-full h-full object-contain mix-blend-multiply"
                priority
              />
            </div>
            <h1 className="text-xl font-black text-slate-800">
              SINO – Trang Quản Trị Hệ Thống
            </h1>
            <p className="text-xs text-slate-500 font-medium leading-relaxed">
              Khu vực dành cho Quản trị viên theo dõi tiến độ ôn luyện và quản lý ngân hàng câu hỏi.
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
              Quản trị viên
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
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 bg-[#e6ecf5] dark:bg-[#181f2a] p-4 sm:p-5 rounded-neu shadow-neu-flat border border-white/60 dark:border-slate-700/60 transition-colors duration-200">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-12 h-12 rounded-neu-sm bg-indigo-100 dark:bg-indigo-950 flex items-center justify-center text-indigo-700 dark:text-indigo-300 shadow-neu-flat-xs flex-shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-base sm:text-lg font-black text-slate-800 dark:text-white truncate">
                SINO – Dashboard Quản Lý Ôn Thi Thông Minh
              </h1>
              <span className="text-[10px] uppercase tracking-wider font-extrabold bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-2 py-0.5 rounded-full shadow-neu-flat-xs flex-shrink-0">
                Admin
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              SINO • Bản quyền thuộc về Ban quản lý dự án Khoa học kỹ thuật
            </p>
            {/* Huy hiệu trạng thái Lưu trữ Đám mây Google Drive */}
            <div className="flex items-center gap-2 pt-1 flex-wrap">
              {/* Huy hiệu Upstash Redis nếu có */}
              {overview?.cloudProvider === "redis" || overview?.isCloudConnected ? (
                <button
                  type="button"
                  onClick={() => {
                    soundManager.playClick();
                    setIsCloudHelpModalOpen(true);
                  }}
                  className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 hover:bg-blue-200 text-blue-800 dark:text-blue-300 text-[10px] font-black shadow-neu-flat-xs border border-blue-300 dark:border-blue-700 transition cursor-pointer"
                  title="Bấm xem thông tin kết nối Đám mây Upstash Redis"
                >
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  <Database className="w-3 h-3 text-blue-700 dark:text-blue-400" />
                  <span>Upstash Redis: Realtime</span>
                </button>
              ) : null}

              {/* Huy hiệu Google Drive Cloud */}
              <button
                type="button"
                onClick={() => {
                  soundManager.playClick();
                  setIsDriveStorageModalOpen(true);
                }}
                className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 hover:bg-emerald-200 text-emerald-800 dark:text-emerald-300 text-[10px] font-black shadow-neu-flat-xs border border-emerald-300 dark:border-emerald-700 transition cursor-pointer"
                title="Bấm để mở Bảng Quản Lý Lưu Trữ & Đồng Bộ Google Drive"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <Cloud className="w-3 h-3 text-emerald-700 dark:text-emerald-400" />
                <span>Google Drive: Đã Kết Nối</span>
                <ExternalLink className="w-2.5 h-2.5 text-emerald-700 dark:text-emerald-400 ml-0.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Thanh công cụ hành động - Cố định 1 dòng, không rớt dòng */}
        <div className="flex items-center gap-1.5 sm:gap-2 flex-nowrap shrink-0 overflow-x-auto max-w-full whitespace-nowrap self-stretch lg:self-auto justify-end pb-1 lg:pb-0">
          {/* Huy hiệu Realtime Live */}
          <div
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-neu-sm bg-indigo-50/80 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-xs font-bold shadow-neu-flat-xs border border-indigo-200/60 dark:border-indigo-800/60 whitespace-nowrap flex-shrink-0"
            title="Dashboard tự động cập nhật kết quả làm bài của học sinh ngầm mỗi 8 giây"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Live (8s)</span>
          </div>

          {/* Nút Đồng bộ Google Sheet */}
          <button
            type="button"
            onClick={handleSyncGoogleSheet}
            disabled={isSyncingGoogleSheet}
            className="px-3 py-1.5 rounded-neu-sm bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/50 dark:hover:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 shadow-neu-flat-xs active:shadow-neu-inset text-xs font-bold flex items-center gap-1.5 transition cursor-pointer border border-emerald-300/70 dark:border-emerald-700/60 whitespace-nowrap flex-shrink-0"
            title="Đồng bộ song song danh sách học sinh và tiến trình ôn luyện sang Google Sheet trên Google Drive"
          >
            <FileSpreadsheet className={`w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 ${isSyncingGoogleSheet ? "animate-spin" : ""}`} />
            <span>{isSyncingGoogleSheet ? "Đang đồng bộ..." : "Google Sheet"}</span>
          </button>

          {/* Nút Làm mới */}
          <button
            type="button"
            onClick={() => {
              soundManager.playClick();
              fetchData(selectedClass);
              fetchProgressReport();
            }}
            disabled={isRefreshing}
            className="px-3 py-1.5 rounded-neu-sm bg-[#e6ecf5] dark:bg-[#1f2633] hover:bg-white/60 dark:hover:bg-[#283244] shadow-neu-flat-xs active:shadow-neu-inset text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center gap-1.5 transition cursor-pointer whitespace-nowrap flex-shrink-0"
            title="Làm mới dữ liệu toàn hệ thống"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? "animate-spin text-blue-600" : ""}`} />
            <span>Làm mới</span>
          </button>

          {/* Nút Luyện thi */}
          <Link
            href="/"
            className="px-3 py-1.5 rounded-neu-sm bg-blue-50 hover:bg-blue-100 dark:bg-blue-950/60 dark:hover:bg-blue-900/60 text-blue-700 dark:text-blue-300 shadow-neu-flat-xs active:shadow-neu-inset text-xs font-bold flex items-center gap-1.5 transition whitespace-nowrap flex-shrink-0"
            title="Quay lại phòng luyện thi ôn tập"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Luyện Thi</span>
          </Link>

          {/* Nút Thoát */}
          <button
            type="button"
            onClick={() => {
              soundManager.playClick();
              logout();
            }}
            className="px-3 py-1.5 rounded-neu-sm bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/60 dark:hover:bg-rose-900/60 text-rose-600 dark:text-rose-300 shadow-neu-flat-xs active:shadow-neu-inset text-xs font-bold flex items-center gap-1.5 transition cursor-pointer whitespace-nowrap flex-shrink-0"
            title="Đăng xuất khỏi bảng quản trị"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Thoát</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto space-y-6">
        {/* Navigation Tabs Bar */}
        <div className="flex items-center gap-2 p-1.5 bg-[#e6ecf5] dark:bg-[#181f2a] rounded-neu shadow-neu-inset-sm max-w-full overflow-x-auto whitespace-nowrap flex-nowrap sm:flex-wrap">
          <button
            onClick={() => {
              soundManager.playClick();
              setActiveTab("overview");
            }}
            className={`px-4 py-2 rounded-neu-sm text-xs font-bold transition flex items-center gap-2 cursor-pointer whitespace-nowrap ${
              activeTab === "overview"
                ? "bg-blue-600 text-white shadow-neu-blue"
                : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white shadow-none hover:bg-white/40"
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Tổng Quan Toàn Trường</span>
          </button>

          <button
            onClick={() => {
              soundManager.playClick();
              setActiveTab("users");
            }}
            className={`px-4 py-2 rounded-neu-sm text-xs font-bold transition flex items-center gap-2 cursor-pointer whitespace-nowrap ${
              activeTab === "users"
                ? "bg-blue-600 text-white shadow-neu-blue"
                : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white shadow-none hover:bg-white/40"
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Quản Lý Người Dùng &amp; Phân Quyền</span>
            <span
              className={`text-[10px] px-1.5 py-0.2 rounded-full font-extrabold ${
                activeTab === "users"
                  ? "bg-white text-blue-700"
                  : "bg-indigo-100 text-indigo-800"
              }`}
            >
              {allUserAccounts.length}
            </span>
          </button>

          {/* TAB MỚI: BÁO CÁO THỐNG KÊ TIẾN TRÌNH HỌC SINH (THAY THẾ RADAR 5 MẠCH NĂNG LỰC) */}
          <button
            onClick={() => {
              soundManager.playClick();
              setActiveTab("progress");
              if (progressStudents.length === 0) {
                fetchProgressReport();
              }
            }}
            className={`px-4 py-2 rounded-neu-sm text-xs font-bold transition flex items-center gap-2 cursor-pointer whitespace-nowrap ${
              activeTab === "progress"
                ? "bg-blue-600 text-white shadow-neu-blue"
                : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white shadow-none hover:bg-white/40"
            }`}
          >
            <FileSpreadsheet className="w-3.5 h-3.5" />
            <span>Báo Cáo Tiến Trình Học Sinh</span>
            {progressStudents.length > 0 && (
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full font-extrabold ${
                  activeTab === "progress"
                    ? "bg-white text-blue-700"
                    : "bg-emerald-100 text-emerald-800"
                }`}
              >
                {progressStudents.filter((p) => p.totalQuestions > 0).length}/{progressStudents.length}
              </span>
            )}
          </button>

          <button
            onClick={() => {
              soundManager.playClick();
              setActiveTab("weekly");
              if (!weeklyOverview) {
                fetchWeeklyData(selectedWeekId, selectedClass);
              }
            }}
            className={`px-4 py-2 rounded-neu-sm text-xs font-bold transition flex items-center gap-2 cursor-pointer whitespace-nowrap ${
              activeTab === "weekly"
                ? "bg-blue-600 text-white shadow-neu-blue"
                : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white shadow-none hover:bg-white/40"
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
            className={`px-4 py-2 rounded-neu-sm text-xs font-bold transition flex items-center gap-2 cursor-pointer whitespace-nowrap ${
              activeTab === "matrix"
                ? "bg-blue-600 text-white shadow-neu-blue"
                : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white shadow-none hover:bg-white/40"
            }`}
          >
            <Grid className="w-3.5 h-3.5" />
            <span>Ma Trận 35 Tuần Toàn Khóa</span>
          </button>

          <button
            onClick={() => {
              soundManager.playClick();
              setActiveTab("exams");
            }}
            className={`px-4 py-2 rounded-neu-sm text-xs font-bold transition flex items-center gap-2 cursor-pointer whitespace-nowrap ${
              activeTab === "exams"
                ? "bg-blue-600 text-white shadow-neu-blue"
                : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white shadow-none hover:bg-white/40"
            }`}
          >
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Khảo Thí &amp; Chống Gian Lận</span>
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
          <div className="bg-[#e6ecf5] p-4 rounded-neu shadow-neu-flat border border-white/60 flex flex-col justify-between transition-all duration-300 hover:shadow-neu-pressed">
            <div className="flex items-center justify-between text-slate-500">
              <span className="text-xs font-bold">Tổng Sĩ Số</span>
              <Users className="w-4 h-4 text-blue-600" />
            </div>
            <div className="mt-2">
              <span className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight">
                {kpiMetrics.totalStudents}
              </span>
              <span className="text-xs text-slate-500 font-semibold ml-1">học sinh</span>
            </div>
            <div className="mt-1 flex items-center gap-1.5 flex-wrap text-[10px] font-bold">
              <span className="px-1.5 py-0.5 rounded bg-blue-100 text-blue-800" title="Học sinh chính khóa theo danh sách trường/Excel">
                🏫 {kpiMetrics.officialCount} Chính khóa
              </span>
              <span className="px-1.5 py-0.5 rounded bg-purple-100 text-purple-800" title="Người dùng tự do đăng nhập Google hoặc vãng lai">
                🌐 {kpiMetrics.freeCount} Tự do
              </span>
            </div>
            <p className="text-[10px] text-slate-400 font-medium mt-1 truncate">
              {selectedClass && selectedClass !== "all" ? `Lớp ${selectedClass}` : "Toàn bộ tài khoản ôn tập"}
            </p>
          </div>

          {/* Học sinh tích cực */}
          <div className="bg-[#e6ecf5] p-4 rounded-neu shadow-neu-flat border border-white/60 flex flex-col justify-between transition-all duration-300 hover:shadow-neu-pressed">
            <div className="flex items-center justify-between text-slate-500">
              <span className="text-xs font-bold">Đã Tham Gia</span>
              <UserCheck className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="mt-2">
              <span className="text-2xl sm:text-3xl font-black text-emerald-700 tracking-tight">
                {kpiMetrics.activeStudents}
              </span>
              <span className="text-xs text-slate-500 font-semibold ml-1">
                ({kpiMetrics.activePercent}%)
              </span>
            </div>
            <p className="text-[11px] text-emerald-600 font-medium mt-1 truncate">
              Đã làm bài luyện tập
            </p>
          </div>

          {/* Điểm trung bình vs Mục tiêu 6.00 */}
          <div className="bg-[#e6ecf5] p-4 rounded-neu shadow-neu-flat border border-white/60 flex flex-col justify-between transition-all duration-300 hover:shadow-neu-pressed">
            <div className="flex items-center justify-between text-slate-500">
              <span className="text-xs font-bold">Điểm Trung Bình</span>
              <TrendingUp className="w-4 h-4 text-indigo-600" />
            </div>
            <div className="mt-2 flex items-baseline gap-1">
              <span className={`text-2xl sm:text-3xl font-black tracking-tight ${kpiMetrics.averageScore >= 6.0 ? "text-indigo-700" : "text-amber-600"}`}>
                {kpiMetrics.averageScore}
              </span>
              <span className="text-xs text-slate-500 font-semibold">/ 10</span>
            </div>
            <div className="text-[11px] font-semibold mt-1 flex items-center gap-1 text-slate-600">
              <span>Mục tiêu GD1:</span>
              <span className="font-bold text-indigo-600">6.00 đ</span>
              {kpiMetrics.averageScore >= 6.0 ? (
                <Check className="w-3 h-3 text-emerald-600" />
              ) : null}
            </div>
          </div>

          {/* Tỷ lệ Đạt chuẩn >= 5.0đ vs Mục tiêu 73% */}
          <div className="bg-[#e6ecf5] p-4 rounded-neu shadow-neu-flat border border-white/60 flex flex-col justify-between transition-all duration-300 hover:shadow-neu-pressed">
            <div className="flex items-center justify-between text-slate-500">
              <span className="text-xs font-bold">Tỷ Lệ Đạt (≥5.0đ)</span>
              <Award className="w-4 h-4 text-blue-600" />
            </div>
            <div className="mt-2">
              <span className={`text-2xl sm:text-3xl font-black tracking-tight ${kpiMetrics.passRate >= 73 ? "text-blue-700" : "text-amber-600"}`}>
                {kpiMetrics.passRate}%
              </span>
            </div>
            <div className="text-[11px] font-semibold mt-1 flex items-center gap-1 text-slate-600">
              <span>Chỉ tiêu trường:</span>
              <span className="font-bold text-blue-600">≥ 73%</span>
              {kpiMetrics.passRate >= 73 ? (
                <Check className="w-3 h-3 text-emerald-600" />
              ) : null}
            </div>
          </div>

          {/* Học sinh cần phụ đạo */}
          <div className="bg-[#e6ecf5] p-4 rounded-neu shadow-neu-flat border border-white/60 flex flex-col justify-between col-span-2 md:col-span-1 transition-all duration-300 hover:shadow-neu-pressed">
            <div className="flex items-center justify-between text-slate-500">
              <span className="text-xs font-bold">Cần Phụ Đạo</span>
              <AlertTriangle className="w-4 h-4 text-rose-600" />
            </div>
            <div className="mt-2">
              <span className={`text-2xl sm:text-3xl font-black tracking-tight ${kpiMetrics.atRiskCount > 0 ? "text-rose-600" : "text-slate-700"}`}>
                {kpiMetrics.atRiskCount}
              </span>
              <span className="text-xs text-slate-500 font-semibold ml-1">em (&lt;5đ)</span>
            </div>
            <p className="text-[11px] text-rose-600 font-medium mt-1 truncate">
              {kpiMetrics.atRiskCount > 0 ? "Cần GV đôn đốc, phụ đạo" : "Chưa có nguy cơ"}
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
                setIsDriveStorageModalOpen(true);
              }}
              className="px-3 py-2 rounded-neu-sm bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs shadow-neu-flat-xs active:shadow-neu-inset transition flex items-center gap-1.5 border border-emerald-300"
              title="Đồng bộ & Lưu trữ dữ liệu học sinh với Google Drive"
            >
              <Cloud className="w-3.5 h-3.5 text-emerald-600" />
              <span className="hidden sm:inline">Đồng Bộ Drive</span>
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
          <div className="p-4 border-b border-slate-300/60 flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="text-sm font-black text-slate-800">
                Bảng Tiến Độ & Đánh Giá Năng Lực Học Sinh
              </h2>
              <span className="text-xs text-slate-500 font-semibold">
                ({filteredStudents.length} học sinh hiển thị)
              </span>
            </div>

            {/* Segmented Control Lọc Nguồn Tài Khoản (Chính Khóa vs Tự Do) */}
            <div className="flex items-center gap-1 p-1 bg-slate-200/90 rounded-neu-sm shadow-neu-inset-sm self-start md:self-auto">
              <button
                type="button"
                onClick={() => {
                  soundManager.playClick();
                  setAccountTypeFilter("all");
                }}
                className={`px-2.5 py-1 rounded-neu-xs text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                  accountTypeFilter === "all"
                    ? "bg-[#e6ecf5] text-blue-700 shadow-neu-flat-xs font-black"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <span>🎓 Tất Cả</span>
                <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-slate-300/80 font-bold">
                  {students.length}
                </span>
              </button>

              <button
                type="button"
                onClick={() => {
                  soundManager.playClick();
                  setAccountTypeFilter("official");
                }}
                className={`px-2.5 py-1 rounded-neu-xs text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                  accountTypeFilter === "official"
                    ? "bg-[#e6ecf5] text-blue-700 shadow-neu-flat-xs font-black"
                    : "text-slate-600 hover:text-slate-900"
                }`}
                title="Học sinh chính khóa theo danh sách trường/Excel"
              >
                <span>🏫 Chính Khóa (Excel)</span>
                <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-blue-100 text-blue-800 font-bold">
                  {students.filter((s) => (s.accountType || (s.authProvider === "google" || s.className?.toLowerCase().includes("tự do") ? "free" : "official")) === "official").length}
                </span>
              </button>

              <button
                type="button"
                onClick={() => {
                  soundManager.playClick();
                  setAccountTypeFilter("free");
                }}
                className={`px-2.5 py-1 rounded-neu-xs text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                  accountTypeFilter === "free"
                    ? "bg-[#e6ecf5] text-purple-700 shadow-neu-flat-xs font-black"
                    : "text-slate-600 hover:text-slate-900"
                }`}
                title="Người dùng tự do đăng nhập qua Google hoặc vãng lai"
              >
                <span>🌐 Tự Do (Google / Vãng Lai)</span>
                <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-purple-100 text-purple-800 font-bold">
                  {students.filter((s) => (s.accountType || (s.authProvider === "google" || s.className?.toLowerCase().includes("tự do") ? "free" : "official")) === "free").length}
                </span>
              </button>
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
                    <td colSpan={10} className="py-12 text-center text-slate-500 font-medium">
                      <div className="max-w-md mx-auto space-y-3">
                        <p className="text-slate-600 text-xs font-semibold">
                          Không tìm thấy học sinh nào phù hợp với bộ lọc hiện tại.
                        </p>
                        <div className="flex items-center justify-center gap-2 flex-wrap">
                          <button
                            type="button"
                            onClick={() => {
                              soundManager.playClick();
                              setIsDriveStorageModalOpen(true);
                            }}
                            className="px-3.5 py-2 rounded-neu-sm bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-neu-flat-xs active:shadow-neu-inset transition flex items-center gap-1.5 cursor-pointer"
                          >
                            <Cloud className="w-3.5 h-3.5" />
                            <span>Khôi Phục Từ Google Drive</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              soundManager.playClick();
                              setCreateMode("single");
                              setIsAddModalOpen(true);
                            }}
                            className="px-3.5 py-2 rounded-neu-sm bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-neu-blue active:shadow-neu-blue-pressed transition flex items-center gap-1.5 cursor-pointer"
                          >
                            <Plus className="w-3.5 h-3.5" />
                            <span>Cấp Tài Khoản Mới</span>
                          </button>
                        </div>
                      </div>
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
                          <div className="flex items-center gap-1.5">
                            {st.authProvider === "google" && (
                              <span title="Đăng nhập qua Google" className="flex-shrink-0 inline-flex items-center">
                                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                                </svg>
                              </span>
                            )}
                            <span className="truncate max-w-[120px]">{st.username}</span>
                          </div>
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

                        {/* Class & Account Type */}
                        <td className="py-3 px-3 text-center">
                          {(() => {
                            const isFree = (st.accountType || (st.authProvider === "google" || st.className?.toLowerCase().includes("tự do") ? "free" : "official")) === "free";
                            return isFree ? (
                              <div className="flex flex-col items-center gap-0.5">
                                <span className="px-2 py-0.5 rounded-full text-[11px] font-black bg-purple-100 text-purple-800 shadow-neu-flat-xs">
                                  {st.className || "Lớp Tự Do"}
                                </span>
                                <span className="text-[9px] font-bold text-purple-600 flex items-center gap-0.5">
                                  🌐 Tự Do
                                </span>
                              </div>
                            ) : (
                              <div className="flex flex-col items-center gap-0.5">
                                <span className="px-2 py-0.5 rounded-full text-[11px] font-black bg-blue-100 text-blue-800 shadow-neu-flat-xs">
                                  {st.className}
                                </span>
                                <span className="text-[9px] font-bold text-blue-600">
                                  🏫 Chính Khóa
                                </span>
                              </div>
                            );
                          })()}
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

                            {/* Sửa thông tin tài khoản */}
                            <button
                              onClick={() => handleOpenEditModal(st)}
                              className="p-1.5 rounded-neu-sm bg-[#e6ecf5] shadow-neu-flat-xs active:shadow-neu-inset text-indigo-600 hover:text-indigo-800 transition"
                              title="Chỉnh sửa tài khoản học sinh"
                            >
                              <Edit3 className="w-3.5 h-3.5" />
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
      {/* TAB: QUẢN LÝ NGƯỜI DÙNG & PHÂN QUYỀN (FULL USER MANAGEMENT) */}
      {/* ======================================================== */}
      {activeTab === "users" && (
        <UserManagementView
          users={allUserAccounts}
          students={students}
          currentUserId={user?.id}
          onRefresh={() => fetchData(selectedClass)}
          onViewStudentDetail={(studentId) => {
            const found = students.find((s) => s.studentId === studentId);
            if (found) {
              setActiveStudent(found);
              setIsDetailModalOpen(true);
            }
          }}
          classesList={overview?.classes || []}
        />
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
      {/* TAB: BÁO CÁO TIẾN TRÌNH HỌC TẬP & ĐỒNG BỘ GOOGLE SHEET */}
      {/* ======================================================== */}
      {activeTab === "progress" && (
        <StudentProgressReportView
          students={progressStudents}
          isLoading={isProgressLoading}
          onRefresh={fetchProgressReport}
          onSyncGoogleSheet={handleSyncGoogleSheet}
          isSyncingSheet={isSyncingGoogleSheet}
          syncMessage={googleSheetSyncMessage}
          googleDriveFolderUrl={googleSheetUrl}
          allClasses={overview?.classes || ["12A1", "12A2", "12A3", "12A4"]}
        />
      )}

      {/* ======================================================== */}
      {/* TAB 5: KHẢO THÍ & KIỂM TRA CHỐNG GIAN LẬN */}
      {/* ======================================================== */}
      {activeTab === "exams" && (
        <ExamManagementView
          subjects={INITIAL_SUBJECTS}
          questions={INITIAL_QUESTIONS}
          allClasses={overview?.classes || ["12A1", "12A2", "12A3", "12A4"]}
        />
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
              <div className="space-y-4">
                {/* Thanh chọn phương thức: Tải lên Excel vs Dán văn bản */}
                <div className="flex items-center gap-1.5 p-1 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset-sm">
                  <button
                    type="button"
                    onClick={() => {
                      soundManager.playClick();
                      setBulkImportMethod("excel");
                      setFormNotification(null);
                    }}
                    className={`flex-1 py-1.5 px-2.5 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer ${
                      bulkImportMethod === "excel"
                        ? "bg-[#e6ecf5] text-emerald-800 shadow-neu-flat-xs font-black border border-emerald-300/60"
                        : "text-slate-500 hover:text-slate-800"
                    }`}
                  >
                    <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Tải Lên File Excel (.xlsx)</span>
                    <span className="text-[9px] bg-emerald-100 text-emerald-700 px-1.5 py-0.2 rounded-full font-extrabold">
                      Khuyên Dùng
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      soundManager.playClick();
                      setBulkImportMethod("paste");
                      setFormNotification(null);
                    }}
                    className={`flex-1 py-1.5 px-2.5 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer ${
                      bulkImportMethod === "paste"
                        ? "bg-[#e6ecf5] text-indigo-700 shadow-neu-flat-xs font-black"
                        : "text-slate-500 hover:text-slate-800"
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Dán Văn Bản</span>
                  </button>
                </div>

                {/* 1. CHẾ ĐỘ TẢI LÊN FILE EXCEL */}
                {bulkImportMethod === "excel" ? (
                  <div className="space-y-3.5">
                    {/* Khu vực Drag & Drop File */}
                    <div
                      onDragOver={(e) => {
                        e.preventDefault();
                        setIsDraggingExcel(true);
                      }}
                      onDragLeave={() => setIsDraggingExcel(false)}
                      onDrop={(e) => {
                        e.preventDefault();
                        setIsDraggingExcel(false);
                        const file = e.dataTransfer.files?.[0];
                        if (file) handleProcessExcelFile(file);
                      }}
                      className={`relative p-5 rounded-neu border-2 border-dashed transition flex flex-col items-center justify-center text-center cursor-pointer ${
                        isDraggingExcel
                          ? "border-emerald-500 bg-emerald-50/70"
                          : excelFile
                          ? "border-emerald-400 bg-emerald-50/30"
                          : "border-slate-300 hover:border-emerald-500 bg-[#e6ecf5]"
                      }`}
                      onClick={() => {
                        const input = document.getElementById("excel-file-input") as HTMLInputElement;
                        if (input) input.click();
                      }}
                    >
                      <input
                        id="excel-file-input"
                        type="file"
                        accept=".xlsx, .xls, .csv"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handleProcessExcelFile(file);
                        }}
                      />

                      <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 shadow-neu-flat-xs mb-2">
                        <FileSpreadsheet className="w-6 h-6" />
                      </div>

                      {excelFile ? (
                        <div className="space-y-1">
                          <p className="text-xs font-black text-slate-800 flex items-center justify-center gap-1.5">
                            <span>{excelFile.name}</span>
                            <span className="text-[10px] text-slate-500 font-normal">
                              ({(excelFile.size / 1024).toFixed(1)} KB)
                            </span>
                          </p>
                          <p className="text-[11px] text-emerald-700 font-bold">
                            ✓ Đã nhận diện thành công • Bấm để đổi tệp khác
                          </p>
                        </div>
                      ) : (
                        <div className="space-y-1">
                          <p className="text-xs font-black text-slate-800">
                            Kéo thả file Excel vào đây hoặc <span className="text-emerald-700 underline font-bold">Bấm để chọn tệp</span>
                          </p>
                          <p className="text-[11px] text-slate-500">
                            Hỗ trợ tệp <strong>TKHS.xlsx</strong>, <strong>.xls</strong> hoặc <strong>.csv</strong>
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Lỗi phân tích nếu có */}
                    {excelParseError && (
                      <div className="p-3 rounded-neu-sm bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 flex-shrink-0 text-rose-600" />
                        <span>{excelParseError}</span>
                      </div>
                    )}

                    {/* Hướng dẫn cột & Nút tải file Excel mẫu */}
                    <div className="flex items-center justify-between text-[11px] pt-0.5">
                      <span className="text-slate-500 font-medium">
                        Cấu trúc cột: <strong>STT | Tên | TK đăng nhập | Lớp | Mật khẩu</strong>
                      </span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDownloadSampleExcel();
                        }}
                        className="inline-flex items-center gap-1 text-emerald-700 hover:text-emerald-900 font-bold hover:underline cursor-pointer"
                        title="Tải về file Excel mẫu chuẩn"
                      >
                        <Download className="w-3 h-3" />
                        <span>Tải File Mẫu (.xlsx)</span>
                      </button>
                    </div>

                    {/* BẢNG XEM TRƯỚC (PREVIEW) KHI ĐÃ CÓ DỮ LIỆU */}
                    {parsedExcelStudents.length > 0 && (
                      <div className="space-y-2 pt-1">
                        <div className="flex items-center justify-between px-1">
                          <h4 className="text-xs font-black text-slate-700 flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                            <span>Danh sách học sinh nhận diện được ({parsedExcelStudents.length} em):</span>
                          </h4>
                          <span className="text-[10px] bg-emerald-100 text-emerald-800 font-extrabold px-2 py-0.5 rounded-full">
                            Sẵn sàng nhập
                          </span>
                        </div>

                        <div className="max-h-52 overflow-y-auto rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset border border-slate-300/40">
                          <table className="w-full text-left text-xs">
                            <thead className="sticky top-0 bg-[#dde4f0] text-slate-600 font-bold border-b border-slate-300 text-[10px] uppercase">
                              <tr>
                                <th className="py-1.5 px-2.5 text-center">STT</th>
                                <th className="py-1.5 px-2.5">Họ và Tên</th>
                                <th className="py-1.5 px-2.5">Tên Đăng Nhập</th>
                                <th className="py-1.5 px-2.5 text-center">Lớp</th>
                                <th className="py-1.5 px-2.5 text-center">Mật Khẩu</th>
                                <th className="py-1.5 px-2.5 text-center">Dự kiến</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200 text-slate-700">
                              {parsedExcelStudents.map((st, idx) => {
                                const exists = allUserAccounts.some(
                                  (u) => u.username.toLowerCase() === st.username.toLowerCase()
                                );
                                return (
                                  <tr key={idx} className="hover:bg-white/40">
                                    <td className="py-1.5 px-2.5 text-center text-slate-400 font-mono text-[11px]">
                                      {idx + 1}
                                    </td>
                                    <td className="py-1.5 px-2.5 font-bold text-slate-800">
                                      {st.fullName}
                                    </td>
                                    <td className="py-1.5 px-2.5 font-mono text-indigo-700 font-semibold text-[11px]">
                                      {st.username}
                                    </td>
                                    <td className="py-1.5 px-2.5 text-center font-bold text-blue-700">
                                      {st.className}
                                    </td>
                                    <td className="py-1.5 px-2.5 text-center font-mono text-slate-500 text-[11px]">
                                      {st.password}
                                    </td>
                                    <td className="py-1.5 px-2.5 text-center">
                                      {exists ? (
                                        <span className="text-[9px] bg-amber-100 text-amber-800 font-extrabold px-1.5 py-0.2 rounded" title="Đã có tài khoản, sẽ cập nhật lại thông tin">
                                          Cập nhật
                                        </span>
                                      ) : (
                                        <span className="text-[9px] bg-emerald-100 text-emerald-800 font-extrabold px-1.5 py-0.2 rounded" title="Chưa có, sẽ tạo tài khoản mới">
                                          Cấp mới
                                        </span>
                                      )}
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}

                    {/* Nút Xác Nhận Nhập File */}
                    <button
                      type="button"
                      onClick={handleBulkImport}
                      disabled={formSubmitting || parsedExcelStudents.length === 0}
                      className="w-full py-2.5 rounded-neu font-bold text-xs text-white bg-emerald-700 hover:bg-emerald-800 shadow-neu-flat active:shadow-neu-inset transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      {formSubmitting ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          <span>Đang Xử Lý & Lưu Trữ...</span>
                        </>
                      ) : (
                        <>
                          <FileUp className="w-4 h-4" />
                          <span>
                            Xác Nhận Cập Nhật & Tạo {parsedExcelStudents.length > 0 ? `${parsedExcelStudents.length} ` : ""}Tài Khoản
                          </span>
                        </>
                      )}
                    </button>
                  </div>
                ) : (
                  /* 2. CHẾ ĐỘ DÁN TEXT TRỰC TIẾP */
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 px-1 flex items-center justify-between">
                        <span>Dán danh sách học sinh:</span>
                        <span className="text-[10px] text-slate-500 font-normal">
                          Cấu trúc: Họ tên, Mã HS, Lớp, Mật khẩu (hoặc copy từ Excel)
                        </span>
                      </label>
                      <textarea
                        rows={6}
                        value={bulkInputText}
                        onChange={(e) => setBulkInputText(e.target.value)}
                        className="w-full p-3 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset font-mono text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
                        placeholder="Nguyễn Tấn Đạt, ntdat12a1, 12A1, 123&#10;Đinh Đức Tiến, ddtien12a1, 12A1, 123"
                      />
                    </div>

                    <div className="p-2.5 rounded-neu-sm bg-indigo-50 text-[11px] text-indigo-800 leading-relaxed font-medium">
                      💡 <strong>Gợi ý:</strong> Bạn có thể bôi đen copy các cột từ bảng tính Excel rồi dán trực tiếp vào đây. Hệ thống tự động phân tách theo tab hoặc dấu phẩy.
                    </div>

                    <button
                      type="button"
                      onClick={handleBulkImport}
                      disabled={formSubmitting}
                      className="w-full py-2.5 rounded-neu font-bold text-xs text-white bg-indigo-600 hover:bg-indigo-700 shadow-neu-flat active:shadow-neu-inset transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {formSubmitting ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          <span>Đang Xử Lý...</span>
                        </>
                      ) : (
                        <>
                          <Layers className="w-4 h-4" />
                          <span>Bắt Đầu Nhập Danh Sách</span>
                        </>
                      )}
                    </button>
                  </div>
                )}
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
      {/* MODAL: CHỈNH SỬA TÀI KHOẢN HỌC SINH                      */}
      {/* ======================================================== */}
      {isEditStudentModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
          <div className="w-full max-w-md bg-[#e6ecf5] rounded-neu shadow-neu-flat p-6 relative border border-white/70 space-y-4">
            <button
              onClick={() => setIsEditStudentModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#e6ecf5] shadow-neu-flat-xs active:shadow-neu-inset text-slate-500 hover:text-slate-800"
              aria-label="Đóng"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 border-b border-slate-300/60 pb-3">
              <div className="w-10 h-10 rounded-neu-sm bg-indigo-100 flex items-center justify-center text-indigo-700 shadow-neu-flat-xs flex-shrink-0">
                <Edit3 className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-sm font-black text-slate-800">
                  Cập Nhật Tài Khoản Học Sinh
                </h2>
                <p className="text-[11px] text-slate-500 font-medium">
                  Chỉnh sửa thông tin cá nhân, tên đăng nhập hoặc mật khẩu
                </p>
              </div>
            </div>

            {editStudentError && (
              <div className="p-2.5 rounded-neu-sm bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0 text-rose-600" />
                <span>{editStudentError}</span>
              </div>
            )}

            <form onSubmit={handleSaveEditStudent} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">
                  Họ và Tên Học Sinh <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={editingStudentForm.fullName}
                  onChange={(e) =>
                    setEditingStudentForm({ ...editingStudentForm, fullName: e.target.value })
                  }
                  placeholder="Ví dụ: Hồ Minh Kha"
                  className="w-full px-3.5 py-2 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">
                    Tên Đăng Nhập / Mã HS <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={editingStudentForm.username}
                    onChange={(e) =>
                      setEditingStudentForm({
                        ...editingStudentForm,
                        username: e.target.value.toLowerCase().trim(),
                      })
                    }
                    placeholder="Ví dụ: hmkha12a4"
                    className="w-full px-3.5 py-2 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset text-xs font-mono font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">
                    Lớp Học <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={editingStudentForm.className}
                    onChange={(e) => {
                      const newCls = e.target.value;
                      const autoType = newCls === "Lớp Tự Do" ? "free" : editingStudentForm.accountType;
                      setEditingStudentForm({
                        ...editingStudentForm,
                        className: newCls,
                        accountType: autoType,
                      });
                    }}
                    className="w-full px-3.5 py-2 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 cursor-pointer"
                  >
                    {[
                      "12A1", "12A2", "12A3", "12A4", "12A5", "12A6",
                      "12A7", "12A8", "12A9", "12A10", "12A11", "12A12",
                    ].map((c) => (
                      <option key={c} value={c}>
                        Lớp {c}
                      </option>
                    ))}
                    <option value="Lớp Tự Do">🌐 Lớp Tự Do (Thí sinh tự do)</option>
                  </select>
                </div>
              </div>

              {/* Phân Loại Nguồn Tài Khoản */}
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1.5">
                  Phân Loại Tài Khoản <span className="text-rose-500">*</span>
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <label
                    className={`flex items-center gap-2 p-2.5 rounded-neu-sm cursor-pointer border text-xs font-bold transition ${
                      editingStudentForm.accountType === "official"
                        ? "bg-blue-50 border-blue-400 text-blue-800 shadow-neu-inset-sm"
                        : "bg-[#e6ecf5] border-transparent text-slate-600 shadow-neu-flat-xs hover:text-slate-800"
                    }`}
                  >
                    <input
                      type="radio"
                      name="editAccountType"
                      value="official"
                      checked={editingStudentForm.accountType === "official"}
                      onChange={() =>
                        setEditingStudentForm({ ...editingStudentForm, accountType: "official" })
                      }
                      className="text-blue-600 focus:ring-blue-500"
                    />
                    <span>🏫 Chính Khóa (Excel)</span>
                  </label>

                  <label
                    className={`flex items-center gap-2 p-2.5 rounded-neu-sm cursor-pointer border text-xs font-bold transition ${
                      editingStudentForm.accountType === "free"
                        ? "bg-emerald-50 border-emerald-400 text-emerald-800 shadow-neu-inset-sm"
                        : "bg-[#e6ecf5] border-transparent text-slate-600 shadow-neu-flat-xs hover:text-slate-800"
                    }`}
                  >
                    <input
                      type="radio"
                      name="editAccountType"
                      value="free"
                      checked={editingStudentForm.accountType === "free"}
                      onChange={() =>
                        setEditingStudentForm({ ...editingStudentForm, accountType: "free" })
                      }
                      className="text-emerald-600 focus:ring-emerald-500"
                    />
                    <span>🌐 Tự Do (Google/Vãng lai)</span>
                  </label>
                </div>
                <p className="text-[10px] text-slate-500 mt-1">
                  • <em>Chính khóa</em>: Được tính vào chỉ tiêu thi đua THPT của lớp 12.<br />
                  • <em>Tự do</em>: Quản lý và thống kê độc lập, không làm sai lệch chỉ tiêu lớp chính khóa.
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">
                  Mật Khẩu Mới <span className="text-slate-400 font-normal">(Bỏ trống nếu không muốn đổi)</span>
                </label>
                <input
                  type="text"
                  value={editingStudentForm.newPassword}
                  onChange={(e) =>
                    setEditingStudentForm({ ...editingStudentForm, newPassword: e.target.value })
                  }
                  placeholder="Để trống nếu giữ nguyên mật khẩu cũ"
                  className="w-full px-3.5 py-2 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset text-xs font-mono text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
                />
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsEditStudentModalOpen(false)}
                  className="flex-1 py-2.5 rounded-neu-sm bg-[#e6ecf5] shadow-neu-flat-xs active:shadow-neu-inset text-xs font-bold text-slate-600 hover:text-slate-800 cursor-pointer"
                >
                  Hủy Bỏ
                </button>
                <button
                  type="submit"
                  disabled={isEditingSubmitting}
                  className="flex-1 py-2.5 rounded-neu-sm bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-neu-flat-xs active:shadow-neu-inset flex items-center justify-center gap-1.5 transition disabled:opacity-50 cursor-pointer"
                >
                  {isEditingSubmitting ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      <span>Đang Lưu...</span>
                    </>
                  ) : (
                    <span>Lưu Thay Đổi</span>
                  )}
                </button>
              </div>
            </form>
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

      {/* Modal Quản lý Lưu trữ Đám Mây Google Drive (CSDL Học sinh & Bài làm) */}
      <DriveStorageSyncModal
        isOpen={isDriveStorageModalOpen}
        onClose={() => setIsDriveStorageModalOpen(false)}
        onRefreshData={() => fetchData(selectedClass)}
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
