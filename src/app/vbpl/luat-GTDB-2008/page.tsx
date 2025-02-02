import type { Metadata } from 'next'
import LuatGTDB2008 from '@/content/luat-GTDB-2008.mdx'
import { VbplLayout } from '@/components/layout/vbpl-layout'
import { NavHeader } from '@/components/block/nav-header'
import { constants } from '@/constant'

const LAW = constants.laws.luatGT2008
const PATH = constants.paths

export const metadata: Metadata = {
  title: LAW.short_name,
}

export default function LuatGTDB2008Page() {
  return (
    <>
      <NavHeader backHref={PATH.root} title={LAW.short_name} />
      <VbplLayout>
        <LuatGTDB2008 />
      </VbplLayout>
    </>
  )
}
