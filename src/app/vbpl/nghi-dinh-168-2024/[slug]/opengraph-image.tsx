import { ImageResponse } from 'next/og'

import { nd168SectionExplain } from '@/lib/nd-168-explain-section'
import { Nd168SectionPreview } from './nd-168-section-preview'
import { nd168SectionExplainDetail } from './nd-168-section-explain-detail'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image({ params }: { params: { slug: string } }) {
  const explain = nd168SectionExplain(params.slug || '').path
  const explainDetail = await nd168SectionExplainDetail(params.slug || '')

  let detail1 = ''
  let detail2 = ''
  let detail3 = ''
  let short1 = ''
  let short2 = ''
  let short3 = ''
  if (explainDetail.type === 'chuong') {
    short2 = `Chương ${explainDetail.chuong?.code_name || ''}`
    detail2 = `${short2}. ${explainDetail.chuong?.full_name || ''}`
  }
  if (explainDetail.type === 'muc') {
    short3 = `Chương ${explainDetail.chuong?.code_name || ''}`
    detail1 = `${short3}. ${explainDetail.chuong?.full_name || ''}`
    short1 = `Mục ${explainDetail.muc?.code_name || ''}`
    detail3 = `${short1}. ${explainDetail.muc?.full_name || ''}`
  }
  if (explainDetail.type === 'dieu') {
    short2 = `Điều ${explainDetail.dieu?.code_name || ''}`
    detail2 = `${short2}. ${explainDetail.dieu?.full_name || ''}`
  }
  if (explainDetail.type === 'khoan') {
    short1 = `Điều ${explainDetail.dieu?.code_name || ''}`
    detail1 = `${short1}. ${explainDetail.dieu?.full_name || ''}`
    short3 = `${explainDetail.khoan?.code_name || ''}`
    detail3 = `${short3}. ${explainDetail.khoan?.full_name || ''}`
    short3 = `Khoản ${short3}`
  }
  if (explainDetail.type === 'diem') {
    short1 = `Điều ${explainDetail.dieu?.code_name || ''}`
    detail1 = `${short1}. ${explainDetail.dieu?.full_name || ''}`

    short2 = `${explainDetail.khoan?.code_name || ''}`
    detail2 = `${short2}. ${explainDetail.khoan?.full_name || ''}`
    short2 = `khoản ${short2}`

    short3 = `${explainDetail.diem?.code_name || ''}`
    detail3 = `${short3}. ${explainDetail.diem?.full_name || ''}`
    short3 = `điểm ${short3}`
  }

  return new ImageResponse(
    <Nd168SectionPreview
      short1={short1}
      short2={short2}
      short3={short3}
      detail1={detail1}
      detail2={detail2}
      detail3={detail3}
    />,
    {
      width: 1200,
      height: 630,
    }
  )
}
