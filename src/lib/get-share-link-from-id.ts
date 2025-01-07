export function getShareLinkFromId(id: string) {
  const cleanedHref = window?.location.href.split(/[?#]/)[0]
  const cleanedHrefWithFragment = `${cleanedHref}?section=${id}#${id}`
  return cleanedHrefWithFragment
}
