import { LogoutButtonLoadingSkeleton } from "@frontend/authentication-view/src/logout/logout-button-loading-skeleton";

export const ProfileEntryLoadingSkeleton = () => {
  return (
    <div className="animate-pulse flex gap-2 items-center">
      <div className="flex-1 h-4 w-20 bg-slate-400 rounded"></div>
      <div className="rounded-full bg-slate-400 h-10 w-10"></div>
      <LogoutButtonLoadingSkeleton className="pl-4" />
    </div>
  );
};
