import { cache } from 'react'
import fs from 'node:fs'
import { join } from 'node:path'

const NGHI_DINH_168_MIND_MAP = 'src/content/nghi-dinh-168-mind-map.md'

export const getNghiDinh168MindMap = cache(() => {
  return fs.readFileSync(join(process.cwd(), NGHI_DINH_168_MIND_MAP)).toString()
})
