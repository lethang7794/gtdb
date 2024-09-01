import type { Metadata, ResolvingMetadata } from 'next'
import {
  getRoadSignById,
  getRoadSignImage,
  getRoadSignsWithAroundById,
} from '@/service/road-sign'
import { getRoadSigns } from '@/service/road-sign'
import Link from 'next/link'

export async function generateStaticParams() {
  const roadSigns = getRoadSigns()
  return Object.keys(roadSigns).map((key) => ({ slug: key }))
}

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug
  const decodedSlug = slug.replace('%2C', ',')
  const sign = getRoadSignById(decodedSlug)
  if (!sign) {
    return { title: 'Not Found' }
  }

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []

  const pageTitle = `${decodedSlug}: ${sign.name}`
  return {
    title: pageTitle,
    openGraph: {
      // images: ["/some-specific-page-image.jpg", ...previousImages],
    },
  }
}

export default async function RoadSignPage({
  params,
}: {
  params: { slug: string }
}) {
  const slug = params.slug
  const decodedSlug = slug.replace('%2C', ',')
  const signWithAround = getRoadSignsWithAroundById(decodedSlug)
  console.log({ slug, decodedSlug, signWithAround })
  if (!signWithAround) {
    return <>Not Found</>
  }
  const sign = signWithAround.cur[1]
  const prev = signWithAround.prev
  const next = signWithAround.next

  const prevSignKey = prev?.[0]
  const nextSignKey = next?.[0]

  return (
    <div
      key={slug}
      className="flex items-center justify-start flex-col px-3 py-2 mt-4 rounded-md"
    >
      <img
        alt={slug}
        src={getRoadSignImage(sign)}
        className="h-[250px] w-full order-none object-contain object-bottom mb-1"
      />
      <div className="text-balance text-center leading-5">{sign.name}</div>
      <div className="flex-grow" />
      {/* <div className="text-balance text-center leading-5">{sign.docs_name}</div> */}
      <div className="flex justify-between w-full">
        {prevSignKey ? (
          <Link className="min-w-24" href={`/bbgt/${prevSignKey}`}>
            ← {prevSignKey}
          </Link>
        ) : (
          <div className="min-w-24" />
        )}
        <div className="text-gray-500 italic">{decodedSlug}</div>
        {nextSignKey ? (
          <Link className="min-w-24 text-right" href={`/bbgt/${nextSignKey}`}>
            {nextSignKey} →
          </Link>
        ) : (
          <div className="min-w-24" />
        )}
      </div>
    </div>
  )
}
