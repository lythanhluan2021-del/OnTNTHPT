"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { X, ZoomIn, ZoomOut, RotateCcw, Maximize2 } from "lucide-react";
import { soundManager } from "@/lib/audioEffects";

interface ImageZoomModalProps {
  isOpen: boolean;
  src: string;
  alt?: string;
  caption?: string;
  onClose: () => void;
}

const ZOOM_STEPS = [1, 1.35, 1.75, 2.25, 3];

export const ImageZoomModal: React.FC<ImageZoomModalProps> = ({
  isOpen,
  src,
  alt = "Hình minh họa",
  caption,
  onClose,
}) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const positionStartRef = useRef({ x: 0, y: 0 });
  const hasMovedRef = useRef(false);

  // Reset khi mở ảnh mới hoặc đóng modal
  useEffect(() => {
    if (isOpen) {
      setScale(1);
      setPosition({ x: 0, y: 0 });
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, src]);

  // Phím tắt điều khiển: ESC để đóng, +/- để zoom, 0 để reset
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "+" || e.key === "=") {
        handleZoomIn();
      } else if (e.key === "-" || e.key === "_") {
        handleZoomOut();
      } else if (e.key === "0") {
        handleReset();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, scale]);

  const handleZoomIn = useCallback(() => {
    soundManager.playClick();
    setScale((prev) => {
      const next = ZOOM_STEPS.find((s) => s > prev + 0.05);
      return next ?? ZOOM_STEPS[ZOOM_STEPS.length - 1];
    });
  }, []);

  const handleZoomOut = useCallback(() => {
    soundManager.playClick();
    setScale((prev) => {
      const reversed = [...ZOOM_STEPS].reverse();
      const next = reversed.find((s) => s < prev - 0.05);
      const res = next ?? 1;
      if (res <= 1) setPosition({ x: 0, y: 0 });
      return res;
    });
  }, []);

  const handleReset = useCallback(() => {
    soundManager.playClick();
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, []);

  const handleSetPreset = (preset: number) => {
    soundManager.playClick();
    setScale(preset);
    if (preset <= 1) setPosition({ x: 0, y: 0 });
  };

  // Chạm đúp hoặc nhấp đúp để phóng to nhanh (1x -> 2x -> 1x)
  const handleDoubleClick = () => {
    soundManager.playClick();
    if (scale > 1.2) {
      setScale(1);
      setPosition({ x: 0, y: 0 });
    } else {
      setScale(2);
    }
  };

  // Xử lý kéo rê ảnh (Pan) bằng chuột
  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale <= 1) return;
    setIsDragging(true);
    hasMovedRef.current = false;
    dragStartRef.current = { x: e.clientX, y: e.clientY };
    positionStartRef.current = { ...position };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;
    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
      hasMovedRef.current = true;
    }
    setPosition({
      x: positionStartRef.current.x + dx,
      y: positionStartRef.current.y + dy,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Xử lý chạm vuốt cảm ứng trên màn hình điện thoại
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      hasMovedRef.current = false;
      dragStartRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      };
      positionStartRef.current = { ...position };
      if (scale > 1) {
        setIsDragging(true);
      }
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || e.touches.length !== 1) return;
    const dx = e.touches[0].clientX - dragStartRef.current.x;
    const dy = e.touches[0].clientY - dragStartRef.current.y;
    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
      hasMovedRef.current = true;
    }
    setPosition({
      x: positionStartRef.current.x + dx,
      y: positionStartRef.current.y + dy,
    });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Lăn chuột để phóng to/thu nhỏ
  const handleWheel = (e: React.WheelEvent) => {
    if (e.deltaY < 0) {
      handleZoomIn();
    } else if (e.deltaY > 0) {
      handleZoomOut();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex flex-col justify-between p-2 sm:p-4 select-none animate-in fade-in duration-200"
      onClick={(e) => {
        // Chỉ đóng nếu click vào nền và không phải sau khi kéo ảnh
        if (e.target === e.currentTarget && !hasMovedRef.current) {
          onClose();
        }
      }}
    >
      {/* Thanh tiêu đề & Công cụ trên cùng */}
      <div className="flex items-center justify-between gap-2 p-2.5 sm:p-3 rounded-2xl bg-slate-900/90 border border-slate-700/80 shadow-2xl text-slate-100 z-10">
        <div className="flex items-center gap-2 min-w-0 pr-2">
          <div className="w-7 h-7 rounded-xl bg-blue-600/30 border border-blue-500/40 flex items-center justify-center flex-shrink-0">
            <Maximize2 className="w-4 h-4 text-blue-400" />
          </div>
          <div className="min-w-0">
            <p className="text-xs sm:text-sm font-bold text-white truncate">
              {caption || alt || "Chi tiết hình ảnh bài học"}
            </p>
            <p className="text-[10px] text-slate-400">
              Độ phóng đại: <span className="font-semibold text-blue-400">{Math.round(scale * 100)}%</span>
            </p>
          </div>
        </div>

        {/* Nút điều khiển Zoom & Đóng */}
        <div className="flex items-center gap-1.5 flex-shrink-0">
          <button
            onClick={handleZoomOut}
            disabled={scale <= 1}
            title="Thu nhỏ (-)"
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-35 disabled:cursor-not-allowed border border-slate-700 transition-colors"
          >
            <ZoomOut className="w-4 h-4 text-slate-200" />
          </button>

          <button
            onClick={handleReset}
            disabled={scale === 1 && position.x === 0 && position.y === 0}
            title="Khôi phục kích thước ban đầu (0)"
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-35 disabled:cursor-not-allowed border border-slate-700 transition-colors"
          >
            <RotateCcw className="w-4 h-4 text-slate-200" />
          </button>

          <button
            onClick={handleZoomIn}
            disabled={scale >= ZOOM_STEPS[ZOOM_STEPS.length - 1]}
            title="Phóng to (+)"
            className="p-2 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-35 disabled:cursor-not-allowed border border-blue-400/50 transition-colors text-white font-semibold"
          >
            <ZoomIn className="w-4 h-4" />
          </button>

          <div className="h-5 w-px bg-slate-700 mx-1" />

          <button
            onClick={() => {
              soundManager.playClick();
              onClose();
            }}
            title="Đóng (ESC)"
            className="p-2 rounded-xl bg-rose-600/90 hover:bg-rose-600 text-white border border-rose-500 transition-colors flex items-center gap-1 text-xs font-bold"
          >
            <X className="w-4 h-4" />
            <span className="hidden sm:inline">Đóng</span>
          </button>
        </div>
      </div>

      {/* Vùng hiển thị & Thu phóng hình ảnh */}
      <div
        className="flex-1 overflow-hidden flex items-center justify-center relative my-2 rounded-2xl cursor-grab active:cursor-grabbing touch-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onWheel={handleWheel}
        onDoubleClick={handleDoubleClick}
      >
        <div
          style={{
            transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${scale})`,
            transition: isDragging ? "none" : "transform 0.18s cubic-bezier(0.2, 0, 0, 1)",
          }}
          className="max-w-[95vw] max-h-[75vh] flex items-center justify-center select-none"
        >
          <img
            src={src}
            alt={alt}
            draggable={false}
            className="max-h-[75vh] max-w-[92vw] w-auto h-auto object-contain rounded-xl shadow-2xl border border-slate-700/60 bg-white"
          />
        </div>
      </div>

      {/* Thanh điều khiển nhanh phía dưới (Hữu ích đặc biệt cho điện thoại) */}
      <div className="p-2.5 sm:p-3 rounded-2xl bg-slate-900/90 border border-slate-700/80 shadow-2xl flex flex-wrap items-center justify-between gap-2 text-xs text-slate-300 z-10">
        <div className="flex items-center gap-1.5 overflow-x-auto py-0.5">
          <span className="text-[11px] text-slate-400 font-medium hidden sm:inline mr-1">Tỉ lệ nhanh:</span>
          {ZOOM_STEPS.map((step) => {
            const isActive = Math.abs(scale - step) < 0.05;
            return (
              <button
                key={step}
                onClick={() => handleSetPreset(step)}
                className={`px-2.5 py-1 rounded-lg font-bold text-[11px] transition-all border ${
                  isActive
                    ? "bg-blue-600 text-white border-blue-400 shadow-md"
                    : "bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700"
                }`}
              >
                {Math.round(step * 100)}%
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2 text-[11px] text-slate-400">
          <span>💡 Chạm đúp để phóng to • Kéo để di chuyển chi tiết</span>
        </div>
      </div>
    </div>
  );
};
