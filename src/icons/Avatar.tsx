import React from "react";

export default function Avatar({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="a"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={2}
        y={2}
        width={20}
        height={20}
      >
        <circle cx={12} cy={12} r={10} fill="#161626" />
      </mask>
      <g mask="url(#a)">
        <circle cx={20} cy={12} r={12} fill="url(#b)" />
        <circle cx={5} cy={1} r={12} fill="url(#c)" />
        <circle cx={6} cy={21} r={12} fill="url(#d)" />
      </g>
      <defs>
        <linearGradient
          id="b"
          x1={3.422}
          y1={15.3}
          x2={30.624}
          y2={15.333}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1F27FD" />
          <stop offset={1} stopColor="#FF844B" />
        </linearGradient>
        <linearGradient
          id="c"
          x1={-11.578}
          y1={4.3}
          x2={15.624}
          y2={4.333}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1F27FD" />
          <stop offset={1} stopColor="#FF844B" />
        </linearGradient>
        <linearGradient
          id="d"
          x1={-15.333}
          y1={15.6}
          x2={18.828}
          y2={16.628}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FD1F43" />
          <stop offset={1} stopColor="#4BE0FF" />
        </linearGradient>
      </defs>
    </svg>
  );
}
