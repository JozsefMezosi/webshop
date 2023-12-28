import { FunctionComponent } from "react";
import cl from "classnames";
interface LogoutButtonLoadingSkeletonProps {
  className?: string;
}
export const LogoutButtonLoadingSkeleton: FunctionComponent<
  LogoutButtonLoadingSkeletonProps
> = ({ className }) => {
  return (
    <div className={cl("animate-pulse flex", className)}>
      <div className="rounded-full bg-slate-400 h-8 w-5"></div>
    </div>
  );
};
