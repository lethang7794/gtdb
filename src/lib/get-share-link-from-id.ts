import { NGHI_DINH_168_FULL_PATH } from '@/constant/path'

export function getShareLinkFromId(id: string) {
  const { host } = window.location
  const cleanedHrefWithFragment = `${host}/${NGHI_DINH_168_FULL_PATH}/${id}#${id}`
  return cleanedHrefWithFragment
}
