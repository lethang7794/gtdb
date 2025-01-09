import { NGHI_DINH_168_FULL_PATH } from '@/constant/path'

export function getShareLinkFromId(id: string) {
  if (!window) {
    return ''
  }
  const { origin } = window.location
  console.log('window.location:', window.location)
  const [first, second] = window.location.pathname.slice(1).split('/')
  const cleanedHrefWithFragment = `${origin}/${[first, second].join('/')}/${id}#${id}`
  return cleanedHrefWithFragment
}
