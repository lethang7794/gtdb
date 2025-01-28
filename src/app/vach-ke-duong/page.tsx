import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import BaseLink from '@/components/base-link'
import { getMarkingImage, getMarkingsArray } from '@/service/marking'

export const metadata: Metadata = {
  title: 'Vạch kẻ đường',
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

      <div className="mt-8 grid grid-cols-[repeat(auto-fill,minmax(150px,_1fr))] justify-between gap-4 lg:grid-cols-[repeat(auto-fill,minmax(200px,_1fr))]">
        {entries?.map(([key, val]) => {
          const imgUrl = getMarkingImage(val)

          return (
            <Link
              href={`vach-ke-duong/${key}`}
              key={key}
              className="flex flex-col items-center justify-start rounded-md border px-3 py-2"
            >
              {val.image ? (
                <div className="relative aspect-square w-full">
                  <Image
                    alt={key}
                    src={imgUrl}
                    fill={true}
                    className="order-none mb-1 max-h-[150px] w-full object-contain object-bottom"
                  />
                </div>
              ) : null}
              <div className="text-balance text-center text-sm leading-5">
                {val.full_name}
              </div>
              <div className="flex-grow" />
              <div className="self-end text-xs italic text-gray-500">{key}</div>
            </Link>
          )
        })}
      </div>
    </main>
  )
}
