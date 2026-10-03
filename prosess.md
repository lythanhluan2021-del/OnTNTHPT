# Tiến trình dự án OnTNTHPT

Cập nhật: 2026-10-03

## Mục tiêu hiện tại

Gộp ngân hàng câu hỏi **Chuyên đề 12B (Kết nối mạng)** vào **Bài 3 – Một số thiết bị Mạng thông dụng** (`tin-cd3-thiet-bi-mang`), đồng thời rà soát bóc tách câu hỏi các chuyên đề khác từ Google Drive.

Nguồn duy nhất: tài liệu Google Drive. Không dùng nguồn ngoài.

---

## Đã hoàn thành

### 1. Kết nối Google Drive

- Service account: `drive-scanner@onthithpt-509307.iam.gserviceaccount.com`
- Thư mục gốc OnTNTHPT: `19toY6VB5iERD2D9-tirycSjEz_YQbowL`
- Thư mục Tin: `1wcSRCsZ9wzjO9ypblF_9L4si9kPm_uop`
- Đã tải 9 file `.docx` Tin, trích text vào `/tmp/opencode/extracted/`
- Key SA **không** commit vào repo (`.gitignore`: `*onthithpt*.json*`, `credentials*.json`)

### 2. Gộp 12B vào Bài 3

- Tạo `src/data/questions12b.ts`: 83 câu (72 MC + 11 TF), `topicId` = `tin-cd3-thiet-bi-mang`
- `sampleBank.ts`:
  - Xóa topic riêng `tin-thiet-bi-giao-thuc-mang`
  - Bài 3: `totalQuestions: 274` (`mcCount: 224`, `tfCount: 50`)
  - Import + spread `CHUYEN_DE_12B_QUESTIONS`
- Giữ `questionsCd3.ts` (191 câu gốc) vì parser cũ nuốt TF CD3 thành MC

### 3. Remap topicId trên toàn app

| File | Việc đã làm |
|------|-------------|
| `src/lib/driveFolderScanner.ts` | File `12b` / `kết nối mạng` / `thiet bi mang` / `tcp` map vào `tin-cd3-thiet-bi-mang` |
| `src/app/page.tsx` | Alias `tin-mang-dung-sai` và `tin-thiet-bi-giao-thuc-mang` → `tin-cd3-thiet-bi-mang`; `STRUCTURE_VERSION` = `2026_GD1_V10_BAI3_GOP_12B` |
| `src/lib/competencyEngine.ts` | NLa chỉ còn `tin-cd3-thiet-bi-mang` |
| `src/data/weeklyPlan.ts` | `tuan-08-10` chỉ còn `tin-cd3-thiet-bi-mang`, target 274 câu |

### 4. Parser Drive (`parseTextDocumentQuestions`)

- Tách dòng khi option A/B/C/D dính stem
- Marker TF: `TRẮC NGHIỆM Đ/S`, `2. Câu trắc nghiệm đúng sai`, `PHẦN II`
- Dừng phần MC khi gặp marker TF (tránh nuốt TF thành MC)

### 5. Vá câu bóc tách lỗi (theo đúng đề Drive)

| Câu | Lỗi cũ | Đã sửa |
|-----|--------|--------|
| `Q-TIN-11F-MC-24` | stem `?` | `Phát biểu nào sau đây là đúng về cơ sở dữ liệu (CSDL)?` |
| `Q-TIN-11F-MC-61` | stem `?` | `Phát biểu nào sau đây là đúng về cơ sở dữ liệu (CSDL)?` |
| `Q-TIN-11F-MC-82` | stem `là gì?` | `Mục đích chính của hệ quản trị cơ sở dữ liệu (DBMS) là gì?` |
| `Q-TIN-11F-MC-91` | stem `là gì?` | `Mục đích chính của một hệ quản trị cơ sở dữ liệu (DBMS) là gì?` |
| `Q-TIN-12E-MC-43` | option D rỗng | `Thiết kế các sản phẩm 3D.` |
| `Q-TIN-12E-MC-70` | stem `B): Thẻ HTML...` | `Thẻ HTML được viết trong cặp dấu nào?` |
| `Q-TIN-12B-MC-002` option C | `Local Area` (cắt nguồn) | `Local Area.` (giữ đúng đề) |

### 6. TF CD3

- Marker `TRẮC NGHIỆM Đ/S` (~offset 32837) đã được parser nhận
- `questionsCd3.ts` đã có TF: `Q-TIN-CD3-TF-153` … `Q-TIN-CD3-TF-191`

