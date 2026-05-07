import type { Translations } from '@/types'
import { CLUB } from '@/lib/data'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { StatBlock } from '@/components/ui/StatBlock'

interface ContactSectionProps {
  t: Translations
}

/**
 * Contact section — four info cards in a responsive grid.
 */
export function ContactSection({ t }: ContactSectionProps) {
  const cards = [
    { icon: '📍', label: t.contact.location, value: t.contact.location_val },
    { icon: '🏆', label: t.contact.league,   value: t.contact.league_val   },
    { icon: '✉️', label: t.contact.email,    value: CLUB.email             },
    { icon: '🇦🇴', label: t.contact.country,  value: CLUB.country           },
  ]

  return (
    <section id="contact" className="bg-[#0D0D0D] py-20 px-4 md:px-14">
      <div className="max-w-[1100px] mx-auto">
        <div className="mb-9">
          <SectionLabel>{t.contact.title}</SectionLabel>
          <SectionTitle>{t.contact.subtitle}</SectionTitle>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2px]">
          {cards.map(c => (
            <StatBlock
              key={c.label}
              icon={c.icon}
              label={c.label}
              value={c.value}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
