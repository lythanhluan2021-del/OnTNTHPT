export interface PythonQuestionExercise {
  questionId: string;
  questionNumber: number | string;
  title: string;
  category: "Biểu thức số học" | "Cấu trúc lặp" | "Cấu trúc rẽ nhánh" | "Danh sách & Xâu" | "Chương trình con" | "Bài toán thực tế";
  summary: string;
  runnableCode: string;
  defaultInput?: string;
  expectedResult: string;
  targetAnswer: string;
}

export const PYTHON_QUESTION_EXERCISES: Record<string, PythonQuestionExercise> = {
  "Q-TIN-PY-04": {
    questionId: "Q-TIN-PY-04",
    questionNumber: 4,
    title: "Câu 4: Nhập số nguyên từ bàn phím và gán vào biến",
    category: "Biểu thức số học",
    summary: "Thử nghiệm lệnh int(input()) để nhận số nguyên từ người dùng.",
    defaultInput: "25",
    targetAnswer: "Đáp án D: x = int(input(\"Nhập số nguyên: \"))",
    expectedResult: "Biến x nhận giá trị số nguyên 25 (kiểu int).",
    runnableCode: `# [Câu 4 - Đề ôn tập Tin học 12]
# Nhập số nguyên từ bàn phím và kiểm tra kiểu dữ liệu

x = int(input("Nhập số nguyên: "))

print("Giá trị của x:", x)
print("Kiểu dữ liệu của x là:", type(x))
print("Gấp đôi giá trị của x:", x * 2)
`,
  },

  "Q-TIN-PY-07": {
    questionId: "Q-TIN-PY-07",
    questionNumber: 7,
    title: "Câu 7: Vòng lặp for lặp từ 0 đến 4",
    category: "Cấu trúc lặp",
    summary: "Hàm range(5) sinh ra dãy chỉ số bắt đầu từ 0 đến 4 (tổng cộng 5 giá trị).",
    defaultInput: "",
    targetAnswer: "Đáp án A: for i in range(5):",
    expectedResult: "In ra các số 0, 1, 2, 3, 4.",
    runnableCode: `# [Câu 7 - Đề ôn tập Tin học 12]
# Vòng lặp for duyệt từ 0 đến 4 với hàm range(5)

print("--- Kết quả chạy vòng lặp for i in range(5): ---")
for i in range(5):
    print("Giá trị i =", i)

print("=> range(5) sinh ra các giá trị:", list(range(5)))
`,
  },

  "Q-TIN-PY-12": {
    questionId: "Q-TIN-PY-12",
    questionNumber: 12,
    title: "Câu 12: Khởi tạo danh sách (List) 5 phần tử",
    category: "Danh sách & Xâu",
    summary: "Khởi tạo danh sách bằng cặp ngoặc vuông [1, 2, 3, 4, 5].",
    defaultInput: "",
    targetAnswer: "Đáp án D: b = [1, 2, 3, 4, 5]",
    expectedResult: "Danh sách b gồm 5 phần tử [1, 2, 3, 4, 5].",
    runnableCode: `# [Câu 12 - Đề ôn tập Tin học 12]
# Khởi tạo danh sách trong Python bằng cặp ngoặc vuông []

b = [1, 2, 3, 4, 5]

print("Danh sách b:", b)
print("Kiểu dữ liệu:", type(b))
print("Độ dài danh sách len(b):", len(b))
print("Phần tử đầu tiên b[0]:", b[0])
print("Phần tử cuối cùng b[-1]:", b[-1])
`,
  },

  "Q-TIN-PY-17": {
    questionId: "Q-TIN-PY-17",
    questionNumber: 17,
    title: "Câu 17: Giá trị của biểu thức 4 + 15 / 5",
    category: "Biểu thức số học",
    summary: "Phép chia '/' trong Python 3 luôn trả về số thực (float). 15 / 5 = 3.0, sau đó 4 + 3.0 = 7.0.",
    defaultInput: "",
    targetAnswer: "Đáp án: 7.0 (Kiểu số thực float)",
    expectedResult: "7.0",
    runnableCode: `# [Câu 17 - Đề ôn tập Tin học 12]
# Tính giá trị biểu thức số học 4 + 15 / 5
# Lưu ý: Phép chia '/' trong Python luôn sinh ra số thực float

ket_qua = 4 + 15 / 5

print("Biểu thức: 4 + 15 / 5")
print("Kết quả:", ket_qua)
print("Kiểu dữ liệu của kết quả:", type(ket_qua))
`,
  },

  "Q-TIN-PY-20": {
    questionId: "Q-TIN-PY-20",
    questionNumber: 20,
    title: "Câu 20: Thứ tự thực hiện các phép toán phức hợp",
    category: "Biểu thức số học",
    summary: "Biểu thức 6 - 6 / 2 + 4 * 5 - 6 / 2: Nhân chia trước, cộng trừ sau từ trái sang phải.",
    defaultInput: "",
    targetAnswer: "Đáp án: 20.0",
    expectedResult: "6 - 3.0 + 20 - 3.0 = 20.0",
    runnableCode: `# [Câu 20 - Đề ôn tập Tin học 12]
# Biểu thức: 6 - 6 / 2 + 4 * 5 - 6 / 2
# Thứ tự tính toán:
# Bước 1: 6 / 2 = 3.0
# Bước 2: 4 * 5 = 20
# Bước 3: 6 / 2 = 3.0
# Bước 4: 6 - 3.0 + 20 - 3.0 = 20.0

ket_qua = 6 - 6 / 2 + 4 * 5 - 6 / 2

print("Biểu thức: 6 - 6 / 2 + 4 * 5 - 6 / 2")
print("=> Kết quả tính được:", ket_qua)
`,
  },

  "Q-TIN-PY-26": {
    questionId: "Q-TIN-PY-26",
    questionNumber: 26,
    title: "Câu 26: Phép chia lấy phần nguyên //",
    category: "Biểu thức số học",
    summary: "Cho x = 6, y = 2. Lệnh print(x // y) in ra kết quả phép chia lấy phần nguyên.",
    defaultInput: "",
    targetAnswer: "Đáp án B: 3",
    expectedResult: "3",
    runnableCode: `# [Câu 26 - Đề ôn tập Tin học 12]
# Đoạn mã:
# x = 6
# y = 2
# print(x // y)

x = 6
y = 2

print(f"Giá trị x = {x}, y = {y}")
print("Phép chia lấy phần nguyên x // y là:", x // y)
print("So sánh với phép chia thực x / y là:", x / y)
`,
  },

  "Q-TIN-PY-27": {
    questionId: "Q-TIN-PY-27",
    questionNumber: 27,
    title: "Câu 27: Nhập số thực từ bàn phím gán cho x",
    category: "Biểu thức số học",
    summary: "Cú pháp nhập số thực chuẩn: x = float(input(\"Nhập số thực: \"))",
    defaultInput: "3.14159",
    targetAnswer: "Đáp án B: x = float(input(\"Nhập số thực: \"))",
    expectedResult: "Biến x nhận giá trị số thực 3.14159.",
    runnableCode: `# [Câu 27 - Đề ôn tập Tin học 12]
# Nhập số thực từ bàn phím bằng hàm float(input())

x = float(input("Nhập số thực: "))

print("Giá trị vừa nhập vào biến x:", x)
print("Kiểu dữ liệu:", type(x))
print("Gấp 10 lần giá trị x:", x * 10)
`,
  },

  "Q-TIN-PY-29": {
    questionId: "Q-TIN-PY-29",
    questionNumber: 29,
    title: "Câu 29: Vòng lặp for tính tổng tích lũy biến s",
    category: "Cấu trúc lặp",
    summary: "Khởi tạo s = 0; lặp for i in range(6): s = s + i. Giá trị của s là 0 + 1 + 2 + 3 + 4 + 5 = 15.",
    defaultInput: "",
    targetAnswer: "Đáp án B: 15",
    expectedResult: "15",
    runnableCode: `# [Câu 29 - Đề ôn tập Tin học 12]
# Đoạn chương trình:
# s = 0
# for i in range(6):
#     s = s + i
# print(s)

s = 0
print("--- Mô phỏng từng bước lặp: ---")
for i in range(6):
    s_truoc = s
    s = s + i
    print(f"Bước i = {i}: s cũ ({s_truoc}) + i ({i}) = s mới ({s})")

print("---------------------------------")
print("=> Sau khi thực hiện xong, giá trị của s là:", s)
`,
  },

  "Q-TIN-PY-31": {
    questionId: "Q-TIN-PY-31",
    questionNumber: 31,
    title: "Câu 31: Định nghĩa chương trình con với từ khóa def",
    category: "Chương trình con",
    summary: "Cú pháp định nghĩa hàm chính xác: def my_function():",
    defaultInput: "",
    targetAnswer: "Đáp án B: def my_function():",
    expectedResult: "Định nghĩa và gọi hàm thành công.",
    runnableCode: `# [Câu 31 - Đề ôn tập Tin học 12]
# Định nghĩa chương trình con (Hàm) với từ khóa 'def'

def my_function():
    print("Xin chào! Đây là chương trình con được định nghĩa bằng từ khóa 'def'.")

# Gọi hàm thực thi
my_function()
`,
  },

  "Q-TIN-PY-33": {
    questionId: "Q-TIN-PY-33",
    questionNumber: 33,
    title: "Câu 33: Output của lệnh print(1 + 2 + 3 + 4)",
    category: "Biểu thức số học",
    summary: "Python sẽ tính toán giá trị biểu thức bên trong hàm print() trước: 1 + 2 + 3 + 4 = 10.",
    defaultInput: "",
    targetAnswer: "Đáp án A: 10",
    expectedResult: "10",
    runnableCode: `# [Câu 33 - Đề ôn tập Tin học 12]
# Câu lệnh: print(1 + 2 + 3 + 4)

print("Biểu thức bên trong print(1 + 2 + 3 + 4)")
print("=> Kết quả in ra màn hình là:", 1 + 2 + 3 + 4)
`,
  },

  "Q-TIN-PY-48": {
    questionId: "Q-TIN-PY-48",
    questionNumber: 48,
    title: "Câu 48: Tính diện tích hình tròn bán kính R",
    category: "Biểu thức số học",
    summary: "Công thức diện tích S = pi * R^2, trong Python biểu diễn bằng: 3.14 * R * R hoặc 3.14 * (R ** 2).",
    defaultInput: "5",
    targetAnswer: "3.14 * R * R (hoặc 3.14 * R ** 2)",
    expectedResult: "Diện tích hình tròn bán kính 5 là 78.5",
    runnableCode: `# [Câu 48 - Đề ôn tập Tin học 12]
# Tính diện tích hình tròn: S = pi * R^2

pi = 3.14
R = float(input("Nhập bán kính R: "))

dien_tich_1 = pi * R * R
dien_tich_2 = pi * (R ** 2)

print(f"Bán kính R = {R}")
print(f"Diện tích theo công thức pi * R * R: {dien_tich_1}")
print(f"Diện tích theo công thức pi * (R ** 2): {dien_tich_2}")
`,
  },

  "Q-TIN-PY-49": {
    questionId: "Q-TIN-PY-49",
    questionNumber: 49,
    title: "Câu 49: Phép toán lũy thừa 3 mũ 4 trong Python",
    category: "Biểu thức số học",
    summary: "Trong Python, toán tử lũy thừa là dấu sao kép '**'. 3 mũ 4 viết là 3 ** 4.",
    defaultInput: "",
    targetAnswer: "3 ** 4",
    expectedResult: "81",
    runnableCode: `# [Câu 49 - Đề ôn tập Tin học 12]
# Phép toán lũy thừa trong Python sử dụng toán tử '**'

ket_qua = 3 ** 4

print("Biểu diễn 3 mũ 4 trong Python là: 3 ** 4")
print("=> Kết quả tính được:", ket_qua)
print("Thử nghiệm thêm 2 mũ 10:", 2 ** 10)
`,
  },

  "Q-TIN-PY-50": {
    questionId: "Q-TIN-PY-50",
    questionNumber: 50,
    title: "Câu 50: Chuyển biểu thức phân số sang Python",
    category: "Biểu thức số học",
    summary: "Biểu thức phân số (2x + 1)/(x + 2) trong Python phải đóng mở ngoặc tử và mẫu: (2*x + 1)/(x + 2).",
    defaultInput: "3",
    targetAnswer: "(2*x + 1) / (x + 2)",
    expectedResult: "Với x = 3: (2*3 + 1)/(3 + 2) = 7/5 = 1.4",
    runnableCode: `# [Câu 50 - Đề ôn tập Tin học 12]
# Chuyển biểu thức (2x + 1)/(x + 2) sang cú pháp Python

x = float(input("Nhập giá trị x (khác -2): "))

bieu_thuc = (2 * x + 1) / (x + 2)

print(f"Với x = {x}")
print(f"Tử số (2*x + 1) = {2 * x + 1}")
print(f"Mẫu số (x + 2) = {x + 2}")
print(f"=> Giá trị phân số (2*x + 1)/(x + 2) là: {bieu_thuc}")
`,
  },

  "Q-TIN-PY-51": {
    questionId: "Q-TIN-PY-51",
    questionNumber: 51,
    title: "Câu 51: Kết quả câu lệnh 10 - 5 ** 2 + 8 // 3 + 2",
    category: "Biểu thức số học",
    summary: "Thứ tự: 5**2 = 25; 8//3 = 2; sau đó 10 - 25 + 2 + 2 = -11.",
    defaultInput: "",
    targetAnswer: "Đáp án: -11",
    expectedResult: "-11",
    runnableCode: `# [Câu 51 - Đề ôn tập Tin học 12]
# Biểu thức: 10 - 5 ** 2 + 8 // 3 + 2
# Thứ tự ưu tiên:
# 1. Lũy thừa: 5 ** 2 = 25
# 2. Chia nguyên: 8 // 3 = 2
# 3. Phép trừ/cộng từ trái sang: 10 - 25 + 2 + 2 = -11

ket_qua = 10 - 5 ** 2 + 8 // 3 + 2

print("Biểu thức: 10 - 5 ** 2 + 8 // 3 + 2")
print("=> Kết quả chính xác là:", ket_qua)
`,
  },

  "Q-TIN-PY-54": {
    questionId: "Q-TIN-PY-54",
    questionNumber: 54,
    title: "Câu 54: Cấu trúc rẽ nhánh if - else với y = 4",
    category: "Cấu trúc rẽ nhánh",
    summary: "Với y = 4, điều kiện y > 5 nhận giá trị False, nhánh else được thực hiện: in ra 'Nhỏ hơn hoặc bằng 5'.",
    defaultInput: "",
    targetAnswer: "Nhỏ hơn hoặc bằng 5",
    expectedResult: "Nhỏ hơn hoặc bằng 5",
    runnableCode: `# [Câu 54 - Đề ôn tập Tin học 12]
# Đoạn mã:
# y = 4
# if y > 5:
#     print("Lớn hơn 5")
# else:
#     print("Nhỏ hơn hoặc bằng 5")

y = 4
print(f"Giá trị biến y = {y}")
print(f"Kiểm tra điều kiện (y > 5): {y > 5}")

if y > 5:
    print("Kết quả in ra: Lớn hơn 5")
else:
    print("Kết quả in ra: Nhỏ hơn hoặc bằng 5")
`,
  },

  "Q-TIN-TF-PY-01": {
    questionId: "Q-TIN-TF-PY-01",
    questionNumber: "Đúng/Sai 1",
    title: "Phần 2 - Câu 1: Bài toán tính tiền lương nhân viên",
    category: "Bài toán thực tế",
    summary: "Mô phỏng chương trình tính tổng lương theo giờ làm việc tiêu chuẩn và làm thêm giờ.",
    defaultInput: "45\n50000",
    targetAnswer: "Đúng / Sai theo 4 phát biểu đề bài",
    expectedResult: "Tính lương cơ bản 40 giờ và làm thêm 5 giờ nhân hệ số 1.5.",
    runnableCode: `# [Phần 2 - Câu 1: Bài toán tính lương nhân viên]
gio_lam = float(input("Nhập số giờ làm việc trong tuần: "))
luong_gio = float(input("Nhập mức lương theo giờ (VNĐ): "))

# Giờ tiêu chuẩn: 40 giờ; Giờ vượt quá tính hệ số 1.5
if gio_lam <= 40:
    tong_luong = gio_lam * luong_gio
else:
    gio_thuong = 40
    gio_vuot = gio_lam - 40
    tong_luong = (gio_thuong * luong_gio) + (gio_vuot * luong_gio * 1.5)

print("\n--- BẢNG LƯƠNG NHÂN VIÊN ---")
print(f"Số giờ làm: {gio_lam} giờ")
print(f"Mức lương/giờ: {luong_gio:,.0f} VNĐ")
print(f"Tổng tiền lương thực nhận: {tong_luong:,.0f} VNĐ")
`,
  },

  "Q-TIN-TF-PY-02": {
    questionId: "Q-TIN-TF-PY-02",
    questionNumber: "Đúng/Sai 2",
    title: "Phần 2 - Câu 2: Phân loại điểm số học sinh (if - elif - else)",
    category: "Bài toán thực tế",
    summary: "Chương trình kiểm tra xếp loại học sinh theo các ngưỡng điểm 8.0, 6.5, 5.0.",
    defaultInput: "7.5",
    targetAnswer: "Đúng / Sai theo 4 phát biểu đề bài",
    expectedResult: "Điểm 7.5 phân loại Khá.",
    runnableCode: `# [Phần 2 - Câu 2: Xếp loại điểm số học sinh]
diem = float(input("Nhập điểm kiểm tra của học sinh: "))

print(f"Điểm số: {diem}")

if diem >= 8.0:
    xep_loai = "Giỏi"
elif diem >= 6.5:
    xep_loai = "Khá"
elif diem >= 5.0:
    xep_loai = "Trung bình"
else:
    xep_loai = "Chưa đạt"

print("=> Kết quả phân loại:", xep_loai)
`,
  },

  "Q-TIN-TF-PY-03": {
    questionId: "Q-TIN-TF-PY-03",
    questionNumber: "Đúng/Sai 3",
    title: "Phần 2 - Câu 3: Tổng hợp doanh thu món ăn nhà hàng",
    category: "Bài toán thực tế",
    summary: "Tính tổng doanh thu từ danh sách các món ăn bằng vòng lặp for và hàm sum().",
    defaultInput: "",
    targetAnswer: "Ý b: 10+15+20+25+30+5 = 105 nghìn",
    expectedResult: "Tổng doanh thu 6 món là 105,000 VNĐ.",
    runnableCode: `# [Phần 2 - Câu 3: Tổng hợp doanh thu nhà hàng]
doanh_thu_mon = [10000, 15000, 20000, 25000, 30000, 5000]

print("Doanh thu từng món ăn:", doanh_thu_mon)
print("Số lượng món ăn:", len(doanh_thu_mon))

# Tính tổng bằng vòng lặp for
tong_for = 0
for dt in doanh_thu_mon:
    tong_for += dt

# Tính tổng bằng hàm có sẵn sum()
tong_sum = sum(doanh_thu_mon)

print(f"Tổng doanh thu tính bằng for: {tong_for:,.0f} VNĐ")
print(f"Tổng doanh thu tính bằng sum(): {tong_sum:,.0f} VNĐ")
print("=> Khẳng định tổng là 105.000 VNĐ là ĐÚNG!")
`,
  },

  "Q-TIN-TF-PY-04": {
    questionId: "Q-TIN-TF-PY-04",
    questionNumber: "Đúng/Sai 4",
    title: "Phần 2 - Câu 4: Ứng dụng theo dõi điểm số bằng hàm con",
    category: "Bài toán thực tế",
    summary: "Xây dựng các hàm tính điểm trung bình và đếm học sinh trên trung bình.",
    defaultInput: "",
    targetAnswer: "Đúng / Sai theo 4 phát biểu đề bài",
    expectedResult: "Điểm TB và số học sinh đạt trên trung bình.",
    runnableCode: `# [Phần 2 - Câu 4: Hàm tính điểm và thống kê]
def tinh_tong_va_trung_binh(ds_diem):
    tong = sum(ds_diem)
    tb = tong / len(ds_diem)
    # Trả về cả 2 giá trị dưới dạng tuple
    return tong, round(tb, 2)

def dem_tren_trung_binh(ds_diem, nguong=5.0):
    return sum(1 for d in ds_diem if d >= nguong)

bang_diem = [7.5, 8.0, 4.5, 9.0, 6.0, 5.5, 3.0, 8.5]
print("Bảng điểm kiểm tra:", bang_diem)

tong_diem, dtb = tinh_tong_va_trung_binh(bang_diem)
so_dat = dem_tren_trung_binh(bang_diem, 5.0)

print(f"Tổng điểm: {tong_diem}")
print(f"Điểm trung bình lớp: {dtb}")
print(f"Số học sinh đạt từ 5.0 trở lên: {so_dat}/{len(bang_diem)}")
`,
  },

  "Q-TIN-TF-PY-05": {
    questionId: "Q-TIN-TF-PY-05",
    questionNumber: "Đúng/Sai 5",
    title: "Phần 2 - Câu 5: Tách xâu thông tin học sinh với split(';')",
    category: "Bài toán thực tế",
    summary: "Tách xâu 'HS001;Nguyễn Văn A;8.0' thành mã học sinh, tên học sinh và điểm số.",
    defaultInput: "",
    targetAnswer: "Đúng / Sai theo 4 phát biểu đề bài",
    expectedResult: "Tách đúng từng thành phần và kiểm tra điều kiện học bổng.",
    runnableCode: `# [Phần 2 - Câu 5: Tách xâu học sinh định dạng 'Mã;Tên;Điểm']
s = "HS001;Nguyễn Văn A;8.5"
print("Xâu dữ liệu ban đầu:", s)

# Tách xâu bằng dấu chấm phẩy ';'
thong_tin = s.split(';')
print("Danh sách sau khi tách split(';'):", thong_tin)

ma_hs = thong_tin[0]
ten_hs = thong_tin[1]
diem_so = float(thong_tin[2])

print(f"Mã học sinh [chỉ số 0]: {ma_hs}")
print(f"Tên học sinh [chỉ số 1]: {ten_hs}")
print(f"Điểm số [chỉ số 2]: {diem_so}")

# Kiểm tra điều kiện xét học bổng (>= 8.0)
if diem_so >= 8.0:
    print(f"=> Học sinh {ten_hs} ĐỦ ĐIỀU KIỆN nhận học bổng! 🎉")
else:
    print(f"=> Học sinh {ten_hs} chưa đủ điều kiện học bổng.")
`,
  },
};

export const PYTHON_QUESTION_EXERCISES_LIST = Object.values(PYTHON_QUESTION_EXERCISES);
