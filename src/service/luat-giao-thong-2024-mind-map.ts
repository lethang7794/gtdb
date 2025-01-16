import { loadFile } from '@/helpers/file-helper'
import { unstable_cache } from 'next/cache'

const LUAT_GIAO_THONG_2024_MIND_MAP = 'data/markmaps/luat-TTATGTDB-2024.md'

export const getLuatGT2024MindMap = unstable_cache(async () => {
  const file = await loadFile(LUAT_GIAO_THONG_2024_MIND_MAP)
  return file
})
