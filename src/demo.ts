import RestClient from "./rest/client"
const client = new RestClient()
console.log(await client.search("Xenoblade"))
