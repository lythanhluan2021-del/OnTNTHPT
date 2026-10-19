import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_URL = "https://on-tnthpt.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "SINO – Ôn thi thông minh, bứt phá điểm số",
    template: "%s | SINO",
  },
  description:
    "SINO – Nền tảng ôn thi tốt nghiệp THPT thông minh môn Tin học, bứt phá điểm số cùng trợ lý AI và lộ trình ôn tập cá nhân hóa.",
  applicationName: "SINO",
  authors: [{ name: "Ban quản lý dự án Khoa học kỹ thuật" }],
  creator: "Ban quản lý dự án Khoa học kỹ thuật",
  publisher: "SINO",
  category: "education",
  keywords: [
    "SINO",
    "ôn thi thông minh",
    "bứt phá điểm số",
    "ôn thi THPT",
    "tin học 12",
    "trắc nghiệm tin học",
    "AI gia sư socratic",
  ],
  icons: {
    icon: "/sino_logo.png",
    apple: "/sino_logo.png",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: SITE_URL,
    siteName: "SINO",
    title: "SINO – Ôn thi thông minh, bứt phá điểm số",
    description:
      "SINO – Nền tảng ôn thi tốt nghiệp THPT thông minh, bứt phá điểm số môn Tin học.",
    images: [
      {
        url: "/sino_logo.png",
        width: 800,
        height: 800,
        alt: "SINO Logo",
      },
    ],
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
              name: "SINO – Ôn thi thông minh, bứt phá điểm số",
              description:
                "Nền tảng ôn thi tốt nghiệp THPT thông minh môn Tin học, bứt phá điểm số.",
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