### 7. TF 12B chỉnh tay theo gạch chân đề

- `Q-TIN-12B-TF-079` … `Q-TIN-12B-TF-083` (câu 7–11)

---

## Đang dang dở / còn lại

### A. Theory bank vẫn keyed theo ID cũ

`src/data/theoryBank.ts` vẫn lưu lý thuyết dưới key `tin-thiet-bi-giao-thuc-mang`, rồi alias:

```
TOPIC_THEORY_MAP["tin-cd3-thiet-bi-mang"] = TOPIC_THEORY_MAP["tin-thiet-bi-giao-thuc-mang"]
```

Hoạt động được nhờ alias, nhưng chưa đổi key gốc sang `tin-cd3-thiet-bi-mang`. `page.tsx` vẫn giữ alias đọc lý thuyết cho ID cũ.

### B. Parser Drive chưa bóc đủ số câu so với đề

| File Drive | Trong đề | Parser ra | Còn thiếu |
|------------|----------|-----------|-----------|
| CD3 | 192 | 191 MC + TF đã bổ sung tay | 1 MC |
| 10F | 59 | 45 | 14 |
| 11F | 137 | 120 | 17 |
| 12E | 113 | 99 | 14 |
| 12A | 101 | 96 | 5 |
| 12F | 146 | 127 | 19 |
| 11D/12D | 74 | 37 | 37 |
| 12G | 69 | 38 | 31 |

Cần chạy lại extractor cải tiến trên toàn bộ 9 file và bổ sung câu còn thiếu vào ngân hàng.

### C. Câu 10F chưa rà soát từng stem lỗi

Mới vá 11F và 12E. 10F (parser 59→45) chưa đối chiếu stem/option từng câu với file Drive.

### D. 11D/12D và 12G bóc tách kém

Tỷ lệ mất câu cao (khoảng 50%). Có thể do format đề khác (dòng dính, đánh số không chuẩn, TF/MC lẫn). Chưa xử lý riêng.

### E. File tiến trình

Đã tạo `prosess.md` ở thư mục gốc repo (2026-10-03) để lần sau tiếp nối.

---

## Quyết định kỹ thuật đã chốt

1. **Gộp 12B vào Bài 3**, không giữ hai topic song song.
2. ID topic Bài 3 giữ nguyên: `tin-cd3-thiet-bi-mang`.
3. Lý thuyết 12B dùng alias, chưa đổi key gốc `theoryBank`.
4. Giữ `questionsCd3.ts` độc lập, chỉ **thêm** 83 câu 12B.
5. Không commit `/tmp/opencode/sa.json` hay private key.

---

## File liên quan

| Đường dẫn | Vai trò |
|-----------|---------|
| `prosess.md` | Nhật ký tiến trình; cập nhật sau mỗi lần build |
| `src/data/questions12b.ts` | Ngân hàng 12B đã gộp Bài 3 |
| `src/data/questionsCd3.ts` | 191 câu Bài 3 gốc + TF |
| `src/data/sampleBank.ts` | `INITIAL_SUBJECTS` + spread câu hỏi |
| `src/lib/driveFolderScanner.ts` | Map file Drive + parser |
| `src/app/page.tsx` | Filter topic / cache version |
| `src/lib/competencyEngine.ts` | Năng lực NLa |
| `src/data/weeklyPlan.ts` | `tuan-08-10` |
| `src/data/theoryBank.ts` | Lý thuyết mạng (key cũ + alias) |
| `src/lib/googleAuth.ts` | JWT Drive readonly |

File Drive:

- CD3: `194sTkPkdn29NAle3x3ScPFIcT4JZf2mk`
- 12B: `1z1po2n3jrSVv-yrsBSr1fJIxubNiM_mr`

Tạm (không commit): `/tmp/opencode/token.txt`, `/tmp/opencode/parsed/`, `/tmp/opencode/extracted/`

---

## Việc tiếp theo (ưu tiên)

1. Đổi key gốc `theoryBank` sang `tin-cd3-thiet-bi-mang`, giữ alias ID cũ.
2. Chạy lại parser trên 9 file Drive; bổ sung câu thiếu (ưu tiên 10F, 11F, 12E, 11D/12D, 12G).
3. Rà soát stem/option 10F và các câu `content` ngắn bất thường còn lại.
4. Commit khi được yêu cầu (không gồm SA key / token).
