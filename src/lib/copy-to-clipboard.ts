export async function copyToClipboard(text: string) {
  if (typeof navigator === 'undefined' || !navigator.clipboard?.writeText) {
    throw new Error('Clipboard is unavailable')
  }
  await navigator.clipboard.writeText(text)
}

export async function shareOrCopy(data: ShareData & { url: string }) {
  if (typeof navigator !== 'undefined' && navigator.share) {
    try {
      if (!navigator.canShare || navigator.canShare(data)) {
        await navigator.share(data)
        return 'shared'
      }
    } catch (error) {
      if (error instanceof Error && error.name === 'AbortError')
        return 'cancelled'
    }
  }
  await copyToClipboard(data.url)
  return 'copied'
}
