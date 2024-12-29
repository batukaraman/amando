import React from "react";

export default function BAND({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx={12} cy={12} r={10} fill="#516AFF" />
      <path
        d="M13.7013 9.22894L15.4547 10.2253V5.24359L11.948 3.5L6.5 6.55128V17.3864L11.948 20.5L17.3333 17.3242V11.9689L12.1358 8.85531L10.3825 9.72711L15.58 12.7784L15.6426 16.4524L11.948 18.5073L8.19075 16.3901V7.42308L11.948 5.36813L13.7013 6.3022V9.22894Z"
        fill="white"
      />
      <path
        d="M11.8602 12.2917L13.0349 11.6667L14.3333 12.4792L10.5 14.6667V10.1667L11.8602 10.9792"
        fill="white"
      />
    </svg>
  );
}
