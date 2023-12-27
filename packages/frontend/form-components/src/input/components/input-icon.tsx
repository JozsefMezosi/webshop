import { FunctionComponent, ReactNode } from "react";
import cl from "classnames";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

interface InputIconProps {
  icon: ReactNode | undefined;
  error: string | undefined;
}
export const InputIcon: FunctionComponent<InputIconProps> = ({
  icon,
  error,
}) => {
  if (!icon && !error) {
    return null;
  }
  return (
    <div
      className={cl(
        "w-6 absolute top-1/2 left-2 -translate-y-1/2 transform *:text-gray-500",
        { "*:text-red-500": error }
      )}
    >
      {error ? <ExclamationCircleIcon /> : icon}
    </div>
  );
};
