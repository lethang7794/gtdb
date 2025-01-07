import createMDX from '@next/mdx'
import remarkTOC from 'remark-toc'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import remarkGfm from 'remark-gfm'
import rehypeStringify from 'rehype-stringify'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
  transpilePackages: ['next-mdx-remote'],
}

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [
      [remarkTOC, { heading: '(table[ -]of[ -])?contents?|toc|mục lục' }],
      remarkGfm,
    ],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: 'prepend' }],
      rehypeStringify,
    ],
    remarkRehypeOptions: {
      clobberPrefix: 'footnote-',
      footnoteLabel: 'Chú thích',
      allowDangerousHtml: true,
    },
  },
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)
