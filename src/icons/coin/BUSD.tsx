import React from "react";

export default function BUSD({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10"
        fill="#EDF0F4"
      />
      <path
        d="m11.97 5.333 1.645 1.684-4.141 4.141L7.83 9.514zm2.497 2.497 1.644 1.684-6.637 6.637-1.644-1.645zm-7.489 2.496 1.644 1.684-1.644 1.644-1.645-1.644zm9.985 0 1.644 1.684-6.637 6.637-1.644-1.645z"
        fill="#F0B90B"
      />
    </svg>
  );
}
