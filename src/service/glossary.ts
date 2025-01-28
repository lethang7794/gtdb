import file from '@data/glossaries.yaml'
import type { Glossary } from '@/model/Glossary'

export const getGlossaries = async () => {
  return (file.data || []) as Glossary[]
}

export const getGlossaryById = async (
  id: string
): Promise<Partial<Glossary>> => {
  const items = await getGlossaries()
  return items.filter((item) => item.id)[0]
}
