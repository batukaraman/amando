import React from "react";

export default function DEFIBOX({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx={12} cy={12} r={10} fill="#F4D029" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.889 10.733v-1.9H5.5v1.9zm1.88-1.9h-1.253v2.534H5.5v3.8h6.27zm-5.015 3.8V13.9h3.762v-1.267zM13.65 10.1h5.016V8.833h-6.27v6.334h6.27v-3.8h-3.762v1.266h2.508V13.9H13.65z"
        fill="#fff"
      />
    </svg>
  );
}
