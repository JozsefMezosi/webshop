"use client";
import { ReactNode, createContext } from "react";

export interface ModalContext {
  show: (content: ReactNode, header?: string | ReactNode) => void;
  close: () => void;
}

export const ModalContext = createContext<ModalContext | undefined>(undefined);
