# Tiến trình dự án OnTNTHPT

Cập nhật: 2026-10-05 **HẾT QUOTA** — đã rebase + push GitHub. Phiên sau đọc mục này rồi làm 12B.

## ĐỌC TRƯỚC KHI LÀM (phiên mới / hết quota)

**Luôn cập nhật `prosess.md` trước khi dừng** — phiên sau chỉ đọc file này để biết đang ở đâu.

Remote: `https://github.com/lythanhluan2021-del/OnTNTHPT` — branch `main`.
12A bank đang dùng: `src/data/questions12a.ts` (**97** câu: 79 MC + 18 TF) — **không** dùng bản Q-TIN-AI-* nhúng sampleBank (đã filter).
12B bank: `src/data/questions12b.ts` (83 câu, topicId = `tin-cd3-thiet-bi-mang`).

### Việc ƯU TIÊN ngay (làm theo thứ tự, đừng nhảy)

1. **12B** stem-match `questions12b.ts` vs `/tmp/opencode/extracted/12B.txt`; option C `Local Area .`; TF 9/11 đủ 4 ý.
2. **Parser TF + match 11D/12D** — marker `II. CÂU HỎI TRẮC NGHIỆM ĐÚNG – SAI` (khoảng L372 extract); **không** cắt MC ở `PHẦN II` / `II. CÂU HỎI ÔN TẬP`.
3. **12G** marker TF `2. DẠNG CÂU HỎI D2` (L404); zip 37 mismatch **bỏ**; match stem; empty 7 câu.
4. **11F** marker `2. CÂU HỎI TRẮC NGHIỆM ĐÚNG SAI` (L725); empty 6 câu; match stem.
5. **Không** dán private key vào `prosess.md`. Key: `credentials-onthithpt.json` (gitignore).
6. **Không** tin `compare_banks.py` zip tuần tự khi đề reset số câu theo NB/TH/VD.

### Protocol mỗi phiên

1. Đọc **mục này** + **Nhật ký phiên mới nhất** + **Bảng trạng thái chuyên đề**.
2. Check: `credentials-onthithpt.json` còn; `/tmp/opencode/drive/*.docx` và `/tmp/opencode/extracted/*.txt` còn? Nếu mất thì tải lại Drive (SA + file IDs bên dưới).
3. Làm **một** chuyên đề (hoặc một hạng parser) đến xong, ghi kết quả vào bảng + nhật ký **trước khi** chuyển chuyên đề khác.
4. Trước khi hết phiên: ghi **đang dở chỗ nào** (file, câu số, script, lệnh tiếp theo). Commit + `git pull --rebase` + `git push origin main`.

### Lệnh / file sẵn (không tạo lại nếu còn)

- SA: `credentials-onthithpt.json` — email `drive-scanner@onthithpt-509307.iam.gserviceaccount.com`
- Drive Tin: `1wcSRCsZ9wzjO9ypblF_9L4si9kPm_uop` — root `19toY6VB5iERD2D9-tirycSjEz_YQbowL`
- Docx: `/tmp/opencode/drive/{10F,11D12D,11F,12A,12B,12E,12F,12G,CD3}.docx`
- Extract (gạch chân `__U__`): `/tmp/opencode/extracted/*.txt`
- So sánh: `/tmp/opencode/compare_banks.py` → `/tmp/opencode/compare_report.json` (**zip tuần tự — chỉ tin khi số MC 4opt == bank và đề không reset số câu**)
- Parser app: `src/lib/driveFolderScanner.ts` + `src/lib/docxExtractor.ts`
- Auth: `src/lib/googleAuth.ts` — token tạm `/tmp/opencode/token.txt`

File IDs: CD3 `194sTkPkdn29NAle3x3ScPFIcT4JZf2mk`; 12B `1z1po2n3jrSVv-yrsBSr1fJIxubNiM_mr`; 12A `1Gvs7Qdapo7gM6fx-8OSRjJ8fPbFUltZ7`; 12F `1rG1KHFl3DhTmVRg7FK_pD7Yj6TBjg8cp`; 12E `1xB2B3HCvk32TGfYitSygKHHjhLF_S2OA`.

### Bảng trạng thái chuyên đề (cập nhật khi xong từng cái)

