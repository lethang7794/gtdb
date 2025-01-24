import React from 'react'
import type { Metadata, ResolvingMetadata } from 'next'
import LuatTTATGTDB2024 from '@/content/luat-TTATGTDB-2024.mdx'
import {
  getLuatGT2024ById,
  getLuatGT2024s,
} from '@/service/luat-giao-thong-2024'
import { vbplSectionExplain } from '@/lib/vbpl-explain-section'
import { env } from '@/env.mjs'
import { getToken } from '@/lib/crypto'
import { processStaticParams } from '@/lib/static-params'
import '../style.css'
import { constants } from '@/constant'
import Link from 'next/link'
import { stripMarkdown } from '@/lib/strip-markdown'

const LAW = constants.laws.luatGT2024
const PAGE_PATH = constants.paths.vbpl.LUAT_GT_2024

type Props = {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateStaticParams() {
  const items = await getLuatGT2024s()
  const params = Object.keys(items).map((key) => ({ slug: key }))
  return processStaticParams(
    [{ slug: '0' }, ...params],
    `${constants.paths.vbpl.LUAT_GT_2024}/[slug]`
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
      (await stripMarkdown(sectionItem?.content)) ||
      'Luật này quy định về quy tắc, phương tiện, người tham gia giao thông đường bộ, chỉ huy, điều khiển, tuần tra, kiểm soát, giải quyết tai nạn giao thông đường bộ, trách nhiệm quản lý nhà nước và trách nhiệm của cơ quan, tổ chức, cá nhân có liên quan đến trật tự, an toàn giao thông đường bộ.',
    // openGraph: {
    //   images: `/api/og?l=${LAW}&s=${section}&t=${token}`,
    // },
    openGraph: {
      images: `/vbpl/luat-TTATGTDB-2024/${decodedSlug}/og.png`,
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

  if (section !== '0') {
    const sectionExplain = vbplSectionExplain(section).path

    const sectionName = `${sectionExplain} ${LAW.short_name}`
    return (
      <div className="flex flex-col items-center">
        <Link href={`${PAGE_PATH}#${section}`} className="w-full">
          <div className="relative aspect-[1200/630] w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt={sectionName}
              src={`${PAGE_PATH}/${section}/og.png`}
              className="w-full object-contain"
            />
          </div>
        </Link>
        <Link href={`${PAGE_PATH}#${section}`} className="mx-auto">
          <h2 className="!border-b-0">
            Toàn văn <i>{sectionName}</i>
          </h2>
        </Link>
      </div>
    )
  }

  return (
    <div className="toc-hidden">
      <LuatTTATGTDB2024 />
    </div>
  )
}
