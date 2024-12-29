export default function Shield({
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
      viewBox="0 0 192 192"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g
        clipPath="url(#a)"
        stroke="currentColor"
        strokeWidth={1.44}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M160 89.456c0 36.328-27.304 70.296-64 78.544-36.696-8.248-64-42.216-64-78.544V60.92a15.99 15.99 0 0 1 9.944-14.808l40-16.368a37.1 37.1 0 0 1 28.112 0l40 16.368A16 16 0 0 1 160 60.92z" />
        <path d="m122 81-30 30-18-18" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="currentColor" d="M0 0h192v192H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
