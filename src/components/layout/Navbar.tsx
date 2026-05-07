'use client'

import { useState } from 'react'
import type { Locale, Translations } from '@/types'
import { ClubCrest } from '@/components/ui/ClubCrest'
import { useScrolled } from '@/hooks/useScrolled'

interface NavbarProps {
  locale: Locale
  t: Translations
  onLocaleChange: (locale: Locale) => void
}

const NAV_KEYS = ['home', 'squad', 'standings', 'history', 'contact'] as const

/**
 * Sticky top navigation bar.
 * - Transparent on mount, opaque + blur once scrolled.
 * - PT / EN language toggle.
 * - Responsive: collapses to hamburger on mobile.
 */
export function Navbar({ locale, t, onLocaleChange }: NavbarProps) {
  const scrolled = useScrolled(50)
  const [mobileOpen, setMobileOpen] = useState(false)

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50 h-16
          flex items-center justify-between
          px-4 md:px-14
          transition-all duration-300
          ${scrolled
            ? 'bg-black/97 backdrop-blur-xl border-b border-white/[0.07]'
            : 'bg-black/75 backdrop-blur-md'}
        `}
      >
        {/* Logo */}
        <button
          onClick={() => scrollTo('home')}
          className="flex items-center gap-3 cursor-pointer"
          aria-label="Go to homepage"
        >
          <ClubCrest size={40} />
          <div>
            <p className="font-display text-[15px] font-normal uppercase tracking-[0.08em] text-white leading-none">
              Maculusso
            </p>
            <p className="font-condensed text-[8px] font-bold tracking-[0.2em] uppercase text-white/30 mt-0.5">
              Luanda · Angola
            </p>
          </div>
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8" role="navigation">
          {NAV_KEYS.map(key => (
            <li key={key}>
              <button
                onClick={() => scrollTo(key)}
                className="
                  relative font-condensed text-[11px] font-bold tracking-[0.14em] uppercase
                  text-white/50 hover:text-white transition-colors duration-200
                  after:absolute after:bottom-[-3px] after:left-0 after:w-0 after:h-[2px]
                  after:bg-red-600 after:transition-all after:duration-200
                  hover:after:w-full
                "
              >
                {t.nav[key]}
              </button>
            </li>
          ))}
        </ul>

        {/* Language toggle */}
        <div className="hidden md:flex items-center gap-1">
          {(['pt', 'en'] as Locale[]).map(l => (
            <button
              key={l}
              onClick={() => onLocaleChange(l)}
              className={`
                font-condensed text-[11px] font-bold tracking-[0.1em] uppercase
                px-2.5 py-1.5 rounded-[2px] border transition-all duration-200
                ${locale === l
                  ? 'bg-red-600 border-red-600 text-white'
                  : 'bg-transparent border-white/20 text-white/45 hover:border-white/40 hover:text-white'}
              `}
              aria-label={`Switch to ${l === 'pt' ? 'Portuguese' : 'English'}`}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2 cursor-pointer"
          onClick={() => setMobileOpen(o => !o)}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileOpen}
        >
          {[0, 1, 2].map(i => (
            <span
              key={i}
              className="block w-[22px] h-[2px] bg-white transition-all duration-200"
              style={{
                transform: mobileOpen && i === 0 ? 'rotate(45deg) translateY(7px)' : mobileOpen && i === 2 ? 'rotate(-45deg) translateY(-7px)' : 'none',
                opacity: mobileOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed top-16 left-0 right-0 z-40 bg-black/98 backdrop-blur-2xl border-b border-white/[0.07] px-6 pb-7 pt-2 md:hidden animate-fade-in">
          {NAV_KEYS.map((key, i) => (
            <button
              key={key}
              onClick={() => scrollTo(key)}
              className="
                block w-full text-left py-3.5
                font-display text-[22px] font-normal uppercase tracking-[0.06em] text-white
                border-b border-white/[0.06] last:border-none
              "
              style={{ animationDelay: `${i * 40}ms` }}
            >
              {t.nav[key]}
            </button>
          ))}
          <div className="flex gap-2 mt-5">
            {(['pt', 'en'] as Locale[]).map(l => (
              <button
                key={l}
                onClick={() => { onLocaleChange(l); setMobileOpen(false) }}
                className={`
                  font-condensed text-[11px] font-bold tracking-[0.1em] uppercase
                  px-3 py-2 rounded-[2px] border transition-all duration-200
                  ${locale === l
                    ? 'bg-red-600 border-red-600 text-white'
                    : 'bg-transparent border-white/20 text-white/45'}
                `}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
