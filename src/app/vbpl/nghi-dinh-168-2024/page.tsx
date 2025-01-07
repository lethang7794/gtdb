import type { Metadata, ResolvingMetadata } from 'next'
import NghiDinh1682024 from '@/content/168.2024.NĐ.CP.mdx'
import { explainShareLink } from '@/lib/explain-share-link'
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

  // fetch data
  // const product = await fetch(`https://.../${id}`).then((res) => res.json())

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []

  return {
    title: [
      explainShareLink(Array.isArray(section) ? section[0] : section),
      'Nghị định 168/2024',
    ]
      .filter(Boolean)
      .join(' | '),
    description:
      'Quy định xử phạt vi phạm hành chính về trật tự, an toàn giao thông trong lĩnh vực giao thông đường bộ; trừ điểm phục hồi điểm giấy phép lái xe',
    openGraph: {
      images: [`/api/og?section=${section}`, ...previousImages],
    },
  }
}

export default async function NghiDinh1682024Page({
  params,
  searchParams,
}: Props) {
  const ps = await params
  const sps = await searchParams
  console.log('NghiDinh1682024Page:', { ps, sps })

  return <NghiDinh1682024 />
}
