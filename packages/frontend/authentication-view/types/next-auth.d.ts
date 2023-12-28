/* eslint-disable no-unused-vars */
import { UserRoles, LoginUserResult, TokenResult } from "user-model";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    token?: string;
    error?: string;
    user?: User;
  }

  interface User {
    roles: UserRoles[];
    tokens: LoginUserResult["tokens"];
    expire?: number;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    authToken: TokenResult;
    refreshToken: TokenResult;
    error?: string;
    roles: UserRoles[];
  }
}
