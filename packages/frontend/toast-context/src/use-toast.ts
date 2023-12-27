import { useContext } from "react";
import { ToastContext } from "./toast-context";

export const useToast = () => {
  if (!ToastContext) {
    throw new Error("Toast context is not defined!");
  }
  return useContext(ToastContext);
};
