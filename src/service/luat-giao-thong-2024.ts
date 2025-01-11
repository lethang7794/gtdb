import { cache } from 'react'
import yaml from 'yaml'
import { loadFile } from '@/helpers/file-helper'
import type { LuatGT2024 } from '@/model/LuatGT2024'

export const LUAT_GT_2024_PATH = 'data/luat-TTATGTDT-2024.yaml'

export const getLuatGT2024s = cache(async () => {
  const file = await loadFile(LUAT_GT_2024_PATH)
  const data = yaml.parse(file)
  return data as Record<string, LuatGT2024>
})

export const getLuatGT2024ById = cache(
  async (id: string): Promise<LuatGT2024 | undefined> => {
    const items = await getLuatGT2024s()
    return items[id]
  }
)
