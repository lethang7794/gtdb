const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export function getShareLinkFromId(id: string) {
  if (!window) {
    return ''
  }
  const { origin } = window.location
  const pathWithoutBase = basePath
    ? window.location.pathname.replace(basePath, '')
    : window.location.pathname
  const [first, second] = pathWithoutBase.slice(1).split('/')
  const cleanedHrefWithFragment = `${origin}${basePath}/${[first, second, id].join('/')}#${id}`
  return cleanedHrefWithFragment
}
