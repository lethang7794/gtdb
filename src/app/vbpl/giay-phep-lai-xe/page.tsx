import type { Metadata } from 'next'
import GiayPhepLaiXe from '@/content/driving-license.mdx'

export const metadata: Metadata = {
  title: 'Giấy phép lái xe',
}

export default function LuatTTATGTDB2024Page() {
  return <GiayPhepLaiXe />
}
