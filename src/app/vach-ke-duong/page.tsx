import Link from 'next/link'
import type { Metadata } from 'next'
import { getMarkingImage, getMarkingsArray } from '@/service/marking'
import { env } from '@/env.mjs'
import BaseLink from '@/components/base-link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: `Vạch kẻ đường | ${env.NEXT_PUBLIC_BRAND_SHORT}`,
  description:
    'Tất cả vạch kẻ đường theo QCVN 41:2019/BGTVT và chi tiết từng biển báo',
}

export default async function Home() {
  const entries = await getMarkingsArray()

  return (
    <main className="flex h-full flex-col justify-between p-6 md:p-8">
      <h1 className="text-center text-4xl font-bold">Vạch kẻ đường</h1>

      <p className="text-center text-2xl text-gray-500">
        (Bao gồm tất cả vạch kẻ đường theo QCVN 41:2019/BGTVT -{' '}
        <BaseLink
          href={'/vbpl/danh-sach'}
          className="text-blue-500 hover:underline"
        >
          Nguồn
        </BaseLink>
        )
      </p>

      <div className="mt-8 grid grid-cols-[repeat(auto-fill,minmax(150px,_1fr))] justify-between gap-4">
        {entries?.map(([key, val]) => {
          const imgUrl = getMarkingImage(val)

          return (
            <Link
              href={`vach-ke-duong/${key}`}
              key={key}
              className="flex items-center justify-start flex-col border px-3 py-2 rounded-md"
            >
              {val.image ? (
                <div className="relative aspect-square w-full">
                  <Image
                    alt={key}
                    src={imgUrl}
                    fill={true}
                    className="max-h-[150px] w-full order-none object-contain object-bottom mb-1"
                  />
                </div>
              ) : null}
              <div className="text-sm text-balance text-center leading-5">
                {val.full_name}
              </div>
              <div className="flex-grow" />
              <div className="self-end text-gray-500 text-xs italic">{key}</div>
            </Link>
          )
        })}
      </div>
    </main>
  )
}
