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
        name: "Ôn tập: Giao tiếp và ứng xử trong không gian mạng",
        subjectId: "tin-hoc-12",
        chapter: "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
        totalQuestions: 3,
        mcCount: 3,
      },

      // Tuần 12 - 20: Tạo trang web với HTML & CSS [14 tiết - trừ Tuần 17 KTHK I]
      {
        id: "tin-html-cau-truc-dinh-dang",
        name: "Bài 1: HTML và cấu trúc trang web (Tuần 12)",
        subjectId: "tin-hoc-12",
        chapter: "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
        totalQuestions: 4,
        mcCount: 4,
      },
      {
        id: "tin-html-dinh-dang-van-ban",
        name: "Bài 2: Định dạng văn bản (Tuần 13)",
        subjectId: "tin-hoc-12",
        chapter: "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
        totalQuestions: 3,
        mcCount: 3,
      },
      {
        id: "tin-html-danh-sach-bang",
        name: "Bài 3: Tạo danh sách, bảng (Tuần 14)",
        subjectId: "tin-hoc-12",
        chapter: "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
        totalQuestions: 3,
        mcCount: 3,
      },
      {
        id: "tin-html-tao-lien-ket",
        name: "Bài 4: Tạo liên kết (Tuần 15)",
        subjectId: "tin-hoc-12",
        chapter: "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
        totalQuestions: 3,
        mcCount: 3,
      },
      {
        id: "tin-html-da-phuong-tien-form",
        name: "Bài 5: Chèn tệp tin đa phương tiện và khung nội tuyến (Tuần 16)",
        subjectId: "tin-hoc-12",
        chapter: "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
        totalQuestions: 4,
        mcCount: 4,
      },
      {
        id: "tin-html-bieu-mau-form",
        name: "Bài 6: Tạo biểu mẫu (Form) (Tuần 18)",
        subjectId: "tin-hoc-12",
        chapter: "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
        totalQuestions: 3,
        mcCount: 3,
      },
      {
        id: "tin-css-khai-niem-vai-tro",
        name: "Bài 7: Khái niệm, vai trò của CSS; Định dạng văn bản & Màu sắc (Tuần 19)",
        subjectId: "tin-hoc-12",
        chapter: "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
        totalQuestions: 3,
        mcCount: 3,
      },
      {
        id: "tin-css-bo-chon-dinh-dang",
        name: "Bài 8: Định dạng khung, các mức ưu tiên của bộ chọn (Tuần 20)",
        subjectId: "tin-hoc-12",
        chapter: "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
        totalQuestions: 4,
        mcCount: 4,
      },

      // Tuần 21 - 23: Hướng nghiệp với tin học [6 tiết]
      {
        id: "tin-huong-nghiep-dich-vu",
        name: "Hướng nghiệp với tin học (Tin học 10, 11, 12) (Tuần 21)",
        subjectId: "tin-hoc-12",
        chapter: "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
        totalQuestions: 3,
        mcCount: 3,
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
    "difficulty": "NhanBiet",
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
    "difficulty": "NhanBiet",
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
    "difficulty": "NhanBiet",
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
    "difficulty": "NhanBiet",
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
    "difficulty": "NhanBiet",
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
    "difficulty": "NhanBiet",
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
    "difficulty": "NhanBiet",
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
    "difficulty": "NhanBiet",
    "content": "Hệ thống nào dưới đây KHÔNG được coi là hệ thống có ứng dụng AI?",
    "options": [
      {
        "id": "A",
        "content": "Google Translate."
      },
      {
        "id": "B",
        "content": "ChatGPT."
      },
      {
        "id": "C",
        "content": "Dây chuyền lắp ráp tự động."
      },
      {
        "id": "D",
        "content": "Dự báo thời tiết."
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
    "id": "Q-TIN-AI-09",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "NhanBiet",
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
    "difficulty": "NhanBiet",
    "content": "Phương án nào dưới đây nêu đúng về khả năng suy luận của AI?",
    "options": [
      {
        "id": "A",
        "content": "Trích xuất thông tin từ dữ liệu để học và tích luỹ tri thức."
      },
      {
        "id": "B",
        "content": "Cảm nhận và hiểu biết môi trường thông qua các cảm biến và thiết bị đẩu vào."
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
    "difficulty": "NhanBiet",
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
    "difficulty": "NhanBiet",
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
    "difficulty": "NhanBiet",
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
    "difficulty": "NhanBiet",
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
    "difficulty": "NhanBiet",
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
    "difficulty": "NhanBiet",
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
    "difficulty": "NhanBiet",
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
    "difficulty": "NhanBiet",
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
    "difficulty": "NhanBiet",
    "content": "Hệ thống nào dưới đây không được coi là hệ thống có ứng dụng AI?",
    "options": [
      {
        "id": "A",
        "content": "Google Translate."
      },
      {
        "id": "B",
        "content": "ChatGPT."
      },
      {
        "id": "C",
        "content": "Dây chuyền lắp ráp tự động."
      },
      {
        "id": "D",
        "content": "Dự báo thời tiết."
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
    "id": "Q-TIN-AI-20",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "NhanBiet",
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
    "difficulty": "NhanBiet",
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
    "difficulty": "NhanBiet",
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
    "difficulty": "NhanBiet",
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
    "difficulty": "NhanBiet",
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
    "difficulty": "NhanBiet",
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
    "difficulty": "NhanBiet",
    "content": "Robot đầu tiên trên thế giới được tích hợp ứng dụng AI do hãng nào sản xuất?",
    "options": [
      {
        "id": "A",
        "content": "C. Honda."
      },
      {
        "id": "B",
        "content": "NAS"
      },
      {
        "id": "C",
        "content": "Không có phương án C"
      },
      {
        "id": "D",
        "content": "Toshiba."
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
    "id": "Q-TIN-AI-27",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "NhanBiet",
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
        "content": "Không có phương án D"
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
    "id": "Q-TIN-AI-28",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "NhanBiet",
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
    "difficulty": "NhanBiet",
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
        "content": "Không có phương án C"
      },
      {
        "id": "D",
        "content": "Máy cắt cỏ chạy bằng xăng."
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
    "id": "Q-TIN-AI-30",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "NhanBiet",
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
    "difficulty": "NhanBiet",
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
        "content": "Không có phương án C"
      },
      {
        "id": "D",
        "content": "Nghiên cứu về bệnh tim mạch."
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
    "id": "Q-TIN-AI-32",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "NhanBiet",
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
        "content": "Không có phương án C"
      },
      {
        "id": "D",
        "content": "Chỉ dùng để ra bài tập luyện tập."
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
    "id": "Q-TIN-AI-33",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "NhanBiet",
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
        "content": "AI làm cho máy tính có khả năng thực hiện những công việc cần có trí tuệ như của con người."
      },
      {
        "id": "B",
        "content": "Các lĩnh vực nghiên cứu phát triển AI gồm có: học máy, xử lí ngôn ngữ tự nhiên, thị giác máy tính, AI tạo sinh."
      },
      {
        "id": "C",
        "content": "Thị giác máy tính góp phần phát triển các hệ thống AI để điều khiển phương tiện tự lái, hỗ trợ người lái hay người máy có camera tích hợp công nghệ nhận dạng giọng nói và cảm xúc."
      },
      {
        "id": "D",
        "content": "Chat GPT có thể viết các tóm tắt nghiên cứu giống như bài viết của một nhà khoa học."
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
        "content": "AI mạnh đã được sử dụng rộng rãi và có hiệu quả cao trong một số nhiệm vụ cụ thể."
      },
      {
        "id": "B",
        "content": "Không thể phân biệt được hệ thống AI yếu với trí tuệ con người nói chung."
      },
      {
        "id": "C",
        "content": "AI yếu có thể được con người huấn luyện thông qua học máy nhưng không thể tự học hỏi hoặc tự cải thiện nếu không có sự hỗ trợ và hướng dẫn của con người."
      },
      {
        "id": "D",
        "content": "Hệ chuyên gia MYCIN là một ví dụ về AI mạnh."
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
        "content": "Hệ chuyên gia MYCIN sử dụng các kĩ thuật Học máy."
      },
      {
        "id": "B",
        "content": "Google dịch là dịch vụ dịch thuật có trả phí do Google phát triển."
      },
      {
        "id": "C",
        "content": "Các robot thông minh được coi là ứng dụng điển hình của AI trong lĩnh vực điều khiển."
      },
      {
        "id": "D",
        "content": "Hệ thống nhận dạng khuôn mặt là một ví dụ của trí tuệ nhân tạo tổng quát."
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
    "difficulty": "VanDung",
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
        "content": "Khả năng học."
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
    "difficulty": "VanDung",
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
    "difficulty": "VanDung",
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
    "difficulty": "VanDung",
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
    "difficulty": "VanDung",
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
    "difficulty": "VanDung",
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
    "difficulty": "VanDung",
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
    "difficulty": "VanDung",
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
    "difficulty": "VanDung",
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
    "difficulty": "VanDung",
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
    "difficulty": "VanDung",
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
    "difficulty": "VanDung",
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
    "difficulty": "VanDung",
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
    "id": "Q-TIN-AI-71",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "VanDung",
    "content": "Phương án nào sau đây KHÔNG phải là ứng dụng của AI trong lĩnh vực sản xuất?",
    "options": [
      {
        "id": "A",
        "content": "Phân tích tâm lý công nhân."
      },
      {
        "id": "B",
        "content": "Kiếm tra chất lượng sản phẩm."
      },
      {
        "id": "C",
        "content": "Quản lý tồn kho và dự báo nhu cầu."
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
    "difficulty": "VanDung",
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
    "difficulty": "VanDung",
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
    "difficulty": "VanDung",
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
        "content": "Không có phương án C"
      },
      {
        "id": "D",
        "content": "Chatbot ChatGPT."
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
    "id": "Q-TIN-AI-75",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-ai-tri-tue-nhan-tao",
    "topicName": "Ôn tập chủ đề 1: Trắc nghiệm 4 lựa chọn (AI) (Tuần 7)",
    "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
    "difficulty": "VanDung",
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
    "difficulty": "VanDung",
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
  // --- CÂU HỎI TRẮC NGHIỆM 4 LỰA CHỌN CHUYÊN ĐỀ 12B: KẾT NỐI MẠNG (72 CÂU) ---
  {
    "id": "Q-TIN-NET-01",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "NhanBiet",
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
    "difficulty": "NhanBiet",
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
        "content": "Local Area ."
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
    "difficulty": "NhanBiet",
    "content": "Máy tính kết nối với nhau để:",
    "options": [
      {
        "id": "A",
        "content": "Chia sẻ các thiết bị"
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
        "content": "Chia sẻ các thiết bị và trao đổi dữ liệu"
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
    "difficulty": "NhanBiet",
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
    "difficulty": "NhanBiet",
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
    "difficulty": "NhanBiet",
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
    "difficulty": "NhanBiet",
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
    "difficulty": "NhanBiet",
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
    "difficulty": "NhanBiet",
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
        "content": "Nguy cơ bị lừa đảo, đánh cắp thông tin cá nhân."
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
    "difficulty": "NhanBiet",
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
    "difficulty": "NhanBiet",
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
    "id": "Q-TIN-NET-12",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "NhanBiet",
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
    "difficulty": "NhanBiet",
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
    "difficulty": "NhanBiet",
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
    "difficulty": "NhanBiet",
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
    "difficulty": "NhanBiet",
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
        "content": "Thẻ nhớ, US"
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
    "difficulty": "NhanBiet",
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
    "difficulty": "NhanBiet",
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
    "difficulty": "NhanBiet",
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
    "difficulty": "NhanBiet",
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
    "difficulty": "NhanBiet",
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
    "difficulty": "NhanBiet",
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
    "difficulty": "NhanBiet",
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
    "id": "Q-TIN-NET-24",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-thiet-bi-giao-thuc-mang",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Mạng máy tính",
    "chapterName": "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    "difficulty": "NhanBiet",
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
    "difficulty": "NhanBiet",
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
    "difficulty": "VanDung",
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
    "difficulty": "VanDung",
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
        "content": "Chọn Network Internet settings"
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
    "difficulty": "VanDung",
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
    "difficulty": "VanDung",
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
    "difficulty": "VanDung",
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
    "difficulty": "VanDung",
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
    "difficulty": "VanDung",
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
    "difficulty": "VanDung",
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
    "difficulty": "VanDung",
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
    "difficulty": "VanDung",
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
    "difficulty": "VanDung",
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
    "difficulty": "VanDung",
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
    "difficulty": "VanDung",
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
    "difficulty": "VanDung",
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
    "difficulty": "VanDung",
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
    "difficulty": "VanDung",
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
    "difficulty": "VanDung",
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
    "difficulty": "VanDung",
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
    "difficulty": "VanDung",
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
    "difficulty": "VanDung",
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
    "difficulty": "VanDung",
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
    "difficulty": "VanDung",
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
  // --- CÂU HỎI TRẮC NGHIỆM ĐÚNG / SAI CHUYÊN ĐỀ 12B: KẾT NỐI MẠNG (11 CÂU) ---
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
  // --- CÂU HỎI TRẮC NGHIỆM 4 LỰA CHỌN CHUYÊN ĐỀ 10F: LẬP TRÌNH PYTHON (54 CÂU) ---
  {
    "id": "Q-TIN-PY-01",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-lap-trinh-python",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Python (Tuần 2 – 6)",
    "chapterName": "Phần 1: Lập trình cơ bản Python (Tin học 10)",
    "difficulty": "NhanBiet",
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
    "difficulty": "NhanBiet",
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
    "difficulty": "NhanBiet",
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
    "difficulty": "NhanBiet",
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
    "difficulty": "NhanBiet",
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
        "content": "if điều kiện: lệnh"
      },
      {
        "id": "D",
        "content": "if điều kiện :"
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
    "difficulty": "NhanBiet",
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
    "difficulty": "NhanBiet",
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
    "difficulty": "NhanBiet",
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
    "difficulty": "NhanBiet",
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
    "difficulty": "NhanBiet",
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
    "difficulty": "NhanBiet",
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
    "id": "Q-TIN-PY-13",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-lap-trinh-python",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Python (Tuần 2 – 6)",
    "chapterName": "Phần 1: Lập trình cơ bản Python (Tin học 10)",
    "difficulty": "NhanBiet",
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
    "difficulty": "NhanBiet",
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
    "difficulty": "NhanBiet",
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
    "difficulty": "NhanBiet",
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
    "id": "Q-TIN-PY-17",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-lap-trinh-python",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Python (Tuần 2 – 6)",
    "chapterName": "Phần 1: Lập trình cơ bản Python (Tin học 10)",
    "difficulty": "NhanBiet",
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
    "difficulty": "NhanBiet",
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
        "content": "Dấu ngoặc ( )."
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
    "difficulty": "NhanBiet",
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
    "id": "Q-TIN-PY-20",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-lap-trinh-python",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Python (Tuần 2 – 6)",
    "chapterName": "Phần 1: Lập trình cơ bản Python (Tin học 10)",
    "difficulty": "NhanBiet",
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
    "difficulty": "NhanBiet",
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
    "difficulty": "NhanBiet",
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
        "content": "Bỉ. THÔNG HIỂU"
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
    "id": "Q-TIN-PY-31",
    "subjectId": "tin-hoc-12",
    "topicId": "tin-lap-trinh-python",
    "topicName": "Phần 1: Trắc nghiệm 4 lựa chọn Python (Tuần 2 – 6)",
    "chapterName": "Phần 1: Lập trình cơ bản Python (Tin học 10)",
    "difficulty": "ThongHieu",
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
        "content": "giá trị :="
      },
      {
        "id": "B",
        "content": "A = giá trị ."
      },
      {
        "id": "C",
        "content": "giá trị ="
      },
      {
        "id": "D",
        "content": ""
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
        "content": "$\\frac{a}{a+1} \\cdot (x-1)$"
      },
      {
        "id": "B",
        "content": "$\\frac{a}{a+1}(x-1)$"
      },
      {
        "id": "C",
        "content": "$\\frac{a}{a+1} \\times (x-1)$"
      },
      {
        "id": "D",
        "content": "$\\frac{a}{x-1}(a+1)$"
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
    "difficulty": "VanDung",
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
    "difficulty": "VanDung",
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
        "content": "Lỗi cú pháp"
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
  // --- CÂU HỎI TRẮC NGHIỆM ĐÚNG / SAI CHUYÊN ĐỀ 10F: LẬP TRÌNH PYTHON (5 CÂU) ---
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
  }
];
