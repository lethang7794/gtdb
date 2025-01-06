import type { Metadata } from 'next'
import LuatTTATGTDB2024 from '@/content/luat-TTATGTDB-2024.mdx'

export const metadata: Metadata = {
  title: 'Luật Trật tự, an toàn giao thông đường bộ (Luật số: 36/2024/QH15)',
  description:
    'Luật này quy định về quy tắc, phương tiện, người tham gia giao thông đường bộ, chỉ huy, điều khiển, tuần tra, kiểm soát, giải quyết tai nạn giao thông đường bộ, trách nhiệm quản lý nhà nước và trách nhiệm của cơ quan, tổ chức, cá nhân có liên quan đến trật tự, an toàn giao thông đường bộ.',
}

export default function LuatTTATGTDB2024Page() {
  return <LuatTTATGTDB2024 />
}
