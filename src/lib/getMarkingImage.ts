import type { Marking } from '@/model/Marking'

const markingsPath = 'markings'

export function getMarkingImage(marking: Marking) {
  return `/${markingsPath}/${marking.image}`
}
