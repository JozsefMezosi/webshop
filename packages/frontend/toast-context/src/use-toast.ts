import { useContext } from "react";
import { ToastContext } from "./toast-context";

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("Toast context is not defined!");
  }
  return context;
};
