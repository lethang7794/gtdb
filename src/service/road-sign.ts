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

export const getRoadSignsArray = cache(() => {
  const items = getRoadSigns()
  return Object.entries(items)
})

export const getRoadSignById = cache((id: string): RoadSign | undefined => {
  const items = getRoadSigns()
  return items[id]
})

export const getRoadSignsWithAroundById = cache(
  (
    id: string
  ):
    | {
        prev?: [string, RoadSign]
        cur: [string, RoadSign]
        next?: [string, RoadSign]
      }
    | undefined => {
    const items = getRoadSigns()
    const found = items[id]
    if (!found) {
      return undefined
    }

    const arr = getRoadSignsArray()
    const foundIdx = arr.findIndex(([key]) => key === id)
    if (foundIdx === -1) {
      return undefined
    }

    return {
      prev: foundIdx === 0 ? undefined : arr[foundIdx - 1],
      cur: arr[foundIdx],
      next: foundIdx === arr.length ? undefined : arr[foundIdx + 1],
    }
  }
)

export function getRoadSignImage(sign: RoadSign) {
  return `/${ROAD_SIGNS_PUBLIC_PATH}/${sign.image}`
}
