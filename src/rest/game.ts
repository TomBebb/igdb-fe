export interface Game {
  id: number
  age_ratings: number[]
  aggregated_rating: number
  aggregated_rating_count: number
  alternative_names: number[]
  artworks: number[]
  bundles: number[]
  category: GameCategory
  collection: number
  collections: number[]
  cover: number
  created_at: string
  dlcs: number[]
  expanded_games: number[]
  expansions: number[]
  external_games: number[]
  forks: number[]
  first_release_date: number
  franchise: number
  game_engines: number[]
  game_localizations: number[]
  game_modes: number[]
  genres: number[]
  hypes: number
  involved_companies: number[]
  keywords: number[]
  language_supports: number[]
  multiplayer_modes: number[]
  name: string
  parent_game: number
  platforms: number[]
  player_perspectives: number[]
  ports: number[]

  rating: number
  rating_count: number
  release_dates: number[]
  remakes: number[]
  remasters: number[]
  screenshots: number[]
  similar_games: number[]
  slug: string
  standalone_expansions: number[]
  status: GameStatus
  storyline: string
  summary: string
  tags: number[]
  themes: number[]
  total_rating: number
  total_rating_count: number
  updated_at: string
  url: string

  version_parent: number
  version_title: string
  videos: number[]
  websites: number[]
}

export enum GameCategory {
  Main = 0,
  DlcAddon = 1,
  Expansion = 2,
  Bundle = 3,
  StandaloneExpansion = 4,
  Mod = 5,
  Episode = 6,
  Season = 7,
  Remake = 8,
  Remaster = 9,
  ExpandedGame = 10,
  Port = 11,
  Fork = 12,
  Pack = 13,
  Update = 14,
}

export enum GameStatus {
  Released = 0,
  Alpha = 2,
  Beta = 3,
  EarlyAccess = 4,
  Offline = 5,
  Cancelled = 6,
  Rumored = 7,
  Delisted = 8,
}
