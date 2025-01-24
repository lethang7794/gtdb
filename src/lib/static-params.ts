import { env } from '@/env.mjs'

export function processStaticParams(params: { slug: string }[], path?: string) {
  if (env.NEXT_PUBLIC_STATIC_PARAMS && env.NEXT_PUBLIC_STATIC_PARAMS > 0) {
    const sub = params.slice(0, env.NEXT_PUBLIC_STATIC_PARAMS)
    console.warn(
      `NEXT_PUBLIC_STATIC_PARAMS: ${env.NEXT_PUBLIC_STATIC_PARAMS}\n`,
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
  return `Instead of generating all params at ${path} (${params.length} total), generating for ${sub.length} slugs: ${sub.map(({ slug }) => slug).join(', ')}`
}
