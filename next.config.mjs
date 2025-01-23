// @ts-check

import createMDX from '@next/mdx'
import remarkCustomHeaderId from 'remark-custom-header-id'
import remarkTOC from 'remark-toc'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import remarkGfm from 'remark-gfm'
import rehypeStringify from 'rehype-stringify'
import { VBPL_SECTION_ZERO } from './src/constant/vbpl.mjs'
import { PHASE_DEVELOPMENT_SERVER } from 'next/constants.js'

const normalizeConfig = (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    output: phase === PHASE_DEVELOPMENT_SERVER ? undefined : 'export',

    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    transpilePackages: ['next-mdx-remote'],

    // Custom webpack configuration
    webpack(config, options) {
      config.module.rules.push({
        test: /\.ya?ml$/,
        use: 'yaml-loader',
      })

      return config
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

    experimental: {
      outputFileTracingIncludes: {
        '/*': ['./data/**/*', './src/content/**/*'],
      },
    },
  }

  const withMDX = createMDX({
    // Add markdown plugins here, as desired
    options: {
      remarkPlugins: [
        remarkCustomHeaderId,
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

  return withMDX(nextConfig)
}

export default normalizeConfig
