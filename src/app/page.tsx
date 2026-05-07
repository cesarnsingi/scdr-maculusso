'use client'

import { useLocale } from '@/hooks/useLocale'
import { Navbar, Ticker, Footer } from '@/components/layout'
import {
  HeroSection,
  SquadSection,
  StandingsSection,
  HistorySection,
  CtaBanner,
  ContactSection,
} from '@/components/sections'

/**
 * Home page — the single entry point that wires language state
 * and composes every section in order.
 *
 * Language state (`locale`, `t`) lives here and is passed down as props
 * so every section re-renders when the user switches PT ↔ EN.
 */
export default function HomePage() {
  const { locale, t, setLocale } = useLocale('pt')

  return (
    <div className="bg-[#0D0D0D] text-white min-h-screen overflow-x-hidden">

      {/* ── Persistent layout ────────────────────────────────────────── */}
      <Ticker />
      <Navbar locale={locale} t={t} onLocaleChange={setLocale} />

      {/* ── Page sections ────────────────────────────────────────────── */}
      <main>
        <HeroSection     t={t} />
        <SquadSection    t={t} locale={locale} />
        <StandingsSection t={t} />
        <HistorySection  t={t} />
        <CtaBanner       t={t} />
        <ContactSection  t={t} />
      </main>

      {/* ── Footer ───────────────────────────────────────────────────── */}
      <Footer t={t} />

    </div>
  )
}
