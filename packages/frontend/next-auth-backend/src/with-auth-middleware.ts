import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import { UserRoles } from "user-model";

const pagesWithoutToken = ["/login", "/register"];
const pagesWithUserAuth: string[] = ["profile"];
const pagesWithAdminAuth: string[] = [];
export const withAuthMiddleware = withAuth(
  function middleware({ nextUrl, url, nextauth }) {
    if (pagesWithoutToken.includes(nextUrl.pathname)) {
      if (nextauth.token && !nextauth.token.error) {
        return NextResponse.redirect(new URL("/", url));
      }
    }

    NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ req, token }) => {
        const { pathname } = req.nextUrl;

        const isUserProtectedRoute = pagesWithUserAuth.includes(pathname);
        const isAdminProtectedRoute = pagesWithAdminAuth.includes(pathname);

        if (!isAdminProtectedRoute && !isUserProtectedRoute) {
          return true;
        }

        if (token?.error) {
          return false;
        }

        if (isUserProtectedRoute) {
          return Boolean(token?.roles.includes(UserRoles.user));
        }

        return Boolean(token?.roles.includes(UserRoles.admin));
      },
    },
  }
);
