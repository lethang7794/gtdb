import path from 'node:path'
import matter from 'gray-matter'
import { readDirectory, readFile } from '@/helpers/file-helper'
import { MARKMAP_DIR_PATH } from '@/constant/path-repo'

export const getMarkmaps = async () => {
  console.log('process.cwd():', process.cwd())
  console.log('process.env():', process.env)
  console.log('process.execPath:', process.execPath)
  console.log('process.argv:', process.argv)

  const dirPath = path.join(process.cwd(), MARKMAP_DIR_PATH)
  const fileNames = await readDirectory(dirPath)

  const markmaps: Record<string, string>[] = []

  for (const fileName of fileNames) {
    const filePath = path.join(dirPath, fileName)
    const rawContent = await readFile(filePath)

    const { data: frontmatter } = matter(rawContent)

    markmaps.push({
      slug: fileName.replace('.md', ''),
      ...frontmatter,
    })
  }

  return markmaps.sort((p1, p2) => (p1.publishedOn < p2.publishedOn ? 1 : -1))
}

export const getMarkmapById = async (slug: string) => {
  const dirPath = path.join(process.cwd(), MARKMAP_DIR_PATH)
  const filePath = path.join(dirPath, `${slug}.md`)
  const rawContent = await readFile(filePath)
  const { data: frontmatter, content } = matter(rawContent)
  return { frontmatter, content: rawContent }
}
