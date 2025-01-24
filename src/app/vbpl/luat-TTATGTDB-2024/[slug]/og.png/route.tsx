import { LawSectionPreview } from '@/components/block/law-section-preview'
import { LuatGT2024PreviewRoot } from '@/components/block/luat-gt-2024-preview-root'
import { constants } from '@/constant'
import { env } from '@/env.mjs'
import { luatGT2024SectionExplainComponents } from '@/lib/luat-gt-2024-section-explain-detail'
import { processStaticParams } from '@/lib/static-params'
import { isSectionZero } from '@/lib/vbpl-explain-section'
import {
  getLuatGT2024ById,
  getLuatGT2024s,
} from '@/service/luat-giao-thong-2024'
import { ImageResponse } from 'next/og'

export async function generateStaticParams() {
  const items = await getLuatGT2024s()
  const params = Object.keys(items).map((key) => ({ slug: key }))

  // generateStaticParams needs at least one element
  if (env.NEXT_PUBLIC_BUILD_OG_IMAGES !== 'true') {
    return [{ slug: '0' }]
  }

  return processStaticParams(
    [{ slug: '0' }, ...params],
    `${constants.paths.vbpl.LUAT_GT_2024}/[slug]/og.png`
  )
}

export async function GET(
  req: Request,
  { params }: { params: { slug: string } }
) {
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
