// ─── Player ──────────────────────────────────────────────────────────────────

export type Position = 'GK' | 'DEF' | 'ALA' | 'PIV'
export type Nationality = 'ANG' | string

export interface Player {
  number: number
  name: string
  position: Position
  nationality: Nationality
  city: string
  age: number
  games: number
  goals: number
  isCaptain?: boolean
}

// ─── Standing ─────────────────────────────────────────────────────────────────

export interface Standing {
  pos: number
  team: string
  pts: number
  played: number
  wins: number
  draws: number
  losses: number
  gf: number
  ga: number
  gd: number
  pct: number
  isUs?: boolean
}

// ─── i18n ─────────────────────────────────────────────────────────────────────

export type Locale = 'pt' | 'en'

export interface NavTranslations {
  home: string
  squad: string
  standings: string
  history: string
  contact: string
}

export interface HeroTranslations {
  league: string
  tagline1: string
  tagline2: string
  sub: string
  btn_squad: string
  btn_standings: string
}

export interface StatsBarTranslations {
  position: string
  played: string
  wins: string
  goals: string
}

export interface SquadTranslations {
  title: string
  subtitle: string
  all: string
  goalkeepers: string
  defenders: string
  wings: string
  pivots: string
  nationality: string
  origin: string
  age: string
  games: string
  goals: string
  years: string
  captain: string
}

export interface StandingsTranslations {
  title: string
  subtitle: string
  pos: string
  team: string
  played: string
  wins: string
  draws: string
  losses: string
  gf: string
  ga: string
  gd: string
  pts: string
  pct: string
  ourTeam: string
}

export interface HistoryTranslations {
  title: string
  subtitle: string
  p1: string
  p2: string
  city: string
  league: string
  players: string
  country: string
  season: string
}

export interface ContactTranslations {
  title: string
  subtitle: string
  location: string
  location_val: string
  league: string
  league_val: string
  email: string
  country: string
}

export interface FooterTranslations {
  navigate: string
  club: string
  contact: string
  about: string
  description: string
  rights: string
  made: string
}

export interface Translations {
  nav: NavTranslations
  hero: HeroTranslations
  statsBar: StatsBarTranslations
  squad: SquadTranslations
  standings: StandingsTranslations
  history: HistoryTranslations
  contact: ContactTranslations
  footer: FooterTranslations
}

// ─── Position metadata ────────────────────────────────────────────────────────

export interface PositionMeta {
  labelPt: string
  labelEn: string
  color: string
}
