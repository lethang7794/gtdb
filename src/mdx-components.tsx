import type { MDXComponents } from 'mdx/types'

import { DocumentHeading } from '@/components/mdx/document-heading'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    DocumentHeading,
    ...components,
  }
}
