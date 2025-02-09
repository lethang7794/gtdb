import { ChevronLeft } from 'lucide-react'
import BaseLink from '@/components/base-link'
import { Logo } from '@/components/block/logo'
import { env } from '@/env.mjs'
import { constants } from '@/constant'
import { cn } from '@/lib/utils'

export function NavHeader({
  isHome = false,
  backToHome = false,
  backHref = '',
  title = '',
  className = '',
}: {
  isHome?: boolean
  backToHome?: boolean
  backHref?: string
  title?: string
  className?: string
}) {
  return (
    <nav
      className={cn(
        'sticky top-0 bg-white z-50 h-(--header-height) shadow-md flex items-center',
        className
      )}
    >
      <div className="ml-1.5 grow md:container flex items-center">
        {isHome ? (
          <BaseLink href={constants.paths.root} className="-m-1.5 p-1.5">
            <span className="sr-only">
              {`${env.NEXT_PUBLIC_BRAND_SHORT} - ${env.NEXT_PUBLIC_BRAND_SLOGAN}`}
            </span>
            <Logo className="w-24 h-12" />
          </BaseLink>
        ) : null}
        {backToHome || backHref ? (
          <>
            <BaseLink
              href={backToHome ? constants.paths.root : backHref}
              className="-m-1.5 p-1.5 text-blue-500 hover:text-blue-700"
            >
              <ChevronLeft size="32" />
            </BaseLink>
            <div className="grow" />
            <div className="mx-1.5 font-bold line-clamp-2 text-black">
              {title}
            </div>
            <div className="grow" />
          </>
        ) : null}
      </div>
    </nav>
  )
}
