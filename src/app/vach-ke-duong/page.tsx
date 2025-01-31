import type { Metadata } from 'next'
import Image from 'next/image'
import { Suspense } from 'react'
import { ChevronRight } from 'lucide-react'
import BaseLink from '@/components/base-link'
import { cn } from '@/lib/utils'
import { Marking } from '@/model/Marking'
import { getMarkingImage, getMarkingsArray } from '@/service/marking'
import { ListOptions } from './list-options'
import styles from './style.css'

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
        (Bao gồm tất cả vạch kẻ đường theo QCVN 41:2019/BGTVT
        {/* -{' '}
        <BaseLink
          href={'/vbpl/danh-sach'}
          className="text-blue-500 hover:underline"
        >
          Nguồn
        </BaseLink> */}
        )
      </p>

      <div
        id="layout-wrapper"
        className={cn('more-cols opacity-0', styles.layout)}
      >
        <Suspense>
          <ListOptions>
            <div className="layout mt-8 grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] justify-between gap-4 md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
              {entries?.map(([key, val]) => {
                const imgUrl = getMarkingImage(val)

                if (val.type === 'group') {
                  return <MarkingGroup key={key} item={val} />
                }

                return <MarkingItem imgUrl={imgUrl} key={key} item={val} />
              })}
            </div>
          </ListOptions>
        </Suspense>
      </div>
    </main>
  )
}

function MarkingGroup({ item }: { item: Marking }) {
  return (
    <div className="col-span-full mt-6 mb-2 border-b-1 text-2xl">
      <div className="pb-1">
        <b className="uppercase">{item.group_name}</b>
        {/* <span className="text-base text-gray-500">: {item.group_meaning}</span> */}
      </div>
    </div>
  )
}

function MarkingItem({
  imgUrl,
  key: id,
  item,
}: {
  imgUrl: string
  key: string
  item: Marking
}) {
  return (
    <BaseLink
      href={`vach-ke-duong/${id}`}
      key={id}
      className="flex flex-col rounded-md border px-3 py-2"
    >
      <div className="item flex flex-col items-center justify-start">
        {item.image ? (
          <div className="item-image-wrapper relative aspect-video w-full">
            <Image
              alt={id}
              src={imgUrl}
              fill={true}
              className="item-image order-none mb-1 max-h-[150px] w-full object-contain object-bottom"
            />
          </div>
        ) : null}
        <div className="item-description line-clamp-3 text-center text-xs leading-5 text-balance text-gray-500">
          {item.full_name}
        </div>
      </div>
      <div className="grow" />
      <div className="item-name mt-2 flex items-center justify-end gap-1 self-end text-end text-xs text-gray-500 italic">
        Vạch {id}
        <ChevronRight className="inline-block h-[1.25em] w-[1.25em] align-bottom" />
      </div>
    </BaseLink>
  )
}
