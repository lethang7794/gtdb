import 'github-markdown-css/github-markdown.css'
import '@/style/github-markdown.css'
import '@/style/github-markdown-custom.css'
import './style.css'
import { GITHUB_MARKDOWN_CSS_CLASS } from '@/constant/github-markdown-css'

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${GITHUB_MARKDOWN_CSS_CLASS} font-sans`}>
      <div className="relative flex h-full flex-col justify-between py-6 md:py-8">
        <div className="container pr-4 pl-8">{children}</div>
      </div>
    </div>
  )
}
