import { cache } from 'react'
import fs from 'node:fs'
import yaml from 'yaml'

const dataRoadSignsPath = 'data/signs.yaml'

export const getDataRoadSigns = cache(() => {
  const file = fs.readFileSync(dataRoadSignsPath).toString()
  const data = yaml.parse(file)
  return data
})
