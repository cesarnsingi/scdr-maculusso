import type { Translations } from '@/types'
import { ClubCrest } from '@/components/ui/ClubCrest'

interface FooterProps {
  t: Translations
}

/**
 * Site-wide footer with four column grid:
 * club info, navigation, club links, contact info.
 */
export function Footer({ t }: FooterProps) {
  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const navLinks = [
    { id: 'home',       label: t.nav.home },
    { id: 'squad',      label: t.nav.squad },
    { id: 'standings',  label: t.nav.standings },
    { id: 'history',    label: t.nav.history },
  ]

  const clubLinks = [
    t.footer.about,
    'Liga Nacional de Futsal',
    'Angola',
  ]

  const contactLinks = [
    'Luanda, Angola',
    'geral@maculusso.ao',
    'Liga Nacional de Futsal',
  ]

  return (
    <footer className="bg-[#080808] border-t border-white/[0.06] pt-10 pb-6 px-4 md:px-14">
      <div className="max-w-6xl mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-9 mb-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-3.5">
              <ClubCrest size={34} />
              <div>
                <p className="font-display text-[13px] uppercase tracking-[0.08em] text-white leading-none">Maculusso</p>
                <p className="font-condensed text-[7px] font-bold tracking-[0.2em] uppercase text-white/25 mt-0.5">Luanda · Angola</p>
              </div>
            </div>
            <p className="font-body text-[11px] font-light text-white/35 leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Navigate */}
          <div>
            <p className="font-condensed text-[8px] font-bold tracking-[0.22em] uppercase text-white/22 mb-3.5">
              {t.footer.navigate}
            </p>
            {navLinks.map(l => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="block font-condensed text-[12px] font-semibold uppercase tracking-[0.05em] text-white/42 hover:text-white mb-2 transition-colors duration-150 cursor-pointer"
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Club */}
          <div>
            <p className="font-condensed text-[8px] font-bold tracking-[0.22em] uppercase text-white/22 mb-3.5">
              {t.footer.club}
            </p>
            {clubLinks.map(l => (
              <p key={l} className="font-condensed text-[12px] font-semibold uppercase tracking-[0.05em] text-white/42 mb-2">
                {l}
              </p>
            ))}
          </div>

          {/* Contact */}
          <div>
            <p className="font-condensed text-[8px] font-bold tracking-[0.22em] uppercase text-white/22 mb-3.5">
              {t.footer.contact}
            </p>
            {contactLinks.map(l => (
              <p key={l} className="font-condensed text-[12px] font-semibold uppercase tracking-[0.05em] text-white/42 mb-2">
                {l}
              </p>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-5 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="font-body text-[10px] text-white/18">
            © 2025 SC Dr. Maculusso. {t.footer.rights}
          </p>
          <p className="font-body text-[10px] text-white/18">
            {t.footer.made}
          </p>
        </div>
      </div>
    </footer>
  )
}
