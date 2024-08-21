import { MarkingImage, type Marking } from '@/model/Marking'

const markingsPath = 'markings'

export function getMarkingImage(marking: Marking, opts?: { type?: ImageType }) {
  if (opts?.type === MarkingImage.extra) {
    return `/${markingsPath}/${marking.image_extra}`
  }
  return `/${markingsPath}/${marking.image}`
}
