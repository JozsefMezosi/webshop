import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { LoginUserResult, TokenResultWithRoles } from "user-model";
import { authService } from "../../authentication-view/src/service/axios/auth.service";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { type: "text" },
        password: { type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          throw new Error("No credentials provided!");
        }
        try {
          const {
            data: {
              tokens,
              userData: { email, name, roles },
            },
          } = await authService.post<LoginUserResult>(
            "auth/login",
            credentials
          );

          return {
            name: `${name.firstName} ${name.lastName}`,
            email,
            id: email,
            tokens,
            roles,
          };
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        return {
          ...user.tokens,
          email: user.email,
          name: user.name,
          sub: user.id,
          roles: user.roles,
        };
      }

      const { authToken, refreshToken } = token;
      const now = Date.now();

      if (now < authToken.expire) {
        return token;
      }
      try {
        if (now < refreshToken.expire) {
          const { data } = await authService.post<TokenResultWithRoles>(
            "auth/login",
            {},
            { headers: { refreshToken: refreshToken.value } }
          );

          return {
            ...token,
            authToken: data,
            exp: data.expire,
            roles: data.roles,
          };
        }
      } catch (error) {
        return { ...token, error: "RefreshAccessTokenError" as const };
      }

      return { ...token, error: "RefreshAccessTokenError" as const };
    },
    session: ({ session, token }) => {
      return {
        ...session,
        error: token.error,
      };
    },
  },

  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
};
