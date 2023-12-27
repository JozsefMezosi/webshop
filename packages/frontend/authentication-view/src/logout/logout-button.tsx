"use client";

import { FunctionComponent, useCallback } from "react";
import { clearUser } from "../store/actions/clear-user";
import { useClearUserFromCookies } from "./hooks/use-clear-user-from-cookies";
import { useAuthToken } from "../api/use-auth-token";
import { ArrowLeftEndOnRectangleIcon } from "@heroicons/react/24/outline";

interface LogoutButtonProps {
  className?: string;
}
export const LogoutButton: FunctionComponent<LogoutButtonProps> = ({
  className,
}) => {
  const clearUserFromCookies = useClearUserFromCookies();

  const logoutAction = useCallback(() => {
    clearUser();
    clearUserFromCookies();
  }, [clearUserFromCookies]);

  const token = useAuthToken();

  if (!token) {
    return null;
  }

  return (
    <button onClick={logoutAction} className={className}>
      <ArrowLeftEndOnRectangleIcon className="w-6" />
    </button>
  );
};
