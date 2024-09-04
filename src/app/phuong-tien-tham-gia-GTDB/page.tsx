import { getVehicles } from '@/service/vehicle'
import Markmap from '@/components/markmap'
import ChuThich from './ChuThich'

export default async function BietTuongListPage() {
  const data = getVehicles()

  return (
    <div className="h-full flex flex-col">
      <Markmap data={data} extra={<ChuThich />} />
    </div>
  )
}
