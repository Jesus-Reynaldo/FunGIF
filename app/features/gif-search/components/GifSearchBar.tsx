'use client'
import { useState, type FormEvent } from 'react'

interface GifSearchBarProps {
  onSearch: (query: string) => void
}

export function GifSearchBar({ onSearch }: GifSearchBarProps) {
  const [value, setValue] = useState('')

  const trimmed = value.trim()

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (trimmed.length < 2) return
    onSearch(trimmed)
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full gap-2">
      <div className="relative flex-1">
        <svg
          aria-hidden="true"
          className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
          fill="none"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder="Search GIFs…"
          className="w-full rounded-lg border border-gray-200 bg-white py-2.5 pl-9 pr-4 text-sm text-gray-900 placeholder:text-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-brand transition"
        />
      </div>
      <button
        type="submit"
        disabled={trimmed.length < 2}
        className="rounded-lg bg-brand px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-hover disabled:cursor-not-allowed disabled:opacity-40"
      >
        Search
      </button>
    </form>
  )
}
