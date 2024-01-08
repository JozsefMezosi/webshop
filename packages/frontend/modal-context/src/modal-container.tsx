"use client";
import {
  FunctionComponent,
  ReactNode,
  useCallback,
  useMemo,
  useState,
  MouseEventHandler,
} from "react";
import { ModalContext } from "./modal-context";
import cl from "classnames";
import { XMarkIcon } from "@heroicons/react/24/solid";

interface ModalContainerProps {
  children: ReactNode;
}
const prevent: MouseEventHandler<HTMLDivElement> = (e) => {
  e.stopPropagation();
};
export const ModalContainer: FunctionComponent<ModalContainerProps> = ({
  children,
}) => {
  const [content, setContent] = useState<ReactNode | undefined>(undefined);
  const [header, setHeader] = useState<ReactNode | undefined>(undefined);
  const handleClose = useCallback(() => {
    setContent(undefined);
    setHeader(undefined);
  }, []);
  const handleOpen: ModalContext["show"] = (content, header) => {
    setContent(content);
    setHeader(header);
  };

  const modelContextValue: ModalContext = useMemo(
    () => ({
      close: handleClose,
      show: handleOpen,
    }),
    [handleClose]
  );
  return (
    <ModalContext.Provider value={modelContextValue}>
      {content && (
        <div
          className="fixed w-full h-full left-0 top-0 bg-black bg-opacity-20 z-[1000000000] grid place-items-center"
          onClick={handleClose}
        >
          <div
            className="fixed max-w-1/2 w-1/2 h-1/2 bg-white rounded-lg p-4"
            onClick={prevent}
          >
            <div
              className={cl(
                "flex justify-end py-1 mb-3 border-b-2 border-gray-300",
                {
                  "justify-between": Boolean(header),
                }
              )}
            >
              {typeof header === "string" ? (
                <h1 className="text-xl font-medium">{header}</h1>
              ) : (
                header
              )}
              <XMarkIcon
                className="text-gray-600 w-8 pointer font-bold"
                onClick={handleClose}
              />
            </div>
            {content}
          </div>
        </div>
      )}
      {children}
    </ModalContext.Provider>
  );
};
