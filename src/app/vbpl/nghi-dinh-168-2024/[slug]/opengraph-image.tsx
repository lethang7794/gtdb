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
    <div
      style={{
        // backgroundImage: 'linear-gradient(to bottom, #dbf4ff, #fff1f1)',
        backgroundColor: 'rgb(33, 40, 49)',
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
          display: 'flex',
          gap: 12,
          fontSize: 48,
          fontStyle: 'normal',
          letterSpacing: '-0.025em',
          color: 'white',
          padding: '48px 60px 0 60px',
          lineHeight: 1.4,
        }}
      >
        <div
          style={{
            color: 'white',
            border: '2px dashed red',
            borderRadius: '16px',
            padding: '0 8px',
          }}
        >
          {short1}
        </div>
        <div
          style={{
            color: 'white',
            border: '2px dashed yellow',
            borderRadius: '16px',
            padding: '0 8px',
          }}
        >
          {short2}
        </div>
        <div
          style={{
            color: 'white',
            border: '2px solid green',
            borderRadius: '16px',
            padding: '0 8px',
          }}
        >
          {short3}
        </div>
        <div
          style={{
            color: 'white',
            border: '2px dashed transparent',
            borderRadius: '16px',
            padding: '0 8px',
          }}
        >
          Nghị định 168/2024
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          padding: '0 60px 0 60px',
        }}
      >
        <div
          style={{
            fontSize: 36,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            marginTop: 24,
            lineHeight: 1.4,
            padding: '4px 8px 4px 8px',
            display: 'block',
            lineClamp: '2',
            color: 'white',
            border: '2px dashed red',
            borderRadius: '16px',
          }}
        >
          {detail1}
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          padding: '0 60px 0 60px',
        }}
      >
        <div
          style={{
            fontSize: 36,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            marginTop: 24,
            // padding: '0 60px 0 84px',
            padding: '4px 8px 4px 32px',
            lineHeight: 1.4,
            display: 'block',
            lineClamp: '1',
            color: 'white',
            border: '2px dashed yellow',
            borderRadius: '16px',
          }}
        >
          {detail2}
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          padding: '0 60px 0 60px',
        }}
      >
        <div
          style={{
            fontSize: 36,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            marginTop: 24,
            padding: '4px 8px 4px 56px',
            lineHeight: 1.4,
            display: 'block',
            lineClamp: '3',
            color: 'white',
            border: '2px solid green',
            borderRadius: '16px',
          }}
        >
          {detail3}
        </div>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    }
  )
}
