import type { GifItem } from '../types'

interface GifCardProps {
  gif: GifItem
}

export function GifCard({ gif }: GifCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <div className="aspect-square overflow-hidden bg-gray-100">
        <img
          src={gif.url}
          alt={gif.title || 'GIF'}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <p className="line-clamp-2 px-3 py-2 text-xs leading-relaxed text-gray-500">
        {gif.title || 'Untitled'}
      </p>
    </article>
  )
}
