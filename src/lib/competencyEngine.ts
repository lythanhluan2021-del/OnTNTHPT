import { CompetencyCode, CompetencyScore, Question, StudentAttempt } from "@/types";

export interface CompetencyDefinition {
  code: CompetencyCode;
  shortName: string;
  fullName: string;
  description: string;
  topicIds: string[];
  recommendedTopicId: string;
  recommendedTopicName: string;
  actionAdvice: string;
}

export const COMPETENCY_DEFINITIONS: CompetencyDefinition[] = [
  {
    code: "NLa",
    shortName: "Mạng & Thiết bị ICT",
    fullName: "NLa: Sử dụng và quản lý các phương tiện CNTT & Truyền thông",
    description: "Kiến thức về thiết bị mạng (Router, Switch, Access Point), giao thức TCP/IP, địa chỉ IP và kiến trúc mạng.",
    topicIds: ["tin-thiet-bi-giao-thuc-mang"],
    recommendedTopicId: "tin-thiet-bi-giao-thuc-mang",
    recommendedTopicName: "Chuyên đề 12B: Mạng máy tính và Internet",
    actionAdvice: "Củng cố lại bảng đối chiếu chức năng của Router và Switch, các tầng giao thức TCP/IP và phân chia dải IP.",
  },
  {
    code: "NLb",
    shortName: "Đạo đức & Văn hóa số",
    fullName: "NLb: Ứng xử phù hợp trong môi trường số",
    description: "Quy tắc bản quyền phần mềm, sở hữu trí tuệ, an toàn thông tin và văn hóa ứng xử trên không gian mạng.",
    topicIds: ["tin-dao-duc-phap-luat-so"],
    recommendedTopicId: "tin-dao-duc-phap-luat-so",
    recommendedTopicName: "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
    actionAdvice: "Ôn lại các điều khoản trong Luật An ninh mạng, quy định bản quyền mã nguồn mở (GPL, MIT) và phòng tránh lừa đảo số.",
  },
  {
    code: "NLc",
    shortName: "Lập trình Python & CSDL",
    fullName: "NLc: Giải quyết vấn đề với sự trợ giúp của CNTT & Truyền thông",
    description: "Tư duy thuật toán ngôn ngữ Python (vòng lặp, rẽ nhánh, danh sách) và mô hình CSDL quan hệ, truy vấn SQL.",
    topicIds: [
      "tin-lap-trinh-python",
      "tin-co-so-du-lieu-sql",
      "tin-python-dung-sai",
      "tin-csdl-quan-he",
      "tin-chuyen-de-11f",
    ],
    recommendedTopicId: "tin-lap-trinh-python",
    recommendedTopicName: "Chuyên đề 10F: Luyện tập NNLT Python & SQL",
    actionAdvice: "Sử dụng trực tiếp trình biên dịch Python và SQL Studio trong app để chạy thử nghiệm các lệnh truy vấn phức tạp.",
  },
  {
    code: "NLd",
    shortName: "AI & Thiết kế Web",
    fullName: "NLd: Ứng dụng CNTT trong học tập và tự học",
    description: "Nhận biết các mô hình Trí tuệ nhân tạo (Học máy, AI tạo sinh) và kỹ năng tạo trang web với mã HTML & CSS.",
    topicIds: [
      "tin-ai-tri-tue-nhan-tao",
      "tin-chuyen-de-12f-web",
      "tin-chuyen-de-12e-web",
      "tin-html-cau-truc-dinh-dang",
    ],
    recommendedTopicId: "tin-ai-tri-tue-nhan-tao",
    recommendedTopicName: "Chuyên đề 12A: Trí tuệ Nhân tạo & Thiết kế Web",
    actionAdvice: "Phân biệt kỹ giữa Học có giám sát, Không giám sát và Học tăng cường; luyện tập thêm thẻ cấu trúc HTML ngữ nghĩa.",
  },
  {
    code: "NLe",
    shortName: "Hướng nghiệp Tin học",
    fullName: "NLe: Hợp tác trong môi trường số và định hướng nghề nghiệp",
    description: "Đặc thù các nhóm ngành nghề Tin học (Dịch vụ, Quản trị, Phát triển ứng dụng) và xu hướng việc làm thời đại số.",
    topicIds: [
      "tin-huong-nghiep-dich-vu",
      "tin-huong-nghiep-ict",
      "tin-giai-de-tong-hop",
      "tin-giai-de-mau",
    ],
    recommendedTopicId: "tin-huong-nghiep-dich-vu",
    recommendedTopicName: "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ & quản trị",
    actionAdvice: "Nắm vững yêu cầu phẩm chất, năng lực chuyên môn và lộ trình phát triển của các vị trí nghề nghiệp công nghệ thông tin.",
  },
];

/**
 * Tính toán điểm số và cấp độ năng lực dựa trên danh sách bài làm của học sinh
 */
export function calculateCompetencyScores(
  questions: Question[],
  attempts: StudentAttempt[]
): CompetencyScore[] {
  return COMPETENCY_DEFINITIONS.map((def) => {
    // Lọc tất cả attempts thuộc các topicIds của năng lực này
    const relatedAttempts = attempts.filter((attempt) => {
      if (def.topicIds.includes(attempt.topicId)) return true;
      // Kiểm tra thêm theo câu hỏi nếu topicId trên attempt không match trực tiếp
      const q = questions.find((item) => item.id === attempt.questionId);
      if (q && def.topicIds.includes(q.topicId)) return true;
      return false;
    });

    const totalAttempted = relatedAttempts.length;
    const correctCount = relatedAttempts.filter((a) => a.isCorrect).length;

    let score = 0;
    let status: "XuatSac" | "Dat" | "CanLuyenTap" | "ChuaThamGia" = "ChuaThamGia";

    if (totalAttempted > 0) {
      score = Math.round((correctCount / totalAttempted) * 100);
      if (score >= 80) {
        status = "XuatSac";
      } else if (score >= 65) {
        status = "Dat";
      } else {
        status = "CanLuyenTap";
      }
    }

    return {
      code: def.code,
      shortName: def.shortName,
      fullName: def.fullName,
      description: def.description,
      score,
      totalAttempted,
      correctCount,
      status,
      recommendedTopicId: def.recommendedTopicId,
      recommendedTopicName: def.recommendedTopicName,
      actionAdvice: def.actionAdvice,
    };
  });
}
