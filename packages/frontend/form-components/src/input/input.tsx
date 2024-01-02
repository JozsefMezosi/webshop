import { ForwardedRef, forwardRef } from "react";
import cl from "classnames";
import { InputError } from "../components/input-error";
import { InputIcon } from "./components/input-icon";
import { InputLabel } from "../components/input-label";
import { InputIconPlace, InputProps } from "./model/input.model";

const InputComponent = <T extends string>(
  {
    label,
    id,
    type = "text",
    className,
    containerClassName,
    icon,
    error,
    iconPlacement = InputIconPlace.left,
    ...props
  }: InputProps<T>,
  ref: ForwardedRef<HTMLInputElement>
) => {
  return (
    <div className={cl("grid gap-1 group", containerClassName)}>
      <InputLabel id={id} label={label} />
      <div className="relative">
        <InputIcon icon={icon} error={error} iconPlacement={iconPlacement} />
        <input
          type={type}
          id={id}
          {...props}
          ref={ref}
          className={cl(
            "w-full border border-gray-700 rounded p-2",
            className,
            {
              "pl-10": iconPlacement === InputIconPlace.left,
              "pr-10": iconPlacement === InputIconPlace.right,
              "border-red-500 text-red-500": error,
            }
          )}
        />
      </div>
      <InputError message={error} />
    </div>
  );
};

export const Input = forwardRef(InputComponent);
