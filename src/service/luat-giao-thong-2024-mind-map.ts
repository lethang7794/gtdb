import { cache } from 'react'
import { loadFileFromRepo } from '@/lib/load-file-from-repo'

const LUAT_GIAO_THONG_2024_MIND_MAP =
  'src/content/luat-TTATGTDB-2024-mind-map.md'

export const getLuatGT2024MindMap = async () => {
  const file = await loadFileFromRepo(LUAT_GIAO_THONG_2024_MIND_MAP)
  return file.text()
}