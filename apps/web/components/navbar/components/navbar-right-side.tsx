"use client";

import { LogoutButton } from "@frontend/authentication-view";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { useIsSsr } from "../../../hooks/use-is-ssr";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { ProfileEntryLoadingSkeleton } from "./profile-entry-loading-skeleton";
import { useSession } from "@frontend/authentication";

export const NavbarRightSide = () => {
  const session = useSession();

  const isSsr = useIsSsr();

  const router = useRouter();
  const onContainerClick = useCallback(() => {
    router.push(!session ? "login" : "profile");
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
        <p>{session?.userData.name.firstName || "Login"}</p>
        <UserCircleIcon className="w-8" />
      </div>
      <LogoutButton className="pl-4" />
    </div>
  );
};
