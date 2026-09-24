import { TopicTheory } from "./theoryBank";

export const CHUYEN_DE_12E_THEORY: TopicTheory = {
  "subjectId": "tin-hoc-12",
  "subjectName": "Tin học 12",
  "topicName": "Chuyên đề 12E: Thực hành phần mềm tạo trang web",
  "chapterName": "Chủ đề 4: Tạo trang web với phần mềm và HTML/CSS",
  "docTitle": "Chuyên đề 12E. Thực hành phần mềm tạo trang web.docx",
  "objectives": [
    "Sử dụng được một số chức năng cơ bản của phần mềm tạo trang web (Mobirise, Google Sites, Wix...).",
    "Tạo được một trang web tĩnh đơn giản gồm các thành phần cơ bản: Menu, Header, Content, Form biểu mẫu, Footer.",
    "Nắm vững quy trình thiết kế và xây dựng website bằng phần mềm trực quan không cần viết mã lệnh.",
    "Tạo và tuỳ chỉnh cấu trúc trang web: Phần đầu trang (Header), Phần thân (Body blocks), Phần chân trang (Footer), Thanh điều hướng (Navigation Bar / Menu tối đa 3 cấp).",
    "Thêm và định dạng nội dung: Văn bản (Textbox), Hình ảnh/Video, Bộ sưu tập (Gallery), Thanh trượt (Slider), Băng chuyền (Carousel), Biểu mẫu (Form) và nhúng nội dung bên ngoài.",
    "Biết cách xem trước trên đa thiết bị (Desktop, Tablet, Mobile) và xuất bản website (Publish) lên Internet với tên miền và hosting."
  ],
  "sections": [
    {
      "id": "12e-sec-1-phan-mem-web",
      "topicId": "tin-chuyen-de-12e-web",
      "title": "1. Phần mềm tạo trang web & Quy trình thực hiện",
      "icon": "Globe",
      "tag": "Khái niệm & Quy trình",
      "summary": "Khái niệm phần mềm tạo website trực quan, so sánh trực tuyến vs ngoại tuyến và quy trình 5 bước xây dựng website.",
      "keyTerms": [
        "Phần mềm tạo web",
        "Mobirise",
        "Google Sites",
        "Trang web tĩnh",
        "WYSIWYG",
        "Quy trình tạo web"
      ],
      "content": [
        {
          "heading": "1.1. Giới thiệu về phần mềm tạo trang web",
          "text": "Phần mềm tạo trang web là công cụ cho phép người dùng tạo ra các trang web một cách dễ dàng mà không cần phải có nhiều kiến thức về lập trình. Phần mềm này thường cung cấp giao diện trực quan và các công cụ kéo thả để người dùng dễ dàng tạo trang web tĩnh (nội dung không thay đổi)."
        },
        {
          "heading": "Phân loại phần mềm tạo trang web",
          "bulletPoints": [
            {
              "label": "Phần mềm trực tuyến (Online)",
              "desc": "Ví dụ: Google Sites, Wix, Weebly... Không yêu cầu cài đặt, sử dụng được mọi lúc mọi nơi trên trình duyệt, dễ dàng chia sẻ và cộng tác nhóm. Nhược điểm: Yêu cầu kết nối mạng Internet liên tục."
            },
            {
              "label": "Phần mềm ngoại tuyến (Offline)",
              "desc": "Ví dụ: Mobirise, Nicepage, RapidWeaver... Cài đặt trực tiếp trên máy tính (Windows, MacOS, Linux), có thể làm việc khi không có kết nối mạng Internet. Tính năng phong phú, chuyên sâu hơn."
            }
          ]
        },
        {
          "heading": "Các chức năng cơ bản của phần mềm tạo trang web",
          "bulletPoints": [
            {
              "label": "Tạo, chỉnh sửa và xuất bản trang web",
              "desc": "Tạo dự án mới, tạo các trang và bố cục trang web, xuất bản thành tệp HTML để sử dụng hoặc đưa lên hosting."
            },
            {
              "label": "Chỉnh sửa giao diện (Theme/Style)",
              "desc": "Tùy chỉnh bảng màu sắc, font chữ, kích thước và kiểu chữ đồng bộ toàn website."
            },
            {
              "label": "Tạo và chỉnh sửa nội dung",
              "desc": "Thêm, chỉnh sửa và xoá các phần tử như văn bản, hình ảnh, video, biểu mẫu và nút lệnh."
            },
            {
              "label": "Tích hợp mẫu (Templates/Blocks có sẵn)",
              "desc": "Cung cấp sẵn hàng trăm mẫu giao diện khối đẹp mắt, người dùng chỉ cần chọn và thay nội dung."
            }
          ]
        },
        {
          "heading": "1.2. Quy trình các bước tạo trang web bằng phần mềm",
          "bulletPoints": [
            {
              "label": "Bước 1: Định hình ý tưởng và phác thảo thiết kế",
              "desc": "Xác định mục đích của trang web, đối tượng người dùng phục vụ; từ đó phác thảo cấu trúc, bố cục, bảng màu và định hướng nội dung."
            },
            {
              "label": "Bước 2: Chuẩn bị nội dung và tư liệu",
              "desc": "Thu thập, chuẩn bị sẵn hình ảnh, video, logo, biểu ngữ và nội dung văn bản cần đưa vào trang web."
            },
            {
              "label": "Bước 3: Tạo dự án website và các trang cần có",
              "desc": "Khởi tạo dự án trên phần mềm, tạo trang chủ (Home) và các trang chuyên mục, trang chi tiết liên quan."
            },
            {
              "label": "Bước 4: Tạo và chỉnh sửa các thành phần trên từng trang",
              "desc": "Thêm khối đầu trang (Header), thân trang (Body blocks), chân trang (Footer), thanh điều hướng (Menu), văn bản, hình ảnh, biểu mẫu."
            },
            {
              "label": "Bước 5: Xem trước và xuất bản website",
              "desc": "Kiểm tra hiển thị trên máy tính, điện thoại, máy tính bảng; xuất bản trang web lên Internet (Domain & Hosting)."
            }
          ]
        }
      ]
    },
    {
      "id": "12e-sec-2-cau-truc-web",
      "topicId": "tin-chuyen-de-12e-web",
      "title": "2. Tạo website và cấu trúc trang web",
      "icon": "Layers",
      "tag": "Cấu trúc & Bố cục",
      "summary": "Tạo dự án, quản lý trang (Pages), cấu trúc 3 phần chuẩn (Header, Body, Footer) và thiết lập thanh điều hướng Menu đa cấp.",
      "keyTerms": [
        "Dự án Website",
        "Trang chủ (Home)",
        "Đầu trang (Header)",
        "Thân trang (Body)",
        "Chân trang (Footer)",
        "Thanh điều hướng (Menu)",
        "Block Parameters"
      ],
      "content": [
        {
          "heading": "2.1. Tạo dự án website và các trang web",
          "text": "Mỗi website luôn có một **Trang chủ (Home Page)**, là trang đầu tiên hiển thị thông tin tổng quát nhất khi truy cập website. Có thể tạo thêm các trang mới bằng chức năng **Create New Page** hoặc dấu **+** từ menu Pages. Trang mới có thể là trang trắng (Blank Page) hoặc có bố cục sẵn từ Theme."
        },
        {
          "heading": "2.2. Cấu trúc 3 phần chính của một trang web",
          "bulletPoints": [
            {
              "label": "Phần đầu trang (Header)",
              "desc": "Chứa tiêu đề website, logo tổ chức, biểu ngữ (banner) và thanh điều hướng (navigation bar). Tạo ấn tượng nhận diện thương hiệu đầu tiên cho người truy cập."
            },
            {
              "label": "Phần thân trang (Body / Content)",
              "desc": "Chứa toàn bộ nội dung chính cần truyền tải (văn bản, ảnh, video, danh mục sản phẩm, biểu mẫu...). Phần này được chia thành các khối nhỏ (blocks) hình chữ nhật sắp xếp linh hoạt theo chiều dọc."
            },
            {
              "label": "Phần chân trang (Footer)",
              "desc": "Nằm ở cuối cùng của trang web, chứa thông tin liên hệ (địa chỉ, điện thoại, email), bản quyền sở hữu, bản đồ và liên kết mạng xã hội. Tất cả các trang trong cùng một website nên dùng chung một mẫu Footer để tạo sự đồng nhất."
            }
          ]
        },
        {
          "heading": "Thiết lập thanh điều hướng (Menu / Navigation Bar)",
          "bulletPoints": [
            {
              "label": "Vị trí đặt",
              "desc": "Thường đặt ngay phía dưới phần đầu trang hoặc gộp chung trong phần đầu trang (bên trên hoặc bên cạnh)."
            },
            {
              "label": "Tự động đồng bộ",
              "desc": "Khi thay đổi tên một trang trong website, mục liên kết tương ứng trên thanh điều hướng cũng sẽ tự động đổi tên theo."
            },
            {
              "label": "Menu đa cấp (Submenu / Dropdown)",
              "desc": "Mỗi mục có thể có các mục con thả xuống. Khuyến nghị: Không nên tạo menu quá 3 cấp để tránh gây khó khăn cho người dùng khi thao tác."
            },
            {
              "label": "Tùy chỉnh thông số (Block Parameters)",
              "desc": "Di chuột lên thanh điều hướng để mở bảng Block Parameters, cho phép bật/tắt logo, tên thương hiệu, nút liên hệ, chọn màu nền trong suốt hoặc cố định khi cuộn trang."
            }
          ]
        }
      ]
    },
    {
      "id": "12e-sec-3-noi-dung-bieu-mau",
      "topicId": "tin-chuyen-de-12e-web",
      "title": "3. Thêm nội dung và biểu mẫu vào trang web",
      "icon": "FileText",
      "tag": "Nội dung & Biểu mẫu",
      "summary": "Chèn văn bản, hình ảnh, video, Gallery, Slider, Carousel; tạo biểu mẫu Form thu thập thông tin và nhúng nội dung bên ngoài.",
      "keyTerms": [
        "Textbox",
        "Gallery (Bộ sưu tập)",
        "Slider (Thanh trượt)",
        "Image Carousel (Băng chuyền)",
        "Biểu mẫu (Form)",
        "Embed / Iframe"
      ],
      "content": [
        {
          "heading": "3.1. Chèn và định dạng nội dung đa phương tiện (Ảnh & Video)",
          "bulletPoints": [
            {
              "label": "Nguồn ảnh / video",
              "desc": "Tải lên từ máy tính, chọn từ thư viện ảnh có sẵn của phần mềm hoặc dẫn link URL trên Internet. Cần tối ưu dung lượng ảnh để trang web tải nhanh."
            },
            {
              "label": "Bộ sưu tập (Gallery)",
              "desc": "Hiển thị nhiều hình ảnh cùng lúc dưới dạng lưới (Grid), cho phép bấm vào từng ảnh để phóng to xem chi tiết."
            },
            {
              "label": "Thanh trượt (Slider) & Băng chuyền (Carousel)",
              "desc": "Hiển thị các hình ảnh/video xuất hiện lần lượt tự động hoặc người dùng bấm nút mũi tên trái/phải để chuyển ảnh."
            },
            {
              "label": "Lưu ý về tệp âm thanh (Audio)",
              "desc": "Nhiều phần mềm tạo web trực quan không hỗ trợ chèn trực tiếp file audio tải lên, mà cần nhúng tệp audio từ các nền tảng trực tuyến thông qua mã nhúng (Embed)."
            }
          ]
        },
        {
          "heading": "3.2. Chèn và định dạng nội dung văn bản",
          "text": "Phần mềm cung cấp khung soạn thảo văn bản (Textbox) hoặc các khối mẫu tin tức, bài báo, giới thiệu thành viên. Hỗ trợ đầy đủ văn bản thông thường, danh sách có thứ tự (numbered list), danh sách không thứ tự (bulleted list), bảng biểu, căn chỉnh lề, màu sắc, font chữ và kích thước."
        },
        {
          "heading": "3.3. Tạo biểu mẫu (Form) thu thập thông tin",
          "bulletPoints": [
            {
              "label": "Mục đích",
              "desc": "Cho phép người dùng tương tác, nhập thông tin liên hệ, gửi phản hồi, đăng ký câu lạc bộ hoặc đặt mua hàng trực tiếp trên website."
            },
            {
              "label": "Các trường nhập liệu thông dụng",
              "desc": "Ô nhập văn bản (Họ tên, SĐT, Địa chỉ), ô Email, ô chọn ngày tháng (Date), danh sách chọn lựa (Dropdown/Select), nút chọn 1 phương án (Radio), nút chọn nhiều phương án (Checkbox), vùng văn bản nhiều dòng (Textarea) và nút Gửi (Submit button)."
            }
          ]
        },
        {
          "heading": "3.4. Nhúng nội dung từ bên ngoài (Embed Content)",
          "text": "Sử dụng khối nhúng mã HTML/iframe để tích hợp bản đồ Google Maps chỉ dẫn đường đi, video phát từ YouTube, biểu mẫu khảo sát từ Google Forms, hoặc bảng tính dữ liệu từ Google Sheets vào trang web."
        }
      ]
    },
    {
      "id": "12e-sec-4-xem-truoc-xuat-ban",
      "topicId": "tin-chuyen-de-12e-web",
      "title": "4. Xem trước và xuất bản trang web",
      "icon": "ExternalLink",
      "tag": "Xuất bản & Triển khai",
      "summary": "Kiểm thử hiển thị đa thiết bị (Responsive Preview), khái niệm Tên miền (Domain), Nơi lưu trữ (Hosting) và xuất bản lên Internet.",
      "keyTerms": [
        "Xem trước (Preview)",
        "Desktop / Tablet / Mobile",
        "Xuất bản (Publish)",
        "Hosting",
        "Tên miền (Domain)",
        "Tệp tĩnh HTML/CSS/JS"
      ],
      "content": [
        {
          "heading": "4.1. Xem trước trang web (Preview)",
          "text": "Trước khi đưa lên mạng, người tạo trang web cần sử dụng tính năng **Preview (Xem trước)** để kiểm tra trang web hiển thị như thế nào trong thực tế. Các phần mềm tạo web hiện đại đều hỗ trợ chế độ xem trước đáp ứng (Responsive) trên 3 loại thiết bị: Máy tính để bàn (Desktop), Máy tính bảng (Tablet) và Điện thoại thông minh (Mobile). Qua đó phát hiện lỗi hiển thị, vỡ khung hình hoặc chữ quá nhỏ để điều chỉnh kịp thời."
        },
        {
          "heading": "4.2. Khái niệm Tên miền (Domain) và Nơi lưu trữ (Hosting)",
          "bulletPoints": [
            {
              "label": "Tên miền (Domain)",
              "desc": "Địa chỉ định danh duy nhất của website trên Internet (ví dụ: thptexample.edu.vn, mobirise.com). Người dùng nhập tên miền vào trình duyệt để truy cập website."
            },
            {
              "label": "Nơi lưu trữ (Hosting)",
              "desc": "Máy chủ (Server) lưu trữ toàn bộ mã nguồn HTML, tệp định dạng CSS, JavaScript, hình ảnh và video của website, giúp website có thể truy cập 24/7 từ khắp nơi trên thế giới."
            }
          ]
        },
        {
          "heading": "4.3. Các phương thức xuất bản trang web (Publish)",
          "bulletPoints": [
            {
              "label": "Xuất bản lên Hosting miễn phí của phần mềm",
              "desc": "Các nền tảng (Google Sites, Mobirise, Wix) cho phép xuất bản trực tiếp lên Internet dưới dạng tên miền con (subdomain) miễn phí (ví dụ: tensite.mobirisesite.com hoặc sites.google.com/view/tensite)."
            },
            {
              "label": "Xuất bản với Tên miền riêng (Custom Domain)",
              "desc": "Kết nối website với tên miền riêng chuyên nghiệp đã đăng ký (yêu cầu cấu hình bản ghi DNS CNAME/A)."
            },
            {
              "label": "Xuất bản ra thư mục cục bộ (Local Drive / FTP)",
              "desc": "Xuất toàn bộ website thành thư mục chứa các tệp HTML, CSS, JS và ảnh để tự tải lên hosting riêng qua giao thức FTP."
            }
          ]
        }
      ]
    }
  ]
};
