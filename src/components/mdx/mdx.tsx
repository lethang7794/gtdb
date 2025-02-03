import type { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { MDXRemote } from 'next-mdx-remote/rsc'
import MarkdownLayout from '@/components/layout/markdown-layout'

export function MDX({
  mdxSource,
  source = '',
}: {
  mdxSource?: MDXRemoteSerializeResult
  source?: string
}) {
  return (
    <MarkdownLayout>
      <div className="px-6">
        {/* TODO: try lazy: lazy doesn't work with next-mdx-remote/rsc */}
        <MDXRemote {...mdxSource} source={source} />
      </div>
    </MarkdownLayout>
  )
}
