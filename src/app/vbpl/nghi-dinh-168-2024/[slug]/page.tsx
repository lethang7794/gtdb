import React from 'react'
import type { Metadata, ResolvingMetadata } from 'next'
import NghiDinh1682024 from '@/content/nghi-dinh-168.mdx'
import { env } from '@/env.mjs'
import { getToken } from '@/lib/crypto'
import { LAW_ABBR } from '@/constant/laws'
import { getND168ById, getND168s } from '@/service/nghi-dinh-168'
import { vbplSectionExplain } from '@/lib/vbpl-explain-section'
import { processStaticParams } from '@/lib/static-params'
import '../style.css'

type Props = {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

const LAW = LAW_ABBR.nghiDinh168

export async function generateStaticParams() {
  const items = await getND168s()
  const params = Object.keys(items).map((key) => ({ slug: key }))
  return processStaticParams(params)
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const token = getToken(LAW)
  const slug = (await params).slug
  const decodedSlug = decodeURI(slug)

  // const s = (await searchParams).s || ''
  // const section = decodeURI(Array.isArray(s) ? s[0] : s)

  const section = decodedSlug
  const sectionItem = await getND168ById(section || '')
  const sectionExplain = vbplSectionExplain(section).path

  return {
    title: [sectionItem && sectionExplain, 'Nghị định 168/2024']
      .filter(Boolean)
      .join(' | '),
    description: sectionItem
      ? sectionItem.full_name
      : 'Quy định xử phạt vi phạm hành chính về trật tự, an toàn giao thông trong lĩnh vực giao thông đường bộ; trừ điểm phục hồi điểm giấy phép lái xe',
    // openGraph: {
    //   images: `/api/og?l=${LAW}&s=${section}&t=${token}`,
    // },
  }
}

export default async function NghiDinh1682024Page({
  params,
  searchParams,
}: Props) {
  return (
    <div className="toc-hidden">
      <NghiDinh1682024 />
    </div>
  )
}
