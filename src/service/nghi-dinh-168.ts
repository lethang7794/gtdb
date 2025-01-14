import yaml from 'yaml'
import type { ND168 } from '@/model/ND168'
import { loadFile } from '@/helpers/file-helper'
import { unstable_cache } from 'next/cache'

export const MARKINGS_REPO_PATH = 'data/nghi-dinh-168.yaml'

export const getND168s = unstable_cache(async () => {
  const file = await loadFile(MARKINGS_REPO_PATH)
  const data = yaml.parse(file)
  return data as Record<string, ND168>
})

export const getND168ById = unstable_cache(
  async (id: string): Promise<ND168 | undefined> => {
    const items = await getND168s()
    return items[id]
  }
)
