import type { Metadata, ResolvingMetadata } from 'next'
import {
  getMarkings,
  getMarkingById,
  getMarkingImage,
  getMarkingsArray,
} from '@/service/marking'
import { MarkingImage } from '@/model/Marking'
import { env } from '@/env.mjs'

export async function generateStaticParams() {
  const markings = await getMarkingsArray()
  return markings.map(([key]) => ({ slug: key }))
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
      className="flex items-center justify-start flex-col border px-3 py-2 rounded-md"
    >
      <div className="flex gap-4 h-40">
        {marking.image ? (
          <img
            alt={slug}
            src={getMarkingImage(marking)}
            className="h-full object-contain object-bottom mb-1"
          />
        ) : null}
        {marking.image_extra ? (
          <img
            alt={slug}
            src={getMarkingImage(marking, { type: MarkingImage.extra })}
            className="h-full object-contain mb-1"
          />
        ) : null}
      </div>
      <div className="line-clamp-3 text-balance text-center leading-5">
        {marking.full_name}
      </div>
      <div className="flex-grow" />
      <div className="self-end text-gray-500 text-xs italic">{slug}</div>
      <div className="whitespace-pre-line">{marking.docs}</div>
    </div>
  )
}
