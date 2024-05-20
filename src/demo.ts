import RestClient from "./rest/client"
const client = new RestClient()

const game = await client.getById("games", 236669)

const genres = await client.getByIds("games", game.genres)
console.info({ genres, game })
