import { headers } from "next/headers";
import { NextResponse } from "next/server";

const rateLimitMap = new Map();
// This function can be marked `async` if using `await` inside
export function middleware() {
  const ip = headers().get("x-forwarded-for");
  const limit = 5; // Limiting requests to 5 per minute per IP
  const windowMs = 60 * 1000; // 1 minute

  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, {
      count: 0,
      lastReset: Date.now(),
    });
  }

  const ipData = rateLimitMap.get(ip);

  if (Date.now() - ipData.lastReset > windowMs) {
    ipData.count = 0;
    ipData.lastReset = Date.now();
  }

  if (ipData.count >= limit) {
    return NextResponse.json({
      success: false,
      type: "API_LIMIT_EXCEEDED",
      message: "Too many Request",
    });
  }

  ipData.count += 1;
  return;
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/api/:path*",
};
