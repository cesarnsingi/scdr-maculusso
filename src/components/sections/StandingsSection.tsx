import type { Translations } from '@/types'
import { STANDINGS } from '@/lib/data'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { SectionTitle } from '@/components/ui/SectionTitle'

interface StandingsSectionProps {
  t: Translations
}

/**
 * Standings section — full league table with our team highlighted.
 * Includes a "our team" highlight card at the top.
 * Goal difference is colour-coded green/red.
 */
export function StandingsSection({ t }: StandingsSectionProps) {
  const us = STANDINGS.find(s => s.isUs)

  return (
    <section id="standings" className="bg-[#0D0D0D] py-20 px-4 md:px-14">
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="mb-8">
          <SectionLabel>{t.standings.subtitle}</SectionLabel>
          <SectionTitle>{t.standings.title}</SectionTitle>
        </div>

        {/* Our team highlight */}
        {us && (
          <div className="
            bg-red-600/[0.09] border border-red-600/25 border-l-4 border-l-red-600
            px-5 py-4 mb-5 flex items-center justify-between flex-wrap gap-3
          ">
            <div className="flex items-center gap-3.5">
              <p className="font-display text-[40px] italic text-red-600 leading-none">{us.pos}°</p>
              <div>
                <p className="font-condensed text-[9px] font-bold tracking-[0.2em] uppercase text-white/38 mb-0.5">
                  {t.standings.ourTeam}
                </p>
                <p className="font-display text-[15px] uppercase tracking-[0.04em] text-white">
                  SC Dr. Maculusso
                </p>
              </div>
            </div>
            <div className="flex gap-5 font-condensed">
              {[
                { value: us.pts,   label: t.standings.pts },
                { value: us.wins,  label: t.standings.wins },
                { value: us.played,label: t.standings.played },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <p className="font-display text-[30px] italic text-white leading-none">{s.value}</p>
                  <p className="text-[9px] font-bold tracking-[0.15em] uppercase text-white/32 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Table */}
        <div className="bg-neutral-950 border border-white/[0.07] overflow-x-auto">
          {/* Table header */}
          <div className="
            grid items-center px-4 py-2.5
            border-b-2 border-white/[0.08] bg-white/[0.02]
            font-condensed text-[9px] font-bold tracking-[0.18em] uppercase text-white/28
          " style={{ gridTemplateColumns: '32px 1fr 36px 36px 36px 36px 44px 44px 44px 44px' }}>
            <span>{t.standings.pos}</span>
            <span>{t.standings.team}</span>
            <span className="text-center">{t.standings.played}</span>
            <span className="text-center">{t.standings.wins}</span>
            <span className="text-center">{t.standings.draws}</span>
            <span className="text-center">{t.standings.losses}</span>
            <span className="text-center hidden md:block">{t.standings.gf}</span>
            <span className="text-center hidden md:block">{t.standings.ga}</span>
            <span className="text-center hidden md:block">{t.standings.gd}</span>
            <span className="text-center">{t.standings.pts}</span>
          </div>

          {/* Rows */}
          {STANDINGS.map(s => (
            <div
              key={s.pos}
              className={`
                grid items-center px-4 py-2.5
                border-b border-white/[0.06] last:border-none
                transition-colors duration-150 hover:bg-white/[0.025]
                font-condensed
                ${s.isUs ? 'bg-red-600/[0.09] border-l-[3px] border-l-red-600' : ''}
              `}
              style={{ gridTemplateColumns: '32px 1fr 36px 36px 36px 36px 44px 44px 44px 44px' }}
            >
              <span
                className="text-[12px] font-bold italic"
                style={{ color: s.pos <= 3 ? '#FFB700' : s.isUs ? '#CC0000' : 'rgba(255,255,255,0.3)' }}
              >
                {s.pos}
              </span>
              <span className={`
                flex items-center gap-1.5 uppercase tracking-[0.03em]
                ${s.isUs ? 'text-[13px] font-bold text-white' : 'text-[11px] font-normal text-white/65'}
              `}>
                <span
                  className="w-[5px] h-[5px] rounded-full shrink-0"
                  style={{ background: s.isUs ? '#CC0000' : 'rgba(255,255,255,0.12)' }}
                />
                {s.team}
              </span>
              <span className="text-center text-[12px] text-white/38">{s.played}</span>
              <span className="text-center text-[12px] text-white/62">{s.wins}</span>
              <span className="text-center text-[12px] text-white/38">{s.draws}</span>
              <span className="text-center text-[12px] text-white/38">{s.losses}</span>
              <span className="text-center text-[12px] text-white/38 hidden md:block">{s.gf}</span>
              <span className="text-center text-[12px] text-white/38 hidden md:block">{s.ga}</span>
              <span
                className="text-center text-[12px] font-semibold hidden md:block"
                style={{ color: s.gd > 0 ? '#4ade80' : s.gd < 0 ? '#f87171' : 'rgba(255,255,255,0.38)' }}
              >
                {s.gd > 0 ? '+' : ''}{s.gd}
              </span>
              <span
                className="text-center font-display text-[15px] italic"
                style={{ color: s.isUs ? '#fff' : 'rgba(255,255,255,0.55)' }}
              >
                {s.pts}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
