'use client'
import { useState } from 'react'
import { kavoon } from '@/shared/lib/fonts'
import { GifSearchBar } from './GifSearchBar'
import { GifGrid } from './GifGrid'

const INITIAL_CATEGORIES: string[] = ['Rick and Morty']

export function GifCategoryList() {
  const [categories, setCategories] = useState<string[]>(INITIAL_CATEGORIES)

  function handleSearch(query: string) {
    const normalized = query.toLowerCase()
    if (categories.map(c => c.toLowerCase()).includes(normalized)) return
    setCategories(prev => [query, ...prev])
  }

  function handleRemove(category: string) {
    setCategories(prev => prev.filter(c => c !== category))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-10 border-b border-gray-200 bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-4 sm:px-6 lg:px-8">
          <span className={`shrink-0 text-2xl text-brand ${kavoon.className}`}>
            FunGIF
          </span>
          <GifSearchBar onSearch={handleSearch} />
        </div>
      </header>

      <main className="mx-auto max-w-7xl space-y-10 px-4 py-8 sm:px-6 lg:px-8">
        {categories.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-32 text-center">
            <p className="text-sm text-gray-400">Search for something to get started.</p>
          </div>
        ) : (
          categories.map(category => (
            <GifGrid key={category} category={category} onRemove={handleRemove} />
          ))
        )}
      </main>
    </div>
  )
}
