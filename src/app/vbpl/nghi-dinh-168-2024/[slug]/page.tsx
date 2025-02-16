import type { Metadata, ResolvingMetadata } from 'next'
import Image from 'next/image'
import BaseLink from '@/components/base-link'
import { NavHeader } from '@/components/block/nav-header'
import { MainLayout } from '@/components/layout/main-layout'
import { getToken } from '@/lib/crypto'
import { processStaticParams } from '@/lib/static-params'
import { vbplSectionExplain } from '@/lib/vbpl-explain-section'
import {
  getND168ById,
  getND168OgImageById,
  getND168s,
} from '@/service/nghi-dinh-168'
import { constants } from '@/constant'
import NghiDinh1682024 from '@/content/nghi-dinh-168.mdx'
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
    const sectionContent = (await getND168ById(section))?.content || ''
    return (
      <>
        <NavHeader
          backHref={constants.paths.vbpl.NGHI_DINH_168}
          title={sectionName}
        />
        <MainLayout className="items-center container">
          <div className="w-full max-w-[1200px]  overflow-hidden rounded-xl lg:rounded-4xl border-2 lg:border-4">
            <BaseLink href={`${PAGE_PATH}#${section}`} className="">
              <div className="relative aspect-1200/630 w-full">
                <Image
                  fill={true}
                  quality={100}
                  alt={sectionName}
                  src={getND168OgImageById(section)}
                  className="w-full object-contain"
                />
              </div>
            </BaseLink>
          </div>
          <div className="self-start sm:self-center mt-4 text-lg lg:text-3xl">
            <div className="italic font-bold">{sectionName}</div>
            <div>&ldquo;{sectionContent}&rdquo;</div>
          </div>
          <BaseLink
            href={`${PAGE_PATH}#${section}`}
            className="self-start sm:self-center"
          >
            <div className="mt-2 border-b-0! text-lg lg:text-3xl">
              (Xem <b>toàn văn</b> tại đây)
            </div>
          </BaseLink>
        </MainLayout>
      </>
    )
  }

  return (
    <div className="toc-hidden">
      <NghiDinh1682024 />
    </div>
  )
}
