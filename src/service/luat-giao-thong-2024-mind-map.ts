import { loadFile } from '@/helpers/file-helper'

const LUAT_GIAO_THONG_2024_MIND_MAP = 'data/markmaps/luat-TTATGTDB-2024.md'

export const getLuatGT2024MindMap = async () => {
  const file = await loadFile(LUAT_GIAO_THONG_2024_MIND_MAP)
  return file
}
