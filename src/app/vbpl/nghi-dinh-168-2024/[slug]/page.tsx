import type { Metadata, ResolvingMetadata } from 'next'
import { getToken } from '@/lib/crypto'
import { processStaticParams } from '@/lib/static-params'
import { vbplSectionExplain } from '@/lib/vbpl-explain-section'
import { getND168ById, getND168OgImageById, getND168s } from '@/service/nghi-dinh-168'
import { constants } from '@/constant'
import NghiDinh1682024 from '@/content/nghi-dinh-168.mdx'
import BaseLink from '@/components/base-link'
import '../style.css'

type Props = {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

const LAW = constants.laws.nghiDinh168
const PAGE_PATH = constants.paths.vbpl.NGHI_DINH_168
const SECTION_ZERO = constants.laws.VBPL_SECTION_ZERO

export async function generateStaticParams() {
  const items = await getND168s()
  const params = Object.keys(items).map((key) => ({ slug: key }))
  return processStaticParams(
    [{ slug: SECTION_ZERO }, ...params],
    `${PAGE_PATH}/[slug]`
  )
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const token = getToken(LAW.id)
  const slug = (await params).slug
  const decodedSlug = decodeURI(slug)

  // const s = (await searchParams).s || ''
  // const section = decodeURI(Array.isArray(s) ? s[0] : s)

  const section = decodedSlug
  const sectionItem = await getND168ById(section || '')
  const sectionExplain = vbplSectionExplain(section).path

  return {
    title: [sectionItem && sectionExplain, LAW.short_name]
      .filter(Boolean)
      .join(' | '),
    description: sectionItem
      ? sectionItem.content
      : 'Quy định xử phạt vi phạm hành chính về trật tự, an toàn giao thông trong lĩnh vực giao thông đường bộ; trừ điểm phục hồi điểm giấy phép lái xe',
    // openGraph: {
    //   images: `/api/og?l=${LAW}&s=${section}&t=${token}`,
    // },
    openGraph: {
      images: getND168OgImageById(decodedSlug),
    },
  }
}

export default async function NghiDinh1682024Page({
  params,
  searchParams,
}: Props) {
  const slug = (await params).slug
  const decodedSlug = decodeURI(slug)
  const section = decodedSlug

  if (section !== SECTION_ZERO) {
    const sectionExplain = vbplSectionExplain(section).path

    const sectionName = `${sectionExplain} ${LAW.short_name}`
    return (
      <div className="flex flex-col items-center">
        <BaseLink href={`${PAGE_PATH}#${section}`} className="w-full">
          <div className="relative aspect-1200/630 w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt={sectionName}
              src={getND168OgImageById(section)}
              className="w-full object-contain"
            />
          </div>
        </BaseLink>
        <BaseLink href={`${PAGE_PATH}#${section}`} className="mx-auto">
          <h2 className="border-b-0!">
            Toàn văn <i>{sectionName}</i>
          </h2>
        </BaseLink>
      </div>
    )
  }

  return (
    <div className="toc-hidden">
      <NghiDinh1682024 />
    </div>
  )
}

