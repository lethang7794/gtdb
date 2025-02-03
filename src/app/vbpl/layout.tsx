import MarkdownLayout from '@/components/layout/markdown-layout'

export default function VbplShareLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <MarkdownLayout>{children}</MarkdownLayout>
}
