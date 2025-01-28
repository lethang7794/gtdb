import { constants } from '@/constant'
import NghiDinh1682024 from '@/content/nghi-dinh-168.mdx'
import { env } from '@/env.mjs'
import { getToken } from '@/lib/crypto'
import type { Metadata, ResolvingMetadata } from 'next'
import './style.css'

type Props = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

const LAW = constants.laws.nghiDinh168.id
const PAGE_PATH = constants.paths.vbpl.NGHI_DINH_168

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const token = getToken(LAW)

  return {
    title: ['Nghị định 168/2024'].filter(Boolean).join(' | '),
    description:
      'Quy định xử phạt vi phạm hành chính về trật tự, an toàn giao thông trong lĩnh vực giao thông đường bộ; trừ điểm phục hồi điểm giấy phép lái xe',
    openGraph:
      env.NEXT_PUBLIC_OUTPUT_EXPORT === 'true'
        ? { images: `/og${PAGE_PATH}/0/og.png` }
        : { images: `${PAGE_PATH}/0/og.png` },
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
