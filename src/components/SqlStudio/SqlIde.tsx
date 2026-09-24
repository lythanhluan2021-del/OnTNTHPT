"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  SQL_DATASETS,
  SqlDataset,
  SqlTable,
  SqlSampleQuery,
} from "@/data/sqlDatasets";
import { executeSql, initSqlDatabase, QueryResult } from "@/lib/sqlEngine";
import { soundManager } from "@/lib/audioEffects";
import {
  Play,
  RotateCcw,
  Database,
  Table as TableIcon,
  Key,
  Link as LinkIcon,
  FileCode,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  ChevronDown,
  Sparkles,
  ExternalLink,
  Code2,
} from "lucide-react";

interface SqlIdeProps {
  initialDatasetId?: string;
  initialQuery?: string;
  targetQuestionId?: string;
  exerciseTitle?: string;
  onClose?: () => void;
}

export const SqlIde: React.FC<SqlIdeProps> = ({
  initialDatasetId = "db-thu-vien",
  initialQuery,
  targetQuestionId,
  exerciseTitle,
  onClose,
}) => {
  const [selectedDataset, setSelectedDataset] = useState<SqlDataset>(() => {
    return (
      SQL_DATASETS.find((ds) => ds.id === initialDatasetId) || SQL_DATASETS[0]
    );
  });

  const [code, setCode] = useState<string>(() => {
    if (initialQuery) return initialQuery;
    const defaultQuery = selectedDataset.sampleQueries[0]?.query || "SELECT * FROM NGUOIDOC;";
    return defaultQuery;
  });

  const [result, setResult] = useState<QueryResult | null>(null);
  const [isExecuting, setIsExecuting] = useState(false);
  const [activeTab, setActiveTab] = useState<"result" | "schema" | "samples">("result");
  const [selectedTable, setSelectedTable] = useState<SqlTable | null>(null);
  const [copied, setCopied] = useState(false);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Khởi tạo Database khi đổi dataset
  useEffect(() => {
    initSqlDatabase(selectedDataset);
    if (!initialQuery) {
      const q = selectedDataset.sampleQueries[0]?.query || `SELECT * FROM ${selectedDataset.tables[0]?.name};`;
      setCode(q);
      handleExecuteQuery(q);
    } else {
      handleExecuteQuery(code);
    }
  }, [selectedDataset]);

  // Chọn bảng đầu tiên mặc định cho schema viewer
  useEffect(() => {
    if (selectedDataset.tables.length > 0 && !selectedTable) {
      setSelectedTable(selectedDataset.tables[0]);
    }
  }, [selectedDataset, selectedTable]);

  // Chạy câu lệnh SQL
  const handleExecuteQuery = (sqlToRun?: string) => {
    const query = sqlToRun !== undefined ? sqlToRun : code;
    setIsExecuting(true);
    soundManager.playClick();

    setTimeout(() => {
      const res = executeSql(query, selectedDataset);
      setResult(res);
      setIsExecuting(false);
      setActiveTab("result");
      if (res.error) {
        soundManager.playIncorrect();
      } else {
        soundManager.playCorrect();
      }
    }, 50);
  };

  // Nạp câu lệnh mẫu
  const handleSelectSampleQuery = (sample: SqlSampleQuery) => {
    soundManager.playClick();
    setCode(sample.query);
    handleExecuteQuery(sample.query);
  };

  // Xem dữ liệu nhanh của bảng
  const handleQuickViewTable = (table: SqlTable) => {
    soundManager.playClick();
    const q = `SELECT * FROM ${table.name};`;
    setCode(q);
    handleExecuteQuery(q);
  };

  // Reset database về trạng thái ban đầu
  const handleResetDatabase = () => {
    soundManager.playClick();
    initSqlDatabase(selectedDataset);
    const q = `SELECT * FROM ${selectedDataset.tables[0]?.name};`;
    setCode(q);
    handleExecuteQuery(q);
  };

  // Chèn từ khóa nhanh vào vị trí con trỏ
  const handleInsertKeyword = (keyword: string) => {
    soundManager.playClick();
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = code;
    const before = text.substring(0, start);
    const after = text.substring(end);

    const newCode = `${before}${keyword} ${after}`;
    setCode(newCode);

    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + keyword.length + 1, start + keyword.length + 1);
    }, 0);
  };

  // Phím tắt Tab và Ctrl+Enter
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      e.preventDefault();
      handleExecuteQuery();
      return;
    }

    if (e.key === "Tab") {
      e.preventDefault();
      const textarea = textareaRef.current;
      if (!textarea) return;

      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const newText = code.substring(0, start) + "  " + code.substring(end);
      setCode(newText);

      setTimeout(() => {
        textarea.selectionStart = textarea.selectionEnd = start + 2;
      }, 0);
    }
  };

  // Sao chép kết quả truy vấn
  const handleCopyResult = () => {
    if (!result || result.rows.length === 0) return;
    const header = result.columns.join("\t");
    const body = result.rows.map((r) => r.join("\t")).join("\n");
    navigator.clipboard.writeText(`${header}\n${body}`);
    setCopied(true);
    soundManager.playClick();
    setTimeout(() => setCopied(false), 2000);
  };

  // Đánh số dòng trong trình soạn thảo
  const lineCount = Math.max(code.split("\n").length, 4);
  const lineNumbers = Array.from({ length: lineCount }, (_, i) => i + 1);

  return (
    <div className="flex flex-col h-full bg-[#e6ecf5] text-slate-800 rounded-2xl overflow-hidden shadow-neu-flat border border-white/60">
      {/* 1. Header Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 bg-[#e6ecf5] border-b border-slate-300/80 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-blue-500/15 flex items-center justify-center text-blue-600 shadow-neu-inset">
            <Database className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-bold text-slate-800 text-sm md:text-base flex items-center gap-1.5">
                <span>SQL Studio</span>
                <span className="text-[10px] uppercase font-extrabold px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-300 tracking-wide">
                  Client Engine
                </span>
                {exerciseTitle && (
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 border border-blue-200 truncate max-w-[200px] sm:max-w-xs">
                    {exerciseTitle}
                  </span>
                )}
              </h2>
            </div>
            <p className="text-[11px] text-slate-500 hidden sm:block">
              {exerciseTitle || "Thực hành truy vấn Cơ sở dữ liệu quan hệ (Tin học 11 Chuyên đề 11F)"}
            </p>
          </div>
        </div>

        {/* Bộ chọn CSDL */}
        <div className="flex items-center gap-2">
          <div className="relative">
            <select
              value={selectedDataset.id}
              onChange={(e) => {
                const found = SQL_DATASETS.find((ds) => ds.id === e.target.value);
                if (found) setSelectedDataset(found);
              }}
              className="appearance-none bg-white/90 border border-slate-300 rounded-xl px-3 py-1.5 pr-8 text-xs font-semibold text-slate-700 shadow-sm hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 cursor-pointer"
            >
              {SQL_DATASETS.map((ds) => (
                <option key={ds.id} value={ds.id}>
                  {ds.name}
                </option>
              ))}
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          <button
            onClick={handleResetDatabase}
            title="Nạp lại CSDL mẫu ban đầu"
            className="p-1.5 rounded-xl bg-slate-200/80 hover:bg-slate-300 text-slate-600 text-xs font-medium transition shadow-neu-flat"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 2. Main Content Split View */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-3 p-3 overflow-hidden min-h-0">
        {/* CỘT TRÁI: Editor & SQL Keywords (7/12 trên Desktop) */}
        <div className="lg:col-span-7 flex flex-col gap-2 min-h-0 overflow-hidden">
          {/* Thanh từ khóa nhanh */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs no-scrollbar">
            <span className="text-[11px] text-slate-500 font-semibold shrink-0">Từ khóa:</span>
            {["SELECT", "FROM", "WHERE", "INNER JOIN", "ON", "GROUP BY", "HAVING", "ORDER BY", "COUNT(*)"].map(
              (kw) => (
                <button
                  key={kw}
                  onClick={() => handleInsertKeyword(kw)}
                  className="px-2 py-0.5 rounded-lg bg-white/80 hover:bg-blue-50 hover:text-blue-600 border border-slate-200 text-slate-700 text-[11px] font-mono font-medium shadow-sm transition shrink-0"
                >
                  {kw}
                </button>
              )
            )}
          </div>

          {/* Trình soạn thảo Code SQL */}
          <div className="flex-1 flex rounded-xl bg-slate-900 border border-slate-800 shadow-inner overflow-hidden min-h-[160px] lg:min-h-[220px]">
            {/* Đánh số dòng */}
            <div className="w-9 py-3 bg-slate-950/60 text-slate-500 select-none text-right pr-2 text-xs font-mono leading-relaxed border-r border-slate-800">
              {lineNumbers.map((n) => (
                <div key={n}>{n}</div>
              ))}
            </div>

            {/* Vùng gõ lệnh */}
            <textarea
              ref={textareaRef}
              value={code}
              onChange={(e) => setCode(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Nhập câu truy vấn SQL tại đây (ví dụ: SELECT * FROM NGUOIDOC;)..."
              spellCheck={false}
              className="flex-1 p-3 bg-transparent text-emerald-300 font-mono text-xs md:text-sm leading-relaxed resize-none focus:outline-none placeholder-slate-600 selection:bg-blue-600/40"
            />
          </div>

          {/* Thanh hành động dưới editor */}
          <div className="flex items-center justify-between gap-2 pt-1">
            <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
              <span className="hidden sm:inline">Phím tắt:</span>
              <kbd className="px-1.5 py-0.5 rounded bg-white border border-slate-300 text-[10px] font-mono shadow-sm">
                Ctrl + Enter
              </kbd>
              <span className="hidden sm:inline">để chạy lệnh</span>
            </div>

            <button
              onClick={() => handleExecuteQuery()}
              disabled={isExecuting}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold text-xs md:text-sm shadow-md transition-all active:scale-95 disabled:opacity-50"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>{isExecuting ? "Đang chạy..." : "Thực thi SQL"}</span>
            </button>
          </div>
        </div>

        {/* CỘT PHẢI: Tab Navigation (Kết quả, Schema, Bài mẫu) (5/12 trên Desktop) */}
        <div className="lg:col-span-5 flex flex-col bg-white/70 rounded-xl border border-slate-200 shadow-sm overflow-hidden min-h-0">
          {/* Tabs header */}
          <div className="flex items-center border-b border-slate-200 bg-slate-50/80 px-2 pt-1.5 gap-1 shrink-0">
            <button
              onClick={() => {
                soundManager.playClick();
                setActiveTab("result");
              }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-t-lg transition flex items-center gap-1.5 ${
                activeTab === "result"
                  ? "bg-white text-blue-600 border-t-2 border-blue-500 shadow-sm"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Kết quả ({result?.rowCount ?? 0})</span>
            </button>

            <button
              onClick={() => {
                soundManager.playClick();
                setActiveTab("schema");
              }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-t-lg transition flex items-center gap-1.5 ${
                activeTab === "schema"
                  ? "bg-white text-blue-600 border-t-2 border-blue-500 shadow-sm"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              <TableIcon className="w-3.5 h-3.5" />
              <span>Cấu trúc Bảng</span>
            </button>

            <button
              onClick={() => {
                soundManager.playClick();
                setActiveTab("samples");
              }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-t-lg transition flex items-center gap-1.5 ${
                activeTab === "samples"
                  ? "bg-white text-blue-600 border-t-2 border-blue-500 shadow-sm"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Bài tập mẫu</span>
            </button>
          </div>

          {/* Tab 1: KẾT QUẢ TRUY VẤN */}
          {activeTab === "result" && (
            <div className="flex-1 flex flex-col min-h-0 overflow-hidden p-2.5">
              {result?.error ? (
                <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs space-y-1.5 animate-fadeIn">
                  <div className="flex items-center gap-2 font-bold text-rose-800">
                    <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                    <span>Lỗi cú pháp SQL:</span>
                  </div>
                  <p className="font-mono text-[11px] bg-white/70 p-2 rounded border border-rose-200">
                    {result.error}
                  </p>
                  <p className="text-[11px] text-slate-600 italic">
                    💡 Gợi ý: Hãy kiểm tra chính tả tên bảng, tên trường, dấu nháy đơn quanh chuỗi ký tự hoặc cặp ngoặc.
                  </p>
                </div>
              ) : result ? (
                <div className="flex-1 flex flex-col min-h-0">
                  {/* Status bar */}
                  <div className="flex items-center justify-between text-[11px] text-slate-500 pb-2 border-b border-slate-100">
                    <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      Thành công ({result.rowCount} dòng, {result.executionTimeMs}ms)
                    </span>
                    <button
                      onClick={handleCopyResult}
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded hover:bg-slate-100 text-slate-600 transition"
                      title="Sao chép dữ liệu dạng bảng"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-600" />
                          <span className="text-emerald-600">Đã chép</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Sao chép</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Data Table Grid */}
                  <div className="flex-1 overflow-auto mt-2 rounded-lg border border-slate-200 bg-white">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead className="bg-slate-100 text-slate-700 font-bold sticky top-0 shadow-sm">
                        <tr>
                          <th className="px-2.5 py-1.5 border-b border-slate-200 text-slate-400 font-mono text-[10px] w-8 text-center">
                            #
                          </th>
                          {result.columns.map((col, idx) => (
                            <th
                              key={idx}
                              className="px-3 py-1.5 border-b border-slate-200 font-mono text-slate-700 font-semibold whitespace-nowrap"
                            >
                              {col}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {result.rows.map((row, rIdx) => (
                          <tr
                            key={rIdx}
                            className={`hover:bg-blue-50/60 transition ${
                              rIdx % 2 === 0 ? "bg-white" : "bg-slate-50/40"
                            }`}
                          >
                            <td className="px-2 py-1.5 text-slate-400 font-mono text-[10px] text-center border-r border-slate-100">
                              {rIdx + 1}
                            </td>
                            {row.map((cell, cIdx) => (
                              <td
                                key={cIdx}
                                className="px-3 py-1.5 font-mono text-slate-700 whitespace-nowrap"
                              >
                                {cell === "NULL" ? (
                                  <span className="text-slate-400 italic font-sans text-[10px]">
                                    NULL
                                  </span>
                                ) : (
                                  cell
                                )}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center text-slate-400 text-xs">
                  <TableIcon className="w-8 h-8 text-slate-300 mb-2" />
                  <span>Bấm "Thực thi SQL" để xem kết quả</span>
                </div>
              )}
            </div>
          )}

          {/* Tab 2: CẤU TRÚC BẢNG (SCHEMA EXPLORER) */}
          {activeTab === "schema" && (
            <div className="flex-1 overflow-y-auto p-3 space-y-3 min-h-0">
              <div className="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar">
                {selectedDataset.tables.map((tbl) => (
                  <button
                    key={tbl.name}
                    onClick={() => {
                      soundManager.playClick();
                      setSelectedTable(tbl);
                    }}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition shrink-0 flex items-center gap-1.5 ${
                      selectedTable?.name === tbl.name
                        ? "bg-blue-600 text-white shadow-sm"
                        : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                    }`}
                  >
                    <TableIcon className="w-3.5 h-3.5" />
                    <span>{tbl.name}</span>
                  </button>
                ))}
              </div>

              {selectedTable && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-slate-800 text-xs">
                        Bảng: <span className="font-mono text-blue-600">{selectedTable.name}</span>
                      </h4>
                      <p className="text-[11px] text-slate-500">{selectedTable.description}</p>
                    </div>
                    <button
                      onClick={() => handleQuickViewTable(selectedTable)}
                      className="text-[11px] font-semibold text-blue-600 hover:text-blue-800 underline flex items-center gap-1"
                    >
                      <span>Xem dữ liệu</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>

                  <div className="rounded-lg border border-slate-200 overflow-hidden bg-white text-xs">
                    <table className="w-full text-left">
                      <thead className="bg-slate-50 text-[11px] text-slate-500 font-semibold border-b border-slate-200">
                        <tr>
                          <th className="px-2.5 py-1.5">Tên trường</th>
                          <th className="px-2.5 py-1.5">Kiểu dữ liệu</th>
                          <th className="px-2.5 py-1.5">Vai trò</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 font-mono text-[11px]">
                        {selectedTable.columns.map((col) => (
                          <tr key={col.name} className="hover:bg-slate-50">
                            <td className="px-2.5 py-1.5 font-bold text-slate-800 flex items-center gap-1">
                              {col.isPrimary && (
                                <span title="Khóa chính (PK)">
                                  <Key className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                                </span>
                              )}
                              {col.isForeign && (
                                <span title="Khóa ngoài (FK)">
                                  <LinkIcon className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                                </span>
                              )}
                              <span>{col.name}</span>
                            </td>
                            <td className="px-2.5 py-1.5 text-slate-500">{col.type}</td>
                            <td className="px-2.5 py-1.5 font-sans text-[10px]">
                              {col.isPrimary ? (
                                <span className="px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 font-semibold">
                                  Khóa chính (PK)
                                </span>
                              ) : col.isForeign ? (
                                <span className="px-1.5 py-0.5 rounded bg-blue-100 text-blue-800 font-semibold">
                                  Khóa ngoài (FK)
                                </span>
                              ) : (
                                <span className="text-slate-400">Thuộc tính thường</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Tab 3: BÀI TẬP MẪU & ĐỀ THI */}
          {activeTab === "samples" && (
            <div className="flex-1 overflow-y-auto p-3 space-y-2.5 min-h-0">
              <p className="text-[11px] text-slate-500">
                Chọn một câu truy vấn mẫu dưới đây để nạp nhanh vào trình soạn thảo:
              </p>
              {selectedDataset.sampleQueries.map((sample, idx) => (
                <div
                  key={idx}
                  onClick={() => handleSelectSampleQuery(sample)}
                  className="p-2.5 rounded-xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-md transition cursor-pointer group"
                >
                  <div className="flex items-center justify-between font-bold text-xs text-slate-800 group-hover:text-blue-600">
                    <span>{sample.name}</span>
                    <span className="text-[10px] text-blue-500 font-semibold">Nạp lệnh →</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">{sample.description}</p>
                  <pre className="mt-1.5 p-2 rounded bg-slate-900 text-emerald-300 font-mono text-[11px] overflow-x-auto no-scrollbar">
                    {sample.query}
                  </pre>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
