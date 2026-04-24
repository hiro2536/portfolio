export function RibbonIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 100"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left tail */}
      <path d="M10 35 Q30 50, 50 45 L55 55 Q30 60, 5 50 Z" />
      {/* Right tail */}
      <path d="M190 35 Q170 50, 150 45 L145 55 Q170 60, 195 50 Z" />
      {/* Center bow left */}
      <ellipse cx="70" cy="50" rx="30" ry="20" />
      {/* Center bow right */}
      <ellipse cx="130" cy="50" rx="30" ry="20" />
      {/* Center knot */}
      <ellipse cx="100" cy="50" rx="15" ry="18" />
    </svg>
  )
}
