export interface TheoryContentBlock {
  heading?: string;
  text?: string;
  code?: string;
  image?: string;
  imageCaption?: string;
  bulletPoints?: {
    label?: string;
    desc: string;
    example?: string;
    code?: string;
  }[];
}

export interface TheorySection {
  id: string;
  topicId: string;
  title: string;
  icon: string;
  tag: string;
  summary: string;
  keyTerms: string[];
  content: TheoryContentBlock[];
}

export interface TopicTheory {
  subjectId: string;
  subjectName: string;
  topicName: string;
  chapterName: string;
  docTitle: string;
  objectives: string[];
  sections: TheorySection[];
}

export const TOPIC_THEORY_MAP: Record<string, TopicTheory> = {
  "tin-ai-tri-tue-nhan-tao": {
  "subjectId": "tin-hoc-12",
  "subjectName": "Tin học 12",
  "topicName": "Chủ đề A: Giới thiệu Trí tuệ Nhân tạo (AI)",
  "chapterName": "Chủ đề A: Máy tính và xã hội tri thức",
  "docTitle": "Chuyên đề 12A. Giới thiệu trí tuệ nhân tạo-2.docx",
  "objectives": [
    "Giải thích được sơ lược về khái niệm Trí tuệ nhân tạo (AI - Artificial Intelligence).",
    "Nêu được ví dụ minh hoạ cho một số ứng dụng điển hình của AI như điều khiển tự động, chẩn đoán bệnh, nhận dạng chữ viết tay, nhận dạng tiếng nói và khuôn mặt, trợ lí ảo, ...",
    "Chỉ ra được một số lĩnh vực của khoa học công nghệ và đời sống đã và đang phát triển mạnh mẽ dựa trên những thành tựu to lớn của AI.",
    "Nêu được ví dụ để thấy một hệ thống AI có tri thức, có khả năng suy luận và khả năng học,...",
    "Nêu được một cảnh báo về sự phát triển của AI trong tương lai.",
    "Kết nối được PC với các thiết bị số thông dụng như điện thoại di động, ti vi có khả năng kết nối Internet, vòng đeo tay thông minh, thiết bị thực tại ảo,..."
  ],
  "sections": [
    {
      "id": "ai-concept-intro",
      "topicId": "tin-ai-tri-tue-nhan-tao",
      "title": "1. Giới thiệu về Trí tuệ nhân tạo & Khái niệm AI",
      "icon": "History",
      "tag": "1. & 1.1 Khái niệm",
      "summary": "Lịch sử ra đời ngành AI (1955 GS. John McCarthy, Dartmouth 1956) và bản chất công việc trí tuệ của máy tính.",
      "keyTerms": [
        "Trí tuệ nhân tạo",
        "John McCarthy",
        "Dartmouth",
        "1955",
        "1956",
        "Công việc trí tuệ",
        "Suy luận",
        "Khái quát hoá",
        "Ra quyết định"
      ],
      "content": [
        {
          "heading": "1. Giới thiệu về trí tuệ nhân tạo (AI - Artificial Intelligence)",
          "text": "Năm 1955, GS. Jonh McCarthy đưa ra định nghĩa về ngành Trí tuệ nhân tạo là “khoa học và kĩ thuật chế tạo máy móc thông minh”. Một năm sau, hội thảo ở Đại học Dartmouth (Mỹ) quy tụ nhiều nhà khoa học máy tính trên thế giới được xem là sự kiện ra đời ngành Trí tuệ nhân tạo. Ngày nay, trí tuệ nhân tạo được nghiên cứu và ứng dụng rộng rãi trong nhiều lĩnh vực."
        },
        {
          "heading": "1.1. Khái niệm trí tuệ nhân tạo (AI)",
          "text": "Công việc trí tuệ được hiểu là công việc thực hiện đòi hỏi trí tuệ đặc trưng của con người như khả năng: suy luận, khái quát hoá, ra quyết định,... Máy tính bản thân nó có thể xử lí khối dữ liệu lớn rất nhanh và chính xác trong thời gian ngắn, nhưng không có khả năng thực hiện các công việc trí tuệ như con người. Vì vậy, ngành Trí tuệ nhân tạo ra đời và phát triển nhằm nghiên cứu về trí tuệ của máy tính, làm cho máy có các khả năng như suy luận, khái quát hoá, ra quyết định,... như con người."
        },
        {
          "heading": "Định nghĩa thông thường về AI",
          "text": "Có nhiều định nghĩa theo các cách tiếp cận khác nhau về AI, theo cách hiểu thông thường: Trí tuệ nhân tạo là khả năng của máy tính có thể làm những công việc mang tính trí tuệ con người, như khả năng học, khả năng suy luận, khả năng hiểu ngôn ngữ tự nhiên, khả năng giải quyết vấn đề,..."
        }
      ]
    },
    {
      "id": "ai-characteristics-detail",
      "topicId": "tin-ai-tri-tue-nhan-tao",
      "title": "1.2. Các đặc trưng để nhận biết Trí tuệ nhân tạo",
      "icon": "Cpu",
      "tag": "1.2 Đặc trưng AI",
      "summary": "5 năng lực đặc trưng nhận biết AI: Khả năng học, suy luận (MYCIN), nhận thức, hiểu ngôn ngữ và giải quyết vấn đề.",
      "keyTerms": [
        "Khả năng học",
        "Khả năng suy luận",
        "MYCIN",
        "Khả năng nhận thức",
        "Cảm biến",
        "Hiểu ngôn ngữ",
        "Trợ lí ảo",
        "Giải quyết vấn đề"
      ],
      "content": [
        {
          "heading": "Các đặc trưng để nhận biết trí tuệ nhân tạo gồm:",
          "bulletPoints": [
            {
              "label": "Khả năng học",
              "desc": "Khả năng khái quát, trích rút ra các tri thức (mô hình, luật,...) từ dữ liệu và sử dụng tri thức đó để ra quyết định hợp lí.",
              "example": "Các phần mềm nhận dạng ảnh chữ viết, phần mềm dịch tự động, nhận dạng khuôn mặt,..."
            },
            {
              "label": "Khả năng suy luận",
              "desc": "Vận dụng quy tắc suy luận và tri thức có từ trước để đưa ra kết luận hoặc quyết định.",
              "example": "Phần mềm hệ chuyên gia y tế MYCIN cho phép người dùng đưa vào cơ sở tri thức gồm các luật dạng “nếu có các triệu chứng A1, A2,... thì bị bệnh B”, sau đó người dùng cung cấp các triệu chứng của người bệnh, hệ thống sẽ chẩn đoán người bệnh có thể mắc những bệnh gì."
            },
            {
              "label": "Khả năng nhận thức",
              "desc": "Cảm nhận (phân tách) và hiểu biết (xử lí) về môi trường xung quanh thông qua cảm biến hoặc thiết bị đầu vào.",
              "example": "Hệ thống điều khiển xe tự lái nhận biết các vật xung quanh thông qua các cảm biến gắn trên xe."
            },
            {
              "label": "Khả năng hiểu ngôn ngữ",
              "desc": "Giao tiếp được với con người bằng ngôn ngữ tự nhiên, bao gồm việc đọc, hiểu và diễn giải bằng văn bản và tiếng nói.",
              "example": "Tra cứu thông tin trên Internet thông qua tương tác trợ lí ảo được tích hợp trên điện thoại thông minh."
            },
            {
              "label": "Khả năng giải quyết vấn đề",
              "desc": "Phối hợp các khả năng để giải quyết tình huống phức tạp hoặc tối ưu theo mục tiêu đặt ra.",
              "example": "Tối ưu lịch học của toàn trường theo lịch cá nhân của từng giáo viên khi sắp xếp thời khoá biểu cho một trường học."
            }
          ]
        }
      ]
    },
    {
      "id": "ai-classification-fields",
      "topicId": "tin-ai-tri-tue-nhan-tao",
      "title": "1.3. Phân loại AI & 1.4. Lĩnh vực nghiên cứu phát triển",
      "icon": "Layers",
      "tag": "1.3 & 1.4 Phân loại & Lĩnh vực",
      "summary": "AI hẹp (ANI), AI rộng (AGI), Bài kiểm tra Turing và 4 lĩnh vực nghiên cứu chính (Học máy, Thị giác máy tính, AI tạo sinh, NLP).",
      "keyTerms": [
        "AI hẹp",
        "ANI",
        "AI rộng",
        "AGI",
        "Bài kiểm tra Turing",
        "Turing test",
        "ChatGPT",
        "Học máy",
        "Thị giác máy tính",
        "AI tạo sinh",
        "Xử lí ngôn ngữ tự nhiên"
      ],
      "content": [
        {
          "heading": "1.3. Phân loại AI (Dựa trên mức độ mô phỏng trí tuệ người, AI được chia thành 2 loại):",
          "bulletPoints": [
            {
              "label": "AI hẹp (Artificial Narrow Intelligence - ANI)",
              "desc": "Được xây dựng để giải quyết các nhiệm vụ nằm trong phạm vi của một lĩnh vực.",
              "example": "Hệ thống nhận diện biển báo giao thông hoạt động tốt khi nhận dạng các loại biển báo khi tham gia giao thông, nhưng không thể xác định được các đối tượng khác; Phần mềm chơi cờ vua giúp máy có thể thắng người, nhưng lại không thể giải quyết các vấn đề khác."
            },
            {
              "label": "AI rộng (Artificial General Intelligence - AGI)",
              "desc": "Được xây dựng nhằm thực hiện các công việc trí tuệ trên nhiều lĩnh vực. Đặc trưng là khả năng học từ dữ liệu mới, khả năng hành động có ý thức không phụ thuộc vào con người. Phát triển một AI như vậy là một quá trình nghiên cứu lâu dài trong tương lai. Hiện nay, ChatGPT đang phát triển theo hướng này, nhưng chưa thể được coi là AI rộng được. Chừng nào một hệ thống vượt qua Bài kiểm tra Turing thì mới được coi là AI rộng.",
              "example": "Bài kiểm tra Turing nói rằng, nếu cho máy trao đổi một cách tự nhiên với một người thông qua một ngôn ngữ nào đó mà không nhìn thấy nhau, nếu người tham gia cuộc nói chuyện không phân biệt được mình đang trao đổi với người hay máy thì lúc đó máy sẽ được coi là có trí tuệ nhân tạo."
            }
          ]
        },
        {
          "heading": "1.4. Một số lĩnh vực nghiên cứu phát triển AI",
          "text": "Trí tuệ nhân tạo là ngành khoa học lớn, gồm nhiều lĩnh vực nghiên cứu nhằm nâng cao trí tuệ của máy tính. Có thể chia thành 4 lĩnh vực chính: Học máy, Thị giác máy tính, AI tạo sinh, Xử lí ngôn ngữ tự nhiên."
        }
      ]
    },
    {
      "id": "ai-applied-fields",
      "topicId": "tin-ai-tri-tue-nhan-tao",
      "title": "2.1. Một số lĩnh vực phát triển nhờ ứng dụng của AI",
      "icon": "Sparkles",
      "tag": "2.1 Ứng dụng thực tiễn",
      "summary": "Ứng dụng vượt bậc của AI trong Giáo dục, Y tế, và Sản xuất (công - nông - ngư nghiệp, chuỗi cung ứng).",
      "keyTerms": [
        "Giáo dục",
        "Cá nhân hoá",
        "Giám sát kì thi",
        "Y tế",
        "Chẩn đoán bệnh",
        "Sản xuất",
        "Chuỗi cung ứng",
        "Nông nghiệp"
      ],
      "content": [
        {
          "heading": "2. Trí tuệ nhân tạo trong khoa học và đời sống",
          "text": "Các lĩnh vực khoa học trong đời sống được nâng cao là nhờ có ứng dụng của AI, một số lĩnh vực phát triển nhờ ứng dụng của AI có thể kể đến như:"
        },
        {
          "heading": "Chi tiết các lĩnh vực phát triển mạnh mẽ nhờ AI:",
          "bulletPoints": [
            {
              "label": "Trong giáo dục",
              "desc": "Cá nhân hoá và đánh giá kết quả học tập giúp người học tự xây dựng được kế hoạch học tập cho bản thân. Trong tổ chức kì thi, phần mềm giám sát trong các kì thi được tích hợp AI nhằm giảm thiểu nguy cơ gian lận."
            },
            {
              "label": "Trong y tế",
              "desc": "Việc chẩn đoán bệnh trở nên dễ dàng với các hệ thống dự đoán cho kết quả có tỉ lệ chính xác cao, rút ngắn thời gian sàng lọc và định hướng điều trị kịp thời cho người bệnh."
            },
            {
              "label": "Trong sản xuất",
              "desc": "Tối ưu hoá quá trình thực hiện trong các ngành công - nông ngư nghiệp nhằm nâng cao hiệu quả của sản phẩm. Phân loại, kiểm tra chất lượng, thậm chí là quản lí chuỗi cung ứng cũng là một ứng dụng quan trọng của AI."
            }
          ]
        }
      ]
    },
    {
      "id": "ai-impacts-warnings",
      "topicId": "tin-ai-tri-tue-nhan-tao",
      "title": "2.2. Ảnh hưởng của AI đến con người & Cảnh báo",
      "icon": "AlertTriangle",
      "tag": "2.2 Tác động & Cảnh báo",
      "summary": "4 vấn đề nảy sinh: Đạo đức và tính đúng đắn, An ninh mạng (giả giọng, lừa đảo), Quyền riêng tư dữ liệu, và Thay thế việc làm.",
      "keyTerms": [
        "Đạo đức",
        "Tính đúng đắn",
        "Dữ liệu huấn luyện",
        "An ninh mạng",
        "Giả giọng",
        "Lừa đảo trực tuyến",
        "Quyền riêng tư",
        "Việc làm",
        "Chatbot AI"
      ],
      "content": [
        {
          "heading": "2.2. Ảnh hưởng của AI đến con người",
          "text": "Sự phát triển vượt bậc của AI với tốc độ nhanh chóng đem lại nhiều lợi ích trong đời sống của con người. Tuy nhiên, việc phát triển không tuân thủ theo các ràng buộc dẫn đến nảy sinh một số vấn đề:"
        },
        {
          "heading": "4 vấn đề trọng tâm và cảnh báo tương lai:",
          "bulletPoints": [
            {
              "label": "Đạo đức và tính đúng đắn",
              "desc": "Phát triển và sử dụng AI cần phù hợp với các chuẩn mực về tri thức khoa học và đạo đức con người. Dữ liệu huấn luyện đúng đắn là yếu tố tiên quyết để xây dựng AI chuẩn mực.",
              "example": "Hệ thống chatbot có những phản hồi mang tính phân biệt một nhóm người thiểu số."
            },
            {
              "label": "An ninh mạng",
              "desc": "Hiện nay, AI được xây dựng trực tuyến có khả năng truy tìm, khởi tạo, mô phỏng hành động hoặc một thực thể với tỉ lệ chính xác cao. Lợi dụng đặc điểm đó, tội phạm số thực hiện các hành vi gây nguy hại.",
              "example": "Đối tượng lừa đảo sử dụng AI để giả giọng, hình ảnh người thân của nạn nhân để lừa đảo dưới hình thức vay tiền trực tuyến."
            },
            {
              "label": "Quyền riêng tư",
              "desc": "Việc thu thập một lượng dữ liệu cá nhân (thông tin cá nhân, lịch sử hoạt động,...) trên môi trường số giúp đưa ra những gợi ý phù hợp cho người sử dụng. AI có thể bị lạm dụng để thu thập dữ liệu phục vụ vào những mục đích vi phạm đạo đức hoặc trái pháp luật.",
              "example": "Hệ thống đề xuất sản phẩm trên sàn điện tử có thể bị lợi dụng để thu thập các thông tin mua sắm mang tính riêng tư của người dùng."
            },
            {
              "label": "Việc làm",
              "desc": "Làm việc liên tục, phục vụ được nhiều đối tượng cùng một lúc, thậm chí làm nhiều công việc mang tính sáng tạo cao là những khả năng mà AI ngày nay có thể thực hiện, điều này làm một số công việc sẽ bị thay thế trong tương lai.",
              "example": "Công việc chăm sóc khách hàng có thể thay thế bằng các chatbot AI."
            }
          ]
        }
      ]
    }
  ]
},
  "tin-thiet-bi-giao-thuc-mang": {
  "subjectId": "tin-hoc-12",
  "subjectName": "Tin học 12",
  "topicName": "Chủ đề B: Mạng máy tính và Internet",
  "chapterName": "Chủ đề B: Kết nối mạng (Tin học 12)",
  "docTitle": "Chuyên đề 12B. Kết nối mạng.docx",
  "objectives": [
    "Nêu được chức năng chính của một số thiết bị mạng thông dụng (Access Point, Switch, Modem, Router, Cáp mạng). Kết nối được các thiết bị đó với PC.",
    "Mô tả sơ lược được vai trò và chức năng của giao thức mạng nói chung và giao thức TCP/IP nói riêng.",
    "Sử dụng được các chức năng mạng của hệ điều hành để chia sẻ tài nguyên (thư mục, máy in).",
    "Kết nối được thiết bị di động vào mạng máy tính trong điều kiện phần cứng và phần mềm đã được chuẩn bị đầy đủ (Wi-Fi, 4G)."
  ],
  "sections": [
    {
      "id": "net-concepts-all",
      "topicId": "tin-thiet-bi-giao-thuc-mang",
      "title": "1. Khái niệm, Lợi ích Mạng máy tính & Phân loại mạng",
      "icon": "Layers",
      "tag": "Khái niệm mạng",
      "summary": "Khái niệm mạng máy tính, mạng LAN, WLAN (Wi-Fi), mạng WAN và đặc điểm, lợi ích toàn diện của mạng Internet.",
      "keyTerms": [
        "Mạng máy tính",
        "Tài nguyên",
        "Mạng LAN",
        "Server",
        "WLAN",
        "Wi-Fi",
        "Sóng điện từ",
        "Mạng WAN",
        "Internet"
      ],
      "content": [
        {
          "heading": "Khái niệm, ích lợi của mạng máy tính",
          "text": "Mạng máy tính là một hệ thống các thiết bị số được kết nối với nhau để truyền dữ liệu và trao đổi thông tin.\n\nLợi ích của mạng máy tính: Mạng máy tính giúp người dùng chia sẻ cho nhau các tài nguyên, bao gồm thông tin và các thiết bị như máy in, camera."
        },
        {
          "heading": "Khái niệm mạng LAN & Thành phần chính",
          "text": "Mạng LAN (Local Area Network - Mạng cục bộ) là loại mạng kết nối những máy tính trong một phạm vi nhỏ như toà nhà, cơ quan, trường học, nhà riêng.\n\nCác thành phần chính của mạng LAN bao gồm: máy chủ (server), máy tính PC của người dùng, máy in, các thiết bị mạng (cáp mạng, Switch, Modem, Router, Access Point,...)."
        },
        {
          "heading": "Khái niệm mạng WLAN (Wi-Fi)",
          "text": "Mạng WLAN (Wireless LAN), còn gọi là mạng cục bộ không dây hay mạng LAN không dây, là một loại mạng LAN sử dụng sóng điện từ để giúp các thiết bị mạng (PC, điện thoại di động, máy tính bảng và các loại thiết bị số khác) kết nối với nhau mà không cần sử dụng dây cáp mạng. WLAN còn được gọi là mạng Wi-Fi (Wireless Fidelity).\n\nHiện nay, mạng WLAN không chỉ dùng sóng điện từ để truyền dữ liệu mà có thể sử dụng cả cáp mạng, chẳng hạn để kết nối với máy tính để bàn có vị trí cố định. Thông thường sóng Wi-Fi dành cho những thiết bị di động như Smartphone, máy tính bảng, laptop."
        },
        {
          "heading": "Khái niệm mạng WAN",
          "text": "Mạng diện rộng (WAN - Wide Area Network) là loại mạng máy tính bao trùm một phạm vi địa lí rộng lớn, kết nối các mạng LAN trong một khu vực lớn như một thành phố, một quốc gia hoặc nhiều quốc gia. Internet chính là một mạng WAN."
        },
        {
          "heading": "Đặc điểm và lợi ích của mạng Internet",
          "text": "Internet là một mạng WAN đặc biệt cho phép các máy tính và thiết bị khác truy cập và trao đổi thông tin với nhau trên toàn thế giới.\n\nInternet có những đặc điểm sau đây:\n- Phủ khắp thế giới với hàng tỉ người dùng.\n- Là mạng của các mạng, được tạo thành từ các mạng LAN kết nối lại.\n- Không thuộc quyền sở hữu của cá nhân hay tổ chức nào. Tuy nhiên, các mạng thành phần của nó thì có chủ sở hữu hoặc cơ quan chủ quản."
        },
        {
          "heading": "Ứng dụng và lợi ích của Internet trong các lĩnh vực xã hội",
          "bulletPoints": [
            {
              "label": "Dịch vụ và ứng dụng phổ biến",
              "desc": "Hệ thống trang web tin tức thời sự, thể thao, E-learning, thương mại điện tử, cổng thông tin điện tử, các tiện ích giải trí. Email, chat, mạng xã hội và các diễn đàn giúp trao đổi giao tiếp với bạn bè người thân. Máy tìm kiếm thông tin cung cấp nguồn thông tin đa dạng và công cụ tra cứu hiệu quả."
            },
            {
              "label": "Trong đời sống hàng ngày",
              "desc": "Internet giúp chúng ta trao đổi thông tin, giao lưu với bạn bè đồng nghiệp một cách nhanh chóng và hiệu quả thông qua những ứng dụng như thư điện tử, chat hay hội nghị trực tuyến."
            },
            {
              "label": "Trong giáo dục đào tạo",
              "desc": "Internet cung cấp các bài giảng, học liệu điện tử và khoá học trực tuyến cho học sinh và cả người lớn, cung cấp cho giáo viên những công cụ dạy học và diễn đàn giao lưu hiệu quả với học sinh."
            },
            {
              "label": "Trong khoa học kĩ thuật và y tế",
              "desc": "Internet giúp các nhà nghiên cứu kết nối với những đối tác khoa học và các nguồn dữ liệu phong phú ở khắp nơi trên thế giới một cách nhanh chóng và hiệu quả."
            },
            {
              "label": "Trong thương mại, tài chính và kinh tế",
              "desc": "Internet cung cấp môi trường hoạt động cho các hệ thống thanh toán và thương mại điện tử, các giao dịch tài chính qua mạng."
            },
            {
              "label": "Trong văn hoá nghệ thuật và giải trí và thể thao",
              "desc": "Internet khiến cho việc thưởng thức của người xem được dễ dàng và thuận tiện hơn thông qua các dịch vụ truyền hình và các kênh phim trực tuyến."
            }
          ]
        }
      ]
    },
    {
      "id": "net-devices-all",
      "topicId": "tin-thiet-bi-giao-thuc-mang",
      "title": "2. Bài 1: Các Thiết Bị Mạng Thông Dụng & Cáp Mạng",
      "icon": "Cpu",
      "tag": "Bài 1: Thiết bị mạng",
      "summary": "Cáp xoắn (UTP, STP), Cáp quang (core, cladding, laser/LED), Switch, Access Point, Router và Modem.",
      "keyTerms": [
        "Cáp xoắn UTP",
        "Cáp quang",
        "RJ-45",
        "CAT 5e",
        "CAT 6",
        "Lõi sợi quang",
        "Laser",
        "LED",
        "Switch",
        "Bảng địa chỉ MAC",
        "Access Point",
        "Router",
        "Modem"
      ],
      "content": [
        {
          "heading": "Cáp xoắn và cáp quang (Môi trường truyền dẫn)",
          "text": "Thiết bị mạng giúp các máy tính kết nối với nhau, giúp truyền thông tin từ máy tính này tới máy tính khác. Một thiết bị mạng thường gặp là cáp mạng.\n\nHai loại cáp mạng thông dụng hiện nay là cáp xoắn và cáp quang. Cáp xoắn có lõi kim loại và sử dụng dòng điện để truyền dữ liệu, còn cáp quang sử dụng tia sáng để truyền nên lõi làm bằng chất liệu trong suốt, thường là nhựa tổng hợp hoặc sợi thủy tinh. Cáp xoắn sử dụng giắc cắm RJ-45, còn cáp quang có nhiều loại đầu nối khác nhau."
        },
        {
          "heading": "Chi tiết về Cáp xoắn UTP & STP",
          "text": "Hiện nay, cáp xoắn UTP (Unshielded Twisted Pair - Cáp xoắn không có vỏ bọc) đã trở nên thông dụng và chiếm lĩnh thị trường mạng LAN. Đây là loại cáp thông dụng nhất được dùng trong các mạng LAN hiện nay. Có thể bắt gặp cáp UTP ở hầu hết các toà nhà cơ quan, văn phòng hay khách sạn. Ưu thế của cáp xoắn là dễ lắp đặt và bảo trì, giá thành thấp. Cáp xoắn UTP gồm 4 đôi dây bện vào nhau một cách đều đặn để chống nhiễu điện từ, bọc ngoài cùng là lớp vỏ bảo vệ làm bằng nhựa. Cáp xoắn có 2 loại là cáp xoắn đôi có vỏ bọc (STP) và cáp xoắn không có vỏ bọc (UTP), trong đó cáp STP hầu như không được sử dụng vì có nhiều nhược điểm. Trải qua quá trình phát triển, cáp xoắn UTP có nhiều phiên bản từ CAT 1 tới CAT 7, trong đó CAT 5e (tốc độ truyền 1Gbps) và CAT 6 (tốc độ 10Gbps) khá phổ biến hiện nay."
        },
        {
          "heading": "Chi tiết về Cáp quang (Fiber Optic cable)",
          "text": "Trong cáp quang (Fiber Optic cable) tín hiệu được truyền đi dưới dạng ánh sáng. Một xung ánh sáng biểu thị bit 1 còn trạng thái không có ánh sáng biểu thị bit 0. Lõi sợi quang truyền tín hiệu làm bằng thủy tinh hữu cơ hay nhựa tổng hợp có độ trong suốt rất cao, bề mặt được phủ một lớp lót phản chiếu ánh sáng để tín hiệu không lọt ra ngoài. Bên ngoài có một lớp vỏ nhựa bảo vệ. Giữa lớp lót phản chiếu ánh sáng và vỏ bọc có thể là một lớp nhựa tổng hợp hay cao cấp hơn là một lưới kim loại để tăng độ bền cho cáp. Trong thực tế, nhờ có kích thước nhỏ, cáp quang thường được bó nhiều sợi với nhau.\n\nCáp quang có nhiều loại khác nhau nhưng về cơ bản đều bao gồm ba lớp chính:\n1. Lõi truyền ánh sáng (core) là sợi thủy tinh hoặc nhựa tổng hợp.\n2. Lớp phản quang bọc ngoài (cladding) để phản xạ ánh sáng trở lại vào lõi.\n3. Các lớp phủ bảo vệ bên ngoài (buffer, coating jacket) để chống thấm, chống lại tác dụng ăn mòn của hoá chất và các tác động vật lí.\n\nNgoài ra, tuỳ từng loại cáp khác nhau như cáp treo trên cột, cáp chôn dưới đất, cáp luồn cống mà có thể có thêm những thành phần khác như dây thép chịu lực, vỏ chống thấm,...\n\nTín hiệu truyền trên cáp quang được phát ra từ một trong hai loại nguồn sáng là nguồn sáng laser (singlemode) và đèn LED (nguồn sáng multimode). Nguồn sáng LED cổ điển (light emitting diode - điốt phát quang) rẻ tiền hơn nhưng chất lượng ánh sáng không cao, tia sáng tạp với nhiều loại bước sóng khác nhau nên tín hiệu dễ bị méo, khoảng cách truyền không xa (cỡ vài kilomet). Nguồn sáng singlemode phát ra tia laser đơn sắc cho phép đường kính lõi nhỏ có thể đặt được nhiều lõi quang trong cáp, thường được dùng trong các mạng WAN với khoảng cách truyền hàng ngàn kilomet, được dùng cho cáp quang biển."
        },
        {
          "heading": "Thiết bị Switch (Bộ chuyển mạch)",
          "text": "Switch, còn được gọi là Bộ chuyển mạch là thiết bị nối trung tâm giúp kết nối các máy tính và thiết bị mạng với nhau bằng dây cáp mạng.\n\nSwitch có tới 48 cổng (port), mỗi cổng có thể kết nối tới một máy trạm bằng cáp xoắn UTP. Switch xây dựng bảng địa chỉ gồm 2 trường thông tin là số hiệu cổng và địa chỉ của máy trạm đang kết nối với cổng đó. Khi nhận được gói tin từ máy trạm gửi tới một cổng, Switch đọc gói tin để biết địa chỉ máy nhận, sau đó tra cứu bảng địa chỉ của mình để biết máy đó đang ở cổng số mấy rồi gửi gói tin vào cổng đó. Nhờ vậy gói tin không bị gửi nhầm tới những máy khác không phải máy nhận, giúp làm giảm lưu lượng mạng và nâng cao hiệu suất của mạng. Để dễ hiểu điều này, ta hình dung rằng Switch tạo ra một cầu nối tạm thời giữa hai cổng kết nối với trạm gửi và trạm nhận để truyền những gói tin giữa chúng. Nhiều cầu nối như vậy có thể cùng hoạt động một cách độc lập với nhau. Sau khi hai trạm kết thúc cuộc truyền, Switch sẽ hủy bỏ cầu nối tương ứng. Ví dụ: Switch tạo hai kết nối tạm thời phục vụ hai cuộc truyền giữa máy trạm số 1 và số 9; máy trạm số 7 và số 15."
        },
        {
          "heading": "Thiết bị Access Point (Điểm truy cập không dây)",
          "text": "Mạng không dây đang phát triển mạnh mẽ. Trong một số trường hợp, khi mạng có dây không thể áp dụng được thì mạng không dây là giải pháp phù hợp hơn để truyền thông tin. Wireless Access Point (WAP hoặc AP - Điểm truy cập không dây) là thiết bị cung cấp kết nối không dây trong mạng WLAN. Access Point có chức năng tương tự như Switch nhưng được trang bị thêm khả năng truyền không dây. Để thiết bị không dây của người dùng có thể kết nối với Access Point thì cần biết tên mạng Wi-Fi và mật khẩu truy cập. Hiện nay một số Access Point được trang bị cổng cắm cáp mạng để có thể kết nối với mạng LAN có dây. Để sóng Wi-Fi lan truyền được xa và tránh được các vật cản, Access Point thường được đặt ở vị trí cao, chẳng hạn như được gắn trên trần. Sóng Wi-Fi bị suy giảm rất nhiều khi vượt qua tường, sàn và trần nhà, vì vậy cần lắp đặt nhiều Access Point trong các toà nhà."
        },
        {
          "heading": "Thiết bị Router (Bộ định tuyến)",
          "text": "Internet là mạng diện rộng trùm khắp toàn thế giới, kết nối hầu hết các cơ quan, tổ chức và cá nhân ở mọi quốc gia. Để truy cập Internet, một thiết bị bắt buộc phải dùng đến là Router (còn gọi là Bộ định tuyến). Đây là thiết bị quan trọng của mạng WAN, chịu trách nhiệm tìm đường đi tốt nhất để vận chuyển gói tin qua các mạng LAN khác nhau tới đúng địa chỉ đích. Router là thiết bị có chức năng kết nối mạng LAN với Internet cũng như kết nối các mạng LAN với nhau. Để truyền gói tin từ máy gửi tới máy nhận, Router phải xác định tuyến đường tốt nhất mà gói tin sẽ đi, cụ thể là gói tin sẽ phải đi qua những mạng LAN và những router nào. Để ước lượng độ tốt xấu của một tuyến đường có thể dùng nhiều yếu tố khác nhau như:\n- Thời gian truyền.\n- Chi phí truyền.\n- Mức độ rủi ro, tỉ lệ gói tin bị thất lạc, bị nghe lén.\n\nRouter có nhiệm vụ tìm ra tuyến đường ngắn nhất. Trong thực tế, các router của các mạng LAN sẽ phối hợp với nhau để hoàn thành nhiệm vụ. Mỗi router phụ trách một vùng lân cận xung quanh mình, bao gồm chính mạng LAN mà mình quản lí, và sẽ thông báo cho các Router khác khi có sự thay đổi về mạng trong khu vực mình phụ trách.\n\nTín hiệu từ Internet vào mạng LAN, sau khi được chuyển sang dạng tín hiệu số bởi Modem, sẽ tới Router. Thiết bị này sẽ thực hiện một số chức năng như chuyển dịch địa chỉ IP của gói tin về dạng sử dụng trong nội bộ mạng LAN rồi chuyển cho các thiết bị nội bộ như Switch hay Access Point để chuyển tới đúng trạm nhận. Theo chiều ngược lại, khi một gói tin được trạm gửi phát tới Router, thiết bị này lại thực hiện chức năng chuyển dịch địa chỉ IP và tìm đường đi tốt nhất trước khi gửi gói tin tới Modem để phát lên Internet.\n\nHiện nay, Router có thể được tích hợp thêm chức năng của các thiết bị mạng khác như Modem hoặc Access Point. Router được trang bị thêm tính năng thu phát không dây của Access Point, đồng thời có cả các cổng mạng có dây để kết nối bằng cáp tới các máy trạm."
        },
        {
          "heading": "Thiết bị Modem (Bộ điều chế và giải điều chế)",
          "text": "Modem (viết tắt của Modulator and Demodulator - Bộ điều chế và giải điều chế) biến đổi các tín hiệu số thành tín hiệu tương tự và ngược lại. Tại trạm phát, tín hiệu số được Modem biến đổi thành tín hiệu tương tự, là dạng tín hiệu có thể dễ dàng truyền đi qua khoảng cách xa thông qua hệ thống liên lạc viễn thông. Khi tới đích, tín hiệu tương tự lại được Modem ở bên trạm thu chuyển về dạng tín hiệu số để các thiết bị mạng còn lại như Router, Switch hay Access Point có thể hiểu và xử lí. Máy tính và các thiết bị số như điện thoại thông minh chỉ hiểu và làm việc được với tín hiệu số, nhưng tín hiệu tương tự mới là dạng tín hiệu có thể dễ dàng truyền qua khoảng cách xa bằng sóng điện từ hay đường cáp viễn thông. Vì vậy, sau khi được trạm gửi phát ra, tín hiệu số cần được biến đổi (bằng Modem) thành dạng tín hiệu tương tự rồi truyền đi. Khi tới đích, tín hiệu tương tự lại được Modem ở bên thu chuyển về dạng tín hiệu số để các thiết bị mạng còn lại như Router, Switch hay Access Point có thể thu nhận và xử lí.\n\nModem được sử dụng để kết nối với nhà cung cấp dịch vụ Internet (ISP) để giúp người dùng truy cập và sử dụng các dịch vụ Internet. Hiện nay, các ISP thường cung cấp cho khách hàng một thiết bị được tích hợp các chức năng của Modem và Router khi họ đăng kí thuê bao sử dụng dịch vụ Internet, thậm chí đôi khi thiết bị đó còn kiêm cả chức năng của Access Point."
        }
      ]
    },
    {
      "id": "net-protocols-ip-all",
      "topicId": "tin-thiet-bi-giao-thuc-mang",
      "title": "3. Bài 2: Giao Thức Mạng, TCP/IP, Địa Chỉ IP & DNS",
      "icon": "Compass",
      "tag": "Bài 2: Giao thức & IP",
      "summary": "Giao thức mạng, HTTP, SMTP, bộ giao thức TCP/IP, Địa chỉ IPv4 (32-bit), IPv6 (128-bit, 2^128 địa chỉ) và Hệ thống tên miền (DNS).",
      "keyTerms": [
        "Giao thức mạng",
        "HTTP",
        "SMTP",
        "TCP/IP",
        "TCP",
        "IP",
        "Địa chỉ IPv4",
        "Octet",
        "Địa chỉ IPv6",
        "DNS",
        "Tên miền"
      ],
      "content": [
        {
          "heading": "Khái niệm và chức năng của giao thức mạng",
          "text": "Giao thức mạng (Network Protocol) là các quy tắc điều khiển việc kết nối và truyền thông giữa các thiết bị mạng. Giao thức mạng quy định cách thức giao tiếp giữa hai đối tượng trao đổi dữ liệu qua mạng. Hai thiết bị mạng phải tuân thủ cùng một giao thức thì mới có thể kết nối được với nhau qua mạng."
        },
        {
          "heading": "Một số giao thức mạng thông dụng",
          "bulletPoints": [
            {
              "label": "Giao thức HTTP (HyperText Transfer Protocol)",
              "desc": "Giao thức truyền tệp siêu văn bản, được sử dụng để truyền trang web từ máy chủ web tới máy trạm của người sử dụng (đang dùng trình duyệt web)."
            },
            {
              "label": "Giao thức SMTP (Simple Mail Transfer Protocol)",
              "desc": "Giao thức gửi, nhận thư điện tử qua mạng."
            },
            {
              "label": "Bộ giao thức TCP/IP",
              "desc": "Giúp các máy trạm và thiết bị mạng kết nối, trao đổi dữ liệu với nhau qua Internet. TCP/IP bao gồm giao thức TCP và giao thức IP. TCP (Transmission Control Protocol) là giao thức kiểm soát, điều khiển việc truyền tải qua mạng sao cho dữ liệu không bị thất lạc hay bị hỏng. IP (Internet Protocol) là giao thức giúp định tuyến - tìm ra tuyến đường để truyền gói tin tới trạm đích trên mạng."
            }
          ]
        },
        {
          "heading": "Khái niệm giao thức IP, khái niệm địa chỉ IP",
          "text": "IP là giao thức phục vụ việc định tuyến trên mạng, giúp tìm ra tuyến đường để truyền gói tin tới đích. Địa chỉ IP giúp định danh các máy trạm, nhờ đó các gói tin có thể được vận chuyển tới đúng trạm nhận. Trong mạng LAN, mỗi máy trạm hay router đều được gắn một địa chỉ IP riêng và duy nhất. Trong mỗi gói tin đều ghi rõ địa chỉ IP của trạm gửi và trạm nhận, dựa vào địa chỉ này Router sẽ tìm ra tuyến đường để chuyển gói tin tới đích. Hiện nay địa chỉ IP có hai phiên bản: IPv4 và IPv6."
        },
        {
          "heading": "Địa chỉ IPv4 vs Địa chỉ IPv6",
          "bulletPoints": [
            {
              "label": "Địa chỉ IPv4",
              "desc": "IPv4 là phiên bản địa chỉ được công bố và áp dụng từ đầu những năm 80 của thế kỉ trước. Ngày nay, mặc dù phiên bản IPv6 mới và tiên tiến hơn đã ra đời và được triển khai nhưng IPv4 vẫn tiếp tục được sử dụng rộng rãi. Địa chỉ IPv4 là chuỗi 32 bit chia thành 4 cụm, mỗi cụm 8 bit được gọi là octet. Với 32 bit, có tổng cộng khoảng gần 4,3 tỉ địa chỉ IPv4 khác nhau, số lượng này là không đủ khi nhân loại đã có hơn 8 tỉ người vào năm 2023. Kho địa chỉ IPv4 đã chính thức cạn kiệt (được phân phát hết) từ nhiều năm trước.",
              "example": "Ví dụ về địa chỉ IPv4 viết dưới dạng thập phân: 14.238.1.138"
            },
            {
              "label": "Địa chỉ IPv6",
              "desc": "IPv6 là phiên bản địa chỉ IP mới hơn so với IPv4, được phát triển để giải quyết nhu cầu về địa chỉ IP. Địa chỉ IPv6 bao gồm 128 bit, cung cấp 2<sup>128</sup> địa chỉ khác nhau, một số lượng địa chỉ khổng lồ đủ cho hoạt động Internet của thế giới trong nhiều thế kỉ sau.",
              "example": "Ví dụ về địa chỉ IPv6 viết dưới dạng thập lục phân (hệ cơ số 16) bao gồm 8 cụm số ngăn cách nhau bằng dấu hai chấm: 2402:9d80:85c:b680:28c6:5903:e52f:9b8a"
            }
          ]
        },
        {
          "heading": "Hệ thống tên miền (DNS - Domain Name System)",
          "text": "Mỗi trang Web tương ứng với một địa chỉ IP trong mạng Internet, ví dụ trang web của Trường Đại học Sư phạm Hà Nội hnue.edu.vn có địa chỉ IP tương ứng là 14.238.1.138. Đối với con người tên miền dễ nhớ hơn so với địa chỉ IP nên chúng ta sẽ sử dụng tên miền để chỉ định trang web muốn truy cập, nhưng máy tính là thiết bị số nên chỉ hiểu và làm việc với địa chỉ IP chứ không làm việc trực tiếp với tên miền. Vì vậy, cần phải có công cụ giúp máy tính dịch từ tên miền (dạng chữ) thành địa chỉ IP (dạng số), đó chính là Hệ thống tên miền (DNS - Domain Name System, còn gọi là Hệ thống phân giải tên miền).\n\nTên miền được phân thành nhiều cấp (còn gọi là Nhãn hay label) cách nhau bởi dấu chấm theo thứ tự từ phải sang trái như sau:\n- Tên miền cấp cao nhất: là hai kí tự đại biểu cho quốc gia (ví dụ: “vn” là Việt Nam) hoặc lĩnh vực ngành nghề (ví dụ: com, org, net, edu).\n- Tên miền cấp hai, tên miền cấp ba,... đại biểu cho tên tổ chức, cơ quan hay công ty.\n\nDNS hoạt động tương tự như Danh bạ điện thoại, giúp chúng ta chỉ cần nhớ tên người thân là có thể tra cứu được số điện thoại của người đó."
        }
      ]
    },
    {
      "id": "net-connect-practice",
      "topicId": "tin-thiet-bi-giao-thuc-mang",
      "title": "4. Bài 3: Thực Hành Kết Nối PC & Thiết Bị Di Động Vào Mạng",
      "icon": "Sparkles",
      "tag": "Bài 3: Thực hành kết nối",
      "summary": "Kết nối PC với Wi-Fi (Access Point), kết nối PC với Switch (cáp UTP RJ-45) và kết nối điện thoại vào Wi-Fi / 4G.",
      "keyTerms": [
        "Card mạng",
        "NIC",
        "Access Point",
        "Taskbar",
        "Cáp xoắn UTP",
        "RJ-45",
        "Wi-Fi",
        "4G",
        "Dữ liệu di động"
      ],
      "content": [
        {
          "heading": "Cách kết nối các thiết bị Switch, Access Point với PC",
          "text": "Để kết nối được máy tính PC hay điện thoại thông minh vào mạng Wi-Fi, người dùng cần phải biết cả tên mạng Wi-Fi muốn kết nối và mật khẩu truy cập tương ứng. Về điều kiện thiết bị, hiện nay nói chung mọi Laptop (máy tính xách tay) và điện thoại thông minh thông thường đều được trang bị sẵn Card mạng (Network Interface Card - NIC) không dây để kết nối vào mạng Wi-Fi. Riêng các máy tính để bàn (Desktop PC) thì thường không được trang bị Card mạng không dây nhưng chúng thường được gắn sẵn Card mạng có dây nên vẫn có thể truy cập mạng LAN hữu tuyến bằng cách kết nối với một Switch thông qua cáp xoắn UTP. Muốn kết nối máy tính PC (máy tính xách tay laptop) hay điện thoại thông minh vào mạng Wi-Fi thì chỉ cần kết nối được với một Access Point của mạng đó."
        },
        {
          "heading": "Quy trình kết nối PC với Access Point (Wi-Fi)",
          "text": "Để PC có thể truy cập mạng Wi-Fi cần phải kết nối nó với Access Point. Muốn vậy cần biết tên mạng Wi-Fi cần kết nối và mật khẩu để truy cập vào mạng đó. Có nhiều cách để kết nối PC với mạng Wi-Fi, đơn giản nhất là thực hiện các bước sau đây:\n\n- Bước 1. Nhấp chuột phải vào biểu tượng Wi-Fi trên Thanh tác vụ (Taskbar).\n- Bước 2. Chọn mạng Wi-Fi muốn kết nối, bấm chọn “Kết nối” (Connect).\n- Bước 3. Nhập vào mật khẩu, chọn Next.\n- Bước 4. Kiểm tra lại kết quả bằng cách mở trình duyệt web, gõ đường link của một trang web nào đó."
        },
        {
          "heading": "Quy trình kết nối PC với Switch (Mạng có dây)",
          "text": "Chuẩn bị một đoạn cáp xoắn UTP đã gắn 2 giắc cắm RJ-45 ở hai đầu. Cắm một đầu cáp vào cổng ở phía sau lưng máy tính, đầu kia cắm vào một cổng còn trống của Switch.\n\nKiểm tra lại kết quả bằng cách mở trình duyệt Web, gõ đường link của một trang web nào đó."
        },
        {
          "heading": "Cách kết nối thiết bị di động vào mạng Wi-Fi & 4G (Smartphone Android)",
          "bulletPoints": [
            {
              "label": "Kết nối điện thoại thông minh với Access Point (Wi-Fi)",
              "desc": "Bật chức năng Wi-Fi trên điện thoại thông minh bằng cách: Trên màn hình Smartphone chọn mục Cài đặt / Kết nối / bật Wi-Fi. Chọn mạng Wi-Fi muốn kết nối, nhập mật khẩu (đôi khi điện thoại tự động ghi nhớ mạng Wi-Fi và mật khẩu nên không yêu cầu người dùng chọn và nhập)."
            },
            {
              "label": "Kết nối điện thoại thông minh với mạng 4G",
              "desc": "Bật dịch vụ mạng di động bằng cách: Trên màn hình Smartphone chọn mục Cài đặt / Kết nối / Sử dụng dữ liệu / bật nút Dữ liệu di động. Kiểm tra lại kết quả bằng cách mở trình duyệt web, gõ đường link của một trang web nào đó."
            }
          ]
        }
      ]
    },
    {
      "id": "net-sharing-practice",
      "topicId": "tin-thiet-bi-giao-thuc-mang",
      "title": "5. Bài 4: Thực Hành Chia Sẻ Tài Nguyên (Thư Mục & Máy In)",
      "icon": "BookmarkCheck",
      "tag": "Bài 4: Chia sẻ tài nguyên",
      "summary": "Các bước chia sẻ thư mục trên Windows 10, 3 mức phân quyền (Full Control, Change, Read) và quy trình chia sẻ máy in mạng.",
      "keyTerms": [
        "Chia sẻ dữ liệu",
        "File Explorer",
        "Properties",
        "Sharing",
        "Advanced Sharing",
        "Full Control",
        "Change",
        "Read",
        "Chia sẻ máy in",
        "Control Panel"
      ],
      "content": [
        {
          "heading": "Cách chia sẻ dữ liệu qua mạng bằng chức năng của hệ điều hành (Windows 10)",
          "text": "Khi máy tính tham gia mạng, các thư mục thậm chí cả ổ đĩa của nó có thể được chia sẻ cho người dùng trên những máy trạm khác dùng chung ở nhiều mức độ sử dụng khác nhau. Sau đây là các thao tác để chia sẻ dữ liệu trên hệ điều hành Windows 10:\n\n1) Khởi động tiện ích quản lí File Explorer.\n2) Nhấp chuột phải vào tệp hay thư mục muốn chia sẻ, chọn Properties / Sharing / Advanced Sharing.\n3) Trong hộp thoại vừa xuất hiện, chọn Share this folder, chọn Permissions.\n4) Trong hộp thoại vừa xuất hiện, chọn Add hoặc Remove nếu muốn thêm / bớt những người dùng được chia sẻ.\n5) Chọn một người dùng trong danh sách, ở mục Permission for Everyone bên dưới, chọn một trong 3 mức quyền hạn mà ta muốn chia sẻ cho người đó: Full Control, Change, Read."
        },
        {
          "heading": "Nội dung chi tiết 3 mức quyền hạn chia sẻ thư mục:",
          "bulletPoints": [
            {
              "label": "Full Control (Toàn quyền)",
              "desc": "Có toàn quyền đối với nội dung bên trong thư mục. Ví dụ: đọc, sửa, xoá, thay đổi, thiết lập lại các mức quyền."
            },
            {
              "label": "Change (Quyền thay đổi)",
              "desc": "Có quyền đọc, ghi, kích hoạt, xoá các file và thư mục con bên trong thư mục được chia sẻ (không có quyền thiết lập lại phân quyền của người khác)."
            },
            {
              "label": "Read (Chỉ đọc)",
              "desc": "Chỉ có quyền đọc hoặc copy nội dung tệp và thư mục."
            }
          ]
        },
        {
          "heading": "Cách chia sẻ máy in qua mạng bằng chức năng của hệ điều hành",
          "text": "Máy in thường chỉ dành cho một máy tính PC và kết nối vào máy đó. Tuy nhiên, hoàn toàn có thể chia sẻ máy in từ máy tính ban đầu cho nhiều máy tính khác cùng sử dụng cho khỏi lãng phí. Các bước thực hiện như sau:\n\n- Bước 1. Chia sẻ máy in trên máy tính ban đầu:\nMở cửa sổ Control Panel, chọn Hardware and Sound / Devices and Printers. Nhấp chuột phải vào máy in muốn chia sẻ, chọn Printer properties. Trong hộp thoại mới xuất hiện, chọn Sharing / Share this printer, sau đó nhập tên cho máy in ở ô Share name rồi bấm OK.\n\n- Bước 2. Thực hiện thao tác bổ sung máy in mạng trên máy tính cần in:\nMở cửa sổ Control Panel, chọn Hardware and Sound / Devices and Printers, chọn Add a printer / Next. Chọn Select a shared printer by name, sau đó chọn đúng tên máy in vừa nhập ở Bước 1, chọn Next.\n\n- Bước 3. Cuối cùng, in thử một trang để kiểm tra."
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
  "docTitle": "Chuyên đề 10F. Lập trình cơ bản.docx",
  "objectives": [
    "Biết được vì sao chúng ta cần lập trình và cần có ngôn ngữ lập trình bậc cao.",
    "Biết sơ lược về Python – một ngôn ngữ lập trình bậc cao thông dụng.",
    "Bắt đầu chạy được một vài chương trình tính toán đơn giản trong môi trường Python.",
    "Biết được vai trò của biến và phép gán.",
    "Đặt được tên cho biến, sử dụng được phép gán và cách đưa ra giá trị của biến trong Python.",
    "Làm quen được với cửa sổ Code trong Python để soạn thảo, lưu và thực hiện chương trình.",
    "Biết được hai kiểu dữ liệu số trong lập trình: kiểu số nguyên, kiểu số thực.",
    "Biết được cách nhập dữ liệu số trong Python.",
    "Biết được cách đưa ra kết quả trong Python.",
    "Biết khái niệm hằng trong chương trình.",
    "Biết được các phép so sánh và các phép tính logic tạo thành biểu thức logic thể hiện điều kiện rẽ nhánh trong chương trình.",
    "Viết được câu lệnh rẽ nhánh trong Python.",
    "Biết được có hai loại cấu trúc lặp để mô tả thuật toán: lặp với số lần biết trước và lặp với số lần không biết trước.",
    "Viết được câu lệnh lặp dạng for và dạng while trong Python.",
    "Xây dựng và sử dụng được chương trình con trong Python.",
    "Sử dụng được chương trình con xây dựng sẵn của hệ thống.",
    "Biết dữ liệu kiểu xâu, cách trích xâu con từ xâu cho trước và các phép xử lí xâu thường dùng.",
    "Biết kiểu dữ liệu danh sách (list), khởi tạo danh sách và các thao tác xử lí danh sách."
  ],
  "sections": [
    {
      "id": "py-intro-lang",
      "topicId": "tin-lap-trinh-python",
      "title": "1. Làm quen với ngôn ngữ lập trình bậc cao & Python",
      "icon": "Code",
      "tag": "1. Ngôn ngữ bậc cao",
      "summary": "Khái niệm ngôn ngữ lập trình, Scratch, ngôn ngữ bậc cao (Python 3.9), môi trường IDLE (cửa sổ Shell và Code).",
      "keyTerms": [
        "Ngôn ngữ lập trình",
        "Scratch",
        "Ngôn ngữ bậc cao",
        "Python 3.9",
        "IDLE",
        "Cửa sổ Shell",
        "Cửa sổ Code",
        "Chương trình",
        "Câu lệnh"
      ],
      "content": [
        {
          "heading": "1.1. Ngôn ngữ lập trình bậc cao",
          "text": "- Ngôn ngữ lập trình là ngôn ngữ chung để máy tính hiểu và thực hiện được các chỉ dẫn mà con người giao cho nó.\n- Ngôn ngữ lập trình trực quan Scratch dễ dùng và thích hợp cho các bạn nhỏ tuổi.\n- Ngôn ngữ lập trình bậc cao như: Python, C++, Java, ... cung cấp tính năng chuyên nghiệp cho việc lập trình.\n- Soạn thảo các hướng dẫn để máy tính hiểu và thực hiện các yêu cầu gọi là lập trình và sản phẩm soạn thảo là chương trình.\n- Mỗi hướng dẫn để máy tính thực hiện công việc nào đó gọi là câu lệnh."
        },
        {
          "heading": "1.2. Làm quen với Python",
          "text": "- Hệ thống công cụ lập trình Python có thể dễ dàng tìm thấy trên Internet và tải về, trong sách này sẽ sử dụng phiên bản 3.9.0.\n- Cửa sổ Start sẽ hiện các mục cho ta chọn loại dịch vụ python.\n- Nếu chọn IDLE, sẽ có cửa sổ Shell cho phép viết và thực hiện các biểu thức hoặc câu lệnh."
        }
      ]
    },
    {
      "id": "py-variables-assignment",
      "topicId": "tin-lap-trinh-python",
      "title": "2. Biến, phép gán và biểu thức số học",
      "icon": "Cpu",
      "tag": "2. Biến & Phép gán",
      "summary": "Biến là vùng nhớ, cú pháp phép gán Biến = <Biểu thức>, 2 bước thực hiện và soạn thảo chương trình trên Shell vs Code.",
      "keyTerms": [
        "Biến",
        "Vùng nhớ",
        "Phép gán",
        "Biểu thức số học",
        "Cửa sổ Shell",
        "Cửa sổ Code"
      ],
      "content": [
        {
          "heading": "2.1. Biến và phép gán",
          "text": "a) Biến trong chương trình:\n- Dù lập trình bằng ngôn ngữ nào thì cần phải biết sử dụng biến để lưu trữ dữ liệu cần thiết cho chương trình.\n- Biến là tên một vùng nhớ, trong chương trình giá trị của biến có thể thay đổi.\n\nb) Phép gán trong chương trình:\n- Câu lệnh gán giá trị số học cho một biến là câu lệnh phổ biến nhất trong ngôn ngữ lập trình, có dạng như sau:\nBiến = <Biểu thức>\n\nPhép gán được thực hiện như sau:\n- Bước 1: Tính giá trị biểu thức ở vế phải.\n- Bước 2: Gán kết quả tính được cho biến ở vế trái."
        },
        {
          "heading": "2.2. Soạn thảo chương trình",
          "text": "- Cửa sổ Shell của Python cho ta gõ và thực hiện ngay từng câu lệnh vừa đưa vào, nhưng không cho lưu lại câu lệnh đã soạn thảo để thực hiện.\n- Ở cửa sổ Code, ta có thể soạn thảo và lưu, chạy chương trình ta còn có thể chỉnh sửa chương trình."
        }
      ]
    },
    {
      "id": "py-data-types-io",
      "topicId": "tin-lap-trinh-python",
      "title": "3. Kiểu dữ liệu số, câu lệnh Vào - Ra & Hằng",
      "icon": "Layers",
      "tag": "3. Dữ liệu & I/O",
      "summary": "Kiểu int, float, hàm type(), lệnh input(), print(), ép kiểu int()/float() và quy ước hằng trong Python.",
      "keyTerms": [
        "Số nguyên (int)",
        "Số thực (float)",
        "type()",
        "input()",
        "print()",
        "int()",
        "float()",
        "Hằng"
      ],
      "content": [
        {
          "heading": "3.1. Kiểu dữ liệu số nguyên và số thực",
          "text": "- Ngôn ngữ lập trình bậc cao cho phép sử dụng các biến kiểu dữ liệu số nguyên và số thực.\n- Trong Python, một biến được gán bằng một biểu thức tùy vào biểu thức đó là số nguyên hay số thực thì biến sẽ lưu trữ tương ứng là kiểu số nguyên hoặc số thực.\n- Câu lệnh type() của Python cho ta biết kiểu dữ liệu của biến hay biểu thức nằm trong cặp dấu ngoặc tròn."
        },
        {
          "heading": "3.2. Các câu lệnh vào – ra đơn giản",
          "text": "a) Nhập dữ liệu từ bàn phím:\n- Với câu lệnh nhập dữ liệu ta có thể lập trình với các biến mà giá trị của nó chỉ có thể biết khi thực hiện chương trình.\n- Câu lệnh nhập giá trị cho một biến vào bàn phím có dạng:\nBiến = input(dòng thông báo)\nTrong đó: dòng thông báo để nhắc người dùng biết nhập gì, dòng thông báo là một xâu kí tự đặt giữa cặp dấu nháy đơn hoặc nháy kép, có thể không cần có.\n- Dữ liệu nhập vào có dạng xâu kí tự. Nếu chuyển dữ liệu này sang kiểu số nguyên hay số thực để tính toán, sử dụng câu lệnh int() hay float():",
          "image": "/images/theory_10f_rId7_image1.png",
          "imageCaption": "Minh họa câu lệnh nhập dữ liệu và chuyển đổi sang số nguyên int() hoặc float()"
        },
        {
          "heading": "b) Xuất dữ liệu ra màn hình",
          "text": "- Cửa sổ Shell, nếu viết dòng lệnh chỉ chứa tên biến hoặc biểu thức số học thì kết quả tương ứng sẽ được đưa ra màn hình.\n- Cửa sổ Code để đưa thông tin ra và lưu lại trên màn hình cần dùng lệnh print(). Dạng đơn giản của câu lệnh print() đưa giá trị các biểu thức ra màn hình là:\nprint(danh sách biểu thức)"
        },
        {
          "heading": "3.3. Hằng trong Python",
          "text": "- Hằng là những biến có giá trị chỉ định trước và không thể thay đổi trong quá trình thực hiện chương trình.\n- Python không cung cấp công cụ khai báo hằng. Khi lập trình bằng Python, người ta thường sử dụng hằng số như một loại biến đặc biệt với cách đặt tên (thường viết hoa toàn bộ tên biến, ví dụ: PI = 3.14)."
        }
      ]
    },
    {
      "id": "py-conditionals",
      "topicId": "tin-lap-trinh-python",
      "title": "4. Câu lệnh rẽ nhánh (if & if - else)",
      "icon": "GitBranch",
      "tag": "4. Rẽ nhánh",
      "summary": "Biểu thức logic, phép toán logic (and, or, not), cú pháp lệnh if, if - else và quy tắc thụt lề khối lệnh.",
      "keyTerms": [
        "Cấu trúc rẽ nhánh",
        "Biểu thức logic",
        "True",
        "False",
        "and",
        "or",
        "not",
        "if",
        "else",
        "Khối lệnh",
        "Thụt lề"
      ],
      "content": [
        {
          "heading": "4.1. Cấu trúc rẽ nhánh trong mô tả thuật toán & 4.2. Điều kiện rẽ nhánh",
          "text": "Các ngôn ngữ lập trình bậc cao cung cấp công cụ mô tả <điều kiện>, tính giá trị <điều kiện> và thể hiện cấu trúc rẽ nhánh dựa trên giá trị tính được của <điều kiện>.\n\n- Trong mô tả thuật toán, <điều kiện> rẽ nhánh là một biểu thức logic True hoặc False.\n- Kết nối các biểu thức logic với nhau bằng các phép tính logic (and – và, or – hoặc, not – phủ định) ta lại nhận được một biểu thức logic."
        },
        {
          "heading": "4.3. Câu lệnh rẽ nhánh trong chương trình Python",
          "text": "Python cung cấp hai câu lệnh rẽ nhánh:\n\n+ Câu lệnh rẽ nhánh dạng if:\nif <điều kiện>:\n    Câu lệnh hay nhóm câu lệnh\n\n+ Câu lệnh rẽ nhánh if – else:\nif <điều kiện>:\n    Câu lệnh hay nhóm câu lệnh 1\nelse:\n    Câu lệnh hay nhóm câu lệnh 2\n\n* Quy tắc khối lệnh: Câu lệnh hoặc các câu lệnh cùng nhóm viết lùi vào trong một số vị trí so với dòng điều kiện và viết thẳng hàng với nhau gọi là một khối lệnh."
        }
      ]
    },
    {
      "id": "py-loops",
      "topicId": "tin-lap-trinh-python",
      "title": "5. Câu lệnh lặp (for & while)",
      "icon": "Repeat",
      "tag": "5. Câu lệnh lặp",
      "summary": "Lặp với số lần biết trước (for với range(m, n)) và lặp với số lần không biết trước (while <điều kiện>).",
      "keyTerms": [
        "Cấu trúc lặp",
        "Số lần biết trước",
        "Số lần không biết trước",
        "for",
        "range(m, n)",
        "while",
        "điều kiện lặp",
        "khối lệnh lặp"
      ],
      "content": [
        {
          "heading": "5.1. Cấu trúc lặp trong mô tả thuật toán",
          "text": "- Khi có một thao tác cần được thực hiện lặp lại một số lần liên tiếp trong quá trình thực hiện thuật toán thì cần dùng cấu trúc lặp.\n\nCó hai kiểu cấu trúc lặp:\n- Thuật toán biết trước số lần lặp.\n- Thuật toán không biết trước số lần lặp."
        },
        {
          "heading": "5.2. Câu lệnh lặp với số lần lặp biết trước trong Python",
          "text": "Cú pháp:\nfor biến_chạy in range(m, n):\n    khối lệnh cần lặp\n\nTrong câu lệnh for, hàm range(m, n) dùng để khởi tạo dãy số nguyên từ m đến n-1 (với m < n). Trường hợp m = 0, range(0, n) viết gọn là range(n)."
        },
        {
          "heading": "5.3. Câu lệnh lặp với số lần lặp không biết trước trong Python",
          "text": "- Trong Python, câu lệnh lặp với số lần không biết trước có dạng là:\nwhile <điều kiện>:\n    Câu lệnh hay nhóm câu lệnh\n\n- Các ngôn ngữ lập trình cung cấp cả hai lệnh for và while tương ứng thể hiện lặp với số lần biết trước và không biết trước. Câu lệnh while cũng thể hiện cấu trúc lặp với số lần biết trước.",
          "image": "/images/theory_10f_rId8_image2.png",
          "imageCaption": "Sơ đồ khối mô tả thuật toán lặp câu lệnh while"
        }
      ]
    },
    {
      "id": "py-functions",
      "topicId": "tin-lap-trinh-python",
      "title": "6. Chương trình con & Thư viện hàm có sẵn",
      "icon": "Box",
      "tag": "6. Hàm & Thư viện",
      "summary": "Khái niệm chương trình con, cú pháp khai báo hàm def, truyền tham số, lệnh return và thư viện có sẵn.",
      "keyTerms": [
        "Chương trình con",
        "Hàm (function)",
        "def",
        "Tham số",
        "Thân hàm",
        "Lời gọi hàm",
        "return",
        "Thư viện hàm"
      ],
      "content": [
        {
          "heading": "6.1. Khái niệm chương trình con",
          "text": "- Khi lập trình để giải bài toán có thể chia bài toán đó thành các chương trình con, viết các đoạn chương trình giải các bài toán con.\n- Ngôn ngữ lập trình bậc cao cho phép người lập trình tạo ra chương trình con bằng cách đặt tên một đoạn chương trình gồm các câu lệnh thực hiện việc nào đó.\n⇒ Sử dụng các chương trình con là một trong những cách giúp việc lập trình trở nên dễ dàng hơn."
        },
        {
          "heading": "6.2. Khai báo và gọi thực hiện một hàm trong Python",
          "text": "- Có thể gọi một chương trình con trong Python là một hàm. Để sử dụng hàm cần khai báo hàm và viết lời gọi thực hiện.\n- Hàm trong Python được khai báo theo mẫu sau:\ndef tên_hàm (tham số):\n    Các lệnh mô tả hàm\n\nTrong đó:\n+ Tên hàm phải đặt theo quy tắc đặt tên trong Python.\n+ Theo sau tên hàm có thể có hoặc không có các tham số.\n+ Phần thân hàm (gồm các lệnh mô tả hàm) phải viết lùi vào theo quy định của Python."
        },
        {
          "heading": "6.3. Chuyển dữ liệu cho hàm thực hiện",
          "text": "Một hàm có thể thực hiện với những giá trị do chương trình truyền vào qua lời gọi hàm, tương ứng với danh sách tham số. Có hai cách truyền dữ liệu cho hàm thực hiện:\n- Cách thứ nhất, chương trình gọi thực hiện với các giá trị cụ thể.\n- Cách thứ hai, chương trình gọi thực hiện hàm với giá trị tham số truyền vào."
        },
        {
          "heading": "6.4. Lời gọi hàm & Giá trị trả về",
          "text": "- Trong nhiều ngôn ngữ lập trình bậc cao, hàm trả về chương trình một giá trị qua tên của nó, như vậy hàm được sử dụng như một biến trong chương trình gọi nó.\n- Trong Python, một hàm có thể trả về một giá trị qua tên của nó nếu như có lệnh return <Giá_trị> trước khi ra khỏi hàm."
        },
        {
          "heading": "6.5. Các hàm được xây dựng sẵn (Thư viện)",
          "text": "- Mỗi tập hợp gồm một số hàm được xây dựng sẵn thường gọi là một thư viện.\n- Trong chương trình, người lập trình chỉ cần gọi hàm có sẵn, thực hiện mà không cần phải tự xây dựng lại hàm.\n- Để có thể sử dụng các hàm trong thư viện cần kết nối thư viện hoặc hàm đó với chương trình (sử dụng từ khóa import)."
        }
      ]
    },
    {
      "id": "py-strings",
      "topicId": "tin-lap-trinh-python",
      "title": "7. Kiểu dữ liệu xâu kí tự (str) & Xử lí xâu",
      "icon": "FileText",
      "tag": "7. Xâu kí tự",
      "summary": "Khái niệm xâu, chỉ số từ 0, hàm len(), phép ghép xâu +, count(), cắt xâu [m:n], find(), và replace().",
      "keyTerms": [
        "Xâu kí tự (str)",
        "len()",
        "Độ dài xâu",
        "Phép ghép xâu (+)",
        "count()",
        "Cắt xâu y[m:n]",
        "find()",
        "replace()"
      ],
      "content": [
        {
          "heading": "7.1. Kiểu dữ liệu xâu kí tự",
          "text": "- Một xâu kí tự là một dãy các kí tự, trong Python xâu kí tự được đặt trong cặp nháy kép (“…”) hoặc nháy đơn (‘…’).\n- Các kí tự trong xâu được đánh số bắt đầu từ 0. Python cung cấp hàm len() để đếm kí tự trong xâu kể cả kí tự dấu cách, số kí tự trong xâu được gọi là độ dài của xâu."
        },
        {
          "heading": "7.2. Một số hàm xử lí xâu kí tự",
          "bulletPoints": [
            {
              "label": "a) Ghép xâu bằng phép +",
              "desc": "Viết liên tiếp các xâu cần ghép theo thứ tự và đặt giữa hai xâu kề nhau dấu “+”."
            },
            {
              "label": "b) Đếm số lần xuất hiện xâu con: y.count(x)",
              "desc": "Hàm y.count(x) đếm số lần xuất hiện không giao nhau của x trong y.\n+ y.count(x, 3) cho biết số lần xuất hiện các xâu x không giao nhau trong xâu y nhưng chỉ trong phạm vi từ kí tự thứ ba đến kí tự cuối của xâu y.\n+ y.count(x, 3, 5) cho biết số lần xuất hiện các xâu x không giao nhau trong xâu y nhưng chỉ trong phạm vi từ kí tự thứ ba đến kí tự thứ năm của xâu y."
            },
            {
              "label": "c) Xác định xâu con (Cắt xâu)",
              "desc": "Xác định xâu con của xâu y từ vị trí m đến trước vị trí n (m < n), có cú pháp: y[m:n]\nCác trường hợp đặc biệt:\n- y[:m] là xâu con gồm m kí tự đầu tiên của xâu y.\n- y[m:] là xâu con nhận được bằng cách bỏ m kí tự đầu tiên của xâu y."
            },
            {
              "label": "d) Tìm vị trí xuất hiện lần đầu tiên: y.find(x)",
              "desc": "Hàm y.find(x) trả về số nguyên xác định vị trí đầu tiên trong xâu y, từ đó xâu x xuất hiện như xâu con của y. Nếu xâu x không xuất hiện như xâu con kết quả trả về là -1."
            },
            {
              "label": "e) Thay thế xâu con: y.replace(x1, x2)",
              "desc": "Hàm y.replace(x1, x2) tạo xâu mới từ xâu y bằng cách thay thế xâu con x1 của y bằng xâu x2. Tất cả xâu con bằng x1 và không giao nhau của y đều được thay bằng xâu x2."
            }
          ]
        }
      ]
    },
    {
      "id": "py-lists",
      "topicId": "tin-lap-trinh-python",
      "title": "8. Kiểu dữ liệu danh sách (list) & Xử lí danh sách",
      "icon": "Compass",
      "tag": "8. Danh sách (list)",
      "summary": "Khái niệm list, chỉ số từ 0, 3 cách khởi tạo danh sách, truy cập ds[i], ghép danh sách (+) và duyệt for i in a.",
      "keyTerms": [
        "Danh sách (list)",
        "Chỉ số danh sách",
        "Khởi tạo danh sách",
        "Phép gán ds = [...]",
        "Duyệt danh sách for",
        "Ghép danh sách (+)"
      ],
      "content": [
        {
          "heading": "8.1. Kiểu dữ liệu danh sách",
          "text": "- Trong Python có kiểu dữ liệu danh sách (list) để lưu trữ dãy các đại lượng, ở các kiểu dữ liệu khác nhau và cho phép truy cập đến mỗi phần tử của dãy.\n- Các phần tử trong danh sách của Python được đánh chỉ số bắt đầu từ 0."
        },
        {
          "heading": "Khởi tạo danh sách",
          "text": "Có nhiều cách khởi tạo danh sách, ba cách trong các cách đó là:\n- Dùng phép gán:\n  Ví dụ: ds = [1, 1, 2, 3, 5, 8]\n- Dùng câu lệnh lặp for gán giá trị trong khoảng cho trước:\n  Ví dụ: ds = [i for i in range(6)]\n  Kết quả: ds = [0, 1, 2, 3, 4, 5]\n- Khởi tạo danh sách số nguyên hay thực từ dữ liệu nhập vào:",
          "image": "/images/theory_10f_rId9_image3.png",
          "imageCaption": "Khởi tạo danh sách số nguyên hay thực từ dữ liệu nhập vào"
        },
        {
          "heading": "Truy cập đến phần tử trong danh sách",
          "text": "- Để chỉ định phần tử trong danh sách cần nêu tên danh sách và chỉ số phần tử đó, chỉ số cần đặt trong dấu ngoặc vuông. Chỉ số có thể là một biểu thức số học (ví dụ: ds[0], ds[i + 1])."
        },
        {
          "heading": "8.2. Một số hàm và thao tác xử lí danh sách",
          "bulletPoints": [
            {
              "label": "Ghép các danh sách thành một danh sách",
              "desc": "Phép “+” được dùng để ghép nối hai danh sách."
            },
            {
              "label": "Duyệt các phần tử trong danh sách theo thứ tự lưu trữ",
              "desc": "Gọi a là một danh sách, câu lệnh duyệt danh sách có dạng:\nfor i in a:\n    Các câu lệnh xử lí"
            }
          ]
        }
      ]
    }
  ]
},
  "tin-chuyen-de-12f-web": {
  "subjectId": "tin-hoc-12",
  "subjectName": "Tin học 12",
  "topicName": "Chuyên đề 12F: Tạo trang web với HTML & CSS",
  "chapterName": "Chủ đề 4: Tạo trang web với HTML & CSS (Tuần 12 – 20)",
  "docTitle": "Chuyên đề 12F. Tạo trang Web.docx (Google Drive)",
  "objectives": [
    "Hiểu và giải thích được cấu trúc của một trang web dưới dạng mã nguồn HTML (head, body, title, meta).",
    "Sử dụng thành thạo các thẻ HTML để trình bày trang web: định dạng văn bản (<p>, <h1>-<h6>, <strong>, <em>, <mark>), siêu liên kết (<a>), danh sách (<ol>, <ul>, <li>), bảng biểu (<table>, <tr>, <td>, <th>).",
    "Đưa các tệp dữ liệu đa phương tiện vào trang web (ảnh <img>, âm thanh <audio>, video <video>, khung nội tuyến <iframe>).",
    "Thiết kế và xây dựng biểu mẫu web (<form>, các kiểu <input>, <select>, <textarea>, nút submit) để thu thập dữ liệu người dùng.",
    "Hiểu và sử dụng được các thuộc tính CSS cơ bản: màu sắc, phông chữ, nền (background), đường viền (border), kích cỡ, khoảng cách (margin, padding).",
    "Sử dụng linh hoạt các bộ chọn CSS (Selector): bộ chọn phần tử, bộ chọn lớp (.class), bộ chọn định danh (#id) và nắm vững thứ tự ưu tiên của bộ chọn."
  ],
  "sections": [
    {
      "id": "html-intro-structure",
      "topicId": "tin-chuyen-de-12f-web",
      "title": "1. Giới thiệu ngôn ngữ HTML & Cấu trúc trang web",
      "icon": "Code",
      "tag": "1. Khái niệm & Cấu trúc",
      "summary": "Khái niệm phần tử, thẻ HTML (thẻ mở, thẻ đóng), thuộc tính và cấu trúc chuẩn của một tệp HTML (<html>, <head>, <title>, <meta>, <body>).",
      "keyTerms": [
        "HTML",
        "HyperText Markup Language",
        "Phần tử (Element)",
        "Thẻ mở & thẻ đóng",
        "Thuộc tính (Attribute)",
        "head",
        "body",
        "title",
        "meta",
        "doctype"
      ],
      "content": [
        {
          "heading": "1.1. Khái niệm ngôn ngữ đánh dấu siêu văn bản HTML",
          "text": "HTML (viết tắt của HyperText Markup Language) là ngôn ngữ đánh dấu siêu văn bản được sử dụng phổ biến nhất để thiết kế và xây dựng cấu trúc của các trang web. Phần tử HTML là các khối xây dựng cơ bản, định nghĩa các thành phần trên trang như: đoạn văn, tiêu đề, bảng biểu, hình ảnh, âm thanh và các liên kết."
        },
        {
          "heading": "1.2. Cấu trúc tổng thể của một tài liệu HTML",
          "text": "Toàn bộ nội dung của trang web được bao bọc bên trong cặp thẻ <html> và </html>. Cấu trúc chuẩn gồm hai phần chính: Phần đầu (<head>) và Phần thân (<body>).",
          "code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"UTF-8\">\n    <title>Tiêu đề hiển thị trên thanh trình duyệt</title>\n  </head>\n  <body>\n    <!-- Nội dung hiển thị trên trang web đặt tại đây -->\n  </body>\n</html>"
        },
        {
          "heading": "Các thành phần cốt lõi trong tài liệu HTML",
          "bulletPoints": [
            {
              "label": "Khai báo <!DOCTYPE html>",
              "desc": "Dòng đầu tiên của tệp tin, giúp trình duyệt nhận biết phiên bản chuẩn HTML5 đang được sử dụng."
            },
            {
              "label": "Phần đầu (<head>...</head>)",
              "desc": "Chứa siêu dữ liệu (metadata), bảng mã ký tự UTF-8, tiêu đề trang (<title>) và các liên kết tới tệp định kiểu CSS hoặc script bên ngoài. Nội dung trong <head> không hiển thị trực tiếp trong vùng nội dung trình duyệt."
            },
            {
              "label": "Phần thân (<body>...</body>)",
              "desc": "Chứa toàn bộ nội dung mà người dùng nhìn thấy và tương tác: văn bản, hình ảnh, liên kết, bảng, biểu mẫu."
            }
          ]
        }
      ]
    },
    {
      "id": "html-text-formatting-links",
      "topicId": "tin-chuyen-de-12f-web",
      "title": "2. Định dạng văn bản & Siêu liên kết (Hyperlink)",
      "icon": "FileText",
      "tag": "2. Văn bản & Liên kết",
      "summary": "Tổ chức đoạn văn (<p>), 6 cấp tiêu đề mục (<h1>-<h6>), các thẻ nhấn mạnh nội dung (<strong>, <em>, <mark>) và tạo siêu liên kết (<a>).",
      "keyTerms": [
        "Đoạn văn <p>",
        "Tiêu đề <h1> đến <h6>",
        "<strong> in đậm",
        "<em> in nghiêng",
        "<mark> tô sáng",
        "Siêu liên kết <a>",
        "Thuộc tính href",
        "Đường dẫn tuyệt đối",
        "Đường dẫn tương đối"
      ],
      "content": [
        {
          "heading": "2.1. Tổ chức đoạn văn bản và tiêu đề mục",
          "text": "Việc tổ chức bố cục văn bản rõ ràng giúp người đọc dễ tiếp thu thông tin. HTML cung cấp cặp thẻ <p>...</p> để tạo đoạn văn riêng biệt và 6 cấp độ tiêu đề từ <h1> (lớn nhất, quan trọng nhất) giảm dần tới <h6> (nhỏ nhất). Mặc định các tiêu đề đều được trình duyệt in đậm."
        },
        {
          "heading": "2.2. Làm nổi bật nội dung văn bản",
          "bulletPoints": [
            {
              "label": "Thẻ <strong>...</strong>",
              "desc": "In đậm nội dung, dùng để nhấn mạnh tầm quan trọng của từ khóa hoặc câu."
            },
            {
              "label": "Thẻ <em>...</em>",
              "desc": "In nghiêng nội dung, dùng để nhấn mạnh danh từ riêng, thuật ngữ hoặc lời thoại."
            },
            {
              "label": "Thẻ <mark>...</mark>",
              "desc": "Tô màu nền vàng cho nội dung được bao quanh, làm nổi bật điểm cần lưu ý như bút nhớ dòng."
            }
          ]
        },
        {
          "heading": "2.3. Tạo siêu liên kết web (<a>)",
          "text": "Phần tử <a> sử dụng thuộc tính href để chỉ định đích đến của liên kết:",
          "code": "<a href=\"https://www.w3schools.com\">Truy cập trang W3Schools</a>\n<a href=\"gioithieu.html\">Trang Giới thiệu (đường dẫn tương đối)</a>",
          "bulletPoints": [
            {
              "label": "Đường dẫn tuyệt đối",
              "desc": "Chứa đầy đủ giao thức (http/https), tên miền và đường dẫn tới máy chủ trên Internet (Ví dụ: https://moet.gov.vn/tintuc)."
            },
            {
              "label": "Đường dẫn tương đối",
              "desc": "Chỉ định vị trí tương đối so với tệp hiện tại trong thư mục dự án, không cần giao thức hay tên miền (Ví dụ: ./images/anh1.jpg)."
            }
          ]
        }
      ]
    },
    {
      "id": "html-lists-and-tables",
      "topicId": "tin-chuyen-de-12f-web",
      "title": "3. Trình bày danh sách & Bảng biểu (List & Table)",
      "icon": "ListOrdered",
      "tag": "3. Danh sách & Bảng",
      "summary": "Tạo danh sách có thứ tự (<ol>) và không thứ tự (<ul>), cấu trúc bảng biểu (<table>, <tr>, <td>, <th>) cùng các thuộc tính căn chỉnh.",
      "keyTerms": [
        "Danh sách có thứ tự <ol>",
        "Danh sách không thứ tự <ul>",
        "Mục danh sách <li>",
        "Thuộc tính type, start",
        "Bảng <table>",
        "Hàng bảng <tr>",
        "Ô dữ liệu <td>",
        "Ô tiêu đề <th>",
        "colspan & rowspan"
      ],
      "content": [
        {
          "heading": "3.1. Danh sách có thứ tự (<ol>) và không có thứ tự (<ul>)",
          "text": "Mỗi mục trong danh sách được đặt trong cặp thẻ <li>...</li>:",
          "bulletPoints": [
            {
              "label": "Danh sách xác định thứ tự (<ol>)",
              "desc": "Được đánh số tự động (1, 2, 3...) hoặc chữ cái (A, B, C... qua thuộc tính type='A'). Thuộc tính start cho phép bắt đầu từ số tùy chọn."
            },
            {
              "label": "Danh sách không xác định thứ tự (<ul>)",
              "desc": "Các mục được biểu thị bằng dấu đầu dòng (mặc định là dấu chấm tròn disc, hoặc circle, square)."
            }
          ]
        },
        {
          "heading": "3.2. Cấu trúc tạo bảng biểu trong HTML",
          "text": "Bảng được định nghĩa bởi thẻ <table>, gồm nhiều hàng (<tr>). Trong mỗi hàng gồm ô tiêu đề (<th> - tự động in đậm và căn giữa) và ô dữ liệu (<td>):",
          "code": "<table border=\"1\">\n  <tr>\n    <th>STT</th>\n    <th>Họ và tên</th>\n    <th>Điểm</th>\n  </tr>\n  <tr>\n    <td>1</td>\n    <td>Nguyễn Văn A</td>\n    <td>9.5</td>\n  </tr>\n</table>",
          "bulletPoints": [
            {
              "label": "colspan=\"n\"",
              "desc": "Hợp nhất n cột liền kề thành một ô duy nhất."
            },
            {
              "label": "rowspan=\"n\"",
              "desc": "Hợp nhất n hàng liền kề theo chiều dọc thành một ô duy nhất."
            }
          ]
        }
      ]
    },
    {
      "id": "html-multimedia-and-forms",
      "topicId": "tin-chuyen-de-12f-web",
      "title": "4. Đa phương tiện & Biểu mẫu tương tác (Media & Form)",
      "icon": "Layout",
      "tag": "4. Media & Biểu mẫu",
      "summary": "Chèn hình ảnh (<img>), âm thanh (<audio>), video (<video>), khung nội tuyến (<iframe>) và thiết kế biểu mẫu (<form>, <input>, submit).",
      "keyTerms": [
        "Thẻ ảnh <img>",
        "Thuộc tính src, alt",
        "Thẻ âm thanh <audio>",
        "Thẻ video <video>",
        "Khung nội tuyến <iframe>",
        "Biểu mẫu <form>",
        "Phương thức GET / POST",
        "Phần tử <input>",
        "type=text, checkbox, radio, submit"
      ],
      "content": [
        {
          "heading": "4.1. Nhúng dữ liệu đa phương tiện",
          "bulletPoints": [
            {
              "label": "Hình ảnh (<img>)",
              "desc": "Thẻ đơn (không có thẻ đóng). Thuộc tính src chỉ định đường dẫn ảnh, alt cung cấp văn bản thay thế khi ảnh lỗi tải, width và height xác định kích thước."
            },
            {
              "label": "Âm thanh (<audio>) & Video (<video>)",
              "desc": "Dùng để phát tệp media trực tiếp trên trình duyệt. Thuộc tính controls kích hoạt thanh điều khiển phát/dừng/âm lượng."
            },
            {
              "label": "Khung nội tuyến (<iframe>)",
              "desc": "Cho phép nhúng một trang web khác hoặc video (YouTube, Google Maps) trực tiếp vào khung hiển thị trên trang hiện tại."
            }
          ]
        },
        {
          "heading": "4.2. Xây dựng biểu mẫu tương tác (<form>)",
          "text": "Biểu mẫu được dùng để thu thập thông tin người dùng gửi về máy chủ máy chủ xử lý:",
          "code": "<form action=\"/submit\" method=\"POST\">\n  <label for=\"username\">Tên đăng nhập:</label>\n  <input type=\"text\" id=\"username\" name=\"username\">\n  <input type=\"submit\" value=\"Gửi dữ liệu\">\n</form>",
          "bulletPoints": [
            {
              "label": "Phương thức GET",
              "desc": "Dữ liệu được đính kèm trực tiếp lên thanh URL. Thường dùng khi tìm kiếm, bị giới hạn dung lượng và không an toàn cho mật khẩu."
            },
            {
              "label": "Phương thức POST",
              "desc": "Dữ liệu được gửi ngầm trong phần thân (body) của yêu cầu HTTP. Không giới hạn dung lượng và bảo mật tốt hơn đối với dữ liệu nhạy cảm."
            },
            {
              "label": "Các kiểu <input>",
              "desc": "type='text' (nhập chữ ngắn), 'password' (mật khẩu che dấu), 'checkbox' (hộp chọn nhiều), 'radio' (chọn 1 trong nhóm có cùng name), 'submit' (nút gửi form)."
            }
          ]
        }
      ]
    },
    {
      "id": "css-styling-selectors",
      "topicId": "tin-chuyen-de-12f-web",
      "title": "5. Định kiểu giao diện với CSS & Các bộ chọn (Selectors)",
      "icon": "Palette",
      "tag": "5. CSS & Bộ chọn",
      "summary": "Cú pháp CSS (Selector { property: value }), các bộ chọn Element, Class (.class), ID (#id), mô hình hộp (Box model: margin, padding, border) và thứ tự ưu tiên.",
      "keyTerms": [
        "CSS",
        "Cascading Style Sheets",
        "Quy tắc CSS",
        "Bộ chọn phần tử (tag)",
        "Bộ chọn lớp (.class)",
        "Bộ chọn định danh (#id)",
        "Mức độ ưu tiên CSS",
        "Mô hình hộp (Box Model)",
        "margin, padding, border"
      ],
      "content": [
        {
          "heading": "5.1. Giới thiệu CSS và vai trò",
          "text": "CSS (viết tắt của Cascading Style Sheets) là ngôn ngữ định kiểu dùng để kiểm soát cách hiển thị của các phần tử HTML trên màn hình (màu sắc, phông chữ, khoảng cách, bố cục). CSS giúp tách biệt hoàn toàn nội dung (HTML) và hình thức trình bày (CSS), giúp mã nguồn trang web gọn gàng và dễ bảo trì."
        },
        {
          "heading": "5.2. Các loại bộ chọn (Selectors) trong CSS",
          "bulletPoints": [
            {
              "label": "Bộ chọn phần tử (Element selector)",
              "desc": "Áp dụng định dạng cho tất cả các phần tử cùng tên thẻ trong trang (Ví dụ: p { color: blue; } áp dụng cho mọi đoạn văn)."
            },
            {
              "label": "Bộ chọn lớp (Class selector - .ten_lop)",
              "desc": "Áp dụng cho mọi phần tử có thuộc tính class='ten_lop'. Có thể tái sử dụng nhiều lần trên một trang hoặc nhiều trang khác nhau."
            },
            {
              "label": "Bộ chọn định danh (ID selector - #ten_id)",
              "desc": "Áp dụng riêng biệt cho duy nhất một phần tử có id='ten_id' trên trang HTML. Mức độ ưu tiên cao hơn class và element."
            }
          ]
        },
        {
          "heading": "5.3. Mức độ ưu tiên của bộ chọn CSS",
          "text": "Khi có nhiều quy tắc định dạng áp dụng lên cùng một phần tử, trình duyệt ưu tiên theo thứ tự: Inline style (viết trực tiếp trong thuộc tính style của thẻ) > Bộ chọn định danh (#id) > Bộ chọn lớp (.class) > Bộ chọn phần tử (tag)."
        }
      ]
    }
  ]
},
};

// Aliases cho các chủ đề trắc nghiệm và câu hỏi Đúng / Sai
TOPIC_THEORY_MAP["tin-ai-dung-sai"] = TOPIC_THEORY_MAP["tin-ai-tri-tue-nhan-tao"];
TOPIC_THEORY_MAP["tin-mang-dung-sai"] = TOPIC_THEORY_MAP["tin-thiet-bi-giao-thuc-mang"];
TOPIC_THEORY_MAP["tin-giao-thuc-mang"] = TOPIC_THEORY_MAP["tin-thiet-bi-giao-thuc-mang"];
TOPIC_THEORY_MAP["tin-chia-se-tai-nguyen-mang"] = TOPIC_THEORY_MAP["tin-thiet-bi-giao-thuc-mang"];
TOPIC_THEORY_MAP["tin-python-dung-sai"] = TOPIC_THEORY_MAP["tin-lap-trinh-python"];
TOPIC_THEORY_MAP["tin-html-dung-sai"] = TOPIC_THEORY_MAP["tin-chuyen-de-12f-web"];
TOPIC_THEORY_MAP["tin-12f"] = TOPIC_THEORY_MAP["tin-chuyen-de-12f-web"];
TOPIC_THEORY_MAP["tin-tao-trang-web-html-css"] = TOPIC_THEORY_MAP["tin-chuyen-de-12f-web"];
TOPIC_THEORY_MAP["tin-html-cau-truc-dinh-dang"] = TOPIC_THEORY_MAP["tin-chuyen-de-12f-web"];

