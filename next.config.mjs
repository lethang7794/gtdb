import createMDX from '@next/mdx'
import remarkTOC from 'remark-toc'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import remarkGfm from 'remark-gfm'
import rehypeStringify from 'rehype-stringify'
import withYaml from '@importable/yaml/next'
import { VBPL_SECTION_ZERO } from './src/constant/vbpl.mjs'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
  transpilePackages: ['next-mdx-remote'],

  experimental: {
    turbo: {
      rules: {
        '*.yaml': [
          {
            loader: 'yaml-loader',
            options: {
              format: 'yaml',
            },
          },
        ],
      },
    },
  },

  // Map an incoming request path to a different destination path
  async rewrites() {
    return {
      beforeFiles: [
        // These rewrites are checked after headers/redirects
        // and before all files including _next/public files which
        // allows overriding page files

        {
          source: '/vbpl/nghi-dinh-168-2024',
          missing: [{ type: 'query', key: 's' }],
          destination: `/vbpl/nghi-dinh-168-2024/${VBPL_SECTION_ZERO}`,
        },
        {
          source: '/vbpl/nghi-dinh-168-2024',
          has: [{ type: 'query', key: 's', value: '(?<section>.*)' }],
          destination: '/vbpl/nghi-dinh-168-2024/:section#:section',
        },

        {
          source: '/vbpl/luat-TTATGTDB-2024',
          missing: [{ type: 'query', key: 's' }],
          destination: `/vbpl/luat-TTATGTDB-2024/${VBPL_SECTION_ZERO}`,
        },
        {
          source: '/vbpl/luat-TTATGTDB-2024',
          has: [{ type: 'query', key: 's', value: '(?<section>.*)' }],
          destination: '/vbpl/luat-TTATGTDB-2024/:section#:section',
        },
      ],

      afterFiles: [
        // These rewrites are checked after pages/public files
        // are checked but before dynamic routes
      ],
      fallback: [
        // These rewrites are checked after both pages/public files
        // and dynamic routes are checked
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
