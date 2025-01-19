import type { PropsWithChildren } from 'react'
import Link from 'next/link'
import type { Route } from 'next'
import { env } from '@/env.mjs'
import { ExternalLink } from 'lucide-react'

export interface IBaseLinkProps extends PropsWithChildren {
  href: Route | URL
  target?: string
  rel?: string
  className?: string
}

const isNewTabUrl = (url: string): boolean => {
  if (url.match('new-tab=true')) {
    return true
  }
  return false
}

const isExternalUrl = (url: string, domain: string): boolean => {
  const urlLowerCase = url.toLowerCase()

  const firstCharacter = urlLowerCase.charAt(0)

  if (firstCharacter === '#' || firstCharacter === '/') {
    return false
  }

  if (
    urlLowerCase.startsWith('http://') ||
    urlLowerCase.startsWith('https://')
  ) {
    const urlNoProtocol = urlLowerCase
      .replace('http://', '')
      .replace('https://', '')

    const potentialDomain = urlNoProtocol.split('/')[0]

    if (potentialDomain !== domain) {
      return true
    }
  }

  return false
}

const BaseLink: React.FC<IBaseLinkProps> = (props): JSX.Element => {
  const { href, children, ...linkProps } = props

  const isExternal = isExternalUrl(href.toString(), env.NEXT_PUBLIC_DOMAIN)
  const isNewTab = isNewTabUrl(href.toString())

  const newLinkProps = { ...linkProps }

  if (isExternal) {
    newLinkProps.rel = 'noopener noreferrer'
    newLinkProps.target = '_blank'
  }

  if (isNewTab) {
    const cleanHref = href.toString().replace(/&*new-tab=true/, '').replace("?&", "?").replace(/\?$/, "")
    return (
      <a
        href={cleanHref}
        {...newLinkProps}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={-1}
      >
        {children}
      </a>
    )
  }
  return (
    <>
      {isExternal ? (
        <>
          <a href={href.toString()} {...newLinkProps}>
            {children}
            <ExternalLink className="external-link" />
          </a>
        </>
      ) : (
        <Link href={href} {...newLinkProps}>
          {children}
        </Link>
      )}
    </>
  )
}

export default BaseLink
