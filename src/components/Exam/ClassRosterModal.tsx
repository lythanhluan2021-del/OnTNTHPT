"use client";

import React, { useState } from "react";
import { Users, UserPlus, Upload, X, CheckCircle, AlertCircle, Trash2, Plus, Shield } from "lucide-react";
import { soundManager } from "@/lib/audioEffects";

interface ClassRosterModalProps {
  isOpen: boolean;
  onClose: () => void;
  availableClasses: string[];
  onAddClass: (newClass: string) => void;
}

export function ClassRosterModal({
  isOpen,
  onClose,
  availableClasses,
  onAddClass,
}: ClassRosterModalProps) {
  const [selectedClass, setSelectedClass] = useState<string>(availableClasses[0] || "12A1");
  const [newClassName, setNewClassName] = useState("");
  const [isAddingClass, setIsAddingClass] = useState(false);

  // Tab: Thêm thủ công / Thêm hàng loạt / Danh sách
  const [activeTab, setActiveTab] = useState<"list" | "single" | "bulk">("list");

  // Single add form
  const [singleFullName, setSingleFullName] = useState("");
  const [singleStudentId, setSingleStudentId] = useState("");
  const [singlePassword, setSinglePassword] = useState("123456");

  // Bulk add text
  const [bulkText, setBulkText] = useState("");
  const [notification, setNotification] = useState<{ type: "success" | "error"; text: string } | null>(null);

  if (!isOpen) return null;

  // Lấy danh sách tài khoản từ localStorage
  const getUserAccounts = (): any[] => {
    try {
      const raw = localStorage.getItem("thpt_user_accounts");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  };

  const allAccounts = getUserAccounts();
  const currentClassStudents = allAccounts.filter((a) => a.className === selectedClass);

  const handleAddNewClass = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newClassName.trim()) return;
    const formatted = newClassName.trim().toUpperCase();
    onAddClass(formatted);
    setSelectedClass(formatted);
    setNewClassName("");
    setIsAddingClass(false);
    soundManager.playSuccess();
    setNotification({ type: "success", text: `Đã tạo thêm lớp mới: ${formatted}` });
  };

  const handleAddSingleStudent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!singleFullName.trim() || !singleStudentId.trim()) {
      setNotification({ type: "error", text: "Vui lòng nhập đầy đủ Mã thí sinh và Họ tên!" });
      return;
    }

    const username = singleStudentId.trim().toLowerCase();
    const existing = allAccounts.find((a) => a.username === username || a.id === singleStudentId.trim());
    if (existing) {
      setNotification({ type: "error", text: `Mã thí sinh / tài khoản "${username}" đã tồn tại!` });
      return;
    }

    const newAccount = {
      id: singleStudentId.trim(),
      username: username,
      password: singlePassword.trim() || "123456",
      fullName: singleFullName.trim(),
      className: selectedClass,
      role: "student",
      isActive: true,
      createdAt: Date.now(),
    };

    const updated = [newAccount, ...allAccounts];
    localStorage.setItem("thpt_user_accounts", JSON.stringify(updated));
    soundManager.playSuccess();
    setNotification({ type: "success", text: `Đã thêm thí sinh ${newAccount.fullName} vào lớp ${selectedClass}!` });
    setSingleFullName("");
    setSingleStudentId("");
    setActiveTab("list");
  };

  const handleBulkImport = () => {
    if (!bulkText.trim()) {
      setNotification({ type: "error", text: "Vui lòng dán danh sách thí sinh!" });
      return;
    }

    const lines = bulkText.split("\n").map((l) => l.trim()).filter((l) => l.length > 0);
    let addedCount = 0;
    const currentAccounts = [...allAccounts];

    lines.forEach((line) => {
      // Hỗ trợ phân cách bằng tab, dấu phẩy, chấm phẩy: Mã_HS, Họ_Tên, Lớp (tùy chọn)
      const parts = line.split(/[,\t;]/).map((p) => p.trim());
      if (parts.length >= 2) {
        const id = parts[0];
        const name = parts[1];
        const cls = parts[2] ? parts[2].toUpperCase() : selectedClass;
        const username = id.toLowerCase();

        if (!currentAccounts.some((a) => a.username === username || a.id === id)) {
          currentAccounts.push({
            id,
            username,
            password: "123456",
            fullName: name,
            className: cls,
            role: "student",
            isActive: true,
            createdAt: Date.now(),
          });
          addedCount++;
        }
      }
    });

    localStorage.setItem("thpt_user_accounts", JSON.stringify(currentAccounts));
    soundManager.playSuccess();
    setNotification({
      type: "success",
      text: `Đã nạp thành công ${addedCount} thí sinh mới vào hệ thống!`,
    });
    setBulkText("");
    setActiveTab("list");
  };

  const handleDeleteStudent = (id: string, name: string) => {
    if (confirm(`Thầy có chắc chắn muốn xóa thí sinh ${name} khỏi danh sách?`)) {
      const updated = allAccounts.filter((a) => a.id !== id);
      localStorage.setItem("thpt_user_accounts", JSON.stringify(updated));
      soundManager.playClick();
      setNotification({ type: "success", text: `Đã xóa thí sinh ${name}.` });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
      <div className="w-full max-w-3xl bg-[#e6ecf5] rounded-neu shadow-neu-flat border border-white/80 p-5 sm:p-6 space-y-4 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-300/60 pb-3 flex-shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-neu-sm bg-indigo-100 flex items-center justify-center text-indigo-700 shadow-neu-flat-xs">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-black text-slate-800">
                Quản Trị Lớp Học &amp; Danh Sách Thí Sinh Dự Thi
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                Cấp tài khoản, số báo danh và quản lý danh sách từng lớp
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-[#e6ecf5] shadow-neu-flat-xs active:shadow-neu-inset text-slate-500 hover:text-slate-800"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Thanh chọn lớp & thao tác lớp */}
        <div className="flex flex-wrap items-center justify-between gap-3 bg-[#e6ecf5] p-3 rounded-neu-sm shadow-neu-inset-sm flex-shrink-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-bold text-slate-600">Chọn Lớp:</span>
            {availableClasses.map((cls) => (
              <button
                key={cls}
                type="button"
                onClick={() => {
                  soundManager.playClick();
                  setSelectedClass(cls);
                }}
                className={`px-3 py-1 rounded-md text-xs font-bold transition ${
                  selectedClass === cls
                    ? "bg-indigo-600 text-white shadow-neu-flat-xs"
                    : "bg-[#e6ecf5] text-slate-700 shadow-neu-flat-xs hover:bg-white"
                }`}
              >
                Lớp {cls}
              </button>
            ))}

            {isAddingClass ? (
              <form onSubmit={handleAddNewClass} className="flex items-center gap-1.5">
                <input
                  type="text"
                  placeholder="VD: 12A5"
                  value={newClassName}
                  onChange={(e) => setNewClassName(e.target.value)}
                  className="w-20 px-2 py-1 text-xs rounded bg-white shadow-neu-inset outline-none font-bold text-slate-800"
                  autoFocus
                />
                <button
                  type="submit"
                  className="px-2 py-1 bg-emerald-600 text-white rounded text-xs font-bold shadow-neu-flat-xs"
                >
                  Lưu
                </button>
                <button
                  type="button"
                  onClick={() => setIsAddingClass(false)}
                  className="px-2 py-1 bg-slate-200 text-slate-700 rounded text-xs font-bold"
                >
                  Hủy
                </button>
              </form>
            ) : (
              <button
                type="button"
                onClick={() => setIsAddingClass(true)}
                className="px-2.5 py-1 rounded-md bg-[#e6ecf5] text-indigo-700 shadow-neu-flat-xs text-xs font-bold flex items-center gap-1 hover:bg-indigo-50"
              >
                <Plus className="w-3 h-3" />
                <span>Thêm Lớp Mới</span>
              </button>
            )}
          </div>

          {/* Sub-tabs */}
          <div className="flex rounded-md bg-slate-200/60 p-0.5 text-xs font-bold">
            <button
              onClick={() => setActiveTab("list")}
              className={`px-3 py-1 rounded transition ${
                activeTab === "list" ? "bg-white text-indigo-700 shadow-xs" : "text-slate-600"
              }`}
            >
              Danh Sách ({currentClassStudents.length})
            </button>
            <button
              onClick={() => setActiveTab("single")}
              className={`px-3 py-1 rounded transition ${
                activeTab === "single" ? "bg-white text-indigo-700 shadow-xs" : "text-slate-600"
              }`}
            >
              + Thêm 1 Em
            </button>
            <button
              onClick={() => setActiveTab("bulk")}
              className={`px-3 py-1 rounded transition ${
                activeTab === "bulk" ? "bg-white text-indigo-700 shadow-xs" : "text-slate-600"
              }`}
            >
              📥 Nạp Excel / Hàng Loạt
            </button>
          </div>
        </div>

        {/* Thông báo */}
        {notification && (
          <div
            className={`p-2.5 rounded-neu-sm text-xs font-semibold flex items-center gap-2 ${
              notification.type === "success"
                ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                : "bg-rose-50 text-rose-800 border border-rose-200"
            }`}
          >
            {notification.type === "success" ? (
              <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            ) : (
              <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
            )}
            <span>{notification.text}</span>
          </div>
        )}

        {/* Nội dung tab */}
        <div className="flex-1 overflow-y-auto">
          {activeTab === "list" && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-slate-600 px-1">
                <span>Danh sách thí sinh Lớp {selectedClass}:</span>
                <span className="text-[11px] text-slate-500">Mật khẩu mặc định: 123456</span>
              </div>

              {currentClassStudents.length === 0 ? (
                <div className="p-8 text-center bg-[#e6ecf5] rounded-neu-sm shadow-neu-inset text-slate-500 text-xs space-y-2">
                  <p>Lớp {selectedClass} hiện chưa có thí sinh nào.</p>
                  <button
                    onClick={() => setActiveTab("bulk")}
                    className="px-3 py-1.5 bg-indigo-600 text-white rounded text-xs font-bold shadow-neu-flat-xs inline-flex items-center gap-1"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    <span>Nạp danh sách thí sinh từ Excel / Text</span>
                  </button>
                </div>
              ) : (
                <div className="rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset overflow-hidden border border-white/60">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-200/60 text-slate-600 font-bold uppercase text-[10px]">
                      <tr>
                        <th className="py-2.5 px-3 text-center w-12">STT</th>
                        <th className="py-2.5 px-3">Mã Thí Sinh (SBD)</th>
                        <th className="py-2.5 px-3">Họ và Tên</th>
                        <th className="py-2.5 px-3 text-center">Lớp</th>
                        <th className="py-2.5 px-3 text-center">Trạng Thái</th>
                        <th className="py-2.5 px-3 text-right">Xóa</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-300/40">
                      {currentClassStudents.map((st, idx) => (
                        <tr key={st.id} className="hover:bg-indigo-50/50">
                          <td className="py-2 px-3 text-center text-slate-500 font-bold">{idx + 1}</td>
                          <td className="py-2 px-3 font-mono font-bold text-indigo-900">{st.id}</td>
                          <td className="py-2 px-3 font-semibold text-slate-800">{st.fullName}</td>
                          <td className="py-2 px-3 text-center font-bold text-blue-700">{st.className}</td>
                          <td className="py-2 px-3 text-center">
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-emerald-100 text-emerald-800">
                              Sẵn Sàng
                            </span>
                          </td>
                          <td className="py-2 px-3 text-right">
                            <button
                              onClick={() => handleDeleteStudent(st.id, st.fullName)}
                              className="text-rose-500 hover:text-rose-700 p-1"
                              title="Xóa thí sinh"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {activeTab === "single" && (
            <form onSubmit={handleAddSingleStudent} className="space-y-4 max-w-md mx-auto py-2">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Mã Thí Sinh / Số Báo Danh (SBD):</label>
                <input
                  type="text"
                  placeholder="VD: HS1201 hoặc 12A1_01"
                  value={singleStudentId}
                  onChange={(e) => setSingleStudentId(e.target.value)}
                  className="w-full px-3 py-2 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset text-xs font-mono font-bold text-slate-800 outline-none"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Họ và Tên Thí Sinh:</label>
                <input
                  type="text"
                  placeholder="VD: Nguyễn Văn An"
                  value={singleFullName}
                  onChange={(e) => setSingleFullName(e.target.value)}
                  className="w-full px-3 py-2 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset text-xs font-bold text-slate-800 outline-none"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Lớp phân bổ:</label>
                <input
                  type="text"
                  value={selectedClass}
                  disabled
                  className="w-full px-3 py-2 rounded-neu-sm bg-slate-200 text-xs font-bold text-slate-600"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Mật khẩu đăng nhập ban đầu:</label>
                <input
                  type="text"
                  value={singlePassword}
                  onChange={(e) => setSinglePassword(e.target.value)}
                  className="w-full px-3 py-2 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset text-xs font-mono text-slate-800 outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-neu-sm bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-neu-flat transition"
              >
                Thêm Thí Sinh Này
              </button>
            </form>
          )}

          {activeTab === "bulk" && (
            <div className="space-y-3 py-2">
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-neu-sm text-xs text-blue-900 leading-relaxed">
                <p className="font-bold">Định dạng nạp danh sách (Mỗi dòng một thí sinh):</p>
                <p className="font-mono text-[11px] mt-1 text-blue-700">
                  Mã_HS, Họ_và_Tên, Lớp (Không bắt buộc, mặc định vào Lớp {selectedClass})
                </p>
                <p className="text-[11px] text-slate-500 mt-1">
                  Ví dụ: <code>12A101, Nguyễn Văn An</code> hoặc <code>12A205, Trần Thị Bình, 12A2</code>
                </p>
              </div>

              <textarea
                value={bulkText}
                onChange={(e) => setBulkText(e.target.value)}
                placeholder="12A101, Nguyễn Văn An&#10;12A102, Trần Văn Bình&#10;12A103, Lê Thị Cúc..."
                rows={6}
                className="w-full p-3 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset text-xs font-mono text-slate-800 outline-none resize-none"
              />

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setBulkText("")}
                  className="px-3 py-2 rounded-neu-sm bg-[#e6ecf5] shadow-neu-flat-xs text-xs font-bold text-slate-600"
                >
                  Xóa Hết
                </button>
                <button
                  type="button"
                  onClick={handleBulkImport}
                  className="px-4 py-2 rounded-neu-sm bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-neu-flat flex items-center gap-1.5"
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span>Nạp Toàn Bộ Vào Hệ Thống</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
