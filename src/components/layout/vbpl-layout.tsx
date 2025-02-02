export function VbplLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex h-full flex-col justify-between py-6 md:py-8">
      <div className="container pr-4 pl-8">{children}</div>
    </div>
  )
}
