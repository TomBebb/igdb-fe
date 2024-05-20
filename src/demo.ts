import RestClient from "./rest/client"
const client = new RestClient()

const games = await client.list("games", undefined, { id: { eq: 236669 } })
console.info(games[0])
