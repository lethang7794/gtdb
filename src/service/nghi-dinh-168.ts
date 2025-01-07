import { cache } from 'react'
import fs from 'node:fs'
import { join } from 'node:path'
import yaml from 'yaml'
import type { ND168 } from '@/model/ND168'

const MARKINGS_REPO_PATH = 'data/nghi-dinh-168.yaml'

export const getND168s = cache(() => {
  const file = fs
    .readFileSync(join(process.cwd(), MARKINGS_REPO_PATH))
    .toString()
  const data = yaml.parse(file)
  return data as Record<string, ND168>
})

export function getND168ById(id: string): ND168 | undefined {
  const items = getND168s()
  return items[id]
}
