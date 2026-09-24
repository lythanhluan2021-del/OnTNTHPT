export interface HtmlCssProjectTemplate {
  id: string;
  title: string;
  category: string;
  description: string;
  html: string;
  css: string;
  previewTips: string;
}

export interface HtmlCssQuestionExercise {
  questionId: string;
  questionNumber: number | string;
  title: string;
  category: "Cấu trúc & Tiêu đề" | "Định dạng & Chú thích" | "Siêu liên kết & Hình ảnh" | "Danh sách (List)" | "Bảng (Table)" | "Định kiểu CSS" | "Tình huống thực tế";
  summary: string;
  html: string;
  css: string;
  expectedResult: string;
  targetAnswer: string;
}

export const HTML_CSS_PROJECT_TEMPLATES: HtmlCssProjectTemplate[] = [
  {
    id: "profile-card",
    title: "1. Thẻ giới thiệu cá nhân (Profile Card)",
    category: "Giao diện cá nhân",
    description: "Thiết kế thẻ thông tin học sinh hiện đại gồm ảnh đại diện, họ tên, lớp, sở thích và nút liên hệ.",
    previewTips: "Thử thay đổi màu nền nút bấm hoặc họ tên của bạn trong tab HTML/CSS.",
    html: `<div class="card">
  <div class="avatar-box">
    <div class="avatar">👨‍🎓</div>
  </div>
  <h2 class="name">Nguyễn Văn An</h2>
  <p class="role">Học sinh Lớp 12A1 • THPT Chuyên</p>
  <div class="divider"></div>
  <div class="bio">
    <p>Đam mê Tin học, Thiết kế Web và Lập trình Python. Mục tiêu thi đỗ thủ khoa kỳ thi Tốt nghiệp THPT 2026!</p>
  </div>
  <div class="tags">
    <span class="tag">HTML5</span>
    <span class="tag">CSS3</span>
    <span class="tag">Tin học 12</span>
  </div>
  <button class="btn-contact" onclick="alert('Cảm ơn bạn đã kết nối!')">Nhắn tin làm quen</button>
</div>`,
    css: `body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f1f5f9;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  margin: 0;
  padding: 16px;
}

.card {
  background: #ffffff;
  border-radius: 20px;
  padding: 24px;
  max-width: 320px;
  width: 100%;
  text-align: center;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
}

.avatar-box {
  display: flex;
  justify-content: center;
  margin-bottom: 12px;
}

.avatar {
  font-size: 48px;
  width: 80px;
  height: 80px;
  background: #eff6ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #3b82f6;
}

.name {
  color: #1e293b;
  margin: 0 0 6px 0;
  font-size: 20px;
}

.role {
  color: #64748b;
  font-size: 13px;
  margin: 0 0 16px 0;
}

.divider {
  height: 1px;
  background: #f1f5f9;
  margin-bottom: 16px;
}

.bio p {
  color: #475569;
  font-size: 13.5px;
  line-height: 1.5;
  margin: 0 0 16px 0;
}

.tags {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 20px;
}

.tag {
  background: #e0e7ff;
  color: #4338ca;
  font-size: 11px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 9999px;
}

.btn-contact {
  background: #2563eb;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  transition: background 0.2s;
}

.btn-contact:hover {
  background: #1d4ed8;
}`,
  },

  {
    id: "schedule-table",
    title: "2. Bảng Thời khóa biểu THPT",
    category: "Bảng dữ liệu",
    description: "Thực hành bảng HTML <table> với tiêu đề <th>, các hàng <tr> và thuộc tính định dạng viền, màu sắc CSS.",
    previewTips: "Thử thêm các tiết học buổi chiều hoặc thay đổi màu sắc dòng tiêu đề.",
    html: `<div class="container">
  <h2>THỜI KHÓA BIỂU HỌC TẬP - LỚP 12</h2>
  <table class="schedule-table">
    <thead>
      <tr>
        <th>Tiết</th>
        <th>Thứ 2</th>
        <th>Thứ 3</th>
        <th>Thứ 4</th>
        <th>Thứ 5</th>
        <th>Thứ 6</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="period">1</td>
        <td class="math">Toán</td>
        <td>Ngữ văn</td>
        <td class="it">Tin học</td>
        <td>Vật lí</td>
        <td class="math">Toán</td>
      </tr>
      <tr>
        <td class="period">2</td>
        <td class="math">Toán</td>
        <td>Ngữ văn</td>
        <td class="it">Tin học</td>
        <td>Hóa học</td>
        <td>Tiếng Anh</td>
      </tr>
      <tr class="break-row">
        <td colspan="6">☕ Giờ giải lao (20 phút)</td>
      </tr>
      <tr>
        <td class="period">3</td>
        <td>Tiếng Anh</td>
        <td class="math">Toán</td>
        <td>Lịch sử</td>
        <td>Sinh học</td>
        <td>Địa lí</td>
      </tr>
      <tr>
        <td class="period">4</td>
        <td>GDQP</td>
        <td>Tiếng Anh</td>
        <td>GDCD</td>
        <td class="math">Toán</td>
        <td>Sinh hoạt</td>
      </tr>
    </tbody>
  </table>
</div>`,
    css: `body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f8fafc;
  padding: 20px;
  margin: 0;
}

.container {
  max-width: 650px;
  margin: 0 auto;
  background: white;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  color: #1e3a8a;
  margin-top: 0;
  font-size: 18px;
}

.schedule-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 13.5px;
  text-align: center;
}

.schedule-table th {
  background-color: #2563eb;
  color: white;
  padding: 10px 8px;
  font-weight: 600;
}

.schedule-table td {
  padding: 10px 8px;
  border-bottom: 1px solid #e2e8f0;
}

.schedule-table tr:hover {
  background-color: #f1f5f9;
}

.period {
  font-weight: bold;
  background-color: #f8fafc;
  color: #64748b;
}

.math {
  color: #b91c1c;
  font-weight: 600;
}

.it {
  color: #1d4ed8;
  font-weight: 600;
  background-color: #dbeafe;
}

.break-row td {
  background-color: #fef3c7;
  color: #92400e;
  font-size: 12px;
  font-weight: 600;
  padding: 6px;
}`,
  },

  {
    id: "travel-blog",
    title: "3. Blog Du lịch Đồng Tháp",
    category: "Văn bản & Hình ảnh",
    description: "Trang tin tức mini kết hợp tiêu đề, đoạn văn, danh sách điểm đến và liên kết khám phá miền Tây.",
    previewTips: "Xem cách sử dụng thẻ <ul> và các thẻ định dạng <strong>, <em>.",
    html: `<article class="blog-post">
  <header>
    <span class="badge">Khám phá Quê hương</span>
    <h1>Du lịch Đồng Tháp Mười: Về Đất Sen Hồng</h1>
    <p class="post-meta">Đăng bởi <strong>Ban Biên tập Du lịch</strong> • Cập nhật hôm nay</p>
  </header>

  <div class="featured-banner">
    <div class="lotus-icon">🌸</div>
    <p class="banner-text">"Tháp Mười đẹp nhất bông sen - Việt Nam đẹp nhất có tên Bác Hồ"</p>
  </div>

  <section class="content">
    <p>Đồng Tháp nổi tiếng với những cánh đồng sen bạt ngàn, những khu du lịch sinh thái ngập nước trù phú và con người hồn hậu, mến khách.</p>
    
    <h3>Top 3 điểm du lịch không thể bỏ qua:</h3>
    <ul class="travel-list">
      <li><strong>Làng hoa Sa Đéc:</strong> Thủ phủ ngàn hoa rực rỡ với hàng trăm giống hoa kiểng quý.</li>
      <li><strong>Vườn quốc gia Tràm Chim:</strong> Nơi cư trú của loài Sếu đầu đỏ quý hiếm.</li>
      <li><strong>Khu di tích Xẻo Quýt:</strong> Căn cứ cách mạng giữa rừng tràm nguyên sinh ngập nước.</li>
    </ul>

    <p>Hãy dành dịp cuối tuần để cùng bạn bè trải nghiệm đi xuồng ba lá và thưởng thức các món ăn đậm chất miền Tây Nam Bộ nhé!</p>
  </section>

  <footer class="blog-footer">
    <a href="https://dongthap.gov.vn" target="_blank" class="read-more-btn">Tìm hiểu thêm trên Cổng TTĐT &rarr;</a>
  </footer>
</article>`,
    css: `body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #fdf2f8;
  padding: 16px;
  margin: 0;
  color: #334155;
}

.blog-post {
  max-width: 500px;
  margin: 0 auto;
  background: white;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 4px 15px rgba(244, 63, 94, 0.1);
  border: 1px solid #fecdd3;
}

.badge {
  background: #ffe4e6;
  color: #e11d48;
  font-size: 11px;
  font-weight: 700;
  padding: 4px 8px;
  border-radius: 6px;
  text-transform: uppercase;
}

h1 {
  font-size: 20px;
  color: #881337;
  margin: 10px 0 6px 0;
  line-height: 1.3;
}

.post-meta {
  font-size: 12px;
  color: #94a3b8;
  margin-bottom: 16px;
}

.featured-banner {
  background: linear-gradient(135deg, #f43f5e, #fb7185);
  color: white;
  padding: 16px;
  border-radius: 12px;
  text-align: center;
  margin-bottom: 16px;
}

.lotus-icon {
  font-size: 32px;
  margin-bottom: 4px;
}

.banner-text {
  margin: 0;
  font-style: italic;
  font-size: 13px;
}

.content p {
  font-size: 14px;
  line-height: 1.6;
}

h3 {
  font-size: 15px;
  color: #9f1239;
  margin-top: 16px;
}

.travel-list {
  padding-left: 20px;
  font-size: 13.5px;
  line-height: 1.6;
}

.travel-list li {
  margin-bottom: 8px;
}

.blog-footer {
  margin-top: 20px;
  padding-top: 16px;
  border-top: 1px solid #f1f5f9;
}

.read-more-btn {
  display: inline-block;
  color: #e11d48;
  text-decoration: none;
  font-weight: 600;
  font-size: 13px;
}`,
  },

  {
    id: "club-form",
    title: "4. Biểu mẫu Đăng ký CLB Tin học",
    category: "Biểu mẫu (Form)",
    description: "Thực hành thẻ <form> với các điều khiển <input>, <select>, <textarea> và nút submit.",
    previewTips: "Thử nhập họ tên và bấm 'Gửi đơn đăng ký' để kiểm tra tính năng form.",
    html: `<div class="form-wrapper">
  <h2>ĐĂNG KÝ THAM GIA CLB TIN HỌC</h2>
  <p class="subtitle">Trường THPT Năm học 2025 - 2026</p>

  <form onsubmit="event.preventDefault(); alert('Đã gửi đơn đăng ký thành công! Ban chủ nhiệm CLB sẽ liên hệ với bạn qua số điện thoại.');">
    <div class="form-group">
      <label for="fullname">Họ và tên học sinh:</label>
      <input type="text" id="fullname" placeholder="Nhập đầy đủ họ tên..." required />
    </div>

    <div class="form-row">
      <div class="form-group half">
        <label for="grade">Khối lớp:</label>
        <select id="grade">
          <option value="12">Khối 12</option>
          <option value="11">Khối 11</option>
          <option value="10">Khối 10</option>
        </select>
      </div>

      <div class="form-group half">
        <label for="phone">Số điện thoại:</label>
        <input type="tel" id="phone" placeholder="09xx..." required />
      </div>
    </div>

    <div class="form-group">
      <label>Ban chuyên môn muốn tham gia:</label>
      <div class="radio-group">
        <label><input type="radio" name="dept" value="web" checked /> Lập trình Web (HTML & CSS)</label>
        <label><input type="radio" name="dept" value="py" /> Lập trình Python</label>
        <label><input type="radio" name="dept" value="design" /> Thiết kế đồ họa & Video</label>
      </div>
    </div>

    <div class="form-group">
      <label for="note">Nguyện vọng đóng góp cho CLB:</label>
      <textarea id="note" rows="3" placeholder="Chia sẻ đôi nét về bản thân hoặc mong muốn..."></textarea>
    </div>

    <button type="submit" class="submit-btn">🚀 Gửi đơn đăng ký tham gia</button>
  </form>
</div>`,
    css: `body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f0fdf4;
  padding: 16px;
  margin: 0;
}

.form-wrapper {
  max-width: 420px;
  margin: 0 auto;
  background: white;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #bbf7d0;
}

h2 {
  color: #166534;
  font-size: 17px;
  text-align: center;
  margin-top: 0;
  margin-bottom: 4px;
}

.subtitle {
  text-align: center;
  font-size: 12.5px;
  color: #64748b;
  margin-top: 0;
  margin-bottom: 18px;
}

.form-group {
  margin-bottom: 14px;
}

.form-row {
  display: flex;
  gap: 12px;
}

.form-group.half {
  flex: 1;
}

label {
  display: block;
  font-size: 12.5px;
  font-weight: 600;
  color: #374151;
  margin-bottom: 6px;
}

input[type="text"],
input[type="tel"],
select,
textarea {
  width: 100%;
  padding: 9px 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 13.5px;
  box-sizing: border-box;
  outline: none;
  font-family: inherit;
}

input:focus, select:focus, textarea:focus {
  border-color: #16a34a;
  box-shadow: 0 0 0 2px rgba(22, 163, 74, 0.2);
}

.radio-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 13px;
  color: #4b5563;
}

.radio-group label {
  font-weight: normal;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
}

.submit-btn {
  width: 100%;
  background: #16a34a;
  color: white;
  border: none;
  padding: 11px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 8px;
  transition: background 0.2s;
}

.submit-btn:hover {
  background: #15803d;
}`,
  },
];

