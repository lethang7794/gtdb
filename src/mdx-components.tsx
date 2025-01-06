import type { MDXComponents } from 'mdx/types'

import { DocumentHeading } from '@/components/mdx/document-heading'
import { DocumentEnding } from '@/components/mdx/document-ending'
import { CollapsibleSection } from '@/components/block/collapsible'

import NghiDinh168Mindmap from '@/app/markmap/nghi-dinh-168-2024/page'
import A from '@/components/block/anchor-link'
import Cleanup168 from '@/app/vbpl/nghi-dinh-168-2024/cleanup'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    DocumentHeading,
    DocumentEnding,
    CollapsibleSection,
    NghiDinh168Mindmap,
    A,
    Cleanup168,
    ...components,
  }
}
