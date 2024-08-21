import { cache } from 'react'
import fs from 'node:fs'
import yaml from 'yaml'
import type { RoadSign } from '@/model/RoadSign'

const dataRoadSignsPath = 'data/signs.yaml'

export const getDataRoadSigns = cache(() => {
  const file = fs.readFileSync(dataRoadSignsPath).toString()
  const data = yaml.parse(file)
  return data as Record<string, RoadSign>
})
