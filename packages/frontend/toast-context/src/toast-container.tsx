"use client";
import { FunctionComponent, ReactNode } from "react";
import { toastContextValue } from "./toast-context-value";
import { ToastContext } from "./toast-context";
import { ToastContainer as ReactToastifyToastContainers } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ToastContainerProps {
  children: ReactNode;
}
export const ToastContainer: FunctionComponent<ToastContainerProps> = ({
  children,
}) => (
  <ToastContext.Provider value={toastContextValue}>
    {children}
    <ReactToastifyToastContainers />
  </ToastContext.Provider>
);
