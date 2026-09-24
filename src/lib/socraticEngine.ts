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
 * Rút gọn và làm sạch gợi ý sư phạm: loại bỏ các văn phong khuôn mẫu dài dòng
 */
export function cleanPedagogicalHint(rawHint?: string): string {
  if (!rawHint) return "";
  let text = rawHint.trim();

  const removePrefixes = [
    /^đọc kỹ yêu cầu câu hỏi và xác định\s*/i,
    /^nhớ lại khái niệm và các đặc trưng nền tảng của\s*/i,
    /^nhớ lại kiến thức về\s*/i,
    /^nhớ lại khái niệm\s*/i,
    /^nhớ lại định nghĩa\s*/i,
    /^đối chiếu từng lựa chọn:?\s*/i,
    /^phân tích bản chất từng lựa chọn\s*[A-D,\s]*để\s*/i,
    /^xem xét định nghĩa và thao tác chuẩn xác trong\s*/i,
    /^hãy chú ý rằng:?\s*/i,
    /^lưu ý rằng:?\s*/i,
    /^hãy nhớ lại rằng:?\s*/i,
  ];

  for (const regex of removePrefixes) {
    text = text.replace(regex, "");
  }

  if (text.length > 0) {
    text = text.charAt(0).toUpperCase() + text.slice(1);
  }
  return text;
}

/**
 * Nhận diện bẫy tư duy thường gặp dựa trên từ khóa câu hỏi
 */
export function detectQuestionTraps(question: Question): string {
  const contentLower = question.content.toLowerCase();

  if (
    contentLower.includes("không phải") ||
    contentLower.includes("chưa đúng") ||
    contentLower.includes("không đúng") ||
    contentLower.includes("ngoại trừ") ||
    contentLower.includes("sai")
  ) {
    return "Đề bài có từ phủ định (**KHÔNG PHẢI / KHÔNG ĐÚNG**). Phương án em chọn có thể là một đặc điểm ĐÚNG nên bị loại trừ!";
  }

  if (
    contentLower.includes("chỉ") ||
    contentLower.includes("duy nhất") ||
    contentLower.includes("tất cả") ||
    contentLower.includes("luôn luôn")
  ) {
    return "Đề bài hoặc các phương án có chứa từ mang tính tuyệt đối (**chỉ, duy nhất, tất cả**). Hãy cẩn thận vì đây thường là dấu hiệu của bẫy khái quát hóa!";
  }

  return "Phương án này có điểm tương đồng bề ngoài nhưng vi phạm điều kiện then chốt của câu hỏi.";
}

/**
 * THÔNG ĐIỆP MỞ ĐẦU NGẮN GỌN & XÚC TÍCH CHO SOCRATIC DRAWER
 */
export function getInitialSocraticMessage(
  question: Question,
  selectedOption?: string | null,
  hasAnswered?: boolean,
  isCorrect?: boolean
): string {
  // 1. Học sinh vừa làm SAI một phương án cụ thể
  if (hasAnswered && isCorrect === false && selectedOption) {
    const chosenOpt = question.options?.find((o) => o.id === selectedOption);
    const chosenText = chosenOpt ? ` ("${chosenOpt.content}")` : "";
    const trapNote = detectQuestionTraps(question);
    const concept = cleanPedagogicalHint(question.hints.level1_concept);

    return (
      `⚠️ **Phương án ${selectedOption}${chosenText} chưa chính xác.**\n\n` +
      `🔍 **Bẫy cần tránh:** ${trapNote}\n` +
      (concept ? `📌 **Kiến thức cốt lõi:** ${concept}\n\n` : `\n`) +
      `👉 **Gợi mở:** Em hãy đối chiếu lại từ khóa trong đề bài để tìm phương án chính xác nhé!`
    );
  }

  // 2. Học sinh đã làm ĐÚNG và muốn tìm hiểu sâu
  if (hasAnswered && isCorrect === true) {
    return (
      `🎉 **Chính xác!** Em đã nắm vững kiến thức trọng tâm của câu hỏi này.\n\n` +
      `💡 Em có muốn tìm hiểu thêm về cách đề thi THPT gài bẫy ở dạng bài này, hoặc biến thể nâng cao hơn không?`
    );
  }

  // 3. Học sinh bấm hỏi gợi ý TRƯỚC KHI TRẢ LỜI
  const concept = cleanPedagogicalHint(question.hints.level1_concept);
  const formula = cleanPedagogicalHint(question.hints.level2_formula);

  return (
    `💡 **Định hướng tư duy câu hỏi:**\n\n` +
    (concept ? `• **Khái niệm trọng tâm:** ${concept}\n` : "") +
    (formula ? `• **Phương pháp:** ${formula}\n\n` : "\n") +
    `👉 Em hãy xác định từ khóa then chốt trong đề bài trước khi chọn phương án!`
  );
}

