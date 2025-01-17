import path from 'node:path'
import { readFile } from '@/helpers/file-helper'
import { CONTENT_DIR_PATH } from '@/constant/path-repo'
import { compileMDX } from 'next-mdx-remote/rsc'
import { components } from '@/mdx-components'
import { cache } from 'react'

const FILE_NAME = 'nghi-dinh-168.mdx'

export const getNghiDinh168Mdx = cache(async () => {
  // console.log('🚀 ~ getNghiDinh168Mdx: inside cached')
  const filePath = path.join(CONTENT_DIR_PATH, FILE_NAME)
  const rawContent = await readFile(filePath)
  // return rawContent

  return await compileMDX({
    source: rawContent,
    components: components,
  })
})
