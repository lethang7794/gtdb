import { cache } from 'react'
import fs from 'node:fs'

const VEHICLE_XMIND_REPO_PATH = 'data/vehicles.xmind'

export const getVehicleXmind = cache(() => {
  return fs.readFileSync(VEHICLE_XMIND_REPO_PATH).buffer
})
