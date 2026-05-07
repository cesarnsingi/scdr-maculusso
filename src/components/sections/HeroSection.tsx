import type { Translations } from '@/types'
import { Button } from '@/components/ui/Button'

interface HeroSectionProps {
  t: Translations
}

/**
 * Full-viewport hero section with:
 * - Angola flag accent strip (left edge)
 * - Animated grid + radial glow background
 * - Staggered headline reveal
 * - Season stats bar
 * - Floating "next match" card (desktop)
 */
export function HeroSection({ t }: HeroSectionProps) {
  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-[88vh] flex items-center overflow-hidden px-4 md:px-[clamp(16px,5vw,72px)] pt-20 pb-20"
    >
      {/* ── Backgrounds ──────────────────────────────────────────────── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_72%_62%_at_58%_44%,rgba(204,0,0,0.13)_0%,transparent_68%)]" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(204,0,0,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(204,0,0,0.04) 1px,transparent 1px)',
          backgroundSize: '52px 52px',
        }}
      />
      <div className="absolute top-[-10%] right-[-8%] w-1/2 h-[120%] bg-gradient-to-br from-red-700/[0.08] to-transparent [transform:skewX(-9deg)]" />

      {/* Angola flag accent — red top / gold bottom */}
      <div className="absolute left-0 top-0 bottom-0 w-[5px] bg-gradient-to-b from-red-600 from-50% to-amber-400 to-50%" />

      {/* Large watermark */}
      <p className="absolute right-[-10px] bottom-[-20px] select-none pointer-events-none text-[clamp(180px,25vw,300px)] font-display font-normal text-white/[0.022] leading-none tracking-tight">
        SCDM
      </p>

      {/* ── Content ──────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-2xl">
        {/* Live badge */}
        <div className="flex items-center gap-2.5 mb-5 animate-[fadeUp_0.6s_0.05s_ease_both]">
          <span className="w-[7px] h-[7px] rounded-full bg-green-400 animate-pulse" />
          <span className="font-condensed text-[11px] font-bold tracking-[0.2em] uppercase text-white/42">
            {t.hero.league}
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-display text-[clamp(62px,9.5vw,118px)] font-normal leading-[0.88] uppercase tracking-wide mb-5 animate-[fadeUp_0.6s_0.2s_ease_both]"
        >
          {t.hero.tagline1}
          <br />
          <span className="text-red-600">{t.hero.tagline2}</span>
        </h1>

        <p className="font-body text-[15px] font-light text-white/50 leading-[1.78] max-w-[480px] mb-8 animate-[fadeUp_0.6s_0.35s_ease_both]">
          {t.hero.sub}
        </p>

        {/* CTAs */}
        <div className="flex gap-3 flex-wrap animate-[fadeUp_0.6s_0.5s_ease_both]">
          <Button variant="primary" onClick={() => scrollTo('squad')}>
            {t.hero.btn_squad} →
          </Button>
          <Button variant="outline" onClick={() => scrollTo('standings')}>
            {t.hero.btn_standings}
          </Button>
        </div>

        {/* Mini stats */}
        <div className="flex gap-8 mt-12 pt-7 border-t border-white/[0.08] flex-wrap animate-[fadeUp_0.6s_0.65s_ease_both]">
          {[
            { value: '4°',  label: t.statsBar.position,  accent: true },
            { value: '22',  label: t.statsBar.played },
            { value: '17',  label: t.statsBar.wins },
            { value: '137', label: t.statsBar.goals },
          ].map((s, i) => (
            <div key={i}>
              <p className={`font-display text-[clamp(28px,4vw,44px)] font-normal italic leading-none ${s.accent ? 'text-red-600' : 'text-white'}`}>
                {s.value}
              </p>
              <p className="font-condensed text-[9px] font-bold tracking-[0.18em] uppercase text-white/32 mt-1">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
