import { getSession } from "@frontend/authentication-server";
import { NextRequest, NextResponse } from "next/server";

const pagesWithoutToken = ["/login", "/register"];

export async function middleware(request: NextRequest) {
  const { nextUrl, url } = request;

  const session = await getSession();

  if (pagesWithoutToken.includes(nextUrl.pathname)) {
    if (session) {
      return NextResponse.redirect(new URL("/", url));
    }
  }

  if (nextUrl.pathname.startsWith("/admin")) {
    if (!session) {
      return NextResponse.redirect(new URL("/", url));
    }
  }

  return NextResponse.next();
}
