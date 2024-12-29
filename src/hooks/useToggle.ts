import { AppDispatch } from "@/store";
import { toggle, close, open, setInitialState } from "@/store/toggleSlice";
import { RootState } from "@/store";
import { RefObject, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

type useToggleType = {
  id: string;
  state?: boolean;
  elementRef?: RefObject<HTMLElement | null>;
  closeOnClickOutside?: boolean;
  closeOnScroll?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
};

function useToggle({
  id,
  state = false,
  elementRef,
  closeOnClickOutside = true,
  closeOnScroll = false,
  onClose,
  onOpen,
}: useToggleType) {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(setInitialState({ id, initialState: state }));
  }, [dispatch]);

  const isOpen = useSelector((state: RootState) => state.toggle[id]);

  const handleToggle = () => {
    dispatch(toggle(id));
  };

  const handleClose = () => {
    dispatch(close(id));
  };

  const handleOpen = () => {
    dispatch(open(id));
  };

  useEffect(() => {
    if (!isOpen && onClose) {
      onClose();
    }
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen && onOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        elementRef?.current &&
        !elementRef.current.contains(event.target as Node) &&
        !(event.target as HTMLElement).closest(`.${id}__toggle`)
      ) {
        handleClose();
      }
    }

    function handleScroll() {
      handleClose();
    }

    if (closeOnClickOutside) {
      document.addEventListener("click", handleClickOutside);
    }
    if (closeOnScroll) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleClose]);

  return { handleToggle, handleClose, handleOpen, isOpen };
}

export default useToggle;
