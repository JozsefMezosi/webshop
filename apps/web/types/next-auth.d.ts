/* eslint-disable no-unused-vars */

import { UserRoles } from "user-model";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    token?: string;
    refreshToken?: string;
    error?: string;
    user?: User;
  }

  interface User {
    roles: UserRoles[];
    expire?: number;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    token: string;
    isAdmin: boolean;
    expire: number;
  }
}
