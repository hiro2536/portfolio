export function ButterflyIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left wing */}
      <ellipse cx="10" cy="12" rx="8" ry="10" />
      <ellipse cx="8" cy="22" rx="5" ry="6" />
      {/* Right wing */}
      <ellipse cx="22" cy="12" rx="8" ry="10" />
      <ellipse cx="24" cy="22" rx="5" ry="6" />
      {/* Body */}
      <ellipse cx="16" cy="16" rx="2" ry="10" />
      {/* Antennae */}
      <path d="M14 6 Q12 2, 10 1" stroke="currentColor" fill="none" strokeWidth="1.5" />
      <path d="M18 6 Q20 2, 22 1" stroke="currentColor" fill="none" strokeWidth="1.5" />
    </svg>
  )
}
