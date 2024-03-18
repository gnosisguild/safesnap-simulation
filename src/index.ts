import { Env } from './types'

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const tenderlyApi = `https://api.tenderly.co/api/v1/account/${env.TENDERLY_USER}/project/${env.TENDERLY_PROJECT}/simulate-bundle`
    const tenderlyRequest = new Request(`${tenderlyApi}`, request)
    tenderlyRequest.headers.set('X-Access-Key', env.TENDERLY_ACCESS_KEY)
    const tenderlyResponse = await fetch(tenderlyRequest)

    // Recreate the response so you can modify the headers
    const response = new Response(tenderlyResponse.body, tenderlyResponse)

    // Set CORS headers
    response.headers.set('Access-Control-Allow-Origin', '*')

    return response
  },
}
