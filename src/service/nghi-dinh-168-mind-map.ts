import { cache } from 'react'
import { loadFileFromRepo } from '@/lib/load-file-from-repo'

const NGHI_DINH_168_MIND_MAP = 'src/content/nghi-dinh-168-mind-map.md'

export const getNghiDinh168MindMap = cache(async () => {
  const file = loadFileFromRepo(NGHI_DINH_168_MIND_MAP)
  return file.toString()
})
