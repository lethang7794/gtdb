// src/env.mjs
import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  /*
   * Serverside Environment variables, not available on the client.
   * Will throw if you access these variables on the client.
   */
  server: {
    NODE_ENV: z.enum(['development', 'test', 'production']),
    VERCEL_ENV: z.enum(['development', 'preview', 'production']),
    NEXT_PUBLIC_SECRET: z.string(),
    NEXT_PUBLIC_CACHE_REVALIDATION: z.coerce.number(),
  },
  /*
   * Environment variables available on the client (and server).
   *
   * 💡 You'll get type errors if these are not prefixed with NEXT_PUBLIC_.
   */
  client: {
    NEXT_PUBLIC_APP_ENV: z.enum(['dev', 'prod']),
    NEXT_PUBLIC_GITHUB_REPO: z.string().min(1),
    NEXT_PUBLIC_BRAND: z.string().min(1),
    NEXT_PUBLIC_BRAND_SHORT: z.string().min(1),
    NEXT_PUBLIC_BRAND_SLOGAN: z.string().min(1),
    NEXT_PUBLIC_DOMAIN: z.string().min(1),
  },
  /*
   * Due to how Next.js bundles environment variables on Edge and Client,
   * we need to manually destructure them to make sure all are included in bundle.
   *
   * 💡 You'll get type errors if not all variables from `server` & `client` are included here.
   */
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    VERCEL_ENV: process.env.VERCEL_ENV,
    NEXT_PUBLIC_SECRET: process.env.NEXT_PUBLIC_SECRET,
    NEXT_PUBLIC_CACHE_REVALIDATION: process.env.NEXT_PUBLIC_CACHE_REVALIDATION,

    NEXT_PUBLIC_APP_ENV: process.env.NEXT_PUBLIC_APP_ENV,
    NEXT_PUBLIC_GITHUB_REPO: process.env.NEXT_PUBLIC_GITHUB_REPO,
    NEXT_PUBLIC_BRAND: process.env.NEXT_PUBLIC_BRAND,
    NEXT_PUBLIC_BRAND_SHORT: process.env.NEXT_PUBLIC_BRAND_SHORT,
    NEXT_PUBLIC_BRAND_SLOGAN: process.env.NEXT_PUBLIC_BRAND_SLOGAN,
    NEXT_PUBLIC_DOMAIN: process.env.NEXT_PUBLIC_DOMAIN,
  },
})

export const isDev = env.NEXT_PUBLIC_APP_ENV === 'dev'
export const isProd = env.NEXT_PUBLIC_APP_ENV === 'prod'