| Chuyên đề | Đề (Câu/U) | Bank | Parser MC/TF | Đối chiếu stem | Việc còn |
|-----------|------------|------|--------------|----------------|----------|
| 10F Python | 59/56 | 59 | 54+5 OK | **XONG** 52/54 MC gạch chân; 2 câu không gạch chân giữ D/C | Không |
| 12A AI | 101/82 | **97** (`questions12a.ts` 79 MC+18 TF) | remote đã reparse | 6 câu thiếu đã có trong bank 12A mới | TF 18 chưa so từng ý với extract |
| CD3 mạng | 191/240 | 191 CD3 (+12B 83) | 151 MC tới `TRẮC NGHIỆM Đ/S` | **XONG stem MC** 149/153 đáp án khớp; 4 unmatched = đề dính không `Câu N` — bank đúng | Vá stem `.edu`; TF 38 chưa so từng ý |
| 12B kết nối | 80/81 | 83 (`questions12b.ts`) | 72 MC + 11 TF | **Chưa** stem-match phiên này | ƯU TIÊN 1; option C `Local Area .`; TF 9/11 đủ 4 ý |
| 11D/12D | 74/65 | 73 | 74 MC, **TF=0** | Chưa | Parser TF (`II. CÂU HỎI TRẮC NGHIỆM ĐÚNG – SAI`) |
| 12F HTML | 146/162 | 146 | 132+14 | **XONG stem MC** 131/132 đáp án khớp | TF 14 chưa so từng ý |
| 12E Web | 113/117 | 113 | 89+24 | **XONG stem MC**; đã gỡ prefix `TH):`/`H):`/`B):`/`VD):` | TF 24 chưa so từng ý |
| 12G HN | 69/72 | 73 | 69 MC, **TF=0** | Zip 37 mismatch — **không tin** | Parser TF; match stem |
| 11F CSDL | 138/126 | 138 | 138 MC, **TF=0** | Chưa | Parser TF; match stem |

**Đang làm dở (2026-10-05 HẾT QUOTA):** MC xong 10F, CD3, 12F, 12E. 12A dùng bank remote 97 câu. Bước tiếp phiên sau: **12B** stem-match (`questions12b.ts` vs `/tmp/opencode/extracted/12B.txt`). Sau 12B → TF 11D/12D.

### Nhật ký 2026-10-05 (phiên này, sau rebase)

- Remote đã có `questions12a.ts` (97) + reparse 12B; sampleBank filter bỏ Q-TIN-AI-* legacy. Conflict rebase: **giữ count 97**, không 102.
- Parser TS: `TF_SECTION_HEADING` **không** dùng `PHẦN II`; heuristic thiếu chữ `B.`; map 11D/12E trước 12F.
- **CD3 MC:** 0 lệch đáp án; vá `Q-TIN-CD3-MC-083` `có.edu` → `có .edu`.
- **12F MC:** 0 lệch đáp án.
- **12E MC:** gỡ 20 prefix `TH):`/`H):`/`B):`/`VD):` trong `questions12e.ts`; Câu 29 A=A.
- **Không zip thứ tự Câu** (`compare_banks.py` false positive).
- Không commit SA key.

---

## Mục tiêu hiện tại

Rà soát và sửa bóc tách câu hỏi từng chuyên đề: stem/option đúng đề Drive, đáp án lấy theo **gạch chân** trong Word. Không dùng nguồn ngoài.

Gộp 12B vào Bài 3 (`tin-cd3-thiet-bi-mang`) **đã xong trên `main`**.

Nguồn duy nhất: tài liệu Google Drive. Không dùng nguồn ngoài.

---
## Đã hoàn thành

### 1. Kết nối Google Drive

- Service account: `drive-scanner@onthithpt-509307.iam.gserviceaccount.com`
- Thư mục gốc OnTNTHPT: `19toY6VB5iERD2D9-tirycSjEz_YQbowL`
- Thư mục Tin: `1wcSRCsZ9wzjO9ypblF_9L4si9kPm_uop`
- Key SA **không** commit vào repo (`.gitignore`: `*onthithpt*.json*`, `credentials*.json`)
- File key local (phiên sau đọc file này, **không** dán private key vào `prosess.md`): `credentials-onthithpt.json`
- Email SA: `drive-scanner@onthithpt-509307.iam.gserviceaccount.com`

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
- 12B TF: `Q-TIN-12B-TF-001` … (11 câu, ID mới sau reparse 2026-10-05)

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
| 12A | ~101 | **97** (79 MC + 18 TF, bóc lại 2026-10-05) | còn vài câu thiếu gạch chân điền tay |
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

