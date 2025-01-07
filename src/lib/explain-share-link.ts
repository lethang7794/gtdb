export function explain168Section(id?: string): { path: string } {
  if (!id) {
    return { path: '' }
  }
  if (id.match(/^(I|II|III|IV)$/)) {
    return { path: `Chương ${id}` }
  }
  if (id.match(/^(I|II|III|IV)\.(\d+)$/)) {
    const [chuong, muc] = id.split('.')
    return { path: `Chương ${chuong}, mục ${muc}` }
  }
  if (id.match(/^\d+$/)) {
    return { path: `Điều ${id}` }
  }
  if (id.match(/^\d+.\d+$/)) {
    const [dieu, khoan] = id.split('.')
    return { path: `Khoản ${khoan}, điều ${dieu}` }
  }
  if (id.match(/^\d+.\d+.(\w|đ)$/)) {
    const [dieu, khoan, diem] = id.split('.')
    return { path: `Điểm ${diem}, khoản ${khoan}, điều ${dieu}` }
  }
  return { path: '' }
}
