"use client";

import { FunctionComponent, useCallback } from "react";
import { ArrowLeftEndOnRectangleIcon } from "@heroicons/react/24/outline";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

interface LogoutButtonProps {
  className?: string;
  userName?: string;
}
export const LogoutButton: FunctionComponent<LogoutButtonProps> = ({
  className,
}) => {
  const router = useRouter();
  const logoutAction = useCallback(async () => {
    await signOut({ redirect: false });
    router.push("/");
  }, [router]);

  const user = useSession();

  if (user.status === "unauthenticated") {
    return null;
  }

  return (
    <button onClick={logoutAction} className={className}>
      <ArrowLeftEndOnRectangleIcon className="w-6" />
    </button>
  );
};
