import { cache } from 'react'
import fs from 'node:fs'

const VEHICLE_REPO_PATH = 'data/vehicles.md'

export const getVehicles = cache(() => {
  return fs.readFileSync(VEHICLE_REPO_PATH).toString()
})
