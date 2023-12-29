import {
  ForwardedRef,
  InputHTMLAttributes,
  ReactNode,
  TextareaHTMLAttributes,
  forwardRef,
} from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import cl from "classnames";
import { InputLabel } from "../components/input-label";
import { InputError } from "../components/input-error";

type InputProps<T extends string> = UseFormRegisterReturn<T> &
  TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label?: string;
    containerClassName?: string;
    error?: string;
  };

export const TextAreaComponent = <T extends string>(
  {
    label,
    id,

    className,
    containerClassName,
    error,
    ...props
  }: InputProps<T>
  /*  ref: ForwardedRef<HTMLInputElement> */
) => {
  return (
    <div className={cl("grid gap-1 group", containerClassName)}>
      <InputLabel id={id} label={label} />
      <textarea
        id={id}
        {...props}
        className={cl(
          "w-full border border-gray-700 rounded p-2 resize-none",
          className,
          {
            "border-red-500 text-red-500": error,
          }
        )}
      />

      <InputError message={error} />
    </div>
  );
};

/* export const TextArea = forwardRef(InputComponent); */
