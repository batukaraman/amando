"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import { IoCloseOutline } from "react-icons/io5";
import useToggle from "@/hooks/useToggle";
import Button from "@/components/Button";

type ModalProps = {
  id: string;
  closeButtonShown?: boolean;
  children: React.ReactNode;
};

export default function Modal({
  id,
  closeButtonShown = true,
  children,
}: ModalProps) {
  const [mounted, setMounted] = React.useState(false);
  const modalRef = React.useRef<HTMLDivElement>(null);

  const { isOpen, handleClose } = useToggle({
    id,
    state: false,
    elementRef: modalRef,
    closeOnClickOutside: false,
    closeOnScroll: false,
  });

  React.useEffect(() => setMounted(true), []);

  return mounted
    ? createPortal(
        <div
          className={`fixed top-0 bottom-0 w-full z-40 flex items-center justify-center p-4 ${
            isOpen ? "modal visible opacity-100" : "invisible opacity-0"
          } transition-all duration-300 ease-in-out`}
          ref={modalRef}
        >
          <div
            className={`max-w-2xl w-[424px] max-h-[700px] relative bg-white dark:bg-zinc-950 rounded-xl shadow-sm z-40 p-6 ${
              isOpen ? "translate-y-0" : "-translate-y-1/4"
            } transition-transform duration-300 ease-in-out`}
          >
            {children}
            {closeButtonShown && (
              <Button
                variant="tertiary"
                size="lg"
                onlyIcon
                Icon={IoCloseOutline}
                onClick={handleClose}
                classNames="absolute top-4 right-4"
              />
            )}
          </div>
          <div
            className="absolute w-full h-full bg-slate-200/70 dark:bg-zinc-900/70 backdrop-blur-sm"
            onClick={handleClose}
          ></div>
        </div>,
        document.body
      )
    : null;
}
