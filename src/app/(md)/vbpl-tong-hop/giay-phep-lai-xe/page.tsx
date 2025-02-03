import type { Metadata } from 'next'
import GiayPhepLaiXe from '@/content/driving-license.mdx'
import { NavHeader } from '@/components/block/nav-header'
import { constants } from '@/constant'
import { MainLayout } from '@/components/layout/main-layout'

export const metadata: Metadata = {
  title: 'Giấy phép lái xe',
}

export default function GPLXPage() {
  return (
    <>
      <NavHeader backHref={constants.paths.root} title="Giấy phép lái xe" />
      <MainLayout>
        <div className="container px-4">
          <GiayPhepLaiXe />
        </div>
      </MainLayout>
    </>
  )
}
