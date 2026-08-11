import data from '@data/road-signs.yaml'
import type { RoadSign } from '@/model/RoadSign'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
const ROAD_SIGNS_PUBLIC_PATH = 'assets/road-signs'

export const getRoadSigns = async () => {
  return data as Record<string, RoadSign>
}

export const getRoadSignsArray = async () => {
  const items = await getRoadSigns()
  return Object.entries(items)
}

export const getRoadSignItemsArray = async () => {
  const items = await getRoadSignsArray()
  return items.filter(([, item]) => item.type !== 'group')
}

export const getRoadSignById = async (
  id: string
): Promise<RoadSign | undefined> => {
  const items = await getRoadSigns()
  const item = items[id]
  return item?.type === 'group' ? undefined : item
}

export const getRoadSignsWithAroundById = async (
  id: string
): Promise<
  | {
      prev?: [string, RoadSign]
      cur: [string, RoadSign]
      next?: [string, RoadSign]
    }
  | undefined
> => {
  const items = await getRoadSigns()
  const found = items[id]
  if (!found) {
    return undefined
  }

  const arr = await getRoadSignItemsArray()
  const foundIdx = arr.findIndex(([key]) => key === id)
  if (foundIdx === -1) {
    return undefined
  }

  return {
    prev: foundIdx === 0 ? undefined : arr[foundIdx - 1],
    cur: arr[foundIdx],
    next: foundIdx === arr.length - 1 ? undefined : arr[foundIdx + 1],
  }
}

export function getRoadSignImage(sign: RoadSign) {
  return `${basePath}/${ROAD_SIGNS_PUBLIC_PATH}/${sign.image}`
}
export function getRoadSignOgImage(sign: RoadSign) {
  return `${basePath}/${ROAD_SIGNS_PUBLIC_PATH}/og/${sign.image}`.replace(
    '.svg',
    '.png'
  )
}
