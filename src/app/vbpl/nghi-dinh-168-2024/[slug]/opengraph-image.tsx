import { ImageResponse } from 'next/og'

import {
  explain168Section,
  isChuong,
  isDiem,
  isDieu,
  isKhoan,
  isMuc,
} from '@/lib/explain-share-link'
import type { ND168 } from '@/model/ND168'
import { getND168ById } from '@/service/nghi-dinh-168'
import { Nd168SectionPreview } from './nd-168-section-preview'

export async function explainDetail168Section(id?: string): Promise<{
  type?: 'chuong' | 'muc' | 'dieu' | 'khoan' | 'diem'
  path?: string
  chuong?: ND168
  muc?: ND168
  dieu?: ND168
  khoan?: ND168
  diem?: ND168
}> {
  if (!id) {
    return { path: '' }
  }

  const curDetail = await getND168ById(id)

  if (isChuong(id)) {
    return {
      type: 'chuong',
      path: `Chương ${id}`,
      chuong: curDetail,
    }
  }
  if (isMuc(id)) {
    const [chuong, muc] = id.split('.')
    return {
      type: 'muc',
      path: `Chương ${chuong}, mục ${muc}`,
      chuong: await getND168ById(chuong),
      muc: curDetail,
    }
  }
  if (isDieu(id)) {
    return {
      type: 'dieu',
      path: `Điều ${id}`,
      dieu: curDetail,
    }
  }
  if (isKhoan(id)) {
    const [dieu, khoan] = id.split('.')
    return {
      type: 'khoan',
      path: `Khoản ${khoan}, Điều ${dieu}`,
      dieu: await getND168ById(dieu),
      khoan: curDetail,
    }
  }
  if (isDiem(id)) {
    const [dieu, khoan, diem] = id.split('.')
    return {
      type: 'diem',
      path: `Điểm ${diem}, khoản ${khoan}, Điều ${dieu}`,
      dieu: await getND168ById(dieu),
      khoan: await getND168ById(`${dieu}.${khoan}`),
      diem: curDetail,
    }
  }

  return { path: '' }
}

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image({ params }: { params: { slug: string } }) {
  const explain = explain168Section(params.slug || '').path
  const explainDetail = await explainDetail168Section(params.slug || '')

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
