"use client";

import { FunctionComponent, useCallback } from "react";
import { ArrowLeftEndOnRectangleIcon } from "@heroicons/react/24/outline";

import { useRouter } from "next/navigation";
import { logout, useSession } from "../../../authentication/src";

interface LogoutButtonProps {
  className?: string;
  userName?: string;
}

export const LogoutButton: FunctionComponent<LogoutButtonProps> = ({
  className,
}) => {
  const router = useRouter();
  const logoutAction = useCallback(() => {
    logout();
    router.push("/");
  }, [router]);

  const session = useSession();

  if (!session) {
    return null;
  }

  return (
    <button onClick={logoutAction} className={className}>
      <ArrowLeftEndOnRectangleIcon className="w-6" />
    </button>
  );
};
