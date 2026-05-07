interface ClubCrestProps {
  size?: number
  className?: string
}

/**
 * Hexagonal club crest with "SC" text.
 * Renders as a pure SVG — no external images required.
 */
export function ClubCrest({ size = 42, className = '' }: ClubCrestProps) {
  return (
    <div
      className={`shrink-0 flex items-center justify-center bg-red-600 font-condensed font-black text-white ${className}`}
      style={{
        width: size,
        height: size,
        clipPath: 'polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)',
        fontSize: size * 0.25,
        letterSpacing: '0.02em',
      }}
      aria-label="SC Dr. Maculusso crest"
    >
      SC
    </div>
  )
}
