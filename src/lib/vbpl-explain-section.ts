import { VBPL_SECTION_ZERO } from '../constant/vbpl'

export function vbplSectionExplain(id?: string):
  | {
      type: 'chuong'
      path: string
    }
  | {
      type?: 'muc'
      path: string
    }
  | {
      type: 'dieu'
      path: string
    }
  | {
      type: 'khoan'
      path: string
    }
  | {
      type: 'diem'
      path: string
    }
  | {
      path: ''
    } {
  if (!id || isSectionZero(id)) {
    return { path: '' }
  }

  if (isChuong(id)) {
    return {
      type: 'chuong',
      path: `Chương ${id}`,
    }
  }
  if (isMuc(id)) {
    const [chuong, muc] = id.split('.')
    return {
      type: 'muc',
      path: `Mục ${muc} Chương ${chuong}`,
    }
  }
  if (isDieu(id)) {
    return {
      type: 'dieu',
      path: `Điều ${id}`,
    }
  }
  if (isKhoan(id)) {
    const [dieu, khoan] = id.split('.')
    return {
      type: 'khoan',
      path: `Khoản ${khoan} Điều ${dieu}`,
    }
  }
  if (isDiem(id)) {
    const [dieu, khoan, diem] = id.split('.')
    return {
      type: 'diem',
      path: `Điểm ${diem} khoản ${khoan} Điều ${dieu}`,
    }
  }

  return { path: '' }
}

export function isSectionZero(id: string) {
  return id === VBPL_SECTION_ZERO
}

export function isChuong(id: string) {
  return id.match(
    /^(?=[IVXLCDM]+$)M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/
  )
}

export function isMuc(id: string) {
  const [chapter, section, ...rest] = id.split('.')
  return Boolean(
    isChuong(chapter) && section && /^\d+$/.test(section) && rest.length === 0
  )
}

export function isDieu(id: string) {
  return id.match(/^\d+$/)
}

export function hasDieu(id: string, dieu: number) {
  return (
    (isDieu(id) || isKhoan(id) || isDiem(id)) &&
    id.split('.')[0] === String(dieu)
  )
}

export function isKhoan(id: string) {
  return id.match(/^\d+\.\d+$/)
}

export function isKhoanFirst(id: string) {
  return Boolean((isKhoan(id) || isDiem(id)) && id.split('.')[1] === '1')
}

export function isDiem(id: string) {
  return id.match(/^\d+\.\d+\.[a-zđ]$/)
}

export function isDiemFirst(id: string) {
  return id.match(/^\d+\.\d+\.a$/)
}
