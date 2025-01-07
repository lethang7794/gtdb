import type { Metadata, ResolvingMetadata } from 'next'
import NghiDinh1682024 from '@/content/nghi-dinh-168.mdx'
import { explainShareLink } from '@/lib/explain-share-link'
import { NGHI_DINH_168_FULL_PATH } from '@/constant/path'
import { getND168ById, getND168s } from '@/service/nghi-dinh-168'
import './style.css'

export async function generateStaticParams() {
  const roadSigns = getND168s()
  return Object.keys(roadSigns).map((key) => ({ slug: key }))
}

type Props = {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const section = (await params).slug
  const sectionItem = getND168ById(section || '')

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []

  if (!sectionItem) {
    return {
      title: 'Nghị định 168/2024',
      description:
        'Quy định xử phạt vi phạm hành chính về trật tự, an toàn giao thông trong lĩnh vực giao thông đường bộ; trừ điểm phục hồi điểm giấy phép lái xe',
      openGraph: {
        images: [
          `/api/og?path=${NGHI_DINH_168_FULL_PATH}&section=${section}`,
          ...previousImages,
        ],
      },
    }
  }

  const sectionExplain = explainShareLink(section)
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
