import { getVehicles } from '@/service/vehicle'
import Markmap from '@/components/markmap'
import ChuThich from './ChuThich'
import './style.css'

export default async function BietTuongListPage() {
  const data = getVehicles()

  return <Markmap data={data} extra={<ChuThich />} />
}
