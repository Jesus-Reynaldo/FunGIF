import type { Metadata } from 'next'
import { happyMonkey } from '@/shared/lib/fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'FunGIF — Discover GIFs',
  description: 'Search and browse GIFs powered by Giphy.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={happyMonkey.className}>{children}</body>
    </html>
  )
}
