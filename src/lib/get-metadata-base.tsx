import { env, isDev } from '@/env.mjs'

export function getMetadataBase(): URL {
  if (isDev) {
    const url = 'http://localhost:3000'
    return new URL(url)
  }

  // Cloudflare's url-of-current-deployment
  // e.g. https://bd7cd7f4.vite-plugin-cloudflare-functions.pages.dev
  if (env.CF_PAGES_URL) {
    return new URL(env.CF_PAGES_URL)
  }

  // Vercel's url of current deployment
  // VERCEL_PROJECT_PRODUCTION_URL: e.g. <PROJECT-NAME>.com
  // VERCEL_URL:                    e.g. <PROJECT-NAME>.vercel.app or <PROJECT-NAME>-<TEAM-NAME>.vercel.app
  // VERCEL_BRANCH_URL:             e.g. <PROJECT-NAME>-git-improve-about-page.vercel.app
  // Each commit also has its url:  e.g. <PROJECT-NAME>-<GIT-COMMIT>-<TEAM-NAME>.vercel.app
  //
  // For Vercel, use production url (public without authentication)
  if (env.VERCEL_ENV) {
    if (env.VERCEL_ENV === 'production' && env.VERCEL_PROJECT_PRODUCTION_URL) {
      return new URL(`https://${env.VERCEL_PROJECT_PRODUCTION_URL}`)
    }
    if (env.VERCEL_ENV === 'preview' && env.VERCEL_BRANCH_URL) {
      return new URL(`https://${env.VERCEL_BRANCH_URL}`)
    }
    if (env.VERCEL_URL) {
      return new URL(`https://${env.VERCEL_URL}`)
    }
  }

  return new URL(`https://${env.NEXT_PUBLIC_DOMAIN}`)
}
