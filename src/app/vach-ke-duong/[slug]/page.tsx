import type { Metadata, ResolvingMetadata } from 'next'
import { getMarkings, getMarkingById, getMarkingImage } from '@/service/marking'
import { MarkingImage } from '@/model/Marking'

export async function generateStaticParams() {
  const markings = getMarkings()
  return Object.keys(markings).map((key) => ({ slug: key }))
}

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug
  const sign = getMarkingById(slug)
  if (!sign) {
    return { title: 'Not Found' }
  }

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []

  const pageTitle = `Vạch ${slug}: ${sign.full_name}`
  return {
    title: pageTitle,
    openGraph: {
      // images: ["/some-specific-page-image.jpg", ...previousImages],
    },
  }
}

export default async function MarkingPage({
  params,
}: {
  params: { slug: string }
}) {
  const slug = params.slug
  const marking = getMarkingById(slug)
  if (!marking) {
    return <>Not Found</>
  }

  return (
    <div
      key={slug}
      className="flex items-center justify-start flex-col border px-3 py-2 rounded-md"
    >
      <div className="flex gap-4 h-40">
        <img
          alt={slug}
          src={getMarkingImage(marking)}
          className="h-full object-contain object-bottom mb-1"
        />
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
