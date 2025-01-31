import type { Metadata, ResolvingMetadata } from 'next'
import { getToken } from '@/lib/crypto'
import { constants } from '@/constant'
import NghiDinh1682024 from '@/content/nghi-dinh-168.mdx'
import { VBPL_SECTION_ZERO } from '@/constant/vbpl'
import { getND168OgImageById } from '@/service/nghi-dinh-168'
import './style.css'

const LAW = constants.laws.nghiDinh168.id

type Props = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const token = getToken(LAW)

  return {
    title: ['Nghị định 168/2024'].filter(Boolean).join(' | '),
    description:
      'Quy định xử phạt vi phạm hành chính về trật tự, an toàn giao thông trong lĩnh vực giao thông đường bộ; trừ điểm phục hồi điểm giấy phép lái xe',
    openGraph: {
       images: getND168OgImageById(VBPL_SECTION_ZERO)
    }
  }
}

export default async function NghiDinh1682024Page({
  params,
  searchParams,
}: Props) {
  return (
    <div className="toc-hidden">
      <NghiDinh1682024 />
    </div>
  )
}
