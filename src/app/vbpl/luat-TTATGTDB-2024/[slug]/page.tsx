import type { Metadata, ResolvingMetadata } from 'next'
import LuatTTATGTDB2024 from '@/content/luat-TTATGTDB-2024.mdx'
import {
  getLuatGT2024ById,
  getLuatGT2024s,
} from '@/service/luat-giao-thong-2024'
import { vbplSectionExplain } from '@/lib/vbpl-explain-section'
import { env } from '@/env.mjs'
import '../style.css'

export async function generateStaticParams() {
  const roadSigns = await getLuatGT2024s()
  const slugs = Object.keys(roadSigns)
    .map((key) => ({ slug: key }))
    .slice(0, 10) // TODO: remove for all slugs
  return slugs
}

type Props = {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = (await params).slug
  const section = decodeURI(slug)
  const sectionItem = await getLuatGT2024ById(section || '')
  const sectionExplain = vbplSectionExplain(section).path
  return {
    title: [sectionExplain, 'Luật TTATGTĐB 2024', env.NEXT_PUBLIC_BRAND_SHORT]
      .filter(Boolean)
      .join(' | '),
    description: sectionItem?.content,
  }
}

export default function LuatTTATGTDB2024Page() {
  return <LuatTTATGTDB2024 />
}
