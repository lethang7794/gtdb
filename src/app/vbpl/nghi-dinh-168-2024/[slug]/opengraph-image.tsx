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
  if (explainDetail.type === 'chuong') {
    detail1 = `Chương ${explainDetail.chuong?.code_name || ''}. ${explainDetail.chuong?.full_name || ''}`
  }
  if (explainDetail.type === 'muc') {
    detail1 = `Chương ${explainDetail.chuong?.code_name || ''}. ${explainDetail.chuong?.full_name || ''}`
    detail2 = `Mục ${explainDetail.muc?.code_name || ''}. ${explainDetail.muc?.full_name || ''}`
  }
  if (explainDetail.type === 'dieu') {
    detail1 = `Điều ${explainDetail.dieu?.code_name || ''}. ${explainDetail.dieu?.full_name || ''}`
  }
  if (explainDetail.type === 'khoan') {
    detail1 = `Điều ${explainDetail.dieu?.code_name || ''}. ${explainDetail.dieu?.full_name || ''}`
    detail2 = `${explainDetail.khoan?.code_name || ''}. ${explainDetail.khoan?.full_name || ''}`
  }
  if (explainDetail.type === 'diem') {
    detail1 = `Điều ${explainDetail.dieu?.code_name || ''}. ${explainDetail.dieu?.full_name || ''}`
    detail2 = `${explainDetail.khoan?.code_name || ''}. ${explainDetail.khoan?.full_name || ''}`
    detail3 = `${explainDetail.diem?.code_name || ''}. ${explainDetail.diem?.full_name || ''}`
  }

  return new ImageResponse(
    <div
      style={{
        backgroundColor: '#212831',
        backgroundSize: '150px 150px',
        height: 630,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          fontSize: 48,
          fontStyle: 'normal',
          letterSpacing: '-0.025em',
          color: 'white',
          padding: '48px 60px 0 60px',
          lineHeight: 1.4,
        }}
      >
        {`${explain} | Nghị định 168/2024`}
      </div>
      <div
        style={{
          fontSize: 36,
          fontStyle: 'normal',
          letterSpacing: '-0.025em',
          color: 'white',
          marginTop: 24,
          padding: '0 60px 0 60px',
          lineHeight: 1.4,
          display: 'block',
          lineClamp: '2',
        }}
      >
        {detail1}
      </div>
      <div
        style={{
          fontSize: 36,
          fontStyle: 'normal',
          letterSpacing: '-0.025em',
          color: 'white',
          marginTop: 24,
          padding: '0 60px 0 84px',
          lineHeight: 1.4,
          display: 'block',
          lineClamp: '1',
        }}
      >
        {detail2}
      </div>
      <div
        style={{
          fontSize: 36,
          fontStyle: 'normal',
          letterSpacing: '-0.025em',
          color: 'white',
          marginTop: 24,
          padding: '0 60px 0 108px',
          lineHeight: 1.4,
          display: 'block',
          lineClamp: '3',
        }}
      >
        {detail3}
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    }
  )
}
