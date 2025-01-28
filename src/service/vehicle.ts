import { unstable_cache } from 'next/cache'
import fs from 'node:fs'

const VEHICLE_REPO_PATH = 'data/vehicles.md'

export const getVehicles = unstable_cache(async () => {
  return fs.readFileSync(VEHICLE_REPO_PATH).toString()
})
