export interface GifItem {
  id: string
  title: string
  url: string
}

export interface GifSearchState {
  data: GifItem[]
  loading: boolean
  error: string | null
}
