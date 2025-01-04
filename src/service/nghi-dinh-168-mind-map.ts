import { cache } from 'react'
import fs from 'node:fs'

const NGHI_DINH_168_MIND_MAP = 'src/content/nghi-dinh-168-mind-map.md'

export const getNghiDinh168MindMap = cache(() => {
  return fs.readFileSync(NGHI_DINH_168_MIND_MAP).toString()
})
