import { cache } from 'react'
import fs from 'node:fs'
import yaml from 'yaml'
import type { Glossary } from '@/model/Glossary'

const GLOSSARY_REPO_PATH = 'data/glossaries.yaml'
const GLOSSARY_PUBLIC_PATH = 'glossary'

export const getGlossaries = cache(() => {
  const file = fs.readFileSync(GLOSSARY_REPO_PATH).toString()
  const data = yaml.parse(file)
  return data as Record<string, Glossary>
})

export function getGlossaryById(id: string): Glossary | undefined {
  const items = getGlossaries()
  return items[id]
}
