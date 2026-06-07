# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev      # Start dev server (Turbopack — default in Next.js 16, no flag needed)
pnpm build    # Production build (static export)
npm start        # Serve production build
pnpm lint     # ESLint 9 via flat config (eslint.config.mjs) — next lint was removed in v16
```

No test suite is configured.

## Environment

Create a `.env.local` at the project root:

```
NEXT_PUBLIC_YOUR_API_KEY=<your Giphy API key>
```

Consumed in `app/features/gif-search/services/giphy.service.ts`.

## Stack

- **Next.js 16** · **React 19.2** · **Tailwind CSS 3.4** · **TypeScript 5**
- Static export: `output: "export"` in `next.config.js`
- ESLint 9 Flat Config: `eslint.config.mjs` (legacy `.eslintrc` removed in v16)
- Node.js 20.9+ required (Next.js 16 minimum)

## Architecture — Screaming Architecture (Vertical Slice)

**Path alias:** `@/*` maps to `./app/*` (defined in `tsconfig.json`).

```
app/
├── features/
│   └── gif-search/               ← self-contained feature slice
│       ├── components/
│       │   ├── GifCategoryList.tsx   ← root client component; owns categories[] state
│       │   ├── GifSearchBar.tsx      ← controlled form; fires onSearch prop
│       │   ├── GifGrid.tsx           ← per-category section; calls useGifSearch
│       │   └── GifCard.tsx           ← presentational GIF card
│       ├── hooks/
│       │   └── useGifSearch.ts       ← wraps searchGifs; exposes { data, loading, error }
│       ├── services/
│       │   └── giphy.service.ts      ← sole Giphy API call site; typed response mapping
│       └── types.ts                  ← GifItem, GifSearchState
│
├── shared/
│   ├── lib/
│   │   └── fonts.ts                  ← Kavoon + Happy Monkey (next/font/google)
│   └── ui/
│       ├── Spinner.tsx
│       └── EmptyState.tsx
│
├── layout.tsx    ← applies Happy Monkey font; sets metadata
├── page.tsx      ← renders <GifCategoryList />
└── globals.css   ← Tailwind directives only
```

**Data flow:**

```
GifCategoryList (state: string[])
  ├── GifSearchBar  → onSearch → prepends to categories[] (case-insensitive dedup)
  └── GifGrid (per category)
        └── useGifSearch → searchGifs (giphy.service) → Giphy REST API
              └── GifCard[]
```

**Key invariants:**
- `useGifSearch` cancels in-flight fetches on unmount/query change via the `cancelled` flag.
- `searchGifs` throws on non-OK HTTP responses; the hook surfaces them as `state.error`.
- Duplicate category detection is case-insensitive (`toLowerCase` comparison).
- `shared/` only holds code used by two or more features.
