import React from "react";

export default function DTP({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 5.826q0-.333.218-.58Q2.445 5 2.845 5h3.008q3.758 0 5.655 1.86 1.803 1.784 1.803 5.096 0 3.54-2.03 5.57-2.021 2.02-5.6 2.021H2.846q-.399 0-.627-.247A.88.88 0 0 1 2 18.712zm4.137 1.262h-.474q-.313 0-1.281.028V17.45l1.547.028h.056q3.673 0 4.517-3.169.276-1.025.276-2.268 0-1.253-.304-2.154A4 4 0 0 0 9.59 8.35Q8.405 7.088 6.137 7.088"
        fill="url(#a)"
      />
      <path
        d="M10.771 7.069H7.345a.64.64 0 0 1-.427-.152.52.52 0 0 1-.17-.39v-.996q0-.217.17-.37A.62.62 0 0 1 7.346 5h9.375q.247 0 .37.161a.56.56 0 0 1 .133.38v.996a.58.58 0 0 1-.133.38q-.133.152-.38.152h-3.549v11.87a.62.62 0 0 1-.16.428.47.47 0 0 1-.371.18h-1.338a.47.47 0 0 1-.37-.18.64.64 0 0 1-.152-.427z"
        fill="url(#b)"
      />
      <path
        d="M14.228 18.959q0 .588-.645.588h-1.12q-.332 0-.474-.18a.64.64 0 0 1-.143-.408V5.835q0-.332.171-.579.18-.255.58-.256h3.757q2.657 0 4.118 1.272Q22 7.59 22 10.039q0 2.467-1.718 3.947Q18.65 15.4 16.155 15.4q-.789 0-1.927-.142zm0-5.694.76.086q.34.037.93.037.588 0 1.27-.18a3.3 3.3 0 0 0 1.197-.579q1.129-.863 1.129-2.58 0-2.175-1.927-2.8a4.4 4.4 0 0 0-1.337-.19h-2.022z"
        fill="url(#c)"
      />
      <defs>
        <linearGradient
          id="a"
          x1={2}
          y1={5}
          x2={22.42}
          y2={5.616}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8AD4EC" />
          <stop offset={0.217} stopColor="#EF96FF" />
          <stop offset={0.54} stopColor="#FF56A9" />
          <stop offset={0.853} stopColor="#FFAA6C" />
        </linearGradient>
        <linearGradient
          id="b"
          x1={2}
          y1={5}
          x2={22.42}
          y2={5.616}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8AD4EC" />
          <stop offset={0.217} stopColor="#EF96FF" />
          <stop offset={0.54} stopColor="#FF56A9" />
          <stop offset={0.853} stopColor="#FFAA6C" />
        </linearGradient>
        <linearGradient
          id="c"
          x1={2}
          y1={5}
          x2={22.42}
          y2={5.616}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8AD4EC" />
          <stop offset={0.217} stopColor="#EF96FF" />
          <stop offset={0.54} stopColor="#FF56A9" />
          <stop offset={0.853} stopColor="#FFAA6C" />
        </linearGradient>
      </defs>
    </svg>
  );
}
