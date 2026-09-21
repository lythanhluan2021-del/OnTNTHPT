import { Question, Subject, Topic } from "../types";
import { INITIAL_SUBJECTS } from "../data/sampleBank";
import { parseGoogleSheetData } from "./driveSync";
import { extractDocxTextFromBuffer } from "./docxExtractor";

export interface DriveFileItem {
  id: string;
  name: string;
  mimeType: string;
}

export interface DriveFolderTree {
  folderId: string;
  folderName: string;
  subfolders: {
    folderId: string;
    folderName: string;
    files: DriveFileItem[];
  }[];
}

/**
 * Liệt kê các tệp và thư mục con bên trong một thư mục Google Drive
 */
export async function listFolderChildren(
  accessToken: string,
  folderId: string
): Promise<DriveFileItem[]> {
  const query = encodeURIComponent(`'${folderId}' in parents and trashed = false`);
  const url = `https://www.googleapis.com/drive/v3/files?q=${query}&fields=files(id,name,mimeType)&pageSize=100`;

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Lỗi đọc thư mục Drive [${folderId}]: ${text}`);
  }

  const data = await res.json();
  return data.files || [];
}

/**
 * Tải hoặc xuất nội dung một tệp từ Google Drive (hỗ trợ cả Word .docx, Docs, Sheets, CSV)
 */
export async function downloadDriveFileContent(
  accessToken: string,
  fileId: string,
  mimeType: string,
  fileName: string = ""
): Promise<string> {
  let fetchUrl = "";

  if (mimeType === "application/vnd.google-apps.spreadsheet") {
    // Xuất Google Sheets thành CSV
    fetchUrl = `https://www.googleapis.com/drive/v3/files/${fileId}/export?mimeType=text/csv`;
  } else if (mimeType === "application/vnd.google-apps.document") {
    // Xuất Google Docs thành text thuần
    fetchUrl = `https://www.googleapis.com/drive/v3/files/${fileId}/export?mimeType=text/plain`;
  } else {
    // Tệp tải xuống trực tiếp dạng nhị phân (Binary stream)
    fetchUrl = `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media`;
  }

  const res = await fetch(fetchUrl, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Lỗi tải tệp [${fileId}]: ${text}`);
  }

  // Nếu là file Word .docx, giải nén và trích xuất text từ Buffer
  const isDocx =
    mimeType.includes("wordprocessingml") ||
    fileName.toLowerCase().endsWith(".docx");

  if (isDocx) {
    const arrayBuffer = await res.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const extractedText = extractDocxTextFromBuffer(buffer);
    return extractedText;
  }

  return await res.text();
}

/**
 * Trích xuất bảng đáp án ở cuối văn bản nếu có (VD: "BẢNG ĐÁP ÁN: 1.A 2.B 3.C...")
 */
function extractAnswerKeyTable(text: string): Map<number, "A" | "B" | "C" | "D"> {
  const answerMap = new Map<number, "A" | "B" | "C" | "D">();
  const matches = text.matchAll(/(?:Câu\s*)?(\d+)[\s.:\-_–]+([A-D])\b/gi);
  for (const m of matches) {
    const qNum = parseInt(m[1], 10);
    const ans = m[2].toUpperCase() as "A" | "B" | "C" | "D";
    answerMap.set(qNum, ans);
  }
  return answerMap;
}

/**
 * Bộ bóc tách thông minh cho đề trắc nghiệm dạng văn bản (Word .docx / Google Docs / Text)
 */
export function parseTextDocumentQuestions(
  docText: string,
  subjectId: string,
  topicName: string,
  fileName: string
): Question[] {
  const questions: Question[] = [];
  if (!docText || docText.length < 30) return questions;

  // Lấy bảng đáp án tổng hợp nếu có ở cuối tài liệu
  const answerKeys = extractAnswerKeyTable(docText);

  // Chuẩn hóa văn bản: tách thành từng dòng
  const lines = docText.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);

  let currentQuestionNumber = 0;
  let currentHeader = "";
  let optA = "";
  let optB = "";
  let optC = "";
  let optD = "";
  let currentAns: "A" | "B" | "C" | "D" = "A";
  let currentHint = "";
  let currentExplanation = "";
  let isInQuestion = false;

  const flushQuestion = () => {
    if (currentHeader && optA && optB) {
      const qNum = currentQuestionNumber;
      // Ưu tiên đáp án trong câu, nếu không có lấy từ bảng đáp án
      const finalAns = answerKeys.has(qNum) ? answerKeys.get(qNum)! : currentAns;

      const qId = `Q-${subjectId.toUpperCase().substring(0, 3)}-${Date.now().toString().slice(-4)}-${qNum || questions.length + 1}`;

      questions.push({
        id: qId,
        subjectId,
        topicId: `topic-${subjectId}-${fileName.toLowerCase().replace(/[^a-z0-9]/g, "-")}`,
        topicName: topicName || fileName.replace(/\.[^.]+$/, ""),
        chapterName: "Đồng bộ từ Drive: " + fileName,
        difficulty: "ThongHieu",
        content: currentHeader,
        options: [
          { id: "A", content: optA },
          { id: "B", content: optB },
          { id: "C", content: optC || "Không có phương án C" },
          { id: "D", content: optD || "Không có phương án D" },
        ],
        correctAnswer: finalAns,
        hints: {
          level1_concept: currentHint || "Vận dụng kiến thức lý thuyết trong bài: " + topicName,
          level2_formula: "Đọc kỹ giả thiết đề bài và áp dụng phương pháp loại trừ phương án sai.",
          level3_steps: "Thực hiện từng bước suy luận để tự tin xác định phương án đúng.",
        },
        explanation: currentExplanation || "",
        sourceDocTitle: fileName + " (Google Drive)",
      });
    }

    currentHeader = "";
    optA = "";
    optB = "";
    optC = "";
    optD = "";
    currentAns = "A";
    currentHint = "";
    currentExplanation = "";
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Phát hiện câu hỏi mới: "Câu 1:", "Câu 1.", "Bài 1:" hoặc "1."
    const qMatch = line.match(/^(?:Câu|Bài)\s*(\d+)[\s.:]+(.*)/i);

    if (qMatch) {
      if (isInQuestion) flushQuestion();
      isInQuestion = true;
      currentQuestionNumber = parseInt(qMatch[1], 10);
      currentHeader = qMatch[2].trim();
      continue;
    }

    if (!isInQuestion) continue;

    // Phát hiện các phương án A, B, C, D (cùng dòng hoặc khác dòng)
    if (/^A[.)]\s+/i.test(line)) {
      // Có thể có cả 4 phương án trên 1 dòng: A. ... B. ... C. ... D. ...
      const multiOpt = line.match(/^A[.)]\s+([\s\S]*?)\s+B[.)]\s+([\s\S]*?)(?:\s+C[.)]\s+([\s\S]*?))?(?:\s+D[.)]\s+([\s\S]*?))?$/i);
      if (multiOpt) {
        optA = multiOpt[1]?.trim() || "";
        optB = multiOpt[2]?.trim() || "";
        optC = multiOpt[3]?.trim() || "";
        optD = multiOpt[4]?.trim() || "";
      } else {
        optA = line.replace(/^A[.)]\s+/i, "").trim();
      }
      continue;
    }

    if (/^B[.)]\s+/i.test(line)) {
      optB = line.replace(/^B[.)]\s+/i, "").trim();
      continue;
    }

    if (/^C[.)]\s+/i.test(line)) {
      optC = line.replace(/^C[.)]\s+/i, "").trim();
      continue;
    }

    if (/^D[.)]\s+/i.test(line)) {
      optD = line.replace(/^D[.)]\s+/i, "").trim();
      continue;
    }

    // Phát hiện dòng đáp án
    const ansMatch = line.match(/(?:Đáp án|Đ\/A|Key|Chọn)[:\s]*([A-D])\b/i);
    if (ansMatch) {
      currentAns = ansMatch[1].toUpperCase() as "A" | "B" | "C" | "D";
      continue;
    }

    // Phát hiện dòng Gợi ý / Lời giải
    if (/(?:Gợi ý|Hướng dẫn|Phương pháp)[:\s]/i.test(line)) {
      currentHint = line.replace(/^(?:Gợi ý|Hướng dẫn|Phương pháp)[:\s]*/i, "").trim();
      continue;
    }

    if (/(?:Lời giải|Giải chi tiết)[:\s]/i.test(line)) {
      currentExplanation = line.replace(/^(?:Lời giải|Giải chi tiết)[:\s]*/i, "").trim();
      continue;
    }

    // Nếu chưa có đáp án A mà có dòng chữ tiếp theo thì ghép vào đề bài
    if (!optA && line) {
      currentHeader += " " + line;
    }
  }

  // Đóng câu hỏi cuối cùng
  if (isInQuestion) flushQuestion();

  return questions;
}

/**
 * Quét toàn diện Thư mục Gốc OnTNTHPT trên Google Drive
 */
export async function scanOnTNTHPTRootFolder(
  accessToken: string,
  rootFolderId: string
): Promise<{
  tree: DriveFolderTree;
  questions: Question[];
  subjects: Subject[];
}> {
  // 1. Quét các thư mục con trong OnTNTHPT (VD: Tin, Toán, Lý)
  const rootChildren = await listFolderChildren(accessToken, rootFolderId);
  const subfolders = rootChildren.filter(
    (item) => item.mimeType === "application/vnd.google-apps.folder"
  );

  const tree: DriveFolderTree = {
    folderId: rootFolderId,
    folderName: "OnTNTHPT",
    subfolders: [],
  };

  const allQuestions: Question[] = [];
  // Bắt đầu với danh sách môn mặc định để KHÔNG BAO GIỜ bị mất cấu trúc bài học
  const subjectMap = new Map<string, Subject>();
  INITIAL_SUBJECTS.forEach((subj) => {
    subjectMap.set(subj.id, {
      ...subj,
      topics: [...subj.topics],
    });
  });

  // 2. Duyệt qua từng thư mục con trên Google Drive
  for (const folder of subfolders) {
    const folderName = folder.name.trim();
    const nameLower = folderName.toLowerCase();

    let subjectId = "tin-hoc-12";
    let subjectDisplayName = "Tin học 12";
    let icon = "Laptop";

    if (nameLower.includes("tin")) {
      subjectId = "tin-hoc-12";
      subjectDisplayName = "Tin học 12";
      icon = "Laptop";
    } else if (nameLower.includes("toan")) {
      subjectId = "toan-12";
      subjectDisplayName = "Toán học 12";
      icon = "Calculator";
    } else if (nameLower.includes("ly") || nameLower.includes("vat")) {
      subjectId = "vat-ly-12";
      subjectDisplayName = "Vật lý 12";
      icon = "Atom";
    } else {
      subjectId = `mon-${nameLower.replace(/\s+/g, "-")}`;
      subjectDisplayName = folderName;
      icon = "BookOpen";
    }

    // Quét các file trong thư mục môn học này
    const files = await listFolderChildren(accessToken, folder.id);

    tree.subfolders.push({
      folderId: folder.id,
      folderName: folder.name,
      files,
    });

    const newTopics: Topic[] = [];

    // Duyệt và bóc tách từng file trong thư mục môn
    for (const file of files) {
      try {
        const rawContent = await downloadDriveFileContent(
          accessToken,
          file.id,
          file.mimeType,
          file.name
        );

        let parsedQuestions: Question[] = [];

        // Nếu là Google Sheets hoặc file CSV
        if (
          file.mimeType === "application/vnd.google-apps.spreadsheet" ||
          file.name.endsWith(".csv") ||
          file.name.endsWith(".tsv")
        ) {
          const sheetResult = parseGoogleSheetData(rawContent);
          parsedQuestions = sheetResult.questions.map((q) => ({
            ...q,
            subjectId,
            sourceDocTitle: file.name + " (Google Drive)",
          }));
        } else {
          // Là Word .docx hoặc Google Docs
          parsedQuestions = parseTextDocumentQuestions(
            rawContent,
            subjectId,
            file.name.replace(/\.[^.]+$/, ""),
            file.name
          );
        }

        if (parsedQuestions.length > 0) {
          parsedQuestions.forEach((q) => allQuestions.push(q));

          newTopics.push({
            id: `topic-${subjectId}-${file.id.substring(0, 8)}`,
            name: file.name.replace(/\.[^.]+$/, ""),
            subjectId,
            chapter: `Thư mục Drive: ${folder.name}`,
            totalQuestions: parsedQuestions.length,
          });
        }
      } catch (err) {
        console.error(`Bỏ qua file [${file.name}]:`, err);
      }
    }

    // Lấy môn học hiện tại (đã có sẵn cấu trúc 9 bài từ file Excel)
    const existingSubject = subjectMap.get(subjectId) || {
      id: subjectId,
      name: subjectDisplayName,
      icon,
      driveUrl: `https://drive.google.com/drive/folders/${folder.id}`,
      topics: [],
    };

    // Nếu bóc tách được các bài mới từ file Drive, gộp vào cấu trúc hiện tại chứ không ghi đè mất
    if (newTopics.length > 0) {
      // Đặt các chủ đề mới từ Drive lên đầu
      existingSubject.topics = [...newTopics, ...existingSubject.topics];
    }

    existingSubject.driveUrl = `https://drive.google.com/drive/folders/${folder.id}`;
    subjectMap.set(subjectId, existingSubject);
  }

  return {
    tree,
    questions: allQuestions,
    subjects: Array.from(subjectMap.values()),
  };
}
