import { Question, Subject } from "../types";

export const INITIAL_SUBJECTS: Subject[] = [
  {
    id: "tin-hoc-12",
    name: "Tin học 12",
    icon: "Laptop",
    topics: [
      // Tuần 2 - 6: Luyện tập NNLT Python (Tin học 10) [10 tiết]
      {
        id: "tin-lap-trinh-python",
        name: "Chuyên đề 10F: Luyện tập NNLT Python",
        subjectId: "tin-hoc-12",
        chapter: "Phần 1: Luyện tập NNLT Python (Tuần 2 – 6)",
        totalQuestions: 59,
        mcCount: 54,
        tfCount: 5,
        hasTheory: true,
      },

      // Tuần 7: Ôn tập chủ đề 1 (Tin học 12) - Trí tuệ nhân tạo (AI) [2 tiết]
      {
        id: "tin-ai-tri-tue-nhan-tao",
        name: "Chuyên đề 12A: Giới thiệu Trí tuệ Nhân tạo",
        subjectId: "tin-hoc-12",
        chapter: "Chủ đề 1: Giới thiệu Trí tuệ nhân tạo (Tuần 7)",
        totalQuestions: 96,
        mcCount: 76,
        tfCount: 20,
        hasTheory: true,
      },

      // Tuần 8 - 10: Mạng máy tính & Internet (Chuyên đề 12B) [6 tiết]
      {
        id: "tin-thiet-bi-giao-thuc-mang",
        name: "Chuyên đề 12B: Mạng máy tính và Internet",
        subjectId: "tin-hoc-12",
        chapter: "Chủ đề 2: Mạng máy tính và Internet (Tuần 8 – 10)",
        totalQuestions: 83,
        mcCount: 72,
        tfCount: 11,
        hasTheory: true,
      },

      // Tuần 11: Đạo đức, pháp luật & văn hoá số [2 tiết]
      {
        id: "tin-dao-duc-phap-luat-so",
        name: "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
        subjectId: "tin-hoc-12",
        chapter: "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
        totalQuestions: 73,
        mcCount: 58,
        tfCount: 15,
        hasTheory: true,
      },

      // Tuần 12 - 20: Tạo trang web với HTML & CSS (Chuyên đề 12F) [14 tiết - trừ Tuần 17 KTHK I]
      {
        id: "tin-chuyen-de-12f-web",
        name: "Chuyên đề 12F: Tạo trang web với HTML & CSS",
        subjectId: "tin-hoc-12",
        chapter: "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
        totalQuestions: 146,
        mcCount: 132,
        tfCount: 14,
        hasTheory: true,
      },

      // Tuần 21 - 23: Hướng nghiệp với tin học [6 tiết]
      {
        id: "tin-huong-nghiep-dich-vu",
        name: "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ và quản trị",
        subjectId: "tin-hoc-12",
        chapter: "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
        totalQuestions: 73,
        mcCount: 62,
        tfCount: 11,
        hasTheory: true,
      },
      {
        id: "tin-huong-nghiep-ict",
        name: "Ôn tập chủ đề 6,7 _ICT (Tin học 12) (Tuần 22 – 23)",
        subjectId: "tin-hoc-12",
        chapter: "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
        totalQuestions: 4,
        mcCount: 4,
      },

      // Tuần 24 - 25: Luyện giải đề thi tốt nghiệp THPT [4 tiết]
      {
        id: "tin-giai-de-tong-hop",
        name: "Ôn tập giải đề tổng hợp (Tuần 24 – 25)",
        subjectId: "tin-hoc-12",
        chapter: "Luyện giải đề thi tốt nghiệp THPT (Tuần 24 – 25)",
        totalQuestions: 4,
        mcCount: 4,
      },

      // Tuần 26 - 29: Cơ sở dữ liệu quan hệ (Tin học 11) [8 tiết]
      {
        id: "tin-co-so-du-lieu-sql",
        name: "Ôn thi TN.THPT: Chủ đề CSDL lớp 11 (Tuần 26 – 29)",
        subjectId: "tin-hoc-12",
        chapter: "Chủ đề 6: Cơ sở dữ liệu quan hệ (Tuần 26 – 29)",
        totalQuestions: 4,
        mcCount: 4,
      },

      // Tuần 30 - 35: Luyện giải đề mẫu chuẩn tốt nghiệp [10 tiết - trừ Tuần 33 KTHK II]
      {
        id: "tin-giai-de-mau",
        name: "Giải đề mẫu chuẩn tốt nghiệp THPT (Tuần 30 – 35)",
        subjectId: "tin-hoc-12",
        chapter: "Luyện giải đề mẫu chuẩn tốt nghiệp (Tuần 30 – 35)",
        totalQuestions: 4,
        mcCount: 4,
      },
    ],
  },
  {
    id: "toan-12",
    name: "Toán học 12",
    icon: "Calculator",
    topics: [
      {
        id: "toan-ham-so-don-dieu",
        name: "Tính đơn điệu của hàm số",
        subjectId: "toan-12",
        chapter: "Chương 1: Ứng dụng đạo hàm khảo sát hàm số",
        totalQuestions: 3,
      },
      {
        id: "toan-cuc-tri",
        name: "Cực trị của hàm số",
        subjectId: "toan-12",
        chapter: "Chương 1: Ứng dụng đạo hàm khảo sát hàm số",
        totalQuestions: 2,
      },
      {
        id: "toan-mu-logarit",
        name: "Phương trình mũ và Logarit",
        subjectId: "toan-12",
        chapter: "Chương 2: Hàm số lũy thừa, mũ và logarit",
        totalQuestions: 2,
      },
    ],
  },
  {
    id: "vat-ly-12",
    name: "Vật lý 12",
    icon: "Atom",
    topics: [
      {
        id: "ly-dao-dong-dieu-hoa",
        name: "Đại cương Dao động điều hòa",
        subjectId: "vat-ly-12",
        chapter: "Chương 1: Dao động cơ",
        totalQuestions: 2,
      },
      {
        id: "ly-con-lac-lo-xo",
        name: "Con lắc lò xo và năng lượng",
        subjectId: "vat-ly-12",
        chapter: "Chương 1: Dao động cơ",
        totalQuestions: 2,
      },
    ],
  },
];

export const INITIAL_QUESTIONS: Question[] = [
  {
    "id": "Q-TIN-AI-01",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "Khả năng nào sau đây KHÔNG phải là đặc trưng của AI?",
    "options": [
      {
        "id": "A",
        "content": "Khả năng học."
      },
      {
        "id": "B",
        "content": "Khả năng nhận thức."
      },
      {
        "id": "C",
        "content": "Khả năng bay."
      },
      {
        "id": "D",
        "content": "Khả năng hiểu ngôn ngữ"
      }
    ],
    "correctAnswer": "C",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-AI-02",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "Sự kiện nào đánh dấu sự khởi đầu của lịch sử trí tuệ nhân tạo?",
    "options": [
      {
        "id": "A",
        "content": "Hội thảo tại MIT vào năm 1960."
      },
      {
        "id": "B",
        "content": "Hội thảo tại Stanford vào năm 1955."
      },
      {
        "id": "C",
        "content": "Hội thảo Dartmouth năm 1956."
      },
      {
        "id": "D",
        "content": "Sự phát triển của hệ thống MYCIN vào những năm 1970."
      }
    ],
    "correctAnswer": "C",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-AI-03",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "Trong các phương án sau đây, phương án nào ĐÚNG khi nói về sự khác nhau giữa Trí tuệ nhân tạo hẹp (AI hẹp) và Trí tuệ nhân tạo tổng quát (AI mạnh)?",
    "options": [
      {
        "id": "A",
        "content": "AI hẹp chỉ thực hiện một nhiệm vụ cụ thể;"
      },
      {
        "id": "B",
        "content": "AI mạnh thực hiện được một công việc giống như con người;"
      },
      {
        "id": "C",
        "content": "AI hẹp có khả năng tự học;"
      },
      {
        "id": "D",
        "content": "AI hẹp không thể ra quyết định."
      }
    ],
    "correctAnswer": "A",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-AI-04",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "Câu nào dưới đây là đúng khi nói về khả năng nhận thức môi trường xung quanh của AI được cải thiện chủ yếu?",
    "options": [
      {
        "id": "A",
        "content": "Sự phát triển tự nhiên."
      },
      {
        "id": "B",
        "content": "Lập trình cố định."
      },
      {
        "id": "C",
        "content": "Mô hình học sâu."
      },
      {
        "id": "D",
        "content": "Cảm biến và dữ liệu thu thập."
      }
    ],
    "correctAnswer": "D",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-AI-05",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "Thiết bị nào sau đây KHÔNG sử dụng trí tuệ nhân tạo để điểu khiển tự động?",
    "options": [
      {
        "id": "A",
        "content": "Xe ô tô không người lái."
      },
      {
        "id": "B",
        "content": "Ấm điện siêu tốc tự động ngắt."
      },
      {
        "id": "C",
        "content": "Máy bay không người lái."
      },
      {
        "id": "D",
        "content": "Robot hút bụi thông minh."
      }
    ],
    "correctAnswer": "B",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-AI-06",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "AI có thể giúp tối ưu hóa lĩnh vực sản xuất công nghiệp bằng cách nào dưới đây?",
    "options": [
      {
        "id": "A",
        "content": "Tự động hóa dây chuyền sản xuất"
      },
      {
        "id": "B",
        "content": "Quản lý nhân viên thủ công."
      },
      {
        "id": "C",
        "content": "Tăng tốc độ làm việc của công nhân."
      },
      {
        "id": "D",
        "content": "Kiểm tra chất lượng sản phẩm thủ công."
      }
    ],
    "correctAnswer": "A",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-AI-07",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "Khả năng nào dưới đây của AI cho phép máy tính điều chỉnh hành vi dựa trên dữ liệu mới?",
    "options": [
      {
        "id": "A",
        "content": "Khả năng suy luận"
      },
      {
        "id": "B",
        "content": "Khả năng học"
      },
      {
        "id": "C",
        "content": "Khả năng nhận thức"
      },
      {
        "id": "D",
        "content": "Khả năng giải quyết vấn đề"
      }
    ],
    "correctAnswer": "B",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-AI-08",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "Hệ thống nào dưới đây KHÔNG được coi là hệ thống có ứng dụng AI?",
    "options": [
      {
        "id": "A",
        "content": "Google Translate."
      },
      {
        "id": "B",
        "content": "Dây chuyền lắp ráp tự động."
      },
      {
        "id": "C",
        "content": "Chat GPT."
      },
      {
        "id": "D",
        "content": "Dự báo thời tiết."
      }
    ],
    "correctAnswer": "B",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-AI-09",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "Trí tuệ nhân tạo có tên viết tắt tiếng Anh là gì?",
    "options": [
      {
        "id": "A",
        "content": "AI"
      },
      {
        "id": "B",
        "content": "BI"
      },
      {
        "id": "C",
        "content": "AA"
      },
      {
        "id": "D",
        "content": "BB"
      }
    ],
    "correctAnswer": "A",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-AI-10",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "Phương án nào dưới đây nêu đúng về khả năng suy luận của AI?",
    "options": [
      {
        "id": "A",
        "content": "Trích xuất thông tin từ dữ liệu để học và tích lũy kiến thức."
      },
      {
        "id": "B",
        "content": "Cảm nhận và hiểu biết về môi trường thông qua các cảm biến và thiết bị đầu vào."
      },
      {
        "id": "C",
        "content": "Vận dụng logic và tri thức để đưa ra quyết định hoặc kết luận."
      },
      {
        "id": "D",
        "content": "Tìm ra cách giải quyết các tình huống phức tạp dựa trên thông tin và tri thức."
      }
    ],
    "correctAnswer": "C",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-AI-11",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "Hệ thống phân tích tài chính thuộc loại trí tuệ nhân tạo nào dưới đây?",
    "options": [
      {
        "id": "A",
        "content": "Siêu trí tuệ nhân tạo."
      },
      {
        "id": "B",
        "content": "Trí tuệ nhân tạo tổng quát."
      },
      {
        "id": "C",
        "content": "Trí tuệ nhân tạo hẹp."
      },
      {
        "id": "D",
        "content": "Trí tuệ nhân tạo mạnh."
      }
    ],
    "correctAnswer": "C",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-AI-12",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "Lĩnh vực nào dưới đây đã ứng dụng AI để dự đoán hành vi khách hàng?",
    "options": [
      {
        "id": "A",
        "content": "Y tế."
      },
      {
        "id": "B",
        "content": "Kinh doanh."
      },
      {
        "id": "C",
        "content": "Giáo dục."
      },
      {
        "id": "D",
        "content": "Xây dựng."
      }
    ],
    "correctAnswer": "B",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-AI-13",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "Hệ thống nào dưới đây là một thành tựu của xử lí ngôn ngữ tự nhiên và thị giác máy tính?",
    "options": [
      {
        "id": "A",
        "content": "Tưới tiêu tự động."
      },
      {
        "id": "B",
        "content": "Phân tích dữ liệu."
      },
      {
        "id": "C",
        "content": "Lắp ráp tự động."
      },
      {
        "id": "D",
        "content": "Nhận dạng hình ảnh và video."
      }
    ],
    "correctAnswer": "D",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-AI-14",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "Phương án nào sau đây là ứng dụng của AI trong lĩnh vực giao thông vận tải?",
    "options": [
      {
        "id": "A",
        "content": "Tối ưu hoá quá trình sản xuất."
      },
      {
        "id": "B",
        "content": "Chẩn đoán bệnh."
      },
      {
        "id": "C",
        "content": "Phân tích dữ liệu khoa học."
      },
      {
        "id": "D",
        "content": "Điều khiển xe ô tô tự lái."
      }
    ],
    "correctAnswer": "D",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-AI-15",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "MYCIN là hệ chuyên gia trong lĩnh vực nào?",
    "options": [
      {
        "id": "A",
        "content": "Giáo dục."
      },
      {
        "id": "B",
        "content": "Y học."
      },
      {
        "id": "C",
        "content": "Hoá học."
      },
      {
        "id": "D",
        "content": "Giao thông."
      }
    ],
    "correctAnswer": "B",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-AI-16",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "Trợ lí ảo của Samsung là",
    "options": [
      {
        "id": "A",
        "content": "Siri."
      },
      {
        "id": "B",
        "content": "Cortana."
      },
      {
        "id": "C",
        "content": "Alexa."
      },
      {
        "id": "D",
        "content": "Bixby."
      }
    ],
    "correctAnswer": "D",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-AI-17",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "Robot hình người đầu tiên trên thế giới được tích hợp một loạt ứng dụng AI là",
    "options": [
      {
        "id": "A",
        "content": "Apollo."
      },
      {
        "id": "B",
        "content": "Valkyrie."
      },
      {
        "id": "C",
        "content": "Asimo."
      },
      {
        "id": "D",
        "content": "Sophia."
      }
    ],
    "correctAnswer": "C",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-AI-18",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "Hội thảo nào được coi là điểm mốc ghi nhận sự ra đời của thuật ngữ AI, đánh dấu sự khởi đầu của lĩnh vực AI, thúc đẩy sự phát triển của lĩnh vực này trong các năm tiếp theo?",
    "options": [
      {
        "id": "A",
        "content": "Hội thảo Hampshire."
      },
      {
        "id": "B",
        "content": "Hội thảo Bletchley."
      },
      {
        "id": "C",
        "content": "Hội thảo Dartmouth."
      },
      {
        "id": "D",
        "content": "Hội thảo Jenesys."
      }
    ],
    "correctAnswer": "C",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-AI-19",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "Hệ thống nào dưới đây không được coi là hệ thống có ứng dụng AI?",
    "options": [
      {
        "id": "A",
        "content": "Google Translate."
      },
      {
        "id": "B",
        "content": "Dây chuyền lắp ráp tự động."
      },
      {
        "id": "C",
        "content": "Chat GPT."
      },
      {
        "id": "D",
        "content": "Dự báo thời tiết."
      }
    ],
    "correctAnswer": "B",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-AI-20",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "Phần mềm IBM Watson for Oncology góp phần nâng cao hiệu quả điều trị bệnh gì?",
    "options": [
      {
        "id": "A",
        "content": "Bệnh ung thư."
      },
      {
        "id": "B",
        "content": "Bệnh tim."
      },
      {
        "id": "C",
        "content": "Bệnh tiểu đường."
      },
      {
        "id": "D",
        "content": "Bệnh phổi."
      }
    ],
    "correctAnswer": "A",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-AI-21",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "Một thành tựu của xử lí ngôn ngữ tự nhiên và thị giác máy tính là",
    "options": [
      {
        "id": "A",
        "content": "hệ thống tưới tiêu tự động."
      },
      {
        "id": "B",
        "content": "hệ thống phân tích dữ liệu."
      },
      {
        "id": "C",
        "content": "hệ thống lắp ráp tự động."
      },
      {
        "id": "D",
        "content": "hệ thống nhận dạng hình ảnh và video."
      }
    ],
    "correctAnswer": "D",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-AI-22",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "ChatGPT được phát triển bởi",
    "options": [
      {
        "id": "A",
        "content": "Apple."
      },
      {
        "id": "B",
        "content": "OpenAI."
      },
      {
        "id": "C",
        "content": "Microsoft."
      },
      {
        "id": "D",
        "content": "Meta."
      }
    ],
    "correctAnswer": "B",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-AI-23",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "AI (Trí tuệ nhân tạo) là gì?",
    "options": [
      {
        "id": "A",
        "content": "Hệ thống tự động"
      },
      {
        "id": "B",
        "content": "Khả năng của máy tính thực hiện các công việc mang tính trí tuệ của con người"
      },
      {
        "id": "C",
        "content": "Phần mềm diệt virus"
      },
      {
        "id": "D",
        "content": "Ứng dụng điện thoại thông minh"
      }
    ],
    "correctAnswer": "B",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-AI-24",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "Mục đích chính của AI là gì?",
    "options": [
      {
        "id": "A",
        "content": "Xây dựng các phần mềm diệt virus"
      },
      {
        "id": "B",
        "content": "Xây dựng các phần mềm giúp máy tính có năng lực trí tuệ tương tự con người"
      },
      {
        "id": "C",
        "content": "Tạo ra các ứng dụng giải trí"
      },
      {
        "id": "D",
        "content": "Phát triển các trò chơi điện tử"
      }
    ],
    "correctAnswer": "B",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-AI-25",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "Hệ thống nào dưới đây KHÔNG được coi là hệ thống có ứng dụng AI?",
    "options": [
      {
        "id": "A",
        "content": "Google Translate."
      },
      {
        "id": "B",
        "content": "Dây chuyền lắp ráp tự động."
      },
      {
        "id": "C",
        "content": "Chat GPT."
      },
      {
        "id": "D",
        "content": "Dự báo thời tiết."
      }
    ],
    "correctAnswer": "B",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-AI-26",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "Robot đầu tiên trên thế giới được tích hợp ứng dụng AI do hãng nào sản xuất?",
    "options": [
      {
        "id": "A",
        "content": "Tesla."
      },
      {
        "id": "B",
        "content": "NASA."
      },
      {
        "id": "C",
        "content": "Honda."
      },
      {
        "id": "D",
        "content": "Toshiba."
      }
    ],
    "correctAnswer": "C",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-AI-27",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "Phương án nào sau đây đúng khi nói về ứng dụng của Trí tuệ nhân tạo trong lĩnh vực y tế?",
    "options": [
      {
        "id": "A",
        "content": "Trí tuệ nhân tạo không có ứng dụng trong y tế."
      },
      {
        "id": "B",
        "content": "Trí tuệ nhân tạo chỉ được dùng để lập kế hoạch tài chính trong y tế."
      },
      {
        "id": "C",
        "content": "Trí tuệ nhân tạo giúp tăng cường sức khoẻ thể chất mà không liên quan đến bệnh tật."
      },
      {
        "id": "D",
        "content": "Trí tuệ nhân tạo được ứng dụng trong y tế để chuẩn đoán bệnh, phân tích hình ảnh, phát triển thuốc, quản lý hồ sơ bệnh nhân và quyết định hỗ trợ lâm sàng."
      }
    ],
    "correctAnswer": "D",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-AI-28",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "Nhận định nào sau đây là ĐÚNG khi nói về Trí tuệ nhân tạo?",
    "options": [
      {
        "id": "A",
        "content": "Trí tuệ nhân tạo là một loại thực phẩm sử dụng hàng ngày trong đời sống con người."
      },
      {
        "id": "B",
        "content": "Trí tuệ nhân tạo là lĩnh vực nghiên cứu các hệ thống máy tính có khả năng thực hiện nhiệm vụ mang tính trí tuệ như con người."
      },
      {
        "id": "C",
        "content": "Trí tuệ nhân tạo là lĩnh vực nghiên cứu không liên quan đến máy tính."
      },
      {
        "id": "D",
        "content": "Trí tuệ nhân tạo là một phần mềm đơn giản được cài đặt trong máy tính như một tiện ích thông thường."
      }
    ],
    "correctAnswer": "B",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-AI-29",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "Thiết bị nào sao đây được tích hợp AI?",
    "options": [
      {
        "id": "A",
        "content": "Đồng hồ treo tường chạy bằng pin."
      },
      {
        "id": "B",
        "content": "Hệ thống điện mặt trời."
      },
      {
        "id": "C",
        "content": "Camera nhận dạng."
      },
      {
        "id": "D",
        "content": "Máy cắt cỏ chạy bằng xăng."
      }
    ],
    "correctAnswer": "C",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-AI-30",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "Phương án nào sau đây liệt kê hai phân loại chính của Trí tuệ nhân tạo (AI)?",
    "options": [
      {
        "id": "A",
        "content": "AI hẹp (ANI) và AI siêu thông minh (ASI)."
      },
      {
        "id": "B",
        "content": "AI hẹp (ANI) và AI tổng quát (AGI)."
      },
      {
        "id": "C",
        "content": "AI tổng quát (AGI) và AI Tự học (ALI)."
      },
      {
        "id": "D",
        "content": "AI tổng quát (AGI) và AI siêu thông minh (ASI)."
      }
    ],
    "correctAnswer": "B",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-AI-31",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "Đâu là chức năng chính của hệ chuyên gia MYCIN?",
    "options": [
      {
        "id": "A",
        "content": "Phát triển phần mềm quản lý bệnh viện."
      },
      {
        "id": "B",
        "content": "Tư vấn dinh dưỡng cho bệnh nhân."
      },
      {
        "id": "C",
        "content": "Đưa ra các chuẩn đoán về bệnh nhiễm trùng máu."
      },
      {
        "id": "D",
        "content": "Nghiên cứu về bệnh tim mạch."
      }
    ],
    "correctAnswer": "C",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-AI-32",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "Một trong những lợi ích của AI trong giáo dục là",
    "options": [
      {
        "id": "A",
        "content": "Tạo bài giảng tự động."
      },
      {
        "id": "B",
        "content": "Thay thế hoàn toàn giáo viên."
      },
      {
        "id": "C",
        "content": "Theo dõi tiến trình học tập và đề xuất nội dung học tập phù hợp với người học."
      },
      {
        "id": "D",
        "content": "Chỉ dùng để ra bài tập luyện tập."
      }
    ],
    "correctAnswer": "C",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-AI-33",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "Thuật ngữ \"AI\" bắt đầu được sử dụng vào năm nào?",
    "options": [
      {
        "id": "A",
        "content": "1945."
      },
      {
        "id": "B",
        "content": "1956."
      },
      {
        "id": "C",
        "content": "1970."
      },
      {
        "id": "D",
        "content": "1985."
      }
    ],
    "correctAnswer": "B",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-AI-34",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "Lĩnh vực nghiên cứu nào dưới đây của AI có khả năng phân tích và nhận dạng các hình ảnh từ thế giới bên ngoài?",
    "options": [
      {
        "id": "A",
        "content": "Thị giác máy tính."
      },
      {
        "id": "B",
        "content": "AI tạo sinh."
      },
      {
        "id": "C",
        "content": "Học máy."
      },
      {
        "id": "D",
        "content": "Xử lí ngôn ngữ tự nhiên."
      }
    ],
    "correctAnswer": "A",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-AI-35",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "Công nghệ nhận dạng vân tay không được sử dụng để",
    "options": [
      {
        "id": "A",
        "content": "xác thực giao dịch trực tuyến."
      },
      {
        "id": "B",
        "content": "xử lí ngôn ngữ tự nhiên."
      },
      {
        "id": "C",
        "content": "mở khoá điện thoại thông minh."
      },
      {
        "id": "D",
        "content": "quản lí điểm danh."
      }
    ],
    "correctAnswer": "B",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-AI-36",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "AI không có đặc trưng nào sau đây?",
    "options": [
      {
        "id": "A",
        "content": "Khả năng hiểu ngôn ngữ."
      },
      {
        "id": "B",
        "content": "Khả năng nhận thức được môi trường xung quanh."
      },
      {
        "id": "C",
        "content": "Khả năng rút kinh nghiệm từ những sai lầm."
      },
      {
        "id": "D",
        "content": "Khả năng giải quyết vấn đề."
      }
    ],
    "correctAnswer": "C",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-AI-37",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "Tập hợp quy tắc suy diễn của hệ chuyên gia MYCIN được biểu dưới dạng nào dưới đây?",
    "options": [
      {
        "id": "A",
        "content": "IF … ELSE …"
      },
      {
        "id": "B",
        "content": "FOR … THEN …"
      },
      {
        "id": "C",
        "content": "WHILE … IN …"
      },
      {
        "id": "D",
        "content": "IF … THEN …"
      }
    ],
    "correctAnswer": "D",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-AI-38",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "Phát biểu nào sau đây sai?",
    "options": [
      {
        "id": "A",
        "content": "Mục tiêu của việc phát triển ứng dụng AI là nhằm xây dựng các phần mềm giúp máy tính có được những năng lực trí tuệ như con người."
      },
      {
        "id": "B",
        "content": "Chương trình máy tính chơi cờ là một ví dụ của trí tuệ nhân tạo mạnh."
      },
      {
        "id": "C",
        "content": "Giữa AI và tự động hoá có sự khác biệt."
      },
      {
        "id": "D",
        "content": "Mọi ứng dụng AI trong thực tế đều cần có sự kết hợp ở các mức độ khác nhau của những đặc trưng trí tuệ."
      }
    ],
    "correctAnswer": "B",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-AI-39",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "Trong các phương án sau đây Khả năng học của AI được thể hiện như thế nào?",
    "options": [
      {
        "id": "A",
        "content": "Hệ thống AI vận dụng các quy tắc logic và tri thức đã tích luỹ để đưa ra kết luận dựa trên các thông tin đang có."
      },
      {
        "id": "B",
        "content": "Hệ thống AI học từ dữ liệu đầu vào, tìm ra được các tính chất và quy luật tiềm ẩn trong dữ liệu, rút ra được tri thức để thực hiện công việc tốt hơn trước."
      },
      {
        "id": "C",
        "content": "Hệ thống AI nhận dữ liệu đầu vào từ các cảm biến, xử lí dữ liệu, rút ra thông tin và hiểu biết môi trường xung quanh để có hành vi phù hợp."
      },
      {
        "id": "D",
        "content": "Hệ thống AI có các kĩ thuật, phương pháp phân tích dữ liệu từ đó trích xuất được tri thức, đề xuất cách giải quyết vấn đề và ra quyết định tối ưu để đạt được mục tiêu đặt ra."
      }
    ],
    "correctAnswer": "B",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-AI-40",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "Phát biểu nào sau đây đúng?",
    "options": [
      {
        "id": "A",
        "content": "Các thành tựu hiện tại của AI đều là Trí tuệ nhân tạo tổng quát."
      },
      {
        "id": "B",
        "content": "Phiên bản GPT-2 được huấn luyện trên hàng vạn văn bản thuộc nhiều lĩnh vực khác nhau trên Internet, bao gồm sách, bài báo, trang web và nhiều nguồn khác."
      },
      {
        "id": "C",
        "content": "Nhiều chuyên gia coi ChatGPT là bước đột phá trong lĩnh vực AI của năm 2022."
      },
      {
        "id": "D",
        "content": "ChatGPT có thể làm thơ, soạn nhạc, viết thư, thiết kế nhưng không thể sửa lỗi trong lập trình."
      }
    ],
    "correctAnswer": "C",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-AI-41",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "Phương án nào dưới đây là đúng khi giải thích về sự phát triển của trí tuệ nhân tạo (AI) lại có thể trở thành mối đe dọa tiềm ẩn đối với an ninh và an toàn?",
    "options": [
      {
        "id": "A",
        "content": "AI có thể bị sử dụng để tạo ra các cuộc tấn công mạng tinh vi hơn, khó phát hiện hơn."
      },
      {
        "id": "B",
        "content": "AI có khả năng thay thế hoàn toàn con người trong mọi công việc, khiến cho nhân lực trở nên không còn cần thiết."
      },
      {
        "id": "C",
        "content": "AI chỉ có thể áp dụng trong các lĩnh vực giải trí và không ảnh hưởng đến các lĩnh vực quan trọng khác."
      },
      {
        "id": "D",
        "content": "Sự phát triển của AI chỉ làm tăng hiệu suất công việc mà không có tác động tiêu cực nào."
      }
    ],
    "correctAnswer": "A",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-AI-42",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "AI khác với tự động hóa ở điểm nào sau đây?",
    "options": [
      {
        "id": "A",
        "content": "AI yêu cầu sự kết hợp của nhiều đặc trưng trí tuệ."
      },
      {
        "id": "B",
        "content": "AI chỉ làm việc với dữ liệu số."
      },
      {
        "id": "C",
        "content": "AI không cần con người can thiệp."
      },
      {
        "id": "D",
        "content": "AI không thể học hỏi từ dữ liệu mới"
      }
    ],
    "correctAnswer": "A",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-AI-43",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "Phương án nào dưới đây mô tả đúng về AI đã giúp ích trong lĩnh vực chăm sóc khách hàng?",
    "options": [
      {
        "id": "A",
        "content": "Thực hiện cuộc gọi tự động để mời khách hàng."
      },
      {
        "id": "B",
        "content": "Tạo ra các chatbot hỗ trợ khách hàng trực tuyến 24/7."
      },
      {
        "id": "C",
        "content": "Quản lý dữ liệu khách hàng một cách tự động."
      },
      {
        "id": "D",
        "content": "Tự động phân loại khách hàng theo nhu cầu mua sắm."
      }
    ],
    "correctAnswer": "B",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-AI-44",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "Ví dụ nào sau đây KHÔNG phải là ứng dụng của AI tạo sinh?",
    "options": [
      {
        "id": "A",
        "content": "ChatGPT."
      },
      {
        "id": "B",
        "content": "Mubert."
      },
      {
        "id": "C",
        "content": "Google Search."
      },
      {
        "id": "D",
        "content": "Midjourney."
      }
    ],
    "correctAnswer": "C",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-AI-45",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "Trợ lí ảo có chức năng nào sau đây?",
    "options": [
      {
        "id": "A",
        "content": "Tìm kiếm thông tin bằng tiếng nói của người dùng."
      },
      {
        "id": "B",
        "content": "Nhận dạng khuôn mặt."
      },
      {
        "id": "C",
        "content": "Nhận dạng chữ viết tay."
      },
      {
        "id": "D",
        "content": "Kiểm tra lỗi chính tả."
      }
    ],
    "correctAnswer": "A",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-AI-46",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "Phương án nào dưới đây nói về sự kết hợp IoT và AI (AIoT) giúp ích cho các nhà khoa học?",
    "options": [
      {
        "id": "A",
        "content": "Giúp mô phỏng và mô hình hoá nhiều hiện tượng xã hội vân nhân học."
      },
      {
        "id": "B",
        "content": "Giúp cải thiện chất lượng hình ảnh y tế."
      },
      {
        "id": "C",
        "content": "Giúp giám sát môi trường tự nhiên và theo dõi tình hình biến đổi khí hậu."
      },
      {
        "id": "D",
        "content": "Giúp phát triển các nền tảng học trực tuyến thông minh."
      }
    ],
    "correctAnswer": "C",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-AI-47",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "Hệ thống đề xuất các bộ phim trên Netflix là ví dụ về đặc trưng nào của AI?",
    "options": [
      {
        "id": "A",
        "content": "Khả năng giải quyết vấn đề suy luận."
      },
      {
        "id": "B",
        "content": "Khả năng học."
      },
      {
        "id": "C",
        "content": "Khả năng hiểu ngôn ngữ."
      },
      {
        "id": "D",
        "content": "Khả năng nhận thức."
      }
    ],
    "correctAnswer": "B",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-AI-48",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "Hệ thống khuyến nghị tích hợp trên YouTube là ví dụ về đặc trưng nào của AI?",
    "options": [
      {
        "id": "A",
        "content": "Khả năng học."
      },
      {
        "id": "B",
        "content": "Khả năng giải quyết vấn đề."
      },
      {
        "id": "C",
        "content": "Khả năng hiểu ngôn ngữ."
      },
      {
        "id": "D",
        "content": "Khả năng nhận thức."
      }
    ],
    "correctAnswer": "A",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-AI-49",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "Máy tính điều khiển xe tự lái như thế nào?",
    "options": [
      {
        "id": "A",
        "content": "Sử dụng cảm biến lidar và camera để phát hiện và nhận biết xe xung quanh, các chướng ngại vật, biển báo giao thông và người đi bộ trên đường."
      },
      {
        "id": "B",
        "content": "Sử dụng cảm biến radar và siêu âm để phát hiện và nhận biết xe xung quanh, các chướng ngại vật, biển báo giao thông và người đi bộ trên đường."
      },
      {
        "id": "C",
        "content": "Sử dụng cảm biến siêu âm và lidar để phát hiện và nhận biết xe xung quanh, các chướng ngại vật, biển báo giao thông và người đi bộ trên đường."
      },
      {
        "id": "D",
        "content": "Sử dụng cảm biến radar và camera để phát hiện và nhận biết xe xung quanh, các chướng ngại vật, biển báo giao thông và người đi bộ trên đường."
      }
    ],
    "correctAnswer": "D",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-AI-50",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "Có thể chia AI thành mấy loại chính theo chức năng?",
    "options": [
      {
        "id": "A",
        "content": "2."
      },
      {
        "id": "B",
        "content": "3."
      },
      {
        "id": "C",
        "content": "4."
      },
      {
        "id": "D",
        "content": "5."
      }
    ],
    "correctAnswer": "A",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-AI-51",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "Phát biểu nào sau đây sai?",
    "options": [
      {
        "id": "A",
        "content": "Mục tiêu của việc phát triển ứng dụng AI là nhằm xây dựng các phần mềm giúp máy tính có được những năng lực trí tuệ như con người."
      },
      {
        "id": "B",
        "content": "Chương trình máy tính chơi cờ là một ví dụ của trí tuệ nhân tạo mạnh."
      },
      {
        "id": "C",
        "content": "Giữa AI và tự động hoá có sự khác biệt."
      },
      {
        "id": "D",
        "content": "Mọi ứng dụng AI trong thực tế đều cần có sự kết hợp ở các mức độ khác nhau của những đặc trưng trí tuệ."
      }
    ],
    "correctAnswer": "B",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-AI-52",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "Trợ lí ảo có chức năng nào sau đây?",
    "options": [
      {
        "id": "A",
        "content": "Tìm kiếm thông tin bằng tiếng nói của người dùng."
      },
      {
        "id": "B",
        "content": "Nhận dạng khuôn mặt."
      },
      {
        "id": "C",
        "content": "Nhận dạng chữ viết tay."
      },
      {
        "id": "D",
        "content": "Kiểm tra lỗi chính tả."
      }
    ],
    "correctAnswer": "A",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-AI-53",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "Phát biểu nào sau đây đúng?",
    "options": [
      {
        "id": "A",
        "content": "Các thành tựu hiện tại của AI đều là Trí tuệ nhân tạo tổng quát."
      },
      {
        "id": "B",
        "content": "Phiên bản GPT-2 được huấn luyện trên hàng vạn văn bản thuộc nhiều lĩnh vực khác nhau trên Internet, bao gồm sách, bài báo, trang web và nhiều nguồn khác."
      },
      {
        "id": "C",
        "content": "Nhiều chuyên gia coi ChatGPT là bước đột phá trong lĩnh vực AI của năm 2022."
      },
      {
        "id": "D",
        "content": "ChatGPT có thể làm thơ, soạn nhạc, viết thư, thiết kế nhưng không thể sửa lỗi trong lập trình."
      }
    ],
    "correctAnswer": "C",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-AI-54",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "Sự phát triển của AI mang lại lợi ích như thế nào cho lĩnh vực giáo dục?",
    "options": [
      {
        "id": "A",
        "content": "AI hỗ trợ tự động hoá cập nhật chứng từ, hoá đơn vào cơ sở dữ liệu của ngân hàng."
      },
      {
        "id": "B",
        "content": "AI được sử dụng để phát triển các phương tiện tự lái, quản lí giao thông thông minh và định tuyến phương tiện vận tải."
      },
      {
        "id": "C",
        "content": "Các trợ lí ảo học tập dựa trên AI có thể hỗ trợ học sinh và giáo viên bằng cách trả lời câu hỏi, cung cấp hướng dẫn và tài liệu học tập."
      },
      {
        "id": "D",
        "content": "AI có thể giúp người nông dân tối ưu hoá quy trình chăm sóc vật nuôi và cây trồng."
      }
    ],
    "correctAnswer": "C",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-AI-55",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "AI có ảnh hưởng như thế nào tới lĩnh vực khoa học xã hội và nhân văn?",
    "options": [
      {
        "id": "A",
        "content": "Với sự phát triển của AI, đặc biệt là Học máy, nhiều hệ chuyên gia đã có khả năng tự học từ dữ liệu để tự hình thành các luật tri thức dựa trên dữ liệu."
      },
      {
        "id": "B",
        "content": "AI được sử dụng để mô phỏng và mô hình hoá nhiều hiện tượng xã hội vân nhân học."
      },
      {
        "id": "C",
        "content": "AI được sử dụng để cải thiện chất lượng hình ảnh y tế."
      },
      {
        "id": "D",
        "content": "AI giúp tự động hoá nhiều quá trình, từ chế tạo, lắp ráp, kiểm tra chất lượng đến quản lí chuỗi cung ứng."
      }
    ],
    "correctAnswer": "B",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-AI-56",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "Phát biểu nào sau đây đúng?",
    "options": [
      {
        "id": "A",
        "content": "Các thành tựu hiện tại của AI đều là Trí tuệ nhân tạo tổng quát."
      },
      {
        "id": "B",
        "content": "Phiên bản GPT-2 được huấn luyện trên hàng vạn văn bản thuộc nhiều lĩnh vực khác nhau trên Internet, bao gồm sách, bài báo, trang web và nhiều nguồn khác."
      },
      {
        "id": "C",
        "content": "Nhiều chuyên gia coi ChatGPT là bước đột phá trong lĩnh vực AI của năm 2022."
      },
      {
        "id": "D",
        "content": "ChatGPT có thể làm thơ, soạn nhạc, viết thư, thiết kế nhưng không thể sửa lỗi trong lập trình."
      }
    ],
    "correctAnswer": "C",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-AI-57",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "Vì sao lại nói sự phát triển của AI kéo theo rủi ro về an ninh, an toàn?",
    "options": [
      {
        "id": "A",
        "content": "Nhiều ứng dụng AI hoạt động dựa vào việc thu thập một lượng lớn dữ liệu cá nhân, điều này làm tăng mối lo ngại về quyền riêng tư có khả năng bị lạm dụng."
      },
      {
        "id": "B",
        "content": "Phần lớn các ứng dụng AI hiện nay đều là các “hộp đen”, gây khó khăn cho việc hiểu các quyết định được đưa ra như thế nào, dẫn đến việc thiếu trách nhiệm giải trình để đảm bảo tính minh bạch."
      },
      {
        "id": "C",
        "content": "AI có khả năng tự động hoá nhiều công việc, dẫn đến tình trạng thất nghiệp và tạo nên nhiều nguy cơ cho sự phát triển xã hội."
      },
      {
        "id": "D",
        "content": "Nhiều ứng dụng AI được xây dựng và triển khai trực tuyến nên có thể bị xâm nhập hoặc tấn công thay đổi dữ liệu và mô hình dẫn đến những quyết định không chính xác do AI đưa ra."
      }
    ],
    "correctAnswer": "D",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-AI-58",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "“Khả năng nắm bắt thông tin từ dữ liệu và điều chỉnh hành vi dựa trên thông tin mới” thể hiện đặc trưng nào của AI?",
    "options": [
      {
        "id": "A",
        "content": "Khả năng nhận thức."
      },
      {
        "id": "B",
        "content": "Khả năng suy luận."
      },
      {
        "id": "C",
        "content": "Khả năng giải quyết vấn đề."
      },
      {
        "id": "D",
        "content": "Khả năng học.\n1.3. Vận dụng"
      }
    ],
    "correctAnswer": "D",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-AI-59",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "Phương án nào sau đây là ứng dụng của AI trong lĩnh vực y học?",
    "options": [
      {
        "id": "A",
        "content": "Dịch thuật."
      },
      {
        "id": "B",
        "content": "Bảo mật thông tin."
      },
      {
        "id": "C",
        "content": "Nhận dạng biển số xe."
      },
      {
        "id": "D",
        "content": "Xác định các bất thường trên hình ảnh CT/MRI sọ não."
      }
    ],
    "correctAnswer": "D",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-AI-60",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "Hệ thống phân tích tài chính thuộc loại trí tuệ nhân tạo nào?",
    "options": [
      {
        "id": "A",
        "content": "Siêu trí tuệ nhân tạo."
      },
      {
        "id": "B",
        "content": "Trí tuệ nhân tạo tổng quát."
      },
      {
        "id": "C",
        "content": "Trí tuệ nhân tạo hẹp."
      },
      {
        "id": "D",
        "content": "Trí tuệ nhân tạo mạnh."
      }
    ],
    "correctAnswer": "C",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-AI-61",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "Siri không có tính năng nào sau đây?",
    "options": [
      {
        "id": "A",
        "content": "Đặt báo thức."
      },
      {
        "id": "B",
        "content": "Thanh toán hoá đơn."
      },
      {
        "id": "C",
        "content": "Gọi điện thoại."
      },
      {
        "id": "D",
        "content": "Tìm kiếm."
      }
    ],
    "correctAnswer": "B",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-AI-62",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "Phương án nào sau đây không phải là ứng dụng của AI trong lĩnh vực sản xuất?",
    "options": [
      {
        "id": "A",
        "content": "Điều phối điều trị."
      },
      {
        "id": "B",
        "content": "Quản lí tồn kho và dự báo nhu cầu."
      },
      {
        "id": "C",
        "content": "Kiểm tra chất lượng sản phẩm."
      },
      {
        "id": "D",
        "content": "Tối ưu hoá quá trình lắp ráp."
      }
    ],
    "correctAnswer": "A",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-AI-63",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "AI có lợi ích như thế nào đối với khoa học và nghiên cứu?",
    "options": [
      {
        "id": "A",
        "content": "AI có thể tự động chấm điểm bài kiểm tra và phân loại học sinh dựa trên thành tích học tập."
      },
      {
        "id": "B",
        "content": "AI có thể phân tích dữ liệu bệnh lí của bệnh nhân và đề xuất phương pháp điều trị hiệu quả nhất."
      },
      {
        "id": "C",
        "content": "Các hệ thống AI được tích hợp vào dây chuyền sản xuất giúp tăng hiệu suất, giảm sai sót và tiết kiệm chi phí nhờ khả năng làm việc liên tục và không cần nghỉ ngơi."
      },
      {
        "id": "D",
        "content": "AI được sử dụng để dự đoán các kết quả trong các lĩnh vực như thời tiết, tác động của biến đổi khí hậu và địa chất học."
      }
    ],
    "correctAnswer": "D",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-AI-64",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "“Chia sẻ thông tin chính xác và đáng tin cậy, tránh lan truyền thông tin sai lệch hoặc tin đồn” thể hiện khía cạnh nào trong việc ứng xử nhân văn trong không gian mạng?",
    "options": [
      {
        "id": "A",
        "content": "Tôn trọng."
      },
      {
        "id": "B",
        "content": "Lịch sự."
      },
      {
        "id": "C",
        "content": "Thấu hiểu."
      },
      {
        "id": "D",
        "content": "Hỗ trợ."
      }
    ],
    "correctAnswer": "B",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-AI-65",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "AI có ảnh hưởng như thế nào tới lĩnh vực khoa học xã hội và nhân văn?",
    "options": [
      {
        "id": "A",
        "content": "Với sự phát triển của AI, đặc biệt là Học máy, nhiều hệ chuyên gia đã có khả năng tự học từ dữ liệu để tự hình thành các luật tri thức dựa trên dữ liệu."
      },
      {
        "id": "B",
        "content": "AI được sử dụng để mô phỏng và mô hình hoá nhiều hiện tượng xã hội vân nhân học."
      },
      {
        "id": "C",
        "content": "AI được sử dụng để cải thiện chất lượng hình ảnh y tế."
      },
      {
        "id": "D",
        "content": "AI giúp tự động hoá nhiều quá trình, từ chế tạo, lắp ráp, kiểm tra chất lượng đến quản lí chuỗi cung ứng."
      }
    ],
    "correctAnswer": "B",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-AI-66",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "Thị giác máy tính (tiếng Anh: Computer vision), là một lĩnh vực trong khoa học máy tính và trí tuệ nhân tạo (AI) tập trung vào việc phát triển phương pháp và công nghệ để máy tính có khả năng nhận diện, hiểu và xử lý hình ảnh và video một cách tự động. Thị giác máy tính sử dụng các thuật toán và mô hình học máy để phân tích và rút trích thông tin từ dữ liệu hình ảnh, như các đặc trưng, đối tượng, mối quan hệ và bối cảnh. Vậy theo em, thị giác máy tính thực hiện được tác vụ nào sau đây?",
    "options": [
      {
        "id": "A",
        "content": "Dự báo thời tiết."
      },
      {
        "id": "B",
        "content": "Tăng độ nét và làm mịn ảnh."
      },
      {
        "id": "C",
        "content": "Phân tích hình ảnh y tế."
      },
      {
        "id": "D",
        "content": "Nhận dạng giọng nói."
      }
    ],
    "correctAnswer": "C",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-AI-67",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "Lĩnh vực nghiên cứu nào của AI tập trung vào việc xây dựng các thuật toán và mô hình có thể tạo nội dung (hình ảnh, âm thanh, văn bản) một cách tự động, được sử dụng trong nhiều lĩnh vực, bao gồm nghệ thuật, giải trí, quảng cáo và trò chơi?",
    "options": [
      {
        "id": "A",
        "content": "Thị giác máy tính."
      },
      {
        "id": "B",
        "content": "Học máy."
      },
      {
        "id": "C",
        "content": "Xử lí ngôn ngữ tự nhiên."
      },
      {
        "id": "D",
        "content": "AI tạo sinh."
      }
    ],
    "correctAnswer": "D",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-AI-68",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "Em hãy tìm hiểu trên Internet và cho biết phương án nào sau đây là tên của một ứng dụng AI giúp xây dựng trải nghiệm giao tiếp tự nhiên?",
    "options": [
      {
        "id": "A",
        "content": "TensorFlow."
      },
      {
        "id": "B",
        "content": "Dialogflow."
      },
      {
        "id": "C",
        "content": "Rainbird."
      },
      {
        "id": "D",
        "content": "Origami."
      }
    ],
    "correctAnswer": "B",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-AI-69",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "Em hãy tìm hiểu trên Internet và cho biết phương án nào sau đây là tên của một phần mềm AI giúp tạo hình ảnh dựa trên các miêu tả văn bản hoặc lời nói?",
    "options": [
      {
        "id": "A",
        "content": "Codex."
      },
      {
        "id": "B",
        "content": "Midjourney."
      },
      {
        "id": "C",
        "content": "Whisper."
      },
      {
        "id": "D",
        "content": "Rytr."
      }
    ],
    "correctAnswer": "B",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-AI-70",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "Hệ thống khuyến nghị trên Youtube là khả năng nào sau đây của AI?",
    "options": [
      {
        "id": "A",
        "content": "Khả năng học."
      },
      {
        "id": "B",
        "content": "Khả năng hiểu ngôn ngữ."
      },
      {
        "id": "C",
        "content": "Khả năng giải quyết vấn đề."
      },
      {
        "id": "D",
        "content": "Khả năng nhận thức.\nCâu13. Phương án nào sau đây KHÔNG phải là ứng dụng của AI trong lĩnh vực sản xuất?\nA. Phân tích tâm lý công nhân.B. Kiếm tra chất lượng sản phẩm.\nC. Quản lý tồn kho và dự báo nhu cầu.D. Tối ưu hoá quá trình lắp ráp."
      }
    ],
    "correctAnswer": "A",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-AI-71",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "Phương án nào sau đây KHÔNG phải là ứng dụng của AI trong lĩnh vực sản xuất?",
    "options": [
      {
        "id": "A",
        "content": "Điều phối điều trị."
      },
      {
        "id": "B",
        "content": "Quản lí tồn kho và dự báo nhu cầu."
      },
      {
        "id": "C",
        "content": "Kiểm tra chất lượng sản phẩm."
      },
      {
        "id": "D",
        "content": "Tối ưu hoá quá trình lắp ráp."
      }
    ],
    "correctAnswer": "A",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-AI-72",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "Phương án nào dưới đây nêu đúng về khả năng suy luận của AI?",
    "options": [
      {
        "id": "A",
        "content": "Trích xuất thông tin từ dữ liệu để học và tích lũy kiến thức."
      },
      {
        "id": "B",
        "content": "Cảm nhận và hiểu biết về môi trường thông qua các cảm biến và thiết bị đầu vào."
      },
      {
        "id": "C",
        "content": "Vận dụng logic và tri thức để đưa ra quyết định hoặc kết luận."
      },
      {
        "id": "D",
        "content": "Tìm ra cách giải quyết các tình huống phức tạp dựa trên thông tin và tri thức."
      }
    ],
    "correctAnswer": "C",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-AI-73",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "Phát biểu nào sau đây phù hợp nhất khi nói về khả năng của Trí tuệ nhân tạo hẹp?",
    "options": [
      {
        "id": "A",
        "content": "Tự chuyển đổi để giải quyết các nhiệm vụ khác nhau."
      },
      {
        "id": "B",
        "content": "Suy luận và giải quyết các vấn đề phức tạp như con người."
      },
      {
        "id": "C",
        "content": "Hiểu ngôn ngữ tự nhiên và tạo ra văn bản giống con người."
      },
      {
        "id": "D",
        "content": "Giải quyết nhiệm vụ cụ thể theo những gì đã được học."
      }
    ],
    "correctAnswer": "D",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-AI-74",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "Ví dụ nào sau đây là một ứng dụng của AI yếu?",
    "options": [
      {
        "id": "A",
        "content": "Xe tự lái."
      },
      {
        "id": "B",
        "content": "Hệ thống AlphaGo của Google."
      },
      {
        "id": "C",
        "content": "MYCIN – hệ chuyên gia trong lĩnh vực y tế."
      },
      {
        "id": "D",
        "content": "Chatbot ChatGPT."
      }
    ],
    "correctAnswer": "C",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-AI-75",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "Phương án nào là phương án ĐÚNG khi nói về sự khác nhau giữa Trí tuệ nhân tạo hẹp (AI hẹp) và Trí tuệ nhân tạo tổng quát (AI mạnh)?",
    "options": [
      {
        "id": "A",
        "content": "AI hẹp chỉ thực hiện một nhiệm vụ cụ thể."
      },
      {
        "id": "B",
        "content": "AI mạnh thực hiện được một công việc giống như con người."
      },
      {
        "id": "C",
        "content": "AI hẹp có khả năng tự học."
      },
      {
        "id": "D",
        "content": "AI hẹp không thể ra quyết định."
      }
    ],
    "correctAnswer": "A",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-AI-76",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "ThongHieu",
    "content": "Hiện nay Trí tuệ nhân tạo KHÔNG có đặc trưng nào?",
    "options": [
      {
        "id": "A",
        "content": "Khả năng học và tích lũy tri thức."
      },
      {
        "id": "B",
        "content": "Khả năng hiểu ngôn ngữ của con người."
      },
      {
        "id": "C",
        "content": "Khả năng cảm nhận và thấu hiểu cảm xúc của con người một cách trọn vẹn."
      },
      {
        "id": "D",
        "content": "Khả năng giải quyết vấn đề.\n2. CÂU HỎI TRẮC NGHIỆM ĐÚNG/SAI"
      }
    ],
    "correctAnswer": "C",
    "hints": {
      "level1_concept": "Nhớ lại khái niệm và các đặc trưng nền tảng của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từ khóa trong câu hỏi (ví dụ: 'không phải', 'khái niệm', 'ứng dụng'), đối chiếu với các phương án để loại trừ câu sai.",
      "level3_steps": "Phân tích bản chất từng lựa chọn A, B, C, D để xác định phương án phù hợp nhất với chuẩn kiến thức Bộ GD&ĐT."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12A - Trí tuệ nhân tạo.",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-TF-01",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm Đúng / Sai (AI) (Tuần 7)",
    "chapterName": "Chủ đề 1: Giới thiệu Trí tuệ nhân tạo (Tin học 12)",
    "difficulty": "NhanBiet",
    "type": "true_false",
    "content": "Phát biểu sau đây đúng hay sai khi nói về AI?",
    "tfItems": [
      {
        "id": "a",
        "content": "AI là khả năng của máy tính thực hiện các công việc trí tuệ của con người.",
        "correctAnswer": true
      },
      {
        "id": "b",
        "content": "Mục đích của AI là xây dựng các phần mềm giúp máy tính có năng lực trí tuệ tương tự con người.",
        "correctAnswer": true
      },
      {
        "id": "c",
        "content": "Lịch sử đầu tiên của trí tuệ nhân tạo bắt đầu tại hội thảo MIT năm 1956.",
        "correctAnswer": false
      },
      {
        "id": "d",
        "content": "Hệ thống MYCIN trong y học và AlphaGo của Google là các ví dụ về AI yếu.",
        "correctAnswer": false
      }
    ],
    "hints": {
      "level1_concept": "Xác định các khái niệm, định lý và phạm vi nghiên cứu của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từng mệnh đề a), b), c), d), phân tích tính chính xác về mốc lịch sử, phân loại (AI hẹp/AI tổng quát) và các ứng dụng thực tế.",
      "level3_steps": "Đối chiếu nội dung phát biểu với chuẩn kiến thức Chuyên đề 12A để xác định Đúng hoặc Sai cho từng ý."
    },
    "explanation": "Đáp án chi tiết theo tài liệu Chuyên đề 12A:\n- Ý a) : Đúng (AI là khả năng của máy tính thực hiện các công việc trí tuệ của con người.)\n- Ý b) : Đúng (Mục đích của AI là xây dựng các phần mềm giúp máy tính có năng lực trí tuệ tương tự con người.)\n- Ý c) : Sai (Lịch sử đầu tiên của trí tuệ nhân tạo bắt đầu tại hội thảo MIT năm 1956.)\n- Ý d) : Sai (Hệ thống MYCIN trong y học và AlphaGo của Google là các ví dụ về AI yếu.)",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-TF-02",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm Đúng / Sai (AI) (Tuần 7)",
    "chapterName": "Chủ đề 1: Giới thiệu Trí tuệ nhân tạo (Tin học 12)",
    "difficulty": "NhanBiet",
    "type": "true_false",
    "content": "Đánh dấu đúng hoặc sai về một số lĩnh vực nghiên cứu phát triển AI?",
    "tfItems": [
      {
        "id": "a",
        "content": "Học máy là lĩnh vực nghiên cứu làm cho máy tính có khả năng học từ dữ liệu thu được.",
        "correctAnswer": true
      },
      {
        "id": "b",
        "content": "Xử lý ngôn ngữ tự nhiên là nghiên cứu các mô hình ngôn ngữ để máy tính và con người giao tiếp với nhau.",
        "correctAnswer": true
      },
      {
        "id": "c",
        "content": "Thị giác máy tính là lĩnh vực nghiên cứu phương pháp thu nhận và phân tích nhận dạng hình ảnh.",
        "correctAnswer": true
      },
      {
        "id": "d",
        "content": "AI tạo sinh chỉ tạo ra văn bản từ dữ liệu đã có.",
        "correctAnswer": false
      }
    ],
    "hints": {
      "level1_concept": "Xác định các khái niệm, định lý và phạm vi nghiên cứu của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từng mệnh đề a), b), c), d), phân tích tính chính xác về mốc lịch sử, phân loại (AI hẹp/AI tổng quát) và các ứng dụng thực tế.",
      "level3_steps": "Đối chiếu nội dung phát biểu với chuẩn kiến thức Chuyên đề 12A để xác định Đúng hoặc Sai cho từng ý."
    },
    "explanation": "Đáp án chi tiết theo tài liệu Chuyên đề 12A:\n- Ý a) : Đúng (Học máy là lĩnh vực nghiên cứu làm cho máy tính có khả năng học từ dữ liệu thu được.)\n- Ý b) : Đúng (Xử lý ngôn ngữ tự nhiên là nghiên cứu các mô hình ngôn ngữ để máy tính và con người giao tiếp với nhau.)\n- Ý c) : Đúng (Thị giác máy tính là lĩnh vực nghiên cứu phương pháp thu nhận và phân tích nhận dạng hình ảnh.)\n- Ý d) : Sai (AI tạo sinh chỉ tạo ra văn bản từ dữ liệu đã có.)",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-TF-03",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm Đúng / Sai (AI) (Tuần 7)",
    "chapterName": "Chủ đề 1: Giới thiệu Trí tuệ nhân tạo (Tin học 12)",
    "difficulty": "NhanBiet",
    "type": "true_false",
    "content": "Trong nhiều lĩnh vực khoa học công nghệ, hoạt động kinh tế - xã hội và đời sống con người đều có dấu ấn của AI. Đánh dấu đúng hoặc sai trong các phát biểu dưới đây.",
    "tfItems": [
      {
        "id": "a",
        "content": "Các nghiên cứu AI giúp phát triển robot thành “cobot” có thể hoạt động tự chủ và phối hợp cùng với con người.",
        "correctAnswer": true
      },
      {
        "id": "b",
        "content": "Tính năng mở khoá điện thoại thông minh bằng vân tay là một ứng dụng của AI trong lĩnh vực học máy.",
        "correctAnswer": false
      },
      {
        "id": "c",
        "content": "DeepMind của IBM là một hệ thống AI có thể “bắt chước” quá trình suy nghĩ của bộ não con người.",
        "correctAnswer": false
      },
      {
        "id": "d",
        "content": "Các công cụ AI tạo sinh có thể tạo ra những nội dung giả giống như thật.",
        "correctAnswer": true
      }
    ],
    "hints": {
      "level1_concept": "Xác định các khái niệm, định lý và phạm vi nghiên cứu của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từng mệnh đề a), b), c), d), phân tích tính chính xác về mốc lịch sử, phân loại (AI hẹp/AI tổng quát) và các ứng dụng thực tế.",
      "level3_steps": "Đối chiếu nội dung phát biểu với chuẩn kiến thức Chuyên đề 12A để xác định Đúng hoặc Sai cho từng ý."
    },
    "explanation": "Đáp án chi tiết theo tài liệu Chuyên đề 12A:\n- Ý a) : Đúng (Các nghiên cứu AI giúp phát triển robot thành “cobot” có thể hoạt động tự chủ và phối hợp cùng với con người.)\n- Ý b) : Sai (Tính năng mở khoá điện thoại thông minh bằng vân tay là một ứng dụng của AI trong lĩnh vực học máy.)\n- Ý c) : Sai (DeepMind của IBM là một hệ thống AI có thể “bắt chước” quá trình suy nghĩ của bộ não con người.)\n- Ý d) : Đúng (Các công cụ AI tạo sinh có thể tạo ra những nội dung giả giống như thật.)",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-TF-04",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm Đúng / Sai (AI) (Tuần 7)",
    "chapterName": "Chủ đề 1: Giới thiệu Trí tuệ nhân tạo (Tin học 12)",
    "difficulty": "NhanBiet",
    "type": "true_false",
    "content": "Một số lĩnh vực phát triển nhờ ứng dụng AI đúng hay sai?",
    "tfItems": [
      {
        "id": "a",
        "content": "AI giúp phát triển người máy thông minh.",
        "correctAnswer": true
      },
      {
        "id": "b",
        "content": "AI giúp chế tạo ra các nhạc cụ truyền thống.",
        "correctAnswer": false
      },
      {
        "id": "c",
        "content": "AI giúp phát triển một số sản phẩm, tiện ích thông minh.",
        "correctAnswer": true
      },
      {
        "id": "d",
        "content": "AI giúp phát triển các dịch vụ.",
        "correctAnswer": true
      }
    ],
    "hints": {
      "level1_concept": "Xác định các khái niệm, định lý và phạm vi nghiên cứu của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từng mệnh đề a), b), c), d), phân tích tính chính xác về mốc lịch sử, phân loại (AI hẹp/AI tổng quát) và các ứng dụng thực tế.",
      "level3_steps": "Đối chiếu nội dung phát biểu với chuẩn kiến thức Chuyên đề 12A để xác định Đúng hoặc Sai cho từng ý."
    },
    "explanation": "Đáp án chi tiết theo tài liệu Chuyên đề 12A:\n- Ý a) : Đúng (AI giúp phát triển người máy thông minh.)\n- Ý b) : Sai (AI giúp chế tạo ra các nhạc cụ truyền thống.)\n- Ý c) : Đúng (AI giúp phát triển một số sản phẩm, tiện ích thông minh.)\n- Ý d) : Đúng (AI giúp phát triển các dịch vụ.)",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-TF-05",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm Đúng / Sai (AI) (Tuần 7)",
    "chapterName": "Chủ đề 1: Giới thiệu Trí tuệ nhân tạo (Tin học 12)",
    "difficulty": "NhanBiet",
    "type": "true_false",
    "content": "Trí tuệ nhân tạo – AI (Artificial Intelligence) là khả năng của máy tính có thể làm những công việc mang tính trí tuệ con người. Đánh dấu đúng hoặc sai trong các phát biểu dưới đây.",
    "tfItems": [
      {
        "id": "a",
        "content": "Phần mềm máy tính AlphaGo của IBM đã đánh bại nhà vô địch cờ vây Lee Sedol vào năm 2016.",
        "correctAnswer": false
      },
      {
        "id": "b",
        "content": "Hệ chuyên gia MYCIN dựa vào những quy tắc suy diễn dưới dạng “IF … THEN …” để xác định một số loại vi khuẩn gây nhiễm trùng nặng.",
        "correctAnswer": true
      },
      {
        "id": "c",
        "content": "Hệ thống AI có các kĩ thuật, phương pháp phân tích dữ liệu từ đó trích xuất được tri thức, đề xuất cách giải quyết vấn đề và ra quyết định tối ưu để đạt được mục tiêu đặt ra.",
        "correctAnswer": true
      },
      {
        "id": "d",
        "content": "Người máy Xoxe có camera tích hợp công nghệ nhận dạng khuôn mặt và cảm xúc, do đó trong quá trình tương tác Xoxe có thể dự đoán độ tuổi, nhận biết ngôn ngữ cơ thể và phát hiện cảm xúc của con người.",
        "correctAnswer": true
      }
    ],
    "hints": {
      "level1_concept": "Xác định các khái niệm, định lý và phạm vi nghiên cứu của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từng mệnh đề a), b), c), d), phân tích tính chính xác về mốc lịch sử, phân loại (AI hẹp/AI tổng quát) và các ứng dụng thực tế.",
      "level3_steps": "Đối chiếu nội dung phát biểu với chuẩn kiến thức Chuyên đề 12A để xác định Đúng hoặc Sai cho từng ý."
    },
    "explanation": "Đáp án chi tiết theo tài liệu Chuyên đề 12A:\n- Ý a) : Sai (Phần mềm máy tính AlphaGo của IBM đã đánh bại nhà vô địch cờ vây Lee Sedol vào năm 2016.)\n- Ý b) : Đúng (Hệ chuyên gia MYCIN dựa vào những quy tắc suy diễn dưới dạng “IF … THEN …” để xác định một số loại vi khuẩn gây nhiễm trùng nặng.)\n- Ý c) : Đúng (Hệ thống AI có các kĩ thuật, phương pháp phân tích dữ liệu từ đó trích xuất được tri thức, đề xuất cách giải quyết vấn đề và ra quyết định tối ưu để đạt được mục tiêu đặt ra.)\n- Ý d) : Đúng (Người máy Xoxe có camera tích hợp công nghệ nhận dạng khuôn mặt và cảm xúc, do đó trong quá trình tương tác Xoxe có thể dự đoán độ tuổi, nhận biết ngôn ngữ cơ thể và phát hiện cảm xúc của con người.)",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-TF-06",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm Đúng / Sai (AI) (Tuần 7)",
    "chapterName": "Chủ đề 1: Giới thiệu Trí tuệ nhân tạo (Tin học 12)",
    "difficulty": "NhanBiet",
    "type": "true_false",
    "content": "Mục tiêu của việc phát triển ứng dụng AI là nhằm xây dựng các phần mềm giúp máy tính có được những năng lực trí tuệ như con người.",
    "tfItems": [
      {
        "id": "a",
        "content": "Khả năng học là khả năng vận dụng logic và tri thức để đưa ra quyết định hoặc kết luận.",
        "correctAnswer": false
      },
      {
        "id": "b",
        "content": "Các dây chuyền lắp ráp là các hệ thống có ứng dụng AI.",
        "correctAnswer": false
      },
      {
        "id": "c",
        "content": "Trí tuệ nhân tạo tổng quát hay Trí tuệ nhân tạo mạnh có khả năng tự học, tự thích nghi và thực hiện được nhiều công việc giống như con người.",
        "correctAnswer": true
      },
      {
        "id": "d",
        "content": "Các máy tìm kiếm thông tin trên Internet như Google, Bing có thể hiểu yêu cầu tra cứu của người dùng được đưa vào bằng văn bản hay bằng tiếng nói.",
        "correctAnswer": true
      }
    ],
    "hints": {
      "level1_concept": "Xác định các khái niệm, định lý và phạm vi nghiên cứu của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từng mệnh đề a), b), c), d), phân tích tính chính xác về mốc lịch sử, phân loại (AI hẹp/AI tổng quát) và các ứng dụng thực tế.",
      "level3_steps": "Đối chiếu nội dung phát biểu với chuẩn kiến thức Chuyên đề 12A để xác định Đúng hoặc Sai cho từng ý."
    },
    "explanation": "Đáp án chi tiết theo tài liệu Chuyên đề 12A:\n- Ý a) : Sai (Khả năng học là khả năng vận dụng logic và tri thức để đưa ra quyết định hoặc kết luận.)\n- Ý b) : Sai (Các dây chuyền lắp ráp là các hệ thống có ứng dụng AI.)\n- Ý c) : Đúng (Trí tuệ nhân tạo tổng quát hay Trí tuệ nhân tạo mạnh có khả năng tự học, tự thích nghi và thực hiện được nhiều công việc giống như con người.)\n- Ý d) : Đúng (Các máy tìm kiếm thông tin trên Internet như Google, Bing có thể hiểu yêu cầu tra cứu của người dùng được đưa vào bằng văn bản hay bằng tiếng nói.)",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-TF-07",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm Đúng / Sai (AI) (Tuần 7)",
    "chapterName": "Chủ đề 1: Giới thiệu Trí tuệ nhân tạo (Tin học 12)",
    "difficulty": "ThongHieu",
    "type": "true_false",
    "content": "Ngày nay, các ứng dụng AI đang trở thành phổ biến trong nhiều lĩnh vực khác nhau.",
    "tfItems": [
      {
        "id": "a",
        "content": "Robot Asimo của hãng Tesla là robot hình người đầu tiên trên thế giới được tích hợp một loạt ứng dụng AI như tự động điều khiển, nhận dạng hình ảnh, nhận dạng tiếng nói.",
        "correctAnswer": false
      },
      {
        "id": "b",
        "content": "Phiên bản Google dịch được dùng phổ biến hiện nay cho phép dịch nhiều dạng văn bản như các từ, cụm từ, tệp văn bản, trang web.",
        "correctAnswer": true
      },
      {
        "id": "c",
        "content": "Hệ chuyên gia MYCIN sử dụng các kĩ thuật Học máy.",
        "correctAnswer": false
      },
      {
        "id": "d",
        "content": "Facebook ứng dụng nhận dạng khuôn mặt để xác định và gán nhãn tên khá chính xác những người quen xuất hiện trong ảnh của người dùng đưa lên trang cá nhân.",
        "correctAnswer": true
      }
    ],
    "hints": {
      "level1_concept": "Xác định các khái niệm, định lý và phạm vi nghiên cứu của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từng mệnh đề a), b), c), d), phân tích tính chính xác về mốc lịch sử, phân loại (AI hẹp/AI tổng quát) và các ứng dụng thực tế.",
      "level3_steps": "Đối chiếu nội dung phát biểu với chuẩn kiến thức Chuyên đề 12A để xác định Đúng hoặc Sai cho từng ý."
    },
    "explanation": "Đáp án chi tiết theo tài liệu Chuyên đề 12A:\n- Ý a) : Sai (Robot Asimo của hãng Tesla là robot hình người đầu tiên trên thế giới được tích hợp một loạt ứng dụng AI như tự động điều khiển, nhận dạng hình ảnh, nhận dạng tiếng nói.)\n- Ý b) : Đúng (Phiên bản Google dịch được dùng phổ biến hiện nay cho phép dịch nhiều dạng văn bản như các từ, cụm từ, tệp văn bản, trang web.)\n- Ý c) : Sai (Hệ chuyên gia MYCIN sử dụng các kĩ thuật Học máy.)\n- Ý d) : Đúng (Facebook ứng dụng nhận dạng khuôn mặt để xác định và gán nhãn tên khá chính xác những người quen xuất hiện trong ảnh của người dùng đưa lên trang cá nhân.)",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-TF-08",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm Đúng / Sai (AI) (Tuần 7)",
    "chapterName": "Chủ đề 1: Giới thiệu Trí tuệ nhân tạo (Tin học 12)",
    "difficulty": "ThongHieu",
    "type": "true_false",
    "content": "Nhiều lĩnh vực khoa học, công nghệ và đời sống đã và đang nhận được rất nhiều lợi ích từ sự phát triển của AI.",
    "tfItems": [
      {
        "id": "a",
        "content": "Các chuyên gia y tế khẳng định phần mềm IBM Watson for Oncology đã góp phần nâng cao hiệu quả điều trị bệnh gan.",
        "correctAnswer": false
      },
      {
        "id": "b",
        "content": "Hệ thống nhận dạng chữ viết tay là một thành tựu của xử lí ngôn ngữ tự nhiên trong AI.",
        "correctAnswer": false
      },
      {
        "id": "c",
        "content": "Trong nông nghiệp, AI được sử dụng trong các trang trại thông minh để theo dõi những yếu tố có ảnh hưởng trực tiếp tới hiệu quả nuôi trồng.",
        "correctAnswer": true
      },
      {
        "id": "d",
        "content": "Trong lĩnh vực khoa học xã hội và nhân văn, AI được sử dụng để mô phỏng và mô hình hoá nhiều hiện tượng xã hội và nhân học.",
        "correctAnswer": true
      }
    ],
    "hints": {
      "level1_concept": "Xác định các khái niệm, định lý và phạm vi nghiên cứu của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từng mệnh đề a), b), c), d), phân tích tính chính xác về mốc lịch sử, phân loại (AI hẹp/AI tổng quát) và các ứng dụng thực tế.",
      "level3_steps": "Đối chiếu nội dung phát biểu với chuẩn kiến thức Chuyên đề 12A để xác định Đúng hoặc Sai cho từng ý."
    },
    "explanation": "Đáp án chi tiết theo tài liệu Chuyên đề 12A:\n- Ý a) : Sai (Các chuyên gia y tế khẳng định phần mềm IBM Watson for Oncology đã góp phần nâng cao hiệu quả điều trị bệnh gan.)\n- Ý b) : Sai (Hệ thống nhận dạng chữ viết tay là một thành tựu của xử lí ngôn ngữ tự nhiên trong AI.)\n- Ý c) : Đúng (Trong nông nghiệp, AI được sử dụng trong các trang trại thông minh để theo dõi những yếu tố có ảnh hưởng trực tiếp tới hiệu quả nuôi trồng.)\n- Ý d) : Đúng (Trong lĩnh vực khoa học xã hội và nhân văn, AI được sử dụng để mô phỏng và mô hình hoá nhiều hiện tượng xã hội và nhân học.)",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-TF-09",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm Đúng / Sai (AI) (Tuần 7)",
    "chapterName": "Chủ đề 1: Giới thiệu Trí tuệ nhân tạo (Tin học 12)",
    "difficulty": "ThongHieu",
    "type": "true_false",
    "content": "Sự phát triển của AI đã và đang diễn ra với tốc độ nhanh chóng, có tiềm năng cách mạng hoá nhiều lĩnh vực khoa học và đời sống nhưng cũng kéo theo những nguy cơ cần được cảnh báo.",
    "tfItems": [
      {
        "id": "a",
        "content": "ChatGPT là một ví dụ điển hình của AI tạo sinh.",
        "correctAnswer": true
      },
      {
        "id": "b",
        "content": "AI tạo sinh tập trung vào việc nghiên cứu làm cho máy tính có khả năng học từ dữ liệu thu được trong quá trình hoạt động để tự hoàn thiện và nâng cao năng lực nhận thức.",
        "correctAnswer": false
      },
      {
        "id": "c",
        "content": "AI có khả năng tự động hoá nhiều công việc, điều này làm tăng mối lo ngại về quyền riêng tư có khả năng bị lạm dụng.",
        "correctAnswer": false
      },
      {
        "id": "d",
        "content": "Những quyết định không chính xác do AI đưa ra có thể gây nguy hại trực tiếp cho con người, ví dụ chẩn đoán sai về tình trạng bệnh tật hay ra quyết định tấn công các mục tiêu dân sự trong xung đột vũ trang,…",
        "correctAnswer": true
      }
    ],
    "hints": {
      "level1_concept": "Xác định các khái niệm, định lý và phạm vi nghiên cứu của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từng mệnh đề a), b), c), d), phân tích tính chính xác về mốc lịch sử, phân loại (AI hẹp/AI tổng quát) và các ứng dụng thực tế.",
      "level3_steps": "Đối chiếu nội dung phát biểu với chuẩn kiến thức Chuyên đề 12A để xác định Đúng hoặc Sai cho từng ý."
    },
    "explanation": "Đáp án chi tiết theo tài liệu Chuyên đề 12A:\n- Ý a) : Đúng (ChatGPT là một ví dụ điển hình của AI tạo sinh.)\n- Ý b) : Sai (AI tạo sinh tập trung vào việc nghiên cứu làm cho máy tính có khả năng học từ dữ liệu thu được trong quá trình hoạt động để tự hoàn thiện và nâng cao năng lực nhận thức.)\n- Ý c) : Sai (AI có khả năng tự động hoá nhiều công việc, điều này làm tăng mối lo ngại về quyền riêng tư có khả năng bị lạm dụng.)\n- Ý d) : Đúng (Những quyết định không chính xác do AI đưa ra có thể gây nguy hại trực tiếp cho con người, ví dụ chẩn đoán sai về tình trạng bệnh tật hay ra quyết định tấn công các mục tiêu dân sự trong xung đột vũ trang,…)",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-TF-10",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm Đúng / Sai (AI) (Tuần 7)",
    "chapterName": "Chủ đề 1: Giới thiệu Trí tuệ nhân tạo (Tin học 12)",
    "difficulty": "ThongHieu",
    "type": "true_false",
    "content": "Phát biểu sau đây đúng hay sai  cảnh báo về ứng dụng AI?",
    "tfItems": [
      {
        "id": "a",
        "content": "AI có khả năng tự động hoá nhiều công việc, dẫn đến áp lực thất nghiệp",
        "correctAnswer": true
      },
      {
        "id": "b",
        "content": "Vi phạm quyền riêng tư khi dữ liệu cá nhân bị lạm dụng",
        "correctAnswer": true
      },
      {
        "id": "c",
        "content": "Đe dọa an ninh hệ thống khi bị tấn công xâm nhập hoặc thay đổi dữ liệu",
        "correctAnswer": true
      },
      {
        "id": "d",
        "content": "Có thể kiểm soát hoặc thay đổi ý thức, hành vi con người một cách không mong muốn",
        "correctAnswer": true
      }
    ],
    "hints": {
      "level1_concept": "Xác định các khái niệm, định lý và phạm vi nghiên cứu của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từng mệnh đề a), b), c), d), phân tích tính chính xác về mốc lịch sử, phân loại (AI hẹp/AI tổng quát) và các ứng dụng thực tế.",
      "level3_steps": "Đối chiếu nội dung phát biểu với chuẩn kiến thức Chuyên đề 12A để xác định Đúng hoặc Sai cho từng ý."
    },
    "explanation": "Đáp án chi tiết theo tài liệu Chuyên đề 12A:\n- Ý a) : Đúng (AI có khả năng tự động hoá nhiều công việc, dẫn đến áp lực thất nghiệp)\n- Ý b) : Đúng (Vi phạm quyền riêng tư khi dữ liệu cá nhân bị lạm dụng)\n- Ý c) : Đúng (Đe dọa an ninh hệ thống khi bị tấn công xâm nhập hoặc thay đổi dữ liệu)\n- Ý d) : Đúng (Có thể kiểm soát hoặc thay đổi ý thức, hành vi con người một cách không mong muốn)",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-TF-11",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm Đúng / Sai (AI) (Tuần 7)",
    "chapterName": "Chủ đề 1: Giới thiệu Trí tuệ nhân tạo (Tin học 12)",
    "difficulty": "ThongHieu",
    "type": "true_false",
    "content": "Nhiều lĩnh vực khoa học, công nghệ và đời sống đã và đang nhận được rất nhiều lợi ích từ sự phát triển của AI.",
    "tfItems": [
      {
        "id": "a",
        "content": "Các chuyên gia y tế khẳng định phần mềm IBM Watson for Oncology đã góp phần nâng cao hiệu quả điều trị bệnh gan.",
        "correctAnswer": false
      },
      {
        "id": "b",
        "content": "Hệ thống nhận dạng chữ viết tay là một thành tựu của xử lí ngôn ngữ tự nhiên trong AI.",
        "correctAnswer": false
      },
      {
        "id": "c",
        "content": "Trong nông nghiệp, AI được sử dụng trong các trang trại thông minh để theo dõi những yếu tố có ảnh hưởng trực tiếp tới hiệu quả nuôi trồng.",
        "correctAnswer": true
      },
      {
        "id": "d",
        "content": "Trong lĩnh vực khoa học xã hội và nhân văn, AI được sử dụng để mô phỏng và mô hình hoá nhiều hiện tượng xã hội và nhân học.",
        "correctAnswer": true
      }
    ],
    "hints": {
      "level1_concept": "Xác định các khái niệm, định lý và phạm vi nghiên cứu của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từng mệnh đề a), b), c), d), phân tích tính chính xác về mốc lịch sử, phân loại (AI hẹp/AI tổng quát) và các ứng dụng thực tế.",
      "level3_steps": "Đối chiếu nội dung phát biểu với chuẩn kiến thức Chuyên đề 12A để xác định Đúng hoặc Sai cho từng ý."
    },
    "explanation": "Đáp án chi tiết theo tài liệu Chuyên đề 12A:\n- Ý a) : Sai (Các chuyên gia y tế khẳng định phần mềm IBM Watson for Oncology đã góp phần nâng cao hiệu quả điều trị bệnh gan.)\n- Ý b) : Sai (Hệ thống nhận dạng chữ viết tay là một thành tựu của xử lí ngôn ngữ tự nhiên trong AI.)\n- Ý c) : Đúng (Trong nông nghiệp, AI được sử dụng trong các trang trại thông minh để theo dõi những yếu tố có ảnh hưởng trực tiếp tới hiệu quả nuôi trồng.)\n- Ý d) : Đúng (Trong lĩnh vực khoa học xã hội và nhân văn, AI được sử dụng để mô phỏng và mô hình hoá nhiều hiện tượng xã hội và nhân học.)",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-TF-12",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm Đúng / Sai (AI) (Tuần 7)",
    "chapterName": "Chủ đề 1: Giới thiệu Trí tuệ nhân tạo (Tin học 12)",
    "difficulty": "ThongHieu",
    "type": "true_false",
    "content": "Sự phát triển của AI đã và đang diễn ra với tốc độ nhanh chóng, có tiềm năng cách mạng hoá nhiều lĩnh vực khoa học và đời sống nhưng cũng kéo theo những nguy cơ cần được cảnh báo.",
    "tfItems": [
      {
        "id": "a",
        "content": "ChatGPT là một ví dụ điển hình của AI tạo sinh.",
        "correctAnswer": true
      },
      {
        "id": "b",
        "content": "AI tạo sinh tập trung vào việc nghiên cứu làm cho máy tính có khả năng học từ dữ liệu thu được trong quá trình hoạt động để tự hoàn thiện và nâng cao năng lực nhận thức.",
        "correctAnswer": false
      },
      {
        "id": "c",
        "content": "AI có khả năng tự động hoá nhiều công việc, điều này làm tăng mối lo ngại về quyền riêng tư có khả năng bị lạm dụng.",
        "correctAnswer": false
      },
      {
        "id": "d",
        "content": "Những quyết định không chính xác do AI đưa ra có thể gây nguy hại trực tiếp cho con người, ví dụ chẩn đoán sai về tình trạng bệnh tật hay ra quyết định tấn công các mục tiêu dân sự trong xung đột vũ trang,…",
        "correctAnswer": true
      }
    ],
    "hints": {
      "level1_concept": "Xác định các khái niệm, định lý và phạm vi nghiên cứu của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từng mệnh đề a), b), c), d), phân tích tính chính xác về mốc lịch sử, phân loại (AI hẹp/AI tổng quát) và các ứng dụng thực tế.",
      "level3_steps": "Đối chiếu nội dung phát biểu với chuẩn kiến thức Chuyên đề 12A để xác định Đúng hoặc Sai cho từng ý."
    },
    "explanation": "Đáp án chi tiết theo tài liệu Chuyên đề 12A:\n- Ý a) : Đúng (ChatGPT là một ví dụ điển hình của AI tạo sinh.)\n- Ý b) : Sai (AI tạo sinh tập trung vào việc nghiên cứu làm cho máy tính có khả năng học từ dữ liệu thu được trong quá trình hoạt động để tự hoàn thiện và nâng cao năng lực nhận thức.)\n- Ý c) : Sai (AI có khả năng tự động hoá nhiều công việc, điều này làm tăng mối lo ngại về quyền riêng tư có khả năng bị lạm dụng.)\n- Ý d) : Đúng (Những quyết định không chính xác do AI đưa ra có thể gây nguy hại trực tiếp cho con người, ví dụ chẩn đoán sai về tình trạng bệnh tật hay ra quyết định tấn công các mục tiêu dân sự trong xung đột vũ trang,…)",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-TF-13",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm Đúng / Sai (AI) (Tuần 7)",
    "chapterName": "Chủ đề 1: Giới thiệu Trí tuệ nhân tạo (Tin học 12)",
    "difficulty": "ThongHieu",
    "type": "true_false",
    "content": "Trong bối cảnh ngành công nghiệp 4.0 phát triển mạnh mẽ, Trí tuệ nhân tạo đang được ứng dụng trong nhiều lĩnh vực khác nhau của đời sống. Trong giờ học Tin học, một nhóm học sinh lớp 12 đang thảo luận về AI và đưa ra một số nhận xét về ứng dụng của AI trong các lĩnh vực như sau:",
    "tfItems": [
      {
        "id": "a",
        "content": "Robot Asimo của hãng Tesla là robot hình người đầu tiên trên thế giới được tích hợp một loạt ứng dụng AI như tự động điều khiển, nhận dạng hình ảnh, nhận dạng tiếng nói.",
        "correctAnswer": false
      },
      {
        "id": "b",
        "content": "Hệ chuyên gia MYCIN sử dụng các kĩ thuật Học máy.",
        "correctAnswer": false
      },
      {
        "id": "c",
        "content": "Phiên bản Google dịch được dùng phổ biến hiện nay cho phép dịch nhiều dạng văn bản như các từ, cụm từ, tệp văn bản, trang web.",
        "correctAnswer": true
      },
      {
        "id": "d",
        "content": "Facebook ứng dụng nhận dạng khuôn mặt để xác định và gắn nhãn tên khá chính xác những người quen xuất hiện trong ảnh của người dùng đưa lên trang cá nhân.",
        "correctAnswer": true
      }
    ],
    "hints": {
      "level1_concept": "Xác định các khái niệm, định lý và phạm vi nghiên cứu của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từng mệnh đề a), b), c), d), phân tích tính chính xác về mốc lịch sử, phân loại (AI hẹp/AI tổng quát) và các ứng dụng thực tế.",
      "level3_steps": "Đối chiếu nội dung phát biểu với chuẩn kiến thức Chuyên đề 12A để xác định Đúng hoặc Sai cho từng ý."
    },
    "explanation": "Đáp án chi tiết theo tài liệu Chuyên đề 12A:\n- Ý a) : Sai (Robot Asimo của hãng Tesla là robot hình người đầu tiên trên thế giới được tích hợp một loạt ứng dụng AI như tự động điều khiển, nhận dạng hình ảnh, nhận dạng tiếng nói.)\n- Ý b) : Sai (Hệ chuyên gia MYCIN sử dụng các kĩ thuật Học máy.)\n- Ý c) : Đúng (Phiên bản Google dịch được dùng phổ biến hiện nay cho phép dịch nhiều dạng văn bản như các từ, cụm từ, tệp văn bản, trang web.)\n- Ý d) : Đúng (Facebook ứng dụng nhận dạng khuôn mặt để xác định và gắn nhãn tên khá chính xác những người quen xuất hiện trong ảnh của người dùng đưa lên trang cá nhân.)",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-TF-14",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm Đúng / Sai (AI) (Tuần 7)",
    "chapterName": "Chủ đề 1: Giới thiệu Trí tuệ nhân tạo (Tin học 12)",
    "difficulty": "ThongHieu",
    "type": "true_false",
    "content": "Mục tiêu của AI là giúp máy tính có khả năng “tư duy” và học hỏi từ dữ liệu để tự động thực hiện các nhiệm vụ, đưa ra quyết định, giải quyết vấn đề, và làm việc một cách hiệu quả và chính xác. Theo em, nhận định dưới đây là đúng hay sai?",
    "tfItems": [
      {
        "id": "a",
        "content": "Khả năng học là khả năng vận dụng logic và tri thức để đưa ra quyết định hoặc kết luận.",
        "correctAnswer": false
      },
      {
        "id": "b",
        "content": "Trí tuệ nhân tạo tổng quát hay Trí tuệ nhân tạo mạnh có khả năng tự học, tự thích nghi và thực hiện được nhiều công việc giống như con người.",
        "correctAnswer": true
      },
      {
        "id": "c",
        "content": "Các dây chuyền lắp ráp là các hệ thống có ứng dụng AI.",
        "correctAnswer": false
      },
      {
        "id": "d",
        "content": "Các máy tìm kiếm thông tin trên Internet như Google, Bing có thể hiểu yêu cầu tra cứu của người dùng được đưa vào bằng văn bản hay bằng tiếng nói.",
        "correctAnswer": true
      }
    ],
    "hints": {
      "level1_concept": "Xác định các khái niệm, định lý và phạm vi nghiên cứu của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từng mệnh đề a), b), c), d), phân tích tính chính xác về mốc lịch sử, phân loại (AI hẹp/AI tổng quát) và các ứng dụng thực tế.",
      "level3_steps": "Đối chiếu nội dung phát biểu với chuẩn kiến thức Chuyên đề 12A để xác định Đúng hoặc Sai cho từng ý."
    },
    "explanation": "Đáp án chi tiết theo tài liệu Chuyên đề 12A:\n- Ý a) : Sai (Khả năng học là khả năng vận dụng logic và tri thức để đưa ra quyết định hoặc kết luận.)\n- Ý b) : Đúng (Trí tuệ nhân tạo tổng quát hay Trí tuệ nhân tạo mạnh có khả năng tự học, tự thích nghi và thực hiện được nhiều công việc giống như con người.)\n- Ý c) : Sai (Các dây chuyền lắp ráp là các hệ thống có ứng dụng AI.)\n- Ý d) : Đúng (Các máy tìm kiếm thông tin trên Internet như Google, Bing có thể hiểu yêu cầu tra cứu của người dùng được đưa vào bằng văn bản hay bằng tiếng nói.)",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-TF-15",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm Đúng / Sai (AI) (Tuần 7)",
    "chapterName": "Chủ đề 1: Giới thiệu Trí tuệ nhân tạo (Tin học 12)",
    "difficulty": "VanDung",
    "type": "true_false",
    "content": "Một nhóm học sinh lớp 12 đang thảo luận về AI (trí tuệ nhân tạo) trong giờ học Tin học. Bạn Minh cho rằng AI là một dạng máy móc có thể suy nghĩ và có cảm xúc giống con người. Bạn Linh lại nghĩ rằng AI chỉ đơn giản là các chương trình máy tính làm theo lệnh có sẵn mà không có khả năng học hỏi hoặc tự cải thiện. Trong khi đó, thầy giáo giải thích rằng AI thực chất là một hệ thống có khả năng xử lý dữ liệu, học hỏi từ kinh nghiệm và tự đưa ra quyết định dựa trên thông tin mà nó nhận được. Thầy cũng nhấn mạnh rằng AI có nhiều ứng dụng trong thực tế như trong ô tô tự lái, nhận diện giọng nói, và hệ thống gợi ý trên các trang thương mại điện tử.",
    "tfItems": [
      {
        "id": "a",
        "content": "AI có khả năng suy nghĩ và cảm xúc giống con người, như bạn Minh đã nghĩ.",
        "correctAnswer": false
      },
      {
        "id": "b",
        "content": "AI chỉ là các chương trình được lập trình trước mà không có khả năng tự học, như bạn Linh đã nói.",
        "correctAnswer": false
      },
      {
        "id": "c",
        "content": "AI có thể đưa ra quyết định dựa trên dữ liệu và kinh nghiệm mà nó học được.",
        "correctAnswer": true
      },
      {
        "id": "d",
        "content": "Ứng dụng của AI trong thực tế bao gồm ô tô tự lái, nhận diện giọng nói và hệ thống gợi ý trên các trang web thương mại điện tử.",
        "correctAnswer": true
      }
    ],
    "hints": {
      "level1_concept": "Xác định các khái niệm, định lý và phạm vi nghiên cứu của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từng mệnh đề a), b), c), d), phân tích tính chính xác về mốc lịch sử, phân loại (AI hẹp/AI tổng quát) và các ứng dụng thực tế.",
      "level3_steps": "Đối chiếu nội dung phát biểu với chuẩn kiến thức Chuyên đề 12A để xác định Đúng hoặc Sai cho từng ý."
    },
    "explanation": "Đáp án chi tiết theo tài liệu Chuyên đề 12A:\n- Ý a) : Sai (AI có khả năng suy nghĩ và cảm xúc giống con người, như bạn Minh đã nghĩ.)\n- Ý b) : Sai (AI chỉ là các chương trình được lập trình trước mà không có khả năng tự học, như bạn Linh đã nói.)\n- Ý c) : Đúng (AI có thể đưa ra quyết định dựa trên dữ liệu và kinh nghiệm mà nó học được.)\n- Ý d) : Đúng (Ứng dụng của AI trong thực tế bao gồm ô tô tự lái, nhận diện giọng nói và hệ thống gợi ý trên các trang web thương mại điện tử.)",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-TF-16",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm Đúng / Sai (AI) (Tuần 7)",
    "chapterName": "Chủ đề 1: Giới thiệu Trí tuệ nhân tạo (Tin học 12)",
    "difficulty": "VanDung",
    "type": "true_false",
    "content": "Trí tuệ nhân tạo AI đang cách mạng hóa ngành giáo dục bằng cách cá nhân hóa quá trình học tập và phát triển các công cụ học tập thông minh, nâng cao hiệu quả giảng dạy và học tập. Sau đây là các phát biểu về những ảnh hưởng của AI đối với ngành giáo dục.",
    "tfItems": [
      {
        "id": "a",
        "content": "AI có thể tự động đánh giá kế quả học tập của học sinh.",
        "correctAnswer": true
      },
      {
        "id": "b",
        "content": "AI thay thế hoàn toàn vai trò của giáo viên trong lớp học.",
        "correctAnswer": false
      },
      {
        "id": "c",
        "content": "AI có thể cá nhân hóa việc học tập mỗi học sinh.",
        "correctAnswer": true
      },
      {
        "id": "d",
        "content": "AI tự động giải quyết mọi vấn đề trong giáo dục.",
        "correctAnswer": false
      }
    ],
    "hints": {
      "level1_concept": "Xác định các khái niệm, định lý và phạm vi nghiên cứu của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từng mệnh đề a), b), c), d), phân tích tính chính xác về mốc lịch sử, phân loại (AI hẹp/AI tổng quát) và các ứng dụng thực tế.",
      "level3_steps": "Đối chiếu nội dung phát biểu với chuẩn kiến thức Chuyên đề 12A để xác định Đúng hoặc Sai cho từng ý."
    },
    "explanation": "Đáp án chi tiết theo tài liệu Chuyên đề 12A:\n- Ý a) : Đúng (AI có thể tự động đánh giá kế quả học tập của học sinh.)\n- Ý b) : Sai (AI thay thế hoàn toàn vai trò của giáo viên trong lớp học.)\n- Ý c) : Đúng (AI có thể cá nhân hóa việc học tập mỗi học sinh.)\n- Ý d) : Sai (AI tự động giải quyết mọi vấn đề trong giáo dục.)",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-TF-17",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm Đúng / Sai (AI) (Tuần 7)",
    "chapterName": "Chủ đề 1: Giới thiệu Trí tuệ nhân tạo (Tin học 12)",
    "difficulty": "VanDung",
    "type": "true_false",
    "content": "Trí tuệ nhân tạo (AI) đang cải thiện ngành tài chính, ngân hàng bằng cách tăng cường an ninh giao dịch, dự đoán rủi ro tài chính và cung cấp dịch vụ khách hàng tự động thông qua Chatbots. Sau đây là các phát biểu về những ứng dụng của AI đối với ngành tài chính, ngân hàng.",
    "tfItems": [
      {
        "id": "a",
        "content": "AI hỗ trợ tự động hóa các quy trình thủ công để nâng cao trải nghiệm khách hàng.",
        "correctAnswer": true
      },
      {
        "id": "b",
        "content": "AI hỗ trợ phân tích và dự báo xu thế thị trường để tối ưu hóa hoạt động kinh hoanh.",
        "correctAnswer": true
      },
      {
        "id": "c",
        "content": "AI không có khả năng phát hiện gian lận trong các giao dịch tài chính.",
        "correctAnswer": false
      },
      {
        "id": "d",
        "content": "AI thay thế hoàn toàn con người trong việc ra quyết định giao dịch.",
        "correctAnswer": false
      }
    ],
    "hints": {
      "level1_concept": "Xác định các khái niệm, định lý và phạm vi nghiên cứu của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từng mệnh đề a), b), c), d), phân tích tính chính xác về mốc lịch sử, phân loại (AI hẹp/AI tổng quát) và các ứng dụng thực tế.",
      "level3_steps": "Đối chiếu nội dung phát biểu với chuẩn kiến thức Chuyên đề 12A để xác định Đúng hoặc Sai cho từng ý."
    },
    "explanation": "Đáp án chi tiết theo tài liệu Chuyên đề 12A:\n- Ý a) : Đúng (AI hỗ trợ tự động hóa các quy trình thủ công để nâng cao trải nghiệm khách hàng.)\n- Ý b) : Đúng (AI hỗ trợ phân tích và dự báo xu thế thị trường để tối ưu hóa hoạt động kinh hoanh.)\n- Ý c) : Sai (AI không có khả năng phát hiện gian lận trong các giao dịch tài chính.)\n- Ý d) : Sai (AI thay thế hoàn toàn con người trong việc ra quyết định giao dịch.)",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-TF-18",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm Đúng / Sai (AI) (Tuần 7)",
    "chapterName": "Chủ đề 1: Giới thiệu Trí tuệ nhân tạo (Tin học 12)",
    "difficulty": "VanDung",
    "type": "true_false",
    "content": "Trí tuệ nhân tạo (AI) đang nâng cao chất lượng ngành y tế thông qua phân tích dữ liệu y tế lớn, phát hiện sớm bệnh tật và tối ưu hóa quy trính chăm sóc bệnh nhân. Sau đây là các phát biểu về những ứng dụng của AI đối với ngành y tế.",
    "tfItems": [
      {
        "id": "a",
        "content": "Hỗ trợ giao tiếp và thấu hiểu cảm xúc bệnh nhân.",
        "correctAnswer": false
      },
      {
        "id": "b",
        "content": "Đưa ra chẩn đoán y tế cuối cùng.",
        "correctAnswer": false
      },
      {
        "id": "c",
        "content": "Phân tích hình ảnh y tế và đưa ra chuẩn đoán bệnh.",
        "correctAnswer": true
      },
      {
        "id": "d",
        "content": "Hỗ trợ bác sĩ thực hiện các thủ thuật y tế phức tạp.",
        "correctAnswer": true
      }
    ],
    "hints": {
      "level1_concept": "Xác định các khái niệm, định lý và phạm vi nghiên cứu của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từng mệnh đề a), b), c), d), phân tích tính chính xác về mốc lịch sử, phân loại (AI hẹp/AI tổng quát) và các ứng dụng thực tế.",
      "level3_steps": "Đối chiếu nội dung phát biểu với chuẩn kiến thức Chuyên đề 12A để xác định Đúng hoặc Sai cho từng ý."
    },
    "explanation": "Đáp án chi tiết theo tài liệu Chuyên đề 12A:\n- Ý a) : Sai (Hỗ trợ giao tiếp và thấu hiểu cảm xúc bệnh nhân.)\n- Ý b) : Sai (Đưa ra chẩn đoán y tế cuối cùng.)\n- Ý c) : Đúng (Phân tích hình ảnh y tế và đưa ra chuẩn đoán bệnh.)\n- Ý d) : Đúng (Hỗ trợ bác sĩ thực hiện các thủ thuật y tế phức tạp.)",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-TF-19",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm Đúng / Sai (AI) (Tuần 7)",
    "chapterName": "Chủ đề 1: Giới thiệu Trí tuệ nhân tạo (Tin học 12)",
    "difficulty": "VanDung",
    "type": "true_false",
    "content": "Trí tuệ nhân tạo (AI) mang lại những ảnh hưởng tích cực như tăng cường hiệu quả công việc và cải thiện chất lượng cuộc sống. Tuy nhiên, AI cũng gây ra những thách thức về việc làm và quyền riêng tư của con người. Sau đây là các phát biểu về những ảnh hưởng của AI đối với con người.",
    "tfItems": [
      {
        "id": "a",
        "content": "Con người có thể bị mất việc bởi AI.",
        "correctAnswer": true
      },
      {
        "id": "b",
        "content": "AI luôn công bằng khi áp dụng trong hệ thống hỗ trợ tuyển dụng.",
        "correctAnswer": false
      },
      {
        "id": "c",
        "content": "Không thể sử dụng AI để giả mạo giọng nói, khuôn mặt.",
        "correctAnswer": false
      },
      {
        "id": "d",
        "content": "AI có thể thu thập thông tư riêng tư của con người.",
        "correctAnswer": true
      }
    ],
    "hints": {
      "level1_concept": "Xác định các khái niệm, định lý và phạm vi nghiên cứu của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từng mệnh đề a), b), c), d), phân tích tính chính xác về mốc lịch sử, phân loại (AI hẹp/AI tổng quát) và các ứng dụng thực tế.",
      "level3_steps": "Đối chiếu nội dung phát biểu với chuẩn kiến thức Chuyên đề 12A để xác định Đúng hoặc Sai cho từng ý."
    },
    "explanation": "Đáp án chi tiết theo tài liệu Chuyên đề 12A:\n- Ý a) : Đúng (Con người có thể bị mất việc bởi AI.)\n- Ý b) : Sai (AI luôn công bằng khi áp dụng trong hệ thống hỗ trợ tuyển dụng.)\n- Ý c) : Sai (Không thể sử dụng AI để giả mạo giọng nói, khuôn mặt.)\n- Ý d) : Đúng (AI có thể thu thập thông tư riêng tư của con người.)",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-TF-20",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm Đúng / Sai (AI) (Tuần 7)",
    "chapterName": "Chủ đề 1: Giới thiệu Trí tuệ nhân tạo (Tin học 12)",
    "difficulty": "VanDung",
    "type": "true_false",
    "content": "Công ty A triển khai một hệ thống AI để phân loại hồ sơ xin việc. Hệ thống AI này được huấn luyện trên một bộ dữ liệu lớn từ các hồ sơ xin việc trong quá khứ và đã giúp công ty chọn lọc được ứng viên phù hợp hơn dựa trên các tiêu chí mà hệ thống tự học từ dữ liệu. Sau một thời gian sử dụng, công ty nhận ra rằng hệ thống có xu hướng ưu tiên những ứng viên có hồ sơ tương tự với những nhân viên đã được tuyển dụng thành công trước đó, điều này dẫn đến việc ứng viên được chọn không đa dạng về hồ sơ và trình độ.",
    "tfItems": [
      {
        "id": "a",
        "content": "Hệ thống AI của công ty A có khả năng tự học và tự điều chỉnh các tiêu chí đánh giá ứng viên mà không cần sự can thiệp từ con người.",
        "correctAnswer": false
      },
      {
        "id": "b",
        "content": "AI của công ty A có thể tạo ra kết quả không công bằng, thiên vị nếu dữ liệu huấn luyện ban đầu có sự thiên lệch.",
        "correctAnswer": true
      },
      {
        "id": "c",
        "content": "AI của công ty A chỉ đơn giản là làm theo các quy tắc cố định và không thể thích ứng với dữ liệu mới.",
        "correctAnswer": false
      },
      {
        "id": "d",
        "content": "Một cách để khắc phục vấn đề thiên lệch trong AI là cung cấp cho hệ thống dữ liệu huấn luyện đa dạng và được cân bằng tốt.",
        "correctAnswer": true
      }
    ],
    "hints": {
      "level1_concept": "Xác định các khái niệm, định lý và phạm vi nghiên cứu của Trí tuệ nhân tạo (AI) trong chương trình Tin học 12.",
      "level2_formula": "Đọc kỹ từng mệnh đề a), b), c), d), phân tích tính chính xác về mốc lịch sử, phân loại (AI hẹp/AI tổng quát) và các ứng dụng thực tế.",
      "level3_steps": "Đối chiếu nội dung phát biểu với chuẩn kiến thức Chuyên đề 12A để xác định Đúng hoặc Sai cho từng ý."
    },
    "explanation": "Đáp án chi tiết theo tài liệu Chuyên đề 12A:\n- Ý a) : Sai (Hệ thống AI của công ty A có khả năng tự học và tự điều chỉnh các tiêu chí đánh giá ứng viên mà không cần sự can thiệp từ con người.)\n- Ý b) : Đúng (AI của công ty A có thể tạo ra kết quả không công bằng, thiên vị nếu dữ liệu huấn luyện ban đầu có sự thiên lệch.)\n- Ý c) : Sai (AI của công ty A chỉ đơn giản là làm theo các quy tắc cố định và không thể thích ứng với dữ liệu mới.)\n- Ý d) : Đúng (Một cách để khắc phục vấn đề thiên lệch trong AI là cung cấp cho hệ thống dữ liệu huấn luyện đa dạng và được cân bằng tốt.)",
    "sourceDocTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)"
  },
  {
    "id": "Q-TIN-NET-01",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "content": "Lợi ích nào sau đây là quan trọng nhất của mạng xã hội là gì?",
    "options": [
      {
        "id": "A",
        "content": "Cập nhật tin tức và xu hướng nhanh nhất; kết nối với nhiều người."
      },
      {
        "id": "B",
        "content": "Học hỏi những kỹ năng khác nhau; chia sẻ các bức ảnh và kỷ niệm."
      },
      {
        "id": "C",
        "content": "Tìm hiểu về các chủ đề mới; chơi các trò chơi."
      },
      {
        "id": "D",
        "content": "Tham gia các cộng đồng và mở rộng cơ hội nghề nghiệp."
      }
    ],
    "correctAnswer": "A",
    "hints": {
      "level1_concept": "Nhớ lại định nghĩa và các đặc trưng cốt lõi về thiết bị mạng (Switch, Modem, Access Point, Router) hoặc giao thức (TCP/IP, IP, DNS) trong Tin học 12.",
      "level2_formula": "Phân tích chức năng cụ thể của thiết bị/giao thức được đề cập trong câu hỏi để loại trừ phương án sai.",
      "level3_steps": "Xem xét mối liên hệ giữa dữ kiện đề bài và từng lựa chọn A, B, C, D để tìm phương án chính xác nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12B - Kết nối mạng.",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-NET-02",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "content": "Mạng LAN là viết tắt của cụm từ nào?",
    "options": [
      {
        "id": "A",
        "content": "Local Arian Network"
      },
      {
        "id": "B",
        "content": "Lomal Area Network"
      },
      {
        "id": "C",
        "content": "Local Area ."
      },
      {
        "id": "D",
        "content": "Local Area Network"
      }
    ],
    "correctAnswer": "D",
    "hints": {
      "level1_concept": "Nhớ lại định nghĩa và các đặc trưng cốt lõi về thiết bị mạng (Switch, Modem, Access Point, Router) hoặc giao thức (TCP/IP, IP, DNS) trong Tin học 12.",
      "level2_formula": "Phân tích chức năng cụ thể của thiết bị/giao thức được đề cập trong câu hỏi để loại trừ phương án sai.",
      "level3_steps": "Xem xét mối liên hệ giữa dữ kiện đề bài và từng lựa chọn A, B, C, D để tìm phương án chính xác nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12B - Kết nối mạng.",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-NET-03",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "content": "Máy tính kết nối với nhau để:",
    "options": [
      {
        "id": "A",
        "content": "Chia sẻ các thiết bị"
      },
      {
        "id": "B",
        "content": "Tiết kiệm điện"
      },
      {
        "id": "C",
        "content": "Trao đổi dữ liệu"
      },
      {
        "id": "D",
        "content": "Chia sẻ các thiết bị và trao đổi dữ liệu"
      }
    ],
    "correctAnswer": "D",
    "hints": {
      "level1_concept": "Nhớ lại định nghĩa và các đặc trưng cốt lõi về thiết bị mạng (Switch, Modem, Access Point, Router) hoặc giao thức (TCP/IP, IP, DNS) trong Tin học 12.",
      "level2_formula": "Phân tích chức năng cụ thể của thiết bị/giao thức được đề cập trong câu hỏi để loại trừ phương án sai.",
      "level3_steps": "Xem xét mối liên hệ giữa dữ kiện đề bài và từng lựa chọn A, B, C, D để tìm phương án chính xác nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12B - Kết nối mạng.",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-NET-04",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "content": "Trường hợp nào không thích hợp để sử dụng mạng LAN?",
    "options": [
      {
        "id": "A",
        "content": "Tòa nhà"
      },
      {
        "id": "B",
        "content": "Cơ quan"
      },
      {
        "id": "C",
        "content": "Nhà riêng"
      },
      {
        "id": "D",
        "content": "Quận/huyện"
      }
    ],
    "correctAnswer": "D",
    "hints": {
      "level1_concept": "Nhớ lại định nghĩa và các đặc trưng cốt lõi về thiết bị mạng (Switch, Modem, Access Point, Router) hoặc giao thức (TCP/IP, IP, DNS) trong Tin học 12.",
      "level2_formula": "Phân tích chức năng cụ thể của thiết bị/giao thức được đề cập trong câu hỏi để loại trừ phương án sai.",
      "level3_steps": "Xem xét mối liên hệ giữa dữ kiện đề bài và từng lựa chọn A, B, C, D để tìm phương án chính xác nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12B - Kết nối mạng.",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-NET-05",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "content": "Phát biểu nào sau đây không chính xác?",
    "options": [
      {
        "id": "A",
        "content": "Mạng không dây thuận tiện cho những người di chuyển nhiều."
      },
      {
        "id": "B",
        "content": "Mạng không dây dễ dàng lắp đặt hơn vì không cần khoan đục và lắp đặt đường dây."
      },
      {
        "id": "C",
        "content": "Mạng không dây thường được sử dụng cho các thiết bị di động như máy tính bảng, điện thoại,..."
      },
      {
        "id": "D",
        "content": "Mạng không dây nhanh và ổn định hơn mạng có dây."
      }
    ],
    "correctAnswer": "D",
    "hints": {
      "level1_concept": "Nhớ lại định nghĩa và các đặc trưng cốt lõi về thiết bị mạng (Switch, Modem, Access Point, Router) hoặc giao thức (TCP/IP, IP, DNS) trong Tin học 12.",
      "level2_formula": "Phân tích chức năng cụ thể của thiết bị/giao thức được đề cập trong câu hỏi để loại trừ phương án sai.",
      "level3_steps": "Xem xét mối liên hệ giữa dữ kiện đề bài và từng lựa chọn A, B, C, D để tìm phương án chính xác nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12B - Kết nối mạng.",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-NET-06",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "content": "Đâu không phải là ưu điểm của mạng không dây?",
    "options": [
      {
        "id": "A",
        "content": "Kết nối nhanh chóng, tiện lợi, dễ dàng thêm thiết bị mới."
      },
      {
        "id": "B",
        "content": "Tín hiệu mạng ổn định, không bị ảnh hưởng bởi yếu tố thời tiết."
      },
      {
        "id": "C",
        "content": "Không cần dây cáp"
      },
      {
        "id": "D",
        "content": "Không hạn chế số lượng thiết bị kết nối."
      }
    ],
    "correctAnswer": "B",
    "hints": {
      "level1_concept": "Nhớ lại định nghĩa và các đặc trưng cốt lõi về thiết bị mạng (Switch, Modem, Access Point, Router) hoặc giao thức (TCP/IP, IP, DNS) trong Tin học 12.",
      "level2_formula": "Phân tích chức năng cụ thể của thiết bị/giao thức được đề cập trong câu hỏi để loại trừ phương án sai.",
      "level3_steps": "Xem xét mối liên hệ giữa dữ kiện đề bài và từng lựa chọn A, B, C, D để tìm phương án chính xác nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12B - Kết nối mạng.",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-NET-07",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "content": "Đâu không phải ưu điểm của điện toán đám mây?",
    "options": [
      {
        "id": "A",
        "content": "Giảm chi phí."
      },
      {
        "id": "B",
        "content": "Dễ sử dụng, tiện lợi."
      },
      {
        "id": "C",
        "content": "Tận dụng tối đa tài nguyên."
      },
      {
        "id": "D",
        "content": "An toàn dữ liệu."
      }
    ],
    "correctAnswer": "D",
    "hints": {
      "level1_concept": "Nhớ lại định nghĩa và các đặc trưng cốt lõi về thiết bị mạng (Switch, Modem, Access Point, Router) hoặc giao thức (TCP/IP, IP, DNS) trong Tin học 12.",
      "level2_formula": "Phân tích chức năng cụ thể của thiết bị/giao thức được đề cập trong câu hỏi để loại trừ phương án sai.",
      "level3_steps": "Xem xét mối liên hệ giữa dữ kiện đề bài và từng lựa chọn A, B, C, D để tìm phương án chính xác nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12B - Kết nối mạng.",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-NET-08",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "content": "Đâu không phải là dịch vụ lưu trữ qua điện toán đám mây?",
    "options": [
      {
        "id": "A",
        "content": "Dropbox."
      },
      {
        "id": "B",
        "content": "Google Drive."
      },
      {
        "id": "C",
        "content": "iCoud."
      },
      {
        "id": "D",
        "content": "Paint."
      }
    ],
    "correctAnswer": "D",
    "hints": {
      "level1_concept": "Nhớ lại định nghĩa và các đặc trưng cốt lõi về thiết bị mạng (Switch, Modem, Access Point, Router) hoặc giao thức (TCP/IP, IP, DNS) trong Tin học 12.",
      "level2_formula": "Phân tích chức năng cụ thể của thiết bị/giao thức được đề cập trong câu hỏi để loại trừ phương án sai.",
      "level3_steps": "Xem xét mối liên hệ giữa dữ kiện đề bài và từng lựa chọn A, B, C, D để tìm phương án chính xác nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12B - Kết nối mạng.",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-NET-09",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "content": "Những hạn chế của mạng xã hội?",
    "options": [
      {
        "id": "A",
        "content": "Đưa thông tin không chính xác hoặc tin xấu khiến chúng ta tin vào những thông tin sai lệch."
      },
      {
        "id": "B",
        "content": "Có thể dễ dàng tiếp cận với những thông tin nguy hiểm, hình ảnh bạo lực."
      },
      {
        "id": "C",
        "content": "Nguy cơ bị lừa đảo, đánh cắp thông tin cá nhân."
      },
      {
        "id": "D",
        "content": "Tất cả các phương án trên."
      }
    ],
    "correctAnswer": "D",
    "hints": {
      "level1_concept": "Nhớ lại định nghĩa và các đặc trưng cốt lõi về thiết bị mạng (Switch, Modem, Access Point, Router) hoặc giao thức (TCP/IP, IP, DNS) trong Tin học 12.",
      "level2_formula": "Phân tích chức năng cụ thể của thiết bị/giao thức được đề cập trong câu hỏi để loại trừ phương án sai.",
      "level3_steps": "Xem xét mối liên hệ giữa dữ kiện đề bài và từng lựa chọn A, B, C, D để tìm phương án chính xác nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12B - Kết nối mạng.",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-NET-10",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "content": "Chúng ta nên làm gì để tự bảo vệ bản thân khi sử dụng mạng xã hội?",
    "options": [
      {
        "id": "A",
        "content": "Cẩn thận khi cung cấp thông tin cá nhân trên mạng xã hội."
      },
      {
        "id": "B",
        "content": "Luôn đăng xuất tài khoản sau khi sử dụng."
      },
      {
        "id": "C",
        "content": "Cân nhắc trước khi chia sẻ hình ảnh, video hay thông tin trên mạng xã hội."
      },
      {
        "id": "D",
        "content": "Tất cả các phương án trên."
      }
    ],
    "correctAnswer": "D",
    "hints": {
      "level1_concept": "Nhớ lại định nghĩa và các đặc trưng cốt lõi về thiết bị mạng (Switch, Modem, Access Point, Router) hoặc giao thức (TCP/IP, IP, DNS) trong Tin học 12.",
      "level2_formula": "Phân tích chức năng cụ thể của thiết bị/giao thức được đề cập trong câu hỏi để loại trừ phương án sai.",
      "level3_steps": "Xem xét mối liên hệ giữa dữ kiện đề bài và từng lựa chọn A, B, C, D để tìm phương án chính xác nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12B - Kết nối mạng.",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-NET-11",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "content": "Để bảo vệ dữ liệu trên máy tính khi dùng internet, em cần làm gì?",
    "options": [
      {
        "id": "A",
        "content": "Cài đặt và cập nhật phần mềm chống virus."
      },
      {
        "id": "B",
        "content": "Tải các phần mềm ứng dụng không rõ nguồn gốc về máy tính."
      },
      {
        "id": "C",
        "content": "Cung cấp thông tin cá nhân trên mạng xã hội."
      },
      {
        "id": "D",
        "content": "Truy cập vào các liên kết lạ."
      }
    ],
    "correctAnswer": "A",
    "hints": {
      "level1_concept": "Nhớ lại định nghĩa và các đặc trưng cốt lõi về thiết bị mạng (Switch, Modem, Access Point, Router) hoặc giao thức (TCP/IP, IP, DNS) trong Tin học 12.",
      "level2_formula": "Phân tích chức năng cụ thể của thiết bị/giao thức được đề cập trong câu hỏi để loại trừ phương án sai.",
      "level3_steps": "Xem xét mối liên hệ giữa dữ kiện đề bài và từng lựa chọn A, B, C, D để tìm phương án chính xác nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12B - Kết nối mạng.",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-NET-12",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "content": "Điều nào sau đây được khuyến khích khi sử dụng các dịch vụ trên internet?",
    "options": [
      {
        "id": "A",
        "content": "Đưa thông tin cá nhân lên mạng xã hội."
      },
      {
        "id": "B",
        "content": "Đăng kí khóa học tiếng Anh trực tuyến."
      },
      {
        "id": "C",
        "content": "Liên tục nạp số tiền lớn vào tài khoản game trên mạng."
      },
      {
        "id": "D",
        "content": "Mở thư điện tử và liên kết đến địa chỉ web không rõ nguồn gốc."
      }
    ],
    "correctAnswer": "B",
    "hints": {
      "level1_concept": "Nhớ lại định nghĩa và các đặc trưng cốt lõi về thiết bị mạng (Switch, Modem, Access Point, Router) hoặc giao thức (TCP/IP, IP, DNS) trong Tin học 12.",
      "level2_formula": "Phân tích chức năng cụ thể của thiết bị/giao thức được đề cập trong câu hỏi để loại trừ phương án sai.",
      "level3_steps": "Xem xét mối liên hệ giữa dữ kiện đề bài và từng lựa chọn A, B, C, D để tìm phương án chính xác nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12B - Kết nối mạng.",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-NET-13",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "content": "Chọn phương án sai. Khi sử dụng internet, có thể:",
    "options": [
      {
        "id": "A",
        "content": "Tin tưởng mọi nguồn thông tin trên mạng."
      },
      {
        "id": "B",
        "content": "Bị lôi kéo vào các hoạt động không lành mạnh."
      },
      {
        "id": "C",
        "content": "Máy tính bị nhiễm virus hay mã độc."
      },
      {
        "id": "D",
        "content": "Bị lừa đảo hoặc lợi dụng."
      }
    ],
    "correctAnswer": "A",
    "hints": {
      "level1_concept": "Nhớ lại định nghĩa và các đặc trưng cốt lõi về thiết bị mạng (Switch, Modem, Access Point, Router) hoặc giao thức (TCP/IP, IP, DNS) trong Tin học 12.",
      "level2_formula": "Phân tích chức năng cụ thể của thiết bị/giao thức được đề cập trong câu hỏi để loại trừ phương án sai.",
      "level3_steps": "Xem xét mối liên hệ giữa dữ kiện đề bài và từng lựa chọn A, B, C, D để tìm phương án chính xác nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12B - Kết nối mạng.",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-NET-14",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "content": "Lời khuyên nào sai khi em muốn bảo vệ máy tính và thông tin trên máy tính của mình?",
    "options": [
      {
        "id": "A",
        "content": "Đừng bao giờ mở thư điện tử và mở tệp đính kèm thư từ những người không quen biết."
      },
      {
        "id": "B",
        "content": "Luôn nhớ đăng xuất khi sử dụng xong máy tính, thư điện tử."
      },
      {
        "id": "C",
        "content": "Chẳng cần làm gì vì máy tính đã được cài đặt sẵn các thiết bị bảo vệ từ nhà sản xuất."
      },
      {
        "id": "D",
        "content": "Nên cài đặt phần mềm bảo vệ máy tính khỏi virus và thường xuyên cập nhật phần mềm bảo vệ."
      }
    ],
    "correctAnswer": "C",
    "hints": {
      "level1_concept": "Nhớ lại định nghĩa và các đặc trưng cốt lõi về thiết bị mạng (Switch, Modem, Access Point, Router) hoặc giao thức (TCP/IP, IP, DNS) trong Tin học 12.",
      "level2_formula": "Phân tích chức năng cụ thể của thiết bị/giao thức được đề cập trong câu hỏi để loại trừ phương án sai.",
      "level3_steps": "Xem xét mối liên hệ giữa dữ kiện đề bài và từng lựa chọn A, B, C, D để tìm phương án chính xác nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12B - Kết nối mạng.",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-NET-15",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "content": "Cách làm nào sau đây giúp phòng ngừa tác hại của Internet?",
    "options": [
      {
        "id": "A",
        "content": "Thường xuyên truy cập Internet tìm thông tin về virus"
      },
      {
        "id": "B",
        "content": "Thỉnh thoảng chạy phần mềm diệt virus cho máy tính."
      },
      {
        "id": "C",
        "content": "Luôn tra cứu thông tin trên Internet khi làm các bài tập."
      },
      {
        "id": "D",
        "content": "Thoải mái sử dụng internet trong một ngày."
      }
    ],
    "correctAnswer": "B",
    "hints": {
      "level1_concept": "Nhớ lại định nghĩa và các đặc trưng cốt lõi về thiết bị mạng (Switch, Modem, Access Point, Router) hoặc giao thức (TCP/IP, IP, DNS) trong Tin học 12.",
      "level2_formula": "Phân tích chức năng cụ thể của thiết bị/giao thức được đề cập trong câu hỏi để loại trừ phương án sai.",
      "level3_steps": "Xem xét mối liên hệ giữa dữ kiện đề bài và từng lựa chọn A, B, C, D để tìm phương án chính xác nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12B - Kết nối mạng.",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-NET-16",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "content": "Con đường nào không lây, truyền virus:",
    "options": [
      {
        "id": "A",
        "content": "Gmail."
      },
      {
        "id": "B",
        "content": "Truy cập các trang web."
      },
      {
        "id": "C",
        "content": "Màn hình máy tính."
      },
      {
        "id": "D",
        "content": "Thẻ nhớ, USB."
      }
    ],
    "correctAnswer": "C",
    "hints": {
      "level1_concept": "Nhớ lại định nghĩa và các đặc trưng cốt lõi về thiết bị mạng (Switch, Modem, Access Point, Router) hoặc giao thức (TCP/IP, IP, DNS) trong Tin học 12.",
      "level2_formula": "Phân tích chức năng cụ thể của thiết bị/giao thức được đề cập trong câu hỏi để loại trừ phương án sai.",
      "level3_steps": "Xem xét mối liên hệ giữa dữ kiện đề bài và từng lựa chọn A, B, C, D để tìm phương án chính xác nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12B - Kết nối mạng.",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-NET-17",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "content": "Đâu là tác hại khi tham gia internet?",
    "options": [
      {
        "id": "A",
        "content": "Giúp tìm kiếm thông tin."
      },
      {
        "id": "B",
        "content": "Chia sẻ thông tin."
      },
      {
        "id": "C",
        "content": "Bị rủ rê tham gia các hoạt động phi pháp trên mạng xã hội."
      },
      {
        "id": "D",
        "content": "Học tập online."
      }
    ],
    "correctAnswer": "C",
    "hints": {
      "level1_concept": "Nhớ lại định nghĩa và các đặc trưng cốt lõi về thiết bị mạng (Switch, Modem, Access Point, Router) hoặc giao thức (TCP/IP, IP, DNS) trong Tin học 12.",
      "level2_formula": "Phân tích chức năng cụ thể của thiết bị/giao thức được đề cập trong câu hỏi để loại trừ phương án sai.",
      "level3_steps": "Xem xét mối liên hệ giữa dữ kiện đề bài và từng lựa chọn A, B, C, D để tìm phương án chính xác nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12B - Kết nối mạng.",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-NET-18",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "content": "Em sẽ làm gì trong các trường hợp sau: “Được một nhóm bạn truyền cho một địa chỉ website nhưng dặn là phải bí mật, không để người lớn biết”.",
    "options": [
      {
        "id": "A",
        "content": "Bí mật bấm vào xem địa chỉ website để xem."
      },
      {
        "id": "B",
        "content": "Nhờ người lớn hướng dẫn mở website để xem."
      },
      {
        "id": "C",
        "content": "Bấm vào xem và gửi địa chỉ website cho các bạn khác."
      },
      {
        "id": "D",
        "content": "Không bấm vào và báo cáo với người lớn."
      }
    ],
    "correctAnswer": "D",
    "hints": {
      "level1_concept": "Nhớ lại định nghĩa và các đặc trưng cốt lõi về thiết bị mạng (Switch, Modem, Access Point, Router) hoặc giao thức (TCP/IP, IP, DNS) trong Tin học 12.",
      "level2_formula": "Phân tích chức năng cụ thể của thiết bị/giao thức được đề cập trong câu hỏi để loại trừ phương án sai.",
      "level3_steps": "Xem xét mối liên hệ giữa dữ kiện đề bài và từng lựa chọn A, B, C, D để tìm phương án chính xác nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12B - Kết nối mạng.",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-NET-19",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "content": "Đâu không phải là lợi ích của việc sử dụng mạng máy tính?",
    "options": [
      {
        "id": "A",
        "content": "Giảm chi phí khi dùng chung phần cứng."
      },
      {
        "id": "B",
        "content": "Giảm chi phí khi dùng chung phần mềm."
      },
      {
        "id": "C",
        "content": "Người sử dụng có quyền kiểm soát độc quyền đối với dữ liệu và ứng dụng của riêng họ."
      },
      {
        "id": "D",
        "content": "Cho phép chia sẻ dữ liệu, tăng hiệu quả sử dụng."
      }
    ],
    "correctAnswer": "C",
    "hints": {
      "level1_concept": "Nhớ lại định nghĩa và các đặc trưng cốt lõi về thiết bị mạng (Switch, Modem, Access Point, Router) hoặc giao thức (TCP/IP, IP, DNS) trong Tin học 12.",
      "level2_formula": "Phân tích chức năng cụ thể của thiết bị/giao thức được đề cập trong câu hỏi để loại trừ phương án sai.",
      "level3_steps": "Xem xét mối liên hệ giữa dữ kiện đề bài và từng lựa chọn A, B, C, D để tìm phương án chính xác nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12B - Kết nối mạng.",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-NET-20",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "content": "E-Payment có nghĩa là gì?",
    "options": [
      {
        "id": "A",
        "content": "Thương mại điện tử."
      },
      {
        "id": "B",
        "content": "Ngân hàng điện tử."
      },
      {
        "id": "C",
        "content": "Thanh toán điện tử."
      },
      {
        "id": "D",
        "content": "Thông tin số."
      }
    ],
    "correctAnswer": "C",
    "hints": {
      "level1_concept": "Nhớ lại định nghĩa và các đặc trưng cốt lõi về thiết bị mạng (Switch, Modem, Access Point, Router) hoặc giao thức (TCP/IP, IP, DNS) trong Tin học 12.",
      "level2_formula": "Phân tích chức năng cụ thể của thiết bị/giao thức được đề cập trong câu hỏi để loại trừ phương án sai.",
      "level3_steps": "Xem xét mối liên hệ giữa dữ kiện đề bài và từng lựa chọn A, B, C, D để tìm phương án chính xác nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12B - Kết nối mạng.",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-NET-21",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "content": "Phát biểu nào sao đây là sai ?",
    "options": [
      {
        "id": "A",
        "content": "Trong một mạng máy tính các tài nguyên như máy in có thể được chia sẻ."
      },
      {
        "id": "B",
        "content": "Virus có thể lây lan sang các máy tính khác trong một mạng máy tính."
      },
      {
        "id": "C",
        "content": "Người sử dụng có thể giao tiếp với nhau trên mạng máy tính."
      },
      {
        "id": "D",
        "content": "Người sử dụng không thể chia sẻ dữ liệu trên máy tính của mình cho người khác trong cùng một mạng máy tính."
      }
    ],
    "correctAnswer": "D",
    "hints": {
      "level1_concept": "Nhớ lại định nghĩa và các đặc trưng cốt lõi về thiết bị mạng (Switch, Modem, Access Point, Router) hoặc giao thức (TCP/IP, IP, DNS) trong Tin học 12.",
      "level2_formula": "Phân tích chức năng cụ thể của thiết bị/giao thức được đề cập trong câu hỏi để loại trừ phương án sai.",
      "level3_steps": "Xem xét mối liên hệ giữa dữ kiện đề bài và từng lựa chọn A, B, C, D để tìm phương án chính xác nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12B - Kết nối mạng.",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-NET-22",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "content": "Điền vào chỗ chấm: “Nhờ vào mạng máy tính, người sử dụng có thể (1)….. để trao đổi (2)….. chia sẻ (3)….. và dùng chung các (4)….. trên mạng”.",
    "options": [
      {
        "id": "A",
        "content": "Liên lạc với nhau – dữ liệu – thông tin – thiết bị"
      },
      {
        "id": "B",
        "content": "Dữ liệu – thông tin – liên lạc với nhau – thiết bị"
      },
      {
        "id": "C",
        "content": "Thông tin – dữ liệu – liên lạc với nhau – thiết bị"
      },
      {
        "id": "D",
        "content": "Liên lạc với nhau – thông tin – dữ liệu – thiết bị"
      }
    ],
    "correctAnswer": "D",
    "hints": {
      "level1_concept": "Nhớ lại định nghĩa và các đặc trưng cốt lõi về thiết bị mạng (Switch, Modem, Access Point, Router) hoặc giao thức (TCP/IP, IP, DNS) trong Tin học 12.",
      "level2_formula": "Phân tích chức năng cụ thể của thiết bị/giao thức được đề cập trong câu hỏi để loại trừ phương án sai.",
      "level3_steps": "Xem xét mối liên hệ giữa dữ kiện đề bài và từng lựa chọn A, B, C, D để tìm phương án chính xác nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12B - Kết nối mạng.",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-NET-23",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "content": "Mạng LAN là mạng kết nối dùng trong phạm vi:",
    "options": [
      {
        "id": "A",
        "content": "Lớn"
      },
      {
        "id": "B",
        "content": "Vừa"
      },
      {
        "id": "C",
        "content": "Nhỏ"
      },
      {
        "id": "D",
        "content": "Trên toàn thế giới"
      }
    ],
    "correctAnswer": "C",
    "hints": {
      "level1_concept": "Nhớ lại định nghĩa và các đặc trưng cốt lõi về thiết bị mạng (Switch, Modem, Access Point, Router) hoặc giao thức (TCP/IP, IP, DNS) trong Tin học 12.",
      "level2_formula": "Phân tích chức năng cụ thể của thiết bị/giao thức được đề cập trong câu hỏi để loại trừ phương án sai.",
      "level3_steps": "Xem xét mối liên hệ giữa dữ kiện đề bài và từng lựa chọn A, B, C, D để tìm phương án chính xác nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12B - Kết nối mạng.",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-NET-24",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "content": "Phát biểu đúng về điện toán đám mây?",
    "options": [
      {
        "id": "A",
        "content": "Nó sẽ luôn rẻ hơn và an toàn hơn so với máy tính cục bộ."
      },
      {
        "id": "B",
        "content": "Bạn có thể truy cập dữ liệu của mình từ bất kỳ máy tính nào trên thế giới, miễn là bạn có kết nối Internet."
      },
      {
        "id": "C",
        "content": "Chỉ có một vài công ty nhỏ đang đầu tư vào công nghệ, làm cho nó trở thành một công việc mạo hiểm."
      },
      {
        "id": "D",
        "content": "Bạn có thể truy cập dữ liệu của mình từ bất kỳ máy tính nào trên thế giới."
      }
    ],
    "correctAnswer": "B",
    "hints": {
      "level1_concept": "Nhớ lại định nghĩa và các đặc trưng cốt lõi về thiết bị mạng (Switch, Modem, Access Point, Router) hoặc giao thức (TCP/IP, IP, DNS) trong Tin học 12.",
      "level2_formula": "Phân tích chức năng cụ thể của thiết bị/giao thức được đề cập trong câu hỏi để loại trừ phương án sai.",
      "level3_steps": "Xem xét mối liên hệ giữa dữ kiện đề bài và từng lựa chọn A, B, C, D để tìm phương án chính xác nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12B - Kết nối mạng.",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-NET-25",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "content": "Điện toán đám mây không thể cung cấp những dịch vụ nào trong các dịch vụ sau:",
    "options": [
      {
        "id": "A",
        "content": "Dịch vụ lưu trữ."
      },
      {
        "id": "B",
        "content": "Dịch vụ thư tín điện tử."
      },
      {
        "id": "C",
        "content": "Dịch vụ bảo trì phần cứng và phần mềm tại gia đình."
      },
      {
        "id": "D",
        "content": "Dịch vụ cung cấp máy chủ."
      }
    ],
    "correctAnswer": "C",
    "hints": {
      "level1_concept": "Nhớ lại định nghĩa và các đặc trưng cốt lõi về thiết bị mạng (Switch, Modem, Access Point, Router) hoặc giao thức (TCP/IP, IP, DNS) trong Tin học 12.",
      "level2_formula": "Phân tích chức năng cụ thể của thiết bị/giao thức được đề cập trong câu hỏi để loại trừ phương án sai.",
      "level3_steps": "Xem xét mối liên hệ giữa dữ kiện đề bài và từng lựa chọn A, B, C, D để tìm phương án chính xác nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12B - Kết nối mạng.",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-NET-26",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "content": "Đâu không phải là đặc điểm của Internet?",
    "options": [
      {
        "id": "A",
        "content": "Phủ khắp thế giới."
      },
      {
        "id": "B",
        "content": "Tạo nhánh từ các mạng nhỏ."
      },
      {
        "id": "C",
        "content": "Chỉ mang lại lợi ích cho con người trong lĩnh vực văn hóa, kinh tế, xã hội."
      },
      {
        "id": "D",
        "content": "Không thuộc quyền sở hữu của cá nhân hay tổ chức nào."
      }
    ],
    "correctAnswer": "C",
    "hints": {
      "level1_concept": "Nhớ lại định nghĩa và các đặc trưng cốt lõi về thiết bị mạng (Switch, Modem, Access Point, Router) hoặc giao thức (TCP/IP, IP, DNS) trong Tin học 12.",
      "level2_formula": "Phân tích chức năng cụ thể của thiết bị/giao thức được đề cập trong câu hỏi để loại trừ phương án sai.",
      "level3_steps": "Xem xét mối liên hệ giữa dữ kiện đề bài và từng lựa chọn A, B, C, D để tìm phương án chính xác nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12B - Kết nối mạng.",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-NET-27",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "content": "Mô tả nào sau đây nói về Internet là sai?",
    "options": [
      {
        "id": "A",
        "content": "Là một mạng máy tính"
      },
      {
        "id": "B",
        "content": "Có phạm vi bao phủ khắp thế giới"
      },
      {
        "id": "C",
        "content": "Hàng tỉ người truy cập và sử dụng"
      },
      {
        "id": "D",
        "content": "Là tài sản và hoạt động dưới sự quản lí của một công ty tin học lớn nhất thế giới"
      }
    ],
    "correctAnswer": "D",
    "hints": {
      "level1_concept": "Nhớ lại định nghĩa và các đặc trưng cốt lõi về thiết bị mạng (Switch, Modem, Access Point, Router) hoặc giao thức (TCP/IP, IP, DNS) trong Tin học 12.",
      "level2_formula": "Phân tích chức năng cụ thể của thiết bị/giao thức được đề cập trong câu hỏi để loại trừ phương án sai.",
      "level3_steps": "Xem xét mối liên hệ giữa dữ kiện đề bài và từng lựa chọn A, B, C, D để tìm phương án chính xác nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12B - Kết nối mạng.",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-NET-28",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "content": "Mạng máy tính được kết nối bằng những phương tiện nào?",
    "options": [
      {
        "id": "A",
        "content": "Cáp mạng và sóng vô tuyến"
      },
      {
        "id": "B",
        "content": "Chỉ bằng cáp mạng"
      },
      {
        "id": "C",
        "content": "Chỉ bằng sóng vô tuyến"
      },
      {
        "id": "D",
        "content": "Điện thoại và cáp mạng"
      }
    ],
    "correctAnswer": "A",
    "hints": {
      "level1_concept": "Nhớ lại định nghĩa và các đặc trưng cốt lõi về thiết bị mạng (Switch, Modem, Access Point, Router) hoặc giao thức (TCP/IP, IP, DNS) trong Tin học 12.",
      "level2_formula": "Phân tích chức năng cụ thể của thiết bị/giao thức được đề cập trong câu hỏi để loại trừ phương án sai.",
      "level3_steps": "Xem xét mối liên hệ giữa dữ kiện đề bài và từng lựa chọn A, B, C, D để tìm phương án chính xác nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12B - Kết nối mạng.",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-NET-29",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "content": "Thiết bị nào sau đây được coi là thiết bị đầu cuối?",
    "options": [
      {
        "id": "A",
        "content": "Switch"
      },
      {
        "id": "B",
        "content": "Router"
      },
      {
        "id": "C",
        "content": "Máy tính cá nhân"
      },
      {
        "id": "D",
        "content": "Modem"
      }
    ],
    "correctAnswer": "C",
    "hints": {
      "level1_concept": "Nhớ lại định nghĩa và các đặc trưng cốt lõi về thiết bị mạng (Switch, Modem, Access Point, Router) hoặc giao thức (TCP/IP, IP, DNS) trong Tin học 12.",
      "level2_formula": "Phân tích chức năng cụ thể của thiết bị/giao thức được đề cập trong câu hỏi để loại trừ phương án sai.",
      "level3_steps": "Xem xét mối liên hệ giữa dữ kiện đề bài và từng lựa chọn A, B, C, D để tìm phương án chính xác nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12B - Kết nối mạng.",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-NET-30",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "content": "Thiết bị nào trong mạng LAN có nhiệm vụ chuyển tiếp dữ liệu giữa các thiết bị?",
    "options": [
      {
        "id": "A",
        "content": "Router"
      },
      {
        "id": "B",
        "content": "Modem"
      },
      {
        "id": "C",
        "content": "Switch"
      },
      {
        "id": "D",
        "content": "Access Point"
      }
    ],
    "correctAnswer": "C",
    "hints": {
      "level1_concept": "Nhớ lại định nghĩa và các đặc trưng cốt lõi về thiết bị mạng (Switch, Modem, Access Point, Router) hoặc giao thức (TCP/IP, IP, DNS) trong Tin học 12.",
      "level2_formula": "Phân tích chức năng cụ thể của thiết bị/giao thức được đề cập trong câu hỏi để loại trừ phương án sai.",
      "level3_steps": "Xem xét mối liên hệ giữa dữ kiện đề bài và từng lựa chọn A, B, C, D để tìm phương án chính xác nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12B - Kết nối mạng.",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-NET-31",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "content": "Mạng WLAN sử dụng công nghệ nào để kết nối các thiết bị?",
    "options": [
      {
        "id": "A",
        "content": "Bluetooth"
      },
      {
        "id": "B",
        "content": "Ethernet"
      },
      {
        "id": "C",
        "content": "Wi-Fi"
      },
      {
        "id": "D",
        "content": "Zigbee"
      }
    ],
    "correctAnswer": "C",
    "hints": {
      "level1_concept": "Nhớ lại định nghĩa và các đặc trưng cốt lõi về thiết bị mạng (Switch, Modem, Access Point, Router) hoặc giao thức (TCP/IP, IP, DNS) trong Tin học 12.",
      "level2_formula": "Phân tích chức năng cụ thể của thiết bị/giao thức được đề cập trong câu hỏi để loại trừ phương án sai.",
      "level3_steps": "Xem xét mối liên hệ giữa dữ kiện đề bài và từng lựa chọn A, B, C, D để tìm phương án chính xác nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12B - Kết nối mạng.",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-NET-32",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "content": "Thiết bị nào cung cấp kết nối Wi-Fi trong mạng cục bộ?",
    "options": [
      {
        "id": "A",
        "content": "Switch"
      },
      {
        "id": "B",
        "content": "Router"
      },
      {
        "id": "C",
        "content": "Access Point (AP)"
      },
      {
        "id": "D",
        "content": "Modem"
      }
    ],
    "correctAnswer": "C",
    "hints": {
      "level1_concept": "Nhớ lại định nghĩa và các đặc trưng cốt lõi về thiết bị mạng (Switch, Modem, Access Point, Router) hoặc giao thức (TCP/IP, IP, DNS) trong Tin học 12.",
      "level2_formula": "Phân tích chức năng cụ thể của thiết bị/giao thức được đề cập trong câu hỏi để loại trừ phương án sai.",
      "level3_steps": "Xem xét mối liên hệ giữa dữ kiện đề bài và từng lựa chọn A, B, C, D để tìm phương án chính xác nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12B - Kết nối mạng.",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-NET-33",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "content": "Mạng diện rộng (WAN) có phạm vi địa lý như thế nào?",
    "options": [
      {
        "id": "A",
        "content": "Trong một phòng"
      },
      {
        "id": "B",
        "content": "Trong một tòa nhà"
      },
      {
        "id": "C",
        "content": "Trong một thành phố hoặc quốc gia"
      },
      {
        "id": "D",
        "content": "Trong một khu vực nhỏ"
      }
    ],
    "correctAnswer": "C",
    "hints": {
      "level1_concept": "Nhớ lại định nghĩa và các đặc trưng cốt lõi về thiết bị mạng (Switch, Modem, Access Point, Router) hoặc giao thức (TCP/IP, IP, DNS) trong Tin học 12.",
      "level2_formula": "Phân tích chức năng cụ thể của thiết bị/giao thức được đề cập trong câu hỏi để loại trừ phương án sai.",
      "level3_steps": "Xem xét mối liên hệ giữa dữ kiện đề bài và từng lựa chọn A, B, C, D để tìm phương án chính xác nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12B - Kết nối mạng.",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-NET-34",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "content": "Thiết bị nào có nhiệm vụ chuyển đổi tín hiệu giữa số và tương tự?",
    "options": [
      {
        "id": "A",
        "content": "Router"
      },
      {
        "id": "B",
        "content": "Modem"
      },
      {
        "id": "C",
        "content": "Switch"
      },
      {
        "id": "D",
        "content": "Access Point"
      }
    ],
    "correctAnswer": "B",
    "hints": {
      "level1_concept": "Nhớ lại định nghĩa và các đặc trưng cốt lõi về thiết bị mạng (Switch, Modem, Access Point, Router) hoặc giao thức (TCP/IP, IP, DNS) trong Tin học 12.",
      "level2_formula": "Phân tích chức năng cụ thể của thiết bị/giao thức được đề cập trong câu hỏi để loại trừ phương án sai.",
      "level3_steps": "Xem xét mối liên hệ giữa dữ kiện đề bài và từng lựa chọn A, B, C, D để tìm phương án chính xác nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12B - Kết nối mạng.",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-NET-35",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "content": "Nhà cung cấp dịch vụ truy cập Internet được gọi là gì?",
    "options": [
      {
        "id": "A",
        "content": "ISP"
      },
      {
        "id": "B",
        "content": "AP"
      },
      {
        "id": "C",
        "content": "WAN"
      },
      {
        "id": "D",
        "content": "LAN"
      }
    ],
    "correctAnswer": "A",
    "hints": {
      "level1_concept": "Nhớ lại định nghĩa và các đặc trưng cốt lõi về thiết bị mạng (Switch, Modem, Access Point, Router) hoặc giao thức (TCP/IP, IP, DNS) trong Tin học 12.",
      "level2_formula": "Phân tích chức năng cụ thể của thiết bị/giao thức được đề cập trong câu hỏi để loại trừ phương án sai.",
      "level3_steps": "Xem xét mối liên hệ giữa dữ kiện đề bài và từng lựa chọn A, B, C, D để tìm phương án chính xác nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12B - Kết nối mạng.",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-NET-36",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "content": "Thiết bị nào xác định đường đi tối ưu cho gói tin trong mạng WAN?",
    "options": [
      {
        "id": "A",
        "content": "Switch"
      },
      {
        "id": "B",
        "content": "Modem"
      },
      {
        "id": "C",
        "content": "Access Point"
      },
      {
        "id": "D",
        "content": "Router"
      }
    ],
    "correctAnswer": "D",
    "hints": {
      "level1_concept": "Nhớ lại định nghĩa và các đặc trưng cốt lõi về thiết bị mạng (Switch, Modem, Access Point, Router) hoặc giao thức (TCP/IP, IP, DNS) trong Tin học 12.",
      "level2_formula": "Phân tích chức năng cụ thể của thiết bị/giao thức được đề cập trong câu hỏi để loại trừ phương án sai.",
      "level3_steps": "Xem xét mối liên hệ giữa dữ kiện đề bài và từng lựa chọn A, B, C, D để tìm phương án chính xác nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12B - Kết nối mạng.",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-NET-37",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "content": "Giao thức mạng là gì?",
    "options": [
      {
        "id": "A",
        "content": "Tập hợp các quy tắc điều khiển truyền thông và trao đổi dữ liệu"
      },
      {
        "id": "B",
        "content": "Một loại phần cứng trong máy tính"
      },
      {
        "id": "C",
        "content": "Một dạng phần mềm ứng dụng"
      },
      {
        "id": "D",
        "content": "Một loại kết nối vật lý trong mạng"
      }
    ],
    "correctAnswer": "A",
    "hints": {
      "level1_concept": "Nhớ lại định nghĩa và các đặc trưng cốt lõi về thiết bị mạng (Switch, Modem, Access Point, Router) hoặc giao thức (TCP/IP, IP, DNS) trong Tin học 12.",
      "level2_formula": "Phân tích chức năng cụ thể của thiết bị/giao thức được đề cập trong câu hỏi để loại trừ phương án sai.",
      "level3_steps": "Xem xét mối liên hệ giữa dữ kiện đề bài và từng lựa chọn A, B, C, D để tìm phương án chính xác nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12B - Kết nối mạng.",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-NET-38",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "content": "Giao thức Internet (IP) có vai trò gì trong mạng máy tính?",
    "options": [
      {
        "id": "A",
        "content": "Chia dữ liệu thành gói tin"
      },
      {
        "id": "B",
        "content": "Quản lý và định tuyến gói tin trên mạng"
      },
      {
        "id": "C",
        "content": "Gửi và nhận thư điện tử"
      },
      {
        "id": "D",
        "content": "Truyền tải dữ liệu của các trang web"
      }
    ],
    "correctAnswer": "B",
    "hints": {
      "level1_concept": "Nhớ lại định nghĩa và các đặc trưng cốt lõi về thiết bị mạng (Switch, Modem, Access Point, Router) hoặc giao thức (TCP/IP, IP, DNS) trong Tin học 12.",
      "level2_formula": "Phân tích chức năng cụ thể của thiết bị/giao thức được đề cập trong câu hỏi để loại trừ phương án sai.",
      "level3_steps": "Xem xét mối liên hệ giữa dữ kiện đề bài và từng lựa chọn A, B, C, D để tìm phương án chính xác nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12B - Kết nối mạng.",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-NET-39",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "content": "Giao thức TCP đảm bảo điều gì trong truyền dữ liệu?",
    "options": [
      {
        "id": "A",
        "content": "Đảm bảo độ tin cậy và đúng thứ tự"
      },
      {
        "id": "B",
        "content": "Chia dữ liệu thành các tệp"
      },
      {
        "id": "C",
        "content": "Chuyển đổi địa chỉ IP thành tên miền"
      },
      {
        "id": "D",
        "content": "Truyền tải dữ liệu không yêu cầu kết nối"
      }
    ],
    "correctAnswer": "A",
    "hints": {
      "level1_concept": "Nhớ lại định nghĩa và các đặc trưng cốt lõi về thiết bị mạng (Switch, Modem, Access Point, Router) hoặc giao thức (TCP/IP, IP, DNS) trong Tin học 12.",
      "level2_formula": "Phân tích chức năng cụ thể của thiết bị/giao thức được đề cập trong câu hỏi để loại trừ phương án sai.",
      "level3_steps": "Xem xét mối liên hệ giữa dữ kiện đề bài và từng lựa chọn A, B, C, D để tìm phương án chính xác nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12B - Kết nối mạng.",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-NET-40",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "content": "Địa chỉ IP là gì?",
    "options": [
      {
        "id": "A",
        "content": "Một loại giao thức truyền tải dữ liệu"
      },
      {
        "id": "B",
        "content": "Một số duy nhất gán cho mỗi thiết bị trong mạng"
      },
      {
        "id": "C",
        "content": "Một thiết bị mạng"
      },
      {
        "id": "D",
        "content": "Một phần mềm quản lý mạng"
      }
    ],
    "correctAnswer": "B",
    "hints": {
      "level1_concept": "Nhớ lại định nghĩa và các đặc trưng cốt lõi về thiết bị mạng (Switch, Modem, Access Point, Router) hoặc giao thức (TCP/IP, IP, DNS) trong Tin học 12.",
      "level2_formula": "Phân tích chức năng cụ thể của thiết bị/giao thức được đề cập trong câu hỏi để loại trừ phương án sai.",
      "level3_steps": "Xem xét mối liên hệ giữa dữ kiện đề bài và từng lựa chọn A, B, C, D để tìm phương án chính xác nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12B - Kết nối mạng.",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-NET-41",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "content": "Hệ thống tên miền DNS có chức năng gì?",
    "options": [
      {
        "id": "A",
        "content": "Chuyển đổi tên miền thành địa chỉ IP"
      },
      {
        "id": "B",
        "content": "Gửi và nhận thư điện tử"
      },
      {
        "id": "C",
        "content": "Chia dữ liệu thành gói tin"
      },
      {
        "id": "D",
        "content": "Đảm bảo độ tin cậy truyền dữ liệu"
      }
    ],
    "correctAnswer": "A",
    "hints": {
      "level1_concept": "Nhớ lại định nghĩa và các đặc trưng cốt lõi về thiết bị mạng (Switch, Modem, Access Point, Router) hoặc giao thức (TCP/IP, IP, DNS) trong Tin học 12.",
      "level2_formula": "Phân tích chức năng cụ thể của thiết bị/giao thức được đề cập trong câu hỏi để loại trừ phương án sai.",
      "level3_steps": "Xem xét mối liên hệ giữa dữ kiện đề bài và từng lựa chọn A, B, C, D để tìm phương án chính xác nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12B - Kết nối mạng.",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-NET-42",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "content": "Tên miền cấp cao nhất (TLD) thường là gì?",
    "options": [
      {
        "id": "A",
        "content": "Phần đuôi sau cùng của tên miền"
      },
      {
        "id": "B",
        "content": "Phần đầu của tên miền"
      },
      {
        "id": "C",
        "content": "Một phần của địa chỉ IP"
      },
      {
        "id": "D",
        "content": "Một loại giao thức mạng"
      }
    ],
    "correctAnswer": "A",
    "hints": {
      "level1_concept": "Nhớ lại định nghĩa và các đặc trưng cốt lõi về thiết bị mạng (Switch, Modem, Access Point, Router) hoặc giao thức (TCP/IP, IP, DNS) trong Tin học 12.",
      "level2_formula": "Phân tích chức năng cụ thể của thiết bị/giao thức được đề cập trong câu hỏi để loại trừ phương án sai.",
      "level3_steps": "Xem xét mối liên hệ giữa dữ kiện đề bài và từng lựa chọn A, B, C, D để tìm phương án chính xác nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12B - Kết nối mạng.",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-NET-43",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "content": "Giao thức HTTP được sử dụng để làm gì?",
    "options": [
      {
        "id": "A",
        "content": "Truyền tải dữ liệu của các trang web"
      },
      {
        "id": "B",
        "content": "Quản lý và định tuyến gói tin trên mạng"
      },
      {
        "id": "C",
        "content": "Gửi và nhận thư điện tử"
      },
      {
        "id": "D",
        "content": "Chia dữ liệu thành các gói tin"
      }
    ],
    "correctAnswer": "A",
    "hints": {
      "level1_concept": "Nhớ lại định nghĩa và các đặc trưng cốt lõi về thiết bị mạng (Switch, Modem, Access Point, Router) hoặc giao thức (TCP/IP, IP, DNS) trong Tin học 12.",
      "level2_formula": "Phân tích chức năng cụ thể của thiết bị/giao thức được đề cập trong câu hỏi để loại trừ phương án sai.",
      "level3_steps": "Xem xét mối liên hệ giữa dữ kiện đề bài và từng lựa chọn A, B, C, D để tìm phương án chính xác nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12B - Kết nối mạng.",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-NET-44",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "content": "Khi kết nối máy tính với Access Point trên Windows 10, bước đầu tiên bạn cần làm gì?",
    "options": [
      {
        "id": "A",
        "content": "Kiểm tra địa chỉ IP"
      },
      {
        "id": "B",
        "content": "Nhập mật khẩu mạng Wi-Fi"
      },
      {
        "id": "C",
        "content": "Chọn tên mạng Wi-Fi"
      },
      {
        "id": "D",
        "content": "Mở trình duyệt web"
      }
    ],
    "correctAnswer": "C",
    "hints": {
      "level1_concept": "Nhớ lại định nghĩa và các đặc trưng cốt lõi về thiết bị mạng (Switch, Modem, Access Point, Router) hoặc giao thức (TCP/IP, IP, DNS) trong Tin học 12.",
      "level2_formula": "Phân tích chức năng cụ thể của thiết bị/giao thức được đề cập trong câu hỏi để loại trừ phương án sai.",
      "level3_steps": "Xem xét mối liên hệ giữa dữ kiện đề bài và từng lựa chọn A, B, C, D để tìm phương án chính xác nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12B - Kết nối mạng.",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-NET-45",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "content": "Khi kết nối máy tính với Switch, dấu hiệu nào cho thấy kết nối vật lý đã thành công?",
    "options": [
      {
        "id": "A",
        "content": "Đèn báo hiệu trên cổng sáng"
      },
      {
        "id": "B",
        "content": "Máy tính khởi động lại"
      },
      {
        "id": "C",
        "content": "Địa chỉ IP thay đổi"
      },
      {
        "id": "D",
        "content": "Tự động mở trình duyệt web"
      }
    ],
    "correctAnswer": "A",
    "hints": {
      "level1_concept": "Nhớ lại định nghĩa và các đặc trưng cốt lõi về thiết bị mạng (Switch, Modem, Access Point, Router) hoặc giao thức (TCP/IP, IP, DNS) trong Tin học 12.",
      "level2_formula": "Phân tích chức năng cụ thể của thiết bị/giao thức được đề cập trong câu hỏi để loại trừ phương án sai.",
      "level3_steps": "Xem xét mối liên hệ giữa dữ kiện đề bài và từng lựa chọn A, B, C, D để tìm phương án chính xác nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12B - Kết nối mạng.",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-NET-46",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "content": "Để kết nối điện thoại thông minh vào Access Point, bạn cần thực hiện bước nào sau đây đầu tiên?",
    "options": [
      {
        "id": "A",
        "content": "Mở trình duyệt web"
      },
      {
        "id": "B",
        "content": "Chọn mạng cần kết nối"
      },
      {
        "id": "C",
        "content": "Bật Wi-Fi trong cài đặt"
      },
      {
        "id": "D",
        "content": "Nhập mật khẩu mạng"
      }
    ],
    "correctAnswer": "C",
    "hints": {
      "level1_concept": "Nhớ lại định nghĩa và các đặc trưng cốt lõi về thiết bị mạng (Switch, Modem, Access Point, Router) hoặc giao thức (TCP/IP, IP, DNS) trong Tin học 12.",
      "level2_formula": "Phân tích chức năng cụ thể của thiết bị/giao thức được đề cập trong câu hỏi để loại trừ phương án sai.",
      "level3_steps": "Xem xét mối liên hệ giữa dữ kiện đề bài và từng lựa chọn A, B, C, D để tìm phương án chính xác nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12B - Kết nối mạng.",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-NET-47",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "content": "Khi chia sẻ dữ liệu từ PC-A, để cấp quyền truy cập cho mọi người, bạn cần chọn quyền nào trong hộp thoại Permissions for D?",
    "options": [
      {
        "id": "A",
        "content": "Full Control"
      },
      {
        "id": "B",
        "content": "Read Only"
      },
      {
        "id": "C",
        "content": "Change"
      },
      {
        "id": "D",
        "content": "Write"
      }
    ],
    "correctAnswer": "A",
    "hints": {
      "level1_concept": "Nhớ lại định nghĩa và các đặc trưng cốt lõi về thiết bị mạng (Switch, Modem, Access Point, Router) hoặc giao thức (TCP/IP, IP, DNS) trong Tin học 12.",
      "level2_formula": "Phân tích chức năng cụ thể của thiết bị/giao thức được đề cập trong câu hỏi để loại trừ phương án sai.",
      "level3_steps": "Xem xét mối liên hệ giữa dữ kiện đề bài và từng lựa chọn A, B, C, D để tìm phương án chính xác nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12B - Kết nối mạng.",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-NET-48",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "content": "Bước đầu tiên để kết nối PC-B với máy in được chia sẻ từ PC-A là gì?",
    "options": [
      {
        "id": "A",
        "content": "Mở Control Panel trên PC-B"
      },
      {
        "id": "B",
        "content": "Tìm kiếm máy in bằng tên"
      },
      {
        "id": "C",
        "content": "In thử một trang tài liệu"
      },
      {
        "id": "D",
        "content": "Chọn Add a printer"
      }
    ],
    "correctAnswer": "A",
    "hints": {
      "level1_concept": "Nhớ lại định nghĩa và các đặc trưng cốt lõi về thiết bị mạng (Switch, Modem, Access Point, Router) hoặc giao thức (TCP/IP, IP, DNS) trong Tin học 12.",
      "level2_formula": "Phân tích chức năng cụ thể của thiết bị/giao thức được đề cập trong câu hỏi để loại trừ phương án sai.",
      "level3_steps": "Xem xét mối liên hệ giữa dữ kiện đề bài và từng lựa chọn A, B, C, D để tìm phương án chính xác nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12B - Kết nối mạng.",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-NET-49",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "content": "Để kiểm tra kết nối mạng sau khi kết nối với Access Point, bạn nên làm gì?",
    "options": [
      {
        "id": "A",
        "content": "Kiểm tra đèn báo hiệu trên Access Point"
      },
      {
        "id": "B",
        "content": "Kiểm tra địa chỉ IP"
      },
      {
        "id": "C",
        "content": "Mở trình duyệt web và truy cập vào trang web bất kỳ"
      },
      {
        "id": "D",
        "content": "Kiểm tra cài đặt mạng"
      }
    ],
    "correctAnswer": "C",
    "hints": {
      "level1_concept": "Nhớ lại định nghĩa và các đặc trưng cốt lõi về thiết bị mạng (Switch, Modem, Access Point, Router) hoặc giao thức (TCP/IP, IP, DNS) trong Tin học 12.",
      "level2_formula": "Phân tích chức năng cụ thể của thiết bị/giao thức được đề cập trong câu hỏi để loại trừ phương án sai.",
      "level3_steps": "Xem xét mối liên hệ giữa dữ kiện đề bài và từng lựa chọn A, B, C, D để tìm phương án chính xác nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12B - Kết nối mạng.",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-NET-50",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "content": "Khi kết nối máy tính với Switch, loại cáp nào được sử dụng?",
    "options": [
      {
        "id": "A",
        "content": "Cáp USB"
      },
      {
        "id": "B",
        "content": "Cáp HDMI"
      },
      {
        "id": "C",
        "content": "Cáp mạng RJ45"
      },
      {
        "id": "D",
        "content": "Cáp quang"
      }
    ],
    "correctAnswer": "C",
    "hints": {
      "level1_concept": "Nhớ lại định nghĩa và các đặc trưng cốt lõi về thiết bị mạng (Switch, Modem, Access Point, Router) hoặc giao thức (TCP/IP, IP, DNS) trong Tin học 12.",
      "level2_formula": "Phân tích chức năng cụ thể của thiết bị/giao thức được đề cập trong câu hỏi để loại trừ phương án sai.",
      "level3_steps": "Xem xét mối liên hệ giữa dữ kiện đề bài và từng lựa chọn A, B, C, D để tìm phương án chính xác nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12B - Kết nối mạng.",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-NET-51",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "content": "Trong quá trình chia sẻ máy in, bạn cần làm gì trên PC-A để máy in có thể được chia sẻ?",
    "options": [
      {
        "id": "A",
        "content": "Chọn Add a printer"
      },
      {
        "id": "B",
        "content": "Chọn máy in từ danh sách có sẵn"
      },
      {
        "id": "C",
        "content": "Đặt tên chia sẻ máy in"
      },
      {
        "id": "D",
        "content": "Tìm kiếm máy in"
      }
    ],
    "correctAnswer": "C",
    "hints": {
      "level1_concept": "Nhớ lại định nghĩa và các đặc trưng cốt lõi về thiết bị mạng (Switch, Modem, Access Point, Router) hoặc giao thức (TCP/IP, IP, DNS) trong Tin học 12.",
      "level2_formula": "Phân tích chức năng cụ thể của thiết bị/giao thức được đề cập trong câu hỏi để loại trừ phương án sai.",
      "level3_steps": "Xem xét mối liên hệ giữa dữ kiện đề bài và từng lựa chọn A, B, C, D để tìm phương án chính xác nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12B - Kết nối mạng.",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-NET-52",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "content": "Để xem chi tiết kết nối mạng trên Windows 10, bạn cần làm gì?",
    "options": [
      {
        "id": "A",
        "content": "Mở Control Panel"
      },
      {
        "id": "B",
        "content": "Mở trình duyệt web"
      },
      {
        "id": "C",
        "content": "Kiểm tra địa chỉ IP"
      },
      {
        "id": "D",
        "content": "Chọn Network & Internet settings"
      }
    ],
    "correctAnswer": "D",
    "hints": {
      "level1_concept": "Nhớ lại định nghĩa và các đặc trưng cốt lõi về thiết bị mạng (Switch, Modem, Access Point, Router) hoặc giao thức (TCP/IP, IP, DNS) trong Tin học 12.",
      "level2_formula": "Phân tích chức năng cụ thể của thiết bị/giao thức được đề cập trong câu hỏi để loại trừ phương án sai.",
      "level3_steps": "Xem xét mối liên hệ giữa dữ kiện đề bài và từng lựa chọn A, B, C, D để tìm phương án chính xác nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12B - Kết nối mạng.",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-NET-53",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "content": "Phạm vi sử dụng của internet là:",
    "options": [
      {
        "id": "A",
        "content": "Chỉ trong gia đình"
      },
      {
        "id": "B",
        "content": "Trong 1 cơ quan"
      },
      {
        "id": "C",
        "content": "Trong 1 thành phố"
      },
      {
        "id": "D",
        "content": "Toàn cầu"
      }
    ],
    "correctAnswer": "D",
    "hints": {
      "level1_concept": "Nhớ lại định nghĩa và các đặc trưng cốt lõi về thiết bị mạng (Switch, Modem, Access Point, Router) hoặc giao thức (TCP/IP, IP, DNS) trong Tin học 12.",
      "level2_formula": "Phân tích chức năng cụ thể của thiết bị/giao thức được đề cập trong câu hỏi để loại trừ phương án sai.",
      "level3_steps": "Xem xét mối liên hệ giữa dữ kiện đề bài và từng lựa chọn A, B, C, D để tìm phương án chính xác nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12B - Kết nối mạng.",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-NET-54",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "content": "Dịch vụ nào sau đây không là dịch vụ của điện toán đám mây?",
    "options": [
      {
        "id": "A",
        "content": "Dịch vụ cung cấp quyền sử dụng hạ tầng qua internet"
      },
      {
        "id": "B",
        "content": "Dịch vụ cung cấp quyền sử dụng phần mềm ứng dụng qua internet"
      },
      {
        "id": "C",
        "content": "Dịch vụ cung cấp quyền sử dụng nền tảng"
      },
      {
        "id": "D",
        "content": "Dịch vụ cung cấp xe tự lái"
      }
    ],
    "correctAnswer": "D",
    "hints": {
      "level1_concept": "Nhớ lại định nghĩa và các đặc trưng cốt lõi về thiết bị mạng (Switch, Modem, Access Point, Router) hoặc giao thức (TCP/IP, IP, DNS) trong Tin học 12.",
      "level2_formula": "Phân tích chức năng cụ thể của thiết bị/giao thức được đề cập trong câu hỏi để loại trừ phương án sai.",
      "level3_steps": "Xem xét mối liên hệ giữa dữ kiện đề bài và từng lựa chọn A, B, C, D để tìm phương án chính xác nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12B - Kết nối mạng.",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-NET-55",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "content": "Em truy cập trang mạng để xem tin tức thì ngẫu nhiên xem được một video có hình ảnh bạo lực mà em rất sợ. Em nên làm gì?",
    "options": [
      {
        "id": "A",
        "content": "Đóng video lại và tiếp tục xem tin tức coi như không có chuyện gì"
      },
      {
        "id": "B",
        "content": "Chia sẻ cho bạn bè để dọa các bạn"
      },
      {
        "id": "C",
        "content": "Thông báo cho cha mẹ và thầy cô giáo về điều đó"
      },
      {
        "id": "D",
        "content": "Mở video đó và xem"
      }
    ],
    "correctAnswer": "C",
    "hints": {
      "level1_concept": "Nhớ lại định nghĩa và các đặc trưng cốt lõi về thiết bị mạng (Switch, Modem, Access Point, Router) hoặc giao thức (TCP/IP, IP, DNS) trong Tin học 12.",
      "level2_formula": "Phân tích chức năng cụ thể của thiết bị/giao thức được đề cập trong câu hỏi để loại trừ phương án sai.",
      "level3_steps": "Xem xét mối liên hệ giữa dữ kiện đề bài và từng lựa chọn A, B, C, D để tìm phương án chính xác nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12B - Kết nối mạng.",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-NET-56",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "content": "Đâu không phải là dịch vụ lưu trữ đám mây?",
    "options": [
      {
        "id": "A",
        "content": "Google Drive"
      },
      {
        "id": "B",
        "content": "Mega"
      },
      {
        "id": "C",
        "content": "Mediafire"
      },
      {
        "id": "D",
        "content": "Microsoft Office."
      }
    ],
    "correctAnswer": "D",
    "hints": {
      "level1_concept": "Nhớ lại định nghĩa và các đặc trưng cốt lõi về thiết bị mạng (Switch, Modem, Access Point, Router) hoặc giao thức (TCP/IP, IP, DNS) trong Tin học 12.",
      "level2_formula": "Phân tích chức năng cụ thể của thiết bị/giao thức được đề cập trong câu hỏi để loại trừ phương án sai.",
      "level3_steps": "Xem xét mối liên hệ giữa dữ kiện đề bài và từng lựa chọn A, B, C, D để tìm phương án chính xác nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12B - Kết nối mạng.",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-NET-57",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "content": "Trang web hiển thị đầu tiên khi ta truy cập vào website gọi là gì?",
    "options": [
      {
        "id": "A",
        "content": "Một trang liên kết"
      },
      {
        "id": "B",
        "content": "Một website"
      },
      {
        "id": "C",
        "content": "Trang chủ"
      },
      {
        "id": "D",
        "content": "Trang web google.com"
      }
    ],
    "correctAnswer": "C",
    "hints": {
      "level1_concept": "Nhớ lại định nghĩa và các đặc trưng cốt lõi về thiết bị mạng (Switch, Modem, Access Point, Router) hoặc giao thức (TCP/IP, IP, DNS) trong Tin học 12.",
      "level2_formula": "Phân tích chức năng cụ thể của thiết bị/giao thức được đề cập trong câu hỏi để loại trừ phương án sai.",
      "level3_steps": "Xem xét mối liên hệ giữa dữ kiện đề bài và từng lựa chọn A, B, C, D để tìm phương án chính xác nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12B - Kết nối mạng.",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-NET-58",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "content": "Địa chỉ trang Web https://igiaoduc.vn/ chữ “vn” trên địa chỉ trang web có ý nghĩa gì?",
    "options": [
      {
        "id": "A",
        "content": "Một kí hiệu nào đó"
      },
      {
        "id": "B",
        "content": "Ký hiệu tên nước"
      },
      {
        "id": "C",
        "content": "Chữ viết tắt tiếng Anh"
      },
      {
        "id": "D",
        "content": "Địa chỉ gmail"
      }
    ],
    "correctAnswer": "B",
    "hints": {
      "level1_concept": "Nhớ lại định nghĩa và các đặc trưng cốt lõi về thiết bị mạng (Switch, Modem, Access Point, Router) hoặc giao thức (TCP/IP, IP, DNS) trong Tin học 12.",
      "level2_formula": "Phân tích chức năng cụ thể của thiết bị/giao thức được đề cập trong câu hỏi để loại trừ phương án sai.",
      "level3_steps": "Xem xét mối liên hệ giữa dữ kiện đề bài và từng lựa chọn A, B, C, D để tìm phương án chính xác nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12B - Kết nối mạng.",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-NET-59",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "content": "Phần mềm nào sau đây không phải trình duyệt WEB?",
    "options": [
      {
        "id": "A",
        "content": "Microsoft Ege"
      },
      {
        "id": "B",
        "content": "Mozilla Firefox"
      },
      {
        "id": "C",
        "content": "Netcape"
      },
      {
        "id": "D",
        "content": "Unikey"
      }
    ],
    "correctAnswer": "D",
    "hints": {
      "level1_concept": "Nhớ lại định nghĩa và các đặc trưng cốt lõi về thiết bị mạng (Switch, Modem, Access Point, Router) hoặc giao thức (TCP/IP, IP, DNS) trong Tin học 12.",
      "level2_formula": "Phân tích chức năng cụ thể của thiết bị/giao thức được đề cập trong câu hỏi để loại trừ phương án sai.",
      "level3_steps": "Xem xét mối liên hệ giữa dữ kiện đề bài và từng lựa chọn A, B, C, D để tìm phương án chính xác nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12B - Kết nối mạng.",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-NET-60",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "content": "DNS có nghĩa là gì?",
    "options": [
      {
        "id": "A",
        "content": "Dịch vụ tên miền"
      },
      {
        "id": "B",
        "content": "Dịch vụ phân giải tên miền"
      },
      {
        "id": "C",
        "content": "Dịch vụ máy chủ"
      },
      {
        "id": "D",
        "content": "Dịch vụ phân giải máy chủ"
      }
    ],
    "correctAnswer": "B",
    "hints": {
      "level1_concept": "Nhớ lại định nghĩa và các đặc trưng cốt lõi về thiết bị mạng (Switch, Modem, Access Point, Router) hoặc giao thức (TCP/IP, IP, DNS) trong Tin học 12.",
      "level2_formula": "Phân tích chức năng cụ thể của thiết bị/giao thức được đề cập trong câu hỏi để loại trừ phương án sai.",
      "level3_steps": "Xem xét mối liên hệ giữa dữ kiện đề bài và từng lựa chọn A, B, C, D để tìm phương án chính xác nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12B - Kết nối mạng.",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-NET-61",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "content": "Website là gì?",
    "options": [
      {
        "id": "A",
        "content": "Là một hoặc nhiều trang web được tổ chức dưới một địa chỉ truy cập."
      },
      {
        "id": "B",
        "content": "Là hình thức trao đổi thông tin dưới dạng thư thông qua hệ thống mạng máy tính."
      },
      {
        "id": "C",
        "content": "Là các file được tạo ra bởi Word, Excel, PowerPoint … rồi chuyển sang html."
      },
      {
        "id": "D",
        "content": "Chỉ là một trang Word bình thường"
      }
    ],
    "correctAnswer": "A",
    "hints": {
      "level1_concept": "Nhớ lại định nghĩa và các đặc trưng cốt lõi về thiết bị mạng (Switch, Modem, Access Point, Router) hoặc giao thức (TCP/IP, IP, DNS) trong Tin học 12.",
      "level2_formula": "Phân tích chức năng cụ thể của thiết bị/giao thức được đề cập trong câu hỏi để loại trừ phương án sai.",
      "level3_steps": "Xem xét mối liên hệ giữa dữ kiện đề bài và từng lựa chọn A, B, C, D để tìm phương án chính xác nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12B - Kết nối mạng.",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-NET-62",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "content": "Tên miền trong địa chỉ website có .edu cho biết Website đó thuộc về?",
    "options": [
      {
        "id": "A",
        "content": "Lĩnh vực chính phủ"
      },
      {
        "id": "B",
        "content": "Lĩnh vực giáo dục"
      },
      {
        "id": "C",
        "content": "Lĩnh vực cung cấp thông tin"
      },
      {
        "id": "D",
        "content": "Thuộc về các tổ chức khác"
      }
    ],
    "correctAnswer": "B",
    "hints": {
      "level1_concept": "Nhớ lại định nghĩa và các đặc trưng cốt lõi về thiết bị mạng (Switch, Modem, Access Point, Router) hoặc giao thức (TCP/IP, IP, DNS) trong Tin học 12.",
      "level2_formula": "Phân tích chức năng cụ thể của thiết bị/giao thức được đề cập trong câu hỏi để loại trừ phương án sai.",
      "level3_steps": "Xem xét mối liên hệ giữa dữ kiện đề bài và từng lựa chọn A, B, C, D để tìm phương án chính xác nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12B - Kết nối mạng.",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-NET-63",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "content": "Muốn kết nối các máy tính trong phạm vi gia đình thành một mạng, nên dùng loại thiết bị nào sau đây?",
    "options": [
      {
        "id": "A",
        "content": "Switch"
      },
      {
        "id": "B",
        "content": "WAP"
      },
      {
        "id": "C",
        "content": "Modem"
      },
      {
        "id": "D",
        "content": "Router"
      }
    ],
    "correctAnswer": "A",
    "hints": {
      "level1_concept": "Nhớ lại định nghĩa và các đặc trưng cốt lõi về thiết bị mạng (Switch, Modem, Access Point, Router) hoặc giao thức (TCP/IP, IP, DNS) trong Tin học 12.",
      "level2_formula": "Phân tích chức năng cụ thể của thiết bị/giao thức được đề cập trong câu hỏi để loại trừ phương án sai.",
      "level3_steps": "Xem xét mối liên hệ giữa dữ kiện đề bài và từng lựa chọn A, B, C, D để tìm phương án chính xác nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12B - Kết nối mạng.",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-NET-64",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "content": "Internet là mạng toàn cầu hoạt động theo giao thức",
    "options": [
      {
        "id": "A",
        "content": "SMTP"
      },
      {
        "id": "B",
        "content": "TCP/IP"
      },
      {
        "id": "C",
        "content": "HTTP"
      },
      {
        "id": "D",
        "content": "DNS"
      }
    ],
    "correctAnswer": "B",
    "hints": {
      "level1_concept": "Nhớ lại định nghĩa và các đặc trưng cốt lõi về thiết bị mạng (Switch, Modem, Access Point, Router) hoặc giao thức (TCP/IP, IP, DNS) trong Tin học 12.",
      "level2_formula": "Phân tích chức năng cụ thể của thiết bị/giao thức được đề cập trong câu hỏi để loại trừ phương án sai.",
      "level3_steps": "Xem xét mối liên hệ giữa dữ kiện đề bài và từng lựa chọn A, B, C, D để tìm phương án chính xác nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12B - Kết nối mạng.",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-NET-65",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "content": "Wi-Fi là một bộ tiêu chuẩn kĩ thuật truyền dữ liệu bằng … được sử dụng rộng rãi trong các mạng cục bộ. Điền cụm từ còn thiếu vào dấu ba chấm.",
    "options": [
      {
        "id": "A",
        "content": "Cáp xoắn đôi"
      },
      {
        "id": "B",
        "content": "Sóng vô tuyến điện"
      },
      {
        "id": "C",
        "content": "Cáp đồng trục"
      },
      {
        "id": "D",
        "content": "Đường dây điện thoại"
      }
    ],
    "correctAnswer": "B",
    "hints": {
      "level1_concept": "Nhớ lại định nghĩa và các đặc trưng cốt lõi về thiết bị mạng (Switch, Modem, Access Point, Router) hoặc giao thức (TCP/IP, IP, DNS) trong Tin học 12.",
      "level2_formula": "Phân tích chức năng cụ thể của thiết bị/giao thức được đề cập trong câu hỏi để loại trừ phương án sai.",
      "level3_steps": "Xem xét mối liên hệ giữa dữ kiện đề bài và từng lựa chọn A, B, C, D để tìm phương án chính xác nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12B - Kết nối mạng.",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-NET-66",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "content": "Mỗi thiết bị tham gia Internet đều phải có địa chỉ. Hiện nay (2024) có bao nhiêu loại địa chỉ IP?",
    "options": [
      {
        "id": "A",
        "content": "4 loại"
      },
      {
        "id": "B",
        "content": "1 loại"
      },
      {
        "id": "C",
        "content": "3 loại"
      },
      {
        "id": "D",
        "content": "2 loại"
      }
    ],
    "correctAnswer": "D",
    "hints": {
      "level1_concept": "Nhớ lại định nghĩa và các đặc trưng cốt lõi về thiết bị mạng (Switch, Modem, Access Point, Router) hoặc giao thức (TCP/IP, IP, DNS) trong Tin học 12.",
      "level2_formula": "Phân tích chức năng cụ thể của thiết bị/giao thức được đề cập trong câu hỏi để loại trừ phương án sai.",
      "level3_steps": "Xem xét mối liên hệ giữa dữ kiện đề bài và từng lựa chọn A, B, C, D để tìm phương án chính xác nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12B - Kết nối mạng.",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-NET-67",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "content": "Xác định địa chỉ IP tương ứng ở dạng thập phân của địa chỉ sau: 11000000 10101000 00000010 00000011",
    "options": [
      {
        "id": "A",
        "content": "131.214.23.16"
      },
      {
        "id": "B",
        "content": "192.168.13.210"
      },
      {
        "id": "C",
        "content": "192.168.13.200"
      },
      {
        "id": "D",
        "content": "192.168.2.3"
      }
    ],
    "correctAnswer": "D",
    "hints": {
      "level1_concept": "Nhớ lại định nghĩa và các đặc trưng cốt lõi về thiết bị mạng (Switch, Modem, Access Point, Router) hoặc giao thức (TCP/IP, IP, DNS) trong Tin học 12.",
      "level2_formula": "Phân tích chức năng cụ thể của thiết bị/giao thức được đề cập trong câu hỏi để loại trừ phương án sai.",
      "level3_steps": "Xem xét mối liên hệ giữa dữ kiện đề bài và từng lựa chọn A, B, C, D để tìm phương án chính xác nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12B - Kết nối mạng.",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-NET-68",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "content": "Lệnh nào của giao thức ICMP (Internet Control Message Protocol) giúp kiểm tra máy tính có kết nối được với một máy tính hay một thiết bị mạng hay không?",
    "options": [
      {
        "id": "A",
        "content": "touch"
      },
      {
        "id": "B",
        "content": "Mkdir"
      },
      {
        "id": "C",
        "content": "ping"
      },
      {
        "id": "D",
        "content": "tracert"
      }
    ],
    "correctAnswer": "C",
    "hints": {
      "level1_concept": "Nhớ lại định nghĩa và các đặc trưng cốt lõi về thiết bị mạng (Switch, Modem, Access Point, Router) hoặc giao thức (TCP/IP, IP, DNS) trong Tin học 12.",
      "level2_formula": "Phân tích chức năng cụ thể của thiết bị/giao thức được đề cập trong câu hỏi để loại trừ phương án sai.",
      "level3_steps": "Xem xét mối liên hệ giữa dữ kiện đề bài và từng lựa chọn A, B, C, D để tìm phương án chính xác nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12B - Kết nối mạng.",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-NET-69",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "content": "Điểm khác nhau của Hub và Switch là ở:",
    "options": [
      {
        "id": "A",
        "content": "Số cổng kết nối"
      },
      {
        "id": "B",
        "content": "Hình dáng thiết bị"
      },
      {
        "id": "C",
        "content": "Cách thức hoạt động"
      },
      {
        "id": "D",
        "content": "Màu sắc thiết bị"
      }
    ],
    "correctAnswer": "C",
    "hints": {
      "level1_concept": "Nhớ lại định nghĩa và các đặc trưng cốt lõi về thiết bị mạng (Switch, Modem, Access Point, Router) hoặc giao thức (TCP/IP, IP, DNS) trong Tin học 12.",
      "level2_formula": "Phân tích chức năng cụ thể của thiết bị/giao thức được đề cập trong câu hỏi để loại trừ phương án sai.",
      "level3_steps": "Xem xét mối liên hệ giữa dữ kiện đề bài và từng lựa chọn A, B, C, D để tìm phương án chính xác nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12B - Kết nối mạng.",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-NET-70",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "content": "IP động là gì?",
    "options": [
      {
        "id": "A",
        "content": "Địa chỉ IP thay đổi theo thời gian"
      },
      {
        "id": "B",
        "content": "Địa chỉ IP cố định"
      },
      {
        "id": "C",
        "content": "Địa chỉ IP của nhà cung cấp dịch vụ"
      },
      {
        "id": "D",
        "content": "Địa chỉ IP của trang web"
      }
    ],
    "correctAnswer": "A",
    "hints": {
      "level1_concept": "Nhớ lại định nghĩa và các đặc trưng cốt lõi về thiết bị mạng (Switch, Modem, Access Point, Router) hoặc giao thức (TCP/IP, IP, DNS) trong Tin học 12.",
      "level2_formula": "Phân tích chức năng cụ thể của thiết bị/giao thức được đề cập trong câu hỏi để loại trừ phương án sai.",
      "level3_steps": "Xem xét mối liên hệ giữa dữ kiện đề bài và từng lựa chọn A, B, C, D để tìm phương án chính xác nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12B - Kết nối mạng.",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-NET-71",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "content": "Mệnh đề nào sau đây là SAI khi nói về việc kết nối máy tính và Access Point?",
    "options": [
      {
        "id": "A",
        "content": "Access Point cần được kết nối với Router hoặc Modem để cung cấp truy cập Internet."
      },
      {
        "id": "B",
        "content": "Máy tính có thể kết nối với Access Point bằng cáp Ethernet hoặc Wi-fi."
      },
      {
        "id": "C",
        "content": "Access Point có thể cung cấp kết nối Internet cho nhiều máy tính cùng lúc."
      },
      {
        "id": "D",
        "content": "Tất cả Access Point khi truy cập đều cần mật khẩu."
      }
    ],
    "correctAnswer": "D",
    "hints": {
      "level1_concept": "Nhớ lại định nghĩa và các đặc trưng cốt lõi về thiết bị mạng (Switch, Modem, Access Point, Router) hoặc giao thức (TCP/IP, IP, DNS) trong Tin học 12.",
      "level2_formula": "Phân tích chức năng cụ thể của thiết bị/giao thức được đề cập trong câu hỏi để loại trừ phương án sai.",
      "level3_steps": "Xem xét mối liên hệ giữa dữ kiện đề bài và từng lựa chọn A, B, C, D để tìm phương án chính xác nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12B - Kết nối mạng.",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-NET-72",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "content": "Một bạn học sinh cần thiết lập máy tính của mình thành máy cung cấp dịch vụ in cho các máy tính của các bạn khác trong phòng máy. Các bước bạn học sinh đã thực hiện bao gồm: Bước 1: Kết nối máy in với máy tính. Bước 2: Đặt cấu hình chia sẻ máy in. Bước 3: Bước 4: In thử từ máy tính khác trong mạng. Phương án nào sau đây là phù hợp nhất để điền vào Bước 3?",
    "options": [
      {
        "id": "A",
        "content": "Kết nối với Bluetooth."
      },
      {
        "id": "B",
        "content": "Cài đặt phần mềm diệt virus."
      },
      {
        "id": "C",
        "content": "Chia sẻ thư mục."
      },
      {
        "id": "D",
        "content": "Kết nối với mạng."
      }
    ],
    "correctAnswer": "D",
    "hints": {
      "level1_concept": "Nhớ lại định nghĩa và các đặc trưng cốt lõi về thiết bị mạng (Switch, Modem, Access Point, Router) hoặc giao thức (TCP/IP, IP, DNS) trong Tin học 12.",
      "level2_formula": "Phân tích chức năng cụ thể của thiết bị/giao thức được đề cập trong câu hỏi để loại trừ phương án sai.",
      "level3_steps": "Xem xét mối liên hệ giữa dữ kiện đề bài và từng lựa chọn A, B, C, D để tìm phương án chính xác nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 12B - Kết nối mạng.",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-TF-NET-01",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 2: Trắc nghiệm Đúng / Sai Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "NhanBiet",
    "type": "true_false",
    "content": "Các phát biểu sau đúng hay sai?",
    "tfItems": [
      {
        "id": "a",
        "content": "Mạng máy tính có thể kết nối bằng dây cáp mạng hoặc sóng vô tuyến.",
        "correctAnswer": true
      },
      {
        "id": "b",
        "content": "Cáp quang sử dụng dây dẫn kim loại để truyền tín hiệu điện.",
        "correctAnswer": false
      },
      {
        "id": "c",
        "content": "Thiết bị đầu cuối bao gồm máy tính cá nhân, điện thoại thông minh, máy in, và cảm biến nhiệt độ.",
        "correctAnswer": true
      },
      {
        "id": "d",
        "content": "Địa chỉ MAC gồm 12 ký tự hệ thập lục phân, biểu diễn cho mỗi thiết bị trong mạng máy tính.",
        "correctAnswer": true
      }
    ],
    "hints": {
      "level1_concept": "Xác định rõ các khái niệm về mạng LAN, WLAN, Switch, Modem, Access Point, Router và giao thức TCP/IP.",
      "level2_formula": "Phân tích kỹ tính chính xác của từng mệnh đề a), b), c), d), lưu ý vai trò của bảng địa chỉ MAC của Switch so với địa chỉ IP của Router.",
      "level3_steps": "Đối chiếu nội dung phát biểu với chuẩn kiến thức Chuyên đề 12B để chọn Đúng hoặc Sai cho từng ý."
    },
    "explanation": "Đáp án chi tiết theo tài liệu Chuyên đề 12B - Kết nối mạng:\n- Ý a) : Đúng (Mạng máy tính có thể kết nối bằng dây cáp mạng hoặc sóng vô tuyến.)\n- Ý b) : Sai (Cáp quang sử dụng dây dẫn kim loại để truyền tín hiệu điện.)\n- Ý c) : Đúng (Thiết bị đầu cuối bao gồm máy tính cá nhân, điện thoại thông minh, máy in, và cảm biến nhiệt độ.)\n- Ý d) : Đúng (Địa chỉ MAC gồm 12 ký tự hệ thập lục phân, biểu diễn cho mỗi thiết bị trong mạng máy tính.)",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-TF-NET-02",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 2: Trắc nghiệm Đúng / Sai Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "NhanBiet",
    "type": "true_false",
    "content": "Các phát biểu sau đúng  hay sai  khi nói về các loại mạng và thiết bị liên quan:",
    "tfItems": [
      {
        "id": "a",
        "content": "Mạng LAN thường được sử dụng để kết nối các thiết bị trong phạm vi nhỏ như tòa nhà hoặc văn phòng.",
        "correctAnswer": true
      },
      {
        "id": "b",
        "content": "Switch trong mạng LAN sử dụng bảng địa chỉ IP để xác định cổng để chuyển tiếp gói tin.",
        "correctAnswer": false
      },
      {
        "id": "c",
        "content": "Mạng WLAN là mạng cục bộ không dây sử dụng công nghệ Wi-Fi.",
        "correctAnswer": true
      },
      {
        "id": "d",
        "content": "Router là thiết bị chuyển tiếp dữ liệu trong mạng WAN, xác định đường đi tối ưu cho gói tin.",
        "correctAnswer": true
      }
    ],
    "hints": {
      "level1_concept": "Xác định rõ các khái niệm về mạng LAN, WLAN, Switch, Modem, Access Point, Router và giao thức TCP/IP.",
      "level2_formula": "Phân tích kỹ tính chính xác của từng mệnh đề a), b), c), d), lưu ý vai trò của bảng địa chỉ MAC của Switch so với địa chỉ IP của Router.",
      "level3_steps": "Đối chiếu nội dung phát biểu với chuẩn kiến thức Chuyên đề 12B để chọn Đúng hoặc Sai cho từng ý."
    },
    "explanation": "Đáp án chi tiết theo tài liệu Chuyên đề 12B - Kết nối mạng:\n- Ý a) : Đúng (Mạng LAN thường được sử dụng để kết nối các thiết bị trong phạm vi nhỏ như tòa nhà hoặc văn phòng.)\n- Ý b) : Sai (Switch trong mạng LAN sử dụng bảng địa chỉ IP để xác định cổng để chuyển tiếp gói tin.)\n- Ý c) : Đúng (Mạng WLAN là mạng cục bộ không dây sử dụng công nghệ Wi-Fi.)\n- Ý d) : Đúng (Router là thiết bị chuyển tiếp dữ liệu trong mạng WAN, xác định đường đi tối ưu cho gói tin.)",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-TF-NET-03",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 2: Trắc nghiệm Đúng / Sai Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "NhanBiet",
    "type": "true_false",
    "content": "Đánh dấu đúng hay sai về khái niệm cơ bản của giao thức mạng?",
    "tfItems": [
      {
        "id": "a",
        "content": "Giao thức mạng là tập hợp các quy tắc để điều khiển truyền thông và trao đổi dữ liệu giữa các thiết bị.",
        "correctAnswer": true
      },
      {
        "id": "b",
        "content": "Giao thức mạng chỉ tập trung vào định dạng và chuẩn hóa dữ liệu.",
        "correctAnswer": false
      },
      {
        "id": "c",
        "content": "Giao thức mạng không liên quan đến bảo mật và độ tin cậy của dữ liệu.",
        "correctAnswer": false
      },
      {
        "id": "d",
        "content": "Giao thức mạng bao gồm cả việc tích hợp các dịch vụ và ứng dụng.",
        "correctAnswer": true
      }
    ],
    "hints": {
      "level1_concept": "Xác định rõ các khái niệm về mạng LAN, WLAN, Switch, Modem, Access Point, Router và giao thức TCP/IP.",
      "level2_formula": "Phân tích kỹ tính chính xác của từng mệnh đề a), b), c), d), lưu ý vai trò của bảng địa chỉ MAC của Switch so với địa chỉ IP của Router.",
      "level3_steps": "Đối chiếu nội dung phát biểu với chuẩn kiến thức Chuyên đề 12B để chọn Đúng hoặc Sai cho từng ý."
    },
    "explanation": "Đáp án chi tiết theo tài liệu Chuyên đề 12B - Kết nối mạng:\n- Ý a) : Đúng (Giao thức mạng là tập hợp các quy tắc để điều khiển truyền thông và trao đổi dữ liệu giữa các thiết bị.)\n- Ý b) : Sai (Giao thức mạng chỉ tập trung vào định dạng và chuẩn hóa dữ liệu.)\n- Ý c) : Sai (Giao thức mạng không liên quan đến bảo mật và độ tin cậy của dữ liệu.)\n- Ý d) : Đúng (Giao thức mạng bao gồm cả việc tích hợp các dịch vụ và ứng dụng.)",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-TF-NET-04",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 2: Trắc nghiệm Đúng / Sai Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "NhanBiet",
    "type": "true_false",
    "content": "Đánh dấu đúng hoặc sai về giao thức IP và hệ thống tên miền?",
    "tfItems": [
      {
        "id": "a",
        "content": "Giao thức IP quản lý và định tuyến gói tin trên mạng máy tính.",
        "correctAnswer": true
      },
      {
        "id": "b",
        "content": "Địa chỉ IP là số duy nhất được gán cho mỗi thiết bị trong mạng.",
        "correctAnswer": true
      },
      {
        "id": "c",
        "content": "DNS chỉ chuyển đổi tên miền thành địa chỉ IP và không có chức năng nào khác.",
        "correctAnswer": false
      },
      {
        "id": "d",
        "content": "Tất cả các tên miền cấp ba phải luôn bắt đầu bằng \"www\"",
        "correctAnswer": false
      }
    ],
    "hints": {
      "level1_concept": "Xác định rõ các khái niệm về mạng LAN, WLAN, Switch, Modem, Access Point, Router và giao thức TCP/IP.",
      "level2_formula": "Phân tích kỹ tính chính xác của từng mệnh đề a), b), c), d), lưu ý vai trò của bảng địa chỉ MAC của Switch so với địa chỉ IP của Router.",
      "level3_steps": "Đối chiếu nội dung phát biểu với chuẩn kiến thức Chuyên đề 12B để chọn Đúng hoặc Sai cho từng ý."
    },
    "explanation": "Đáp án chi tiết theo tài liệu Chuyên đề 12B - Kết nối mạng:\n- Ý a) : Đúng (Giao thức IP quản lý và định tuyến gói tin trên mạng máy tính.)\n- Ý b) : Đúng (Địa chỉ IP là số duy nhất được gán cho mỗi thiết bị trong mạng.)\n- Ý c) : Sai (DNS chỉ chuyển đổi tên miền thành địa chỉ IP và không có chức năng nào khác.)\n- Ý d) : Sai (Tất cả các tên miền cấp ba phải luôn bắt đầu bằng \"www\")",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-TF-NET-05",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 2: Trắc nghiệm Đúng / Sai Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "type": "true_false",
    "content": "Trong quá trình kết nối máy tính với Switch, các bước sau đây có chính xác không? Chọn đúng hoặc sai?",
    "tfItems": [
      {
        "id": "a",
        "content": "Sử dụng cáp mạng RJ45 để kết nối.",
        "correctAnswer": true
      },
      {
        "id": "b",
        "content": "Cắm dây vào cổng USB trên máy tính và Switch.",
        "correctAnswer": false
      },
      {
        "id": "c",
        "content": "Kiểm tra đèn báo hiệu trên cổng để xác nhận kết nối vật lý.",
        "correctAnswer": true
      },
      {
        "id": "d",
        "content": "Kiểm tra kết nối mạng bằng cách mở trình duyệt web.",
        "correctAnswer": true
      }
    ],
    "hints": {
      "level1_concept": "Xác định rõ các khái niệm về mạng LAN, WLAN, Switch, Modem, Access Point, Router và giao thức TCP/IP.",
      "level2_formula": "Phân tích kỹ tính chính xác của từng mệnh đề a), b), c), d), lưu ý vai trò của bảng địa chỉ MAC của Switch so với địa chỉ IP của Router.",
      "level3_steps": "Đối chiếu nội dung phát biểu với chuẩn kiến thức Chuyên đề 12B để chọn Đúng hoặc Sai cho từng ý."
    },
    "explanation": "Đáp án chi tiết theo tài liệu Chuyên đề 12B - Kết nối mạng:\n- Ý a) : Đúng (Sử dụng cáp mạng RJ45 để kết nối.)\n- Ý b) : Sai (Cắm dây vào cổng USB trên máy tính và Switch.)\n- Ý c) : Đúng (Kiểm tra đèn báo hiệu trên cổng để xác nhận kết nối vật lý.)\n- Ý d) : Đúng (Kiểm tra kết nối mạng bằng cách mở trình duyệt web.)",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-TF-NET-06",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 2: Trắc nghiệm Đúng / Sai Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "type": "true_false",
    "content": "Trong quá trình chia sẻ dữ liệu từ máy tính PC-A trên cùng mạng LAN, các bước sau đây có đúng không? Chọn đúng hoặc sai?",
    "tfItems": [
      {
        "id": "a",
        "content": "Chọn ổ cứng chứa dữ liệu, sau đó chọn Properties.",
        "correctAnswer": true
      },
      {
        "id": "b",
        "content": "Vào tab Sharing và chọn Advanced Sharing.",
        "correctAnswer": true
      },
      {
        "id": "c",
        "content": "Tích vào ô Share this folĐểr và chọn Permissions.",
        "correctAnswer": true
      },
      {
        "id": "d",
        "content": "Đặt tên chia sẻ cho ổ cứng.",
        "correctAnswer": false
      }
    ],
    "hints": {
      "level1_concept": "Xác định rõ các khái niệm về mạng LAN, WLAN, Switch, Modem, Access Point, Router và giao thức TCP/IP.",
      "level2_formula": "Phân tích kỹ tính chính xác của từng mệnh đề a), b), c), d), lưu ý vai trò của bảng địa chỉ MAC của Switch so với địa chỉ IP của Router.",
      "level3_steps": "Đối chiếu nội dung phát biểu với chuẩn kiến thức Chuyên đề 12B để chọn Đúng hoặc Sai cho từng ý."
    },
    "explanation": "Đáp án chi tiết theo tài liệu Chuyên đề 12B - Kết nối mạng:\n- Ý a) : Đúng (Chọn ổ cứng chứa dữ liệu, sau đó chọn Properties.)\n- Ý b) : Đúng (Vào tab Sharing và chọn Advanced Sharing.)\n- Ý c) : Đúng (Tích vào ô Share this folĐểr và chọn Permissions.)\n- Ý d) : Sai (Đặt tên chia sẻ cho ổ cứng.)",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-TF-NET-07",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 2: Trắc nghiệm Đúng / Sai Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "type": "true_false",
    "content": "Khi thực hiện kết nối máy tính, thiết bị di động vào mạng bằng cáp tín hiệu và sóng Wi-Fi. Một nhóm học sinh đã thảo luận và đưa ra một số ý kiến thảo luận sau:",
    "tfItems": [
      {
        "id": "a",
        "content": "Wi-Fi là chữ viết tắt của cụm từ Wireless Fidelity.",
        "correctAnswer": true
      },
      {
        "id": "b",
        "content": "Hầu hết các máy tính để bàn đều có sẵn khả năng kết nối Wi-Fi như máy tính xách tay hay điện thoại thông minh.",
        "correctAnswer": false
      },
      {
        "id": "c",
        "content": "Để máy tính trong LAN có thể kết nối với Internet ta cần kết nối cáp từ máy tính với mạng Internet .",
        "correctAnswer": false
      },
      {
        "id": "d",
        "content": "Muốn kết nối thiết bị di động vào LAN bằng một trạm thu phát Wi-Fi được bảo mật, ta cần gõ đúng mật khẩu của trạm thu phát Wi-Fi đó.",
        "correctAnswer": true
      }
    ],
    "hints": {
      "level1_concept": "Xác định rõ các khái niệm về mạng LAN, WLAN, Switch, Modem, Access Point, Router và giao thức TCP/IP.",
      "level2_formula": "Phân tích kỹ tính chính xác của từng mệnh đề a), b), c), d), lưu ý vai trò của bảng địa chỉ MAC của Switch so với địa chỉ IP của Router.",
      "level3_steps": "Đối chiếu nội dung phát biểu với chuẩn kiến thức Chuyên đề 12B để chọn Đúng hoặc Sai cho từng ý."
    },
    "explanation": "Đáp án chi tiết theo tài liệu Chuyên đề 12B - Kết nối mạng:\n- Ý a) : Đúng (Wi-Fi là chữ viết tắt của cụm từ Wireless Fidelity.)\n- Ý b) : Sai (Hầu hết các máy tính để bàn đều có sẵn khả năng kết nối Wi-Fi như máy tính xách tay hay điện thoại thông minh.)\n- Ý c) : Sai (Để máy tính trong LAN có thể kết nối với Internet ta cần kết nối cáp từ máy tính với mạng Internet .)\n- Ý d) : Đúng (Muốn kết nối thiết bị di động vào LAN bằng một trạm thu phát Wi-Fi được bảo mật, ta cần gõ đúng mật khẩu của trạm thu phát Wi-Fi đó.)",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-TF-NET-08",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 2: Trắc nghiệm Đúng / Sai Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "ThongHieu",
    "type": "true_false",
    "content": "Sơ đồ cách bố trí máy tính và thiết bị mạng trong một trường học như sau. Trường có 6 phòng, mỗi phòng được lắp đặt 2 máy tính để bàn và 1 máy in được kết nối với 1 cổng Hub. Các Hub này được kết nối với nhau thông qua Switch trung tâm. Một nhóm học sinh khi quan sát sơ đồ này thì có nhận xét.",
    "tfItems": [
      {
        "id": "a",
        "content": "Có thể dùng cáp mạng để kết nối giữa máy tính và Hub.",
        "correctAnswer": true
      },
      {
        "id": "b",
        "content": "Nên sử dụng Switch thay thế cho Hub để tiết kiệm chi phí hơn.",
        "correctAnswer": false
      },
      {
        "id": "c",
        "content": "Cấu trúc mạng trong mỗi phòng là cấu trúc hình sao.",
        "correctAnswer": true
      },
      {
        "id": "d",
        "content": "Máy tính ở trong phòng này không thể chia sẻ thư mục với máy tính ở phòng khác.",
        "correctAnswer": false
      }
    ],
    "hints": {
      "level1_concept": "Xác định rõ các khái niệm về mạng LAN, WLAN, Switch, Modem, Access Point, Router và giao thức TCP/IP.",
      "level2_formula": "Phân tích kỹ tính chính xác của từng mệnh đề a), b), c), d), lưu ý vai trò của bảng địa chỉ MAC của Switch so với địa chỉ IP của Router.",
      "level3_steps": "Đối chiếu nội dung phát biểu với chuẩn kiến thức Chuyên đề 12B để chọn Đúng hoặc Sai cho từng ý."
    },
    "explanation": "Đáp án chi tiết theo tài liệu Chuyên đề 12B - Kết nối mạng:\n- Ý a) : Đúng (Có thể dùng cáp mạng để kết nối giữa máy tính và Hub.)\n- Ý b) : Sai (Nên sử dụng Switch thay thế cho Hub để tiết kiệm chi phí hơn.)\n- Ý c) : Đúng (Cấu trúc mạng trong mỗi phòng là cấu trúc hình sao.)\n- Ý d) : Sai (Máy tính ở trong phòng này không thể chia sẻ thư mục với máy tính ở phòng khác.)",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-TF-NET-09",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 2: Trắc nghiệm Đúng / Sai Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "VanDung",
    "type": "true_false",
    "content": "Hùng muốn chia sẻ một tài liệu cho các bạn trong nhóm học tập qua mạng LAN. Sau khi thực hiện các bước chia sẻ, Hùng thấy rằng các bạn chỉ có thể xem tài liệu mà không thể chính sửa.",
    "tfItems": [
      {
        "id": "a",
        "content": "Hùng đã thiết lập quyền truy cập “Read” cho tài liệu.",
        "correctAnswer": true
      },
      {
        "id": "b",
        "content": "Hùng cần thiết lập quyền truy cập “Read/Write” để các bạn trong nhóm có thể chính sửa tài liệu",
        "correctAnswer": true
      },
      {
        "id": "c",
        "content": "Việc các bạn không thể chỉnh sửa tài liệu do mạng LAN bị lỗi.",
        "correctAnswer": false
      },
      {
        "id": "d",
        "content": "Hùng cần gửi tài liệu qua email cho các bạn chỉnh sửa.",
        "correctAnswer": false
      }
    ],
    "hints": {
      "level1_concept": "Xác định rõ các khái niệm về mạng LAN, WLAN, Switch, Modem, Access Point, Router và giao thức TCP/IP.",
      "level2_formula": "Phân tích kỹ tính chính xác của từng mệnh đề a), b), c), d), lưu ý vai trò của bảng địa chỉ MAC của Switch so với địa chỉ IP của Router.",
      "level3_steps": "Đối chiếu nội dung phát biểu với chuẩn kiến thức Chuyên đề 12B để chọn Đúng hoặc Sai cho từng ý."
    },
    "explanation": "Đáp án chi tiết theo tài liệu Chuyên đề 12B - Kết nối mạng:\n- Ý a) : Đúng (Hùng đã thiết lập quyền truy cập “Read” cho tài liệu.)\n- Ý b) : Đúng (Hùng cần thiết lập quyền truy cập “Read/Write” để các bạn trong nhóm có thể chính sửa tài liệu)\n- Ý c) : Sai (Việc các bạn không thể chỉnh sửa tài liệu do mạng LAN bị lỗi.)\n- Ý d) : Sai (Hùng cần gửi tài liệu qua email cho các bạn chỉnh sửa.)",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-TF-NET-10",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 2: Trắc nghiệm Đúng / Sai Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "VanDung",
    "type": "true_false",
    "content": "Trong giờ học môn Tin học cô giáo chia lớp thành 4 nhóm để thảo luận về cách thức kết nối và chia sẻ dữ liệu trong mạng LAN. Các nhóm đã đưa ra các nhận định.",
    "tfItems": [
      {
        "id": "a",
        "content": "Mạng LAN giúp các máy tính trong mạng chia sẻ dữ liệu với nhau.",
        "correctAnswer": true
      },
      {
        "id": "b",
        "content": "Để kết nối mạng LAN cần có các thiết bị như dây mạng, Switch, vỉ mạng.",
        "correctAnswer": true
      },
      {
        "id": "c",
        "content": "Mạng LAN chỉ kết nối tối đa được 14 máy tính.",
        "correctAnswer": false
      },
      {
        "id": "d",
        "content": "Kết nối mạng LAN giúp truy cấp Internet nhanh hơn.",
        "correctAnswer": false
      }
    ],
    "hints": {
      "level1_concept": "Xác định rõ các khái niệm về mạng LAN, WLAN, Switch, Modem, Access Point, Router và giao thức TCP/IP.",
      "level2_formula": "Phân tích kỹ tính chính xác của từng mệnh đề a), b), c), d), lưu ý vai trò của bảng địa chỉ MAC của Switch so với địa chỉ IP của Router.",
      "level3_steps": "Đối chiếu nội dung phát biểu với chuẩn kiến thức Chuyên đề 12B để chọn Đúng hoặc Sai cho từng ý."
    },
    "explanation": "Đáp án chi tiết theo tài liệu Chuyên đề 12B - Kết nối mạng:\n- Ý a) : Đúng (Mạng LAN giúp các máy tính trong mạng chia sẻ dữ liệu với nhau.)\n- Ý b) : Đúng (Để kết nối mạng LAN cần có các thiết bị như dây mạng, Switch, vỉ mạng.)\n- Ý c) : Sai (Mạng LAN chỉ kết nối tối đa được 14 máy tính.)\n- Ý d) : Sai (Kết nối mạng LAN giúp truy cấp Internet nhanh hơn.)",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-TF-NET-11",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 2: Trắc nghiệm Đúng / Sai Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "VanDung",
    "type": "true_false",
    "content": "Khi được thầy giáo giao nhiệm vụ tìm hiểu về địa chỉ IP tĩnh Kiên đã đưa ra các nhận định như sau:",
    "tfItems": [
      {
        "id": "a",
        "content": "IP tĩnh được gán cố định cho một thiết bị.",
        "correctAnswer": true
      },
      {
        "id": "b",
        "content": "IP tĩnh được thay đổi theo thời gian.",
        "correctAnswer": false
      },
      {
        "id": "c",
        "content": "Muốn thay đổi địa chỉ IP phải liên hệ với nhà cung cấp dịch vụ mạng.",
        "correctAnswer": false
      },
      {
        "id": "d",
        "content": "Địa chỉ IP tĩnh luôn có dạng: 192.168.2",
        "correctAnswer": false
      }
    ],
    "hints": {
      "level1_concept": "Xác định rõ các khái niệm về mạng LAN, WLAN, Switch, Modem, Access Point, Router và giao thức TCP/IP.",
      "level2_formula": "Phân tích kỹ tính chính xác của từng mệnh đề a), b), c), d), lưu ý vai trò của bảng địa chỉ MAC của Switch so với địa chỉ IP của Router.",
      "level3_steps": "Đối chiếu nội dung phát biểu với chuẩn kiến thức Chuyên đề 12B để chọn Đúng hoặc Sai cho từng ý."
    },
    "explanation": "Đáp án chi tiết theo tài liệu Chuyên đề 12B - Kết nối mạng:\n- Ý a) : Đúng (IP tĩnh được gán cố định cho một thiết bị.)\n- Ý b) : Sai (IP tĩnh được thay đổi theo thời gian.)\n- Ý c) : Sai (Muốn thay đổi địa chỉ IP phải liên hệ với nhà cung cấp dịch vụ mạng.)\n- Ý d) : Sai (Địa chỉ IP tĩnh luôn có dạng: 192.168.2)",
    "sourceDocTitle": "Chuyên đề 12B. Kết nối mạng (Google Drive)"
  },
  {
    "id": "Q-TIN-PY-01",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-lap-trinh-python",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Python (Tuần 2 – 6)",
    "chapterName": "Phần 1: Lập trình cơ bản Python (Tin học 10)",
    "difficulty": "ThongHieu",
    "content": "Trong các đặc điểm sau, đặc điểm nào không phải là của ngôn ngữ lập trình bậc cao?",
    "options": [
      {
        "id": "A",
        "content": "Gần gũi với ngôn ngữ tự nhiên của con người"
      },
      {
        "id": "B",
        "content": "Được máy tính hiểu trực tiếp mà không cần dịch"
      },
      {
        "id": "C",
        "content": "Dễ đọc và dễ bảo trì"
      },
      {
        "id": "D",
        "content": "Có nhiều thư viện hỗ trợ đa dạng"
      }
    ],
    "correctAnswer": "B",
    "hints": {
      "level1_concept": "Nhớ lại cú pháp, quy tắc đặt tên biến, kiểu dữ liệu hoặc cấu trúc điều khiển trong ngôn ngữ Python.",
      "level2_formula": "Mô phỏng từng bước thực hiện của câu lệnh hoặc phân tích điều kiện logic để loại trừ các phương án sai.",
      "level3_steps": "Đối chiếu với quy tắc chuẩn của Python (thụt lề, chỉ số từ 0, hàm chuẩn) để chọn phương án đúng nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 10F - Lập trình cơ bản.",
    "sourceDocTitle": "Chuyên đề 10F. Lập trình cơ bản (Google Drive)"
  },
  {
    "id": "Q-TIN-PY-02",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-lap-trinh-python",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Python (Tuần 2 – 6)",
    "chapterName": "Phần 1: Lập trình cơ bản Python (Tin học 10)",
    "difficulty": "ThongHieu",
    "content": "Quy tắc nào sau đây không đúng khi đặt tên biến trong Python?",
    "options": [
      {
        "id": "A",
        "content": "Tên biến không được trùng với các từ khóa của Python."
      },
      {
        "id": "B",
        "content": "Tên biến phải bắt đầu bằng chữ cái hoặc dấu “”."
      },
      {
        "id": "C",
        "content": "Tên biến không được phép bắt đầu bằng chữ in hoa."
      },
      {
        "id": "D",
        "content": "Tên biến chỉ chứa các chữ cái, chữ số và dấu “”."
      }
    ],
    "correctAnswer": "C",
    "hints": {
      "level1_concept": "Nhớ lại cú pháp, quy tắc đặt tên biến, kiểu dữ liệu hoặc cấu trúc điều khiển trong ngôn ngữ Python.",
      "level2_formula": "Mô phỏng từng bước thực hiện của câu lệnh hoặc phân tích điều kiện logic để loại trừ các phương án sai.",
      "level3_steps": "Đối chiếu với quy tắc chuẩn của Python (thụt lề, chỉ số từ 0, hàm chuẩn) để chọn phương án đúng nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 10F - Lập trình cơ bản.",
    "sourceDocTitle": "Chuyên đề 10F. Lập trình cơ bản (Google Drive)"
  },
  {
    "id": "Q-TIN-PY-03",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-lap-trinh-python",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Python (Tuần 2 – 6)",
    "chapterName": "Phần 1: Lập trình cơ bản Python (Tin học 10)",
    "difficulty": "ThongHieu",
    "content": "Khi khai báo biến kiểu số nguyên, cú pháp nào là đúng?",
    "options": [
      {
        "id": "A",
        "content": "int a = \"10\";"
      },
      {
        "id": "B",
        "content": "float a = 10;"
      },
      {
        "id": "C",
        "content": "int a = 10;"
      },
      {
        "id": "D",
        "content": "string a = 10;"
      }
    ],
    "correctAnswer": "C",
    "hints": {
      "level1_concept": "Nhớ lại cú pháp, quy tắc đặt tên biến, kiểu dữ liệu hoặc cấu trúc điều khiển trong ngôn ngữ Python.",
      "level2_formula": "Mô phỏng từng bước thực hiện của câu lệnh hoặc phân tích điều kiện logic để loại trừ các phương án sai.",
      "level3_steps": "Đối chiếu với quy tắc chuẩn của Python (thụt lề, chỉ số từ 0, hàm chuẩn) để chọn phương án đúng nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 10F - Lập trình cơ bản.",
    "sourceDocTitle": "Chuyên đề 10F. Lập trình cơ bản (Google Drive)"
  },
  {
    "id": "Q-TIN-PY-04",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-lap-trinh-python",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Python (Tuần 2 – 6)",
    "chapterName": "Phần 1: Lập trình cơ bản Python (Tin học 10)",
    "difficulty": "ThongHieu",
    "content": "Để nhập một giá trị số nguyên từ bàn phím và gán vào biến x, câu lệnh đúng trong Python là:",
    "options": [
      {
        "id": "A",
        "content": "x = (input(\"Nhập số nguyên: \"))"
      },
      {
        "id": "B",
        "content": "x = float(input(\"Nhập số nguyên: \"))"
      },
      {
        "id": "C",
        "content": "x = input(\"Nhập số nguyên: \")"
      },
      {
        "id": "D",
        "content": "x = int(input(\"Nhập số nguyên: \"))"
      }
    ],
    "correctAnswer": "D",
    "hints": {
      "level1_concept": "Nhớ lại cú pháp, quy tắc đặt tên biến, kiểu dữ liệu hoặc cấu trúc điều khiển trong ngôn ngữ Python.",
      "level2_formula": "Mô phỏng từng bước thực hiện của câu lệnh hoặc phân tích điều kiện logic để loại trừ các phương án sai.",
      "level3_steps": "Đối chiếu với quy tắc chuẩn của Python (thụt lề, chỉ số từ 0, hàm chuẩn) để chọn phương án đúng nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 10F - Lập trình cơ bản.",
    "sourceDocTitle": "Chuyên đề 10F. Lập trình cơ bản (Google Drive)"
  },
  {
    "id": "Q-TIN-PY-05",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-lap-trinh-python",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Python (Tuần 2 – 6)",
    "chapterName": "Phần 1: Lập trình cơ bản Python (Tin học 10)",
    "difficulty": "ThongHieu",
    "content": "Cấu trúc đúng của một câu lệnh if trong Python là gì?",
    "options": [
      {
        "id": "A",
        "content": "if (điều kiện) { lệnh }"
      },
      {
        "id": "B",
        "content": "if (điều kiện) : lệnh"
      },
      {
        "id": "C",
        "content": "if <điều kiện: lệnh"
      },
      {
        "id": "D",
        "content": "if <điều kiện> :"
      }
    ],
    "correctAnswer": "D",
    "hints": {
      "level1_concept": "Nhớ lại cú pháp, quy tắc đặt tên biến, kiểu dữ liệu hoặc cấu trúc điều khiển trong ngôn ngữ Python.",
      "level2_formula": "Mô phỏng từng bước thực hiện của câu lệnh hoặc phân tích điều kiện logic để loại trừ các phương án sai.",
      "level3_steps": "Đối chiếu với quy tắc chuẩn của Python (thụt lề, chỉ số từ 0, hàm chuẩn) để chọn phương án đúng nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 10F - Lập trình cơ bản.",
    "sourceDocTitle": "Chuyên đề 10F. Lập trình cơ bản (Google Drive)"
  },
  {
    "id": "Q-TIN-PY-06",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-lap-trinh-python",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Python (Tuần 2 – 6)",
    "chapterName": "Phần 1: Lập trình cơ bản Python (Tin học 10)",
    "difficulty": "ThongHieu",
    "content": "Trong quá trình thực hiện thuật toán, khi nào cần dùng cấu trúc rẽ nhánh?",
    "options": [
      {
        "id": "A",
        "content": "Khi phải dựa trên một điều kiện cụ thể nào đó để xác định bước thực hiện tiếp theo."
      },
      {
        "id": "B",
        "content": "Khi có các phép tính toán."
      },
      {
        "id": "C",
        "content": "Khi lặp đi lặp lại một công việc nào đó."
      },
      {
        "id": "D",
        "content": "Khi sử dụng các hàm toán học."
      }
    ],
    "correctAnswer": "A",
    "hints": {
      "level1_concept": "Nhớ lại cú pháp, quy tắc đặt tên biến, kiểu dữ liệu hoặc cấu trúc điều khiển trong ngôn ngữ Python.",
      "level2_formula": "Mô phỏng từng bước thực hiện của câu lệnh hoặc phân tích điều kiện logic để loại trừ các phương án sai.",
      "level3_steps": "Đối chiếu với quy tắc chuẩn của Python (thụt lề, chỉ số từ 0, hàm chuẩn) để chọn phương án đúng nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 10F - Lập trình cơ bản.",
    "sourceDocTitle": "Chuyên đề 10F. Lập trình cơ bản (Google Drive)"
  },
  {
    "id": "Q-TIN-PY-07",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-lap-trinh-python",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Python (Tuần 2 – 6)",
    "chapterName": "Phần 1: Lập trình cơ bản Python (Tin học 10)",
    "difficulty": "ThongHieu",
    "content": "Câu lệnh lặp nào sau đây sẽ lặp từ 0 đến 4?",
    "options": [
      {
        "id": "A",
        "content": "for i in range(5):"
      },
      {
        "id": "B",
        "content": "for i in range(1, 5):"
      },
      {
        "id": "C",
        "content": "for i in range(0, 5, 2):"
      },
      {
        "id": "D",
        "content": "for i in range(5, 0):"
      }
    ],
    "correctAnswer": "A",
    "hints": {
      "level1_concept": "Nhớ lại cú pháp, quy tắc đặt tên biến, kiểu dữ liệu hoặc cấu trúc điều khiển trong ngôn ngữ Python.",
      "level2_formula": "Mô phỏng từng bước thực hiện của câu lệnh hoặc phân tích điều kiện logic để loại trừ các phương án sai.",
      "level3_steps": "Đối chiếu với quy tắc chuẩn của Python (thụt lề, chỉ số từ 0, hàm chuẩn) để chọn phương án đúng nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 10F - Lập trình cơ bản.",
    "sourceDocTitle": "Chuyên đề 10F. Lập trình cơ bản (Google Drive)"
  },
  {
    "id": "Q-TIN-PY-08",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-lap-trinh-python",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Python (Tuần 2 – 6)",
    "chapterName": "Phần 1: Lập trình cơ bản Python (Tin học 10)",
    "difficulty": "ThongHieu",
    "content": "Phát biểu nào sau đây là sai?",
    "options": [
      {
        "id": "A",
        "content": "Dùng câu lệnh while ta cũng thể hiện được cấu trúc lặp với số lần biết trước."
      },
      {
        "id": "B",
        "content": "Dùng câu lệnh for ta cũng thể hiện được cấu trúc lặp với số lần không biết trước."
      },
      {
        "id": "C",
        "content": "Trong Python có 2 dạng lặp: Lặp với số lần biết trước và lặp với số lần không biết trước."
      },
      {
        "id": "D",
        "content": "Câu lệnh thể hiện lặp với số lần không biết trước phải sử dụng một biểu thức logic làm điều kiện lặp."
      }
    ],
    "correctAnswer": "B",
    "hints": {
      "level1_concept": "Nhớ lại cú pháp, quy tắc đặt tên biến, kiểu dữ liệu hoặc cấu trúc điều khiển trong ngôn ngữ Python.",
      "level2_formula": "Mô phỏng từng bước thực hiện của câu lệnh hoặc phân tích điều kiện logic để loại trừ các phương án sai.",
      "level3_steps": "Đối chiếu với quy tắc chuẩn của Python (thụt lề, chỉ số từ 0, hàm chuẩn) để chọn phương án đúng nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 10F - Lập trình cơ bản.",
    "sourceDocTitle": "Chuyên đề 10F. Lập trình cơ bản (Google Drive)"
  },
  {
    "id": "Q-TIN-PY-09",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-lap-trinh-python",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Python (Tuần 2 – 6)",
    "chapterName": "Phần 1: Lập trình cơ bản Python (Tin học 10)",
    "difficulty": "NhanBiet",
    "content": "Khái niệm nào sau đây mô tả chính xác nhất về chương trình con?",
    "options": [
      {
        "id": "A",
        "content": "Đoạn mã thực hiện một chức năng cụ thể và có thể được gọi từ nhiều nơi trong chương trình."
      },
      {
        "id": "B",
        "content": "Một chương trình hoàn chỉnh có thể chạy độc lập."
      },
      {
        "id": "C",
        "content": "Một biến dùng để lưu trữ giá trị tạm thời trong chương trình."
      },
      {
        "id": "D",
        "content": "Một cách tổ chức dữ liệu trong lập trình."
      }
    ],
    "correctAnswer": "A",
    "hints": {
      "level1_concept": "Nhớ lại cú pháp, quy tắc đặt tên biến, kiểu dữ liệu hoặc cấu trúc điều khiển trong ngôn ngữ Python.",
      "level2_formula": "Mô phỏng từng bước thực hiện của câu lệnh hoặc phân tích điều kiện logic để loại trừ các phương án sai.",
      "level3_steps": "Đối chiếu với quy tắc chuẩn của Python (thụt lề, chỉ số từ 0, hàm chuẩn) để chọn phương án đúng nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 10F - Lập trình cơ bản.",
    "sourceDocTitle": "Chuyên đề 10F. Lập trình cơ bản (Google Drive)"
  },
  {
    "id": "Q-TIN-PY-10",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-lap-trinh-python",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Python (Tuần 2 – 6)",
    "chapterName": "Phần 1: Lập trình cơ bản Python (Tin học 10)",
    "difficulty": "ThongHieu",
    "content": "Khi bạn tạo một chương trình con, điều gì sau đây là đúng?",
    "options": [
      {
        "id": "A",
        "content": "Chương trình con phải có ít nhất một tham số."
      },
      {
        "id": "B",
        "content": "Chương trình con không thể trả về giá trị."
      },
      {
        "id": "C",
        "content": "Chương trình con có thể được gọi từ nhiều vị trí khác nhau trong mã."
      },
      {
        "id": "D",
        "content": "Chương trình con luôn phải là một hàm."
      }
    ],
    "correctAnswer": "C",
    "hints": {
      "level1_concept": "Nhớ lại cú pháp, quy tắc đặt tên biến, kiểu dữ liệu hoặc cấu trúc điều khiển trong ngôn ngữ Python.",
      "level2_formula": "Mô phỏng từng bước thực hiện của câu lệnh hoặc phân tích điều kiện logic để loại trừ các phương án sai.",
      "level3_steps": "Đối chiếu với quy tắc chuẩn của Python (thụt lề, chỉ số từ 0, hàm chuẩn) để chọn phương án đúng nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 10F - Lập trình cơ bản.",
    "sourceDocTitle": "Chuyên đề 10F. Lập trình cơ bản (Google Drive)"
  },
  {
    "id": "Q-TIN-PY-11",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-lap-trinh-python",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Python (Tuần 2 – 6)",
    "chapterName": "Phần 1: Lập trình cơ bản Python (Tin học 10)",
    "difficulty": "ThongHieu",
    "content": "Trong lập trình, xâu ký tự có thể được coi là một cấu trúc dữ liệu. Hãy cho biết đặc điểm chính nào của xâu ký tự giúp nó khác biệt với các kiểu dữ liệu khác?",
    "options": [
      {
        "id": "A",
        "content": "Có thể thay đổi kích thước linh hoạt."
      },
      {
        "id": "B",
        "content": "Chỉ có thể chứa ký tự chữ cái."
      },
      {
        "id": "C",
        "content": "Là một chuỗi không thay đổi (immutable)."
      },
      {
        "id": "D",
        "content": "Không thể thực hiện các phép toán trên xâu."
      }
    ],
    "correctAnswer": "C",
    "hints": {
      "level1_concept": "Nhớ lại cú pháp, quy tắc đặt tên biến, kiểu dữ liệu hoặc cấu trúc điều khiển trong ngôn ngữ Python.",
      "level2_formula": "Mô phỏng từng bước thực hiện của câu lệnh hoặc phân tích điều kiện logic để loại trừ các phương án sai.",
      "level3_steps": "Đối chiếu với quy tắc chuẩn của Python (thụt lề, chỉ số từ 0, hàm chuẩn) để chọn phương án đúng nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 10F - Lập trình cơ bản.",
    "sourceDocTitle": "Chuyên đề 10F. Lập trình cơ bản (Google Drive)"
  },
  {
    "id": "Q-TIN-PY-12",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-lap-trinh-python",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Python (Tuần 2 – 6)",
    "chapterName": "Phần 1: Lập trình cơ bản Python (Tin học 10)",
    "difficulty": "ThongHieu",
    "content": "Để khởi tạo danh sách b có 5 phần tử 1, 2, 3, 4, 5 ta dùng viết:",
    "options": [
      {
        "id": "A",
        "content": "b = 1, 2, 3, 4, 5"
      },
      {
        "id": "B",
        "content": "b = (1, 2, 3, 4, 5)"
      },
      {
        "id": "C",
        "content": "b = [1..5]"
      },
      {
        "id": "D",
        "content": "b = [1, 2, 3, 4, 5]"
      }
    ],
    "correctAnswer": "D",
    "hints": {
      "level1_concept": "Nhớ lại cú pháp, quy tắc đặt tên biến, kiểu dữ liệu hoặc cấu trúc điều khiển trong ngôn ngữ Python.",
      "level2_formula": "Mô phỏng từng bước thực hiện của câu lệnh hoặc phân tích điều kiện logic để loại trừ các phương án sai.",
      "level3_steps": "Đối chiếu với quy tắc chuẩn của Python (thụt lề, chỉ số từ 0, hàm chuẩn) để chọn phương án đúng nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 10F - Lập trình cơ bản.",
    "sourceDocTitle": "Chuyên đề 10F. Lập trình cơ bản (Google Drive)"
  },
  {
    "id": "Q-TIN-PY-13",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-lap-trinh-python",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Python (Tuần 2 – 6)",
    "chapterName": "Phần 1: Lập trình cơ bản Python (Tin học 10)",
    "difficulty": "ThongHieu",
    "content": "Ai đã phát triển Ngôn ngữ lập trình Python?",
    "options": [
      {
        "id": "A",
        "content": "Wick van Rossum."
      },
      {
        "id": "B",
        "content": "Rasmus Lerdorf."
      },
      {
        "id": "C",
        "content": "Guido van Rossum."
      },
      {
        "id": "D",
        "content": "Niene Stom."
      }
    ],
    "correctAnswer": "C",
    "hints": {
      "level1_concept": "Nhớ lại cú pháp, quy tắc đặt tên biến, kiểu dữ liệu hoặc cấu trúc điều khiển trong ngôn ngữ Python.",
      "level2_formula": "Mô phỏng từng bước thực hiện của câu lệnh hoặc phân tích điều kiện logic để loại trừ các phương án sai.",
      "level3_steps": "Đối chiếu với quy tắc chuẩn của Python (thụt lề, chỉ số từ 0, hàm chuẩn) để chọn phương án đúng nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 10F - Lập trình cơ bản.",
    "sourceDocTitle": "Chuyên đề 10F. Lập trình cơ bản (Google Drive)"
  },
  {
    "id": "Q-TIN-PY-14",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-lap-trinh-python",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Python (Tuần 2 – 6)",
    "chapterName": "Phần 1: Lập trình cơ bản Python (Tin học 10)",
    "difficulty": "ThongHieu",
    "content": "Ngôn ngữ Python được ra mắt lần đầu vào năm nào?",
    "options": [
      {
        "id": "A",
        "content": "1995."
      },
      {
        "id": "B",
        "content": "1972."
      },
      {
        "id": "C",
        "content": "1981."
      },
      {
        "id": "D",
        "content": "1991."
      }
    ],
    "correctAnswer": "D",
    "hints": {
      "level1_concept": "Nhớ lại cú pháp, quy tắc đặt tên biến, kiểu dữ liệu hoặc cấu trúc điều khiển trong ngôn ngữ Python.",
      "level2_formula": "Mô phỏng từng bước thực hiện của câu lệnh hoặc phân tích điều kiện logic để loại trừ các phương án sai.",
      "level3_steps": "Đối chiếu với quy tắc chuẩn của Python (thụt lề, chỉ số từ 0, hàm chuẩn) để chọn phương án đúng nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 10F - Lập trình cơ bản.",
    "sourceDocTitle": "Chuyên đề 10F. Lập trình cơ bản (Google Drive)"
  },
  {
    "id": "Q-TIN-PY-15",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-lap-trinh-python",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Python (Tuần 2 – 6)",
    "chapterName": "Phần 1: Lập trình cơ bản Python (Tin học 10)",
    "difficulty": "ThongHieu",
    "content": "Ngôn ngữ nào gần với ngôn ngữ tự nhiên nhất?",
    "options": [
      {
        "id": "A",
        "content": "Ngôn ngữ bậc cao."
      },
      {
        "id": "B",
        "content": "Ngôn ngữ máy."
      },
      {
        "id": "C",
        "content": "Hợp ngữ."
      },
      {
        "id": "D",
        "content": "Cả ba phương án đều sai."
      }
    ],
    "correctAnswer": "A",
    "hints": {
      "level1_concept": "Nhớ lại cú pháp, quy tắc đặt tên biến, kiểu dữ liệu hoặc cấu trúc điều khiển trong ngôn ngữ Python.",
      "level2_formula": "Mô phỏng từng bước thực hiện của câu lệnh hoặc phân tích điều kiện logic để loại trừ các phương án sai.",
      "level3_steps": "Đối chiếu với quy tắc chuẩn của Python (thụt lề, chỉ số từ 0, hàm chuẩn) để chọn phương án đúng nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 10F - Lập trình cơ bản.",
    "sourceDocTitle": "Chuyên đề 10F. Lập trình cơ bản (Google Drive)"
  },
  {
    "id": "Q-TIN-PY-16",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-lap-trinh-python",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Python (Tuần 2 – 6)",
    "chapterName": "Phần 1: Lập trình cơ bản Python (Tin học 10)",
    "difficulty": "ThongHieu",
    "content": "Phần mở rộng nào sau đây là đúng của tệp Python?",
    "options": [
      {
        "id": "A",
        "content": "python."
      },
      {
        "id": "B",
        "content": "pl."
      },
      {
        "id": "C",
        "content": "py."
      },
      {
        "id": "D",
        "content": "p."
      }
    ],
    "correctAnswer": "C",
    "hints": {
      "level1_concept": "Nhớ lại cú pháp, quy tắc đặt tên biến, kiểu dữ liệu hoặc cấu trúc điều khiển trong ngôn ngữ Python.",
      "level2_formula": "Mô phỏng từng bước thực hiện của câu lệnh hoặc phân tích điều kiện logic để loại trừ các phương án sai.",
      "level3_steps": "Đối chiếu với quy tắc chuẩn của Python (thụt lề, chỉ số từ 0, hàm chuẩn) để chọn phương án đúng nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 10F - Lập trình cơ bản.",
    "sourceDocTitle": "Chuyên đề 10F. Lập trình cơ bản (Google Drive)"
  },
  {
    "id": "Q-TIN-PY-17",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-lap-trinh-python",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Python (Tuần 2 – 6)",
    "chapterName": "Phần 1: Lập trình cơ bản Python (Tin học 10)",
    "difficulty": "VanDung",
    "content": "Giá trị của biểu thức Python sau sẽ là bao nhiêu?\n4 + 15 / 5",
    "options": [
      {
        "id": "A",
        "content": "7."
      },
      {
        "id": "B",
        "content": "2."
      },
      {
        "id": "C",
        "content": "4."
      },
      {
        "id": "D",
        "content": "1."
      }
    ],
    "correctAnswer": "A",
    "hints": {
      "level1_concept": "Nhớ lại cú pháp, quy tắc đặt tên biến, kiểu dữ liệu hoặc cấu trúc điều khiển trong ngôn ngữ Python.",
      "level2_formula": "Mô phỏng từng bước thực hiện của câu lệnh hoặc phân tích điều kiện logic để loại trừ các phương án sai.",
      "level3_steps": "Đối chiếu với quy tắc chuẩn của Python (thụt lề, chỉ số từ 0, hàm chuẩn) để chọn phương án đúng nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 10F - Lập trình cơ bản.",
    "sourceDocTitle": "Chuyên đề 10F. Lập trình cơ bản (Google Drive)"
  },
  {
    "id": "Q-TIN-PY-18",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-lap-trinh-python",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Python (Tuần 2 – 6)",
    "chapterName": "Phần 1: Lập trình cơ bản Python (Tin học 10)",
    "difficulty": "ThongHieu",
    "content": "Điều nào sau đây được sử dụng để xác định một khối mã trong ngôn ngữ Python?",
    "options": [
      {
        "id": "A",
        "content": "Thụt lề."
      },
      {
        "id": "B",
        "content": "Nháy “ ”."
      },
      {
        "id": "C",
        "content": "Dấu ngoặc ( )."
      },
      {
        "id": "D",
        "content": "Dấu ngoặc [ ]."
      }
    ],
    "correctAnswer": "A",
    "hints": {
      "level1_concept": "Nhớ lại cú pháp, quy tắc đặt tên biến, kiểu dữ liệu hoặc cấu trúc điều khiển trong ngôn ngữ Python.",
      "level2_formula": "Mô phỏng từng bước thực hiện của câu lệnh hoặc phân tích điều kiện logic để loại trừ các phương án sai.",
      "level3_steps": "Đối chiếu với quy tắc chuẩn của Python (thụt lề, chỉ số từ 0, hàm chuẩn) để chọn phương án đúng nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 10F - Lập trình cơ bản.",
    "sourceDocTitle": "Chuyên đề 10F. Lập trình cơ bản (Google Drive)"
  },
  {
    "id": "Q-TIN-PY-19",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-lap-trinh-python",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Python (Tuần 2 – 6)",
    "chapterName": "Phần 1: Lập trình cơ bản Python (Tin học 10)",
    "difficulty": "ThongHieu",
    "content": "Thứ tự thực hiện các phép tính trong Python ở đáp án nào đúng?",
    "options": [
      {
        "id": "A",
        "content": "/, -, +, *."
      },
      {
        "id": "B",
        "content": "(*, /), (+, -)."
      },
      {
        "id": "C",
        "content": "Từ trái sang phải."
      },
      {
        "id": "D",
        "content": "(+, -), (*, /)."
      }
    ],
    "correctAnswer": "B",
    "hints": {
      "level1_concept": "Nhớ lại cú pháp, quy tắc đặt tên biến, kiểu dữ liệu hoặc cấu trúc điều khiển trong ngôn ngữ Python.",
      "level2_formula": "Mô phỏng từng bước thực hiện của câu lệnh hoặc phân tích điều kiện logic để loại trừ các phương án sai.",
      "level3_steps": "Đối chiếu với quy tắc chuẩn của Python (thụt lề, chỉ số từ 0, hàm chuẩn) để chọn phương án đúng nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 10F - Lập trình cơ bản.",
    "sourceDocTitle": "Chuyên đề 10F. Lập trình cơ bản (Google Drive)"
  },
  {
    "id": "Q-TIN-PY-20",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-lap-trinh-python",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Python (Tuần 2 – 6)",
    "chapterName": "Phần 1: Lập trình cơ bản Python (Tin học 10)",
    "difficulty": "VanDung",
    "content": "Giá trị của biểu thức Python sau sẽ là bao nhiêu?\n6 – 6 / 2 + 4 * 5 – 6 / 2",
    "options": [
      {
        "id": "A",
        "content": "17."
      },
      {
        "id": "B",
        "content": "20."
      },
      {
        "id": "C",
        "content": "18."
      },
      {
        "id": "D",
        "content": "19."
      }
    ],
    "correctAnswer": "B",
    "hints": {
      "level1_concept": "Nhớ lại cú pháp, quy tắc đặt tên biến, kiểu dữ liệu hoặc cấu trúc điều khiển trong ngôn ngữ Python.",
      "level2_formula": "Mô phỏng từng bước thực hiện của câu lệnh hoặc phân tích điều kiện logic để loại trừ các phương án sai.",
      "level3_steps": "Đối chiếu với quy tắc chuẩn của Python (thụt lề, chỉ số từ 0, hàm chuẩn) để chọn phương án đúng nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 10F - Lập trình cơ bản.",
    "sourceDocTitle": "Chuyên đề 10F. Lập trình cơ bản (Google Drive)"
  },
  {
    "id": "Q-TIN-PY-21",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-lap-trinh-python",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Python (Tuần 2 – 6)",
    "chapterName": "Phần 1: Lập trình cơ bản Python (Tin học 10)",
    "difficulty": "ThongHieu",
    "content": "Để kết thúc một phiên làm việc trong python, ta có thể?",
    "options": [
      {
        "id": "A",
        "content": "Nháy dấu X góc bên phải màn hình."
      },
      {
        "id": "B",
        "content": "Gõ câu lệnh quit() rồi ấn Enter"
      },
      {
        "id": "C",
        "content": "Sử dụng câu lệnh Exit."
      },
      {
        "id": "D",
        "content": "Cả ba cách làm trên đều đúng."
      }
    ],
    "correctAnswer": "D",
    "hints": {
      "level1_concept": "Nhớ lại cú pháp, quy tắc đặt tên biến, kiểu dữ liệu hoặc cấu trúc điều khiển trong ngôn ngữ Python.",
      "level2_formula": "Mô phỏng từng bước thực hiện của câu lệnh hoặc phân tích điều kiện logic để loại trừ các phương án sai.",
      "level3_steps": "Đối chiếu với quy tắc chuẩn của Python (thụt lề, chỉ số từ 0, hàm chuẩn) để chọn phương án đúng nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 10F - Lập trình cơ bản.",
    "sourceDocTitle": "Chuyên đề 10F. Lập trình cơ bản (Google Drive)"
  },
  {
    "id": "Q-TIN-PY-22",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-lap-trinh-python",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Python (Tuần 2 – 6)",
    "chapterName": "Phần 1: Lập trình cơ bản Python (Tin học 10)",
    "difficulty": "ThongHieu",
    "content": "Người tạo ra phiên bản đầu tiên của ngôn ngữ lập trình Python là người nước nào?",
    "options": [
      {
        "id": "A",
        "content": "Hà Lan."
      },
      {
        "id": "B",
        "content": "Đức."
      },
      {
        "id": "C",
        "content": "Pháp."
      },
      {
        "id": "D",
        "content": "Bỉ.\nTHÔNG HIỂU"
      }
    ],
    "correctAnswer": "A",
    "hints": {
      "level1_concept": "Nhớ lại cú pháp, quy tắc đặt tên biến, kiểu dữ liệu hoặc cấu trúc điều khiển trong ngôn ngữ Python.",
      "level2_formula": "Mô phỏng từng bước thực hiện của câu lệnh hoặc phân tích điều kiện logic để loại trừ các phương án sai.",
      "level3_steps": "Đối chiếu với quy tắc chuẩn của Python (thụt lề, chỉ số từ 0, hàm chuẩn) để chọn phương án đúng nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 10F - Lập trình cơ bản.",
    "sourceDocTitle": "Chuyên đề 10F. Lập trình cơ bản (Google Drive)"
  },
  {
    "id": "Q-TIN-PY-23",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-lap-trinh-python",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Python (Tuần 2 – 6)",
    "chapterName": "Phần 1: Lập trình cơ bản Python (Tin học 10)",
    "difficulty": "ThongHieu",
    "content": "Chọn phát biểu sai?",
    "options": [
      {
        "id": "A",
        "content": "Cửa sổ Shell, cho phép viết và thực hiện ngay các biểu thức hoặc câu lệnh."
      },
      {
        "id": "B",
        "content": "Ngôn ngữ lập trình trực quan như Scratch dễ dùng và thích hợp với các bạn nhỏ tuổi."
      },
      {
        "id": "C",
        "content": "Trong Python, không phân biệt chữ hoa và chữ thường."
      },
      {
        "id": "D",
        "content": "Python là ngôn ngữ lập trình bậc cao phổ biến rộng rãi trên thế giới."
      }
    ],
    "correctAnswer": "C",
    "hints": {
      "level1_concept": "Nhớ lại cú pháp, quy tắc đặt tên biến, kiểu dữ liệu hoặc cấu trúc điều khiển trong ngôn ngữ Python.",
      "level2_formula": "Mô phỏng từng bước thực hiện của câu lệnh hoặc phân tích điều kiện logic để loại trừ các phương án sai.",
      "level3_steps": "Đối chiếu với quy tắc chuẩn của Python (thụt lề, chỉ số từ 0, hàm chuẩn) để chọn phương án đúng nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 10F - Lập trình cơ bản.",
    "sourceDocTitle": "Chuyên đề 10F. Lập trình cơ bản (Google Drive)"
  },
  {
    "id": "Q-TIN-PY-24",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-lap-trinh-python",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Python (Tuần 2 – 6)",
    "chapterName": "Phần 1: Lập trình cơ bản Python (Tin học 10)",
    "difficulty": "ThongHieu",
    "content": "Biểu thức số học nào sau đây là hợp lệ trong Python?",
    "options": [
      {
        "id": "A",
        "content": "5 + 3 * 2"
      },
      {
        "id": "B",
        "content": "4 / 0"
      },
      {
        "id": "C",
        "content": "7 %"
      },
      {
        "id": "D",
        "content": "3 ^ 2 + 1"
      }
    ],
    "correctAnswer": "A",
    "hints": {
      "level1_concept": "Nhớ lại cú pháp, quy tắc đặt tên biến, kiểu dữ liệu hoặc cấu trúc điều khiển trong ngôn ngữ Python.",
      "level2_formula": "Mô phỏng từng bước thực hiện của câu lệnh hoặc phân tích điều kiện logic để loại trừ các phương án sai.",
      "level3_steps": "Đối chiếu với quy tắc chuẩn của Python (thụt lề, chỉ số từ 0, hàm chuẩn) để chọn phương án đúng nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 10F - Lập trình cơ bản.",
    "sourceDocTitle": "Chuyên đề 10F. Lập trình cơ bản (Google Drive)"
  },
  {
    "id": "Q-TIN-PY-25",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-lap-trinh-python",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Python (Tuần 2 – 6)",
    "chapterName": "Phần 1: Lập trình cơ bản Python (Tin học 10)",
    "difficulty": "ThongHieu",
    "content": "Lệnh x = x + 1 có ý nghĩa gì trong chương trình?",
    "options": [
      {
        "id": "A",
        "content": "Gán giá trị 1 cho biến x"
      },
      {
        "id": "B",
        "content": "Tăng giá trị của x lên 1 đơn vị so với giá trị hiện tại"
      },
      {
        "id": "C",
        "content": "Kiểm tra xem x có lớn hơn 1 hay không"
      },
      {
        "id": "D",
        "content": "Đặt giá trị x bằng 1"
      }
    ],
    "correctAnswer": "B",
    "hints": {
      "level1_concept": "Nhớ lại cú pháp, quy tắc đặt tên biến, kiểu dữ liệu hoặc cấu trúc điều khiển trong ngôn ngữ Python.",
      "level2_formula": "Mô phỏng từng bước thực hiện của câu lệnh hoặc phân tích điều kiện logic để loại trừ các phương án sai.",
      "level3_steps": "Đối chiếu với quy tắc chuẩn của Python (thụt lề, chỉ số từ 0, hàm chuẩn) để chọn phương án đúng nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 10F - Lập trình cơ bản.",
    "sourceDocTitle": "Chuyên đề 10F. Lập trình cơ bản (Google Drive)"
  },
  {
    "id": "Q-TIN-PY-26",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-lap-trinh-python",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Python (Tuần 2 – 6)",
    "chapterName": "Phần 1: Lập trình cơ bản Python (Tin học 10)",
    "difficulty": "ThongHieu",
    "content": "Khi chạy đoạn mã sau, kết quả nào sẽ được in ra màn hình?\nx=6 y=2 print(x//y)",
    "options": [
      {
        "id": "A",
        "content": "6"
      },
      {
        "id": "B",
        "content": "3"
      },
      {
        "id": "C",
        "content": "2"
      },
      {
        "id": "D",
        "content": "0"
      }
    ],
    "correctAnswer": "B",
    "hints": {
      "level1_concept": "Nhớ lại cú pháp, quy tắc đặt tên biến, kiểu dữ liệu hoặc cấu trúc điều khiển trong ngôn ngữ Python.",
      "level2_formula": "Mô phỏng từng bước thực hiện của câu lệnh hoặc phân tích điều kiện logic để loại trừ các phương án sai.",
      "level3_steps": "Đối chiếu với quy tắc chuẩn của Python (thụt lề, chỉ số từ 0, hàm chuẩn) để chọn phương án đúng nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 10F - Lập trình cơ bản.",
    "sourceDocTitle": "Chuyên đề 10F. Lập trình cơ bản (Google Drive)"
  },
  {
    "id": "Q-TIN-PY-27",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-lap-trinh-python",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Python (Tuần 2 – 6)",
    "chapterName": "Phần 1: Lập trình cơ bản Python (Tin học 10)",
    "difficulty": "ThongHieu",
    "content": "Nếu muốn nhập một số thực từ bàn phím và gán cho biến x, dòng lệnh nào sau đây là đúng trong Python?",
    "options": [
      {
        "id": "A",
        "content": "x = input(\"Nhập số thực: \")"
      },
      {
        "id": "B",
        "content": "x = float(input(\"Nhập số thực: \")"
      },
      {
        "id": "C",
        "content": "x = int(input(\"Nhập số thực: \"))"
      },
      {
        "id": "D",
        "content": "x = str(input(\"Nhập số thực: \"))"
      }
    ],
    "correctAnswer": "B",
    "hints": {
      "level1_concept": "Nhớ lại cú pháp, quy tắc đặt tên biến, kiểu dữ liệu hoặc cấu trúc điều khiển trong ngôn ngữ Python.",
      "level2_formula": "Mô phỏng từng bước thực hiện của câu lệnh hoặc phân tích điều kiện logic để loại trừ các phương án sai.",
      "level3_steps": "Đối chiếu với quy tắc chuẩn của Python (thụt lề, chỉ số từ 0, hàm chuẩn) để chọn phương án đúng nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 10F - Lập trình cơ bản.",
    "sourceDocTitle": "Chuyên đề 10F. Lập trình cơ bản (Google Drive)"
  },
  {
    "id": "Q-TIN-PY-28",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-lap-trinh-python",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Python (Tuần 2 – 6)",
    "chapterName": "Phần 1: Lập trình cơ bản Python (Tin học 10)",
    "difficulty": "ThongHieu",
    "content": "Khi nào khối lệnh bên trong câu lệnh if sẽ được thực hiện?",
    "options": [
      {
        "id": "A",
        "content": "Khi điều kiện sai"
      },
      {
        "id": "B",
        "content": "Khi điều kiện đúng"
      },
      {
        "id": "C",
        "content": "Khi không có điều kiện"
      },
      {
        "id": "D",
        "content": "Khi điều kiện là số 0"
      }
    ],
    "correctAnswer": "B",
    "hints": {
      "level1_concept": "Nhớ lại cú pháp, quy tắc đặt tên biến, kiểu dữ liệu hoặc cấu trúc điều khiển trong ngôn ngữ Python.",
      "level2_formula": "Mô phỏng từng bước thực hiện của câu lệnh hoặc phân tích điều kiện logic để loại trừ các phương án sai.",
      "level3_steps": "Đối chiếu với quy tắc chuẩn của Python (thụt lề, chỉ số từ 0, hàm chuẩn) để chọn phương án đúng nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 10F - Lập trình cơ bản.",
    "sourceDocTitle": "Chuyên đề 10F. Lập trình cơ bản (Google Drive)"
  },
  {
    "id": "Q-TIN-PY-29",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-lap-trinh-python",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Python (Tuần 2 – 6)",
    "chapterName": "Phần 1: Lập trình cơ bản Python (Tin học 10)",
    "difficulty": "ThongHieu",
    "content": "Cho đoạn chương trình sau:\ns=0 for i in range(6): s=s+i Sau khi thực hiện đoạn chương trình trên giá trị của s là:",
    "options": [
      {
        "id": "A",
        "content": "1"
      },
      {
        "id": "B",
        "content": "15"
      },
      {
        "id": "C",
        "content": "6"
      },
      {
        "id": "D",
        "content": "21"
      }
    ],
    "correctAnswer": "B",
    "hints": {
      "level1_concept": "Nhớ lại cú pháp, quy tắc đặt tên biến, kiểu dữ liệu hoặc cấu trúc điều khiển trong ngôn ngữ Python.",
      "level2_formula": "Mô phỏng từng bước thực hiện của câu lệnh hoặc phân tích điều kiện logic để loại trừ các phương án sai.",
      "level3_steps": "Đối chiếu với quy tắc chuẩn của Python (thụt lề, chỉ số từ 0, hàm chuẩn) để chọn phương án đúng nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 10F - Lập trình cơ bản.",
    "sourceDocTitle": "Chuyên đề 10F. Lập trình cơ bản (Google Drive)"
  },
  {
    "id": "Q-TIN-PY-30",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-lap-trinh-python",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Python (Tuần 2 – 6)",
    "chapterName": "Phần 1: Lập trình cơ bản Python (Tin học 10)",
    "difficulty": "ThongHieu",
    "content": "Tại sao nên sử dụng chương trình con trong lập trình?",
    "options": [
      {
        "id": "A",
        "content": "Để làm cho chương trình ngắn gọn hơn"
      },
      {
        "id": "B",
        "content": "Để giảm thời gian thực hiện chương trình"
      },
      {
        "id": "C",
        "content": "Để tái sử dụng mã nguồn và giảm thiểu lỗi"
      },
      {
        "id": "D",
        "content": "Để tạo giao diện người dùng đẹp hơn"
      }
    ],
    "correctAnswer": "C",
    "hints": {
      "level1_concept": "Nhớ lại cú pháp, quy tắc đặt tên biến, kiểu dữ liệu hoặc cấu trúc điều khiển trong ngôn ngữ Python.",
      "level2_formula": "Mô phỏng từng bước thực hiện của câu lệnh hoặc phân tích điều kiện logic để loại trừ các phương án sai.",
      "level3_steps": "Đối chiếu với quy tắc chuẩn của Python (thụt lề, chỉ số từ 0, hàm chuẩn) để chọn phương án đúng nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 10F - Lập trình cơ bản.",
    "sourceDocTitle": "Chuyên đề 10F. Lập trình cơ bản (Google Drive)"
  },
  {
    "id": "Q-TIN-PY-31",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-lap-trinh-python",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Python (Tuần 2 – 6)",
    "chapterName": "Phần 1: Lập trình cơ bản Python (Tin học 10)",
    "difficulty": "NhanBiet",
    "content": "Đoạn mã nào sau đây định nghĩa chính xác một chương trình con trong Python?",
    "options": [
      {
        "id": "A",
        "content": "function my_function():"
      },
      {
        "id": "B",
        "content": "def my_function():"
      },
      {
        "id": "C",
        "content": "define my_function():"
      },
      {
        "id": "D",
        "content": "sub my_function():"
      }
    ],
    "correctAnswer": "B",
    "hints": {
      "level1_concept": "Nhớ lại cú pháp, quy tắc đặt tên biến, kiểu dữ liệu hoặc cấu trúc điều khiển trong ngôn ngữ Python.",
      "level2_formula": "Mô phỏng từng bước thực hiện của câu lệnh hoặc phân tích điều kiện logic để loại trừ các phương án sai.",
      "level3_steps": "Đối chiếu với quy tắc chuẩn của Python (thụt lề, chỉ số từ 0, hàm chuẩn) để chọn phương án đúng nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 10F - Lập trình cơ bản.",
    "sourceDocTitle": "Chuyên đề 10F. Lập trình cơ bản (Google Drive)"
  },
  {
    "id": "Q-TIN-PY-32",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-lap-trinh-python",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Python (Tuần 2 – 6)",
    "chapterName": "Phần 1: Lập trình cơ bản Python (Tin học 10)",
    "difficulty": "ThongHieu",
    "content": "Khi nói về việc thao tác với xâu ký tự, thuật ngữ \"chuỗi con\" (substring) có ý nghĩa gì?",
    "options": [
      {
        "id": "A",
        "content": "Một xâu ký tự nằm bên trong một xâu ký tự khác."
      },
      {
        "id": "B",
        "content": "Một xâu ký tự hoàn toàn khác biệt với xâu gốc."
      },
      {
        "id": "C",
        "content": "Một phần của một danh sách các xâu ký tự."
      },
      {
        "id": "D",
        "content": "Một phép toán giữa hai xâu ký tự."
      }
    ],
    "correctAnswer": "A",
    "hints": {
      "level1_concept": "Nhớ lại cú pháp, quy tắc đặt tên biến, kiểu dữ liệu hoặc cấu trúc điều khiển trong ngôn ngữ Python.",
      "level2_formula": "Mô phỏng từng bước thực hiện của câu lệnh hoặc phân tích điều kiện logic để loại trừ các phương án sai.",
      "level3_steps": "Đối chiếu với quy tắc chuẩn của Python (thụt lề, chỉ số từ 0, hàm chuẩn) để chọn phương án đúng nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 10F - Lập trình cơ bản.",
    "sourceDocTitle": "Chuyên đề 10F. Lập trình cơ bản (Google Drive)"
  },
  {
    "id": "Q-TIN-PY-33",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-lap-trinh-python",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Python (Tuần 2 – 6)",
    "chapterName": "Phần 1: Lập trình cơ bản Python (Tin học 10)",
    "difficulty": "ThongHieu",
    "content": "Output của lệnh sau là:\nprint(1+ 2 + 3+ 4)",
    "options": [
      {
        "id": "A",
        "content": "10."
      },
      {
        "id": "B",
        "content": "15."
      },
      {
        "id": "C",
        "content": "1 + 2 + 3 + 4."
      },
      {
        "id": "D",
        "content": "1 + 2 + 3."
      }
    ],
    "correctAnswer": "A",
    "hints": {
      "level1_concept": "Nhớ lại cú pháp, quy tắc đặt tên biến, kiểu dữ liệu hoặc cấu trúc điều khiển trong ngôn ngữ Python.",
      "level2_formula": "Mô phỏng từng bước thực hiện của câu lệnh hoặc phân tích điều kiện logic để loại trừ các phương án sai.",
      "level3_steps": "Đối chiếu với quy tắc chuẩn của Python (thụt lề, chỉ số từ 0, hàm chuẩn) để chọn phương án đúng nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 10F - Lập trình cơ bản.",
    "sourceDocTitle": "Chuyên đề 10F. Lập trình cơ bản (Google Drive)"
  },
  {
    "id": "Q-TIN-PY-34",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-lap-trinh-python",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Python (Tuần 2 – 6)",
    "chapterName": "Phần 1: Lập trình cơ bản Python (Tin học 10)",
    "difficulty": "ThongHieu",
    "content": "Câu lệnh sau bị lỗi ở đâu?\n3 + * 5",
    "options": [
      {
        "id": "A",
        "content": "3 ."
      },
      {
        "id": "B",
        "content": "+ hoặc *."
      },
      {
        "id": "C",
        "content": "*."
      },
      {
        "id": "D",
        "content": "Không có lỗi."
      }
    ],
    "correctAnswer": "B",
    "hints": {
      "level1_concept": "Nhớ lại cú pháp, quy tắc đặt tên biến, kiểu dữ liệu hoặc cấu trúc điều khiển trong ngôn ngữ Python.",
      "level2_formula": "Mô phỏng từng bước thực hiện của câu lệnh hoặc phân tích điều kiện logic để loại trừ các phương án sai.",
      "level3_steps": "Đối chiếu với quy tắc chuẩn của Python (thụt lề, chỉ số từ 0, hàm chuẩn) để chọn phương án đúng nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 10F - Lập trình cơ bản.",
    "sourceDocTitle": "Chuyên đề 10F. Lập trình cơ bản (Google Drive)"
  },
  {
    "id": "Q-TIN-PY-35",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-lap-trinh-python",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Python (Tuần 2 – 6)",
    "chapterName": "Phần 1: Lập trình cơ bản Python (Tin học 10)",
    "difficulty": "ThongHieu",
    "content": "Phát biểu nào sau đây sai khi nói về python?",
    "options": [
      {
        "id": "A",
        "content": "Python là ngôn ngữ lập trình bậc cao."
      },
      {
        "id": "B",
        "content": "Python có mã nguồn mở thu hút được nhiều nhà khoa học cùng phát triển."
      },
      {
        "id": "C",
        "content": "Python có các lệnh phức tạp nên không phổ biến trong giáo dục."
      },
      {
        "id": "D",
        "content": "Python có các câu lệnh khá gần ngôn ngữ tự nhiên."
      }
    ],
    "correctAnswer": "C",
    "hints": {
      "level1_concept": "Nhớ lại cú pháp, quy tắc đặt tên biến, kiểu dữ liệu hoặc cấu trúc điều khiển trong ngôn ngữ Python.",
      "level2_formula": "Mô phỏng từng bước thực hiện của câu lệnh hoặc phân tích điều kiện logic để loại trừ các phương án sai.",
      "level3_steps": "Đối chiếu với quy tắc chuẩn của Python (thụt lề, chỉ số từ 0, hàm chuẩn) để chọn phương án đúng nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 10F - Lập trình cơ bản.",
    "sourceDocTitle": "Chuyên đề 10F. Lập trình cơ bản (Google Drive)"
  },
  {
    "id": "Q-TIN-PY-36",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-lap-trinh-python",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Python (Tuần 2 – 6)",
    "chapterName": "Phần 1: Lập trình cơ bản Python (Tin học 10)",
    "difficulty": "ThongHieu",
    "content": "Chọn phát biểu đúng khi nói về môi trường lập trình Python?",
    "options": [
      {
        "id": "A",
        "content": "Chế độ soạn thảo có dấu nhắc."
      },
      {
        "id": "B",
        "content": "Ngoài chế độ gõ lệnh trực tiếp và soạn thảo còn có các chế độ khác"
      },
      {
        "id": "C",
        "content": "Chế độ gõ lệnh trực tiếp thích hợp cho việc tính toán và kiểm tra nhanh các lệnh"
      },
      {
        "id": "D",
        "content": "Chế độ gõ lệnh trực tiếp có con trỏ soạn thảo."
      }
    ],
    "correctAnswer": "C",
    "hints": {
      "level1_concept": "Nhớ lại cú pháp, quy tắc đặt tên biến, kiểu dữ liệu hoặc cấu trúc điều khiển trong ngôn ngữ Python.",
      "level2_formula": "Mô phỏng từng bước thực hiện của câu lệnh hoặc phân tích điều kiện logic để loại trừ các phương án sai.",
      "level3_steps": "Đối chiếu với quy tắc chuẩn của Python (thụt lề, chỉ số từ 0, hàm chuẩn) để chọn phương án đúng nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 10F - Lập trình cơ bản.",
    "sourceDocTitle": "Chuyên đề 10F. Lập trình cơ bản (Google Drive)"
  },
  {
    "id": "Q-TIN-PY-37",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-lap-trinh-python",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Python (Tuần 2 – 6)",
    "chapterName": "Phần 1: Lập trình cơ bản Python (Tin học 10)",
    "difficulty": "ThongHieu",
    "content": "Dùng câu lệnh print và kí tự nào để viết được đoạn văn xuống dòng giữa xâu?",
    "options": [
      {
        "id": "A",
        "content": "Cặp dấu nháy đơn."
      },
      {
        "id": "B",
        "content": "Cặp ba dấu nháy kép."
      },
      {
        "id": "C",
        "content": "Cặp dấu nháy kép."
      },
      {
        "id": "D",
        "content": "Không thể thực hiện được."
      }
    ],
    "correctAnswer": "B",
    "hints": {
      "level1_concept": "Nhớ lại cú pháp, quy tắc đặt tên biến, kiểu dữ liệu hoặc cấu trúc điều khiển trong ngôn ngữ Python.",
      "level2_formula": "Mô phỏng từng bước thực hiện của câu lệnh hoặc phân tích điều kiện logic để loại trừ các phương án sai.",
      "level3_steps": "Đối chiếu với quy tắc chuẩn của Python (thụt lề, chỉ số từ 0, hàm chuẩn) để chọn phương án đúng nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 10F - Lập trình cơ bản.",
    "sourceDocTitle": "Chuyên đề 10F. Lập trình cơ bản (Google Drive)"
  },
  {
    "id": "Q-TIN-PY-38",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-lap-trinh-python",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Python (Tuần 2 – 6)",
    "chapterName": "Phần 1: Lập trình cơ bản Python (Tin học 10)",
    "difficulty": "ThongHieu",
    "content": "Phát biểu nào là sai về chương trình?",
    "options": [
      {
        "id": "A",
        "content": "Chương trình viết bằng ngôn ngữ máy có thể được nạp trực tiếp vào bộ nhớ và thực hiện ngay, còn chương trình viết bằng ngôn ngữ lập trình bậc cao phải được chuyển đổi thành chương trình trên ngôn ngữ máy mới có thể thực hiện được."
      },
      {
        "id": "B",
        "content": "Chương trình đặc biệt có chức năng chuyển đổi chương trình được viết bằng ngôn ngữ lập trình bậc cao thành chương trình thực hiện được trên máy tính cụ thể được gọi là chương trình dịch."
      },
      {
        "id": "C",
        "content": "Lập trình là sử dụng cấu trúc dữ liệu và các câu lệnh của ngôn ngữ lập trình cụ thể để mô tả dữ liệu và diễn đạt các thao tác của thuật toán."
      },
      {
        "id": "D",
        "content": "Chương trình dịch nhận đầu vào là chương trình viết bằng ngôn ngữ lập trình bậc thấp (chương trình nguồn), thực hiện chuyển đổi sang ngôn ngữ lập trình bậc cao (chương trình đích)."
      }
    ],
    "correctAnswer": "D",
    "hints": {
      "level1_concept": "Nhớ lại cú pháp, quy tắc đặt tên biến, kiểu dữ liệu hoặc cấu trúc điều khiển trong ngôn ngữ Python.",
      "level2_formula": "Mô phỏng từng bước thực hiện của câu lệnh hoặc phân tích điều kiện logic để loại trừ các phương án sai.",
      "level3_steps": "Đối chiếu với quy tắc chuẩn của Python (thụt lề, chỉ số từ 0, hàm chuẩn) để chọn phương án đúng nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 10F - Lập trình cơ bản.",
    "sourceDocTitle": "Chuyên đề 10F. Lập trình cơ bản (Google Drive)"
  },
  {
    "id": "Q-TIN-PY-39",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-lap-trinh-python",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Python (Tuần 2 – 6)",
    "chapterName": "Phần 1: Lập trình cơ bản Python (Tin học 10)",
    "difficulty": "ThongHieu",
    "content": "Mỗi ngôn ngữ lập trình thường có các thành phần cơ bản nào?",
    "options": [
      {
        "id": "A",
        "content": "Bảng chữ cái, cú pháp."
      },
      {
        "id": "B",
        "content": "Bảng chữ cái và ngữ nghĩa."
      },
      {
        "id": "C",
        "content": "Bảng chữ cái, cú pháp và ngữ nghĩa."
      },
      {
        "id": "D",
        "content": "Cú pháp và ngữ nghĩa."
      }
    ],
    "correctAnswer": "C",
    "hints": {
      "level1_concept": "Nhớ lại cú pháp, quy tắc đặt tên biến, kiểu dữ liệu hoặc cấu trúc điều khiển trong ngôn ngữ Python.",
      "level2_formula": "Mô phỏng từng bước thực hiện của câu lệnh hoặc phân tích điều kiện logic để loại trừ các phương án sai.",
      "level3_steps": "Đối chiếu với quy tắc chuẩn của Python (thụt lề, chỉ số từ 0, hàm chuẩn) để chọn phương án đúng nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 10F - Lập trình cơ bản.",
    "sourceDocTitle": "Chuyên đề 10F. Lập trình cơ bản (Google Drive)"
  },
  {
    "id": "Q-TIN-PY-40",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-lap-trinh-python",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Python (Tuần 2 – 6)",
    "chapterName": "Phần 1: Lập trình cơ bản Python (Tin học 10)",
    "difficulty": "ThongHieu",
    "content": "Chọn phát biểu đúng khi nói về môi trường lập trình Python?",
    "options": [
      {
        "id": "A",
        "content": "Chế độ soạn thảo có dấu nhắc."
      },
      {
        "id": "B",
        "content": "Ngoài chế độ gõ lệnh trực tiếp và soạn thảo còn có các chế độ khác"
      },
      {
        "id": "C",
        "content": "Chế độ gõ lệnh trực tiếp thích hợp cho việc tính toán và kiểm tra nhanh các lệnh"
      },
      {
        "id": "D",
        "content": "Chế độ gõ lệnh trực tiếp có con trỏ soạn thảo."
      }
    ],
    "correctAnswer": "C",
    "hints": {
      "level1_concept": "Nhớ lại cú pháp, quy tắc đặt tên biến, kiểu dữ liệu hoặc cấu trúc điều khiển trong ngôn ngữ Python.",
      "level2_formula": "Mô phỏng từng bước thực hiện của câu lệnh hoặc phân tích điều kiện logic để loại trừ các phương án sai.",
      "level3_steps": "Đối chiếu với quy tắc chuẩn của Python (thụt lề, chỉ số từ 0, hàm chuẩn) để chọn phương án đúng nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 10F - Lập trình cơ bản.",
    "sourceDocTitle": "Chuyên đề 10F. Lập trình cơ bản (Google Drive)"
  },
  {
    "id": "Q-TIN-PY-41",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-lap-trinh-python",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Python (Tuần 2 – 6)",
    "chapterName": "Phần 1: Lập trình cơ bản Python (Tin học 10)",
    "difficulty": "ThongHieu",
    "content": "Trong ngôn ngữ Python, tên nào sau đây là từ khoá?",
    "options": [
      {
        "id": "A",
        "content": "program, sqr."
      },
      {
        "id": "B",
        "content": "uses, var."
      },
      {
        "id": "C",
        "content": "include, const."
      },
      {
        "id": "D",
        "content": "if, else."
      }
    ],
    "correctAnswer": "D",
    "hints": {
      "level1_concept": "Nhớ lại cú pháp, quy tắc đặt tên biến, kiểu dữ liệu hoặc cấu trúc điều khiển trong ngôn ngữ Python.",
      "level2_formula": "Mô phỏng từng bước thực hiện của câu lệnh hoặc phân tích điều kiện logic để loại trừ các phương án sai.",
      "level3_steps": "Đối chiếu với quy tắc chuẩn của Python (thụt lề, chỉ số từ 0, hàm chuẩn) để chọn phương án đúng nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 10F - Lập trình cơ bản.",
    "sourceDocTitle": "Chuyên đề 10F. Lập trình cơ bản (Google Drive)"
  },
  {
    "id": "Q-TIN-PY-42",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-lap-trinh-python",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Python (Tuần 2 – 6)",
    "chapterName": "Phần 1: Lập trình cơ bản Python (Tin học 10)",
    "difficulty": "ThongHieu",
    "content": "Từ khoá của một ngôn ngữ lâp trình là:",
    "options": [
      {
        "id": "A",
        "content": "là những từ dành riêng."
      },
      {
        "id": "B",
        "content": "cho một mục đích sử dụng nhất định."
      },
      {
        "id": "C",
        "content": "có thể đặt tên cho biến."
      },
      {
        "id": "D",
        "content": "Cả A và B"
      }
    ],
    "correctAnswer": "A",
    "hints": {
      "level1_concept": "Nhớ lại cú pháp, quy tắc đặt tên biến, kiểu dữ liệu hoặc cấu trúc điều khiển trong ngôn ngữ Python.",
      "level2_formula": "Mô phỏng từng bước thực hiện của câu lệnh hoặc phân tích điều kiện logic để loại trừ các phương án sai.",
      "level3_steps": "Đối chiếu với quy tắc chuẩn của Python (thụt lề, chỉ số từ 0, hàm chuẩn) để chọn phương án đúng nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 10F - Lập trình cơ bản.",
    "sourceDocTitle": "Chuyên đề 10F. Lập trình cơ bản (Google Drive)"
  },
  {
    "id": "Q-TIN-PY-43",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-lap-trinh-python",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Python (Tuần 2 – 6)",
    "chapterName": "Phần 1: Lập trình cơ bản Python (Tin học 10)",
    "difficulty": "ThongHieu",
    "content": "Trong ngôn ngữ Python, tên nào sau đây đặt sai theo quy tắc?",
    "options": [
      {
        "id": "A",
        "content": "11tinhoc."
      },
      {
        "id": "B",
        "content": "tinhoc11."
      },
      {
        "id": "C",
        "content": "tin_hoc."
      },
      {
        "id": "D",
        "content": "_11."
      }
    ],
    "correctAnswer": "A",
    "hints": {
      "level1_concept": "Nhớ lại cú pháp, quy tắc đặt tên biến, kiểu dữ liệu hoặc cấu trúc điều khiển trong ngôn ngữ Python.",
      "level2_formula": "Mô phỏng từng bước thực hiện của câu lệnh hoặc phân tích điều kiện logic để loại trừ các phương án sai.",
      "level3_steps": "Đối chiếu với quy tắc chuẩn của Python (thụt lề, chỉ số từ 0, hàm chuẩn) để chọn phương án đúng nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 10F - Lập trình cơ bản.",
    "sourceDocTitle": "Chuyên đề 10F. Lập trình cơ bản (Google Drive)"
  },
  {
    "id": "Q-TIN-PY-44",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-lap-trinh-python",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Python (Tuần 2 – 6)",
    "chapterName": "Phần 1: Lập trình cơ bản Python (Tin học 10)",
    "difficulty": "ThongHieu",
    "content": "Lệnh gán giá trị cho biến b nguyên nào sau đây là đúng?",
    "options": [
      {
        "id": "A",
        "content": "b = 10."
      },
      {
        "id": "B",
        "content": "B = 10."
      },
      {
        "id": "C",
        "content": "b == 10"
      },
      {
        "id": "D",
        "content": "b = ‘10’"
      }
    ],
    "correctAnswer": "A",
    "hints": {
      "level1_concept": "Nhớ lại cú pháp, quy tắc đặt tên biến, kiểu dữ liệu hoặc cấu trúc điều khiển trong ngôn ngữ Python.",
      "level2_formula": "Mô phỏng từng bước thực hiện của câu lệnh hoặc phân tích điều kiện logic để loại trừ các phương án sai.",
      "level3_steps": "Đối chiếu với quy tắc chuẩn của Python (thụt lề, chỉ số từ 0, hàm chuẩn) để chọn phương án đúng nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 10F - Lập trình cơ bản.",
    "sourceDocTitle": "Chuyên đề 10F. Lập trình cơ bản (Google Drive)"
  },
  {
    "id": "Q-TIN-PY-45",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-lap-trinh-python",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Python (Tuần 2 – 6)",
    "chapterName": "Phần 1: Lập trình cơ bản Python (Tin học 10)",
    "difficulty": "ThongHieu",
    "content": "Trường hợp nào sau đây không phải lệnh gán trong python?",
    "options": [
      {
        "id": "A",
        "content": "cd = 50."
      },
      {
        "id": "B",
        "content": "a = a * 2."
      },
      {
        "id": "C",
        "content": "a = 10."
      },
      {
        "id": "D",
        "content": "a + b = 100."
      }
    ],
    "correctAnswer": "D",
    "hints": {
      "level1_concept": "Nhớ lại cú pháp, quy tắc đặt tên biến, kiểu dữ liệu hoặc cấu trúc điều khiển trong ngôn ngữ Python.",
      "level2_formula": "Mô phỏng từng bước thực hiện của câu lệnh hoặc phân tích điều kiện logic để loại trừ các phương án sai.",
      "level3_steps": "Đối chiếu với quy tắc chuẩn của Python (thụt lề, chỉ số từ 0, hàm chuẩn) để chọn phương án đúng nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 10F - Lập trình cơ bản.",
    "sourceDocTitle": "Chuyên đề 10F. Lập trình cơ bản (Google Drive)"
  },
  {
    "id": "Q-TIN-PY-46",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-lap-trinh-python",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Python (Tuần 2 – 6)",
    "chapterName": "Phần 1: Lập trình cơ bản Python (Tin học 10)",
    "difficulty": "ThongHieu",
    "content": "Tìm lỗi sai trong khai báo biến nguyên Max sau đây?\nMax = 2021:",
    "options": [
      {
        "id": "A",
        "content": "Dư dấu (=)"
      },
      {
        "id": "B",
        "content": "Tên biến trùng với từ khoá"
      },
      {
        "id": "C",
        "content": "Dư dấu (:)"
      },
      {
        "id": "D",
        "content": "Câu lệnh đúng"
      }
    ],
    "correctAnswer": "C",
    "hints": {
      "level1_concept": "Nhớ lại cú pháp, quy tắc đặt tên biến, kiểu dữ liệu hoặc cấu trúc điều khiển trong ngôn ngữ Python.",
      "level2_formula": "Mô phỏng từng bước thực hiện của câu lệnh hoặc phân tích điều kiện logic để loại trừ các phương án sai.",
      "level3_steps": "Đối chiếu với quy tắc chuẩn của Python (thụt lề, chỉ số từ 0, hàm chuẩn) để chọn phương án đúng nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 10F - Lập trình cơ bản.",
    "sourceDocTitle": "Chuyên đề 10F. Lập trình cơ bản (Google Drive)"
  },
  {
    "id": "Q-TIN-PY-47",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-lap-trinh-python",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Python (Tuần 2 – 6)",
    "chapterName": "Phần 1: Lập trình cơ bản Python (Tin học 10)",
    "difficulty": "ThongHieu",
    "content": "Để gán giá trị cho một biến số ta thực hiện như thế nào?",
    "options": [
      {
        "id": "A",
        "content": "<giá trị> := A"
      },
      {
        "id": "B",
        "content": "A = <giá trị>"
      },
      {
        "id": "C",
        "content": "<giá trị> = A"
      },
      {
        "id": "D",
        "content": "A := <giá trị>"
      }
    ],
    "correctAnswer": "B",
    "hints": {
      "level1_concept": "Nhớ lại cú pháp, quy tắc đặt tên biến, kiểu dữ liệu hoặc cấu trúc điều khiển trong ngôn ngữ Python.",
      "level2_formula": "Mô phỏng từng bước thực hiện của câu lệnh hoặc phân tích điều kiện logic để loại trừ các phương án sai.",
      "level3_steps": "Đối chiếu với quy tắc chuẩn của Python (thụt lề, chỉ số từ 0, hàm chuẩn) để chọn phương án đúng nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 10F - Lập trình cơ bản.",
    "sourceDocTitle": "Chuyên đề 10F. Lập trình cơ bản (Google Drive)"
  },
  {
    "id": "Q-TIN-PY-48",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-lap-trinh-python",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Python (Tuần 2 – 6)",
    "chapterName": "Phần 1: Lập trình cơ bản Python (Tin học 10)",
    "difficulty": "ThongHieu",
    "content": "Để tính diện tích đường tròn bán kính R, với pi = 3,14, biểu thức nào sau đây trong Python là đúng?",
    "options": [
      {
        "id": "A",
        "content": "S:=R*R*pi."
      },
      {
        "id": "B",
        "content": "S=R*R*pi."
      },
      {
        "id": "C",
        "content": "S:=2(R)*pi."
      },
      {
        "id": "D",
        "content": "S:=R<sup>2</sup>*pi."
      }
    ],
    "correctAnswer": "B",
    "hints": {
      "level1_concept": "Nhớ lại cú pháp, quy tắc đặt tên biến, kiểu dữ liệu hoặc cấu trúc điều khiển trong ngôn ngữ Python.",
      "level2_formula": "Mô phỏng từng bước thực hiện của câu lệnh hoặc phân tích điều kiện logic để loại trừ các phương án sai.",
      "level3_steps": "Đối chiếu với quy tắc chuẩn của Python (thụt lề, chỉ số từ 0, hàm chuẩn) để chọn phương án đúng nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 10F - Lập trình cơ bản.",
    "sourceDocTitle": "Chuyên đề 10F. Lập trình cơ bản (Google Drive)"
  },
  {
    "id": "Q-TIN-PY-49",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-lap-trinh-python",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Python (Tuần 2 – 6)",
    "chapterName": "Phần 1: Lập trình cơ bản Python (Tin học 10)",
    "difficulty": "ThongHieu",
    "content": "Để viết 3 mũ 4 ($3^4$) trong Python chọn",
    "options": [
      {
        "id": "A",
        "content": "3**4."
      },
      {
        "id": "B",
        "content": "3//4."
      },
      {
        "id": "C",
        "content": "3*3+3*3."
      },
      {
        "id": "D",
        "content": "3%4."
      }
    ],
    "correctAnswer": "A",
    "hints": {
      "level1_concept": "Nhớ lại cú pháp, quy tắc đặt tên biến, kiểu dữ liệu hoặc cấu trúc điều khiển trong ngôn ngữ Python.",
      "level2_formula": "Mô phỏng từng bước thực hiện của câu lệnh hoặc phân tích điều kiện logic để loại trừ các phương án sai.",
      "level3_steps": "Đối chiếu với quy tắc chuẩn của Python (thụt lề, chỉ số từ 0, hàm chuẩn) để chọn phương án đúng nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 10F - Lập trình cơ bản.",
    "sourceDocTitle": "Chuyên đề 10F. Lập trình cơ bản (Google Drive)"
  },
  {
    "id": "Q-TIN-PY-50",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-lap-trinh-python",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Python (Tuần 2 – 6)",
    "chapterName": "Phần 1: Lập trình cơ bản Python (Tin học 10)",
    "difficulty": "ThongHieu",
    "content": "Chuyển biểu thức sau sang Python: $\\frac{2x+1}{x+2}$",
    "options": [
      {
        "id": "A",
        "content": "2*x+1/x+2."
      },
      {
        "id": "B",
        "content": "(2*x+1)/(x+2)."
      },
      {
        "id": "C",
        "content": "(2*x+1)(x+2)."
      },
      {
        "id": "D",
        "content": "(2*x+1) :(x+2)."
      }
    ],
    "correctAnswer": "B",
    "hints": {
      "level1_concept": "Nhớ lại cú pháp, quy tắc đặt tên biến, kiểu dữ liệu hoặc cấu trúc điều khiển trong ngôn ngữ Python.",
      "level2_formula": "Mô phỏng từng bước thực hiện của câu lệnh hoặc phân tích điều kiện logic để loại trừ các phương án sai.",
      "level3_steps": "Đối chiếu với quy tắc chuẩn của Python (thụt lề, chỉ số từ 0, hàm chuẩn) để chọn phương án đúng nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 10F - Lập trình cơ bản.",
    "sourceDocTitle": "Chuyên đề 10F. Lập trình cơ bản (Google Drive)"
  },
  {
    "id": "Q-TIN-PY-51",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-lap-trinh-python",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Python (Tuần 2 – 6)",
    "chapterName": "Phần 1: Lập trình cơ bản Python (Tin học 10)",
    "difficulty": "ThongHieu",
    "content": "Kết quả khi thực hiện câu lệnh sau:\n10 - 5 ** 2 + 8//3 +2",
    "options": [
      {
        "id": "A",
        "content": "-11."
      },
      {
        "id": "B",
        "content": "11."
      },
      {
        "id": "C",
        "content": "7."
      },
      {
        "id": "D",
        "content": "Câu lệnh bị lỗi."
      }
    ],
    "correctAnswer": "A",
    "hints": {
      "level1_concept": "Nhớ lại cú pháp, quy tắc đặt tên biến, kiểu dữ liệu hoặc cấu trúc điều khiển trong ngôn ngữ Python.",
      "level2_formula": "Mô phỏng từng bước thực hiện của câu lệnh hoặc phân tích điều kiện logic để loại trừ các phương án sai.",
      "level3_steps": "Đối chiếu với quy tắc chuẩn của Python (thụt lề, chỉ số từ 0, hàm chuẩn) để chọn phương án đúng nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 10F - Lập trình cơ bản.",
    "sourceDocTitle": "Chuyên đề 10F. Lập trình cơ bản (Google Drive)"
  },
  {
    "id": "Q-TIN-PY-52",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-lap-trinh-python",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Python (Tuần 2 – 6)",
    "chapterName": "Phần 1: Lập trình cơ bản Python (Tin học 10)",
    "difficulty": "ThongHieu",
    "content": "Biểu thức a/(a+1)*(x-1) khi chuyển sang dạng toán học có dạng:",
    "options": [
      {
        "id": "A",
        "content": "aa+1*(x-1)."
      },
      {
        "id": "B",
        "content": "aa+1(x-1)."
      },
      {
        "id": "C",
        "content": "aa+1 x (x-1)."
      },
      {
        "id": "D",
        "content": "ax-1(a+1).\nVẬN DỤNG"
      }
    ],
    "correctAnswer": "B",
    "hints": {
      "level1_concept": "Nhớ lại cú pháp, quy tắc đặt tên biến, kiểu dữ liệu hoặc cấu trúc điều khiển trong ngôn ngữ Python.",
      "level2_formula": "Mô phỏng từng bước thực hiện của câu lệnh hoặc phân tích điều kiện logic để loại trừ các phương án sai.",
      "level3_steps": "Đối chiếu với quy tắc chuẩn của Python (thụt lề, chỉ số từ 0, hàm chuẩn) để chọn phương án đúng nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 10F - Lập trình cơ bản.",
    "sourceDocTitle": "Chuyên đề 10F. Lập trình cơ bản (Google Drive)"
  },
  {
    "id": "Q-TIN-PY-53",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-lap-trinh-python",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Python (Tuần 2 – 6)",
    "chapterName": "Phần 1: Lập trình cơ bản Python (Tin học 10)",
    "difficulty": "ThongHieu",
    "content": "Trong một chương trình, nếu bạn có biến x = 7.5 và y = 2.5, câu lệnh nào sau đây sẽ xuất ra kết quả là \"Tổng x và y là: 10.0\"?",
    "options": [
      {
        "id": "A",
        "content": "print(\"Tổng x và y là: \" + x + y)"
      },
      {
        "id": "B",
        "content": "print(\"Tổng x và y là: \", x + y)"
      },
      {
        "id": "C",
        "content": "print(\"Tổng x và y là: \" + str(x + y))"
      },
      {
        "id": "D",
        "content": "print(\"Tổng x và y là:\", x + y)"
      }
    ],
    "correctAnswer": "D",
    "hints": {
      "level1_concept": "Nhớ lại cú pháp, quy tắc đặt tên biến, kiểu dữ liệu hoặc cấu trúc điều khiển trong ngôn ngữ Python.",
      "level2_formula": "Mô phỏng từng bước thực hiện của câu lệnh hoặc phân tích điều kiện logic để loại trừ các phương án sai.",
      "level3_steps": "Đối chiếu với quy tắc chuẩn của Python (thụt lề, chỉ số từ 0, hàm chuẩn) để chọn phương án đúng nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 10F - Lập trình cơ bản.",
    "sourceDocTitle": "Chuyên đề 10F. Lập trình cơ bản (Google Drive)"
  },
  {
    "id": "Q-TIN-PY-54",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-lap-trinh-python",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Python (Tuần 2 – 6)",
    "chapterName": "Phần 1: Lập trình cơ bản Python (Tin học 10)",
    "difficulty": "ThongHieu",
    "content": "Trong đoạn mã sau, nếu giá trị của biến y là 4, kết quả in ra sẽ là gì?\ny = 4 if y % 2 == 0: print(\"Là số chẵn\") else: print(\"Là số lẻ\")",
    "options": [
      {
        "id": "A",
        "content": "\"Là số chẵn\""
      },
      {
        "id": "B",
        "content": "\"Là số lẻ\""
      },
      {
        "id": "C",
        "content": "Không có gì được in ra"
      },
      {
        "id": "D",
        "content": "Lỗi cú pháp\n2. CÂU HỎI TRẮC NGHIỆM ĐÚNG / SAI"
      }
    ],
    "correctAnswer": "A",
    "hints": {
      "level1_concept": "Nhớ lại cú pháp, quy tắc đặt tên biến, kiểu dữ liệu hoặc cấu trúc điều khiển trong ngôn ngữ Python.",
      "level2_formula": "Mô phỏng từng bước thực hiện của câu lệnh hoặc phân tích điều kiện logic để loại trừ các phương án sai.",
      "level3_steps": "Đối chiếu với quy tắc chuẩn của Python (thụt lề, chỉ số từ 0, hàm chuẩn) để chọn phương án đúng nhất."
    },
    "explanation": "Câu hỏi trích xuất từ tài liệu ôn thi THPT Chuyên đề 10F - Lập trình cơ bản.",
    "sourceDocTitle": "Chuyên đề 10F. Lập trình cơ bản (Google Drive)"
  },
  {
    "id": "Q-TIN-TF-PY-01",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-lap-trinh-python",
    "topicName": "Phần 2: Trắc nghiệm Đúng / Sai Python (Tuần 2 – 6)",
    "chapterName": "Phần 1: Lập trình cơ bản Python (Tin học 10)",
    "difficulty": "VanDung",
    "type": "true_false",
    "content": "Bạn đang phát triển một chương trình Python để tính toán tổng tiền lương của nhân viên trong một công ty. Chương trình sẽ yêu cầu người dùng nhập số giờ làm việc và mức lương theo giờ của từng nhân viên. Dưới đây là một số phát biểu liên quan đến quá trình này. Hãy xác định tính chính xác của từng phát biểu:",
    "options": [
      {
        "id": "A",
        "content": "Ý a"
      },
      {
        "id": "B",
        "content": "Ý b"
      },
      {
        "id": "C",
        "content": "Ý c"
      },
      {
        "id": "D",
        "content": "Ý d"
      }
    ],
    "correctAnswer": "A",
    "tfItems": [
      {
        "id": "a",
        "content": "Khi người dùng nhập số giờ làm việc và mức lương theo giờ, bạn có thể trực tiếp sử dụng hàm input() để lưu trữ giá trị vào biến mà không cần chuyển đổi kiểu dữ liệu, vì Python sẽ tự động nhận diện kiểu dữ liệu.",
        "correctAnswer": false
      },
      {
        "id": "b",
        "content": "Để tính tổng tiền lương, bạn có thể sử dụng công thức: tien_luong = so_gio_lam * luong_theo_gio, trong đó cả hai biến đều đã được chuyển đổi thành kiểu float.",
        "correctAnswer": true
      },
      {
        "id": "c",
        "content": "Nếu người dùng nhập một chuỗi không phải là số (ví dụ: \"mười\"), câu lệnh int() sẽ tự động chuyển đổi chuỗi đó thành giá trị 0 mà không gây ra lỗi.",
        "correctAnswer": false
      },
      {
        "id": "d",
        "content": "Để đảm bảo chương trình hoạt động đúng, bạn nên sử dụng khối lệnh try và except để xử lý các lỗi có thể xảy ra khi người dùng nhập dữ liệu không hợp lệ.",
        "correctAnswer": true
      }
    ],
    "hints": {
      "level1_concept": "Đọc kỹ tình huống bài toán lập trình Python thực tế và phân tích từng nhận định độc lập a, b, c, d.",
      "level2_formula": "Kiểm tra tính chính xác của cú pháp, kiểu dữ liệu ép kiểu và logic thuật toán của từng phát biểu.",
      "level3_steps": "Quy tắc chấm điểm thi tốt nghiệp THPT: Đúng 1 ý: 0.1đ; Đúng 2 ý: 0.25đ; Đúng 3 ý: 0.5đ; Đúng cả 4 ý: 1.0đ."
    },
    "explanation": "Câu hỏi trắc nghiệm Đúng / Sai theo cấu trúc đề thi tốt nghiệp THPT từ tài liệu Chuyên đề 10F.",
    "sourceDocTitle": "Chuyên đề 10F. Lập trình cơ bản (Google Drive)"
  },
  {
    "id": "Q-TIN-TF-PY-02",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-lap-trinh-python",
    "topicName": "Phần 2: Trắc nghiệm Đúng / Sai Python (Tuần 2 – 6)",
    "chapterName": "Phần 1: Lập trình cơ bản Python (Tin học 10)",
    "difficulty": "VanDung",
    "type": "true_false",
    "content": "Minh đang phát triển một chương trình Python để phân loại điểm số của học sinh vào các loại: Giỏi, Khá, Trung bình, và Yếu. Dựa vào điểm số mà người dùng nhập vào, chương trình sẽ sử dụng câu lệnh rẽ nhánh để xác định loại điểm. Dưới đây là một số phát biểu liên quan đến việc sử dụng câu lệnh rẽ nhánh trong chương trình này. Hãy xác định tính chính xác của từng phát biểu:",
    "options": [
      {
        "id": "A",
        "content": "Ý a"
      },
      {
        "id": "B",
        "content": "Ý b"
      },
      {
        "id": "C",
        "content": "Ý c"
      },
      {
        "id": "D",
        "content": "Ý d"
      }
    ],
    "correctAnswer": "A",
    "tfItems": [
      {
        "id": "a",
        "content": "Bạn có thể sử dụng câu lệnh if để kiểm tra điểm số của học sinh và phân loại nó thành \"Giỏi\" nếu điểm số lớn hơn hoặc bằng 8.0.",
        "correctAnswer": true
      },
      {
        "id": "b",
        "content": "Câu lệnh elif là cách duy nhất để kiểm tra nhiều điều kiện trong một câu lệnh rẽ nhánh.",
        "correctAnswer": false
      },
      {
        "id": "c",
        "content": "Nếu điểm số của học sinh là 7.5, câu lệnh if có thể kiểm tra và phân loại là \"Khá\" bằng cách sử dụng cấu trúc:\nif diem = 8.0:\nprint(\"Giỏi\")\nelif diem = 6.5:\nprint(\"Khá\")",
        "correctAnswer": true
      },
      {
        "id": "d",
        "content": "Câu lệnh else không cần thiết trong một câu lệnh rẽ nhánh nếu bạn chỉ muốn kiểm tra một điều kiện duy nhất.",
        "correctAnswer": true
      }
    ],
    "hints": {
      "level1_concept": "Đọc kỹ tình huống bài toán lập trình Python thực tế và phân tích từng nhận định độc lập a, b, c, d.",
      "level2_formula": "Kiểm tra tính chính xác của cú pháp, kiểu dữ liệu ép kiểu và logic thuật toán của từng phát biểu.",
      "level3_steps": "Quy tắc chấm điểm thi tốt nghiệp THPT: Đúng 1 ý: 0.1đ; Đúng 2 ý: 0.25đ; Đúng 3 ý: 0.5đ; Đúng cả 4 ý: 1.0đ."
    },
    "explanation": "Câu hỏi trắc nghiệm Đúng / Sai theo cấu trúc đề thi tốt nghiệp THPT từ tài liệu Chuyên đề 10F.",
    "sourceDocTitle": "Chuyên đề 10F. Lập trình cơ bản (Google Drive)"
  },
  {
    "id": "Q-TIN-TF-PY-03",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-lap-trinh-python",
    "topicName": "Phần 2: Trắc nghiệm Đúng / Sai Python (Tuần 2 – 6)",
    "chapterName": "Phần 1: Lập trình cơ bản Python (Tin học 10)",
    "difficulty": "VanDung",
    "type": "true_false",
    "content": "Một nhà hàng đang triển khai một chương trình khuyến mãi trong tháng với nhiều món ăn khác nhau. Mỗi đầu bếp sẽ nhập vào số lượng món ăn mà họ đã phục vụ trong tháng và doanh thu từ mỗi món ăn đó. Chương trình Python sẽ sử dụng câu lệnh lặp để tổng hợp doanh thu và đưa ra thông tin hữu ích.\nHãy xem xét các phát biểu dưới đây và xác định tính đúng sai của chúng:",
    "options": [
      {
        "id": "A",
        "content": "Ý a"
      },
      {
        "id": "B",
        "content": "Ý b"
      },
      {
        "id": "C",
        "content": "Ý c"
      },
      {
        "id": "D",
        "content": "Ý d"
      }
    ],
    "correctAnswer": "A",
    "tfItems": [
      {
        "id": "a",
        "content": "Câu lệnh lặp for rất hiệu quả trong việc tổng hợp doanh thu từ các món ăn vì số lượng món ăn đã được xác định trước trong thực đơn.",
        "correctAnswer": true
      },
      {
        "id": "b",
        "content": "Nếu một đầu bếp phục vụ 6 món ăn và doanh thu từ các món ăn đó lần lượt là 10.000, 15.000, 20.000, 25.000, 30.000 và 5.000, thì tổng doanh thu sẽ là 105.000.",
        "correctAnswer": false
      },
      {
        "id": "c",
        "content": "Sử dụng câu lệnh lặp while có thể hợp lý khi không biết số lượng món ăn, nhưng phải có một điều kiện dừng rõ ràng để tránh vòng lặp vô hạn.",
        "correctAnswer": true
      },
      {
        "id": "d",
        "content": "Nếu tổng doanh thu từ các món ăn bằng 0, chương trình nên in ra thông báo \"Không có doanh thu nào được ghi nhận.\" và khuyến khích đầu bếp xem xét lý do tại sao doanh thu lại bằng 0, như đánh giá chất lượng món ăn hoặc sự hài lòng của khách hàng.",
        "correctAnswer": true
      }
    ],
    "hints": {
      "level1_concept": "Đọc kỹ tình huống bài toán lập trình Python thực tế và phân tích từng nhận định độc lập a, b, c, d.",
      "level2_formula": "Kiểm tra tính chính xác của cú pháp, kiểu dữ liệu ép kiểu và logic thuật toán của từng phát biểu.",
      "level3_steps": "Quy tắc chấm điểm thi tốt nghiệp THPT: Đúng 1 ý: 0.1đ; Đúng 2 ý: 0.25đ; Đúng 3 ý: 0.5đ; Đúng cả 4 ý: 1.0đ."
    },
    "explanation": "Câu hỏi trắc nghiệm Đúng / Sai theo cấu trúc đề thi tốt nghiệp THPT từ tài liệu Chuyên đề 10F.",
    "sourceDocTitle": "Chuyên đề 10F. Lập trình cơ bản (Google Drive)"
  },
  {
    "id": "Q-TIN-TF-PY-04",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-lap-trinh-python",
    "topicName": "Phần 2: Trắc nghiệm Đúng / Sai Python (Tuần 2 – 6)",
    "chapterName": "Phần 1: Lập trình cơ bản Python (Tin học 10)",
    "difficulty": "VanDung",
    "type": "true_false",
    "content": "Một giáo viên đang phát triển một ứng dụng để theo dõi điểm số của học sinh trong các bài kiểm tra. Ứng dụng này cho phép giáo viên nhập vào danh sách điểm số của từng học sinh và tính toán tổng điểm, điểm trung bình, cũng như số học sinh đạt điểm trên trung bình. Giáo viên sử dụng các chương trình con (hàm) và thư viện có sẵn để thực hiện các phép toán này.\nHãy xem xét các phát biểu dưới đây và xác định tính đúng sai của chúng:",
    "options": [
      {
        "id": "A",
        "content": "Ý a"
      },
      {
        "id": "B",
        "content": "Ý b"
      },
      {
        "id": "C",
        "content": "Ý c"
      },
      {
        "id": "D",
        "content": "Ý d"
      }
    ],
    "correctAnswer": "A",
    "tfItems": [
      {
        "id": "a",
        "content": "Việc sử dụng hàm cho phép tách biệt các chức năng khác nhau, như nhập điểm, tính tổng, tính trung bình và đếm số học sinh đạt điểm trên trung bình.",
        "correctAnswer": true
      },
      {
        "id": "b",
        "content": "Khi định nghĩa một hàm để tính điểm trung bình, lập trình viên cần phải chỉ định kiểu dữ liệu cho tham số, chẳng hạn như danh sách điểm số.",
        "correctAnswer": false
      },
      {
        "id": "c",
        "content": "Thư viện thống kê cung cấp các hàm như mean và stdev rất hữu ích cho việc tính toán điểm trung bình và độ lệch chuẩn của danh sách điểm.",
        "correctAnswer": true
      },
      {
        "id": "d",
        "content": "Nếu một hàm cần trả về cả tổng điểm và điểm trung bình, lập trình viên có thể sử dụng một cấu trúc dữ liệu như tuple hoặc danh sách để trả về cả hai giá trị từ một hàm duy nhất.",
        "correctAnswer": true
      }
    ],
    "hints": {
      "level1_concept": "Đọc kỹ tình huống bài toán lập trình Python thực tế và phân tích từng nhận định độc lập a, b, c, d.",
      "level2_formula": "Kiểm tra tính chính xác của cú pháp, kiểu dữ liệu ép kiểu và logic thuật toán của từng phát biểu.",
      "level3_steps": "Quy tắc chấm điểm thi tốt nghiệp THPT: Đúng 1 ý: 0.1đ; Đúng 2 ý: 0.25đ; Đúng 3 ý: 0.5đ; Đúng cả 4 ý: 1.0đ."
    },
    "explanation": "Câu hỏi trắc nghiệm Đúng / Sai theo cấu trúc đề thi tốt nghiệp THPT từ tài liệu Chuyên đề 10F.",
    "sourceDocTitle": "Chuyên đề 10F. Lập trình cơ bản (Google Drive)"
  },
  {
    "id": "Q-TIN-TF-PY-05",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-lap-trinh-python",
    "topicName": "Phần 2: Trắc nghiệm Đúng / Sai Python (Tuần 2 – 6)",
    "chapterName": "Phần 1: Lập trình cơ bản Python (Tin học 10)",
    "difficulty": "VanDung",
    "type": "true_false",
    "content": "Giáo viên đang xây dựng một chương trình để lưu trữ thông tin về học sinh. Mỗi thông tin học sinh được lưu trữ dưới dạng xâu ký tự theo định dạng: \"Mã học sinh;Tên học sinh;Điểm số\". Ví dụ: \"HS001;Nguyễn Văn A;8.0\".\nGiáo viên muốn thực hiện các chức năng sau:\n1. Tách thông tin từ xâu ký tự để truy cập từng phần của thông tin học sinh.\n2. Kiểm tra điểm số của học sinh để xác định xem học sinh có đủ điều kiện nhận học bổng hay không (điểm số ≥ 8.0).\nDưới đây là một số phát biểu liên quan đến việc xử lý xâu ký tự trong tình huống này. Hãy xác định tính chính xác của từng phát biểu và giải thích lý do:",
    "options": [
      {
        "id": "A",
        "content": "Ý a"
      },
      {
        "id": "B",
        "content": "Ý b"
      },
      {
        "id": "C",
        "content": "Ý c"
      },
      {
        "id": "D",
        "content": "Ý d"
      }
    ],
    "correctAnswer": "A",
    "tfItems": [
      {
        "id": "a",
        "content": "Có thể sử dụng phương thức split(';') để tách xâu ký tự thành các thành phần: mã học sinh, tên học sinh và điểm số.",
        "correctAnswer": true
      },
      {
        "id": "b",
        "content": "Để truy cập tên học sinh, cần phải sử dụng chỉ số 1 trong mảng được tạo ra từ việc phân tách xâu ký tự.",
        "correctAnswer": true
      },
      {
        "id": "c",
        "content": "Nếu xâu ký tự là \"HS002;Trần Thị B;7.5\", có thể sử dụng phương thức .find('Trần') để kiểm tra xem tên học sinh có chứa từ \"Trần\" hay không.",
        "correctAnswer": false
      },
      {
        "id": "d",
        "content": "Để kiểm tra xem học sinh có đủ điều kiện nhận học bổng hay không, có thể so sánh điểm số với giá trị 8.0.",
        "correctAnswer": true
      }
    ],
    "hints": {
      "level1_concept": "Đọc kỹ tình huống bài toán lập trình Python thực tế và phân tích từng nhận định độc lập a, b, c, d.",
      "level2_formula": "Kiểm tra tính chính xác của cú pháp, kiểu dữ liệu ép kiểu và logic thuật toán của từng phát biểu.",
      "level3_steps": "Quy tắc chấm điểm thi tốt nghiệp THPT: Đúng 1 ý: 0.1đ; Đúng 2 ý: 0.25đ; Đúng 3 ý: 0.5đ; Đúng cả 4 ý: 1.0đ."
    },
    "explanation": "Câu hỏi trắc nghiệm Đúng / Sai theo cấu trúc đề thi tốt nghiệp THPT từ tài liệu Chuyên đề 10F.",
    "sourceDocTitle": "Chuyên đề 10F. Lập trình cơ bản (Google Drive)"
  },
  {
    "id": "Q-TIN-NET-11",
    "subjectId": "tin-hoc",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Chuyên đề 12B. Mạng máy tính và thiết bị mạng",
    "chapterName": "Chuyên đề 12B. Mạng máy tính và thiết bị mạng",
    "difficulty": "ThongHieu",
    "content": "Để bảo vệ dữ liệu trên máy tính khi dùng internet, em cần làm gì?",
    "options": [
      {
        "id": "A",
        "content": "Cài đặt và cập nhật phần mềm chống virus."
      },
      {
        "id": "B",
        "content": "Tải các phần mềm ứng dụng không rõ nguồn gốc về máy tính."
      },
      {
        "id": "C",
        "content": "Cung cấp thông tin cá nhân trên mạng xã hội."
      },
      {
        "id": "D",
        "content": "Truy cập vào các liên kết lạ."
      }
    ],
    "correctAnswer": "A",
    "hints": {
      "level1_concept": "Nhớ lại kiến thức về kết nối và an toàn mạng trong Chuyên đề 12B.",
      "level2_formula": "Xem xét mục đích của thao tác kỹ thuật hoặc quy tắc an toàn khi sử dụng mạng.",
      "level3_steps": "Đối chiếu từng lựa chọn A, B, C, D với quy trình chuẩn trong sách giáo khoa Tin học 12."
    },
    "explanation": "Câu hỏi bóc tách từ tài liệu Chuyên đề 12B. Phương án đúng: A theo chuẩn chương trình THPT.",
    "sourceDocTitle": "Chuyên đề 12B. Mạng máy tính và thiết bị mạng.docx (Google Drive)"
  },
  {
    "id": "Q-TIN-NET-42",
    "subjectId": "tin-hoc",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Chuyên đề 12B. Mạng máy tính và thiết bị mạng",
    "chapterName": "Chuyên đề 12B. Mạng máy tính và thiết bị mạng",
    "difficulty": "ThongHieu",
    "content": "Tên miền cấp cao nhất (TLD) thường là gì?",
    "options": [
      {
        "id": "A",
        "content": "Phần đuôi sau cùng của tên miền"
      },
      {
        "id": "B",
        "content": "Phần đầu của tên miền"
      },
      {
        "id": "C",
        "content": "Một phần của địa chỉ IP"
      },
      {
        "id": "D",
        "content": "Một loại giao thức mạng"
      }
    ],
    "correctAnswer": "A",
    "hints": {
      "level1_concept": "Nhớ lại kiến thức về kết nối và an toàn mạng trong Chuyên đề 12B.",
      "level2_formula": "Xem xét mục đích của thao tác kỹ thuật hoặc quy tắc an toàn khi sử dụng mạng.",
      "level3_steps": "Đối chiếu từng lựa chọn A, B, C, D với quy trình chuẩn trong sách giáo khoa Tin học 12."
    },
    "explanation": "Câu hỏi bóc tách từ tài liệu Chuyên đề 12B. Phương án đúng: A theo chuẩn chương trình THPT.",
    "sourceDocTitle": "Chuyên đề 12B. Mạng máy tính và thiết bị mạng.docx (Google Drive)"
  },
  {
    "id": "Q-TIN-NET-44",
    "subjectId": "tin-hoc",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Chuyên đề 12B. Mạng máy tính và thiết bị mạng",
    "chapterName": "Chuyên đề 12B. Mạng máy tính và thiết bị mạng",
    "difficulty": "ThongHieu",
    "content": "Khi kết nối máy tính với Access Point trên Windows 10, bước đầu tiên bạn cần làm gì?",
    "options": [
      {
        "id": "A",
        "content": "Kiểm tra địa chỉ IP"
      },
      {
        "id": "B",
        "content": "Nhập mật khẩu mạng Wi-Fi"
      },
      {
        "id": "C",
        "content": "Chọn tên mạng Wi-Fi"
      },
      {
        "id": "D",
        "content": "Mở trình duyệt web"
      }
    ],
    "correctAnswer": "C",
    "hints": {
      "level1_concept": "Nhớ lại kiến thức về kết nối và an toàn mạng trong Chuyên đề 12B.",
      "level2_formula": "Xem xét mục đích của thao tác kỹ thuật hoặc quy tắc an toàn khi sử dụng mạng.",
      "level3_steps": "Đối chiếu từng lựa chọn A, B, C, D với quy trình chuẩn trong sách giáo khoa Tin học 12."
    },
    "explanation": "Câu hỏi bóc tách từ tài liệu Chuyên đề 12B. Phương án đúng: C theo chuẩn chương trình THPT.",
    "sourceDocTitle": "Chuyên đề 12B. Mạng máy tính và thiết bị mạng.docx (Google Drive)"
  },
{
  "id": "Q-TIN-12F-MC-01",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Trong các khai báo cấu trúc văn bản HTML sau, khai báo nào đúng cú pháp.",
  "options": [
    {
      "id": "A",
      "content": "<html> <head> <title> </title> </head> <body> </body> < /html>"
    },
    {
      "id": "B",
      "content": "<html> <head> </head> <body> <title> </title> </body> < /html>"
    },
    {
      "id": "C",
      "content": "<html> <head> <title> <body> </body> </title> </head> < /html>"
    },
    {
      "id": "D",
      "content": "<html> <body> <title> <head> </head> </title> </body> < /html>"
    }
  ],
  "correctAnswer": "A",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là A. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-02",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Phần tử nào sau đây được sử dụng để khai báo phần nội dung của trang web?",
  "options": [
    {
      "id": "A",
      "content": "body"
    },
    {
      "id": "B",
      "content": "html"
    },
    {
      "id": "C",
      "content": "head"
    },
    {
      "id": "D",
      "content": "meta"
    }
  ],
  "correctAnswer": "A",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là A. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-03",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Để tạo đoạn văn bản trong ngôn ngữ đánh dấu siêu văn bản HTML thì ta sử dụng cấu trúc nào sau đây?",
  "options": [
    {
      "id": "A",
      "content": "<p> Văn bản </p>"
    },
    {
      "id": "B",
      "content": "</p> Văn bản <p>"
    },
    {
      "id": "C",
      "content": "(p) Văn bản (/p)"
    },
    {
      "id": "D",
      "content": "<p> Văn bản <\\p>"
    }
  ],
  "correctAnswer": "A",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là A. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-04",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Thẻ nào sau đây được dùng để khai báo tạo danh sách xác định thứ tự?",
  "options": [
    {
      "id": "A",
      "content": "<ol>"
    },
    {
      "id": "B",
      "content": "<li>"
    },
    {
      "id": "C",
      "content": "<ul>"
    },
    {
      "id": "D",
      "content": "<h1>"
    }
  ],
  "correctAnswer": "A",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là A. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-05",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Thẻ nào sau đây được dùng để khai báo tạo danh sách không xác định thứ tự?",
  "options": [
    {
      "id": "A",
      "content": "<ol>"
    },
    {
      "id": "B",
      "content": "<li>"
    },
    {
      "id": "C",
      "content": "<ul>"
    },
    {
      "id": "D",
      "content": "<h1>"
    }
  ],
  "correctAnswer": "C",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là C. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-06",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Thuộc tính nào sau đây được sử dụng để khai báo việc chèn hình ảnh vào trang web??",
  "options": [
    {
      "id": "A",
      "content": "<img>"
    },
    {
      "id": "B",
      "content": "<picture>"
    },
    {
      "id": "C",
      "content": "<jpg>"
    },
    {
      "id": "D",
      "content": "<image>"
    }
  ],
  "correctAnswer": "A",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là A. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-07",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Thuộc tính nào sau đây được sử dụng để khai báo việc chèn âm thanh vào trang web?",
  "options": [
    {
      "id": "A",
      "content": "<img>"
    },
    {
      "id": "B",
      "content": "<mp3>"
    },
    {
      "id": "C",
      "content": "<video>"
    },
    {
      "id": "D",
      "content": "<audio>"
    }
  ],
  "correctAnswer": "D",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là D. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-08",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Thẻ HTML nào sau đây tạo ra một hộp kiểm/ô lựa chọn?",
  "options": [
    {
      "id": "A",
      "content": "<check>"
    },
    {
      "id": "B",
      "content": "<checkbox>"
    },
    {
      "id": "C",
      "content": "<input type = “check ’’>"
    },
    {
      "id": "D",
      "content": "<input type = ‘'checkbox'’>"
    }
  ],
  "correctAnswer": "D",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là D. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-09",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "CSS là viết tắt của cụm từ nào sau đây?",
  "options": [
    {
      "id": "A",
      "content": "Creative Style Sheets."
    },
    {
      "id": "B",
      "content": "Cascading Style Scripts."
    },
    {
      "id": "C",
      "content": "Cascading Style Sheets."
    },
    {
      "id": "D",
      "content": "Computer Style Syntax."
    }
  ],
  "correctAnswer": "C",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là C. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-10",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Thuộc tính nào sau đây được sử dụng để xác định kích thước của font chữ trong css?",
  "options": [
    {
      "id": "A",
      "content": "font-size."
    },
    {
      "id": "B",
      "content": "text-size."
    },
    {
      "id": "C",
      "content": "size."
    },
    {
      "id": "D",
      "content": "font-style."
    }
  ],
  "correctAnswer": "A",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là A. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-11",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "HTML là viết tắt củ",
  "options": [
    {
      "id": "A",
      "content": "A. HyperText Markup Language"
    },
    {
      "id": "B",
      "content": "Hyperlink and Text Markup Language"
    },
    {
      "id": "C",
      "content": "HyperText Multi-language"
    },
    {
      "id": "D",
      "content": "HyperText Media Language"
    }
  ],
  "correctAnswer": "A",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là A. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-12",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Ngôn ngữ đánh dấu siêu văn bản (HTML) được sử dụng chủ yếu để làm gì?",
  "options": [
    {
      "id": "A",
      "content": "Tạo bảng tính"
    },
    {
      "id": "B",
      "content": "Tạo trang web"
    },
    {
      "id": "C",
      "content": "Lập trình ứng dụng"
    },
    {
      "id": "D",
      "content": "Xử lý dữ liệu"
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là B. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-13",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Trong HTML, dấu “/” trong thẻ có ý nghĩa gì?",
  "options": [
    {
      "id": "A",
      "content": "Đánh dấu phần tử bị lỗi"
    },
    {
      "id": "B",
      "content": "Kết thúc thẻ"
    },
    {
      "id": "C",
      "content": "Bắt đầu thẻ"
    },
    {
      "id": "D",
      "content": "Chỉ thị kiểu chữ"
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là B. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-14",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Tên thẻ HTML có phân biệt chữ hoa và chữ thường không?",
  "options": [
    {
      "id": "A",
      "content": "Có phân biệt"
    },
    {
      "id": "B",
      "content": "Không phân biệt"
    },
    {
      "id": "C",
      "content": "Chỉ phân biệt trong các trình duyệt khác nhau"
    },
    {
      "id": "D",
      "content": "Phân biệt trong các phiên bản khác nhau"
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là B. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-15",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Phần nào của tài liệu HTML chứa nội dung sẽ hiển thị trên màn hình của trình duyệt web?",
  "options": [
    {
      "id": "A",
      "content": "Phần đầu"
    },
    {
      "id": "B",
      "content": "Phần chân"
    },
    {
      "id": "C",
      "content": "Phần thân"
    },
    {
      "id": "D",
      "content": "Phần meta"
    }
  ],
  "correctAnswer": "C",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là C. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-16",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Dòng đầu tiên của văn bản HTML thường là gì?",
  "options": [
    {
      "id": "A",
      "content": "Tiêu đề của trang web"
    },
    {
      "id": "B",
      "content": "Doctype"
    },
    {
      "id": "C",
      "content": "Nội dung của trang web"
    },
    {
      "id": "D",
      "content": "Siêu dữ liệu"
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là B. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-17",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Khi soạn thảo văn bản HTML trong Sublime Text, bạn nên lưu tệp với định dạng nào?",
  "options": [
    {
      "id": "A",
      "content": ".txt"
    },
    {
      "id": "B",
      "content": ".html"
    },
    {
      "id": "C",
      "content": ".docx"
    },
    {
      "id": "D",
      "content": ".xml"
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là B. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-18",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "HTML hỗ trợ bao nhiêu cấp tiêu đề mục từ lớn đến nhỏ?",
  "options": [
    {
      "id": "A",
      "content": "3"
    },
    {
      "id": "B",
      "content": "4"
    },
    {
      "id": "C",
      "content": "5"
    },
    {
      "id": "D",
      "content": "6"
    }
  ],
  "correctAnswer": "D",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là D. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-19",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Phần tử <a> trong HTML được sử dụng để làm gì?",
  "options": [
    {
      "id": "A",
      "content": "Tạo các đoạn văn bản"
    },
    {
      "id": "B",
      "content": "Tạo các tiêu đề"
    },
    {
      "id": "C",
      "content": "Tạo các siêu liên kết"
    },
    {
      "id": "D",
      "content": "Tạo các bảng"
    }
  ],
  "correctAnswer": "C",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là C. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-20",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Phần tử nào trong HTML được sử dụng để in đậm văn bản?",
  "options": [
    {
      "id": "A",
      "content": "<strong>"
    },
    {
      "id": "B",
      "content": "<em>"
    },
    {
      "id": "C",
      "content": "<mark>"
    },
    {
      "id": "D",
      "content": "<b>"
    }
  ],
  "correctAnswer": "D",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là D. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-21",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Thẻ nào dùng để chèn hình ảnh vào trang web?",
  "options": [
    {
      "id": "A",
      "content": "<img>"
    },
    {
      "id": "B",
      "content": "<picture>"
    },
    {
      "id": "C",
      "content": "<photo>"
    },
    {
      "id": "D",
      "content": "<image>"
    }
  ],
  "correctAnswer": "A",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là A. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-22",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Thẻ nào được sử dụng để tạo các đoạn văn bản trên trang web trong HTML?",
  "options": [
    {
      "id": "A",
      "content": "<h1>"
    },
    {
      "id": "B",
      "content": "<a>"
    },
    {
      "id": "C",
      "content": "<p>"
    },
    {
      "id": "D",
      "content": "<div>"
    }
  ],
  "correctAnswer": "C",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là C. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-23",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Thẻ nào trong HTML được sử dụng để định nghĩa tiêu đề cho một bảng?",
  "options": [
    {
      "id": "A",
      "content": "<thead>"
    },
    {
      "id": "B",
      "content": "<title>"
    },
    {
      "id": "C",
      "content": "<header>"
    },
    {
      "id": "D",
      "content": "<footer>"
    }
  ],
  "correctAnswer": "A",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là A. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-24",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Thẻ nào trong HTML được sử dụng để định nghĩa một tiêu đề cột trong bảng?",
  "options": [
    {
      "id": "A",
      "content": "<td>"
    },
    {
      "id": "B",
      "content": "<th>"
    },
    {
      "id": "C",
      "content": "<tr>"
    },
    {
      "id": "D",
      "content": "<caption>"
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là B. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-25",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Thẻ nào trong HTML được sử dụng để tạo bảng?",
  "options": [
    {
      "id": "A",
      "content": "<table>"
    },
    {
      "id": "B",
      "content": "<tab>"
    },
    {
      "id": "C",
      "content": "<btable>"
    },
    {
      "id": "D",
      "content": "<grid>"
    }
  ],
  "correctAnswer": "A",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là A. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-26",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Thẻ nào dùng để tạo một danh sách có thứ tự trong HTML?",
  "options": [
    {
      "id": "A",
      "content": "<ul>"
    },
    {
      "id": "B",
      "content": "<ol>"
    },
    {
      "id": "C",
      "content": "<dl>"
    },
    {
      "id": "D",
      "content": "<list>"
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là B. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-27",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Thẻ nào được sử dụng để tạo danh sách xác định thứ tự trong HTML?",
  "options": [
    {
      "id": "A",
      "content": "<ul>"
    },
    {
      "id": "B",
      "content": "<ol>"
    },
    {
      "id": "C",
      "content": "<li>"
    },
    {
      "id": "D",
      "content": "<table>"
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là B. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-28",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Thẻ nào được sử dụng để tạo các mục nội dung trong danh sách?",
  "options": [
    {
      "id": "A",
      "content": "<ol>"
    },
    {
      "id": "B",
      "content": "<ul>"
    },
    {
      "id": "C",
      "content": "<li>"
    },
    {
      "id": "D",
      "content": "<table>"
    }
  ],
  "correctAnswer": "C",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là C. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-29",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Thẻ nào dùng để định nghĩa một mục trong danh sách có thứ tự?",
  "options": [
    {
      "id": "A",
      "content": "<li>"
    },
    {
      "id": "B",
      "content": "<item>"
    },
    {
      "id": "C",
      "content": "<list>"
    },
    {
      "id": "D",
      "content": "<ol>"
    }
  ],
  "correctAnswer": "A",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là A. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-30",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Thẻ nào trong HTML được sử dụng để định nghĩa một hàng trong bảng?",
  "options": [
    {
      "id": "A",
      "content": "<row>"
    },
    {
      "id": "B",
      "content": "<td>"
    },
    {
      "id": "C",
      "content": "<th>"
    },
    {
      "id": "D",
      "content": "<tr>"
    }
  ],
  "correctAnswer": "D",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là D. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-31",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Thẻ nào trong HTML được sử dụng để định nghĩa một ô dữ liệu trong bảng?",
  "options": [
    {
      "id": "A",
      "content": "<td>"
    },
    {
      "id": "B",
      "content": "<th>"
    },
    {
      "id": "C",
      "content": "<tr>"
    },
    {
      "id": "D",
      "content": "<header>"
    }
  ],
  "correctAnswer": "A",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là A. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-32",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Cú pháp nào sau đây là đúng cho thẻ Doctype",
  "options": [
    {
      "id": "A",
      "content": "<!DOCTYPE/html>;"
    },
    {
      "id": "B",
      "content": "<!DOCTYPE html>;"
    },
    {
      "id": "C",
      "content": "<!DOCTYPE-html>;"
    },
    {
      "id": "D",
      "content": "< DOCTYPE/html>;"
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là B. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-33",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Các tệp chứa trang web thường có phần mở rộng là gì?",
  "options": [
    {
      "id": "A",
      "content": "web;"
    },
    {
      "id": "B",
      "content": "txt;"
    },
    {
      "id": "C",
      "content": "html;"
    },
    {
      "id": "D",
      "content": "tag;"
    }
  ],
  "correctAnswer": "C",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là C. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-34",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Thẻ <br> được sử dụng để làm gì?",
  "options": [
    {
      "id": "A",
      "content": "Gạch chân một đoạn văn bản;"
    },
    {
      "id": "B",
      "content": "In nghiêng một đoạn văn bản;"
    },
    {
      "id": "C",
      "content": "In đậm một đoạn văn bản;"
    },
    {
      "id": "D",
      "content": "Xuống dòng;"
    }
  ],
  "correctAnswer": "D",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là D. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-35",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Cấu trúc của văn bản HTML được viết bằng cặp thẻ nào?",
  "options": [
    {
      "id": "A",
      "content": "<html> ……</html>"
    },
    {
      "id": "B",
      "content": "<head> ……</head>"
    },
    {
      "id": "C",
      "content": "<body> ……</body>"
    },
    {
      "id": "D",
      "content": "<p> ……</p>"
    }
  ],
  "correctAnswer": "A",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là A. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-36",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Phần đầu của văn bản HTML được viết bằng cặp thẻ nào?",
  "options": [
    {
      "id": "A",
      "content": "<html> ……</html>"
    },
    {
      "id": "B",
      "content": "<head> ……</head>"
    },
    {
      "id": "C",
      "content": "<body> ……</body>"
    },
    {
      "id": "D",
      "content": "<p> ……</p>"
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là B. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-37",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Phần thân của văn bản HTML được viết bằng cặp thẻ nào?",
  "options": [
    {
      "id": "A",
      "content": "<html> ……</html>"
    },
    {
      "id": "B",
      "content": "<head> ……</head>"
    },
    {
      "id": "C",
      "content": "<body> ……</body>"
    },
    {
      "id": "D",
      "content": "<p> ……</p>"
    }
  ],
  "correctAnswer": "C",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là C. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-38",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Để thêm chú thích vào văn bản HTML em viết chú thích vào cặp thẻ nào?",
  "options": [
    {
      "id": "A",
      "content": "<p>"
    },
    {
      "id": "B",
      "content": "<hr>"
    },
    {
      "id": "C",
      "content": "<!-- và -->"
    },
    {
      "id": "D",
      "content": "<h>"
    }
  ],
  "correctAnswer": "C",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là C. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-39",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Thẻ HTML nào sau đây được sử dụng để tạo bảng?",
  "options": [
    {
      "id": "A",
      "content": "<table>"
    },
    {
      "id": "B",
      "content": "<tr>"
    },
    {
      "id": "C",
      "content": "<tbl>"
    },
    {
      "id": "D",
      "content": "<td>"
    }
  ],
  "correctAnswer": "A",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là A. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-40",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Thẻ HTML nào sau đây được sử dụng để tạo các dòng trong bảng?",
  "options": [
    {
      "id": "A",
      "content": "<th>"
    },
    {
      "id": "B",
      "content": "<tr>"
    },
    {
      "id": "C",
      "content": "<tl>"
    },
    {
      "id": "D",
      "content": "<trow>"
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là B. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-41",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Thẻ HTML nào sau đây được sử dụng để tạo một danh sách không xác định thứ tự?",
  "options": [
    {
      "id": "A",
      "content": "<li>"
    },
    {
      "id": "B",
      "content": "<ul>"
    },
    {
      "id": "C",
      "content": "<ol>"
    },
    {
      "id": "D",
      "content": "<il>"
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là B. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-42",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Thẻ HTML nào sau đây được sử dụng để tạo một siêu liên kết?",
  "options": [
    {
      "id": "A",
      "content": "<a>"
    },
    {
      "id": "B",
      "content": "<link>"
    },
    {
      "id": "C",
      "content": "<href>"
    },
    {
      "id": "D",
      "content": "<url>"
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là B. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-43",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Thẻ HTML nào sau đây được sử dụng để liệt kê các danh mục trong một danh sách ?",
  "options": [
    {
      "id": "A",
      "content": "<li>"
    },
    {
      "id": "B",
      "content": "<ul>"
    },
    {
      "id": "C",
      "content": "<ol>"
    },
    {
      "id": "D",
      "content": "<il>"
    }
  ],
  "correctAnswer": "A",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là A. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-44",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Thành phần nào sau đây không có trong thẻ hiển thị ảnh của HTML?",
  "options": [
    {
      "id": "A",
      "content": "img"
    },
    {
      "id": "B",
      "content": "src"
    },
    {
      "id": "C",
      "content": "alt"
    },
    {
      "id": "D",
      "content": "size"
    }
  ],
  "correctAnswer": "D",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là D. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-45",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "CSS là viết tắt của cụm từ nào sau đây?",
  "options": [
    {
      "id": "A",
      "content": "Creative Style Sheets."
    },
    {
      "id": "B",
      "content": "Cascading Style Scripts."
    },
    {
      "id": "C",
      "content": "Cascading Style Sheets."
    },
    {
      "id": "D",
      "content": "Computer Style Syntax."
    }
  ],
  "correctAnswer": "C",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là C. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-46",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Thuộc tính nào sau đây được sử dụng để xác định kích thước của font chữ trong css?",
  "options": [
    {
      "id": "A",
      "content": "font-size."
    },
    {
      "id": "B",
      "content": "text-size."
    },
    {
      "id": "C",
      "content": "size."
    },
    {
      "id": "D",
      "content": "font-style."
    }
  ],
  "correctAnswer": "A",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là A. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-47",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Phần tử nào sau đây không sử dụng thẻ đóng để kết thúc khai báo?",
  "options": [
    {
      "id": "A",
      "content": "img"
    },
    {
      "id": "B",
      "content": "P"
    },
    {
      "id": "C",
      "content": "Title"
    },
    {
      "id": "D",
      "content": "html"
    }
  ],
  "correctAnswer": "A",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là A. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-48",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Cặp thẻ <title> </title> chứ",
  "options": [
    {
      "id": "A",
      "content": "A. tiêu đề trang web"
    },
    {
      "id": "B",
      "content": "cấu trúc trang web"
    },
    {
      "id": "C",
      "content": "nội dung trang web"
    },
    {
      "id": "D",
      "content": "Định nghĩa phần nội dung chính của trang web"
    }
  ],
  "correctAnswer": "A",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là A. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-49",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Phát biểu nào sau đây đúng?",
  "options": [
    {
      "id": "A",
      "content": "HTML5 cung cấp phần tử font để định dạng phông chữ cho văn bản."
    },
    {
      "id": "B",
      "content": "HTML hỗ trợ khai báo bảy tiêu đề mục được phân cấp, định nghĩa bởi các phần tử h1, h2, h3, h4, h5, h6 và h7."
    },
    {
      "id": "C",
      "content": "Để tạo siêu liên kết giữa các trang web trong cùng thư mục, chỉ cần khai báo thành phần Đường dẫn trong URL là tên tệp của trang web cần kết nối."
    },
    {
      "id": "D",
      "content": "Mỗi phần tử trong một văn bản HTML có thể có nhiều định danh."
    }
  ],
  "correctAnswer": "A",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là A. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-50",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Thẻ nào được sử dụng để xác định một bảng trong HTML?",
  "options": [
    {
      "id": "A",
      "content": "<table>"
    },
    {
      "id": "B",
      "content": "<div>"
    },
    {
      "id": "C",
      "content": "<body>"
    },
    {
      "id": "D",
      "content": "<ol>"
    }
  ],
  "correctAnswer": "A",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là A. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-51",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Thẻ nào được sử dụng để định nghĩa một mục trong danh sách?",
  "options": [
    {
      "id": "A",
      "content": "<ol>"
    },
    {
      "id": "B",
      "content": "<ul>"
    },
    {
      "id": "C",
      "content": "<li>"
    },
    {
      "id": "D",
      "content": "<p>"
    }
  ],
  "correctAnswer": "C",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là C. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-52",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Thẻ HTML nào được sử dụng để chèn âm thanh vào trang web?",
  "options": [
    {
      "id": "A",
      "content": "<audio>"
    },
    {
      "id": "B",
      "content": "<sound>"
    },
    {
      "id": "C",
      "content": "<music>"
    },
    {
      "id": "D",
      "content": "<voice>"
    }
  ],
  "correctAnswer": "A",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là A. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-53",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Thẻ HTML nào được sử dụng để chèn video vào trang web?",
  "options": [
    {
      "id": "A",
      "content": "<video>"
    },
    {
      "id": "B",
      "content": "<movie>"
    },
    {
      "id": "C",
      "content": "<film>"
    },
    {
      "id": "D",
      "content": "<clip>"
    }
  ],
  "correctAnswer": "A",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là A. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-54",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Điều khiển nhập xâu kí tự nào sau đây là đúng?",
  "options": [
    {
      "id": "A",
      "content": "<input type=\"text\" name=“Tên_điều_khiển” value=“Giá trị”>"
    },
    {
      "id": "B",
      "content": "<input type=\"lable\" name=“Tên_điều_khiển” value=“Giá trị”>"
    },
    {
      "id": "C",
      "content": "<input type=\"audio\" name=“Tên_điều_khiển” value=“Giá trị”>"
    },
    {
      "id": "D",
      "content": "<input type=\"checkbox\" name=“Tên_điều_khiển” value=“Giá trị”>"
    }
  ],
  "correctAnswer": "A",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là A. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-55",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Phát biểu nào sau đây nêu đúng mục đích sử dụng css?",
  "options": [
    {
      "id": "A",
      "content": "Xác định cấu trúc và nội dung của trang web,"
    },
    {
      "id": "B",
      "content": "Thêm hiệu ứng động và tương tác vào trang web."
    },
    {
      "id": "C",
      "content": "Đinh dạng và trang trí giao diện của trang web."
    },
    {
      "id": "D",
      "content": "Kiểm soát dữ liệu đầu vào trên trang web."
    }
  ],
  "correctAnswer": "C",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là C. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-56",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Thuộc tính CSS được dùng để thiết lập phông chữ:",
  "options": [
    {
      "id": "A",
      "content": "color"
    },
    {
      "id": "B",
      "content": "background-color"
    },
    {
      "id": "C",
      "content": "font-family"
    },
    {
      "id": "D",
      "content": "font-size"
    }
  ],
  "correctAnswer": "C",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là C. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-57",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Thẻ HTML nào sau đây được sử dụng để tạo bảng?",
  "options": [
    {
      "id": "A",
      "content": "<table>"
    },
    {
      "id": "B",
      "content": "<tr>"
    },
    {
      "id": "C",
      "content": "<tbl>"
    },
    {
      "id": "D",
      "content": "<td>"
    }
  ],
  "correctAnswer": "A",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là A. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-58",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "CSS là viết tắt của cụm từ nào sau đây?",
  "options": [
    {
      "id": "A",
      "content": "Creative Style Sheets."
    },
    {
      "id": "B",
      "content": "Cascading Style Scripts."
    },
    {
      "id": "C",
      "content": "Cascading Style Sheets."
    },
    {
      "id": "D",
      "content": "Computer Style Syntax."
    }
  ],
  "correctAnswer": "C",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là C. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-59",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Hai thuộc tính liên kết phân tử <label> và <input> tương ứng là?",
  "options": [
    {
      "id": "A",
      "content": "input, id"
    },
    {
      "id": "B",
      "content": "for, id"
    },
    {
      "id": "C",
      "content": "input, name"
    },
    {
      "id": "D",
      "content": "for, name"
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là B. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-60",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Phát biểu nào sau đây là đúng khi nói về phần tử trong ngôn ngữ đánh dấu siêu văn bản HTML?",
  "options": [
    {
      "id": "A",
      "content": "Việc khai báo thuộc tính cho các phần tử là bắt buộc."
    },
    {
      "id": "B",
      "content": "Một phần tử được khai báo bắt đầu bằng thẻ mở (< >)"
    },
    {
      "id": "C",
      "content": "Phần tử nào cũng cần phải sử dụng thẻ đóng (< / >) để kết thúc."
    },
    {
      "id": "D",
      "content": "Mỗi phần tử chỉ có một thuộc tính duy nhất."
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là B. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-61",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Để tạo siêu liên kết đến trang web “tintuc.html” thì khai báo nào sau đây là đúng?",
  "options": [
    {
      "id": "A",
      "content": "<a href=“tin tuc.html”>Trang chủ</a>"
    },
    {
      "id": "B",
      "content": "<a link=“tintu"
    },
    {
      "id": "C",
      "content": "html”>Trang chủ</a>\nC. <a href=“tintuc.html”>Trang chủ</a>"
    },
    {
      "id": "D",
      "content": "<a hepl=“tintuc.html”>Trang chủ</a>"
    }
  ],
  "correctAnswer": "C",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là C. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-62",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Phần tử nào sau đây được sử dụng để in nghiêng nội dung văn bản trong HTML?",
  "options": [
    {
      "id": "A",
      "content": "strong."
    },
    {
      "id": "B",
      "content": "itali"
    },
    {
      "id": "C",
      "content": "C. mark."
    },
    {
      "id": "D",
      "content": "em."
    }
  ],
  "correctAnswer": "D",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là D. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-63",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Cho đoạn mã HTML sau: <a href=\"\">Trang liên hệ</a>\nPhát biểu nào sau đây là đúng về đoạn mã (văn bản) HTML trên?",
  "options": [
    {
      "id": "A",
      "content": "URL không đúng."
    },
    {
      "id": "B",
      "content": "Đúng cú pháp, tuy nhiên khi nhấp chuột không chuyển đến vị trí khá"
    },
    {
      "id": "C",
      "content": "C. Thiểu giá trị cho thuộc tính href trong thẻ <a>."
    },
    {
      "id": "D",
      "content": "Thừa thẻ đóng </a>"
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là B. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-64",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Trong một trang web, để tạo ra một bảng gồm các thông tin như hình sau:\nNgày thi\nCa sáng\nCa chiều\n08/11/2024\nVăn, Toán\nTiếng Anh\n09/11/2024\nLý, Hoá, Sinh\nSử, Địa\n10/11/2024\nTin, Công nghệ\nGDQP, GDKT&PL\nPhương án nào sau đây nêu đúng số lượng thẻ HTML cần sử dụng?",
  "options": [
    {
      "id": "A",
      "content": "1 thẻ <table>, 3 thẻ <tr>, 4 thẻ <td>"
    },
    {
      "id": "B",
      "content": "1 thẻ <table>, 4 thẻ <tr>, 4 thẻ <td>"
    },
    {
      "id": "C",
      "content": "1 thẻ <table>, 12 thẻ <tr>, 4 thẻ <td>"
    },
    {
      "id": "D",
      "content": "1 thẻ <table>, 4 thẻ <tr>, 12 thẻ <td>"
    }
  ],
  "correctAnswer": "D",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là D. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-65",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Phương án nào sau đây nếu đúng mục đích của việc sử dụng khung nội tuyến (ifranme) trong HTML",
  "options": [
    {
      "id": "A",
      "content": "Hiển thị các văn bán HTML khác trong cùng một trang we"
    },
    {
      "id": "B",
      "content": "B. Tạo ra một không gian để chứa các phần tử HTML khá"
    },
    {
      "id": "C",
      "content": "C. Nhúng một trang web hoặc tài nguyên từ một nguồn bên ngoài vào trang web hiện tại."
    },
    {
      "id": "D",
      "content": "Chỉ được sử dụng để hiển thị hình ảnh hoặc video."
    }
  ],
  "correctAnswer": "C",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là C. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-66",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Thẻ HTML nào sau đây tạo ra một ô nhập dữ liệu với nhiều dòng?",
  "options": [
    {
      "id": "A",
      "content": "<input type = ‘'textarea ”>"
    },
    {
      "id": "B",
      "content": "<textarea>"
    },
    {
      "id": "C",
      "content": "<input type= “textbox”>"
    },
    {
      "id": "D",
      "content": "<textbox>"
    }
  ],
  "correctAnswer": "A",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là A. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-67",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Phát biểu nào sau đây nêu đúng mục đích sử dụng CSS?",
  "options": [
    {
      "id": "A",
      "content": "Xác định cấu trúc và nội dung cùa trang we"
    },
    {
      "id": "B",
      "content": "B. Thêm hiệu ứng động và tương tác vào trang web."
    },
    {
      "id": "C",
      "content": "Định dạng và trang trí giao diện của trang web."
    },
    {
      "id": "D",
      "content": "Kiểm soát dữ liệu đầu vào trên trang web."
    }
  ],
  "correctAnswer": "C",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là C. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-68",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Phưong án sử dụng CSS nào sau đây tốt nhất để định dạng (định kiểu) cho tất cả các phần tử <p> trong văn bân HTML?",
  "options": [
    {
      "id": "A",
      "content": "Sử dụng bộ chọn lớp."
    },
    {
      "id": "B",
      "content": "Sử dụng bộ chọn thuộc tính."
    },
    {
      "id": "C",
      "content": "Sử dụng bộ chọn phần tử."
    },
    {
      "id": "D",
      "content": "Sử dụng bộ chọn định danh."
    }
  ],
  "correctAnswer": "C",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là C. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-69",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Mã lệnh CSS nào sau đây cho phép tạo ra một khoảng cách giữa các phần tử hiện tại và các phần tử lân cận là 20 px?",
  "options": [
    {
      "id": "A",
      "content": "margin: 20px."
    },
    {
      "id": "B",
      "content": "margin-all: 20px."
    },
    {
      "id": "C",
      "content": "padding: 20px."
    },
    {
      "id": "D",
      "content": "border: 20px."
    }
  ],
  "correctAnswer": "A",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là A. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-70",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Phần tử nào được sử dụng để xác định phần đầu của một tài liệu HTML?",
  "options": [
    {
      "id": "A",
      "content": "<body>"
    },
    {
      "id": "B",
      "content": "<footer>"
    },
    {
      "id": "C",
      "content": "<head>"
    },
    {
      "id": "D",
      "content": "<header>"
    }
  ],
  "correctAnswer": "C",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là C. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-71",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Thẻ nào trong phần đầu của tài liệu HTML dùng để khai báo tiêu đề của trang web?",
  "options": [
    {
      "id": "A",
      "content": "<title>"
    },
    {
      "id": "B",
      "content": "<header>"
    },
    {
      "id": "C",
      "content": "<footer>"
    },
    {
      "id": "D",
      "content": "<meta>"
    }
  ],
  "correctAnswer": "A",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là A. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-72",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Để xem kết quả của tệp HTML, bạn cần làm gì sau khi lưu tệp?",
  "options": [
    {
      "id": "A",
      "content": "Mở tệp bằng trình soạn thảo văn bản"
    },
    {
      "id": "B",
      "content": "Gửi tệp qua email"
    },
    {
      "id": "C",
      "content": "Chạy tệp trên máy chủ"
    },
    {
      "id": "D",
      "content": "Mở tệp bằng trình duyệt web"
    }
  ],
  "correctAnswer": "D",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là D. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-73",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Thẻ nào được dùng để tạo tiêu đề cấp 1 trong HTML?",
  "options": [
    {
      "id": "A",
      "content": "<header>"
    },
    {
      "id": "B",
      "content": "<h1>"
    },
    {
      "id": "C",
      "content": "<title>"
    },
    {
      "id": "D",
      "content": "<head>"
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là B. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-74",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Để tạo một đoạn văn bản mới trong HTML, ta sử dụng thẻ",
  "options": [
    {
      "id": "A",
      "content": "<p>"
    },
    {
      "id": "B",
      "content": "<div>"
    },
    {
      "id": "C",
      "content": "<span>"
    },
    {
      "id": "D",
      "content": "<br>"
    }
  ],
  "correctAnswer": "A",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là A. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-75",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Cú pháp <strong> Nội dung <strong> sử dụng để",
  "options": [
    {
      "id": "A",
      "content": "Tô màu đỏ nội dung."
    },
    {
      "id": "B",
      "content": "In nghiêng nội dung."
    },
    {
      "id": "C",
      "content": "Tô màu vàng nội dung."
    },
    {
      "id": "D",
      "content": "In đậm nội dung."
    }
  ],
  "correctAnswer": "D",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là D. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-76",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Thẻ <br> được sử dụng để:",
  "options": [
    {
      "id": "A",
      "content": "Tạo một dòng mới"
    },
    {
      "id": "B",
      "content": "Tạo một đoạn văn mới"
    },
    {
      "id": "C",
      "content": "Tạo một liên kết"
    },
    {
      "id": "D",
      "content": "Tạo một hình ảnh"
    }
  ],
  "correctAnswer": "A",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là A. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-77",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Thuộc tính nào trong thẻ <a> xác định địa chỉ của tài nguyên web?",
  "options": [
    {
      "id": "A",
      "content": "id"
    },
    {
      "id": "B",
      "content": "Src"
    },
    {
      "id": "C",
      "content": "href"
    },
    {
      "id": "D",
      "content": "class"
    }
  ],
  "correctAnswer": "C",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là C. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-78",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Phần tử nào trong HTML được sử dụng để in nghiêng nội dung?",
  "options": [
    {
      "id": "A",
      "content": "b"
    },
    {
      "id": "B",
      "content": "em"
    },
    {
      "id": "C",
      "content": "u"
    },
    {
      "id": "D",
      "content": "strong"
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là B. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-79",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Thẻ <dt> được sử dụng trong danh sách định nghĩa để:",
  "options": [
    {
      "id": "A",
      "content": "Định nghĩa một thuật ngữ"
    },
    {
      "id": "B",
      "content": "Định nghĩa một định nghĩa"
    },
    {
      "id": "C",
      "content": "Tạo một danh sách không thứ tự"
    },
    {
      "id": "D",
      "content": "Tạo một danh sách có thứ tự"
    }
  ],
  "correctAnswer": "A",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là A. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-80",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Thuộc tính nào trong thẻ <table> được sử dụng để thêm chú thích cho bảng?",
  "options": [
    {
      "id": "A",
      "content": "description"
    },
    {
      "id": "B",
      "content": "header"
    },
    {
      "id": "C",
      "content": "note"
    },
    {
      "id": "D",
      "content": "caption"
    }
  ],
  "correctAnswer": "D",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là D. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-81",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Thuộc tính nào được sử dụng để xác định thứ tự bắt đầu của danh sách xác định thứ tự?",
  "options": [
    {
      "id": "A",
      "content": "type"
    },
    {
      "id": "B",
      "content": "start"
    },
    {
      "id": "C",
      "content": "order"
    },
    {
      "id": "D",
      "content": "list"
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là B. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-82",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Thẻ <tfoot> trong bảng được sử dụng để:",
  "options": [
    {
      "id": "A",
      "content": "Định nghĩa phần chân bảng"
    },
    {
      "id": "B",
      "content": "Định nghĩa tiêu đề cột"
    },
    {
      "id": "C",
      "content": "Định nghĩa các hàng dữ liệu"
    },
    {
      "id": "D",
      "content": "Định nghĩa các tiêu đề cột."
    }
  ],
  "correctAnswer": "A",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là A. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-83",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Địa chỉ URL nào sau đây là đúng?",
  "options": [
    {
      "id": "A",
      "content": "fit.hnue.edu.vn"
    },
    {
      "id": "B",
      "content": "https://fit.hnue.edu.vn"
    },
    {
      "id": "C",
      "content": "https://hnue.edu.vn/index.html"
    },
    {
      "id": "D",
      "content": "C://fit.hnue.edu.vn"
    }
  ],
  "correctAnswer": "D",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là D. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-84",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Khi nhấp chuột vào một siêu liên kết, theo mặc định, nội dung trang web liên kết sẽ hiển thị ở đâu?",
  "options": [
    {
      "id": "A",
      "content": "Trong cửa sổ trình duyệt hiện tại"
    },
    {
      "id": "B",
      "content": "Trong cửa sổ trình duyệt mới"
    },
    {
      "id": "C",
      "content": "Trong một tab mới trình duyệt"
    },
    {
      "id": "D",
      "content": "Trong một cửa sổ mới"
    }
  ],
  "correctAnswer": "A",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là A. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-85",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Khi đặt một siêu liên kết vào một đoạn văn bản nào đó, đoạn văn bản sẽ có định dạng mặc định là gì?",
  "options": [
    {
      "id": "A",
      "content": "In nghiêng và màu xanh"
    },
    {
      "id": "B",
      "content": "In nghiêng và gạch dưới"
    },
    {
      "id": "C",
      "content": "Gạch dưới và màu xanh"
    },
    {
      "id": "D",
      "content": "Gạch dưới và màu tím"
    }
  ],
  "correctAnswer": "C",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là C. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-86",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Phát biểu nào sau đây là không đúng với một thẻ liên kết HTML?",
  "options": [
    {
      "id": "A",
      "content": "Một thẻ liên kết có thể liên kết với một hoặc nhiều trang web khác."
    },
    {
      "id": "B",
      "content": "Một thẻ liên kết có thể liên kết tới một vị trí cụ thể trong cùng một trang web."
    },
    {
      "id": "C",
      "content": "Một thẻ liên kết có thể liên kết tới một hình ảnh."
    },
    {
      "id": "D",
      "content": "Một thẻ liên kết có thể liên kết tới một tệp văn bản."
    }
  ],
  "correctAnswer": "A",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là A. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-87",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Sự khác nhau giữa thành phần nhập văn bản và nhập mật khẩu của biểu mẫu là gì?",
  "options": [
    {
      "id": "A",
      "content": "Không có sự khác nhau."
    },
    {
      "id": "B",
      "content": "Giá trị trả về của hai thành phần này là khác nhau."
    },
    {
      "id": "C",
      "content": "Nội dung hiển thị của hai thành phần này là khác nhau."
    },
    {
      "id": "D",
      "content": "Hình dạng hiển thị của hai thành phần này là khác nhau."
    }
  ],
  "correctAnswer": "A",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là A. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-88",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Cho một cú pháp HTML như sau: <audio src = “hnue/fit.mp3”>\nCú pháp trên dùng để hiển thị thông tin gì trên trình duyệt ?",
  "options": [
    {
      "id": "A",
      "content": "Hình ảnh"
    },
    {
      "id": "B",
      "content": "Văn bản"
    },
    {
      "id": "C",
      "content": "Video"
    },
    {
      "id": "D",
      "content": "Âm thanh"
    }
  ],
  "correctAnswer": "D",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là D. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-89",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Phát biểu nào sau đây là sai?",
  "options": [
    {
      "id": "A",
      "content": "Các lệnh CSS có thể đặt trong cùng tệp mã lệnh HTML."
    },
    {
      "id": "B",
      "content": "Các lệnh CSS có thể đặt trong một tệp riêng bên ngoài và phải được liên kết vào trang HTML khi sử dụng."
    },
    {
      "id": "C",
      "content": "Các lệnh CSS có thể đặt trong các thẻ HTML."
    },
    {
      "id": "D",
      "content": "Các lệnh CSS có thể đặt trong một tệp riêng bên ngoài nhưng phải cùng thư mục với tệp mã lệnh HTML."
    }
  ],
  "correctAnswer": "D",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là D. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-90",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Giải thích nào sau đây là đúng về mã lệnh CSS sau?\nh1 h2 h3 {border: dashed 3px red;}",
  "options": [
    {
      "id": "A",
      "content": "Đây là cú pháp CSS sai vì các thẻ phải cách nhau bởi dấu phẩy."
    },
    {
      "id": "B",
      "content": "Đây là cú pháp CSS sai vì các thuộc tính không được đặt đúng thứ tự."
    },
    {
      "id": "C",
      "content": "Đây là cú pháp CSS sai vì giá trị thuộc tính bị sai."
    },
    {
      "id": "D",
      "content": "Tất cả các nội dung trong thẻ h1,h2,h3 sẽ hiển thị với biên màu đỏ, dày 3px, và nét đứt."
    }
  ],
  "correctAnswer": "A",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là A. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-91",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Địa chỉ URL nào sau đây là đúng?",
  "options": [
    {
      "id": "A",
      "content": "fit.hnue.edu.vn"
    },
    {
      "id": "B",
      "content": "https://.fit.hnue.edu.vn"
    },
    {
      "id": "C",
      "content": "http://hnue.edu.vn/index.html"
    },
    {
      "id": "D",
      "content": "C://fit.hneu.edu.vn"
    }
  ],
  "correctAnswer": "C",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là C. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-92",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Các cấp độ tiêu đề mục trong HTML được phân biệt như thế nào?",
  "options": [
    {
      "id": "A",
      "content": "Phân biệt bằng kiểu chữ."
    },
    {
      "id": "B",
      "content": "Phân biệt bằng cỡ chữ."
    },
    {
      "id": "C",
      "content": "Phân biệt bằng màu chữ."
    },
    {
      "id": "D",
      "content": "Phân biệt bằng phông chữ."
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là B. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-93",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Khi nào thì nên sử dụng thẻ <ol> thay vì thẻ <ul> trong HTML?",
  "options": [
    {
      "id": "A",
      "content": "Khi muốn tạo một danh sách có đánh số thứ tự."
    },
    {
      "id": "B",
      "content": "Khi muốn tạo một danh sách không có thứ tự."
    },
    {
      "id": "C",
      "content": "Khi muốn tạo một danh sách với các mục không có ký hiệu."
    },
    {
      "id": "D",
      "content": "Khi muốn tạo một danh sách với các biểu tượng đặc biệt."
    }
  ],
  "correctAnswer": "A",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là A. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-94",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Sự khác biệt giữa thuộc tính type=\"1\" và type=\"i\" trong thẻ <ol> là gì?",
  "options": [
    {
      "id": "A",
      "content": "type=\"1\" hiển thị số, trong khi type=\"i\" hiển thị số La Mã thường."
    },
    {
      "id": "B",
      "content": "type=\"1\" hiển thị số La Mã thường, trong khi type=\"i\" hiển thị số."
    },
    {
      "id": "C",
      "content": "type=\"1\" hiển thị chữ cái thường, trong khi type=\"i\" hiển thị số."
    },
    {
      "id": "D",
      "content": "type=\"1\" và type=\"i\" đều hiển thị số nhưng có kiểu khác nhau."
    }
  ],
  "correctAnswer": "A",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là A. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-95",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Khái niệm Biểu mẫu trên trang web là đáp án nào sau đây?",
  "options": [
    {
      "id": "A",
      "content": "Một loại hình ảnh động"
    },
    {
      "id": "B",
      "content": "Một phần tử HTML để thu thập dữ liệu từ người dùng"
    },
    {
      "id": "C",
      "content": "Một đoạn mã JavaScript"
    },
    {
      "id": "D",
      "content": "Một loại tệp tin hình ảnh"
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là B. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-96",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Điều khiển sau đây giúp thực hiện công việc gì?\nMật khẩu: <input type= “Password” name= “Matkhau”>",
  "options": [
    {
      "id": "A",
      "content": "Hiển thị dòng có nhãn Matkhau và ô Password để người dùng nhập mật khẩu"
    },
    {
      "id": "B",
      "content": "Hiển thị dòng có nhãn Password và ô Mật khẩu để người dùng nhập mật khẩu"
    },
    {
      "id": "C",
      "content": "Hiển thị dòng có nhãn Mật khẩu và ô Password để người dùng nhập mật khẩu"
    },
    {
      "id": "D",
      "content": "Hiển thị dòng có nhãn Password và ô Matkhau để người dùng nhập mật khẩu"
    }
  ],
  "correctAnswer": "C",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là C. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-97",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Phát biểu nào sau đây nêu đúng lợi ích chính của việc sử dụng css ngoài (ngoại tuyến)? (TH)",
  "options": [
    {
      "id": "A",
      "content": "Giảm kích thước của trang we"
    },
    {
      "id": "B",
      "content": "B. Tăng tính bảo mật của trang web."
    },
    {
      "id": "C",
      "content": "Tái sử dụng các định dạng css trên nhiều trang."
    },
    {
      "id": "D",
      "content": "Tạo ra các hiệu ứng động và tương tác."
    }
  ],
  "correctAnswer": "C",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là C. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-98",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Sự khác biệt giữa bộ chọn lớp (class) và bộ chọn định danh (ID) là:",
  "options": [
    {
      "id": "A",
      "content": "Bộ chọn định danh được tạo bằng dấu chấm (.) và bộ chọn lớp sử dụng ký hiệu #."
    },
    {
      "id": "B",
      "content": "Bộ chọn lớp chỉ được sử dụng một lần trong khi bộ chọn định danh có thể được áp dụng nhiều lần trên HTML."
    },
    {
      "id": "C",
      "content": "Bộ chọn lớp có thể được sử dụng bởi nhiều phần tử HTML, trong khi Bộ chọn định danh chỉ được sử dụng bởi một phần tử HTML duy nhất trên trang."
    },
    {
      "id": "D",
      "content": "Bộ chọn lớp sử dụng cho CSS External, bộ chọn định danh sử dụng cho CSS Internal"
    }
  ],
  "correctAnswer": "C",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là C. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-99",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Để áp dụng bộ chọn định danh cho phần tử HTML, cần khai báo thuộc tính nào của phần tử HTML đó.",
  "options": [
    {
      "id": "A",
      "content": "class"
    },
    {
      "id": "B",
      "content": "Id"
    },
    {
      "id": "C",
      "content": "Style"
    },
    {
      "id": "D",
      "content": "name"
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là B. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-100",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Bộ chọn định danh dùng để:",
  "options": [
    {
      "id": "A",
      "content": "Áp dụng định dạng cho một số phần tử được chọn."
    },
    {
      "id": "B",
      "content": "Áp dụng định dạng cho một phần tử cụ thể."
    },
    {
      "id": "C",
      "content": "Áp dụng định dạng cho một nhóm phần tử."
    },
    {
      "id": "D",
      "content": "Áp dụng định dạng cho tất cả các phần tử"
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là B. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-101",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Để tạo 1 bảng gồm 3 hàng và 4 cột, cách sử dụng thẻ nào sau đây là đúng?",
  "options": [
    {
      "id": "A",
      "content": "4 cặp thẻ <tr> </tr>, 3 cặp thẻ <th> </th> và 9 cặp thẻ <td> </td>"
    },
    {
      "id": "B",
      "content": "3 cặp thẻ <tr> </tr>, 4 cặp thẻ <th> </th> và 4 cặp thẻ <td> </td>"
    },
    {
      "id": "C",
      "content": "3 cặp thẻ <tr> </tr>, 4 cặp thẻ <th> </th> và 8 cặp thẻ <td> </td>"
    },
    {
      "id": "D",
      "content": "3 cặp thẻ <tr> </tr> và 4 cặp thẻ <td> </td>"
    }
  ],
  "correctAnswer": "C",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là C. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-102",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Sau khi viết các trang web riêng lẻ, em muốn kết nối chúng để tạo ra một website. Em nên sử dụng loại đường dẫn nào để liên kết giữa các trang?",
  "options": [
    {
      "id": "A",
      "content": "Đường dẫn trực tiếp"
    },
    {
      "id": "B",
      "content": "Đường dẫn gián tiếp"
    },
    {
      "id": "C",
      "content": "Cả hai loại đường dẫn trực tiếp và đường dẫn gián tiếp"
    },
    {
      "id": "D",
      "content": "Không dùng đường dẫn mà dùng mã định danh"
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là B. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-103",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Cho đoạn mã sau:\n<p>This is <u> a paragraph</u>. </p>\nĐoạn mã trên sẽ cho kết quả là gì?",
  "options": [
    {
      "id": "A",
      "content": "This is a paragraph."
    },
    {
      "id": "B",
      "content": "This is a paragraph."
    },
    {
      "id": "C",
      "content": "This is a paragraph."
    },
    {
      "id": "D",
      "content": "This is a paragraph."
    }
  ],
  "correctAnswer": "A",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là A. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-104",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Để tạo siêu liên kết đến trang web “tintuc.html” thì khai báo nào sau đây là đúng?",
  "options": [
    {
      "id": "A",
      "content": "<a href=“tin tuc.html”>Trang chủ</a>"
    },
    {
      "id": "B",
      "content": "<a link=“tintu"
    },
    {
      "id": "C",
      "content": "html”>Trang chủ</a>\nC. <a href=“tintuc.html”>Trang chủ</a>"
    },
    {
      "id": "D",
      "content": "<a hepl=“tintuc.html”>Trang chủ</a>"
    }
  ],
  "correctAnswer": "C",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là C. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-105",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Mẫu CSS định dạng các liên kết sau khi kích hoạt chuyển màu xanh dương là lệnh nào trong các lệnh sau:",
  "options": [
    {
      "id": "A",
      "content": "a:link {color: blue;}."
    },
    {
      "id": "B",
      "content": "a:visited {color: blue;}."
    },
    {
      "id": "C",
      "content": "a:hover {color: blue;}."
    },
    {
      "id": "D",
      "content": "a:clicked {color: blue;}."
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là B. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-106",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Phần tử nào sau đây được sử dụng để in nghiêng nội dung văn bản trong HTML?",
  "options": [
    {
      "id": "A",
      "content": "strong."
    },
    {
      "id": "B",
      "content": "itali"
    },
    {
      "id": "C",
      "content": "C. mark."
    },
    {
      "id": "D",
      "content": "em."
    }
  ],
  "correctAnswer": "D",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là D. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-107",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Cho đoạn mã HTML sau: <a href=\"\">Trang liên hệ</a>\nPhát biểu nào sau đây là đúng về đoạn mã (văn bản) HTML trên?",
  "options": [
    {
      "id": "A",
      "content": "URL không đúng."
    },
    {
      "id": "B",
      "content": "Đúng cú pháp, tuy nhiên khi nhấp chuột không chuyển đến vị trí khá"
    },
    {
      "id": "C",
      "content": "C. Thiểu giá trị cho thuộc tính href trong thẻ <a>."
    },
    {
      "id": "D",
      "content": "Thừa thẻ đóng </a>"
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là B. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-108",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Phương án nào sau đây nếu đúng mục đích của việc sử dụng khung nội tuyến (ifranme) trong HTML",
  "options": [
    {
      "id": "A",
      "content": "Hiển thị các văn bán HTML khác trong cùng một trang we"
    },
    {
      "id": "B",
      "content": "B. Tạo ra một không gian để chứa các phần tử HTML khá"
    },
    {
      "id": "C",
      "content": "C. Nhúng một trang web hoặc tài nguyên từ một nguồn bên ngoài vào trang web hiện tại."
    },
    {
      "id": "D",
      "content": "Chỉ được sử dụng để hiển thị hình ảnh hoặc video."
    }
  ],
  "correctAnswer": "C",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là C. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-109",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Phưong án sử dụng CSS nào sau đây tốt nhất để định dạng (định kiểu) cho tất cả các phần tử <p> trong văn bân HTML?",
  "options": [
    {
      "id": "A",
      "content": "Sử dụng bộ chọn lớp."
    },
    {
      "id": "B",
      "content": "Sử dụng bộ chọn thuộc tính."
    },
    {
      "id": "C",
      "content": "Sử dụng bộ chọn phần tử."
    },
    {
      "id": "D",
      "content": "Sử dụng bộ chọn định danh."
    }
  ],
  "correctAnswer": "C",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là C. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-110",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Theo mặc định, ảnh được chèn vào vị trí nào?",
  "options": [
    {
      "id": "A",
      "content": "Bên dưới vị trí đang viết, chính giữa màn hình"
    },
    {
      "id": "B",
      "content": "Bên trên vị trí đang viết, chính giữa màn hình"
    },
    {
      "id": "C",
      "content": "Ngay tại vị trí đang viết của đoạn văn bản"
    },
    {
      "id": "D",
      "content": "Bên trái vị trí của đoạn văn bản"
    }
  ],
  "correctAnswer": "C",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là C. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-111",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "VanDung",
  "type": "multiple_choice",
  "content": "Bạn Minh tạo một trang web của lớp 10A1và trong trang web đó có đoạn nội dung như sau:\nDANH SÁCH CÁN BỘ ĐOÀN LỚP 10A1\n1. Hoàng Mạnh Kiên - Bí thư\n2. Trần Thu Thuỷ - Phó bí thư\n3. Hà Thị Hồng – Uỷ viên\nĐoạn mã HTML nào dưới đây phù hợp nhất để thực hiện việc này?",
  "options": [
    {
      "id": "A",
      "content": "<p> DANH SÁCH CÁN BỘ ĐOÀN LỚP 10A1 </p>\n<ol>\n<li> Hoàng Mạnh Kiên - Bí thư </li>\n<li> Trần Thu Thuỷ - Phó bí thư </li>\n<li> Hà Thị Hồng – Uỷ viên </li>\n</ol>"
    },
    {
      "id": "B",
      "content": "<p> <strong> DANH SÁCH CÁN BỘ ĐOÀN LỚP 10A1 </strong></p>\n<ol>\n<li> Hoàng Mạnh Kiên - Bí thư </li>\n<li> Trần Thu Thuỷ - Phó bí thư </li>\n<li> Hà Thị Hồng – Uỷ viên </li>\n</ol>"
    },
    {
      "id": "C",
      "content": "<p> <strong> DANH SÁCH CÁN BỘ ĐOÀN LỚP 10A1 </strong></p>\n<ol>\n<li> 1. Hoàng Mạnh Kiên - Bí thư </li>\n<li> 2. Trần Thu Thuỷ - Phó bí thư </li>\n<li> 3. Hà Thị Hồng – Uỷ viên </li>\n</ol>"
    },
    {
      "id": "D",
      "content": "<p> <strong> DANH SÁCH CÁN BỘ ĐOÀN LỚP 10A1 </strong></p>\n<ul>\n<li> 1. Hoàng Mạnh Kiên - Bí thư </li>\n<li> 2. Trần Thu Thuỷ - Phó bí thư </li>\n<li> 3. Hà Thị Hồng – Uỷ viên </li>\n</ul>"
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là B. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-112",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "VanDung",
  "type": "multiple_choice",
  "content": "Cần thiết kế một trang web cho một trung tâm dạy nghề trong đó có hiển thị bảng thông tin về các khoá học và số lượng học viên tham gia cho mỗi khoá học. Biết rằng trung tâm có 2 khoá học. Đoạn mã HTML nào sau đây thực hiện được yêu cầu đã cho?",
  "options": [
    {
      "id": "A",
      "content": "<table>\n<tr><td> Khoá học 1 </td> <td> 20 học viên </td></tr>\n<tr><td> Khoá học 2 </td> <td> 30 học viên </td></tr>\n</table>"
    },
    {
      "id": "B",
      "content": "<table>\n<td><tr> Khoá học 1 </td> <td> 20 học viên </tr></td>\n<td><tr> Khoá học 2 </td> <td> 30 học viên </tr></td>\n</table>"
    },
    {
      "id": "C",
      "content": "<table>\n<td><tr> Khoá học 1 </tr> <td> 20 học viên </td></td>\n<tr><td> Khoá học 2 </td> <td> 30 học viên </td></tr>\n</table>"
    },
    {
      "id": "D",
      "content": "<table>\n<tr><td> Khoá học 1 </td> <td> 20 học viên </td></tr>\n</table>\n<tr><td> Khoá học 2 </td> <td> 30 học viên </td></tr>"
    }
  ],
  "correctAnswer": "A",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là A. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-113",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "VanDung",
  "type": "multiple_choice",
  "content": "Bạn Hoàng đang tạo một trang web và bạn ấy muốn định dạng cho phần văn bản của tất cả các thẻ <p> có đặc điểm sau: Có màu chữ đỏ đậm, cỡ chữ 20 picel. Đoạn mã CSS nào sau đây thực hiện được yêu cầu đó:",
  "options": [
    {
      "id": "A",
      "content": "para-p {color: red; font-weight: bold; size: 20px}"
    },
    {
      "id": "B",
      "content": "p {color: red; font: bold; size: 20px}"
    },
    {
      "id": "C",
      "content": "p {color: red; font-weight: bold; size: 20px}"
    },
    {
      "id": "D",
      "content": "p {color: red; font-style: bold; size: 20px}"
    }
  ],
  "correctAnswer": "C",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là C. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-114",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "VanDung",
  "type": "multiple_choice",
  "content": "Hiệu trưởng trường A muốn tạo biểu mẫu HTML cho phép giáo viên đăng ký đi du lịch. Mỗi giáo viên chỉ được chọn duy nhất một trong hai trạng thái là “Tham gia” hoặc “Không tham gia”. Phương án nào sau đây phù hợp nhất để thực hiện việc này?",
  "options": [
    {
      "id": "A",
      "content": "<input type = “checkbox” name = “chk_thamgia”> Tham gia\n<input type = “checkbox” name = “chk_thamgia”> Không tham gia"
    },
    {
      "id": "B",
      "content": "<input type = “radio” name = “chk_Yes” value = “C”> Tham gia\n<input type = “radio” name = “chk_No” value = “K”> Tham gia"
    },
    {
      "id": "C",
      "content": "<input type = “radio” name = “rd_thamgia” value = “Tham gia”>\n<input type = “radio” name = “rd_thamgia” value = “Không tham gia”>"
    },
    {
      "id": "D",
      "content": "<input type = “radio” name = “chk_binhchon” value = “C”> Tham gia\n<input type = “radio” name = “chk_binhchon” value = “K”> Không tham gia"
    }
  ],
  "correctAnswer": "D",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là D. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-115",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "VanDung",
  "type": "multiple_choice",
  "content": "Khi cài đặt Sublime Text, bạn cần làm gì sau khi tải về tệp tin cài đặt?",
  "options": [
    {
      "id": "A",
      "content": "Chạy chương trình từ trang web"
    },
    {
      "id": "B",
      "content": "Nhấp đúp vào tệp tin cài đặt"
    },
    {
      "id": "C",
      "content": "Giải nén tệp tin cài đặt"
    },
    {
      "id": "D",
      "content": "Mở tệp tin bằng trình soạn thảo văn bản"
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là B. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-116",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "VanDung",
  "type": "multiple_choice",
  "content": "Cho các phát biểu sau:",
  "options": [
    {
      "id": "A",
      "content": "Thẻ HTML thường không có thẻ kết thúc."
    },
    {
      "id": "B",
      "content": "Tên thẻ HTML không phân biệt chữ hoa và chữ thường."
    },
    {
      "id": "C",
      "content": "Phần đầu của một tệp HTML được xác định bởi thẻ <head> và </head>."
    },
    {
      "id": "D",
      "content": "Thẻ <body> chứa nội dung chính hiển thị trên màn hình của trình duyệt\nSố phát biểu đúng là\nA. 1B. 2C. 3D. 4"
    }
  ],
  "correctAnswer": "D",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là D. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-117",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "VanDung",
  "type": "multiple_choice",
  "content": "Cho các phát biểu sau về cấu trúc cơ bản của một tệp HTML?",
  "options": [
    {
      "id": "A",
      "content": "Phần đầu của tài liệu HTML thường bao gồm các thẻ <header> và </header>."
    },
    {
      "id": "B",
      "content": "Tệp HTML cần phải bắt đầu với chỉ dẫn doctype để chỉ định phiên bản HTML."
    },
    {
      "id": "C",
      "content": "Nội dung của trang web được hiển thị trong phần <head> của tệp HTML."
    },
    {
      "id": "D",
      "content": "Để tạo một tệp HTML, có thể sử dụng bất kỳ trình soạn thảo văn bản nào, không nhất thiết phải là Sublime Text.\nSố phát biểu đúng là\nA. 1B. 2C. 3D. 4"
    }
  ],
  "correctAnswer": "D",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là D. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-118",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "VanDung",
  "type": "multiple_choice",
  "content": "Để tạo siêu liên kết đến một phần tử trong cùng trang web, bạn sử dụng cú pháp nào?",
  "options": [
    {
      "id": "A",
      "content": "<a href=\"http://example.com\">"
    },
    {
      "id": "B",
      "content": "<a href=\"#Tên Định Danh\">"
    },
    {
      "id": "C",
      "content": "<a href=\"mailto:email@example.com\">"
    },
    {
      "id": "D",
      "content": "<a href=\"tel:123456789\">"
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là B. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-119",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "VanDung",
  "type": "multiple_choice",
  "content": "Các phần tử tiêu đề mục trong HTML được hiển thị với kiểu chữ và kích thước như thế nào?",
  "options": [
    {
      "id": "A",
      "content": "Tất cả đều có cùng kích thước và kiểu chữ"
    },
    {
      "id": "B",
      "content": "Kích thước chữ giảm dần từ <h1> đến <h6> và kiểu chữ in đậm"
    },
    {
      "id": "C",
      "content": "Kích thước chữ tăng dần từ <h1> đến <h6> và kiểu chữ in nghiêng"
    },
    {
      "id": "D",
      "content": "Kích thước chữ không thay đổi và kiểu chữ khác nhau tùy thuộc vào trình duyệt"
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là B. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-120",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "VanDung",
  "type": "multiple_choice",
  "content": "Cú pháp để tạo một liên kết mở trong một cửa sổ mới là:",
  "options": [
    {
      "id": "A",
      "content": "<a href=\"url\" target=\"_blank\">Link</a>"
    },
    {
      "id": "B",
      "content": "<a href=\"url\" target=\"_self\">Link</a>"
    },
    {
      "id": "C",
      "content": "<a href=\"url\" new=\"true\">Link</a>"
    },
    {
      "id": "D",
      "content": "<a href=\"url\" window=\"_new\">Link</a>"
    }
  ],
  "correctAnswer": "A",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là A. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-121",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "VanDung",
  "type": "multiple_choice",
  "content": "Cú pháp để tạo một liên kết mở trong một cửa sổ mới là:",
  "options": [
    {
      "id": "A",
      "content": "<a href=\"url\" window=\"_new\">Link</a>"
    },
    {
      "id": "B",
      "content": "<a href=\"url\" target=\"_self\">Link</a>"
    },
    {
      "id": "C",
      "content": "<a href=\"url\" new=\"true\">Link</a>"
    },
    {
      "id": "D",
      "content": "<a href=\"url\" target=\"_blank\">Link</a>"
    }
  ],
  "correctAnswer": "D",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là D. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-122",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "VanDung",
  "type": "multiple_choice",
  "content": "Cú pháp nào là đúng để khai báo một ô dữ liệu trong bảng?",
  "options": [
    {
      "id": "A",
      "content": "<td>Data</td>"
    },
    {
      "id": "B",
      "content": "<tr>Data</tr>"
    },
    {
      "id": "C",
      "content": "<table>Data</table>"
    },
    {
      "id": "D",
      "content": "<th>Data</th>"
    }
  ],
  "correctAnswer": "A",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là A. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-123",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "VanDung",
  "type": "multiple_choice",
  "content": "Khi khai báo danh sách con trong danh sách xác định thứ tự, thẻ nào được sử dụng để tạo mục con?",
  "options": [
    {
      "id": "A",
      "content": "<table>"
    },
    {
      "id": "B",
      "content": "<ol>"
    },
    {
      "id": "C",
      "content": "<ul>"
    },
    {
      "id": "D",
      "content": "<li>"
    }
  ],
  "correctAnswer": "D",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là D. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-124",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "VanDung",
  "type": "multiple_choice",
  "content": "Thẻ <section> thường được sử dụng để:",
  "options": [
    {
      "id": "A",
      "content": "Tạo một phần riêng biệt của tài liệu"
    },
    {
      "id": "B",
      "content": "Tạo tiêu đề"
    },
    {
      "id": "C",
      "content": "Tạo một đoạn văn bản"
    },
    {
      "id": "D",
      "content": "Tạo một liên kết"
    }
  ],
  "correctAnswer": "A",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là A. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-125",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "VanDung",
  "type": "multiple_choice",
  "content": "Nếu bạn chỉ cung cấp tên miền trong URL mà không có giao thức, trình duyệt sẽ làm gì?",
  "options": [
    {
      "id": "A",
      "content": "Mở trang chủ của tên miền đó"
    },
    {
      "id": "B",
      "content": "Hiển thị lỗi"
    },
    {
      "id": "C",
      "content": "Tìm kiếm trên Internet"
    },
    {
      "id": "D",
      "content": "Chuyển hướng đến trang mặc định"
    }
  ],
  "correctAnswer": "A",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là A. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-126",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "VanDung",
  "type": "multiple_choice",
  "content": "Khi tạo bảng và muốn đặt đường viền cho các ô trong bảng, thuộc tính nào cần thiết?",
  "options": [
    {
      "id": "A",
      "content": "margin"
    },
    {
      "id": "B",
      "content": "padding"
    },
    {
      "id": "C",
      "content": "border"
    },
    {
      "id": "D",
      "content": "color"
    }
  ],
  "correctAnswer": "C",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là C. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-127",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "VanDung",
  "type": "multiple_choice",
  "content": "Để liên kết các trang web trong cùng một thư mục, đoạn mã nào sau đây là đúng nhất?",
  "options": [
    {
      "id": "A",
      "content": "<a href=”C:\\home\\news.html”>News</a>"
    },
    {
      "id": "B",
      "content": "<a href=”News.html”>News</a>"
    },
    {
      "id": "C",
      "content": "<a href=”http://fit.hnue.edu.vn/news.html”> News</a>"
    },
    {
      "id": "D",
      "content": "<a href=”fpt://fit.hnue.edu.vn/news.html”> News</a>"
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là B. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-128",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "VanDung",
  "type": "multiple_choice",
  "content": "Đoạn mã lệnh HTML nào sau đây là đúng để liên kết tới trang web Facebook.com ?",
  "options": [
    {
      "id": "A",
      "content": "<a href=” Facebook.com”> Facebook</a>"
    },
    {
      "id": "B",
      "content": "<a herf=” Facebook.com”> Facebook</a>"
    },
    {
      "id": "C",
      "content": "<a href=” Facebook.com”> Facebook<a>"
    },
    {
      "id": "D",
      "content": "<a href=Facebook.com> Facebook</a>"
    }
  ],
  "correctAnswer": "A",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là A. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-129",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "VanDung",
  "type": "multiple_choice",
  "content": "Có một tệp ảnh kích thước 600x800. Đoạn lệnh sau đây sẽ hiển thị ảnh có kích thước là bao nhiêu trên trình duyệt ?\n<image src=”hnue.jpeg” alt =”hnue” width=”300”/>",
  "options": [
    {
      "id": "A",
      "content": "300x600"
    },
    {
      "id": "B",
      "content": "400x300"
    },
    {
      "id": "C",
      "content": "600x800"
    },
    {
      "id": "D",
      "content": "300x400"
    }
  ],
  "correctAnswer": "D",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là D. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-130",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "VanDung",
  "type": "multiple_choice",
  "content": "Cú pháp tạo siêu liên kết đến phần tử có id=“contact” trong cùng một trang web là",
  "options": [
    {
      "id": "A",
      "content": "<a href=#contact>Liên hệ</a>"
    },
    {
      "id": "B",
      "content": "<a href=“@contact”>Liên hệ</a>"
    },
    {
      "id": "C",
      "content": "<a href=“#contact”>Liên hệ</a>"
    },
    {
      "id": "D",
      "content": "<a href=“contact”>Liên hệ</a>"
    }
  ],
  "correctAnswer": "C",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là C. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-131",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "VanDung",
  "type": "multiple_choice",
  "content": "Để hiển thị nút lệnh ![](/images/theory_12f_rId24_image14.png), em chọn lệnh HTML nào sau đây?",
  "options": [
    {
      "id": "A",
      "content": "<input type=\"submit\" name=\"subdangki\" > Đăng kí"
    },
    {
      "id": "B",
      "content": "<input type=\"radio\" name=\"subdangki\" value=\"Đăng kí\">"
    },
    {
      "id": "C",
      "content": "<input type=\"checkbox\" name=\"subdangki\" value=\"Đăng kí\">"
    },
    {
      "id": "D",
      "content": "<input type=\"submit\" name=\"subdangki\" value=\"Đăng kí\">"
    }
  ],
  "correctAnswer": "D",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là D. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-MC-132",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "VanDung",
  "type": "multiple_choice",
  "content": "Hiệu trưởng trường A muốn tạo biểu mẫu HTML cho phép giáo viên đăng ký đi du lịch. Mỗi giáo viên chỉ được chọn duy nhất một trong hai trạng thái là “Tham gia” hoặc “Không tham gia”. Phương án nào sau đây phù hợp nhất để thực hiện việc này?",
  "options": [
    {
      "id": "A",
      "content": "<input type = “checkbox” name = “chk_thamgia”> Tham gia\n<input type = “checkbox” name = “chk_thamgia”> Không tham gia"
    },
    {
      "id": "B",
      "content": "<input type = “radio” name = “chk_Yes” value = “C”> Tham gia\n<input type = “radio” name = “chk_No” value = “K”> Tham gia"
    },
    {
      "id": "C",
      "content": "<input type = “radio” name = “rd_thamgia” value = “Tham gia”>\n<input type = “radio” name = “rd_thamgia” value = “Không tham gia”>"
    },
    {
      "id": "D",
      "content": "<input type = “radio” name = “chk_binhchon” value = “C”> Tham gia\n<input type = “radio” name = “chk_binhchon” value = “K”> Không tham gia"
    }
  ],
  "correctAnswer": "D",
  "hints": {
    "level1_concept": "Nhớ lại cú pháp thẻ, thuộc tính HTML hoặc quy tắc định kiểu CSS trong Chuyên đề 12F.",
    "level2_formula": "Xác định mục đích câu hỏi (cấu trúc HTML, thẻ định dạng văn bản, bảng, liên kết, đa phương tiện, biểu mẫu hoặc bộ chọn CSS) để loại trừ phương án sai.",
    "level3_steps": "Đối chiếu cú pháp chuẩn của HTML5 và CSS3 với 4 phương án A, B, C, D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án đúng là D. Nội dung được biên soạn chuẩn theo chương trình Chuyên đề 12F: Tạo trang web với HTML & CSS.",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-TF-01",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "VanDung",
  "type": "true_false",
  "content": "Bạn Lan cần chỉnh sửa một bức ảnh gia đình được chụp trong chuyến du lịch. Trong bức ảnh đó gia đình Lan đứng phía trước và có một vườn hoa ở phía sau. Bạn Lan muốn tăng sáng và điều chỉnh màu sắc cho bức ảnh. Sau đây là một số ý kiến của các bạn trong lớp để giúp Lan chỉnh sửa ảnh:",
  "tfItems": [
    {
      "id": "a",
      "content": "Không thể tăng sáng cho bức ảnh",
      "correctAnswer": false
    },
    {
      "id": "b",
      "content": "Có thể điều chỉnh các kênh màu để thay đổi màu sắc của vùng chọn trên ảnh",
      "correctAnswer": true
    },
    {
      "id": "c",
      "content": "Nếu muốn chỉnh màu bầu trời thành màu xanh dương cần phải điều chỉnh màu cho toàn bộ bức ảnh.",
      "correctAnswer": false
    },
    {
      "id": "d",
      "content": "Để làm nổi bật hình ảnh gia đình Lan trong bức ảnh, cần phải tăng độ tương phản giữa gia đình Lan và khung cảnh xung quanh.",
      "correctAnswer": true
    }
  ],
  "hints": {
    "level1_concept": "Phân tích tình huống thực tế và các yêu cầu kỹ thuật về HTML/CSS trong bài toán.",
    "level2_formula": "Kiểm tra từng phát biểu a, b, c, d xem cú pháp thẻ, thuộc tính hoặc quy tắc định kiểu có thỏa mãn yêu cầu hay không.",
    "level3_steps": "Đánh giá tính đúng/sai của từng phương án: đối chiếu các thẻ <p>, <i>, <em>, <span>, <strong>, <a>, <img>, <ol>, <ul>, CSS ID/Class selector."
  },
  "explanation": "Đáp án chi tiết từng mệnh đề:\n- Ý a) : Sai (Không thể tăng sáng cho bức ảnh...)\n- Ý b) : Đúng (Có thể điều chỉnh các kênh màu để thay đổi màu sắc của vùng ...)\n- Ý c) : Sai (Nếu muốn chỉnh màu bầu trời thành màu xanh dương cần phải đi...)\n- Ý d) : Đúng (Để làm nổi bật hình ảnh gia đình Lan trong bức ảnh, cần phải...)",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-TF-02",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "VanDung",
  "type": "true_false",
  "content": "Lớp 12C1 lên kế hoạch họp nhóm để triển khai dự án học tập “Thiết kế trang thông tin của chi đoàn”. Một số thành viên phát biểu về phương án sử dụng CSS cho dự án:",
  "tfItems": [
    {
      "id": "a",
      "content": "Sử dụng bộ chọn định danh để định dạng cho một phần tử cụ thể bằng cách sử dụng một định danh cụ thể của phần tử đó trên trang.",
      "correctAnswer": true
    },
    {
      "id": "b",
      "content": "Bộ chọn định danh chỉ được sử dụng một lần",
      "correctAnswer": false
    },
    {
      "id": "c",
      "content": "Bộ chọn lớp được sử dụng nhiều lần trên cùng một trang HTML",
      "correctAnswer": true
    },
    {
      "id": "d",
      "content": "Bộ chọn lớp có thể được sử dụng trên nhiều trang HTML khác nhau.",
      "correctAnswer": true
    }
  ],
  "hints": {
    "level1_concept": "Phân tích tình huống thực tế và các yêu cầu kỹ thuật về HTML/CSS trong bài toán.",
    "level2_formula": "Kiểm tra từng phát biểu a, b, c, d xem cú pháp thẻ, thuộc tính hoặc quy tắc định kiểu có thỏa mãn yêu cầu hay không.",
    "level3_steps": "Đánh giá tính đúng/sai của từng phương án: đối chiếu các thẻ <p>, <i>, <em>, <span>, <strong>, <a>, <img>, <ol>, <ul>, CSS ID/Class selector."
  },
  "explanation": "Đáp án chi tiết từng mệnh đề:\n- Ý a) : Đúng (Sử dụng bộ chọn định danh để định dạng cho một phần tử cụ th...)\n- Ý b) : Sai (Bộ chọn định danh chỉ được sử dụng một lần...)\n- Ý c) : Đúng (Bộ chọn lớp được sử dụng nhiều lần trên cùng một trang HTML...)\n- Ý d) : Đúng (Bộ chọn lớp có thể được sử dụng trên nhiều trang HTML khác n...)",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-TF-03",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "VanDung",
  "type": "true_false",
  "content": "Minh muốn tạo một website cá nhân để chia sẻ những bức ảnh du lịch của mình. Tuy nhiên, Minh không biết làm thế nào để chèn hình ảnh vào trang web. Bạn có thể lựa chọn giúp Minh với những phương án sau đây:",
  "tfItems": [
    {
      "id": "a",
      "content": "Tải hình ảnh lên một trang web chia sẻ ảnh và lấy link để chèn vào trang web cá nhân.",
      "correctAnswer": false
    },
    {
      "id": "b",
      "content": "Sử dụng thẻ <img> trong HTML để chèn hình ảnh trực tiếp từ máy tính vào trang web.",
      "correctAnswer": true
    },
    {
      "id": "c",
      "content": "Chèn hình ảnh bằng cách sử dụng phần mềm xử lý văn bản và sao chép vào trang web.",
      "correctAnswer": false
    },
    {
      "id": "d",
      "content": "Gửi email cho bạn bè và nhờ họ chèn hình ảnh vào trang web giúp Minh.",
      "correctAnswer": false
    }
  ],
  "hints": {
    "level1_concept": "Phân tích tình huống thực tế và các yêu cầu kỹ thuật về HTML/CSS trong bài toán.",
    "level2_formula": "Kiểm tra từng phát biểu a, b, c, d xem cú pháp thẻ, thuộc tính hoặc quy tắc định kiểu có thỏa mãn yêu cầu hay không.",
    "level3_steps": "Đánh giá tính đúng/sai của từng phương án: đối chiếu các thẻ <p>, <i>, <em>, <span>, <strong>, <a>, <img>, <ol>, <ul>, CSS ID/Class selector."
  },
  "explanation": "Đáp án chi tiết từng mệnh đề:\n- Ý a) : Sai (Tải hình ảnh lên một trang web chia sẻ ảnh và lấy link để ch...)\n- Ý b) : Đúng (Sử dụng thẻ <img> trong HTML để chèn hình ảnh trực tiếp từ m...)\n- Ý c) : Sai (Chèn hình ảnh bằng cách sử dụng phần mềm xử lý văn bản và sa...)\n- Ý d) : Sai (Gửi email cho bạn bè và nhờ họ chèn hình ảnh vào trang web g...)",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-TF-04",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "VanDung",
  "type": "true_false",
  "content": "Thầy giáo yêu cầu học sinh đọc nội dung sau đây để chuẩn bị làm việc một website bán chè.\nCHÈ NGON – PHỔ CỔ NHUẾ\n136 Ngõ 43 Cổ Nhuế, Bắc Từ Liêm, Hà Nội\nĐiểm đánh giá: 999 + đánh giá trên Shopee\nGiờ mở cửa: 09:00 – 23:59\nSau khi đọc xong, học sinh có các ý kiến phát biểu như sau. Ý kiến nào đúng?",
  "tfItems": [
    {
      "id": "a",
      "content": "Để hiển thị tiêu đề dòng 1, sử dụng thẻ <P>.",
      "correctAnswer": false
    },
    {
      "id": "b",
      "content": "Đoạn Code sau sẽ hiển thị đúng nội dung trong dòng thứ 2:\n<i> 136 Ngõ 43 Cổ Nhuế, Bắc Từ Liêm, Hà Nội </i>",
      "correctAnswer": true
    },
    {
      "id": "c",
      "content": "Để hiển thị nội dung dòng thứ 3, sử dụng các thẻ <span> như sau:\nĐiểm đánh giá: <span style= “color: white; background:black”> 999+ đánh giá trên Shopee </span>",
      "correctAnswer": false
    },
    {
      "id": "d",
      "content": "Để hiển thị nội dung dòng thứ 4, sử dụng thẻ <strong> như sau:\nGiờ mở cửa: <strong> 09:00 – 23:59</strong>",
      "correctAnswer": false
    }
  ],
  "hints": {
    "level1_concept": "Phân tích tình huống thực tế và các yêu cầu kỹ thuật về HTML/CSS trong bài toán.",
    "level2_formula": "Kiểm tra từng phát biểu a, b, c, d xem cú pháp thẻ, thuộc tính hoặc quy tắc định kiểu có thỏa mãn yêu cầu hay không.",
    "level3_steps": "Đánh giá tính đúng/sai của từng phương án: đối chiếu các thẻ <p>, <i>, <em>, <span>, <strong>, <a>, <img>, <ol>, <ul>, CSS ID/Class selector."
  },
  "explanation": "Đáp án chi tiết từng mệnh đề:\n- Ý a) : Sai (Để hiển thị tiêu đề dòng 1, sử dụng thẻ <P>....)\n- Ý b) : Đúng (Đoạn Code sau sẽ hiển thị đúng nội dung trong dòng thứ 2:\n<i...)\n- Ý c) : Sai (Để hiển thị nội dung dòng thứ 3, sử dụng các thẻ <span> như ...)\n- Ý d) : Sai (Để hiển thị nội dung dòng thứ 4, sử dụng thẻ <strong> như sa...)",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-TF-05",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "VanDung",
  "type": "true_false",
  "content": "Một trung tâm gia sư muốn làm một website có thông tin và định dạng như sau đây:\nVĂN PHÒNG GIA SƯ\nPhòng 509, nhà K1\nHotline: 0949.401.111 – 0912.602.769\nEmail: info@nnt.edu.vn\nGiáo viên yêu cầu học sinh viết mã lệnh HTML để mô tả nội dung này. Sau đây là ý kiến của bạn học sinh:",
  "tfItems": [
    {
      "id": "a",
      "content": "Có thể sử dụng thẻ <h2> cho nội dung dòng thứ nhất.",
      "correctAnswer": true
    },
    {
      "id": "b",
      "content": "Đoạn code sau đây sẽ hiển thị đúng nội dung dòng thứ 2:\n<em> Phòng 509, nhà K1 </em>",
      "correctAnswer": true
    },
    {
      "id": "c",
      "content": "Để hiển thị dòng thứ 3, sử dụng đoạn mã lệnh sau:\n<b style=”color:#999999”> Hotline: 0949.401.111 – 0912.602.769 </b>",
      "correctAnswer": false
    },
    {
      "id": "d",
      "content": "Để hiển thị dòng thứ 4, sử dụng đoạn mã lệnh sau:\n<a href=info@nnt.edu.vn>  </a>",
      "correctAnswer": false
    }
  ],
  "hints": {
    "level1_concept": "Phân tích tình huống thực tế và các yêu cầu kỹ thuật về HTML/CSS trong bài toán.",
    "level2_formula": "Kiểm tra từng phát biểu a, b, c, d xem cú pháp thẻ, thuộc tính hoặc quy tắc định kiểu có thỏa mãn yêu cầu hay không.",
    "level3_steps": "Đánh giá tính đúng/sai của từng phương án: đối chiếu các thẻ <p>, <i>, <em>, <span>, <strong>, <a>, <img>, <ol>, <ul>, CSS ID/Class selector."
  },
  "explanation": "Đáp án chi tiết từng mệnh đề:\n- Ý a) : Đúng (Có thể sử dụng thẻ <h2> cho nội dung dòng thứ nhất....)\n- Ý b) : Đúng (Đoạn code sau đây sẽ hiển thị đúng nội dung dòng thứ 2:\n<em>...)\n- Ý c) : Sai (Để hiển thị dòng thứ 3, sử dụng đoạn mã lệnh sau:\n<b style=”...)\n- Ý d) : Sai (Để hiển thị dòng thứ 4, sử dụng đoạn mã lệnh sau:\n<a href=in...)",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-TF-06",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "VanDung",
  "type": "true_false",
  "content": "Mỗi phát biểu sau đây về mục đích sử dụng của các phần tử là đúng hay sai?",
  "tfItems": [
    {
      "id": "a",
      "content": "Phần tử body dùng để khai báo phần nội dung sẽ hiển thị trên màn hình cửa sổ trình duyệt web.",
      "correctAnswer": true
    },
    {
      "id": "b",
      "content": "Phần tử head dùng để khai báo thông tin về cấu trúc của trang web.",
      "correctAnswer": false
    },
    {
      "id": "c",
      "content": "Phần tử title dùng để khai báo tiêu đề và thông tin tác giả soạn trang web.",
      "correctAnswer": false
    },
    {
      "id": "d",
      "content": "Phần tử html dùng để khai báo cấu trúc và nội dung của trang web.",
      "correctAnswer": true
    }
  ],
  "hints": {
    "level1_concept": "Phân tích tình huống thực tế và các yêu cầu kỹ thuật về HTML/CSS trong bài toán.",
    "level2_formula": "Kiểm tra từng phát biểu a, b, c, d xem cú pháp thẻ, thuộc tính hoặc quy tắc định kiểu có thỏa mãn yêu cầu hay không.",
    "level3_steps": "Đánh giá tính đúng/sai của từng phương án: đối chiếu các thẻ <p>, <i>, <em>, <span>, <strong>, <a>, <img>, <ol>, <ul>, CSS ID/Class selector."
  },
  "explanation": "Đáp án chi tiết từng mệnh đề:\n- Ý a) : Đúng (Phần tử body dùng để khai báo phần nội dung sẽ hiển thị trên...)\n- Ý b) : Sai (Phần tử head dùng để khai báo thông tin về cấu trúc của tran...)\n- Ý c) : Sai (Phần tử title dùng để khai báo tiêu đề và thông tin tác giả ...)\n- Ý d) : Đúng (Phần tử html dùng để khai báo cấu trúc và nội dung của trang...)",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-TF-07",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "VanDung",
  "type": "true_false",
  "content": "Mỗi phát biểu sau đây là đúng hay sai khi sử dụng các phần tử để định dạng văn bản trên trang web?",
  "tfItems": [
    {
      "id": "a",
      "content": "Nội dung các tiêu đề mục tạo bởi các phần tử h1, h2, h3, h4, h5, h6 khi hiển thị trên màn hình trình duyệt web đều được in đậm.",
      "correctAnswer": true
    },
    {
      "id": "b",
      "content": "Nội dung của phần tử strong không thể chứa phần tử h1.",
      "correctAnswer": false
    },
    {
      "id": "c",
      "content": "Nội dung của phần tử mark khi hiển thị trên màn hình trình duyệt web được tô nền màu xanh.",
      "correctAnswer": false
    },
    {
      "id": "d",
      "content": "Đoạn văn bản tạo phần tử p được hiển thị trên một đoạn mới khi mở bằng trình duyệt web.",
      "correctAnswer": true
    }
  ],
  "hints": {
    "level1_concept": "Phân tích tình huống thực tế và các yêu cầu kỹ thuật về HTML/CSS trong bài toán.",
    "level2_formula": "Kiểm tra từng phát biểu a, b, c, d xem cú pháp thẻ, thuộc tính hoặc quy tắc định kiểu có thỏa mãn yêu cầu hay không.",
    "level3_steps": "Đánh giá tính đúng/sai của từng phương án: đối chiếu các thẻ <p>, <i>, <em>, <span>, <strong>, <a>, <img>, <ol>, <ul>, CSS ID/Class selector."
  },
  "explanation": "Đáp án chi tiết từng mệnh đề:\n- Ý a) : Đúng (Nội dung các tiêu đề mục tạo bởi các phần tử h1, h2, h3, h4,...)\n- Ý b) : Sai (Nội dung của phần tử strong không thể chứa phần tử h1....)\n- Ý c) : Sai (Nội dung của phần tử mark khi hiển thị trên màn hình trình d...)\n- Ý d) : Đúng (Đoạn văn bản tạo phần tử p được hiển thị trên một đoạn mới k...)",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-TF-08",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "VanDung",
  "type": "true_false",
  "content": "Mỗi phát biểu sau đây là đúng hay sai khi sử dụng các phần ol, ul để tạo danh sách trên trang web?",
  "tfItems": [
    {
      "id": "a",
      "content": "Khi khai báo thuộc tính type=“A”, danh sách xác định thứ tự các mục theo chữ cái in hoa.",
      "correctAnswer": true
    },
    {
      "id": "b",
      "content": "Số thứ tự trong danh sách xác định thứ tự luôn là số nguyên.",
      "correctAnswer": false
    },
    {
      "id": "c",
      "content": "Khi mở bằng trình duyệt web, theo mặc định mục trong danh sách không xác định thứ tự được hiển thị bắt đầu bằng dấu sao (*).",
      "correctAnswer": false
    },
    {
      "id": "d",
      "content": "Có thể thay đổi số thứ tự của mục bắt đầu trong danh sách xác định thứ tự.",
      "correctAnswer": true
    }
  ],
  "hints": {
    "level1_concept": "Phân tích tình huống thực tế và các yêu cầu kỹ thuật về HTML/CSS trong bài toán.",
    "level2_formula": "Kiểm tra từng phát biểu a, b, c, d xem cú pháp thẻ, thuộc tính hoặc quy tắc định kiểu có thỏa mãn yêu cầu hay không.",
    "level3_steps": "Đánh giá tính đúng/sai của từng phương án: đối chiếu các thẻ <p>, <i>, <em>, <span>, <strong>, <a>, <img>, <ol>, <ul>, CSS ID/Class selector."
  },
  "explanation": "Đáp án chi tiết từng mệnh đề:\n- Ý a) : Đúng (Khi khai báo thuộc tính type=“A”, danh sách xác định thứ tự ...)\n- Ý b) : Sai (Số thứ tự trong danh sách xác định thứ tự luôn là số nguyên....)\n- Ý c) : Sai (Khi mở bằng trình duyệt web, theo mặc định mục trong danh sá...)\n- Ý d) : Đúng (Có thể thay đổi số thứ tự của mục bắt đầu trong danh sách xá...)",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-TF-09",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "VanDung",
  "type": "true_false",
  "content": "Siêu văn bản là loại văn bản mà nội dung của nó không chỉ chứa văn bản mà còn có thể chứa nhiều dạng dữ liệu khác như âm thanh, hình ảnh,… và đặc biệt là chứa các siêu liên kết tới siêu văn bản khác.",
  "tfItems": [
    {
      "id": "a",
      "content": "Các tệp có phần mở rộng .txt đều là các siêu văn bản.",
      "correctAnswer": false
    },
    {
      "id": "b",
      "content": "Trong HTML, người ta sử dụng thẻ <href> để tạo siêu liên kết.",
      "correctAnswer": false
    },
    {
      "id": "c",
      "content": "Có hai loại đường dẫn chính là đường dẫn tuyệt đối và đường dẫn tương đối.",
      "correctAnswer": true
    },
    {
      "id": "d",
      "content": "Đường dẫn tương đối không yêu cầu giao thức hay tên miền mà chỉ cần tên đường dẫn.",
      "correctAnswer": true
    }
  ],
  "hints": {
    "level1_concept": "Phân tích tình huống thực tế và các yêu cầu kỹ thuật về HTML/CSS trong bài toán.",
    "level2_formula": "Kiểm tra từng phát biểu a, b, c, d xem cú pháp thẻ, thuộc tính hoặc quy tắc định kiểu có thỏa mãn yêu cầu hay không.",
    "level3_steps": "Đánh giá tính đúng/sai của từng phương án: đối chiếu các thẻ <p>, <i>, <em>, <span>, <strong>, <a>, <img>, <ol>, <ul>, CSS ID/Class selector."
  },
  "explanation": "Đáp án chi tiết từng mệnh đề:\n- Ý a) : Sai (Các tệp có phần mở rộng .txt đều là các siêu văn bản....)\n- Ý b) : Sai (Trong HTML, người ta sử dụng thẻ <href> để tạo siêu liên kết...)\n- Ý c) : Đúng (Có hai loại đường dẫn chính là đường dẫn tuyệt đối và đường ...)\n- Ý d) : Đúng (Đường dẫn tương đối không yêu cầu giao thức hay tên miền mà ...)",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-TF-10",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "VanDung",
  "type": "true_false",
  "content": "Thuộc tính của thẻ có tác dụng bổ sung thông tin, làm rõ các điều khiển được thẻ chỉ định.",
  "tfItems": [
    {
      "id": "a",
      "content": "Mỗi thẻ HTML đều phải có thuộc tính.",
      "correctAnswer": false
    },
    {
      "id": "b",
      "content": "Cú pháp để xác định thuộc tính: tên_thuộc_tính=\"giá trị\".",
      "correctAnswer": true
    },
    {
      "id": "c",
      "content": "Thuộc tính có thể nằm trong thẻ kết thúc.",
      "correctAnswer": false
    },
    {
      "id": "d",
      "content": "Trong trường hợp thẻ có nhiều hơn một thuộc tính thì các thuộc tính được ngăn cách bởi dấu cách.",
      "correctAnswer": true
    }
  ],
  "hints": {
    "level1_concept": "Phân tích tình huống thực tế và các yêu cầu kỹ thuật về HTML/CSS trong bài toán.",
    "level2_formula": "Kiểm tra từng phát biểu a, b, c, d xem cú pháp thẻ, thuộc tính hoặc quy tắc định kiểu có thỏa mãn yêu cầu hay không.",
    "level3_steps": "Đánh giá tính đúng/sai của từng phương án: đối chiếu các thẻ <p>, <i>, <em>, <span>, <strong>, <a>, <img>, <ol>, <ul>, CSS ID/Class selector."
  },
  "explanation": "Đáp án chi tiết từng mệnh đề:\n- Ý a) : Sai (Mỗi thẻ HTML đều phải có thuộc tính....)\n- Ý b) : Đúng (Cú pháp để xác định thuộc tính: tên_thuộc_tính=\"giá trị\"....)\n- Ý c) : Sai (Thuộc tính có thể nằm trong thẻ kết thúc....)\n- Ý d) : Đúng (Trong trường hợp thẻ có nhiều hơn một thuộc tính thì các thu...)",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-TF-11",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "VanDung",
  "type": "true_false",
  "content": "Trong định nghĩa phần tử form tạo biểu mẫu, em hãy chọn đáp án Đúng/Sai tương ứng với từng phát biểu sau đây?",
  "tfItems": [
    {
      "id": "a",
      "content": "Trong định nghĩa phần tử form dùng phương thức GET, POST để xác định phương thức gửi dữ liệu",
      "correctAnswer": true
    },
    {
      "id": "b",
      "content": "Phương thức GET không bị hạn chế về dung lượng",
      "correctAnswer": false
    },
    {
      "id": "c",
      "content": "Phương thức POST bị hạn chế về dung lượng",
      "correctAnswer": false
    },
    {
      "id": "d",
      "content": "Nếu không khai báo method trong phần tử form thì phương thức mặc định là GET",
      "correctAnswer": true
    }
  ],
  "hints": {
    "level1_concept": "Phân tích tình huống thực tế và các yêu cầu kỹ thuật về HTML/CSS trong bài toán.",
    "level2_formula": "Kiểm tra từng phát biểu a, b, c, d xem cú pháp thẻ, thuộc tính hoặc quy tắc định kiểu có thỏa mãn yêu cầu hay không.",
    "level3_steps": "Đánh giá tính đúng/sai của từng phương án: đối chiếu các thẻ <p>, <i>, <em>, <span>, <strong>, <a>, <img>, <ol>, <ul>, CSS ID/Class selector."
  },
  "explanation": "Đáp án chi tiết từng mệnh đề:\n- Ý a) : Đúng (Trong định nghĩa phần tử form dùng phương thức GET, POST để ...)\n- Ý b) : Sai (Phương thức GET không bị hạn chế về dung lượng...)\n- Ý c) : Sai (Phương thức POST bị hạn chế về dung lượng...)\n- Ý d) : Đúng (Nếu không khai báo method trong phần tử form thì phương thức...)",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-TF-12",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "VanDung",
  "type": "true_false",
  "content": "Trong điều khiển hỗ trợ nhập dữ liệu kí tự và nút lệnh, em hãy chọn đáp án Đúng/Sai tương ứng với từng phát biểu sau đây?",
  "tfItems": [
    {
      "id": "a",
      "content": "Trong điều khiển nhập xâu kí tự có sử dụng thuộc tính name và value để khai báo phần tử input",
      "correctAnswer": true
    },
    {
      "id": "b",
      "content": "Thuộc tính value nếu có thì Giá trị được gán là giá trị mặc định của ô text trên màn hình duyệt web",
      "correctAnswer": true
    },
    {
      "id": "c",
      "content": "Phần tử label giúp tạo ô nhập đoạn văn bản",
      "correctAnswer": false
    },
    {
      "id": "d",
      "content": "HTML cho phép tạo nút lệnh để gửi dữ liệu, thường được gọi là nút submit",
      "correctAnswer": true
    }
  ],
  "hints": {
    "level1_concept": "Phân tích tình huống thực tế và các yêu cầu kỹ thuật về HTML/CSS trong bài toán.",
    "level2_formula": "Kiểm tra từng phát biểu a, b, c, d xem cú pháp thẻ, thuộc tính hoặc quy tắc định kiểu có thỏa mãn yêu cầu hay không.",
    "level3_steps": "Đánh giá tính đúng/sai của từng phương án: đối chiếu các thẻ <p>, <i>, <em>, <span>, <strong>, <a>, <img>, <ol>, <ul>, CSS ID/Class selector."
  },
  "explanation": "Đáp án chi tiết từng mệnh đề:\n- Ý a) : Đúng (Trong điều khiển nhập xâu kí tự có sử dụng thuộc tính name v...)\n- Ý b) : Đúng (Thuộc tính value nếu có thì Giá trị được gán là giá trị mặc ...)\n- Ý c) : Sai (Phần tử label giúp tạo ô nhập đoạn văn bản...)\n- Ý d) : Đúng (HTML cho phép tạo nút lệnh để gửi dữ liệu, thường được gọi l...)",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-TF-13",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "VanDung",
  "type": "true_false",
  "content": "Lớp 12A, lên kế hoạch họp nhóm để triển khai dự án học tập “Thiết kế trang thông tin giúp Đoàn trường”. Một số thành viên phát biểu về phương án sử dụng CSS cho dự án:",
  "tfItems": [
    {
      "id": "a",
      "content": "Sử dụng bộ chọn định danh để định dạng cho một phần tử cụ thể bằng cách sử dụng một định danh cụ thể của phần tử đó trên trang.",
      "correctAnswer": false
    },
    {
      "id": "b",
      "content": "Bộ chọn định danh chỉ được sử dụng một lần",
      "correctAnswer": true
    },
    {
      "id": "c",
      "content": "Bộ chọn lớp được sử dụng nhiều lần trên cùng một trang HTML",
      "correctAnswer": false
    },
    {
      "id": "d",
      "content": "Bộ chọn lớp có thể được sử dụng trên nhiều trang HTML khác nhau.",
      "correctAnswer": true
    }
  ],
  "hints": {
    "level1_concept": "Phân tích tình huống thực tế và các yêu cầu kỹ thuật về HTML/CSS trong bài toán.",
    "level2_formula": "Kiểm tra từng phát biểu a, b, c, d xem cú pháp thẻ, thuộc tính hoặc quy tắc định kiểu có thỏa mãn yêu cầu hay không.",
    "level3_steps": "Đánh giá tính đúng/sai của từng phương án: đối chiếu các thẻ <p>, <i>, <em>, <span>, <strong>, <a>, <img>, <ol>, <ul>, CSS ID/Class selector."
  },
  "explanation": "Đáp án chi tiết từng mệnh đề:\n- Ý a) : Sai (Sử dụng bộ chọn định danh để định dạng cho một phần tử cụ th...)\n- Ý b) : Đúng (Bộ chọn định danh chỉ được sử dụng một lần...)\n- Ý c) : Sai (Bộ chọn lớp được sử dụng nhiều lần trên cùng một trang HTML...)\n- Ý d) : Đúng (Bộ chọn lớp có thể được sử dụng trên nhiều trang HTML khác n...)",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-12F-TF-14",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-chuyen-de-12f-web",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "difficulty": "VanDung",
  "type": "true_false",
  "content": "Minh muốn tạo một website cá nhân để chia sẻ những bức ảnh du lịch của mình. Tuy nhiên, Minh không biết làm thế nào để chèn hình ảnh vào trang web. Bạn có thể lựa chọn giúp Minh với những phương án sau đây:",
  "tfItems": [
    {
      "id": "a",
      "content": "Tải hình ảnh lên một trang web chia sẻ ảnh và lấy link để chèn vào trang web cá nhân.",
      "correctAnswer": false
    },
    {
      "id": "b",
      "content": "Sử dụng thẻ <img> trong HTML để chèn hình ảnh trực tiếp từ máy tính vào trang web.",
      "correctAnswer": true
    },
    {
      "id": "c",
      "content": "Chèn hình ảnh bằng cách sử dụng phần mềm xử lý văn bản và sao chép vào trang web.",
      "correctAnswer": false
    },
    {
      "id": "d",
      "content": "Gửi email cho bạn bè và nhờ họ chèn hình ảnh vào trang web giúp Minh.",
      "correctAnswer": false
    }
  ],
  "hints": {
    "level1_concept": "Phân tích tình huống thực tế và các yêu cầu kỹ thuật về HTML/CSS trong bài toán.",
    "level2_formula": "Kiểm tra từng phát biểu a, b, c, d xem cú pháp thẻ, thuộc tính hoặc quy tắc định kiểu có thỏa mãn yêu cầu hay không.",
    "level3_steps": "Đánh giá tính đúng/sai của từng phương án: đối chiếu các thẻ <p>, <i>, <em>, <span>, <strong>, <a>, <img>, <ol>, <ul>, CSS ID/Class selector."
  },
  "explanation": "Đáp án chi tiết từng mệnh đề:\n- Ý a) : Sai (Tải hình ảnh lên một trang web chia sẻ ảnh và lấy link để ch...)\n- Ý b) : Đúng (Sử dụng thẻ <img> trong HTML để chèn hình ảnh trực tiếp từ m...)\n- Ý c) : Sai (Chèn hình ảnh bằng cách sử dụng phần mềm xử lý văn bản và sa...)\n- Ý d) : Sai (Gửi email cho bạn bè và nhờ họ chèn hình ảnh vào trang web g...)",
  "sourceDocTitle": "Chuyên đề 12F. Tạo trang Web (Google Drive)"
},
{
  "id": "Q-TIN-11D12D-MC-01",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-dao-duc-phap-luat-so",
  "topicName": "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
  "chapterName": "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Khi tham gia thế giới ảo, hành vi nào sau đây được coi là nhân văn?",
  "options": [
    {
      "id": "A",
      "content": "Tấn công và đe dọa người khác."
    },
    {
      "id": "B",
      "content": "Khinh bỉ và chế nhạo người khác."
    },
    {
      "id": "C",
      "content": "Đồng cảm và hỗ trợ người khác."
    },
    {
      "id": "D",
      "content": "Gây rối và quấy rối trên mạng."
    }
  ],
  "correctAnswer": "C",
  "hints": {
    "level1_concept": "Nhớ lại kiến thức về văn hóa ứng xử, phòng chống lừa đảo mạng hoặc ưu/nhược điểm của giao tiếp trực tuyến.",
    "level2_formula": "Xác định từ khóa chính trong câu hỏi (Ví dụ: 'Phishing', 'Văn hóa ứng xử', 'Ưu điểm', 'Quyết định 874/QĐ-BTTTT') để loại trừ các phương án sai.",
    "level3_steps": "Đối chiếu nội dung câu hỏi với chuẩn mực đạo đức, quy tắc pháp luật và bài học Chuyên đề 11D, 12D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án C. Đồng cảm và hỗ trợ người khác khi họ gặp khó khăn là biểu hiện cốt lõi của tính nhân văn trong không gian mạng.",
  "sourceDocTitle": "Chuyên đề 11D, 12D - DD, VH, PL TRONG MT SO.docx (Google Drive)"
},
{
  "id": "Q-TIN-11D12D-MC-02",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-dao-duc-phap-luat-so",
  "topicName": "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
  "chapterName": "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Nên làm gì với các mật khẩu dùng trên mạng của mình?",
  "options": [
    {
      "id": "A",
      "content": "Cho bạn bè biết mật khẩu nếu quên còn hỏi bạn."
    },
    {
      "id": "B",
      "content": "Thay mật khẩu thường xuyên và không cho bất cứ ai biết."
    },
    {
      "id": "C",
      "content": "Sử dụng cùng một mật khẩu cho mọi thứ."
    },
    {
      "id": "D",
      "content": "Đặt mật khẩu dễ đoán cho khỏi quên."
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nhớ lại kiến thức về văn hóa ứng xử, phòng chống lừa đảo mạng hoặc ưu/nhược điểm của giao tiếp trực tuyến.",
    "level2_formula": "Xác định từ khóa chính trong câu hỏi (Ví dụ: 'Phishing', 'Văn hóa ứng xử', 'Ưu điểm', 'Quyết định 874/QĐ-BTTTT') để loại trừ các phương án sai.",
    "level3_steps": "Đối chiếu nội dung câu hỏi với chuẩn mực đạo đức, quy tắc pháp luật và bài học Chuyên đề 11D, 12D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án B. Để bảo mật tài khoản cá nhân, cần đặt mật khẩu mạnh, thay đổi thường xuyên và tuyệt đối không chia sẻ cho bất kỳ ai.",
  "sourceDocTitle": "Chuyên đề 11D, 12D - DD, VH, PL TRONG MT SO.docx (Google Drive)"
},
{
  "id": "Q-TIN-11D12D-MC-03",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-dao-duc-phap-luat-so",
  "topicName": "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
  "chapterName": "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Quy tắc tuân thủ, tôn trọng pháp luật là?",
  "options": [
    {
      "id": "A",
      "content": "Tuân thủ pháp luật Việt Nam, chỉ tôn trọng quyền và lợi ích hợp pháp của tổ chức."
    },
    {
      "id": "B",
      "content": "Tuân thủ pháp luật Việt Nam, tôn trọng quyền và lợi ích hợp pháp của cá nhân và tổ chức."
    },
    {
      "id": "C",
      "content": "Tuân thủ pháp luật Việt Nam, chỉ cần tôn trọng lợi ích hợp pháp của cá nhân và tổ chức."
    },
    {
      "id": "D",
      "content": "Tuân thủ pháp luật Việt Nam, chỉ tôn trọng quyền và lợi ích hợp pháp của cá nhân."
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nhớ lại kiến thức về văn hóa ứng xử, phòng chống lừa đảo mạng hoặc ưu/nhược điểm của giao tiếp trực tuyến.",
    "level2_formula": "Xác định từ khóa chính trong câu hỏi (Ví dụ: 'Phishing', 'Văn hóa ứng xử', 'Ưu điểm', 'Quyết định 874/QĐ-BTTTT') để loại trừ các phương án sai.",
    "level3_steps": "Đối chiếu nội dung câu hỏi với chuẩn mực đạo đức, quy tắc pháp luật và bài học Chuyên đề 11D, 12D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án B. Quy tắc tuân thủ pháp luật đòi hỏi tôn trọng quyền và lợi ích hợp pháp của cả cá nhân và tổ chức.",
  "sourceDocTitle": "Chuyên đề 11D, 12D - DD, VH, PL TRONG MT SO.docx (Google Drive)"
},
{
  "id": "Q-TIN-11D12D-MC-04",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-dao-duc-phap-luat-so",
  "topicName": "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
  "chapterName": "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Thuật ngữ \"Phishing\" là gì?",
  "options": [
    {
      "id": "A",
      "content": "Việc lừa đảo để lấy cắp thông tin cá nhân bằng các trang web uy tín."
    },
    {
      "id": "B",
      "content": "Việc lừa đảo để lấy cắp thông tin cá nhân bằng các trang web giả."
    },
    {
      "id": "C",
      "content": "Việc chiếm đoạt tài sản cá nhân."
    },
    {
      "id": "D",
      "content": "Việc cung cấp và bổ sung thông tin cá nhân."
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nhớ lại kiến thức về văn hóa ứng xử, phòng chống lừa đảo mạng hoặc ưu/nhược điểm của giao tiếp trực tuyến.",
    "level2_formula": "Xác định từ khóa chính trong câu hỏi (Ví dụ: 'Phishing', 'Văn hóa ứng xử', 'Ưu điểm', 'Quyết định 874/QĐ-BTTTT') để loại trừ các phương án sai.",
    "level3_steps": "Đối chiếu nội dung câu hỏi với chuẩn mực đạo đức, quy tắc pháp luật và bài học Chuyên đề 11D, 12D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án B. Phishing (tấn công giả mạo) là hình thức lừa đảo nhằm lấy cắp thông tin cá nhân (tài khoản, mật khẩu, thẻ tín dụng) bằng cách tạo dựng các trang web, email giả mạo.",
  "sourceDocTitle": "Chuyên đề 11D, 12D - DD, VH, PL TRONG MT SO.docx (Google Drive)"
},
{
  "id": "Q-TIN-11D12D-MC-05",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-dao-duc-phap-luat-so",
  "topicName": "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
  "chapterName": "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Đâu là nguyên tắc để hạn chế thiệt hại khi nghi ngờ bị lừa qua mạng?",
  "options": [
    {
      "id": "A",
      "content": "Nếu đã bị thiệt hại, không cần báo ngay cho cơ quan chức năng."
    },
    {
      "id": "B",
      "content": "Nếu đã lỡ chia sẻ thông tin về thẻ tín dụng, không cần báo cho ngân hàng biết."
    },
    {
      "id": "C",
      "content": "Nếu tài khoản bị ảnh hưởng có liên quan đến nhà trường hay một cơ quan, tổ chức, cần thông báo ngay."
    },
    {
      "id": "D",
      "content": "Không thay đổi mật khẩu các tài khoản bị ảnh hưởng."
    }
  ],
  "correctAnswer": "C",
  "hints": {
    "level1_concept": "Nhớ lại kiến thức về văn hóa ứng xử, phòng chống lừa đảo mạng hoặc ưu/nhược điểm của giao tiếp trực tuyến.",
    "level2_formula": "Xác định từ khóa chính trong câu hỏi (Ví dụ: 'Phishing', 'Văn hóa ứng xử', 'Ưu điểm', 'Quyết định 874/QĐ-BTTTT') để loại trừ các phương án sai.",
    "level3_steps": "Đối chiếu nội dung câu hỏi với chuẩn mực đạo đức, quy tắc pháp luật và bài học Chuyên đề 11D, 12D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án C. Khi tài khoản liên quan đến cơ quan, nhà trường bị xâm phạm, phải thông báo ngay cho quản trị viên/cơ quan để kịp thời ngăn chặn thiệt hại lan rộng.",
  "sourceDocTitle": "Chuyên đề 11D, 12D - DD, VH, PL TRONG MT SO.docx (Google Drive)"
},
{
  "id": "Q-TIN-11D12D-MC-06",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-dao-duc-phap-luat-so",
  "topicName": "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
  "chapterName": "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Đặc điểm nào dưới đây KHÔNG phải là ưu điểm của giao tiếp trong không gian mạng?",
  "options": [
    {
      "id": "A",
      "content": "Thực hiện ở mọi lúc, mọi nơi."
    },
    {
      "id": "B",
      "content": "Tiết kiệm thời gian và chi phí."
    },
    {
      "id": "C",
      "content": "Nhận phản hồi ngay lập tức khi giao tiếp."
    },
    {
      "id": "D",
      "content": "Mở rộng kết nối xã hội."
    }
  ],
  "correctAnswer": "C",
  "hints": {
    "level1_concept": "Nhớ lại kiến thức về văn hóa ứng xử, phòng chống lừa đảo mạng hoặc ưu/nhược điểm của giao tiếp trực tuyến.",
    "level2_formula": "Xác định từ khóa chính trong câu hỏi (Ví dụ: 'Phishing', 'Văn hóa ứng xử', 'Ưu điểm', 'Quyết định 874/QĐ-BTTTT') để loại trừ các phương án sai.",
    "level3_steps": "Đối chiếu nội dung câu hỏi với chuẩn mực đạo đức, quy tắc pháp luật và bài học Chuyên đề 11D, 12D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án C. Giao tiếp trên không gian mạng phần lớn là không đồng bộ (như gửi email, tin nhắn diễn đàn), do đó không phải lúc nào cũng nhận được phản hồi ngay lập tức.",
  "sourceDocTitle": "Chuyên đề 11D, 12D - DD, VH, PL TRONG MT SO.docx (Google Drive)"
},
{
  "id": "Q-TIN-11D12D-MC-07",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-dao-duc-phap-luat-so",
  "topicName": "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
  "chapterName": "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Phương thức nào dưới đây là giao tiếp đồng bộ?",
  "options": [
    {
      "id": "A",
      "content": "Gọi điện thoại."
    },
    {
      "id": "B",
      "content": "Gửi thư điện tử."
    },
    {
      "id": "C",
      "content": "Đăng bài trên diễn đàn."
    },
    {
      "id": "D",
      "content": "Để lại lời nhắn."
    }
  ],
  "correctAnswer": "A",
  "hints": {
    "level1_concept": "Nhớ lại kiến thức về văn hóa ứng xử, phòng chống lừa đảo mạng hoặc ưu/nhược điểm của giao tiếp trực tuyến.",
    "level2_formula": "Xác định từ khóa chính trong câu hỏi (Ví dụ: 'Phishing', 'Văn hóa ứng xử', 'Ưu điểm', 'Quyết định 874/QĐ-BTTTT') để loại trừ các phương án sai.",
    "level3_steps": "Đối chiếu nội dung câu hỏi với chuẩn mực đạo đức, quy tắc pháp luật và bài học Chuyên đề 11D, 12D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án A. Gọi điện thoại (hoặc gọi video) yêu cầu hai bên cùng tham gia tương tác trực tiếp tại một thời điểm nên là giao tiếp đồng bộ.",
  "sourceDocTitle": "Chuyên đề 11D, 12D - DD, VH, PL TRONG MT SO.docx (Google Drive)"
},
{
  "id": "Q-TIN-11D12D-MC-08",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-dao-duc-phap-luat-so",
  "topicName": "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
  "chapterName": "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Nguy cơ nào dưới đây liên quan đến bảo mật và quyền riêng tư trong giao tiếp mạng?",
  "options": [
    {
      "id": "A",
      "content": "Tiết kiệm chi phí."
    },
    {
      "id": "B",
      "content": "Có thể bị lộ thông tin cá nhân."
    },
    {
      "id": "C",
      "content": "Tăng khả năng tương tác."
    },
    {
      "id": "D",
      "content": "Kết nối bạn bè nhanh chóng."
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nhớ lại kiến thức về văn hóa ứng xử, phòng chống lừa đảo mạng hoặc ưu/nhược điểm của giao tiếp trực tuyến.",
    "level2_formula": "Xác định từ khóa chính trong câu hỏi (Ví dụ: 'Phishing', 'Văn hóa ứng xử', 'Ưu điểm', 'Quyết định 874/QĐ-BTTTT') để loại trừ các phương án sai.",
    "level3_steps": "Đối chiếu nội dung câu hỏi với chuẩn mực đạo đức, quy tắc pháp luật và bài học Chuyên đề 11D, 12D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án B. Nguy cơ lớn về bảo mật và quyền riêng tư là việc bị lộ hoặc bị đánh cắp thông tin cá nhân, mật khẩu tài khoản.",
  "sourceDocTitle": "Chuyên đề 11D, 12D - DD, VH, PL TRONG MT SO.docx (Google Drive)"
},
{
  "id": "Q-TIN-11D12D-MC-09",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-dao-duc-phap-luat-so",
  "topicName": "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
  "chapterName": "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Phương án nào dưới đây KHÔNG phải là ứng xử nhân văn trên không gian mạng?",
  "options": [
    {
      "id": "A",
      "content": "Cảm thông với người khác."
    },
    {
      "id": "B",
      "content": "Chỉ trích gay gắt với bất kể ai khi họ làm sai."
    },
    {
      "id": "C",
      "content": "Tôn trọng quyền riêng tư của người khác."
    },
    {
      "id": "D",
      "content": "Sử dụng ngôn ngữ đúng mực."
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nhớ lại kiến thức về văn hóa ứng xử, phòng chống lừa đảo mạng hoặc ưu/nhược điểm của giao tiếp trực tuyến.",
    "level2_formula": "Xác định từ khóa chính trong câu hỏi (Ví dụ: 'Phishing', 'Văn hóa ứng xử', 'Ưu điểm', 'Quyết định 874/QĐ-BTTTT') để loại trừ các phương án sai.",
    "level3_steps": "Đối chiếu nội dung câu hỏi với chuẩn mực đạo đức, quy tắc pháp luật và bài học Chuyên đề 11D, 12D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án B. Chỉ trích gay gắt, mạt sát người khác là hành vi thiếu văn hóa, không thể hiện tính nhân văn trong không gian mạng.",
  "sourceDocTitle": "Chuyên đề 11D, 12D - DD, VH, PL TRONG MT SO.docx (Google Drive)"
},
{
  "id": "Q-TIN-11D12D-MC-10",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-dao-duc-phap-luat-so",
  "topicName": "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
  "chapterName": "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Ý nghĩa của ứng xử nhân văn trên không gian mạng là gì?",
  "options": [
    {
      "id": "A",
      "content": "Tăng sự xung đột và hiểu lầm."
    },
    {
      "id": "B",
      "content": "Giảm sự kết nối giữa mọi người."
    },
    {
      "id": "C",
      "content": "Gây ảnh hưởng tiêu cực đến xã hội."
    },
    {
      "id": "D",
      "content": "Góp phần lan tỏa những giá trị nhân văn."
    }
  ],
  "correctAnswer": "D",
  "hints": {
    "level1_concept": "Nhớ lại kiến thức về văn hóa ứng xử, phòng chống lừa đảo mạng hoặc ưu/nhược điểm của giao tiếp trực tuyến.",
    "level2_formula": "Xác định từ khóa chính trong câu hỏi (Ví dụ: 'Phishing', 'Văn hóa ứng xử', 'Ưu điểm', 'Quyết định 874/QĐ-BTTTT') để loại trừ các phương án sai.",
    "level3_steps": "Đối chiếu nội dung câu hỏi với chuẩn mực đạo đức, quy tắc pháp luật và bài học Chuyên đề 11D, 12D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án D. Ứng xử nhân văn giúp tạo ra hiệu ứng tích cực, xây dựng môi trường mạng lành mạnh và lan tỏa các giá trị nhân văn tốt đẹp.",
  "sourceDocTitle": "Chuyên đề 11D, 12D - DD, VH, PL TRONG MT SO.docx (Google Drive)"
},
{
  "id": "Q-TIN-11D12D-MC-11",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-dao-duc-phap-luat-so",
  "topicName": "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
  "chapterName": "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Hình thức lừa đảo lấy cắp thông tin cá nhân bằng các trang web giả là hình thức lừa đảo nào dưới đây?",
  "options": [
    {
      "id": "A",
      "content": "Lừa đảo qua mạng xã hội."
    },
    {
      "id": "B",
      "content": "Lừa đảo tài chính."
    },
    {
      "id": "C",
      "content": "Lừa đảo đầu tư."
    },
    {
      "id": "D",
      "content": "Lừa đảo phishing."
    }
  ],
  "correctAnswer": "D",
  "hints": {
    "level1_concept": "Nhớ lại kiến thức về văn hóa ứng xử, phòng chống lừa đảo mạng hoặc ưu/nhược điểm của giao tiếp trực tuyến.",
    "level2_formula": "Xác định từ khóa chính trong câu hỏi (Ví dụ: 'Phishing', 'Văn hóa ứng xử', 'Ưu điểm', 'Quyết định 874/QĐ-BTTTT') để loại trừ các phương án sai.",
    "level3_steps": "Đối chiếu nội dung câu hỏi với chuẩn mực đạo đức, quy tắc pháp luật và bài học Chuyên đề 11D, 12D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án D. Lừa đảo phishing là phương thức tấn công giả mạo các trang web chính thống để chiếm đoạt thông tin đăng nhập, dữ liệu thẻ tín dụng.",
  "sourceDocTitle": "Chuyên đề 11D, 12D - DD, VH, PL TRONG MT SO.docx (Google Drive)"
},
{
  "id": "Q-TIN-11D12D-MC-12",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-dao-duc-phap-luat-so",
  "topicName": "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
  "chapterName": "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Dấu hiệu nào sau đây cho thấy một trang web có thể không an toàn?",
  "options": [
    {
      "id": "A",
      "content": "Địa chỉ trang web bắt đầu bằng https://."
    },
    {
      "id": "B",
      "content": "Có nhiều quảng cáo không liên quan và tên miền có lỗi chính tả."
    },
    {
      "id": "C",
      "content": "Trang web có chứng chỉ số hợp lệ."
    },
    {
      "id": "D",
      "content": "Trang web có thông tin tác giả rõ ràng."
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nhớ lại kiến thức về văn hóa ứng xử, phòng chống lừa đảo mạng hoặc ưu/nhược điểm của giao tiếp trực tuyến.",
    "level2_formula": "Xác định từ khóa chính trong câu hỏi (Ví dụ: 'Phishing', 'Văn hóa ứng xử', 'Ưu điểm', 'Quyết định 874/QĐ-BTTTT') để loại trừ các phương án sai.",
    "level3_steps": "Đối chiếu nội dung câu hỏi với chuẩn mực đạo đức, quy tắc pháp luật và bài học Chuyên đề 11D, 12D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án B. Trang web tràn ngập quảng cáo, biểu tượng cảnh báo bảo mật hoặc tên miền sai lệch chính tả là dấu hiệu điển hình của trang web lừa đảo, độc hại.",
  "sourceDocTitle": "Chuyên đề 11D, 12D - DD, VH, PL TRONG MT SO.docx (Google Drive)"
},
{
  "id": "Q-TIN-11D12D-MC-13",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-dao-duc-phap-luat-so",
  "topicName": "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
  "chapterName": "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Điều gì nên được thực hiện khi phát hiện một trang web lừa đảo?",
  "options": [
    {
      "id": "A",
      "content": "Chia sẻ cho nhiều người cùng biết mà không cảnh báo."
    },
    {
      "id": "B",
      "content": "Cung cấp thông tin giả để thử nghiệm."
    },
    {
      "id": "C",
      "content": "Báo cáo trang web cho cơ quan chức năng hoặc tổ chức bảo vệ người tiêu dùng."
    },
    {
      "id": "D",
      "content": "Tiếp tục truy cập và sử dụng dịch vụ bình thường."
    }
  ],
  "correctAnswer": "C",
  "hints": {
    "level1_concept": "Nhớ lại kiến thức về văn hóa ứng xử, phòng chống lừa đảo mạng hoặc ưu/nhược điểm của giao tiếp trực tuyến.",
    "level2_formula": "Xác định từ khóa chính trong câu hỏi (Ví dụ: 'Phishing', 'Văn hóa ứng xử', 'Ưu điểm', 'Quyết định 874/QĐ-BTTTT') để loại trừ các phương án sai.",
    "level3_steps": "Đối chiếu nội dung câu hỏi với chuẩn mực đạo đức, quy tắc pháp luật và bài học Chuyên đề 11D, 12D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án C. Cần báo cáo cho cơ quan chức năng, cơ sở quản lý an ninh mạng hoặc tính năng báo cáo lừa đảo của trình duyệt để ngăn chặn trang web đó tiếp tục hoạt động.",
  "sourceDocTitle": "Chuyên đề 11D, 12D - DD, VH, PL TRONG MT SO.docx (Google Drive)"
},
{
  "id": "Q-TIN-11D12D-MC-14",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-dao-duc-phap-luat-so",
  "topicName": "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
  "chapterName": "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Hình thức nào sau đây KHÔNG phải là giao tiếp trong không gian mạng?",
  "options": [
    {
      "id": "A",
      "content": "Gửi thư điện tử (email)."
    },
    {
      "id": "B",
      "content": "Gửi thư tay qua bưu điện."
    },
    {
      "id": "C",
      "content": "Nhắn tin qua ứng dụng Zalo."
    },
    {
      "id": "D",
      "content": "Họp trực tuyến qua Zoom."
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nhớ lại kiến thức về văn hóa ứng xử, phòng chống lừa đảo mạng hoặc ưu/nhược điểm của giao tiếp trực tuyến.",
    "level2_formula": "Xác định từ khóa chính trong câu hỏi (Ví dụ: 'Phishing', 'Văn hóa ứng xử', 'Ưu điểm', 'Quyết định 874/QĐ-BTTTT') để loại trừ các phương án sai.",
    "level3_steps": "Đối chiếu nội dung câu hỏi với chuẩn mực đạo đức, quy tắc pháp luật và bài học Chuyên đề 11D, 12D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án B. Gửi thư tay qua bưu điện là hình thức chuyển phát vật lý truyền thống, không sử dụng công nghệ số và mạng máy tính.",
  "sourceDocTitle": "Chuyên đề 11D, 12D - DD, VH, PL TRONG MT SO.docx (Google Drive)"
},
{
  "id": "Q-TIN-11D12D-MC-15",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-dao-duc-phap-luat-so",
  "topicName": "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
  "chapterName": "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Đặc điểm nào sau đây KHÔNG đúng về giao tiếp trực tuyến?",
  "options": [
    {
      "id": "A",
      "content": "Có thể thực hiện mọi lúc, mọi nơi khi có mạng Internet."
    },
    {
      "id": "B",
      "content": "Hỗ trợ nhiều phương thức: văn bản, âm thanh, hình ảnh, video."
    },
    {
      "id": "C",
      "content": "Chỉ có thể thực hiện qua máy tính."
    },
    {
      "id": "D",
      "content": "Có thể kết nối nhiều người ở xa nhau cùng lúc."
    }
  ],
  "correctAnswer": "C",
  "hints": {
    "level1_concept": "Nhớ lại kiến thức về văn hóa ứng xử, phòng chống lừa đảo mạng hoặc ưu/nhược điểm của giao tiếp trực tuyến.",
    "level2_formula": "Xác định từ khóa chính trong câu hỏi (Ví dụ: 'Phishing', 'Văn hóa ứng xử', 'Ưu điểm', 'Quyết định 874/QĐ-BTTTT') để loại trừ các phương án sai.",
    "level3_steps": "Đối chiếu nội dung câu hỏi với chuẩn mực đạo đức, quy tắc pháp luật và bài học Chuyên đề 11D, 12D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án C. Giao tiếp trực tuyến hiện nay có thể thực hiện trên điện thoại thông minh, máy tính bảng, đồng hồ thông minh và tivi thông minh, không chỉ giới hạn ở máy tính.",
  "sourceDocTitle": "Chuyên đề 11D, 12D - DD, VH, PL TRONG MT SO.docx (Google Drive)"
},
{
  "id": "Q-TIN-11D12D-MC-16",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-dao-duc-phap-luat-so",
  "topicName": "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
  "chapterName": "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Ứng dụng nào dưới đây được biết đến như một nền tảng mạng xã hội?",
  "options": [
    {
      "id": "A",
      "content": "WhatsApp"
    },
    {
      "id": "B",
      "content": "Twitter (X)"
    },
    {
      "id": "C",
      "content": "Google Drive"
    },
    {
      "id": "D",
      "content": "Microsoft Word"
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nhớ lại kiến thức về văn hóa ứng xử, phòng chống lừa đảo mạng hoặc ưu/nhược điểm của giao tiếp trực tuyến.",
    "level2_formula": "Xác định từ khóa chính trong câu hỏi (Ví dụ: 'Phishing', 'Văn hóa ứng xử', 'Ưu điểm', 'Quyết định 874/QĐ-BTTTT') để loại trừ các phương án sai.",
    "level3_steps": "Đối chiếu nội dung câu hỏi với chuẩn mực đạo đức, quy tắc pháp luật và bài học Chuyên đề 11D, 12D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án B. Twitter (nay là X) là một trong những nền tảng mạng xã hội phổ biến nhất thế giới.",
  "sourceDocTitle": "Chuyên đề 11D, 12D - DD, VH, PL TRONG MT SO.docx (Google Drive)"
},
{
  "id": "Q-TIN-11D12D-MC-17",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-dao-duc-phap-luat-so",
  "topicName": "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
  "chapterName": "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Phương án nào dưới đây đúng khi nói về ưu điểm của giao tiếp trong không gian mạng?",
  "options": [
    {
      "id": "A",
      "content": "Giúp tiết kiệm thời gian di chuyển."
    },
    {
      "id": "B",
      "content": "Chỉ cho phép giao tiếp một chiều."
    },
    {
      "id": "C",
      "content": "Giúp người dùng dễ dàng kết nối với nhau."
    },
    {
      "id": "D",
      "content": "Không cần thiết bị công nghệ để giao tiếp."
    }
  ],
  "correctAnswer": "C",
  "hints": {
    "level1_concept": "Nhớ lại kiến thức về văn hóa ứng xử, phòng chống lừa đảo mạng hoặc ưu/nhược điểm của giao tiếp trực tuyến.",
    "level2_formula": "Xác định từ khóa chính trong câu hỏi (Ví dụ: 'Phishing', 'Văn hóa ứng xử', 'Ưu điểm', 'Quyết định 874/QĐ-BTTTT') để loại trừ các phương án sai.",
    "level3_steps": "Đối chiếu nội dung câu hỏi với chuẩn mực đạo đức, quy tắc pháp luật và bài học Chuyên đề 11D, 12D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án C. Ưu điểm nổi bật của không gian mạng là giúp mọi người dễ dàng kết nối, tương tác và mở rộng mối quan hệ xã hội bất chấp khoảng cách.",
  "sourceDocTitle": "Chuyên đề 11D, 12D - DD, VH, PL TRONG MT SO.docx (Google Drive)"
},
{
  "id": "Q-TIN-11D12D-MC-18",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-dao-duc-phap-luat-so",
  "topicName": "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
  "chapterName": "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Dịch vụ nào sau đây KHÔNG phải là một ứng dụng nhắn tin?",
  "options": [
    {
      "id": "A",
      "content": "WhatsApp."
    },
    {
      "id": "B",
      "content": "Telegram."
    },
    {
      "id": "C",
      "content": "Snapchat."
    },
    {
      "id": "D",
      "content": "Google Drive."
    }
  ],
  "correctAnswer": "D",
  "hints": {
    "level1_concept": "Nhớ lại kiến thức về văn hóa ứng xử, phòng chống lừa đảo mạng hoặc ưu/nhược điểm của giao tiếp trực tuyến.",
    "level2_formula": "Xác định từ khóa chính trong câu hỏi (Ví dụ: 'Phishing', 'Văn hóa ứng xử', 'Ưu điểm', 'Quyết định 874/QĐ-BTTTT') để loại trừ các phương án sai.",
    "level3_steps": "Đối chiếu nội dung câu hỏi với chuẩn mực đạo đức, quy tắc pháp luật và bài học Chuyên đề 11D, 12D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án D. Google Drive là dịch vụ lưu trữ và đồng bộ dữ liệu đám mây, không phải là ứng dụng nhắn tin tức thời (chat app).",
  "sourceDocTitle": "Chuyên đề 11D, 12D - DD, VH, PL TRONG MT SO.docx (Google Drive)"
},
{
  "id": "Q-TIN-11D12D-MC-19",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-dao-duc-phap-luat-so",
  "topicName": "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
  "chapterName": "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Phương án nào dưới đây là nhược điểm của giao tiếp trong không gian mạng?",
  "options": [
    {
      "id": "A",
      "content": "Trao đổi trong không gian mạng có độ trễ nhất định do đường truyền và nền tảng công nghệ."
    },
    {
      "id": "B",
      "content": "Không thể diễn ra mọi lúc, mọi nơi, chỉ cho phép số lượng nhỏ người dùng cùng tham gia một lúc."
    },
    {
      "id": "C",
      "content": "Khó mở rộng khả năng tương tác, kết nối nhiều người có cùng sở thích, quan điểm hoặc nhu cầu."
    },
    {
      "id": "D",
      "content": "Phương tiện giao tiếp không đa dạng, phụ thuộc khoảng cách địa lí của các thiết bị."
    }
  ],
  "correctAnswer": "A",
  "hints": {
    "level1_concept": "Nhớ lại kiến thức về văn hóa ứng xử, phòng chống lừa đảo mạng hoặc ưu/nhược điểm của giao tiếp trực tuyến.",
    "level2_formula": "Xác định từ khóa chính trong câu hỏi (Ví dụ: 'Phishing', 'Văn hóa ứng xử', 'Ưu điểm', 'Quyết định 874/QĐ-BTTTT') để loại trừ các phương án sai.",
    "level3_steps": "Đối chiếu nội dung câu hỏi với chuẩn mực đạo đức, quy tắc pháp luật và bài học Chuyên đề 11D, 12D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án A. Độ trễ kỹ thuật của đường truyền, mất mạng hoặc lỗi máy chủ là một hạn chế thường gặp của giao tiếp mạng.",
  "sourceDocTitle": "Chuyên đề 11D, 12D - DD, VH, PL TRONG MT SO.docx (Google Drive)"
},
{
  "id": "Q-TIN-11D12D-MC-20",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-dao-duc-phap-luat-so",
  "topicName": "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
  "chapterName": "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Nguyên tắc nào sau đây là cần thiết khi giao tiếp trong không gian mạng để đảm bảo an toàn thông tin?",
  "options": [
    {
      "id": "A",
      "content": "Chia sẻ mật khẩu với bạn bè thân thiết để nhờ trợ giúp."
    },
    {
      "id": "B",
      "content": "Đăng tải địa chỉ nhà và số điện thoại lên công khai trang cá nhân."
    },
    {
      "id": "C",
      "content": "Luôn kiểm tra nguồn gốc thông tin trước khi chia sẻ."
    },
    {
      "id": "D",
      "content": "Nhấp vào tất cả các liên kết được gửi qua tin nhắn từ người lạ."
    }
  ],
  "correctAnswer": "C",
  "hints": {
    "level1_concept": "Nhớ lại kiến thức về văn hóa ứng xử, phòng chống lừa đảo mạng hoặc ưu/nhược điểm của giao tiếp trực tuyến.",
    "level2_formula": "Xác định từ khóa chính trong câu hỏi (Ví dụ: 'Phishing', 'Văn hóa ứng xử', 'Ưu điểm', 'Quyết định 874/QĐ-BTTTT') để loại trừ các phương án sai.",
    "level3_steps": "Đối chiếu nội dung câu hỏi với chuẩn mực đạo đức, quy tắc pháp luật và bài học Chuyên đề 11D, 12D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án C. Kiểm tra và xác minh nguồn gốc thông tin giúp phòng ngừa lừa đảo, phát tán mã độc và tin giả trên không gian mạng.",
  "sourceDocTitle": "Chuyên đề 11D, 12D - DD, VH, PL TRONG MT SO.docx (Google Drive)"
},
{
  "id": "Q-TIN-11D12D-MC-21",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-dao-duc-phap-luat-so",
  "topicName": "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
  "chapterName": "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Yếu tố nào dưới đây có thể gây ra hiểu lầm trong giao tiếp trực tuyến?",
  "options": [
    {
      "id": "A",
      "content": "Thiếu ngữ điệu và biểu cảm khuôn mặt trong văn bản."
    },
    {
      "id": "B",
      "content": "Thông điệp quá rõ ràng và chi tiết."
    },
    {
      "id": "C",
      "content": "Sử dụng đầy đủ các biểu tượng cảm xúc (emoji)."
    },
    {
      "id": "D",
      "content": "Cuộc gọi video có hình ảnh sắc nét."
    }
  ],
  "correctAnswer": "A",
  "hints": {
    "level1_concept": "Nhớ lại kiến thức về văn hóa ứng xử, phòng chống lừa đảo mạng hoặc ưu/nhược điểm của giao tiếp trực tuyến.",
    "level2_formula": "Xác định từ khóa chính trong câu hỏi (Ví dụ: 'Phishing', 'Văn hóa ứng xử', 'Ưu điểm', 'Quyết định 874/QĐ-BTTTT') để loại trừ các phương án sai.",
    "level3_steps": "Đối chiếu nội dung câu hỏi với chuẩn mực đạo đức, quy tắc pháp luật và bài học Chuyên đề 11D, 12D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án A. Do thiếu các tín hiệu phi ngôn ngữ (ngữ điệu giọng nói, ánh mắt, nụ cười), tin nhắn văn bản rất dễ bị người đọc suy diễn sai lệch cảm xúc.",
  "sourceDocTitle": "Chuyên đề 11D, 12D - DD, VH, PL TRONG MT SO.docx (Google Drive)"
},
{
  "id": "Q-TIN-11D12D-MC-22",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-dao-duc-phap-luat-so",
  "topicName": "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
  "chapterName": "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Yếu tố nào dưới đây KHÔNG làm giảm hiệu quả của giao tiếp trực tuyến?",
  "options": [
    {
      "id": "A",
      "content": "Sự phân tán bởi các thông báo mạng xã hội."
    },
    {
      "id": "B",
      "content": "Sự rõ ràng và mạch lạc trong thông điệp."
    },
    {
      "id": "C",
      "content": "Đường truyền mạng Internet không ổn định."
    },
    {
      "id": "D",
      "content": "Sử dụng từ viết tắt tùy tiện, sai ngữ pháp."
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nhớ lại kiến thức về văn hóa ứng xử, phòng chống lừa đảo mạng hoặc ưu/nhược điểm của giao tiếp trực tuyến.",
    "level2_formula": "Xác định từ khóa chính trong câu hỏi (Ví dụ: 'Phishing', 'Văn hóa ứng xử', 'Ưu điểm', 'Quyết định 874/QĐ-BTTTT') để loại trừ các phương án sai.",
    "level3_steps": "Đối chiếu nội dung câu hỏi với chuẩn mực đạo đức, quy tắc pháp luật và bài học Chuyên đề 11D, 12D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án B. Thông điệp được trình bày rõ ràng, mạch lạc sẽ nâng cao hiệu quả giao tiếp chứ không làm giảm hiệu quả.",
  "sourceDocTitle": "Chuyên đề 11D, 12D - DD, VH, PL TRONG MT SO.docx (Google Drive)"
},
{
  "id": "Q-TIN-11D12D-MC-23",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-dao-duc-phap-luat-so",
  "topicName": "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
  "chapterName": "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Thuật ngữ “Phishing” dùng để nói về hành vi nào sau đây?",
  "options": [
    {
      "id": "A",
      "content": "Lừa đảo tài sản ngoài đời thực."
    },
    {
      "id": "B",
      "content": "Lấy cắp thông tin cá nhân trên mạng."
    },
    {
      "id": "C",
      "content": "Lừa đảo tình cảm qua thư từ."
    },
    {
      "id": "D",
      "content": "Lừa đảo qua mạng xã hội đơn thuần."
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nhớ lại kiến thức về văn hóa ứng xử, phòng chống lừa đảo mạng hoặc ưu/nhược điểm của giao tiếp trực tuyến.",
    "level2_formula": "Xác định từ khóa chính trong câu hỏi (Ví dụ: 'Phishing', 'Văn hóa ứng xử', 'Ưu điểm', 'Quyết định 874/QĐ-BTTTT') để loại trừ các phương án sai.",
    "level3_steps": "Đối chiếu nội dung câu hỏi với chuẩn mực đạo đức, quy tắc pháp luật và bài học Chuyên đề 11D, 12D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án B. Bản chất của kỹ thuật Phishing là dụ dỗ nạn nhân cung cấp thông tin nhạy cảm (tài khoản, mật khẩu, mã OTP) trên các giao diện giả mạo.",
  "sourceDocTitle": "Chuyên đề 11D, 12D - DD, VH, PL TRONG MT SO.docx (Google Drive)"
},
{
  "id": "Q-TIN-11D12D-MC-24",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-dao-duc-phap-luat-so",
  "topicName": "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
  "chapterName": "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Dấu hiệu nào sau đây giúp nhận biết lừa đảo qua mạng?",
  "options": [
    {
      "id": "A",
      "content": "Thông tin liên hệ rõ ràng, minh bạch."
    },
    {
      "id": "B",
      "content": "Địa chỉ email chính thức từ tên miền doanh nghiệp."
    },
    {
      "id": "C",
      "content": "Tên miền dễ nhớ, đúng quy chuẩn."
    },
    {
      "id": "D",
      "content": "Lỗi chính tả trong tên miền hoặc trong nội dung tin nhắn."
    }
  ],
  "correctAnswer": "D",
  "hints": {
    "level1_concept": "Nhớ lại kiến thức về văn hóa ứng xử, phòng chống lừa đảo mạng hoặc ưu/nhược điểm của giao tiếp trực tuyến.",
    "level2_formula": "Xác định từ khóa chính trong câu hỏi (Ví dụ: 'Phishing', 'Văn hóa ứng xử', 'Ưu điểm', 'Quyết định 874/QĐ-BTTTT') để loại trừ các phương án sai.",
    "level3_steps": "Đối chiếu nội dung câu hỏi với chuẩn mực đạo đức, quy tắc pháp luật và bài học Chuyên đề 11D, 12D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án D. Kẻ lừa đảo thường dùng các tên miền gần giống (ví dụ thay chữ 'l' bằng số '1') hoặc văn bản có lỗi dịch thuật, lỗi chính tả sơ sài.",
  "sourceDocTitle": "Chuyên đề 11D, 12D - DD, VH, PL TRONG MT SO.docx (Google Drive)"
},
{
  "id": "Q-TIN-11D12D-MC-25",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-dao-duc-phap-luat-so",
  "topicName": "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
  "chapterName": "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Hình thức lừa đảo nào thường yêu cầu người dùng trả phí vận chuyển để nhận quà hoặc giải thưởng?",
  "options": [
    {
      "id": "A",
      "content": "Lừa đảo mua sắm trực tuyến."
    },
    {
      "id": "B",
      "content": "Lừa đảo thẻ tín dụng."
    },
    {
      "id": "C",
      "content": "Lừa đảo đầu tư sinh lời."
    },
    {
      "id": "D",
      "content": "Lừa đảo quà tặng (hoặc giải thưởng)."
    }
  ],
  "correctAnswer": "D",
  "hints": {
    "level1_concept": "Nhớ lại kiến thức về văn hóa ứng xử, phòng chống lừa đảo mạng hoặc ưu/nhược điểm của giao tiếp trực tuyến.",
    "level2_formula": "Xác định từ khóa chính trong câu hỏi (Ví dụ: 'Phishing', 'Văn hóa ứng xử', 'Ưu điểm', 'Quyết định 874/QĐ-BTTTT') để loại trừ các phương án sai.",
    "level3_steps": "Đối chiếu nội dung câu hỏi với chuẩn mực đạo đức, quy tắc pháp luật và bài học Chuyên đề 11D, 12D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án D. Chiêu trò thông báo trúng thưởng hoặc tặng quà miễn phí nhưng yêu cầu trả trước tiền phí đóng gói/vận chuyển rồi chiếm đoạt là hình thức lừa đảo quà tặng phổ biến.",
  "sourceDocTitle": "Chuyên đề 11D, 12D - DD, VH, PL TRONG MT SO.docx (Google Drive)"
},
{
  "id": "Q-TIN-11D12D-MC-26",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-dao-duc-phap-luat-so",
  "topicName": "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
  "chapterName": "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Hình thức tạo tài khoản giả mạo các gian hàng trực tuyến uy tín là biểu hiện của hình thức lừa đảo nào?",
  "options": [
    {
      "id": "A",
      "content": "Lừa đảo trúng thưởng tặng quà."
    },
    {
      "id": "B",
      "content": "Lừa đảo chiếm đoạt tiền đặt cọc hoặc bán hàng giả."
    },
    {
      "id": "C",
      "content": "Lừa đảo để đánh cắp thông tin cá nhân."
    },
    {
      "id": "D",
      "content": "Lừa đảo từ thiện."
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nhớ lại kiến thức về văn hóa ứng xử, phòng chống lừa đảo mạng hoặc ưu/nhược điểm của giao tiếp trực tuyến.",
    "level2_formula": "Xác định từ khóa chính trong câu hỏi (Ví dụ: 'Phishing', 'Văn hóa ứng xử', 'Ưu điểm', 'Quyết định 874/QĐ-BTTTT') để loại trừ các phương án sai.",
    "level3_steps": "Đối chiếu nội dung câu hỏi với chuẩn mực đạo đức, quy tắc pháp luật và bài học Chuyên đề 11D, 12D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án B. Theo mục 1.1 tóm tắt lý thuyết, tạo tài khoản giả mạo gian hàng uy tín là phương thức lừa đảo nhằm chiếm đoạt tiền đặt cọc hoặc bán hàng giả/hàng kém chất lượng.",
  "sourceDocTitle": "Chuyên đề 11D, 12D - DD, VH, PL TRONG MT SO.docx (Google Drive)"
},
{
  "id": "Q-TIN-11D12D-MC-27",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-dao-duc-phap-luat-so",
  "topicName": "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
  "chapterName": "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Tên miền lừa đảo thường có đặc điểm nào sau đây?",
  "options": [
    {
      "id": "A",
      "content": "Tên miền lừa đảo thường có tên miền ngắn, dễ nhầm lẫn, đuôi lạ và thiếu thông tin bảo mật."
    },
    {
      "id": "B",
      "content": "Tên miền lừa đảo thường có đuôi phổ biến như .edu hoặc .gov."
    },
    {
      "id": "C",
      "content": "Tên miền lừa đảo thường có tên miền dài và rất khó đọc."
    },
    {
      "id": "D",
      "content": "Tên miền lừa đảo thường có tên miền giống hệt tên miền của các trang web chính thức."
    }
  ],
  "correctAnswer": "A",
  "hints": {
    "level1_concept": "Nhớ lại kiến thức về văn hóa ứng xử, phòng chống lừa đảo mạng hoặc ưu/nhược điểm của giao tiếp trực tuyến.",
    "level2_formula": "Xác định từ khóa chính trong câu hỏi (Ví dụ: 'Phishing', 'Văn hóa ứng xử', 'Ưu điểm', 'Quyết định 874/QĐ-BTTTT') để loại trừ các phương án sai.",
    "level3_steps": "Đối chiếu nội dung câu hỏi với chuẩn mực đạo đức, quy tắc pháp luật và bài học Chuyên đề 11D, 12D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án A. Kẻ lừa đảo thường dùng các đuôi miền lạ, viết biến tấu chữ cái dễ gây nhầm lẫn và không có chứng chỉ bảo mật HTTPS.",
  "sourceDocTitle": "Chuyên đề 11D, 12D - DD, VH, PL TRONG MT SO.docx (Google Drive)"
},
{
  "id": "Q-TIN-11D12D-MC-28",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-dao-duc-phap-luat-so",
  "topicName": "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
  "chapterName": "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Phương án nào dưới đây mô tả đúng về giao tiếp trong không gian mạng?",
  "options": [
    {
      "id": "A",
      "content": "Là hình thức giao tiếp sử dụng công cụ công nghệ số."
    },
    {
      "id": "B",
      "content": "Là hình thức giao tiếp trực tiếp mặt đối mặt."
    },
    {
      "id": "C",
      "content": "Là hình thức giao tiếp sử dụng ngôn ngữ cơ thể là chủ yếu."
    },
    {
      "id": "D",
      "content": "Là hình thức giao tiếp trực tiếp qua thư từ bưu điện."
    }
  ],
  "correctAnswer": "A",
  "hints": {
    "level1_concept": "Nhớ lại kiến thức về văn hóa ứng xử, phòng chống lừa đảo mạng hoặc ưu/nhược điểm của giao tiếp trực tuyến.",
    "level2_formula": "Xác định từ khóa chính trong câu hỏi (Ví dụ: 'Phishing', 'Văn hóa ứng xử', 'Ưu điểm', 'Quyết định 874/QĐ-BTTTT') để loại trừ các phương án sai.",
    "level3_steps": "Đối chiếu nội dung câu hỏi với chuẩn mực đạo đức, quy tắc pháp luật và bài học Chuyên đề 11D, 12D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án A. Giao tiếp trong không gian mạng là quá trình trao đổi thông tin được thực hiện thông qua các thiết bị và công cụ công nghệ kỹ thuật số kết nối mạng.",
  "sourceDocTitle": "Chuyên đề 11D, 12D - DD, VH, PL TRONG MT SO.docx (Google Drive)"
},
{
  "id": "Q-TIN-11D12D-MC-29",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-dao-duc-phap-luat-so",
  "topicName": "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
  "chapterName": "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Dịch vụ nào sau đây KHÔNG phải dịch vụ giao tiếp trong không gian mạng?",
  "options": [
    {
      "id": "A",
      "content": "Dịch vụ thư điện tử."
    },
    {
      "id": "B",
      "content": "Dịch vụ mạng xã hội Facebook."
    },
    {
      "id": "C",
      "content": "Dịch vụ \"bác sĩ gia đình\" chăm sóc sức khỏe tại nhà."
    },
    {
      "id": "D",
      "content": "Dịch vụ nhắn tin trực tuyến Zalo."
    }
  ],
  "correctAnswer": "C",
  "hints": {
    "level1_concept": "Nhớ lại kiến thức về văn hóa ứng xử, phòng chống lừa đảo mạng hoặc ưu/nhược điểm của giao tiếp trực tuyến.",
    "level2_formula": "Xác định từ khóa chính trong câu hỏi (Ví dụ: 'Phishing', 'Văn hóa ứng xử', 'Ưu điểm', 'Quyết định 874/QĐ-BTTTT') để loại trừ các phương án sai.",
    "level3_steps": "Đối chiếu nội dung câu hỏi với chuẩn mực đạo đức, quy tắc pháp luật và bài học Chuyên đề 11D, 12D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án C. Bác sĩ đến tận nhà khám bệnh trực tiếp là dịch vụ y tế truyền thống trong đời thực, không phải dịch vụ giao tiếp mạng.",
  "sourceDocTitle": "Chuyên đề 11D, 12D - DD, VH, PL TRONG MT SO.docx (Google Drive)"
},
{
  "id": "Q-TIN-11D12D-MC-30",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-dao-duc-phap-luat-so",
  "topicName": "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
  "chapterName": "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Phương án nào dưới đây KHÔNG phải là nhược điểm của giao tiếp trong không gian mạng?",
  "options": [
    {
      "id": "A",
      "content": "Giới hạn về thời gian và địa điểm."
    },
    {
      "id": "B",
      "content": "Có khả năng bị xâm phạm quyền riêng tư."
    },
    {
      "id": "C",
      "content": "Tạo cơ hội kết nối nhiều người có chung sở thích."
    },
    {
      "id": "D",
      "content": "Khó xác định chính xác danh tính người giao tiếp."
    }
  ],
  "correctAnswer": "C",
  "hints": {
    "level1_concept": "Nhớ lại kiến thức về văn hóa ứng xử, phòng chống lừa đảo mạng hoặc ưu/nhược điểm của giao tiếp trực tuyến.",
    "level2_formula": "Xác định từ khóa chính trong câu hỏi (Ví dụ: 'Phishing', 'Văn hóa ứng xử', 'Ưu điểm', 'Quyết định 874/QĐ-BTTTT') để loại trừ các phương án sai.",
    "level3_steps": "Đối chiếu nội dung câu hỏi với chuẩn mực đạo đức, quy tắc pháp luật và bài học Chuyên đề 11D, 12D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án C. Tạo cơ hội kết nối những người có chung sở thích là ƯU ĐIỂM lớn của mạng xã hội và không gian mạng, không phải nhược điểm.",
  "sourceDocTitle": "Chuyên đề 11D, 12D - DD, VH, PL TRONG MT SO.docx (Google Drive)"
},
{
  "id": "Q-TIN-11D12D-MC-31",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-dao-duc-phap-luat-so",
  "topicName": "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
  "chapterName": "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Phương án nào dưới đây đúng khi nói về ưu điểm của giao tiếp trong không gian mạng?",
  "options": [
    {
      "id": "A",
      "content": "Hỗ trợ người khuyết tật dễ dàng giao tiếp."
    },
    {
      "id": "B",
      "content": "Dễ dàng kiểm soát nguồn thông tin."
    },
    {
      "id": "C",
      "content": "Không bị ảnh hưởng bởi các sự cố kĩ thuật đường truyền."
    },
    {
      "id": "D",
      "content": "Có độ tin cậy cao."
    }
  ],
  "correctAnswer": "A",
  "hints": {
    "level1_concept": "Nhớ lại kiến thức về văn hóa ứng xử, phòng chống lừa đảo mạng hoặc ưu/nhược điểm của giao tiếp trực tuyến.",
    "level2_formula": "Xác định từ khóa chính trong câu hỏi (Ví dụ: 'Phishing', 'Văn hóa ứng xử', 'Ưu điểm', 'Quyết định 874/QĐ-BTTTT') để loại trừ các phương án sai.",
    "level3_steps": "Đối chiếu nội dung câu hỏi với chuẩn mực đạo đức, quy tắc pháp luật và bài học Chuyên đề 11D, 12D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án A. Các công cụ chuyển văn bản thành giọng nói, phụ đề tự động trên không gian mạng giúp người khuyết tật hòa nhập và giao tiếp thuận lợi hơn.",
  "sourceDocTitle": "Chuyên đề 11D, 12D - DD, VH, PL TRONG MT SO.docx (Google Drive)"
},
{
  "id": "Q-TIN-11D12D-MC-32",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-dao-duc-phap-luat-so",
  "topicName": "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
  "chapterName": "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Theo Quyết định số 874/QĐ-BTTTT ngày 17 tháng 6 năm 2021, văn bản nào dưới đây được Bộ Thông tin và Truyền thông ban hành có liên quan đến trao đổi thông tin trong không gian mạng?",
  "options": [
    {
      "id": "A",
      "content": "Bộ luật về An ninh mạng."
    },
    {
      "id": "B",
      "content": "Bộ quy tắc ứng xử trên mạng xã hội."
    },
    {
      "id": "C",
      "content": "Bộ quy tắc giao tiếp trên không gian mạng."
    },
    {
      "id": "D",
      "content": "Bộ quy tắc bảo đảm an ninh mạng."
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nhớ lại kiến thức về văn hóa ứng xử, phòng chống lừa đảo mạng hoặc ưu/nhược điểm của giao tiếp trực tuyến.",
    "level2_formula": "Xác định từ khóa chính trong câu hỏi (Ví dụ: 'Phishing', 'Văn hóa ứng xử', 'Ưu điểm', 'Quyết định 874/QĐ-BTTTT') để loại trừ các phương án sai.",
    "level3_steps": "Đối chiếu nội dung câu hỏi với chuẩn mực đạo đức, quy tắc pháp luật và bài học Chuyên đề 11D, 12D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án B. Ngày 17/6/2021, Bộ Thông tin và Truyền thông ban hành Quyết định số 874/QĐ-BTTTT về \"Bộ quy tắc ứng xử trên mạng xã hội\" nhằm xây dựng chuẩn mực đạo đức và văn hóa số.",
  "sourceDocTitle": "Chuyên đề 11D, 12D - DD, VH, PL TRONG MT SO.docx (Google Drive)"
},
{
  "id": "Q-TIN-11D12D-MC-33",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-dao-duc-phap-luat-so",
  "topicName": "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
  "chapterName": "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Vấn đề nào sau đây có thể gặp phải khi thường xuyên chia sẻ thông tin cá nhân của mình để giao tiếp trên không gian mạng?",
  "options": [
    {
      "id": "A",
      "content": "Tạo ra sự phụ thuộc vào giao tiếp trực tiếp."
    },
    {
      "id": "B",
      "content": "Dễ bị hacker tấn công và đánh cắp thông tin cá nhân."
    },
    {
      "id": "C",
      "content": "Giảm tốc độ truyền đạt thông tin trong giao tiếp."
    },
    {
      "id": "D",
      "content": "Hạn chế sự truyền tải cảm xúc và tương tác trực tiếp."
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nhớ lại kiến thức về văn hóa ứng xử, phòng chống lừa đảo mạng hoặc ưu/nhược điểm của giao tiếp trực tuyến.",
    "level2_formula": "Xác định từ khóa chính trong câu hỏi (Ví dụ: 'Phishing', 'Văn hóa ứng xử', 'Ưu điểm', 'Quyết định 874/QĐ-BTTTT') để loại trừ các phương án sai.",
    "level3_steps": "Đối chiếu nội dung câu hỏi với chuẩn mực đạo đức, quy tắc pháp luật và bài học Chuyên đề 11D, 12D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án B. Việc chia sẻ bừa bãi thông tin cá nhân sẽ khiến người dùng trở thành mục tiêu của tin tặc để đánh cắp danh tính, mã OTP, tống tiền hoặc lừa đảo.",
  "sourceDocTitle": "Chuyên đề 11D, 12D - DD, VH, PL TRONG MT SO.docx (Google Drive)"
},
{
  "id": "Q-TIN-11D12D-MC-34",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-dao-duc-phap-luat-so",
  "topicName": "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
  "chapterName": "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Bạn Lan đang sử dụng internet thì thấy một tin nhắn từ bạn thân B: “Cậu cho mình vay 1 triệu mình đưa mẹ đi khám”. Nếu là Lan bạn nên làm gì ngay lúc này?",
  "options": [
    {
      "id": "A",
      "content": "Gọi điện thoại trực tiếp cho B để kiểm tra và xác minh lại thông tin, nếu đúng thì mới hỗ trợ."
    },
    {
      "id": "B",
      "content": "Chuyển tiền ngay cho B để kịp thời giúp đỡ bạn bè."
    },
    {
      "id": "C",
      "content": "Không quan tâm và chặn tin nhắn của B ngay lập tức."
    },
    {
      "id": "D",
      "content": "Đi hỏi vay người khác để chuyển tiền giúp bạn."
    }
  ],
  "correctAnswer": "A",
  "hints": {
    "level1_concept": "Nhớ lại kiến thức về văn hóa ứng xử, phòng chống lừa đảo mạng hoặc ưu/nhược điểm của giao tiếp trực tuyến.",
    "level2_formula": "Xác định từ khóa chính trong câu hỏi (Ví dụ: 'Phishing', 'Văn hóa ứng xử', 'Ưu điểm', 'Quyết định 874/QĐ-BTTTT') để loại trừ các phương án sai.",
    "level3_steps": "Đối chiếu nội dung câu hỏi với chuẩn mực đạo đức, quy tắc pháp luật và bài học Chuyên đề 11D, 12D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án A. Kẻ gian thường hack tài khoản người quen để nhắn tin vay tiền gấp; cách xử lý đúng đắn nhất là gọi điện thoại trực tiếp hoặc gặp mặt để xác thực.",
  "sourceDocTitle": "Chuyên đề 11D, 12D - DD, VH, PL TRONG MT SO.docx (Google Drive)"
},
{
  "id": "Q-TIN-11D12D-MC-35",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-dao-duc-phap-luat-so",
  "topicName": "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
  "chapterName": "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Khi đọc được một bài viết hoặc thông tin có thể là tin đồn hoặc thông tin giả trên mạng, hành vi nào sau đây là văn minh và an toàn nhất?",
  "options": [
    {
      "id": "A",
      "content": "Lan truyền thông tin ngay để cảnh báo bạn bè."
    },
    {
      "id": "B",
      "content": "Phản bác và chỉ trích tác giả bài viết gay gắt dưới phần bình luận."
    },
    {
      "id": "C",
      "content": "Kiểm tra và xác minh thông tin từ các cơ quan báo chí chính thống trước khi chia sẻ."
    },
    {
      "id": "D",
      "content": "Kêu gọi mọi người cùng vào tấn công trang cá nhân của tác giả."
    }
  ],
  "correctAnswer": "C",
  "hints": {
    "level1_concept": "Nhớ lại kiến thức về văn hóa ứng xử, phòng chống lừa đảo mạng hoặc ưu/nhược điểm của giao tiếp trực tuyến.",
    "level2_formula": "Xác định từ khóa chính trong câu hỏi (Ví dụ: 'Phishing', 'Văn hóa ứng xử', 'Ưu điểm', 'Quyết định 874/QĐ-BTTTT') để loại trừ các phương án sai.",
    "level3_steps": "Đối chiếu nội dung câu hỏi với chuẩn mực đạo đức, quy tắc pháp luật và bài học Chuyên đề 11D, 12D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án C. Nguyên tắc văn minh trên mạng là luôn kiểm chứng nguồn tin từ báo đài chính thống, không like/share tin đồn chưa được kiểm chứng.",
  "sourceDocTitle": "Chuyên đề 11D, 12D - DD, VH, PL TRONG MT SO.docx (Google Drive)"
},
{
  "id": "Q-TIN-11D12D-MC-36",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-dao-duc-phap-luat-so",
  "topicName": "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
  "chapterName": "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Một nhóm học sinh rủ nhau lập hội hack các tài khoản Facebook để nhắn tin lừa đảo chiếm đoạt tiền. Mức xử lý theo quy định của pháp luật đối với hành vi này là như thế nào?",
  "options": [
    {
      "id": "A",
      "content": "Tử hình."
    },
    {
      "id": "B",
      "content": "Tù chung thân cho mọi trường hợp."
    },
    {
      "id": "C",
      "content": "Tùy vào số tiền lừa đảo chiếm đoạt và mức độ nghiêm trọng của sự việc để xử lý hành chính hoặc hình sự."
    },
    {
      "id": "D",
      "content": "Chỉ bị nhà trường và gia đình quở trách vì còn là học sinh."
    }
  ],
  "correctAnswer": "C",
  "hints": {
    "level1_concept": "Nhớ lại kiến thức về văn hóa ứng xử, phòng chống lừa đảo mạng hoặc ưu/nhược điểm của giao tiếp trực tuyến.",
    "level2_formula": "Xác định từ khóa chính trong câu hỏi (Ví dụ: 'Phishing', 'Văn hóa ứng xử', 'Ưu điểm', 'Quyết định 874/QĐ-BTTTT') để loại trừ các phương án sai.",
    "level3_steps": "Đối chiếu nội dung câu hỏi với chuẩn mực đạo đức, quy tắc pháp luật và bài học Chuyên đề 11D, 12D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án C. Tùy thuộc vào giá trị tài sản chiếm đoạt và hậu quả gây ra, hành vi lừa đảo qua mạng sẽ bị xử phạt vi phạm hành chính hoặc bị truy cứu trách nhiệm hình sự theo Bộ luật Hình sự.",
  "sourceDocTitle": "Chuyên đề 11D, 12D - DD, VH, PL TRONG MT SO.docx (Google Drive)"
},
{
  "id": "Q-TIN-11D12D-MC-37",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-dao-duc-phap-luat-so",
  "topicName": "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
  "chapterName": "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Trong một diễn đàn trực tuyến về nghệ thuật, bạn Thành nhận được một bình luận phê phán mang tính xây dựng nhưng dùng từ ngữ thẳng thắn. Bạn Thành nên xử lý như thế nào?",
  "options": [
    {
      "id": "A",
      "content": "Xóa bài viết phê phán và chặn ngay tài khoản người bình luận."
    },
    {
      "id": "B",
      "content": "Trả lời bình luận bằng cách giải thích ý kiến của mình một cách lịch sự, cầu thị."
    },
    {
      "id": "C",
      "content": "Gửi tin nhắn riêng đe dọa người vừa bình luận."
    },
    {
      "id": "D",
      "content": "Dùng tài khoản ẩn danh để vào lăng mạ người bình luận."
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nhớ lại kiến thức về văn hóa ứng xử, phòng chống lừa đảo mạng hoặc ưu/nhược điểm của giao tiếp trực tuyến.",
    "level2_formula": "Xác định từ khóa chính trong câu hỏi (Ví dụ: 'Phishing', 'Văn hóa ứng xử', 'Ưu điểm', 'Quyết định 874/QĐ-BTTTT') để loại trừ các phương án sai.",
    "level3_steps": "Đối chiếu nội dung câu hỏi với chuẩn mực đạo đức, quy tắc pháp luật và bài học Chuyên đề 11D, 12D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án B. Lịch sự giải thích quan điểm, tôn trọng ý kiến đa chiều và tiếp thu góp ý có tính xây dựng là biểu hiện của văn hóa ứng xử trực tuyến chuẩn mực.",
  "sourceDocTitle": "Chuyên đề 11D, 12D - DD, VH, PL TRONG MT SO.docx (Google Drive)"
},
{
  "id": "Q-TIN-11D12D-MC-38",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-dao-duc-phap-luat-so",
  "topicName": "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
  "chapterName": "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Phát biểu nào sau đây là SAI khi nói về giao tiếp trong không gian mạng?",
  "options": [
    {
      "id": "A",
      "content": "Gọi điện thoại qua Zalo là giao tiếp đồng bộ."
    },
    {
      "id": "B",
      "content": "Gửi tin nhắn là giao tiếp không đồng bộ."
    },
    {
      "id": "C",
      "content": "Hầu hết các giao tiếp trên không gian mạng là đồng bộ."
    },
    {
      "id": "D",
      "content": "Giao tiếp không đồng bộ cho phép người nhận đọc và trả lời vào thời điểm thích hợp."
    }
  ],
  "correctAnswer": "C",
  "hints": {
    "level1_concept": "Nhớ lại kiến thức về văn hóa ứng xử, phòng chống lừa đảo mạng hoặc ưu/nhược điểm của giao tiếp trực tuyến.",
    "level2_formula": "Xác định từ khóa chính trong câu hỏi (Ví dụ: 'Phishing', 'Văn hóa ứng xử', 'Ưu điểm', 'Quyết định 874/QĐ-BTTTT') để loại trừ các phương án sai.",
    "level3_steps": "Đối chiếu nội dung câu hỏi với chuẩn mực đạo đức, quy tắc pháp luật và bài học Chuyên đề 11D, 12D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án C là phát biểu SAI vì đa số các hình thức giao tiếp trên không gian mạng (email, tin nhắn mạng xã hội, diễn đàn) là giao tiếp KHÔNG đồng bộ.",
  "sourceDocTitle": "Chuyên đề 11D, 12D - DD, VH, PL TRONG MT SO.docx (Google Drive)"
},
{
  "id": "Q-TIN-11D12D-MC-39",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-dao-duc-phap-luat-so",
  "topicName": "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
  "chapterName": "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Khi giao tiếp trên không gian mạng, người dùng NÊN thực hiện điều nào sau đây?",
  "options": [
    {
      "id": "A",
      "content": "Nhắn tin hoặc gọi điện vào khung giờ nghỉ ngơi khuya muộn để đối phương đọc sớm."
    },
    {
      "id": "B",
      "content": "Sử dụng từ ngữ ngắn gọn, các ký hiệu viết tắt tối nghĩa để tiết kiệm thời gian."
    },
    {
      "id": "C",
      "content": "Tự bảo vệ thông tin cá nhân quan trọng (số điện thoại, căn cước công dân, địa chỉ nhà)."
    },
    {
      "id": "D",
      "content": "Chia sẻ các thông tin giật gân, chưa kiểm chứng lên các hội nhóm công khai."
    }
  ],
  "correctAnswer": "C",
  "hints": {
    "level1_concept": "Nhớ lại kiến thức về văn hóa ứng xử, phòng chống lừa đảo mạng hoặc ưu/nhược điểm của giao tiếp trực tuyến.",
    "level2_formula": "Xác định từ khóa chính trong câu hỏi (Ví dụ: 'Phishing', 'Văn hóa ứng xử', 'Ưu điểm', 'Quyết định 874/QĐ-BTTTT') để loại trừ các phương án sai.",
    "level3_steps": "Đối chiếu nội dung câu hỏi với chuẩn mực đạo đức, quy tắc pháp luật và bài học Chuyên đề 11D, 12D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án C. Tự ý thức bảo vệ thông tin cá nhân nhạy cảm là nguyên tắc cơ bản để bảo đảm an toàn trên mạng.",
  "sourceDocTitle": "Chuyên đề 11D, 12D - DD, VH, PL TRONG MT SO.docx (Google Drive)"
},
{
  "id": "Q-TIN-11D12D-MC-40",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-dao-duc-phap-luat-so",
  "topicName": "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
  "chapterName": "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Phát biểu nào sau đây là ĐÚNG khi so sánh giao tiếp trực tiếp với giao tiếp qua mạng?",
  "options": [
    {
      "id": "A",
      "content": "Giao tiếp qua mạng diễn tả cảm xúc trọn vẹn và chân thực hơn giao tiếp trực tiếp."
    },
    {
      "id": "B",
      "content": "Giao tiếp qua mạng mang lại cảm giác gắn kết và thân mật hơn gặp mặt trực tiếp."
    },
    {
      "id": "C",
      "content": "Giao tiếp trực tiếp giúp xây dựng mối quan hệ bền chặt hơn nhờ đầy đủ ngôn ngữ cơ thể và biểu cảm."
    },
    {
      "id": "D",
      "content": "Giao tiếp trực tiếp thường tiết kiệm chi phí đi lại hơn giao tiếp qua mạng."
    }
  ],
  "correctAnswer": "C",
  "hints": {
    "level1_concept": "Nhớ lại kiến thức về văn hóa ứng xử, phòng chống lừa đảo mạng hoặc ưu/nhược điểm của giao tiếp trực tuyến.",
    "level2_formula": "Xác định từ khóa chính trong câu hỏi (Ví dụ: 'Phishing', 'Văn hóa ứng xử', 'Ưu điểm', 'Quyết định 874/QĐ-BTTTT') để loại trừ các phương án sai.",
    "level3_steps": "Đối chiếu nội dung câu hỏi với chuẩn mực đạo đức, quy tắc pháp luật và bài học Chuyên đề 11D, 12D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án C. Giao tiếp trực tiếp cho phép người tham gia quan sát ánh mắt, nụ cười, cử chỉ và ngữ điệu giọng nói, giúp xây dựng mối quan hệ tin cậy và bền chặt hơn.",
  "sourceDocTitle": "Chuyên đề 11D, 12D - DD, VH, PL TRONG MT SO.docx (Google Drive)"
},
{
  "id": "Q-TIN-11D12D-MC-41",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-dao-duc-phap-luat-so",
  "topicName": "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
  "chapterName": "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Lợi ích nổi bật của việc lưu trữ thông tin trao đổi qua không gian mạng là gì?",
  "options": [
    {
      "id": "A",
      "content": "Cho phép một số lượng lớn người dùng cùng nói chuyện cùng lúc mà không bị ngắt quãng."
    },
    {
      "id": "B",
      "content": "Dễ dàng lưu trữ và tra cứu, tham khảo lại nội dung trao đổi sau này khi cần."
    },
    {
      "id": "C",
      "content": "Giúp người dùng giảm sự tự ti của bản thân khi nói chuyện trực tiếp."
    },
    {
      "id": "D",
      "content": "Tránh hoàn toàn việc bị lộ thông tin cá nhân."
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nhớ lại kiến thức về văn hóa ứng xử, phòng chống lừa đảo mạng hoặc ưu/nhược điểm của giao tiếp trực tuyến.",
    "level2_formula": "Xác định từ khóa chính trong câu hỏi (Ví dụ: 'Phishing', 'Văn hóa ứng xử', 'Ưu điểm', 'Quyết định 874/QĐ-BTTTT') để loại trừ các phương án sai.",
    "level3_steps": "Đối chiếu nội dung câu hỏi với chuẩn mực đạo đức, quy tắc pháp luật và bài học Chuyên đề 11D, 12D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án B. Khác với lời nói truyền miệng, các văn bản email, tài liệu trao đổi trên mạng đều có lịch sử lưu trữ để đối chiếu, làm chứng và tham khảo lâu dài.",
  "sourceDocTitle": "Chuyên đề 11D, 12D - DD, VH, PL TRONG MT SO.docx (Google Drive)"
},
{
  "id": "Q-TIN-11D12D-MC-42",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-dao-duc-phap-luat-so",
  "topicName": "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
  "chapterName": "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Trong các hành vi sau, đâu là hành vi ứng xử nhân văn trên không gian mạng?",
  "options": [
    {
      "id": "A",
      "content": "Thường xuyên khoe khoang sự giàu có để câu tương tác trên mạng xã hội."
    },
    {
      "id": "B",
      "content": "Kêu gọi quyên góp từ thiện vào tài khoản cá nhân không rõ ràng nguồn gốc."
    },
    {
      "id": "C",
      "content": "Kiểm chứng thông tin trước khi chia sẻ và lan tỏa những việc làm tốt, tấm gương sáng trong xã hội."
    },
    {
      "id": "D",
      "content": "Sử dụng công nghệ Deepfake để tạo video cắt ghép đùa cợt bạn bè."
    }
  ],
  "correctAnswer": "C",
  "hints": {
    "level1_concept": "Nhớ lại kiến thức về văn hóa ứng xử, phòng chống lừa đảo mạng hoặc ưu/nhược điểm của giao tiếp trực tuyến.",
    "level2_formula": "Xác định từ khóa chính trong câu hỏi (Ví dụ: 'Phishing', 'Văn hóa ứng xử', 'Ưu điểm', 'Quyết định 874/QĐ-BTTTT') để loại trừ các phương án sai.",
    "level3_steps": "Đối chiếu nội dung câu hỏi với chuẩn mực đạo đức, quy tắc pháp luật và bài học Chuyên đề 11D, 12D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án C. Tinh thần trách nhiệm khi chia sẻ thông tin và việc lan tỏa những hình ảnh tích cực, nhân ái là biểu hiện rõ nét của lối sống nhân văn trên mạng.",
  "sourceDocTitle": "Chuyên đề 11D, 12D - DD, VH, PL TRONG MT SO.docx (Google Drive)"
},
{
  "id": "Q-TIN-11D12D-MC-43",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-dao-duc-phap-luat-so",
  "topicName": "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
  "chapterName": "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Yếu tố nào sau đây có thể làm tăng khả năng xảy ra hiểu lầm trong giao tiếp trực tuyến?",
  "options": [
    {
      "id": "A",
      "content": "Sử dụng ngôn ngữ rõ ràng, đủ câu đủ chữ."
    },
    {
      "id": "B",
      "content": "Giao tiếp thường xuyên và cởi mở."
    },
    {
      "id": "C",
      "content": "Thiếu ngữ điệu của giọng nói và biểu cảm nét mặt."
    },
    {
      "id": "D",
      "content": "Sử dụng hình ảnh minh họa chân thực."
    }
  ],
  "correctAnswer": "C",
  "hints": {
    "level1_concept": "Nhớ lại kiến thức về văn hóa ứng xử, phòng chống lừa đảo mạng hoặc ưu/nhược điểm của giao tiếp trực tuyến.",
    "level2_formula": "Xác định từ khóa chính trong câu hỏi (Ví dụ: 'Phishing', 'Văn hóa ứng xử', 'Ưu điểm', 'Quyết định 874/QĐ-BTTTT') để loại trừ các phương án sai.",
    "level3_steps": "Đối chiếu nội dung câu hỏi với chuẩn mực đạo đức, quy tắc pháp luật và bài học Chuyên đề 11D, 12D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án C. Giao tiếp văn bản thiếu ngữ điệu âm thanh và sắc thái cảm xúc, dễ khiến người đọc hiểu nhầm giọng điệu của người viết.",
  "sourceDocTitle": "Chuyên đề 11D, 12D - DD, VH, PL TRONG MT SO.docx (Google Drive)"
},
{
  "id": "Q-TIN-11D12D-MC-44",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-dao-duc-phap-luat-so",
  "topicName": "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
  "chapterName": "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Tại sao việc lắng nghe và tôn trọng ý kiến của người khác lại quan trọng trong giao tiếp trực tuyến?",
  "options": [
    {
      "id": "A",
      "content": "Để có thể phản hồi một cách chính xác và hiệu quả."
    },
    {
      "id": "B",
      "content": "Để thể hiện sự không quan tâm đến cuộc trò chuyện."
    },
    {
      "id": "C",
      "content": "Việc lắng nghe ý kiến của người khác giúp xây dựng mối quan hệ tốt hơn và tạo ra sự hiểu biết lẫn nhau."
    },
    {
      "id": "D",
      "content": "Để có thể chiếm ưu thế và áp đặt quan điểm trong cuộc trò chuyện."
    }
  ],
  "correctAnswer": "C",
  "hints": {
    "level1_concept": "Nhớ lại kiến thức về văn hóa ứng xử, phòng chống lừa đảo mạng hoặc ưu/nhược điểm của giao tiếp trực tuyến.",
    "level2_formula": "Xác định từ khóa chính trong câu hỏi (Ví dụ: 'Phishing', 'Văn hóa ứng xử', 'Ưu điểm', 'Quyết định 874/QĐ-BTTTT') để loại trừ các phương án sai.",
    "level3_steps": "Đối chiếu nội dung câu hỏi với chuẩn mực đạo đức, quy tắc pháp luật và bài học Chuyên đề 11D, 12D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án C. Tôn trọng quan điểm khác biệt và biết lắng nghe là nền tảng để tạo nên sự đồng cảm, hiểu biết và xây dựng cộng đồng trực tuyến văn minh.",
  "sourceDocTitle": "Chuyên đề 11D, 12D - DD, VH, PL TRONG MT SO.docx (Google Drive)"
},
{
  "id": "Q-TIN-11D12D-MC-45",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-dao-duc-phap-luat-so",
  "topicName": "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
  "chapterName": "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Bạn A tham gia diễn đàn về sức khỏe tinh thần và chia sẻ tâm sự của mình. Một số thành viên đã chỉ trích, chế giễu khiến bạn A tổn thương. Tình huống này phản ánh vấn đề gì?",
  "options": [
    {
      "id": "A",
      "content": "Thiếu sự tôn trọng và đồng cảm trong giao tiếp mạng."
    },
    {
      "id": "B",
      "content": "Thiếu thông tin và công cụ hỗ trợ."
    },
    {
      "id": "C",
      "content": "Thiếu phần mềm bảo mật thiết bị."
    },
    {
      "id": "D",
      "content": "Tốc độ đường truyền mạng không ổn định."
    }
  ],
  "correctAnswer": "A",
  "hints": {
    "level1_concept": "Nhớ lại kiến thức về văn hóa ứng xử, phòng chống lừa đảo mạng hoặc ưu/nhược điểm của giao tiếp trực tuyến.",
    "level2_formula": "Xác định từ khóa chính trong câu hỏi (Ví dụ: 'Phishing', 'Văn hóa ứng xử', 'Ưu điểm', 'Quyết định 874/QĐ-BTTTT') để loại trừ các phương án sai.",
    "level3_steps": "Đối chiếu nội dung câu hỏi với chuẩn mực đạo đức, quy tắc pháp luật và bài học Chuyên đề 11D, 12D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án A. Hành vi chế giễu nỗi đau hay câu chuyện của người khác là sự thiếu văn hóa và thiếu lòng trắc ẩn, thiếu tôn trọng đối phương.",
  "sourceDocTitle": "Chuyên đề 11D, 12D - DD, VH, PL TRONG MT SO.docx (Google Drive)"
},
{
  "id": "Q-TIN-11D12D-MC-46",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-dao-duc-phap-luat-so",
  "topicName": "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
  "chapterName": "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Trong một nhóm Facebook về công nghệ, bạn D đăng tải bài viết về sản phẩm mới nhưng đưa các số liệu kỹ thuật sai lệch và hình ảnh chưa kiểm chứng. Vấn đề của bài viết này là gì?",
  "options": [
    {
      "id": "A",
      "content": "Thiếu sự tương tác."
    },
    {
      "id": "B",
      "content": "Thiếu sự chính xác và tin cậy."
    },
    {
      "id": "C",
      "content": "Thiếu tính đa dạng của ngôn ngữ."
    },
    {
      "id": "D",
      "content": "Thiếu quyền quản trị viên."
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nhớ lại kiến thức về văn hóa ứng xử, phòng chống lừa đảo mạng hoặc ưu/nhược điểm của giao tiếp trực tuyến.",
    "level2_formula": "Xác định từ khóa chính trong câu hỏi (Ví dụ: 'Phishing', 'Văn hóa ứng xử', 'Ưu điểm', 'Quyết định 874/QĐ-BTTTT') để loại trừ các phương án sai.",
    "level3_steps": "Đối chiếu nội dung câu hỏi với chuẩn mực đạo đức, quy tắc pháp luật và bài học Chuyên đề 11D, 12D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án B. Đưa tin tức sai lệch, số liệu chưa kiểm chứng vi phạm tính trung thực và làm mất độ tin cậy của thông tin trên mạng.",
  "sourceDocTitle": "Chuyên đề 11D, 12D - DD, VH, PL TRONG MT SO.docx (Google Drive)"
},
{
  "id": "Q-TIN-11D12D-MC-47",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-dao-duc-phap-luat-so",
  "topicName": "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
  "chapterName": "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Trong một buổi họp trực tuyến, bạn A thường xuyên bị gián đoạn bởi tiếng ồn xung quanh và chất lượng micro rè, ngắt quãng. Điều này phản ánh hạn chế nào?",
  "options": [
    {
      "id": "A",
      "content": "Thiếu tập trung và thiếu chất lượng âm thanh / kỹ thuật truyền tải."
    },
    {
      "id": "B",
      "content": "Thiếu kỹ năng sử dụng máy tính."
    },
    {
      "id": "C",
      "content": "Thiếu tính bảo mật dữ liệu."
    },
    {
      "id": "D",
      "content": "Thiếu thời gian làm việc."
    }
  ],
  "correctAnswer": "A",
  "hints": {
    "level1_concept": "Nhớ lại kiến thức về văn hóa ứng xử, phòng chống lừa đảo mạng hoặc ưu/nhược điểm của giao tiếp trực tuyến.",
    "level2_formula": "Xác định từ khóa chính trong câu hỏi (Ví dụ: 'Phishing', 'Văn hóa ứng xử', 'Ưu điểm', 'Quyết định 874/QĐ-BTTTT') để loại trừ các phương án sai.",
    "level3_steps": "Đối chiếu nội dung câu hỏi với chuẩn mực đạo đức, quy tắc pháp luật và bài học Chuyên đề 11D, 12D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án A. Môi trường ồn ào và thiết bị âm thanh không đảm bảo sẽ làm giảm khả năng tập trung và chất lượng truyền đạt trong các cuộc họp trực tuyến.",
  "sourceDocTitle": "Chuyên đề 11D, 12D - DD, VH, PL TRONG MT SO.docx (Google Drive)"
},
{
  "id": "Q-TIN-11D12D-MC-48",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-dao-duc-phap-luat-so",
  "topicName": "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
  "chapterName": "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Trong môi trường trực tuyến, người dùng NÊN làm gì để bảo vệ thông tin cá nhân của mình?",
  "options": [
    {
      "id": "A",
      "content": "Chia sẻ công khai thông tin với mọi người để tạo sự tin tưởng."
    },
    {
      "id": "B",
      "content": "Chỉ cung cấp thông tin cần thiết và sử dụng các cài đặt bảo vệ quyền riêng tư."
    },
    {
      "id": "C",
      "content": "Đăng tải toàn bộ giấy tờ tùy thân lên mạng xã hội."
    },
    {
      "id": "D",
      "content": "Không cần quan tâm đến cài đặt mật khẩu tài khoản."
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nhớ lại kiến thức về văn hóa ứng xử, phòng chống lừa đảo mạng hoặc ưu/nhược điểm của giao tiếp trực tuyến.",
    "level2_formula": "Xác định từ khóa chính trong câu hỏi (Ví dụ: 'Phishing', 'Văn hóa ứng xử', 'Ưu điểm', 'Quyết định 874/QĐ-BTTTT') để loại trừ các phương án sai.",
    "level3_steps": "Đối chiếu nội dung câu hỏi với chuẩn mực đạo đức, quy tắc pháp luật và bài học Chuyên đề 11D, 12D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án B. Để tránh bị xâm phạm đời tư, người dùng chỉ nên cung cấp thông tin thực sự cần thiết và kích hoạt các chế độ bảo mật, xác thực 2 lớp.",
  "sourceDocTitle": "Chuyên đề 11D, 12D - DD, VH, PL TRONG MT SO.docx (Google Drive)"
},
{
  "id": "Q-TIN-11D12D-MC-49",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-dao-duc-phap-luat-so",
  "topicName": "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
  "chapterName": "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Theo Quyết định số 874/QĐ-BTTTT ngày 17 tháng 6 năm 2021, văn bản nào dưới đây được Bộ Thông tin và Truyền thông ban hành có liên quan đến việc trao đổi thông tin trong không gian mạng?",
  "options": [
    {
      "id": "A",
      "content": "Bộ luật về An ninh mạng."
    },
    {
      "id": "B",
      "content": "Bộ quy tắc ứng xử trên mạng xã hội."
    },
    {
      "id": "C",
      "content": "Bộ quy tắc giao tiếp trên không gian mạng."
    },
    {
      "id": "D",
      "content": "Bộ quy tắc bảo đảm an ninh mạng."
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nhớ lại kiến thức về văn hóa ứng xử, phòng chống lừa đảo mạng hoặc ưu/nhược điểm của giao tiếp trực tuyến.",
    "level2_formula": "Xác định từ khóa chính trong câu hỏi (Ví dụ: 'Phishing', 'Văn hóa ứng xử', 'Ưu điểm', 'Quyết định 874/QĐ-BTTTT') để loại trừ các phương án sai.",
    "level3_steps": "Đối chiếu nội dung câu hỏi với chuẩn mực đạo đức, quy tắc pháp luật và bài học Chuyên đề 11D, 12D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án B. Văn bản chính thức do Bộ Thông tin và Truyền thông ban hành ngày 17/6/2021 là \"Bộ quy tắc ứng xử trên mạng xã hội\".",
  "sourceDocTitle": "Chuyên đề 11D, 12D - DD, VH, PL TRONG MT SO.docx (Google Drive)"
},
{
  "id": "Q-TIN-11D12D-MC-50",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-dao-duc-phap-luat-so",
  "topicName": "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
  "chapterName": "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Cơ quan nào dưới đây có trách nhiệm thực hiện quản lý nhà nước về thông tin trên mạng xã hội và truyền thông tại Việt Nam?",
  "options": [
    {
      "id": "A",
      "content": "Bộ Công an."
    },
    {
      "id": "B",
      "content": "Bộ Quốc phòng."
    },
    {
      "id": "C",
      "content": "Bộ Thông tin và Truyền thông."
    },
    {
      "id": "D",
      "content": "Bộ Tư pháp."
    }
  ],
  "correctAnswer": "C",
  "hints": {
    "level1_concept": "Nhớ lại kiến thức về văn hóa ứng xử, phòng chống lừa đảo mạng hoặc ưu/nhược điểm của giao tiếp trực tuyến.",
    "level2_formula": "Xác định từ khóa chính trong câu hỏi (Ví dụ: 'Phishing', 'Văn hóa ứng xử', 'Ưu điểm', 'Quyết định 874/QĐ-BTTTT') để loại trừ các phương án sai.",
    "level3_steps": "Đối chiếu nội dung câu hỏi với chuẩn mực đạo đức, quy tắc pháp luật và bài học Chuyên đề 11D, 12D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án C. Bộ Thông tin và Truyền thông là cơ quan quản lý nhà nước về bưu chính, viễn thông, công nghệ thông tin và thông tin điện tử trên mạng.",
  "sourceDocTitle": "Chuyên đề 11D, 12D - DD, VH, PL TRONG MT SO.docx (Google Drive)"
},
{
  "id": "Q-TIN-11D12D-MC-51",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-dao-duc-phap-luat-so",
  "topicName": "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
  "chapterName": "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Làm thế nào để nhận biết mình có thể đã vô tình bị lừa qua mạng?",
  "options": [
    {
      "id": "A",
      "content": "Nếu nhận được yêu cầu cung cấp thông tin cá nhân, mã OTP từ người lạ hoặc phát hiện các giao dịch trừ tiền bất thường trên tài khoản."
    },
    {
      "id": "B",
      "content": "Nếu không sử dụng Internet trong một khoảng thời gian dài."
    },
    {
      "id": "C",
      "content": "Nếu thấy quảng cáo xuất hiện trên trang báo điện tử."
    },
    {
      "id": "D",
      "content": "Nếu nhận được thư chúc mừng sinh nhật từ bạn bè."
    }
  ],
  "correctAnswer": "A",
  "hints": {
    "level1_concept": "Nhớ lại kiến thức về văn hóa ứng xử, phòng chống lừa đảo mạng hoặc ưu/nhược điểm của giao tiếp trực tuyến.",
    "level2_formula": "Xác định từ khóa chính trong câu hỏi (Ví dụ: 'Phishing', 'Văn hóa ứng xử', 'Ưu điểm', 'Quyết định 874/QĐ-BTTTT') để loại trừ các phương án sai.",
    "level3_steps": "Đối chiếu nội dung câu hỏi với chuẩn mực đạo đức, quy tắc pháp luật và bài học Chuyên đề 11D, 12D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án A. Xuất hiện các biến động số dư bất thường, bị đổi mật khẩu ngoài ý muốn hoặc bị kẻ lạ yêu cầu gửi mã OTP là dấu hiệu rõ ràng đã bị tấn công lừa đảo.",
  "sourceDocTitle": "Chuyên đề 11D, 12D - DD, VH, PL TRONG MT SO.docx (Google Drive)"
},
{
  "id": "Q-TIN-11D12D-MC-52",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-dao-duc-phap-luat-so",
  "topicName": "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
  "chapterName": "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Tại sao cần đặt mình vào vị trí của người khác khi giao tiếp trên mạng?",
  "options": [
    {
      "id": "A",
      "content": "Để tăng cường sự cạnh tranh và tranh cãi trên mạng."
    },
    {
      "id": "B",
      "content": "Để tránh phải lắng nghe ý kiến của người khác."
    },
    {
      "id": "C",
      "content": "Cần đặt mình vào vị trí người khác để tăng cường sự thông cảm, hiểu biết và tránh gây tổn thương tinh thần cho nhau."
    },
    {
      "id": "D",
      "content": "Để thể hiện sự vượt trội của bản thân so với người khác."
    }
  ],
  "correctAnswer": "C",
  "hints": {
    "level1_concept": "Nhớ lại kiến thức về văn hóa ứng xử, phòng chống lừa đảo mạng hoặc ưu/nhược điểm của giao tiếp trực tuyến.",
    "level2_formula": "Xác định từ khóa chính trong câu hỏi (Ví dụ: 'Phishing', 'Văn hóa ứng xử', 'Ưu điểm', 'Quyết định 874/QĐ-BTTTT') để loại trừ các phương án sai.",
    "level3_steps": "Đối chiếu nội dung câu hỏi với chuẩn mực đạo đức, quy tắc pháp luật và bài học Chuyên đề 11D, 12D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án C. Đặt mình vào vị trí của đối phương giúp ta thấu hiểu cảm xúc, thận trọng hơn trong từng câu chữ và gìn giữ văn hóa giao tiếp lịch thiệp.",
  "sourceDocTitle": "Chuyên đề 11D, 12D - DD, VH, PL TRONG MT SO.docx (Google Drive)"
},
{
  "id": "Q-TIN-11D12D-MC-53",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-dao-duc-phap-luat-so",
  "topicName": "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
  "chapterName": "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Hành động nào sau đây NÊN TRÁNH khi ai đó mắc lỗi hoặc có sơ suất với bạn trên không gian mạng?",
  "options": [
    {
      "id": "A",
      "content": "Nhắn tin riêng góp ý nhẹ nhàng và mang tính xây dựng."
    },
    {
      "id": "B",
      "content": "Công khai chỉ trích, bêu riếu hoặc xỉ nhục người đó trên diễn đàn chung."
    },
    {
      "id": "C",
      "content": "Bỏ qua những lỗi nhỏ và thể hiện sự rộng lượng."
    },
    {
      "id": "D",
      "content": "Lắng nghe lời giải thích và xin lỗi của đối phương."
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nhớ lại kiến thức về văn hóa ứng xử, phòng chống lừa đảo mạng hoặc ưu/nhược điểm của giao tiếp trực tuyến.",
    "level2_formula": "Xác định từ khóa chính trong câu hỏi (Ví dụ: 'Phishing', 'Văn hóa ứng xử', 'Ưu điểm', 'Quyết định 874/QĐ-BTTTT') để loại trừ các phương án sai.",
    "level3_steps": "Đối chiếu nội dung câu hỏi với chuẩn mực đạo đức, quy tắc pháp luật và bài học Chuyên đề 11D, 12D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án B. Bêu riếu, xúc phạm danh dự người khác trước đám đông mạng là hành vi kích động bắt nạt tập thể, cần tuyệt đối tránh.",
  "sourceDocTitle": "Chuyên đề 11D, 12D - DD, VH, PL TRONG MT SO.docx (Google Drive)"
},
{
  "id": "Q-TIN-11D12D-MC-54",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-dao-duc-phap-luat-so",
  "topicName": "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
  "chapterName": "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Ngôn từ bất lịch sự, khiêu khích có thể dẫn đến hậu quả gì trong giao tiếp trực tuyến?",
  "options": [
    {
      "id": "A",
      "content": "Khuyến khích sự hợp tác và đoàn kết giữa các thành viên."
    },
    {
      "id": "B",
      "content": "Giúp cuộc trò chuyện trở nên sôi nổi và thú vị hơn."
    },
    {
      "id": "C",
      "content": "Nâng cao uy tín của người phát ngôn."
    },
    {
      "id": "D",
      "content": "Gây hiểu lầm, leo thang xung đột và tổn thương cảm xúc của người khác."
    }
  ],
  "correctAnswer": "D",
  "hints": {
    "level1_concept": "Nhớ lại kiến thức về văn hóa ứng xử, phòng chống lừa đảo mạng hoặc ưu/nhược điểm của giao tiếp trực tuyến.",
    "level2_formula": "Xác định từ khóa chính trong câu hỏi (Ví dụ: 'Phishing', 'Văn hóa ứng xử', 'Ưu điểm', 'Quyết định 874/QĐ-BTTTT') để loại trừ các phương án sai.",
    "level3_steps": "Đối chiếu nội dung câu hỏi với chuẩn mực đạo đức, quy tắc pháp luật và bài học Chuyên đề 11D, 12D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án D. Lời lẽ thô lỗ, khiêu khích dễ thổi bùng lên các cuộc khẩu chiến, gây thù hằn và ảnh hưởng nặng nề đến tâm lý người tham gia.",
  "sourceDocTitle": "Chuyên đề 11D, 12D - DD, VH, PL TRONG MT SO.docx (Google Drive)"
},
{
  "id": "Q-TIN-11D12D-MC-55",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-dao-duc-phap-luat-so",
  "topicName": "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
  "chapterName": "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Khi ứng xử trong không gian mạng, nguyên tắc nào sau đây người tham gia giao tiếp luôn phải ghi nhớ?",
  "options": [
    {
      "id": "A",
      "content": "Luôn bảo vệ quan điểm của mình bằng mọi giá, không nhượng bộ."
    },
    {
      "id": "B",
      "content": "Lịch sự, tôn trọng người khác và tuân thủ các quy định của pháp luật."
    },
    {
      "id": "C",
      "content": "Chia sẻ mọi thông tin cá nhân lên trang mạng để chứng minh sự minh bạch."
    },
    {
      "id": "D",
      "content": "Được tự do xúc phạm người khác vì không gian mạng là thế giới ảo."
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nhớ lại kiến thức về văn hóa ứng xử, phòng chống lừa đảo mạng hoặc ưu/nhược điểm của giao tiếp trực tuyến.",
    "level2_formula": "Xác định từ khóa chính trong câu hỏi (Ví dụ: 'Phishing', 'Văn hóa ứng xử', 'Ưu điểm', 'Quyết định 874/QĐ-BTTTT') để loại trừ các phương án sai.",
    "level3_steps": "Đối chiếu nội dung câu hỏi với chuẩn mực đạo đức, quy tắc pháp luật và bài học Chuyên đề 11D, 12D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án B. Thế giới ảo nhưng trách nhiệm thực: hành xử văn minh, tôn trọng người khác và tuân thủ pháp luật là nguyên tắc bất di bất dịch.",
  "sourceDocTitle": "Chuyên đề 11D, 12D - DD, VH, PL TRONG MT SO.docx (Google Drive)"
},
{
  "id": "Q-TIN-11D12D-MC-56",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-dao-duc-phap-luat-so",
  "topicName": "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
  "chapterName": "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Khi ứng xử trong không gian mạng, người tham gia KHÔNG NÊN thực hiện hành vi nào sau đây?",
  "options": [
    {
      "id": "A",
      "content": "Tôn trọng pháp luật và tôn trọng quyền riêng tư của mọi người."
    },
    {
      "id": "B",
      "content": "Sẵn sàng chịu trách nhiệm với những phát ngôn và bài đăng của mình."
    },
    {
      "id": "C",
      "content": "Chia sẻ, lan tỏa những tấm gương người tốt, việc tốt."
    },
    {
      "id": "D",
      "content": "Phát tán các thông tin không rõ nguồn gốc, thông tin chưa được kiểm chứng hoặc vi phạm pháp luật."
    }
  ],
  "correctAnswer": "D",
  "hints": {
    "level1_concept": "Nhớ lại kiến thức về văn hóa ứng xử, phòng chống lừa đảo mạng hoặc ưu/nhược điểm của giao tiếp trực tuyến.",
    "level2_formula": "Xác định từ khóa chính trong câu hỏi (Ví dụ: 'Phishing', 'Văn hóa ứng xử', 'Ưu điểm', 'Quyết định 874/QĐ-BTTTT') để loại trừ các phương án sai.",
    "level3_steps": "Đối chiếu nội dung câu hỏi với chuẩn mực đạo đức, quy tắc pháp luật và bài học Chuyên đề 11D, 12D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án D. Phát tán tin giả, thông tin thất thiệt chưa kiểm chứng là hành vi vi phạm pháp luật an ninh mạng và làm nhiễu loạn dư luận.",
  "sourceDocTitle": "Chuyên đề 11D, 12D - DD, VH, PL TRONG MT SO.docx (Google Drive)"
},
{
  "id": "Q-TIN-11D12D-MC-57",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-dao-duc-phap-luat-so",
  "topicName": "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
  "chapterName": "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Nội dung nào dưới đây KHÔNG phải là hạn chế thường gặp khi giao tiếp trong không gian mạng?",
  "options": [
    {
      "id": "A",
      "content": "Giao tiếp không bị giới hạn bởi không gian và thời gian."
    },
    {
      "id": "B",
      "content": "Thiếu các tín hiệu phi ngôn ngữ như nét mặt, ánh mắt, ngôn ngữ cơ thể."
    },
    {
      "id": "C",
      "content": "Nguy cơ rò rỉ dữ liệu và xâm phạm quyền riêng tư."
    },
    {
      "id": "D",
      "content": "Sự cố mạng hoặc thiết bị làm gián đoạn cuộc trò chuyện."
    }
  ],
  "correctAnswer": "A",
  "hints": {
    "level1_concept": "Nhớ lại kiến thức về văn hóa ứng xử, phòng chống lừa đảo mạng hoặc ưu/nhược điểm của giao tiếp trực tuyến.",
    "level2_formula": "Xác định từ khóa chính trong câu hỏi (Ví dụ: 'Phishing', 'Văn hóa ứng xử', 'Ưu điểm', 'Quyết định 874/QĐ-BTTTT') để loại trừ các phương án sai.",
    "level3_steps": "Đối chiếu nội dung câu hỏi với chuẩn mực đạo đức, quy tắc pháp luật và bài học Chuyên đề 11D, 12D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án A. Không bị giới hạn bởi không gian và thời gian là ƯU ĐIỂM lớn của không gian mạng, không phải là hạn chế.",
  "sourceDocTitle": "Chuyên đề 11D, 12D - DD, VH, PL TRONG MT SO.docx (Google Drive)"
},
{
  "id": "Q-TIN-11D12D-MC-58",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-dao-duc-phap-luat-so",
  "topicName": "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
  "chapterName": "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Đặc điểm \"thiếu sự gần gũi, thân thiết\" khi giao tiếp trong không gian mạng chủ yếu là do nguyên nhân nào?",
  "options": [
    {
      "id": "A",
      "content": "Mọi người dễ dàng giả mạo danh tính của mình trên mạng."
    },
    {
      "id": "B",
      "content": "Người dùng chỉ tiếp xúc qua màn hình, thiếu các yếu tố ngôn ngữ cơ thể và cảm xúc trực tiếp."
    },
    {
      "id": "C",
      "content": "Đường truyền mạng Internet không có tốc độ cao."
    },
    {
      "id": "D",
      "content": "Thời gian giao tiếp trên mạng quá ngắn so với gặp trực tiếp."
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nhớ lại kiến thức về văn hóa ứng xử, phòng chống lừa đảo mạng hoặc ưu/nhược điểm của giao tiếp trực tuyến.",
    "level2_formula": "Xác định từ khóa chính trong câu hỏi (Ví dụ: 'Phishing', 'Văn hóa ứng xử', 'Ưu điểm', 'Quyết định 874/QĐ-BTTTT') để loại trừ các phương án sai.",
    "level3_steps": "Đối chiếu nội dung câu hỏi với chuẩn mực đạo đức, quy tắc pháp luật và bài học Chuyên đề 11D, 12D để chọn đáp án chính xác nhất."
  },
  "explanation": "Đáp án B. Việc ngăn cách bởi màn hình thiết bị và thiếu đi hơi ấm, giọng nói, ánh mắt trực tiếp khiến giao tiếp mạng khó tạo được sự thân mật, gắn kết sâu sắc như gặp gỡ ngoài đời.",
  "sourceDocTitle": "Chuyên đề 11D, 12D - DD, VH, PL TRONG MT SO.docx (Google Drive)"
},
{
  "id": "Q-TIN-11D12D-TF-01",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-dao-duc-phap-luat-so",
  "topicName": "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
  "chapterName": "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
  "difficulty": "VanDung",
  "type": "true_false",
  "content": "Nguyên tắc để hạn chế thiệt hại nếu nghi ngờ rằng mình có thể vô tình bị lừa qua mạng, hãy đánh giá các hành vi sau đây:",
  "hints": {
    "level1_concept": "Đọc kỹ từng mệnh đề và đối chiếu với các nguyên tắc ứng xử văn minh, quy tắc bảo mật và phòng tránh lừa đảo trên mạng.",
    "level2_formula": "Xác định tính đúng/sai của từng ý a, b, c, d dựa trên cơ sở pháp luật, đạo đức và sự an toàn thông tin cá nhân.",
    "level3_steps": "Đánh giá lần lượt từng ý a), b), c), d) để chọn Đúng (True) hoặc Sai (False) tương ứng."
  },
  "explanation": "Đáp án chi tiết từng mệnh đề:\n- Ý a) : Đúng (Đúng. Đổi mật khẩu và kích hoạt xác minh 2 bước ngay lập tức sẽ chặn kẻ gian tiếp tục truy cập trái phép vào tài khoản.)\n- Ý b) : Sai (Sai. Khi đã bị thiệt hại tài sản hoặc lộ dữ liệu, cần trình báo ngay cơ quan công an / cơ quan an ninh mạng để kịp thời điều tra xử lý.)\n- Ý c) : Đúng (Đúng. Báo ngay cho ngân hàng phát hành thẻ để kịp thời phong tỏa tài khoản, ngăn chặn các giao dịch chuyển tiền trái phép.)\n- Ý d) : Sai (Sai. Tuyệt đối không chuyển tiền khi nhận được yêu cầu bất ngờ từ người lạ hoặc qua tin nhắn mạng xã hội chưa được xác thực.)",
  "sourceDocTitle": "Chuyên đề 11D, 12D - DD, VH, PL TRONG MT SO.docx (Google Drive)",
  "tfItems": [
    {
      "id": "a",
      "content": "Lập tức thay đổi mật khẩu cho những tài khoản giao tiếp qua mạng bị ảnh hưởng. Cần thiết lập xác minh hai bước cho những tài khoản quan trọng.",
      "correctAnswer": true
    },
    {
      "id": "b",
      "content": "Nếu đã bị thiệt hại, không cần báo cho cơ quan chức năng biết vì khó có thể tìm lại được.",
      "correctAnswer": false
    },
    {
      "id": "c",
      "content": "Nếu đã lỡ chia sẻ thông tin về thẻ tín dụng, tài khoản cá nhân, hãy báo ngay cho ngân hàng biết để khóa thẻ/khóa tài khoản.",
      "correctAnswer": true
    },
    {
      "id": "d",
      "content": "Thực hiện thao tác chuyển tiền ngay khi có yêu cầu chuyển khoản lạ mà không cần kiểm tra, xác minh thông tin.",
      "correctAnswer": false
    }
  ]
},
{
  "id": "Q-TIN-11D12D-TF-02",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-dao-duc-phap-luat-so",
  "topicName": "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
  "chapterName": "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
  "difficulty": "VanDung",
  "type": "true_false",
  "content": "Những hành vi nào dưới đây có thể dẫn đến vi phạm pháp luật khi sử dụng Internet?",
  "hints": {
    "level1_concept": "Đọc kỹ từng mệnh đề và đối chiếu với các nguyên tắc ứng xử văn minh, quy tắc bảo mật và phòng tránh lừa đảo trên mạng.",
    "level2_formula": "Xác định tính đúng/sai của từng ý a, b, c, d dựa trên cơ sở pháp luật, đạo đức và sự an toàn thông tin cá nhân.",
    "level3_steps": "Đánh giá lần lượt từng ý a), b), c), d) để chọn Đúng (True) hoặc Sai (False) tương ứng."
  },
  "explanation": "Đáp án chi tiết từng mệnh đề:\n- Ý a) : Đúng (Đúng. Hành vi đe dọa, xúc phạm danh dự nhân phẩm người khác trên mạng vi phạm Luật An ninh mạng.)\n- Ý b) : Đúng (Đúng. Phát tán thông tin sai sự thật, văn hóa phẩm độc hại là hành vi bị pháp luật nghiêm cấm.)\n- Ý c) : Đúng (Đúng. Vi phạm bản quyền sở hữu trí tuệ trên mạng internet sẽ bị xử lý vi phạm theo Luật Sở hữu trí tuệ.)\n- Ý d) : Sai (Sai. Đây là hành vi đúng đắn và chuẩn mực của công dân số, không phải hành vi vi phạm pháp luật.)",
  "sourceDocTitle": "Chuyên đề 11D, 12D - DD, VH, PL TRONG MT SO.docx (Google Drive)",
  "tfItems": [
    {
      "id": "a",
      "content": "Bắt nạt hoặc tiếp tay cho kẻ bắt nạt, đe dọa người khác trên mạng.",
      "correctAnswer": true
    },
    {
      "id": "b",
      "content": "Lan truyền tin giả, bài viết xuyên tạc sự thật, hình ảnh đồi trụy hoặc kích động bạo lực.",
      "correctAnswer": true
    },
    {
      "id": "c",
      "content": "Ăn cắp thông tin, sao chép trái phép tài liệu trên mạng (vi phạm bản quyền tác giả).",
      "correctAnswer": true
    },
    {
      "id": "d",
      "content": "Tuân thủ pháp luật Việt Nam, tôn trọng quyền và lợi ích hợp pháp của cá nhân và tổ chức.",
      "correctAnswer": false
    }
  ]
},
{
  "id": "Q-TIN-11D12D-TF-03",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-dao-duc-phap-luat-so",
  "topicName": "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
  "chapterName": "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
  "difficulty": "VanDung",
  "type": "true_false",
  "content": "Hiện nay giao tiếp qua không gian mạng đang là xu thế trong xã hội hiện đại. Hãy đánh giá các đặc điểm sau:",
  "hints": {
    "level1_concept": "Đọc kỹ từng mệnh đề và đối chiếu với các nguyên tắc ứng xử văn minh, quy tắc bảo mật và phòng tránh lừa đảo trên mạng.",
    "level2_formula": "Xác định tính đúng/sai của từng ý a, b, c, d dựa trên cơ sở pháp luật, đạo đức và sự an toàn thông tin cá nhân.",
    "level3_steps": "Đánh giá lần lượt từng ý a), b), c), d) để chọn Đúng (True) hoặc Sai (False) tương ứng."
  },
  "explanation": "Đáp án chi tiết từng mệnh đề:\n- Ý a) : Đúng (Đúng. Không gian mạng xóa bỏ rào cản địa lý, kết nối toàn cầu nhanh chóng.)\n- Ý b) : Đúng (Đúng. Việc liên lạc qua Internet giúp tiết kiệm tối đa chi phí đi lại và tổ chức.)\n- Ý c) : Sai (Sai. Phần lớn các trao đổi trên mạng (email, tin nhắn, bài đăng mạng xã hội) là giao tiếp không đồng bộ.)\n- Ý d) : Đúng (Đúng. Sự đa dạng của các công cụ kỹ thuật số cho phép người dùng tùy chọn kênh tương tác tối ưu.)",
  "sourceDocTitle": "Chuyên đề 11D, 12D - DD, VH, PL TRONG MT SO.docx (Google Drive)",
  "tfItems": [
    {
      "id": "a",
      "content": "Giao tiếp qua mạng cho phép kết nối với người ở bất kỳ đâu trên thế giới, mở rộng mối quan hệ và cơ hội hợp tác.",
      "correctAnswer": true
    },
    {
      "id": "b",
      "content": "Nhiều nền tảng giao tiếp trực tuyến miễn phí hoặc có chi phí rất thấp so với việc gặp mặt trực tiếp.",
      "correctAnswer": true
    },
    {
      "id": "c",
      "content": "Đa số các giao tiếp trong không gian mạng là giao tiếp đồng bộ.",
      "correctAnswer": false
    },
    {
      "id": "d",
      "content": "Có nhiều hình thức giao tiếp như nhắn tin, gọi video, hội thảo trực tuyến, giúp người dùng lựa chọn theo nhu cầu.",
      "correctAnswer": true
    }
  ]
},
{
  "id": "Q-TIN-11D12D-TF-04",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-dao-duc-phap-luat-so",
  "topicName": "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
  "chapterName": "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
  "difficulty": "VanDung",
  "type": "true_false",
  "content": "Giao tiếp qua không gian mạng có rất nhiều ưu điểm song bên cạnh đó cũng tồn tại nhiều rủi ro và nguy cơ tiềm ẩn:",
  "hints": {
    "level1_concept": "Đọc kỹ từng mệnh đề và đối chiếu với các nguyên tắc ứng xử văn minh, quy tắc bảo mật và phòng tránh lừa đảo trên mạng.",
    "level2_formula": "Xác định tính đúng/sai của từng ý a, b, c, d dựa trên cơ sở pháp luật, đạo đức và sự an toàn thông tin cá nhân.",
    "level3_steps": "Đánh giá lần lượt từng ý a), b), c), d) để chọn Đúng (True) hoặc Sai (False) tương ứng."
  },
  "explanation": "Đáp án chi tiết từng mệnh đề:\n- Ý a) : Đúng (Đúng. Lạm dụng Internet gây lối sống thụ động, mỏi mắt, rối loạn giấc ngủ và giảm tương tác thực tế.)\n- Ý b) : Sai (Sai. Giao tiếp qua mạng không thể thay thế hoàn toàn gặp gỡ trực tiếp vì thiếu vắng sự biểu đạt cảm xúc và tiếp xúc thể chất.)\n- Ý c) : Đúng (Đúng. Môi trường mạng luôn tiềm ẩn nguy cơ tin tặc đánh cắp dữ liệu cá nhân.)\n- Ý d) : Đúng (Đúng. Tội phạm mạng thường lợi dụng sự ẩn danh để dàn dựng nhiều kịch bản lừa đảo tinh vi.)",
  "sourceDocTitle": "Chuyên đề 11D, 12D - DD, VH, PL TRONG MT SO.docx (Google Drive)",
  "tfItems": [
    {
      "id": "a",
      "content": "Nghiện Internet dẫn đến ảnh hưởng tiêu cực đến sức khỏe thể chất và đời sống tinh thần.",
      "correctAnswer": true
    },
    {
      "id": "b",
      "content": "Giao tiếp trong không gian mạng có thể thay thế hoàn toàn cho phương pháp giao tiếp trực tiếp.",
      "correctAnswer": false
    },
    {
      "id": "c",
      "content": "Dữ liệu cá nhân dễ bị rò rỉ hoặc bị đánh cắp qua các cuộc tấn công mạng, khiến người dùng gặp rủi ro về bảo mật.",
      "correctAnswer": true
    },
    {
      "id": "d",
      "content": "Xuất hiện nhiều hình thức lừa đảo trong giao tiếp qua mạng, từ lừa đảo tài chính đến lừa đảo tình cảm.",
      "correctAnswer": true
    }
  ]
},
{
  "id": "Q-TIN-11D12D-TF-05",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-dao-duc-phap-luat-so",
  "topicName": "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
  "chapterName": "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
  "difficulty": "VanDung",
  "type": "true_false",
  "content": "Ứng xử nhân văn trên không gian mạng góp phần tạo nên một cộng đồng tốt đẹp. Hãy đánh giá các hành vi sau:",
  "hints": {
    "level1_concept": "Đọc kỹ từng mệnh đề và đối chiếu với các nguyên tắc ứng xử văn minh, quy tắc bảo mật và phòng tránh lừa đảo trên mạng.",
    "level2_formula": "Xác định tính đúng/sai của từng ý a, b, c, d dựa trên cơ sở pháp luật, đạo đức và sự an toàn thông tin cá nhân.",
    "level3_steps": "Đánh giá lần lượt từng ý a), b), c), d) để chọn Đúng (True) hoặc Sai (False) tương ứng."
  },
  "explanation": "Đáp án chi tiết từng mệnh đề:\n- Ý a) : Sai (Sai. Tiết lộ thông tin riêng tư của người khác khi chưa được phép là hành vi vi phạm đạo đức và pháp luật.)\n- Ý b) : Sai (Sai. Cần góp ý văn minh, mang tính xây dựng, không tham gia bạo lực mạng hay kích động tẩy chay độc hại.)\n- Ý c) : Đúng (Đúng. Ý thức trách nhiệm với phát ngôn và hành vi cá nhân là nền tảng của văn hóa ứng xử nhân văn.)\n- Ý d) : Đúng (Đúng. Sự cảm thông, lắng nghe và chia sẻ chân thành giúp lan tỏa hơi ấm tình người trong thế giới ảo.)",
  "sourceDocTitle": "Chuyên đề 11D, 12D - DD, VH, PL TRONG MT SO.docx (Google Drive)",
  "tfItems": [
    {
      "id": "a",
      "content": "Tiết lộ thông tin cá nhân của người khác mà không có sự đồng ý, bao gồm cả hình ảnh và thông tin nhạy cảm.",
      "correctAnswer": false
    },
    {
      "id": "b",
      "content": "Lên án gay gắt, mạt sát tập thể mỗi khi phát hiện có người làm việc sai sót trên mạng xã hội.",
      "correctAnswer": false
    },
    {
      "id": "c",
      "content": "Nhận thức rằng những gì mình đăng tải có thể ảnh hưởng đến người khác và sẵn sàng đứng ra nhận trách nhiệm về lời nói và hành động của mình.",
      "correctAnswer": true
    },
    {
      "id": "d",
      "content": "Thấu hiểu và chia sẻ cảm xúc của người khác, thể hiện sự đồng cảm khi họ chia sẻ vấn đề cá nhân khó khăn.",
      "correctAnswer": true
    }
  ]
},
{
  "id": "Q-TIN-11D12D-TF-06",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-dao-duc-phap-luat-so",
  "topicName": "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
  "chapterName": "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
  "difficulty": "VanDung",
  "type": "true_false",
  "content": "Minh thường xuyên chia sẻ hình ảnh và thông tin cá nhân của mình lên mạng xã hội mà không để ý đến các quyền cài đặt riêng tư. Bạn An đưa ra các nhận định sau:",
  "hints": {
    "level1_concept": "Đọc kỹ từng mệnh đề và đối chiếu với các nguyên tắc ứng xử văn minh, quy tắc bảo mật và phòng tránh lừa đảo trên mạng.",
    "level2_formula": "Xác định tính đúng/sai của từng ý a, b, c, d dựa trên cơ sở pháp luật, đạo đức và sự an toàn thông tin cá nhân.",
    "level3_steps": "Đánh giá lần lượt từng ý a), b), c), d) để chọn Đúng (True) hoặc Sai (False) tương ứng."
  },
  "explanation": "Đáp án chi tiết từng mệnh đề:\n- Ý a) : Đúng (Đúng. Các nền tảng đều cung cấp tính năng phân quyền: chỉ bạn bè, nhóm cụ thể hoặc chỉ mình tôi.)\n- Ý b) : Sai (Sai. Nếu đặt bài viết ở chế độ công khai, bất kỳ ai trên Internet đều có thể thu thập thông tin của Minh.)\n- Ý c) : Đúng (Đúng. Báo cáo tài khoản mạo danh hoặc bài viết vi phạm quyền riêng tư là biện pháp bảo vệ bản thân hiệu quả.)\n- Ý d) : Sai (Sai. Người dùng luôn có quyền tự xóa bài đăng, gỡ ảnh hoặc yêu cầu nhà cung cấp dịch vụ xóa dữ liệu cá nhân theo quy định.)",
  "sourceDocTitle": "Chuyên đề 11D, 12D - DD, VH, PL TRONG MT SO.docx (Google Drive)",
  "tfItems": [
    {
      "id": "a",
      "content": "Minh có thể kiểm soát ai được xem thông tin cá nhân của mình trên mạng xã hội thông qua cài đặt quyền riêng tư.",
      "correctAnswer": true
    },
    {
      "id": "b",
      "content": "Minh nên tự động chia sẻ mọi thông tin cá nhân lên mạng xã hội mà không lo lắng, vì mạng xã hội sẽ tự động bảo vệ dữ liệu cho người dùng.",
      "correctAnswer": false
    },
    {
      "id": "c",
      "content": "Nếu cảm thấy lo lắng hoặc thông tin cá nhân của mình bị người khác sử dụng trái mục đích, Minh có thể báo cáo vi phạm cho ban quản trị mạng xã hội.",
      "correctAnswer": true
    },
    {
      "id": "d",
      "content": "Minh không có quyền yêu cầu các nền tảng trực tuyến xóa các thông tin cá nhân của mình đã tải lên trước đó.",
      "correctAnswer": false
    }
  ]
},
{
  "id": "Q-TIN-11D12D-TF-07",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-dao-duc-phap-luat-so",
  "topicName": "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
  "chapterName": "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
  "difficulty": "VanDung",
  "type": "true_false",
  "content": "Trong một buổi hoạt động ngoại khóa tìm hiểu về an toàn thông tin trên Internet, các bạn học sinh thảo luận về cách bảo mật thông tin tài khoản. Hãy đánh giá các ý kiến sau:",
  "hints": {
    "level1_concept": "Đọc kỹ từng mệnh đề và đối chiếu với các nguyên tắc ứng xử văn minh, quy tắc bảo mật và phòng tránh lừa đảo trên mạng.",
    "level2_formula": "Xác định tính đúng/sai của từng ý a, b, c, d dựa trên cơ sở pháp luật, đạo đức và sự an toàn thông tin cá nhân.",
    "level3_steps": "Đánh giá lần lượt từng ý a), b), c), d) để chọn Đúng (True) hoặc Sai (False) tương ứng."
  },
  "explanation": "Đáp án chi tiết từng mệnh đề:\n- Ý a) : Sai (Sai. Mật khẩu là bí mật tuyệt đối của cá nhân, không được chia sẻ cho bất kỳ ai kể cả bạn thân.)\n- Ý b) : Đúng (Đúng. Đổi mật khẩu định kỳ giúp vô hiệu hóa nguy cơ nếu mật khẩu cũ từng bị lộ trên các tệp rò rỉ dữ liệu.)\n- Ý c) : Sai (Sai. Cài đặt thêm phần mềm diệt virus/bảo mật chuyên dụng và cập nhật thường xuyên giúp chống lại các mã độc mới tinh vi.)\n- Ý d) : Đúng (Đúng. Đa phần các vụ cài mã độc gián điệp hay đánh cắp tài khoản đều bắt nguồn từ việc nhấp vào link lạ.)",
  "sourceDocTitle": "Chuyên đề 11D, 12D - DD, VH, PL TRONG MT SO.docx (Google Drive)",
  "tfItems": [
    {
      "id": "a",
      "content": "Chỉ nên chia sẻ mật khẩu với những người bạn thân tin tưởng để đảm bảo an toàn tài khoản.",
      "correctAnswer": false
    },
    {
      "id": "b",
      "content": "Thay đổi mật khẩu định kỳ giúp giảm thiểu nguy cơ bị xâm nhập tài khoản ngoài ý muốn.",
      "correctAnswer": true
    },
    {
      "id": "c",
      "content": "Cài đặt phần mềm bảo mật là không cần thiết vì hệ điều hành đã có sẵn chức năng bảo mật hoàn hảo.",
      "correctAnswer": false
    },
    {
      "id": "d",
      "content": "Cảnh giác và không nhấp vào các liên kết hoặc tệp đính kèm không rõ nguồn gốc giúp bảo vệ dữ liệu cá nhân.",
      "correctAnswer": true
    }
  ]
},
{
  "id": "Q-TIN-11D12D-TF-08",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-dao-duc-phap-luat-so",
  "topicName": "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
  "chapterName": "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
  "difficulty": "VanDung",
  "type": "true_false",
  "content": "Lan tham khảo tài liệu trên Internet và thấy một bản báo cáo đề tài từng đạt giải thưởng cấp tỉnh. Lan tải về máy nhưng biết tài liệu này có bản quyền. Đánh giá các phát biểu sau:",
  "hints": {
    "level1_concept": "Đọc kỹ từng mệnh đề và đối chiếu với các nguyên tắc ứng xử văn minh, quy tắc bảo mật và phòng tránh lừa đảo trên mạng.",
    "level2_formula": "Xác định tính đúng/sai của từng ý a, b, c, d dựa trên cơ sở pháp luật, đạo đức và sự an toàn thông tin cá nhân.",
    "level3_steps": "Đánh giá lần lượt từng ý a), b), c), d) để chọn Đúng (True) hoặc Sai (False) tương ứng."
  },
  "explanation": "Đáp án chi tiết từng mệnh đề:\n- Ý a) : Đúng (Đúng. Tôn trọng quyền tác giả và trích dẫn nguồn minh bạch là quy tắc đạo đức học thuật bắt buộc.)\n- Ý b) : Sai (Sai. Bản quyền tác phẩm vẫn được pháp luật bảo hộ trên không gian mạng; sao chép toàn bộ để dự thi là vi phạm bản quyền.)\n- Ý c) : Đúng (Đúng. Đạo văn hoặc sao chép công trình nghiên cứu của người khác để dự thi sẽ bị hủy kết quả và xử lý kỷ luật.)\n- Ý d) : Sai (Sai. Phát tán tác phẩm có bản quyền không được phép là hành vi xâm phạm quyền tác giả.)",
  "sourceDocTitle": "Chuyên đề 11D, 12D - DD, VH, PL TRONG MT SO.docx (Google Drive)",
  "tfItems": [
    {
      "id": "a",
      "content": "Lan nên xin phép tác giả hoặc ghi rõ nguồn gốc khi sử dụng các phần trích dẫn từ tài liệu có bản quyền.",
      "correctAnswer": true
    },
    {
      "id": "b",
      "content": "Tài liệu trên Internet thì bất cứ ai cũng có thể tự do sao chép làm của mình cho mục đích học tập mà không cần xin phép.",
      "correctAnswer": false
    },
    {
      "id": "c",
      "content": "Lan có thể bị xử lý vi phạm bản quyền nếu sao chép nguyên văn và đăng ký dự thi mang tên mình.",
      "correctAnswer": true
    },
    {
      "id": "d",
      "content": "Lan có thể thoải mái chia sẻ phát tán tài liệu có bản quyền lên các hội nhóm công khai mà không cần ghi nguồn.",
      "correctAnswer": false
    }
  ]
},
{
  "id": "Q-TIN-11D12D-TF-09",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-dao-duc-phap-luat-so",
  "topicName": "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
  "chapterName": "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
  "difficulty": "VanDung",
  "type": "true_false",
  "content": "Hương là tình nguyện viên tích cực, cô thường xuyên chia sẻ những câu chuyện và hình ảnh thiện nguyện ý nghĩa trên mạng xã hội. Đánh giá các ý kiến sau:",
  "hints": {
    "level1_concept": "Đọc kỹ từng mệnh đề và đối chiếu với các nguyên tắc ứng xử văn minh, quy tắc bảo mật và phòng tránh lừa đảo trên mạng.",
    "level2_formula": "Xác định tính đúng/sai của từng ý a, b, c, d dựa trên cơ sở pháp luật, đạo đức và sự an toàn thông tin cá nhân.",
    "level3_steps": "Đánh giá lần lượt từng ý a), b), c), d) để chọn Đúng (True) hoặc Sai (False) tương ứng."
  },
  "explanation": "Đáp án chi tiết từng mệnh đề:\n- Ý a) : Đúng (Đúng. Những câu chuyện người tốt việc tốt giúp lan tỏa năng lượng tích cực và xây dựng cộng đồng nhân văn.)\n- Ý b) : Sai (Sai. Môi trường mạng rất cần những thông điệp đẹp để lấn át những tin tức độc hại, tiêu cực.)\n- Ý c) : Đúng (Đúng. Khuyến khích điều thiện tạo nên hiệu ứng xã hội tích cực, gắn kết mọi người.)\n- Ý d) : Sai (Sai. Mạng xã hội là kênh truyền thông cộng đồng mạnh mẽ để kết nối và kêu gọi tương trợ đồng bào khi gặp khó khăn.)",
  "sourceDocTitle": "Chuyên đề 11D, 12D - DD, VH, PL TRONG MT SO.docx (Google Drive)",
  "tfItems": [
    {
      "id": "a",
      "content": "Việc Hương chia sẻ những nội dung tích cực giúp truyền cảm hứng và lan tỏa lòng nhân ái đến nhiều người.",
      "correctAnswer": true
    },
    {
      "id": "b",
      "content": "Chia sẻ tích cực trên mạng xã hội là không cần thiết vì người khác có thể tự tìm thấy niềm vui riêng.",
      "correctAnswer": false
    },
    {
      "id": "c",
      "content": "Hành động khuyến khích người khác nói lời hay và làm việc thiện sẽ giúp tạo ra cộng đồng mạng văn minh.",
      "correctAnswer": true
    },
    {
      "id": "d",
      "content": "Nên hạn chế tuyệt đối việc chia sẻ các hoạt động thiện nguyện vì mạng xã hội chỉ là nơi giải trí cá nhân.",
      "correctAnswer": false
    }
  ]
},
{
  "id": "Q-TIN-11D12D-TF-10",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-dao-duc-phap-luat-so",
  "topicName": "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
  "chapterName": "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
  "difficulty": "VanDung",
  "type": "true_false",
  "content": "Khi phát hiện một bài viết mang tính xúc phạm, nhục mạ người khác trên mạng xã hội, Nam quyết định không tham gia bình luận mà báo cáo bài viết vi phạm:",
  "hints": {
    "level1_concept": "Đọc kỹ từng mệnh đề và đối chiếu với các nguyên tắc ứng xử văn minh, quy tắc bảo mật và phòng tránh lừa đảo trên mạng.",
    "level2_formula": "Xác định tính đúng/sai của từng ý a, b, c, d dựa trên cơ sở pháp luật, đạo đức và sự an toàn thông tin cá nhân.",
    "level3_steps": "Đánh giá lần lượt từng ý a), b), c), d) để chọn Đúng (True) hoặc Sai (False) tương ứng."
  },
  "explanation": "Đáp án chi tiết từng mệnh đề:\n- Ý a) : Đúng (Đúng. Không hùa theo bạo lực mạng và báo cáo vi phạm là hành động ứng xử rất văn minh.)\n- Ý b) : Sai (Sai. Việc nhảy vào chửi bới, công kích ngược lại sẽ làm leo thang bạo lực ngôn từ và biến mình thành người vi phạm.)\n- Ý c) : Đúng (Đúng. Báo cáo vi phạm giúp thuật toán và ban quản trị nhanh chóng gỡ bỏ nội dung xấu độc.)\n- Ý d) : Sai (Sai. Quyền tự do ngôn luận không bao gồm quyền xúc phạm, bôi nhọ danh dự hay vi phạm pháp luật đối với người khác.)",
  "sourceDocTitle": "Chuyên đề 11D, 12D - DD, VH, PL TRONG MT SO.docx (Google Drive)",
  "tfItems": [
    {
      "id": "a",
      "content": "Nam đã thể hiện sự tôn trọng và tính nhân văn trong cách ứng xử trước các nội dung tiêu cực trên mạng.",
      "correctAnswer": true
    },
    {
      "id": "b",
      "content": "Nam nên viết thêm những bình luận công kích người đăng bài để bảo vệ nạn nhân một cách gay gắt.",
      "correctAnswer": false
    },
    {
      "id": "c",
      "content": "Báo cáo bài viết vi phạm cho ban quản trị là cách xử lý đúng đắn để ngăn chặn nội dung độc hại lan truyền.",
      "correctAnswer": true
    },
    {
      "id": "d",
      "content": "Nam không nên làm gì cả vì mỗi cá nhân đều có quyền tuyệt đối đăng bất cứ nội dung gì họ muốn lên trang cá nhân.",
      "correctAnswer": false
    }
  ]
},
{
  "id": "Q-TIN-11D12D-TF-11",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-dao-duc-phap-luat-so",
  "topicName": "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
  "chapterName": "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
  "difficulty": "VanDung",
  "type": "true_false",
  "content": "Bạn C có một bức ảnh chụp chung với bạn D và vài người bạn trong một buổi họp mặt và muốn đăng lên mạng xã hội. Đánh giá cách xử lý của bạn C:",
  "hints": {
    "level1_concept": "Đọc kỹ từng mệnh đề và đối chiếu với các nguyên tắc ứng xử văn minh, quy tắc bảo mật và phòng tránh lừa đảo trên mạng.",
    "level2_formula": "Xác định tính đúng/sai của từng ý a, b, c, d dựa trên cơ sở pháp luật, đạo đức và sự an toàn thông tin cá nhân.",
    "level3_steps": "Đánh giá lần lượt từng ý a), b), c), d) để chọn Đúng (True) hoặc Sai (False) tương ứng."
  },
  "explanation": "Đáp án chi tiết từng mệnh đề:\n- Ý a) : Sai (Sai. Không được tự ý đăng ảnh rõ mặt người khác khi chưa có sự đồng ý của họ.)\n- Ý b) : Đúng (Đúng. Hỏi ý kiến trước khi đăng ảnh thể hiện sự tôn trọng quyền riêng tư của bạn bè.)\n- Ý c) : Sai (Sai. Dù tag ai thì bức ảnh vẫn công khai hình ảnh của những người chưa đồng ý.)\n- Ý d) : Đúng (Đúng. Đây là cách ứng xử lịch sự, tôn trọng mong muốn riêng tư của người khác.)",
  "sourceDocTitle": "Chuyên đề 11D, 12D - DD, VH, PL TRONG MT SO.docx (Google Drive)",
  "tfItems": [
    {
      "id": "a",
      "content": "Bạn C đăng ảnh lên mà không hỏi ý kiến ai vì cho rằng buổi họp mặt vui vẻ không có gì nhạy cảm.",
      "correctAnswer": false
    },
    {
      "id": "b",
      "content": "Bạn C hỏi ý kiến tất cả mọi người có mặt trong ảnh trước khi đăng để đảm bảo không ai cảm thấy khó chịu.",
      "correctAnswer": true
    },
    {
      "id": "c",
      "content": "Bạn C đăng ảnh lên công khai nhưng chỉ gắn thẻ (tag) tên những người bạn thân thiết nhất.",
      "correctAnswer": false
    },
    {
      "id": "d",
      "content": "Nếu có người không đồng ý xuất hiện, bạn C có thể chỉnh sửa cắt ảnh hoặc chỉ đăng hình ảnh của cá nhân mình.",
      "correctAnswer": true
    }
  ]
},
{
  "id": "Q-TIN-11D12D-TF-12",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-dao-duc-phap-luat-so",
  "topicName": "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
  "chapterName": "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
  "difficulty": "VanDung",
  "type": "true_false",
  "content": "Bạn A kết bạn với B trên diễn đàn du lịch. B giới thiệu là người bản xứ khu vực X và chia sẻ nhiều kinh nghiệm. Tuy nhiên, B là sinh viên ngành khác, không học về lịch sử du lịch. Đánh giá tính xác thực của thông tin từ B:",
  "hints": {
    "level1_concept": "Đọc kỹ từng mệnh đề và đối chiếu với các nguyên tắc ứng xử văn minh, quy tắc bảo mật và phòng tránh lừa đảo trên mạng.",
    "level2_formula": "Xác định tính đúng/sai của từng ý a, b, c, d dựa trên cơ sở pháp luật, đạo đức và sự an toàn thông tin cá nhân.",
    "level3_steps": "Đánh giá lần lượt từng ý a), b), c), d) để chọn Đúng (True) hoặc Sai (False) tương ứng."
  },
  "explanation": "Đáp án chi tiết từng mệnh đề:\n- Ý a) : Sai (Sai. Kinh nghiệm cá nhân có thể mang tính chủ quan hoặc nhầm lẫn, không thể coi là tuyệt đối chuẩn xác.)\n- Ý b) : Đúng (Đúng. Cần kiểm chứng lại qua sách báo, cổng thông tin du lịch chính thức của địa phương.)\n- Ý c) : Sai (Sai. Không thể dùng chia sẻ diễn đàn không được kiểm định để làm tài liệu nghiên cứu.)\n- Ý d) : Đúng (Đúng. Luôn duy trì tư duy phản biện và cẩn trọng với thông tin truyền miệng trên không gian mạng.)",
  "sourceDocTitle": "Chuyên đề 11D, 12D - DD, VH, PL TRONG MT SO.docx (Google Drive)",
  "tfItems": [
    {
      "id": "a",
      "content": "Thông tin của B chắc chắn có tính chân thực tuyệt đối vì là người sinh sống tại đó.",
      "correctAnswer": false
    },
    {
      "id": "b",
      "content": "Thông tin của B thiếu cơ sở kiểm chứng khoa học, cần phải đối chiếu với các nguồn tài liệu chính thống.",
      "correctAnswer": true
    },
    {
      "id": "c",
      "content": "Có độ chính xác cao và có thể trích dẫn làm tài liệu khoa học mà không cần tra cứu thêm.",
      "correctAnswer": false
    },
    {
      "id": "d",
      "content": "Tính chân thực không rõ ràng, cần phải thận trọng khi tiếp nhận và sử dụng những thông tin này.",
      "correctAnswer": true
    }
  ]
},
{
  "id": "Q-TIN-11D12D-TF-13",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-dao-duc-phap-luat-so",
  "topicName": "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
  "chapterName": "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
  "difficulty": "VanDung",
  "type": "true_false",
  "content": "Tính nhân văn thể hiện trong các tình huống giao tiếp trên không gian mạng sau đây là đúng hay sai?",
  "hints": {
    "level1_concept": "Đọc kỹ từng mệnh đề và đối chiếu với các nguyên tắc ứng xử văn minh, quy tắc bảo mật và phòng tránh lừa đảo trên mạng.",
    "level2_formula": "Xác định tính đúng/sai của từng ý a, b, c, d dựa trên cơ sở pháp luật, đạo đức và sự an toàn thông tin cá nhân.",
    "level3_steps": "Đánh giá lần lượt từng ý a), b), c), d) để chọn Đúng (True) hoặc Sai (False) tương ứng."
  },
  "explanation": "Đáp án chi tiết từng mệnh đề:\n- Ý a) : Đúng (Đúng. Tác phong nghiêm túc khi học online thể hiện sự tôn trọng công sức của giáo viên và tập thể lớp.)\n- Ý b) : Sai (Sai. Lắng nghe và tôn trọng lẫn nhau là yếu tố quyết định sự thành bại và chất lượng của buổi thảo luận.)\n- Ý c) : Đúng (Đúng. Thái độ nhã nhặn giúp gắn kết mọi người và tạo lập môi trường giao lưu lành mạnh.)\n- Ý d) : Sai (Sai. Bảo vệ môi trường sống chung của cộng đồng là một hành động mang tính nhân văn sâu sắc.)",
  "sourceDocTitle": "Chuyên đề 11D, 12D - DD, VH, PL TRONG MT SO.docx (Google Drive)",
  "tfItems": [
    {
      "id": "a",
      "content": "Việc ăn mặc lịch sự và thái độ nghiêm túc khi tham gia lớp học trực tuyến thể hiện tính nhân văn và sự tôn trọng thầy cô, bạn bè.",
      "correctAnswer": true
    },
    {
      "id": "b",
      "content": "Việc lắng nghe và tôn trọng ý kiến của người khác trong giao tiếp trực tuyến không ảnh hưởng gì đến chất lượng cuộc thảo luận.",
      "correctAnswer": false
    },
    {
      "id": "c",
      "content": "Tôn trọng và cư xử lịch thiệp trong các cuộc thảo luận trên mạng xã hội giúp xây dựng mối quan hệ tích cực giữa các thành viên.",
      "correctAnswer": true
    },
    {
      "id": "d",
      "content": "Tham gia diễn đàn bảo vệ môi trường chỉ là một hình thức giao tiếp bình thường, không liên quan gì đến tính nhân văn.",
      "correctAnswer": false
    }
  ]
},
{
  "id": "Q-TIN-11D12D-TF-14",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-dao-duc-phap-luat-so",
  "topicName": "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
  "chapterName": "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
  "difficulty": "VanDung",
  "type": "true_false",
  "content": "Trong một nhóm thảo luận trực tuyến, thành viên E đưa ra ý kiến. Thành viên F không đồng ý và có hành động chỉ trích cùng lời đe dọa với E. Đánh giá cách xử lý của E:",
  "hints": {
    "level1_concept": "Đọc kỹ từng mệnh đề và đối chiếu với các nguyên tắc ứng xử văn minh, quy tắc bảo mật và phòng tránh lừa đảo trên mạng.",
    "level2_formula": "Xác định tính đúng/sai của từng ý a, b, c, d dựa trên cơ sở pháp luật, đạo đức và sự an toàn thông tin cá nhân.",
    "level3_steps": "Đánh giá lần lượt từng ý a), b), c), d) để chọn Đúng (True) hoặc Sai (False) tương ứng."
  },
  "explanation": "Đáp án chi tiết từng mệnh đề:\n- Ý a) : Sai (Sai. Khi bị đe dọa, không nên coi thường mà cần có biện pháp an toàn ngăn chặn nguy cơ.)\n- Ý b) : Đúng (Đúng. Giữ bình tĩnh giúp không làm bùng phát thêm tranh cãi tiêu cực.)\n- Ý c) : Sai (Sai. Đáp trả bằng ngôn từ thô bạo sẽ biến cuộc thảo luận thành vi phạm quy tắc ứng xử của nhóm.)\n- Ý d) : Đúng (Đúng. Báo cáo vi phạm cho quản trị viên là cách xử lý văn minh và hiệu quả để duy trì nội quy nhóm.)",
  "sourceDocTitle": "Chuyên đề 11D, 12D - DD, VH, PL TRONG MT SO.docx (Google Drive)",
  "tfItems": [
    {
      "id": "a",
      "content": "Thành viên E bỏ qua bình luận của F và tiếp tục thảo luận mà không có bất kỳ biện pháp bảo vệ mình.",
      "correctAnswer": false
    },
    {
      "id": "b",
      "content": "Thành viên E giữ bình tĩnh, giải thích lại quan điểm của mình một cách chừng mực để duy trì không khí tôn trọng.",
      "correctAnswer": true
    },
    {
      "id": "c",
      "content": "Thành viên E đáp trả F bằng những lời lẽ gay gắt, thô lỗ để bảo vệ quan điểm của mình.",
      "correctAnswer": false
    },
    {
      "id": "d",
      "content": "Thành viên E thu thập bằng chứng và báo cáo hành vi quấy rối, đe dọa của F với quản trị viên nhóm.",
      "correctAnswer": true
    }
  ]
},
{
  "id": "Q-TIN-11D12D-TF-15",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-dao-duc-phap-luat-so",
  "topicName": "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
  "chapterName": "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
  "difficulty": "VanDung",
  "type": "true_false",
  "content": "Trong một diễn đàn quốc tế, một thành viên chia sẻ video về văn hóa truyền thống của nước mình nhưng một số người khác lại để lại bình luận chế giễu, thiếu tôn trọng. Đánh giá các ý kiến sau:",
  "hints": {
    "level1_concept": "Đọc kỹ từng mệnh đề và đối chiếu với các nguyên tắc ứng xử văn minh, quy tắc bảo mật và phòng tránh lừa đảo trên mạng.",
    "level2_formula": "Xác định tính đúng/sai của từng ý a, b, c, d dựa trên cơ sở pháp luật, đạo đức và sự an toàn thông tin cá nhân.",
    "level3_steps": "Đánh giá lần lượt từng ý a), b), c), d) để chọn Đúng (True) hoặc Sai (False) tương ứng."
  },
  "explanation": "Đáp án chi tiết từng mệnh đề:\n- Ý a) : Đúng (Đúng. Kỳ thị, miệt thị văn hóa dân tộc khác là hành vi đi ngược lại chuẩn mực đạo đức quốc tế.)\n- Ý b) : Sai (Sai. Phê phán phiến diện mà không tìm hiểu nguồn gốc văn hóa là thái độ định kiến và hẹp hòi.)\n- Ý c) : Sai (Sai. Mọi nền tảng trực tuyến đều có tiêu chuẩn cộng đồng nghiêm cấm hành vi thù hằn và phân biệt đối xử.)\n- Ý d) : Đúng (Đúng. Tôn trọng sự đa dạng văn hóa là giá trị cốt lõi của tính nhân văn trong kỷ nguyên số toàn cầu.)",
  "sourceDocTitle": "Chuyên đề 11D, 12D - DD, VH, PL TRONG MT SO.docx (Google Drive)",
  "tfItems": [
    {
      "id": "a",
      "content": "Bình luận chế giễu, không tôn trọng phong tục và truyền thống của một nền văn hóa khác là hành vi thiếu văn minh, không đúng mực.",
      "correctAnswer": true
    },
    {
      "id": "b",
      "content": "Người khác có toàn quyền chỉ trích gay gắt văn hóa của một quốc gia mà không cần phải tìm hiểu hay tôn trọng sự khác biệt.",
      "correctAnswer": false
    },
    {
      "id": "c",
      "content": "Mọi người nên cảm thấy tự do công kích văn hóa của người khác vì không gian mạng không có quy tắc ràng buộc.",
      "correctAnswer": false
    },
    {
      "id": "d",
      "content": "Khuyến khích mọi người tìm hiểu và tôn trọng sự khác biệt văn hóa là cách tốt nhất để duy trì một môi trường giao tiếp tích cực, đoàn kết.",
      "correctAnswer": true
    }
  ]
}
,
{
  "id": "Q-TIN-12G-MC-01",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-huong-nghiep-dich-vu",
  "topicName": "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ và quản trị",
  "chapterName": "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Phát biểu nào sau đây mô tả đúng về nghề Sửa chữa và bảo trì máy tính?",
  "options": [
    {
      "id": "A",
      "content": "Yêu cầu phải biết lập trinh."
    },
    {
      "id": "B",
      "content": "Không đòi hỏi kĩ năng giao tiếp."
    },
    {
      "id": "C",
      "content": "Yêu cầu phải biết điều chỉnh, tối ưu hoá các thông số cấu hình cho hệ điều hành và các phần mềm ứng dụng."
    },
    {
      "id": "D",
      "content": "Yêu cầu phải biểt sử dụng thành thạo tất cả những phần mềm ứng dụng thường gặp trong máy tính của người dùng."
    }
  ],
  "correctAnswer": "C",
  "hints": {
    "level1_concept": "Nắm vững đặc điểm, nhiệm vụ và yêu cầu chuyên môn của các nhóm nghề CNTT: Sửa chữa & bảo trì máy tính, Quản trị mạng và hệ thống, Bảo mật hệ thống thông tin.",
    "level2_formula": "Xác định rõ vị trí công việc (Kĩ thuật viên CNTT, Quản trị mạng/hệ thống, Kĩ sư an toàn thông tin) hoặc yêu cầu về kỹ năng/pháp luật trong câu hỏi.",
    "level3_steps": "Đối chiếu các phương án A, B, C, D với nội dung bài học Chuyên đề 12G để chọn đáp án đúng: C."
  },
  "explanation": "Đáp án đúng là C. Theo Chuyên đề 12G: Yêu cầu phải biết điều chỉnh, tối ưu hoá các thông số cấu hình cho hệ điều hành và các phần mềm ứng dụng.",
  "sourceDocTitle": "Chuyên đề 12G. Giới thiệu nhóm nghề dịch vụ và quản trị.docx (Google Drive)"
},
{
  "id": "Q-TIN-12G-MC-02",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-huong-nghiep-dich-vu",
  "topicName": "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ và quản trị",
  "chapterName": "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Phát biểu nào sau đây mô tả đúng về nghề Quản trị mạng và hệ thống?",
  "options": [
    {
      "id": "A",
      "content": "Kĩ thuật viên công nghệ thông tin là người phụ trách công việc Quản trị mạng và hệ thống."
    },
    {
      "id": "B",
      "content": "Người Quản trị mạng và hệ thống nhất thiết phải lập trình thành thạo."
    },
    {
      "id": "C",
      "content": "Để trở thành người Quản trị mạng và hệ thống cần phải được đào tạo một cách bài bản ở các bậc học tiếp theo."
    },
    {
      "id": "D",
      "content": "Trong các văn bản pháp luật, không có nội dung nào liên quan đến công việc của người quán trị mạng và hệ thống."
    }
  ],
  "correctAnswer": "C",
  "hints": {
    "level1_concept": "Nắm vững đặc điểm, nhiệm vụ và yêu cầu chuyên môn của các nhóm nghề CNTT: Sửa chữa & bảo trì máy tính, Quản trị mạng và hệ thống, Bảo mật hệ thống thông tin.",
    "level2_formula": "Xác định rõ vị trí công việc (Kĩ thuật viên CNTT, Quản trị mạng/hệ thống, Kĩ sư an toàn thông tin) hoặc yêu cầu về kỹ năng/pháp luật trong câu hỏi.",
    "level3_steps": "Đối chiếu các phương án A, B, C, D với nội dung bài học Chuyên đề 12G để chọn đáp án đúng: C."
  },
  "explanation": "Đáp án đúng là C. Theo Chuyên đề 12G: Để trở thành người Quản trị mạng và hệ thống cần phải được đào tạo một cách bài bản ở các bậc học tiếp theo.",
  "sourceDocTitle": "Chuyên đề 12G. Giới thiệu nhóm nghề dịch vụ và quản trị.docx (Google Drive)"
},
{
  "id": "Q-TIN-12G-MC-03",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-huong-nghiep-dich-vu",
  "topicName": "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ và quản trị",
  "chapterName": "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Phát biểu nào sau đây mô tà sai về nghề Bảo mật hệ thống thông tin?",
  "options": [
    {
      "id": "A",
      "content": "Cần có hiểu biết sâu về các phương thức tấn công mạng, phương thức lây lan và phá hoại của các phần mềm độc hại."
    },
    {
      "id": "B",
      "content": "Phải có khả năng thiết lập và vận hành hệ thống bảo vệ cho mạng LAN."
    },
    {
      "id": "C",
      "content": "Phải biết lắp đặt, sửa chữa, thay thế các bộ phận hay linh kiện bị hỏng trong máy tính."
    },
    {
      "id": "D",
      "content": "Có nhiều ngành học ở bậc học tiếp theo đang đào tạo nhân lực cho nghề Bảo mật hệ thống thông tin, chẳng hạn như: An ninh mạng, Quản trị mạng."
    }
  ],
  "correctAnswer": "C",
  "hints": {
    "level1_concept": "Nắm vững đặc điểm, nhiệm vụ và yêu cầu chuyên môn của các nhóm nghề CNTT: Sửa chữa & bảo trì máy tính, Quản trị mạng và hệ thống, Bảo mật hệ thống thông tin.",
    "level2_formula": "Xác định rõ vị trí công việc (Kĩ thuật viên CNTT, Quản trị mạng/hệ thống, Kĩ sư an toàn thông tin) hoặc yêu cầu về kỹ năng/pháp luật trong câu hỏi.",
    "level3_steps": "Đối chiếu các phương án A, B, C, D với nội dung bài học Chuyên đề 12G để chọn đáp án đúng: C."
  },
  "explanation": "Đáp án đúng là C. Theo Chuyên đề 12G: Phải biết lắp đặt, sửa chữa, thay thế các bộ phận hay linh kiện bị hỏng trong máy tính.",
  "sourceDocTitle": "Chuyên đề 12G. Giới thiệu nhóm nghề dịch vụ và quản trị.docx (Google Drive)"
},
{
  "id": "Q-TIN-12G-MC-04",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-huong-nghiep-dich-vu",
  "topicName": "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ và quản trị",
  "chapterName": "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Nhiệm vụ nào sau đây là công việc chính của một kĩ sư quản trị mạng?",
  "options": [
    {
      "id": "A",
      "content": "Phát triển và triển khai các biện pháp bảo mật mạng để ngăn chặn các cuộc tấn công từ hacker."
    },
    {
      "id": "B",
      "content": "Cài đặt phần cứng và phần mềm cho hệ thống mạng."
    },
    {
      "id": "C",
      "content": "Xây dựng các hệ thống quản lí CSDL trên mạng để lưu trữ thông tin quan trọng của doanh nghiệp."
    },
    {
      "id": "D",
      "content": "Phân tích và xác định nhu cầu về hệ thống thông tin của tổ chức."
    }
  ],
  "correctAnswer": "A",
  "hints": {
    "level1_concept": "Nắm vững đặc điểm, nhiệm vụ và yêu cầu chuyên môn của các nhóm nghề CNTT: Sửa chữa & bảo trì máy tính, Quản trị mạng và hệ thống, Bảo mật hệ thống thông tin.",
    "level2_formula": "Xác định rõ vị trí công việc (Kĩ thuật viên CNTT, Quản trị mạng/hệ thống, Kĩ sư an toàn thông tin) hoặc yêu cầu về kỹ năng/pháp luật trong câu hỏi.",
    "level3_steps": "Đối chiếu các phương án A, B, C, D với nội dung bài học Chuyên đề 12G để chọn đáp án đúng: A."
  },
  "explanation": "Đáp án đúng là A. Theo Chuyên đề 12G: Phát triển và triển khai các biện pháp bảo mật mạng để ngăn chặn các cuộc tấn công từ hacker.",
  "sourceDocTitle": "Chuyên đề 12G. Giới thiệu nhóm nghề dịch vụ và quản trị.docx (Google Drive)"
},
{
  "id": "Q-TIN-12G-MC-05",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-huong-nghiep-dich-vu",
  "topicName": "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ và quản trị",
  "chapterName": "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Trong lĩnh vực Sửa chữa và bảo trì máy tính, vai trò chính của kĩ thuật viên là gì?",
  "options": [
    {
      "id": "A",
      "content": "Xây dựng CSDL."
    },
    {
      "id": "B",
      "content": "Phân tích dữ liệu."
    },
    {
      "id": "C",
      "content": "Sửa chữa và bảo trì phần cứng máy tính."
    },
    {
      "id": "D",
      "content": "Phát triển ứng dụng di động."
    }
  ],
  "correctAnswer": "C",
  "hints": {
    "level1_concept": "Nắm vững đặc điểm, nhiệm vụ và yêu cầu chuyên môn của các nhóm nghề CNTT: Sửa chữa & bảo trì máy tính, Quản trị mạng và hệ thống, Bảo mật hệ thống thông tin.",
    "level2_formula": "Xác định rõ vị trí công việc (Kĩ thuật viên CNTT, Quản trị mạng/hệ thống, Kĩ sư an toàn thông tin) hoặc yêu cầu về kỹ năng/pháp luật trong câu hỏi.",
    "level3_steps": "Đối chiếu các phương án A, B, C, D với nội dung bài học Chuyên đề 12G để chọn đáp án đúng: C."
  },
  "explanation": "Đáp án đúng là C. Theo Chuyên đề 12G: Sửa chữa và bảo trì phần cứng máy tính.",
  "sourceDocTitle": "Chuyên đề 12G. Giới thiệu nhóm nghề dịch vụ và quản trị.docx (Google Drive)"
},
{
  "id": "Q-TIN-12G-MC-06",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-huong-nghiep-dich-vu",
  "topicName": "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ và quản trị",
  "chapterName": "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Chuyên gia phân tích thiết kế hệ thống thường làm công việc gì sau đây?",
  "options": [
    {
      "id": "A",
      "content": "Phân tích và thiết kế trang web."
    },
    {
      "id": "B",
      "content": "Phân tích và lập kế hoạch cho hệ thống thông tin."
    },
    {
      "id": "C",
      "content": "Bảo trì hệ thống thông tin."
    },
    {
      "id": "D",
      "content": "Phân tích dữ liệu và dự báo xu hướng phát triển."
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nắm vững đặc điểm, nhiệm vụ và yêu cầu chuyên môn của các nhóm nghề CNTT: Sửa chữa & bảo trì máy tính, Quản trị mạng và hệ thống, Bảo mật hệ thống thông tin.",
    "level2_formula": "Xác định rõ vị trí công việc (Kĩ thuật viên CNTT, Quản trị mạng/hệ thống, Kĩ sư an toàn thông tin) hoặc yêu cầu về kỹ năng/pháp luật trong câu hỏi.",
    "level3_steps": "Đối chiếu các phương án A, B, C, D với nội dung bài học Chuyên đề 12G để chọn đáp án đúng: B."
  },
  "explanation": "Đáp án đúng là B. Theo Chuyên đề 12G: Phân tích và lập kế hoạch cho hệ thống thông tin.",
  "sourceDocTitle": "Chuyên đề 12G. Giới thiệu nhóm nghề dịch vụ và quản trị.docx (Google Drive)"
},
{
  "id": "Q-TIN-12G-MC-07",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-huong-nghiep-dich-vu",
  "topicName": "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ và quản trị",
  "chapterName": "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Bảo mật hệ thống thông tin đóng vai trò như thế nào trong doanh nghiệp?",
  "options": [
    {
      "id": "A",
      "content": "Bảo vệ thông tin cá nhân của nhân viên."
    },
    {
      "id": "B",
      "content": "Ngăn chặn các cuộc tấn công mạng."
    },
    {
      "id": "C",
      "content": "Tăng cường tương tác trực tuyến."
    },
    {
      "id": "D",
      "content": "Quản lí hệ thống máy chủ."
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nắm vững đặc điểm, nhiệm vụ và yêu cầu chuyên môn của các nhóm nghề CNTT: Sửa chữa & bảo trì máy tính, Quản trị mạng và hệ thống, Bảo mật hệ thống thông tin.",
    "level2_formula": "Xác định rõ vị trí công việc (Kĩ thuật viên CNTT, Quản trị mạng/hệ thống, Kĩ sư an toàn thông tin) hoặc yêu cầu về kỹ năng/pháp luật trong câu hỏi.",
    "level3_steps": "Đối chiếu các phương án A, B, C, D với nội dung bài học Chuyên đề 12G để chọn đáp án đúng: B."
  },
  "explanation": "Đáp án đúng là B. Theo Chuyên đề 12G: Ngăn chặn các cuộc tấn công mạng.",
  "sourceDocTitle": "Chuyên đề 12G. Giới thiệu nhóm nghề dịch vụ và quản trị.docx (Google Drive)"
},
{
  "id": "Q-TIN-12G-MC-08",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-huong-nghiep-dich-vu",
  "topicName": "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ và quản trị",
  "chapterName": "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Đối với nhóm nghề Sửa chữa và bảo trì máy tính, yêu cầu cần có kiến thức và kĩ năng gì?",
  "options": [
    {
      "id": "A",
      "content": "Hiểu biết về lập trình máy tính và thành thạo một ngôn ngữ lập trình."
    },
    {
      "id": "B",
      "content": "Kĩ năng sửa chữa và thay thế linh kiện phần cứng máy tính."
    },
    {
      "id": "C",
      "content": "Kiến thức về phân tích dữ liệu."
    },
    {
      "id": "D",
      "content": "Nắm vững về quản lí dự án công nghệ thông tin."
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nắm vững đặc điểm, nhiệm vụ và yêu cầu chuyên môn của các nhóm nghề CNTT: Sửa chữa & bảo trì máy tính, Quản trị mạng và hệ thống, Bảo mật hệ thống thông tin.",
    "level2_formula": "Xác định rõ vị trí công việc (Kĩ thuật viên CNTT, Quản trị mạng/hệ thống, Kĩ sư an toàn thông tin) hoặc yêu cầu về kỹ năng/pháp luật trong câu hỏi.",
    "level3_steps": "Đối chiếu các phương án A, B, C, D với nội dung bài học Chuyên đề 12G để chọn đáp án đúng: B."
  },
  "explanation": "Đáp án đúng là B. Theo Chuyên đề 12G: Kĩ năng sửa chữa và thay thế linh kiện phần cứng máy tính.",
  "sourceDocTitle": "Chuyên đề 12G. Giới thiệu nhóm nghề dịch vụ và quản trị.docx (Google Drive)"
},
{
  "id": "Q-TIN-12G-MC-09",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-huong-nghiep-dich-vu",
  "topicName": "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ và quản trị",
  "chapterName": "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Phương án nào sau đây là kĩ năng không cần thiết đối với nhân lực trong nghề bảo mật hệ thống thông tin?",
  "options": [
    {
      "id": "A",
      "content": "Kĩ năng phát hiện và phòng ngừa các cuộc tấn công mạng."
    },
    {
      "id": "B",
      "content": "Kĩ năng phân tích và đánh giá các rủi ro bảo mật."
    },
    {
      "id": "C",
      "content": "Kĩ năng phân tích dữ liệu và phát hiện lỗ hổng bảo mật."
    },
    {
      "id": "D",
      "content": "Kĩ năng phân tích và quản trị CSDL."
    }
  ],
  "correctAnswer": "D",
  "hints": {
    "level1_concept": "Nắm vững đặc điểm, nhiệm vụ và yêu cầu chuyên môn của các nhóm nghề CNTT: Sửa chữa & bảo trì máy tính, Quản trị mạng và hệ thống, Bảo mật hệ thống thông tin.",
    "level2_formula": "Xác định rõ vị trí công việc (Kĩ thuật viên CNTT, Quản trị mạng/hệ thống, Kĩ sư an toàn thông tin) hoặc yêu cầu về kỹ năng/pháp luật trong câu hỏi.",
    "level3_steps": "Đối chiếu các phương án A, B, C, D với nội dung bài học Chuyên đề 12G để chọn đáp án đúng: D."
  },
  "explanation": "Đáp án đúng là D. Theo Chuyên đề 12G: Kĩ năng phân tích và quản trị CSDL.",
  "sourceDocTitle": "Chuyên đề 12G. Giới thiệu nhóm nghề dịch vụ và quản trị.docx (Google Drive)"
},
{
  "id": "Q-TIN-12G-MC-10",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-huong-nghiep-dich-vu",
  "topicName": "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ và quản trị",
  "chapterName": "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Ngành học liên quan ở các bậc học tiếp theo sau giáo dục phổ thông cho nhóm nghề quản trị mạng là gì?",
  "options": [
    {
      "id": "A",
      "content": "Khoa học máy tính."
    },
    {
      "id": "B",
      "content": "Hệ thống thông tin quản lí."
    },
    {
      "id": "C",
      "content": "Quản trị kinh doanh."
    },
    {
      "id": "D",
      "content": "Kĩ thuật mạng máy tính."
    }
  ],
  "correctAnswer": "D",
  "hints": {
    "level1_concept": "Nắm vững đặc điểm, nhiệm vụ và yêu cầu chuyên môn của các nhóm nghề CNTT: Sửa chữa & bảo trì máy tính, Quản trị mạng và hệ thống, Bảo mật hệ thống thông tin.",
    "level2_formula": "Xác định rõ vị trí công việc (Kĩ thuật viên CNTT, Quản trị mạng/hệ thống, Kĩ sư an toàn thông tin) hoặc yêu cầu về kỹ năng/pháp luật trong câu hỏi.",
    "level3_steps": "Đối chiếu các phương án A, B, C, D với nội dung bài học Chuyên đề 12G để chọn đáp án đúng: D."
  },
  "explanation": "Đáp án đúng là D. Theo Chuyên đề 12G: Kĩ thuật mạng máy tính.",
  "sourceDocTitle": "Chuyên đề 12G. Giới thiệu nhóm nghề dịch vụ và quản trị.docx (Google Drive)"
},
{
  "id": "Q-TIN-12G-MC-11",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-huong-nghiep-dich-vu",
  "topicName": "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ và quản trị",
  "chapterName": "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Nhu cầu nhân lực của xã hội trong hiện tại và tương lai gần về nhóm nghề Bảo mật hệ thống thông tin là gì?",
  "options": [
    {
      "id": "A",
      "content": "Giảm dần do sự phát triển của công nghệ tự động hoá."
    },
    {
      "id": "B",
      "content": "Tăng cao do nguy cơ tấn công mạng ngày càng gia tăng."
    },
    {
      "id": "C",
      "content": "Ôn định với nhu cầu hiện tại và không có xu hướng thay đổi trong tương lai."
    },
    {
      "id": "D",
      "content": "Giảm do chuyển sang các nghề khác như quản lí dữ liệu, lập trình hệ thống...."
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nắm vững đặc điểm, nhiệm vụ và yêu cầu chuyên môn của các nhóm nghề CNTT: Sửa chữa & bảo trì máy tính, Quản trị mạng và hệ thống, Bảo mật hệ thống thông tin.",
    "level2_formula": "Xác định rõ vị trí công việc (Kĩ thuật viên CNTT, Quản trị mạng/hệ thống, Kĩ sư an toàn thông tin) hoặc yêu cầu về kỹ năng/pháp luật trong câu hỏi.",
    "level3_steps": "Đối chiếu các phương án A, B, C, D với nội dung bài học Chuyên đề 12G để chọn đáp án đúng: B."
  },
  "explanation": "Đáp án đúng là B. Theo Chuyên đề 12G: Tăng cao do nguy cơ tấn công mạng ngày càng gia tăng.",
  "sourceDocTitle": "Chuyên đề 12G. Giới thiệu nhóm nghề dịch vụ và quản trị.docx (Google Drive)"
},
{
  "id": "Q-TIN-12G-MC-12",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-huong-nghiep-dich-vu",
  "topicName": "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ và quản trị",
  "chapterName": "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Lí do chính nào dẫn đến sự gia tăng nhu cầu tuyển dụng nhân lực trong lĩnh vực Quản trị và bảo trì hệ thống?",
  "options": [
    {
      "id": "A",
      "content": "Sự suy thoái trong việc phát triển các ứng dụng công nghệ thông tin."
    },
    {
      "id": "B",
      "content": "Sự phát triển mạnh mẽ của ngành công nghiệp số."
    },
    {
      "id": "C",
      "content": "Sự tự động hoá trong quản trị hệ thống, giảm thiểu nguy cơ lỗi do con người."
    },
    {
      "id": "D",
      "content": "Sự thay đổi xu hướng sử dụng máy tính và mạng lưới trong doanh nghiệp."
    }
  ],
  "correctAnswer": "C",
  "hints": {
    "level1_concept": "Nắm vững đặc điểm, nhiệm vụ và yêu cầu chuyên môn của các nhóm nghề CNTT: Sửa chữa & bảo trì máy tính, Quản trị mạng và hệ thống, Bảo mật hệ thống thông tin.",
    "level2_formula": "Xác định rõ vị trí công việc (Kĩ thuật viên CNTT, Quản trị mạng/hệ thống, Kĩ sư an toàn thông tin) hoặc yêu cầu về kỹ năng/pháp luật trong câu hỏi.",
    "level3_steps": "Đối chiếu các phương án A, B, C, D với nội dung bài học Chuyên đề 12G để chọn đáp án đúng: C."
  },
  "explanation": "Đáp án đúng là C. Theo Chuyên đề 12G: Sự tự động hoá trong quản trị hệ thống, giảm thiểu nguy cơ lỗi do con người.",
  "sourceDocTitle": "Chuyên đề 12G. Giới thiệu nhóm nghề dịch vụ và quản trị.docx (Google Drive)"
},
{
  "id": "Q-TIN-12G-MC-13",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-huong-nghiep-dich-vu",
  "topicName": "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ và quản trị",
  "chapterName": "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Tình huống nào sau đây mô tả không chính xác về ứng dụng của công nghệ thông tin trong các lĩnh vực khác nhau của đời sống?",
  "options": [
    {
      "id": "A",
      "content": "Trong lĩnh vực y tế, các hệ thống thông tin y tế điện tử có thể lưu trữ và chia sẻ thông tin bệnh án của bệnh nhân giữa các cơ sở y tế khác nhau."
    },
    {
      "id": "B",
      "content": "Trong lĩnh vực giáo dục, các nền tảng học trực tuyến có thể cung cấp tài liệu học tập và bài giảng trực tuyến cho học sinh."
    },
    {
      "id": "C",
      "content": "Trong lĩnh vực tài chính, công nghệ blockchain có thể được sử dụng để tăng cường tính bảo mật và minh bạch trong giao dịch tiền điện tử và chứng khoán."
    },
    {
      "id": "D",
      "content": "Trong lĩnh vực xây dựng, công nghệ thông tin không thể sử dụng để mô phỏng và thiết kế các dự án xây dựng trước khi thực hiện thực tế."
    }
  ],
  "correctAnswer": "D",
  "hints": {
    "level1_concept": "Nắm vững đặc điểm, nhiệm vụ và yêu cầu chuyên môn của các nhóm nghề CNTT: Sửa chữa & bảo trì máy tính, Quản trị mạng và hệ thống, Bảo mật hệ thống thông tin.",
    "level2_formula": "Xác định rõ vị trí công việc (Kĩ thuật viên CNTT, Quản trị mạng/hệ thống, Kĩ sư an toàn thông tin) hoặc yêu cầu về kỹ năng/pháp luật trong câu hỏi.",
    "level3_steps": "Đối chiếu các phương án A, B, C, D với nội dung bài học Chuyên đề 12G để chọn đáp án đúng: D."
  },
  "explanation": "Đáp án đúng là D. Theo Chuyên đề 12G: Trong lĩnh vực xây dựng, công nghệ thông tin không thể sử dụng để mô phỏng và thiết kế các dự án xây dựng trước khi thực hiện thực tế.",
  "sourceDocTitle": "Chuyên đề 12G. Giới thiệu nhóm nghề dịch vụ và quản trị.docx (Google Drive)"
},
{
  "id": "Q-TIN-12G-MC-14",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-huong-nghiep-dich-vu",
  "topicName": "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ và quản trị",
  "chapterName": "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Lĩnh vực nào không phải là thành phần của công nghệ thông tin?",
  "options": [
    {
      "id": "A",
      "content": "Lập trình"
    },
    {
      "id": "B",
      "content": "Quản trị mạng"
    },
    {
      "id": "C",
      "content": "Thiết kế đồ họa"
    },
    {
      "id": "D",
      "content": "Nông nghiệp"
    }
  ],
  "correctAnswer": "D",
  "hints": {
    "level1_concept": "Nắm vững đặc điểm, nhiệm vụ và yêu cầu chuyên môn của các nhóm nghề CNTT: Sửa chữa & bảo trì máy tính, Quản trị mạng và hệ thống, Bảo mật hệ thống thông tin.",
    "level2_formula": "Xác định rõ vị trí công việc (Kĩ thuật viên CNTT, Quản trị mạng/hệ thống, Kĩ sư an toàn thông tin) hoặc yêu cầu về kỹ năng/pháp luật trong câu hỏi.",
    "level3_steps": "Đối chiếu các phương án A, B, C, D với nội dung bài học Chuyên đề 12G để chọn đáp án đúng: D."
  },
  "explanation": "Đáp án đúng là D. Theo Chuyên đề 12G: Nông nghiệp",
  "sourceDocTitle": "Chuyên đề 12G. Giới thiệu nhóm nghề dịch vụ và quản trị.docx (Google Drive)"
},
{
  "id": "Q-TIN-12G-MC-15",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-huong-nghiep-dich-vu",
  "topicName": "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ và quản trị",
  "chapterName": "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Kỹ năng nào là quan trọng nhất đối với một lập trình viên?",
  "options": [
    {
      "id": "A",
      "content": "Giải quyết vấn đề"
    },
    {
      "id": "B",
      "content": "Quản lý thời gian"
    },
    {
      "id": "C",
      "content": "Giao tiếp"
    },
    {
      "id": "D",
      "content": "Làm việc nhóm"
    }
  ],
  "correctAnswer": "A",
  "hints": {
    "level1_concept": "Nắm vững đặc điểm, nhiệm vụ và yêu cầu chuyên môn của các nhóm nghề CNTT: Sửa chữa & bảo trì máy tính, Quản trị mạng và hệ thống, Bảo mật hệ thống thông tin.",
    "level2_formula": "Xác định rõ vị trí công việc (Kĩ thuật viên CNTT, Quản trị mạng/hệ thống, Kĩ sư an toàn thông tin) hoặc yêu cầu về kỹ năng/pháp luật trong câu hỏi.",
    "level3_steps": "Đối chiếu các phương án A, B, C, D với nội dung bài học Chuyên đề 12G để chọn đáp án đúng: A."
  },
  "explanation": "Đáp án đúng là A. Theo Chuyên đề 12G: Giải quyết vấn đề",
  "sourceDocTitle": "Chuyên đề 12G. Giới thiệu nhóm nghề dịch vụ và quản trị.docx (Google Drive)"
},
{
  "id": "Q-TIN-12G-MC-16",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-huong-nghiep-dich-vu",
  "topicName": "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ và quản trị",
  "chapterName": "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Dịch vụ sửa chữa và bảo trì máy tính có nhiệm vụ gì?",
  "options": [
    {
      "id": "A",
      "content": "Chỉ bảo trì phần cứng."
    },
    {
      "id": "B",
      "content": "Hỗ trợ kỹ thuật cho người dùng."
    },
    {
      "id": "C",
      "content": "Chỉ sửa chữa phần mềm."
    },
    {
      "id": "D",
      "content": "Chỉ cung cấp phần mềm mới."
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nắm vững đặc điểm, nhiệm vụ và yêu cầu chuyên môn của các nhóm nghề CNTT: Sửa chữa & bảo trì máy tính, Quản trị mạng và hệ thống, Bảo mật hệ thống thông tin.",
    "level2_formula": "Xác định rõ vị trí công việc (Kĩ thuật viên CNTT, Quản trị mạng/hệ thống, Kĩ sư an toàn thông tin) hoặc yêu cầu về kỹ năng/pháp luật trong câu hỏi.",
    "level3_steps": "Đối chiếu các phương án A, B, C, D với nội dung bài học Chuyên đề 12G để chọn đáp án đúng: B."
  },
  "explanation": "Đáp án đúng là B. Theo Chuyên đề 12G: Hỗ trợ kỹ thuật cho người dùng.",
  "sourceDocTitle": "Chuyên đề 12G. Giới thiệu nhóm nghề dịch vụ và quản trị.docx (Google Drive)"
},
{
  "id": "Q-TIN-12G-MC-17",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-huong-nghiep-dich-vu",
  "topicName": "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ và quản trị",
  "chapterName": "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Người làm nghề sửa chữa và bảo trì máy tính cần thực hiện công việc gì liên quan tới phần cứng?",
  "options": [
    {
      "id": "A",
      "content": "Chỉ cài đặt phần mềm."
    },
    {
      "id": "B",
      "content": "Kiểm soát và duy trì hoạt động của máy tính."
    },
    {
      "id": "C",
      "content": "Lắp đặt phần mềm bảo mật."
    },
    {
      "id": "D",
      "content": "Cập nhật hệ điều hành."
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nắm vững đặc điểm, nhiệm vụ và yêu cầu chuyên môn của các nhóm nghề CNTT: Sửa chữa & bảo trì máy tính, Quản trị mạng và hệ thống, Bảo mật hệ thống thông tin.",
    "level2_formula": "Xác định rõ vị trí công việc (Kĩ thuật viên CNTT, Quản trị mạng/hệ thống, Kĩ sư an toàn thông tin) hoặc yêu cầu về kỹ năng/pháp luật trong câu hỏi.",
    "level3_steps": "Đối chiếu các phương án A, B, C, D với nội dung bài học Chuyên đề 12G để chọn đáp án đúng: B."
  },
  "explanation": "Đáp án đúng là B. Theo Chuyên đề 12G: Kiểm soát và duy trì hoạt động của máy tính.",
  "sourceDocTitle": "Chuyên đề 12G. Giới thiệu nhóm nghề dịch vụ và quản trị.docx (Google Drive)"
},
{
  "id": "Q-TIN-12G-MC-18",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-huong-nghiep-dich-vu",
  "topicName": "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ và quản trị",
  "chapterName": "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Một trong những công việc liên quan đến phần mềm trong sửa chữa và bảo trì máy tính là gì?",
  "options": [
    {
      "id": "A",
      "content": "Thay thế bo mạch chủ."
    },
    {
      "id": "B",
      "content": "Lắp đặt thêm thiết bị mạng."
    },
    {
      "id": "C",
      "content": "Cài đặt, cấu hình các phần mềm thông dụng."
    },
    {
      "id": "D",
      "content": "Thay màn hình có độ phân giải cao."
    }
  ],
  "correctAnswer": "C",
  "hints": {
    "level1_concept": "Nắm vững đặc điểm, nhiệm vụ và yêu cầu chuyên môn của các nhóm nghề CNTT: Sửa chữa & bảo trì máy tính, Quản trị mạng và hệ thống, Bảo mật hệ thống thông tin.",
    "level2_formula": "Xác định rõ vị trí công việc (Kĩ thuật viên CNTT, Quản trị mạng/hệ thống, Kĩ sư an toàn thông tin) hoặc yêu cầu về kỹ năng/pháp luật trong câu hỏi.",
    "level3_steps": "Đối chiếu các phương án A, B, C, D với nội dung bài học Chuyên đề 12G để chọn đáp án đúng: C."
  },
  "explanation": "Đáp án đúng là C. Theo Chuyên đề 12G: Cài đặt, cấu hình các phần mềm thông dụng.",
  "sourceDocTitle": "Chuyên đề 12G. Giới thiệu nhóm nghề dịch vụ và quản trị.docx (Google Drive)"
},
{
  "id": "Q-TIN-12G-MC-19",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-huong-nghiep-dich-vu",
  "topicName": "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ và quản trị",
  "chapterName": "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Khi sửa chữa phần cứng, điều gì cần được xác định?",
  "options": [
    {
      "id": "A",
      "content": "Loại phần mềm đang sử dụng"
    },
    {
      "id": "B",
      "content": "Nguyên nhân hỏng thiết bị"
    },
    {
      "id": "C",
      "content": "Địa chỉ IP của máy tính"
    },
    {
      "id": "D",
      "content": "Phiên bản hệ điều hành"
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nắm vững đặc điểm, nhiệm vụ và yêu cầu chuyên môn của các nhóm nghề CNTT: Sửa chữa & bảo trì máy tính, Quản trị mạng và hệ thống, Bảo mật hệ thống thông tin.",
    "level2_formula": "Xác định rõ vị trí công việc (Kĩ thuật viên CNTT, Quản trị mạng/hệ thống, Kĩ sư an toàn thông tin) hoặc yêu cầu về kỹ năng/pháp luật trong câu hỏi.",
    "level3_steps": "Đối chiếu các phương án A, B, C, D với nội dung bài học Chuyên đề 12G để chọn đáp án đúng: B."
  },
  "explanation": "Đáp án đúng là B. Theo Chuyên đề 12G: Nguyên nhân hỏng thiết bị",
  "sourceDocTitle": "Chuyên đề 12G. Giới thiệu nhóm nghề dịch vụ và quản trị.docx (Google Drive)"
},
{
  "id": "Q-TIN-12G-MC-20",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-huong-nghiep-dich-vu",
  "topicName": "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ và quản trị",
  "chapterName": "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Một trong những kỹ năng mềm cần thiết cho người làm nghề sửa chữa và bảo trì máy tính là gì?",
  "options": [
    {
      "id": "A",
      "content": "Kỹ năng thiết kế đồ họa"
    },
    {
      "id": "B",
      "content": "Kỹ năng giao tiếp"
    },
    {
      "id": "C",
      "content": "Kỹ năng lập trình web"
    },
    {
      "id": "D",
      "content": "Kỹ năng kế toán"
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nắm vững đặc điểm, nhiệm vụ và yêu cầu chuyên môn của các nhóm nghề CNTT: Sửa chữa & bảo trì máy tính, Quản trị mạng và hệ thống, Bảo mật hệ thống thông tin.",
    "level2_formula": "Xác định rõ vị trí công việc (Kĩ thuật viên CNTT, Quản trị mạng/hệ thống, Kĩ sư an toàn thông tin) hoặc yêu cầu về kỹ năng/pháp luật trong câu hỏi.",
    "level3_steps": "Đối chiếu các phương án A, B, C, D với nội dung bài học Chuyên đề 12G để chọn đáp án đúng: B."
  },
  "explanation": "Đáp án đúng là B. Theo Chuyên đề 12G: Kỹ năng giao tiếp",
  "sourceDocTitle": "Chuyên đề 12G. Giới thiệu nhóm nghề dịch vụ và quản trị.docx (Google Drive)"
},
{
  "id": "Q-TIN-12G-MC-21",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-huong-nghiep-dich-vu",
  "topicName": "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ và quản trị",
  "chapterName": "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Ngành học nào sau đây liên quan đến dịch vụ sửa chữa và bảo trì máy tính?",
  "options": [
    {
      "id": "A",
      "content": "Kỹ thuật sửa chữa, lắp ráp máy tính"
    },
    {
      "id": "B",
      "content": "Kỹ thuật xây dựng"
    },
    {
      "id": "C",
      "content": "Kỹ thuật điện tử viễn thông"
    },
    {
      "id": "D",
      "content": "Kỹ thuật cơ khí"
    }
  ],
  "correctAnswer": "A",
  "hints": {
    "level1_concept": "Nắm vững đặc điểm, nhiệm vụ và yêu cầu chuyên môn của các nhóm nghề CNTT: Sửa chữa & bảo trì máy tính, Quản trị mạng và hệ thống, Bảo mật hệ thống thông tin.",
    "level2_formula": "Xác định rõ vị trí công việc (Kĩ thuật viên CNTT, Quản trị mạng/hệ thống, Kĩ sư an toàn thông tin) hoặc yêu cầu về kỹ năng/pháp luật trong câu hỏi.",
    "level3_steps": "Đối chiếu các phương án A, B, C, D với nội dung bài học Chuyên đề 12G để chọn đáp án đúng: A."
  },
  "explanation": "Đáp án đúng là A. Theo Chuyên đề 12G: Kỹ thuật sửa chữa, lắp ráp máy tính",
  "sourceDocTitle": "Chuyên đề 12G. Giới thiệu nhóm nghề dịch vụ và quản trị.docx (Google Drive)"
},
{
  "id": "Q-TIN-12G-MC-22",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-huong-nghiep-dich-vu",
  "topicName": "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ và quản trị",
  "chapterName": "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Người làm nghề sửa chữa và bảo trì máy tính cần có kiến thức gì về mạng máy tính?",
  "options": [
    {
      "id": "A",
      "content": "Chỉ biết cách lắp đặt phần cứng"
    },
    {
      "id": "B",
      "content": "Có kiến thức cơ bản về kết nối và cấu hình mạng"
    },
    {
      "id": "C",
      "content": "Chỉ cần biết cài đặt phần mềm"
    },
    {
      "id": "D",
      "content": "Chỉ cần hiểu về hệ điều hành"
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nắm vững đặc điểm, nhiệm vụ và yêu cầu chuyên môn của các nhóm nghề CNTT: Sửa chữa & bảo trì máy tính, Quản trị mạng và hệ thống, Bảo mật hệ thống thông tin.",
    "level2_formula": "Xác định rõ vị trí công việc (Kĩ thuật viên CNTT, Quản trị mạng/hệ thống, Kĩ sư an toàn thông tin) hoặc yêu cầu về kỹ năng/pháp luật trong câu hỏi.",
    "level3_steps": "Đối chiếu các phương án A, B, C, D với nội dung bài học Chuyên đề 12G để chọn đáp án đúng: B."
  },
  "explanation": "Đáp án đúng là B. Theo Chuyên đề 12G: Có kiến thức cơ bản về kết nối và cấu hình mạng",
  "sourceDocTitle": "Chuyên đề 12G. Giới thiệu nhóm nghề dịch vụ và quản trị.docx (Google Drive)"
},
{
  "id": "Q-TIN-12G-MC-23",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-huong-nghiep-dich-vu",
  "topicName": "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ và quản trị",
  "chapterName": "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Ngành học nào chú trọng đào tạo về nguyên lý hoạt động và giải quyết các vấn đề phức tạp?",
  "options": [
    {
      "id": "A",
      "content": "Trung cấp nghề"
    },
    {
      "id": "B",
      "content": "Cao đẳng nghề"
    },
    {
      "id": "C",
      "content": "Đại học"
    },
    {
      "id": "D",
      "content": "Đào tạo ngắn hạn"
    }
  ],
  "correctAnswer": "C",
  "hints": {
    "level1_concept": "Nắm vững đặc điểm, nhiệm vụ và yêu cầu chuyên môn của các nhóm nghề CNTT: Sửa chữa & bảo trì máy tính, Quản trị mạng và hệ thống, Bảo mật hệ thống thông tin.",
    "level2_formula": "Xác định rõ vị trí công việc (Kĩ thuật viên CNTT, Quản trị mạng/hệ thống, Kĩ sư an toàn thông tin) hoặc yêu cầu về kỹ năng/pháp luật trong câu hỏi.",
    "level3_steps": "Đối chiếu các phương án A, B, C, D với nội dung bài học Chuyên đề 12G để chọn đáp án đúng: C."
  },
  "explanation": "Đáp án đúng là C. Theo Chuyên đề 12G: Đại học",
  "sourceDocTitle": "Chuyên đề 12G. Giới thiệu nhóm nghề dịch vụ và quản trị.docx (Google Drive)"
},
{
  "id": "Q-TIN-12G-MC-24",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-huong-nghiep-dich-vu",
  "topicName": "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ và quản trị",
  "chapterName": "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Một trong những nhiệm vụ chính của người làm nghề sửa chữa và bảo trì máy tính liên quan đến phần mềm là gì?",
  "options": [
    {
      "id": "A",
      "content": "Thay ổ cứng"
    },
    {
      "id": "B",
      "content": "Cài đặt hoặc cập nhật driver"
    },
    {
      "id": "C",
      "content": "Lắp ráp linh kiện máy tính"
    },
    {
      "id": "D",
      "content": "Bảo trì mạng cục bộ"
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nắm vững đặc điểm, nhiệm vụ và yêu cầu chuyên môn của các nhóm nghề CNTT: Sửa chữa & bảo trì máy tính, Quản trị mạng và hệ thống, Bảo mật hệ thống thông tin.",
    "level2_formula": "Xác định rõ vị trí công việc (Kĩ thuật viên CNTT, Quản trị mạng/hệ thống, Kĩ sư an toàn thông tin) hoặc yêu cầu về kỹ năng/pháp luật trong câu hỏi.",
    "level3_steps": "Đối chiếu các phương án A, B, C, D với nội dung bài học Chuyên đề 12G để chọn đáp án đúng: B."
  },
  "explanation": "Đáp án đúng là B. Theo Chuyên đề 12G: Cài đặt hoặc cập nhật driver",
  "sourceDocTitle": "Chuyên đề 12G. Giới thiệu nhóm nghề dịch vụ và quản trị.docx (Google Drive)"
},
{
  "id": "Q-TIN-12G-MC-25",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-huong-nghiep-dich-vu",
  "topicName": "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ và quản trị",
  "chapterName": "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Một trong những yêu cầu kiến thức chung cho nghề sửa chữa và bảo trì máy tính là gì?",
  "options": [
    {
      "id": "A",
      "content": "Kỹ năng kế toán"
    },
    {
      "id": "B",
      "content": "Kỹ năng lập trình Java"
    },
    {
      "id": "C",
      "content": "Kiến thức về phần cứng"
    },
    {
      "id": "D",
      "content": "Kiến thức về nghệ thuật"
    }
  ],
  "correctAnswer": "C",
  "hints": {
    "level1_concept": "Nắm vững đặc điểm, nhiệm vụ và yêu cầu chuyên môn của các nhóm nghề CNTT: Sửa chữa & bảo trì máy tính, Quản trị mạng và hệ thống, Bảo mật hệ thống thông tin.",
    "level2_formula": "Xác định rõ vị trí công việc (Kĩ thuật viên CNTT, Quản trị mạng/hệ thống, Kĩ sư an toàn thông tin) hoặc yêu cầu về kỹ năng/pháp luật trong câu hỏi.",
    "level3_steps": "Đối chiếu các phương án A, B, C, D với nội dung bài học Chuyên đề 12G để chọn đáp án đúng: C."
  },
  "explanation": "Đáp án đúng là C. Theo Chuyên đề 12G: Kiến thức về phần cứng",
  "sourceDocTitle": "Chuyên đề 12G. Giới thiệu nhóm nghề dịch vụ và quản trị.docx (Google Drive)"
},
{
  "id": "Q-TIN-12G-MC-26",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-huong-nghiep-dich-vu",
  "topicName": "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ và quản trị",
  "chapterName": "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Chuyên gia quản trị mạng có nhiệm vụ chính nào sau đây?",
  "options": [
    {
      "id": "A",
      "content": "Thiết kế đồ họa"
    },
    {
      "id": "B",
      "content": "Quản lý và duy trì hệ thống mạng"
    },
    {
      "id": "C",
      "content": "Lập trình phần mềm ứng dụng"
    },
    {
      "id": "D",
      "content": "Kiểm thử phần mềm"
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nắm vững đặc điểm, nhiệm vụ và yêu cầu chuyên môn của các nhóm nghề CNTT: Sửa chữa & bảo trì máy tính, Quản trị mạng và hệ thống, Bảo mật hệ thống thông tin.",
    "level2_formula": "Xác định rõ vị trí công việc (Kĩ thuật viên CNTT, Quản trị mạng/hệ thống, Kĩ sư an toàn thông tin) hoặc yêu cầu về kỹ năng/pháp luật trong câu hỏi.",
    "level3_steps": "Đối chiếu các phương án A, B, C, D với nội dung bài học Chuyên đề 12G để chọn đáp án đúng: B."
  },
  "explanation": "Đáp án đúng là B. Theo Chuyên đề 12G: Quản lý và duy trì hệ thống mạng",
  "sourceDocTitle": "Chuyên đề 12G. Giới thiệu nhóm nghề dịch vụ và quản trị.docx (Google Drive)"
},
{
  "id": "Q-TIN-12G-MC-27",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-huong-nghiep-dich-vu",
  "topicName": "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ và quản trị",
  "chapterName": "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Trong bảo mật hệ thống thông tin, chuyên gia cần hiểu biết về gì?",
  "options": [
    {
      "id": "A",
      "content": "Phát triển web"
    },
    {
      "id": "B",
      "content": "Tối ưu hóa công cụ tìm kiếm (SEO)"
    },
    {
      "id": "C",
      "content": "Phương thức tấn công mạng như DoS"
    },
    {
      "id": "D",
      "content": "Thiết kế giao diện người dùng"
    }
  ],
  "correctAnswer": "C",
  "hints": {
    "level1_concept": "Nắm vững đặc điểm, nhiệm vụ và yêu cầu chuyên môn của các nhóm nghề CNTT: Sửa chữa & bảo trì máy tính, Quản trị mạng và hệ thống, Bảo mật hệ thống thông tin.",
    "level2_formula": "Xác định rõ vị trí công việc (Kĩ thuật viên CNTT, Quản trị mạng/hệ thống, Kĩ sư an toàn thông tin) hoặc yêu cầu về kỹ năng/pháp luật trong câu hỏi.",
    "level3_steps": "Đối chiếu các phương án A, B, C, D với nội dung bài học Chuyên đề 12G để chọn đáp án đúng: C."
  },
  "explanation": "Đáp án đúng là C. Theo Chuyên đề 12G: Phương thức tấn công mạng như DoS",
  "sourceDocTitle": "Chuyên đề 12G. Giới thiệu nhóm nghề dịch vụ và quản trị.docx (Google Drive)"
},
{
  "id": "Q-TIN-12G-MC-28",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-huong-nghiep-dich-vu",
  "topicName": "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ và quản trị",
  "chapterName": "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Kỹ năng mềm quan trọng nhất mà chuyên gia quản trị hệ thống cần có là gì?",
  "options": [
    {
      "id": "A",
      "content": "Kỹ năng vẽ đồ họa"
    },
    {
      "id": "B",
      "content": "Kỹ năng giao tiếp và quản lý thời gian"
    },
    {
      "id": "C",
      "content": "Kỹ năng nấu ăn"
    },
    {
      "id": "D",
      "content": "Kỹ năng lái xe"
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nắm vững đặc điểm, nhiệm vụ và yêu cầu chuyên môn của các nhóm nghề CNTT: Sửa chữa & bảo trì máy tính, Quản trị mạng và hệ thống, Bảo mật hệ thống thông tin.",
    "level2_formula": "Xác định rõ vị trí công việc (Kĩ thuật viên CNTT, Quản trị mạng/hệ thống, Kĩ sư an toàn thông tin) hoặc yêu cầu về kỹ năng/pháp luật trong câu hỏi.",
    "level3_steps": "Đối chiếu các phương án A, B, C, D với nội dung bài học Chuyên đề 12G để chọn đáp án đúng: B."
  },
  "explanation": "Đáp án đúng là B. Theo Chuyên đề 12G: Kỹ năng giao tiếp và quản lý thời gian",
  "sourceDocTitle": "Chuyên đề 12G. Giới thiệu nhóm nghề dịch vụ và quản trị.docx (Google Drive)"
},
{
  "id": "Q-TIN-12G-MC-29",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-huong-nghiep-dich-vu",
  "topicName": "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ và quản trị",
  "chapterName": "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Điều nào sau đây là một phần của công việc quản trị và bảo trì hệ thống?",
  "options": [
    {
      "id": "A",
      "content": "Phát triển phần mềm mới"
    },
    {
      "id": "B",
      "content": "Quản lý hệ điều hành và xử lý sự cố hệ thống"
    },
    {
      "id": "C",
      "content": "Thiết kế ứng dụng di động"
    },
    {
      "id": "D",
      "content": "Tiếp thị kỹ thuật số"
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nắm vững đặc điểm, nhiệm vụ và yêu cầu chuyên môn của các nhóm nghề CNTT: Sửa chữa & bảo trì máy tính, Quản trị mạng và hệ thống, Bảo mật hệ thống thông tin.",
    "level2_formula": "Xác định rõ vị trí công việc (Kĩ thuật viên CNTT, Quản trị mạng/hệ thống, Kĩ sư an toàn thông tin) hoặc yêu cầu về kỹ năng/pháp luật trong câu hỏi.",
    "level3_steps": "Đối chiếu các phương án A, B, C, D với nội dung bài học Chuyên đề 12G để chọn đáp án đúng: B."
  },
  "explanation": "Đáp án đúng là B. Theo Chuyên đề 12G: Quản lý hệ điều hành và xử lý sự cố hệ thống",
  "sourceDocTitle": "Chuyên đề 12G. Giới thiệu nhóm nghề dịch vụ và quản trị.docx (Google Drive)"
},
{
  "id": "Q-TIN-12G-MC-30",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-huong-nghiep-dich-vu",
  "topicName": "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ và quản trị",
  "chapterName": "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Tại sao nhu cầu về chuyên gia bảo mật thông tin ngày càng tăng?",
  "options": [
    {
      "id": "A",
      "content": "Do sự phát triển của lĩnh vực giải trí"
    },
    {
      "id": "B",
      "content": "Do nguy cơ tấn công mạng ngày càng phức tạp"
    },
    {
      "id": "C",
      "content": "Do sự phát triển của thể thao điện tử"
    },
    {
      "id": "D",
      "content": "Do nhu cầu về game trực tuyến"
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nắm vững đặc điểm, nhiệm vụ và yêu cầu chuyên môn của các nhóm nghề CNTT: Sửa chữa & bảo trì máy tính, Quản trị mạng và hệ thống, Bảo mật hệ thống thông tin.",
    "level2_formula": "Xác định rõ vị trí công việc (Kĩ thuật viên CNTT, Quản trị mạng/hệ thống, Kĩ sư an toàn thông tin) hoặc yêu cầu về kỹ năng/pháp luật trong câu hỏi.",
    "level3_steps": "Đối chiếu các phương án A, B, C, D với nội dung bài học Chuyên đề 12G để chọn đáp án đúng: B."
  },
  "explanation": "Đáp án đúng là B. Theo Chuyên đề 12G: Do nguy cơ tấn công mạng ngày càng phức tạp",
  "sourceDocTitle": "Chuyên đề 12G. Giới thiệu nhóm nghề dịch vụ và quản trị.docx (Google Drive)"
},
{
  "id": "Q-TIN-12G-MC-31",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-huong-nghiep-dich-vu",
  "topicName": "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ và quản trị",
  "chapterName": "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Một trong những yêu cầu chính đối với chuyên gia quản trị mạng là gì?",
  "options": [
    {
      "id": "A",
      "content": "Kỹ năng chỉnh sửa video"
    },
    {
      "id": "B",
      "content": "Kỹ năng nấu ăn"
    },
    {
      "id": "C",
      "content": "Kiến thức về cấu trúc và hoạt động của mạng máy tính"
    },
    {
      "id": "D",
      "content": "Kỹ năng viết lách"
    }
  ],
  "correctAnswer": "C",
  "hints": {
    "level1_concept": "Nắm vững đặc điểm, nhiệm vụ và yêu cầu chuyên môn của các nhóm nghề CNTT: Sửa chữa & bảo trì máy tính, Quản trị mạng và hệ thống, Bảo mật hệ thống thông tin.",
    "level2_formula": "Xác định rõ vị trí công việc (Kĩ thuật viên CNTT, Quản trị mạng/hệ thống, Kĩ sư an toàn thông tin) hoặc yêu cầu về kỹ năng/pháp luật trong câu hỏi.",
    "level3_steps": "Đối chiếu các phương án A, B, C, D với nội dung bài học Chuyên đề 12G để chọn đáp án đúng: C."
  },
  "explanation": "Đáp án đúng là C. Theo Chuyên đề 12G: Kiến thức về cấu trúc và hoạt động của mạng máy tính",
  "sourceDocTitle": "Chuyên đề 12G. Giới thiệu nhóm nghề dịch vụ và quản trị.docx (Google Drive)"
},
{
  "id": "Q-TIN-12G-MC-32",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-huong-nghiep-dich-vu",
  "topicName": "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ và quản trị",
  "chapterName": "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Trong lĩnh vực quản trị hệ thống, điều gì là quan trọng nhất?",
  "options": [
    {
      "id": "A",
      "content": "Khả năng sáng tạo"
    },
    {
      "id": "B",
      "content": "Khả năng lập trình"
    },
    {
      "id": "C",
      "content": "Kiến thức sâu về quản lý hệ điều hành"
    },
    {
      "id": "D",
      "content": "Khả năng thiết kế đồ họa"
    }
  ],
  "correctAnswer": "C",
  "hints": {
    "level1_concept": "Nắm vững đặc điểm, nhiệm vụ và yêu cầu chuyên môn của các nhóm nghề CNTT: Sửa chữa & bảo trì máy tính, Quản trị mạng và hệ thống, Bảo mật hệ thống thông tin.",
    "level2_formula": "Xác định rõ vị trí công việc (Kĩ thuật viên CNTT, Quản trị mạng/hệ thống, Kĩ sư an toàn thông tin) hoặc yêu cầu về kỹ năng/pháp luật trong câu hỏi.",
    "level3_steps": "Đối chiếu các phương án A, B, C, D với nội dung bài học Chuyên đề 12G để chọn đáp án đúng: C."
  },
  "explanation": "Đáp án đúng là C. Theo Chuyên đề 12G: Kiến thức sâu về quản lý hệ điều hành",
  "sourceDocTitle": "Chuyên đề 12G. Giới thiệu nhóm nghề dịch vụ và quản trị.docx (Google Drive)"
},
{
  "id": "Q-TIN-12G-MC-33",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-huong-nghiep-dich-vu",
  "topicName": "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ và quản trị",
  "chapterName": "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Các cơ sở giáo dục ở Việt Nam cung cấp ngành học nào liên quan đến nhóm nghề quản trị?",
  "options": [
    {
      "id": "A",
      "content": "Y học"
    },
    {
      "id": "B",
      "content": "Nghệ thuật biểu diễn"
    },
    {
      "id": "C",
      "content": "Quản trị mạng máy tính"
    },
    {
      "id": "D",
      "content": "Du lịch"
    }
  ],
  "correctAnswer": "C",
  "hints": {
    "level1_concept": "Nắm vững đặc điểm, nhiệm vụ và yêu cầu chuyên môn của các nhóm nghề CNTT: Sửa chữa & bảo trì máy tính, Quản trị mạng và hệ thống, Bảo mật hệ thống thông tin.",
    "level2_formula": "Xác định rõ vị trí công việc (Kĩ thuật viên CNTT, Quản trị mạng/hệ thống, Kĩ sư an toàn thông tin) hoặc yêu cầu về kỹ năng/pháp luật trong câu hỏi.",
    "level3_steps": "Đối chiếu các phương án A, B, C, D với nội dung bài học Chuyên đề 12G để chọn đáp án đúng: C."
  },
  "explanation": "Đáp án đúng là C. Theo Chuyên đề 12G: Quản trị mạng máy tính",
  "sourceDocTitle": "Chuyên đề 12G. Giới thiệu nhóm nghề dịch vụ và quản trị.docx (Google Drive)"
},
{
  "id": "Q-TIN-12G-MC-34",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-huong-nghiep-dich-vu",
  "topicName": "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ và quản trị",
  "chapterName": "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Lý do gì khiến chuyên gia quản trị hệ thống cần hiểu về luật pháp và quy định?",
  "options": [
    {
      "id": "A",
      "content": "Để phát triển ứng dụng di động"
    },
    {
      "id": "B",
      "content": "Để tạo ra trò chơi điện tử"
    },
    {
      "id": "C",
      "content": "Để tuân thủ các quy định về bảo mật thông tin"
    },
    {
      "id": "D",
      "content": "Để viết sách"
    }
  ],
  "correctAnswer": "C",
  "hints": {
    "level1_concept": "Nắm vững đặc điểm, nhiệm vụ và yêu cầu chuyên môn của các nhóm nghề CNTT: Sửa chữa & bảo trì máy tính, Quản trị mạng và hệ thống, Bảo mật hệ thống thông tin.",
    "level2_formula": "Xác định rõ vị trí công việc (Kĩ thuật viên CNTT, Quản trị mạng/hệ thống, Kĩ sư an toàn thông tin) hoặc yêu cầu về kỹ năng/pháp luật trong câu hỏi.",
    "level3_steps": "Đối chiếu các phương án A, B, C, D với nội dung bài học Chuyên đề 12G để chọn đáp án đúng: C."
  },
  "explanation": "Đáp án đúng là C. Theo Chuyên đề 12G: Để tuân thủ các quy định về bảo mật thông tin",
  "sourceDocTitle": "Chuyên đề 12G. Giới thiệu nhóm nghề dịch vụ và quản trị.docx (Google Drive)"
},
{
  "id": "Q-TIN-12G-MC-35",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-huong-nghiep-dich-vu",
  "topicName": "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ và quản trị",
  "chapterName": "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
  "difficulty": "NhanBiet",
  "type": "multiple_choice",
  "content": "Mức độ tăng trưởng nhân lực trong ngành quản trị hệ thống thông tin là do yếu tố nào?",
  "options": [
    {
      "id": "A",
      "content": "Sự phát triển của ngành nông nghiệp"
    },
    {
      "id": "B",
      "content": "Cuộc cách mạng công nghiệp 4.0"
    },
    {
      "id": "C",
      "content": "Sự giảm sút trong ngành công nghiệp"
    },
    {
      "id": "D",
      "content": "Tăng trưởng trong ngành thời trang"
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nắm vững đặc điểm, nhiệm vụ và yêu cầu chuyên môn của các nhóm nghề CNTT: Sửa chữa & bảo trì máy tính, Quản trị mạng và hệ thống, Bảo mật hệ thống thông tin.",
    "level2_formula": "Xác định rõ vị trí công việc (Kĩ thuật viên CNTT, Quản trị mạng/hệ thống, Kĩ sư an toàn thông tin) hoặc yêu cầu về kỹ năng/pháp luật trong câu hỏi.",
    "level3_steps": "Đối chiếu các phương án A, B, C, D với nội dung bài học Chuyên đề 12G để chọn đáp án đúng: B."
  },
  "explanation": "Đáp án đúng là B. Theo Chuyên đề 12G: Cuộc cách mạng công nghiệp 4.0",
  "sourceDocTitle": "Chuyên đề 12G. Giới thiệu nhóm nghề dịch vụ và quản trị.docx (Google Drive)"
},
{
  "id": "Q-TIN-12G-MC-36",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-huong-nghiep-dich-vu",
  "topicName": "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ và quản trị",
  "chapterName": "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Quản trị và bảo trì hệ thống bao gồm những công việc gì?",
  "options": [
    {
      "id": "A",
      "content": "Quản lí và duy trì hệ thống mạng máy tính của tổ chức."
    },
    {
      "id": "B",
      "content": "Phát triển và triển khai biện pháp bảo mật, giám sát mạng để phát hiện sự xâm nhập trái phép và xử lí các vụ việc liên quan đến bảo mật."
    },
    {
      "id": "C",
      "content": "Cài đặt, cấu hình và bảo mật mạng, theo dõi hiệu suất, xử lí sự cố mạng và đảm bảo mạng luôn hoạt động ổn định."
    },
    {
      "id": "D",
      "content": "Cài đặt, cập nhật và xử lí sự cố để đảm bảo sự ổn định và hiệu suất làm việc của hệ thống."
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nắm vững đặc điểm, nhiệm vụ và yêu cầu chuyên môn của các nhóm nghề CNTT: Sửa chữa & bảo trì máy tính, Quản trị mạng và hệ thống, Bảo mật hệ thống thông tin.",
    "level2_formula": "Xác định rõ vị trí công việc (Kĩ thuật viên CNTT, Quản trị mạng/hệ thống, Kĩ sư an toàn thông tin) hoặc yêu cầu về kỹ năng/pháp luật trong câu hỏi.",
    "level3_steps": "Đối chiếu các phương án A, B, C, D với nội dung bài học Chuyên đề 12G để chọn đáp án đúng: B."
  },
  "explanation": "Đáp án đúng là B. Theo Chuyên đề 12G: Phát triển và triển khai biện pháp bảo mật, giám sát mạng để phát hiện sự xâm nhập trái phép và xử lí các vụ việc liên quan đến bảo mật.",
  "sourceDocTitle": "Chuyên đề 12G. Giới thiệu nhóm nghề dịch vụ và quản trị.docx (Google Drive)"
},
{
  "id": "Q-TIN-12G-MC-37",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-huong-nghiep-dich-vu",
  "topicName": "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ và quản trị",
  "chapterName": "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Vì sao người làm việc trong nhóm nghề quản trị trong ngành Công nghệ thông tin cần có kiến thức về Luật pháp và tuân thủ quy định?",
  "options": [
    {
      "id": "A",
      "content": "Để nắm được cách xử lí hiệu quả các sự cố hệ thống, sửa lỗi phần mềm và phần cứng, đảm bảo sự ổn định của hệ thống."
    },
    {
      "id": "B",
      "content": "Để nắm được cấu trúc và hoạt động của mạng máy tính, bao gồm giao thức mạng, phân tích lưu lượng mạng và các thiết bị mạng."
    },
    {
      "id": "C",
      "content": "Để có hiểu biết và tuân thủ luật pháp, các quy định, cũng như các tiêu chuẩn quốc tế hiện hành về bảo mật thông tin và an ninh mạng."
    },
    {
      "id": "D",
      "content": "Để nắm được các phương thức tấn công mạng."
    }
  ],
  "correctAnswer": "C",
  "hints": {
    "level1_concept": "Nắm vững đặc điểm, nhiệm vụ và yêu cầu chuyên môn của các nhóm nghề CNTT: Sửa chữa & bảo trì máy tính, Quản trị mạng và hệ thống, Bảo mật hệ thống thông tin.",
    "level2_formula": "Xác định rõ vị trí công việc (Kĩ thuật viên CNTT, Quản trị mạng/hệ thống, Kĩ sư an toàn thông tin) hoặc yêu cầu về kỹ năng/pháp luật trong câu hỏi.",
    "level3_steps": "Đối chiếu các phương án A, B, C, D với nội dung bài học Chuyên đề 12G để chọn đáp án đúng: C."
  },
  "explanation": "Đáp án đúng là C. Theo Chuyên đề 12G: Để có hiểu biết và tuân thủ luật pháp, các quy định, cũng như các tiêu chuẩn quốc tế hiện hành về bảo mật thông tin và an ninh mạng.",
  "sourceDocTitle": "Chuyên đề 12G. Giới thiệu nhóm nghề dịch vụ và quản trị.docx (Google Drive)"
},
{
  "id": "Q-TIN-12G-MC-38",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-huong-nghiep-dich-vu",
  "topicName": "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ và quản trị",
  "chapterName": "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Yếu tố nào sau đây không liên quan đến an ninh mạng?",
  "options": [
    {
      "id": "A",
      "content": "Sự gia tăng nhanh chóng của dữ liệu, dẫn đến nhu cầu chuyển đổi sang sử dụng dịch vụ đám mây an toàn của các đơn vị, tổ chức."
    },
    {
      "id": "B",
      "content": "Sự gia tăng số lượng và chủng loại các thiết bị công nghệ thông tin, từ máy tính cá nhân đến thiết bị IoT."
    },
    {
      "id": "C",
      "content": "Các đơn vị, tổ chức, các cơ quan chính phủ cũng ngày càng chú trọng đến việc tuân thủ các quy định an ninh thông tin và bảo vệ dữ liệu cá nhân."
    },
    {
      "id": "D",
      "content": "Nguy cơ tấn công hệ thống thông tin ngày càng phức tạp với những phương thức tấn công đa dạng."
    }
  ],
  "correctAnswer": "C",
  "hints": {
    "level1_concept": "Nắm vững đặc điểm, nhiệm vụ và yêu cầu chuyên môn của các nhóm nghề CNTT: Sửa chữa & bảo trì máy tính, Quản trị mạng và hệ thống, Bảo mật hệ thống thông tin.",
    "level2_formula": "Xác định rõ vị trí công việc (Kĩ thuật viên CNTT, Quản trị mạng/hệ thống, Kĩ sư an toàn thông tin) hoặc yêu cầu về kỹ năng/pháp luật trong câu hỏi.",
    "level3_steps": "Đối chiếu các phương án A, B, C, D với nội dung bài học Chuyên đề 12G để chọn đáp án đúng: C."
  },
  "explanation": "Đáp án đúng là C. Theo Chuyên đề 12G: Các đơn vị, tổ chức, các cơ quan chính phủ cũng ngày càng chú trọng đến việc tuân thủ các quy định an ninh thông tin và bảo vệ dữ liệu cá nhân.",
  "sourceDocTitle": "Chuyên đề 12G. Giới thiệu nhóm nghề dịch vụ và quản trị.docx (Google Drive)"
},
{
  "id": "Q-TIN-12G-MC-39",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-huong-nghiep-dich-vu",
  "topicName": "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ và quản trị",
  "chapterName": "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Vì sao người làm nghề sửa chữa, bảo trì máy tính cần có kĩ năng giao tiếp?",
  "options": [
    {
      "id": "A",
      "content": "Để biết cách tìm kiếm, tra cứu tài liệu hướng dẫn, thông tin hữu ích được chia sẻ trên Internet và phương pháp khắc phục lỗi."
    },
    {
      "id": "B",
      "content": "Để hoàn thành dự án sửa chữa, bảo trì trong thời gian quy định và đáp ứng yêu cầu của khách hàng."
    },
    {
      "id": "C",
      "content": "Để hiểu các yêu cầu của người dùng từ đó có thể giải thích và tư vấn cho họ các giải pháp kĩ thuật một cách dễ hiểu."
    },
    {
      "id": "D",
      "content": "Để có hiểu biết về công nghệ mới."
    }
  ],
  "correctAnswer": "C",
  "hints": {
    "level1_concept": "Nắm vững đặc điểm, nhiệm vụ và yêu cầu chuyên môn của các nhóm nghề CNTT: Sửa chữa & bảo trì máy tính, Quản trị mạng và hệ thống, Bảo mật hệ thống thông tin.",
    "level2_formula": "Xác định rõ vị trí công việc (Kĩ thuật viên CNTT, Quản trị mạng/hệ thống, Kĩ sư an toàn thông tin) hoặc yêu cầu về kỹ năng/pháp luật trong câu hỏi.",
    "level3_steps": "Đối chiếu các phương án A, B, C, D với nội dung bài học Chuyên đề 12G để chọn đáp án đúng: C."
  },
  "explanation": "Đáp án đúng là C. Theo Chuyên đề 12G: Để hiểu các yêu cầu của người dùng từ đó có thể giải thích và tư vấn cho họ các giải pháp kĩ thuật một cách dễ hiểu.",
  "sourceDocTitle": "Chuyên đề 12G. Giới thiệu nhóm nghề dịch vụ và quản trị.docx (Google Drive)"
},
{
  "id": "Q-TIN-12G-MC-40",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-huong-nghiep-dich-vu",
  "topicName": "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ và quản trị",
  "chapterName": "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Vì sao người làm nghề sửa chữa, bảo trì máy tính cần có kĩ năng quản lí thời gian?",
  "options": [
    {
      "id": "A",
      "content": "Để hoàn thành dự án sửa chữa, bảo trì trong thời gian quy định và đáp ứng yêu cầu của khách hàng."
    },
    {
      "id": "B",
      "content": "Để có hiểu biết về công nghệ mới."
    },
    {
      "id": "C",
      "content": "Để biết cách tìm kiếm, tra cứu tài liệu hướng dẫn, thông tin hữu ích được chia sẻ trên Internet và phương pháp khắc phục lỗi."
    },
    {
      "id": "D",
      "content": "Để hiểu các yêu cầu của người dùng từ đó có thể giải thích và tư vấn cho họ các giải pháp kĩ thuật một cách dễ hiểu."
    }
  ],
  "correctAnswer": "A",
  "hints": {
    "level1_concept": "Nắm vững đặc điểm, nhiệm vụ và yêu cầu chuyên môn của các nhóm nghề CNTT: Sửa chữa & bảo trì máy tính, Quản trị mạng và hệ thống, Bảo mật hệ thống thông tin.",
    "level2_formula": "Xác định rõ vị trí công việc (Kĩ thuật viên CNTT, Quản trị mạng/hệ thống, Kĩ sư an toàn thông tin) hoặc yêu cầu về kỹ năng/pháp luật trong câu hỏi.",
    "level3_steps": "Đối chiếu các phương án A, B, C, D với nội dung bài học Chuyên đề 12G để chọn đáp án đúng: A."
  },
  "explanation": "Đáp án đúng là A. Theo Chuyên đề 12G: Để hoàn thành dự án sửa chữa, bảo trì trong thời gian quy định và đáp ứng yêu cầu của khách hàng.",
  "sourceDocTitle": "Chuyên đề 12G. Giới thiệu nhóm nghề dịch vụ và quản trị.docx (Google Drive)"
},
{
  "id": "Q-TIN-12G-MC-41",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-huong-nghiep-dich-vu",
  "topicName": "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ và quản trị",
  "chapterName": "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Kĩ năng nào dưới đây KHÔNG cần thiết đối với một kĩ thuật viên CNTT?",
  "options": [
    {
      "id": "A",
      "content": "Sửa chữa các lỗi thường gặp của máy tính."
    },
    {
      "id": "B",
      "content": "Cài đặt phần mềm."
    },
    {
      "id": "C",
      "content": "Phân tích, thiết kế hệ thống."
    },
    {
      "id": "D",
      "content": "Lắp ráp máy tính."
    }
  ],
  "correctAnswer": "C",
  "hints": {
    "level1_concept": "Nắm vững đặc điểm, nhiệm vụ và yêu cầu chuyên môn của các nhóm nghề CNTT: Sửa chữa & bảo trì máy tính, Quản trị mạng và hệ thống, Bảo mật hệ thống thông tin.",
    "level2_formula": "Xác định rõ vị trí công việc (Kĩ thuật viên CNTT, Quản trị mạng/hệ thống, Kĩ sư an toàn thông tin) hoặc yêu cầu về kỹ năng/pháp luật trong câu hỏi.",
    "level3_steps": "Đối chiếu các phương án A, B, C, D với nội dung bài học Chuyên đề 12G để chọn đáp án đúng: C."
  },
  "explanation": "Đáp án đúng là C. Theo Chuyên đề 12G: Phân tích, thiết kế hệ thống.",
  "sourceDocTitle": "Chuyên đề 12G. Giới thiệu nhóm nghề dịch vụ và quản trị.docx (Google Drive)"
},
{
  "id": "Q-TIN-12G-MC-42",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-huong-nghiep-dich-vu",
  "topicName": "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ và quản trị",
  "chapterName": "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Kĩ năng nào dưới đây KHÔNG cần thiết đối với chuyên viên an toàn thông tin?",
  "options": [
    {
      "id": "A",
      "content": "Bảo vệ thông tin tránh các truy cập bất hợp pháp."
    },
    {
      "id": "B",
      "content": "Kiểm tra các thành phần phần cứng máy tính như RAM, ổ cứng."
    },
    {
      "id": "C",
      "content": "Bảo đảm hệ thống thông tin sẵn sàng, tin cậy."
    },
    {
      "id": "D",
      "content": "Nghiên cứu, thử nghiệm và đề xuất các giải pháp bảo mật."
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nắm vững đặc điểm, nhiệm vụ và yêu cầu chuyên môn của các nhóm nghề CNTT: Sửa chữa & bảo trì máy tính, Quản trị mạng và hệ thống, Bảo mật hệ thống thông tin.",
    "level2_formula": "Xác định rõ vị trí công việc (Kĩ thuật viên CNTT, Quản trị mạng/hệ thống, Kĩ sư an toàn thông tin) hoặc yêu cầu về kỹ năng/pháp luật trong câu hỏi.",
    "level3_steps": "Đối chiếu các phương án A, B, C, D với nội dung bài học Chuyên đề 12G để chọn đáp án đúng: B."
  },
  "explanation": "Đáp án đúng là B. Theo Chuyên đề 12G: Kiểm tra các thành phần phần cứng máy tính như RAM, ổ cứng.",
  "sourceDocTitle": "Chuyên đề 12G. Giới thiệu nhóm nghề dịch vụ và quản trị.docx (Google Drive)"
},
{
  "id": "Q-TIN-12G-MC-43",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-huong-nghiep-dich-vu",
  "topicName": "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ và quản trị",
  "chapterName": "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Khi máy tính không thể kết nối với Internet, phương án nào sau đây KHÔNG phải là cách giải quyết vấn đề đối với một kĩ thuật viên Công nghệ thông tin?",
  "options": [
    {
      "id": "A",
      "content": "Kiểm tra kết nối mạng."
    },
    {
      "id": "B",
      "content": "Kiểm tra cài đặt IP."
    },
    {
      "id": "C",
      "content": "Cài đặt lại hệ điều hành."
    },
    {
      "id": "D",
      "content": "Liên hệ với đơn vị cung cấp đường truyền mạng."
    }
  ],
  "correctAnswer": "C",
  "hints": {
    "level1_concept": "Nắm vững đặc điểm, nhiệm vụ và yêu cầu chuyên môn của các nhóm nghề CNTT: Sửa chữa & bảo trì máy tính, Quản trị mạng và hệ thống, Bảo mật hệ thống thông tin.",
    "level2_formula": "Xác định rõ vị trí công việc (Kĩ thuật viên CNTT, Quản trị mạng/hệ thống, Kĩ sư an toàn thông tin) hoặc yêu cầu về kỹ năng/pháp luật trong câu hỏi.",
    "level3_steps": "Đối chiếu các phương án A, B, C, D với nội dung bài học Chuyên đề 12G để chọn đáp án đúng: C."
  },
  "explanation": "Đáp án đúng là C. Theo Chuyên đề 12G: Cài đặt lại hệ điều hành.",
  "sourceDocTitle": "Chuyên đề 12G. Giới thiệu nhóm nghề dịch vụ và quản trị.docx (Google Drive)"
},
{
  "id": "Q-TIN-12G-MC-44",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-huong-nghiep-dich-vu",
  "topicName": "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ và quản trị",
  "chapterName": "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Để cải thiện hiệu suất hoạt động của máy tính, phương án nào sau đây KHÔNG nên thực hiện ?",
  "options": [
    {
      "id": "A",
      "content": "cập nhật hệ điều hành và các phần mềm ứng dụng."
    },
    {
      "id": "B",
      "content": "kiểm tra và loại bỏ các phần mềm ứng dụng độc hại."
    },
    {
      "id": "C",
      "content": "tăng thêm dung lượng bộ nhớ RAM."
    },
    {
      "id": "D",
      "content": "cài đặt càng nhiều phần mềm ứng dụng càng tốt."
    }
  ],
  "correctAnswer": "D",
  "hints": {
    "level1_concept": "Nắm vững đặc điểm, nhiệm vụ và yêu cầu chuyên môn của các nhóm nghề CNTT: Sửa chữa & bảo trì máy tính, Quản trị mạng và hệ thống, Bảo mật hệ thống thông tin.",
    "level2_formula": "Xác định rõ vị trí công việc (Kĩ thuật viên CNTT, Quản trị mạng/hệ thống, Kĩ sư an toàn thông tin) hoặc yêu cầu về kỹ năng/pháp luật trong câu hỏi.",
    "level3_steps": "Đối chiếu các phương án A, B, C, D với nội dung bài học Chuyên đề 12G để chọn đáp án đúng: D."
  },
  "explanation": "Đáp án đúng là D. Theo Chuyên đề 12G: cài đặt càng nhiều phần mềm ứng dụng càng tốt.",
  "sourceDocTitle": "Chuyên đề 12G. Giới thiệu nhóm nghề dịch vụ và quản trị.docx (Google Drive)"
},
{
  "id": "Q-TIN-12G-MC-45",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-huong-nghiep-dich-vu",
  "topicName": "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ và quản trị",
  "chapterName": "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Kĩ năng nào sau đây KHÔNG cần thiết đối với chuyên viên quản trị mạng?",
  "options": [
    {
      "id": "A",
      "content": "Lập trình điều khiển thiết bị bay không người lái (Drone)."
    },
    {
      "id": "B",
      "content": "Cách sử dụng và xử lí các lỗi thường gặp của bộ phần mềm Microsoft Office."
    },
    {
      "id": "C",
      "content": "Kiến thức về hệ thống mạng, thông tin hạ tầng kĩ thuật phần cứng."
    },
    {
      "id": "D",
      "content": "Kiến thức về phần mềm có liên quan về bảo mật dữ liệu."
    }
  ],
  "correctAnswer": "A",
  "hints": {
    "level1_concept": "Nắm vững đặc điểm, nhiệm vụ và yêu cầu chuyên môn của các nhóm nghề CNTT: Sửa chữa & bảo trì máy tính, Quản trị mạng và hệ thống, Bảo mật hệ thống thông tin.",
    "level2_formula": "Xác định rõ vị trí công việc (Kĩ thuật viên CNTT, Quản trị mạng/hệ thống, Kĩ sư an toàn thông tin) hoặc yêu cầu về kỹ năng/pháp luật trong câu hỏi.",
    "level3_steps": "Đối chiếu các phương án A, B, C, D với nội dung bài học Chuyên đề 12G để chọn đáp án đúng: A."
  },
  "explanation": "Đáp án đúng là A. Theo Chuyên đề 12G: Lập trình điều khiển thiết bị bay không người lái (Drone).",
  "sourceDocTitle": "Chuyên đề 12G. Giới thiệu nhóm nghề dịch vụ và quản trị.docx (Google Drive)"
},
{
  "id": "Q-TIN-12G-MC-46",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-huong-nghiep-dich-vu",
  "topicName": "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ và quản trị",
  "chapterName": "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Sao lưu dữ liệu của hệ thống máy tính là nhiệm vụ của nhân viên nào dưới đây?",
  "options": [
    {
      "id": "A",
      "content": "Kĩ thuật viên sửa chữa và bảo trì máy tính."
    },
    {
      "id": "B",
      "content": "Nhân viên quản trị hệ thống mạng."
    },
    {
      "id": "C",
      "content": "Nhân viên quản trị và bảo trì hệ thống."
    },
    {
      "id": "D",
      "content": "Nhân viên bảo mật hệ thống thông tin."
    }
  ],
  "correctAnswer": "C",
  "hints": {
    "level1_concept": "Nắm vững đặc điểm, nhiệm vụ và yêu cầu chuyên môn của các nhóm nghề CNTT: Sửa chữa & bảo trì máy tính, Quản trị mạng và hệ thống, Bảo mật hệ thống thông tin.",
    "level2_formula": "Xác định rõ vị trí công việc (Kĩ thuật viên CNTT, Quản trị mạng/hệ thống, Kĩ sư an toàn thông tin) hoặc yêu cầu về kỹ năng/pháp luật trong câu hỏi.",
    "level3_steps": "Đối chiếu các phương án A, B, C, D với nội dung bài học Chuyên đề 12G để chọn đáp án đúng: C."
  },
  "explanation": "Đáp án đúng là C. Theo Chuyên đề 12G: Nhân viên quản trị và bảo trì hệ thống.",
  "sourceDocTitle": "Chuyên đề 12G. Giới thiệu nhóm nghề dịch vụ và quản trị.docx (Google Drive)"
},
{
  "id": "Q-TIN-12G-MC-47",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-huong-nghiep-dich-vu",
  "topicName": "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ và quản trị",
  "chapterName": "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Kĩ năng nào sau đây KHÔNG là yêu cầu bắt buộc đối với một nhân viên quản trị mạng?",
  "options": [
    {
      "id": "A",
      "content": "Hiểu biết về hệ điều hành và phần cứng máy tính."
    },
    {
      "id": "B",
      "content": "Khả năng lập trình phần mềm ứng dụng."
    },
    {
      "id": "C",
      "content": "Hiểu biết về giao thức mạng và bảo mật mạng."
    },
    {
      "id": "D",
      "content": "Kĩ năng giao tiếp và làm việc nhóm."
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nắm vững đặc điểm, nhiệm vụ và yêu cầu chuyên môn của các nhóm nghề CNTT: Sửa chữa & bảo trì máy tính, Quản trị mạng và hệ thống, Bảo mật hệ thống thông tin.",
    "level2_formula": "Xác định rõ vị trí công việc (Kĩ thuật viên CNTT, Quản trị mạng/hệ thống, Kĩ sư an toàn thông tin) hoặc yêu cầu về kỹ năng/pháp luật trong câu hỏi.",
    "level3_steps": "Đối chiếu các phương án A, B, C, D với nội dung bài học Chuyên đề 12G để chọn đáp án đúng: B."
  },
  "explanation": "Đáp án đúng là B. Theo Chuyên đề 12G: Khả năng lập trình phần mềm ứng dụng.",
  "sourceDocTitle": "Chuyên đề 12G. Giới thiệu nhóm nghề dịch vụ và quản trị.docx (Google Drive)"
},
{
  "id": "Q-TIN-12G-MC-48",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-huong-nghiep-dich-vu",
  "topicName": "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ và quản trị",
  "chapterName": "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Khi hệ thống máy tính bị tấn công DDoS (Distributed Denial of Service – tấn công từ chối dịch vụ phân tán), một quản trị viên mạng sẽ phải làm gì sau đây?",
  "options": [
    {
      "id": "A",
      "content": "Tắt hệ thống để ngăn chặn cuộc tấn công."
    },
    {
      "id": "B",
      "content": "Cập nhật trạng thái trên mạng xã hội."
    },
    {
      "id": "C",
      "content": "Triển khai các biện pháp bảo mật và khôi phục dịch vụ của hệ thống."
    },
    {
      "id": "D",
      "content": "Thay đổi mật khẩu của tất cả người dùng."
    }
  ],
  "correctAnswer": "C",
  "hints": {
    "level1_concept": "Nắm vững đặc điểm, nhiệm vụ và yêu cầu chuyên môn của các nhóm nghề CNTT: Sửa chữa & bảo trì máy tính, Quản trị mạng và hệ thống, Bảo mật hệ thống thông tin.",
    "level2_formula": "Xác định rõ vị trí công việc (Kĩ thuật viên CNTT, Quản trị mạng/hệ thống, Kĩ sư an toàn thông tin) hoặc yêu cầu về kỹ năng/pháp luật trong câu hỏi.",
    "level3_steps": "Đối chiếu các phương án A, B, C, D với nội dung bài học Chuyên đề 12G để chọn đáp án đúng: C."
  },
  "explanation": "Đáp án đúng là C. Theo Chuyên đề 12G: Triển khai các biện pháp bảo mật và khôi phục dịch vụ của hệ thống.",
  "sourceDocTitle": "Chuyên đề 12G. Giới thiệu nhóm nghề dịch vụ và quản trị.docx (Google Drive)"
},
{
  "id": "Q-TIN-12G-MC-49",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-huong-nghiep-dich-vu",
  "topicName": "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ và quản trị",
  "chapterName": "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Công việc hằng ngày của một chuyên viên bảo mật hệ thống thông tin là gì sau đây?",
  "options": [
    {
      "id": "A",
      "content": "Thiết kế giao diện người dùng cho ứng dụng nội bộ của đơn vị."
    },
    {
      "id": "B",
      "content": "Phân tích và ngăn chặn các mối đe doạ bảo mật đối với cơ sở dữ liệu và hệ thống máy tính của đơn vị."
    },
    {
      "id": "C",
      "content": "Lập trình xây dựng các ứng dụng đời sống cho đơn vị."
    },
    {
      "id": "D",
      "content": "Sáng tạo nội dung cho trang web của đơn vị"
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nắm vững đặc điểm, nhiệm vụ và yêu cầu chuyên môn của các nhóm nghề CNTT: Sửa chữa & bảo trì máy tính, Quản trị mạng và hệ thống, Bảo mật hệ thống thông tin.",
    "level2_formula": "Xác định rõ vị trí công việc (Kĩ thuật viên CNTT, Quản trị mạng/hệ thống, Kĩ sư an toàn thông tin) hoặc yêu cầu về kỹ năng/pháp luật trong câu hỏi.",
    "level3_steps": "Đối chiếu các phương án A, B, C, D với nội dung bài học Chuyên đề 12G để chọn đáp án đúng: B."
  },
  "explanation": "Đáp án đúng là B. Theo Chuyên đề 12G: Phân tích và ngăn chặn các mối đe doạ bảo mật đối với cơ sở dữ liệu và hệ thống máy tính của đơn vị.",
  "sourceDocTitle": "Chuyên đề 12G. Giới thiệu nhóm nghề dịch vụ và quản trị.docx (Google Drive)"
},
{
  "id": "Q-TIN-12G-MC-50",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-huong-nghiep-dich-vu",
  "topicName": "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ và quản trị",
  "chapterName": "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Khi tìm kiếm thông tin về các khoa học trực tuyến thông tin nào sau đây là quan trọng nhất?",
  "options": [
    {
      "id": "A",
      "content": "Tên của người thiết kế khóa học"
    },
    {
      "id": "B",
      "content": "Nội dung, thời gian khóa đào tạo, chi phí và đánh giá của người học."
    },
    {
      "id": "C",
      "content": "Số lượng các video bài giảng được thực hiện."
    },
    {
      "id": "D",
      "content": "Màu sắc và các tin tay của website thông tin."
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nắm vững đặc điểm, nhiệm vụ và yêu cầu chuyên môn của các nhóm nghề CNTT: Sửa chữa & bảo trì máy tính, Quản trị mạng và hệ thống, Bảo mật hệ thống thông tin.",
    "level2_formula": "Xác định rõ vị trí công việc (Kĩ thuật viên CNTT, Quản trị mạng/hệ thống, Kĩ sư an toàn thông tin) hoặc yêu cầu về kỹ năng/pháp luật trong câu hỏi.",
    "level3_steps": "Đối chiếu các phương án A, B, C, D với nội dung bài học Chuyên đề 12G để chọn đáp án đúng: B."
  },
  "explanation": "Đáp án đúng là B. Theo Chuyên đề 12G: Nội dung, thời gian khóa đào tạo, chi phí và đánh giá của người học.",
  "sourceDocTitle": "Chuyên đề 12G. Giới thiệu nhóm nghề dịch vụ và quản trị.docx (Google Drive)"
},
{
  "id": "Q-TIN-12G-MC-51",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-huong-nghiep-dich-vu",
  "topicName": "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ và quản trị",
  "chapterName": "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Khi tìm hiểu về các ngành đào tạo về Công nghệ thông tin, thông tin nào sau đây là quan trọng nhất?",
  "options": [
    {
      "id": "A",
      "content": "Giáo trình học tập có được biên soạn bằng tiếng Anh hay không."
    },
    {
      "id": "B",
      "content": "Màu sắc, hình dáng của chứng chỉ khoá học."
    },
    {
      "id": "C",
      "content": "Mức độ công nhận của các cơ quan tuyển dụng, quy trình học tập để đạt được chứng chỉ và các chi phí liên quan."
    },
    {
      "id": "D",
      "content": "Số lượng người đã được cấp chứng chỉ."
    }
  ],
  "correctAnswer": "C",
  "hints": {
    "level1_concept": "Nắm vững đặc điểm, nhiệm vụ và yêu cầu chuyên môn của các nhóm nghề CNTT: Sửa chữa & bảo trì máy tính, Quản trị mạng và hệ thống, Bảo mật hệ thống thông tin.",
    "level2_formula": "Xác định rõ vị trí công việc (Kĩ thuật viên CNTT, Quản trị mạng/hệ thống, Kĩ sư an toàn thông tin) hoặc yêu cầu về kỹ năng/pháp luật trong câu hỏi.",
    "level3_steps": "Đối chiếu các phương án A, B, C, D với nội dung bài học Chuyên đề 12G để chọn đáp án đúng: C."
  },
  "explanation": "Đáp án đúng là C. Theo Chuyên đề 12G: Mức độ công nhận của các cơ quan tuyển dụng, quy trình học tập để đạt được chứng chỉ và các chi phí liên quan.",
  "sourceDocTitle": "Chuyên đề 12G. Giới thiệu nhóm nghề dịch vụ và quản trị.docx (Google Drive)"
},
{
  "id": "Q-TIN-12G-MC-52",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-huong-nghiep-dich-vu",
  "topicName": "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ và quản trị",
  "chapterName": "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Khi đọc thông báo tuyển dụng nghề nghiệp có liên quan đến lĩnh vực Công nghệ thông tin, thông tin nào sau đây là quan trọng nhất?",
  "options": [
    {
      "id": "A",
      "content": "Mức thu nhập chính thức của người lao động."
    },
    {
      "id": "B",
      "content": "Thông tin của đơn vị tuyển dụng (số lượng nhân viên, mức độ ứng dụng công nghệ thông tin trong công việc)."
    },
    {
      "id": "C",
      "content": "Cơ hội nghề nghiệp, phù hợp với định hướng phát triển cá nhân của em hay không."
    },
    {
      "id": "D",
      "content": "Yêu cầu công việc, kĩ năng và các chứng chỉ cần có đối với ứng viên, mức lương và quyền lợi của người lao động."
    }
  ],
  "correctAnswer": "D",
  "hints": {
    "level1_concept": "Nắm vững đặc điểm, nhiệm vụ và yêu cầu chuyên môn của các nhóm nghề CNTT: Sửa chữa & bảo trì máy tính, Quản trị mạng và hệ thống, Bảo mật hệ thống thông tin.",
    "level2_formula": "Xác định rõ vị trí công việc (Kĩ thuật viên CNTT, Quản trị mạng/hệ thống, Kĩ sư an toàn thông tin) hoặc yêu cầu về kỹ năng/pháp luật trong câu hỏi.",
    "level3_steps": "Đối chiếu các phương án A, B, C, D với nội dung bài học Chuyên đề 12G để chọn đáp án đúng: D."
  },
  "explanation": "Đáp án đúng là D. Theo Chuyên đề 12G: Yêu cầu công việc, kĩ năng và các chứng chỉ cần có đối với ứng viên, mức lương và quyền lợi của người lao động.",
  "sourceDocTitle": "Chuyên đề 12G. Giới thiệu nhóm nghề dịch vụ và quản trị.docx (Google Drive)"
},
{
  "id": "Q-TIN-12G-MC-53",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-huong-nghiep-dich-vu",
  "topicName": "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ và quản trị",
  "chapterName": "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Khi tìm kiếm thông tin về một ngành nghề thuộc lĩnh vực CNTT, thông tin nào sau đây là quan trọng nhất?",
  "options": [
    {
      "id": "A",
      "content": "Tên của những chuyên gia đầu ngành tại địa phương em dự kiến làm việc."
    },
    {
      "id": "B",
      "content": "Yêu cầu công việc, những kĩ năng cần thiết, các chứng chỉ cần trang bị, cơ hội nghề nghiệp tại địa phương em dự kiến làm việc."
    },
    {
      "id": "C",
      "content": "Số lượng và tầm vóc các doanh nghiệp đang hoạt động cùng ngành nghề tại khu vực và trên thế giới."
    },
    {
      "id": "D",
      "content": "Mức thu nhập trung bình và mức thu nhập kì vọng đạt được của nhân lực hoạt động trong ngành."
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nắm vững đặc điểm, nhiệm vụ và yêu cầu chuyên môn của các nhóm nghề CNTT: Sửa chữa & bảo trì máy tính, Quản trị mạng và hệ thống, Bảo mật hệ thống thông tin.",
    "level2_formula": "Xác định rõ vị trí công việc (Kĩ thuật viên CNTT, Quản trị mạng/hệ thống, Kĩ sư an toàn thông tin) hoặc yêu cầu về kỹ năng/pháp luật trong câu hỏi.",
    "level3_steps": "Đối chiếu các phương án A, B, C, D với nội dung bài học Chuyên đề 12G để chọn đáp án đúng: B."
  },
  "explanation": "Đáp án đúng là B. Theo Chuyên đề 12G: Yêu cầu công việc, những kĩ năng cần thiết, các chứng chỉ cần trang bị, cơ hội nghề nghiệp tại địa phương em dự kiến làm việc.",
  "sourceDocTitle": "Chuyên đề 12G. Giới thiệu nhóm nghề dịch vụ và quản trị.docx (Google Drive)"
},
{
  "id": "Q-TIN-12G-MC-54",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-huong-nghiep-dich-vu",
  "topicName": "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ và quản trị",
  "chapterName": "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Kênh truyền thông nào sau đây được sử dụng để tham khảo, trao đổi ý kiến về các thông tin tuyển dụng, hướng nghiệp các ngành nghề trong lĩnh vực CNTT một cách hiệu quả?",
  "options": [
    {
      "id": "A",
      "content": "Facebook."
    },
    {
      "id": "B",
      "content": "Instagram."
    },
    {
      "id": "C",
      "content": "TikTok"
    },
    {
      "id": "D",
      "content": "Tin nhắn SMS."
    }
  ],
  "correctAnswer": "A",
  "hints": {
    "level1_concept": "Nắm vững đặc điểm, nhiệm vụ và yêu cầu chuyên môn của các nhóm nghề CNTT: Sửa chữa & bảo trì máy tính, Quản trị mạng và hệ thống, Bảo mật hệ thống thông tin.",
    "level2_formula": "Xác định rõ vị trí công việc (Kĩ thuật viên CNTT, Quản trị mạng/hệ thống, Kĩ sư an toàn thông tin) hoặc yêu cầu về kỹ năng/pháp luật trong câu hỏi.",
    "level3_steps": "Đối chiếu các phương án A, B, C, D với nội dung bài học Chuyên đề 12G để chọn đáp án đúng: A."
  },
  "explanation": "Đáp án đúng là A. Theo Chuyên đề 12G: Facebook.",
  "sourceDocTitle": "Chuyên đề 12G. Giới thiệu nhóm nghề dịch vụ và quản trị.docx (Google Drive)"
},
{
  "id": "Q-TIN-12G-MC-55",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-huong-nghiep-dich-vu",
  "topicName": "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ và quản trị",
  "chapterName": "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Khi nhận được một cơ hội việc làm hấp dẫn trong lĩnh vực CNTT từ một người ban trên mạng xã hội, cần ưu tiên thực hiện việc nào sau đây trước khi nộp hồ sơ ứng tuyển",
  "options": [
    {
      "id": "A",
      "content": "Chia sẻ cơ hội việc làm với mọi người."
    },
    {
      "id": "B",
      "content": "Thảo luận thêm với người thân, bạn bè để nhận được các ý kiến phản biện về cân nhắc khả năng phù hợp của bản thân."
    },
    {
      "id": "C",
      "content": "Giữ bí mật thông tin, nhanh chóng thực hiện các yêu cầu và nộp hồ sơ ứng tuyển."
    },
    {
      "id": "D",
      "content": "Bỏ qua, xem như thông tin quảng cáo tuyển dụng ảo."
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nắm vững đặc điểm, nhiệm vụ và yêu cầu chuyên môn của các nhóm nghề CNTT: Sửa chữa & bảo trì máy tính, Quản trị mạng và hệ thống, Bảo mật hệ thống thông tin.",
    "level2_formula": "Xác định rõ vị trí công việc (Kĩ thuật viên CNTT, Quản trị mạng/hệ thống, Kĩ sư an toàn thông tin) hoặc yêu cầu về kỹ năng/pháp luật trong câu hỏi.",
    "level3_steps": "Đối chiếu các phương án A, B, C, D với nội dung bài học Chuyên đề 12G để chọn đáp án đúng: B."
  },
  "explanation": "Đáp án đúng là B. Theo Chuyên đề 12G: Thảo luận thêm với người thân, bạn bè để nhận được các ý kiến phản biện về cân nhắc khả năng phù hợp của bản thân.",
  "sourceDocTitle": "Chuyên đề 12G. Giới thiệu nhóm nghề dịch vụ và quản trị.docx (Google Drive)"
},
{
  "id": "Q-TIN-12G-MC-56",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-huong-nghiep-dich-vu",
  "topicName": "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ và quản trị",
  "chapterName": "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Trong ngành giáo dục, chuyên viên CNTT thường được phân công phụ trách nhiệm vụ nào sau đây?",
  "options": [
    {
      "id": "A",
      "content": "Phát triển phần mềm giáo dục."
    },
    {
      "id": "B",
      "content": "Quản lí hệ thống máy tính của trường học."
    },
    {
      "id": "C",
      "content": "Tạo các nội dung số hoá."
    },
    {
      "id": "D",
      "content": "Phát triển phần mềm giáo dục, quản lí hệ thống máy tính của trường học, tạo các nội dung số hoá.."
    }
  ],
  "correctAnswer": "D",
  "hints": {
    "level1_concept": "Nắm vững đặc điểm, nhiệm vụ và yêu cầu chuyên môn của các nhóm nghề CNTT: Sửa chữa & bảo trì máy tính, Quản trị mạng và hệ thống, Bảo mật hệ thống thông tin.",
    "level2_formula": "Xác định rõ vị trí công việc (Kĩ thuật viên CNTT, Quản trị mạng/hệ thống, Kĩ sư an toàn thông tin) hoặc yêu cầu về kỹ năng/pháp luật trong câu hỏi.",
    "level3_steps": "Đối chiếu các phương án A, B, C, D với nội dung bài học Chuyên đề 12G để chọn đáp án đúng: D."
  },
  "explanation": "Đáp án đúng là D. Theo Chuyên đề 12G: Phát triển phần mềm giáo dục, quản lí hệ thống máy tính của trường học, tạo các nội dung số hoá..",
  "sourceDocTitle": "Chuyên đề 12G. Giới thiệu nhóm nghề dịch vụ và quản trị.docx (Google Drive)"
},
{
  "id": "Q-TIN-12G-MC-57",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-huong-nghiep-dich-vu",
  "topicName": "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ và quản trị",
  "chapterName": "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Trong ngành công nghiệp, chuyên viên CNTT thường được phân công phụ trách nhiệm vụ nào sau đây?",
  "options": [
    {
      "id": "A",
      "content": "Quản lí và phát triển hệ thống tự động hoá."
    },
    {
      "id": "B",
      "content": "Quản lí dữ liệu sản xuất."
    },
    {
      "id": "C",
      "content": "Bảo mật thông tin của doanh nghiệp."
    },
    {
      "id": "D",
      "content": "Quản lí và phát triển hệ thống tự động hoá, quản lí dữ liệu sản xuất, bảo mật thông tin của doanh nghiệp."
    }
  ],
  "correctAnswer": "D",
  "hints": {
    "level1_concept": "Nắm vững đặc điểm, nhiệm vụ và yêu cầu chuyên môn của các nhóm nghề CNTT: Sửa chữa & bảo trì máy tính, Quản trị mạng và hệ thống, Bảo mật hệ thống thông tin.",
    "level2_formula": "Xác định rõ vị trí công việc (Kĩ thuật viên CNTT, Quản trị mạng/hệ thống, Kĩ sư an toàn thông tin) hoặc yêu cầu về kỹ năng/pháp luật trong câu hỏi.",
    "level3_steps": "Đối chiếu các phương án A, B, C, D với nội dung bài học Chuyên đề 12G để chọn đáp án đúng: D."
  },
  "explanation": "Đáp án đúng là D. Theo Chuyên đề 12G: Quản lí và phát triển hệ thống tự động hoá, quản lí dữ liệu sản xuất, bảo mật thông tin của doanh nghiệp.",
  "sourceDocTitle": "Chuyên đề 12G. Giới thiệu nhóm nghề dịch vụ và quản trị.docx (Google Drive)"
},
{
  "id": "Q-TIN-12G-MC-58",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-huong-nghiep-dich-vu",
  "topicName": "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ và quản trị",
  "chapterName": "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Trong ngành y tế, chuyên viên CNTT thường được phân công phụ trách nhiệm vụ nào sau đây?",
  "options": [
    {
      "id": "A",
      "content": "Quản lí và phát triển hệ thống thông tin bệnh viện."
    },
    {
      "id": "B",
      "content": "sao lưu và bảo mật dữ liệu điều trị của bệnh nhân."
    },
    {
      "id": "C",
      "content": "hỗ trợ kĩ thuật trong quá trình vận hành các thiết bị y tế."
    },
    {
      "id": "D",
      "content": "Quản lí và phát triển hệ thống thông tin bệnh viện, sao lưu và bảo mật dữ liệu điều trị của bệnh nhân, hỗ trợ kĩ thuật trong quá trình vận hành các thiết bị y tế ."
    }
  ],
  "correctAnswer": "D",
  "hints": {
    "level1_concept": "Nắm vững đặc điểm, nhiệm vụ và yêu cầu chuyên môn của các nhóm nghề CNTT: Sửa chữa & bảo trì máy tính, Quản trị mạng và hệ thống, Bảo mật hệ thống thông tin.",
    "level2_formula": "Xác định rõ vị trí công việc (Kĩ thuật viên CNTT, Quản trị mạng/hệ thống, Kĩ sư an toàn thông tin) hoặc yêu cầu về kỹ năng/pháp luật trong câu hỏi.",
    "level3_steps": "Đối chiếu các phương án A, B, C, D với nội dung bài học Chuyên đề 12G để chọn đáp án đúng: D."
  },
  "explanation": "Đáp án đúng là D. Theo Chuyên đề 12G: Quản lí và phát triển hệ thống thông tin bệnh viện, sao lưu và bảo mật dữ liệu điều trị của bệnh nhân, hỗ trợ kĩ thuật trong quá trình vận hành các thiết bị y tế .",
  "sourceDocTitle": "Chuyên đề 12G. Giới thiệu nhóm nghề dịch vụ và quản trị.docx (Google Drive)"
},
{
  "id": "Q-TIN-12G-MC-59",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-huong-nghiep-dich-vu",
  "topicName": "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ và quản trị",
  "chapterName": "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Trong ngành y tế, chuyên viên CNTT đảm bảo dữ liệu y tế được bảo mật bằng phương pháp nào sau đây?",
  "options": [
    {
      "id": "A",
      "content": "Lưu trữ dữ liệu trên máy tính cá nhân."
    },
    {
      "id": "B",
      "content": "Chia sẻ dữ liệu với mọi người trong nhóm tin học."
    },
    {
      "id": "C",
      "content": "Mã hoá dữ liệu."
    },
    {
      "id": "D",
      "content": "Lưu trữ dữ liệu trong email."
    }
  ],
  "correctAnswer": "C",
  "hints": {
    "level1_concept": "Nắm vững đặc điểm, nhiệm vụ và yêu cầu chuyên môn của các nhóm nghề CNTT: Sửa chữa & bảo trì máy tính, Quản trị mạng và hệ thống, Bảo mật hệ thống thông tin.",
    "level2_formula": "Xác định rõ vị trí công việc (Kĩ thuật viên CNTT, Quản trị mạng/hệ thống, Kĩ sư an toàn thông tin) hoặc yêu cầu về kỹ năng/pháp luật trong câu hỏi.",
    "level3_steps": "Đối chiếu các phương án A, B, C, D với nội dung bài học Chuyên đề 12G để chọn đáp án đúng: C."
  },
  "explanation": "Đáp án đúng là C. Theo Chuyên đề 12G: Mã hoá dữ liệu.",
  "sourceDocTitle": "Chuyên đề 12G. Giới thiệu nhóm nghề dịch vụ và quản trị.docx (Google Drive)"
},
{
  "id": "Q-TIN-12G-MC-60",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-huong-nghiep-dich-vu",
  "topicName": "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ và quản trị",
  "chapterName": "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Trong một dự án phát triển phần mềm giáo dục, chuyên viên CNTT cần phải thực hiện công việc nào sau đây để đảm bảo phần mềm đáp ứng được nhu cầu của người dùng?",
  "options": [
    {
      "id": "A",
      "content": "Phát triển phần mềm một cách độc lập, không cần phản hồi từ người dùng."
    },
    {
      "id": "B",
      "content": "Phát triển phần mềm dựa trên các phản hồi từ người dùng, liên tục cập nhật."
    },
    {
      "id": "C",
      "content": "Phát triển phần mềm dựa trên kinh nghiệm cá nhân."
    },
    {
      "id": "D",
      "content": "Phát triển phần mềm theo chỉ đạo đặt hàng từ đơn vị quản lí giáo dục."
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nắm vững đặc điểm, nhiệm vụ và yêu cầu chuyên môn của các nhóm nghề CNTT: Sửa chữa & bảo trì máy tính, Quản trị mạng và hệ thống, Bảo mật hệ thống thông tin.",
    "level2_formula": "Xác định rõ vị trí công việc (Kĩ thuật viên CNTT, Quản trị mạng/hệ thống, Kĩ sư an toàn thông tin) hoặc yêu cầu về kỹ năng/pháp luật trong câu hỏi.",
    "level3_steps": "Đối chiếu các phương án A, B, C, D với nội dung bài học Chuyên đề 12G để chọn đáp án đúng: B."
  },
  "explanation": "Đáp án đúng là B. Theo Chuyên đề 12G: Phát triển phần mềm dựa trên các phản hồi từ người dùng, liên tục cập nhật.",
  "sourceDocTitle": "Chuyên đề 12G. Giới thiệu nhóm nghề dịch vụ và quản trị.docx (Google Drive)"
},
{
  "id": "Q-TIN-12G-MC-61",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-huong-nghiep-dich-vu",
  "topicName": "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ và quản trị",
  "chapterName": "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Chương trình đào tạo ngành CNTT thường gồm những môn học nào sau đây?",
  "options": [
    {
      "id": "A",
      "content": "Lập trình, Cấu trúc dữ liệu, Hệ thống thông tin."
    },
    {
      "id": "B",
      "content": "Kế toán, Quản trị doanh nghiệp, Quảng cáo trực tuyến."
    },
    {
      "id": "C",
      "content": "Văn học, Lịch sử, Phân tích dữ liệu."
    },
    {
      "id": "D",
      "content": "Tin học văn phòng, Thiết kế chế bản, Quản lí dự án."
    }
  ],
  "correctAnswer": "A",
  "hints": {
    "level1_concept": "Nắm vững đặc điểm, nhiệm vụ và yêu cầu chuyên môn của các nhóm nghề CNTT: Sửa chữa & bảo trì máy tính, Quản trị mạng và hệ thống, Bảo mật hệ thống thông tin.",
    "level2_formula": "Xác định rõ vị trí công việc (Kĩ thuật viên CNTT, Quản trị mạng/hệ thống, Kĩ sư an toàn thông tin) hoặc yêu cầu về kỹ năng/pháp luật trong câu hỏi.",
    "level3_steps": "Đối chiếu các phương án A, B, C, D với nội dung bài học Chuyên đề 12G để chọn đáp án đúng: A."
  },
  "explanation": "Đáp án đúng là A. Theo Chuyên đề 12G: Lập trình, Cấu trúc dữ liệu, Hệ thống thông tin.",
  "sourceDocTitle": "Chuyên đề 12G. Giới thiệu nhóm nghề dịch vụ và quản trị.docx (Google Drive)"
},
{
  "id": "Q-TIN-12G-MC-62",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-huong-nghiep-dich-vu",
  "topicName": "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ và quản trị",
  "chapterName": "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
  "difficulty": "ThongHieu",
  "type": "multiple_choice",
  "content": "Khi tìm hiểu về cơ sở vật chất của một cơ sở đào tạo CNTT, cần đặc biệt quan tâm đến những cơ sở vật chất nào sau đây?",
  "options": [
    {
      "id": "A",
      "content": "Phòng tập thể dục thể thao, bể bơi, sân bóng đá."
    },
    {
      "id": "B",
      "content": "Phòng học hiện đại, phòng thực hành, hệ thống máy tính và thiết bị học tập."
    },
    {
      "id": "C",
      "content": "Nhà hàng, khách sạn, cửa hàng gần trường."
    },
    {
      "id": "D",
      "content": "Bệnh viện, phòng khám, hiệu thuốc gần trường."
    }
  ],
  "correctAnswer": "B",
  "hints": {
    "level1_concept": "Nắm vững đặc điểm, nhiệm vụ và yêu cầu chuyên môn của các nhóm nghề CNTT: Sửa chữa & bảo trì máy tính, Quản trị mạng và hệ thống, Bảo mật hệ thống thông tin.",
    "level2_formula": "Xác định rõ vị trí công việc (Kĩ thuật viên CNTT, Quản trị mạng/hệ thống, Kĩ sư an toàn thông tin) hoặc yêu cầu về kỹ năng/pháp luật trong câu hỏi.",
    "level3_steps": "Đối chiếu các phương án A, B, C, D với nội dung bài học Chuyên đề 12G để chọn đáp án đúng: B."
  },
  "explanation": "Đáp án đúng là B. Theo Chuyên đề 12G: Phòng học hiện đại, phòng thực hành, hệ thống máy tính và thiết bị học tập.",
  "sourceDocTitle": "Chuyên đề 12G. Giới thiệu nhóm nghề dịch vụ và quản trị.docx (Google Drive)"
},
{
  "id": "Q-TIN-12G-TF-01",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-huong-nghiep-dich-vu",
  "topicName": "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ và quản trị",
  "chapterName": "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
  "difficulty": "VanDung",
  "type": "true_false",
  "content": "Công ty ABC vừa phát triển một phần mềm quản lý khách hàng (CRM) để cải thiện mối quan hệ với khách hàng và tối ưu hóa quy trình bán hàng. Sau khi triển khai, bộ phận IT phát hiện rằng một số nhân viên gặp khó khăn trong việc sử dụng phần mềm mới do thiếu đào tạo. Trong cuộc họp với các bộ phận, giám đốc yêu cầu tăng cường đào tạo cho nhân viên để đảm bảo tất cả mọi người có thể sử dụng phần mềm hiệu quả. Bộ phận IT đã đề xuất một chương trình đào tạo và tài liệu hướng dẫn để giúp nhân viên làm quen với hệ thống mới.",
  "hints": {
    "level1_concept": "Đọc kĩ bối cảnh tình huống thực tế và đối chiếu vai trò, nhiệm vụ chuyên môn của nhân viên CNTT trong cơ quan, trường học, bệnh viện hoặc doanh nghiệp.",
    "level2_formula": "Phân tích từng mệnh đề (a, b, c, d) dựa trên quy trình vận hành hệ thống, an toàn an ninh mạng và các kĩ năng nghề nghiệp.",
    "level3_steps": "Xác định tính Đúng / Sai của từng mệnh đề và đưa ra căn cứ chuyên môn xác đáng theo bài học Chuyên đề 12G."
  },
  "explanation": "Đáp án chi tiết từng mệnh đề:\n- Ý a): Đúng (Đúng. Đào tạo nhân viên giúp họ làm quen với giao diện và quy trình, tối ưu hiệu quả sử dụng.)\n- Ý b): Sai (Sai. Tài liệu hướng dẫn là tài liệu tra cứu không thể thiếu khi triển khai bất kỳ hệ thống mới nào.)\n- Ý c): Sai (Sai. Đào tạo không đồng bộ dẫn đến sai sót trong dữ liệu và giảm hiệu suất chung của doanh nghiệp.)\n- Ý d): Đúng (Đúng. Phần mềm liên tục cập nhật phiên bản và tính năng mới đòi hỏi việc bồi dưỡng liên tục.)",
  "sourceDocTitle": "Chuyên đề 12G. Giới thiệu nhóm nghề dịch vụ và quản trị.docx (Google Drive)",
  "tfItems": [
    {
      "id": "a",
      "content": "Đào tạo nhân viên là một yếu tố quan trọng để đảm bảo họ có thể sử dụng phần mềm CRM hiệu quả.",
      "correctAnswer": true
    },
    {
      "id": "b",
      "content": "Việc cung cấp tài liệu hướng dẫn là không cần thiết vì phần mềm đã có giao diện thân thiện với người dùng.",
      "correctAnswer": false
    },
    {
      "id": "c",
      "content": "Chỉ cần một số nhân viên được đào tạo là đủ, vì những người khác có thể học từ họ.",
      "correctAnswer": false
    },
    {
      "id": "d",
      "content": "Đào tạo liên tục là cần thiết để cập nhật cho nhân viên về các tính năng mới của phần mềm.",
      "correctAnswer": true
    }
  ]
},
{
  "id": "Q-TIN-12G-TF-02",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-huong-nghiep-dich-vu",
  "topicName": "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ và quản trị",
  "chapterName": "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
  "difficulty": "VanDung",
  "type": "true_false",
  "content": "Nhóm IT của một trường đại học XYZ đã quyết định chuyển đổi từ hệ thống quản lý học sinh truyền thống sang một hệ thống quản lý học tập trực tuyến (LMS) để nâng cao trải nghiệm học tập cho sinh viên. Sau khi triển khai, một số giảng viên phản ánh rằng họ gặp khó khăn trong việc đưa bài giảng lên hệ thống mới và quản lý thông tin sinh viên. Trong một cuộc họp với ban giám hiệu, một giảng viên đề xuất tổ chức các buổi đào tạo để giúp giảng viên làm quen với hệ thống.",
  "hints": {
    "level1_concept": "Đọc kĩ bối cảnh tình huống thực tế và đối chiếu vai trò, nhiệm vụ chuyên môn của nhân viên CNTT trong cơ quan, trường học, bệnh viện hoặc doanh nghiệp.",
    "level2_formula": "Phân tích từng mệnh đề (a, b, c, d) dựa trên quy trình vận hành hệ thống, an toàn an ninh mạng và các kĩ năng nghề nghiệp.",
    "level3_steps": "Xác định tính Đúng / Sai của từng mệnh đề và đưa ra căn cứ chuyên môn xác đáng theo bài học Chuyên đề 12G."
  },
  "explanation": "Đáp án chi tiết từng mệnh đề:\n- Ý a): Đúng (Đúng. Hệ thống LMS tự động hóa việc lưu trữ, chia sẻ và theo dõi tiến độ bài giảng.)\n- Ý b): Sai (Sai. Trong kỷ nguyên chuyển đổi số, làm chủ LMS là yêu cầu bắt buộc đối với giảng viên.)\n- Ý c): Đúng (Đúng. Đào tạo giúp giải quyết khó khăn kỹ thuật và thúc đẩy chuyển đổi số thành công.)\n- Ý d): Sai (Sai. Hệ thống luôn cần được cập nhật bản vá bảo mật và cải tiến tính năng định kỳ.)",
  "sourceDocTitle": "Chuyên đề 12G. Giới thiệu nhóm nghề dịch vụ và quản trị.docx (Google Drive)",
  "tfItems": [
    {
      "id": "a",
      "content": "Chuyển đổi sang hệ thống LMS giúp giảng viên tiết kiệm thời gian trong việc quản lý tài liệu giảng dạy.",
      "correctAnswer": true
    },
    {
      "id": "b",
      "content": "Giảng viên không cần thiết phải biết cách sử dụng hệ thống LMS nếu họ đã quen với việc giảng dạy truyền thống.",
      "correctAnswer": false
    },
    {
      "id": "c",
      "content": "Các buổi đào tạo cho giảng viên là cần thiết để họ có thể sử dụng hệ thống một cách hiệu quả.",
      "correctAnswer": true
    },
    {
      "id": "d",
      "content": "Việc cập nhật hệ thống LMS là không cần thiết nếu nó hoạt động ổn định.",
      "correctAnswer": false
    }
  ]
},
{
  "id": "Q-TIN-12G-TF-03",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-huong-nghiep-dich-vu",
  "topicName": "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ và quản trị",
  "chapterName": "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
  "difficulty": "VanDung",
  "type": "true_false",
  "content": "Trong một công ty công nghệ thông tin, nhân viên IT thường xuyên phải xử lý các sự cố mạng. Gần đây, công ty đã triển khai một hệ thống mạng mới với nhiều thiết bị kết nối khác nhau, bao gồm máy chủ, router, và switch. Trong quá trình làm việc, nhân viên phát hiện rằng một số thiết bị không thể kết nối với Internet, dẫn đến sự gián đoạn trong công việc của các phòng ban khác.",
  "hints": {
    "level1_concept": "Đọc kĩ bối cảnh tình huống thực tế và đối chiếu vai trò, nhiệm vụ chuyên môn của nhân viên CNTT trong cơ quan, trường học, bệnh viện hoặc doanh nghiệp.",
    "level2_formula": "Phân tích từng mệnh đề (a, b, c, d) dựa trên quy trình vận hành hệ thống, an toàn an ninh mạng và các kĩ năng nghề nghiệp.",
    "level3_steps": "Xác định tính Đúng / Sai của từng mệnh đề và đưa ra căn cứ chuyên môn xác đáng theo bài học Chuyên đề 12G."
  },
  "explanation": "Đáp án chi tiết từng mệnh đề:\n- Ý a): Đúng (Đúng. Đây là năng lực cốt lõi của nhân viên quản trị mạng.)\n- Ý b): Sai (Sai. Hệ thống mạng doanh nghiệp đòi hỏi switch, router, firewall và hạ tầng cáp phức tạp.)\n- Ý c): Đúng (Đúng. Giám sát định kỳ giúp phát hiện sớm nguy cơ nghẽn mạng và lỗ hổng bảo mật.)\n- Ý d): Đúng (Đúng. Đảm bảo tính liên tục của hệ thống mạng là nhiệm vụ sống còn của IT.)",
  "sourceDocTitle": "Chuyên đề 12G. Giới thiệu nhóm nghề dịch vụ và quản trị.docx (Google Drive)",
  "tfItems": [
    {
      "id": "a",
      "content": "Nhân viên IT phải có kiến thức về cách cấu hình và khắc phục sự cố mạng để đảm bảo hệ thống hoạt động liên tục.",
      "correctAnswer": true
    },
    {
      "id": "b",
      "content": "Chỉ cần có một router là đủ để thiết lập mạng cho toàn bộ công ty.",
      "correctAnswer": false
    },
    {
      "id": "c",
      "content": "Nhân viên IT cần phải thường xuyên kiểm tra, theo dõi hệ thống mạng ngay cả khi đang hoạt động bình thường.",
      "correctAnswer": true
    },
    {
      "id": "d",
      "content": "Việc phát hiện và khắc phục sự cố mạng là một phần quan trọng trong công việc của nhân viên IT.",
      "correctAnswer": true
    }
  ]
},
{
  "id": "Q-TIN-12G-TF-04",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-huong-nghiep-dich-vu",
  "topicName": "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ và quản trị",
  "chapterName": "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
  "difficulty": "VanDung",
  "type": "true_false",
  "content": "Trong một bệnh viện lớn, nhóm IT đang chịu trách nhiệm nâng cấp hệ thống phần mềm quản lý bệnh nhân để cải thiện quy trình tiếp nhận và điều trị. Sau khi cài đặt phiên bản mới, các bác sĩ nhận thấy rằng dữ liệu bệnh nhân không được đồng bộ hóa chính xác giữa các khoa phòng, dẫn đến sự chậm trễ trong việc cập nhật hồ sơ y tế. Giám đốc bệnh viện yêu cầu nhóm IT phải giải quyết vấn đề này ngay lập tức để không làm ảnh hưởng đến quá trình khám chữa bệnh.",
  "hints": {
    "level1_concept": "Đọc kĩ bối cảnh tình huống thực tế và đối chiếu vai trò, nhiệm vụ chuyên môn của nhân viên CNTT trong cơ quan, trường học, bệnh viện hoặc doanh nghiệp.",
    "level2_formula": "Phân tích từng mệnh đề (a, b, c, d) dựa trên quy trình vận hành hệ thống, an toàn an ninh mạng và các kĩ năng nghề nghiệp.",
    "level3_steps": "Xác định tính Đúng / Sai của từng mệnh đề và đưa ra căn cứ chuyên môn xác đáng theo bài học Chuyên đề 12G."
  },
  "explanation": "Đáp án chi tiết từng mệnh đề:\n- Ý a): Đúng (Đúng. Đồng bộ dữ liệu phụ thuộc trực tiếp vào đường truyền mạng và toàn vẹn cơ sở dữ liệu.)\n- Ý b): Sai (Sai. Bắt buộc phải thử nghiệm (pilot testing) trên nhóm nhỏ trước khi phát hành diện rộng.)\n- Ý c): Sai (Sai. Bác sĩ không có chuyên môn IT, cần thông báo ngay cho đội kỹ thuật để xử lý khẩn cấp.)\n- Ý d): Đúng (Đúng. Hướng dẫn người dùng là một trong 3 nhiệm vụ trụ cột của Kĩ thuật viên CNTT.)",
  "sourceDocTitle": "Chuyên đề 12G. Giới thiệu nhóm nghề dịch vụ và quản trị.docx (Google Drive)",
  "tfItems": [
    {
      "id": "a",
      "content": "Nhóm IT cần phải kiểm tra kết nối mạng và cơ sở dữ liệu để tìm ra nguyên nhân gây ra sự cố không đồng bộ hóa.",
      "correctAnswer": true
    },
    {
      "id": "b",
      "content": "Việc cập nhật phần mềm không cần phải kiểm tra trước trên một nhóm nhỏ người dùng trước khi triển khai toàn diện.",
      "correctAnswer": false
    },
    {
      "id": "c",
      "content": "Các bác sĩ không cần phải báo cáo sự cố phần mềm cho nhóm IT vì họ có thể tự xử lý được.",
      "correctAnswer": false
    },
    {
      "id": "d",
      "content": "Nhóm IT phải đảm bảo rằng các bác sĩ được hướng dẫn sử dụng phiên bản phần mềm mới sau khi nâng cấp.",
      "correctAnswer": true
    }
  ]
},
{
  "id": "Q-TIN-12G-TF-05",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-huong-nghiep-dich-vu",
  "topicName": "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ và quản trị",
  "chapterName": "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
  "difficulty": "VanDung",
  "type": "true_false",
  "content": "Một trường tiểu học đã quyết định lắp đặt một phòng máy tính mới để phục vụ việc học tin học cho học sinh. Nhóm kỹ thuật viên IT được giao nhiệm vụ lắp ráp máy tính, cài đặt hệ điều hành và các phần mềm học tập. Trong quá trình cài đặt, kỹ thuật viên phát hiện một số máy tính không nhận diện được chuột và bàn phím, điều này gây trở ngại cho kế hoạch khai giảng lớp học tin học sắp tới.",
  "hints": {
    "level1_concept": "Đọc kĩ bối cảnh tình huống thực tế và đối chiếu vai trò, nhiệm vụ chuyên môn của nhân viên CNTT trong cơ quan, trường học, bệnh viện hoặc doanh nghiệp.",
    "level2_formula": "Phân tích từng mệnh đề (a, b, c, d) dựa trên quy trình vận hành hệ thống, an toàn an ninh mạng và các kĩ năng nghề nghiệp.",
    "level3_steps": "Xác định tính Đúng / Sai của từng mệnh đề và đưa ra căn cứ chuyên môn xác đáng theo bài học Chuyên đề 12G."
  },
  "explanation": "Đáp án chi tiết từng mệnh đề:\n- Ý a): Đúng (Đúng. Lỗi không nhận thiết bị ngoại vi thường do cổng kết nối lỏng hoặc thiếu/lỗi driver.)\n- Ý b): Sai (Sai. Hiểu biết phần cứng là yêu cầu bắt buộc hàng đầu của kĩ thuật viên sửa chữa, lắp ráp.)\n- Ý c): Đúng (Đúng. Bảo vệ thiết bị trường học khỏi mã độc và virus là trách nhiệm của IT.)\n- Ý d): Sai (Sai. Giáo viên cần được hướng dẫn cấu hình và tính năng phòng máy mới để vận hành tiết dạy thuận lợi.)",
  "sourceDocTitle": "Chuyên đề 12G. Giới thiệu nhóm nghề dịch vụ và quản trị.docx (Google Drive)",
  "tfItems": [
    {
      "id": "a",
      "content": "Kỹ thuật viên IT cần kiểm tra kết nối phần cứng và cài đặt lại driver nếu cần thiết.",
      "correctAnswer": true
    },
    {
      "id": "b",
      "content": "Việc lắp ráp máy tính không đòi hỏi kỹ thuật viên phải có kiến thức về phần cứng máy tính.",
      "correctAnswer": false
    },
    {
      "id": "c",
      "content": "Kỹ thuật viên IT phải đảm bảo tất cả các máy tính đều được cài đặt phần mềm bảo vệ khỏi mã độc.",
      "correctAnswer": true
    },
    {
      "id": "d",
      "content": "Kỹ thuật viên có thể bỏ qua việc hướng dẫn giáo viên cách sử dụng máy tính mới vì họ đã có kinh nghiệm.",
      "correctAnswer": false
    }
  ]
},
{
  "id": "Q-TIN-12G-TF-06",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-huong-nghiep-dich-vu",
  "topicName": "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ và quản trị",
  "chapterName": "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
  "difficulty": "VanDung",
  "type": "true_false",
  "content": "Một tổ chức tài chính đang chuẩn bị triển khai các biện pháp bảo mật mới nhằm bảo vệ dữ liệu khách hàng khỏi các cuộc tấn công mạng ngày càng gia tăng. Trong quá trình đánh giá an ninh mạng, chuyên viên bảo mật phát hiện rằng hệ thống mạng nội bộ có nhiều lỗ hổng chưa được vá, và nhiều nhân viên vẫn sử dụng mật khẩu yếu. Giám đốc điều hành đã yêu cầu bộ phận IT lập kế hoạch nâng cao nhận thức bảo mật cho toàn bộ nhân viên và triển khai các giải pháp an ninh mạng mạnh mẽ hơn.",
  "hints": {
    "level1_concept": "Đọc kĩ bối cảnh tình huống thực tế và đối chiếu vai trò, nhiệm vụ chuyên môn của nhân viên CNTT trong cơ quan, trường học, bệnh viện hoặc doanh nghiệp.",
    "level2_formula": "Phân tích từng mệnh đề (a, b, c, d) dựa trên quy trình vận hành hệ thống, an toàn an ninh mạng và các kĩ năng nghề nghiệp.",
    "level3_steps": "Xác định tính Đúng / Sai của từng mệnh đề và đưa ra căn cứ chuyên môn xác đáng theo bài học Chuyên đề 12G."
  },
  "explanation": "Đáp án chi tiết từng mệnh đề:\n- Ý a): Đúng (Đúng. Quét và vá lỗ hổng định kỳ là nhiệm vụ trọng yếu của chuyên viên an toàn thông tin.)\n- Ý b): Sai (Sai. Mật khẩu cần được thay đổi định kỳ và đáp ứng tiêu chuẩn phức tạp để tránh bị rò rỉ.)\n- Ý c): Sai (Sai. Con người là mắt xích yếu nhất trong bảo mật; nâng cao nhận thức bảo mật là tối quan trọng.)\n- Ý d): Đúng (Đúng. Tường lửa (Firewall) và IDS/IPS là lớp phòng thủ cốt lõi của mạng tài chính.)",
  "sourceDocTitle": "Chuyên đề 12G. Giới thiệu nhóm nghề dịch vụ và quản trị.docx (Google Drive)",
  "tfItems": [
    {
      "id": "a",
      "content": "Chuyên viên bảo mật cần phải thường xuyên kiểm tra và vá các lỗ hổng bảo mật trong hệ thống mạng.",
      "correctAnswer": true
    },
    {
      "id": "b",
      "content": "Nhân viên không cần phải thay đổi mật khẩu thường xuyên nếu mật khẩu của họ đủ dài.",
      "correctAnswer": false
    },
    {
      "id": "c",
      "content": "Tổ chức không cần phải đào tạo nhân viên về an ninh mạng vì đã có phần mềm bảo vệ.",
      "correctAnswer": false
    },
    {
      "id": "d",
      "content": "Việc cài đặt tường lửa và hệ thống phát hiện xâm nhập là cần thiết để bảo vệ hệ thống khỏi các cuộc tấn công từ bên ngoài.",
      "correctAnswer": true
    }
  ]
},
{
  "id": "Q-TIN-12G-TF-07",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-huong-nghiep-dich-vu",
  "topicName": "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ và quản trị",
  "chapterName": "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
  "difficulty": "VanDung",
  "type": "true_false",
  "content": "Trong một công ty truyền thông, nhóm IT phát hiện rằng hệ thống lưu trữ dữ liệu của họ sắp hết dung lượng do số lượng video và hình ảnh chất lượng cao ngày càng tăng. Để giải quyết vấn đề này, giám đốc công nghệ (CTO) đã đề xuất chuyển đổi một phần dữ liệu sang hệ thống lưu trữ đám mây. Tuy nhiên, một số thành viên trong nhóm IT lo ngại về vấn đề bảo mật và chi phí duy trì dịch vụ đám mây hàng tháng.",
  "hints": {
    "level1_concept": "Đọc kĩ bối cảnh tình huống thực tế và đối chiếu vai trò, nhiệm vụ chuyên môn của nhân viên CNTT trong cơ quan, trường học, bệnh viện hoặc doanh nghiệp.",
    "level2_formula": "Phân tích từng mệnh đề (a, b, c, d) dựa trên quy trình vận hành hệ thống, an toàn an ninh mạng và các kĩ năng nghề nghiệp.",
    "level3_steps": "Xác định tính Đúng / Sai của từng mệnh đề và đưa ra căn cứ chuyên môn xác đáng theo bài học Chuyên đề 12G."
  },
  "explanation": "Đáp án chi tiết từng mệnh đề:\n- Ý a): Đúng (Đúng. Điện toán đám mây cho phép mở rộng (scalability) dung lượng nhanh chóng theo nhu cầu.)\n- Ý b): Sai (Sai. Bảo mật đám mây tuân theo mô hình trách nhiệm chia sẻ (shared responsibility model); công ty vẫn quản lý phân quyền và dữ liệu.)\n- Ý c): Đúng (Đúng. Đánh giá TCO (tổng chi phí sở hữu) là bước bắt buộc trước khi chuyển đổi hạ tầng.)\n- Ý d): Đúng (Đúng. Cần có kế hoạch di chuyển dữ liệu (data migration) từng giai đoạn để đảm bảo tính liên tục.)",
  "sourceDocTitle": "Chuyên đề 12G. Giới thiệu nhóm nghề dịch vụ và quản trị.docx (Google Drive)",
  "tfItems": [
    {
      "id": "a",
      "content": "Lưu trữ đám mây giúp công ty mở rộng dung lượng lưu trữ một cách linh hoạt mà không cần mua thêm phần cứng.",
      "correctAnswer": true
    },
    {
      "id": "b",
      "content": "Bảo mật dữ liệu trên đám mây hoàn toàn do nhà cung cấp dịch vụ chịu trách nhiệm, công ty không cần quan tâm.",
      "correctAnswer": false
    },
    {
      "id": "c",
      "content": "Công ty cần phải đánh giá chi phí dài hạn trước khi quyết định chuyển sang sử dụng dịch vụ đám mây.",
      "correctAnswer": true
    },
    {
      "id": "d",
      "content": "Việc di chuyển dữ liệu lớn lên đám mây có thể gây ra gián đoạn tạm thời đối với công việc của công ty nếu không được lập kế hoạch cẩn thận.",
      "correctAnswer": true
    }
  ]
},
{
  "id": "Q-TIN-12G-TF-08",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-huong-nghiep-dich-vu",
  "topicName": "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ và quản trị",
  "chapterName": "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
  "difficulty": "VanDung",
  "type": "true_false",
  "content": "Một trường trung học phổ thông đang tổ chức kỳ thi học kỳ trực tuyến cho học sinh. Bộ phận kỹ thuật IT của trường có nhiệm vụ đảm bảo rằng hệ thống máy chủ và đường truyền Internet hoạt động ổn định trong suốt thời gian diễn ra kỳ thi. Trong khi kỳ thi đang diễn ra, một lượng lớn học sinh truy cập đồng thời làm cho hệ thống máy chủ bị quá tải, khiến nhiều học sinh không thể nộp bài đúng hạn.",
  "hints": {
    "level1_concept": "Đọc kĩ bối cảnh tình huống thực tế và đối chiếu vai trò, nhiệm vụ chuyên môn của nhân viên CNTT trong cơ quan, trường học, bệnh viện hoặc doanh nghiệp.",
    "level2_formula": "Phân tích từng mệnh đề (a, b, c, d) dựa trên quy trình vận hành hệ thống, an toàn an ninh mạng và các kĩ năng nghề nghiệp.",
    "level3_steps": "Xác định tính Đúng / Sai của từng mệnh đề và đưa ra căn cứ chuyên môn xác đáng theo bài học Chuyên đề 12G."
  },
  "explanation": "Đáp án chi tiết từng mệnh đề:\n- Ý a): Đúng (Đúng. Kiểm thử tải (stress/load testing) là khâu bắt buộc trước các sự kiện trực tuyến lớn.)\n- Ý b): Sai (Sai. Quá tải máy chủ do hàng nghìn kết nối đồng thời làm treo cổng dịch vụ của nhà trường.)\n- Ý c): Đúng (Đúng. Mở rộng tài nguyên máy chủ và băng thông giúp đáp ứng lượng truy cập đỉnh điểm.)\n- Ý d): Đúng (Đúng. Cân bằng tải (load balancing) và máy chủ dự phòng giúp phân tán áp lực truy cập hiệu quả.)",
  "sourceDocTitle": "Chuyên đề 12G. Giới thiệu nhóm nghề dịch vụ và quản trị.docx (Google Drive)",
  "tfItems": [
    {
      "id": "a",
      "content": "Bộ phận IT cần phải dự đoán và kiểm tra khả năng chịu tải của hệ thống máy chủ trước khi kỳ thi diễn ra.",
      "correctAnswer": true
    },
    {
      "id": "b",
      "content": "Học sinh không thể nộp bài là do mạng Internet cá nhân của họ chứ không liên quan đến máy chủ của trường.",
      "correctAnswer": false
    },
    {
      "id": "c",
      "content": "Việc nâng cấp băng thông Internet và dung lượng máy chủ là giải pháp cần thiết để tránh tình trạng quá tải trong tương lai.",
      "correctAnswer": true
    },
    {
      "id": "d",
      "content": "Bộ phận IT có thể sử dụng hệ thống máy chủ dự phòng để chia tải trong các kỳ thi có lượng truy cập lớn.",
      "correctAnswer": true
    }
  ]
},
{
  "id": "Q-TIN-12G-TF-09",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-huong-nghiep-dich-vu",
  "topicName": "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ và quản trị",
  "chapterName": "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
  "difficulty": "VanDung",
  "type": "true_false",
  "content": "Hãy nhận định tính đúng hoặc sai của các phát biểu sau về công việc của người làm nghề sửa chữa và bảo trì máy tính:",
  "hints": {
    "level1_concept": "Đọc kĩ bối cảnh tình huống thực tế và đối chiếu vai trò, nhiệm vụ chuyên môn của nhân viên CNTT trong cơ quan, trường học, bệnh viện hoặc doanh nghiệp.",
    "level2_formula": "Phân tích từng mệnh đề (a, b, c, d) dựa trên quy trình vận hành hệ thống, an toàn an ninh mạng và các kĩ năng nghề nghiệp.",
    "level3_steps": "Xác định tính Đúng / Sai của từng mệnh đề và đưa ra căn cứ chuyên môn xác đáng theo bài học Chuyên đề 12G."
  },
  "explanation": "Đáp án chi tiết từng mệnh đề:\n- Ý a): Sai (Sai. Kĩ thuật viên còn làm việc với phần mềm và hướng dẫn người dùng.)\n- Ý b): Đúng (Đúng. Theo bài học Chuyên đề 12G, người sửa chữa bảo trì thường được gọi là Kĩ thuật viên CNTT.)\n- Ý c): Sai (Sai. Hướng dẫn người dùng là một trong 3 mảng công việc chính được quy định.)\n- Ý d): Đúng (Đúng. Đây là năng lực giải quyết vấn đề cốt lõi của người làm nghề.)",
  "sourceDocTitle": "Chuyên đề 12G. Giới thiệu nhóm nghề dịch vụ và quản trị.docx (Google Drive)",
  "tfItems": [
    {
      "id": "a",
      "content": "Người làm nghề sửa chữa và bảo trì máy tính chỉ làm việc với phần cứng máy tính và thiết bị số.",
      "correctAnswer": false
    },
    {
      "id": "b",
      "content": "Kĩ thuật viên công nghệ thông tin là một tên gọi khác của người làm nghề sửa chữa và bảo trì máy tính.",
      "correctAnswer": true
    },
    {
      "id": "c",
      "content": "Người làm nghề sửa chữa và bảo trì máy tính không cần phải hướng dẫn người sử dụng.",
      "correctAnswer": false
    },
    {
      "id": "d",
      "content": "Người làm nghề sửa chữa và bảo trì máy tính cần phải có khả năng đưa ra giải pháp xử lí các sự cố, tình huống xảy ra trong máy tính.",
      "correctAnswer": true
    }
  ]
},
{
  "id": "Q-TIN-12G-TF-10",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-huong-nghiep-dich-vu",
  "topicName": "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ và quản trị",
  "chapterName": "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
  "difficulty": "VanDung",
  "type": "true_false",
  "content": "Hãy nhận định tính đúng hoặc sai của các phát biểu sau về nhiệm vụ của chuyên viên Công nghệ thông tin trong các lĩnh vực:",
  "hints": {
    "level1_concept": "Đọc kĩ bối cảnh tình huống thực tế và đối chiếu vai trò, nhiệm vụ chuyên môn của nhân viên CNTT trong cơ quan, trường học, bệnh viện hoặc doanh nghiệp.",
    "level2_formula": "Phân tích từng mệnh đề (a, b, c, d) dựa trên quy trình vận hành hệ thống, an toàn an ninh mạng và các kĩ năng nghề nghiệp.",
    "level3_steps": "Xác định tính Đúng / Sai của từng mệnh đề và đưa ra căn cứ chuyên môn xác đáng theo bài học Chuyên đề 12G."
  },
  "explanation": "Đáp án chi tiết từng mệnh đề:\n- Ý a): Sai (Sai. Chuyên viên CNTT còn phát triển phần mềm giáo dục, quản lý hệ thống LMS và số hóa tài liệu.)\n- Ý b): Sai (Sai. Hồ sơ bệnh án điện tử là dữ liệu cực kỳ nhạy cảm cần được mã hóa và bảo mật nghiêm ngặt.)\n- Ý c): Đúng (Đúng. CNTT kết hợp tự động hóa và phân tích dữ liệu sản xuất giúp tối ưu hiệu suất máy móc.)\n- Ý d): Đúng (Đúng. Kĩ năng giao tiếp giúp giải thích vấn đề kỹ thuật và hỗ trợ đồng nghiệp, khách hàng hiệu quả.)",
  "sourceDocTitle": "Chuyên đề 12G. Giới thiệu nhóm nghề dịch vụ và quản trị.docx (Google Drive)",
  "tfItems": [
    {
      "id": "a",
      "content": "Trong ngành giáo dục, chuyên viên Công nghệ thông tin chỉ có nhiệm vụ duy nhất là quản lí hệ thống máy tính của nhà trường.",
      "correctAnswer": false
    },
    {
      "id": "b",
      "content": "Trong ngành y tế, chuyên viên Công nghệ thông tin không cần phải phụ trách nhiệm vụ bảo mật dữ liệu y tế.",
      "correctAnswer": false
    },
    {
      "id": "c",
      "content": "Trong ngành công nghiệp, chuyên viên Công nghệ thông tin có thể đề xuất được các cải tiến để nâng cao hiệu suất máy móc.",
      "correctAnswer": true
    },
    {
      "id": "d",
      "content": "Chuyên viên Công nghệ thông tin cần có kĩ năng trình bày và giao tiếp tốt.",
      "correctAnswer": true
    }
  ]
},
{
  "id": "Q-TIN-12G-TF-11",
  "subjectId": "tin-hoc-12",
  "topicId": "tin-huong-nghiep-dich-vu",
  "topicName": "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ và quản trị",
  "chapterName": "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
  "difficulty": "VanDung",
  "type": "true_false",
  "content": "Hãy nhận định tính đúng hoặc sai của các phát biểu sau về những việc cần lưu ý khi tìm hiểu thông tin đào tạo của một số cơ sở đào tạo Công nghệ thông tin:",
  "hints": {
    "level1_concept": "Đọc kĩ bối cảnh tình huống thực tế và đối chiếu vai trò, nhiệm vụ chuyên môn của nhân viên CNTT trong cơ quan, trường học, bệnh viện hoặc doanh nghiệp.",
    "level2_formula": "Phân tích từng mệnh đề (a, b, c, d) dựa trên quy trình vận hành hệ thống, an toàn an ninh mạng và các kĩ năng nghề nghiệp.",
    "level3_steps": "Xác định tính Đúng / Sai của từng mệnh đề và đưa ra căn cứ chuyên môn xác đáng theo bài học Chuyên đề 12G."
  },
  "explanation": "Đáp án chi tiết từng mệnh đề:\n- Ý a): Sai (Sai. Học phí chỉ là một yếu tố; quan trọng hàng đầu là chất lượng đào tạo, chương trình và giảng viên.)\n- Ý b): Sai (Sai. Ngành CNTT bắt buộc phải có phòng thực hành hiện đại, máy tính và thiết bị mạng cấu hình tốt.)\n- Ý c): Đúng (Đúng. Đội ngũ giảng viên trình độ cao, giàu kinh nghiệm thực tế quyết định chất lượng đầu ra.)\n- Ý d): Đúng (Đúng. Tỷ lệ sinh viên có việc làm và đối tác doanh nghiệp là thước đo uy tín của trường.)",
  "sourceDocTitle": "Chuyên đề 12G. Giới thiệu nhóm nghề dịch vụ và quản trị.docx (Google Drive)",
  "tfItems": [
    {
      "id": "a",
      "content": "Quan tâm nhất khi chọn lựa cơ sở đào tạo là học phí.",
      "correctAnswer": false
    },
    {
      "id": "b",
      "content": "Không cần quan tâm đến điều kiện cơ sở vật chất khi lựa chọn cơ sở đào tạo Công nghệ thông tin.",
      "correctAnswer": false
    },
    {
      "id": "c",
      "content": "Khi tìm hiểu lựa chọn cơ sở đào tạo Công nghệ thông tin, thông tin về lực lượng giảng viên trực tiếp giảng dạy các môn học là một trong những thông tin mang tính quyết định.",
      "correctAnswer": true
    },
    {
      "id": "d",
      "content": "Cơ hội việc làm sau khi tốt nghiệp là một yếu tố quan trọng cần xem xét khi chọn lựa cơ sở đào tạo Công nghệ thông tin.",
      "correctAnswer": true
    }
  ]
}
];
