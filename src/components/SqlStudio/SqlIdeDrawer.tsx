"use client";

import React from "react";
import { SqlIde } from "./SqlIde";
import { soundManager } from "@/lib/audioEffects";
import { X } from "lucide-react";

interface SqlIdeDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  initialDatasetId?: string;
  initialQuery?: string;
  exerciseTitle?: string;
  targetQuestionId?: string;
  exerciseTargetQuestionId?: string;
}

export const SqlIdeDrawer: React.FC<SqlIdeDrawerProps> = ({
  isOpen,
  onClose,
  initialDatasetId,
  initialQuery,
  exerciseTitle,
  targetQuestionId,
  exerciseTargetQuestionId,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 antialiased animate-fade-in">
      <div className="w-full max-w-5xl h-[94vh] max-h-[880px] flex flex-col rounded-2xl overflow-hidden shadow-2xl relative">
        {/* Nút đóng modal ở góc trên phải */}
        <button
          onClick={() => {
            soundManager.playClick();
            onClose();
          }}
          className="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-slate-200/80 hover:bg-rose-100 text-slate-500 hover:text-rose-600 transition shadow-sm"
          title="Đóng cửa sổ SQL Studio"
        >
          <X className="w-4 h-4" />
        </button>

        <SqlIde
          initialDatasetId={initialDatasetId}
          initialQuery={initialQuery}
          exerciseTitle={exerciseTitle}
          targetQuestionId={targetQuestionId || exerciseTargetQuestionId}
          onClose={() => {
            soundManager.playClick();
            onClose();
          }}
        />
      </div>
    </div>
  );
};
