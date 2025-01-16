import type { Glossary } from '@/model/Glossary'
import { unstable_cache } from 'next/cache'
import data from '@data/glossaries.yaml'

export const getGlossaries = unstable_cache(async () => {
  return data as Record<string, Partial<Glossary>>
})

export const getGlossaryById = unstable_cache(
  async (id: string): Promise<Partial<Glossary> | undefined> => {
    const items = await getGlossaries()
    return items[id]
  }
)
