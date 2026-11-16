# -*- coding: utf-8 -*-
"""
Script tự động tạo Bộ Trang Bìa Chuẩn KHKT (Bản Word .docx)
1. Trang bìa Kế hoạch nghiên cứu (TRANG_BIA_KE_HOACH_NGHIEN_CUU_SINO.docx)
2. Trang bìa Báo cáo kết quả nghiên cứu (TRANG_BIA_BAO_CAO_NGHIEN_CUU_SINO.docx)
Dự án: SINO – Hệ thống Ôn luyện Thi Tốt nghiệp THPT Thông minh
Đơn vị: Trường THPT Nguyễn Sinh Sắc, TX. Tân Châu, An Giang
"""

import os
import docx
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.oxml import parse_xml
from docx.oxml.ns import nsdecls

def set_cell_background(cell, fill_hex):
    tcPr = cell._tc.get_or_add_tcPr()
    shd = parse_xml(f'<w:shd {nsdecls("w")} w:fill="{fill_hex}"/>')
    tcPr.append(shd)

def set_cell_margins(cell, top=100, bottom=100, left=140, right=140):
    tcPr = cell._tc.get_or_add_tcPr()
    tcMar = parse_xml(
        f'<w:tcMar {nsdecls("w")}>'
        f'<w:top w:w="{top}" w:type="dxa"/>'
        f'<w:bottom w:w="{bottom}" w:type="dxa"/>'
        f'<w:left w:w="{left}" w:type="dxa"/>'
        f'<w:right w:w="{right}" w:type="dxa"/>'
        f'</w:tcMar>'
    )
    tcPr.append(tcMar)

def set_cell_border(cell, **kwargs):
    tcPr = cell._tc.get_or_add_tcPr()
    tcBorders = parse_xml(f'<w:tcBorders {nsdecls("w")}/>')
    for edge in ('top', 'left', 'bottom', 'right', 'insideH', 'insideV'):
        edge_data = kwargs.get(edge)
        if edge_data:
            tag = f'<w:{edge} {nsdecls("w")} w:val="{edge_data.get("val", "single")}" w:sz="{edge_data.get("sz", 4)}" w:space="0" w:color="{edge_data.get("color", "CCCCCC")}"/>'
            tcBorders.append(parse_xml(tag))
    tcPr.append(tcBorders)

def add_page_border(section, border_color="1E3A8A", border_val="double", border_sz="24"):
    sectPr = section._sectPr
    pgBorders = parse_xml(
        r'<w:pgBorders %s w:offsetFrom="page">'
        r'  <w:top w:val="%s" w:sz="%s" w:space="24" w:color="%s"/>'
        r'  <w:left w:val="%s" w:sz="%s" w:space="24" w:color="%s"/>'
        r'  <w:bottom w:val="%s" w:sz="%s" w:space="24" w:color="%s"/>'
        r'  <w:right w:val="%s" w:sz="%s" w:space="24" w:color="%s"/>'
        r'</w:pgBorders>' % (nsdecls('w'), border_val, border_sz, border_color,
                             border_val, border_sz, border_color,
                             border_val, border_sz, border_color,
                             border_val, border_sz, border_color)
    )
    sectPr.append(pgBorders)

