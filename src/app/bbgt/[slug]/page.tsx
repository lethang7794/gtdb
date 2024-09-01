import type { Metadata, ResolvingMetadata } from 'next'
import { getRoadSignById, getRoadSignImage } from '@/service/road-sign'
import { getRoadSigns } from '@/service/road-sign'

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
  const sign = getRoadSignById(slug)
  if (!sign) {
    return { title: 'Not Found' }
  }

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []

  const pageTitle = `${slug}: ${sign.name}`
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
  const sign = getRoadSignById(slug)
  if (!sign) {
    return <>Not Found</>
  }

  return (
    <div
      key={slug}
      className="flex items-center justify-start flex-col px-3 py-2 mt-4 rounded-md"
    >
      <img
        alt={slug}
        src={getRoadSignImage(sign)}
        className="max-h-[250px] w-full order-none object-contain object-bottom mb-1"
      />
      <div className="line-clamp-3 text-balance text-center leading-5">
        {sign.name}
      </div>
      <div className="flex-grow" />
      <div className="self-end text-gray-500 text-xs italic">{slug}</div>
    </div>
  )
}
