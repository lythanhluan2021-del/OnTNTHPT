import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const hasServerFptKey = Boolean(process.env.FPT_AI_API_KEY && process.env.FPT_AI_API_KEY.trim());
  const hasServerOpenaiKey = Boolean(process.env.OPENAI_API_KEY && process.env.OPENAI_API_KEY.trim());

  return NextResponse.json({
    hasServerFptKey,
    hasServerOpenaiKey,
  });
}
