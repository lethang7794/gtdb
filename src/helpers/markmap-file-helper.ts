import React from 'react'
import matter from 'gray-matter'
import { readDirectory, readFile } from '@/helpers/file-helper'
import { loadFileFromRepo } from '@/lib/load-file-from-repo'
import { MARKMAP_DIR_PATH } from '@/constant/path-repo'

export async function getMarkmapList() {
  const fileNames = await readDirectory(MARKMAP_DIR_PATH)

  const markmaps: Record<string, string>[] = []

  for (const fileName of fileNames) {
    const rawContent = await readFile(`${MARKMAP_DIR_PATH}/${fileName}`)

    const { data: frontmatter } = matter(rawContent)

    markmaps.push({
      slug: fileName.replace('.md', ''),
      ...frontmatter,
    })
  }

  return markmaps.sort((p1, p2) => (p1.publishedOn < p2.publishedOn ? 1 : -1))
}

export const loadMarkmap = React.cache(async (slug: string) => {
  const rawContent = await readFile(`${MARKMAP_DIR_PATH}/${slug}.md`)
  const { data: frontmatter, content } = matter(rawContent)
  return { frontmatter, content: rawContent }
})

export const loadMarkmapFromRepo = React.cache(async (slug: string) => {
  const rawContent = await loadFileFromRepo(`${MARKMAP_DIR_PATH}/${slug}.md`)
  const { data: frontmatter, content } = matter(await rawContent.text())
  return { frontmatter, content }
})
