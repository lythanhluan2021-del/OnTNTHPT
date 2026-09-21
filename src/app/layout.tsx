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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="bg-[#e6ecf5] min-h-screen text-slate-800 antialiased selection:bg-blue-200">
        {children}
      </body>
    </html>
  );
}
