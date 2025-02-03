import type { Metadata } from 'next'
import DanhSachVanBan from '@/content/VBPL.mdx'
import { MainLayout } from '@/components/layout/main-layout'
import { constants } from '@/constant'
import { NavHeader } from '@/components/block/nav-header'

export const metadata: Metadata = {
  title: 'Danh sách VBPL về GTĐB',
}

export default function DanhSachVanBanPage() {
  return (
    <>
      <NavHeader
        backHref={constants.paths.root}
        title="Danh sách VBPL về GTĐB"
      />
      <MainLayout>
        <div className="px-4">
          <DanhSachVanBan />
        </div>
      </MainLayout>
    </>
  )
}
