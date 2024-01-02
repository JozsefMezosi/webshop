import { FunctionComponent, ReactNode } from "react";
import cl from "classnames";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { InputIconPlace } from "../model/input.model";

interface InputIconProps {
  icon: ReactNode | undefined;
  error: string | undefined;
  iconPlacement: InputIconPlace;
}
export const InputIcon: FunctionComponent<InputIconProps> = ({
  icon,
  error,
  iconPlacement,
}) => {
  if (!icon && !error) {
    return null;
  }
  return (
    <div
      className={cl(
        "w-6 absolute top-1/2  -translate-y-1/2 transform *:text-gray-500",
        {
          "*:text-red-500": error,
          "left-2": iconPlacement === InputIconPlace.left,
          "right-2": iconPlacement === InputIconPlace.right,
        }
      )}
    >
      {error ? <ExclamationCircleIcon /> : icon}
    </div>
  );
};
