import crypto from "crypto";

export interface ServiceAccountCredentials {
  client_email: string;
  private_key: string;
  project_id?: string;
}

/**
 * Tạo Google OAuth2 Access Token từ Service Account credentials
 * Sử dụng thư viện crypto tiêu chuẩn của Node.js, không cần thư viện bên ngoài
 */
export async function getGoogleAccessToken(
  creds: ServiceAccountCredentials
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
    scope: "https://www.googleapis.com/auth/drive.readonly",
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
