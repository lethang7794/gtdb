import type { Metadata } from 'next'
import TocDoKhoangCachAnToan from '@/content/quy-định-về-tốc-độ-và-khoảng-cách-an-toàn-2023.mdx'
import { NavHeader } from '@/components/block/nav-header'
import { VbplLayout } from '@/components/layout/vbpl-layout'
import { constants } from '@/constant'

const PATH = constants.paths

export const metadata: Metadata = {
  title: 'Quy định về tốc độ và khoảng cách an toàn (2023)',
}

export default function TocDoKhoangCachAnToanPage() {
  return (
    <>
      <NavHeader
        backHref={PATH.root}
        title="Thông tư quy định về tốc độ và khoảng cách an toàn (2023)"
      />
      <VbplLayout>
        <TocDoKhoangCachAnToan />
      </VbplLayout>
    </>
  )
}
