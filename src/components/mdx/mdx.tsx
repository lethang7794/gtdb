import type { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { GITHUB_MARKDOWN_CSS_CLASS } from '@/constant/github-markdown-css'
import '@/style/github-markdown.css'
import '@/style/github-markdown-custom.css'

export function MDX({
  mdxSource,
  source = '',
}: { mdxSource?: MDXRemoteSerializeResult; source?: string }) {
  return (
    <div className={`${GITHUB_MARKDOWN_CSS_CLASS} font-sans`}>
      <div className="px-6">
        {/* TODO: try lazy: lazy doesn't work with next-mdx-remote/rsc */}
        <MDXRemote {...mdxSource} source={source} />
      </div>
    </div>
  )
}