export const HTML_CSS_QUESTION_EXERCISES: Record<string, HtmlCssQuestionExercise> = {
  "Q-TIN-12F-MC-32": {
    questionId: "Q-TIN-12F-MC-32",
    questionNumber: 32,
    title: "Câu 32: Khai báo Doctype chuẩn trong tài liệu HTML5",
    category: "Cấu trúc & Tiêu đề",
    summary: "Thẻ <!DOCTYPE html> đứng ở dòng đầu tiên giúp trình duyệt hiểu trang web tuân theo chuẩn HTML5.",
    targetAnswer: "Đáp án B: <!DOCTYPE html>;",
    expectedResult: "Trang web khai báo DOCTYPE chuẩn hiển thị tiêu đề và nội dung đầy đủ.",
    html: `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Khai báo Doctype HTML5 Chuẩn</title>
</head>
<body>
  <h1>Xin chào chuẩn HTML5!</h1>
  <p>Dòng đầu tiên của mọi tài liệu HTML5 luôn là khai báo: <code>&lt;!DOCTYPE html&gt;</code></p>
  <p>Thẻ này không phân biệt chữ hoa, chữ thường và không có thẻ đóng.</p>
</body>
</html>`,
    css: `body {
  font-family: Arial, sans-serif;
  padding: 16px;
  background-color: #f8fafc;
}
h1 {
  color: #2563eb;
}
code {
  background-color: #e2e8f0;
  color: #d97706;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: monospace;
}`,
  },

  "Q-TIN-12F-MC-34": {
    questionId: "Q-TIN-12F-MC-34",
    questionNumber: 34,
    title: "Câu 34: Tác dụng của thẻ <br> trong văn bản HTML",
    category: "Định dạng & Chú thích",
    summary: "Thẻ <br> dùng để ngắt và xuống dòng ngay lập tức mà không tạo khoảng cách đoạn văn như thẻ <p>.",
    targetAnswer: "Đáp án D: Xuống dòng;",
    expectedResult: "Các dòng chữ ngắt xuống liên tiếp mà không có khoảng trống đoạn.",
    html: `<div class="box">
  <h3>Minh họa thẻ ngắt dòng &lt;br&gt;:</h3>
  <p>
    Dòng thứ nhất: Trường THPT Số 1<br>
    Dòng thứ hai: Thành phố Cao Lãnh<br>
    Dòng thứ ba: Tỉnh Đồng Tháp
  </p>
  <hr>
  <p><em>(Nhờ có thẻ &lt;br&gt;, ba dòng trên được ngắt xuống một cách liền kề.)</em></p>
</div>`,
    css: `.box {
  background: white;
  border: 1px solid #cbd5e1;
  padding: 16px;
  border-radius: 8px;
  font-family: sans-serif;
}
h3 {
  color: #1e40af;
  margin-top: 0;
}`,
  },

  "Q-TIN-12F-MC-35": {
    questionId: "Q-TIN-12F-MC-35",
    questionNumber: 35,
    title: "Câu 35: Cặp thẻ bao bọc toàn bộ cấu trúc văn bản HTML",
    category: "Cấu trúc & Tiêu đề",
    summary: "Cặp thẻ <html> ... </html> là phần tử gốc (root element) chứa toàn bộ mã của trang web.",
    targetAnswer: "Đáp án A: <html> ……</html>",
    expectedResult: "Trang web được bao bọc trọn vẹn trong cặp thẻ <html>.",
    html: `<html>
  <head>
    <title>Trang HTML Cơ Bản</title>
  </head>
  <body>
    <h2>Phần tử gốc &lt;html&gt;</h2>
    <p>Toàn bộ trang web bắt đầu bằng <code>&lt;html&gt;</code> và kết thúc bằng <code>&lt;/html&gt;</code>.</p>
  </body>
</html>`,
    css: `body {
  font-family: sans-serif;
  padding: 16px;
  background: #f1f5f9;
}
h2 {
  color: #047857;
}`,
  },

  "Q-TIN-12F-MC-37": {
    questionId: "Q-TIN-12F-MC-37",
    questionNumber: 37,
    title: "Câu 37: Thẻ bao bọc phần thân văn bản HTML",
    category: "Cấu trúc & Tiêu đề",
    summary: "Cặp thẻ <body> ... </body> chứa toàn bộ nội dung hiển thị trực tiếp cho người xem trang web.",
    targetAnswer: "Đáp án C: <body> ……</body>",
    expectedResult: "Tất cả chữ, ảnh, bảng hiển thị trên màn hình đều nằm bên trong thẻ <body>.",
    html: `<body>
  <h1>Đây là nội dung hiển thị trong &lt;body&gt;</h1>
  <p>Mọi thứ bạn nhìn thấy trên trang web (văn bản, nút bấm, hình ảnh) đều phải đặt bên trong cặp thẻ <code>&lt;body&gt;</code> và <code>&lt;/body&gt;</code>.</p>
  <button style="padding: 8px 16px; background: #2563eb; color: white; border: none; border-radius: 6px;">Nút bấm trong body</button>
</body>`,
    css: `body {
  font-family: sans-serif;
  padding: 16px;
  background-color: #faf5ff;
}
h1 {
  color: #7e22ce;
}`,
  },

  "Q-TIN-12F-MC-38": {
    questionId: "Q-TIN-12F-MC-38",
    questionNumber: 38,
    title: "Câu 38: Cú pháp viết chú thích trong mã nguồn HTML",
    category: "Định dạng & Chú thích",
    summary: "Cú pháp chú thích <!-- nội dung --> giúp ghi chú trong code và không hiển thị ra màn hình duyệt web.",
    targetAnswer: "Đáp án C: <!-- và -->",
    expectedResult: "Dòng chú thích ẩn hoàn toàn trên giao diện trình duyệt nhưng có trong mã nguồn.",
    html: `<div class="demo">
  <h2>Xem ví dụ về chú thích HTML:</h2>
  <!-- Chú thích: Đoạn văn dưới đây dành cho học sinh lớp 12 ôn thi -->
  <p>Dòng chữ này <strong>CÓ HIỂN THỊ</strong> trên màn hình.</p>
  <!-- Trình duyệt sẽ bỏ qua phần này và không hiển thị -->
  <p style="color: #64748b; font-size: 13px;">Hãy mở mã nguồn HTML bên trái: bạn sẽ thấy dòng chú thích <code>&lt;!-- ... --&gt;</code> không hề xuất hiện ở đây!</p>
</div>`,
    css: `.demo {
  font-family: sans-serif;
  padding: 16px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}`,
  },

  "Q-TIN-12F-MC-19": {
    questionId: "Q-TIN-12F-MC-19",
    questionNumber: 19,
    title: "Câu 19: Tác dụng của phần tử liên kết <a>",
    category: "Siêu liên kết & Hình ảnh",
    summary: "Thẻ <a> dùng để tạo siêu liên kết (hyperlink) đưa người dùng sang trang web khác hoặc vị trí khác.",
    targetAnswer: "Đáp án C: Tạo các siêu liên kết",
    expectedResult: "Liên kết chuyển trang hoạt động trực tiếp khi nhấn chuột.",
    html: `<div class="link-demo">
  <h3>Khám phá siêu liên kết với thẻ &lt;a&gt;:</h3>
  <p>Nhấp vào liên kết dưới đây để thử nghiệm:</p>
  <a href="https://moet.gov.vn" target="_blank" class="my-link">
    🌐 Cổng thông tin Bộ Giáo dục & Đào tạo (Mở tab mới)
  </a>
  <p style="margin-top: 16px; font-size: 12px; color: #64748b;">
    Thuộc tính <code>href</code> chỉ định địa chỉ đích, <code>target="_blank"</code> mở trong tab mới.
  </p>
</div>`,
    css: `.link-demo {
  font-family: sans-serif;
  padding: 20px;
  background: white;
  border-radius: 10px;
}
.my-link {
  display: inline-block;
  padding: 10px 16px;
  background-color: #0284c7;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
}
.my-link:hover {
  background-color: #0369a1;
}`,
  },

  "Q-TIN-12F-MC-41": {
    questionId: "Q-TIN-12F-MC-41",
    questionNumber: 41,
    title: "Câu 41: Danh sách không thứ tự với thẻ <ul>",
    category: "Danh sách (List)",
    summary: "Thẻ <ul> tạo danh sách không thứ tự (Unordered List) hiển thị bằng các dấu chấm đầu dòng.",
    targetAnswer: "Đáp án B: <ul>",
    expectedResult: "Danh sách hiển thị các mục gạch đầu dòng dạng bullet tròn.",
    html: `<div class="list-card">
  <h3>Các thiết bị phần cứng mạng (Thẻ &lt;ul&gt;):</h3>
  <ul>
    <li>Bộ định tuyến (Router)</li>
    <li>Bộ chuyển mạch (Switch)</li>
    <li>Cáp mạng xoắn đôi (UTP/STP)</li>
    <li>Điểm truy cập không dây (Access Point)</li>
  </ul>
</div>`,
    css: `.list-card {
  font-family: sans-serif;
  padding: 16px;
  background: #f8fafc;
  border-left: 4px solid #3b82f6;
}
h3 {
  margin-top: 0;
  color: #1e3a8a;
}
ul {
  line-height: 1.8;
  color: #334155;
}`,
  },

  "Q-TIN-12F-MC-43": {
    questionId: "Q-TIN-12F-MC-43",
    questionNumber: 43,
    title: "Câu 43: Liệt kê các danh mục trong danh sách với thẻ <li>",
    category: "Danh sách (List)",
    summary: "Thẻ <li> (List Item) dùng để chứa từng phần tử bên trong danh sách <ul> hoặc <ol>.",
    targetAnswer: "Đáp án A: <li>",
    expectedResult: "Từng mục được khai báo riêng rẽ bằng cặp thẻ <li>...</li>.",
    html: `<div class="demo">
  <h4>Kế hoạch ôn tập hôm nay (Mỗi mục là một thẻ &lt;li&gt;):</h4>
  <ol>
    <li>Ôn lý thuyết Chuyên đề 12F Web</li>
    <li>Luyện 30 câu trắc nghiệm trên app</li>
    <li>Thực hành viết bảng thời khóa biểu trong Web IDE</li>
  </ol>
</div>`,
    css: `.demo {
  font-family: sans-serif;
  padding: 16px;
  background: #fdf4ff;
  border-radius: 8px;
}
h4 {
  color: #86198f;
  margin-top: 0;
}
ol {
  line-height: 1.8;
}`,
  },

  "Q-TIN-12F-MC-44": {
    questionId: "Q-TIN-12F-MC-44",
    questionNumber: 44,
    title: "Câu 44: Thẻ hiển thị hình ảnh <img> và các thuộc tính",
    category: "Siêu liên kết & Hình ảnh",
    summary: "Thẻ <img> có thuộc tính src (đường dẫn), alt (mô tả), width, height; không có thuộc tính 'size'.",
    targetAnswer: "Đáp án D: size",
    expectedResult: "Hình ảnh được chèn với kích thước và văn bản thay thế alt rõ ràng.",
    html: `<div class="img-container">
  <h3>Chèn ảnh với thẻ &lt;img&gt;:</h3>
  <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&q=80" 
       alt="Máy tính xách tay và mã lập trình web" 
       width="100%" 
       style="border-radius: 8px; max-width: 350px;" />
  <p class="caption">Ảnh: Lập trình viên thiết kế giao diện web (src, alt, width)</p>
</div>`,
    css: `.img-container {
  font-family: sans-serif;
  padding: 16px;
  background: white;
  border-radius: 10px;
  text-align: center;
}
h3 {
  margin-top: 0;
  color: #1e293b;
}
.caption {
  font-size: 12px;
  color: #64748b;
  margin-top: 8px;
}`,
  },

  "Q-TIN-12F-MC-39": {
    questionId: "Q-TIN-12F-MC-39",
    questionNumber: 39,
    title: "Câu 39: Thẻ <table> dùng để tạo bảng trong HTML",
    category: "Bảng (Table)",
    summary: "Thẻ <table> bao bọc toàn bộ cấu trúc bảng, kết hợp <tr> (hàng), <th> (tiêu đề) và <td> (ô).",
    targetAnswer: "Đáp án A: <table>",
    expectedResult: "Bảng hiển thị đầy đủ hàng và cột có kẻ khung viền.",
    html: `<div class="table-wrap">
  <h3>Bảng danh sách thành viên nhóm (Thẻ &lt;table&gt;):</h3>
  <table border="1" cellpadding="8" style="width: 100%; border-collapse: collapse; text-align: left;">
    <tr style="background: #e2e8f0;">
      <th>STT</th>
      <th>Họ và tên</th>
      <th>Nhiệm vụ</th>
    </tr>
    <tr>
      <td>1</td>
      <td>Trần Minh Tuấn</td>
      <td>Trưởng nhóm • Viết HTML</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Lê Thị Mai</td>
      <td>Thành viên • Thiết kế CSS</td>
    </tr>
  </table>
</div>`,
    css: `.table-wrap {
  font-family: sans-serif;
  padding: 16px;
  background: white;
  border-radius: 8px;
}
h3 {
  color: #0f172a;
  margin-top: 0;
}`,
  },

  "Q-TIN-12F-MC-40": {
    questionId: "Q-TIN-12F-MC-40",
    questionNumber: 40,
    title: "Câu 40: Thẻ <tr> (Table Row) dùng để tạo dòng trong bảng",
    category: "Bảng (Table)",
    summary: "Mỗi dòng trong bảng được khai báo bằng cặp thẻ <tr> ... </tr>.",
    targetAnswer: "Đáp án B: <tr>",
    expectedResult: "Bảng có 3 dòng riêng biệt được định nghĩa bởi 3 thẻ <tr>.",
    html: `<table border="1" cellpadding="6" style="border-collapse: collapse; width: 100%;">
  <!-- Dòng 1: Tiêu đề -->
  <tr style="background-color: #2563eb; color: white;">
    <th>Mã môn</th>
    <th>Tên môn học</th>
    <th>Số tiết</th>
  </tr>
  <!-- Dòng 2: Hàng dữ liệu 1 -->
  <tr>
    <td>TIN12</td>
    <td>Tin học 12</td>
    <td>70</td>
  </tr>
  <!-- Dòng 3: Hàng dữ liệu 2 -->
  <tr>
    <td>TOAN12</td>
    <td>Toán học 12</td>
    <td>105</td>
  </tr>
</table>`,
    css: `body {
  font-family: sans-serif;
  padding: 16px;
  background: #f8fafc;
}`,
  },

  "Q-TIN-12F-MC-64": {
    questionId: "Q-TIN-12F-MC-64",
    questionNumber: 64,
    title: "Câu 64: Ghép cột trong bảng bằng thuộc tính colspan",
    category: "Bảng (Table)",
    summary: "Thuộc tính colspan='2' cho phép một ô tiêu đề trải rộng trên 2 cột liên tiếp.",
    targetAnswer: "Đáp án D: Thẻ th sử dụng thuộc tính colspan=\"2\"",
    expectedResult: "Ô tiêu đề 'Ngày thi' trải dài trên cả cột 'Ca sáng' và 'Ca chiều'.",
    html: `<div class="exam-table">
  <h3>Lịch thi Tốt nghiệp THPT (Ghép cột colspan="2"):</h3>
  <table border="1" cellpadding="8" style="width: 100%; border-collapse: collapse; text-align: center;">
    <thead>
      <tr style="background: #1e3a8a; color: white;">
        <th rowspan="2">Ngày</th>
        <th colspan="2">Buổi thi</th>
      </tr>
      <tr style="background: #3b82f6; color: white;">
        <th>Ca sáng</th>
        <th>Ca chiều</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>26/06</strong></td>
        <td>Ngữ văn (120 phút)</td>
        <td>Toán học (90 phút)</td>
      </tr>
      <tr>
        <td><strong>27/06</strong></td>
        <td>Tin học / KHTN / KHXH</td>
        <td>Ngoại ngữ (60 phút)</td>
      </tr>
    </tbody>
  </table>
</div>`,
    css: `.exam-table {
  font-family: sans-serif;
  padding: 16px;
  background: white;
  border-radius: 8px;
}
h3 {
  color: #1e3a8a;
  margin-top: 0;
}`,
  },

  "Q-TIN-12F-MC-45": {
    questionId: "Q-TIN-12F-MC-45",
    questionNumber: 45,
    title: "Câu 45: Ý nghĩa viết tắt của CSS (Cascading Style Sheets)",
    category: "Định kiểu CSS",
    summary: "CSS viết tắt của Cascading Style Sheets - Tập hợp các bảng kiểu xếp chồng dùng để tạo kiểu dáng giao diện.",
    targetAnswer: "Đáp án C: Cascading Style Sheets.",
    expectedResult: "Minh họa sức mạnh thay đổi diện mạo của CSS trên cùng một khung HTML.",
    html: `<div class="styled-box">
  <h2>Chào mừng đến với CSS!</h2>
  <p><strong>Cascading Style Sheets (CSS)</strong> giúp tách biệt hoàn toàn nội dung (HTML) và phong cách trang trí giao diện.</p>
  <div class="color-palette">
    <div class="badge primary">Màu chủ đạo: Xanh</div>
    <div class="badge secondary">Màu bổ trợ: Cam</div>
  </div>
</div>`,
    css: `.styled-box {
  background: linear-gradient(135deg, #eff6ff, #dbeafe);
  padding: 24px;
  border-radius: 12px;
  border: 2px solid #93c5fd;
  font-family: 'Segoe UI', sans-serif;
}
h2 {
  color: #1d4ed8;
  margin-top: 0;
}
.badge {
  display: inline-block;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  margin-right: 8px;
}
.primary {
  background: #2563eb;
  color: white;
}
.secondary {
  background: #f97316;
  color: white;
}`,
  },

  "Q-TIN-12F-MC-46": {
    questionId: "Q-TIN-12F-MC-46",
    questionNumber: 46,
    title: "Câu 46: Thuộc tính font-size trong CSS",
    category: "Định kiểu CSS",
    summary: "Thuộc tính font-size dùng để thiết lập kích thước phông chữ (px, pt, rem, em).",
    targetAnswer: "Đáp án A: font-size.",
    expectedResult: "Ba cấp độ kích thước phông chữ hiển thị rõ rệt (14px, 18px, 24px).",
    html: `<div class="font-demo">
  <p class="small-text">Dòng chữ nhỏ: font-size: 13px</p>
  <p class="medium-text">Dòng chữ vừa: font-size: 18px</p>
  <p class="large-text">Dòng chữ lớn: font-size: 26px</p>
</div>`,
    css: `.font-demo {
  font-family: sans-serif;
  padding: 16px;
  background: white;
}
.small-text {
  font-size: 13px;
  color: #64748b;
}
.medium-text {
  font-size: 18px;
  color: #0284c7;
  font-weight: 500;
}
.large-text {
  font-size: 26px;
  color: #0f172a;
  font-weight: 700;
  margin-bottom: 0;
}`,
  },

  "Q-TIN-12F-MC-69": {
    questionId: "Q-TIN-12F-MC-69",
    questionNumber: 69,
    title: "Câu 69: Thuộc tính margin tạo khoảng cách giữa các phần tử",
    category: "Định kiểu CSS",
    summary: "Thuộc tính margin tạo khoảng cách bên ngoài đường viền phần tử, phân biệt với padding là đệm bên trong.",
    targetAnswer: "Đáp án A: margin",
    expectedResult: "Khoảng cách cách nhau giữa 2 hộp được tạo bởi thuộc tính margin.",
    html: `<div class="box-a">Hộp A (margin-bottom: 20px)</div>
<div class="box-b">Hộp B (Tách biệt khỏi Hộp A nhờ margin)</div>`,
    css: `body {
  font-family: sans-serif;
  padding: 16px;
  background: #f1f5f9;
}
.box-a {
  background: #3b82f6;
  color: white;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 20px;
  text-align: center;
  font-weight: 600;
}
.box-b {
  background: #10b981;
  color: white;
  padding: 16px;
  border-radius: 8px;
  text-align: center;
  font-weight: 600;
}`,
  },

  "Q-TIN-12F-MC-90": {
    questionId: "Q-TIN-12F-MC-90",
    questionNumber: 90,
    title: "Câu 90: Gom nhóm bộ chọn trong CSS (h1, h2, h3)",
    category: "Định kiểu CSS",
    summary: "Khi dùng dấu phẩy giữa các bộ chọn h1, h2, h3, quy tắc viền sẽ được áp dụng cho cả 3 thẻ tiêu đề này.",
    targetAnswer: "Đáp án A: Cả h1, h2 và h3 đều nhận định dạng viền nét đứt màu đỏ",
    expectedResult: "Cả 3 tiêu đề đều có viền nét đứt màu đỏ đồng nhất.",
    html: `<div class="demo">
  <h1>Tiêu đề H1: Tin học THPT</h1>
  <h2>Tiêu đề H2: Chuyên đề 12F Thiết kế Web</h2>
  <h3>Tiêu đề H3: Ngôn ngữ định kiểu CSS</h3>
</div>`,
    css: `.demo {
  font-family: sans-serif;
  padding: 16px;
  background: white;
}
h1, h2, h3 {
  border: 2px dashed #ef4444;
  padding: 8px 12px;
  margin: 12px 0;
  border-radius: 6px;
  color: #1f2937;
}`,
  },

  "Q-TIN-12F-TF-04": {
    questionId: "Q-TIN-12F-TF-04",
    questionNumber: "TF-04",
    title: "Đúng/Sai: Thiết kế Website Quán Chè Ngon - Phố Cổ Nhuế",
    category: "Tình huống thực tế",
    summary: "Xây dựng trang thông tin quán ăn với tiêu đề nổi bật <h1>, địa chỉ, đánh giá và giờ mở cửa.",
    targetAnswer: "Ý kiến dùng h1 cho tên quán, p cho địa chỉ và số đánh giá là chính xác.",
    expectedResult: "Trang thông tin quán chè trực quan và sinh động.",
    html: `<div class="shop-card">
  <div class="shop-header">
    <span class="food-badge">🍧 ĐẶC SẢN PHỐ CỔ</span>
    <h1>CHÈ NGON – PHỐ CỔ NHUẾ</h1>
  </div>
  <div class="shop-info">
    <p class="address">📍 <strong>Địa chỉ:</strong> 136 Ngõ 43 Cổ Nhuế, Bắc Từ Liêm, Hà Nội</p>
    <p class="rating">⭐ <strong>Đánh giá:</strong> 999+ đánh giá 5 sao trên ShopeeFood</p>
    <p class="hours">⏰ <strong>Giờ mở cửa:</strong> 09:00 – 23:59 (Phục vụ cả ngày)</p>
  </div>
  <button class="order-btn" onclick="alert('Đã mở menu đặt chè!')">Xem Menu & Đặt món</button>
</div>`,
    css: `body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #fffbeb;
  padding: 16px;
  margin: 0;
}
.shop-card {
  max-width: 400px;
  margin: 0 auto;
  background: white;
  border-radius: 16px;
  padding: 20px;
  border: 1px solid #fde68a;
  box-shadow: 0 4px 6px rgba(245, 158, 11, 0.1);
}
.food-badge {
  background: #fef3c7;
  color: #b45309;
  font-size: 11px;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: 6px;
}
h1 {
  color: #92400e;
  font-size: 19px;
  margin: 8px 0 16px 0;
}
.shop-info p {
  font-size: 13.5px;
  color: #374151;
  margin: 8px 0;
  line-height: 1.5;
}
.order-btn {
  width: 100%;
  margin-top: 14px;
  background: #d97706;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
}`,
  },

  "Q-TIN-12F-TF-05": {
    questionId: "Q-TIN-12F-TF-05",
    questionNumber: "TF-05",
    title: "Đúng/Sai: Thiết kế Website Văn phòng Gia sư",
    category: "Tình huống thực tế",
    summary: "Xây dựng giao diện giới thiệu văn phòng gia sư với hotline gọi ngay và liên kết email mailto:.",
    targetAnswer: "Ý kiến dùng tel: và mailto: trong thẻ a để tạo liên kết liên hệ là hoàn toàn chuẩn xác.",
    expectedResult: "Website văn phòng gia sư chuyên nghiệp có thể bấm gọi hotline và gửi email.",
    html: `<div class="tutor-card">
  <h2>VĂN PHÒNG GIA SƯ SƯ PHẠM</h2>
  <p class="office-location">🏢 Phòng 509, Tòa nhà K1</p>
  
  <div class="contact-box">
    <p>📞 <strong>Hotline tư vấn:</strong> <a href="tel:0949401111" class="phone-link">0949.401.111</a> – <a href="tel:0912602769" class="phone-link">0912.602.769</a></p>
    <p>✉️ <strong>Email hỗ trợ:</strong> <a href="mailto:info@nnt.edu.vn" class="email-link">info@nnt.edu.vn</a></p>
  </div>

  <p class="slogan">"Đồng hành cùng học sinh chinh phục điểm 9+ kỳ thi Tốt nghiệp THPT"</p>
</div>`,
    css: `body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #f8fafc;
  padding: 16px;
  margin: 0;
}
.tutor-card {
  max-width: 420px;
  margin: 0 auto;
  background: white;
  border-radius: 12px;
  padding: 20px;
  border: 1px solid #cbd5e1;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}
h2 {
  color: #1e3a8a;
  font-size: 18px;
  margin-top: 0;
  text-align: center;
}
.office-location {
  text-align: center;
  color: #64748b;
  font-size: 13px;
  margin-bottom: 16px;
}
.contact-box {
  background: #eff6ff;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 13.5px;
}
.contact-box p {
  margin: 6px 0;
}
.phone-link, .email-link {
  color: #2563eb;
  font-weight: 600;
  text-decoration: none;
}
.phone-link:hover, .email-link:hover {
  text-decoration: underline;
}
.slogan {
  text-align: center;
  font-style: italic;
  font-size: 12.5px;
  color: #475569;
  margin-top: 16px;
}`,
  },
};

export function getHtmlCssExerciseForQuestion(questionId: string): HtmlCssQuestionExercise | undefined {
  return HTML_CSS_QUESTION_EXERCISES[questionId];
}
