import crypto from "crypto";
import fs from "fs";
import path from "path";

export interface ServiceAccountCredentials {
  client_email: string;
  private_key: string;
  project_id?: string;
}

const globalForGoogleAuth = globalThis as unknown as {
  ontnServiceAccountCache?: ServiceAccountCredentials | null;
};

export function setRuntimeServiceAccount(creds: ServiceAccountCredentials | null): void {
  globalForGoogleAuth.ontnServiceAccountCache = creds;
}

/**
 * Tự động tìm kiếm Service Account Credentials từ runtime cache, biến môi trường hoặc tệp tin cục bộ
 */
export function getDefaultServiceAccount(): ServiceAccountCredentials | null {
  // 0. Khóa Service Account được thiết lập từ Admin Dashboard tại Runtime
  if (globalForGoogleAuth.ontnServiceAccountCache?.client_email && globalForGoogleAuth.ontnServiceAccountCache?.private_key) {
    return globalForGoogleAuth.ontnServiceAccountCache;
  }

  // 1. Biến môi trường GOOGLE_SERVICE_ACCOUNT_KEY (dạng JSON string)
  if (process.env.GOOGLE_SERVICE_ACCOUNT_KEY) {
    try {
      const raw = process.env.GOOGLE_SERVICE_ACCOUNT_KEY.trim();
      const parsed = JSON.parse(raw);
      if (parsed.client_email && parsed.private_key) {
        return parsed as ServiceAccountCredentials;
      }
    } catch {
      // Thử decode base64 nếu key được mã hóa base64 trên Vercel
      try {
        const decoded = Buffer.from(process.env.GOOGLE_SERVICE_ACCOUNT_KEY, "base64").toString("utf-8");
        const parsed = JSON.parse(decoded);
        if (parsed.client_email && parsed.private_key) {
          return parsed as ServiceAccountCredentials;
        }
      } catch {}
    }
  }

  // 2. Biến môi trường riêng lẻ GOOGLE_CLIENT_EMAIL và GOOGLE_PRIVATE_KEY
  if (process.env.GOOGLE_CLIENT_EMAIL && process.env.GOOGLE_PRIVATE_KEY) {
    return {
      client_email: process.env.GOOGLE_CLIENT_EMAIL.trim(),
      private_key: process.env.GOOGLE_PRIVATE_KEY.trim(),
      project_id: process.env.GOOGLE_PROJECT_ID,
    };
  }

  // 3. Tệp tin cục bộ (quét tự động file onthithpt-509307-4cde4b6fcaea.json và các file tương tự)
  const localCandidates = [
    path.join(process.cwd(), "onthithpt-509307-4cde4b6fcaea.json"),
    path.join(process.cwd(), "credentials-onthithpt.json"),
    path.join(process.cwd(), "credentials.json"),
    path.join(process.cwd(), "service_account.json"),
  ];

  for (const p of localCandidates) {
    try {
      if (fs.existsSync(p)) {
        const content = fs.readFileSync(p, "utf-8");
        const parsed = JSON.parse(content);
        if (parsed.client_email && parsed.private_key) {
          return parsed as ServiceAccountCredentials;
        }
      }
    } catch {}
  }

  // Quét tìm bất kỳ tệp JSON nào chứa onthithpt hoặc serviceaccount trong thư mục gốc
  try {
    const files = fs.readdirSync(process.cwd());
    for (const file of files) {
      if (file.endsWith(".json") && (file.includes("onthithpt") || file.includes("serviceaccount") || file.includes("gserviceaccount"))) {
        const fullPath = path.join(process.cwd(), file);
        try {
          const content = fs.readFileSync(fullPath, "utf-8");
          const parsed = JSON.parse(content);
          if (parsed.client_email && parsed.private_key) {
            return parsed as ServiceAccountCredentials;
          }
        } catch {}
      }
    }
  } catch {}

  // 4. Khóa Service Account mặc định của Dự án SINO ONTNTHPT (Đảm bảo hoạt động 100% trên Vercel Serverless)
  return {
    client_email: "drive-scanner@onthithpt-509307.iam.gserviceaccount.com",
    project_id: "onthithpt-509307",
    private_key:
      "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCpfhF/tLZAvHJe\nmi3pmk2svlnCZ6FkYNw3yz8cwA2HdVFd9yHm5XaRILcwFRMti7jvLgjhmGwQmXX2\nGjlMBz6FdSuWr4UG9HmVOZ312d1/gJaAZ2hph25SZVZQO0FVTkYooOJYO4BF53PD\nYHVAm5r6uZFHMEdfu6g/D7bwmCHO5D6DXAnl+iAEl210+vcscQkLNmpgVMt+7p0g\ng9j9RS1jzFkrb+IiPCEDR8j3es/aKsIDnGovmkbU21AeSz/NBSoSKRD/fwSaXHql\nKBmS8UxjcMxGtrs1B0futGXlM4C06YBoJs/1UMSuamcIsF4sXLJqVLemjQxs8Bb/\nU0JLQ+0JAgMBAAECggEASkmfuNYHdatDA5TXH8bKWbbal5sdQWY0z12NbXf91gvF\nHIbHfLDBPY3VzMTH8ZQGfAq0yNAqOUJR0gqfZ2Pbctouvy5yA2De81lcExgo/Yvq\nKyBnwq0h3QpegO7fzVhv5rnRSzPVHo56Dj22Vpl9HXx9IPMXrW2OKgmkuKItW0S2\n3c3zNsvG0K5ahP2oA9Tt/tHUYo/gh575GfEb6td/Hp1t8K9bha3zRXfzAGhzTdpS\nAMZNuxiUgNG1mL7wRGhKBcq7W1+wT/29RElVYXstG3Rn+GcAhMz3lTYMdlf025W8\nv0kPeUgKJ7KDX/UFvELxoJcLTldLBaPlGUrJm4qH0wKBgQDe/K0aL6s8czDRTZJw\nl/7oxd/aHlraJVj8LAIBTxQl9Z2sfzwhwsDe9RsM1N0Y1Vbo/BlEDQaomVgQCQJC\nfptjEks23Njj1YNLMsLckJY6EAPreLtwwaiQHaliLN28xflFw0EuKln6ekwbL9/g\nlILi0U2EarEQk0LsJwpPwDSlgwKBgQDCleukW1qwEaNBjalV5rhCE8dWWxRvAh17\nDVNxLlm5A9PYRBPhIAtXxVLzbrxt2dxGjRmLDck5cvwwukyziVhPWOk+vYjZfv09\n9K2nQPooscid+SzSRUxYsculmUWnmLK5AHjcL/P98i32n7ATNH/40jLd3CQNzyAE\ndmunE2XpgwKBgQCwlLOXuwwFEMsl1CIVG6h3OMst9T/I5C51c3wbAT5ZWQmFojRC\nH/GQHdVP8fksQzVRxuFTLGWLefNsr1WkxpHSgJgjV/xBX8Fa+VWqSK1OSYRxIeh9\nQD518adC4Xiulq/xeM/S+SLL4bEHDoBhXfnQGCMkq0CQea1TSQ83XGPUdQKBgQCa\nJwkCMPk8SQzLrv16twg8GM0vhYI/my5dwKXdITolT3nxd6VEEQ3LX+CiR5TxdcmC\n/t9AgRBr+cL+m2iORv12BtrpQF/85hSbk45K1TgZKxbix3cRsaKVFW1e6Hj9GARm\neZBF55tlEAoHumRUIqBLL8Lqbi8F3ZPg1SvdtYlkHwKBgQDMd0TARZu0NQPnE1vt\nvevE5YH5NVtNbMgz/SUEeFcmlu/HWZRb9F1Dbbxq4ABPM3peUas1m/ZgvxNxeuqh\nIiMK+sa/qaJLBJF4GLmu+mPilslzLxVZVGJBZAe6e3xyQ0PjplU6Aws45Nfw1GpH\nQnQBdBBUqzYa2DpiRpSsvMZpNQ==\n-----END PRIVATE KEY-----",
  };
}

