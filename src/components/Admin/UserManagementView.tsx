"use client";

import React, { useState, useMemo } from "react";
import {
  Users,
  GraduationCap,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Unlock,
  Search,
  Filter,
  Plus,
  Layers,
  FileSpreadsheet,
  RefreshCw,
  KeyRound,
  Trash2,
  Edit3,
  Eye,
  Check,
  X,
  AlertCircle,
  Copy,
  Printer,
  ChevronRight,
  ShieldAlert,
  UserCheck,
} from "lucide-react";
import { soundManager } from "@/lib/audioEffects";
import { User, StudentProgressSummary, UserRole } from "@/types";

interface UserManagementViewProps {
  users: User[];
  students: StudentProgressSummary[];
  currentUserId?: string;
  onRefresh: () => Promise<void> | void;
  onViewStudentDetail?: (studentId: string) => void;
  classesList?: string[];
}

export function UserManagementView({
  users,
  students,
  currentUserId,
  onRefresh,
  onViewStudentDetail,
  classesList = [],
}: UserManagementViewProps) {
  // 1. Filter & Search States
  const [roleFilter, setRoleFilter] = useState<string>("all");
  const [classFilter, setClassFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // 2. Modal States
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isResetPasswordModalOpen, setIsResetPasswordModalOpen] = useState(false);
  const [isPrintCardsModalOpen, setIsPrintCardsModalOpen] = useState(false);

  // 3. Selection & Form States
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [copiedUsername, setCopiedUsername] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [actionNotification, setActionNotification] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  // Add Mode: Single or Bulk
  const [addMode, setAddMode] = useState<"single" | "bulk">("single");
  const [newUserData, setNewUserData] = useState({
    username: "",
    fullName: "",
    role: "student" as UserRole,
    className: "12A1",
    password: "123",
  });
  const [bulkInputText, setBulkInputText] = useState(
    `hs12a1_06\tHoàng Văn Thái\t12A1\t123\nhs12a1_07\tNguyễn Thị Mai Lan\t12A1\t123\nhs12a2_03\tVũ Đức Hùng\t12A2\t123`
  );

  // Edit User Form State
  const [editUserData, setEditUserData] = useState({
    id: "",
    username: "",
    fullName: "",
    role: "student" as UserRole,
    className: "12A1",
    isActive: true,
    newPassword: "",
  });

  // Reset Password State
  const [resetPasswordValue, setResetPasswordValue] = useState("123");

  // Danh sách các lớp khả dụng (kết hợp các lớp thực tế + chuẩn 12A1 đến 12A12)
  const allClasses = useMemo(() => {
    const defaultClasses = [
      "12A1", "12A2", "12A3", "12A4", "12A5", "12A6",
      "12A7", "12A8", "12A9", "12A10", "12A11", "12A12",
    ];
    const set = new Set<string>(defaultClasses);
    classesList.forEach((c) => set.add(c));
    users.forEach((u) => {
      if (u.className) set.add(u.className);
    });
    return Array.from(set).sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  }, [classesList, users]);

  // Bộ lọc danh sách người dùng
  const filteredUsers = useMemo(() => {
    return users.filter((u) => {
      // 1. Role Filter
      if (roleFilter !== "all" && u.role !== roleFilter) {
        return false;
      }

      // 2. Class Filter
      if (classFilter !== "all") {
        if (!u.className || u.className !== classFilter) {
          return false;
        }
      }

      // 3. Status Filter
      if (statusFilter !== "all") {
        if (statusFilter === "active" && !u.isActive) return false;
        if (statusFilter === "locked" && u.isActive) return false;
      }

      // 4. Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchName = u.fullName?.toLowerCase().includes(q);
        const matchUser = u.username?.toLowerCase().includes(q);
        const matchClass = u.className?.toLowerCase().includes(q);
        if (!matchName && !matchUser && !matchClass) {
          return false;
        }
      }

      return true;
    });
  }, [users, roleFilter, classFilter, statusFilter, searchQuery]);

  // Thống kê nhanh
  const stats = useMemo(() => {
    const total = users.length;
    const studentCount = users.filter((u) => u.role === "student").length;
    const teacherCount = users.filter((u) => u.role === "teacher" || u.role === "admin").length;
    const activeCount = users.filter((u) => u.isActive).length;
    const lockedCount = users.filter((u) => !u.isActive).length;
    return { total, studentCount, teacherCount, activeCount, lockedCount };
  }, [users]);

  // Copy username vào clipboard
  const handleCopyUsername = (username: string) => {
    soundManager.playClick();
    navigator.clipboard.writeText(username);
    setCopiedUsername(username);
    setTimeout(() => setCopiedUsername(null), 2000);
  };

  // Mở Modal Chỉnh Sửa
  const handleOpenEdit = (user: User) => {
    soundManager.playClick();
    setSelectedUser(user);
    setEditUserData({
      id: user.id,
      username: user.username,
      fullName: user.fullName,
      role: user.role,
      className: user.className || "12A1",
      isActive: user.isActive,
      newPassword: "",
    });
    setActionNotification(null);
    setIsEditModalOpen(true);
  };

  // Lưu thông tin người dùng đã chỉnh sửa
  const handleSaveEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editUserData.id || !editUserData.fullName.trim() || !editUserData.username.trim()) {
      return;
    }

    setIsSubmitting(true);
    try {
      const payload: any = {
        fullName: editUserData.fullName.trim(),
        username: editUserData.username.trim(),
        role: editUserData.role,
        className: editUserData.className.trim(),
        isActive: editUserData.isActive,
      };

      if (editUserData.newPassword.trim()) {
        payload.password = editUserData.newPassword.trim();
      }

      const res = await fetch(`/api/admin/students/${editUserData.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Không thể cập nhật thông tin người dùng.");
      }

      soundManager.playSuccess();
      setActionNotification({
        type: "success",
        message: `Đã cập nhật thông tin cho "${editUserData.fullName}" thành công!`,
      });
      setIsEditModalOpen(false);
      await onRefresh();
    } catch (err: any) {
      soundManager.playError();
      setActionNotification({ type: "error", message: err.message || "Lỗi cập nhật." });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Mở modal Đổi Mật Khẩu
  const handleOpenResetPassword = (user: User) => {
    soundManager.playClick();
    setSelectedUser(user);
    setResetPasswordValue("123");
    setActionNotification(null);
    setIsResetPasswordModalOpen(true);
  };

  // Xác nhận Đổi Mật Khẩu
  const handleConfirmResetPassword = async () => {
    if (!selectedUser || !resetPasswordValue.trim()) return;

    setIsSubmitting(true);
    try {
      const res = await fetch(`/api/admin/students/${selectedUser.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: resetPasswordValue.trim() }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Không thể cấp lại mật khẩu.");
      }

      soundManager.playSuccess();
      setActionNotification({
        type: "success",
        message: `Đã đặt mật khẩu mới ("${resetPasswordValue}") cho ${selectedUser.fullName}!`,
      });
      setIsResetPasswordModalOpen(false);
      await onRefresh();
    } catch (err: any) {
      soundManager.playError();
      setActionNotification({ type: "error", message: err.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Khóa / Mở khóa tài khoản (Toggle Lock)
  const handleToggleLock = async (user: User) => {
    soundManager.playClick();
    const newStatus = !user.isActive;
    const actionText = newStatus ? "MỞ KHÓA" : "TẠM KHÓA";

    if (!confirm(`Xác nhận ${actionText} tài khoản của "${user.fullName}" (${user.username})?`)) {
      return;
    }

    try {
      const res = await fetch(`/api/admin/students/${user.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isActive: newStatus }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Không thể cập nhật trạng thái.");
      }

      soundManager.playSuccess();
      await onRefresh();
    } catch (err: any) {
      soundManager.playError();
      alert("Lỗi: " + err.message);
    }
  };

  // Xóa tài khoản người dùng
  const handleDeleteUser = async (user: User) => {
    soundManager.playClick();
    if (user.id === currentUserId || user.username.toLowerCase() === "admin") {
      alert("Không thể xóa tài khoản Quản trị viên đang đăng nhập!");
      return;
    }

    const confirmed = confirm(
      `⚠️ CẢNH BÁO XÓA TÀI KHOẢN:\n\nBạn có chắc chắn muốn XÓA VĨNH VIỄN tài khoản của "${user.fullName}" (${user.username})?\n\n• Tài khoản sẽ bị xóa khỏi cơ sở dữ liệu.\n• Toàn bộ kết quả bài làm của tài khoản này sẽ được dọn dẹp sạch sẽ.\n\nBấm OK để xác nhận xóa.`
    );
    if (!confirmed) return;

    try {
      const res = await fetch(`/api/admin/students/${user.id}`, {
        method: "DELETE",
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Không thể xóa tài khoản.");
      }

      soundManager.playSuccess();
      setActionNotification({
        type: "success",
        message: `Đã xóa tài khoản "${user.fullName}" thành công!`,
      });
      await onRefresh();
    } catch (err: any) {
      soundManager.playError();
      alert("Lỗi khi xóa: " + err.message);
    }
  };

  // Tạo tài khoản đơn lẻ
  const handleCreateSingle = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newUserData.fullName.trim() || !newUserData.username.trim()) {
      return;
    }

    setIsSubmitting(true);
    setActionNotification(null);
    try {
      const res = await fetch("/api/admin/students", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUserData),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Lỗi tạo tài khoản.");
      }

      soundManager.playSuccess();
      setActionNotification({ type: "success", message: data.message });
      setNewUserData({
        username: "",
        fullName: "",
        role: "student",
        className: newUserData.className,
        password: "123",
      });
      setIsAddModalOpen(false);
      await onRefresh();
    } catch (err: any) {
      soundManager.playError();
      setActionNotification({ type: "error", message: err.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Phân tích văn bản Nhập Hàng Loạt (Hỗ trợ Tab \t từ Excel, phẩy, chấm phẩy, pipe)
  const parsedBulkUsers = useMemo(() => {
    const rawLines = bulkInputText.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
    const valid: Array<{
      username: string;
      fullName: string;
      className: string;
      password?: string;
      role?: UserRole;
    }> = [];
    const invalid: string[] = [];

    for (let i = 0; i < rawLines.length; i++) {
      const line = rawLines[i];
      const lower = line.toLowerCase();
      // Bỏ qua dòng tiêu đề nếu người dùng copy cả header Excel
      if (
        lower.startsWith("mã hs") ||
        lower.startsWith("tên đăng nhập") ||
        lower.startsWith("username") ||
        lower.startsWith("stt") ||
        lower.startsWith("họ và tên")
      ) {
        continue;
      }

      let parts: string[] = [];
      if (line.includes("\t")) {
        parts = line.split("\t");
      } else if (line.includes(",")) {
        parts = line.split(",");
      } else if (line.includes(";")) {
        parts = line.split(";");
      } else if (line.includes("|")) {
        parts = line.split("|");
      } else {
        parts = line.split(/\s{2,}/);
      }

      parts = parts.map((p) => p.trim()).filter((p) => p.length > 0);

      // Nếu có cột STT đầu tiên (ví dụ: 1, hs12a1_01, Nguyễn Văn A, 12A1)
      if (parts.length >= 3 && /^\d+$/.test(parts[0]) && !parts[0].toLowerCase().includes("hs")) {
        parts = parts.slice(1);
      }

      if (parts.length >= 2) {
        const username = parts[0].trim().toLowerCase();
        const fullName = parts[1].trim();
        const className = parts[2] ? parts[2].trim() : "12A1";
        const password = parts[3] ? parts[3].trim() : "123";

        if (username && fullName) {
          valid.push({ username, fullName, className, password, role: "student" });
        } else {
          invalid.push(`Dòng ${i + 1}: Thiếu username hoặc họ tên.`);
        }
      } else {
        invalid.push(`Dòng ${i + 1}: Định dạng không hợp lệ ("${line}")`);
      }
    }

    return { valid, invalid };
  }, [bulkInputText]);

  // Thực hiện Bulk Import
  const handleBulkImport = async () => {
    if (parsedBulkUsers.valid.length === 0) {
      alert("Không có tài khoản nào hợp lệ để nhập. Vui lòng kiểm tra lại định dạng dữ liệu.");
      return;
    }

    setIsSubmitting(true);
    setActionNotification(null);
    try {
      const res = await fetch("/api/admin/students", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ students: parsedBulkUsers.valid }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Lỗi khi nhập hàng loạt.");
      }

      soundManager.playSuccess();
      setActionNotification({
        type: "success",
        message: data.message || `Đã nhập thành công ${data.createdCount} tài khoản!`,
      });
      setIsAddModalOpen(false);
      await onRefresh();
    } catch (err: any) {
      soundManager.playError();
      setActionNotification({ type: "error", message: err.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Xuất danh sách tài khoản ra file CSV
  const handleExportCSV = () => {
    soundManager.playClick();
    if (filteredUsers.length === 0) return;

    const headers = [
      "STT",
      "Tên Đăng Nhập",
      "Họ và Tên",
      "Vai Trò",
      "Lớp / Đơn Vị",
      "Trạng Thái",
      "Ngày Tạo",
    ];

    const rows = filteredUsers.map((u, idx) => [
      idx + 1,
      u.username,
      `"${u.fullName.replace(/"/g, '""')}"`,
      u.role === "admin" ? "Quản trị viên" : u.role === "teacher" ? "Giáo viên" : "Học sinh",
      u.className || "",
      u.isActive ? "Hoạt động" : "Tạm khóa",
      new Date(u.createdAt).toLocaleDateString("vi-VN"),
    ]);

    const csvContent =
      "\uFEFF" +
      [headers.join(","), ...rows.map((r) => r.join(","))].join("\r\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute(
      "download",
      `Danh_Sach_Tai_Khoan_THPT_NSS_${new Date().toISOString().slice(0, 10)}.csv`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-5 animate-in fade-in duration-200">
      {/* 1. KPI Metric Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
        {/* Tổng tài khoản */}
        <div className="bg-[#e6ecf5] p-3.5 sm:p-4 rounded-neu shadow-neu-flat border border-white/60 flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-500 mb-1">
            <span className="text-[11px] font-bold uppercase tracking-wider">Tổng Tài Khoản</span>
            <div className="p-1.5 rounded-neu-sm bg-indigo-50 text-indigo-700 shadow-neu-flat-xs">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div>
            <div className="text-2xl font-black text-slate-800">{stats.total}</div>
            <div className="text-[11px] text-slate-500 font-semibold mt-0.5">
              Hệ thống toàn trường
            </div>
          </div>
        </div>

        {/* Học sinh */}
        <div className="bg-[#e6ecf5] p-3.5 sm:p-4 rounded-neu shadow-neu-flat border border-white/60 flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-500 mb-1">
            <span className="text-[11px] font-bold uppercase tracking-wider">Học Sinh</span>
            <div className="p-1.5 rounded-neu-sm bg-blue-50 text-blue-700 shadow-neu-flat-xs">
              <GraduationCap className="w-4 h-4" />
            </div>
          </div>
          <div>
            <div className="text-2xl font-black text-blue-700">{stats.studentCount}</div>
            <div className="text-[11px] text-slate-500 font-semibold mt-0.5">
              Khối 12 ôn thi THPT
            </div>
          </div>
        </div>

        {/* Giáo viên & Admin */}
        <div className="bg-[#e6ecf5] p-3.5 sm:p-4 rounded-neu shadow-neu-flat border border-white/60 flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-500 mb-1">
            <span className="text-[11px] font-bold uppercase tracking-wider">Giáo Viên & Admin</span>
            <div className="p-1.5 rounded-neu-sm bg-purple-50 text-purple-700 shadow-neu-flat-xs">
              <ShieldCheck className="w-4 h-4" />
            </div>
          </div>
          <div>
            <div className="text-2xl font-black text-purple-700">{stats.teacherCount}</div>
            <div className="text-[11px] text-slate-500 font-semibold mt-0.5">
              Quản trị & Phụ trách
            </div>
          </div>
        </div>

        {/* Đang hoạt động */}
        <div className="bg-[#e6ecf5] p-3.5 sm:p-4 rounded-neu shadow-neu-flat border border-white/60 flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-500 mb-1">
            <span className="text-[11px] font-bold uppercase tracking-wider">Đang Hoạt Động</span>
            <div className="p-1.5 rounded-neu-sm bg-emerald-50 text-emerald-700 shadow-neu-flat-xs">
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>
          <div>
            <div className="text-2xl font-black text-emerald-700">{stats.activeCount}</div>
            <div className="text-[11px] text-slate-500 font-semibold mt-0.5">
              Được phép đăng nhập
            </div>
          </div>
        </div>

        {/* Đang tạm khóa */}
        <div className="bg-[#e6ecf5] p-3.5 sm:p-4 rounded-neu shadow-neu-flat border border-white/60 flex flex-col justify-between col-span-2 sm:col-span-1">
          <div className="flex items-center justify-between text-slate-500 mb-1">
            <span className="text-[11px] font-bold uppercase tracking-wider">Đang Tạm Khóa</span>
            <div className="p-1.5 rounded-neu-sm bg-rose-50 text-rose-700 shadow-neu-flat-xs">
              <Lock className="w-4 h-4" />
            </div>
          </div>
          <div>
            <div className="text-2xl font-black text-rose-600">{stats.lockedCount}</div>
            <div className="text-[11px] text-slate-500 font-semibold mt-0.5">
              Tạm ngừng truy cập
            </div>
          </div>
        </div>
      </div>

      {/* Thông báo thao tác nếu có */}
      {actionNotification && (
        <div
          className={`p-3.5 rounded-neu shadow-neu-flat flex items-center justify-between gap-3 text-xs font-bold border transition ${
            actionNotification.type === "success"
              ? "bg-emerald-50 text-emerald-800 border-emerald-300"
              : "bg-rose-50 text-rose-800 border-rose-300"
          }`}
        >
          <div className="flex items-center gap-2">
            {actionNotification.type === "success" ? (
              <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-emerald-600" />
            ) : (
              <AlertCircle className="w-4 h-4 flex-shrink-0 text-rose-600" />
            )}
            <span>{actionNotification.message}</span>
          </div>
          <button
            onClick={() => setActionNotification(null)}
            className="p-1 text-slate-400 hover:text-slate-700"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* 2. Thanh Công Cụ Điều Khiển (Search, Filters & Actions) */}
      <div className="bg-[#e6ecf5] p-4 rounded-neu shadow-neu-flat border border-white/60 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3">
        {/* Bộ Lọc & Tìm Kiếm */}
        <div className="flex flex-wrap items-center gap-2 flex-1">
          {/* Lọc Vai trò */}
          <div className="flex items-center gap-1.5 bg-[#e6ecf5] px-2.5 py-1.5 rounded-neu-sm shadow-neu-inset-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" />
            <select
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
              aria-label="Lọc theo vai trò"
              className="bg-transparent text-xs font-bold text-slate-700 focus:outline-none cursor-pointer"
            >
              <option value="all">Tất cả vai trò</option>
              <option value="student">Học sinh</option>
              <option value="teacher">Giáo viên</option>
              <option value="admin">Quản trị viên</option>
            </select>
          </div>

          {/* Lọc Lớp */}
          <div className="flex items-center gap-1.5 bg-[#e6ecf5] px-2.5 py-1.5 rounded-neu-sm shadow-neu-inset-sm">
            <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
            <select
              value={classFilter}
              onChange={(e) => setClassFilter(e.target.value)}
              aria-label="Lọc theo lớp"
              className="bg-transparent text-xs font-bold text-slate-700 focus:outline-none cursor-pointer"
            >
              <option value="all">Tất cả các lớp</option>
              {allClasses.map((c) => (
                <option key={c} value={c}>
                  Lớp {c}
                </option>
              ))}
            </select>
          </div>

          {/* Lọc Trạng thái */}
          <div className="flex items-center gap-1.5 bg-[#e6ecf5] px-2.5 py-1.5 rounded-neu-sm shadow-neu-inset-sm">
            <Filter className="w-3.5 h-3.5 text-slate-600" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              aria-label="Lọc theo trạng thái"
              className="bg-transparent text-xs font-bold text-slate-700 focus:outline-none cursor-pointer"
            >
              <option value="all">Tất cả trạng thái</option>
              <option value="active">Đang hoạt động</option>
              <option value="locked">Bị tạm khóa</option>
            </select>
          </div>

          {/* Ô Tìm kiếm thời gian thực */}
          <div className="flex items-center gap-2 bg-[#e6ecf5] px-3 py-1.5 rounded-neu-sm shadow-neu-inset flex-1 min-w-[200px]">
            <Search className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm theo tên, mã HS, lớp..."
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

        {/* Nút Tác Vụ: Thêm mới, Bulk Import, Xuất CSV, In thẻ */}
        <div className="flex items-center gap-2 flex-shrink-0 flex-wrap">
          <button
            onClick={() => {
              soundManager.playClick();
              setAddMode("single");
              setIsAddModalOpen(true);
            }}
            className="px-3 py-2 rounded-neu-sm bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-neu-blue active:shadow-neu-blue-pressed transition flex items-center gap-1.5 cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Cấp Tài Khoản</span>
          </button>

          <button
            onClick={() => {
              soundManager.playClick();
              setAddMode("bulk");
              setIsAddModalOpen(true);
            }}
            className="px-3 py-2 rounded-neu-sm bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-neu-flat-xs active:shadow-neu-inset transition flex items-center gap-1.5 cursor-pointer"
          >
            <Layers className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Nhập Từ Excel (Bulk)</span>
            <span className="sm:hidden">Nhập Excel</span>
          </button>

          <button
            onClick={handleExportCSV}
            className="px-3 py-2 rounded-neu-sm bg-[#e6ecf5] hover:bg-emerald-50 text-emerald-700 font-bold text-xs shadow-neu-flat-xs active:shadow-neu-inset transition flex items-center gap-1.5 border border-emerald-300/60 cursor-pointer"
            title="Xuất danh sách ra file Excel / CSV"
          >
            <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600" />
            <span className="hidden sm:inline">Xuất CSV</span>
          </button>

          <button
            onClick={() => {
              soundManager.playClick();
              setIsPrintCardsModalOpen(true);
            }}
            className="px-3 py-2 rounded-neu-sm bg-[#e6ecf5] hover:bg-purple-50 text-purple-700 font-bold text-xs shadow-neu-flat-xs active:shadow-neu-inset transition flex items-center gap-1.5 border border-purple-300/60 cursor-pointer"
            title="In phiếu tài khoản học sinh"
          >
            <Printer className="w-3.5 h-3.5 text-purple-600" />
            <span className="hidden sm:inline">In Phiếu Đăng Nhập</span>
          </button>

          <button
            onClick={() => onRefresh()}
            className="p-2 rounded-neu-sm bg-[#e6ecf5] shadow-neu-flat-xs active:shadow-neu-inset text-slate-700 text-xs font-bold transition cursor-pointer"
            title="Làm mới danh sách"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 3. Bảng Danh Sách Người Dùng Chuyên Sâu */}
      <div className="bg-[#e6ecf5] rounded-neu shadow-neu-flat border border-white/60 overflow-hidden">
        <div className="p-4 border-b border-slate-300/60 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-sm font-black text-slate-800">
              Danh Sách Tài Khoản Người Dùng &amp; Phân Quyền
            </h2>
            <span className="text-xs text-slate-500 font-semibold">
              ({filteredUsers.length} tài khoản hiển thị)
            </span>
          </div>
          <div className="text-[11px] text-slate-500 font-medium hidden sm:block">
            Mật khẩu mặc định: <strong className="font-mono text-slate-700">123</strong>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-200/60 text-slate-600 uppercase font-bold text-[10px] tracking-wider border-b border-slate-300">
              <tr>
                <th className="py-3 px-3 text-center w-12">STT</th>
                <th className="py-3 px-3">Họ và Tên</th>
                <th className="py-3 px-3">Tên Đăng Nhập</th>
                <th className="py-3 px-3 text-center">Vai Trò</th>
                <th className="py-3 px-3 text-center">Lớp / Bộ Môn</th>
                <th className="py-3 px-3 text-center">Trạng Thái</th>
                <th className="py-3 px-3 text-center">Lần Đăng Nhập Cuối</th>
                <th className="py-3 px-3 text-center">Ngày Tạo</th>
                <th className="py-3 px-3 text-right">Thao Tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-300/40">
              {filteredUsers.length === 0 ? (
                <tr>
                  <td colSpan={9} className="py-12 text-center text-slate-500 font-medium">
                    Không tìm thấy người dùng nào phù hợp với bộ lọc hiện tại.
                  </td>
                </tr>
              ) : (
                filteredUsers.map((u, idx) => {
                  const isCurrent = u.id === currentUserId;
                  const studentSummary = students.find((s) => s.studentId === u.id);

                  return (
                    <tr
                      key={u.id}
                      className={`hover:bg-blue-50/40 transition ${
                        !u.isActive ? "opacity-60 bg-slate-100/60" : ""
                      }`}
                    >
                      {/* STT */}
                      <td className="py-3 px-3 text-center font-bold text-slate-500">
                        {idx + 1}
                      </td>

                      {/* Họ và Tên + Avatar */}
                      <td className="py-3 px-3">
                        <div className="flex items-center gap-2.5">
                          <div
                            className={`w-7 h-7 rounded-full flex items-center justify-center font-black text-xs shadow-neu-flat-xs flex-shrink-0 ${
                              u.role === "admin"
                                ? "bg-purple-100 text-purple-700 border border-purple-200"
                                : u.role === "teacher"
                                ? "bg-emerald-100 text-emerald-700 border border-emerald-200"
                                : "bg-blue-100 text-blue-700 border border-blue-200"
                            }`}
                          >
                            {u.fullName?.charAt(0).toUpperCase() || "U"}
                          </div>
                          <div>
                            <div className="font-bold text-slate-800 flex items-center gap-1.5">
                              <span>{u.fullName}</span>
                              {isCurrent && (
                                <span className="text-[9px] bg-indigo-100 text-indigo-700 font-extrabold px-1.5 py-0.2 rounded">
                                  Bạn
                                </span>
                              )}
                            </div>
                            {studentSummary && (
                              <div className="text-[10px] text-slate-500 font-medium">
                                Đã làm: {studentSummary.totalQuestionsAttempted} câu • Điểm:{" "}
                                {studentSummary.totalQuestionsAttempted > 0
                                  ? `${studentSummary.estimatedScore.toFixed(1)}đ`
                                  : "Chưa thi"}
                              </div>
                            )}
                          </div>
                        </div>
                      </td>

                      {/* Tên Đăng Nhập + Nút Copy */}
                      <td className="py-3 px-3">
                        <div className="inline-flex items-center gap-1.5 font-mono font-bold text-slate-700 bg-white/40 px-2 py-0.5 rounded shadow-neu-inset-sm">
                          <span>{u.username}</span>
                          <button
                            onClick={() => handleCopyUsername(u.username)}
                            className="text-slate-400 hover:text-blue-600 transition"
                            title="Sao chép tên đăng nhập"
                          >
                            {copiedUsername === u.username ? (
                              <Check className="w-3 h-3 text-emerald-600" />
                            ) : (
                              <Copy className="w-3 h-3" />
                            )}
                          </button>
                        </div>
                      </td>

                      {/* Vai Trò */}
                      <td className="py-3 px-3 text-center">
                        {u.role === "admin" ? (
                          <span className="px-2 py-0.5 rounded-full bg-purple-100 text-purple-800 font-extrabold text-[10px] border border-purple-200">
                            Quản Trị Viên
                          </span>
                        ) : u.role === "teacher" ? (
                          <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-[10px] border border-emerald-200">
                            Giáo Viên
                          </span>
                        ) : (
                          <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 font-extrabold text-[10px] border border-blue-200">
                            Học Sinh
                          </span>
                        )}
                      </td>

                      {/* Lớp / Bộ Môn */}
                      <td className="py-3 px-3 text-center font-bold text-blue-700">
                        {u.className || "—"}
                      </td>

                      {/* Trạng Thái */}
                      <td className="py-3 px-3 text-center">
                        {u.isActive ? (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-[10px]">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                            Hoạt Động
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-rose-100 text-rose-800 font-extrabold text-[10px]">
                            <Lock className="w-2.5 h-2.5" />
                            Tạm Khóa
                          </span>
                        )}
                      </td>

                      {/* Lần Đăng Nhập Cuối */}
                      <td className="py-3 px-3 text-center text-[11px] text-slate-600 font-medium">
                        {u.lastLoginAt
                          ? new Date(u.lastLoginAt).toLocaleDateString("vi-VN", {
                              day: "2-digit",
                              month: "2-digit",
                              year: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                            })
                          : "Chưa đăng nhập"}
                      </td>

                      {/* Ngày Tạo */}
                      <td className="py-3 px-3 text-center text-[11px] text-slate-500 font-medium">
                        {new Date(u.createdAt).toLocaleDateString("vi-VN")}
                      </td>

                      {/* Thao Tác (Actions) */}
                      <td className="py-3 px-3 text-right">
                        <div className="flex items-center justify-end gap-1">
                          {/* Xem chi tiết tiến độ (nếu là học sinh) */}
                          {u.role === "student" && onViewStudentDetail && (
                            <button
                              onClick={() => {
                                soundManager.playClick();
                                onViewStudentDetail(u.id);
                              }}
                              className="p-1.5 rounded-neu-sm bg-[#e6ecf5] shadow-neu-flat-xs active:shadow-neu-inset text-blue-600 hover:text-blue-800 transition cursor-pointer"
                              title="Xem chi tiết kết quả ôn thi"
                            >
                              <Eye className="w-3.5 h-3.5" />
                            </button>
                          )}

                          {/* Chỉnh sửa thông tin */}
                          <button
                            onClick={() => handleOpenEdit(u)}
                            className="p-1.5 rounded-neu-sm bg-[#e6ecf5] shadow-neu-flat-xs active:shadow-neu-inset text-indigo-600 hover:text-indigo-800 transition cursor-pointer"
                            title="Chỉnh sửa thông tin tài khoản"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                          </button>

                          {/* Cấp lại mật khẩu */}
                          <button
                            onClick={() => handleOpenResetPassword(u)}
                            className="p-1.5 rounded-neu-sm bg-[#e6ecf5] shadow-neu-flat-xs active:shadow-neu-inset text-amber-600 hover:text-amber-800 transition cursor-pointer"
                            title="Đặt lại mật khẩu"
                          >
                            <KeyRound className="w-3.5 h-3.5" />
                          </button>

                          {/* Khóa / Mở khóa */}
                          <button
                            onClick={() => handleToggleLock(u)}
                            disabled={isCurrent}
                            className={`p-1.5 rounded-neu-sm bg-[#e6ecf5] shadow-neu-flat-xs active:shadow-neu-inset transition cursor-pointer disabled:opacity-30 ${
                              u.isActive
                                ? "text-slate-600 hover:text-rose-600"
                                : "text-rose-600 hover:text-emerald-600"
                            }`}
                            title={u.isActive ? "Tạm khóa tài khoản" : "Mở khóa tài khoản"}
                          >
                            {u.isActive ? (
                              <Unlock className="w-3.5 h-3.5" />
                            ) : (
                              <Lock className="w-3.5 h-3.5" />
                            )}
                          </button>

                          {/* Xóa tài khoản */}
                          <button
                            onClick={() => handleDeleteUser(u)}
                            disabled={isCurrent || u.username.toLowerCase() === "admin"}
                            className="p-1.5 rounded-neu-sm bg-[#e6ecf5] shadow-neu-flat-xs active:shadow-neu-inset text-rose-500 hover:text-rose-700 transition cursor-pointer disabled:opacity-30"
                            title="Xóa tài khoản"
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

      {/* ========================================================================= */}
      {/* MODAL 1: CẤP MỚI TÀI KHOẢN (ĐƠN LẺ & BULK IMPORT TỪ EXCEL) */}
      {/* ========================================================================= */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
          <div className="w-full max-w-lg bg-[#e6ecf5] rounded-neu shadow-neu-flat p-6 relative border border-white/70 space-y-4 max-h-[92vh] overflow-y-auto">
            <button
              onClick={() => setIsAddModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#e6ecf5] shadow-neu-flat-xs active:shadow-neu-inset text-slate-500 hover:text-slate-800 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div>
              <h2 className="text-base font-black text-slate-800">
                {addMode === "single"
                  ? "Cấp Tài Khoản Người Dùng Mới"
                  : "Nhập Danh Sách Hàng Loạt Từ Excel (Bulk Import)"}
              </h2>
              <p className="text-xs text-slate-500">
                Tài khoản được tạo sẽ có quyền đăng nhập vào hệ thống ngay lập tức.
              </p>
            </div>

            {/* Switch Mode: Đơn Lẻ vs Bulk */}
            <div className="grid grid-cols-2 gap-2 p-1 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset-sm">
              <button
                type="button"
                onClick={() => setAddMode("single")}
                className={`py-2 text-xs font-bold rounded-lg transition cursor-pointer ${
                  addMode === "single"
                    ? "bg-[#e6ecf5] text-blue-700 shadow-neu-flat-xs"
                    : "text-slate-500"
                }`}
              >
                Cấp Từng Người
              </button>
              <button
                type="button"
                onClick={() => setAddMode("bulk")}
                className={`py-2 text-xs font-bold rounded-lg transition cursor-pointer ${
                  addMode === "bulk"
                    ? "bg-[#e6ecf5] text-indigo-700 shadow-neu-flat-xs"
                    : "text-slate-500"
                }`}
              >
                Nhập Hàng Loạt (Excel / TSV)
              </button>
            </div>

            {/* TAB 1: FORM CẤP ĐƠN LẺ */}
            {addMode === "single" ? (
              <form onSubmit={handleCreateSingle} className="space-y-3.5">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 px-1">
                    Vai trò người dùng:
                  </label>
                  <select
                    value={newUserData.role}
                    onChange={(e) =>
                      setNewUserData({ ...newUserData, role: e.target.value as UserRole })
                    }
                    className="w-full px-3.5 py-2.5 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset text-xs font-bold text-slate-800 focus:outline-none cursor-pointer"
                  >
                    <option value="student">Học sinh (Ôn luyện đề &amp; Làm bài thi)</option>
                    <option value="teacher">Giáo viên (Quản lý &amp; Xem báo cáo)</option>
                    <option value="admin">Quản trị viên (Toàn quyền hệ thống)</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 px-1">
                    Họ và Tên:
                  </label>
                  <input
                    type="text"
                    value={newUserData.fullName}
                    onChange={(e) =>
                      setNewUserData({ ...newUserData, fullName: e.target.value })
                    }
                    placeholder="Ví dụ: Nguyễn Văn Hoàng"
                    className="w-full px-3.5 py-2.5 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset text-xs text-slate-800 focus:outline-none"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 px-1">
                      Tên Đăng Nhập (Mã định danh):
                    </label>
                    <input
                      type="text"
                      value={newUserData.username}
                      onChange={(e) =>
                        setNewUserData({ ...newUserData, username: e.target.value })
                      }
                      placeholder="hs12a1_06"
                      className="w-full px-3.5 py-2.5 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset font-mono text-xs text-slate-800 focus:outline-none"
                      required
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 px-1">
                      Lớp / Bộ môn:
                    </label>
                    <input
                      type="text"
                      value={newUserData.className}
                      onChange={(e) =>
                        setNewUserData({ ...newUserData, className: e.target.value })
                      }
                      placeholder="12A1"
                      className="w-full px-3.5 py-2.5 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset text-xs text-slate-800 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 px-1">
                    Mật khẩu ban đầu:
                  </label>
                  <input
                    type="text"
                    value={newUserData.password}
                    onChange={(e) =>
                      setNewUserData({ ...newUserData, password: e.target.value })
                    }
                    placeholder="123"
                    className="w-full px-3.5 py-2.5 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset text-xs text-slate-800 focus:outline-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 rounded-neu font-bold text-xs text-white bg-blue-600 hover:bg-blue-700 shadow-neu-blue active:shadow-neu-blue-pressed transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 mt-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>{isSubmitting ? "Đang tạo..." : "Xác Nhận Tạo Tài Khoản"}</span>
                </button>
              </form>
            ) : (
              /* TAB 2: BULK IMPORT TỪ EXCEL */
              <div className="space-y-3">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 px-1 flex items-center justify-between">
                    <span>Dán danh sách từ Excel / Google Sheets:</span>
                    <span className="text-[10px] text-slate-500 font-normal">
                      Hỗ trợ Tab (\t), Phẩy (,), Chấm phẩy (;)
                    </span>
                  </label>
                  <textarea
                    rows={6}
                    value={bulkInputText}
                    onChange={(e) => setBulkInputText(e.target.value)}
                    className="w-full p-3 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset font-mono text-xs text-slate-800 focus:outline-none"
                    placeholder="Mã HS	Họ tên	Lớp	Mật khẩu"
                  />
                </div>

                <div className="p-3 rounded-neu-sm bg-indigo-50 text-[11px] text-indigo-900 leading-relaxed font-medium border border-indigo-200/60">
                  💡 <strong>Cách nhập chuẩn từ Excel:</strong> Trong file Excel, chọn các cột:{" "}
                  <strong>Mã HS</strong>, <strong>Họ tên</strong>, <strong>Lớp</strong>, <strong>Mật khẩu</strong> rồi nhấn <strong>Ctrl + C</strong> và dán vào đây. Hệ thống tự động nhận diện ký tự phân cách cột (Tab/Phẩy) và tự động bỏ qua dòng tiêu đề.
                </div>

                {/* Preview số lượng bóc tách được */}
                <div className="flex items-center justify-between p-2.5 rounded-neu-sm bg-white/50 border border-slate-300/60 text-xs font-bold">
                  <span className="text-emerald-700">
                    ✓ Hợp lệ: {parsedBulkUsers.valid.length} tài khoản
                  </span>
                  {parsedBulkUsers.invalid.length > 0 && (
                    <span className="text-rose-600">
                      ✗ Bỏ qua: {parsedBulkUsers.invalid.length} dòng
                    </span>
                  )}
                </div>

                <button
                  type="button"
                  onClick={handleBulkImport}
                  disabled={isSubmitting || parsedBulkUsers.valid.length === 0}
                  className="w-full py-2.5 rounded-neu font-bold text-xs text-white bg-indigo-600 hover:bg-indigo-700 shadow-neu-flat active:shadow-neu-inset transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Layers className="w-4 h-4" />
                  <span>
                    {isSubmitting
                      ? "Đang xử lý..."
                      : `Xác Nhận Nhập ${parsedBulkUsers.valid.length} Tài Khoản`}
                  </span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL 2: CHỈNH SỬA THÔNG TIN NGƯỜI DÙNG (EDIT USER) */}
      {/* ========================================================================= */}
      {isEditModalOpen && selectedUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
          <div className="w-full max-w-md bg-[#e6ecf5] rounded-neu shadow-neu-flat p-6 relative border border-white/70 space-y-4">
            <button
              onClick={() => setIsEditModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#e6ecf5] shadow-neu-flat-xs active:shadow-neu-inset text-slate-500 hover:text-slate-800 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div>
              <h2 className="text-base font-black text-slate-800">
                Chỉnh Sửa Thông Tin Người Dùng
              </h2>
              <p className="text-xs text-slate-500">
                Mã người dùng: <span className="font-mono">{selectedUser.id}</span>
              </p>
            </div>

            <form onSubmit={handleSaveEdit} className="space-y-3.5">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 px-1">
                  Họ và Tên:
                </label>
                <input
                  type="text"
                  value={editUserData.fullName}
                  onChange={(e) =>
                    setEditUserData({ ...editUserData, fullName: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset text-xs text-slate-800 focus:outline-none font-bold"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 px-1">
                    Tên Đăng Nhập:
                  </label>
                  <input
                    type="text"
                    value={editUserData.username}
                    onChange={(e) =>
                      setEditUserData({ ...editUserData, username: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset font-mono text-xs text-slate-800 focus:outline-none font-bold"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 px-1">
                    Lớp / Bộ Môn:
                  </label>
                  <input
                    type="text"
                    value={editUserData.className}
                    onChange={(e) =>
                      setEditUserData({ ...editUserData, className: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset text-xs text-slate-800 focus:outline-none font-bold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 px-1">
                    Vai Trò:
                  </label>
                  <select
                    value={editUserData.role}
                    onChange={(e) =>
                      setEditUserData({ ...editUserData, role: e.target.value as UserRole })
                    }
                    disabled={selectedUser.username.toLowerCase() === "admin"}
                    className="w-full px-3 py-2.5 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset text-xs font-bold text-slate-800 focus:outline-none cursor-pointer disabled:opacity-50"
                  >
                    <option value="student">Học sinh</option>
                    <option value="teacher">Giáo viên</option>
                    <option value="admin">Quản trị viên</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 px-1">
                    Trạng Thái:
                  </label>
                  <select
                    value={editUserData.isActive ? "active" : "locked"}
                    onChange={(e) =>
                      setEditUserData({
                        ...editUserData,
                        isActive: e.target.value === "active",
                      })
                    }
                    disabled={selectedUser.id === currentUserId}
                    className="w-full px-3 py-2.5 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset text-xs font-bold text-slate-800 focus:outline-none cursor-pointer disabled:opacity-50"
                  >
                    <option value="active">Đang hoạt động</option>
                    <option value="locked">Bị tạm khóa</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 px-1">
                  Mật khẩu mới (Để trống nếu không muốn đổi):
                </label>
                <input
                  type="text"
                  value={editUserData.newPassword}
                  onChange={(e) =>
                    setEditUserData({ ...editUserData, newPassword: e.target.value })
                  }
                  placeholder="Nhập mật khẩu mới hoặc bỏ trống"
                  className="w-full px-3.5 py-2.5 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset text-xs text-slate-800 focus:outline-none"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsEditModalOpen(false)}
                  className="px-4 py-2 rounded-neu-sm bg-[#e6ecf5] shadow-neu-flat-xs active:shadow-neu-inset text-xs font-bold text-slate-600 hover:text-slate-800 transition cursor-pointer"
                >
                  Hủy Bỏ
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-4 py-2 rounded-neu-sm bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-neu-blue active:shadow-neu-blue-pressed transition flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? "Đang lưu..." : "Lưu Thay Đổi"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL 3: CẤP LẠI MẬT KHẨU (RESET PASSWORD) */}
      {/* ========================================================================= */}
      {isResetPasswordModalOpen && selectedUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
          <div className="w-full max-w-sm bg-[#e6ecf5] rounded-neu shadow-neu-flat p-6 relative border border-white/70 space-y-4">
            <button
              onClick={() => setIsResetPasswordModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#e6ecf5] shadow-neu-flat-xs active:shadow-neu-inset text-slate-500 hover:text-slate-800 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2.5">
              <div className="p-2.5 rounded-neu-sm bg-amber-100 text-amber-700 shadow-neu-flat-xs">
                <KeyRound className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base font-black text-slate-800">Cấp Lại Mật Khẩu</h2>
                <p className="text-xs text-slate-500">
                  Tài khoản: <strong>{selectedUser.fullName}</strong> ({selectedUser.username})
                </p>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">Mật khẩu mới:</label>
              <input
                type="text"
                value={resetPasswordValue}
                onChange={(e) => setResetPasswordValue(e.target.value)}
                placeholder="123"
                className="w-full px-3.5 py-2.5 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset font-mono text-sm text-slate-800 focus:outline-none font-bold"
                required
              />
              <div className="flex gap-1.5 pt-1">
                {["123", "thptnss2026", "123456"].map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setResetPasswordValue(p)}
                    className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-200 hover:bg-slate-300 text-slate-700 cursor-pointer"
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setIsResetPasswordModalOpen(false)}
                className="px-4 py-2 rounded-neu-sm bg-[#e6ecf5] shadow-neu-flat-xs active:shadow-neu-inset text-xs font-bold text-slate-600 hover:text-slate-800 transition cursor-pointer"
              >
                Hủy Bỏ
              </button>
              <button
                type="button"
                onClick={handleConfirmResetPassword}
                disabled={isSubmitting || !resetPasswordValue.trim()}
                className="px-4 py-2 rounded-neu-sm bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-neu-flat active:shadow-neu-inset transition flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
              >
                <Check className="w-3.5 h-3.5" />
                <span>{isSubmitting ? "Đang xử lý..." : "Cấp Mật Khẩu"}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL 4: IN PHIẾU TÀI KHOẢN (PRINT ACCOUNT CARDS) */}
      {/* ========================================================================= */}
      {isPrintCardsModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
          <div className="w-full max-w-4xl bg-[#e6ecf5] rounded-neu shadow-neu-flat p-6 relative border border-white/70 space-y-4 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsPrintCardsModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#e6ecf5] shadow-neu-flat-xs active:shadow-neu-inset text-slate-500 hover:text-slate-800 cursor-pointer print:hidden"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-between border-b border-slate-300 pb-3 print:hidden">
              <div>
                <h2 className="text-base font-black text-slate-800">
                  Phiếu Cấp Tài Khoản Ôn Thi Tốt Nghiệp THPT
                </h2>
                <p className="text-xs text-slate-500">
                  Đang hiển thị {filteredUsers.length} tài khoản theo bộ lọc hiện tại.
                </p>
              </div>
              <button
                onClick={() => window.print()}
                className="px-4 py-2 rounded-neu-sm bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-neu-flat flex items-center gap-1.5 cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>In Ra Giấy / PDF</span>
              </button>
            </div>

            {/* Bảng in tài khoản dạng lưới phiếu (Card Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {filteredUsers.map((u, idx) => (
                <div
                  key={u.id}
                  className="p-3.5 rounded-lg bg-white border border-slate-300 shadow-sm space-y-1.5 text-xs"
                >
                  <div className="flex items-center justify-between border-b border-slate-200 pb-1">
                    <span className="font-extrabold text-blue-700">
                      THPT NGUYỄN SINH SẮC
                    </span>
                    <span className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.2 rounded font-bold">
                      {u.className || "Khối 12"}
                    </span>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 font-medium">Họ và tên:</div>
                    <div className="font-bold text-slate-900 text-sm">{u.fullName}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 bg-slate-50 p-2 rounded border border-slate-200">
                    <div>
                      <div className="text-[9px] text-slate-500 font-bold uppercase">Mã Đăng Nhập:</div>
                      <div className="font-mono font-bold text-slate-800 text-xs">{u.username}</div>
                    </div>
                    <div>
                      <div className="text-[9px] text-slate-500 font-bold uppercase">Mật Khẩu Gốc:</div>
                      <div className="font-mono font-bold text-indigo-700 text-xs">123</div>
                    </div>
                  </div>
                  <div className="text-[9px] text-slate-400 text-center pt-0.5">
                    Hệ thống Ôn Thi THPT môn Tin học 2026 - 2027
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
