"use client";
import { SessionProvider } from "next-auth/react";
import { FunctionComponent, ReactNode } from "react";

interface AuthProviderProps {
  children: ReactNode;
}
export const AuthProvider: FunctionComponent<AuthProviderProps> = ({
  children,
}) => <SessionProvider>{children}</SessionProvider>;
