import type { Route } from 'next'
import type { MDXComponents } from 'mdx/types'
import dynamic from 'next/dynamic'
import BaseLink from '@/components/base-link'
import AA from '@/components/block/anchor-link-luat-gt-2024.server'
import A from '@/components/block/anchor-link.server'
import { CollapsibleSection } from '@/components/block/collapsible'
import { Spinner } from '@/components/block/spinner'
import RemarkTOCEffect from '@/components/effect/remark-toc'
import RemarkTOCEffectLuatGT2024 from '@/components/effect/remark-toc-luat-gt-2024'
import { DocumentEnding } from '@/components/mdx/document-ending'
import { DocumentHeading } from '@/components/mdx/document-heading'

const NghiDinh168MindMap = dynamic(
  () => import('@/app/markmap/nghi-dinh-168-2024/page'),
  { loading: () => <Spinner className="absolute" /> }
)

const LuatGT2024MindMap = dynamic(
  () => import('@/app/markmap/luat-TTATGTDB-2024/page'),
  { loading: () => <Spinner className="absolute" /> }
)

const NghiDinh168HDSD = dynamic(
  () => import('@/app/vbpl/nghi-dinh-168-2024/hdsd')
)
const ShareButton = dynamic(() => import('@/components/block/share-button'))
const ShareButtonWrapper = dynamic(() =>
  import('@/components/block/share-button').then((m) => m.ShareButtonWrapper)
)

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: ({ children, href, ...props }) => (
      <BaseLink href={href as Route} {...props}>
        {children}
      </BaseLink>
    ),
    DocumentHeading,
    DocumentEnding,
    CollapsibleSection,
    A,
    AA,
    RemarkTOCEffect,
    RemarkTOCEffectLuatGT2024,
    NghiDinh168MindMap,
    NghiDinh168HDSD,
    LuatGT2024MindMap,
    Spinner,
    ShareButton,
    ShareButtonWrapper,
    ...components,
  }
}
