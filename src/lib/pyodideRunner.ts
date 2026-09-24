/**
 * Pyodide Python Runner Service
 * Manages the background Web Worker lifecycle, non-blocking code execution,
 * timeout management, and interrupt handling.
 */

export interface PythonRunResult {
  success: boolean;
  stdout: string;
  stderr: string;
  error?: string;
  errorAdvice?: string | null;
  executionTimeMs: number;
}

export type PyodideStatus = "idle" | "loading" | "ready" | "running" | "error";

type StdoutListener = (text: string) => void;
type StatusListener = (status: PyodideStatus, message?: string) => void;

class PythonRunnerService {
  private worker: Worker | null = null;
  private currentRequestId = 0;
  private status: PyodideStatus = "idle";
  private statusMessage = "";
  private stdoutListeners: Set<StdoutListener> = new Set();
  private statusListeners: Set<StatusListener> = new Set();
  private activeReject: ((reason: any) => void) | null = null;
  private timeoutTimer: NodeJS.Timeout | null = null;

  public getStatus(): { status: PyodideStatus; message: string } {
    return { status: this.status, message: this.statusMessage };
  }

  public addStdoutListener(listener: StdoutListener): () => void {
    this.stdoutListeners.add(listener);
    return () => this.stdoutListeners.delete(listener);
  }

  public addStatusListener(listener: StatusListener): () => void {
    this.statusListeners.add(listener);
    listener(this.status, this.statusMessage);
    return () => this.statusListeners.delete(listener);
  }

  private setStatus(status: PyodideStatus, message = "") {
    this.status = status;
    this.statusMessage = message;
    this.statusListeners.forEach((l) => l(status, message));
  }

  private initWorker(): Worker {
    if (this.worker) return this.worker;

    if (typeof window === "undefined" || typeof Worker === "undefined") {
      throw new Error("Trình duyệt không hỗ trợ Web Worker");
    }

    const worker = new Worker("/workers/pythonWorker.js");

    worker.onmessage = (e) => {
      const data = e.data;
      if (data.type === "status") {
        this.setStatus(data.status, data.message);
      } else if (data.type === "stdout" || data.type === "stderr") {
        this.stdoutListeners.forEach((l) => l(data.text));
      }
    };

    worker.onerror = (err) => {
      console.error("Pyodide Worker Error:", err);
      this.setStatus("error", "Lỗi Web Worker Python: " + (err.message || "Unknown error"));
    };

    // Yêu cầu nạp Pyodide sẵn sàng
    worker.postMessage({ type: "init" });

    this.worker = worker;
    return worker;
  }

  public preload(): void {
    try {
      this.initWorker();
    } catch {
      // Ignored during SSR or unsupported
    }
  }

  public stopExecution(): void {
    if (this.timeoutTimer) {
      clearTimeout(this.timeoutTimer);
      this.timeoutTimer = null;
    }

    if (this.worker && this.status === "running") {
      // Cưỡng bức dừng worker để ngắt vòng lặp vô tận
      this.worker.terminate();
      this.worker = null;
      this.setStatus("ready", "Chương trình đã được dừng bởi người dùng.");

      if (this.activeReject) {
        this.activeReject(new Error("Chương trình đã bị người dùng dừng lại (ngắt cưỡng bức)."));
        this.activeReject = null;
      }

      // Khởi tạo lại worker mới chạy ngầm sẵn sàng cho lần thực thi kế tiếp
      this.initWorker();
    }
  }

  public async run(
    code: string,
    stdin = "",
    timeoutMs = 15000
  ): Promise<PythonRunResult> {
    const worker = this.initWorker();
    const requestId = ++this.currentRequestId;
    this.setStatus("running", "Đang chạy mã Python...");

    return new Promise<PythonRunResult>((resolve, reject) => {
      this.activeReject = reject;

      // Đặt bộ đếm thời gian tối đa để tự động ngắt nếu có vòng lặp vô tận (while True)
      this.timeoutTimer = setTimeout(() => {
        this.stopExecution();
        resolve({
          success: false,
          stdout: "",
          stderr: "Thời gian thực thi vượt quá giới hạn (15s). Có thể mã nguồn chứa vòng lặp vô tận!",
          error: "Timeout: Execution exceeded 15 seconds.",
          errorAdvice: "💡 Gợi ý: Chương trình của bạn chạy quá 15 giây. Hãy kiểm tra lại các vòng lặp while hoặc for xem đã có điều kiện dừng và bước tăng biến đếm chưa.",
          executionTimeMs: timeoutMs,
        });
      }, timeoutMs);

      const messageHandler = (e: MessageEvent) => {
        const data = e.data;
        if (data.type === "done" && data.id === requestId) {
          if (this.timeoutTimer) {
            clearTimeout(this.timeoutTimer);
            this.timeoutTimer = null;
          }
          this.activeReject = null;
          worker.removeEventListener("message", messageHandler);
          this.setStatus("ready", "Thực thi hoàn tất.");

          resolve({
            success: data.success,
            stdout: data.stdout || "",
            stderr: data.stderr || "",
            error: data.error,
            errorAdvice: data.errorAdvice,
            executionTimeMs: data.executionTimeMs || 0,
          });
        }
      };

      worker.addEventListener("message", messageHandler);

      worker.postMessage({
        type: "run",
        id: requestId,
        code,
        stdin,
      });
    });
  }
}

// Singleton instance
export const pythonRunner = new PythonRunnerService();
