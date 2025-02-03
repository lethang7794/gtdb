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
import { NavHeader } from '@/components/block/nav-header'
import { MainLayout } from '@/components/layout/main-layout'

const PAGE_TITLE = 'Vạch kẻ đường'

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description:
    'Tất cả vạch kẻ đường theo QCVN 41:2019/BGTVT và chi tiết từng biển báo',
}

export default async function Home() {
  const items = await getMarkingsArray()

  return (
    <>
      <NavHeader backToHome title={PAGE_TITLE} />
      <MainLayout>
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
                {items?.map((item) => {
                  const imgUrl = getMarkingImage(item)
                  if (item.type === 'group') {
                    return <MarkingGroup key={item.id} item={item} />
                  }
                  if (item.type === 'sub_group') {
                    return <MarkingSubGroup key={item.id} item={item} />
                  }
                  return (
                    <MarkingItem imgUrl={imgUrl} key={item.id} item={item} />
                  )
                })}
              </div>
            </ListOptions>
          </Suspense>
        </div>
      </MainLayout>
    </>
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

function MarkingSubGroup({ item }: { item: Marking }) {
  return (
    <div className="col-span-full mt-2 mb-1 border-b-1 text-xl">
      <div className="pb-1">
        <b className="uppercase">{item.group_name}</b>
        {/* <span className="text-base text-gray-500">: {item.group_meaning}</span> */}
      </div>
    </div>
  )
}

function MarkingItem({ imgUrl, item }: { imgUrl: string; item: Marking }) {
  return (
    <BaseLink
      href={`vach-ke-duong/${item.id}`}
      key={item.id}
      className={cn(
        'item-wrapper flex flex-col rounded-md border px-3 py-2',
        item.image_orientation === 'portrait'
          ? 'row-span-2'
          : item.image_orientation === 'square'
            ? 'col-span-full row-span-2 md:col-span-2'
            : 'col-span-full md:col-span-2'
      )}
    >
      <div className="item flex flex-col items-center justify-start">
        {item.image ? (
          <div
            className={cn(
              'item-image-wrapper relative w-full',
              item.image_orientation === 'portrait'
                ? 'aspect-9/16'
                : item.image_orientation === 'square'
                  ? 'aspect-square @min-lg:max-w-96'
                  : 'aspect-video @min-lg:max-w-96'
            )}
          >
            <Image
              alt={item.id}
              src={imgUrl}
              fill={true}
              quality={100}
              className="item-image order-none mb-1 object-contain object-bottom"
            />
          </div>
        ) : null}
        <div className="ml-2">
          <div className="item-description line-clamp-3 text-base leading-5 font-bold text-gray-500">
            {item.full_name}
          </div>
          <div className="text-sm whitespace-pre-wrap">
            {Array.isArray(item.meaning) ? (
              item.meaning.map((m) => (
                <div key={m.type} className="item-meaning mt-2">
                  <span className="font-bold">{m.type}</span>:{' '}
                  <span className="whitespace-pre-wrap">{m.meaning}</span>
                </div>
              ))
            ) : (
              <div className="item-meaning">{item.meaning}</div>
            )}
          </div>
        </div>
      </div>
      <div className="grow" />
      <div className="item-name mt-2 flex items-center justify-end gap-1 self-end text-end text-xs text-gray-500 italic">
        Vạch {item.id}
        <ChevronRight className="inline-block h-[1.25em] w-[1.25em] align-bottom" />
      </div>
    </BaseLink>
  )
}
