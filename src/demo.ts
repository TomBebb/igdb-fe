import RestClient from "./rest/client"
const client = new RestClient()

const game = await client.getById("games", 247533)

const genres = await client.getByIds("genres", game.genres)
console.info({ genres, game })
