import zlib from "zlib";

/**
 * Trích xuất toàn bộ văn bản thuần từ file Word .docx (dạng nhị phân ZIP)
 * Sử dụng thư viện zlib tiêu chuẩn của Node.js, không phụ thuộc thư viện bên ngoài
 */
export function extractDocxTextFromBuffer(buffer: Buffer): string {
  let offset = 0;

  while (offset < buffer.length - 30) {
    // Tìm Header của tệp tin trong ZIP: 0x04034b50 ("PK\x03\x04")
    if (
      buffer[offset] === 0x50 &&
      buffer[offset + 1] === 0x4b &&
      buffer[offset + 2] === 0x03 &&
      buffer[offset + 3] === 0x04
    ) {
      const compMethod = buffer.readUInt16LE(offset + 8);
      const compSize = buffer.readUInt32LE(offset + 18);
      const uncompSize = buffer.readUInt32LE(offset + 22);
      const nameLen = buffer.readUInt16LE(offset + 26);
      const extraLen = buffer.readUInt16LE(offset + 28);
      const fileName = buffer.toString("utf8", offset + 30, offset + 30 + nameLen);
      const dataStart = offset + 30 + nameLen + extraLen;

      // Tìm thấy tệp văn bản chính word/document.xml của file Word
      if (fileName === "word/document.xml" || fileName.endsWith("/document.xml")) {
        try {
          let xml = "";
          if (compMethod === 8) {
            // Nén Deflate chuẩn
            const slice = buffer.subarray(dataStart, dataStart + compSize);
            xml = zlib.inflateRawSync(slice).toString("utf8");
          } else if (compMethod === 0) {
            // Không nén
            xml = buffer.toString("utf8", dataStart, dataStart + uncompSize);
          }

          if (xml) {
            // Bóc tách text và giữ lại dấu xuống dòng của đoạn văn
            return xml
              .replace(/<\/w:p>/g, "\n")
              .replace(/<\/w:tr>/g, "\n")
              .replace(/<w:tab\/>/g, "\t")
              .replace(/<[^>]+>/g, "")
              .replace(/&lt;/g, "<")
              .replace(/&gt;/g, ">")
              .replace(/&amp;/g, "&")
              .replace(/&quot;/g, '"')
              .replace(/&apos;/g, "'")
              .replace(/\n\s*\n/g, "\n");
          }
        } catch (e) {
          console.error("Lỗi giải nén word/document.xml:", e);
        }
      }

      // Nhảy tới tệp tiếp theo trong ZIP
      offset = dataStart + (compSize > 0 ? compSize : 1);
    } else {
      offset++;
    }
  }

  return "";
}
