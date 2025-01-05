import { getNghiDinh168MindMap } from '@/service/nghi-dinh-168-mind-map'
import Markmap from '@/components/markmap'

export default async function NghiDinh168Mindmap() {
  const data = getNghiDinh168MindMap()

  return <Markmap data={data} />
}
