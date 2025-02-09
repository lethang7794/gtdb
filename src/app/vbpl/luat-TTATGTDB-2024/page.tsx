import type { Metadata, ResolvingMetadata } from 'next'
import { VBPL_SECTION_ZERO } from '@/constant/vbpl'
import { getLuatGT2024OgImageById } from '@/service/luat-giao-thong-2024'
import { constants } from '@/constant'
import LuatTTATGTDB2024 from '@/content/luat-TTATGTDB-2024.mdx'
import './style.css'
import { NavHeader } from '@/components/block/nav-header'
import { VbplLayout } from '@/components/layout/vbpl-layout'
import NghiDinh168HDSD from '../nghi-dinh-168-2024/hdsd'

const LAW = constants.laws.luatGT2024

type Props = {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    title: LAW.short_name,
    description:
      'Luật này quy định về quy tắc, phương tiện, người tham gia giao thông đường bộ, chỉ huy, điều khiển, tuần tra, kiểm soát, giải quyết tai nạn giao thông đường bộ, trách nhiệm quản lý nhà nước và trách nhiệm của cơ quan, tổ chức, cá nhân có liên quan đến trật tự, an toàn giao thông đường bộ.',
    openGraph: {
      images: getLuatGT2024OgImageById(VBPL_SECTION_ZERO),
    },
  }
}

export default async function LuatTTATGTDB2024Page() {
  return (
    <>
      <NavHeader
        backHref={'/'}
        title={LAW.short_name}
        rightItems={<NghiDinh168HDSD />}
      />
      <VbplLayout>
        <div className="toc-hidden">
          <LuatTTATGTDB2024 />
        </div>
      </VbplLayout>
    </>
  )
}
