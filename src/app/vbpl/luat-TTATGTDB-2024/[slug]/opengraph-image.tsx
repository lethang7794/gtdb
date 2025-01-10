import { ImageResponse } from 'next/og'

import { luatGT2024SectionExplainComponents } from '@/lib/luat-gt-2024-section-explain-detail'
import { env } from '@/env.mjs'
import { Nd168SectionPreview } from './nd-168-section-preview'

export const size = {
  width: 1200,
  height: 630,
}
export const alt = `Luật Trật tự, an toàn giao thông đường bộ 2024 | ${env.NEXT_PUBLIC_BRAND}`
export const contentType = 'image/png'

export default async function Image({ params }: { params: { slug: string } }) {
  const slug = decodeURI(params.slug)
  const { short1, short2, short3, detail1, detail2, detail3, highlight } =
    await luatGT2024SectionExplainComponents(slug)

  return new ImageResponse(
    <Nd168SectionPreview
      short1={short1}
      short2={short2}
      short3={short3}
      detail1={detail1}
      detail2={detail2}
      detail3={detail3}
      highlight={highlight}
    />,
    {
      width: 1200,
      height: 630,
    }
  )
}
