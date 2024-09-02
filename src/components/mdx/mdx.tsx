'use client'

import { type MDXRemoteSerializeResult, MDXRemote } from 'next-mdx-remote'
import { GITHUB_MARKDOWN_CSS_CLASS } from '@/constant/github-markdown-css'
import '@/style/github-markdown.css'
import '@/style/github-markdown-custom.css'

export function MDX({ mdxSource }: { mdxSource: MDXRemoteSerializeResult }) {
  return (
    <div className={GITHUB_MARKDOWN_CSS_CLASS}>
      <div className="px-6">
        <MDXRemote {...mdxSource} />
      </div>
    </div>
  )
}
