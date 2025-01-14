import fs from 'node:fs'
import { unstable_cache } from 'next/cache'

const VEHICLE_XMIND_REPO_PATH = 'data/vehicles.xmind'

export const getVehicleXmind = unstable_cache(async () => {
  return fs.readFileSync(VEHICLE_XMIND_REPO_PATH).buffer
})
