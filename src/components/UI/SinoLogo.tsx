"use client";

import React from "react";
import Image from "next/image";

interface SinoLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  showTagline?: boolean;
  className?: string;
  variant?: "image" | "vector";
}

export const SinoLogo: React.FC<SinoLogoProps> = ({
  size = "md",
  showText = true,
  showTagline = false,
  className = "",
  variant = "image",
}) => {
  const sizeMap = {
    sm: { box: "w-8 h-8", imgSize: 32, text: "text-base", subText: "text-[10px]" },
    md: { box: "w-10 h-10", imgSize: 40, text: "text-lg", subText: "text-[11px]" },
    lg: { box: "w-14 h-14", imgSize: 56, text: "text-2xl", subText: "text-xs" },
    xl: { box: "w-20 h-20", imgSize: 80, text: "text-3xl", subText: "text-sm" },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 ${className}`}>
      {/* Logo Icon Container */}
      <div
        className={`${currentSize.box} rounded-neu-sm bg-[#e6ecf5] dark:bg-[#1f2633] shadow-neu-flat border border-white/70 dark:border-slate-700/60 p-1 flex items-center justify-center overflow-hidden flex-shrink-0 transition-transform hover:scale-105`}
      >
        {variant === "image" ? (
          <Image
            src="/sino_logo.png"
            alt="SINO Logo"
            width={currentSize.imgSize}
            height={currentSize.imgSize}
            className="w-full h-full object-contain rounded-sm mix-blend-multiply dark:mix-blend-normal"
            priority
          />
        ) : (
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Mũ tốt nghiệp phía trên */}
            <path
              d="M50 14L82 28L50 42L18 28L50 14Z"
              className="fill-blue-900 dark:fill-blue-400 stroke-blue-950 dark:stroke-blue-300"
              strokeWidth="3"
              strokeLinejoin="round"
            />
            <path
              d="M74 32.5V45C74 46.5 72.5 48 70 48"
              className="stroke-blue-600 dark:stroke-blue-400"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* Chữ S cách điệu hiện đại */}
            <path
              d="M66 40C66 32 58 26 48 26C38 26 30 33 30 43C30 54 44 57 56 61C68 65 72 71 72 80C72 90 62 96 48 96C34 96 26 89 26 80"
              className="stroke-slate-900 dark:stroke-slate-100"
              strokeWidth="7"
              strokeLinecap="round"
            />
            {/* Tech-inspired accent lines (Electric Blue) */}
            <path
              d="M20 72H34"
              className="stroke-sky-500"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M24 80H42"
              className="stroke-blue-500"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M32 88H50"
              className="stroke-indigo-500"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        )}
      </div>

      {/* Brand Title & Tagline */}
      {showText && (
        <div className="flex flex-col min-w-0 text-left">
          <div className="flex items-center gap-1.5">
            <span
              className={`${currentSize.text} font-black tracking-tight text-slate-800 dark:text-slate-100 uppercase`}
            >
              SINO
            </span>
            <span className="text-[10px] uppercase tracking-wider font-extrabold bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 px-1.5 py-0.2 rounded shadow-neu-flat-xs">
              EdTech
            </span>
          </div>
          {showTagline && (
            <p
              className={`${currentSize.subText} font-bold text-blue-600 dark:text-blue-400 tracking-tight leading-tight`}
            >
              Ôn thi thông minh, bứt phá điểm số
            </p>
          )}
        </div>
      )}
    </div>
  );
};
