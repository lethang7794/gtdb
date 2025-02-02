import type { Metadata } from 'next'
import RoadSignsComparison from '@/content/road-signs-comparison.mdx'
import { NavHeader } from '@/components/block/nav-header'
import { constants } from '@/constant'
import { VbplLayout } from '@/components/layout/vbpl-layout'

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
      <div className="relative flex h-full flex-col justify-between py-6 md:py-8">
        <div className="px-4">
          <RoadSignsComparison />
        </div>
      </div>
    </>
  )
}
