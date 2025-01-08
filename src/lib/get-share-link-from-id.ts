import { NGHI_DINH_168_FULL_PATH } from '@/constant/path'

export function getShareLinkFromId(id: string) {
  if (!window) {
    return ''
  }
  const { origin } = window.location
  const cleanedHrefWithFragment = `${origin}/${NGHI_DINH_168_FULL_PATH}/${id}#${id}`
  return cleanedHrefWithFragment
}
