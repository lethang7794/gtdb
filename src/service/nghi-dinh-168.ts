import type { ND168 } from '@/model/ND168'
import data from '@data/nghi-dinh-168.yaml'

export const getND168s = async () => {
  return data as Record<string, ND168>
}

export const getND168ById = async (id: string): Promise<ND168 | undefined> => {
  const items = await getND168s()
  return items[id]
}
