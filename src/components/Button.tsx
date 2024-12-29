import { JSX } from "react";
import { IconType } from "react-icons";
import { IconType as CustomIconType } from "@/icons/type";
import { LiaSpinnerSolid } from "react-icons/lia";
import Link from "next/link";

type ButtonType = {
  text?: string;
  Icon?: IconType | CustomIconType;
  iconPosition?: "left" | "right";
  onlyIcon?: boolean;
  variant?: "primary" | "secondary" | "tertiary";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  disable?: boolean;
  classNames?: string;
  onClick?: (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => void;
  href?: string;
  type?: "button" | "submit" | "reset";
  download?: boolean;
  target?: React.HTMLAttributeAnchorTarget;
  isLoading?: boolean;
};

function Button({
  text,
  Icon,
  iconPosition = "left",
  onlyIcon = false,
  variant = "primary",
  size = "md",
  disable = false,
  classNames = "",
  onClick,
  href,
  type,
  download,
  target,
  isLoading = false,
}: ButtonType): JSX.Element {
  const downloadable = Boolean(download && href);

  const buttonContent = (
    <>
      {isLoading && (
        <LiaSpinnerSolid className="animate-spin text-current w-5 h-5" />
      )}
      {Icon && iconPosition === "left" && !onlyIcon && (
        <Icon className="w-4 h-4 text-inherit" />
      )}
      {!onlyIcon && text}
      {Icon && iconPosition === "right" && !onlyIcon && (
        <Icon className="w-4 h-4 text-inherit" />
      )}
      {onlyIcon && Icon && (
        <Icon
          className={`w-${
            size === "xs"
              ? 3
              : size === "sm"
              ? 4
              : size === "md"
              ? 6
              : size === "lg"
              ? 8
              : 10
          } h-${
            size === "xs"
              ? 3
              : size === "sm"
              ? 4
              : size === "md"
              ? 6
              : size === "lg"
              ? 8
              : 10
          }`}
        />
      )}
    </>
  );

  const contentClasses =
    "flex items-center justify-center gap-2 font-inherit font-bold transition-all duration-200 select-none";

  const contentVariantClasses = {
    primary:
      "hover:bg-primary3 group-disabled:bg-[#1F1F1F] text-white group-disabled:text-[#474747]",
    secondary:
      "bg-[#1F1F1F] text-primary6 hover:bg-primary3 group-disabled:bg-[#1F1F1F] hover:text-primary2 group-disabled:text-[#474747]",
    tertiary: "text-primary6",
  };

  const contentSizeClasses = {
    xs: `h-full text-xs ${onlyIcon ? "px-1.5" : "px-4"}`,
    sm: `h-full text-xs ${onlyIcon ? "px-2" : "px-4"}`,
    md: `h-full text-sm ${onlyIcon ? "px-2" : "px-5"}`,
    lg: `h-full text-md ${onlyIcon ? "px-3" : "px-6"}`,
    xl: `h-full text-lg ${onlyIcon ? "px-4" : "px-7"}`,
  };

  const containerClasses = "group overflow-hidden";

  const containerVariantClasses = {
    primary: "bg-gradient1",
    secondary: "",
    tertiary: "",
  };

  const containerSizeClasses = {
    xs: "h-6 rounded-lg",
    sm: "h-8 rounded-lg",
    md: "h-10 rounded-xl",
    lg: "h-12 rounded-xl",
    xl: "h-14 rounded-xl",
  };

  const computedContainerClassNames = `${containerClasses} ${containerVariantClasses[variant]} ${containerSizeClasses[size]} ${classNames}`;
  const computedContentClassNames = `${contentClasses} ${contentVariantClasses[variant]} ${contentSizeClasses[size]}`;

  if (href) {
    return (
      <Link
        target={target}
        href={href}
        onClick={onClick}
        download={downloadable}
        className={computedContainerClassNames}
      >
        <div className={computedContentClassNames}>{buttonContent}</div>
      </Link>
    );
  }

  return (
    <button
      disabled={disable || isLoading}
      onClick={onClick}
      type={type || "button"}
      className={computedContainerClassNames}
    >
      <div className={computedContentClassNames}>{buttonContent}</div>
    </button>
  );
}

export default Button;
