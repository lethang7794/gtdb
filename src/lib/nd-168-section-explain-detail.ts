import type { TrafficLight } from '@/app/vbpl/nghi-dinh-168-2024/[slug]/nd-168-section-preview'
import {
  isChuong,
  isMuc,
  isDieu,
  isKhoan,
  isDiem,
} from '@/lib/vbpl-explain-section'
import type { ND168 } from '@/model/ND168'
import { getND168ById } from '@/service/nghi-dinh-168'

export async function nd168SectionExplainDetail(id?: string): Promise<{
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

export async function nd168SectionExplainComponents(slug: string) {
  const explainDetail = await nd168SectionExplainDetail(slug || '')

  let detail1 = ''
  let detail2 = ''
  let detail3 = ''
  let short1 = ''
  let short2 = ''
  let short3 = ''
  let highlight: TrafficLight = 'green'
  if (explainDetail.type === 'chuong') {
    short1 = `Chương ${explainDetail.chuong?.code_name || ''}`
    detail1 = `${short1}. ${explainDetail.chuong?.full_name || ''}`
    highlight = 'red'
  }
  if (explainDetail.type === 'muc') {
    short1 = `Chương ${explainDetail.chuong?.code_name || ''}`
    detail1 = `${short1}. ${explainDetail.chuong?.full_name || ''}`
    short2 = `Mục ${explainDetail.muc?.code_name || ''}`
    detail2 = `${short2}. ${explainDetail.muc?.full_name || ''}`
    highlight = 'yellow'
  }
  if (explainDetail.type === 'dieu') {
    short1 = `Điều ${explainDetail.dieu?.code_name || ''}`
    detail1 = `${short1}. ${explainDetail.dieu?.full_name || ''}`
    highlight = 'red'
  }
  if (explainDetail.type === 'khoan') {
    short1 = `Điều ${explainDetail.dieu?.code_name || ''}`
    detail1 = `${short1}. ${explainDetail.dieu?.full_name || ''}`
    short2 = `${explainDetail.khoan?.code_name || ''}`
    detail2 = `${short2}. ${explainDetail.khoan?.full_name || ''}`
    short2 = `Khoản ${short2}`
    highlight = 'yellow'
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

    highlight = 'green'
  }
  return { short1, short2, short3, detail1, detail2, detail3, highlight }
}
