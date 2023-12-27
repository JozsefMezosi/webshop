import { FunctionComponent } from "react";

interface InputErrorProps {
  message: string | undefined;
}
export const InputError: FunctionComponent<InputErrorProps> = ({ message }) =>
  message ? (
    <span className="text-sm text-red-500 -m-1 text-right pr-3">{message}</span>
  ) : null;
