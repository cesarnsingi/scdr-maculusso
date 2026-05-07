import type { Player, Standing, PositionMeta, Position } from '@/types'

// ─── Position metadata ────────────────────────────────────────────────────────

export const POSITION_META: Record<Position, PositionMeta> = {
  GK:  { labelPt: 'Guarda-Redes', labelEn: 'Goalkeeper', color: '#F59E0B' },
  DEF: { labelPt: 'Defesa',       labelEn: 'Defender',   color: '#3B82F6' },
  ALA: { labelPt: 'Ala',          labelEn: 'Wing',       color: '#10B981' },
  PIV: { labelPt: 'Pivô',         labelEn: 'Pivot',      color: '#CC0000' },
}

// ─── Squad ────────────────────────────────────────────────────────────────────

export const PLAYERS: Player[] = [
  // Guarda-Redes
  { number: 1,  name: 'Dario Eduardo',             position: 'GK',  nationality: 'ANG', city: 'Luanda',     age: 33, games: 0, goals: 0 },
  { number: 22, name: 'Nelson Pereira',             position: 'GK',  nationality: 'ANG', city: 'Luanda',     age: 36, games: 0, goals: 0 },
  // Defesas
  { number: 4,  name: "Osvaldo De Carvalho 'Arroz Doce'", position: 'DEF', nationality: 'ANG', city: 'Luanda', age: 29, games: 0, goals: 0 },
  { number: 6,  name: 'Isaías Correia',             position: 'DEF', nationality: 'ANG', city: 'Luanda',     age: 31, games: 0, goals: 0 },
  { number: 13, name: 'Paulo De Carvalho',          position: 'DEF', nationality: 'ANG', city: 'Luanda',     age: 25, games: 0, goals: 0, isCaptain: true },
  { number: 14, name: 'Edilau Salomão',             position: 'DEF', nationality: 'ANG', city: 'Luanda',     age: 32, games: 0, goals: 0 },
  { number: 24, name: 'Aaron Ramos',                position: 'DEF', nationality: 'ANG', city: 'Luanda',     age: 21, games: 0, goals: 0 },
  // Alas
  { number: 2,  name: 'Joel Joaquim',               position: 'ALA', nationality: 'ANG', city: 'Lubango',    age: 26, games: 0, goals: 0 },
  { number: 3,  name: 'Tiago Liengue',              position: 'ALA', nationality: 'ANG', city: 'Luanda',     age: 25, games: 0, goals: 0 },
  { number: 5,  name: 'Aguinaldo Hisijala',         position: 'ALA', nationality: 'ANG', city: 'Luanda',     age: 23, games: 0, goals: 0 },
  { number: 7,  name: 'Edson Antunes',              position: 'ALA', nationality: 'ANG', city: 'Luanda',     age: 24, games: 0, goals: 0 },
  { number: 8,  name: 'Policarpo Rafael',           position: 'ALA', nationality: 'ANG', city: 'C. Cubango', age: 23, games: 0, goals: 0 },
  { number: 10, name: 'Helber Garcia',              position: 'ALA', nationality: 'ANG', city: 'Luanda',     age: 26, games: 0, goals: 0 },
  { number: 11, name: 'Anicleni Manuel',            position: 'ALA', nationality: 'ANG', city: 'Luanda',     age: 25, games: 0, goals: 0 },
  { number: 15, name: 'Josemar da Silva',           position: 'ALA', nationality: 'ANG', city: 'Luanda',     age: 32, games: 0, goals: 0 },
  { number: 18, name: 'Bruno Da Silva',             position: 'ALA', nationality: 'ANG', city: 'Luanda',     age: 19, games: 0, goals: 0 },
  { number: 19, name: 'Lieonel Francisco',          position: 'ALA', nationality: 'ANG', city: 'Luanda',     age: 19, games: 0, goals: 0 },
  { number: 21, name: 'Tito Manuel',                position: 'ALA', nationality: 'ANG', city: 'Luanda',     age: 27, games: 0, goals: 0 },
  { number: 25, name: 'Isaac Pinto Joaquin',        position: 'ALA', nationality: 'ANG', city: 'Luanda',     age: 19, games: 0, goals: 0 },
  // Pivôs
  { number: 9,  name: 'Diamantino Doba',            position: 'PIV', nationality: 'ANG', city: 'Luanda',     age: 29, games: 0, goals: 0 },
]

// ─── Standings ────────────────────────────────────────────────────────────────

