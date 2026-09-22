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

  // 1. Tách dòng thông minh: nếu "Câu X" bị dính vào cuối dòng trước thì tách ra thành dòng mới
  const preprocessedText = docText.replace(
    /(?<=[^\n])(?=(?:__U__)?Câu\s+\d+(?:\s*\([^)]*\))?[\s.:])/gi,
    "\n"
  );
  const rawLines = preprocessedText.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);

  let currentLevel: "NhanBiet" | "ThongHieu" | "VanDung" | "VanDungCao" = "ThongHieu";
  
  interface RawQuestionGroup {
    qNum: number;
    level: "NhanBiet" | "ThongHieu" | "VanDung" | "VanDungCao";
    lines: string[];
  }

  const groups: RawQuestionGroup[] = [];
  let currentGroup: RawQuestionGroup | null = null;

  for (const rawLine of rawLines) {
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
    if (
      /2\.\s*CÂU HỎI TRẮC NGHIỆM ĐÚNG SAI/i.test(rawLine) ||
      /PHẦN II/i.test(rawLine) ||
      /2\.\s*CÂU TRẮC NGHIỆM ĐÚNG SAI/i.test(rawLine)
    ) {
      if (currentGroup) groups.push(currentGroup);
      currentGroup = null;
      break; // Ưu tiên phần trắc nghiệm nhiều lựa chọn
    }

    // Phát hiện câu hỏi mới: "Câu 1.", "Câu 1:", "Câu 1(B1-NB):"
    const cleanLine = rawLine.replace(/__U__|__EU__/g, "").trim();
    const qMatch = cleanLine.match(/^Câu\s*(\d+)(?:\s*\([^)]*\))?[\s.:]+([\s\S]*)/i);
    if (qMatch) {
      if (currentGroup) groups.push(currentGroup);
      currentGroup = {
        qNum: parseInt(qMatch[1], 10),
        level: currentLevel,
        lines: [rawLine],
      };
      continue;
    }

    if (currentGroup) {
      currentGroup.lines.push(rawLine);
    }
  }
  if (currentGroup) groups.push(currentGroup);

  // 2. Phân tích từng câu hỏi với bộ tìm phương án tuần tự (A -> B -> C -> D)
  for (const g of groups) {
    const firstLine = g.lines[0];
    const headerMatch = firstLine.match(/^(?:__U__)?Câu\s+\d+(?:\s*\([^)]*\))?[\s.:]+/i);
    const firstRest = headerMatch ? firstLine.slice(headerMatch[0].length) : firstLine;
    const allQText = [firstRest, ...g.lines.slice(1)].join("\n").trim();

    // Tìm vị trí token A, B, C, D tuần tự
    const tokens: { letter: "A" | "B" | "C" | "D"; start: number; end: number; fullToken: string }[] = [];
    const expectedLetters: ("A" | "B" | "C" | "D")[] = ["A", "B", "C", "D"];
    let searchPos = 0;

    for (const target of expectedLetters) {
      // Regex hỗ trợ __U__ trước/sau ký tự hoặc bao quanh dấu chấm/ngoặc
      const p = new RegExp(
        `(?:__U__|__EU__|\\s)*${target}(?:__U__|__EU__|\\s)*[.):](?:__U__|__EU__|\\s)*`,
        "i"
      );
      const sub = allQText.slice(searchPos);
      const match = sub.match(p);
      if (match && match.index !== undefined) {
        const start = searchPos + match.index;
        const end = start + match[0].length;
        tokens.push({
          letter: target,
          start,
          end,
          fullToken: match[0],
        });
        searchPos = end;
      } else {
        break;
      }
    }

    // Nếu không đủ 4 phương án thì bỏ qua câu lỗi hoặc trắc nghiệm đúng sai
    if (tokens.length !== 4) continue;

    const rawContent = allQText.slice(0, tokens[0].start).trim();
    const rawOpts: Record<"A" | "B" | "C" | "D", string> = {
      A: allQText.slice(tokens[0].end, tokens[1].start).trim(),
      B: allQText.slice(tokens[1].end, tokens[2].start).trim(),
      C: allQText.slice(tokens[2].end, tokens[3].start).trim(),
      D: allQText.slice(tokens[3].end).trim(),
    };

    // Xác định đáp án đúng từ gạch chân __U__
    let detectedAns: "A" | "B" | "C" | "D" = "A";
    let hasUnderline = false;

    for (const t of tokens) {
      const letKey = t.letter;
      const inToken = t.fullToken.includes("__U__");
      const inContent = rawOpts[letKey].includes("__U__");
      if (inToken || inContent) {
        detectedAns = letKey;
        hasUnderline = true;
        break;
      }
    }

    const finalAns = hasUnderline
      ? detectedAns
      : answerKeys.has(g.qNum)
      ? answerKeys.get(g.qNum)!
      : detectedAns;

    const cleanMarkup = (s: string) =>
      s
        .replace(/__U__|__EU__/g, "")
        .replace(/__SUP__/g, "<sup>")
        .replace(/__ESUP__/g, "</sup>")
        .replace(/__SUB__/g, "<sub>")
        .replace(/__ESUB__/g, "</sub>")
        .replace(/[ \t]+/g, " ")
        .trim();

    const cleanHeader = cleanMarkup(rawContent);
    const cleanOptA = cleanMarkup(rawOpts.A);
    const cleanOptB = cleanMarkup(rawOpts.B);
    const cleanOptC = cleanMarkup(rawOpts.C);
    const cleanOptD = cleanMarkup(rawOpts.D);

    const qId = `Q-${subjectId.toUpperCase().slice(0, 3)}-${Date.now().toString().slice(-4)}-${g.qNum}`;

    questions.push({
      id: qId,
      subjectId,
      topicId,
      topicName,
      chapterName,
      difficulty: g.level,
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
