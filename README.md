# FunGIF

![FunGIF Logo](https://i.ibb.co/qsw2jy0/FunGif.png)

Discover and browse GIFs by category, powered by the Giphy API.

## Stack

- **Next.js 16** — App Router, static export, Turbopack
- **React 19.2**
- **Tailwind CSS 3.4**
- **TypeScript 5**
- **Giphy API**

## Getting Started

### 1. Clone and install

```bash
git clone https://github.com/Jesus-Reynaldo/FunGIF.git
cd FunGIF
pnpm install
```

### 2. Configure the Giphy API key

Create a `.env.local` file at the project root:

```bash
NEXT_PUBLIC_YOUR_API_KEY=your_giphy_api_key_here
```

Get a free key at [Giphy Developers](https://developers.giphy.com/dashboard/).

### 3. Run

```bash
pnpm dev      # Development server — http://localhost:3000
pnpm build    # Production build (static export → /out)
pnpm lint     # ESLint
```

> **Requires Node.js 20.9+**

## Architecture

Vertical slice structure under `app/features/gif-search/` — components, hooks, services, and types for the same feature live together.

```
app/
├── features/gif-search/
│   ├── components/   # GifCategoryList, GifSearchBar, GifGrid, GifCard
│   ├── hooks/        # useGifSearch
│   ├── services/     # giphy.service.ts
│   └── types.ts
└── shared/
    ├── lib/fonts.ts
    └── ui/           # Spinner, EmptyState
```

## Contributing

Issues, feature requests, and pull requests are welcome.
