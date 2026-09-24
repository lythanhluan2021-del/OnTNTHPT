/* eslint-disable no-restricted-globals */
/**
 * Python WebAssembly Execution Worker via Pyodide
 * Runs CPython 3 in a sandboxed, non-blocking background thread.
 */

let pyodide = null;
let isInitializing = false;
let initPromise = null;

// Vietnamese friendly explanations for common Python runtime and syntax errors
function getVietnameseErrorAdvice(errorMessage) {
  if (!errorMessage) return null;

  if (errorMessage.includes("IndentationError: unexpected indent")) {
    return "💡 Gợi ý: Lỗi thụt đầu dòng bất thường. Trong Python, các câu lệnh cùng cấp phải thẳng hàng nhau, không tự ý cách thụt vào đầu dòng.";
  }
  if (errorMessage.includes("IndentationError: expected an indented block")) {
    return "💡 Gợi ý: Lỗi thiếu thụt lề. Sau câu lệnh có dấu hai chấm ':' (như if, for, while, def), khối lệnh bên trong BẮT BUỘC phải thụt lề (bấm Tab hoặc 4 dấu cách).";
  }
  if (errorMessage.includes("SyntaxError: invalid syntax")) {
    return "💡 Gợi ý: Lỗi cú pháp câu lệnh. Hãy kiểm tra xem bạn có quên dấu hai chấm ':', quên đóng ngoặc ')' hay viết sai từ khóa không.";
  }
  if (errorMessage.includes("SyntaxError: unterminated string literal") || errorMessage.includes("EOL while scanning string literal")) {
    return "💡 Gợi ý: Lỗi chuỗi ký tự chưa đóng ngoặc kép hoặc ngoặc đơn. Chuỗi mở bằng ' hoặc \" phải được đóng lại tương ứng.";
  }
  if (errorMessage.includes("NameError")) {
    const match = errorMessage.match(/name '([^']+)' is not defined/);
    const varName = match ? `'${match[1]}'` : "này";
    return `💡 Gợi ý: Biến hoặc hàm ${varName} chưa được định nghĩa hoặc chưa được gán giá trị trước khi sử dụng. Hãy kiểm tra lỗi chính tả hoặc thứ tự các câu lệnh.`;
  }
  if (errorMessage.includes("IndexError: list index out of range")) {
    return "💡 Gợi ý: Lỗi chỉ số vượt quá độ dài danh sách (list). Trong Python, vị trí phần tử được đánh số từ 0 đến len(list) - 1.";
  }
  if (errorMessage.includes("ZeroDivisionError: division by zero") || errorMessage.includes("integer division or modulo by zero")) {
    return "💡 Gợi ý: Lỗi chia cho số 0. Toán học và Python không cho phép thực hiện phép chia '/' hoặc chia lấy dư '%' cho 0.";
  }
  if (errorMessage.includes("TypeError: can only concatenate str")) {
    return "💡 Gợi ý: Lỗi cộng chuỗi với kiểu dữ liệu khác (như số int). Hãy dùng hàm str(...) để chuyển số sang chuỗi trước khi nối: ví dụ print('Kết quả: ' + str(tong)).";
  }
  if (errorMessage.includes("ValueError: invalid literal for int()")) {
    return "💡 Gợi ý: Lỗi giá trị ép kiểu int(). Hàm int(...) chỉ chuyển đổi được các chuỗi là chữ số. Nếu chuỗi có chữ cái hoặc để trống sẽ báo lỗi này.";
  }
  if (errorMessage.includes("EOFError: EOF when reading a line")) {
    return "💡 Gợi ý: Lệnh input() cần dữ liệu đầu vào. Hãy nhập dữ liệu vào ô 'Dữ liệu đầu vào (Standard Input)' bên dưới khung soạn thảo trước khi bấm Chạy!";
  }
  if (errorMessage.includes("RecursionError: maximum recursion depth exceeded")) {
    return "💡 Gợi ý: Lỗi đệ quy vô hạn. Hàm đệ quy gọi lại chính nó quá nhiều lần mà không chạm đến điều kiện dừng (điều kiện neo).";
  }

  return null;
}

async function loadPyodideEngine() {
  if (pyodide) return pyodide;
  if (initPromise) return initPromise;

  initPromise = (async () => {
    try {
      self.postMessage({
        type: "status",
        status: "loading",
        message: "Đang tải môi trường Python WebAssembly (CPython 3.12)...",
      });

      // Tải Pyodide từ CDN chính thức của Mozilla / Pyodide qua JsDelivr
      importScripts("https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js");

      // Khởi tạo Pyodide
      pyodide = await self.loadPyodide({
        indexURL: "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/",
      });

      self.postMessage({
        type: "status",
        status: "ready",
        message: "Môi trường Python 3.12 đã sẵn sàng hoạt động!",
      });

      return pyodide;
    } catch (err) {
      initPromise = null;
      self.postMessage({
        type: "status",
        status: "error",
        message: "Không thể nạp Pyodide: " + (err.message || String(err)),
      });
      throw err;
    }
  })();

  return initPromise;
}

self.onmessage = async function (e) {
  const { type, id, code, stdin } = e.data;

  if (type === "init") {
    try {
      await loadPyodideEngine();
    } catch (err) {
      // Handled in loadPyodideEngine
    }
    return;
  }

  if (type === "run") {
    const startTime = performance.now();
    let stdoutBuffer = "";
    let stderrBuffer = "";

    try {
      const engine = await loadPyodideEngine();

      // Cài đặt chuyển hướng stdout và stderr
      engine.setStdout({
        batched: (text) => {
          stdoutBuffer += text + "\n";
          self.postMessage({ type: "stdout", id, text: text + "\n" });
        },
      });

      engine.setStderr({
        batched: (text) => {
          stderrBuffer += text + "\n";
          self.postMessage({ type: "stderr", id, text: text + "\n" });
        },
      });

      // Nạp stdin vào Python StringIO nếu có dữ liệu đầu vào
      const sanitizedStdin = stdin !== undefined && stdin !== null ? String(stdin) : "";
      const runnerCode = `
import sys
import io

_py_stdin_val = ${JSON.stringify(sanitizedStdin)}
sys.stdin = io.StringIO(_py_stdin_val)
`;
      await engine.runPythonAsync(runnerCode);

      // Thực thi đoạn mã của học sinh
      await engine.runPythonAsync(code);

      const endTime = performance.now();
      const executionTimeMs = Math.round(endTime - startTime);

      self.postMessage({
        type: "done",
        id,
        success: true,
        stdout: stdoutBuffer,
        stderr: stderrBuffer,
        executionTimeMs,
      });
    } catch (err) {
      const endTime = performance.now();
      const executionTimeMs = Math.round(endTime - startTime);
      const errorMessage = err.message || String(err);
      const advice = getVietnameseErrorAdvice(errorMessage);

      self.postMessage({
        type: "done",
        id,
        success: false,
        stdout: stdoutBuffer,
        stderr: stderrBuffer,
        error: errorMessage,
        errorAdvice: advice,
        executionTimeMs,
      });
    }
  }
};
