import { unstable_cache } from 'next/cache'

import file from '@data/markmaps/nghi-dinh-168-2024.md'

export const getNghiDinh168MindMap = unstable_cache(async () => {
  return file
})
