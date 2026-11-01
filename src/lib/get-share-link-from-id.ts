const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export function getShareLinkFromId(id: string) {
  if (typeof window === 'undefined') {
    return ''
  }
  const { origin } = window.location
  const pathWithoutBase =
    basePath && window.location.pathname.startsWith(`${basePath}/`)
      ? window.location.pathname.slice(basePath.length)
      : window.location.pathname
  const [first, second] = pathWithoutBase.slice(1).split('/')
  const cleanedHrefWithFragment = `${origin}${basePath}/${[first, second, encodeURIComponent(id)].join('/')}#${encodeURIComponent(id)}`
  return cleanedHrefWithFragment
}
