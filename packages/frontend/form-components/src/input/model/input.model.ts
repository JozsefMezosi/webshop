import { InputHTMLAttributes, ReactNode } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export const InputIconPlace = {
  right: "right",
  left: "left",
} as const;

export type InputIconPlace = keyof typeof InputIconPlace;
export type InputProps<T extends string> = UseFormRegisterReturn<T> &
  InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    containerClassName?: string;
    icon?: ReactNode;
    error?: string;
    iconPlacement?: InputIconPlace;
  };
