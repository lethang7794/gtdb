import { env } from '@/env.mjs'

export function processStaticParams(params: { slug: string }[], path?: string) {
  // Local dev
  if (env.NEXT_PUBLIC_APP_ENV === 'dev') {
    const sub = params.slice(0, 5)
    console.warn(
      'NEXT_PUBLIC_APP_ENV: $dev',
      `Generate static params for ${sub.length}: ${sub.map(({ slug }) => slug)}  instead of all params (${params.length} total): `
    )
    return sub
  }
  // VERCEL preview environment
  if (env.NEXT_PUBLIC_APP_ENV === 'preview') {
    const sub = params.slice(0, 50)
    console.warn(
      'NEXT_PUBLIC_APP_ENV: preview',
      `Generate static params for ${sub.length}: ${sub.map(({ slug }) => slug)}  instead of all params (${params.length} total): `
    )
    return sub
  }
  // Cloudflare preview
  if (env.CF_PAGES_BRANCH !== 'main') {
    const sub = params.slice(0, 50)
    console.warn(
      'CF_PAGES_BRANCH is not main.',
      `Generate static params for ${sub.length}: ${sub.map(({ slug }) => slug)}  instead of all params (${params.length} total): `
    )
    return sub
  }

  return params
}