### 9. Reparse 12A + 12B từ Drive rồi rebase `main` — 2026-10-05

- Extract `/tmp/docs/12A.txt`, `/tmp/docs/12B.txt`; parser MC + Đ/S (`__U__`/`__EU__`).
- `src/data/questions12a.ts` **mới**: 97 câu (79 MC + 18 TF), thay hẳn bank AI cũ.
- `src/data/questions12b.ts` bóc lại: 83 câu (72 MC + 11 TF), `topicId` = `tin-cd3-thiet-bi-mang`.
- Bài 3 = 274 (CD3 191 + 12B 83). Sidebar Chủ đề 2 chỉ còn Bài 3.
- Rebase `9ee5b9f` lên `origin/main` (`253c673` TTS/UI): conflict `page.tsx`, `questions12b.ts`, `sampleBank.ts`, `driveFolderScanner.ts` — giữ bank bóc lại + alias Bài 3.
- `tsc --noEmit` OK. Commit: `d0ae971`.

Câu thiếu gạch chân điền tay: 12A MC4 (thiếu nhãn B, đáp án A); 12A Đ/S 9/12 (ý b Sai); 12B 3 MC LAN/phương tiện/Router.

## Việc tiếp theo (ưu tiên)

1. ~~Đổi key gốc `theoryBank` sang `tin-cd3-thiet-bi-mang`~~ — xong.
2. ~~Reparse 12A/12B + gộp Bài 3 + rebase `main`~~ — xong 2026-10-05.
3. Chạy lại parser trên các file Drive còn thiếu (ưu tiên **10F**, rồi 11F, 12E, 11D/12D, 12G).
4. Rà soát stem/option 10F và các câu `content` ngắn bất thường còn lại.
5. Gắn custom domain + báo cáo SmartScreen (ngoài code).

---

## Snapshot bank đã verify 2026-10-05

File tách riêng:

| File | Câu | MC | TF | topicId |
|------|-----|----|----|---------|
| `src/data/questions12a.ts` | 97 | 79 | 18 | `tin-ai-tri-tue-nhan-tao` |
| `src/data/questions12b.ts` | 83 | 72 | 11 | `tin-cd3-thiet-bi-mang` |
| `src/data/questionsCd3.ts` | 191 | 152 | 39 | `tin-cd3-thiet-bi-mang` |
| `src/data/questions12e.ts` | 113 | 89 | 24 | `tin-chuyen-de-12e-web` |

`INITIAL_QUESTIONS` = legacy (lọc bỏ AI cũ + 12B cũ) + 12A + 12B + 12E + CD3.

Legacy còn nhúng trong `sampleBank.ts` (585 id, **gồm cả 96 câu AI cũ** bị filter lúc spread):

| topicId | Câu trong file | Sidebar `totalQuestions` | Ghi chú |
|---------|----------------|--------------------------|---------|
| `tin-lap-trinh-python` (10F) | 59 | 59 | Parser cũ từng báo 45; bank hiện 59. Chưa rà stem từng câu. |
| `tin-ai-tri-tue-nhan-tao` (cũ) | 96 | — | **Filter khỏi** `INITIAL_QUESTIONS`; UI dùng 97 câu file `questions12a.ts`. |
| `tin-cd3-thiet-bi-mang` | 191+83 | **274** | CD3 file + 12B file. |
| `tin-dao-duc-phap-luat-so` (11D/12D) | 73 | 73 | Bảng parser cũ: đề 74 / parser 37 — **cần đối chiếu Drive**, không tin số 37. |
| `tin-chuyen-de-12f-web` (12F) | 146 | 146 | Bảng parser cũ: 127 — bank sidebar đã 146. |
| `tin-chuyen-de-12e-web` (12E) | 113 (file) | 113 | Bảng parser cũ: 99 — file hiện đủ 113. |
| `tin-huong-nghiep-dich-vu` (12G) | 73 | 73 | Bảng parser cũ: 38 — **cần đối chiếu Drive**. |
| `tin-co-so-du-lieu-sql` (11F) | 138 | 138 | Bảng parser cũ: 120 — bank 138. |

Sidebar Chủ đề 2: **chỉ còn Bài 3** (`tin-cd3-thiet-bi-mang`). Không còn topic `tin-thiet-bi-giao-thuc-mang`.

