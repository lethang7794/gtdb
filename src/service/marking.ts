import yaml from 'yaml'
import { MarkingImage, type Marking } from '@/model/Marking'
import { unstable_cache } from 'next/cache'
import { loadFile } from '@/helpers/file-helper'

const MARKINGS_REPO_PATH = 'data/markings.yaml'
const MARKINGS_PUBLIC_PATH = 'markings'

export const getMarkings = unstable_cache(async () => {
  const file = loadFile(MARKINGS_REPO_PATH).toString()
  const data = yaml.parse(file)
  return data as Record<string, Marking>
})

export const getMarkingById = unstable_cache(
  async (id: string): Promise<Marking | undefined> => {
    const items = await getMarkings()
    return items[id]
  }
)

export function getMarkingImage(item: Marking, opts?: { type?: MarkingImage }) {
  if (opts?.type === MarkingImage.extra) {
    return `/${MARKINGS_PUBLIC_PATH}/${item.image_extra}`
  }
  return `/${MARKINGS_PUBLIC_PATH}/${item.image}`
}
