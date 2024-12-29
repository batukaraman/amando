import React from "react";

export default function Home({
  size = 24,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.3885 8.60758L13.8886 4.32955C12.8958 3.55682 11.5053 3.55682 10.5116 4.32955L5.01168 8.60758C4.34161 9.12824 3.9502 9.92939 3.9502 10.7782V17.5C3.9502 19.0189 5.18126 20.25 6.70016 20.25H17.7C19.2189 20.25 20.45 19.0189 20.45 17.5V10.7782C20.45 9.92939 20.0586 9.12824 19.3885 8.60758Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M15.8669 14.0515C13.8411 16.0773 10.5577 16.0773 8.53369 14.0515"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
