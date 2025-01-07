export function explain168Section(id?: string):
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
  if (!id) {
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
      path: `Chương ${chuong}, mục ${muc}`,
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
      path: `Khoản ${khoan}, Điều ${dieu}`,
    }
  }
  if (isDiem(id)) {
    const [dieu, khoan, diem] = id.split('.')
    return {
      type: 'diem',
      path: `Điểm ${diem}, khoản ${khoan}, Điều ${dieu}`,
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
