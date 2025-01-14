import fs from 'node:fs'
import yaml from 'yaml'
import type { Glossary } from '@/model/Glossary'
import { unstable_cache } from 'next/cache'

const GLOSSARY_REPO_PATH = 'data/glossaries.yaml'
const GLOSSARY_PUBLIC_PATH = 'glossary'

export const getGlossaries = unstable_cache(async () => {
  const file = fs.readFileSync(GLOSSARY_REPO_PATH).toString()
  const data = yaml.parse(file)
  return data as Record<string, Partial<Glossary>>
})

export const getGlossaryById = unstable_cache(
  async (id: string): Promise<Partial<Glossary> | undefined> => {
    const items = await getGlossaries()
    return items[id]
  }
)
