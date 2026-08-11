import type { Metadata } from 'next'
import NghiDinh1682024 from '@/content/nghi-dinh-168.mdx'
import { VBPL_SECTION_ZERO } from '@/constant/vbpl'
import { getND168OgImageById } from '@/service/nghi-dinh-168'
import './style.css'
import { NavHeader } from '@/components/block/nav-header'
import { VbplLayout } from '@/components/layout/vbpl-layout'
import NghiDinh168HDSD from './hdsd'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: ['Nghị định 168/2024'].filter(Boolean).join(' | '),
    description:
      'Quy định xử phạt vi phạm hành chính về trật tự, an toàn giao thông trong lĩnh vực giao thông đường bộ; trừ điểm phục hồi điểm giấy phép lái xe',
    keywords: [
      'Nghị định 168/2024',
      'Quy định xử phạt',
      'Xử phạt vi phạm hành chính',
      'Trật tự, an toàn giao thông',
      'Trừ điểm giấy phép lái xe',
      'Nghị định 168',
      '2024',
      'Nghị định',
      'Giao thông đường bộ',
    ],
    openGraph: {
      images: getND168OgImageById(VBPL_SECTION_ZERO),
    },
  }
}

export default async function NghiDinh1682024Page() {
  return (
    <>
      <NavHeader
        backHref={'/'}
        title="Nghị định 168/2024"
        rightItems={<NghiDinh168HDSD />}
      />
      <VbplLayout>
        <div className="toc-hidden">
          <NghiDinh1682024 />
        </div>
      </VbplLayout>
    </>
  )
}
