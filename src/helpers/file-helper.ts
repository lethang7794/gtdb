import fs from 'node:fs/promises'
import path from 'node:path'
import { env, isDev } from '@/env.mjs'
import { unstable_cache } from 'next/cache'

export function readFile(localPath: string) {
  return fs.readFile(path.join(process.cwd(), localPath), 'utf8')
}

export function readDirectory(localPath: string) {
  return fs.readdir(path.join(process.cwd(), localPath))
}

export async function loadFile(localPath: string) {
  if (isDev) {
    return await readFile(localPath)
  }

  return await loadFileFromRepo(localPath)
}

export const loadFileFromRepo = async (
  path: string,
  cache?: {
    tags?: string[]
  },
  repo: string = process.env.NEXT_PUBLIC_GITHUB_REPO || '',
  branch = 'main'
) => {
  const cached = unstable_cache(
    async (path: string, repo, branch) => {
      if (!repo) {
        throw new Error('missing environment: NEXT_PUBLIC_GITHUB_REPO')
      }

      try {
        const url = `https://raw.githubusercontent.com/${repo}/refs/heads/${branch}/${path}`
        const data = await fetch(url, {
          // Vercel Data Cache (Edge Cache): Cache responses from data fetches.
          // See https://vercel.com/docs/infrastructure/data-cache
          next: {
            revalidate: env.NEXT_PUBLIC_CACHE_REVALIDATION,
            tags: cache?.tags,
          },
        })
        return await data.text()
      } catch (error) {
        throw new Error(`failed loading file from repo: ${error}`)
      }
    },
    [path, repo, branch],
    // Cache between requests
    {
      revalidate: env.NEXT_PUBLIC_CACHE_REVALIDATION,
      tags: cache?.tags,
    }
  )
  return await cached(path, repo, branch)
}