Chủ đề 2 **chưa có Bài 4** (cố ý giữ khung chương mạng cho sau).

`STRUCTURE_VERSION` = `2026_GD1_V10_BAI3_GOP_12B` (`src/app/page.tsx`).

---

## Handover phiên sau (làm đúng thứ tự)

### 0. Khởi động

```
git pull origin main
```

Đọc file này từ trên xuống. Không rebase lại `d0ae971`.

### 1. Drive (khi cần bóc file mới)

- SA: `drive-scanner@onthithpt-509307.iam.gserviceaccount.com`
- Folder gốc: `19toY6VB5iERD2D9-tirycSjEz_YQbowL`
- Folder Tin: `1wcSRCsZ9wzjO9ypblF_9L4si9kPm_uop`
- 12A: `1Gvs7Qdapo7gM6fx-8OSRjJ8fPbFUltZ7`
- 12B: `1z1po2n3jrSVv-yrsBSr1fJIxubNiM_mr`
- CD3: `194sTkPkdn29NAle3x3ScPFIcT4JZf2mk`
- Token tạm phiên trước: `/tmp/gat` (hết hạn / mất theo máy). SA **không** persist, **không** commit.
- Extract 12A/12B (máy hiện tại, **không** trong git): `/tmp/docs/12A.txt`, `/tmp/docs/12B.txt`, parser `/tmp/docs/parse_12ab.js` (marker `__U__`/`__EU__`).

### 2. Việc nên làm tiếp (ưu tiên)

1. **10F Python** — đối chiếu stem/option từng câu với Drive; bảng “thiếu 14 câu” có thể đã lạc so với bank 59.
2. **11D/12D** và **12G** — tỷ lệ mất câu từng rất cao; đếm lại trên Drive rồi quyết định reparse hay giữ 73.
3. Câu điền tay 12A/12B (nếu chưa tin đáp án):
   - 12A MC4: thiếu nhãn B, đáp án A
   - 12A Đ/S 9/12: ý b Sai
   - 12B: 3 MC LAN / phương tiện / Router
4. Parser Drive còn thiếu trên các file khác; tái sử dụng `/tmp/docs/parse_12ab.js` nếu còn, hoặc viết lại từ `driveFolderScanner.parseTextDocumentQuestions`.
5. SmartScreen Vercel — ngoài code (custom domain trường).

### 3. Quy tắc đã chốt (đừng phá)

- 12B **không** có mục sidebar riêng; mọi câu 12B `topicId` = `tin-cd3-thiet-bi-mang`.
- `questionsCd3.ts` **không** sửa khi thêm 12B; chỉ spread thêm `CHUYEN_DE_12B_QUESTIONS`.
- 12A **thay** bank AI cũ, không merge song song.
- Trắc nghiệm đủ A–D; Đ/S đủ a–d; đáp án theo gạch chân Word / mục Đáp án.
- Push `origin/main` (Vercel). Không force-push.
- Alias cũ `tin-thiet-bi-giao-thuc-mang` / `tin-mang-dung-sai` vẫn map về Bài 3 trên `page.tsx` / theory / scanner.

### 4. File chính

| Đường dẫn | Vai trò |
|-----------|---------|
| `prosess.md` | Nhật ký + handover |
| `src/data/questions12a.ts` | Bank 12A mới 97 câu |
| `src/data/questions12b.ts` | Bank 12B 83 câu, topic Bài 3 |
| `src/data/questionsCd3.ts` | 191 câu CD3 gốc |
| `src/data/questions12e.ts` | 113 câu 12E |
| `src/data/sampleBank.ts` | `INITIAL_SUBJECTS` + filter + spread |
| `src/data/weeklyPlan.ts` | Tuần 7 = 97; tuần 8–10 = 274 |
| `src/app/page.tsx` | Alias + `STRUCTURE_VERSION` |
| `src/lib/driveFolderScanner.ts` | Map 12B/CD3 → Bài 3 |
| `src/lib/competencyEngine.ts` | NLa Bài 3 |
| `src/data/theoryBank.ts` | Lý thuyết mạng |

### 5. Quota / phiên

Không đọc được số quota nền tảng từ repo. Checkpoint này ghi **trước khi hết** để phiên sau không mất ngữ cảnh rebase/conflict.

Nếu phiên sau thấy `main` lệch remote: `git fetch` + `git log HEAD..origin/main` trước khi sửa bank.
