import { env } from '@/env.mjs'

export function processStaticParams(params: { slug: string }[]) {
  if (env.NEXT_PUBLIC_APP_ENV === 'dev') {
    return params.slice(0, 5)
  }
  if (env.NEXT_PUBLIC_APP_ENV === 'preview') {
    return params.slice(0, 50)
  }
  return params
}
