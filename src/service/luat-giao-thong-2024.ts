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

  return shouldShowStaticOpenGraphImage
    ? [env.NEXT_PUBLIC_DOMAIN, `${OG_PATH}${PAGE_PATH}/${section}/og.png`].join(
        '/'
      )
    : [env.NEXT_PUBLIC_DOMAIN, `${PAGE_PATH}/${section}/og.png`].join('/')
}
