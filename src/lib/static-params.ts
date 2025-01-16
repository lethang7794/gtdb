import { env } from '@/env.mjs'

export function processStaticParams(params: { slug: string }[]) {
  if (env.VERCEL_ENV === 'production') {
    return params
  }
  return params.slice(0, 5)
}
