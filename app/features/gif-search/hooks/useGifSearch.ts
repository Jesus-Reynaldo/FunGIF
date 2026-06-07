'use client'
import { useState, useEffect } from 'react'
import { searchGifs } from '../services/giphy.service'
import type { GifSearchState } from '../types'

export function useGifSearch(query: string): GifSearchState {
  const [state, setState] = useState<GifSearchState>({
    data: [],
    loading: true,
    error: null,
  })

  useEffect(() => {
    let cancelled = false

    setState({ data: [], loading: true, error: null })

    searchGifs(query)
      .then(data => {
        if (!cancelled) setState({ data, loading: false, error: null })
      })
      .catch((err: unknown) => {
        if (!cancelled) {
          const message = err instanceof Error ? err.message : 'Unknown error'
          setState({ data: [], loading: false, error: message })
        }
      })

    return () => { cancelled = true }
  }, [query])

  return state
}
