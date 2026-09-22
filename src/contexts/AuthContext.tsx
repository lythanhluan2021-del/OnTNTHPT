"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { User } from "@/types";

interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  isAdmin: boolean;
  isAuthLoading: boolean;
  isLoginModalOpen: boolean;
  openLoginModal: () => void;
  closeLoginModal: () => void;
  login: (username: string, password: string) => Promise<{ success: boolean; message: string }>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  // Khôi phục phiên đăng nhập từ localStorage khi khởi động
  useEffect(() => {
    try {
      const savedUser = localStorage.getItem("thpt_current_user");
      if (savedUser) {
        const parsed: User = JSON.parse(savedUser);
        setUser(parsed);
      }
    } catch (e) {
      console.error("Lỗi khôi phục phiên đăng nhập:", e);
    } finally {
      setIsAuthLoading(false);
    }
  }, []);

  const login = async (username: string, password: string): Promise<{ success: boolean; message: string }> => {
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        return { success: false, message: data.message || "Đăng nhập thất bại." };
      }

      setUser(data.user);
      localStorage.setItem("thpt_current_user", JSON.stringify(data.user));
      setIsLoginModalOpen(false);
      return { success: true, message: data.message || "Đăng nhập thành công!" };
    } catch (error: any) {
      return { success: false, message: "Lỗi kết nối máy chủ: " + error.message };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("thpt_current_user");
  };

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  const isLoggedIn = !!user;
  const isAdmin = user?.role === "admin" || user?.role === "teacher";

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn,
        isAdmin,
        isAuthLoading,
        isLoginModalOpen,
        openLoginModal,
        closeLoginModal,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth phải được sử dụng bên trong AuthProvider");
  }
  return context;
}
