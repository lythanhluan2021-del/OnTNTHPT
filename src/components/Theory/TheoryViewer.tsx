"use client";

import React, { useState, useMemo } from "react";
import { TOPIC_THEORY_MAP, TheorySection } from "@/data/theoryBank";
import { soundManager } from "@/lib/audioEffects";
import {
  BookOpen,
  Search,
  ChevronDown,
  ChevronUp,
  Sparkles,
  CheckCircle2,
  FileText,
  Lightbulb,
  ArrowRight,
  Layers,
  Cpu,
  History,
  Compass,
  AlertTriangle,
  BookmarkCheck,
  X,
  ZoomIn,
  ShieldAlert,
  Users,
  HeartHandshake
} from "lucide-react";
import { LatexRenderer } from "../UI/LatexRenderer";
import { ImageZoomModal } from "../UI/ImageZoomModal";

interface TheoryViewerProps {
  topicId: string;
  onStartPractice: (part?: "mc" | "tf") => void;
}

export const TheoryViewer: React.FC<TheoryViewerProps> = ({
  topicId,
  onStartPractice,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    "ai-history-concept": true,
    "ai-characteristics": true,
  });
  const [showObjectives, setShowObjectives] = useState(false);
  const [activeZoomImage, setActiveZoomImage] = useState<{
    src: string;
    alt?: string;
    caption?: string;
  } | null>(null);

  // Lấy dữ liệu lý thuyết theo chủ đề
  const theoryData = TOPIC_THEORY_MAP[topicId] || TOPIC_THEORY_MAP["tin-ai-tri-tue-nhan-tao"];

  // Toggle từng mục
  const toggleSection = (sectionId: string) => {
    soundManager.playClick();
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  // Mở / Đóng tất cả
  const handleToggleAll = (expand: boolean) => {
    soundManager.playClick();
    const nextState: Record<string, boolean> = {};
    theoryData.sections.forEach((sec) => {
      nextState[sec.id] = expand;
    });
    setExpandedSections(nextState);
  };

  // Lọc theo từ khóa tìm kiếm
  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return theoryData.sections;
    const query = searchQuery.toLowerCase().trim();

    return theoryData.sections.filter((sec) => {
      const matchTitle = sec.title.toLowerCase().includes(query);
      const matchSummary = sec.summary.toLowerCase().includes(query);
      const matchTerms = sec.keyTerms.some((t) => t.toLowerCase().includes(query));
      const matchContent = sec.content.some((c) => {
        const textMatch = c.text?.toLowerCase().includes(query);
        const headingMatch = c.heading?.toLowerCase().includes(query);
        const bulletMatch = c.bulletPoints?.some(
          (b) =>
            b.label?.toLowerCase().includes(query) ||
            b.desc.toLowerCase().includes(query) ||
            b.example?.toLowerCase().includes(query)
        );
        return textMatch || headingMatch || bulletMatch;
      });
      return matchTitle || matchSummary || matchTerms || matchContent;
    });
  }, [searchQuery, theoryData.sections]);

  // Icon mapper
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "History":
        return <History className="w-5 h-5 text-amber-600" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-blue-600" />;
      case "Layers":
        return <Layers className="w-5 h-5 text-indigo-600" />;
      case "Compass":
        return <Compass className="w-5 h-5 text-emerald-600" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-purple-600" />;
      case "AlertTriangle":
        return <AlertTriangle className="w-5 h-5 text-rose-600" />;
      case "ShieldAlert":
        return <ShieldAlert className="w-5 h-5 text-red-600" />;
      case "Users":
        return <Users className="w-5 h-5 text-sky-600" />;
      case "HeartHandshake":
        return <HeartHandshake className="w-5 h-5 text-pink-600" />;
      default:
        return <FileText className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <div className="space-y-4 pb-20 max-w-md mx-auto">
      {/* Banner tiêu đề Neumorphic */}
      <div className="p-4 rounded-neu bg-[#e6ecf5] shadow-neu-flat space-y-3">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-100/90 text-blue-800 text-[11px] font-bold tracking-wide">
            <BookOpen className="w-3.5 h-3.5" />
            <span>NỘI DUNG LÝ THUYẾT ĐẦY ĐỦ (NGUYÊN BẢN)</span>
          </span>
          <span className="text-[10px] text-slate-500 font-medium truncate max-w-[140px]" title={theoryData.docTitle}>
            {theoryData.docTitle}
          </span>
        </div>

        <div>
          <h2 className="text-base font-extrabold text-slate-800 leading-tight">
            {theoryData.topicName}
          </h2>
          <p className="text-xs text-slate-600 mt-1">
            Giữ nguyên vẹn 100% nội dung lý thuyết từ tài liệu bài giảng gốc, được trình bày mạch lạc, trực quan giúp bạn nắm chắc kiến thức trước khi luyện đề.
          </p>
        </div>

        {/* Thanh tìm kiếm nhanh */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm khái niệm: MYCIN, Dartmouth, Turing, ANI, AGI..."
            className="w-full pl-9 pr-8 py-2 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset-sm text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Nút thao tác nhanh: Mục tiêu cần đạt & Thu/Mở tất cả */}
        <div className="flex items-center justify-between pt-1 text-[11px] font-semibold text-slate-600">
          <button
            onClick={() => {
              soundManager.playClick();
              setShowObjectives((prev) => !prev);
            }}
            className="inline-flex items-center gap-1 text-blue-700 hover:underline"
          >
            <BookmarkCheck className="w-3.5 h-3.5" />
            <span>{showObjectives ? "Ẩn mục tiêu cần đạt" : "Xem mục tiêu cần đạt"}</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleToggleAll(true)}
              className="hover:text-blue-700 transition"
            >
              Mở tất cả
            </button>
            <span>•</span>
            <button
              onClick={() => handleToggleAll(false)}
              className="hover:text-blue-700 transition"
            >
              Thu gọn
            </button>
          </div>
        </div>

        {/* Khối mục tiêu cần đạt (khi mở) */}
        {showObjectives && (
          <div className="p-3 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset-sm space-y-2 border-l-4 border-blue-600 text-xs">
            <div className="font-bold text-blue-900 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600" />
              <span>Yêu cầu cần đạt chuẩn Chương trình GDPT 2018:</span>
            </div>
            <ul className="space-y-1.5 text-slate-700 pl-1">
              {theoryData.objectives.map((obj, idx) => (
                <li key={idx} className="flex items-start gap-2 leading-relaxed">
                  <span className="font-bold text-blue-600 mt-0.5">•</span>
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Danh sách các thẻ lý thuyết Accordion */}
      <div className="space-y-3">
        {filteredSections.length === 0 ? (
          <div className="p-6 rounded-neu bg-[#e6ecf5] shadow-neu-flat text-center space-y-2">
            <p className="text-xs text-slate-500 font-medium">
              Không tìm thấy nội dung phù hợp với từ khóa &quot;{searchQuery}&quot;.
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="text-xs text-blue-600 font-bold hover:underline"
            >
              Xóa bộ lọc tìm kiếm
            </button>
          </div>
        ) : (
          filteredSections.map((section) => {
            const isExpanded = !!expandedSections[section.id];

            return (
              <div
                key={section.id}
                className="rounded-neu bg-[#e6ecf5] shadow-neu-flat overflow-hidden transition-all duration-200"
              >
                {/* Header của từng thẻ lý thuyết */}
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full text-left p-3.5 sm:p-4 flex items-center justify-between gap-3 hover:bg-slate-200/40 transition-colors"
                >
                  <div className="flex items-center gap-2.5 flex-1 min-w-0">
                    <div className="p-2 rounded-neu-sm bg-[#e6ecf5] shadow-neu-flat-xs flex-shrink-0">
                      {renderIcon(section.icon)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-200/80 text-slate-700 shadow-neu-flat-xs">
                          {section.tag}
                        </span>
                      </div>
                      <h3 className="text-xs sm:text-sm font-extrabold text-slate-800 truncate mt-0.5">
                        {section.title}
                      </h3>
                      {!isExpanded && (
                        <p className="text-[11px] text-slate-500 truncate mt-0.5">
                          {section.summary}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="p-1 rounded-neu-xs text-slate-500 shadow-neu-flat-xs flex-shrink-0">
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {/* Nội dung chi tiết khi mở thẻ */}
                {isExpanded && (
                  <div className="px-3.5 sm:px-4 pb-4 pt-1 space-y-3.5 border-t border-slate-300/60">
                    {/* Giới thiệu trọng tâm mục */}
                    <div className="p-2.5 rounded-neu-sm bg-blue-50/80 border-l-3 border-blue-500 text-xs text-blue-950 font-medium flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                      <span>{section.summary}</span>
                    </div>

                    {/* Các đoạn văn bản và đề mục */}
                    {section.content.map((block, bIdx) => (
                      <div key={bIdx} className="space-y-2 text-xs">
                        {block.heading && (
                          <h4 className="font-extrabold text-slate-800 text-xs flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                            <LatexRenderer content={block.heading} />
                          </h4>
                        )}

                        {block.text && (
                          <div className="text-slate-700 leading-relaxed pl-1">
                            <LatexRenderer content={block.text} />
                          </div>
                        )}

                        {/* Hình ảnh bài học (nếu có) */}
                        {block.image && (
                          <div className="my-3 p-2.5 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset-sm flex flex-col items-center group relative">
                            {/* Thanh thao tác nhanh ngay trên/cạnh ảnh */}
                            <div className="w-full flex items-center justify-between gap-2 mb-2 px-1">
                              <span className="text-[11px] font-semibold text-slate-600 truncate flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                                <span className="truncate">{block.imageCaption || "Hình minh họa bài học"}</span>
                              </span>

                              {/* Nút Zoom ngay cạnh ảnh */}
                              <button
                                type="button"
                                onClick={() => {
                                  soundManager.playClick();
                                  setActiveZoomImage({
                                    src: block.image!,
                                    alt: block.imageCaption || "Hình minh họa bài học",
                                    caption: block.imageCaption,
                                  });
                                }}
                                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-neu-xs bg-[#e6ecf5] shadow-neu-flat hover:shadow-neu-flat-sm active:shadow-neu-inset-xs text-[11px] font-bold text-blue-700 hover:text-blue-800 transition-all flex-shrink-0 border border-blue-200/60"
                                title="Phóng to ảnh để quan sát rõ hơn trên điện thoại"
                              >
                                <ZoomIn className="w-3.5 h-3.5 text-blue-600" />
                                <span>Phóng to</span>
                              </button>
                            </div>

                            {/* Vùng ảnh có thể nhấp trực tiếp để phóng to */}
                            <div
                              onClick={() => {
                                soundManager.playClick();
                                setActiveZoomImage({
                                  src: block.image!,
                                  alt: block.imageCaption || "Hình minh họa bài học",
                                  caption: block.imageCaption,
                                });
                              }}
                              className="relative cursor-zoom-in rounded-lg overflow-hidden max-w-full group/img flex items-center justify-center bg-white p-1 border border-slate-300/80 shadow-sm"
                              title="Nhấn vào ảnh hoặc nút Phóng to để xem chi tiết"
                            >
                              <img
                                src={block.image}
                                alt={block.imageCaption || "Hình minh họa bài học"}
                                className="max-h-72 w-auto object-contain rounded transition-transform duration-200 group-hover/img:scale-[1.01]"
                              />
                              {/* Lớp phủ gợi ý khi lướt chuột */}
                              <div className="absolute inset-0 bg-slate-900/15 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center pointer-events-none rounded">
                                <span className="px-3 py-1.5 rounded-full bg-slate-900/85 text-white text-[11px] font-semibold shadow-lg flex items-center gap-1.5 backdrop-blur-sm">
                                  <ZoomIn className="w-3.5 h-3.5 text-blue-300" />
                                  Chạm để phóng to
                                </span>
                              </div>
                            </div>

                            {block.imageCaption && (
                              <span className="text-[11px] text-slate-500 font-medium italic mt-2 text-center">
                                {block.imageCaption}
                              </span>
                            )}
                          </div>
                        )}

                        {/* Khối mã nguồn Code (nếu có) */}
                        {block.code && (
                          <div className="my-2 p-2.5 rounded-neu-sm bg-slate-900 text-slate-100 font-mono text-xs overflow-x-auto shadow-inner">
                            <pre className="whitespace-pre">{block.code}</pre>
                          </div>
                        )}

                        {block.bulletPoints && block.bulletPoints.length > 0 && (
                          <div className="space-y-2.5 pl-1 pt-1">
                            {block.bulletPoints.map((point, pIdx) => (
                              <div
                                key={pIdx}
                                className="p-3 rounded-neu-sm bg-[#e6ecf5] shadow-neu-inset-sm space-y-1.5"
                              >
                                {point.label && (
                                  <div className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
                                    <span className="text-blue-600">▪</span>
                                    <LatexRenderer content={point.label} />
                                  </div>
                                )}
                                <div className="text-slate-700 text-xs leading-relaxed">
                                  <LatexRenderer content={point.desc} />
                                </div>
                                {point.example && (
                                  <div className="pt-1.5 mt-1 border-t border-slate-300/70 flex items-start gap-1.5 text-[11px] text-emerald-900 font-medium">
                                    <Lightbulb className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                    <div className="leading-snug">
                                      <span className="font-bold text-emerald-800">Ví dụ thực tế: </span>
                                      <LatexRenderer content={point.example} />
                                    </div>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}

                    {/* Từ khóa trọng tâm ôn thi */}
                    <div className="pt-2">
                      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                        Từ khóa hay gặp trong đề thi:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {section.keyTerms.map((term, tIdx) => (
                          <button
                            key={tIdx}
                            onClick={() => setSearchQuery(term)}
                            className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#e6ecf5] shadow-neu-flat-xs text-blue-700 active:shadow-neu-inset transition"
                          >
                            #{term}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Thanh nút hành động chuyển sang Luyện tập */}
      <div className="p-4 rounded-neu bg-[#e6ecf5] shadow-neu-flat space-y-2.5 text-center">
        <div className="text-xs font-extrabold text-slate-800">
          Bạn đã nắm vững lý thuyết phần này?
        </div>
        <p className="text-[11px] text-slate-600">
          Hãy củng cố kiến thức ngay bằng cách thử sức với các câu hỏi nhiều lựa chọn hoặc câu hỏi Đúng / Sai chuẩn ma trận thi tốt nghiệp THPT!
        </p>
        <div className="grid grid-cols-2 gap-2 pt-1">
          <button
            onClick={() => {
              soundManager.playClick();
              onStartPractice("mc");
            }}
            className="py-2.5 px-2 rounded-neu-sm bg-blue-600 text-white font-bold text-xs shadow-neu-blue active:shadow-neu-blue-pressed flex items-center justify-center gap-1.5 transition"
          >
            <span>Luyện tập 4 lựa chọn</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => {
              soundManager.playClick();
              onStartPractice("tf");
            }}
            className="py-2.5 px-2 rounded-neu-sm bg-gradient-to-r from-blue-700 to-indigo-700 text-white font-bold text-xs shadow-neu-blue active:shadow-neu-blue-pressed flex items-center justify-center gap-1.5 transition"
          >
            <span>Luyện tập Đúng / Sai</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Cửa sổ phóng to hình ảnh toàn màn hình */}
      <ImageZoomModal
        isOpen={!!activeZoomImage}
        src={activeZoomImage?.src || ""}
        alt={activeZoomImage?.alt}
        caption={activeZoomImage?.caption}
        onClose={() => setActiveZoomImage(null)}
      />
    </div>
  );
};
