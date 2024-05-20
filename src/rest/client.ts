import ky, { Options } from "ky"
import { MappedAuthSuccess, doAuth } from "./auth"
import { encodeIgdbBody } from "./body"
import { Character } from "./character"
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
    console.info(this.lastAuth)
    return {
      headers: {
        "Client-ID": import.meta.env.VITE_TWITCH_CLIENT_ID,
        Authorization: `Bearer ${this.lastAuth.accessToken}`,
      },
      prefixUrl: "https://api.igdb.com/v4",
    }
  }

  public async list<T extends ListingType>(
    ty: T,
    opts: RestListingOptions = defaultListingOpts
  ): Promise<MappedListingType<T>[]> {
    return []
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
