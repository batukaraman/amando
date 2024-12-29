import React from "react";

export default function AAVE({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx={12} cy={12} r={10} fill="url(#a)" />
      <path
        d="m16.376 15.985-3.381-8.176c-.191-.422-.474-.629-.848-.629h-.3c-.373 0-.656.207-.847.63l-1.472 3.56H8.415a.61.61 0 0 0-.606.606v.008a.61.61 0 0 0 .606.605h.598l-1.405 3.395a.7.7 0 0 0-.041.232c0 .19.06.34.165.456q.161.173.448.172a.6.6 0 0 0 .348-.116.75.75 0 0 0 .242-.306l1.547-3.835h1.072a.61.61 0 0 0 .606-.606v-.015a.61.61 0 0 0-.606-.606h-.572l1.18-2.94 3.217 8c.06.123.134.231.242.306.1.075.224.113.348.116q.285 0 .449-.173a.64.64 0 0 0 .164-.456.54.54 0 0 0-.04-.23"
        fill="#fff"
      />
      <defs>
        <linearGradient
          id="a"
          x1={13.196}
          y1={-1.714}
          x2={-1.684}
          y2={10.806}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B6509E" />
          <stop offset={1} stopColor="#2EBAC6" />
        </linearGradient>
      </defs>
    </svg>
  );
}
