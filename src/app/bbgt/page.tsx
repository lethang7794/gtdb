import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

import { getRoadSignsArray } from '@/service/road-sign'
import { getRoadSignImage } from '@/service/road-sign'
import BaseLink from '@/components/base-link'

export const metadata: Metadata = {
  title: 'Biển báo giao thông',
  description:
    'Tất cả biển báo giao thông đường bộ theo QCVN 41:2019/BGTVT và chi tiết từng biển báo',
}

export default async function Home() {
  const entries = await getRoadSignsArray()
  // const firstTen = entries.slice(0, 30)

  return (
    <main className="flex h-full flex-col justify-between p-6 md:p-8">
      <h1 className="text-center text-4xl font-bold">
        Biển báo giao thông đường bộ
      </h1>

      <p className="text-center text-2xl text-gray-500">
        (Bao gồm tất cả biển báo theo QCVN 41:2019/BGTVT -{' '}
        <BaseLink
          href={'/vbpl/danh-sach'}
          className="text-blue-500 hover:underline"
        >
          Nguồn
        </BaseLink>
        )
      </p>

      <div className="mt-8 grid grid-cols-[repeat(auto-fill,minmax(100px,_1fr))] md:grid-cols-[repeat(auto-fill,minmax(120px,_1fr))] justify-between gap-4">
        {entries?.map(([signKey, sign]) => {
          const imgUrl = getRoadSignImage(sign)

          return (
            <Link
              href={`/bbgt/${signKey}`}
              key={signKey}
              className="flex items-center justify-start flex-col border px-3 py-2 rounded-md"
            >
              <div className="relative aspect-square w-full">
                <Image
                  alt={signKey}
                  src={imgUrl}
                  fill={true}
                  // placeholder="blur"
                  className="max-h-[150px] w-full order-none object-contain object-bottom mb-1"
                />
              </div>
              <div className="line-clamp-3 text-balance text-center leading-5">
                {sign.name}
              </div>
              <div className="flex-grow" />
              <div className="self-end text-gray-500 text-xs italic">
                {signKey}
              </div>
            </Link>
          )
        })}
      </div>
    </main>
  )
}
