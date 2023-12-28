"use client";

import { LogoutButton, useCurrentSession } from "@frontend/authentication-view";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { useIsSsr } from "../../../hooks/use-is-ssr";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { ProfileEntryLoadingSkeleton } from "./profile-entry-loading-skeleton";

export const NavbarRightSide = () => {
  const session = useCurrentSession();
  const isSsr = useIsSsr();

  const router = useRouter();
  const onContainerClick = useCallback(() => {
    router.push(!session?.user ? "login" : "profile");
  }, [router, session]);

  if (isSsr) {
    return <ProfileEntryLoadingSkeleton />;
  }

  return (
    <div className="flex">
      <div
        className="flex items-center gap-1 cursor-pointer"
        onClick={onContainerClick}
      >
        <p>{session?.user ? session.user.name : "Login"}</p>
        <UserCircleIcon className="w-8" />
      </div>
      <LogoutButton className="pl-4" />
    </div>
  );
};
