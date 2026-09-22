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
    const placeholders: { id: string; html: string }[] = [];

    const stash = (html: string) => {
      const id = `__RENDER_TOKEN_${placeholders.length}__`;
      placeholders.push({ id, html });
      return id;
    };

    // 1. Display math: $$ ... $$ hoặc \[ ... \]
    text = text.replace(/\$\$([\s\S]*?)\$\$/g, (_, math) => {
      try {
        return stash(
          katex.renderToString(math.trim(), {
            displayMode: true,
            throwOnError: false,
          })
        );
      } catch {
        return `$$${math}$$`;
      }
    });

    text = text.replace(/\\\[([\s\S]*?)\\\]/g, (_, math) => {
      try {
        return stash(
          katex.renderToString(math.trim(), {
            displayMode: true,
            throwOnError: false,
          })
        );
      } catch {
        return `\\[${math}\\]`;
      }
    });

    // 2. Inline math: \( ... \)
    text = text.replace(/\\\(([\s\S]*?)\\\)/g, (_, math) => {
      try {
        return stash(
          katex.renderToString(math.trim(), {
            displayMode: false,
            throwOnError: false,
          })
        );
      } catch {
        return `\\(${math}\\)`;
      }
    });

    // 3. Inline math: $ ... $ (không nhầm với ký tự tiền tệ $100 hay dấu cách)
    text = text.replace(/\$([^\$\n]+?)\$/g, (_, math) => {
      try {
        return stash(
          katex.renderToString(math.trim(), {
            displayMode: false,
            throwOnError: false,
          })
        );
      } catch {
        return `$${math}$`;
      }
    });

    // 4. Bắt thêm các công thức phân số \frac{...}{...} nếu người dùng hoặc tài liệu chưa kịp bọc $
    text = text.replace(/(\\frac\{[^{}]+\}\{[^{}]+\}(?:\s*(?:\\cdot|\\times|\*|\+|-)?\s*(?:\([^\)]+\)|[a-zA-Z0-9]+))?)/g, (match) => {
      try {
        return stash(
          katex.renderToString(match.trim(), {
            displayMode: false,
            throwOnError: false,
          })
        );
      } catch {
        return match;
      }
    });

    // 5. Bảo toàn các thẻ định dạng văn bản hợp lệ: <sup>, <sub>, <b>, <strong>
    text = text.replace(/<sup>([\s\S]*?)<\/sup>/gi, (_, inner) => {
      return stash(`<sup class="font-semibold text-[0.8em] relative -top-1">${inner}</sup>`);
    });
    text = text.replace(/<sub>([\s\S]*?)<\/sub>/gi, (_, inner) => {
      return stash(`<sub class="font-semibold text-[0.8em] relative -bottom-1">${inner}</sub>`);
    });
    text = text.replace(/<b>([\s\S]*?)<\/b>/gi, (_, inner) => {
      return stash(`<strong class="font-semibold text-slate-900 dark:text-slate-100">${inner}</strong>`);
    });
    text = text.replace(/<strong>([\s\S]*?)<\/strong>/gi, (_, inner) => {
      return stash(`<strong class="font-semibold text-slate-900 dark:text-slate-100">${inner}</strong>`);
    });

    // 6. Tự động nhận diện ký hiệu số mũ dạng X^2, R^2, x^n khi không ở trong KaTeX
    text = text.replace(/([a-zA-Z0-9)\]])\^([0-9a-zA-Z+-]+)/g, (_, base, exp) => {
      return stash(`${base}<sup class="font-semibold text-[0.8em] relative -top-1">${exp}</sup>`);
    });

    // 7. Nhận diện các thẻ HTML trong Tin học 12 (ví dụ: <p>, <h1>, <a>, <img>, <table>, <html>, <head>, <title>, <form>, <input>, v.v.)
    // và các placeholder lập trình (ví dụ: <giá trị>, <điều kiện>, <tên biến>)
    text = text.replace(/<([a-zA-Z\p{L}1-6!/][^<>\n]*?)>/gu, (_, tagContent) => {
      const escapedTag = tagContent
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
      return stash(
        `<code class="font-mono text-pink-600 dark:text-pink-400 bg-pink-50 dark:bg-pink-950/40 px-1.5 py-0.5 rounded text-[0.88em] font-semibold border border-pink-200 dark:border-pink-800/50 shadow-sm inline-block mx-0.5">&lt;${escapedTag}&gt;</code>`
      );
    });

    // 8. Thoát an toàn mọi ký tự < và > tự do còn lại (tránh lỗi DOM x < y, a > b)
    text = text.replace(/</g, "&lt;").replace(/>/g, "&gt;");

    // 9. Khôi phục toàn bộ các token an toàn (KaTeX, Code badge HTML, Formatting)
    for (const { id, html } of placeholders) {
      text = text.replace(id, html);
    }

    // 10. Chuyển ký tự xuống dòng thành <br />
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
