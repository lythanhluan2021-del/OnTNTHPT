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
    fetchUrl = `https://www.googleapis.com/drive/v3/files/${fileId}/export?mimeType=text/csv`;
  } else if (mimeType === "application/vnd.google-apps.document") {
    fetchUrl = `https://www.googleapis.com/drive/v3/files/${fileId}/export?mimeType=text/plain`;
  } else {
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

  const isDocx =
    mimeType.includes("wordprocessingml") ||
    fileName.toLowerCase().endsWith(".docx");

  if (isDocx) {
    const arrayBuffer = await res.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    return extractDocxTextFromBuffer(buffer);
  }

  return await res.text();
}

/**
 * Trích xuất bảng đáp án ở cuối văn bản nếu có (VD: "BẢNG ĐÁP ÁN: 1.A 2.B 3.C...")
 */
function extractAnswerKeyTable(text: string): Map<number, "A" | "B" | "C" | "D"> {
  const answerMap = new Map<number, "A" | "B" | "C" | "D">();
  const regex = /(?:Câu\s*)?(\d+)[\s.:\-_–]+([A-D])\b/gi;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(text)) !== null) {
    const qNum = parseInt(match[1], 10);
    const ans = match[2].toUpperCase() as "A" | "B" | "C" | "D";
    answerMap.set(qNum, ans);
  }
  return answerMap;
}

function normalizeVietnamese(str: string): string {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .trim();
}

/**
 * Tự động khớp file Drive vào đúng Chuyên đề trong chương trình học
 */
function matchFileToExistingTopic(
  fileName: string,
  existingTopics: Topic[],
  subjectId: string
): { topicId: string; topicName: string; chapterName: string; isMatched: boolean } {
  const norm = normalizeVietnamese(fileName);

  // 0. Chuyên đề 10F / Luyện tập NNLT Python (Tin học 10)
  if (norm.includes("10f") || norm.includes("python") || norm.includes("lap trinh co ban")) {
    const found = existingTopics.find((t) => t.id === "tin-lap-trinh-python");
    if (found) {
      return { topicId: found.id, topicName: found.name, chapterName: found.chapter, isMatched: true };
    }
  }

  // 1. Chuyên đề 12A / Trí tuệ nhân tạo (Tin học 12)
  if (norm.includes("12a") || norm.includes("tri tue nhan tao") || norm.includes("ai")) {
    const found = existingTopics.find((t) => t.id === "tin-ai-tri-tue-nhan-tao");
    if (found) {
      return { topicId: found.id, topicName: found.name, chapterName: found.chapter, isMatched: true };
    }
  }

  // 2. Chuyên đề 12B / Mạng máy tính và Internet (Tin học 12)
  if (norm.includes("12b") || norm.includes("thiet bi mang") || norm.includes("giao thuc") || norm.includes("mang may tinh") || norm.includes("tcp")) {
    const found = existingTopics.find((t) => t.id === "tin-thiet-bi-giao-thuc-mang");
    if (found) {
      return { topicId: found.id, topicName: found.name, chapterName: found.chapter, isMatched: true };
    }
  }

  // 3. Chuyên đề 12D / Đạo đức & văn hóa số
  if (norm.includes("12d") || norm.includes("dao duc") || norm.includes("nhan van") || norm.includes("phap luat")) {
    const found = existingTopics.find((t) => t.id === "tin-dao-duc-phap-luat-so");
    if (found) {
      return { topicId: found.id, topicName: found.name, chapterName: found.chapter, isMatched: true };
    }
  }

  // 4. Chuyên đề 12F / HTML & CSS
  if (norm.includes("12f") || norm.includes("html") || norm.includes("web") || norm.includes("css")) {
    const found = existingTopics.find((t) => t.id.includes("html") || t.id.includes("css"));
    if (found) {
      return { topicId: found.id, topicName: found.name, chapterName: found.chapter, isMatched: true };
    }
  }

  // Khớp theo độ tương đồng tên
  for (const t of existingTopics) {
    const tNorm = normalizeVietnamese(t.name);
    if (norm.includes(tNorm) || tNorm.includes(norm)) {
      return { topicId: t.id, topicName: t.name, chapterName: t.chapter, isMatched: true };
    }
  }

  // Tạo chủ đề mới nếu chưa có
  const cleanName = fileName.replace(/\.[^.]+$/, "");
  const slug = normalizeVietnamese(cleanName).replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-").slice(0, 30);
  return {
    topicId: `topic-${subjectId}-${slug}`,
    topicName: cleanName,
    chapterName: `Tài liệu từ Drive: ${cleanName}`,
    isMatched: false,
  };
}

