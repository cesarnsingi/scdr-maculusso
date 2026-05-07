import type { ReactNode } from 'react'

interface SectionTitleProps {
  children: ReactNode
  className?: string
}

/**
 * Large condensed heading used as each section's main title.
 */
export function SectionTitle({ children, className = '' }: SectionTitleProps) {
  return (
    <h2
      className={`font-display text-[clamp(34px,5.5vw,54px)] font-normal leading-[0.92] uppercase tracking-wide ${className}`}
    >
      {children}
    </h2>
  )
}
