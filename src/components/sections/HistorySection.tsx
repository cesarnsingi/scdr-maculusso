import type { Translations } from '@/types'
import { PLAYERS, CLUB } from '@/lib/data'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { StatBlock } from '@/components/ui/StatBlock'

interface HistorySectionProps {
  t: Translations
}

/**
 * Club history section — two-column layout:
 * Left: narrative text | Right: info cards + season stats
 */
export function HistorySection({ t }: HistorySectionProps) {
  return (
    <section id="history" className="bg-neutral-950 py-20 px-4 md:px-14">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

        {/* Left — text */}
        <div>
          <SectionLabel>{t.history.title}</SectionLabel>
          <SectionTitle className="mb-7">{t.history.subtitle}</SectionTitle>

          <p className="font-body text-[14px] font-light text-white/50 leading-[1.85] mb-4">
            {t.history.p1}
          </p>
          <p className="font-body text-[14px] font-light text-white/50 leading-[1.85]">
            {t.history.p2}
          </p>
        </div>

        {/* Right — cards */}
        <div>
          <div className="grid grid-cols-2 gap-[2px]">
            <StatBlock icon="📍" label={t.history.city}    value={CLUB.city + ', ' + CLUB.country} />
            <StatBlock icon="🏆" label={t.history.league}  value="Liga Nacional" />
            <StatBlock icon="👕" label={t.history.players} value={`${PLAYERS.length} ${t.squad.subtitle}`} />
            <StatBlock icon="🇦🇴" label={t.history.country} value={CLUB.country} />
          </div>

          {/* Season stats */}
          <div className="mt-[2px] relative bg-neutral-900 border border-white/[0.07] px-5 py-5 before:absolute before:top-0 before:left-0 before:w-[3px] before:h-full before:bg-red-600">
            <p className="font-condensed text-[9px] font-bold tracking-[0.18em] uppercase text-white/28 mb-4">
              {t.history.season}
            </p>
            <div className="grid grid-cols-4 gap-3">
              {[
                { value: '52', label: t.standings.pts },
                { value: '17', label: t.standings.wins },
                { value: '14', label: t.standings.draws },
                { value: '4°', label: t.standings.pos, accent: true },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <p
                    className="font-display text-[32px] italic leading-none"
                    style={{ color: s.accent ? '#CC0000' : '#fff' }}
                  >
                    {s.value}
                  </p>
                  <p className="font-condensed text-[8px] font-bold tracking-[0.15em] uppercase text-white/28 mt-1">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
