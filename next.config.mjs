import createMDX from '@next/mdx'
import remarkTOC from 'remark-toc'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
}

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [
      [remarkTOC, { heading: '(table[ -]of[ -])?contents?|toc|mục lục' }],
    ],
    rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
  },
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)
