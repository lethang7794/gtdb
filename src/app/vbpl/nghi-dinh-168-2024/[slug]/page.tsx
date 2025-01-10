import type { Metadata, ResolvingMetadata } from 'next'
import NghiDinh1682024 from '@/content/nghi-dinh-168.mdx'
import { vbplSectionExplain } from '@/lib/vbpl-explain-section'
import { getND168ById, getND168s } from '@/service/nghi-dinh-168'
import './style.css'
import { env } from '@/env.mjs'

export async function generateStaticParams() {
  const roadSigns = await getND168s()
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
  const sectionItem = await getND168ById(section || '')
  const sectionExplain = vbplSectionExplain(section).path
  return {
    title: [sectionExplain, 'Nghị định 168/2024', env.NEXT_PUBLIC_BRAND]
      .filter(Boolean)
      .join(' | '),
    description: sectionItem?.full_name,
  }
}

export default async function NghiDinh1682024Page({
  params,
  searchParams,
}: Props) {
  return <NghiDinh1682024 />
}
