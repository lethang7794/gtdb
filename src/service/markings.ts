import { cache } from 'react'
import fs from 'node:fs'
import yaml from 'yaml'
import { MarkingImage, type Marking } from '@/model/Marking'

const MARKINGS_REPO_PATH = 'data/markings.yaml'
const MARKINGS_PUBLIC_PATH = 'markings'

export const getMarkings = cache(() => {
  const file = fs.readFileSync(MARKINGS_REPO_PATH).toString()
  const data = yaml.parse(file)
  return data as Record<string, Marking>
})

export function getMarkingById(id: string): Marking | undefined {
  const items = getMarkings()
  return items[id]
}

export function getMarkingImage(item: Marking, opts?: { type?: MarkingImage }) {
  if (opts?.type === MarkingImage.extra) {
    return `/${MARKINGS_PUBLIC_PATH}/${item.image_extra}`
  }
  return `/${MARKINGS_PUBLIC_PATH}/${item.image}`
}
