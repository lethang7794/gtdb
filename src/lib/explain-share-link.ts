import type { ND168 } from '@/model/ND168'
import { getND168ById } from '@/service/nghi-dinh-168'

export function explain168Section(id?: string):
  | {
      type: 'chuong'
      path: string
      chuong?: ND168
    }
  | {
      type?: 'muc'
      path: string
      chuong?: ND168
      muc?: ND168
    }
  | {
      type: 'dieu'
      path: string
      dieu?: ND168
    }
  | {
      type: 'khoan'
      path: string
      dieu?: ND168
      khoan?: ND168
    }
  | {
      type: 'diem'
      path: string
      dieu?: ND168
      khoan?: ND168
      diem?: ND168
    }
  | {
      path: ''
    } {
  if (!id) {
    return { path: '' }
  }

  const curDetail = getND168ById(id)

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
      chuong: getND168ById(chuong),
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
      dieu: curDetail,
      khoan: getND168ById(khoan),
    }
  }
  if (isDiem(id)) {
    const [dieu, khoan, diem] = id.split('.')
    return {
      type: 'diem',
      path: `Điểm ${diem}, khoản ${khoan}, Điều ${dieu}`,
      dieu: getND168ById(dieu),
      khoan: getND168ById(khoan),
      diem: curDetail,
    }
  }

  return { path: '' }
}

function isChuong(id: string) {
  return id.match(/^(I|II|III|IV)$/)
}

function isMuc(id: string) {
  return id.match(/^(I|II|III|IV)\.(\d+)$/)
}

function isDieu(id: string) {
  return id.match(/^\d+$/)
}

function isKhoan(id: string) {
  return id.match(/^\d+.\d+$/)
}

function isDiem(id: string) {
  return id.match(/^\d+.\d+.(\w|đ)$/)
}
