import type { Metadata } from 'next'
import DanhSachVanBan from '@/content/VBPL.mdx'

export const metadata: Metadata = {
  title: 'Danh sách VBPL về GTĐB',
}

export default function DanhSachVanBanPage() {
  return <DanhSachVanBan />
}
