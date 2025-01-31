import data from '@data/nghi-dinh-168.yaml'
import type { ND168 } from '@/model/ND168'
import { constants } from '@/constant'
import { shouldShowStaticOpenGraphImage } from '@/env.mjs'

const OG_PATH = constants.paths.assets.OG
const PAGE_PATH = constants.paths.vbpl.NGHI_DINH_168

export const getND168s = async () => {
  return data as Record<string, ND168>
}

export const getND168ById = async (id: string): Promise<ND168 | undefined> => {
  const items = await getND168s()
  return items[id]
}

export function getND168OgImageById(section: string): string | undefined {
  if (!section) {
    return ''
  }

  return shouldShowStaticOpenGraphImage
    ? `${OG_PATH}${PAGE_PATH}/${section}/og.png`
    : `${PAGE_PATH}/${section}/og.png`
}
