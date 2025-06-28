import { NextResponse, NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  console.log("Token:", token);

  if (!token && !req.nextUrl.pathname.startsWith("/api/auth")) {
    return NextResponse.redirect(new URL("/api/auth/signin", req.url));
  }

  console.log("hello your in middleware");

  return NextResponse.next();
}
