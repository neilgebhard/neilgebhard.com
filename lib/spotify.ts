import fetch from 'isomorphic-unfetch'
import querystring from 'query-string'

const client_id = process.env.SPOTIFY_CLIENT_ID
const client_secret = process.env.SPOTIFY_CLIENT_SECRET
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN

if (!client_id || !client_secret || !refresh_token) {
  throw new Error('Missing Spotify environment variables')
}

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`

interface SpotifyTokenResponse {
  access_token: string
  token_type: string
  expires_in: number
  scope: string
}

const getAccessToken = async (): Promise<SpotifyTokenResponse> => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token
    })
  })

  return response.json()
}

export const getNowPlaying = async (): Promise<Response> => {
  const { access_token } = await getAccessToken()

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
}
