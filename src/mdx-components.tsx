import type { MDXComponents } from 'mdx/types'

import { DocumentHeading } from '@/components/mdx/document-heading'
import { DocumentEnding } from '@/components/mdx/document-ending'
import { CollapsibleSection } from '@/components/block/collapsible'

import A from '@/components/block/anchor-link'
import NghiDinh168MindMap from '@/app/markmap/nghi-dinh-168-2024/page'
import NghiDinh168Effect from '@/app/vbpl/nghi-dinh-168-2024/effect'
import NghiDinh168HDSD from '@/app/vbpl/nghi-dinh-168-2024/hdsd'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    DocumentHeading,
    DocumentEnding,
    CollapsibleSection,
    A,
    NghiDinh168MindMap,
    NghiDinh168Effect,
    NghiDinh168HDSD,
    ...components,
  }
}
