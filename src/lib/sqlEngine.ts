import alasql from "alasql";
import { SqlDataset } from "@/data/sqlDatasets";

export interface QueryResult {
  columns: string[];
  rows: any[][];
  rowCount: number;
  executionTimeMs: number;
  error?: string;
  commandType?: "SELECT" | "INSERT" | "UPDATE" | "DELETE" | "CREATE" | "OTHER";
}

let currentDatasetId: string | null = null;

/**
 * Chuẩn hóa chuỗi SQL: đổi dấu nháy tiếng Việt ‘ ’ “ ” thành dấu nháy chuẩn ' "
 */
export function sanitizeSqlQuery(sql: string): string {
  if (!sql) return "";
  return sql
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/SELECCT/gi, "SELECT") // Sửa lỗi chính tả trong đề gốc nếu có
    .trim();
}

/**
 * Khởi tạo dữ liệu bảng trong bộ nhớ cho Dataset
 */
export function initSqlDatabase(dataset: SqlDataset): { success: boolean; error?: string } {
  try {
    // Reset database
    alasql("CREATE DATABASE IF NOT EXISTS school_db; USE school_db;");
    
    // Chạy câu lệnh tạo bảng và nạp dữ liệu ban đầu
    const statements = dataset.initSql
      .split(";")
      .map((s) => s.trim())
      .filter((s) => s.length > 0);

    for (const stmt of statements) {
      alasql(sanitizeSqlQuery(stmt));
    }

    currentDatasetId = dataset.id;
    return { success: true };
  } catch (err: any) {
    console.error("Lỗi khởi tạo CSDL SQL:", err);
    return { success: false, error: err.message || "Lỗi nạp cơ sở dữ liệu." };
  }
}

/**
 * Thực thi câu truy vấn SQL và trả về bảng kết quả dạng cột và hàng
 */
export function executeSql(
  query: string,
  dataset?: SqlDataset
): QueryResult {
  const startTime = performance.now();
  
  if (dataset && currentDatasetId !== dataset.id) {
    initSqlDatabase(dataset);
  }

  const cleanQuery = sanitizeSqlQuery(query);
  if (!cleanQuery) {
    return {
      columns: [],
      rows: [],
      rowCount: 0,
      executionTimeMs: 0,
      error: "Vui lòng nhập câu lệnh SQL để thực thi!",
    };
  }

  try {
    // Tách từ khóa đầu tiên để biết loại lệnh
    const firstWord = cleanQuery.trim().split(/\s+/)[0].toUpperCase();
    const commandType: QueryResult["commandType"] =
      firstWord === "SELECT"
        ? "SELECT"
        : firstWord === "INSERT"
        ? "INSERT"
        : firstWord === "UPDATE"
        ? "UPDATE"
        : firstWord === "DELETE"
        ? "DELETE"
        : firstWord === "CREATE"
        ? "CREATE"
        : "OTHER";

    const rawResult = alasql(cleanQuery);
    const endTime = performance.now();
    const executionTimeMs = Math.round((endTime - startTime) * 100) / 100;

    if (!Array.isArray(rawResult)) {
      return {
        columns: ["Kết quả thực thi"],
        rows: [[`Lệnh thực thi thành công. Tác động: ${rawResult} dòng.`]],
        rowCount: typeof rawResult === "number" ? rawResult : 1,
        executionTimeMs,
        commandType,
      };
    }

    if (rawResult.length === 0) {
      return {
        columns: ["Thông báo"],
        rows: [["Truy vấn thành công nhưng không có bản ghi nào thỏa mãn điều kiện."]],
        rowCount: 0,
        executionTimeMs,
        commandType,
      };
    }

    // Lấy danh sách các cột từ phần tử đầu tiên
    const columns = Object.keys(rawResult[0]);
    const rows = rawResult.map((row) =>
      columns.map((col) => {
        const val = row[col];
        if (val === null || val === undefined) return "NULL";
        if (typeof val === "boolean") return val ? "True" : "False";
        return String(val);
      })
    );

    return {
      columns,
      rows,
      rowCount: rows.length,
      executionTimeMs,
      commandType,
    };
  } catch (err: any) {
    const endTime = performance.now();
    const executionTimeMs = Math.round((endTime - startTime) * 100) / 100;
    return {
      columns: [],
      rows: [],
      rowCount: 0,
      executionTimeMs,
      error: err.message || "Cú pháp SQL chưa đúng, vui lòng kiểm tra lại!",
    };
  }
}
