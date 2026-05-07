/**
 * Scrolling news ticker at the very top of the page.
 * Shows current season stats on a red background, looping infinitely.
 */
export function Ticker() {
  const items = [
    'SCDM · 4ª Posição',
    'Liga Nacional de Futsal · Angola',
    '52 Pontos · Fase de Grupos',
    '17 Vitórias · 22 Jogos',
    '137 Golos Marcados',
  ]

  // Duplicate for seamless loop
  const allItems = [...items, ...items]

  return (
    <div className="overflow-hidden bg-red-600 py-2.5" aria-hidden="true">
      <div
        className="flex w-max"
        style={{ animation: 'ticker 30s linear infinite' }}
      >
        {allItems.map((item, i) => (
          <span
            key={i}
            className="
              whitespace-nowrap px-10
              font-condensed text-[11px] font-bold tracking-[0.14em] uppercase text-white/85
              flex items-center gap-3
            "
          >
            {item}
            <span className="block w-4 h-[1.5px] bg-white/35 shrink-0" />
          </span>
        ))}
      </div>

      <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
