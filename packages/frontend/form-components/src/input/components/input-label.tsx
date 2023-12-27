import { FunctionComponent } from "react";

interface InputLabelProps {
  id: string | undefined;
  label: string | undefined;
}
export const InputLabel: FunctionComponent<InputLabelProps> = ({
  id,
  label,
}) => {
  if (!label) {
    return null;
  }

  return (
    <label htmlFor={id} className="text-sm">
      {label}
    </label>
  );
};
