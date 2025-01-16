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

  // Map an incoming request path to a different destination path
  async rewrites() {
    return {
      beforeFiles: [
        // These rewrites are checked after headers/redirects
        // and before all files including _next/public files which
        // allows overriding page files
        // {
        //   source: '/some-page',
        //   destination: '/somewhere-else',
        //   has: [{ type: 'query', key: 'overrideMe' }],
        // },
        // {
        //   source: '/about',
        //   destination: '/',
        // },
        {
          source: '/vbpl/nghi-dinh-168-2024',
          has: [
            {
              type: 'query',
              key: 's',
              // the page value will not be available in the
              // destination since value is provided and doesn't
              // use a named capture group e.g. (?<page>home)
              value: '(?<section>.*)',
            },
          ],
          destination: '/vbpl/nghi-dinh-168-2024/:section#:section',
        },
      ],

      afterFiles: [
        // These rewrites are checked after pages/public files
        // are checked but before dynamic routes
        // {
        //   source: '/non-existent',
        //   destination: '/somewhere-else',
        // },
      ],
      fallback: [
        // These rewrites are checked after both pages/public files
        // and dynamic routes are checked
        // {
        //   source: '/:path*',
        //   destination: `https://my-old-site.com/:path*`,
        // },
      ],
    }
  },
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
