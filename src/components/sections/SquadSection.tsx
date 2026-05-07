'use client'

import { useState } from 'react'
import type { Locale, Translations, Position } from '@/types'
import { PLAYERS } from '@/lib/data'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { PlayerCard } from './PlayerCard'

interface SquadSectionProps {
  locale: Locale
  t: Translations
}

type Filter = Position | 'ALL'

const FILTERS: { key: Filter; labelKey: keyof typeof FILTER_LABEL_KEYS }[] = [
  { key: 'ALL',  labelKey: 'all' },
  { key: 'GK',   labelKey: 'goalkeepers' },
  { key: 'DEF',  labelKey: 'defenders' },
  { key: 'ALA',  labelKey: 'wings' },
  { key: 'PIV',  labelKey: 'pivots' },
]

// typed helper so the record lookup is safe
const FILTER_LABEL_KEYS = {
  all: true, goalkeepers: true, defenders: true, wings: true, pivots: true,
} as const

/**
 * Squad section — filterable grid of PlayerCard components.
 * Filters: All / Goalkeepers / Defenders / Wings / Pivots
 */
export function SquadSection({ locale, t }: SquadSectionProps) {
  const [filter, setFilter] = useState<Filter>('ALL')

  const visible = filter === 'ALL'
    ? PLAYERS
    : PLAYERS.filter(p => p.position === filter)

  return (
    <section id="squad" className="bg-neutral-950 py-20 px-4 md:px-14">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
          <div>
            <SectionLabel>{t.squad.subtitle}</SectionLabel>
            <SectionTitle>{t.squad.title}</SectionTitle>
          </div>
        </div>

        {/* Filter tabs */}
        <div className="flex gap-1.5 mb-7 flex-wrap" role="tablist" aria-label="Filter players by position">
          {FILTERS.map(({ key, labelKey }) => (
            <button
              key={key}
              role="tab"
              aria-selected={filter === key}
              onClick={() => setFilter(key)}
              className={`
                font-condensed text-[11px] font-bold tracking-[0.1em] uppercase
                px-4 py-2 rounded-[2px] border transition-all duration-150 cursor-pointer
                ${filter === key
                  ? 'bg-red-600 border-red-600 text-white'
                  : 'bg-transparent border-white/10 text-white/40 hover:border-white/30 hover:text-white'}
              `}
            >
              {t.squad[labelKey]}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[2px]">
          {visible.map(player => (
            <PlayerCard
              key={player.number}
              player={player}
              locale={locale}
              t={t.squad}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