export const STANDINGS: Standing[] = [
  { pos: 1,  team: 'Grupo Desportivo RNT',                               pts: 60, played: 22, wins: 21, draws: 9,  losses: 3,  gf: 0,   ga: 0,   gd: 0,   pct: 90.9 },
  { pos: 2,  team: 'GD Clínica Sagrada Esperança',                       pts: 59, played: 22, wins: 19, draws: 21, losses: 12, gf: 6,   ga: 4,   gd: 18,  pct: 89.4 },
  { pos: 3,  team: 'JCY Futebol Clube',                                  pts: 54, played: 22, wins: 17, draws: 3,  losses: 2,  gf: 134, ga: 29,  gd: 2,   pct: 81.8 },
  { pos: 4,  team: 'SC Dr. Maculusso',                                   pts: 52, played: 22, wins: 17, draws: 14, losses: 1,  gf: 37,  ga: 47,  gd: 90,  pct: 78.8, isUs: true },
  { pos: 5,  team: 'B.O. United Sport Clube',                            pts: 44, played: 22, wins: 14, draws: 2,  losses: 6,  gf: 71,  ga: 60,  gd: 11,  pct: 66.7 },
  { pos: 6,  team: 'COPRAT Futsal Clube',                                pts: 37, played: 22, wins: 12, draws: 1,  losses: 9,  gf: 87,  ga: 52,  gd: 35,  pct: 56.1 },
  { pos: 7,  team: 'Kambas Futebol Clube',                               pts: 36, played: 22, wins: 12, draws: 0,  losses: 10, gf: 63,  ga: 68,  gd: -5,  pct: 54.5 },
  { pos: 8,  team: 'Jupterz Futebol Clube',                              pts: 32, played: 22, wins: 10, draws: 2,  losses: 10, gf: 70,  ga: 68,  gd: 2,   pct: 48.5 },
  { pos: 9,  team: '1° De Maio Futebol Clube',                           pts: 31, played: 22, wins: 10, draws: 1,  losses: 11, gf: 75,  ga: 66,  gd: 9,   pct: 47.0 },
  { pos: 10, team: 'G&SM Sport Clube',                                   pts: 28, played: 22, wins: 9,  draws: 1,  losses: 12, gf: 78,  ga: 98,  gd: -20, pct: 42.4 },
  { pos: 11, team: 'Kairóz Futsal Clube',                                pts: 14, played: 22, wins: 4,  draws: 2,  losses: 16, gf: 51,  ga: 94,  gd: -43, pct: 21.2 },
  { pos: 12, team: 'Jadsil Futebol Clube',                               pts: 14, played: 22, wins: 4,  draws: 2,  losses: 16, gf: 48,  ga: 145, gd: -97, pct: 21.2 },
  { pos: 13, team: 'Contemplante Futebol Clube',                         pts: 9,  played: 22, wins: 3,  draws: 0,  losses: 19, gf: 37,  ga: 152, gd: -115,pct: 13.6 },
  { pos: 14, team: 'WSP Futsal Club',                                    pts: 5,  played: 22, wins: 1,  draws: 2,  losses: 19, gf: 50,  ga: 138, gd: -88, pct: 7.6  },
  { pos: 15, team: 'Atlântico Futebol Clube',                            pts: 0,  played: 17, wins: 9,  draws: 1,  losses: 76, gf: 56,  ga: 50,  gd: 5,   pct: 4.9  },
  { pos: 16, team: 'Futebol Clube Jonant',                               pts: 0,  played: 17, wins: 8,  draws: 2,  losses: 74, gf: 74,  ga: 8,   gd: -15, pct: 1.0  },
  { pos: 17, team: 'Grupo Desportivo Paz e Bem',                         pts: 0,  played: 17, wins: 4,  draws: 1,  losses: 12, gf: 46,  ga: 67,  gd: -21, pct: 25.5 },
  { pos: 18, team: 'Doutromundo Futsal Clube',                           pts: 0,  played: 0,  wins: 0,  draws: 0,  losses: 0,  gf: 0,   ga: 0,   gd: 0,   pct: 0    },
]

// ─── Club constants ───────────────────────────────────────────────────────────

export const CLUB = {
  name:      'Sport Clube Desportivo e Recriativo do Maculusso',
  shortName: 'SC Dr. Maculusso',
  abbr:      'SCDM',
  city:      'Luanda',
  country:   'Angola',
  league:    'Liga Nacional de Futsal',
  email:     'geral@maculusso.ao',
  season:    '2024/25',
} as const
