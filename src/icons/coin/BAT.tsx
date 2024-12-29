import React from "react";

export default function BAT({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity={0.1}
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
        fill="#662D91"
      />
      <mask
        id="a"
        style={{
          maskType: "luminance",
        }}
        maskUnits="userSpaceOnUse"
        x={2}
        y={2}
        width={20}
        height={20}
      >
        <path
          d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
          fill="#fff"
        />
      </mask>
      <g mask="url(#a)" fillRule="evenodd" clipRule="evenodd">
        <path d="m18.154 15.831-5.742-3.57-5.797 3.585z" fill="#662D91" />
        <path d="m12.414 5.077-.002 7.184 5.742 3.57z" fill="#9E1F63" />
        <path d="m6.615 15.846 5.797-3.585.002-7.184z" fill="#FF5000" />
        <path
          d="m12.4 9.435-2.37 4.3h4.752z"
          fill="#fff"
          stroke="#FF5000"
          strokeWidth={0.5}
        />
      </g>
    </svg>
  );
}
