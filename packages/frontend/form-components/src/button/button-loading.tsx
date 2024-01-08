import { FunctionComponent } from "react";
import cl from "classnames";
type ButtonProps = {
  className?: string;
};

export const ButtonLoading: FunctionComponent<ButtonProps> = ({
  className,
}) => (
  <div
    className={cl(
      "animate-pulse rounded w-[12.05rem] py-5 hover:bg-slate-100 flex justify-between bg-slate-400",
      className
    )}
  ></div>
);
