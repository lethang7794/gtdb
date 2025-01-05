import { getVehicles } from '@/service/vehicle'
import Markmap from '@/components/markmap'
import ChuThich from './ChuThich'

export default async function BietTuongListPage() {
  const data = getVehicles()

  return <Markmap data={data} extra={<ChuThich />} />
}
