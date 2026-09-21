"use client";

import React, { useMemo } from "react";
import katex from "katex";

interface LatexRendererProps {
  content: string;
  className?: string;
}

export const LatexRenderer: React.FC<LatexRendererProps> = ({
  content,
  className = "",
}) => {
  const renderedHtml = useMemo(() => {
    if (!content) return "";

    // Tách và render cả công thức inline \( ... \) / $ ... $ và display \[ ... \] / $$ ... $$
    let text = content;

    // Thay thế display math $$ ... $$ hoặc \[ ... \]
    text = text.replace(/(\$\$|\\\[)([\s\S]*?)(\$\$|\\\])/g, (_, __, math) => {
      try {
        return katex.renderToString(math.trim(), {
          displayMode: true,
          throwOnError: false,
        });
      } catch {
        return math;
      }
    });

    // Thay thế inline math \( ... \) hoặc $ ... $
    text = text.replace(/(\$|\\\()([^\$\\\n]+?)(\$|\\\))/g, (_, __, math) => {
      try {
        return katex.renderToString(math.trim(), {
          displayMode: false,
          throwOnError: false,
        });
      } catch {
        return math;
      }
    });

    // Chuyển ký tự xuống dòng thành <br />
    text = text.replace(/\n/g, "<br />");

    return text;
  }, [content]);

  return (
    <span
      className={`leading-relaxed inline-block ${className}`}
      dangerouslySetInnerHTML={{ __html: renderedHtml }}
    />
  );
};
