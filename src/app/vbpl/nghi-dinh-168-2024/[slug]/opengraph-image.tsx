import { ImageResponse } from 'next/og'

// export const runtime = 'edge'

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

// Image metadata
export const alt = 'About Acme' // TODO
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image({ params }: { params: { slug: string } }) {
  console.log('168 slug Image', { params })
  const explain = explain168Section(params.slug || '').path
  const explainDetail = await explainDetail168Section(params.slug || '')
  console.log({ explainDetail })

  let detail1 = ''
  let detail2 = ''
  let detail3 = ''
  if (explainDetail.type === 'chuong') {
    detail1 = explainDetail.chuong?.full_name || ''
  }
  if (explainDetail.type === 'muc') {
    detail1 = explainDetail.chuong?.full_name || ''
    detail2 = explainDetail.muc?.full_name || ''
  }
  if (explainDetail.type === 'dieu') {
    detail1 = explainDetail.dieu?.full_name || ''
  }
  if (explainDetail.type === 'khoan') {
    detail1 = explainDetail.dieu?.full_name || ''
    detail2 = explainDetail.khoan?.full_name || ''
  }
  if (explainDetail.type === 'diem') {
    detail1 = explainDetail.dieu?.full_name || ''
    detail2 = explainDetail.khoan?.full_name || ''
    detail3 = explainDetail.diem?.full_name || ''
  }

  return new ImageResponse(
    <div
      style={{
        backgroundColor: 'black',
        backgroundSize: '150px 150px',
        height: '100%',
        width: '100%',
        display: 'flex',
        // textAlign: 'center',
        // alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        flexWrap: 'nowrap',
      }}
    >
      {/* <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          justifyItems: 'center',
        }}
      >
        <img
          alt="Vercel"
          height={200}
          src="data:image/svg+xml,%3Csvg width='116' height='100' fill='white' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M57.5 0L115 100H0L57.5 0z' /%3E%3C/svg%3E"
          style={{ margin: '0 30px' }}
          width={232}
        />
      </div> */}
      <div
        style={{
          fontSize: 40,
          fontStyle: 'normal',
          letterSpacing: '-0.025em',
          color: 'white',
          // marginTop: 24,
          padding: '0 60px 0 60px',
          lineHeight: 1.4,
          // whiteSpace: 'pre-wrap',
        }}
      >
        {`${explain} | Nghị định 168/2024`}
      </div>
      <div
        style={{
          fontSize: 24,
          fontStyle: 'normal',
          letterSpacing: '-0.025em',
          color: 'white',
          marginTop: 30,
          padding: '0 120px',
          lineHeight: 1.4,
          // whiteSpace: 'pre-wrap',
        }}
      >
        {detail1}
      </div>
      <div
        style={{
          fontSize: 24,
          fontStyle: 'normal',
          letterSpacing: '-0.025em',
          color: 'white',
          marginTop: 30,
          padding: '0 120px',
          lineHeight: 1.4,
          // whiteSpace: 'pre-wrap',
        }}
      >
        {detail2}
      </div>
      <div
        style={{
          fontSize: 24,
          fontStyle: 'normal',
          letterSpacing: '-0.025em',
          color: 'white',
          marginTop: 30,
          padding: '0 120px',
          lineHeight: 1.4,
          // whiteSpace: 'pre-wrap',
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
