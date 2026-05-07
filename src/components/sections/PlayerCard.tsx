import type { Player, Locale } from '@/types'
import type { SquadTranslations } from '@/types'
import { POSITION_META } from '@/lib/data'

interface PlayerCardProps {
  player: Player
  locale: Locale
  t: SquadTranslations
}

/**
 * Individual player card showing:
 * - Position color bar at the top
 * - Avatar with initials
 * - Position label + captain badge
 * - Name, nationality, city, age
 * - Games + Goals stats
 * - Large jersey number watermark
 */
export function PlayerCard({ player, locale, t }: PlayerCardProps) {
  const meta = POSITION_META[player.position]
  const initials = player.name
    .split(' ')
    .slice(0, 2)
    .map(n => n[0])
    .join('')

  const posLabel = locale === 'pt' ? meta.labelPt : meta.labelEn

  return (
    <article
      className="
        relative bg-neutral-900 border border-white/[0.07] overflow-hidden
        cursor-pointer transition-transform duration-200 hover:-translate-y-[5px]
        hover:border-red-600/40 group
      "
    >
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-600/[0.09] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Position color bar */}
      <div className="h-[3px]" style={{ background: meta.color }} />

      {/* Jersey number watermark */}
      <p
        className="absolute top-2 right-2.5 font-display font-normal text-white/[0.03] leading-none select-none pointer-events-none"
        style={{ fontSize: 70 }}
        aria-hidden="true"
      >
        {player.number}
      </p>

      <div className="relative px-4 pt-4 pb-3.5">
        {/* Avatar */}
        <div
          className="w-11 h-11 rounded-full flex items-center justify-center mb-3 font-condensed text-[14px] font-bold border-2"
          style={{
            background: `${meta.color}18`,
            borderColor: `${meta.color}35`,
            color: meta.color,
          }}
          aria-hidden="true"
        >
          {initials}
        </div>

        {/* Position + Captain */}
        <div className="flex items-center gap-1.5 mb-0.5">
          <span
            className="font-condensed text-[9px] font-bold tracking-[0.2em] uppercase"
            style={{ color: meta.color }}
          >
            {posLabel}
          </span>
          {player.isCaptain && (
            <span
              className="bg-amber-400 text-black font-condensed text-[7px] font-bold tracking-[0.1em] uppercase px-1 py-[1px]"
              title={t.captain}
            >
              C
            </span>
          )}
        </div>

        {/* Name */}
        <h3 className="font-display text-[16px] font-normal uppercase tracking-[0.04em] leading-[1.15] mb-2.5 text-white">
          {player.name}
        </h3>

        {/* Meta */}
        <p className="font-condensed text-[10px] text-white/30 mb-3 flex items-center gap-1.5">
          <span className="text-red-600 font-bold">{player.nationality}</span>
          <span>·</span>
          <span>{player.city}</span>
          <span>·</span>
          <span>{player.age} {t.years}</span>
        </p>

        {/* Stats */}
        <div className="flex gap-4 border-t border-white/[0.06] pt-3">
          <div>
            <p className="font-display text-[20px] italic leading-none text-white">{player.games}</p>
            <p className="font-condensed text-[8px] font-bold tracking-[0.15em] uppercase text-white/28 mt-0.5">{t.games}</p>
          </div>
          <div>
            <p
              className="font-display text-[20px] italic leading-none"
              style={{ color: player.goals > 0 ? '#CC0000' : '#fff' }}
            >
              {player.goals}
            </p>
            <p className="font-condensed text-[8px] font-bold tracking-[0.15em] uppercase text-white/28 mt-0.5">{t.goals}</p>
          </div>
          <div className="ml-auto flex items-center">
            <p className="font-display text-[28px] italic text-white/[0.07] leading-none">
              #{player.number}
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}
