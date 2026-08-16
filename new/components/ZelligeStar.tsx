export function ZelligeStar({
  className = "",
  color = "#1D5C6B",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <g stroke={color} strokeWidth="1.6" strokeLinejoin="round">
        <path
          d="M100 10 L124 62 L182 58 L142 100 L182 142 L124 138 L100 190 L76 138 L18 142 L58 100 L18 58 L76 62 Z"
          fill="none"
        />
        <circle cx="100" cy="100" r="34" />
      </g>
    </svg>
  );
}
