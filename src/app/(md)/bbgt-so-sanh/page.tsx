import type { Metadata } from 'next'
import RoadSignsComparison from '@/content/road-signs-comparison.mdx'
import { NavHeader } from '@/components/block/nav-header'
import { constants } from '@/constant'
import { MainLayout } from '@/components/layout/main-layout'

export const metadata: Metadata = {
  title: 'Biển báo giao thông - So sánh hiệu lực tác dụng',
}

export default function RoadSignsComparisonPage() {
  return (
    <>
      <NavHeader
        backHref={constants.paths.root}
        title="Biển báo hiệu đường bộ - So sánh"
      />
      <MainLayout className="pt-0 md:pt-0 px-4">
        <RoadSignsComparison />
      </MainLayout>
    </>
  )
}
