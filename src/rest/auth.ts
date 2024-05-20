import ky from "ky"

export type AuthError = {
  status: number
  message: string
}
export type AuthSuccess = {
  access_token: string
  expires_in: number
  token_type: "bearer"
}

export interface MappedAuthSuccess {
  accessToken: string
  expiresAt: Date
}
export type AuthResult = AuthSuccess | AuthError

export interface AuthOptions {}
export async function doAuth(): Promise<MappedAuthSuccess> {
  const raw = await ky
    .post("https://id.twitch.tv/oauth2/token", {
      searchParams: {
        grant_type: "client_credentials",
        client_id: import.meta.env.VITE_TWITCH_CLIENT_ID,
        client_secret: import.meta.env.VITE_TWITCH_CLIENT_SECRET,
      },
    })
    .json<AuthResult>()
  if ((raw as any).status) {
    const err = raw as AuthError
    throw new Error(`Twitch API OAuth Error ${err.status}: ${err.message}`)
  }
  const mapped = raw as AuthSuccess
  return {
    accessToken: mapped.access_token,
    expiresAt: new Date(new Date().getTime() + mapped.expires_in),
  }
}