/**
 * Tạo Google OAuth2 Access Token từ Service Account credentials
 * Hỗ trợ quyền đọc/ghi toàn diện trên Google Drive
 */
export async function getGoogleAccessToken(
  creds: ServiceAccountCredentials,
  scope: string = "https://www.googleapis.com/auth/drive"
): Promise<string> {
  const now = Math.floor(Date.now() / 1000);

  // 1. JWT Header
  const header = {
    alg: "RS256",
    typ: "JWT",
  };

  // 2. JWT Claim Set (Payload)
  const claimSet = {
    iss: creds.client_email,
    scope: scope,
    aud: "https://oauth2.googleapis.com/token",
    exp: now + 3600,
    iat: now,
  };

  const base64UrlEncode = (obj: any) =>
    Buffer.from(JSON.stringify(obj))
      .toString("base64")
      .replace(/=/g, "")
      .replace(/\+/g, "-")
      .replace(/\//g, "_");

  const encodedHeader = base64UrlEncode(header);
  const encodedClaimSet = base64UrlEncode(claimSet);
  const stringToSign = `${encodedHeader}.${encodedClaimSet}`;

  // 3. Ký số RSA-SHA256 bằng private key
  const signer = crypto.createSign("RSA-SHA256");
  signer.update(stringToSign);
  signer.end();

  // Chuẩn hóa private key (đặc biệt khi lưu trong biến môi trường với ký tự \n)
  const formattedKey = creds.private_key.replace(/\\n/g, "\n");
  const signature = signer
    .sign(formattedKey)
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");

  const jwt = `${stringToSign}.${signature}`;

  // 4. Gửi yêu cầu đổi JWT lấy Access Token từ Google OAuth2
  const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  });

  if (!tokenRes.ok) {
    const errText = await tokenRes.text();
    throw new Error(`Google OAuth2 Token Error: ${errText}`);
  }

  const tokenData = await tokenRes.json();
  return tokenData.access_token;
}
