import file from '@data/markings.yaml'
import { MarkingImage, type Marking } from '@/model/Marking'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
const MARKINGS_PUBLIC_PATH = 'assets/markings'

export const getMarkingsArray = async (): Promise<Marking[]> => {
  return file.data
}

export const getMarkingItemsArray = async (): Promise<Marking[]> => {
  const items = await getMarkingsArray()
  return items.filter(
    (item) => item.type !== 'group' && item.type !== 'sub_group'
  )
}

export const getMarkingById = async (
  id: string
): Promise<Marking | undefined> => {
  const items = await getMarkingItemsArray()
  return items.find((item) => item.id === id)
}

export function getMarkingImage(item: Marking, opts?: { type?: MarkingImage }) {
  if (opts?.type === MarkingImage.extra) {
    return `${basePath}/${MARKINGS_PUBLIC_PATH}/${item.image_extra}`
  }
  return `${basePath}/${MARKINGS_PUBLIC_PATH}/${item.image}`
}
