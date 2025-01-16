import type { LuatGT2024 } from '@/model/LuatGT2024'
import { unstable_cache } from 'next/cache'
import data from '@data/luat-TTATGTDT-2024.yaml'

export const getLuatGT2024s = unstable_cache(async () => {
  return data as Record<string, LuatGT2024>
})

export const getLuatGT2024ById = unstable_cache(
  async (id: string): Promise<LuatGT2024 | undefined> => {
    const items = await getLuatGT2024s()
    return items[id]
  }
)
