export interface PythonTemplate {
  id: string;
  title: string;
  category: string;
  description: string;
  defaultInput?: string;
  code: string;
}

export const PYTHON_TEMPLATES: PythonTemplate[] = [
  {
    id: "nhap-xuat",
    title: "1. Nhập xuất cơ bản & Tính toán",
    category: "Cơ bản",
    description: "Nhập chiều dài, chiều rộng từ bàn phím và tính chu vi, diện tích hình chữ nhật.",
    defaultInput: "15\n8",
    code: `# Nhập xuất và tính toán cơ bản trong Python
print("=== TÍNH CHU VI VÀ DIỆN TÍCH HÌNH CHỮ NHẬT ===")

# Nhập chiều dài và chiều rộng (dùng int() hoặc float() để ép kiểu)
a = float(input("Nhập chiều dài: "))
b = float(input("Nhập chiều rộng: "))

chu_vi = (a + b) * 2
dien_tich = a * b

print("Chiều dài:", a)
print("Chiều rộng:", b)
print("Chu vi hình chữ nhật là:", chu_vi)
print("Diện tích hình chữ nhật là:", dien_tich)
`,
  },
  {
    id: "cau-lenh-if",
    title: "2. Cấu trúc rẽ nhánh (if - elif - else)",
    category: "Rẽ nhánh",
    description: "Kiểm tra xếp loại học lực của học sinh dựa trên điểm trung bình.",
    defaultInput: "8.5",
    code: `# Cấu trúc rẽ nhánh if - elif - else
dtb = float(input("Nhập điểm trung bình môn Tin học: "))

print(f"Điểm số của bạn: {dtb}")

if dtb >= 8.0:
    print("Xếp loại: Giỏi (Xuất sắc) 🎉")
elif dtb >= 6.5:
    print("Xếp loại: Khá 👍")
elif dtb >= 5.0:
    print("Xếp loại: Trung bình 👌")
else:
    print("Xếp loại: Cần cố gắng hơn nữa 💪")
`,
  },
  {
    id: "vong-lap-for",
    title: "3. Vòng lặp for & Hàm range()",
    category: "Vòng lặp",
    description: "Tính tổng S = 1 + 2 + ... + n và in bảng cửu chương.",
    defaultInput: "7",
    code: `# Vòng lặp for với hàm range(start, stop, step)
n = int(input("Nhập số nguyên dương n: "))

tong = 0
for i in range(1, n + 1):
    tong += i

print(f"Tổng S = 1 + 2 + ... + {n} là: {tong}")

print(f"\n--- BẢNG CỬU CHƯƠNG {n} ---")
for i in range(1, 11):
    print(f"{n} x {i:2d} = {n * i:2d}")
`,
  },
  {
    id: "vong-lap-while",
    title: "4. Vòng lặp while & Thuật toán Euclid",
    category: "Vòng lặp",
    description: "Thuật toán trừ dần hoặc chia dư của Euclid để tìm ước chung lớn nhất (UCLN).",
    defaultInput: "48\n18",
    code: `# Tìm Ước chung lớn nhất (UCLN) bằng vòng lặp while
a = int(input("Nhập số nguyên dương a: "))
b = int(input("Nhập số nguyên dương b: "))

x, y = a, b
while y != 0:
    du = x % y
    x = y
    y = du

ucln = x
bcnn = (a * b) // ucln

print(f"Ước chung lớn nhất UCLN({a}, {b}) = {ucln}")
print(f"Bội chung nhỏ nhất BCNN({a}, {b}) = {bcnn}")
`,
  },
  {
    id: "danh-sach-list",
    title: "5. Xử lý Danh sách (List)",
    category: "Cấu trúc dữ liệu",
    description: "Thao tác trên danh sách: append, đếm, tính tổng, tìm phần tử lớn nhất và nhỏ nhất.",
    defaultInput: "",
    code: `# Làm quen với kiểu dữ liệu Danh sách (List)
diem_so = [8.5, 9.0, 7.5, 10.0, 6.5, 9.5, 8.0]

print("Danh sách điểm gốc:", diem_so)
print("Số lượng học sinh trong danh sách (len):", len(diem_so))
print("Điểm cao nhất (max):", max(diem_so))
print("Điểm thấp nhất (min):", min(diem_so))
print("Điểm trung bình cả lớp:", round(sum(diem_so) / len(diem_so), 2))

# Cắt lát danh sách (Slicing)
print("3 học sinh đầu tiên (diem_so[:3]):", diem_so[:3])
print("Phần tử cuối cùng (diem_so[-1]):", diem_so[-1])

# Lọc các bạn có điểm >= 8.5
diem_gioi = [d for d in diem_so if d >= 8.5]
print("Các bạn đạt điểm Giỏi (>= 8.5):", diem_gioi)
`,
  },
  {
    id: "xau-ky-tu-str",
    title: "6. Xử lý Xâu ký tự (String)",
    category: "Cấu trúc dữ liệu",
    description: "Các hàm xử lý xâu ký tự: đếm từ, in hoa/thường, đảo ngược xâu và kiểm tra đối xứng.",
    defaultInput: "Trường THPT Nguyễn Sinh Sắc",
    code: `# Xử lý xâu ký tự trong Python
s = input("Nhập một xâu ký tự: ")

print("Xâu vừa nhập:", s)
print("Độ dài xâu (len):", len(s))
print("Chữ in hoa (upper):", s.upper())
print("Chữ in thường (lower):", s.lower())

# Đảo ngược xâu bằng bước nhảy âm [::-1]
xau_dao = s[::-1]
print("Xâu đảo ngược:", xau_dao)

# Tách xâu thành các từ
cac_tu = s.split()
print("Số lượng từ trong câu:", len(cac_tu))
print("Danh sách các từ:", cac_tu)
`,
  },
  {
    id: "ham-def-so-nguyen-to",
    title: "7. Chương trình con (Hàm def)",
    category: "Hàm",
    description: "Định nghĩa hàm kiểm tra số nguyên tố và tìm tất cả số nguyên tố từ 2 đến n.",
    defaultInput: "30",
    code: `# Định nghĩa chương trình con (Hàm def)
import math

def la_so_nguyen_to(k):
    """Hàm kiểm tra k có phải số nguyên tố hay không"""
    if k < 2:
        return False
    for i in range(2, int(math.isqrt(k)) + 1):
        if k % i == 0:
            return False
    return True

# Sử dụng hàm
n = int(input("Nhập số giới hạn n: "))
print(f"Các số nguyên tố trong khoảng từ 2 đến {n} là:")

ds_snt = []
for i in range(2, n + 1):
    if la_so_nguyen_to(i):
        ds_snt.append(i)

print(ds_snt)
print(f"Tổng cộng có {len(ds_snt)} số nguyên tố.")
`,
  },
  {
    id: "thuat-toan-sap-xep",
    title: "8. Thuật toán Sắp xếp nổi bọt (Bubble Sort)",
    category: "Thuật toán",
    description: "Mô phỏng thuật toán sắp xếp nổi bọt từng bước trực quan.",
    defaultInput: "",
    code: `# Thuật toán sắp xếp nổi bọt (Bubble Sort)
def sap_xep_noi_bot(arr):
    n = len(arr)
    print("Mảng ban đầu:", arr)
    
    for i in range(n - 1):
        print(f"\n--- Vòng lặp thứ {i + 1} ---")
        da_doi_cho = False
        for j in range(n - 1 - i):
            if arr[j] > arr[j + 1]:
                # Đổi chỗ 2 phần tử kề nhau
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                da_doi_cho = True
        print(f"Trạng thái mảng sau bước {i + 1}:", arr)
        if not da_doi_cho:
            break
            
    return arr

danh_sach = [64, 34, 25, 12, 22, 11, 90]
ket_qua = sap_xep_noi_bot(danh_sach)
print("\n=> Mảng sau khi đã sắp xếp tăng dần:", ket_qua)
`,
  },
];
