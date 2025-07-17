export default function Loading() {
  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border-2 border-text-accent border-t-transparent rounded-full animate-spin"></div>
        <div className="text-text-secondary text-sm">Loading...</div>
      </div>
    </div>
  )
}