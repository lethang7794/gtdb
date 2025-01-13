
export function getShareLinkFromId(id: string) {
  if (!window) {
    return ''
  }
  const { origin } = window.location
  const [first, second] = window.location.pathname.slice(1).split('/')
  const cleanedHrefWithFragment = `${origin}/${[first, second].join('/')}?s=${id}#${id}`
  return cleanedHrefWithFragment
}