/**
 * Bộ bóc tách thông minh chuyên sâu cho đề trắc nghiệm Word (.docx) & Google Docs
 * Hỗ trợ nhận diện gạch chân (__U__...__EU__) làm đáp án đúng, tự sinh gợi ý Socratic
 */
export function parseTextDocumentQuestions(
  docText: string,
  subjectId: string,
  topicId: string,
  topicName: string,
  chapterName: string,
  fileName: string
): Question[] {
  const questions: Question[] = [];
  if (!docText || docText.length < 30) return questions;

  const answerKeys = extractAnswerKeyTable(docText);
  const lines = docText.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);

  let currentLevel: "NhanBiet" | "ThongHieu" | "VanDung" | "VanDungCao" = "ThongHieu";
  let currentHeader = "";
  let currentQNum = 0;
  let optA = "";
  let optB = "";
  let optC = "";
  let optD = "";
  let correctAns: "A" | "B" | "C" | "D" = "A";
  let hasUnderlineAnswer = false;
  let isInQuestion = false;

  const flushQuestion = () => {
    if (currentHeader && optA && optB) {
      const qNum = currentQNum || questions.length + 1;
      const finalAns = hasUnderlineAnswer
        ? correctAns
        : answerKeys.has(qNum)
        ? answerKeys.get(qNum)!
        : correctAns;

      const cleanHeader = currentHeader.replace(/__U__|__EU__/g, "").trim();
      const cleanOptA = optA.replace(/__U__|__EU__/g, "").trim();
      const cleanOptB = optB.replace(/__U__|__EU__/g, "").trim();
      const cleanOptC = optC ? optC.replace(/__U__|__EU__/g, "").trim() : "Không có phương án C";
      const cleanOptD = optD ? optD.replace(/__U__|__EU__/g, "").trim() : "Không có phương án D";

      const qId = `Q-${subjectId.toUpperCase().slice(0, 3)}-${Date.now().toString().slice(-4)}-${qNum}`;

      questions.push({
        id: qId,
        subjectId,
        topicId,
        topicName,
        chapterName,
        difficulty: currentLevel,
        content: cleanHeader,
        options: [
          { id: "A", content: cleanOptA },
          { id: "B", content: cleanOptB },
          { id: "C", content: cleanOptC },
          { id: "D", content: cleanOptD },
        ],
        correctAnswer: finalAns,
        hints: {
          level1_concept: `Nhớ lại định nghĩa và các đặc trưng cốt lõi trong bài học "${topicName}".`,
          level2_formula: `Đọc kỹ giả thiết trong câu hỏi, áp dụng phương pháp loại trừ các phương án thiếu căn cứ hoặc phát biểu quá mức tuyệt đối.`,
          level3_steps: `Xem xét mối liên hệ giữa dữ kiện đề bài và từng lựa chọn A, B, C, D để tìm phương án chính xác nhất.`,
        },
        explanation: `Câu hỏi bóc tách từ tài liệu "${fileName}". Phân tích nội dung để chọn phương án đúng nhất theo chuẩn chương trình THPT.`,
        sourceDocTitle: `${fileName} (Google Drive)`,
      });
    }

    currentHeader = "";
    optA = "";
    optB = "";
    optC = "";
    optD = "";
    correctAns = "A";
    hasUnderlineAnswer = false;
    isInQuestion = false;
  };

  const optRegex = /(?:__U__)?([A-D])[.)](?:__EU__)?\s*([\s\S]*?)(?=(?:__U__)?[A-D][.)]|$)/g;

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];

    // Cập nhật mức độ câu hỏi
    if (/1\.1\.\s*Nhận biết/i.test(rawLine)) {
      currentLevel = "NhanBiet";
      continue;
    }
    if (/1\.2\.\s*Thông hiểu/i.test(rawLine)) {
      currentLevel = "ThongHieu";
      continue;
    }
    if (/1\.3\.\s*Vận dụng/i.test(rawLine)) {
      currentLevel = "VanDung";
      continue;
    }
    if (/2\.\s*CÂU HỎI TRẮC NGHIỆM ĐÚNG SAI/i.test(rawLine) || /PHẦN II/i.test(rawLine)) {
      if (isInQuestion) flushQuestion();
      break; // Tạm dừng tại phần trắc nghiệm đúng sai để ưu tiên đề 4 lựa chọn
    }

    // Phát hiện câu hỏi mới: "Câu 1.", "Câu 1:", "Bài 1:"
    const cleanLine = rawLine.replace(/__U__|__EU__/g, "").trim();
    const qMatch = cleanLine.match(/^Câu\s*(\d+)[\s.:]+([\s\S]*)/i);
    if (qMatch) {
      if (isInQuestion) flushQuestion();
      isInQuestion = true;
      currentQNum = parseInt(qMatch[1], 10);
      currentHeader = qMatch[2].trim();
      continue;
    }

    if (!isInQuestion) continue;

    // Phát hiện dòng chứa các phương án A, B, C, D
    const testLine = cleanLine.replace(/^[ \t]+/, "");
    if (/^[A-D][.)]/i.test(testLine)) {
      optRegex.lastIndex = 0;
      let m: RegExpExecArray | null;
      while ((m = optRegex.exec(rawLine)) !== null) {
        if (!m[0].trim()) continue;
        const fullToken = m[0];
        const letter = m[1].toUpperCase() as "A" | "B" | "C" | "D";
        const content = m[2].trim();

        // Nếu phương án có gạch chân trong Word (__U__) thì đây là đáp án đúng!
        if (fullToken.includes("__U__") && !hasUnderlineAnswer) {
          correctAns = letter;
          hasUnderlineAnswer = true;
        }

        if (letter === "A") optA = content;
        else if (letter === "B") optB = content;
        else if (letter === "C") optC = content;
        else if (letter === "D") optD = content;
      }
      continue;
    }

    // Nếu chưa gặp phương án A thì các dòng tiếp theo là phần thân câu hỏi
    if (!optA && rawLine) {
      currentHeader += " " + rawLine.replace(/__U__|__EU__/g, "");
    }
  }

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

  // Bắt đầu với danh sách môn mặc định (9 chuyên đề chuẩn của Tin học 12, Toán, Lý)
  const subjectMap = new Map<string, Subject>();
  INITIAL_SUBJECTS.forEach((subj) => {
    subjectMap.set(subj.id, {
      ...subj,
      topics: subj.topics.map((t) => ({ ...t })),
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

    const currentSubject = subjectMap.get(subjectId) || {
      id: subjectId,
      name: subjectDisplayName,
      icon,
      driveUrl: `https://drive.google.com/drive/folders/${folder.id}`,
      topics: [],
    };

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

        // Khớp nối file vào Chuyên đề tương ứng trong chương trình
        const matched = matchFileToExistingTopic(file.name, currentSubject.topics, subjectId);

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
            topicId: matched.topicId,
            topicName: matched.topicName,
            chapterName: matched.chapterName,
            sourceDocTitle: `${file.name} (Google Drive)`,
          }));
        } else if (
          file.mimeType.includes("wordprocessingml") ||
          file.name.endsWith(".docx") ||
          file.mimeType === "application/vnd.google-apps.document"
        ) {
          // Là Word .docx hoặc Google Docs
          parsedQuestions = parseTextDocumentQuestions(
            rawContent,
            subjectId,
            matched.topicId,
            matched.topicName,
            matched.chapterName,
            file.name
          );
        }

        if (parsedQuestions.length > 0) {
          parsedQuestions.forEach((q) => allQuestions.push(q));

          // Cập nhật số lượng câu hỏi trong danh sách Chuyên đề
          const existingTopic = currentSubject.topics.find((t) => t.id === matched.topicId);
          if (existingTopic) {
            existingTopic.totalQuestions = parsedQuestions.length;
          } else {
            currentSubject.topics.unshift({
              id: matched.topicId,
              name: matched.topicName,
              subjectId,
              chapter: matched.chapterName,
              totalQuestions: parsedQuestions.length,
            });
          }
        }
      } catch (err) {
        console.error(`Bỏ qua file [${file.name}]:`, err);
      }
    }

    currentSubject.driveUrl = `https://drive.google.com/drive/folders/${folder.id}`;
    subjectMap.set(subjectId, currentSubject);
  }

  return {
    tree,
    questions: allQuestions,
    subjects: Array.from(subjectMap.values()),
  };
}
