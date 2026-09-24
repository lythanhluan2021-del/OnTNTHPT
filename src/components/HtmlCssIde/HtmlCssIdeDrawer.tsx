"use client";

import React from "react";
import { HtmlCssIde } from "./HtmlCssIde";
import { soundManager } from "@/lib/audioEffects";

interface HtmlCssIdeDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  initialHtml?: string;
  initialCss?: string;
  exerciseTitle?: string;
  exerciseTargetAnswer?: string;
  exerciseQuestionNumber?: number | string;
}

export const HtmlCssIdeDrawer: React.FC<HtmlCssIdeDrawerProps> = ({
  isOpen,
  onClose,
  initialHtml,
  initialCss,
  exerciseTitle,
  exerciseTargetAnswer,
  exerciseQuestionNumber,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 antialiased animate-fade-in">
      <div className="w-full max-w-5xl h-[94vh] max-h-[880px] flex flex-col rounded-neu overflow-hidden shadow-2xl">
        <HtmlCssIde
          initialHtml={initialHtml}
          initialCss={initialCss}
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
