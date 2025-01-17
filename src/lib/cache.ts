import { env } from '@/env.mjs'
import { unstable_cache } from 'next/cache'

type Callback = (...args: any[]) => any

export function cacheWithRevalidate<T extends Callback>(
  cb: T,
  keyParts?: string[],
  options: {
    /**
     * The revalidation interval in seconds.
     */
    revalidate?: number | false
    tags?: string[]
  } = {}
): T {
  const cached = unstable_cache(cb, keyParts, {
    revalidate: env.NEXT_PUBLIC_CACHE_REVALIDATION,
    tags: keyParts,
    ...options,
  })

  return cached as unknown as T
}
