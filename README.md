# Web App Ôn Luyện Thi Tốt Nghiệp THPT (Neumorphic Mobile-First)

Ứng dụng web ôn thi tốt nghiệp THPT được thiết kế tối ưu cho học sinh sử dụng trên điện thoại di động với phong cách **Neumorphism** đồng nhất, kết nối trực tiếp tài liệu từ **Google Drive**, hệ thống **Gợi ý Socratic đa tầng tuyệt đối không lộ đáp án**, và công cụ **thống kê & phân tích điểm yếu học sinh**.

---

## 🌟 Các Tính Năng Cốt Lõi

### 1. Nguồn Tài Liệu Khép Kín Từ Google Drive
- **Tuyệt đối không bịa đặt nguồn ngoài**: Hệ thống chỉ nạp và hiển thị các câu hỏi, lý thuyết do giáo viên/học sinh liên kết qua Google Drive.
- Hỗ trợ định dạng Google Sheets xuất bản dạng CSV, chia theo cột tiêu chuẩn: `ID, MonHoc, ChuDe, MucDo, CauHoi, DapAnA, DapAnB, DapAnC, DapAnD, DapAnDung, GoiY_L1, GoiY_L2, GoiY_L3, GiaiThich`.

### 2. Giao Diện Neumorphism Đồng Nhất (Mobile-First)
- Thiết kế riêng cho tỷ lệ màn hình điện thoại (375px - 430px) và responsive sang máy tính bảng, desktop.
- Bảng màu dịu mắt `#e6ecf5` kết hợp hiệu ứng đổ bóng kép (light & dark shadows).
- **Sidebar bên trái** dạng trượt (drawer) chứa cây cấu trúc bài học: Môn học $\rightarrow$ Chương $\rightarrow$ Dạng bài tập $\rightarrow$ Tiến độ.
- **Thanh nút bấm luôn được cố định ở đáy màn hình (Fixed Bottom Bar)** với màu xanh dương nổi bật (`#2563eb`), bao gồm các thao tác:
  - *💡 Gợi ý bước làm* (3 nấc gợi mở)
  - *💬 Gia sư Socratic* (Đối thoại phản tư)
  - *Kiểm tra đáp án / Câu tiếp theo*

### 3. Cơ Chế Gợi Ý Kép & Gia Sư Socratic (Zero-Answer Leak)
- **Tuyệt đối không đưa ra đáp án**: Dù học sinh có hỏi trực tiếp hay xin đáp án, hệ thống luôn từ chối và chỉ hướng dẫn cách tư duy.
- **Tầng 1 (Gợi ý tĩnh từng nấc)**:
  - Nấc 1: Lý thuyết & Khái niệm trọng tâm.
  - Nấc 2: Công thức và phương pháp tiếp cận.
  - Nấc 3: Dẫn dắt từng bước tính toán.
- **Tầng 2 (Gia sư Socratic động)**:
  - Cho phép học sinh chat và hỏi các vướng mắc trong lúc làm bài.
  - Tích hợp bộ lọc **Guardrail Filter** tự động quét và kiểm duyệt, chặn mọi chuỗi ký tự chỉ định đáp án (A, B, C, D hay kết quả số).

### 4. Thống Kê & Phân Tích Điểm Yếu Học Sinh
- Lưu trữ lịch sử toàn bộ các lượt làm bài, thời gian làm và số lần cần trợ giúp.
- Dashboard tự động tổng hợp:
  - Tỷ lệ chính xác chung và theo từng chuyên đề.
  - Đánh giá mức độ: *Đạt*, *Cần luyện tập*, *Chưa đạt*.
  - **Chỉ rõ vị trí học sinh chưa đạt**: Đang bị hổng ở phần định nghĩa lý thuyết, sai biến đổi công thức hay gặp lỗi vận dụng.
  - Nút chuyển nhanh đến dạng bài cần khắc phục.

### 5. Hỗ Trợ Công Thức Toán / Lý / Hóa (KaTeX)
- Render mượt mà mọi công thức Toán - Lý - Hóa phức tạp theo định dạng LaTeX: `\( ... \)` hoặc `$...$`.

---

## 🚀 Hướng Dẫn Cài Đặt & Khởi Chạy

```bash
# 1. Cài đặt dependencies (nếu chưa cài)
npm install

# 2. Khởi chạy môi trường phát triển (Development)
npm run dev

# 3. Mở trình duyệt tại:
# http://localhost:3000
```
