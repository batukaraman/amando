import React from "react";
import Modal from "./Modal";
import Check from "@/icons/Check";
import Error from "@/icons/Error";
import Button from "./Button";
import useToggle from "@/hooks/useToggle";

export default function FeedbackModal({
  success,
  message,
}: {
  success: boolean | null;
  message: string | null;
}) {
  const { handleClose } = useToggle({
    id: "modal-feedback",
  });

  return (
    <Modal id="modal-feedback" closeButtonShown={false}>
      <div className="flex flex-col items-center gap-4 p-6 pb-8">
        {success ? (
          <Check size={64} className="text-green-500" />
        ) : (
          <Error size={64} className="text-red-500" />
        )}
        <span className="text-2xl font-bold">{message}</span>
        <Button
          text={success ? "Continue" : "Try Again"}
          size="xl"
          variant="primary"
          onClick={handleClose}
          classNames="self-stretch mt-4"
        />
      </div>
    </Modal>
  );
}
