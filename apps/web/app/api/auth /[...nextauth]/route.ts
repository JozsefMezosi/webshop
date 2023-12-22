import NextAuth from "next-auth";
import type { NextAuthOptions, Session, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { JWT } from "next-auth/jwt";
import { loginUser } from "../../../../services/user/login-user";

const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { type: "text" },
        password: { type: "password" },
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials.password) {
            throw new Error("No credentials provided!");
          }

          return await loginUser(credentials);
        } catch (error) {
          throw new Error(String(error));
        }
      },
    }),
  ],
  callbacks: {
    session: ({
      session,
      token,
    }: {
      session: Session;
      token: JWT;
    }): Promise<Session> => {
      if (!token.exp || Date.now() > token.expire) {
        Promise.reject({
          error: "Token has ben expired!",
        });
      }

      session.token = token?.token;

      return Promise.resolve(session);
    },
    jwt: ({ token, user }: { token: JWT; user?: User }) => {
      if (user?.email && user.expire) {
        return { ...token, ...user };
      }

      if (!token.exp || Date.now() > token.expire) {
        return Promise.reject({
          error: "Token has ben expired!",
        });
      }
      return { ...token, ...user };
    },
  },

  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
