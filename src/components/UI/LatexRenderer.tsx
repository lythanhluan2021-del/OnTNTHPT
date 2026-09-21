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

    let text = content;

    // 1. Display math: $$ ... $$ hoặc \[ ... \]
    text = text.replace(/\$\$([\s\S]*?)\$\$/g, (_, math) => {
      try {
        return katex.renderToString(math.trim(), {
          displayMode: true,
          throwOnError: false,
        });
      } catch {
        return `$$${math}$$`;
      }
    });

    text = text.replace(/\\\[([\s\S]*?)\\\]/g, (_, math) => {
      try {
        return katex.renderToString(math.trim(), {
          displayMode: true,
          throwOnError: false,
        });
      } catch {
        return `\\[${math}\\]`;
      }
    });

    // 2. Inline math: \( ... \)
    text = text.replace(/\\\(([\s\S]*?)\\\)/g, (_, math) => {
      try {
        return katex.renderToString(math.trim(), {
          displayMode: false,
          throwOnError: false,
        });
      } catch {
        return `\\(${math}\\)`;
      }
    });

    // 3. Inline math: $ ... $ (cho phép mọi ký tự kể cả backslash \ và dấu cách)
    text = text.replace(/\$([^\$\n]+?)\$/g, (_, math) => {
      try {
        return katex.renderToString(math.trim(), {
          displayMode: false,
          throwOnError: false,
        });
      } catch {
        return `$${math}$`;
      }
    });

    // 4. Bắt thêm các công thức phân số \frac{...}{...} nếu người dùng hoặc tài liệu chưa kịp bọc $
    text = text.replace(/(\\frac\{[^{}]+\}\{[^{}]+\}(?:\s*(?:\\cdot|\\times|\*|\+|-)?\s*(?:\([^\)]+\)|[a-zA-Z0-9]+))?)/g, (match) => {
      try {
        return katex.renderToString(match.trim(), {
          displayMode: false,
          throwOnError: false,
        });
      } catch {
        return match;
      }
    });

    // 5. Tự động nhận diện ký hiệu số mũ dạng X^2, R^2, x^n khi không ở trong KaTeX
    text = text.replace(/([a-zA-Z0-9)\]])\^([0-9a-zA-Z+-]+)/g, '$1<sup class="font-semibold text-[0.8em] relative -top-1">$2</sup>');

    // 6. Đảm bảo thẻ <sup> sẵn có hiển thị đẹp mắt, nâng cao rõ ràng
    text = text.replace(/<sup>([\s\S]*?)<\/sup>/g, '<sup class="font-semibold text-[0.8em] relative -top-1">$1</sup>');

    // 7. Chuyển ký tự xuống dòng thành <br />
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
