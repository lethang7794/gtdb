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

  const data = await loadFileFromRepo(localPath)
  return await data.text()
}

export const loadFileFromRepo = unstable_cache(
  async (
    path: string,
    repo = process.env.NEXT_PUBLIC_GITHUB_REPO,
    branch = 'main'
  ) => {
    if (!repo) {
      throw new Error('missing environment: NEXT_PUBLIC_GITHUB_REPO')
    }

    try {
      const url = `https://raw.githubusercontent.com/${repo}/refs/heads/${branch}/${path}`
      const data = await fetch(url, {
        cache: env.NEXT_PUBLIC_APP_ENV === 'prod' ? 'force-cache' : 'no-cache',
      })
      return data
    } catch (error) {
      throw new Error(`failed loading file from repo: ${error}`)
    }
  }
)
