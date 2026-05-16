import data from '@data/luat-TTATGTDT-2024.yaml'
import type { LuatGT2024 } from '@/model/LuatGT2024'
import { constants } from '@/constant'
import { env, shouldShowStaticOpenGraphImage } from '@/env.mjs'

const OG_PATH = constants.paths.assets.OG
const PAGE_PATH = constants.paths.vbpl.LUAT_GT_2024

export const getLuatGT2024s = async () => {
  return data as Record<string, LuatGT2024>
}

export const getLuatGT2024ById = async (
  id: string
): Promise<LuatGT2024 | undefined> => {
  const items = await getLuatGT2024s()
  return items[id]
}

export function getLuatGT2024OgImageById(section: string): string {
  if (!section) {
    return ''
  }

  const fullDomain = env.NEXT_PUBLIC_DOMAIN
    ? `https://${env.NEXT_PUBLIC_DOMAIN}`
    : ''

  const basePath = env.NEXT_PUBLIC_BASE_PATH || ''

  return shouldShowStaticOpenGraphImage
    ? `${fullDomain}${basePath}${OG_PATH}${PAGE_PATH}/${section}/og.png`
    : `${PAGE_PATH}/${section}/og.png`
}
