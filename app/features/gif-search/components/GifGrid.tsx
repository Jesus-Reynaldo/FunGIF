'use client'
import { useGifSearch } from '../hooks/useGifSearch'
import { GifCard } from './GifCard'
import { Spinner } from '@/shared/ui/Spinner'
import { EmptyState } from '@/shared/ui/EmptyState'

interface GifGridProps {
  category: string
  onRemove: (category: string) => void
}

export function GifGrid({ category, onRemove }: GifGridProps) {
  const { data: gifs, loading, error } = useGifSearch(category)

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between border-b border-gray-100 pb-3">
        <h2 className="text-base font-semibold capitalize text-gray-800">{category}</h2>
        <button
          onClick={() => onRemove(category)}
          aria-label={`Remove ${category}`}
          className="rounded-md p-1 text-gray-300 transition-colors hover:bg-gray-100 hover:text-gray-600"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
            <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
          </svg>
        </button>
      </div>

      {loading && <Spinner />}
      {error && (
        <p className="py-4 text-sm text-red-400">{error}</p>
      )}
      {!loading && !error && gifs.length === 0 && (
        <EmptyState query={category} />
      )}
      {!loading && !error && gifs.length > 0 && (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {gifs.map(gif => (
            <GifCard key={gif.id} gif={gif} />
          ))}
        </div>
      )}
    </section>
  )
}
