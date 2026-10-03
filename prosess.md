# Tiến trình dự án OnTNTHPT

Cập nhật: 2026-10-03 (vá cảnh báo Microsoft SmartScreen trên Vercel)

## Mục tiêu hiện tại

Gộp ngân hàng câu hỏi **Chuyên đề 12B (Kết nối mạng)** vào **Bài 3 – Một số thiết bị Mạng thông dụng** (`tin-cd3-thiet-bi-mang`).

Nguồn duy nhất: tài liệu Google Drive. Không dùng nguồn ngoài.

---

## Đã hoàn thành

### 1. Kết nối Google Drive

- Service account: `drive-scanner@onthithpt-509307.iam.gserviceaccount.com`
- Thư mục gốc OnTNTHPT: `19toY6VB5iERD2D9-tirycSjEz_YQbowL`
- Thư mục Tin: `1wcSRCsZ9wzjO9ypblF_9L4si9kPm_uop`
- Key SA **không** commit vào repo (`.gitignore`: `*onthithpt*.json*`, `credentials*.json`)

### 2. Gộp 12B vào Bài 3 — HOÀN TẤT 2026-10-03

Trước đó UI vẫn hiện 2 topic song song (ảnh sidebar: 12B 83 câu + Bài 3 191 câu). Đã gộp hẳn:

- Tạo `src/data/questions12b.ts`: 83 câu (72 MC + 11 TF), `topicId` = `tin-cd3-thiet-bi-mang`
- `sampleBank.ts`:
  - Xóa topic riêng `tin-thiet-bi-giao-thuc-mang` (không còn "Chuyên đề 12B" trên sidebar)
  - Bài 3: `totalQuestions: 274` (`mcCount: 224`, `tfCount: 50`)
  - Import + spread `CHUYEN_DE_12B_QUESTIONS`
  - Xóa 83 câu 12B nhúng sẵn và 3 câu trùng ID (`Q-TIN-NET-11/42/44`)
- Giữ `questionsCd3.ts` (191 câu gốc) độc lập, chỉ **thêm** 83 câu 12B
- Không trùng ID giữa 12B và CD3

Kết quả sidebar kỳ vọng: **Chủ đề 2** chỉ còn 1 bài học — **Bài 3: Một số thiết bị Mạng thông dụng** (274 câu: 224 TN + 50 Đ/S).

### 3. Remap topicId trên toàn app — HOÀN TẤT

| File | Việc đã làm |
|------|-------------|
| `src/lib/driveFolderScanner.ts` | File `12b` / `kết nối mạng` / `thiet bi mang` / `tcp` map vào `tin-cd3-thiet-bi-mang` |
| `src/app/page.tsx` | Alias `tin-mang-dung-sai` và `tin-thiet-bi-giao-thuc-mang` → `tin-cd3-thiet-bi-mang`; `STRUCTURE_VERSION` = `2026_GD1_V10_BAI3_GOP_12B` |
| `src/lib/competencyEngine.ts` | NLa chỉ còn `tin-cd3-thiet-bi-mang`, tên gợi ý = Bài 3 |
| `src/data/weeklyPlan.ts` | `tuan-08-10` chỉ còn `tin-cd3-thiet-bi-mang`, target 274 câu |

### 4. Theory bank — HOÀN TẤT (key gốc đã đổi)

`src/data/theoryBank.ts`: key gốc đổi sang `tin-cd3-thiet-bi-mang`. Alias ID cũ vẫn đọc được:

```
TOPIC_THEORY_MAP["tin-thiet-bi-giao-thuc-mang"] = TOPIC_THEORY_MAP["tin-cd3-thiet-bi-mang"]
TOPIC_THEORY_MAP["tin-mang-dung-sai"] = TOPIC_THEORY_MAP["tin-cd3-thiet-bi-mang"]
```

### 5. Parser Drive (`parseTextDocumentQuestions`)

- Tách dòng khi option A/B/C/D dính stem
- Marker TF: `TRẮC NGHIỆM Đ/S`, `2. Câu trắc nghiệm đúng sai`, `PHẦN II`
- Dừng phần MC khi gặp marker TF (tránh nuốt TF thành MC)

### 6. Vá câu bóc tách lỗi (theo đúng đề Drive)

