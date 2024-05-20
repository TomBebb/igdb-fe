import RestClient from "./rest/client"
const client = new RestClient()

const game = await client.getById("games", 236669)

const similarGames = await client.getByIds("games", game.similar_games)
console.info({ similarGames })
