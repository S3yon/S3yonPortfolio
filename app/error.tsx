'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-primary p-4">
      <div className="text-center p-8 bg-bg-secondary border border-border-primary rounded-lg max-w-md">
        <h2 className="text-xl font-bold text-text-primary mb-4">Something went wrong!</h2>
        <p className="text-text-secondary mb-4 text-sm">
          An unexpected error occurred. Please try refreshing the page.
        </p>
        <div className="flex gap-3 justify-center">
          <button
            onClick={() => reset()}
            className="px-4 py-2 bg-text-accent text-bg-primary rounded hover:bg-text-primary transition-colors font-medium"
          >
            Try again
          </button>
          <button
            onClick={() => window.location.href = '/'}
            className="px-4 py-2 bg-bg-tertiary text-text-secondary rounded hover:bg-bg-quaternary transition-colors font-medium"
          >
            Go home
          </button>
        </div>
      </div>
    </div>
  )
}