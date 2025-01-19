import type { Metadata, ResolvingMetadata } from 'next'
import {
  getMarkings,
  getMarkingById,
  getMarkingImage,
  getMarkingsArray,
} from '@/service/marking'
import { MarkingImage } from '@/model/Marking'
import { env } from '@/env.mjs'
import Image from 'next/image'
import { processStaticParams } from '@/lib/static-params'

export async function generateStaticParams() {
  const items = await getMarkingsArray()
  const params = items.map(([key]) => ({ slug: key }))
  return processStaticParams(params)
}

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug
  const item = await getMarkingById(slug)
  if (!item) {
    return { title: 'Not Found' }
  }

  return {
    title: `Vạch ${slug}: ${item.full_name} | ${env.NEXT_PUBLIC_BRAND_SHORT}`,
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
    return <>Not Found</>
  }

  return (
    <div
      key={slug}
      className="flex-grow flex items-center justify-start flex-col border px-3 py-2 rounded-md"
    >
      <div className="flex gap-4 w-full max-w-96">
        {marking.image ? (
          <div className="relative aspect-square w-full">
            <Image
              alt={slug}
              fill={true}
              src={getMarkingImage(marking)}
              className="w-full object-contain object-center mb-1"
            />
          </div>
        ) : null}
        {marking.image_extra ? (
          <div className="relative aspect-square w-full">
            <Image
              fill={true}
              alt={slug}
              src={getMarkingImage(marking, { type: MarkingImage.extra })}
              className="h-full object-contain mb-1"
            />
          </div>
        ) : null}
      </div>
      <div className="line-clamp-3 text-balance text-center leading-5">
        {marking.full_name}
      </div>
      <div className="self-end text-gray-500 text-xs italic">{slug}</div>
      <div className="whitespace-pre-line">{marking.docs}</div>
    </div>
  )
}
