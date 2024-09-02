import type { Metadata, ResolvingMetadata } from 'next'
import Link from 'next/link'
import { serialize } from 'next-mdx-remote/serialize'
import type { MDXRemoteSerializeResult } from 'next-mdx-remote'
import {
  getRoadSignById,
  getRoadSignImage,
  getRoadSignsWithAroundById,
} from '@/service/road-sign'
import { getRoadSigns } from '@/service/road-sign'
import { MDX } from '@/components/mdx/mdx'

export async function generateStaticParams() {
  const roadSigns = getRoadSigns()
  return Object.keys(roadSigns).map((key) => ({ slug: key }))
}

type Props = {
  params: { slug: string }
  mdxSource: MDXRemoteSerializeResult
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

export default async function RoadSignPage({ params }: Props) {
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

  const mdxSource = await serialize(sign.docs || '')

  return (
    <div
      key={slug}
      className="flex items-center justify-start flex-col px-3 py-2 mt-4 mb-4 rounded-md"
    >
      <div className="container py-4 px-6 mb-6 rounded-xl shadow-lg">
        <img
          alt={slug}
          src={getRoadSignImage(sign)}
          className="h-[250px] w-full order-none object-contain object-bottom mb-1"
        />
        <div className="text-balance text-center leading-5">{sign.name}</div>
        <br />
        <div className="flex-grow" />
        <div className="flex flex-col">
          {/* <div className="text-balance text-center leading-5">
            {sign.docs_name}
          </div> */}
          <div className="w-full mb-2 text-right border-t-2 border-b-2">
            <div className="italic text-gray-700">QCVN 41:2019/BGTVT</div>
            <div className="italic text-gray-500 text-balance">
              {sign.docs_source}
            </div>
          </div>
          <div className="whitespace-pre-wrap text-justify first-line:font-bold">
            {sign.docs}
          </div>
          <MDX mdxSource={mdxSource} />
        </div>
      </div>
      <div className="flex justify-between w-full">
        {prevSignKey ? (
          <Link
            className="min-w-24 text-blue-600 dark:text-blue-500 hover:underline"
            href={`/bbgt/${prevSignKey}`}
          >
            ← {prevSignKey}
          </Link>
        ) : (
          <div className="min-w-24" />
        )}
        <div className="text-gray-500 italic font-bold">{decodedSlug}</div>
        {nextSignKey ? (
          <Link
            className="min-w-24 text-blue-600 dark:text-blue-500 hover:underline text-right"
            href={`/bbgt/${nextSignKey}`}
          >
            {nextSignKey} →
          </Link>
        ) : (
          <div className="min-w-24" />
        )}
      </div>
    </div>
  )
}
