import { FunctionComponent } from "react";

interface InputErrorProps {
  message: string | undefined;
}
export const InputError: FunctionComponent<InputErrorProps> = ({ message }) =>
  message ? (
    <span className="text-sm text-red-500 text-right pr-1 break-normal">
      {message}
    </span>
  ) : null;
