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
          "hãy xem lại tài liệu và tự đối chiếu phương án phù hợp nhé"
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
          "[khái niệm cốt lõi em cần đối chiếu từ đề bài]"
        );
      }
    }
  }

  return text;
}

/**
 * BỘ MÁY GIA SƯ SOCRATIC 2.0 (SOCRATIC TUTOR ENGINE)
 * Phân tích chuyên sâu theo từng chủ đề Tin học THPT & nhận diện phản xạ tư duy sai
 */
export function generateSocraticGuidance(
  question: Question,
  userPrompt: string,
  historyCount: number,
  studentChoice?: string | null,
  isCorrect?: boolean
): string {
  const promptLower = userPrompt.toLowerCase().trim();

  // 1. KIỂM TRA HỌC SINH HỎI XIN ĐÁP ÁN TRỰC TIẾP
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
      `Thầy/Cô không thể cung cấp đáp án trực tiếp cho em vì mục tiêu của chúng ta là rèn luyện năng lực giải quyết vấn đề để em tự tin bước vào kỳ thi Tốt nghiệp THPT!\n\n` +
      `📌 **Gợi ý phương pháp từ tài liệu:**\n` +
      `• **Lý thuyết trọng tâm:** ${question.hints.level1_concept}\n` +
      `• **Câu hỏi định hướng:** Em hãy đối chiếu dữ kiện đề bài với nguyên tắc: "${question.hints.level2_formula}". Em đang băn khoăn giữa những yếu tố nào? Hãy chia sẻ cùng Thầy/Cô nhé!`
    );
  }

  // 2. HỌC SINH VỪA CHỌN SAI VÀ CẦN PHÂN TÍCH BẪY TƯ DUY
  if (
    (studentChoice && isCorrect === false) ||
    promptLower.includes("tại sao sai") ||
    promptLower.includes("vì sao sai") ||
    promptLower.includes("em làm sai")
  ) {
    const chosenOption = question.options?.find((opt) => opt.id === studentChoice);
    const chosenText = chosenOption ? `"${chosenOption.content}"` : `phương án ${studentChoice}`;

    return (
      `Thầy nhận thấy em đang băn khoăn về ${chosenText}.\n\n` +
      `⚠️ **Phân tích bẫy tư duy thường gặp:**\n` +
      `Trong các đề thi tốt nghiệp, người ra đề thường đưa ra các phương án nhiễu có vẻ rất quen thuộc nhưng lại vi phạm một điều kiện then chốt của câu hỏi.\n\n` +
      `🔍 **Hãy kiểm tra lại:**\n` +
      `• **Quy tắc cốt lõi:** ${question.hints.level1_concept}\n` +
      `• **Điểm khác biệt:** ${question.hints.level2_formula}\n\n` +
      `👉 Em hãy đọc kỹ lại từ khóa trong câu hỏi (ví dụ: *không đúng*, *duy nhất*, *tối thiểu*, *bắt buộc*) xem có bỏ sót điều kiện nào không nhé!`
    );
  }

  // 3. TƯ VẤN THEO TỪNG CHUYÊN ĐỀ TIN HỌC CỤ THỂ
  const topicId = question.topicId || "";
  const topicName = question.topicName || "";

  // A. Chuyên đề Lập trình Python
  if (topicId.includes("python") || topicName.toLowerCase().includes("python")) {
    if (
      promptLower.includes("chạy") ||
      promptLower.includes("lỗi") ||
      promptLower.includes("vòng lặp") ||
      promptLower.includes("hàm")
    ) {
      return (
        `🐍 **Kỹ thuật lần vết thuật toán Python (Code Tracing):**\n\n` +
        `• **Gợi ý bước làm:** Hãy kẻ một bảng nháp gồm các cột tương ứng với các biến trong bài.\n` +
        `• **Theo dõi từng bước:** ${question.hints.level3_steps}\n` +
        `• **Lưu ý đặc biệt:** Chú ý thứ tự thực hiện phép toán, chỉ số mảng bắt đầu từ 0 và bước nhảy trong hàm \`range()\`. Em có thể bấm nút **"Chạy Code"** ở trên để kiểm chứng trực tiếp!`
      );
    }
  }

  // B. Chuyên đề Cơ sở dữ liệu & SQL
  if (
    topicId.includes("sql") ||
    topicId.includes("csdl") ||
    topicName.toLowerCase().includes("csdl")
  ) {
    if (
      promptLower.includes("join") ||
      promptLower.includes("select") ||
      promptLower.includes("where") ||
      promptLower.includes("bảng")
    ) {
      return (
        `🗄️ **Tư duy truy vấn CSDL quan hệ:**\n\n` +
        `• **Mục tiêu truy vấn:** Hãy xác định rõ dữ liệu cần lấy nằm ở những bảng nào và có khóa ngoại liên kết ra sao.\n` +
        `• **Nguyên tắc:** ${question.hints.level1_concept}\n` +
        `• **Cú pháp then chốt:** ${question.hints.level2_formula}\n` +
        `• **Gợi ý hành động:** Em hãy thử mở module **SQL Studio** trên thanh điều hướng để xem sơ đồ bảng và thử câu lệnh mẫu nhé!`
      );
    }
  }

  // C. Chuyên đề Tạo trang Web (HTML / CSS)
  if (
    topicId.includes("web") ||
    topicId.includes("12f") ||
    topicId.includes("12e") ||
    topicName.toLowerCase().includes("web")
  ) {
    if (
      promptLower.includes("thẻ") ||
      promptLower.includes("css") ||
      promptLower.includes("html") ||
      promptLower.includes("giao diện")
    ) {
      return (
        `🌐 **Tư duy cấu trúc trang Web HTML & CSS:**\n\n` +
        `• **Ý nghĩa thẻ ngữ nghĩa (Semantic Tags):** Mỗi phần tử trên trang web đảm nhận một vai trò (ví dụ: \`<header>\`, \`<nav>\`, \`<section>\`, \`<footer>\`).\n` +
        `• **Quy tắc cần nhớ:** ${question.hints.level1_concept}\n` +
        `• **Gợi ý định dạng:** ${question.hints.level2_formula}\n` +
        `• Em có thể chuyển sang tab **"Web IDE"** để gõ thẻ và quan sát trực tiếp kết quả hiển thị trên trình duyệt!`
      );
    }
  }

  // D. Chuyên đề Mạng máy tính & An toàn mạng
  if (
    topicId.includes("mang") ||
    topicName.toLowerCase().includes("mạng") ||
    topicName.toLowerCase().includes("internet")
  ) {
    if (
      promptLower.includes("router") ||
      promptLower.includes("switch") ||
      promptLower.includes("ip") ||
      promptLower.includes("giao thức")
    ) {
      return (
        `📡 **Tư duy Kiến trúc Mạng & Giao thức:**\n\n` +
        `• **Khái niệm then chốt:** ${question.hints.level1_concept}\n` +
        `• **Phân biệt vai trò:** Hãy nhớ nguyên tắc: Thiết bị nào hoạt động ở tầng Mạng (chuyển tiếp gói tin theo IP) và thiết bị nào hoạt động ở tầng Liên kết dữ liệu (chuyển tiếp khung tin theo MAC).\n` +
        `• **Phương pháp:** ${question.hints.level2_formula}`
      );
    }
  }

  // E. Chuyên đề Trí tuệ nhân tạo (AI)
  if (topicId.includes("ai") || topicName.toLowerCase().includes("nhân tạo")) {
    if (
      promptLower.includes("học máy") ||
      promptLower.includes("mô hình") ||
      promptLower.includes("huấn luyện")
    ) {
      return (
        `🤖 **Tư duy về Hệ thống Trí tuệ Nhân tạo (AI):**\n\n` +
        `• **Bản chất vấn đề:** ${question.hints.level1_concept}\n` +
        `• **Dấu hiệu nhận biết:** Hãy phân biệt rõ: Dữ liệu huấn luyện đã có sẵn nhãn (Supervised) hay chưa có nhãn (Unsupervised), hay tương tác nhận phần thưởng (Reinforcement).\n` +
        `• **Định hướng:** ${question.hints.level2_formula}`
      );
    }
  }

  // 4. HỌC SINH HỎI VỀ CÔNG THỨC / LÝ THUYẾT NÓI CHUNG
  if (
    promptLower.includes("công thức") ||
    promptLower.includes("định lý") ||
    promptLower.includes("lý thuyết") ||
    promptLower.includes("khái niệm")
  ) {
    return (
      `📖 **Trích xuất từ tài liệu ôn tập [${question.sourceDocTitle || "Tài liệu môn Tin học"}]:**\n\n` +
      `• **Khái niệm trọng tâm:** ${question.hints.level1_concept}\n\n` +
      `💡 **Phương pháp tiếp cận:** ${question.hints.level2_formula}\n\n` +
      `👉 Em hãy quan sát các yếu tố trong câu hỏi và đối chiếu với khái niệm trên nhé!`
    );
  }

  // 5. TIẾN TRÌNH THOẠI SOCRATIC THEO BẬC
  if (historyCount === 0) {
    return (
      `Chào em! Để làm câu này thật chuẩn xác, chúng ta cùng phân tích theo từng bước nhé:\n\n` +
      `1️⃣ **Dạng bài:** *${question.topicName}* (Mức độ *${question.difficulty}*).\n` +
      `2️⃣ **Nguyên lý trọng tâm:** ${question.hints.level1_concept}\n\n` +
      `❓ Em hãy xác định: Đề bài đang yêu cầu tìm kiếm/khẳng định điều gì? Em đã nắm được từ khóa then chốt chưa?`
    );
  } else if (historyCount === 1) {
    return (
      `Rất tốt! Chúng ta cùng đi vào phân tích logic phương pháp:\n\n` +
      `💡 **Hướng dẫn phương pháp:** ${question.hints.level2_formula}\n\n` +
      `🎯 **Các bước suy luận gợi ý:**\n${question.hints.level3_steps}\n\n` +
      `Em hãy thử đối chiếu từng phương án với các bước trên xem phương án nào thỏa mãn đầy đủ nhất nhé!`
    );
  } else {
    return (
      `Em đang tư duy rất tích cực! Hãy kiểm tra bước cuối cùng:\n\n` +
      `🔍 Hãy rà soát lại các phương án gây nhiễu và kiểm tra điều kiện biên.\n` +
      `Quy tắc nhắc nhở: *"${question.hints.level1_concept}"*\n\n` +
      `Sau khi đối chiếu, em thấy phương án nào là câu trả lời thỏa đáng nhất?`
    );
  }
}
