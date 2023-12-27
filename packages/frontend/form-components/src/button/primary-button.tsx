import { ButtonHTMLAttributes, FunctionComponent } from "react";

interface PrimaryButtonProps {
  type: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  text: string;
}

export const PrimaryButton: FunctionComponent<PrimaryButtonProps> = ({
  type,
  text,
}) => (
  <button
    type={type}
    className="border border-gray-700 rounded px-10 py-2 hover:bg-slate-100"
  >
    {text}
  </button>
);
