"use client";
import { createContext } from "react";

export interface ToastContextModel {
  info(message: string): void;
  success(message: string): void;
  warn(message: string): void;
  error(message: string): void;
}

export const ToastContext = createContext<ToastContextModel | undefined>(
  undefined
);
