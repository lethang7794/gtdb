import { getVehicleXmind } from '@/service/vehicle-xmind'
import XmindRender from './xmind-render'

export default async function XmindExample() {
  const data = getVehicleXmind()

  return (
    <div className="flex h-full flex-col">
      <XmindRender fileURL="vehicles.xmind" />
    </div>
  )
}
