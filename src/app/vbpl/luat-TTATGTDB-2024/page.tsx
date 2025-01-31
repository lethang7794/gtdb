import type { Metadata } from 'next'
import { constants } from '@/constant'
import LuatTTATGTDB2024 from '@/content/luat-TTATGTDB-2024.mdx'
import { getLuatGT2024OgImageById } from '@/service/luat-giao-thong-2024'
import { VBPL_SECTION_ZERO } from '@/constant/vbpl'
import './style.css'

const LAW = constants.laws.luatGT2024.id

type Props = {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const token = getToken(LAW)

  return {
    title: ['Luật TTATGTĐB 2024'].filter(Boolean).join(' | '),
    description:
      'Luật này quy định về quy tắc, phương tiện, người tham gia giao thông đường bộ, chỉ huy, điều khiển, tuần tra, kiểm soát, giải quyết tai nạn giao thông đường bộ, trách nhiệm quản lý nhà nước và trách nhiệm của cơ quan, tổ chức, cá nhân có liên quan đến trật tự, an toàn giao thông đường bộ.',
    openGraph: {
       images: getLuatGT2024OgImageById(VBPL_SECTION_ZERO)
    }
  }
}

export default async function LuatTTATGTDB2024Page() {
  return (
    <div className="toc-hidden">
      <LuatTTATGTDB2024 />
    </div>
  )
}
