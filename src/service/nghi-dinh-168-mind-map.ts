import { cache } from 'react'
import { loadFileFromRepo } from '@/lib/load-file-from-repo'

const NGHI_DINH_168_MIND_MAP = 'data/markmaps/nghi-dinh-168.md'

export const getNghiDinh168MindMap = cache(async () => {
  const file = await loadFileFromRepo(NGHI_DINH_168_MIND_MAP)
  return file.text()
})
