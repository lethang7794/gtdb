import matter from 'gray-matter'
import { loadFile, readDirectory, readFile } from '@/helpers/file-helper'
import { MARKMAP_DIR_PATH } from '@/constant/path-repo'
import { unstable_cache } from 'next/cache'

export const getMarkmapList = unstable_cache(async () => {
  const fileNames = await readDirectory(MARKMAP_DIR_PATH)

  const markmaps: Record<string, string>[] = []

  for (const fileName of fileNames) {
    const rawContent = await loadFile(`${MARKMAP_DIR_PATH}/${fileName}`)

    const { data: frontmatter } = matter(rawContent)

    markmaps.push({
      slug: fileName.replace('.md', ''),
      ...frontmatter,
    })
  }

  return markmaps.sort((p1, p2) => (p1.publishedOn < p2.publishedOn ? 1 : -1))
})

export const loadMarkmap = unstable_cache(async (slug: string) => {
  const rawContent = await loadFile(`${MARKMAP_DIR_PATH}/${slug}.md`)
  const { data: frontmatter, content } = matter(rawContent)
  return { frontmatter, content: rawContent }
})
