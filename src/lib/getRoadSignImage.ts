import type { RoadSign } from '@/model/RoadSign'

const roadSignPath = 'road-signs'

export function getRoadSignImage(sign: RoadSign) {
  return `/${roadSignPath}/${sign.image}`
}
