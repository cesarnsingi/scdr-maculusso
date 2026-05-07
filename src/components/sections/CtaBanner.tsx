import type { Translations } from '@/types'
import { Button } from '@/components/ui/Button'

interface CtaBannerProps {
  t: Translations
}

/**
 * Full-width red CTA banner between History and Contact sections.
 */
export function CtaBanner({ t }: CtaBannerProps) {
  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      className="relative bg-red-600 py-14 px-4 md:px-14 overflow-hidden"
      aria-label="Call to action"
    >
      {/* Diagonal pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg,rgba(0,0,0,0.07) 0,rgba(0,0,0,0.07) 1px,transparent 0,transparent 50%)',
          backgroundSize: '10px 10px',
        }}
      />
      {/* Watermark */}
      <p className="absolute right-[-20px] top-[-20px] font-display text-[150px] font-normal text-black/[0.06] leading-none select-none pointer-events-none">
        SCDM
      </p>

      <div className="relative max-w-[1100px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
        <div>
          <p className="font-condensed text-[10px] font-bold tracking-[0.22em] uppercase text-white/65 mb-2">
            Sport Clube Desportivo e Recriativo
          </p>
          <h2 className="font-display text-[clamp(22px,3.5vw,40px)] font-normal uppercase tracking-[0.04em] leading-none text-white">
            {t.hero.tagline1} {t.hero.tagline2}
          </h2>
        </div>
        <Button variant="white" onClick={() => scrollTo('squad')}>
          {t.hero.btn_squad} →
        </Button>
      </div>
    </section>
  )
}
