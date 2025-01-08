import yaml from 'yaml'
import type { ND168 } from '@/model/ND168'
import { loadFileFromRepo } from '@/lib/load-file-from-repo'
import { cache } from 'react'

const MARKINGS_REPO_PATH = 'data/nghi-dinh-168.yaml'

export const getND168s = cache(async () => {
  const resp = await loadFileFromRepo(MARKINGS_REPO_PATH)
  const body = await resp.text()
  const data = yaml.parse(body)
  return data as Record<string, ND168>
})

export const getND168ById = cache(
  async (id: string): Promise<ND168 | undefined> => {
    const items = await getND168s()
    return items[id]
  }
)
