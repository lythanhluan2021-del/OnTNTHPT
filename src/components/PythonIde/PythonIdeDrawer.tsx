"use client";

import React from "react";
import { PythonIde } from "./PythonIde";
import { X, Terminal } from "lucide-react";
import { soundManager } from "@/lib/audioEffects";

interface PythonIdeDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  initialCode?: string;
  initialStdin?: string;
  exerciseTitle?: string;
  exerciseTargetAnswer?: string;
  exerciseQuestionNumber?: number | string;
}

export const PythonIdeDrawer: React.FC<PythonIdeDrawerProps> = ({
  isOpen,
  onClose,
  initialCode,
  initialStdin,
  exerciseTitle,
  exerciseTargetAnswer,
  exerciseQuestionNumber,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 antialiased animate-fade-in">
      <div className="w-full max-w-4xl h-[92vh] max-h-[850px] flex flex-col rounded-neu overflow-hidden shadow-2xl">
        <PythonIde
          initialCode={initialCode}
          initialStdin={initialStdin}
          exerciseTitle={exerciseTitle}
          exerciseTargetAnswer={exerciseTargetAnswer}
          exerciseQuestionNumber={exerciseQuestionNumber}
          onClose={() => {
            soundManager.playClick();
            onClose();
          }}
          isModal={true}
        />
      </div>
    </div>
  );
};
