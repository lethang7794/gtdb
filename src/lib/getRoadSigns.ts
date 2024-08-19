import { cache } from 'react'
import fs from 'node:fs'
import yaml from 'yaml'
import type { RoadSign } from '@/model/RoadSign'

export const getGlobalData = cache(() => {
  const file = fs.readFileSync('data/signs.yaml').toString()
  const data = yaml.parse(file)
  return data
})
