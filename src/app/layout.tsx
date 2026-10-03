import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_URL = "https://on-tnthpt.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "OnTNTHPT | Ôn thi tốt nghiệp THPT Tin học – THPT Nguyễn Sinh Sắc",
    template: "%s | OnTNTHPT",
  },
  description:
    "Hệ thống ôn luyện thi tốt nghiệp THPT môn Tin học của Trường THPT Nguyễn Sinh Sắc. Ứng dụng giáo dục nội bộ, không thu phí, không yêu cầu thông tin ngân hàng hay thanh toán.",
  applicationName: "OnTNTHPT",
  authors: [{ name: "Thầy Lý Thành Luân" }],
  creator: "Trường THPT Nguyễn Sinh Sắc",
  publisher: "Trường THPT Nguyễn Sinh Sắc",
  category: "education",
  keywords: [
    "ôn thi THPT",
    "tin học 12",
    "THPT Nguyễn Sinh Sắc",
    "OnTNTHPT",
    "ôn tập tốt nghiệp",
    "giáo dục",
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: SITE_URL,
    siteName: "OnTNTHPT",
    title: "OnTNTHPT | Ôn thi tốt nghiệp THPT Tin học – THPT Nguyễn Sinh Sắc",
    description:
      "Ứng dụng ôn thi tốt nghiệp THPT môn Tin học của Trường THPT Nguyễn Sinh Sắc. Dành cho học sinh, không thu phí.",
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "OnTNTHPT – Trường THPT Nguyễn Sinh Sắc",
              description:
                "Hệ thống ôn luyện thi tốt nghiệp THPT môn Tin học dành cho học sinh Trường THPT Nguyễn Sinh Sắc.",
              url: SITE_URL,
              inLanguage: "vi-VN",
              educationalUse: "practice",
              isAccessibleForFree: true,
            }),
          }}
        />
        <ThemeProvider>
          <AuthProvider>{children}</AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
