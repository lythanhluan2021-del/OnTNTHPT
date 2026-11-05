# Script tao cay thu muc On thi Tot nghiep THPT Mon Tieng Anh 12
# Căn cứ Kế hoạch tổ Tiếng Anh THPT Nguyễn Sinh Sắc 2025 - 2026

param(
    [string]$RootPath = ".\TIENG_ANH_12_ON_THI_TN"
)

$folders = @(
    "00_KE_HOACH_VA_MA_TRAN",
    # HOC KY 1
    "01_HOC_KY_1\CHUYEN_DE_01_DUC_LO_QUANG_CAO\Tuan_01_Tiet_01_02_Tu_loai_Word_Form",
    "01_HOC_KY_1\CHUYEN_DE_01_DUC_LO_QUANG_CAO\Tuan_02_Tiet_03_04_Trat_tu_tu_Word_Order",
    "01_HOC_KY_1\CHUYEN_DE_01_DUC_LO_QUANG_CAO\Tuan_03_Tiet_05_06_Menh_de_quan_he_Relative_Clauses",
    "01_HOC_KY_1\CHUYEN_DE_01_DUC_LO_QUANG_CAO\Tuan_04_Tiet_07_08_Dong_tu_nguyen_mau_Danh_dong_tu",
    "01_HOC_KY_1\CHUYEN_DE_01_DUC_LO_QUANG_CAO\Tuan_05_Tiet_09_10_Luyen_tap_duc_lo_quang_cao",
    
    "01_HOC_KY_1\CHUYEN_DE_02_GIOI_TU_VA_COLLOCATIONS\Tuan_06_Tiet_11_12_Gioi_tu_Prepositions",
    "01_HOC_KY_1\CHUYEN_DE_02_GIOI_TU_VA_COLLOCATIONS\Tuan_07_Tiet_13_14_Cum_tu_co_dinh_Collocations",
    "01_HOC_KY_1\CHUYEN_DE_02_GIOI_TU_VA_COLLOCATIONS\Tuan_08_Tiet_15_16_Dang_bai_duc_lo_6_cau_P1",
    
    "01_HOC_KY_1\CHUYEN_DE_03_DUC_LO_TO_ROI_THONG_BAO\Tuan_09_Tiet_17_18_Luong_tu_va_Lien_tu",
    "01_HOC_KY_1\CHUYEN_DE_03_DUC_LO_TO_ROI_THONG_BAO\Tuan_10_Tiet_19_20_Cum_dong_tu_Phrasal_Verbs",
    "01_HOC_KY_1\CHUYEN_DE_03_DUC_LO_TO_ROI_THONG_BAO\Tuan_11_Tiet_21_22_Tu_vung_Truong_nghia",
    "01_HOC_KY_1\CHUYEN_DE_03_DUC_LO_TO_ROI_THONG_BAO\Tuan_12_Tiet_23_24_Dang_bai_duc_lo_6_cau_P2",
    
    "01_HOC_KY_1\CHUYEN_DE_04_CAU_TRUC_CAU_VA_SAP_XEP_HOI_THOAI\Tuan_13_Tiet_25_26_Cau_truc_cau_don_ghep_phuc",
    "01_HOC_KY_1\CHUYEN_DE_04_CAU_TRUC_CAU_VA_SAP_XEP_HOI_THOAI\Tuan_14_Tiet_27_28_Phan_tu_Participles",
    "01_HOC_KY_1\CHUYEN_DE_04_CAU_TRUC_CAU_VA_SAP_XEP_HOI_THOAI\Tuan_15_Tiet_29_30_Sap_xep_doan_hoi_thoai",
    "01_HOC_KY_1\CHUYEN_DE_04_CAU_TRUC_CAU_VA_SAP_XEP_HOI_THOAI\Tuan_16_Tiet_31_32_On_tap_tong_hop_HK1",
    "01_HOC_KY_1\KIEM_TRA_HOC_KY_1\Tuan_17_Thi_Hoc_Ky_1",
    
    # HOC KY 2
    "02_HOC_KY_2\CHUYEN_DE_05_SAP_XEP_VAN_BAN\Tuan_18_Tiet_33_34_Sap_xep_la_thu_email",
    "02_HOC_KY_2\CHUYEN_DE_05_SAP_XEP_VAN_BAN\Tuan_19_Tiet_35_36_Sap_xep_doan_van",
    "02_HOC_KY_2\CHUYEN_DE_05_SAP_XEP_VAN_BAN\Tuan_20_Tiet_37_38_On_tap_dang_bai_sap_xep_cau",
    
    "02_HOC_KY_2\CHUYEN_DE_06_KY_NANG_DOC_HIEU_1\Tuan_21_Tiet_39_40_Thong_tin_chi_tiet_va_Tham_chieu",
    "02_HOC_KY_2\CHUYEN_DE_06_KY_NANG_DOC_HIEU_1\Tuan_22_Tiet_41_42_Thong_tin_de_cap_Dung_sai",
    "02_HOC_KY_2\CHUYEN_DE_06_KY_NANG_DOC_HIEU_1\Tuan_23_Tiet_43_44_On_tap_doc_hieu_1",
    
    "02_HOC_KY_2\CHUYEN_DE_07_KY_NANG_DOC_HIEU_2\Tuan_24_Tiet_45_46_Paraphrase_va_Chen_cau_vao_doan",
    "02_HOC_KY_2\CHUYEN_DE_07_KY_NANG_DOC_HIEU_2\Tuan_25_Tiet_47_48_Vi_tri_thong_tin_va_Y_chinh",
    "02_HOC_KY_2\CHUYEN_DE_07_KY_NANG_DOC_HIEU_2\Tuan_26_Tiet_49_50_Dong_nghia_Trai_nghia_Suy_luan",
    "02_HOC_KY_2\CHUYEN_DE_07_KY_NANG_DOC_HIEU_2\Tuan_27_Tiet_51_52_On_tap_doc_hieu_2",
    
    "02_HOC_KY_2\CHUYEN_DE_08_LUYEN_DE_THI_THU_MOCK_TESTS\Tuan_28_Tiet_53_54_Mock_Test_01",
    "02_HOC_KY_2\CHUYEN_DE_08_LUYEN_DE_THI_THU_MOCK_TESTS\Tuan_29_Tiet_55_56_Mock_Test_02",
    "02_HOC_KY_2\CHUYEN_DE_08_LUYEN_DE_THI_THU_MOCK_TESTS\Tuan_30_Tiet_57_58_Mock_Test_03",
    "02_HOC_KY_2\CHUYEN_DE_08_LUYEN_DE_THI_THU_MOCK_TESTS\Tuan_31_Tiet_59_60_Mock_Test_04",
    "02_HOC_KY_2\CHUYEN_DE_08_LUYEN_DE_THI_THU_MOCK_TESTS\Tuan_32_Tiet_61_62_Mock_Test_05",
    "02_HOC_KY_2\CHUYEN_DE_08_LUYEN_DE_THI_THU_MOCK_TESTS\Tuan_33_Tiet_63_64_Mock_Test_06",
    "02_HOC_KY_2\CHUYEN_DE_08_LUYEN_DE_THI_THU_MOCK_TESTS\Tuan_35_Tiet_65_66_Mock_Test_07",
    "02_HOC_KY_2\KIEM_TRA_HOC_KY_2_VA_TONG_KET\Tuan_34_Thi_Hoc_Ky_2",
    "02_HOC_KY_2\KIEM_TRA_HOC_KY_2_VA_TONG_KET\Tuan_36_Du_phong_Day_bu",
    
    # NGAN HANG
    "03_NGAN_HANG_CAU_HOI_VA_DE_MINH_HOA\De_minh_hoa_BGD_2025",
    "03_NGAN_HANG_CAU_HOI_VA_DE_MINH_HOA\De_chinh_thuc_cac_nam",
    "03_NGAN_HANG_CAU_HOI_VA_DE_MINH_HOA\Phan_1_Trac_nghiem_4_lua_chon",
    "03_NGAN_HANG_CAU_HOI_VA_DE_MINH_HOA\Phan_2_Trac_nghiem_Dung_Sai"
)

Write-Host "Dang khoi tao cay thu muc tai: $RootPath ..." -ForegroundColor Cyan
foreach ($folder in $folders) {
    $full = Join-Path $RootPath $folder
    if (-not (Test-Path $full)) {
        New-Item -ItemType Directory -Path $full -Force | Out-Null
    }
}
Write-Host "Da tao thanh cong $($folders.Count) thu muc!" -ForegroundColor Green

