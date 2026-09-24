export interface SqlColumn {
  name: string;
  type: string;
  isPrimary?: boolean;
  isForeign?: boolean;
  refTable?: string;
  refColumn?: string;
  description?: string;
}

export interface SqlTable {
  name: string;
  description: string;
  columns: SqlColumn[];
  sampleData: Record<string, any>[];
}

export interface SqlSampleQuery {
  name: string;
  description: string;
  query: string;
  targetQuestionId?: string;
}

export interface SqlDataset {
  id: string;
  name: string;
  icon: string;
  description: string;
  tables: SqlTable[];
  initSql: string;
  sampleQueries: SqlSampleQuery[];
}

export interface SqlQuestionExercise {
  questionId: string;
  datasetId: string;
  title: string;
  runnableQuery: string;
  targetAnswer?: string;
  questionNumber?: number | string;
}

export const SQL_DATASETS: SqlDataset[] = [
  // 1. Quản lý Thư viện trường học
  {
    id: "db-thu-vien",
    name: "📚 Quản lý Thư viện trường học",
    icon: "BookOpen",
    description: "CSDL phục vụ việc mượn trả sách, tra cứu độc giả và danh mục sách trong thư viện.",
    tables: [
      {
        name: "NGUOIDOC",
        description: "Bảng lưu thông tin độc giả (học sinh, giáo viên mượn sách)",
        columns: [
          { name: "SoTheTV", type: "VARCHAR(10)", isPrimary: true, description: "Số thẻ thư viện (Khóa chính)" },
          { name: "HoTen", type: "VARCHAR(50)", description: "Họ và tên độc giả" },
          { name: "NgaySinh", type: "DATE", description: "Ngày sinh" },
          { name: "Lop", type: "VARCHAR(10)", description: "Lớp học" }
        ],
        sampleData: [
          { SoTheTV: "TV01", HoTen: "Nguyễn Văn An", NgaySinh: "2008-03-15", Lop: "11A1" },
          { SoTheTV: "TV02", HoTen: "Trần Thị Bình", NgaySinh: "2008-07-22", Lop: "11A2" },
          { SoTheTV: "TV03", HoTen: "Lê Hoàng Cường", NgaySinh: "2008-01-10", Lop: "11A1" },
          { SoTheTV: "TV04", HoTen: "Phạm Thúy Dung", NgaySinh: "2008-11-05", Lop: "11A3" },
          { SoTheTV: "TV05", HoTen: "Đỗ Quốc Đạt", NgaySinh: "2008-09-18", Lop: "11A2" }
        ]
      },
      {
        name: "SACH",
        description: "Bảng danh mục sách hiện có trong thư viện",
        columns: [
          { name: "MaSach", type: "VARCHAR(10)", isPrimary: true, description: "Mã cuốn sách (Khóa chính)" },
          { name: "TenSach", type: "VARCHAR(100)", description: "Tên sách giáo khoa / tham khảo" },
          { name: "SoTrang", type: "INT", description: "Số trang" },
          { name: "TacGia", type: "VARCHAR(50)", description: "Tác giả" },
          { name: "SoLuong", type: "INT", description: "Số lượng trong kho" }
        ],
        sampleData: [
          { MaSach: "AN-01", TenSach: "Tin học 11 - Định hướng Tin học ứng dụng", SoTrang: 180, TacGia: "Hồ Sĩ Đàm", SoLuong: 45 },
          { MaSach: "TO-02", TenSach: "Toán học 12 - Giải tích nâng cao", SoTrang: 220, TacGia: "Trần Văn Hạo", SoLuong: 30 },
          { MaSach: "LI-03", TenSach: "Vật lí 12 - Dao động và Sóng điện từ", SoTrang: 195, TacGia: "Nguyễn Thế Khôi", SoLuong: 25 },
          { MaSach: "HO-04", TenSach: "Hóa học 11 - Hóa hữu cơ căn bản", SoTrang: 160, TacGia: "Nguyễn Xuân Trường", SoLuong: 35 },
          { MaSach: "CS-05", TenSach: "Cơ sở dữ liệu quan hệ và SQL ứng dụng", SoTrang: 240, TacGia: "Đoàn Văn Ban", SoLuong: 20 }
        ]
      },
      {
        name: "MUONTRA",
        description: "Bảng theo dõi các lượt mượn trả sách",
        columns: [
          { name: "MaMuon", type: "INT", isPrimary: true, description: "Mã lượt mượn (Khóa chính)" },
          { name: "SoTheTV", type: "VARCHAR(10)", isForeign: true, refTable: "NGUOIDOC", refColumn: "SoTheTV", description: "Số thẻ độc giả (Khóa ngoài)" },
          { name: "MaSach", type: "VARCHAR(10)", isForeign: true, refTable: "SACH", refColumn: "MaSach", description: "Mã sách mượn (Khóa ngoài)" },
          { name: "NgayMuon", type: "DATE", description: "Ngày mượn sách" },
          { name: "NgayTra", type: "DATE", description: "Ngày trả sách (null nếu chưa trả)" }
        ],
        sampleData: [
          { MaMuon: 1, SoTheTV: "TV01", MaSach: "AN-01", NgayMuon: "2026-09-01", NgayTra: "2026-09-10" },
          { MaMuon: 2, SoTheTV: "TV02", MaSach: "TO-02", NgayMuon: "2026-09-05", NgayTra: "2026-09-12" },
          { MaMuon: 3, SoTheTV: "TV03", MaSach: "AN-01", NgayMuon: "2026-09-15", NgayTra: null },
          { MaMuon: 4, SoTheTV: "TV01", MaSach: "CS-05", NgayMuon: "2026-09-20", NgayTra: null },
          { MaMuon: 5, SoTheTV: "TV04", MaSach: "LI-03", NgayMuon: "2026-09-22", NgayTra: null }
        ]
      }
    ],
    initSql: `
DROP TABLE IF EXISTS MUONTRA;
DROP TABLE IF EXISTS NGUOIDOC;
DROP TABLE IF EXISTS SACH;

CREATE TABLE NGUOIDOC (
  SoTheTV STRING PRIMARY KEY,
  HoTen STRING,
  NgaySinh DATE,
  Lop STRING
);

INSERT INTO NGUOIDOC VALUES
  ('TV01', 'Nguyễn Văn An', '2008-03-15', '11A1'),
  ('TV02', 'Trần Thị Bình', '2008-07-22', '11A2'),
  ('TV03', 'Lê Hoàng Cường', '2008-01-10', '11A1'),
  ('TV04', 'Phạm Thúy Dung', '2008-11-05', '11A3'),
  ('TV05', 'Đỗ Quốc Đạt', '2008-09-18', '11A2');

CREATE TABLE SACH (
  MaSach STRING PRIMARY KEY,
  TenSach STRING,
  SoTrang INT,
  TacGia STRING,
  SoLuong INT
);

INSERT INTO SACH VALUES
  ('AN-01', 'Tin học 11 - Định hướng Tin học ứng dụng', 180, 'Hồ Sĩ Đàm', 45),
  ('TO-02', 'Toán học 12 - Giải tích nâng cao', 220, 'Trần Văn Hạo', 30),
  ('LI-03', 'Vật lí 12 - Dao động và Sóng điện từ', 195, 'Nguyễn Thế Khôi', 25),
  ('HO-04', 'Hóa học 11 - Hóa hữu cơ căn bản', 160, 'Nguyễn Xuân Trường', 35),
  ('CS-05', 'Cơ sở dữ liệu quan hệ và SQL ứng dụng', 240, 'Đoàn Văn Ban', 20);

CREATE TABLE MUONTRA (
  MaMuon INT PRIMARY KEY,
  SoTheTV STRING,
  MaSach STRING,
  NgayMuon DATE,
  NgayTra DATE
);

INSERT INTO MUONTRA VALUES
  (1, 'TV01', 'AN-01', '2026-09-01', '2026-09-10'),
  (2, 'TV02', 'TO-02', '2026-09-05', '2026-09-12'),
  (3, 'TV03', 'AN-01', '2026-09-15', NULL),
  (4, 'TV01', 'CS-05', '2026-09-20', NULL),
  (5, 'TV04', 'LI-03', '2026-09-22', NULL);
`,
    sampleQueries: [
      {
        name: "🎯 Đề thi Câu 7 (TF): Truy vấn độc giả mượn sách AN-01",
        description: "Truy vấn hiển thị thông tin học sinh mượn cuốn sách có mã AN-01 dùng phép ghép nối INNER JOIN.",
        targetQuestionId: "Q-TIN-11F-TF-08",
        query: `SELECT DISTINCT NGUOIDOC.HoTen, NGUOIDOC.SoTheTV, MUONTRA.MaSach
FROM NGUOIDOC INNER JOIN MUONTRA ON NGUOIDOC.SoTheTV = MUONTRA.SoTheTV
WHERE MUONTRA.MaSach = 'AN-01'`
      },
      {
        name: "📖 Danh sách học sinh chưa trả sách",
        description: "Tìm tất cả độc giả đang mượn sách mà chưa hoàn trả (NgayTra IS NULL).",
        query: `SELECT NGUOIDOC.HoTen, NGUOIDOC.Lop, SACH.TenSach, MUONTRA.NgayMuon
FROM NGUOIDOC
INNER JOIN MUONTRA ON NGUOIDOC.SoTheTV = MUONTRA.SoTheTV
INNER JOIN SACH ON MUONTRA.MaSach = SACH.MaSach
WHERE MUONTRA.NgayTra IS NULL`
      },
      {
        name: "📊 Đếm số lượng đầu sách trong thư viện",
        description: "Tính tổng số cuốn sách hiện có và số trang sách trung bình.",
        query: `SELECT COUNT(*) AS TongSoDauSach, SUM(SoLuong) AS TongBanSach, AVG(SoTrang) AS SoTrangTB
FROM SACH`
      }
    ]
  },

  // 2. Quản lý Học sinh & Tuyển sinh THPT
  {
    id: "db-hoc-sinh",
    name: "🎓 Quản lý Tuyển sinh & Điểm THPT",
    icon: "GraduationCap",
    description: "CSDL tuyển sinh vào lớp 10 hoặc tốt nghiệp THPT với bảng điểm và kết quả xét tuyển.",
    tables: [
      {
        name: "DiemTHPT",
        description: "Bảng điểm thi và kết quả tốt nghiệp của các thí sinh",
        columns: [
          { name: "SoBaoDanh", type: "VARCHAR(20)", isPrimary: true, description: "Số báo danh của thí sinh (Khóa chính)" },
          { name: "HoTen", type: "VARCHAR(50)", description: "Họ và tên thí sinh" },
          { name: "DiemToan", type: "FLOAT", description: "Điểm môn Toán" },
          { name: "DiemLi", type: "FLOAT", description: "Điểm môn Vật lí" },
          { name: "DiemHoa", type: "FLOAT", description: "Điểm môn Hóa học" },
          { name: "TongDiem", type: "FLOAT", description: "Tổng điểm xét tuyển" },
          { name: "KetQua", type: "VARCHAR(10)", description: "Kết quả: 'Đỗ' hoặc 'TRƯỢT'" }
        ],
        sampleData: [
          { SoBaoDanh: "260001", HoTen: "Phan Thúy Anh", DiemToan: 8.5, DiemLi: 7.5, DiemHoa: 8.0, TongDiem: 24.0, KetQua: "Đỗ" },
          { SoBaoDanh: "260002", HoTen: "Nguyễn Hải Đăng", DiemToan: 9.0, DiemLi: 8.5, DiemHoa: 9.0, TongDiem: 26.5, KetQua: "Đỗ" },
          { SoBaoDanh: "260003", HoTen: "Lê Minh Khôi", DiemToan: 4.5, DiemLi: 4.0, DiemHoa: 5.0, TongDiem: 13.5, KetQua: "TRƯỢT" },
          { SoBaoDanh: "260004", HoTen: "Vũ Mai Phương", DiemToan: 7.0, DiemLi: 7.5, DiemHoa: 6.5, TongDiem: 21.0, KetQua: "Đỗ" },
          { SoBaoDanh: "260005", HoTen: "Đặng Gia Huy", DiemToan: 3.5, DiemLi: 4.5, DiemHoa: 4.0, TongDiem: 12.0, KetQua: "TRƯỢT" },
          { SoBaoDanh: "260006", HoTen: "Trần Bảo Ngọc", DiemToan: 8.0, DiemLi: 8.0, DiemHoa: 8.5, TongDiem: 24.5, KetQua: "Đỗ" }
        ]
      }
    ],
    initSql: `
DROP TABLE IF EXISTS DiemTHPT;

CREATE TABLE DiemTHPT (
  SoBaoDanh STRING PRIMARY KEY,
  HoTen STRING,
  DiemToan FLOAT,
  DiemLi FLOAT,
  DiemHoa FLOAT,
  TongDiem FLOAT,
  KetQua STRING
);

INSERT INTO DiemTHPT VALUES
  ('260001', 'Phan Thúy Anh', 8.5, 7.5, 8.0, 24.0, 'Đỗ'),
  ('260002', 'Nguyễn Hải Đăng', 9.0, 8.5, 9.0, 26.5, 'Đỗ'),
  ('260003', 'Lê Minh Khôi', 4.5, 4.0, 5.0, 13.5, 'TRƯỢT'),
  ('260004', 'Vũ Mai Phương', 7.0, 7.5, 6.5, 21.0, 'Đỗ'),
  ('260005', 'Đặng Gia Huy', 3.5, 4.5, 4.0, 12.0, 'TRƯỢT'),
  ('260006', 'Trần Bảo Ngọc', 8.0, 8.0, 8.5, 24.5, 'Đỗ');
`,
    sampleQueries: [
      {
        name: "🎯 Đề thi Câu 66 (MC): Đếm số thí sinh có kết quả 'Đỗ'",
        description: "Sử dụng hàm COUNT() kết hợp mệnh đề WHERE để đếm số lượng thí sinh trúng tuyển.",
        targetQuestionId: "Q-TIN-11F-MC-66",
        query: `SELECT count(KetQua) AS SoLuongThiSinhDo
FROM DiemTHPT
WHERE KetQua = 'Đỗ'`
      },
      {
        name: "🌟 Thí sinh xuất sắc (Tổng điểm >= 24.0)",
        description: "Lọc danh sách các bạn đạt loại Giỏi được sắp xếp theo tổng điểm giảm dần.",
        query: `SELECT SoBaoDanh, HoTen, DiemToan, DiemLi, DiemHoa, TongDiem
FROM DiemTHPT
WHERE TongDiem >= 24.0
ORDER BY TongDiem DESC`
      }
    ]
  },

  // 3. Quản lý Nhân sự & Dự án
  {
    id: "db-nhan-su",
    name: "💼 Quản lý Nhân sự & Dự án",
    icon: "Briefcase",
    description: "CSDL công ty công nghệ quản lý thông tin nhân viên, dự án và sự phân công công việc.",
    tables: [
      {
        name: "NHANVIEN",
        description: "Bảng lưu trữ hồ sơ nhân viên trong công ty",
        columns: [
          { name: "MaNV", type: "INT", isPrimary: true, description: "Mã nhân viên (Khóa chính)" },
          { name: "HoTen", type: "VARCHAR(50)", description: "Họ và tên nhân viên" },
          { name: "GioiTinh", type: "VARCHAR(10)", description: "Giới tính" },
          { name: "NgaySinh", type: "DATE", description: "Ngày sinh" },
          { name: "Luong", type: "INT", description: "Mức lương cơ bản (VNĐ)" }
        ],
        sampleData: [
          { MaNV: 101, HoTen: "Lê Quốc Bảo", GioiTinh: "Nam", NgaySinh: "1995-04-12", Luong: 18000000 },
          { MaNV: 102, HoTen: "Ngô Thanh Thảo", GioiTinh: "Nữ", NgaySinh: "1998-08-25", Luong: 15000000 },
          { MaNV: 103, HoTen: "Trịnh Hoài Nam", GioiTinh: "Nam", NgaySinh: "1992-12-03", Luong: 22000000 },
          { MaNV: 104, HoTen: "Hoàng Yến Nhi", GioiTinh: "Nữ", NgaySinh: "2000-02-14", Luong: 12000000 }
        ]
      },
      {
        name: "DUAN",
        description: "Bảng danh mục các dự án đang triển khai",
        columns: [
          { name: "MaDA", type: "INT", isPrimary: true, description: "Mã dự án (Khóa chính)" },
          { name: "TenDA", type: "VARCHAR(100)", description: "Tên dự án phần mềm / chuyển đổi số" },
          { name: "BatDau", type: "DATE", description: "Ngày bắt đầu" },
          { name: "KetThuc", type: "DATE", description: "Ngày dự kiến hoàn thành" }
        ],
        sampleData: [
          { MaDA: 1, TenDA: "Chuyển đổi số hồ sơ y tế bệnh viện", BatDau: "2026-01-01", KetThuc: "2026-12-31" },
          { MaDA: 2, TenDA: "Hệ thống quản lý học tập trực tuyến LMS", BatDau: "2026-03-15", KetThuc: "2026-09-30" },
          { MaDA: 3, TenDA: "Ứng dụng di động tra cứu xe buýt thông minh", BatDau: "2026-06-01", KetThuc: "2026-11-30" }
        ]
      },
      {
        name: "THAMGIA",
        description: "Bảng liên kết phân công nhân sự vào các dự án",
        columns: [
          { name: "MaDA", type: "INT", isForeign: true, refTable: "DUAN", refColumn: "MaDA", description: "Mã dự án" },
          { name: "MaNV", type: "INT", isForeign: true, refTable: "NHANVIEN", refColumn: "MaNV", description: "Mã nhân viên" },
          { name: "ViTri", type: "VARCHAR(50)", description: "Vị trí phụ trách trong dự án" }
        ],
        sampleData: [
          { MaDA: 1, MaNV: 101, ViTri: "Trưởng nhóm kỹ thuật (Tech Lead)" },
          { MaDA: 1, MaNV: 102, ViTri: "Lập trình viên giao diện (Frontend)" },
          { MaDA: 2, MaNV: 103, ViTri: "Quản trị cơ sở dữ liệu (DBA)" },
          { MaDA: 2, MaNV: 101, ViTri: "Cố vấn kiến trúc hệ thống" },
          { MaDA: 3, MaNV: 104, ViTri: "Kiểm thử viên phần mềm (QA/Tester)" }
        ]
      }
    ],
    initSql: `
DROP TABLE IF EXISTS THAMGIA;
DROP TABLE IF EXISTS NHANVIEN;
DROP TABLE IF EXISTS DUAN;

CREATE TABLE NHANVIEN (
  MaNV INT PRIMARY KEY,
  HoTen STRING,
  GioiTinh STRING,
  NgaySinh DATE,
  Luong INT
);

INSERT INTO NHANVIEN VALUES
  (101, 'Lê Quốc Bảo', 'Nam', '1995-04-12', 18000000),
  (102, 'Ngô Thanh Thảo', 'Nữ', '1998-08-25', 15000000),
  (103, 'Trịnh Hoài Nam', 'Nam', '1992-12-03', 22000000),
  (104, 'Hoàng Yến Nhi', 'Nữ', '2000-02-14', 12000000);

CREATE TABLE DUAN (
  MaDA INT PRIMARY KEY,
  TenDA STRING,
  BatDau DATE,
  KetThuc DATE
);

INSERT INTO DUAN VALUES
  (1, 'Chuyển đổi số hồ sơ y tế bệnh viện', '2026-01-01', '2026-12-31'),
  (2, 'Hệ thống quản lý học tập trực tuyến LMS', '2026-03-15', '2026-09-30'),
  (3, 'Ứng dụng di động tra cứu xe buýt thông minh', '2026-06-01', '2026-11-30');

CREATE TABLE THAMGIA (
  MaDA INT,
  MaNV INT,
  ViTri STRING
);

INSERT INTO THAMGIA VALUES
  (1, 101, 'Trưởng nhóm kỹ thuật (Tech Lead)'),
  (1, 102, 'Lập trình viên giao diện (Frontend)'),
  (2, 103, 'Quản trị cơ sở dữ liệu (DBA)'),
  (2, 101, 'Cố vấn kiến trúc hệ thống'),
  (3, 104, 'Kiểm thử viên phần mềm (QA/Tester)');
`,
    sampleQueries: [
      {
        name: "🎯 Đề thi Câu 11 (TF): Nhân viên trong dự án có mã số 1",
        description: "Truy vấn liệt kê họ tên các nhân viên và vị trí của họ trong dự án số 1 bằng INNER JOIN.",
        targetQuestionId: "Q-TIN-11F-TF-12",
        query: `SELECT NHANVIEN.HoTen, THAMGIA.ViTri
FROM NHANVIEN INNER JOIN THAMGIA ON NHANVIEN.MaNV = THAMGIA.MaNV
WHERE THAMGIA.MaDA = 1`
      },
      {
        name: "👥 Đếm số nhân sự tham gia từng dự án",
        description: "Sử dụng GROUP BY và COUNT() để xem mỗi dự án có bao nhiêu nhân viên phụ trách.",
        query: `SELECT DUAN.TenDA, COUNT(THAMGIA.MaNV) AS SoNhanVien
FROM DUAN INNER JOIN THAMGIA ON DUAN.MaDA = THAMGIA.MaDA
GROUP BY DUAN.TenDA`
      }
    ]
  },

  // 4. Quản lý Hiệu thuốc
  {
    id: "db-hieu-thuoc",
    name: "💊 Quản lý Hiệu thuốc & Bệnh nhân",
    icon: "Pill",
    description: "CSDL bán thuốc lưu thông tin bệnh nhân, đơn thuốc và các loại thuốc bán ra.",
    tables: [
      {
        name: "BENHNHAN",
        description: "Bảng lưu thông tin bệnh nhân",
        columns: [
          { name: "MaBN", type: "VARCHAR(10)", isPrimary: true, description: "Mã bệnh nhân (Khóa chính)" },
          { name: "TenBN", type: "VARCHAR(50)", description: "Tên bệnh nhân" },
          { name: "DiaChi", type: "VARCHAR(100)", description: "Địa chỉ" }
        ],
        sampleData: [
          { MaBN: "BN01", TenBN: "Nguyễn Văn Hùng", DiaChi: "Quận 1, TP.HCM" },
          { MaBN: "BN02", TenBN: "Trần Minh Tâm", DiaChi: "TP. Cao Lãnh, Đồng Tháp" },
          { MaBN: "BN03", TenBN: "Lê Tuyết Mai", DiaChi: "Quận Hoàn Kiếm, Hà Nội" }
        ]
      },
      {
        name: "HOADON",
        description: "Bảng lưu thông tin hóa đơn bán thuốc",
        columns: [
          { name: "MaHD", type: "VARCHAR(10)", isPrimary: true, description: "Mã hóa đơn" },
          { name: "MaBN", type: "VARCHAR(10)", isForeign: true, refTable: "BENHNHAN", refColumn: "MaBN", description: "Mã bệnh nhân" },
          { name: "NgayBan", type: "DATE", description: "Ngày bán thuốc" }
        ],
        sampleData: [
          { MaHD: "HD01", MaBN: "BN01", NgayBan: "2026-09-20" },
          { MaHD: "HD02", MaBN: "BN02", NgayBan: "2026-09-21" },
          { MaHD: "HD03", MaBN: "BN01", NgayBan: "2026-09-22" }
        ]
      },
      {
        name: "THUOCBAN",
        description: "Bảng chi tiết các loại thuốc trong hóa đơn",
        columns: [
          { name: "MaHD", type: "VARCHAR(10)", isForeign: true, refTable: "HOADON", refColumn: "MaHD", description: "Mã hóa đơn" },
          { name: "TenThuoc", type: "VARCHAR(50)", description: "Tên thuốc" },
          { name: "SoLuong", type: "INT", description: "Số lượng bán" },
          { name: "DonGia", type: "INT", description: "Đơn giá (VNĐ)" },
          { name: "ThanhTien", type: "INT", description: "Thành tiền (VNĐ)" }
        ],
        sampleData: [
          { MaHD: "HD01", TenThuoc: "Paracetamol 500mg", SoLuong: 20, DonGia: 2000, ThanhTien: 40000 },
          { MaHD: "HD01", TenThuoc: "Vitamin C 1000mg", SoLuong: 10, DonGia: 5000, ThanhTien: 50000 },
          { MaHD: "HD02", TenThuoc: "Amoxicillin 500mg", SoLuong: 14, DonGia: 6000, ThanhTien: 84000 },
          { MaHD: "HD03", TenThuoc: "Panadol Extra", SoLuong: 10, DonGia: 3500, ThanhTien: 35000 }
        ]
      }
    ],
    initSql: `
DROP TABLE IF EXISTS THUOCBAN;
DROP TABLE IF EXISTS HOADON;
DROP TABLE IF EXISTS BENHNHAN;

CREATE TABLE BENHNHAN (
  MaBN STRING PRIMARY KEY,
  TenBN STRING,
  DiaChi STRING
);

INSERT INTO BENHNHAN VALUES
  ('BN01', 'Nguyễn Văn Hùng', 'Quận 1, TP.HCM'),
  ('BN02', 'Trần Minh Tâm', 'TP. Cao Lãnh, Đồng Tháp'),
  ('BN03', 'Lê Tuyết Mai', 'Quận Hoàn Kiếm, Hà Nội');

CREATE TABLE HOADON (
  MaHD STRING PRIMARY KEY,
  MaBN STRING,
  NgayBan DATE
);

INSERT INTO HOADON VALUES
  ('HD01', 'BN01', '2026-09-20'),
  ('HD02', 'BN02', '2026-09-21'),
  ('HD03', 'BN01', '2026-09-22');

CREATE TABLE THUOCBAN (
  MaHD STRING,
  TenThuoc STRING,
  SoLuong INT,
  DonGia INT,
  ThanhTien INT
);

INSERT INTO THUOCBAN VALUES
  ('HD01', 'Paracetamol 500mg', 20, 2000, 40000),
  ('HD01', 'Vitamin C 1000mg', 10, 5000, 50000),
  ('HD02', 'Amoxicillin 500mg', 14, 6000, 84000),
  ('HD03', 'Panadol Extra', 10, 3500, 35000);
`,
    sampleQueries: [
      {
        name: "🎯 Đề thi Câu 12 (TF): Danh sách thuốc bệnh nhân BN01 đã mua",
        description: "Truy vấn kết nối 3 bảng BENHNHAN, HOADON, THUOCBAN để tìm thuốc của bệnh nhân BN01.",
        targetQuestionId: "Q-TIN-11F-TF-13",
        query: `SELECT BENHNHAN.TenBN, HOADON.NgayBan, THUOCBAN.TenThuoc, THUOCBAN.SoLuong, THUOCBAN.ThanhTien
FROM BENHNHAN
INNER JOIN HOADON ON BENHNHAN.MaBN = HOADON.MaBN
INNER JOIN THUOCBAN ON HOADON.MaHD = THUOCBAN.MaHD
WHERE BENHNHAN.MaBN = 'BN01'`
      },
      {
        name: "💰 Doanh thu bán hàng theo từng ngày",
        description: "Tính tổng doanh thu bán thuốc theo từng ngày hóa đơn.",
        query: `SELECT HOADON.NgayBan, SUM(THUOCBAN.ThanhTien) AS DoanhThu
FROM HOADON INNER JOIN THUOCBAN ON HOADON.MaHD = THUOCBAN.MaHD
GROUP BY HOADON.NgayBan`
      }
    ]
  }
];

