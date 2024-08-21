import { cache } from 'react'
import fs from 'node:fs'
import yaml from 'yaml'
import type { RoadSign } from '@/model/RoadSign'

const dataRoadSignsPath = 'data/signs.yaml'
const roadSignPath = 'road-signs'

export const getRoadSigns = cache(() => {
  const file = fs.readFileSync(dataRoadSignsPath).toString()
  const data = yaml.parse(file)
  return data as Record<string, RoadSign>
})

export function getRoadSignById(id: string): RoadSign | undefined {
  const roadSigns = getRoadSigns()
  return roadSigns[id]
}

export function getRoadSignImage(sign: RoadSign) {
  return `/${roadSignPath}/${sign.image}`
}