| Câu | Lỗi cũ | Đã sửa |
|-----|--------|--------|
| `Q-TIN-11F-MC-24` | stem `?` | `Phát biểu nào sau đây là đúng về cơ sở dữ liệu (CSDL)?` |
| `Q-TIN-11F-MC-61` | stem `?` | `Phát biểu nào sau đây là đúng về cơ sở dữ liệu (CSDL)?` |
| `Q-TIN-11F-MC-82` | stem `là gì?` | `Mục đích chính của hệ quản trị cơ sở dữ liệu (DBMS) là gì?` |
| `Q-TIN-11F-MC-91` | stem `là gì?` | `Mục đích chính của một hệ quản trị cơ sở dữ liệu (DBMS) là gì?` |
| `Q-TIN-12E-MC-43` | option D rỗng | `Thiết kế các sản phẩm 3D.` |
| `Q-TIN-12E-MC-70` | stem `B): Thẻ HTML...` | `Thẻ HTML được viết trong cặp dấu nào?` |
| `Q-TIN-12B-MC-002` option C | `Local Area` (cắt nguồn) | `Local Area.` (giữ đúng đề) |

### 7. TF CD3 / TF 12B

- `questionsCd3.ts` TF: `Q-TIN-CD3-TF-153` … `Q-TIN-CD3-TF-191` (39 câu)
- 12B TF: `Q-TIN-TF-NET-01` … `Q-TIN-TF-NET-11` (11 câu)

---

## Đang dang dở / còn lại

### A. Theory bank — đã xong

Key gốc đã là `tin-cd3-thiet-bi-mang`. Alias ID cũ giữ để đọc cache/localStorage cũ.

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

---

## Quyết định kỹ thuật đã chốt

1. **Gộp 12B vào Bài 3**, không giữ hai topic song song — **đã triển khai xong**.
2. ID topic Bài 3 giữ nguyên: `tin-cd3-thiet-bi-mang`.
3. Lý thuyết: key gốc = `tin-cd3-thiet-bi-mang`, alias ID cũ.
4. Giữ `questionsCd3.ts` độc lập, chỉ **thêm** 83 câu 12B.
5. Không commit `/tmp/opencode/sa.json` hay private key.
6. `STRUCTURE_VERSION` = `2026_GD1_V10_BAI3_GOP_12B` để client xóa cache topic cũ.

---

## File liên quan

| Đường dẫn | Vai trò |
|-----------|---------|
| `prosess.md` | Nhật ký tiến trình; cập nhật sau mỗi lần build |
| `src/data/questions12b.ts` | Ngân hàng 12B đã gộp Bài 3 (83 câu) |
| `src/data/questionsCd3.ts` | 191 câu Bài 3 gốc + TF |
| `src/data/sampleBank.ts` | `INITIAL_SUBJECTS` + spread câu hỏi |
| `src/lib/driveFolderScanner.ts` | Map file Drive + parser |
| `src/app/page.tsx` | Filter topic / cache version |
| `src/lib/competencyEngine.ts` | Năng lực NLa |
| `src/data/weeklyPlan.ts` | `tuan-08-10` |
| `src/data/theoryBank.ts` | Lý thuyết mạng (key gốc Bài 3 + alias) |
| `src/lib/googleAuth.ts` | JWT Drive readonly |

File Drive:

- CD3: `194sTkPkdn29NAle3x3ScPFIcT4JZf2mk`
- 12B: `1z1po2n3jrSVv-yrsBSr1fJIxubNiM_mr`

Tạm (không commit): `/tmp/opencode/token.txt`, `/tmp/opencode/parsed/`, `/tmp/opencode/extracted/`

---

### 8. Cảnh báo SmartScreen trên Vercel — 2026-10-03

`https://on-tnthpt.vercel.app` bị Microsoft Defender SmartScreen gắn “This site has been reported as unsafe”. Đây **không** phải lỗi build Next.js. Nguyên nhân phổ biến: subdomain `*.vercel.app` mới + form đăng nhập.

Đã làm trong code:
- Header bảo mật (`X-Content-Type-Options`, `X-Frame-Options`, `Permissions-Policy` chặn camera/mic/payment)
- Metadata + JSON-LD rõ đây là app giáo dục nội bộ, không thu phí
- Tắt âm thanh mặc định (tránh tín hiệu autoplay)
- Ghi chú trên cổng đăng nhập: không thu phí, không hỏi ngân hàng/CCCD

Việc thầy/cô cần làm ngoài code:
1. Trên trang đỏ: **Report that this is not a scam site**
2. Gắn tên miền trường (vd. `ontn.thptnguyensinhsac.edu.vn`) trên Vercel — cách triệt để nhất

---

## Việc tiếp theo (ưu tiên)

1. ~~Đổi key gốc `theoryBank` sang `tin-cd3-thiet-bi-mang`~~ — xong.
2. Chạy lại parser trên 9 file Drive; bổ sung câu thiếu (ưu tiên 10F, 11F, 12E, 11D/12D, 12G).
3. Rà soát stem/option 10F và các câu `content` ngắn bất thường còn lại.
4. Gắn custom domain + báo cáo SmartScreen (ngoài code).
