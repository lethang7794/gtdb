import Markmap from '@/components/markmap'
import { getVehicles } from '@/service/vehicle'
import ChuThich from './ChuThich'

export default async function BietTuongListPage() {
  const data = await getVehicles()

  return <Markmap data={data} extra={<ChuThich />} />
}
