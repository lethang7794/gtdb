import {
  isChuong,
  isMuc,
  isDieu,
  isKhoan,
  isDiem,
} from '@/lib/vbpl-explain-section'
import type { LuatGT2024 } from '@/model/LuatGT2024'
import type { TrafficLight } from '@/model/TrafficLight'
import { getLuatGT2024ById } from '@/service/luat-giao-thong-2024'

export async function luatGT2024SectionExplainDetail(id?: string): Promise<{
  type?: 'chuong' | 'muc' | 'dieu' | 'khoan' | 'diem'
  path?: string
  chuong?: LuatGT2024
  muc?: LuatGT2024
  dieu?: LuatGT2024
  khoan?: LuatGT2024
  diem?: LuatGT2024
}> {
  if (!id) {
    return { path: '' }
  }

  const curDetail = await getLuatGT2024ById(id)

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
      chuong: await getLuatGT2024ById(chuong),
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
      dieu: await getLuatGT2024ById(dieu),
      khoan: curDetail,
    }
  }
  if (isDiem(id)) {
    const [dieu, khoan, diem] = id.split('.')
    return {
      type: 'diem',
      path: `Điểm ${diem}, khoản ${khoan}, Điều ${dieu}`,
      dieu: await getLuatGT2024ById(dieu),
      khoan: await getLuatGT2024ById(`${dieu}.${khoan}`),
      diem: curDetail,
    }
  }

  return { path: '' }
}

export async function luatGT2024SectionExplainComponents(slug: string) {
  const explainDetail = await luatGT2024SectionExplainDetail(slug || '')

  let detail1 = ''
  let detail2 = ''
  let detail3 = ''
  let short1 = ''
  let short2 = ''
  let short3 = ''
  let highlight: TrafficLight = 'green'
  if (explainDetail.type === 'chuong') {
    short1 = `Chương ${explainDetail.chuong?.cur_level || ''}`
    detail1 = `${short1}. ${explainDetail.chuong?.content || ''}`
    highlight = 'red'
  }
  if (explainDetail.type === 'muc') {
    short1 = `Chương ${explainDetail.chuong?.cur_level || ''}`
    detail1 = `${short1}. ${explainDetail.chuong?.content || ''}`
    short2 = `Mục ${explainDetail.muc?.cur_level || ''}`
    detail2 = `${short2}. ${explainDetail.muc?.content || ''}`
    highlight = 'yellow'
  }
  if (explainDetail.type === 'dieu') {
    short1 = `Điều ${explainDetail.dieu?.cur_level || ''}`
    detail1 = `${short1}. ${explainDetail.dieu?.content || ''}`
    highlight = 'red'
  }
  if (explainDetail.type === 'khoan') {
    short1 = `Điều ${explainDetail.dieu?.cur_level || ''}`
    detail1 = `${short1}. ${explainDetail.dieu?.content || ''}`
    short2 = `${explainDetail.khoan?.cur_level || ''}`
    detail2 = `${short2}. ${explainDetail.khoan?.content || ''}`
    short2 = `Khoản ${short2}`
    highlight = 'yellow'
  }
  if (explainDetail.type === 'diem') {
    short1 = `Điều ${explainDetail.dieu?.cur_level || ''}`
    detail1 = `${short1}. ${explainDetail.dieu?.content || ''}`

    short2 = `${explainDetail.khoan?.cur_level || ''}`
    detail2 = `${short2}. ${explainDetail.khoan?.content || ''}`
    short2 = `khoản ${short2}`

    short3 = `${explainDetail.diem?.cur_level || ''}`
    detail3 = `${short3}. ${explainDetail.diem?.content || ''}`
    short3 = `điểm ${short3}`

    highlight = 'green'
  }
  return { short1, short2, short3, detail1, detail2, detail3, highlight }
}
