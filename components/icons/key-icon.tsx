export function KeyIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Key head (ornate) */}
      <circle cx="7" cy="7" r="5" />
      <circle cx="7" cy="7" r="2" fill="var(--background, white)" />
      {/* Key shaft */}
      <rect x="10" y="6" width="12" height="2" />
      {/* Key teeth */}
      <rect x="18" y="8" width="2" height="4" />
      <rect x="21" y="8" width="2" height="3" />
      {/* Decorative heart on key head */}
      <path d="M7 4.5 L5.5 5.5 L7 7.5 L8.5 5.5 Z" fill="var(--background, white)" />
    </svg>
  )
}
