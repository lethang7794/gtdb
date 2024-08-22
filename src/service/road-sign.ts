import { cache } from 'react'
import fs from 'node:fs'
import yaml from 'yaml'
import type { RoadSign } from '@/model/RoadSign'

const ROAD_SIGNS_REPO_PATH = 'data/signs.yaml'
const ROAD_SIGNS_PUBLIC_PATH = 'road-signs'

export const getRoadSigns = cache(() => {
  const file = fs.readFileSync(ROAD_SIGNS_REPO_PATH).toString()
  const data = yaml.parse(file)
  return data as Record<string, RoadSign>
})

export function getRoadSignById(id: string): RoadSign | undefined {
  const items = getRoadSigns()
  return items[id]
}

export function getRoadSignImage(sign: RoadSign) {
  return `/${ROAD_SIGNS_PUBLIC_PATH}/${sign.image}`
}
