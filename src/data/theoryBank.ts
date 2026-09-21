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
  },

  "tin-thiet-bi-giao-thuc-mang": {
    subjectId: "tin-hoc-12",
    subjectName: "Tin học 12",
    topicName: "Chủ đề B: Mạng máy tính và Internet",
    chapterName: "Chủ đề 2: Mạng máy tính và Internet (Tin học 12)",
    docTitle: "Chuyên đề 12B. Kết nối mạng (Google Drive)",
    objectives: [
      "Nêu được chức năng chính của một số thiết bị mạng thông dụng (Access Point, Switch, Modem, Router, Cáp mạng) và kết nối được với PC.",
      "Mô tả sơ lược được vai trò và chức năng của giao thức mạng nói chung và bộ giao thức TCP/IP nói riêng.",
      "Sử dụng được các chức năng mạng của hệ điều hành để chia sẻ tài nguyên (thư mục, máy in).",
      "Thiết lập kết nối và sử dụng mạng trên thiết bị di động (Wi-Fi, dữ liệu di động)."
    ],
    sections: [
      {
        id: "net-concepts-types",
        topicId: "tin-thiet-bi-giao-thuc-mang",
        title: "1. Khái Niệm & Phân Loại Mạng Máy Tính",
        icon: "Layers",
        tag: "Nền tảng mạng",
        summary: "Khái niệm mạng máy tính, mạng LAN, mạng không dây WLAN (Wi-Fi), mạng WAN và mạng Internet toàn cầu.",
        keyTerms: ["Mạng máy tính", "LAN", "WLAN", "Wi-Fi", "WAN", "Internet", "Tài nguyên mạng"],
        content: [
          {
            heading: "Khái niệm & Lợi ích mạng máy tính",
            text: "Mạng máy tính là một hệ thống các thiết bị số được kết nối với nhau để truyền dữ liệu và trao đổi thông tin. Lợi ích quan trọng nhất của mạng máy tính là giúp người dùng chia sẻ tài nguyên dùng chung, bao gồm thông tin (tệp, dữ liệu) và thiết bị phần cứng (máy in, camera, ổ đĩa).",
            bulletPoints: [
              {
                label: "Mạng LAN (Local Area Network)",
                desc: "Mạng cục bộ kết nối các thiết bị trong phạm vi nhỏ như tòa nhà, cơ quan, trường học, nhà riêng. Thành phần gồm máy chủ (server), máy trạm PC, máy in, cáp mạng, Switch, Modem, Router, Access Point."
              },
              {
                label: "Mạng WLAN (Wireless LAN / Wi-Fi)",
                desc: "Mạng cục bộ không dây sử dụng sóng điện từ (sóng vô tuyến) để kết nối các thiết bị (laptop, smartphone, tablet) mà không cần dây cáp mạng. Mạng Wi-Fi hoạt động theo chuẩn IEEE 802.11."
              },
              {
                label: "Mạng WAN & Internet",
                desc: "Mạng diện rộng (WAN) kết nối các mạng LAN ở khoảng cách xa (liên quận, liên tỉnh, quốc gia). Internet là một mạng WAN đặc biệt toàn cầu - 'mạng của các mạng', phủ khắp thế giới với hàng tỉ người dùng."
              }
            ]
          }
        ]
      },
      {
        id: "net-devices",
        topicId: "tin-thiet-bi-giao-thuc-mang",
        title: "2. Các Thiết Bị Mạng Thông Dụng",
        icon: "Cpu",
        tag: "Thiết bị phần cứng",
        summary: "Chức năng của Cáp xoắn, Cáp quang, Switch, Modem, Router, Access Point và Card mạng (NIC).",
        keyTerms: ["Switch", "Modem", "Router", "Access Point", "Cáp UTP", "Cáp quang", "Card mạng", "Địa chỉ MAC"],
        content: [
          {
            heading: "Chức năng và đặc điểm của các thiết bị mạng cốt lõi:",
            bulletPoints: [
              {
                label: "Cáp mạng (Cáp xoắn UTP & Cáp quang)",
                desc: "Cáp xoắn dùng dây đồng truyền tín hiệu điện, sử dụng đầu nối RJ45 cắm vào cổng LAN. Cáp quang có lõi sợi thủy tinh truyền tín hiệu ánh sáng, cho tốc độ truyền cao và khoảng cách xa vượt trội."
              },
              {
                label: "Switch (Bộ chuyển mạch)",
                desc: "Kết nối các máy tính và thiết bị trong cùng một mạng LAN. Switch sử dụng BẢNG ĐỊA CHỈ MAC (gồm 12 ký tự hex duy nhất cho mỗi thiết bị) để chuyển tiếp gói tin chính xác đến đúng cổng đích.",
                example: "Switch chỉ chuyển gói tin đến đúng máy nhận thay vì phát tán ra toàn mạng như Hub, giúp tăng hiệu suất và bảo mật."
              },
              {
                label: "Modem (Bộ điều chế & Giải điều chế)",
                desc: "Chuyển đổi tín hiệu số (digital) của máy tính thành tín hiệu tương tự (analog) truyền qua đường truyền viễn thông và ngược lại, đóng vai trò cầu nối mạng LAN với nhà cung cấp Internet (ISP)."
              },
              {
                label: "Router (Bộ định tuyến)",
                desc: "Kết nối các mạng khác nhau (như mạng LAN gia đình với mạng WAN Internet). Router đọc địa chỉ IP của gói tin để xác định đường đi tối ưu nhất đến đích."
              },
              {
                label: "Access Point (Điểm truy cập không dây - AP)",
                desc: "Thiết bị thu phát sóng Wi-Fi, cho phép các thiết bị không dây (laptop, điện thoại) kết nối vào mạng LAN có dây. Để kết nối cần biết tên mạng (SSID) và mật khẩu."
              },
              {
                label: "Card mạng (NIC - Network Interface Card)",
                desc: "Bộ phận gắn trên máy tính để kết nối mạng. Laptop/Smartphone thường tích hợp sẵn card mạng không dây, trong khi máy tính để bàn thường gắn sẵn card mạng có dây cổng RJ45."
              }
            ]
          }
        ]
      },
      {
        id: "net-protocols-ip-dns",
        topicId: "tin-thiet-bi-giao-thuc-mang",
        title: "3. Giao Thức Mạng, Bộ Giao Thức TCP/IP & DNS",
        icon: "Compass",
        tag: "Giao thức & Địa chỉ",
        summary: "Giao thức mạng, TCP/IP, Địa chỉ IPv4 (32-bit), IPv6 (128-bit), IP tĩnh vs IP động, Tên miền và hệ thống DNS.",
        keyTerms: ["TCP/IP", "IPv4", "IPv6", "Địa chỉ IP", "IP tĩnh", "IP động", "DHCP", "DNS", "Tên miền"],
        content: [
          {
            heading: "Giao thức mạng & Giao thức TCP/IP",
            text: "Giao thức mạng là tập hợp các quy tắc chuẩn hóa để điều khiển truyền thông, trao đổi dữ liệu an toàn giữa các thiết bị trên mạng. Bộ giao thức TCP/IP là nền tảng hoạt động của Internet: TCP đảm bảo việc truyền dữ liệu tin cậy không bị mất gói tin; IP chịu trách nhiệm đánh địa chỉ và định tuyến gói tin."
          },
          {
            heading: "Địa chỉ IP (IPv4 vs IPv6)",
            bulletPoints: [
              {
                label: "Địa chỉ IPv4",
                desc: "Chuỗi 32 bit nhị phân chia thành 4 cụm (octet), mỗi cụm 8 bit viết dưới dạng thập phân cách nhau bởi dấu chấm (vd: 192.168.1.1). Tổng số gần 4,3 tỉ địa chỉ đã cạn kiệt."
              },
              {
                label: "Địa chỉ IPv6",
                desc: "Chuỗi 128 bit nhị phân biểu diễn dưới dạng 8 nhóm số thập lục phân (hex), cung cấp không gian địa chỉ khổng lồ cho tương lai."
              },
              {
                label: "IP tĩnh vs IP động",
                desc: "IP tĩnh được gán cố định cho thiết bị (thường dùng cho máy chủ server, máy in). IP động được cấp phát tự động và thay đổi theo thời gian bởi dịch vụ DHCP của Router."
              },
              {
                label: "Hệ thống tên miền (DNS)",
                desc: "Dịch vụ chuyển đổi tên miền dễ nhớ (vd: 'google.com', '.edu' cho giáo dục, '.gov' cho chính phủ) sang địa chỉ IP dạng số mà máy tính hiểu được."
              }
            ]
          }
        ]
      },
      {
        id: "net-sharing-config",
        topicId: "tin-thiet-bi-giao-thuc-mang",
        title: "4. Kết Nối Thiết Bị Di Động & Chia Sẻ Tài Nguyên",
        icon: "Sparkles",
        tag: "Kỹ năng thực hành",
        summary: "Bật Wi-Fi/4G trên di động, các bước chia sẻ thư mục trên Windows 10 và 3 mức phân quyền (Full Control, Change, Read).",
        keyTerms: ["Chia sẻ thư mục", "Full Control", "Change", "Read", "Advanced Sharing", "Wi-Fi di động"],
        content: [
          {
            heading: "Quy trình chia sẻ thư mục trên mạng LAN (Windows 10):",
            text: "Nhấp chuột phải vào thư mục cần chia sẻ -> Chọn Properties -> Thẻ Sharing -> Chọn Advanced Sharing -> Tích chọn 'Share this folder' -> Nút Permissions để thiết lập quyền truy cập cho người dùng.",
            bulletPoints: [
              {
                label: "Full Control (Toàn quyền)",
                desc: "Cho phép đọc, sửa đổi, tạo mới, xóa file và thư mục con, đồng thời có quyền thay đổi phân quyền truy cập."
              },
              {
                label: "Change (Quyền thay đổi)",
                desc: "Cho phép đọc, ghi, sửa đổi, tạo mới và xóa các tệp tin trong thư mục chia sẻ, nhưng không thể thay đổi phân quyền."
              },
              {
                label: "Read (Chỉ đọc)",
                desc: "Chỉ cho phép mở và xem nội dung tệp tin, không được phép chỉnh sửa hay xóa tài liệu."
              }
            ]
          }
        ]
      }
    ]
  },
  "tin-lap-trinh-python": {
    "subjectId": "tin-hoc-12",
    "subjectName": "Tin học 12",
    "topicName": "Chuyên đề 10F: Lập trình cơ bản Python (Tin học 10)",
    "chapterName": "Phần 1: Lập trình cơ bản Python (Tin học 10)",
    "docTitle": "Chuyên đề 10F. Lập trình cơ bản (Google Drive)",
    "objectives": [
      "Biết được vai trò của ngôn ngữ lập trình bậc cao và làm quen với môi trường lập trình Python (IDLE, Shell, Code Editor).",
      "Hiểu khái niệm biến, phép gán, quy tắc đặt tên biến và các kiểu dữ liệu số cơ bản (int, float).",
      "Sử dụng thành thạo các câu lệnh vào/ra đơn giản: input() và print().",
      "Vận dụng các phép so sánh, toán tử logic và cấu trúc rẽ nhánh (if, if...else, if...elif...else).",
      "Viết được các câu lệnh lặp dạng for (với range) và dạng while để giải quyết bài toán thuật toán.",
      "Xây dựng và sử dụng được chương trình con (hàm def) có tham số và giá trị trả về.",
      "Nắm vững cách xử lý xâu ký tự (str) và cấu trúc dữ liệu danh sách (list) trong Python."
    ],
    "sections": [
      {
        "id": "sec-py-01",
        "topicId": "tin-lap-trinh-python",
        "title": "Bài 1 – 3: Ngôn ngữ Python, Biến & Kiểu dữ liệu cơ bản",
        "icon": "Code",
        "tag": "Cú pháp cơ bản",
        "summary": "Tổng quan về Python, quy tắc đặt tên biến, phép gán, các kiểu dữ liệu số và câu lệnh nhập/xuất.",
        "keyTerms": [
          "Python",
          "Guido van Rossum",
          "Biến",
          "Phép gán",
          "int",
          "float",
          "input()",
          "print()"
        ],
        "content": [
          {
            "heading": "1. Làm quen với Python & Quy tắc cơ bản",
            "text": "Python là ngôn ngữ lập trình bậc cao do Guido van Rossum phát triển, ra mắt lần đầu năm 1991. Tệp mã nguồn Python có phần mở rộng là .py. Python sử dụng quy tắc thụt lề (indentation) bằng phím Tab hoặc 4 dấu cách để xác định các khối lệnh.",
            "bulletPoints": [
              {
                "label": "Quy tắc đặt tên biến",
                "desc": "Tên biến chỉ gồm chữ cái, chữ số và dấu gạch dưới (_); bắt đầu bằng chữ cái hoặc _; phân biệt chữ hoa và chữ thường; không được trùng với các từ khóa (if, else, for, while, def,...)."
              },
              {
                "label": "Cú pháp phép gán",
                "desc": "Tên_biến = Biểu_thức. Thực hiện tính giá trị biểu thức vế phải trước, sau đó lưu kết quả vào biến ở vế trái."
              },
              {
                "label": "Các kiểu dữ liệu số",
                "desc": "Kiểu số nguyên (int) như 5, -12; kiểu số thực (float) như 3.14, -0.5."
              },
              {
                "label": "Các toán tử số học",
                "desc": "+, -, * (nhân), / (chia ra số thực), // (chia lấy phần nguyên), % (chia lấy phần dư), ** (phép lũy thừa, ví dụ 3**4 = 81)."
              },
              {
                "label": "Nhập và xuất dữ liệu",
                "desc": "print() để in ra màn hình. input() để nhập từ bàn phím (luôn trả về kiểu xâu, cần ép kiểu int(input()) hoặc float(input()) khi tính toán số học)."
              }
            ]
          }
        ]
      },
      {
        "id": "sec-py-02",
        "topicId": "tin-lap-trinh-python",
        "title": "Bài 4 – 6: Biểu thức Logic & Cấu trúc rẽ nhánh (if - else)",
        "icon": "GitBranch",
        "tag": "Rẽ nhánh",
        "summary": "Biểu thức so sánh, toán tử logic (and, or, not) và cấu trúc rẽ nhánh kiểm tra điều kiện.",
        "keyTerms": [
          "if",
          "else",
          "elif",
          "and",
          "or",
          "not",
          "bool"
        ],
        "content": [
          {
            "heading": "2. Cấu trúc câu lệnh điều kiện",
            "text": "Câu lệnh rẽ nhánh cho phép chương trình thực hiện các khối lệnh khác nhau tùy thuộc vào điều kiện đúng hay sai.",
            "bulletPoints": [
              {
                "label": "Phép so sánh",
                "desc": "== (bằng), != (khác), > (lớn hơn), < (nhỏ hơn), >= (lớn hơn hoặc bằng), <= (nhỏ hơn hoặc bằng)."
              },
              {
                "label": "Toán tử logic",
                "desc": "and (đúng khi cả hai cùng đúng), or (đúng khi ít nhất một điều kiện đúng), not (phủ định, đảo ngược giá trị logic)."
              },
              {
                "label": "Cú pháp if...else",
                "desc": "if <điều_kiện>: [các lệnh khi đúng] else: [các lệnh khi sai]. Khối lệnh con bắt buộc phải thụt dòng đồng mức."
              },
              {
                "label": "Cú pháp nhiều nhánh if...elif...else",
                "desc": "Kiểm tra tuần tự nhiều điều kiện từ trên xuống dưới, khối lệnh của điều kiện đúng đầu tiên sẽ được thực hiện."
              }
            ]
          }
        ]
      },
      {
        "id": "sec-py-03",
        "topicId": "tin-lap-trinh-python",
        "title": "Bài 7 – 8: Cấu trúc lặp (for & while)",
        "icon": "Repeat",
        "tag": "Vòng lặp",
        "summary": "Vòng lặp biết trước số lần với for - range và vòng lặp chưa biết trước số lần với while.",
        "keyTerms": [
          "for",
          "while",
          "range()",
          "lặp vô hạn",
          "điều kiện dừng"
        ],
        "content": [
          {
            "heading": "3. Hai cấu trúc lặp trong Python",
            "text": "Vòng lặp giúp tự động lặp đi lặp lại một khối lệnh nhiều lần theo thuật toán.",
            "bulletPoints": [
              {
                "label": "Vòng lặp for với range()",
                "desc": "range(n) sinh dãy từ 0 đến n - 1 (n lần lặp). range(start, stop) sinh từ start đến stop - 1. range(start, stop, step) có bước nhảy step."
              },
              {
                "label": "Vòng lặp while",
                "desc": "while <điều_kiện>: lặp chừng nào điều kiện còn đúng. Cần đảm bảo trong thân vòng lặp có câu lệnh làm thay đổi biến điều kiện để tránh vòng lặp vô hạn."
              }
            ]
          }
        ]
      },
      {
        "id": "sec-py-04",
        "topicId": "tin-lap-trinh-python",
        "title": "Bài 9 – 10: Chương trình con (Hàm def) & Xâu ký tự, Danh sách",
        "icon": "Box",
        "tag": "Chương trình con & Dữ liệu",
        "summary": "Định nghĩa hàm tự tạo (def), lệnh return, xâu ký tự (str) và kiểu danh sách (list).",
        "keyTerms": [
          "def",
          "return",
          "tham số",
          "str",
          "list",
          "append()",
          "split()",
          "len()"
        ],
        "content": [
          {
            "heading": "4. Chương trình con & Cấu trúc dữ liệu có cấu trúc",
            "text": "Chương trình con (hàm) giúp chia nhỏ chương trình thành các mô-đun độc lập, tái sử dụng mã và dễ dàng kiểm thử.",
            "bulletPoints": [
              {
                "label": "Cú pháp định nghĩa hàm",
                "desc": "def ten_ham(tham_so1, tham_so2): [khối lệnh thân hàm] return gia_tri. Gọi hàm bằng: ten_ham(doi_so)."
              },
              {
                "label": "Xâu ký tự (str)",
                "desc": "Đặt trong cặp nháy đơn '' hoặc nháy kép \"\". Chỉ số ký tự bắt đầu từ 0. Các thao tác: len(s) lấy độ dài, s.split(';') tách xâu thành danh sách, s.find('từ') tìm vị trí xuất hiện."
              },
              {
                "label": "Kiểu danh sách (list)",
                "desc": "Tạo danh sách bằng cặp ngoặc vuông []: a = [1, 2, 3, 4, 5]. Chỉ số phần tử bắt đầu từ 0 (a[0] là phần tử đầu tiên). Thêm phần tử cuối danh sách bằng a.append(x). Duyệt danh sách bằng: for item in a:."
              }
            ]
          }
        ]
      }
    ]
  },
};

TOPIC_THEORY_MAP["tin-ai-dung-sai"] = TOPIC_THEORY_MAP["tin-ai-tri-tue-nhan-tao"];
TOPIC_THEORY_MAP["tin-mang-dung-sai"] = TOPIC_THEORY_MAP["tin-thiet-bi-giao-thuc-mang"];
TOPIC_THEORY_MAP["tin-giao-thuc-mang"] = TOPIC_THEORY_MAP["tin-thiet-bi-giao-thuc-mang"];
TOPIC_THEORY_MAP["tin-chia-se-tai-nguyen-mang"] = TOPIC_THEORY_MAP["tin-thiet-bi-giao-thuc-mang"];
TOPIC_THEORY_MAP["tin-python-dung-sai"] = TOPIC_THEORY_MAP["tin-lap-trinh-python"];
