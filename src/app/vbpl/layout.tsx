import MarkdownLayout from '@/components/layout/markdown-layout'
import './style.css'

export default function VbplShareLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <MarkdownLayout>{children}</MarkdownLayout>
}
