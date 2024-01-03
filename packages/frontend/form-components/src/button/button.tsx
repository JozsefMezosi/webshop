import { ButtonHTMLAttributes, FunctionComponent, ReactElement } from "react";
import cl from "classnames";
interface ButtonProps {
  type: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  text: string;
  className?: string;
  secondary?: boolean;
  icon?: ReactElement;
  onClick?: () => void;
}

export const Button: FunctionComponent<ButtonProps> = ({
  type,
  text,
  className,
  icon,
  onClick,
  secondary = false,
}) => (
  <button
    onClick={onClick}
    type={type}
    className={cl(
      "border border-gray-700 rounded px-10 py-2 hover:bg-slate-100 flex justify-between",
      { "border-gray-400": secondary },
      className
    )}
  >
    {icon && <div className="w-6 *:text-gray-500">{icon}</div>}
    <p>{text}</p>
  </button>
);
