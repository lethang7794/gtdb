import yaml from 'yaml'
import type { ND168 } from '@/model/ND168'
import { loadFileFromRepo } from '@/lib/load-file-from-repo'
import { cache } from 'react'

export const MARKINGS_REPO_PATH = 'data/nghi-dinh-168.yaml'

export const getND168s = cache(async () => {
  const resp = await loadFileFromRepo(MARKINGS_REPO_PATH)
  console.log('🚀 ~ getND168s ~ resp:', resp)
  const body = await resp.text()
  console.log('🚀 ~ getND168s ~ body:', body)
  const data = yaml.parse(body)
  console.log('🚀 ~ getND168s ~ data:', data)
  return data as Record<string, ND168>
})

export const getND168ById = cache(
  async (id: string): Promise<ND168 | undefined> => {
    const items = await getND168s()
    return items[id]
  }
)
