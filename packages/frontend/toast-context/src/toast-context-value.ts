import { toast, ToastOptions } from "react-toastify";

const toastConfig: ToastOptions = { pauseOnFocusLoss: false };
export const toastContextValue = {
  info(message: string) {
    toast.info(message, toastConfig);
  },
  error(message: string) {
    toast.error(message, toastConfig);
  },
  success(message: string) {
    toast.success(message, toastConfig);
  },
  warn(message: string) {
    toast.warn(message, toastConfig);
  },
} as const;
