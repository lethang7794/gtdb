import type { MDXComponents } from 'mdx/types'

import { DocumentHeading } from '@/components/mdx/document-heading'
import { DocumentEnding } from '@/components/mdx/document-ending'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    DocumentHeading,
    DocumentEnding,
    ...components,
  }
}
