import { cache } from 'react'
// import fs from 'node:fs'
import { promises as fs } from 'node:fs'

const NGHI_DINH_168_MIND_MAP = 'src/content/nghi-dinh-168-mind-map.md'

export const getNghiDinh168MindMap = cache(async () => {
  return await fs.readFile(`${process.cwd()}/${NGHI_DINH_168_MIND_MAP}`, 'utf8')
})
