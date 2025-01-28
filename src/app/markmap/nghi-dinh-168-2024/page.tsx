import Markmap from '@/components/markmap'
import { getMarkmapById } from '@/service/markmap'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nghị định 168/2024 - Tóm tắt',
  description:
    'Quy định xử phạt vi phạm hành chính về trật tự, an toàn giao thông trong lĩnh vực giao thông đường bộ; trừ điểm phục hồi điểm giấy phép lái xe',
}

export default async function NghiDinh168Mindmap() {
  const item = await getMarkmapById('nghi-dinh-168-2024')

  return <Markmap data={item.content} />
}
