import { Question } from "../types";

/**
 * BỘ LỌC AN TOÀN SƯ PHẠM (GUARDRAIL FILTER)
 * Tuyệt đối ngăn chặn tiết lộ đáp án trực tiếp dưới mọi hình thức
 */
export function sanitizeTutorResponse(
  rawText: string,
  question: Question
): string {
  let text = rawText;

  // 1. Chặn các cụm từ chỉ định trực tiếp phương án đúng (nếu có correctAnswer)
  if (question.correctAnswer) {
    const forbiddenPatterns = [
      new RegExp(`(chọn|đáp án là|kết quả là|chính là|đáp án đúng là)\\s*(${question.correctAnswer})`, "gi"),
      new RegExp(`phương án\\s*${question.correctAnswer}\\s*là đúng`, "gi"),
      new RegExp(`câu này\\s*(${question.correctAnswer})`, "gi"),
    ];

    for (const pattern of forbiddenPatterns) {
      if (pattern.test(text)) {
        text = text.replace(
          pattern,
          "hãy xem lại công thức và tự kiểm tra phương án phù hợp nhé"
        );
      }
    }
  }

  // 2. Chặn nội dung chính xác của đáp án đúng nếu xuất hiện trần trụi
  if (question.options && question.correctAnswer) {
    const correctOption = question.options.find(
      (opt) => opt.id === question.correctAnswer
    );
    if (correctOption && correctOption.content.length > 3) {
      const rawContent = correctOption.content.replace(/[\$\(\)\\]/g, "").trim();
      if (rawContent && text.includes(rawContent)) {
        // Thay thế bằng gợi mở suy luận
        text = text.replace(
          rawContent,
          "[giá trị bạn cần tự tính từ công thức trên]"
        );
      }
    }
  }

  return text;
}

/**
 * BỘ MÁY GIA SƯ SOCRATIC (SOCRATIC TUTOR ENGINE)
 * Dựa 100% vào tài liệu Google Drive được cung cấp
 */
export function generateSocraticGuidance(
  question: Question,
  userPrompt: string,
  historyCount: number
): string {
  const promptLower = userPrompt.toLowerCase().trim();

  // Kiểm tra nếu học sinh hỏi xin đáp án trực tiếp
  const askingForDirectAnswer =
    promptLower.includes("đáp án") ||
    promptLower.includes("kết quả") ||
    promptLower.includes("chọn câu nào") ||
    promptLower.includes("a hay b") ||
    promptLower.includes("c hay d") ||
    promptLower.includes("cho em xin đáp án") ||
    promptLower.includes("phải a không") ||
    promptLower.includes("phải b không") ||
    promptLower.includes("phải c không") ||
    promptLower.includes("phải d không");

  if (askingForDirectAnswer) {
    return (
      `Thầy/Cô không thể cung cấp đáp án trực tiếp cho em vì mục tiêu là giúp em nắm vững phương pháp để tự tin trong phòng thi tốt nghiệp THPT!\n\n` +
      `📌 **Tài liệu từ Google Drive chỉ dẫn:**\n` +
      `• **Lý thuyết trọng tâm:** ${question.hints.level1_concept}\n` +
      `• **Câu hỏi gợi mở cho em:** Em đã thử áp dụng công thức: "${question.hints.level2_formula}" vào các dữ kiện của đề bài chưa? Hãy thử viết ra nháp xem em đang vướng ở bước nào nhé!`
    );
  }

  // Nếu học sinh hỏi về công thức / lý thuyết
  if (
    promptLower.includes("công thức") ||
    promptLower.includes("định lý") ||
    promptLower.includes("lý thuyết") ||
    promptLower.includes("khái niệm")
  ) {
    return (
      `📖 **Trích xuất từ tài liệu [${question.sourceDocTitle || "Tài liệu học tập"}]:**\n\n` +
      `• **Lý thuyết cần nắm:** ${question.hints.level1_concept}\n\n` +
      `💡 **Phương pháp giải quyết:** ${question.hints.level2_formula}\n\n` +
      `👉 Em hãy thử quan sát dữ kiện đề bài cho và đối chiếu với các đại lượng trong công thức trên nhé!`
    );
  }

  // Phản hồi Socratic theo tiến trình hỏi
  if (historyCount === 0) {
    return (
      `Chào em! Để làm bài này một cách chắc chắn, chúng ta cùng phân tích theo tài liệu ôn tập nhé:\n\n` +
      `1️⃣ **Bước 1 (Xác định dạng bài):** Đây là dạng bài *${question.topicName}* ở mức độ *${question.difficulty}*.\n` +
      `2️⃣ **Gợi ý cốt lõi:** ${question.hints.level1_concept}\n\n` +
      `❓ Em hãy cho thầy biết: Từ dữ kiện của đề bài, em đã rút ra được những thông số nào rồi?`
    );
  } else if (historyCount === 1) {
    return (
      `Rất tốt! Bước tiếp theo chúng ta chuyển sang thiết lập phương trình / công thức:\n\n` +
      `💡 **Hướng dẫn phương pháp:** ${question.hints.level2_formula}\n\n` +
      `🎯 **Chi tiết từng bước suy luận:**\n${question.hints.level3_steps}\n\n` +
      `Em hãy thử thay số vào và so sánh với 4 phương án xem nhé!`
    );
  } else {
    return (
      `Em đang đi rất đúng hướng! Hãy bình tĩnh xử lý bước cuối cùng:\n\n` +
      `🔍 Hãy kiểm tra lại các điều kiện biên (điều kiện xác định, dấu của hệ số, hoặc đổi đơn vị chuẩn).\n` +
      `Nguồn tài liệu nhắc nhở: *"${question.hints.level1_concept}"*\n\n` +
      `Khi tính ra nháp, phương án nào trong số các lựa chọn làm em cảm thấy tự tin nhất?`
    );
  }
}
