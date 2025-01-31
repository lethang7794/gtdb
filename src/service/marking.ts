import file from '@data/markings.yaml'
import { MarkingImage, type Marking } from '@/model/Marking'

const MARKINGS_PUBLIC_PATH = 'assets/markings'

export const getMarkings = (async () => {
  return file as Record<string, Marking>
})

export const getMarkingsArray = (async () => {
  const data = await getMarkings()
  return Object.entries(data)
})

export const getMarkingById = (
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
