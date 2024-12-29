import React from "react";

export default function ETH({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx={20} cy={20} r={16.667} fill="#EDF0F4" />
      <path
        d="m19.954 10-.133.45v13.067l.133.133 6.066-3.586z"
        fill="#343434"
      />
      <path d="m19.955 10-6.066 10.064 6.066 3.586z" fill="#8C8C8C" />
      <path
        d="m19.955 24.798-.075.091v4.655l.075.218 6.069-8.547z"
        fill="#3C3C3B"
      />
      <path d="M19.955 29.762v-4.964l-6.066-3.583z" fill="#8C8C8C" />
      <path d="m19.954 23.65 6.066-3.586-6.066-2.757z" fill="#141414" />
      <path d="m13.889 20.064 6.066 3.586v-6.343z" fill="#393939" />
    </svg>
  );
}
