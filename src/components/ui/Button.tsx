import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'outline' | 'white'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  children: ReactNode
}

const CLIP = '[clip-path:polygon(0_0,calc(100%-11px)_0,100%_11px,100%_100%,11px_100%,0_calc(100%-11px))]'

const VARIANTS: Record<Variant, string> = {
  primary: `bg-red-600 text-white hover:bg-red-700 border-transparent`,
  outline: `bg-transparent text-white border-white/25 hover:border-white/55`,
  white:   `bg-white text-red-600 border-transparent hover:bg-gray-100`,
}

/**
 * Club-branded button with angled corners (clip-path chevron style).
 * Variants: primary (red), outline (transparent + white border), white (for red backgrounds).
 */
export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  return (
    <button
      className={`
        inline-flex items-center gap-2
        px-7 py-3.5
        border-[1.5px]
        font-condensed text-[13px] font-bold tracking-[0.12em] uppercase
        transition-all duration-200 active:scale-[0.98] cursor-pointer
        ${CLIP} ${VARIANTS[variant]} ${className}
      `}
      {...props}
    >
      {children}
    </button>
  )
}
