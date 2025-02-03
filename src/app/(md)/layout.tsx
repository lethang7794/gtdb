import MarkdownLayout from '@/components/layout/markdown-layout'

export default function MdLayout({ children }: { children: React.ReactNode }) {
  return <MarkdownLayout>{children}</MarkdownLayout>
}
