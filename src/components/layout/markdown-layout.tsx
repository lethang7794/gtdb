import { GITHUB_MARKDOWN_CSS_CLASS } from '@/constant/github-markdown-css'
import 'github-markdown-css/github-markdown.css'
import '@/style/github-markdown-custom.css'
import '@/style/github-markdown.css'

export default function MarkdownLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`${GITHUB_MARKDOWN_CSS_CLASS} font-sans h-full`}>
      {children}
    </div>
  )
}
