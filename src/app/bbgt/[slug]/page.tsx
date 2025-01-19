import type { Metadata, ResolvingMetadata } from 'next'
import Link from 'next/link'
import { serialize } from 'next-mdx-remote/serialize'
import {
  getRoadSignById,
  getRoadSignImage,
  getRoadSignOgImage,
  getRoadSignsArray,
  getRoadSignsWithAroundById,
} from '@/service/road-sign'
import { MDX } from '@/components/mdx/mdx'
import '@/style/github-markdown-road-sign.css'
import Image from 'next/image'
import { processStaticParams } from '@/lib/static-params'

export async function generateStaticParams() {
  const roadSigns = await getRoadSignsArray()
  const params = roadSigns.map(([key]) => ({ slug: key }))
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
  const decodedSlug = slug.replace(/%2C/g, ',')
  const sign = await getRoadSignById(decodedSlug)
  if (!sign) {
    return { title: 'Not Found' }
  }

  const img = getRoadSignImage(sign)
  const imgIsSupportByOg = img.match(/.png|.jpg|.jpeg/)

  const pageTitle = `${decodedSlug}: ${sign.name}`
  return {
    title: pageTitle,
    description: sign.docs,
    openGraph: {
      images: getRoadSignOgImage(sign),
    },
  }
}

export default async function RoadSignPage({ params }: Props) {
  const slug = params.slug
  const decodedSlug = slug.replace(/%2C/g, ',')
  const signWithAround = await getRoadSignsWithAroundById(decodedSlug)
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
      className="flex items-center justify-start flex-col px-3 py-2 mt-4 mb-4 rounded-md"
    >
      <Link
        className="self-start mb-4 text-blue-600 dark:text-blue-500 hover:underline"
        href={'/bbgt/'}
        scroll={false}
      >
        <div className="flex items-center min-w-24 min-h-10">
          🔙 Danh sách biển báo
        </div>
      </Link>
      <div className="flex justify-between w-full">
        {prevSignKey ? (
          <Link
            className="min-w-24 min-h-10 text-blue-600 dark:text-blue-500 hover:underline"
            href={`/bbgt/${prevSignKey}`}
          >
            <div className="flex items-center min-w-24 min-h-10">
              ← {prevSignKey}
            </div>
          </Link>
        ) : (
          <div className="min-w-24 min-h-10" />
        )}
        <div className="flex items-center text-gray-500 italic font-bold">
          {decodedSlug}
        </div>
        {nextSignKey ? (
          <Link
            className="min-w-24 min-h-10 text-blue-600 dark:text-blue-500 hover:underline text-right"
            href={`/bbgt/${nextSignKey}`}
          >
            <div className="flex items-center min-w-24 min-h-10">
              {nextSignKey} →
            </div>
          </Link>
        ) : (
          <div className="min-w-24 min-h-10" />
        )}
      </div>
      <div className="container py-4 px-6 mb-6 rounded-xl shadow-lg">
        <div className="mx-auto relative aspect-square w-full max-w-72">
          <Image
            alt={slug}
            fill={true}
            src={getRoadSignImage(sign)}
            className="h-[250px] w-full order-none object-contain object-bottom mb-1"
          />
        </div>
        <div className="text-balance text-center leading-5">{sign.name}</div>
        <br />
        <div className="flex-grow" />
        <div className="flex flex-col">
          {/* <div className="text-balance text-center leading-5">
            {sign.docs_name}
          </div> */}
          <MDX source={sign.docs_mdx} />
          <div className="w-full mb-2 text-right border-t-2 border-b-2">
            <div className="italic text-gray-700">QCVN 41:2019/BGTVT</div>
            <div className="italic text-gray-500 text-balance">
              {sign.docs_source}
            </div>
          </div>
          {/* <div className="whitespace-pre-wrap text-justify">{sign.docs}</div> */}
        </div>
      </div>
    </div>
  )
}
