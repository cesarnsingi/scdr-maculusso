import type { ReactNode } from 'react'

interface SectionLabelProps {
  children: ReactNode
  className?: string
}

/**
 * Red uppercase overline label shown above every section title.
 * e.g.  ── JOGADORES
 */
export function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <p
      className={`flex items-center gap-3 text-[10px] font-bold tracking-[0.25em] uppercase text-red-600 font-condensed mb-2 ${className}`}
    >
      <span className="block w-7 h-0.5 bg-red-600 shrink-0" />
      {children}
    </p>
  )
}
