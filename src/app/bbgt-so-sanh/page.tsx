import type { Metadata } from 'next'
import RoadSignsComparison from '@/content/road-signs-comparison.mdx'

export const metadata: Metadata = {
  title: 'Biển báo giao thông - So sánh hiệu lực tác dụng',
}

export default function RoadSignsComparisonPage() {
  return <RoadSignsComparison />
}
