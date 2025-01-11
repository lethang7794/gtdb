import { cache } from 'react'
import { loadFile } from '@/helpers/file-helper'

const NGHI_DINH_168_MIND_MAP = 'data/markmaps/nghi-dinh-168.md'

export const getNghiDinh168MindMap = cache(async () => {
  const file = await loadFile(NGHI_DINH_168_MIND_MAP)
  return file
})
