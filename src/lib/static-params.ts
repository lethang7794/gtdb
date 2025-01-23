import { env } from '@/env.mjs'

export function processStaticParams(params: { slug: string }[]) {
  // Local dev
  if (env.NEXT_PUBLIC_APP_ENV === 'dev') {
    return params.slice(0, 5)
  }
  // VERCEL preview environment
  if (env.NEXT_PUBLIC_APP_ENV === 'preview') {
    return params.slice(0, 50)
  }
  // Cloudflare preview
  if (env.CF_PAGES_BRANCH !== 'main') {
    return params.slice(0, 50)
  }

  return params
}
