export async function loadFileFromRepo(
  path: string,
  repo = process.env.NEXT_PUBLIC_GITHUB_REPO,
  branch = 'main'
) {
  console.log({ path, repo, branch })
  try {
    const url = `https://raw.githubusercontent.com/${repo}/refs/heads/${branch}/${path}`
    const data = await fetch(url, { cache: 'force-cache' })
    console.log('🚀 ~ url:', url)
    return data
  } catch (error) {
    throw new Error(`fail loading file from repo: ${error}`)
  }
}
