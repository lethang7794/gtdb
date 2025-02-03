import { cn } from '@/lib/utils'
import { MainLayout } from './main-layout'

export function VbplLayout({
  children,
  className,
}: {
  children?: React.ReactNode
  className?: string
}) {
  return (
    <MainLayout className={cn('relative px-0 md:px-0', className)}>
      <div className="container pr-4 pl-8">{children}</div>
    </MainLayout>
  )
}
