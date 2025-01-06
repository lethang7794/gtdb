import type { Metadata } from 'next'
import { getNghiDinh168MindMap } from '@/service/nghi-dinh-168-mind-map'
import Markmap from '@/components/markmap'

export const metadata: Metadata = {
  title: 'Nghị định 168/2024 - Tóm tắt',
  description:
    'Quy định xử phạt vi phạm hành chính về trật tự, an toàn giao thông trong lĩnh vực giao thông đường bộ; trừ điểm phục hồi điểm giấy phép lái xe',
}

export default async function NghiDinh168Mindmap() {
  const data = getNghiDinh168MindMap()

  return <Markmap data={data} />
}
