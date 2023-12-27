"use client";

import { useCallback } from "react";
import { clearUser } from "../store/actions/clear-user";
import { useClearUserFromCookies } from "./hooks/use-clear-user-from-cookies";
import { useAuthToken } from "../api/use-auth-token";

export const LogoutButton = () => {
  const clearUserFromCookies = useClearUserFromCookies();

  const logoutAction = useCallback(() => {
    clearUser();
    clearUserFromCookies();
  }, [clearUserFromCookies]);

  const token = useAuthToken();

  if (!token) {
    return null;
  }

  return <button onClick={logoutAction}>Logout</button>;
};
