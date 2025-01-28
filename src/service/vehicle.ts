import fs from 'node:fs'
import { unstable_cache } from 'next/cache'

const VEHICLE_REPO_PATH = 'data/vehicles.md'

export const getVehicles = unstable_cache(async () => {
  return fs.readFileSync(VEHICLE_REPO_PATH).toString()
})
