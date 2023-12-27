"use client";

import {
  LogoutButton,
  LogoutButtonLoadingSkeleton,
  useUserData,
} from "@frontend/authentication-view";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { useIsSsr } from "../../hooks/use-is-ssr";
import { useCallback } from "react";
import { useRouter } from "next/navigation";

export const ProfileEntry = () => {
  const user = useUserData();
  const isSsr = useIsSsr();
  const router = useRouter();
  const onContainerClick = useCallback(() => {
    router.push(!user ? "login" : "profile");
  }, [router, user]);

  if (isSsr) {
    return (
      <div className="animate-pulse flex gap-2 items-center">
        <div className="flex-1 h-4 w-20 bg-slate-400 rounded "></div>
        <div className="rounded-full bg-slate-400 h-10 w-10"></div>
        <LogoutButtonLoadingSkeleton className="pl-4" />
      </div>
    );
  }
  return (
    <div
      className="flex items-center gap-1 cursor-pointer"
      onClick={onContainerClick}
    >
      <p> {user ? user.name.firstName : "login"}</p>
      <UserCircleIcon className="w-8" />
      <LogoutButton className="pl-4" />
    </div>
  );
};
