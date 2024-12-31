import { IoCloseOutline } from "react-icons/io5";
import Button from "./Button";
import Check from "@/icons/Check";
import { IconType } from "@/icons/type";
import Infornation from "@/icons/Infornation";
import Warning from "@/icons/Warning";
import Error from "@/icons/Error";

const Alert: React.FC<{
  title: string;
  description?: string;
  variant?: "success" | "information" | "warning" | "error" | "default";
  closeable?: boolean;
}> = ({ title, description, variant = "default", closeable = false }) => {
  const handleClose = () => {};

  const ComputedIcon: IconType | null =
    variant === "success"
      ? Check
      : variant === "information"
      ? Infornation
      : variant === "warning"
      ? Warning
      : variant === "error"
      ? Error
      : null;

  // bg-primary-100 bg-clip-padding text-sm text-primary-700 shadow-lg  dark:bg-slate-900 dark:text-primary-500
  const computedVariantClasses =
    variant === "success"
      ? `bg-green-300 text-green-900 ring-green-900 dark:bg-green-500/10 dark:text-green-500 dark:ring-green-700`
      : variant === "information"
      ? `bg-blue-300 text-blue-900 ring-blue-900 dark:bg-blue-500/10 dark:text-blue-500 dark:ring-blue-700`
      : variant === "warning"
      ? `bg-yellow-300 text-yellow-900 ring-yellow-900 dark:bg-yellow-500/10 dark:text-yellow-500 dark:ring-yellow-700`
      : variant === "error"
      ? `bg-red-300 text-red-900 ring-red-900 dark:bg-red-500/10 dark:text-red-500 dark:ring-red-700`
      : `bg-zinc-100 dark:bg-zinc-800 dark:ring-zinc-400`;

  return (
    <div
      className={`flex items-start gap-2 py-4 px-6 rounded-xl w-full ring-1 ${computedVariantClasses}`}
    >
      {ComputedIcon && <ComputedIcon />}
      <div className="flex flex-col gap-1">
        <span className="text-md font-bold leading-6 text-white">{title}</span>
        {description && (
          <span className="text-sm text-gray-400">{description}</span>
        )}
      </div>
      {closeable && (
        <Button
          variant="tertiary"
          onlyIcon
          Icon={IoCloseOutline}
          onClick={handleClose}
          classNames="absolute top-4 right-4"
        />
      )}
    </div>
  );
};

export default Alert;
