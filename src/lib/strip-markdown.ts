import { remark } from 'remark'
import strip from 'strip-markdown'

export async function stripMarkdown(md?: string) {
  const file = await remark().use(strip).process(md)
  return file.toString()
}
