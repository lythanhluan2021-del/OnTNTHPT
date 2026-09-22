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
} from "lucide-react";
import { soundManager } from "@/lib/audioEffects";
import { useAuth } from "@/contexts/AuthContext";
import { StudentProgressSummary, AdminDashboardOverview, StudentAttempt, User } from "@/types";

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

  // 6. Admin Login Form (if not logged in as Admin)
  const [adminUsernameInput, setAdminUsernameInput] = useState("admin");
  const [adminPasswordInput, setAdminPasswordInput] = useState("admin");
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

  useEffect(() => {
    if (isAdmin) {
      fetchData(selectedClass);
    } else {
      setIsLoading(false);
    }
  }, [isAdmin, selectedClass]);

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

  // If Not Logged In as Admin, Show Secure Admin Authentication
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
                placeholder="admin"
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
                Để học sinh làm bài trên bất kỳ thiết bị nào (điện thoại, máy tính ở nhà) mà Thầy mở Dashboard là <strong>thấy ngay điểm số cập nhật tức thì</strong>, Thầy chỉ cần kết nối 1 Database Upstash Redis miễn phí trên Vercel theo 3 bước:
              </p>

              <div className="space-y-2.5">
                {/* Bước 1 */}
                <div className="p-3 rounded-neu-sm bg-white/70 shadow-neu-flat-xs border border-white/90 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-[11px] font-black flex items-center justify-center flex-shrink-0">
                      1
                    </span>
                    <strong className="text-slate-800">Mở trang quản trị dự án trên Vercel:</strong>
                  </div>
                  <p className="text-slate-600 pl-7 text-[11px]">
                    Truy cập <strong>vercel.com</strong> $\rightarrow$ Bấm vào dự án <strong>OnTNTHPT</strong> của Thầy.
                  </p>
                </div>

                {/* Bước 2 */}
                <div className="p-3 rounded-neu-sm bg-white/70 shadow-neu-flat-xs border border-white/90 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-[11px] font-black flex items-center justify-center flex-shrink-0">
                      2
                    </span>
                    <strong className="text-slate-800">Tạo Database KV / Upstash Redis miễn phí:</strong>
                  </div>
                  <p className="text-slate-600 pl-7 text-[11px]">
                    Bấm vào tab <strong>Storage</strong> trên thanh menu $\rightarrow$ Bấm nút <strong>Create Database</strong> $\rightarrow$ Chọn <strong>KV</strong> (hoặc <strong>Upstash Redis</strong>) $\rightarrow$ Chọn gói <em>Hobby (Free)</em>.
                  </p>
                </div>

                {/* Bước 3 */}
                <div className="p-3 rounded-neu-sm bg-white/70 shadow-neu-flat-xs border border-white/90 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-600 text-white text-[11px] font-black flex items-center justify-center flex-shrink-0">
                      3
                    </span>
                    <strong className="text-slate-800">Bấm Connect vào dự án:</strong>
                  </div>
                  <p className="text-slate-600 pl-7 text-[11px]">
                    Bấm <strong>Connect to Project</strong> $\rightarrow$ Chọn dự án <strong>OnTNTHPT</strong>. Vercel sẽ tự động tạo 2 biến môi trường: <code>KV_REST_API_URL</code> và <code>KV_REST_API_TOKEN</code>.
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-neu-sm bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-medium leading-relaxed">
                🎉 <strong>Hoàn tất:</strong> Sau khi Connect xong, Thầy chỉ cần bấm <strong>Redeploy</strong> trên Vercel. Ứng dụng đã được tích hợp sẵn mã nguồn tự nhận diện các biến này. Huy hiệu góc trên sẽ chuyển sang 🟢 <strong>Đã Kết Nối</strong> và mọi lượt làm bài của học sinh sẽ được lưu vĩnh viễn trên đám mây!
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
    </div>
  );
}
