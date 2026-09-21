import { NextRequest, NextResponse } from "next/server";
import { getGoogleAccessToken, ServiceAccountCredentials } from "@/lib/googleAuth";
import { scanOnTNTHPTRootFolder } from "@/lib/driveFolderScanner";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const folderId = body.folderId || "19toY6VB5iERD2D9-tirycSjEz_YQbowL";
    let serviceAccount: ServiceAccountCredentials | null = null;

    // 1. Lấy thông tin Service Account từ payload hoặc từ biến môi trường
    if (body.serviceAccount) {
      if (typeof body.serviceAccount === "string") {
        serviceAccount = JSON.parse(body.serviceAccount);
      } else {
        serviceAccount = body.serviceAccount;
      }
    } else if (process.env.GOOGLE_SERVICE_ACCOUNT_KEY) {
      serviceAccount = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY);
    }

    if (!serviceAccount || !serviceAccount.client_email || !serviceAccount.private_key) {
      return NextResponse.json(
        {
          error:
            "Vui lòng cung cấp khóa xác thực Google Service Account (file JSON key) hoặc cấu hình biến môi trường GOOGLE_SERVICE_ACCOUNT_KEY!",
          requiresCredentials: true,
        },
        { status: 400 }
      );
    }

    // 2. Lấy Access Token
    const accessToken = await getGoogleAccessToken(serviceAccount);

    // 3. Quét toàn bộ thư mục OnTNTHPT
    const scanResult = await scanOnTNTHPTRootFolder(accessToken, folderId);

    return NextResponse.json({
      success: true,
      folderId,
      tree: scanResult.tree,
      count: scanResult.questions.length,
      subjectsCount: scanResult.subjects.length,
      data: {
        questions: scanResult.questions,
        subjects: scanResult.subjects,
        tree: scanResult.tree,
      },
    });
  } catch (error: any) {
    console.error("Lỗi quét thư mục Google Drive:", error);

    // Gợi ý khắc phục lỗi quyền truy cập
    let hint = "";
    if (error.message.includes("404") || error.message.includes("notFound")) {
      hint = "Vui lòng kiểm tra lại bạn đã bấm Chia sẻ (Share) thư mục OnTNTHPT cho email của Service Account chưa.";
    }

    return NextResponse.json(
      {
        error: error.message || "Lỗi quét thư mục Google Drive",
        hint,
      },
      { status: 500 }
    );
  }
}
