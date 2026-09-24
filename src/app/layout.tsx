import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ôn Luyện Thi Tốt Nghiệp THPT - Neumorphism Mobile",
  description:
    "Web App chuyên biệt ôn luyện thi tốt nghiệp THPT, hỗ trợ phương pháp Socratic, tích hợp tài liệu từ Google Drive và thiết kế Neumorphism chuẩn điện thoại.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  themeColor: "#e6ecf5",
};

import { AuthProvider } from "@/contexts/AuthContext";
import { ThemeProvider } from "@/contexts/ThemeContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className="bg-[#e6ecf5] dark:bg-[#13171e] min-h-screen text-slate-800 dark:text-slate-100 antialiased selection:bg-blue-200">
        <ThemeProvider>
          <AuthProvider>{children}</AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
