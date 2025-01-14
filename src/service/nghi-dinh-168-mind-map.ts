import { loadFile } from '@/helpers/file-helper'
import { unstable_cache } from 'next/cache'

const NGHI_DINH_168_MIND_MAP = 'data/markmaps/nghi-dinh-168-2024.md'

export const getNghiDinh168MindMap = unstable_cache(async () => {
  const file = await loadFile(NGHI_DINH_168_MIND_MAP)
  return file
})
