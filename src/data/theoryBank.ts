export interface TheorySection {
  id: string;
  topicId: string;
  title: string;
  icon: string;
  tag: string;
  summary: string;
  keyTerms: string[];
  content: {
    heading?: string;
    text?: string;
    bulletPoints?: { label?: string; desc: string; example?: string }[];
  }[];
}

export const TOPIC_THEORY_MAP: Record<string, {
  subjectId: string;
  subjectName: string;
  topicName: string;
  chapterName: string;
  docTitle: string;
  objectives: string[];
  sections: TheorySection[];
}> = {
  "tin-ai-tri-tue-nhan-tao": {
    subjectId: "tin-hoc-12",
    subjectName: "Tin học 12",
    topicName: "Chủ đề A: Giới thiệu Trí tuệ Nhân tạo (AI)",
    chapterName: "Chủ đề A: Máy tính và xã hội tri thức",
    docTitle: "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo (Google Drive)",
    objectives: [
      "Giải thích được sơ lược về khái niệm Trí tuệ nhân tạo (AI - Artificial Intelligence).",
      "Nêu được ví dụ minh hoạ cho một số ứng dụng điển hình của AI như điều khiển tự động, chẩn đoán bệnh, nhận dạng chữ viết tay, tiếng nói, khuôn mặt, trợ lí ảo,...",
      "Chỉ ra được một số lĩnh vực khoa học công nghệ và đời sống đang phát triển mạnh mẽ dựa trên thành tựu của AI.",
      "Nêu được ví dụ để thấy một hệ thống AI có tri thức, có khả năng suy luận và khả năng học.",
      "Nêu được các cảnh báo về sự phát triển của AI trong tương lai (đạo đức, an ninh mạng, quyền riêng tư, việc làm).",
      "Hiểu được cách kết nối thiết bị số thông dụng hỗ trợ AI trong hệ sinh thái số."
    ],
    sections: [
      {
        id: "ai-history-concept",
        topicId: "tin-ai-tri-tue-nhan-tao",
        title: "1. Lịch Sử Ra Đời & Khái Niệm AI",
        icon: "History",
        tag: "Nền tảng lịch sử",
        summary: "Mốc năm 1955 GS. John McCarthy, Hội thảo Dartmouth 1956 và bản chất khái niệm trí tuệ nhân tạo.",
        keyTerms: ["John McCarthy", "Dartmouth", "1955", "1956", "Khái niệm AI", "Công việc trí tuệ"],
        content: [
          {
            heading: "Mốc lịch sử ra đời",
            text: "Năm 1955, GS. John McCarthy đưa ra định nghĩa về ngành Trí tuệ nhân tạo là: 'Khoa học và kĩ thuật chế tạo máy móc thông minh'. Một năm sau, vào năm 1956, Hội thảo ở Đại học Dartmouth (Mỹ) quy tụ nhiều nhà khoa học máy tính hàng đầu thế giới được xem là sự kiện chính thức đánh dấu sự ra đời của ngành Trí tuệ nhân tạo."
          },
          {
            heading: "Bản chất khái niệm AI",
            text: "Công việc trí tuệ là công việc đòi hỏi trí tuệ đặc trưng của con người như: suy luận, khái quát hoá, ra quyết định,... Bản thân máy tính có thể xử lý khối dữ liệu lớn rất nhanh và chính xác, nhưng vốn không có khả năng thực hiện công việc trí tuệ như con người. Ngành AI ra đời nhằm nghiên cứu và phát triển để làm cho máy tính có các khả năng trí tuệ đó.",
            bulletPoints: [
              {
                label: "Định nghĩa thông thường",
                desc: "Trí tuệ nhân tạo (AI - Artificial Intelligence) là khả năng của máy tính có thể làm những công việc mang tính trí tuệ con người, như khả năng học, khả năng suy luận, khả năng hiểu ngôn ngữ tự nhiên, khả năng giải quyết vấn đề,..."
              }
            ]
          }
        ]
      },
      {
        id: "ai-characteristics",
        topicId: "tin-ai-tri-tue-nhan-tao",
        title: "2. 5 Đặc Trưng Cốt Lõi Của AI",
        icon: "Cpu",
        tag: "Trọng tâm thi THPT",
        summary: "5 năng lực đặc trưng nhận biết AI: Học, Suy luận, Nhận thức, Hiểu ngôn ngữ, Giải quyết vấn đề.",
        keyTerms: ["Khả năng học", "Khả năng suy luận", "MYCIN", "Khả năng nhận thức", "Hiểu ngôn ngữ", "Giải quyết vấn đề", "Cảm biến"],
        content: [
          {
            heading: "Chi tiết 5 đặc trưng nhận biết AI kèm ví dụ điển hình:",
            bulletPoints: [
              {
                label: "1. Khả năng học",
                desc: "Khả năng khái quát, trích rút ra các tri thức (mô hình, luật,...) từ dữ liệu và sử dụng tri thức đó để ra quyết định hợp lý.",
                example: "Phần mềm nhận dạng ảnh chữ viết, phần mềm dịch tự động, công nghệ nhận dạng khuôn mặt (FaceID)."
              },
              {
                label: "2. Khả năng suy luận",
                desc: "Vận dụng quy tắc suy luận và tri thức có từ trước để đưa ra kết luận hoặc quyết định.",
                example: "Hệ chuyên gia y tế MYCIN đưa vào cơ sở tri thức dạng luật 'Nếu có các triệu chứng A1, A2,... thì bị bệnh B', từ đó chẩn đoán bệnh cho bệnh nhân."
              },
              {
                label: "3. Khả năng nhận thức",
                desc: "Cảm nhận (phân tách) và hiểu biết (xử lý) về môi trường xung quanh thông qua cảm biến hoặc thiết bị đầu vào.",
                example: "Hệ thống điều khiển xe ô tô tự lái nhận biết chướng ngại vật xung quanh thông qua các cảm biến và radar gắn trên xe."
              },
              {
                label: "4. Khả năng hiểu ngôn ngữ",
                desc: "Giao tiếp được với con người bằng ngôn ngữ tự nhiên, bao gồm đọc, hiểu và diễn giải bằng văn bản và tiếng nói.",
                example: "Tương tác tra cứu qua các trợ lý ảo thông minh: Siri (Apple), Bixby (Samsung), Google Assistant, Alexa."
              },
              {
                label: "5. Khả năng giải quyết vấn đề",
                desc: "Phối hợp các khả năng để giải quyết tình huống phức tạp hoặc tối ưu theo mục tiêu đặt ra.",
                example: "Tối ưu lịch học toàn trường theo lịch cá nhân của từng giáo viên khi sắp xếp thời khóa biểu tự động."
              }
            ]
          }
        ]
      },
      {
        id: "ai-classification",
        topicId: "tin-ai-tri-tue-nhan-tao",
        title: "3. Phân Loại AI (AI Hẹp vs AI Rộng)",
        icon: "Layers",
        tag: "Phân loại chuẩn",
        summary: "Phân biệt AI hẹp (ANI) và AI rộng/tổng quát (AGI), phép thử Turing (Turing Test).",
        keyTerms: ["AI hẹp", "ANI", "AI rộng", "AGI", "Phép thử Turing", "Turing Test", "ChatGPT", "AlphaGo"],
        content: [
          {
            heading: "Dựa trên mức độ mô phỏng trí tuệ con người, AI được chia thành 2 loại:",
            bulletPoints: [
              {
                label: "AI hẹp (Artificial Narrow Intelligence - ANI)",
                desc: "Được xây dựng để giải quyết các nhiệm vụ cụ thể nằm trong phạm vi của một lĩnh vực nhất định. Máy chỉ thực hiện xuất sắc nhiệm vụ được lập trình mà không thể tự mở rộng sang lĩnh vực khác.",
                example: "Hệ thống nhận diện biển báo giao thông; Phần mềm chơi cờ vua (Deep Blue) hoặc cờ vây (AlphaGo) chỉ biết chơi cờ chứ không thể chẩn đoán bệnh."
              },
              {
                label: "AI rộng / AI tổng quát (Artificial General Intelligence - AGI)",
                desc: "Được xây dựng nhằm thực hiện các công việc trí tuệ trên nhiều lĩnh vực khác nhau. Đặc trưng là khả năng tự học từ dữ liệu mới, hành động có ý thức độc lập không phụ thuộc vào con người.",
                example: "Hiện nay ChatGPT đang phát triển theo hướng này nhưng CHƯA thể được coi là AI rộng hoàn chỉnh. Một hệ thống chỉ được công nhận là AI rộng khi vượt qua Bài kiểm tra Turing."
              },
              {
                label: "Bài kiểm tra Turing (Turing Test)",
                desc: "Cho máy tính trao đổi tự nhiên với con người qua văn bản mà hai bên không nhìn thấy nhau. Nếu người nói chuyện không thể phân biệt được đối phương là người hay máy, hệ thống đó được xem là có trí tuệ nhân tạo thực thụ."
              }
            ]
          }
        ]
      },
      {
        id: "ai-research-fields",
        topicId: "tin-ai-tri-tue-nhan-tao",
        title: "4. 4 Lĩnh Vực Nghiên Cứu Chính Của AI",
        icon: "Compass",
        tag: "Lĩnh vực nghiên cứu",
        summary: "Học máy (Machine Learning), Thị giác máy tính, AI tạo sinh và Xử lý ngôn ngữ tự nhiên (NLP).",
        keyTerms: ["Học máy", "Machine Learning", "Thị giác máy tính", "Computer Vision", "AI tạo sinh", "Generative AI", "NLP"],
        content: [
          {
            heading: "4 trụ cột nghiên cứu phát triển AI hiện đại:",
            bulletPoints: [
              {
                label: "1. Học máy (Machine Learning)",
                desc: "Nghiên cứu các thuật toán cho phép máy tính tự học hỏi, phát hiện quy luật và cải thiện hiệu suất từ tập dữ liệu lớn mà không cần lập trình từng bước quy tắc cứng."
              },
              {
                label: "2. Thị giác máy tính (Computer Vision)",
                desc: "Giúp máy tính nhận biết, phân tích và hiểu nội dung từ hình ảnh số, video kỹ thuật số tương tự như thị giác con người (nhận diện khuôn mặt, phát hiện vật thể)."
              },
              {
                label: "3. AI tạo sinh (Generative AI)",
                desc: "Tạo ra nội dung hoàn toàn mới như văn bản, hình ảnh, âm thanh, video, mã lập trình dựa trên các mô hình ngôn ngữ và dữ liệu đã được học (ChatGPT, Midjourney,...)."
              },
              {
                label: "4. Xử lý ngôn ngữ tự nhiên (NLP)",
                desc: "Giúp máy tính hiểu, thông dịch và tạo ra ngôn ngữ loài người một cách tự nhiên (dịch thuật tự động, phân tích cảm xúc, trợ lý ảo trò chuyện)."
              }
            ]
          }
        ]
      },
      {
        id: "ai-applications",
        topicId: "tin-ai-tri-tue-nhan-tao",
        title: "5. Ứng Dụng Trong Khoa Học & Đời Sống",
        icon: "Sparkles",
        tag: "Ứng dụng thực tế",
        summary: "Ứng dụng vượt trội trong Giáo dục, Y tế, Nông - Công nghiệp, Giao thông vận tải.",
        keyTerms: ["Giáo dục", "Cá nhân hóa", "Y tế", "Chẩn đoán bệnh", "Sản xuất", "Chuỗi cung ứng", "Xe tự lái"],
        content: [
          {
            heading: "Các lĩnh vực tiêu biểu được cách mạng hóa bởi AI:",
            bulletPoints: [
              {
                label: "Trong Giáo dục",
                desc: "Cá nhân hoá lộ trình học tập, đánh giá kết quả giúp học sinh tự xây dựng kế hoạch riêng. Ứng dụng phần mềm giám sát thi tích hợp AI nhận diện khuôn mặt và hành vi nhằm giảm thiểu gian lận."
              },
              {
                label: "Trong Y tế",
                desc: "Hệ thống dự đoán hỗ trợ chẩn đoán hình ảnh (X-quang, MRI) cho kết quả chính xác cao, rút ngắn thời gian sàng lọc và định hướng điều trị sớm cho người bệnh."
              },
              {
                label: "Trong Sản xuất & Nông - Ngư nghiệp",
                desc: "Tối ưu hóa dây chuyền sản xuất tự động, robot phân loại, kiểm tra chất lượng sản phẩm chuẩn xác, quản lý chuỗi cung ứng thông minh và tưới tiêu tự động."
              },
              {
                label: "Trong Giao thông vận tải",
                desc: "Điều khiển xe ô tô tự lái, hệ thống điều phối đèn tín hiệu giao thông thông minh giảm ùn tắc đô thị."
              }
            ]
          }
        ]
      },
      {
        id: "ai-impacts-ethics",
        topicId: "tin-ai-tri-tue-nhan-tao",
        title: "6. Tác Động & Cảnh Báo Về Sự Phát Triển AI",
        icon: "AlertTriangle",
        tag: "Đạo đức & Cảnh báo",
        summary: "4 vấn đề nổi cộm: Đạo đức, An ninh mạng (Deepfake), Quyền riêng tư và Sự thay thế việc làm.",
        keyTerms: ["Đạo đức", "Tính đúng đắn", "An ninh mạng", "Deepfake", "Quyền riêng tư", "Thay thế việc làm"],
        content: [
          {
            heading: "4 vấn đề và cảnh báo trọng tâm cần lưu ý:",
            bulletPoints: [
              {
                label: "1. Đạo đức và tính đúng đắn",
                desc: "Sử dụng AI cần phù hợp chuẩn mực đạo đức con người. Dữ liệu huấn luyện đúng đắn là yếu tố tiên quyết để tránh việc AI đưa ra phản hồi mang tính định kiến hoặc phân biệt đối xử nhóm người thiểu số."
              },
              {
                label: "2. An ninh mạng",
                desc: "AI có khả năng khởi tạo, mô phỏng thực thể với độ chính xác rất cao. Tội phạm số lợi dụng AI để tạo hình ảnh, giả mạo giọng nói người thân (Deepfake) để lừa đảo trực tuyến chuyển tiền."
              },
              {
                label: "3. Quyền riêng tư dữ liệu",
                desc: "Việc thu thập dữ liệu cá nhân (lịch sử hoạt động, sở thích) trên môi trường số có nguy cơ bị lạm dụng để thu thập trái phép thông tin mua sắm riêng tư và thông tin nhạy cảm của người dùng."
              },
              {
                label: "4. Tác động đến việc làm",
                desc: "Khả năng làm việc liên tục 24/7, phục vụ nhiều người cùng lúc khiến một số công việc có nguy cơ bị máy tính thay thế trong tương lai (ví dụ: nhân viên chăm sóc khách hàng được thay thế bằng chatbot AI)."
              }
            ]
          }
        ]
      }
    ]
  }
};

// Aliases
TOPIC_THEORY_MAP["tin-ai-dung-sai"] = TOPIC_THEORY_MAP["tin-ai-tri-tue-nhan-tao"];
