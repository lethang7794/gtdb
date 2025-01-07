import type { Metadata, ResolvingMetadata } from 'next'
import NghiDinh1682024 from '@/content/nghi-dinh-168.mdx'
import { explain168Section } from '@/lib/explain-share-link'
import { NGHI_DINH_168_PATH } from '@/constant/path'
import { getND168ById } from '@/service/nghi-dinh-168'
import './style.css'

type Props = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const section = (await searchParams).section
  const firstSection = Array.isArray(section) ? section[0] : section
  const sectionItem = getND168ById(firstSection || '')

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []

  if (!sectionItem) {
    return {
      title: 'Nghị định 168/2024',
      description:
        'Quy định xử phạt vi phạm hành chính về trật tự, an toàn giao thông trong lĩnh vực giao thông đường bộ; trừ điểm phục hồi điểm giấy phép lái xe',
      openGraph: {
        images: [
          `/api/og?path=${NGHI_DINH_168_PATH}&section=${section}`,
          ...previousImages,
        ],
      },
    }
  }

  const sectionExplain = explain168Section(firstSection).path
  return {
    title: [sectionExplain, 'Nghị định 168/2024'].filter(Boolean).join(' | '),
    description: sectionItem.full_name,
  }
}

export default async function NghiDinh1682024Page({
  params,
  searchParams,
}: Props) {
  return <NghiDinh1682024 />
}
