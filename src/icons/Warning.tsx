import React from "react";
import { IconType } from "./type";

const Warning: IconType = ({ size = 24, className = "" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="m14.029 4.139 7.659 13.404c.89 1.558-.235 3.497-2.029 3.497H4.341c-1.795 0-2.92-1.939-2.029-3.497L9.971 4.139c.897-1.571 3.161-1.571 4.058 0M12 13.12V9.38"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.999 16a.25.25 0 1 0 .002.5.25.25 0 0 0-.002-.5"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Warning;
