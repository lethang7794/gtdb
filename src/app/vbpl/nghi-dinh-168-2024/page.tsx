import type { Metadata, ResolvingMetadata } from 'next'
import NghiDinh1682024 from '@/content/nghi-dinh-168.mdx'
import { getToken } from '@/lib/crypto'
import './style.css'
import { getND168ById } from '@/service/nghi-dinh-168'
import { vbplSectionExplain } from '@/lib/vbpl-explain-section'
import React from 'react'
import { constants } from '@/constant'

type Props = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

const LAW = constants.laws.nghiDinh168.id

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const token = getToken(LAW)

  const s = (await searchParams).s || ''
  const section = decodeURI(Array.isArray(s) ? s[0] : s)

  const sectionItem = await getND168ById(section || '')
  const sectionExplain = vbplSectionExplain(section).path

  return {
    title: [sectionExplain, 'Nghị định 168/2024'].filter(Boolean).join(' | '),
    description: sectionItem
      ? sectionItem.content
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
