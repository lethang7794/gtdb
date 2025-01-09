import type { Metadata, ResolvingMetadata } from 'next'
import NghiDinh1682024 from '@/content/nghi-dinh-168.mdx'
import { nd168SectionExplain } from '@/lib/nd-168-explain-section'
import { getND168ById, getND168s } from '@/service/nghi-dinh-168'
import './style.css'

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
  const section = (await params).slug
  const sectionItem = await getND168ById(section || '')

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []

  const sectionExplain = nd168SectionExplain(section).path
  return {
    title: [sectionExplain, 'Nghị định 168/2024'].filter(Boolean).join(' | '),
    description: sectionItem?.full_name,
  }
}

export default async function NghiDinh1682024Page({
  params,
  searchParams,
}: Props) {
  return <NghiDinh1682024 />
}
