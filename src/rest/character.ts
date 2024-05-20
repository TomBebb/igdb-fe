export interface Character {
  akas: string[]

  country_name: string
  created_at: string
  description: string
  games: string[]
  gender: Gender
  mug_shot: number
  name: string
  slug: string
  species: Species
  updated_at: string
  url: string
}

export enum Gender {
  Male = 0,
  Female = 1,
  Other = 2,
}
export enum Species {
  Human = 1,
  Alien = 2,
  Animal = 3,
  Android = 4,
  Unknown = 5,
}
