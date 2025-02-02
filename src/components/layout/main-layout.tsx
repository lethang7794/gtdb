import { cn } from '@/lib/utils'

export function MainLayout({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <main className={cn('grow h-full flex flex-col px-6 md:p-8', className)}>
      {children}
    </main>
  )
}
