import React from "react";

export default function BNB({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.7 14.419c-1.335 5.357-6.762 8.618-12.12 7.282C4.224 20.365.963 14.939 2.3 9.582 3.635 4.224 9.06.964 14.418 2.299c5.358 1.336 8.619 6.763 7.283 12.12"
        fill="#F3BA2F"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m12.001 8.347-2.59 2.59-1.506-1.508L12 5.333l4.1 4.098-1.507 1.506zm-5.16 2.146L5.334 12l1.506 1.506L8.347 12zm2.57 2.571 2.59 2.59 2.59-2.591 1.509 1.506h-.001L12 18.668l-4.099-4.099zm7.75-2.57L15.656 12l1.507 1.506L18.669 12z"
        fill="#fff"
      />
      <path
        d="M13.53 12 12 10.47l-1.528 1.528-.002.002.002.002L12 13.53z"
        fill="#fff"
      />
    </svg>
  );
}
