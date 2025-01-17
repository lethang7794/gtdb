import { LawSectionPreview } from '@/components/block/law-section-preview'
import { LuatGT2024PreviewRoot } from '@/components/block/luat-gt-2024-preview-root'
import { constants } from '@/constant'
import { luatGT2024SectionExplainComponents } from '@/lib/luat-gt-2024-section-explain-detail'
import { isSectionZero } from '@/lib/vbpl-explain-section'
import { getLuatGT2024ById } from '@/service/luat-giao-thong-2024'
import { ImageResponse } from 'next/og'

export default async function Image({ params }: { params: { slug: string } }) {
  const section = params.slug

  if (
    !section ||
    isSectionZero(section) ||
    !(await getLuatGT2024ById(section))
  ) {
    return new ImageResponse(<LuatGT2024PreviewRoot />, {
      width: 1200,
      height: 630,
    })
  }

  const { short1, short2, short3, detail1, detail2, detail3, highlight } =
    await luatGT2024SectionExplainComponents(section)

  return new ImageResponse(
    <LawSectionPreview
      short1={short1}
      short2={short2}
      short3={short3}
      detail1={detail1}
      detail2={detail2}
      detail3={detail3}
      highlight={highlight}
      law={constants.laws.luatGT2024.short_name}
    />,
    {
      width: 1200,
      height: 630,
    }
  )
}
