import type { Metadata, ResolvingMetadata } from 'next'
import LuatTTATGTDB2024 from '@/content/luat-TTATGTDB-2024.mdx'
import {
  getLuatGT2024ById,
  getLuatGT2024s,
} from '@/service/luat-giao-thong-2024'
import { vbplSectionExplain } from '@/lib/vbpl-explain-section'
import { env } from '@/env.mjs'
import { LAW_ABBR } from '@/constant/laws'
import { getToken } from '@/lib/crypto'
import '../style.css'
import { processStaticParams } from '@/lib/static-params'
import React from 'react'
import { unstable_cache } from 'next/cache'
import { constants } from '@/constant'
import { cacheWithRevalidate } from '@/lib/cache'

const LAW = LAW_ABBR.luatGT2024

type Props = {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateStaticParams() {
  const items = await getLuatGT2024s()
  const params = Object.keys(items).map((key) => ({ slug: key }))
  return processStaticParams(params)
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const token = getToken(LAW)

  // const s = (await searchParams).s || ''
  // const section = decodeURI(Array.isArray(s) ? s[0] : s)

  const slug = (await params).slug
  const decodedSlug = decodeURI(slug)
  const section = decodedSlug

  const sectionItem = await getLuatGT2024ById(section || '')
  const sectionExplain = vbplSectionExplain(section).path

  return {
    title: [sectionExplain, 'Luật TTATGTĐB 2024', env.NEXT_PUBLIC_BRAND_SHORT]
      .filter(Boolean)
      .join(' | '),
    description:
      sectionItem?.content ||
      'Luật này quy định về quy tắc, phương tiện, người tham gia giao thông đường bộ, chỉ huy, điều khiển, tuần tra, kiểm soát, giải quyết tai nạn giao thông đường bộ, trách nhiệm quản lý nhà nước và trách nhiệm của cơ quan, tổ chức, cá nhân có liên quan đến trật tự, an toàn giao thông đường bộ.',
    openGraph: {
      images: `/api/og?l=${LAW}&s=${section}&t=${token}`,
    },
  }
}

export default async function LuatTTATGTDB2024Page() {
  return (
    <div className="toc-hidden">
      <LuatTTATGTDB2024 />
    </div>
  )
}
