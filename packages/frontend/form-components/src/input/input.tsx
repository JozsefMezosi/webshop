import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
type InputProps<T extends string> = UseFormRegisterReturn<T> &
  InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
  };

const InputComponent = <T extends string>(
  { label, id, type = "text", ...props }: InputProps<T>,
  ref: ForwardedRef<HTMLInputElement>
) => {
  return (
    <div className="border ">
      {label && <label htmlFor={id}>{label}</label>}
      <div className="">
        <input type={type} id={id} {...props} ref={ref} />
      </div>
    </div>
  );
};

export const Input = forwardRef(InputComponent);
