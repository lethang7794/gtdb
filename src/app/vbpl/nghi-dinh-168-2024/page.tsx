import type { Metadata, ResolvingMetadata } from 'next'
import NghiDinh1682024 from '@/content/168.2024.NĐ.CP.mdx'
import './style.css'
// import { explainShareLink } from '@/components/block/anchor-link' // Doesn't work?

// export const metadata: Metadata = {
//   title: 'Nghị định 168/2024',
//   description:
//     'Quy định xử phạt vi phạm hành chính về trật tự, an toàn giao thông trong lĩnh vực giao thông đường bộ; trừ điểm phục hồi điểm giấy phép lái xe',
// }

type Props = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  console.log('🚀 ~ generateMetadata:', generateMetadata)
  const section = (await searchParams).section

  // fetch data
  // const product = await fetch(`https://.../${id}`).then((res) => res.json())

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []

  return {
    title: explainShareLink(section) + ' | Nghị định 168/2024',
    // openGraph: {
    //   images: ['/some-specific-page-image.jpg', ...previousImages],
    // },
  }
}

export default async function NghiDinh1682024Page({
  params,
  searchParams,
}: Props) {
  console.log('🚀 ~ NghiDinh1682024Page:', NghiDinh1682024Page)
  console.log({ params, searchParams })

  const ps = await params
  const sps = await searchParams
  console.log({ ps, sps })

  return <NghiDinh1682024 />
}

function explainShareLink(id: string): string {
  if (id.match(/^(I|II|III|IV)$/)) {
    return `Chương ${id}`
  }
  if (id.match(/^(I|II|III|IV)\.(\d+)$/)) {
    const [chuong, muc] = id.split('.')
    return `Chương ${chuong}, mục ${muc}`
  }
  if (id.match(/^\d+$/)) {
    return `Điều ${id}`
  }
  if (id.match(/^\d+.\d+$/)) {
    const [dieu, khoan] = id.split('.')
    return `Khoản ${khoan}, điều ${dieu}`
  }
  if (id.match(/^\d+.\d+.(\w|đ)$/)) {
    const [dieu, khoan, diem] = id.split('.')
    return `Điểm ${diem}, khoản ${khoan}, điều ${dieu}`
  }
  return ''
}
