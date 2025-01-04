import { getNghiDinh168MindMap } from '@/service/nghi-dinh-168-mind-map'
import Markmap from '@/components/markmap'
import './style.css'

export default async function BietTuongListPage() {
  const data = getNghiDinh168MindMap()

  return (
    <div className="h-full flex flex-col">
      <Markmap data={data} />
    </div>
  )
}
