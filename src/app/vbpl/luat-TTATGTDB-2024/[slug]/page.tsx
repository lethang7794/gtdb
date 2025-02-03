import type { Metadata, ResolvingMetadata } from 'next'
import Image from 'next/image'
import BaseLink from '@/components/base-link'
import { NavHeader } from '@/components/block/nav-header'
import { getToken } from '@/lib/crypto'
import { processStaticParams } from '@/lib/static-params'
import { vbplSectionExplain } from '@/lib/vbpl-explain-section'
import {
  getLuatGT2024ById,
  getLuatGT2024OgImageById,
  getLuatGT2024s,
} from '@/service/luat-giao-thong-2024'
import { constants } from '@/constant'
import LuatTTATGTDB2024 from '@/content/luat-TTATGTDB-2024.mdx'
import '../style.css'

const LAW = constants.laws.luatGT2024
const PAGE_PATH = constants.paths.vbpl.LUAT_GT_2024
const SECTION_ZERO = constants.laws.VBPL_SECTION_ZERO

type Props = {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateStaticParams() {
  const items = await getLuatGT2024s()
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

  // const s = (await searchParams).s || ''
  // const section = decodeURI(Array.isArray(s) ? s[0] : s)

  const slug = (await params).slug
  const decodedSlug = decodeURI(slug)
  const section = decodedSlug

  const sectionItem = await getLuatGT2024ById(section || '')
  const sectionExplain = vbplSectionExplain(section).path

  return {
    title: [sectionExplain, LAW.short_name].filter(Boolean).join(' | '),
    description:
      sectionItem?.content_text ||
      sectionItem?.content ||
      'Luật này quy định về quy tắc, phương tiện, người tham gia giao thông đường bộ, chỉ huy, điều khiển, tuần tra, kiểm soát, giải quyết tai nạn giao thông đường bộ, trách nhiệm quản lý nhà nước và trách nhiệm của cơ quan, tổ chức, cá nhân có liên quan đến trật tự, an toàn giao thông đường bộ.',
    // openGraph: {
    //   images: `/api/og?l=${LAW}&s=${section}&t=${token}`,
    // },
    openGraph: {
      images: getLuatGT2024OgImageById(decodedSlug),
    },
  }
}

export default async function LuatTTATGTDB2024Page({
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
      <>
        <NavHeader
          backHref={constants.paths.vbpl.LUAT_GT_2024}
          title={`[Tóm tắt] ${sectionName}`}
        />
        <div className="container flex flex-col items-center">
          <div className="mt-8 w-full max-w-[1200px] overflow-hidden rounded-xl border-2 lg:rounded-4xl lg:border-4">
            <BaseLink href={`${PAGE_PATH}#${section}`} className="w-full">
              <div className="relative aspect-1200/630 w-full">
                <Image
                  fill={true}
                  quality={100}
                  alt={sectionName}
                  src={getLuatGT2024OgImageById(section)}
                  className="w-full object-contain"
                />
              </div>
            </BaseLink>
          </div>
          <div className="self-start sm:self-center mt-2 text-lg lg:text-3xl">
            <b>Tóm tắt</b> <i>{sectionName}</i>
          </div>
          <BaseLink
            href={`${PAGE_PATH}#${section}`}
            className="self-start sm:self-center"
          >
            <div className="mt-2 border-b-0! text-lg lg:text-3xl">
              (Xem <b>toàn văn</b> tại đây)
            </div>
          </BaseLink>
        </div>
      </>
    )
  }

  return (
    <div className="toc-hidden">
      <LuatTTATGTDB2024 />
    </div>
  )
}
