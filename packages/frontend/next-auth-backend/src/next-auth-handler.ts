import NextAuth from "next-auth";
import { authOptions } from "./next-auth-options";

export const nextAuthHandler = NextAuth(authOptions);
