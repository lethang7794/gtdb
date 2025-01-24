import { LawSectionPreview } from '@/components/block/law-section-preview'
import { NghiDinh168PreviewRoot } from '@/components/block/nghi-dinh-168-preview-root'
import { constants } from '@/constant'
import { env } from '@/env.mjs'
import { nd168SectionExplainComponents } from '@/lib/nd-168-section-explain-detail'
import { processStaticParams } from '@/lib/static-params'
import { isSectionZero } from '@/lib/vbpl-explain-section'
import { getND168ById, getND168s } from '@/service/nghi-dinh-168'
import { ImageResponse } from 'next/og'

export async function generateStaticParams() {
  const items = await getND168s()
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
      law={constants.laws.nghiDinh168.short_name}
      id={section}
    />,
    {
      width: 1200,
      height: 630,
    }
  )
}
