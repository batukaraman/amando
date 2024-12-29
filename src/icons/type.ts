import { JSX } from "react";

export type IconProps = {
  size?: number;
  className?: string;
};

export type IconType = (props: IconProps) => JSX.Element;