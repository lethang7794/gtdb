import { cache } from 'react'
import fs from 'node:fs'
import yaml from 'yaml'
import { MarkingImage, type Marking } from '@/model/Marking'

const dataMarkingsPath = 'data/markings.yaml'
const markingsPath = 'markings'

export const getMarkings = cache(() => {
  const file = fs.readFileSync(dataMarkingsPath).toString()
  const data = yaml.parse(file)
  return data as Record<string, Marking>
})

export function getMarkingById(id: string): Marking | undefined {
  const marking = getMarkings()
  return marking[id]
}

export function getMarkingImage(
  marking: Marking,
  opts?: { type?: MarkingImage }
) {
  if (opts?.type === MarkingImage.extra) {
    return `/${markingsPath}/${marking.image_extra}`
  }
  return `/${markingsPath}/${marking.image}`
}
