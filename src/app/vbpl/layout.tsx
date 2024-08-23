import 'github-markdown-css/github-markdown.css'

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="markdown-body">
      <div className="flex min-h-screen flex-col justify-between p-6 md:p-8">
        <div className="container">{children}</div>
      </div>
    </div>
  )
}
