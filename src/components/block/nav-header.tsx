import { ChevronLeft } from 'lucide-react'
import BaseLink from '@/components/base-link'
import { Logo } from '@/components/block/logo'
import { env } from '@/env.mjs'
import { constants } from '@/constant'

export function NavHeader({
  isHome = false,
  backToHome = false,
  backHref = '',
  title = '',
}: {
  isHome?: boolean
  backToHome?: boolean
  backHref?: string
  title?: string
}) {
  return (
    <nav className="container -ml-4 flex h-[72px] items-center">
      {isHome ? (
        <BaseLink href={constants.paths.root} className="-m-1.5 p-1.5">
          <span className="sr-only">
            {`${env.NEXT_PUBLIC_BRAND_SHORT} - ${env.NEXT_PUBLIC_BRAND_SLOGAN}`}
          </span>
          <Logo className="min-w-24 text-accent-foreground" />
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
          <div className="mx-4 font-bold line-clamp-3">{title}</div>
          <div className="grow" />
        </>
      ) : null}
    </nav>
  )
}