export const SQL_QUESTION_EXERCISES: Record<string, SqlQuestionExercise> = {
  "Q-TIN-11F-TF-08": {
    questionId: "Q-TIN-11F-TF-08",
    datasetId: "db-thu-vien",
    title: "Câu 7 (TF): Truy vấn độc giả mượn sách AN-01",
    questionNumber: 7,
    runnableQuery: `SELECT DISTINCT NGUOIDOC.HoTen, NGUOIDOC.SoTheTV, MUONTRA.MaSach
FROM NGUOIDOC INNER JOIN MUONTRA ON NGUOIDOC.SoTheTV = MUONTRA.SoTheTV
WHERE MUONTRA.MaSach = 'AN-01'`
  },
  "Q-TIN-11F-MC-66": {
    questionId: "Q-TIN-11F-MC-66",
    datasetId: "db-hoc-sinh",
    title: "Câu 66 (MC): Đếm số thí sinh có kết quả 'Đỗ'",
    questionNumber: 66,
    runnableQuery: `SELECT count(KetQua) AS SoThiSinhDo
FROM DiemTHPT
WHERE KetQua = 'Đỗ'`
  },
  "Q-TIN-11F-TF-12": {
    questionId: "Q-TIN-11F-TF-12",
    datasetId: "db-nhan-su",
    title: "Câu 11 (TF): Nhân viên trong dự án 1",
    questionNumber: 11,
    runnableQuery: `SELECT NHANVIEN.HoTen, THAMGIA.ViTri
FROM NHANVIEN INNER JOIN THAMGIA ON NHANVIEN.MaNV = THAMGIA.MaNV
WHERE THAMGIA.MaDA = 1`
  },
  "Q-TIN-11F-TF-13": {
    questionId: "Q-TIN-11F-TF-13",
    datasetId: "db-hieu-thuoc",
    title: "Câu 12 (TF): Danh sách thuốc bệnh nhân BN01 đã mua",
    questionNumber: 12,
    runnableQuery: `SELECT BENHNHAN.TenBN, HOADON.NgayBan, THUOCBAN.TenThuoc, THUOCBAN.SoLuong, THUOCBAN.ThanhTien
FROM BENHNHAN
INNER JOIN HOADON ON BENHNHAN.MaBN = HOADON.MaBN
INNER JOIN THUOCBAN ON HOADON.MaHD = THUOCBAN.MaHD
WHERE BENHNHAN.MaBN = 'BN01'`
  },
  "Q-TIN-11F-MC-108": {
    questionId: "Q-TIN-11F-MC-108",
    datasetId: "db-hoc-sinh",
    title: "Câu 109 (MC): Chỉ định điều kiện truy vấn với WHERE",
    questionNumber: 109,
    runnableQuery: `SELECT SoBaoDanh, HoTen, DiemToan
FROM DiemTHPT
WHERE DiemToan >= 8.0`
  },
  "Q-TIN-11F-MC-109": {
    questionId: "Q-TIN-11F-MC-109",
    datasetId: "db-hieu-thuoc",
    title: "Câu 110 (MC): Tính tổng giá trị cột bằng hàm SUM()",
    questionNumber: 110,
    runnableQuery: `SELECT SUM(ThanhTien) AS TongDoanhThu
FROM THUOCBAN`
  },
  "Q-TIN-11F-MC-110": {
    questionId: "Q-TIN-11F-MC-110",
    datasetId: "db-hoc-sinh",
    title: "Câu 111 (MC): Kết hợp kết quả truy vấn với UNION",
    questionNumber: 111,
    runnableQuery: `SELECT HoTen, 'Điểm Toán cao' AS NhanXet FROM DiemTHPT WHERE DiemToan >= 8.5
UNION
SELECT HoTen, 'Điểm Hóa cao' AS NhanXet FROM DiemTHPT WHERE DiemHoa >= 8.5`
  },
  "Q-TIN-11F-MC-122": {
    questionId: "Q-TIN-11F-MC-122",
    datasetId: "db-thu-vien",
    title: "Câu 122 (MC): Nối hai bảng trong SQL bằng JOIN",
    questionNumber: 122,
    runnableQuery: `SELECT NGUOIDOC.HoTen, MUONTRA.MaSach, MUONTRA.NgayMuon
FROM NGUOIDOC
INNER JOIN MUONTRA ON NGUOIDOC.SoTheTV = MUONTRA.SoTheTV`
  }
};

export function getDatasetById(id: string): SqlDataset {
  return SQL_DATASETS.find((ds) => ds.id === id) || SQL_DATASETS[0];
}