def build_single_cover_doc(file_path, doc_type="PLAN"):
    """
    doc_type: "PLAN" (Kế hoạch nghiên cứu) hoặc "REPORT" (Báo cáo kết quả nghiên cứu)
    """
    doc = docx.Document()
    
    # Thiết lập lề trang A4 chuẩn đóng bìa: Trái 30mm, Phải 20mm, Trên 20mm, Dưới 20mm
    section = doc.sections[0]
    section.page_width = Inches(8.27)
    section.page_height = Inches(11.69)
    section.top_margin = Inches(0.85)
    section.bottom_margin = Inches(0.85)
    section.left_margin = Inches(1.18) # 30 mm
    section.right_margin = Inches(0.85)
    
    # Khung viền đôi trang trọng
    add_page_border(section, border_color="1E3A8A", border_val="double", border_sz="24")
    
    C_NAVY = RGBColor(30, 58, 138)
    C_BLUE = RGBColor(37, 99, 235)
    C_DARK = RGBColor(31, 41, 55)
    C_MUTED = RGBColor(100, 116, 139)
    C_RED = RGBColor(220, 38, 38)

    # 1. PHẦN ĐẦU TRANG: CƠ QUAN CHỦ QUẢN & TRƯỜNG
    p_header = doc.add_paragraph()
    p_header.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_header.paragraph_format.space_before = Pt(6)
    p_header.paragraph_format.space_after = Pt(2)
    
    r = p_header.add_run("SỞ GIÁO DỤC VÀ ĐÀO TẠO TỈNH AN GIANG\n")
    r.font.name = "Times New Roman"
    r.font.size = Pt(12)
    r.font.bold = True
    r.font.color.rgb = C_DARK

    r = p_header.add_run("TRƯỜNG THPT NGUYỄN SINH SẮC (TX. TÂN CHÂU)\n")
    r.font.name = "Times New Roman"
    r.font.size = Pt(13)
    r.font.bold = True
    r.font.color.rgb = C_NAVY

    r = p_header.add_run("-------------------- *** --------------------\n\n\n")
    r.font.name = "Times New Roman"
    r.font.size = Pt(10)
    r.font.color.rgb = C_MUTED

    # 2. PHẦN TÊN CUỘC THI & TÊN VĂN BẢN
    p_contest = doc.add_paragraph()
    p_contest.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_contest.paragraph_format.space_after = Pt(6)
    
    r = p_contest.add_run("CUỘC THI KHOA HỌC KỸ THUẬT DÀNH CHO HỌC SINH TRUNG HỌC\n")
    r.font.name = "Times New Roman"
    r.font.size = Pt(13)
    r.font.bold = True
    r.font.color.rgb = C_DARK

    r = p_contest.add_run("NĂM HỌC 2026 – 2027\n\n")
    r.font.name = "Times New Roman"
    r.font.size = Pt(12)
    r.font.bold = True
    r.font.color.rgb = C_BLUE

    p_doc_title = doc.add_paragraph()
    p_doc_title.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_doc_title.paragraph_format.space_after = Pt(16)
    
    if doc_type == "PLAN":
        r = p_doc_title.add_run("BẢN KẾ HOẠCH NGHIÊN CỨU KHOA HỌC KỸ THUẬT\n")
        r.font.name = "Times New Roman"
        r.font.size = Pt(16)
        r.font.bold = True
        r.font.color.rgb = C_RED

        r = p_doc_title.add_run("(RESEARCH PLAN — KÈM THEO PHIẾU HỌC SINH 1A)\n")
        r.font.name = "Times New Roman"
        r.font.size = Pt(11)
        r.font.italic = True
        r.font.bold = True
        r.font.color.rgb = C_MUTED
    else:
        r = p_doc_title.add_run("BÁO CÁO KẾT QUẢ THỰC HIỆN DỰ ÁN\n")
        r.font.name = "Times New Roman"
        r.font.size = Pt(17)
        r.font.bold = True
        r.font.color.rgb = C_RED

        r = p_doc_title.add_run("(RESEARCH PROJECT REPORT)\n")
        r.font.name = "Times New Roman"
        r.font.size = Pt(11)
        r.font.italic = True
        r.font.bold = True
        r.font.color.rgb = C_MUTED

    # 3. TÊN ĐỀ TÀI (NỔI BẬT NHẤT)
    p_project = doc.add_paragraph()
    p_project.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_project.paragraph_format.space_before = Pt(10)
    p_project.paragraph_format.space_after = Pt(20)
    
    r = p_project.add_run("TÊN DỰ ÁN DỰ THI:\n")
    r.font.name = "Times New Roman"
    r.font.size = Pt(11.5)
    r.font.bold = True
    r.font.color.rgb = C_MUTED

    r = p_project.add_run("SINO – HỆ THỐNG ÔN LUYỆN THI TỐT NGHIỆP THPT THÔNG MINH\n")
    r.font.name = "Times New Roman"
    r.font.size = Pt(20)
    r.font.bold = True
    r.font.color.rgb = C_NAVY

    r = p_project.add_run("DỰA TRÊN PHƯƠNG PHÁP GỢI MỞ SOCRATIC, BẢN ĐỊA HÓA GIỌNG ĐỌC AI\nVÀ KIẾN TRÚC SERVERLESS 0 ĐỒNG\n")
    r.font.name = "Times New Roman"
    r.font.size = Pt(12)
    r.font.bold = True
    r.font.color.rgb = C_BLUE

    r = p_project.add_run("(Smart Interactive National-exam Optimizer)\n\n")
    r.font.name = "Times New Roman"
    r.font.size = Pt(11)
    r.font.italic = True
    r.font.color.rgb = C_MUTED

    # 4. HỘP BẢNG THÔNG TIN HỒ SƠ
    table = doc.add_table(rows=5, cols=2)
    table.alignment = WD_TABLE_ALIGNMENT.CENTER
    table.autofit = False
    
    col_widths = [Inches(2.2), Inches(4.3)]
    metadata = [
        ("Lĩnh vực dự thi:", "Phần mềm hệ thống (Systems Software) / Khoa học máy tính & AI"),
        ("Đối tượng nghiên cứu:", "Học sinh THPT ôn thi Tốt nghiệp theo Chương trình GDPT 2018"),
        ("Nhóm tác giả học sinh:", "02 Học sinh Khối 12 – Trường THPT Nguyễn Sinh Sắc, An Giang"),
        ("Giáo viên hướng dẫn:", "Tổ Tin học & Tổ Ngoại ngữ – Trường THPT Nguyễn Sinh Sắc"),
        ("Năm học thực hiện:", "2026 – 2027")
    ]
    
    for idx, (label, val) in enumerate(metadata):
        row = table.rows[idx]
        c1, c2 = row.cells[0], row.cells[1]
        c1.width = col_widths[0]
        c2.width = col_widths[1]
        
        set_cell_background(c1, "F1F5F9")
        set_cell_background(c2, "FFFFFF")
        set_cell_margins(c1, top=90, bottom=90, left=120, right=120)
        set_cell_margins(c2, top=90, bottom=90, left=120, right=120)
        
        set_cell_border(c1,
            top=dict(val="single", sz=4, color="CBD5E1"),
            bottom=dict(val="single", sz=4, color="CBD5E1"),
            left=dict(val="single", sz=8, color="1E3A8A"),
            right=dict(val="single", sz=4, color="CBD5E1")
        )
        set_cell_border(c2,
            top=dict(val="single", sz=4, color="CBD5E1"),
            bottom=dict(val="single", sz=4, color="CBD5E1"),
            left=dict(val="single", sz=4, color="CBD5E1"),
            right=dict(val="single", sz=8, color="1E3A8A")
        )
        
        p1 = c1.paragraphs[0]
        p1.paragraph_format.space_before = Pt(0)
        p1.paragraph_format.space_after = Pt(0)
        r1 = p1.add_run(label)
        r1.font.name = "Times New Roman"
        r1.font.size = Pt(11)
        r1.font.bold = True
        r1.font.color.rgb = C_DARK
        
        p2 = c2.paragraphs[0]
        p2.paragraph_format.space_before = Pt(0)
        p2.paragraph_format.space_after = Pt(0)
        r2 = p2.add_run(val)
        r2.font.name = "Times New Roman"
        r2.font.size = Pt(11)
        r2.font.color.rgb = C_DARK

    # 5. PHẦN ĐỊA DANH VÀ THỜI GIAN
    p_footer = doc.add_paragraph()
    p_footer.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_footer.paragraph_format.space_before = Pt(45)
    
    date_str = "TÂN CHÂU, AN GIANG — THÁNG 09 NĂM 2026" if doc_type == "PLAN" else "TÂN CHÂU, AN GIANG — THÁNG 11 NĂM 2026"
    r = p_footer.add_run(date_str)
    r.font.name = "Times New Roman"
    r.font.size = Pt(11.5)
    r.font.bold = True
    r.font.color.rgb = C_DARK

    # 6. TRANG BÌA PHỤ (BÌA LÓT CÓ PHÂN CÔNG VÀ CHỮ KÝ)
    doc.add_page_break()
    section2 = doc.sections[0] # applies border across document
    
    p_inner_head = doc.add_paragraph()
    p_inner_head.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_inner_head.paragraph_format.space_before = Pt(10)
    p_inner_head.paragraph_format.space_after = Pt(2)
    
    r = p_inner_head.add_run("SỞ GIÁO DỤC VÀ ĐÀO TẠO TỈNH AN GIANG\n")
    r.font.name = "Times New Roman"
    r.font.size = Pt(11)
    r.font.bold = True
    
    r = p_inner_head.add_run("TRƯỜNG THPT NGUYỄN SINH SẮC (TX. TÂN CHÂU)\n")
    r.font.name = "Times New Roman"
    r.font.size = Pt(12)
    r.font.bold = True
    r.font.color.rgb = C_NAVY
    
    r = p_inner_head.add_run("-------------------- *** --------------------\n\n")
    r.font.size = Pt(9.5)
    r.font.color.rgb = C_MUTED

    p_in_title = doc.add_paragraph()
    p_in_title.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_in_title.paragraph_format.space_after = Pt(12)
    
    title_v = "KẾ HOẠCH NGHIÊN CỨU CHI TIẾT" if doc_type == "PLAN" else "BÁO CÁO KHOA HỌC TOÀN VĂN"
    r = p_in_title.add_run(f"{title_v}\n")
    r.font.name = "Times New Roman"
    r.font.size = Pt(15)
    r.font.bold = True
    r.font.color.rgb = C_NAVY
    
    r = p_in_title.add_run("DỰ ÁN: SINO – HỆ THỐNG ÔN LUYỆN THI TỐT NGHIỆP THPT THÔNG MINH\n")
    r.font.name = "Times New Roman"
    r.font.size = Pt(14)
    r.font.bold = True
    r.font.color.rgb = C_BLUE

    # Phân công nhiệm vụ chi tiết
    p_task = doc.add_paragraph()
    p_task.paragraph_format.space_before = Pt(10)
    p_task.paragraph_format.space_after = Pt(4)
    r = p_task.add_run("DANH SÁCH TÁC GIẢ VÀ PHÂN CÔNG NHIỆM VỤ NGHIÊN CỨU:")
    r.font.name = "Times New Roman"
    r.font.size = Pt(11.5)
    r.font.bold = True
    r.font.color.rgb = C_NAVY

    t_task = doc.add_table(rows=3, cols=4)
    t_task.alignment = WD_TABLE_ALIGNMENT.CENTER
    t_task_widths = [Inches(1.8), Inches(1.1), Inches(1.2), Inches(2.4)]
    t_task_headers = ["Họ và tên tác giả", "Lớp", "Vai trò", "Nhiệm vụ nghiên cứu chính"]
    t_task_data = [
        ["Học sinh 1", "Khối 12", "Trưởng nhóm", "Phụ trách Sư phạm Socratic, Thiết kế Trải nghiệm người dùng (UX/UI), Khảo sát và Thử nghiệm thực tế"],
        ["Học sinh 2", "Khối 12", "Kỹ sư hệ thống", "Phụ trách Kiến trúc Next.js Serverless, Thuật toán Socratic Guardrail, Drive Sync và Triển khai Cloud"]
    ]
    for c_i, h in enumerate(t_task_headers):
        cell = t_task.rows[0].cells[c_i]
        cell.width = t_task_widths[c_i]
        set_cell_background(cell, "1E3A8A")
        set_cell_margins(cell, top=80, bottom=80, left=100, right=100)
        p = cell.paragraphs[0]
        p.alignment = WD_ALIGN_PARAGRAPH.CENTER
        run = p.add_run(h)
        run.font.name = "Times New Roman"
        run.font.size = Pt(10)
        run.font.bold = True
        run.font.color.rgb = RGBColor(255, 255, 255)
        
    for r_i, row in enumerate(t_task_data, 1):
        for c_i, val in enumerate(row):
            cell = t_task.rows[r_i].cells[c_i]
            cell.width = t_task_widths[c_i]
            set_cell_background(cell, "F8FAFC" if r_i % 2 == 1 else "FFFFFF")
            set_cell_margins(cell, top=70, bottom=70, left=100, right=100)
            set_cell_border(cell,
                top=dict(val="single", sz=4, color="E2E8F0"),
                bottom=dict(val="single", sz=4, color="E2E8F0"),
                left=dict(val="single", sz=4, color="E2E8F0"),
                right=dict(val="single", sz=4, color="E2E8F0")
            )
            p = cell.paragraphs[0]
            p.alignment = WD_ALIGN_PARAGRAPH.CENTER if c_i in [1, 2] else WD_ALIGN_PARAGRAPH.LEFT
            run = p.add_run(val)
            run.font.name = "Times New Roman"
            run.font.size = Pt(9.5)
            run.font.color.rgb = C_DARK

    # Khung chữ ký phê duyệt
    p_sign_date = doc.add_paragraph()
    p_sign_date.alignment = WD_ALIGN_PARAGRAPH.RIGHT
    p_sign_date.paragraph_format.space_before = Pt(30)
    p_sign_date.paragraph_format.space_after = Pt(8)
    r = p_sign_date.add_run("Tân Châu, ngày ..... tháng ..... năm 2026")
    r.font.name = "Times New Roman"
    r.font.size = Pt(10.5)
    r.font.italic = True

    t_sign = doc.add_table(rows=2, cols=3)
    t_sign.alignment = WD_TABLE_ALIGNMENT.CENTER
    t_sign_widths = [Inches(2.1), Inches(2.2), Inches(2.2)]
    
    t_sign.cell(0, 0).paragraphs[0].text = "ĐẠI DIỆN NHÓM TÁC GIẢ\n(Ký và ghi rõ họ tên)"
    t_sign.cell(0, 1).paragraphs[0].text = "GIÁO VIÊN HƯỚNG DẪN\n(Ký và ghi rõ họ tên)"
    t_sign.cell(0, 2).paragraphs[0].text = "XÁC NHẬN CỦA HIỆU TRƯỞNG\nTRƯỜNG THPT NGUYỄN SINH SẮC"
    
    t_sign.cell(1, 0).paragraphs[0].text = "\n\n\n\nHọc sinh 1 & Học sinh 2"
    t_sign.cell(1, 1).paragraphs[0].text = "\n\n\n\nTổ Tin học & Tổ Ngoại ngữ"
    t_sign.cell(1, 2).paragraphs[0].text = "\n\n\n\nBan Giám hiệu Nhà trường"
    
    for row in t_sign.rows:
        for c_idx, cell in enumerate(row.cells):
            cell.width = t_sign_widths[c_idx]
            cell.paragraphs[0].alignment = WD_ALIGN_PARAGRAPH.CENTER
            for run in cell.paragraphs[0].runs:
                run.font.name = "Times New Roman"
                run.font.size = Pt(10)
                run.font.bold = True
                run.font.color.rgb = C_DARK

    doc.save(file_path)
    print(f"Đã tạo thành công tệp: {file_path}")

if __name__ == "__main__":
    out_dir = r"d:\sino"
    build_single_cover_doc(os.path.join(out_dir, "TRANG_BIA_KE_HOACH_NGHIEN_CUU_SINO.docx"), doc_type="PLAN")
    build_single_cover_doc(os.path.join(out_dir, "TRANG_BIA_BAO_CAO_NGHIEN_CUU_SINO.docx"), doc_type="REPORT")
    print("Hoàn tất tạo 2 tệp Word trang bìa!")
