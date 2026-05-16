/* eslint-disable @next/next/no-img-element */

import { cn } from '@/lib/utils'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export function Logo({
  classNameWrapper,
  className,
  withBackground,
}: {
  classNameWrapper?: string
  className?: string
  withBackground?: boolean
}) {
  return (
    <span
      style={{
        position: 'relative',
        borderRadius: '1.5rem',
        ...(withBackground ? { backgroundColor: '#353535' } : {}),
      }}
      className={classNameWrapper}
    >
      <img
        alt="gtdb logo"
        src={`${basePath}/assets/branding/logo-landscape.svg`}
        className={cn('aspect-2/1 w-24 h-12', className)}
      />
    </span>
  )
}
