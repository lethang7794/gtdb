import {
  isChuong,
  isMuc,
  isDieu,
  isKhoan,
  isDiem,
} from '@/lib/nd-168-explain-section'
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
