import type { Metadata, ResolvingMetadata } from 'next'
import { processStaticParams } from '@/lib/static-params'
import {
  getRoadSignById,
  getRoadSignImage,
  getRoadSignOgImage,
  getRoadSignsArray,
  getRoadSignsWithAroundById,
} from '@/service/road-sign'
import '@/style/github-markdown-road-sign.css'
import Image from 'next/image'
import Link from 'next/link'
import { MDX } from '@/components/mdx/mdx'
import { constants } from '@/constant'

export async function generateStaticParams() {
  const roadSigns = await getRoadSignsArray()
  const params = roadSigns.map(([key]) => ({ slug: key }))
  return processStaticParams(params, constants.paths.bbgt.ROOT)
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
      className="mb-4 mt-4 flex flex-col items-center justify-start rounded-md px-3 py-2"
    >
      <Link
        className="mb-4 self-start text-blue-600 hover:underline dark:text-blue-500"
        href={'/bbgt/'}
        scroll={false}
      >
        <div className="flex min-h-10 min-w-24 items-center">
          🔙 Danh sách biển báo
        </div>
      </Link>
      <div className="flex w-full justify-between">
        {prevSignKey ? (
          <Link
            className="min-h-10 min-w-24 text-blue-600 hover:underline dark:text-blue-500"
            href={`/bbgt/${prevSignKey}`}
          >
            <div className="flex min-h-10 min-w-24 items-center">
              ← {prevSignKey}
            </div>
          </Link>
        ) : (
          <div className="min-h-10 min-w-24" />
        )}
        <div className="flex items-center font-bold italic text-gray-500">
          {decodedSlug}
        </div>
        {nextSignKey ? (
          <Link
            className="min-h-10 min-w-24 text-right text-blue-600 hover:underline dark:text-blue-500"
            href={`/bbgt/${nextSignKey}`}
          >
            <div className="flex min-h-10 min-w-24 items-center">
              {nextSignKey} →
            </div>
          </Link>
        ) : (
          <div className="min-h-10 min-w-24" />
        )}
      </div>
      <div className="container mb-6 rounded-xl px-6 py-4 shadow-lg">
        <div className="relative mx-auto aspect-square w-full max-w-72">
          <Image
            alt={slug}
            fill={true}
            src={getRoadSignImage(sign)}
            className="order-none mb-1 h-[250px] w-full object-contain object-bottom"
          />
        </div>
        <div className="text-balance text-center leading-5">{sign.name}</div>
        <br />
        <div className="grow" />
        <div className="flex flex-col">
          {/* <div className="text-balance text-center leading-5">
            {sign.docs_name}
          </div> */}
          <MDX source={sign.docs_mdx} />
          <div className="mb-2 w-full border-b-2 border-t-2 text-right">
            <div className="italic text-gray-700">QCVN 41:2019/BGTVT</div>
            <div className="text-balance italic text-gray-500">
              {sign.docs_source}
            </div>
          </div>
          {/* <div className="whitespace-pre-wrap text-justify">{sign.docs}</div> */}
        </div>
      </div>
    </div>
  )
}
