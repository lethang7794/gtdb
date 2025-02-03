import { cn } from '@/lib/utils'
import { CSSProperties } from 'react'

export function MainLayout({
  children,
  className,
  style,
}: {
  children: React.ReactNode
  className?: string
  style?: CSSProperties
}) {
  return (
    <main
      className={cn('grow flex flex-col p-6 md:p-8', className)}
      style={style}
    >
      {children}
    </main>
  )
}
