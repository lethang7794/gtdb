import 'github-markdown-css/github-markdown.css'
import './style.css'

const GITHUB_MARKDOWN_CSS_CLASS = 'markdown-body'

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={GITHUB_MARKDOWN_CSS_CLASS}>
      <div className="flex min-h-screen flex-col justify-between p-6 md:p-8">
        <div className="container">{children}</div>
      </div>
    </div>
  )
}
