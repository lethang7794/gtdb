import { env } from '@/env.mjs'

export function processStaticParams(params: { slug: string }[], path?: string) {
  // Local dev
  if (env.NEXT_PUBLIC_APP_ENV === 'dev') {
    const sub = params.slice(0, 5)
    console.warn('NEXT_PUBLIC_APP_ENV: $dev', getSlugsInfo(params, sub, path))
    return sub
  }
  // VERCEL preview environment
  if (env.NEXT_PUBLIC_APP_ENV === 'preview') {
    const sub = params.slice(0, 50)
    console.warn(
      'NEXT_PUBLIC_APP_ENV: preview',
      getSlugsInfo(params, sub, path)
    )
    return sub
  }
  // Cloudflare preview
  if (env.CF_PAGES_BRANCH !== 'main') {
    const sub = params.slice(0, 50)
    console.warn(
      'CF_PAGES_BRANCH is not main.',
      getSlugsInfo(params, sub, path)
    )
    return sub
  }

  return params
}
function getSlugsInfo(
  params: { slug: string }[],
  sub: { slug: string }[],
  path: string | undefined
) {
  return `Generate static params for ${sub.length} slugs: ${sub.map(({ slug }) => slug).join(', ')} instead of all params (${params.length} total) at ${path}`
}
