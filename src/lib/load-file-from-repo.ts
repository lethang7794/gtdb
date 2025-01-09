import { env } from '@/env.mjs'

export async function loadFileFromRepo(
  path: string,
  repo = process.env.NEXT_PUBLIC_GITHUB_REPO,
  branch = 'main'
) {
  if (!repo) {
    throw new Error('missing environment: NEXT_PUBLIC_GITHUB_REPO')
  }

  try {
    const url = `https://raw.githubusercontent.com/${repo}/refs/heads/${branch}/${path}`
    const data = await fetch(url, {
      cache: env.NODE_ENV === 'production' ? 'force-cache' : 'no-cache',
    })
    return data
  } catch (error) {
    throw new Error(`failed loading file from repo: ${error}`)
  }
}
