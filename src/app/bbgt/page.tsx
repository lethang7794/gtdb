import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'
import { ChevronRight } from 'lucide-react'
import BaseLink from '@/components/base-link'
import { cn } from '@/lib/utils'
import { getRoadSignImage, getRoadSignsArray } from '@/service/road-sign'
import { ListOptions } from './list-options'
import styles from './style.css'

export const metadata: Metadata = {
  title: 'Biển báo giao thông',
  description:
    'Tất cả biển báo giao thông đường bộ theo QCVN 41:2019/BGTVT và chi tiết từng biển báo',
}

export default async function BbgtPage() {
  const entries = await getRoadSignsArray()
  // const firstTen = entries.slice(0, 30)

  return (
    <main className="flex h-full flex-col justify-between p-6 md:p-8">
      <h1 className="text-center text-4xl font-bold">
        Biển báo giao thông đường bộ
      </h1>

      <p className="text-center text-2xl text-gray-500">
        (398 biển báo theo QCVN 41:2019/BGTVT
        {/* -{' '} */}
        {/* <BaseLink
          href={'/vbpl/danh-sach'}
          className="text-blue-500 hover:underline"
        >
          Nguồn
        </BaseLink> */}
        )
      </p>

      <div
        id="bbgt-layout-wrapper"
        className={cn('more-cols opacity-0', styles.layoutWrapper)}
      >
        <Suspense>
          <ListOptions>
            <div
              id="bbgt-layout"
              className={cn(
                'layout mt-8 grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] justify-between gap-4 md:grid-cols-[repeat(auto-fill,minmax(120px,1fr))]',
                styles.layout
              )}
            >
              {entries?.map(([signKey, sign]) => {
                const imgUrl = getRoadSignImage(sign)
                return (
                  <Link
                    href={`/bbgt/${signKey}`}
                    key={signKey}
                    className="bbgt flex flex-col items-center justify-start rounded-md border px-3 py-2"
                  >
                    <div className="bbgt-image-wrapper relative aspect-square w-full">
                      <Image
                        alt={signKey}
                        src={imgUrl}
                        fill={true}
                        // placeholder="blur-sm"
                        className="bbgt-image order-none mb-1 max-h-[150px] w-full object-contain object-bottom"
                      />
                    </div>
                    <div className="bbgt-description line-clamp-3 text-center text-xs leading-5 text-balance text-gray-500">
                      {sign.name}
                    </div>
                    <div className="grow" />
                    <div className="bbgt-name flex items-center gap-1 self-end text-xs text-gray-500 italic">
                      {signKey}
                      <ChevronRight className="inline-block h-[1.25em] w-[1.25em] align-bottom" />
                    </div>
                  </Link>
                )
              })}
            </div>
          </ListOptions>
        </Suspense>
      </div>
    </main>
  )
}
