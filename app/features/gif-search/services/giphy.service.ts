import type { GifItem } from '../types'

const BASE_URL = 'https://api.giphy.com/v1/gifs/search'
const RESULTS_LIMIT = 12

interface GiphyImage {
  url: string
}

interface GiphyEntry {
  id: string
  title: string
  images: {
    downsized_medium: GiphyImage
  }
}

export async function searchGifs(query: string): Promise<GifItem[]> {
  const params = new URLSearchParams({
    api_key: process.env.NEXT_PUBLIC_YOUR_API_KEY ?? '',
    q: query,
    limit: String(RESULTS_LIMIT),
  })

  const response = await fetch(`${BASE_URL}?${params}`)

  if (!response.ok) {
    throw new Error(`Giphy API responded with ${response.status}`)
  }

  const { data }: { data: GiphyEntry[] } = await response.json()

  return data.map(entry => ({
    id: entry.id,
    title: entry.title,
    url: entry.images.downsized_medium.url,
  }))
}
