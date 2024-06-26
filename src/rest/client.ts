import ky, { Options } from "ky"
import { MappedAuthSuccess, doAuth } from "./auth"
import { encodeIgdbBody } from "./body"
import { Character } from "./character"
import { WhereBody, encodeWhereBody } from "./where"
import { Game } from "./game"
import { Genre } from "./genre"
export interface SearchResult {
  id: number
  alternative_name: string
  game?: number
  collection?: number
  company?: number

  name: string
  published_at: number
}

export interface RestListingOptions {
  limit: number
  offset: number
}
export const defaultListingOpts: RestListingOptions = {
  limit: 10,
  offset: 0,
}
export interface ListingTypes {
  characters: Character
  games: Game
  genres: Genre
}

export enum SortOrder {
  Ascending = "asc",
  Descending = "desc",
}
export interface Sort<T extends ListingType> {
  order: SortOrder
  field: keyof MappedListingType<T>
}

type ListingType = keyof ListingTypes
type MappedListingType<T extends ListingType> = ListingTypes[T]
export default class RestClient {
  private lastAuth?: MappedAuthSuccess

  private async getHttpConf(): Promise<Options> {
    if (!this.lastAuth || this.lastAuth.expiresAt > new Date()) {
      console.info("re-auth")
      this.lastAuth = await doAuth()
    }
    return {
      headers: {
        "Client-ID": import.meta.env.VITE_TWITCH_CLIENT_ID,
        Authorization: `Bearer ${this.lastAuth.accessToken}`,
      },
      prefixUrl: "https://api.igdb.com/v4",
    }
  }

  public async getById<T extends ListingType>(
    ty: T,
    id: number
  ): Promise<MappedListingType<T>> {
    // @ts-ignore
    const res = await this.list(ty, { limit: 1, offset: 0 }, { id: { eq: id } })
    return res[0]
  }

  public async getByIds<T extends ListingType>(
    ty: T,
    ids: number[]
  ): Promise<MappedListingType<T>[]> {
    // @ts-ignore
    return this.list(ty, { limit: ids.length, offset: 0 }, { id: { in: ids } })
  }
  public async list<T extends ListingType>(
    ty: T,
    opts: RestListingOptions = defaultListingOpts,
    filters?: WhereBody<MappedListingType<T>>,
    sort?: Sort<T>
  ): Promise<MappedListingType<T>[]> {
    const conf = await this.getHttpConf()
    let body = encodeIgdbBody({ fields: "*", ...opts })
    if (sort) {
      body += ` sort ${String(sort.field)} ${sort.order};`
    }
    if (filters) {
      const filtersWhere = encodeWhereBody(filters)
      if (filtersWhere !== "") body += ` where ${filtersWhere};`
    }
    return ky
      .post(ty, {
        ...conf,
        body,
      })
      .json()
  }

  public async search(
    query: string,
    opts: RestListingOptions = defaultListingOpts
  ): Promise<SearchResult[]> {
    const conf = await this.getHttpConf()
    return ky
      .post("search", {
        ...conf,
        body: encodeIgdbBody({
          fields: "*",
          search: query,
          ...opts,
        }),
      })
      .json()
  }
}
