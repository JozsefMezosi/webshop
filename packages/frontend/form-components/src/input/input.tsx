import {
  ForwardedRef,
  InputHTMLAttributes,
  ReactNode,
  forwardRef,
} from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import cl from "classnames";
import { InputError } from "./components/input-error";
import { InputIcon } from "./components/input-icon";
import { InputLabel } from "./components/input-label";
type InputProps<T extends string> = UseFormRegisterReturn<T> &
  InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    containerClassName?: string;
    icon?: ReactNode;
    error?: string;
  };

const InputComponent = <T extends string>(
  {
    label,
    id,
    type = "text",
    className,
    containerClassName,
    icon,
    error,
    ...props
  }: InputProps<T>,
  ref: ForwardedRef<HTMLInputElement>
) => {
  return (
    <div className={cl("grid gap-1 group", containerClassName)}>
      <InputLabel id={id} label={label} />
      <div className="relative">
        <InputIcon icon={icon} error={error} />
        <input
          type={type}
          id={id}
          {...props}
          ref={ref}
          className={cl("border border-gray-700 rounded p-2", className, {
            "pl-9": icon,
            "border-red-500 text-red-500": error,
          })}
        />
      </div>
      <InputError message={error} />
    </div>
  );
};

export const Input = forwardRef(InputComponent);
