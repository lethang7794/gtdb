import type { Metadata } from 'next'
import Markmap from '@/components/markmap'
import { getLuatGT2024MindMap } from '@/service/luat-giao-thong-2024'

export const metadata: Metadata = {
  title:
    'Luật Trật tự, an toàn giao thông đường bộ 2024 (Có hiệu lực từ 1/1/2025) - Tóm tắt',
  description:
    'Luật này quy định về quy tắc, phương tiện, người tham gia giao thông đường bộ, chỉ huy, điều khiển, tuần tra, kiểm soát, giải quyết tai nạn giao thông đường bộ, trách nhiệm quản lý nhà nước và trách nhiệm của cơ quan, tổ chức, cá nhân có liên quan đến trật tự, an toàn giao thông đường bộ.',
}

export default async function LuatGT2024Mindmap() {
  const data = await getLuatGT2024MindMap()

  return <Markmap data={data} />
}
