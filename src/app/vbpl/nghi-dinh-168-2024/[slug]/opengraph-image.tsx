import { LawSectionPreview } from '@/components/block/law-section-preview'
import { NghiDinh168PreviewRoot } from '@/components/block/nghi-dinh-168-preview-root'
import { nd168SectionExplainComponents } from '@/lib/nd-168-section-explain-detail'
import { isSectionZero } from '@/lib/vbpl-explain-section'
import { getND168ById } from '@/service/nghi-dinh-168'
import { ImageResponse } from 'next/og'

export default async function Image({ params }: { params: { slug: string } }) {
  const section = params.slug

  if (!section || isSectionZero(section) || !(await getND168ById(section))) {
    return new ImageResponse(<NghiDinh168PreviewRoot />, {
      width: 1200,
      height: 630,
    })
  }

  const { short1, short2, short3, detail1, detail2, detail3, highlight } =
    await nd168SectionExplainComponents(section)
  return new ImageResponse(
    <LawSectionPreview
      short1={short1}
      short2={short2}
      short3={short3}
      detail1={detail1}
      detail2={detail2}
      detail3={detail3}
      highlight={highlight}
      law="Nghị định 168/2024"
    />,
    {
      width: 1200,
      height: 630,
    }
  )
}
