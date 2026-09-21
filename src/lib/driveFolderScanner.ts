import { Question, Subject, Topic } from "../types";
import { parseGoogleSheetData } from "./driveSync";

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
 * Tải hoặc xuất nội dung một tệp từ Google Drive
 */
export async function downloadDriveFileContent(
  accessToken: string,
  fileId: string,
  mimeType: string
): Promise<string> {
  let fetchUrl = "";

  if (mimeType === "application/vnd.google-apps.spreadsheet") {
    // Xuất Google Sheets thành CSV
    fetchUrl = `https://www.googleapis.com/drive/v3/files/${fileId}/export?mimeType=text/csv`;
  } else if (mimeType === "application/vnd.google-apps.document") {
    // Xuất Google Docs thành text thuần
    fetchUrl = `https://www.googleapis.com/drive/v3/files/${fileId}/export?mimeType=text/plain`;
  } else {
    // Tệp đính kèm thông thường (CSV, Text)
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

  return await res.text();
}

/**
 * Bộ bóc tách thông minh cho đề trắc nghiệm dạng văn bản (Google Docs / Word / Text)
 * Nhận diện cấu trúc phổ biến:
 * Câu 1: ...
 * A. ...  B. ...  C. ...  D. ...
 * Đáp án: ...
 * Gợi ý: ...
 */
export function parseTextDocumentQuestions(
  docText: string,
  subjectId: string,
  topicName: string,
  fileName: string
): Question[] {
  const questions: Question[] = [];

  // Tách văn bản theo các mốc "Câu 1", "Câu 2", "Bài 1", v.v.
  const questionBlocks = docText.split(/(?=(?:Câu|Bài)\s+\d+[:.])/i);

  questionBlocks.forEach((block, index) => {
    const trimmed = block.trim();
    if (!trimmed || trimmed.length < 20) return;

    // Tìm vị trí các phương án A., B., C., D.
    const optMatch = trimmed.match(
      /A[.)]\s+([\s\S]*?)B[.)]\s+([\s\S]*?)C[.)]\s+([\s\S]*?)D[.)]\s+([\s\S]*?)(?=(?:Đáp án|Đ\/A|Hướng dẫn|Gợi ý|Giải|Lời giải|$))/i
    );

    if (!optMatch) return;

    // Tách phần đề bài (từ đầu tới trước phương án A.)
    const questionHeaderMatch = trimmed.match(/^((?:Câu|Bài)\s+\d+[:.]?\s*[\s\S]*?)(?=A[.)]\s+)/i);
    const content = questionHeaderMatch
      ? questionHeaderMatch[1].replace(/^(?:Câu|Bài)\s+\d+[:.]?\s*/i, "").trim()
      : trimmed.substring(0, trimmed.indexOf(optMatch[0])).trim();

    const optA = optMatch[1].trim();
    const optB = optMatch[2].trim();
    const optC = optMatch[3].trim();
    const optD = optMatch[4].trim();

    // Tìm đáp án đúng
    const ansMatch = trimmed.match(/(?:Đáp án|Đ\/A|Key)[:\s]*([A-D])/i);
    const correctAnswer = ansMatch ? (ansMatch[1].toUpperCase() as "A" | "B" | "C" | "D") : "A";

    // Tìm phần gợi ý / lời giải nếu có
    const hintMatch = trimmed.match(/(?:Gợi ý|Hướng dẫn|Phương pháp)[:\s]*([\s\S]*?)(?=(?:Lời giải|Đáp án|$))/i);
    const explanationMatch = trimmed.match(/(?:Lời giải|Giải chi tiết)[:\s]*([\s\S]*)$/i);

    const level1 = hintMatch
      ? hintMatch[1].trim()
      : "Vận dụng kiến thức trọng tâm trong tài liệu chủ đề " + topicName;

    const qId = `Q-${subjectId.toUpperCase().substring(0, 3)}-${Date.now()}-${index + 1}`;

    questions.push({
      id: qId,
      subjectId,
      topicId: `topic-${subjectId}-${fileName.toLowerCase().replace(/[^a-z0-9]/g, "-")}`,
      topicName: topicName || fileName.replace(/\.[^.]+$/, ""),
      chapterName: "Đồng bộ từ thư mục Drive: " + fileName,
      difficulty: "ThongHieu",
      content,
      options: [
        { id: "A", content: optA },
        { id: "B", content: optB },
        { id: "C", content: optC },
        { id: "D", content: optD },
      ],
      correctAnswer,
      hints: {
        level1_concept: level1,
        level2_formula: "Phân tích các dữ kiện và áp dụng phương pháp trong bài học.",
        level3_steps: "Kiểm tra kỹ lưỡng các điều kiện để chọn phương án chính xác.",
      },
      explanation: explanationMatch ? explanationMatch[1].trim() : "",
      sourceDocTitle: fileName + " (Google Drive)",
    });
  });

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
  const subjectMap = new Map<string, Subject>();

  // 2. Duyệt qua từng thư mục môn học
  for (const folder of subfolders) {
    const folderName = folder.name.trim();
    let subjectId = "tin-hoc-12";
    let subjectDisplayName = "Tin học 12";
    let icon = "Laptop";

    const nameLower = folderName.toLowerCase();
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

    const topicMap = new Map<string, Topic>();

    // Duyệt và bóc tách từng file trong thư mục môn
    for (const file of files) {
      try {
        const rawContent = await downloadDriveFileContent(
          accessToken,
          file.id,
          file.mimeType
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
          // Là Google Docs hoặc tài liệu dạng text
          parsedQuestions = parseTextDocumentQuestions(
            rawContent,
            subjectId,
            file.name.replace(/\.[^.]+$/, ""),
            file.name
          );
        }

        parsedQuestions.forEach((q) => {
          allQuestions.push(q);
          if (!topicMap.has(q.topicId)) {
            topicMap.set(q.topicId, {
              id: q.topicId,
              name: q.topicName,
              subjectId,
              chapter: q.chapterName || `Thư mục Drive: ${folder.name}`,
              totalQuestions: 0,
            });
          }
          const topic = topicMap.get(q.topicId)!;
          topic.totalQuestions += 1;
        });
      } catch (err) {
        console.error(`Bỏ qua file [${file.name}]:`, err);
      }
    }

    subjectMap.set(subjectId, {
      id: subjectId,
      name: subjectDisplayName,
      icon,
      driveUrl: `https://drive.google.com/drive/folders/${folder.id}`,
      topics: Array.from(topicMap.values()),
    });
  }

  return {
    tree,
    questions: allQuestions,
    subjects: Array.from(subjectMap.values()),
  };
}
