import { MarkingImage, type Marking } from '@/model/Marking'
import { unstable_cache } from 'next/cache'
import file from '@data/markings.yaml'

const MARKINGS_PUBLIC_PATH = 'markings'

export const getMarkings = unstable_cache(async () => {
  return file as Record<string, Marking>
})

export const getMarkingsArray = unstable_cache(async () => {
  const data = await getMarkings()
  return Object.entries(data)
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
