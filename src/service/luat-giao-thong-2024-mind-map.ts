import { unstable_cache } from 'next/cache'

import file from '@data/markmaps/luat-TTATGTDB-2024.md'

export const getLuatGT2024MindMap = unstable_cache(async () => {
  return file
})
