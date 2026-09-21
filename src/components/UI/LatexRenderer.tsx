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

    // Tự động nhận diện ký hiệu số mũ dạng X^2, R^2, x^n khi không ở trong KaTeX
    text = text.replace(/([a-zA-Z0-9)\]])\^([0-9a-zA-Z+-]+)/g, "$1<sup class=\"font-semibold text-[0.8em] relative -top-1\">$2</sup>");

    // Đảm bảo thẻ <sup> sẵn có hiển thị đẹp mắt, nâng cao rõ ràng
    text = text.replace(/<sup>([\s\S]*?)<\/sup>/g, "<sup class=\"font-semibold text-[0.8em] relative -top-1\">$1</sup>");

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
