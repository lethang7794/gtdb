export function explainShareLink(id?: string): string {
  if (!id) {
    return ''
  }
  if (id.match(/^(I|II|III|IV)$/)) {
    return `Chương ${id}`
  }
  if (id.match(/^(I|II|III|IV)\.(\d+)$/)) {
    const [chuong, muc] = id.split('.')
    return `Chương ${chuong}, mục ${muc}`
  }
  if (id.match(/^\d+$/)) {
    return `Điều ${id}`
  }
  if (id.match(/^\d+.\d+$/)) {
    const [dieu, khoan] = id.split('.')
    return `Khoản ${khoan}, điều ${dieu}`
  }
  if (id.match(/^\d+.\d+.(\w|đ)$/)) {
    const [dieu, khoan, diem] = id.split('.')
    return `Điểm ${diem}, khoản ${khoan}, điều ${dieu}`
  }
  return ''
}
