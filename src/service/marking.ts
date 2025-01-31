import file from '@data/markings.yaml'
import { MarkingImage, type Marking } from '@/model/Marking'

const MARKINGS_PUBLIC_PATH = 'assets/markings'

export const getMarkingsArray = async (): Promise<Marking[]> => {
  return file.data
}

export const getMarkingById = async (id: string): Promise<Marking | undefined> => {
  const items = await getMarkingsArray()
  return items.find((item) => item.id == id)
}

export function getMarkingImage(item: Marking, opts?: { type?: MarkingImage }) {
  if (opts?.type === MarkingImage.extra) {
    return `/${MARKINGS_PUBLIC_PATH}/${item.image_extra}`
  }
  return `/${MARKINGS_PUBLIC_PATH}/${item.image}`
}
