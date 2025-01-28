import { constants } from '@/constant'
import LuatTTATGTDB2024 from '@/content/luat-TTATGTDB-2024.mdx'
import { env } from '@/env.mjs'
import { getToken } from '@/lib/crypto'
import type { Metadata, ResolvingMetadata } from 'next'
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
    openGraph:
      env.NEXT_PUBLIC_OUTPUT_EXPORT === 'true'
        ? { images: '/og/vbpl/luat-TTATGTDB-2024/0/og.png' }
        : { images: '/vbpl/luat-TTATGTDB-2024/0/og.png' },
  }
}

export default async function LuatTTATGTDB2024Page() {
  return (
    <div className="toc-hidden">
      <LuatTTATGTDB2024 />
    </div>
  )
}
