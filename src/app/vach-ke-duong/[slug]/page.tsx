import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { processStaticParams } from '@/lib/static-params'
import { MarkingImage } from '@/model/Marking'
import {
  getMarkingById,
  getMarkingImage,
  getMarkingItemsArray,
} from '@/service/marking'
import { constants } from '@/constant'
import { NavHeader } from '@/components/block/nav-header'

export async function generateStaticParams() {
  const items = await getMarkingItemsArray()
  const params = items.map((item) => ({ slug: `${item.id}` }))
  return processStaticParams(params, constants.paths.vachKeDuong.ROOT)
}

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug
  const item = await getMarkingById(slug)
  if (!item) {
    return { title: 'Not Found' }
  }

  return {
    title: `Vạch ${slug}: ${item.full_name}`,
    description: Array.isArray(item.meaning)
      ? item.meaning.reduce(
          (prev, cur) => prev + [cur.type, cur.meaning].join(': '),
          ''
        )
      : item.meaning,
    keywords: [
      `Vạch ${slug}`,
      `${item.full_name}`,
      'Vạch kẻ đường',
      'QCVN 41:2019/BGTVT',
      'Giao thông đường bộ',
    ],
    openGraph: {
      images: [item.image ? getMarkingImage(item) : ''],
    },
  }
}

export default async function MarkingPage({
  params,
}: {
  params: { slug: string }
}) {
  const slug = params.slug
  const marking = await getMarkingById(slug)
  if (!marking) {
    notFound()
  }

  return (
    <>
      <NavHeader
        backHref={constants.paths.vachKeDuong.ROOT}
        title={`${marking.short_name}. ${marking.full_name}`}
      />
      <div
        key={slug}
        className="flex grow flex-col items-center justify-start rounded-md border px-3 py-2"
      >
        <div className="flex w-full max-w-96 gap-4">
          {marking.image ? (
            <div className="relative aspect-square w-full">
              <Image
                alt={slug}
                fill={true}
                quality={100}
                src={getMarkingImage(marking)}
                className="mb-1 w-full object-contain object-center"
              />
            </div>
          ) : null}
          {marking.image_extra ? (
            <div className="relative aspect-square w-full">
              <Image
                fill={true}
                alt={slug}
                src={getMarkingImage(marking, { type: MarkingImage.extra })}
                className="mb-1 h-full object-contain"
              />
            </div>
          ) : null}
        </div>
        <div className="line-clamp-3 text-center leading-5 text-balance">
          {marking.full_name}
        </div>
        <div className="self-end text-xs text-gray-500 italic">{slug}</div>
        <div className="whitespace-pre-line">{marking.docs}</div>
      </div>
    </>
  )
}
