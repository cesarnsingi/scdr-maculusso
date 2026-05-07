import type { ReactNode } from 'react'

interface StatBlockProps {
  icon?: string
  label: string
  value: ReactNode
  className?: string
}

/**
 * Info/stat card with red left-border accent.
 * Used in the History and Contact sections.
 */
export function StatBlock({ icon, label, value, className = '' }: StatBlockProps) {
  return (
    <div
      className={`
        relative bg-neutral-900 border border-white/[0.07]
        px-5 py-6 overflow-hidden
        before:absolute before:top-0 before:left-0 before:w-[3px] before:h-full before:bg-red-600
        ${className}
      `}
    >
      {icon && <span className="text-xl mb-3 block">{icon}</span>}
      <p className="font-condensed text-[9px] font-bold tracking-[0.2em] uppercase text-white/30 mb-1.5">
        {label}
      </p>
      <p className="font-condensed text-sm font-normal uppercase tracking-wide text-white">
        {value}
      </p>
    </div>
  )
}
