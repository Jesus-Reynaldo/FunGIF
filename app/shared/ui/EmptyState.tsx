interface EmptyStateProps {
  query: string
}

export function EmptyState({ query }: EmptyStateProps) {
  return (
    <p className="py-6 text-sm text-gray-400">
      No GIFs found for &ldquo;{query}&rdquo;.
    </p>
  )
}
