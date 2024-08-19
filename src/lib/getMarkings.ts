import { cache } from 'react'
import fs from 'node:fs'
import yaml from 'yaml'

const dataMarkingsPath = 'data/markings.yaml'

export const getDataMarkings = cache(() => {
  const file = fs.readFileSync(dataMarkingsPath).toString()
  const data = yaml.parse(file)
  return data
})
