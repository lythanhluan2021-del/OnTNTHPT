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
    "chapterName": "Chủ đề F: Tạo trang web (Chuyên đề Tin học 12)",
    "docTitle": "Chuyên đề 12F. Tạo trang Web.docx (Biên soạn: Thầy Lý Thành Luân)",
    "objectives": [
      "Hiểu và giải thích được cấu trúc của một trang web dưới dạng HTML.",
      "Sử dụng được các thẻ HTML để trình bày trang web:",
      "+ Định dạng văn bản, phông chữ, tạo liên kết, danh sách.",
      "+ Đưa các tệp dữ liệu đa phương tiện vào trang web (Ví dụ: ảnh, âm thanh, video).",
      "+ Tạo bảng, khung (frame).",
      "+ Tạo biểu mẫu.",
      "Hiểu và sử dụng được một số thuộc tính cơ bản của CSS: màu sắc, phông chữ, nền, đường viền, kích cỡ,...",
      "Sử dụng được các yếu tố của vùng chọn (selector) như: class, id, tag,...",
      "Sử dụng được CSS làm trang web đẹp, đa dạng và sinh động hơn."
    ],
    "sections": [
      {
        "id": "12f-sec1-html-intro",
        "topicId": "tin-chuyen-de-12f-web",
        "title": "1. Làm quen với ngôn ngữ đánh dấu siêu văn bản",
        "icon": "Code",
        "tag": "1. Khái niệm & Cấu trúc HTML",
        "summary": "1.1. Giới thiệu ngôn ngữ đánh dấu siêu văn bản HTML & 1.2. Cấu trúc của một văn bản HTML",
        "keyTerms": [
          "HTML",
          "Phần tử (element)",
          "Thẻ mở",
          "Thẻ đóng",
          "<html>",
          "<head>",
          "<title>",
          "<meta>",
          "<body>"
        ],
        "content": [
          {
            "heading": "1. Làm quen với ngôn ngữ đánh dấu siêu văn bản"
          },
          {
            "heading": "1.1. Giới thiệu ngôn ngữ đánh dấu siêu văn bản HTML",
            "text": "Khái niệm: phần tử là các đối tượng được HTML định nghĩa cho các thành phần của trang web như: tiêu đề mục, đoạn văn, bản biểu, hình ảnh, âm thanh và các siêu liên kết,…",
            "image": "/images/theory_12f_rId7_image1.png",
            "imageCaption": "Cấu trúc một phần tử HTML: thẻ mở, nội dung phần tử, và thẻ đóng"
          },
          {
            "heading": "1.2. Cấu trúc của một văn bản HTML",
            "text": "Nội dung và cấu trúc: được viết trong cặp thẻ mở <html> và thẻ đóng </html>",
            "image": "/images/theory_12f_rId8_image2.png",
            "imageCaption": "Cấu trúc tổng thể của một văn bản HTML"
          },
          {
            "heading": "* Các thành phần của trang web:",
            "bulletPoints": [
              {
                "label": "Phần đầu (head)",
                "desc": "- Được viết trong cặp thẻ mở <head> và thẻ đóng </head>.\n- Tiêu đề được viết trong cặp thẻ mở <title> và thẻ đóng </title> và sẽ được hiển thị trên tiêu đề của cửa sổ trình duyệt web.\n- Phần tử meta khai báo thông tin liên quan đến bảng mã kí tự, từ khóa tìm kiếm, thông tin tác giả."
              },
              {
                "label": "Phần thân (body)",
                "desc": "Được viết trong cặp thẻ mở <body> và thẻ đóng </body> sẽ được hiển thị trên tiêu đề của cửa sổ trình duyệt web."
              }
            ]
          }
        ]
      },
      {
        "id": "12f-sec2-formatting-links",
        "topicId": "tin-chuyen-de-12f-web",
        "title": "2. Định dạng văn bản và tạo siêu liên kết",
        "icon": "FileText",
        "tag": "2. Đoạn văn, Tiêu đề, Định dạng & Liên kết",
        "summary": "2.1. Tổ chức đoạn văn, 2.2. Tiêu đề mục (h1-h6), 2.3. Làm nổi bật (strong, em, mark), 2.4. Siêu liên kết (<a>, href, URL)",
        "keyTerms": [
          "<p>",
          "<h1>-<h6>",
          "<strong>",
          "<em>",
          "<mark>",
          "<a>",
          "href",
          "URL",
          "Giao thức",
          "Tên miền",
          "Đường dẫn"
        ],
        "content": [
          {
            "heading": "2. Định dạng văn bản và tạo siêu liên kết"
          },
          {
            "heading": "2.1. Tổ chức các đoạn văn bản trong trang web",
            "text": "- Vai trò: Việc tổ chức các đoạn văn bản trong trang web làm các ý được phân tách rõ ràng, giúp văn bản dễ hiểu, dễ đọc hơn đối với người dùng.\n- Cú pháp tạo đoạn văn bản: <p>Văn bản</p>",
            "code": "<p>Văn bản</p>"
          },
          {
            "heading": "2.2. Tạo tiêu đề mục",
            "text": "- Các cấp độ tiêu đề mục: HTML hỗ trợ khai báo sáu tiêu đề mục được phân cấp, định nghĩa bởi các phần tử h1, h2, h3, h4, h5 và h6 tương ứng (h là viết tắt của heading và các chữ số cho biết cấp của tiêu đề mục).\n- Cú pháp khai báo các phần tử tạo tiêu đề mục:\n<Cấp của tiêu đề mục>Tiêu đề mục</Cấp của tiêu đề mục>\nTrong đó: Cấp của tiêu đề mục là một trong các phần tử h1, h2, h3, h4, h5, h6.\n- Hiển thị tiêu đề mục trên trình duyệt web:\n+ Kiểu chữ in đậm.\n+ Cỡ chữ khác nhau: Phần tử h1 tạo tiêu đề mục có cỡ chữ lớn nhất, cỡ chữ sẽ giảm dần theo các cấp từ h2 đến h6.",
            "code": "<h1>Tiêu đề cấp 1 lớn nhất</h1>\n<h2>Tiêu đề cấp 2</h2>\n<h3>Tiêu đề cấp 3</h3>\n<h4>Tiêu đề cấp 4</h4>\n<h5>Tiêu đề cấp 5</h5>\n<h6>Tiêu đề cấp 6 nhỏ nhất</h6>"
          },
          {
            "heading": "2.3. Làm nổi bật nội dung văn bản",
            "text": "- Ý nghĩa: Việc làm nổi bật nội dung văn bản là cần thiết trong quá trình soạn thảo nội dung cho trang web vì không chỉ làm nổi bật nội dung mà còn giúp người soạn thảo nội dung trang web thể hiện được mục đích của tác giả.",
            "bulletPoints": [
              {
                "label": "Phần tử <strong>",
                "desc": "Cú pháp: <strong> Nội dung </strong>\nMục đích sử dụng: In đậm Nội dung, thường dùng để nhấn mạnh các nội dung quan trọng trong văn bản.",
                "code": "<strong>Nội dung</strong>"
              },
              {
                "label": "Phần tử <em>",
                "desc": "Cú pháp: <em> Nội dung </em>\nMục đích sử dụng: In nghiêng Nội dung, thường dùng để nhấn mạnh các danh từ riêng hay thuật ngữ trong văn bản.",
                "code": "<em>Nội dung</em>"
              },
              {
                "label": "Phần tử <mark>",
                "desc": "Cú pháp: <mark> Nội dung </mark>\nMục đích sử dụng: Tô màu vàng cho nền của Nội dung, thường dùng để làm nổi bật các nội dung cần chú ý trong văn bản.",
                "code": "<mark>Nội dung</mark>"
              }
            ]
          },
          {
            "heading": "2.4. Tạo siêu liên kết",
            "text": "- HTML định nghĩa phần tử a để tạo các siêu liên kết.\n- Cú pháp khai báo phần tử a:\n<a href=\"URL\">Liên kết web</a>\nTrong đó:\n+ Thuộc tính href xác định địa chỉ của tài nguyên web trên Internet.\n+ URL (Uniform Resource Locator) có cấu trúc cơ bản như sau:\nGiao thức://Tên miền/Đường dẫn\n• Giao thức thường là http hoặc https.\n• Tên miền là địa chỉ máy chủ chứa tài nguyên web muốn liên kết, ví dụ: https://www.w3schools.com\n• Đường dẫn thường là sự kết hợp giữa tên các thư mục và tên tệp để xác định vị trí cụ thể của tài nguyên web muốn liên kết, ví dụ: /html/default.asp.\n+ Liên kết web thường là dãy kí tự được hiển thị trên trình duyệt web cho phép người dùng nháy chuột vào để đến tài nguyên liên kết.",
            "code": "<a href=\"https://www.w3schools.com/html/default.asp\">Liên kết web</a>"
          }
        ]
      },
      {
        "id": "12f-sec3-lists-tables",
        "topicId": "tin-chuyen-de-12f-web",
        "title": "3. Trình bày nội dung theo dạng danh sách, bảng biểu",
        "icon": "Layers",
        "tag": "3. Danh sách & Bảng biểu",
        "summary": "3.1. Tạo danh sách (<ol>, thuộc tính start, <ul>) & 3.2. Tạo bảng (<table>, <tr>, <td>)",
        "keyTerms": [
          "<ol>",
          "start",
          "<ul>",
          "<li>",
          "<table>",
          "<tr>",
          "<td>",
          "Hàng (tr)",
          "Cột (td)"
        ],
        "content": [
          {
            "heading": "3. Trình bày nội dung theo dạng danh sách, bảng biểu"
          },
          {
            "heading": "3.1. Tạo danh sách",
            "text": "1. Tạo danh sách\n- Cú pháp tạo danh sách xác định thứ tự:\n<ol>\n<li> Nội dung 1 </li>\n….. \n<li> Nội dung 2 </li>\n</ol>\n\n- Lưu ý:\n+ Có thể xác định thứ tự bắt đầu của danh sách bằng cách gán một số nguyên khác cho thuộc tính start của khai báo phần tử ol.",
            "image": "/images/theory_12f_rId10_image3.png",
            "imageCaption": "Ví dụ sử dụng thuộc tính start trong danh sách xác định thứ tự <ol start=\"...\">",
            "code": "<ol start=\"5\">\n  <li>Nội dung 1</li>\n  <li>Nội dung 2</li>\n</ol>"
          },
          {
            "text": "- Cú pháp tạo danh sách không xác định thứ tự:\n<ul>\n<li> Nội dung 1 </li>\n….. \n<li> Nội dung 2 </li>\n</ul>",
            "code": "<ul>\n  <li>Nội dung 1</li>\n  <li>Nội dung 2</li>\n</ul>"
          },
          {
            "heading": "3.2. Tạo bảng",
            "text": "- Html định nghĩa phần tử table để tạo bảng. Bảng gồm nhiều ô dữ liệu được tạo bằng các hàng và cột.\n- Cú pháp khai báo các phần tử tạo bảng:\n<table>\n<tr>\n<td> Dữ liệu </td>\n<td> Dữ liệu </td>\n</tr>\n</table>\nTrong đó:\n+ Hàng được khai báo bằng phần tử tr\n+ Cột được khai báo bằng phần tử td\n- Dữ liệu trong các ô thường là văn bản, hình ảnh, siêu liên kết,… Dữ liệu của bảng cũng có thể gồm các bảng khác.",
            "code": "<table>\n  <tr>\n    <td>Dữ liệu ô 1 hàng 1</td>\n    <td>Dữ liệu ô 2 hàng 1</td>\n  </tr>\n  <tr>\n    <td>Dữ liệu ô 1 hàng 2</td>\n    <td>Dữ liệu ô 2 hàng 2</td>\n  </tr>\n</table>"
          }
        ]
      },
      {
        "id": "12f-sec4-multimedia-frames",
        "topicId": "tin-chuyen-de-12f-web",
        "title": "4. Chèn hình ảnh, âm thanh, video và sử dụng khung",
        "icon": "Compass",
        "tag": "4. Hình ảnh, Âm thanh, Video & Khung",
        "summary": "4.1. Chèn ảnh (<img>), 4.2. Chèn âm thanh (<audio>), 4.3. Chèn video (<video>), 4.4. Sử dụng khung (<iframe>)",
        "keyTerms": [
          "<img>",
          "src",
          "alt",
          "width",
          "height",
          "<audio>",
          "controls",
          "<video>",
          "<iframe>"
        ],
        "content": [
          {
            "heading": "4. Chèn hình ảnh, âm thanh, video và sử dụng khung"
          },
          {
            "heading": "4.1. Chèn hình ảnh",
            "text": "1. Chèn hình ảnh.\n* Cú pháp:\n<img src = “tên tệp ảnh” alt=”Nội dung” width=”chiều rộng” height=”chiều cao”>\n- Tên tệp ảnh có thể bao gồm cả đường dẫn\n- Theo mặc định giá trị chiều rộng, chiều cao theo đơn vị pixel, ảnh thường ở dạng JPG, PNG, GIF. Ảnh sẽ hiển thị theo kích thước ảnh gốc nếu không khai báo thuộc tính width, height.\nVí dụ:",
            "image": "/images/theory_12f_rId11_image4.png",
            "imageCaption": "Ví dụ minh họa cú pháp khai báo thẻ chèn hình ảnh <img>",
            "code": "<img src=\"ten_tep_anh.jpg\" alt=\"Mô tả ảnh\" width=\"300\" height=\"200\">"
          },
          {
            "heading": "4.2. Chèn âm thanh",
            "text": "* Cú pháp:\n<audio src =”tên tệp âm thanh” controls> </audio>\nVí dụ: <audio src = \"nguoi thay.mp3\" controls></audio>",
            "code": "<audio src=\"nguoi thay.mp3\" controls></audio>"
          },
          {
            "heading": "4.3. Chèn video",
            "text": "* Cú pháp:\n<video src =”tên tệp video” controls> </video>\nVí dụ:",
            "image": "/images/theory_12f_rId12_image5.png",
            "imageCaption": "Ví dụ minh họa cú pháp chèn video <video src=\"...\" controls>",
            "code": "<video src=\"ten_tep_video.mp4\" controls></video>"
          },
          {
            "text": "Lưu ý: Nếu tệp ảnh, âm thanh, video lưu trữ cùng thư mục với văn bản HTML thì thuộc tính src chỉ cần tên tệp mà không bao gồm đường dẫn."
          },
          {
            "heading": "4.4. Sử dụng khung",
            "text": "* Cú pháp:\n<iframe src=“url” width= “chiều rộng” height= “chiều cao”> </iframe>\nurl: là đường dẫn đến web cần nhúng.\nVí dụ: <iframe src=\"https://giaoduc.net.vn/\" width=\"300\" height=\"300\"> </iframe>",
            "code": "<iframe src=\"https://giaoduc.net.vn/\" width=\"300\" height=\"300\"> </iframe>"
          }
        ]
      },
      {
        "id": "12f-sec5-forms",
        "topicId": "tin-chuyen-de-12f-web",
        "title": "5. Tạo biểu mẫu",
        "icon": "Sparkles",
        "tag": "5. Biểu mẫu & Điều khiển nhập dữ liệu",
        "summary": "5.1. Cấu trúc <form action method>, 5.2.1. Nhập ký tự <input type=text>, 5.2.2. Bảng các phần tử biểu mẫu",
        "keyTerms": [
          "<form>",
          "action",
          "method",
          "GET",
          "POST",
          "<input>",
          "type",
          "name",
          "value",
          "<textarea>",
          "<label>",
          "radio",
          "checkbox",
          "password",
          "<select>",
          "<button>"
        ],
        "content": [
          {
            "heading": "5. Tạo biểu mẫu"
          },
          {
            "heading": "5.1. Nhập dữ liệu thông qua biểu mẫu",
            "text": "Trong đó:\n- Thuộc tính action xác định tài nguyên web sẽ tiếp nhận và xử lý dữ liệu mà người dùng vừa gởi đến máy chủ. Tài nguyên web thường là các chương trình viết bằng các ngôn ngữ lập trình như: Java, , PHP python, ...\n- Thuộc tính method xác định phương thức gởi: GET: hạn chế dung lượng, POST: không hạn chế dung lượng",
            "code": "<form action=\"url\" method=\"GET/POST\">\n  Các điều khiển nhập dữ liệu\n</form>"
          },
          {
            "heading": "5.2. Một số điều khiển hỗ trợ nhập dữ liệu thông dụng và nút lệnh"
          },
          {
            "heading": "5.2.1. Nhập ký tự",
            "text": "Trong đó:\n- Tên_điều_khiển được gán cho thuộc tính name. Thuộc tính name không phải là thuộc tính bắt buộc khai báo, nhưng tất cả các điều khiển thường được đặt tên để thuận lợi cho việc xử lí dữ liệu gửi từ biểu mẫu về máy chủ web.\n- Thuộc tính value nếu được khai báo thì Giá trị được gán là giá trị mặc định của ô text khi hiển thị trên màn hình trình duyệt web.",
            "code": "<input type=\"text\" name=\"Tên_điều_khiển\" value=\"Giá trị\">"
          },
          {
            "heading": "5.2.2. Một số phần tử của biểu mẫu",
            "bulletPoints": [
              {
                "label": "<input>",
                "desc": "Mục đích: Tạo một trường nhập dữ liệu văn bản (ô text).\nLưu ý: Đảm bảo sử dụng thuộc tính \"type\" phù hợp với dữ liệu bạn muốn nhập vào."
              },
              {
                "label": "<textarea>",
                "desc": "Mục đích: Tạo một ô văn bản nhiều dòng.\nLưu ý: Sử dụng rows và cols để điều chỉnh kích thước ô văn bản."
              },
              {
                "label": "<label>",
                "desc": "Mục đích: Nhãn liên kết với một trường nhập liệu.\nLưu ý: Sử dụng \"for\" để liên kết với mã của trường nhập liệu tương ứng."
              },
              {
                "label": "<input> (radio)",
                "desc": "Mục đích: Tạo một nút/ô chọn (radio).\nLưu ý: Sử dụng cùng một tên \"name\" cho các nút radio để tạo nhóm khi đó chỉ có một nút được chọn."
              },
              {
                "label": "<input> (checkbox)",
                "desc": "Mục đích: Tạo một ô lựa chọn/ hộp kiểm (checkbox).\nLưu ý: Sử dụng \"name\" để nhận biết các ô checkbox khi gửi dữ liệu. Có thể chọn nhiều ô chọn."
              },
              {
                "label": "<input> (password)",
                "desc": "Mục đích: Tạo một trường nhập mật khẩu.\nLưu ý: Sử dụng \"password\" để ẩn kí tự khi người dùng nhập mật khẩu."
              },
              {
                "label": "<select>",
                "desc": "Mục đích: Tạo một hộp chọn.\nLưu ý: Sử dụng thuộc tính “multiple” cho phép người dùng chọn nhiều lựa chọn."
              },
              {
                "label": "<button>",
                "desc": "Mục đích: Tạo một nút.\nLưu ý: Sử dụng “type” để xác định hành động mà nút thực hiện (submit, reset,...)."
              }
            ]
          }
        ]
      },
      {
        "id": "12f-sec6-css-intro",
        "topicId": "tin-chuyen-de-12f-web",
        "title": "6. Làm quen với CSS",
        "icon": "Cpu",
        "tag": "6. CSS & Định dạng cơ bản",
        "summary": "6.1. Bảng định dạng CSS, 6.2. Bộ chọn phần tử & Áp dụng CSS, 6.3. Thuộc tính màu sắc, phông chữ, đường viền",
        "keyTerms": [
          "CSS",
          "Cascading Style Sheets",
          "Bộ chọn (selector)",
          "internal CSS",
          "external CSS",
          "color",
          "background-color",
          "font-family",
          "font-size",
          "border-style",
          "border-color"
        ],
        "content": [
          {
            "heading": "6. Làm quen với CSS"
          },
          {
            "heading": "6.1. Bảng định dạng CSS",
            "text": "Bảng định dạng (Cascading Style Sheets-CSS) là ngôn ngữ được sử dụng để khai báo kiểu trình bày các phần tử HTML trong trang web. CSS thường gồm một số quy tắc định dạng. Mỗi quy tắc định danh như minh họa ở Hình 1 gồm bộ chọn (selector) và các khai báo thuộc tính CSS (css properties) để xác định kiểu trình bày cho phần tử, ví dụ: màu sắc, phông chữ, kích cỡ chữ, đường viền,…..",
            "image": "/images/theory_12f_rId13_image6.png",
            "imageCaption": "Hình 1: Cấu trúc của một quy tắc định dạng CSS gồm bộ chọn và các khai báo thuộc tính"
          },
          {
            "text": "Sử dụng CSS giúp tách biệt khai báo nội dung với định dạng và trang trí trang web. Trình duyệt web áp dụng CSS bằng cách chọn các phần tử trong văn bản HTML khớp với bộ chọn trong CSS và sử dụng các quy tắc định dạng tương ứng để trình bày."
          },
          {
            "heading": "6.2. Khai báo bộ chọn phần tử và áp dụng CSS",
            "text": "Bộ chọn phần tử được khai báo như sau:\nTên_bộ_chọn_phần_tử{thuộc tính 1: giá trị;….;thuộc tính n: giá trị;}\nVí dụ 1: quy tắc định dạng ở Hình 2 xác định kiểu trình bày nội dung của phần tử p trong văn bản HTML có chữ màu đỏ và in đậm",
            "image": "/images/theory_12f_rId14_image7.png",
            "imageCaption": "Hình 2: Quy tắc định dạng phần tử p xác định chữ màu đỏ và in đậm"
          },
          {
            "text": "Có hai cách khai báo để áp dụng CSS trong văn bản HTML được sử dụng phổ biến là: CSS (internal CSS), CSS ngoài (external CSS)\nKhai báo internal CSS thường được sử dụng khi muốn áp dụng CSS trong phạm vi một văn bản HTML. Các quy tắc định dạng internal CSS được viết trong cặp thẻ <style></style> và thường được đặt trong nội dung của phần tử head."
          },
          {
            "heading": "6.3. Một số thuộc tính định dạng CSS"
          },
          {
            "heading": "6.3.1. Thuộc tính định dạng màu sắc",
            "text": "- Cách khai báo:",
            "image": "/images/theory_12f_rId15_image8.png",
            "imageCaption": "Cú pháp khai báo thuộc tính màu chữ: color: giá trị;"
          },
          {
            "text": "Trong đó giá trị màu thường đc xác định bởi tên màu phổ biến như : red, green, blue, yellow, brown, ….\nThuộc tính background-color đạnh dạng màu nền, áp dụng được cho tất cả phần tử, được khai báo như sau:",
            "image": "/images/theory_12f_rId16_image9.png",
            "imageCaption": "Cú pháp khai báo thuộc tính màu nền: background-color: giá trị;"
          },
          {
            "heading": "6.3.2. Thuộc tính định dạng phông chữ",
            "text": "Thuộc tính font-family xác định tên phông chữ áp dụng đc cho tất cả phần tử HTML, đc khai báo như sau :",
            "image": "/images/theory_12f_rId17_image10.png",
            "imageCaption": "Cú pháp khai báo thuộc tính tên phông chữ: font-family: giá trị;"
          },
          {
            "text": "Trong đó tên phông chữ là 1 hoặc nhiều tên phông chữ được ngăn cách nhau bởi dấu “,”. Chú ý nếu tên phông chữ có dấu cách thì phải đc đặt trong cặp dấu ngoặc kép(“”).\nThuộc tính font-size xác định kích cỡ chữ, áp dụng được cho tất cả phần tử, được khai báo như sau:",
            "image": "/images/theory_12f_rId18_image11.png",
            "imageCaption": "Cú pháp khai báo thuộc tính kích cỡ chữ: font-size: giá trị;"
          },
          {
            "heading": "6.3.3. Thuộc tính định dạng đường viền",
            "text": "Thuộc tính border-style xác định kiểu trình bày đường viền của phần tử, được khai báo như sau :",
            "image": "/images/theory_12f_rId19_image12.png",
            "imageCaption": "Cú pháp khai báo thuộc tính kiểu đường viền: border-style: giá trị;"
          },
          {
            "text": "Một số kiểu trình bày thông dụng gồm dotted-đường viền là những dấu chấm liền nhau, solid-là 1 đường đậm liền nét\nThuộc tính border-color xác định màu đường viền của phần tử, được khai báo như sau:",
            "image": "/images/theory_12f_rId20_image13.png",
            "imageCaption": "Cú pháp khai báo thuộc tính màu đường viền: border-color: giá trị;"
          },
          {
            "text": "Lưu ý: Định dạng thuộc tính border-color chỉ được áp dụng khi thuộc tính border-style được khai báo"
          }
        ]
      },
      {
        "id": "12f-sec7-class-id-selectors",
        "topicId": "tin-chuyen-de-12f-web",
        "title": "7. Bộ chọn lớp, bộ chọn định danh",
        "icon": "AlertTriangle",
        "tag": "7. Bộ chọn lớp (.class) & Định danh (#id)",
        "summary": "7.1. Bộ chọn lớp (.Tên_lớp), các thuộc tính cơ bản & 7.2. Bộ chọn định danh (#Tên_định_danh), mức ưu tiên",
        "keyTerms": [
          ".Tên_bộ_chọn_lớp",
          "Bộ chọn lớp",
          "#Tên_định_danh",
          "Bộ chọn định danh",
          "ID selector",
          "Color",
          "Font Size",
          "Background Color",
          "Margin",
          "Padding",
          "Border",
          "Width",
          "Height",
          "Display",
          "Position",
          "Float",
          "Opacity",
          "Mức ưu tiên"
        ],
        "content": [
          {
            "heading": "7. Bộ chọn lớp, bộ chọn định danh"
          },
          {
            "heading": "7.1. Bộ chọn lớp",
            "text": "* Bộ chọn lớp được khai báo như sau:\n.Tên_bộ_chọn_lớp { thuộc tính 1: giá trị;…; thuộc tính n: giá trị;}\n\nTên_bộ_chọn_lớp: Đây là tên của lớp mà bạn muốn áp dụng kiểu CSS. Trong cấu trúc này, dấu chấm (.) đặt trước tên lớp để chỉ định rằng đây là một bộ chọn lớp.\n{...}: Dấu ngoặc nhọn này bao quanh một tập hợp các khối khai báo thuộc tính và giá trị. Nó giúp xác định phạm vi của các quy tắc CSS, chỉ áp dụng cho các phần tử thuộc lớp được định rõ.\nthuộc_tính_1, thuộc_tính_2, ..., thuộc_tính_n: Là các thuộc tính mà bạn muốn áp dụng cho phần tử thuộc lớp. Ví dụ, color, font-size, margin, padding,...\nMột số thuộc tính cơ bản:",
            "code": ".Tên_bộ_chọn_lớp {\n  thuộc tính 1: giá trị;\n  thuộc tính 2: giá trị;\n}"
          },
          {
            "heading": "Một số thuộc tính cơ bản:",
            "bulletPoints": [
              {
                "label": "Color (Màu chữ):",
                "desc": "Khai báo màu chữ bằng tên màu, mã Hex hoặc RGB:",
                "code": "color: red;\ncolor: #00ff00;\ncolor: rgb(255, 0, 0);"
              },
              {
                "label": "Font Size (Kích thước font):",
                "desc": "Khai báo kích cỡ chữ theo pixel, em hoặc từ khóa:",
                "code": "font-size: 16px;\nfont-size: 1.2em;\nfont-size: larger;"
              },
              {
                "label": "Background Color (Màu nền):",
                "desc": "Khai báo màu nền với Hex hoặc RGBA trong suốt:",
                "code": "background-color: #ffffff;\nbackground-color: rgba(255, 0, 0, 0.5);"
              },
              {
                "label": "Margin (Lề ngoài):",
                "desc": "Khai báo lề ngoài của phần tử:",
                "code": "margin: 10px;\nmargin: 5px 10px;\nmargin-top: 20px;"
              },
              {
                "label": "Padding (Lề bên trong):",
                "desc": "Khai báo lề bên trong phần tử:",
                "code": "padding: 10px;\npadding: 5px 10px;\npadding-top: 20px;"
              },
              {
                "label": "Border (Viền):",
                "desc": "Khai báo độ dày, kiểu nét và màu viền:",
                "code": "border: 1px solid #000000;\nborder: 2px dashed #333333;"
              },
              {
                "label": "Width (Chiều rộng):",
                "desc": "Khai báo chiều rộng phần tử:",
                "code": "width: 200px;\nwidth: 50%;"
              },
              {
                "label": "Height (Chiều cao):",
                "desc": "Khai báo chiều cao phần tử:",
                "code": "height: 150px;\nheight: auto;"
              },
              {
                "label": "Display (Kiểu hiển thị):",
                "desc": "Khai báo khối hiển thị block, inline hoặc ẩn none:",
                "code": "display: block;\ndisplay: inline;\ndisplay: none;"
              },
              {
                "label": "Position (Vị trí):",
                "desc": "Khai báo vị trí tương đối, tuyệt đối hoặc cố định:",
                "code": "position: relative;\nposition: absolute;\nposition: fixed;"
              },
              {
                "label": "Float (Đặt phần tử nổi):",
                "desc": "Khai báo trôi nổi sang trái hoặc phải:",
                "code": "float: left;\nfloat: right;"
              },
              {
                "label": "Opacity (Độ trong suốt):",
                "desc": "Khai báo độ trong suốt từ 0 đến 1:",
                "code": "opacity: 0.7;\nopacity: 1; (đối với độ trong suốt đầy đủ)"
              }
            ]
          },
          {
            "text": "giá_trị_1, giá_trị_2, ..., giá_trị_n: Là giá trị tương ứng với mỗi thuộc tính. Ví dụ, nếu bạn muốn đặt màu chữ, bạn có thể sử dụng giá trị như \"blue\", \"red\", \"#FF0000\",...\n\n* Mục đích của bộ chọn lớp\nThường được dùng để khai báo các quy tắc định dạng được áp dụng chung cho nhiều phần tử trong văn bản html thay vì phải viết lặp lại các quy tắc này cho từng phần tử."
          },
          {
            "heading": "7.2. Bộ chọn định danh",
            "text": "Bộ chọn định danh trong CSS (còn được gọi là ID selector) cho phép định dạng (định kiểu) cho một phần tử cụ thể bằng cách sử dụng một định danh duy nhất của phần tử đó. Cú pháp khai báo như sau:\n#Tên_định_danh { thuộc_tính_1: giá_trị_1; ...thuộc_tính_n: giá_trị_n;}\n\nSau khi khai báo trong thẻ <style>, bộ chọn định danh chỉ được áp dụng cho phần tử có id chính xác là tieu_de. Một văn bản HTML chỉ nên có đúng một phần tử có id là tieu_de, nếu không dễ dẫn đến xung đột, làm giảm hiệu quả của css.\n\nBộ chọn định danh có mức ưu tiên cao hơn so với các bộ chọn khác như bộ chọn lớp (class) và bộ chọn phần tử (element). Do đó, các định dạng (định kiểu) quy định bởi bộ chọn định danh sẽ ghi đè định dạng (định kiểu) của các bộ chọn khác.\n\nBộ chọn định danh giúp định dạng một phần tử cụ thể một cách chính xác, song không sử dụng lại cho các phần tử khác được và dễ dẫn đến xung đột.",
            "code": "#tieu_de {\n  color: blue;\n  font-size: 20px;\n}"
          }
        ]
      }
    ]
  },
  "tin-dao-duc-phap-luat-so": {
  "subjectId": "tin-hoc-12",
  "subjectName": "Tin học 12",
  "topicName": "Chuyên đề 11D, 12D: Đạo đức, pháp luật & văn hóa số",
  "chapterName": "Chủ đề 3: Đạo đức, pháp luật & văn hoá số (Tuần 11)",
  "docTitle": "Chuyên đề 11D, 12D - DD, VH, PL TRONG MT SO.docx (Google Drive)",
  "objectives": [
    "Phân tích được một số dạng lừa đảo phổ biến trên mạng và những biện pháp phòng tránh.",
    "Giao tiếp được trên mạng qua email, chat, mạng xã hội... và trong môi trường số một cách văn minh.",
    "Phân tích được ưu và nhược điểm về giao tiếp trong thế giới ảo qua các ví dụ cụ thể.",
    "Phân tích được tính nhân văn trong ứng xử ở một số tình huống tham gia thế giới ảo."
  ],
  "sections": [
    {
      "id": "sec-1-lua-dao-qua-mang",
      "topicId": "tin-dao-duc-phap-luat-so",
      "title": "1. Lừa đảo qua mạng",
      "icon": "AlertTriangle",
      "tag": "1. Các dạng lừa đảo & Phòng tránh",
      "summary": "1.1. Một số dạng lừa đảo, 1.2. Dấu hiệu (Phishing) & lời khuyên, 1.3. Nguyên tắc hạn chế thiệt hại",
      "keyTerms": [
        "Phishing",
        "Lừa đảo qua mạng",
        "Trang web giả",
        "Lấy cắp thông tin cá nhân",
        "Xác minh 2 bước",
        "Mật khẩu"
      ],
      "content": [
        {
          "heading": "1. Lừa đảo qua mạng"
        },
        {
          "heading": "1.1. Một số dạng lừa đảo",
          "bulletPoints": [
            {
              "desc": "Lừa đảo trúng thưởng, tặng quà để lấy tiền phí vận chuyển."
            },
            {
              "desc": "Lừa đảo chiếm tiền đặt cọc hoặc bán hàng giả."
            },
            {
              "desc": "Lừa đảo để lấy cắp thông tin cá nhân."
            }
          ]
        },
        {
          "heading": "1.2. Dấu hiệu lừa đảo và lời khuyên phòng ngừa",
          "text": "- Phishing: lừa đảo để lấy cắp thông tin cá nhân bằng các trang web giả.\n- Một số dấu hiệu: các lỗi chính tả, ngữ pháp; tên miền không khớp; email, tin nhắn từ người lạ; các yêu cầu cung cấp thông tin cá nhân bất thường hoặc các đường link lạ dẫn đến giao diện giả mạo."
        },
        {
          "heading": "1.3. Nguyên tắc để hạn chế thiệt hại",
          "bulletPoints": [
            {
              "desc": "Lập tức thay đổi mật khẩu cho những tài khoản giao tiếp qua mạng bị ảnh hưởng. Cần thiết lập xác minh hai bước cho những tài khoản quan trọng."
            },
            {
              "desc": "Nếu tài khoản bị ảnh hưởng có liên quan đến nhà trường hay một cơ quan, tổ chức, cần thông báo ngay cho quản trị viên hoặc người có trách nhiệm."
            },
            {
              "desc": "Nếu đã lỡ chia sẻ thông tin về thẻ tín dụng, tài khoản cá nhân, hãy báo ngay cho ngân hàng biết."
            },
            {
              "desc": "Nếu đã bị thiệt hại, hãy báo ngay cho cơ quan chức năng để kịp thời điều tra và xử lý."
            }
          ]
        }
      ]
    },
    {
      "id": "sec-2-van-hoa-ung-xu",
      "topicId": "tin-dao-duc-phap-luat-so",
      "title": "2. Văn hóa ứng xử trên mạng",
      "icon": "FileText",
      "tag": "2. Quy tắc nền tảng & Ứng xử",
      "summary": "2.1. Quy tắc nền tảng: Thế giới ảo, cuộc sống thực & 2.2. Các nguyên tắc cốt lõi về văn hóa ứng xử",
      "keyTerms": [
        "Văn hóa ứng xử",
        "Thế giới ảo - Cuộc sống thực",
        "Tôn trọng quyền riêng tư",
        "Văn hóa nhóm",
        "Trách nhiệm xã hội"
      ],
      "content": [
        {
          "heading": "2. Văn hóa ứng xử trên mạng"
        },
        {
          "heading": "2.1. Quy tắc nền tảng: Thế giới ảo, cuộc sống thực",
          "text": "Trên không gian mạng, các tiêu chuẩn về hành xử có đạo đức, có văn hóa, tuân thủ pháp luật cũng như trong cuộc sống thực. Mọi hành vi trên không gian mạng đều có hậu quả thực tế và phải chịu trách nhiệm trước pháp luật.\nTrong cuộc sống thực, hầu hết mọi người đều tuân thủ pháp luật, hành xử lịch sự, có văn hóa. Một số nguyên tắc dưới đây giúp duy trì các giá trị đạo đức và văn hóa khi giao tiếp trong thế giới ảo."
        },
        {
          "heading": "2.2. Một số nguyên tắc về ứng xử trên mạng",
          "bulletPoints": [
            {
              "label": "Đặt mình vào vị trí người khác:",
              "desc": "Trước khi đăng tải hoặc bình luận, hãy suy nghĩ xem người khác sẽ cảm thấy thế nào để tránh gây tổn thương."
            },
            {
              "label": "Rộng lượng với người khác, không gây chiến trên mạng:",
              "desc": "Bình tĩnh, kiềm chế trước các bất đồng quan điểm; không sử dụng từ ngữ xúc phạm hoặc khiêu khích."
            },
            {
              "label": "Tôn trọng “văn hóa nhóm”:",
              "desc": "Mỗi diễn đàn, cộng đồng trực tuyến đều có nội quy riêng; cần tìm hiểu và tuân thủ quy tắc của nhóm."
            },
            {
              "label": "Tôn trọng thời gian và công sức của người khác:",
              "desc": "Không gửi tin nhắn rác, không tag người khác bừa bãi vào các nội dung không liên quan."
            },
            {
              "label": "Tôn trọng quyền riêng tư của người khác:",
              "desc": "Không chia sẻ thông tin, hình ảnh riêng tư của người khác khi chưa được họ đồng ý."
            },
            {
              "label": "Không lợi dụng vị thế của mình để làm việc xấu:",
              "desc": "Không dùng quyền quản trị, sức ảnh hưởng mạng để bắt nạt hoặc trục lợi cá nhân."
            }
          ]
        }
      ]
    },
    {
      "id": "sec-3-uu-diem-giao-tiep-mang",
      "topicId": "tin-dao-duc-phap-luat-so",
      "title": "3. Ưu điểm của giao tiếp trong không gian mạng",
      "icon": "Sparkles",
      "tag": "3. Ưu điểm & Lợi ích",
      "summary": "3.1. Mọi lúc mọi nơi, 3.2. Mở rộng kết nối xã hội, 3.3. Tiết kiệm chi phí, 3.4. Cải thiện kĩ năng giao tiếp",
      "keyTerms": [
        "Mọi lúc mọi nơi",
        "Kết nối xã hội",
        "Tiết kiệm chi phí",
        "Lưu trữ thông tin",
        "Cải thiện kĩ năng"
      ],
      "content": [
        {
          "heading": "3. Ưu điểm của giao tiếp trong không gian mạng",
          "text": "Nhờ các phương tiện kĩ thuật số, phương thức/công cụ giao tiếp trực tuyến đa dạng (email/thư điện tử, tin nhắn, mạng xã hội, phòng họp trực tuyến...), giao tiếp trong không gian mạng đem lại nhiều ưu điểm vượt trội:"
        },
        {
          "heading": "3.1. Thực hiện ở mọi lúc, mọi nơi",
          "text": "Giao tiếp không phụ thuộc vào thời gian và địa điểm cũng như không bị hạn chế về khoảng cách địa lí; hỗ trợ người dùng có thể làm việc và học tập linh hoạt."
        },
        {
          "heading": "3.2. Mở rộng kết nối xã hội và khả năng tương tác",
          "text": "Cho phép một số lượng lớn người tham gia cùng một lúc với các công cụ giao tiếp đa dạng. Những người cùng sở thích, quan điểm có thể dễ dàng tìm thấy nhau, hợp tác và chia sẻ kiến thức dù ở bất kỳ đâu trên thế giới."
        },
        {
          "heading": "3.3. Tiết kiệm thời gian và công sức hoặc chi phí",
          "text": "Không gian mạng mở rộng khả năng thực hiện giao tiếp, tiết kiệm đáng kể thời gian và chi phí đi lại, ăn ở so với gặp mặt trực tiếp; dễ dàng lưu trữ và tra cứu lại thông tin trao đổi sau này."
        },
        {
          "heading": "3.4. Có thể cải thiện kĩ năng giao tiếp",
          "text": "Không gian mạng góp phần xoá bỏ mặc cảm, giảm nhẹ các rào cản như tính nhút nhát, e dè ở bước đầu giao tiếp; hỗ trợ người khuyết tật tham gia trao đổi thông tin bình đẳng."
        }
      ]
    },
    {
      "id": "sec-4-han-che-giao-tiep-mang",
      "topicId": "tin-dao-duc-phap-luat-so",
      "title": "4. Hạn chế của giao tiếp trong không gian mạng",
      "icon": "Cpu",
      "tag": "4. Rủi ro & Hạn chế",
      "summary": "4.1. Thiếu ngôn ngữ hình thể, 4.2. Giảm hiệu quả, 4.3. Nghiện Internet, 4.4. Nguy cơ bảo mật & riêng tư, 4.5. Phụ thuộc công nghệ",
      "keyTerms": [
        "Phi ngôn ngữ",
        "Nghiện Internet",
        "Rò rỉ dữ liệu",
        "Bảo mật thông tin",
        "Bắt nạt trên mạng",
        "Giao tiếp không đồng bộ"
      ],
      "content": [
        {
          "heading": "4. Hạn chế của giao tiếp trong không gian mạng",
          "text": "Bên cạnh những ưu điểm, giao tiếp trong không gian mạng có những hạn chế hoặc gặp phải những vấn đề sau:"
        },
        {
          "heading": "4.1. Thiếu ngôn ngữ hình thể, thiếu tín hiệu cảm xúc",
          "text": "Một số phương thức giao tiếp trên không gian mạng như thư điện tử hay tin nhắn thiếu ngôn ngữ hình thể, thiếu các tín hiệu cảm xúc, thiếu âm điệu của tiếng nói. Điều này có thể xảy ra hiểu lầm vì diễn giải sai ý nghĩa của lời văn. Thiếu tín hiệu phi ngôn ngữ (nét mặt, ngôn ngữ cơ thể và biểu cảm giọng nói) sẽ gây khó khăn trong truyền đạt cảm xúc và dẫn đến hiểu lầm không đáng có. Tín hiệu phi ngôn ngữ không được truyền tải, nhận diện một cách đầy đủ, tiềm ẩn khả năng thiếu trung thực và độ tin cậy. Ví dụ, tội phạm giả mạo đơn vị, tổ chức hoặc cá nhân tin cậy để lừa đảo người dùng."
        },
        {
          "heading": "4.2. Giảm hiệu quả giao tiếp",
          "text": "Giao tiếp trong không gian mạng có thể làm giảm kĩ năng viết, sai chính tả, sai ngữ pháp, sử dụng từ viết tắt tuỳ tiện. Đôi khi giao tiếp thiếu tập trung, bị phân tán, giảm hiệu quả tương tác. Ví dụ, học sinh đang học trực tuyến nhưng bị sao nhãng bởi tin nhắn, email, điện thoại."
        },
        {
          "heading": "4.3. Nghiện Internet",
          "text": "Nghiện Internet/nghiện mạng có thể gây tổn hại tinh thần và vật chất. Thói quen lạm dụng công nghệ tạo ra sự lười biếng. Ví dụ, gửi tin nhắn đến một người ở ngay cùng phòng thay vì đến gần để trò chuyện trực tiếp. Dành quá nhiều thời gian trên không gian mạng để giao lưu dẫn đến ít trải nghiệm cuộc sống thực, ngây ngô trong giao tiếp, khó hoà nhập với cộng đồng. Giao tiếp trong không gian mạng cũng có thể dẫn đến trải nghiệm giao tiếp kém hiệu quả so với giao tiếp trực tiếp."
        },
        {
          "heading": "4.4. Nguy cơ về bảo mật, quyền riêng tư",
          "text": "Giao tiếp trong không gian mạng có thể gặp một số rủi ro về bảo mật và quyền riêng tư: bị lộ hoặc mất thông tin cá nhân, bị lộ mật khẩu, bị tấn công mạng, bị xâm phạm dữ liệu, các thông tin riêng tư và nhạy cảm; bị rình rập, quấy rối, bắt nạt. Việc dùng cùng mật khẩu cho nhiều tài khoản hoặc mật khẩu dễ đoán có thể bị mạo danh, đánh cắp hoặc thay đổi thông tin. Trong không gian mạng, kẻ xấu dễ dàng giấu mặt, tạo các bản sao không đầy đủ của bản thân hoặc giả mạo thông tin, làm người khác khó đánh giá tính chân thật của thông tin và sự thật về người đối diện."
        },
        {
          "heading": "4.5. Phụ thuộc vào phương tiện giao tiếp kĩ thuật số",
          "text": "Giao tiếp trong không gian mạng có thể gặp sự cố mất kết nối mạng và phần mềm không tương thích, gây cản trở giao tiếp, dẫn đến giao tiếp bị trì hoãn, gián đoạn, mất tính tự nhiên. Ví dụ, đang họp trực tuyến hoặc gửi email do kết nối Internet chập chờn nên thông tin không được truyền tải đầy đủ và đúng cách có thể dẫn đến hiểu lầm, chậm trễ trong công việc. Do đó, giao tiếp trong không gian mạng đòi hỏi sự chú ý trong quản lí tài nguyên mạng, quản lí kĩ thuật chặt chẽ để đảm bảo tính an toàn và ổn định của mạng."
        }
      ]
    },
    {
      "id": "sec-5-ung-xu-nhan-van",
      "topicId": "tin-dao-duc-phap-luat-so",
      "title": "5. Ứng xử nhân văn trong không gian mạng",
      "icon": "Compass",
      "tag": "5. Tính nhân văn & Hành động đẹp",
      "summary": "5.1. Đồng cảm & thấu hiểu, 5.2. Ứng xử có văn hóa, 5.3. Lan tỏa việc tốt, 5.4. Phê phán hành vi xấu văn minh",
      "keyTerms": [
        "Tính nhân văn",
        "Đồng cảm",
        "Người tốt việc tốt",
        "Thông tin kiểm chứng",
        "Quyết định 874/QĐ-BTTTT",
        "Bộ quy tắc ứng xử MXH"
      ],
      "content": [
        {
          "heading": "5. Ứng xử nhân văn trong không gian mạng",
          "text": "Ứng xử nhân văn trên không gian mạng nhằm góp phần tạo ra hiệu ứng xã hội tích cực, lan tỏa những giá trị nhân văn. Tính nhân văn và ứng xử nhân văn trong không gian mạng thể hiện qua những khía cạnh sau:"
        },
        {
          "heading": "5.1. Hiểu và đồng cảm khi tham gia không gian mạng",
          "bulletPoints": [
            {
              "desc": "Đồng cảm khi biết tin tức về thiên tai, thảm hoạ gây thiệt hại về tài sản vật chất hay tính mạng con người với đồng bào của mình."
            },
            {
              "desc": "Cảm thông với người khác và hiểu được những khó khăn mà họ gặp phải. Cố gắng đặt mình vào hoàn cảnh của người khác để có thể hiểu được những suy nghĩ, tình cảm, vấn đề của họ. Khi thấu hiểu được người khác, ta sẽ có khả năng giúp đỡ họ hiệu quả hơn."
            }
          ]
        },
        {
          "heading": "5.2. Ứng xử có văn hoá, thể hiện tính nhân văn trên không gian mạng",
          "bulletPoints": [
            {
              "desc": "Không mạo danh, giả làm người khác với bất kì mục đích gì, kể cả là vui đùa, giải trí. Không tiếp tay cho kẻ bắt nạt, quấy rối trên không gian mạng; không tham gia phát tán những nội dung có tính bắt nạt, quấy rối."
            },
            {
              "desc": "Đưa tin phản ánh chân thực và ca ngợi người tốt, việc tốt. Chia sẻ thông tin chính xác và đáng tin cậy, tránh lan truyền thông tin sai lệch hoặc tin đồn. Tránh gửi nội dung thư rác hoặc quảng cáo không liên quan đến nội dung chính của cuộc trò chuyện."
            },
            {
              "desc": "Tôn trọng quyền riêng tư, không phát tán thông tin riêng tư của người khác mà không được sự cho phép của họ; tôn trọng quan điểm và suy nghĩ của mỗi người, không bắt buộc họ phải chấp nhận hoặc chia sẻ quan điểm của mình, cũng như không châm chọc làm người khác tổn thương."
            },
            {
              "desc": "Sử dụng ngôn ngữ đúng mực, không sử dụng ngôn ngữ nhạy cảm, lăng mạ, châm chọc, phỉ báng hoặc phân biệt chủng tộc, giới tính, tôn giáo. Khi trao đổi với người khác trên mạng xã hội, nếu không cùng quan điểm cần trao đổi một cách lịch sự trên cơ sở tôn trọng quan điểm của mỗi cá nhân, không sử dụng từ ngữ khiêu khích, phân biệt chủng tộc, sắc tộc, giới tính hoặc tôn giáo để tấn công cá nhân."
            }
          ]
        },
        {
          "heading": "5.3. Ủng hộ và tham gia việc tốt trên không gian mạng",
          "bulletPoints": [
            {
              "desc": "Ủng hộ, đánh giá cao và ca ngợi những việc làm tích cực, con người tốt, việc làm tốt; vận động mọi người ủng hộ và tham gia trực tiếp hỗ trợ đồng bào bị thiệt hại về tài sản, tính mạng trong thiên tai, thảm hoạ."
            },
            {
              "desc": "Luôn sẵn sàng giúp đỡ, hỗ trợ người khác khi họ gặp khó khăn hoặc cần sự giúp đỡ, kể cả khi đó chỉ là lời động viên, chia sẻ chân thành để xây dựng một cộng đồng trực tuyến mạnh mẽ, cùng nhau vượt qua khó khăn và phát triển."
            },
            {
              "desc": "Không chia sẻ hay truyền tải những thông tin về hoàn cảnh khó khăn mà chưa tìm hiểu rõ ràng; đánh giá chính xác mức độ của thông tin để có giải pháp hỗ trợ phù hợp."
            },
            {
              "desc": "Kêu gọi mọi người chỉ đăng tải thông tin đã được kiểm chứng, không vi phạm pháp luật; lan tỏa những hình ảnh tích cực về các hoạt động tình nguyện, tránh sử dụng từ ngữ kích động, tiêu cực, hỗ trợ những người yếu thế, tôn trọng sự khác biệt để tạo ra một xã hội trực tuyến tích cực."
            }
          ]
        },
        {
          "heading": "5.4. Phê phán và phản đối những việc xấu trên không gian mạng",
          "bulletPoints": [
            {
              "desc": "Bày tỏ sự không đồng tình và phê phán; phản đối việc bắt nạt, quấy rối."
            },
            {
              "desc": "Phát hiện và phê phán các hành vi tiêu cực một cách có văn hóa, đạo đức."
            },
            {
              "desc": "Phê phán các hiện tượng tiêu cực như: lối sống ảo (như sống ảo để câu like, khoe khoang), việc lan truyền thông tin sai lệch, và hiện tượng AI làm mất giá trị thông tin thật."
            },
            {
              "desc": "Phê phán những thông tin không rõ nguồn gốc, chưa được kiểm chứng, vi phạm pháp luật, và sử dụng ngôn từ tục tĩu, kích động."
            }
          ]
        }
      ]
    }
  ]
},
  "tin-huong-nghiep-dich-vu": {
    "subjectId": "tin-hoc-12",
    "subjectName": "Tin học 12",
    "topicName": "Chuyên đề 12G: Giới thiệu nhóm nghề dịch vụ và quản trị",
    "chapterName": "Chủ đề 5: Hướng nghiệp với tin học (Tuần 21 – 23)",
    "docTitle": "Chuyên đề 12G. Giới thiệu nhóm nghề dịch vụ và quản trị.docx",
    "objectives": [
      "Trình bày được thông tin hướng nghiệp nhóm nghề Dịch vụ và Quản trị (Sửa chữa và bảo trì máy tính, Quản trị mạng, Bảo mật hệ thống thông tin, Quản trị và bảo trì hệ thống).",
      "Nêu được những nét sơ lược về công việc chính mà người làm nghề phải thực hiện.",
      "Xác định được yêu cầu thiết yếu về kiến thức và kĩ năng cần có để làm nghề.",
      "Nêu được các ngành học có liên quan ở các bậc học tiếp theo (Đại học, Cao đẳng).",
      "Đánh giá được nhu cầu nhân lực của xã hội trong hiện tại và tương lai gần về nhóm nghề đó.",
      "Tự tìm kiếm và khai thác được thông tin hướng nghiệp qua các chương trình đào tạo, thông báo tuyển dụng nhân lực,... về một vài ngành nghề khác trong lĩnh vực tin học.",
      "Giao lưu được với bạn bè qua các kênh truyền thông số để tham khảo và trao đổi ý kiến về các thông tin trên."
    ],
    "sections": [
      {
        "id": "nghe-sua-chua-bao-tri-may-tinh",
        "topicId": "tin-huong-nghiep-dich-vu",
        "title": "1. Nghề Sửa chữa và bảo trì máy tính (Kĩ thuật viên CNTT)",
        "icon": "Layers",
        "tag": "1. Sửa chữa & bảo trì máy tính",
        "summary": "Công việc của Kĩ thuật viên CNTT (phần cứng, phần mềm, hỗ trợ người dùng), kiến thức kỹ năng thiết yếu, ngành học đào tạo và nhu cầu việc làm.",
        "keyTerms": [
          "Kĩ thuật viên công nghệ thông tin",
          "Phần cứng máy tính",
          "Thiết bị số",
          "Linh kiện",
          "Hệ điều hành",
          "Phần mềm ứng dụng",
          "Bản vá",
          "Khôi phục dữ liệu",
          "Phần mềm độc hại",
          "Mạng LAN",
          "Internet",
          "Kĩ thuật máy tính",
          "Mạng máy tính"
        ],
        "content": [
          {
            "heading": "1.1. Công việc chính mà người làm nghề phải thực hiện",
            "text": "Người sửa chữa và bảo trì máy tính thường được gọi là Kĩ thuật viên công nghệ thông tin. Công việc của họ có thể chia thành ba mảng chính:",
            "bulletPoints": [
              {
                "label": "Làm việc với phần cứng máy tính và thiết bị số",
                "desc": "Tìm hiểu nguyên nhân và khắc phục lỗi phần cứng. Lắp đặt, sửa chữa, thay thế các bộ phận, linh kiện bị hỏng. Bổ sung, nâng cấp, thay thế các bộ phận, linh kiện."
              },
              {
                "label": "Làm việc với phần mềm",
                "desc": "Cài đặt, nâng cấp, bổ sung, gỡ bỏ các trình ứng dụng, trình điều khiển và hệ điều hành. Thực hiện các thao tác thiết lập, điều chỉnh cấu hình để tối ưu hoá hoạt động của phần mềm. Cài đặt các bản vá hay phiên bản nâng cấp. Khôi phục dữ liệu bị hỏng. Kết nối máy tính vào mạng, cài đặt phần mềm bảo vệ máy khỏi phần mềm độc hại."
              },
              {
                "label": "Hướng dẫn người sử dụng",
                "desc": "Hướng dẫn người dùng sử dụng phần mềm, máy tính và các thiết bị số sao cho đúng cách và hiệu quả."
              }
            ]
          },
          {
            "heading": "1.2. Yêu cầu về kiến thức và kĩ năng cần có để làm nghề",
            "text": "Để làm tốt công việc, Kĩ thuật viên công nghệ thông tin cần trang bị đầy đủ kiến thức chuyên môn và phẩm chất nghề nghiệp:",
            "bulletPoints": [
              {
                "label": "Kiến thức chuyên môn",
                "desc": "Cần được đào tạo cơ bản về phần cứng máy tính và thiết bị ngoại vi. Hiểu biết về hoạt động của hệ thống máy tính. Có kiến thức cơ bản về hệ điều hành và các phần mềm ứng dụng phổ biến. Có kiến thức cơ bản về mạng máy tính, biết cách kết nối máy tính vào mạng LAN và Internet."
              },
              {
                "label": "Kĩ năng thực hành",
                "desc": "Có kĩ năng sửa chữa, lắp ráp, thay thế, cài đặt một hệ thống bao gồm máy tính PC và các thiết bị ngoại vi, thiết bị mạng cùng với hệ điều hành và các phần mềm ứng dụng kèm theo. Biết cách cài đặt, thiết lập và điều chỉnh cấu hình cho hệ điều hành và các phần mềm ứng dụng thông thường. Biết cách phát hiện và loại bỏ phần mềm độc hại trên máy tính. Xác định, khắc phục được các lỗi thường xảy ra với phần cứng và phần mềm của máy tính và thiết bị số. Có khả năng đưa ra giải pháp xử lí các sự cố, tình huống xảy ra trong máy tính."
              },
              {
                "label": "Phẩm chất và năng lực cốt lõi",
                "desc": "Khả năng giao tiếp để hướng dẫn người dùng hay phối hợp với đồng nghiệp. Khả năng học hỏi, tự cập nhật kiến thức không ngừng. Biết cách tìm kiếm, tham khảo tài liệu hướng dẫn trên Internet và các nguồn khác. Kĩ năng phân tích tình huống và giải quyết vấn đề."
              }
            ]
          },
          {
            "heading": "1.3. Ngành học có liên quan ở các bậc học tiếp theo",
            "text": "Nếu muốn trở thành Kĩ thuật viên công nghệ thông tin, học sinh có thể theo học những ngành học sau đây:",
            "bulletPoints": [
              {
                "label": "Công nghệ thông tin (Information Technology)",
                "desc": "Ngành học trang bị những kiến thức nền tảng về Công nghệ thông tin."
              },
              {
                "label": "Kĩ thuật máy tính (Computer Engineering)",
                "desc": "Ngành học liên quan đến phần cứng máy tính, thiết kế vi mạch."
              },
              {
                "label": "Mạng máy tính (Computer Networking)",
                "desc": "Ngành học tập trung vào việc thiết kế, thiết lập cấu hình, quản trị mạng máy tính."
              },
              {
                "label": "Nhóm ngành Máy tính và CNTT",
                "desc": "Nhìn chung các ngành đào tạo thuộc nhóm ngành Máy tính và Công nghệ thông tin đều cung cấp những kiến thức và kĩ năng cần thiết."
              }
            ]
          },
          {
            "heading": "1.4. Nhu cầu nhân lực trong hiện tại và tương lai gần",
            "text": "Công nghệ thông tin ngày càng phát triển, máy tính hiện diện ở hầu hết các gia đình, cơ quan, công sở. Hiện tại và trong tương lai gần, vị trí Kĩ thuật viên công nghệ thông tin luôn có nhu cầu tuyển dụng cao."
          }
        ]
      },
      {
        "id": "nghe-quan-tri-mang-va-he-thong",
        "topicId": "tin-huong-nghiep-dich-vu",
        "title": "2. Nghề Quản trị mạng và hệ thống",
        "icon": "Compass",
        "tag": "2. Quản trị mạng & hệ thống",
        "summary": "Phân biệt Quản trị mạng và Quản trị hệ thống, yêu cầu kiến thức kỹ năng, ngành học đào tạo và nhu cầu nhân lực trong kỷ nguyên chuyển đổi số.",
        "keyTerms": [
          "Quản trị mạng",
          "Quản trị hệ thống",
          "Hiệu năng mạng",
          "Tường lửa",
          "Phần mềm độc hại",
          "Tấn công mạng",
          "Lưu lượng",
          "Độ trễ",
          "Luật An ninh mạng",
          "Luật Sở hữu trí tuệ",
          "Chuyển đổi số"
        ],
        "content": [
          {
            "heading": "2.1. Công việc chính mà người làm nghề phải thực hiện",
            "text": "Công việc này đôi khi được tách thành hai mảng: Quản trị mạng và Quản trị hệ thống. Công việc của người Quản trị mạng và người Quản trị hệ thống có nhiều điểm giống nhau.",
            "bulletPoints": [
              {
                "label": "Công việc Quản trị mạng (Network Administrator)",
                "desc": "Thiết lập mạng, điều chỉnh các thông số cấu hình để nâng cao hiệu năng mạng. Giám sát các thiết bị mạng, vận hành và quản lí các hoạt động của mạng. Bảo vệ mạng trước các nguy cơ như: phần mềm độc hại, tấn công mạng, truy cập trái phép, đánh cắp hay phá hoại dữ liệu, phá hoại hoạt động của hệ thống mạng, nhân viên thực hiện những hành vi trái quy định, không phù hợp. Khắc phục các sự cố mạng. Hỗ trợ người dùng, giúp họ kết nối, truy cập mạng và giải quyết các sự cố."
              },
              {
                "label": "Công việc Quản trị hệ thống (System Administrator)",
                "desc": "Xác định nhu cầu của người dùng trong cơ quan, lập kế hoạch, chiến lược đảm bảo an toàn thông tin. Lập ra chính sách, quy trình đối với người dùng nội bộ trong hệ thống. Quản lí và duy trì hoạt động của toàn bộ hệ thống thông tin của cơ quan tổ chức, bao gồm cả phần cứng và phần mềm. Cài đặt, nâng cấp các thiết bị và phần mềm, xử lí sự cố để đảm bảo hệ thống hoạt động ổn định với hiệu suất cao."
              }
            ]
          },
          {
            "heading": "2.2. Yêu cầu về kiến thức và kĩ năng cần có để làm nghề",
            "text": "Nghề Quản trị mạng và hệ thống đòi hỏi nền tảng kiến thức sâu rộng và kĩ năng chuyên nghiệp:",
            "bulletPoints": [
              {
                "label": "Kiến thức về Mạng máy tính",
                "desc": "Nắm được nguyên lí, cấu trúc và cơ chế hoạt động của mạng máy tính; Có khả năng lắp đặt thiết bị mạng, cài đặt hệ điều hành và các phần mềm tiện ích mạng, chẩn đoán và khắc phục sự cố để duy trì hoạt động mạng; Có khả năng thiết lập, tối ưu hoá cấu hình của các thiết bị và phần mềm mạng."
              },
              {
                "label": "Kiến thức về Bảo mật thông tin",
                "desc": "Nắm được các phương thức tấn công mạng, cách hoạt động của các phần mềm độc hại và cách triển khai các biện pháp phòng chống; Có khả năng kiểm tra phát hiện những lỗ hổng bảo mật, cài đặt tường lửa, hệ thống phát hiện và phòng chống xâm nhập."
              },
              {
                "label": "Kiến thức về Quản lí hệ thống",
                "desc": "Biết cách sử dụng các công cụ giám sát để theo dõi, phân tích các thông số mạng (tốc độ truyền dữ liệu, lưu lượng, độ trễ) từ đó tiến hành các thao tác điều chỉnh, tối ưu hoá mạng."
              },
              {
                "label": "Kiến thức Pháp luật & Kĩ năng mềm",
                "desc": "Kiến thức về những nội dung liên quan được quy định trong Luật An ninh mạng, Luật Sở hữu trí tuệ, bộ quy tắc ứng xử trên mạng xã hội và các văn bản pháp luật khác. Kĩ năng giao tiếp và hỗ trợ người dùng."
              }
            ]
          },
          {
            "heading": "2.3. Ngành học có liên quan ở các bậc học tiếp theo",
            "text": "Nhằm đào tạo người Quản trị mạng và hệ thống, ở bậc Đại học hay Cao đẳng có các ngành:",
            "bulletPoints": [
              {
                "label": "Mạng máy tính và truyền thông",
                "desc": "Đào tạo chuyên sâu về kiến trúc mạng, giao thức truyền thông và hệ thống mạng diện rộng."
              },
              {
                "label": "Quản trị mạng",
                "desc": "Đào tạo kỹ năng thiết kế, cấu hình, vận hành và bảo vệ hệ thống mạng máy tính."
              },
              {
                "label": "Quản trị và bảo trì hệ thống",
                "desc": "Đào tạo quản lý phần cứng, hệ điều hành máy chủ và duy trì hoạt động thông suốt của hạ tầng CNTT."
              }
            ]
          },
          {
            "heading": "2.4. Nhu cầu nhân lực trong hiện tại và tương lai gần",
            "text": "Quản trị mạng và hệ thống là một trong những yếu tố quan trọng quyết định hiệu suất công việc của cơ quan, tổ chức, doanh nghiệp. Mạng máy tính là công cụ tiên quyết, gắn bó mật thiết với chuyển đổi số. Trong bối cảnh đất nước đang đẩy mạnh chuyển đổi số trong mọi mặt của đời sống xã hội, nhu cầu về nhân lực quản trị mạng và hệ thống thông tin luôn duy trì ở mức cao. Trên quy mô toàn cầu, sự phát triển của công nghệ số tạo ra môi trường làm việc đa quốc gia, buộc các doanh nghiệp hay tổ chức phải thích ứng khiến cho nhu cầu của họ về nhân lực Quản trị mạng và hệ thống ngày càng tăng."
          }
        ]
      },
      {
        "id": "nghe-bao-mat-he-thong-thong-tin",
        "topicId": "tin-huong-nghiep-dich-vu",
        "title": "3. Nghề Bảo mật hệ thống thông tin (Kĩ sư an toàn thông tin)",
        "icon": "ShieldAlert",
        "tag": "3. Bảo mật hệ thống thông tin",
        "summary": "Nhiệm vụ của Kĩ sư an toàn thông tin, triển khai giải pháp an ninh, phát hiện lỗ hổng, số liệu thực tế an ninh mạng Việt Nam 2023 và nhu cầu nhân lực cấp thiết.",
        "keyTerms": [
          "Kĩ sư an toàn thông tin",
          "Bảo mật hệ thống thông tin",
          "Mã độc",
          "Tin nhắn rác",
          "Tấn công mạng",
          "Lỗ hổng bảo mật",
          "Tường lửa",
          "Hệ thống phát hiện xâm nhập",
          "An ninh mạng",
          "An toàn thông tin",
          "Chuyển đổi số"
        ],
        "content": [
          {
            "heading": "3.1. Công việc chính mà người làm nghề phải thực hiện",
            "text": "Kĩ sư an toàn thông tin phụ trách việc bảo mật dữ liệu, bảo vệ hệ thống trước các nguy cơ về mã độc, tin nhắn rác, thao tác bất cẩn của người dùng, hành vi truy cập bất hợp pháp và các hình thức tấn công mạng. Họ có nhiệm vụ triển khai hệ thống bảo mật cho cơ quan, phát triển các chính sách bảo mật để đảm bảo an toàn cho dữ liệu và hệ thống thông tin tác nghiệp. Cụ thể là:",
            "bulletPoints": [
              {
                "label": "Triển khai an ninh",
                "desc": "Triển khai các công cụ, giải pháp an ninh để bảo vệ hệ thống."
              },
              {
                "label": "Giám sát & Cảnh báo",
                "desc": "Sử dụng các công cụ giám sát để theo dõi hoạt động của hệ thống, cảnh báo và xử lí khi có dấu hiệu đáng ngờ."
              },
              {
                "label": "Thiết lập quy tắc an toàn",
                "desc": "Thiết lập và hướng dẫn người dùng thực hiện các quy tắc an toàn thông tin."
              },
              {
                "label": "Khắc phục lỗ hổng",
                "desc": "Phát hiện và khắc phục những lỗ hổng về an toàn thông tin."
              }
            ]
          },
          {
            "heading": "3.2 & 3.3. Yêu cầu về kiến thức và kĩ năng cần có để làm nghề",
            "text": "Tương tự như công việc của người Quản trị mạng và hệ thống, chuyên gia Bảo mật hệ thống thông tin cần:",
            "bulletPoints": [
              {
                "label": "Phương thức tấn công & Phòng chống",
                "desc": "Nắm được các phương thức tấn công mạng, cách hoạt động của các phần mềm độc hại và cách triển khai các biện pháp phòng chống."
              },
              {
                "label": "Kiểm tra lỗ hổng & Hệ thống an ninh",
                "desc": "Có khả năng kiểm tra phát hiện những lỗ hổng bảo mật, cài đặt tường lửa, hệ thống phát hiện và phòng chống xâm nhập."
              }
            ]
          },
          {
            "heading": "3.4. Ngành học có liên quan ở các bậc học tiếp theo",
            "text": "Nhiều ngành học đã và đang đào tạo nhân lực cho nghề Bảo mật hệ thống thông tin như:",
            "bulletPoints": [
              {
                "label": "Các ngành đào tạo trọng điểm",
                "desc": "An ninh mạng, Quản trị mạng, Mạng máy tính và truyền thông, An toàn thông tin, Quản trị và bảo trì hệ thống, Bảo mật hệ thống thông tin."
              }
            ]
          },
          {
            "heading": "3.5. Nhu cầu nhân lực trong hiện tại và tương lai gần",
            "text": "Công cuộc chuyển đổi số đang làm gia tăng nhanh chóng khối lượng và giá trị của dữ liệu người dùng, nhưng điều này cũng kéo theo sự gia tăng nguy cơ về an ninh mạng. Theo số liệu thống kê, năm 2023 ghi nhận 13 900 vụ tấn công mạng vào các tổ chức tại Việt Nam, tăng 9,5% so với năm 2022 (Nguồn: VTV). Các phương thức, thủ đoạn tấn công ngày càng tinh vi, phức tạp. Các đơn vị, cơ quan tổ chức ngày càng chú trọng việc bảo vệ an toàn dữ liệu và an ninh mạng. Những yếu tố này dẫn đến nhu cầu ngày càng cao về nhân lực trong ngành Bảo mật hệ thống thông tin."
          }
        ]
      }
    ]
  },
  "tin-co-so-du-lieu-sql": {
    "subjectId": "tin-hoc-12",
    "subjectName": "Tin học 12",
    "topicName": "Chuyên đề 11F: Giới thiệu các hệ CSDL",
    "chapterName": "Chủ đề 6: Cơ sở dữ liệu quan hệ (Tuần 26 – 29)",
    "docTitle": "Chuyên đề 11F - GIỚI THIỆU CÁC HỆ CSDL.docx",
    "objectives": [
      "Nhận biết được nhu cầu lưu trữ dữ liệu và khai thác thông tin cho bài toán quản lí.",
      "Diễn đạt được khái niệm hệ Cơ sở dữ liệu, các khái niệm cơ bản trong mô hình Cơ sở dữ liệu quan hệ như quan hệ (bảng), khoá, khoá ngoài, truy vấn, cập nhật dữ liệu,...",
      "Nêu được những khái niệm cơ bản của hệ Cơ sở dữ liệu. Giải thích được các khái niệm đó qua ví dụ minh hoạ.",
      "Phân biệt được hai loại kiến trúc hệ Cơ sở dữ liệu là tập trung và phân tán.",
      "Nêu được tầm quan trọng và một số biện pháp bảo mật hệ Cơ sở dữ liệu."
    ],
    "sections": [
      {
        "id": "baitoan-quan-li-va-khai-niem-csdl",
        "topicId": "tin-co-so-du-lieu-sql",
        "title": "1. Bài toán quản lí và các khái niệm cơ bản trong cơ sở dữ liệu",
        "icon": "Layers",
        "tag": "1. Khái niệm CSDL",
        "summary": "Nhu cầu quản lý, thao tác cập nhật (thêm, sửa, xoá), mục đích khai thác thông tin, định nghĩa CSDL, 4 nhóm chức năng Hệ QTCSDL và phân biệt hệ CSDL tập trung vs phân tán.",
        "keyTerms": [
          "Bài toán quản lí",
          "Lưu trữ dữ liệu",
          "Cập nhật dữ liệu",
          "Khai thác thông tin",
          "Cơ sở dữ liệu (CSDL)",
          "CSDL tập trung",
          "CSDL phân tán",
          "Hệ quản trị CSDL (DBMS)",
          "Hệ cơ sở dữ liệu"
        ],
        "content": [
          {
            "heading": "1.1. Bài toán quản lí và nhu cầu lưu trữ dữ liệu",
            "text": "Bài toán quản lí trong thực tế rất đa dạng từ những bài toán quản lí cho các tổ chức lớn tới những nhu cầu quản lí của riêng cá nhân: quản lí nhân sự, quản lí tài chính, quản lí học sinh, quản lí thiết bị, quản lí chi tiêu cá nhân,... Việc quản lí một tổ chức gắn liền với những dữ liệu phản ánh thông tin về hoạt động của tổ chức đó.",
            "bulletPoints": [
              {
                "label": "Thao tác cập nhật dữ liệu",
                "desc": "Các dữ liệu cần được lưu trữ và liên tục cập nhật để phản ánh kịp thời những thay đổi diễn ra trên thực tế. Cập nhật dữ liệu bao gồm các thao tác: thêm, sửa, xoá dữ liệu."
              },
              {
                "label": "Mục đích khai thác thông tin",
                "desc": "Mục đích của việc lưu trữ và cập nhật dữ liệu là để khai thác thông tin, phục vụ cho việc điều hành công việc và ra quyết định của người quản lí. Một số việc khai thác thông tin thường gặp là: tìm kiếm dữ liệu, thống kê, lập báo cáo."
              },
              {
                "label": "Định nghĩa Cơ sở dữ liệu (CSDL)",
                "desc": "Tập hợp dữ liệu làm cơ sở cho việc quản lí các hoạt động của một tổ chức, được số hoá để máy tính có thể lưu trữ, truy cập, cập nhật và xử lí, được gọi là một cơ sở dữ liệu (CSDL)."
              }
            ]
          },
          {
            "heading": "1.2. Phân biệt CSDL tập trung và CSDL phân tán",
            "text": "Tùy theo cấu trúc vật lý và vị trí lưu trữ dữ liệu trên mạng máy tính, CSDL được chia thành 2 loại:",
            "bulletPoints": [
              {
                "label": "Cơ sở dữ liệu tập trung",
                "desc": "Khi tập hợp dữ liệu được lưu trữ trên một máy tính thì ta gọi là cơ sở dữ liệu tập trung."
              },
              {
                "label": "Cơ sở dữ liệu phân tán",
                "desc": "Khi tập hợp dữ liệu được phân tán trên các máy tính khác nhau của một mạng máy tính thì ta gọi là cơ sở dữ liệu phân tán. Trong đó, mỗi nơi (site) của mạng máy tính có khả năng xử lí độc lập và thực hiện các ứng dụng cục bộ. Mỗi nơi cũng tham gia thực hiện ít nhất một ứng dụng toàn cục, yêu cầu truy xuất dữ liệu tại nhiều nơi bằng cách dùng hệ thống truyền thông con."
              }
            ]
          },
          {
            "heading": "1.3. Hệ quản trị CSDL và 4 nhóm chức năng",
            "text": "Để hỗ trợ người dùng tương tác với CSDL qua các giao diện dễ hiểu, dễ dùng, người ta đã xây dựng những bộ phần mềm (hệ thống chương trình) chuyên dụng gọi là hệ quản trị CSDL với các nhóm chức năng:",
            "bulletPoints": [
              {
                "label": "Nhóm chức năng định nghĩa dữ liệu",
                "desc": "Khai báo kiểu dữ liệu, cấu trúc dữ liệu và các ràng buộc toàn vẹn đối với dữ liệu."
              },
              {
                "label": "Nhóm chức năng cập nhật và truy xuất dữ liệu",
                "desc": "Thực hiện thao tác thêm, sửa, xoá dữ liệu cũng như tìm kiếm, trích xuất dữ liệu theo yêu cầu."
              },
              {
                "label": "Nhóm chức năng bảo mật, an toàn CSDL",
                "desc": "Phân quyền truy cập, xác thực người dùng, sao lưu và phục hồi dữ liệu khi có sự cố."
              },
              {
                "label": "Nhóm chức năng giao diện lập trình ứng dụng (API)",
                "desc": "Cung cấp các công cụ và giao tiếp lập trình để các phần mềm ứng dụng kết nối và khai thác CSDL."
              }
            ]
          },
          {
            "heading": "1.4. Khái niệm Hệ cơ sở dữ liệu",
            "text": "Hệ cơ sở dữ liệu của một đơn vị là cách gọi chung một tập hợp gồm: CSDL của tổ chức, hệ quản trị CSDL và các phần mềm ứng dụng có các giao diện tương tác với CSDL đáp ứng được nhu cầu quản lí của đơn vị đó. Có hai loại hệ cơ sở dữ liệu: Hệ cơ sở dữ liệu tập trung (quản lý dữ liệu tập trung trong một CSDL đặt trên một máy tính) và Hệ cơ sở dữ liệu phân tán (cho phép người dùng truy cập dữ liệu được lưu trữ ở nhiều máy tính khác nhau của mạng máy tính)."
          }
        ]
      },
      {
        "id": "co-so-du-lieu-quan-he",
        "topicId": "tin-co-so-du-lieu-sql",
        "title": "2. Cơ sở dữ liệu quan hệ",
        "icon": "Layers",
        "tag": "2. Mô hình quan hệ",
        "summary": "Cấu trúc bảng, hàng (bản ghi), cột (trường/thuộc tính), kiểu dữ liệu, định nghĩa khóa, khóa chính, ràng buộc khóa và khóa ngoài tham chiếu toàn vẹn.",
        "keyTerms": [
          "Cơ sở dữ liệu quan hệ",
          "Bảng (Table)",
          "Bản ghi (Record / Hàng)",
          "Trường (Field / Cột)",
          "Kiểu dữ liệu",
          "Khóa",
          "Khóa chính (Primary Key)",
          "Ràng buộc khóa",
          "Khóa ngoài (Foreign Key)",
          "Bảng tham chiếu",
          "Ràng buộc khóa ngoài",
          "Toàn vẹn tham chiếu"
        ],
        "content": [
          {
            "heading": "2.1. Cấu trúc CSDL quan hệ: Bảng, Bản ghi và Trường",
            "text": "Cơ sở dữ liệu quan hệ là CSDL lưu trữ dữ liệu dưới dạng các bảng có quan hệ với nhau. Trong đó, mỗi bảng gồm các hàng và cột:",
            "bulletPoints": [
              {
                "label": "Bản ghi (Record / Hàng)",
                "desc": "Mỗi hàng của bảng được gọi là bản ghi (record), là tập hợp các thông tin về một đối tượng cụ thể được quản lí trong bảng."
              },
              {
                "label": "Trường (Field / Cột / Thuộc tính)",
                "desc": "Mỗi cột trong bảng được gọi là trường (field) thể hiện thuộc tính của đối tượng được quản lí trong bảng. Mỗi trường có dữ liệu cùng một kiểu và được gọi là kiểu dữ liệu của trường."
              }
            ]
          },
          {
            "heading": "2.2. Khóa và Khóa chính (Primary Key)",
            "text": "Để phân biệt các bản ghi và bảo đảm tính toàn vẹn dữ liệu:",
            "bulletPoints": [
              {
                "label": "Khái niệm Khóa",
                "desc": "Khóa của một bảng là một hay một nhóm trường mà mỗi giá trị của nó xác định duy nhất một bản ghi ở trong bảng và ta không thể bỏ đi trường nào mà tập hợp các trường còn lại vẫn có tính chất xác định duy nhất một bản ghi trong bảng."
              },
              {
                "label": "Khóa chính (Primary Key)",
                "desc": "Khi bảng có nhiều hơn một khóa, người ta có thể chọn một trong các khóa đó làm khóa chính của bảng và thường chọn khóa có số lượng trường ít nhất."
              },
              {
                "label": "Ràng buộc khóa",
                "desc": "Việc cập nhật dữ liệu cho một bảng cũng phải thoả mãn yêu cầu không làm xuất hiện hai bản ghi có giá trị khóa giống nhau. Yêu cầu này còn được gọi là ràng buộc khóa."
              }
            ]
          },
          {
            "heading": "2.3. Khóa ngoài (Foreign Key) và Ràng buộc toàn vẹn tham chiếu",
            "text": "Liên kết dữ liệu giữa các bảng trong CSDL quan hệ được thực hiện qua khóa ngoài:",
            "bulletPoints": [
              {
                "label": "Khái niệm Khóa ngoài",
                "desc": "Mỗi bảng (A) có thể có trường hay nhóm các trường (K) làm thành khóa chính ở một bảng khác (B). Khi đó, A được gọi là bảng tham chiếu, B được gọi là bảng được tham chiếu và K được gọi là khóa ngoài của bảng A. Hai bảng A và B được gọi là có quan hệ với nhau qua khóa ngoài K của bảng A."
              },
              {
                "label": "Ràng buộc khóa ngoài (Toàn vẹn tham chiếu)",
                "desc": "Đảm bảo tính tham chiếu đầy đủ giữa các bảng có quan hệ với nhau cũng là một phần của việc đảm bảo tính toàn vẹn của dữ liệu. Ràng buộc này áp dụng cho khóa ngoài nên được gọi là ràng buộc khóa ngoài. Cụ thể, ràng buộc khóa ngoài là yêu cầu mọi giá trị của khóa ngoài trong bảng tham chiếu phải xuất hiện trong giá trị khóa ở bảng được tham chiếu."
              }
            ]
          }
        ]
      },
      {
        "id": "truy-van-trong-csdl-sql",
        "topicId": "tin-co-so-du-lieu-sql",
        "title": "3. Truy vấn trong cơ sở dữ liệu (Ngôn ngữ SQL)",
        "icon": "Terminal",
        "tag": "3. Truy vấn SQL",
        "summary": "Khái niệm truy vấn dữ liệu, cấu trúc cơ bản câu lệnh SELECT FROM WHERE, cú pháp kết hợp dữ liệu bảng bằng INNER JOIN ON và điều kiện kết nối.",
        "keyTerms": [
          "Truy vấn (Query)",
          "SQL",
          "SELECT",
          "FROM",
          "WHERE",
          "INNER JOIN",
          "ON",
          "Toán tử so sánh",
          "Điều kiện kết nối",
          "Toán tử logic"
        ],
        "content": [
          {
            "heading": "3.1. Khái niệm truy vấn và Ngôn ngữ SQL",
            "text": "Truy vấn trong cơ sở dữ liệu là một phát biểu thể hiện yêu cầu của người dùng đối với CSDL. Đó có thể là yêu cầu thao tác trên dữ liệu: thêm, sửa, xoá bản ghi,... Đó cũng có thể là yêu cầu khai thác CSDL. Mỗi hệ quản trị CSDL có ngôn ngữ truy vấn của nó. Đối với các hệ quản trị CSDL quan hệ, ngôn ngữ truy vấn phổ biến nhất cho đến nay là SQL (Structured Query Language)."
          },
          {
            "heading": "3.2. Cấu trúc câu lệnh truy vấn cơ bản trong SQL",
            "text": "Cấu trúc cơ bản của một câu truy vấn viết bằng ngôn ngữ SQL:",
            "code": "SELECT <dữ liệu cần lấy>\nFROM <tên bảng>\nWHERE <điều kiện chọn>;",
            "bulletPoints": [
              {
                "label": "Dữ liệu cần lấy (SELECT)",
                "desc": "Là tên các trường dữ liệu cần đưa ra kết quả."
              },
              {
                "label": "Tên bảng (FROM)",
                "desc": "Là tên của bảng trong CSDL được truy cập để lấy dữ liệu."
              },
              {
                "label": "Điều kiện chọn (WHERE)",
                "desc": "Là biểu thức logic cho việc chọn các bản ghi đưa ra kết quả."
              }
            ]
          },
          {
            "heading": "3.3. Ghép nối bảng với INNER JOIN",
            "text": "Để kết hợp dữ liệu từ các bảng theo cách ghép nối các bản ghi thoả mãn một điều kiện nào đó (điều kiện kết nối), SQL sử dụng từ khoá JOIN trong mệnh đề FROM. Trong đó, INNER JOIN được dùng phổ biến nhất.",
            "code": "SELECT <dữ liệu cần lấy>\nFROM <bảng 1> INNER JOIN <bảng 2> ON <điều kiện kết nối>\nWHERE <điều kiện chọn>;",
            "bulletPoints": [
              {
                "label": "Điều kiện kết nối (ON)",
                "desc": "Điều kiện kết nối là điều kiện để ghép nối hai bản ghi ở bảng 1 và bảng 2, có dạng: bảng 1.Trường A <toán tử so sánh> bảng 2.Trường B. Toán tử so sánh có thể là =, <, <=, >, >=, <>."
              },
              {
                "label": "Trường hợp phổ biến",
                "desc": "Trên thực tế, điều kiện kết nối được sử dụng phổ biến nhất là sự trùng khớp giá trị trên một trường chung của hai bảng kết nối (thường là khóa ngoài bảng 1 = khóa chính bảng 2)."
              }
            ]
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
TOPIC_THEORY_MAP["tin-dao-duc-dung-sai"] = TOPIC_THEORY_MAP["tin-dao-duc-phap-luat-so"];
TOPIC_THEORY_MAP["tin-11d-12d"] = TOPIC_THEORY_MAP["tin-dao-duc-phap-luat-so"];
TOPIC_THEORY_MAP["tin-chuyen-de-12g"] = TOPIC_THEORY_MAP["tin-huong-nghiep-dich-vu"];
TOPIC_THEORY_MAP["tin-12g"] = TOPIC_THEORY_MAP["tin-huong-nghiep-dich-vu"];
TOPIC_THEORY_MAP["tin-nhom-nghe-dich-vu-quan-tri"] = TOPIC_THEORY_MAP["tin-huong-nghiep-dich-vu"];
TOPIC_THEORY_MAP["tin-chuyen-de-11f"] = TOPIC_THEORY_MAP["tin-co-so-du-lieu-sql"];
TOPIC_THEORY_MAP["tin-11f"] = TOPIC_THEORY_MAP["tin-co-so-du-lieu-sql"];
TOPIC_THEORY_MAP["tin-csdl-quan-he"] = TOPIC_THEORY_MAP["tin-co-so-du-lieu-sql"];

import { CHUYEN_DE_12E_THEORY } from "./theory12e";
TOPIC_THEORY_MAP["tin-chuyen-de-12e-web"] = CHUYEN_DE_12E_THEORY;
TOPIC_THEORY_MAP["tin-chuyen-de-12e"] = CHUYEN_DE_12E_THEORY;
TOPIC_THEORY_MAP["tin-12e"] = CHUYEN_DE_12E_THEORY;
TOPIC_THEORY_MAP["tin-thuc-hanh-tao-web"] = CHUYEN_DE_12E_THEORY;
