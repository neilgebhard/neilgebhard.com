import type { NextApiRequest, NextApiResponse } from 'next'
import { getNowPlaying } from '../../lib/spotify'

interface SpotifyArtist {
  name: string
}

interface SpotifyImage {
  url: string
}

interface SpotifyAlbum {
  name: string
  images: SpotifyImage[]
}

interface SpotifyTrack {
  name: string
  artists: SpotifyArtist[]
  album: SpotifyAlbum
  external_urls: {
    spotify: string
  }
}

interface SpotifyNowPlayingResponse {
  is_playing: boolean
  item: SpotifyTrack | null
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await getNowPlaying()

    if (response.status === 204 || response.status > 400) {
      return res.status(200).json({ isPlaying: false })
    }

    const song: SpotifyNowPlayingResponse = await response.json()

    if (song.item === null) {
      return res.status(200).json({ isPlaying: false })
    }

    const isPlaying = song.is_playing
    const title = song.item.name
    const artist = song.item.artists.map((_artist) => _artist.name).join(', ')
    const album = song.item.album.name
    const albumImageUrl = song.item.album.images[0].url
    const songUrl = song.item.external_urls.spotify

    res.setHeader(
      'Cache-Control',
      'public, s-maxage=60, stale-while-revalidate=30'
    )

    return res.status(200).json({
      album,
      albumImageUrl,
      artist,
      isPlaying,
      songUrl,
      title
    })
  } catch (error) {
    console.error('Error in now-playing API route:', error)
    return res.status(500).json({
      isPlaying: false,
      error: 'Failed to fetch currently playing song'
    })
  }
}
