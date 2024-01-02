import { ButtonHTMLAttributes, FunctionComponent, ReactElement } from "react";
import cl from "classnames";
interface PrimaryButtonProps {
  type: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  text: string;
  className?: string;
  isSecondary?: boolean;
  icon?: ReactElement;
  onClick?: () => void;
}

export const PrimaryButton: FunctionComponent<PrimaryButtonProps> = ({
  type,
  text,
  className,
  icon,
  onClick,
  isSecondary = false,
}) => (
  <button
    onClick={onClick}
    type={type}
    className={cl(
      "border border-gray-700 rounded px-10 py-2 hover:bg-slate-100 flex justify-between",
      { "border-gray-400": isSecondary },
      className
    )}
  >
    {icon && <div className={cl("w-6 *:text-gray-500")}>{icon}</div>}
    <p> {text}</p>
  </button>
);
