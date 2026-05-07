import type { Metadata } from 'next'
import { Bebas_Neue, Barlow_Condensed, Barlow } from 'next/font/google'
import './globals.css'

// ─── Fonts ────────────────────────────────────────────────────────────────────

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-display',
  display: 'swap',
})

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-condensed',
  display: 'swap',
})

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-body',
  display: 'swap',
})

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'SC Dr. Maculusso | Liga Nacional de Futsal · Angola',
  description:
    'Site oficial do Sport Clube Desportivo e Recriativo do Maculusso — clube de futsal angolano com sede em Luanda.',
  keywords: ['Maculusso', 'futsal', 'Angola', 'Luanda', 'Liga Nacional de Futsal'],
  openGraph: {
    title: 'SC Dr. Maculusso',
    description: 'Orgulho de Luanda. Futsal angolano ao mais alto nível.',
    locale: 'pt_AO',
    type: 'website',
  },
}

// ─── Layout ───────────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt"
      className={`${bebasNeue.variable} ${barlowCondensed.variable} ${barlow.variable}`}
    >
      <body className="bg-[#0D0D0D] text-white antialiased">
        {children}
      </body>
    </html>
  )
}