/**
 * BỘ MÁY GIA SƯ SOCRATIC 2.0 (SOCRATIC TUTOR ENGINE)
 * Phản hồi cực kỳ ngắn gọn, xúc tích (dưới 60-80 từ), tập trung đúng trọng tâm kiến thức
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
      `🔒 **Quy tắc tư duy:** Thầy không cung cấp đáp án trực tiếp để giúp em rèn phản xạ phòng thi.\n\n` +
      `📌 **Gợi ý cốt lõi:**\n` +
      `• ${cleanPedagogicalHint(question.hints.level1_concept)}\n` +
      `• ${cleanPedagogicalHint(question.hints.level2_formula)}\n\n` +
      `👉 Hãy đối chiếu dữ kiện đề bài với 2 điểm trên để tự chọn phương án đúng!`
    );
  }

  // 2. HỌC SINH HỎI TẠI SAO SAI HOẶC BẪY TƯ DUY
  if (
    promptLower.includes("tại sao sai") ||
    promptLower.includes("vì sao sai") ||
    promptLower.includes("em làm sai") ||
    (studentChoice && isCorrect === false && historyCount === 0)
  ) {
    const chosenOpt = question.options?.find((o) => o.id === studentChoice);
    const chosenText = chosenOpt ? ` "${chosenOpt.content}"` : (studentChoice ? ` phương án ${studentChoice}` : "phương án đã chọn");
    const trap = detectQuestionTraps(question);

    return (
      `⚠️ **Phân tích bẫy tư duy ở${chosenText}:**\n\n` +
      `• **Bẫy thường gặp:** ${trap}\n` +
      `• **Quy tắc cần nhớ:** ${cleanPedagogicalHint(question.hints.level1_concept)}\n\n` +
      `👉 Rà soát lại: Đề bài yêu cầu khẳng định hay phủ định? Điều kiện nào loại trừ phương án này?`
    );
  }

  if (promptLower.includes("bẫy") || promptLower.includes("gài bẫy") || promptLower.includes("nhiễu")) {
    return (
      `🔍 **Các bẫy thường gặp trong đề thi THPT:**\n\n` +
      `• **Bẫy từ phủ định/giới hạn:** Chú ý các từ *không phải, chỉ, tất cả, bắt buộc*.\n` +
      `• **Bẫy tương đồng bề ngoài:** Mượn đúng thuật ngữ nhưng sai ngữ cảnh hoặc sai mốc thời gian/chỉ số.\n` +
      `• **Phương pháp:** ${cleanPedagogicalHint(question.hints.level2_formula)}`
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
      promptLower.includes("hàm") ||
      promptLower.includes("thuật toán")
    ) {
      return (
        `🐍 **Lần vết code Python (Code Tracing):**\n\n` +
        `• **Theo dõi biến:** ${cleanPedagogicalHint(question.hints.level3_steps)}\n` +
        `• **Lưu ý:** Chỉ số mảng từ 0; \`range(a, b)\` chạy tới \`b - 1\`.\n\n` +
        `💡 Bấm nút **"Chạy thử trong IDE"** để kiểm chứng trực tiếp từng vòng lặp!`
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
      promptLower.includes("bảng") ||
      promptLower.includes("khóa")
    ) {
      return (
        `🗄️ **Tư duy truy vấn SQL:**\n\n` +
        `• **Nguyên tắc:** ${cleanPedagogicalHint(question.hints.level1_concept)}\n` +
        `• **Cú pháp:** ${cleanPedagogicalHint(question.hints.level2_formula)}\n\n` +
        `💡 Bấm **"Thử nghiệm trong SQL Studio"** để xem cấu trúc bảng và chạy lệnh trực tiếp!`
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
      promptLower.includes("giao diện") ||
      promptLower.includes("khối")
    ) {
      return (
        `🌐 **Cấu trúc Web HTML & CSS:**\n\n` +
        `• **Ý nghĩa thẻ:** ${cleanPedagogicalHint(question.hints.level1_concept)}\n` +
        `• **Định dạng:** ${cleanPedagogicalHint(question.hints.level2_formula)}\n\n` +
        `💡 Mở **"Web IDE"** để quan sát trực quan giao diện trang web hiển thị!`
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
      promptLower.includes("giao thức") ||
      promptLower.includes("mạng")
    ) {
      return (
        `📡 **Kiến trúc Mạng & Giao thức:**\n\n` +
        `• **Cốt lõi:** ${cleanPedagogicalHint(question.hints.level1_concept)}\n` +
        `• **Phân biệt:** Tầng Mạng (gói tin theo IP - Router) vs Tầng Liên kết dữ liệu (khung tin theo MAC - Switch).\n` +
        `• **Nguyên tắc:** ${cleanPedagogicalHint(question.hints.level2_formula)}`
      );
    }
  }

  // E. Chuyên đề Trí tuệ nhân tạo (AI)
  if (topicId.includes("ai") || topicName.toLowerCase().includes("nhân tạo")) {
    if (
      promptLower.includes("học máy") ||
      promptLower.includes("mô hình") ||
      promptLower.includes("huấn luyện") ||
      promptLower.includes("ai")
    ) {
      return (
        `🤖 **Trí tuệ Nhân tạo (AI):**\n\n` +
        `• **Bản chất:** ${cleanPedagogicalHint(question.hints.level1_concept)}\n` +
        `• **Phân loại:** Học có giám sát (dữ liệu có nhãn), Không giám sát (tự tìm quy luật), Học tăng cường (thưởng/phạt).\n` +
        `• **Định hướng:** ${cleanPedagogicalHint(question.hints.level2_formula)}`
      );
    }
  }

  // 4. HỌC SINH HỎI VỀ CÔNG THỨC / LÝ THUYẾT / KHÁI NIỆM TRỌNG TÂM
  if (
    promptLower.includes("công thức") ||
    promptLower.includes("định lý") ||
    promptLower.includes("lý thuyết") ||
    promptLower.includes("khái niệm") ||
    promptLower.includes("nhắc lại")
  ) {
    return (
      `📖 **Trọng tâm kiến thức:**\n\n` +
      `• **Khái niệm:** ${cleanPedagogicalHint(question.hints.level1_concept)}\n` +
      `• **Phương pháp:** ${cleanPedagogicalHint(question.hints.level2_formula)}`
    );
  }

  // 5. HỌC SINH HỎI HƯỚNG DẪN TỪNG BƯỚC / SUY LUẬN
  if (
    promptLower.includes("từng bước") ||
    promptLower.includes("suy luận") ||
    promptLower.includes("bắt đầu")
  ) {
    return (
      `🎯 **Các bước suy luận chuẩn:**\n\n` +
      `1️⃣ **Xác định yêu cầu:** Đề bài hỏi về khái niệm, chức năng hay kết quả thực thi?\n` +
      `2️⃣ **Loại trừ nhanh:** ${cleanPedagogicalHint(question.hints.level2_formula)}\n` +
      `3️⃣ **Kiểm chứng:** ${cleanPedagogicalHint(question.hints.level3_steps)}`
    );
  }

  // 6. TIẾN TRÌNH THOẠI SOCRATIC THEO BẬC (FALLBACK)
  if (historyCount === 0) {
    return (
      `🎯 **Bước 1 - Phân tích yêu cầu:**\n\n` +
      `• **Trọng tâm:** ${cleanPedagogicalHint(question.hints.level1_concept)}\n\n` +
      `👉 Từ khóa chính trong đề bài là gì? Em hãy đối chiếu với định nghĩa trên!`
    );
  } else if (historyCount === 1) {
    return (
      `🎯 **Bước 2 - Phương pháp loại trừ:**\n\n` +
      `• **Quy tắc:** ${cleanPedagogicalHint(question.hints.level2_formula)}\n` +
      `• **Dẫn dắt:** ${cleanPedagogicalHint(question.hints.level3_steps)}\n\n` +
      `👉 Phương án nào thỏa mãn đầy đủ các điều kiện trên?`
    );
  } else {
    return (
      `🎯 **Bước 3 - Rà soát điều kiện biên:**\n\n` +
      `• Chú ý các từ phủ định (*không, chưa*) hoặc từ tuyệt đối (*chỉ, luôn luôn*).\n` +
      `• Nhớ lại: *"${cleanPedagogicalHint(question.hints.level1_concept)}"*`
    );
  }
}
