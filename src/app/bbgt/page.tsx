import type { Metadata } from 'next'
import Image from 'next/image'
import { Suspense } from 'react'
import { ChevronRight, Info } from 'lucide-react'
import BaseLink from '@/components/base-link'
import { cn } from '@/lib/utils'
import { RoadSign } from '@/model/RoadSign'
import { getRoadSignImage, getRoadSignsArray } from '@/service/road-sign'
import { constants } from '@/constant'
import { ListOptions } from './list-options'
import styles from './style.css'
import { NavHeader } from '@/components/block/nav-header'
import { MainLayout } from '@/components/layout/main-layout'

const PAGE_TITLE = 'Biển báo giao thông'

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description:
    '398 biển báo giao thông đường bộ theo QCVN 41:2019/BGTVT và chi tiết từng biển báo',
  keywords: [
    'Biển báo giao thông',
    'QCVN 41:2019/BGTVT',
    'Giao thông đường bộ',
  ],
}

export default async function BbgtPage() {
  const entries = await getRoadSignsArray()
  // const firstTen = entries.slice(0, 30)

  return (
    <>
      <NavHeader backToHome title={PAGE_TITLE} />
      <MainLayout>
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
          id="layout-wrapper"
          className={cn('more-cols opacity-0', styles.layout)}
        >
          <Suspense>
            <ListOptions>
              <div className="layout mt-8 grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] justify-between gap-4 md:grid-cols-[repeat(auto-fill,minmax(120px,1fr))]">
                {entries?.map(([signKey, sign]) => {
                  if (sign.type === 'group') {
                    return (
                      <RoadSignGroup
                        key={signKey}
                        sign={sign}
                        signKey={signKey}
                      />
                    )
                  }
                  const imgUrl = getRoadSignImage(sign)
                  return (
                    <RoadSignItem
                      key={signKey}
                      imgUrl={imgUrl}
                      sign={sign}
                      signKey={signKey}
                    />
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

function RoadSignGroup({ sign, signKey }: { sign: RoadSign; signKey: string }) {
  return (
    <div key={signKey} className="col-span-full mt-6 mb-2 border-b-1 text-2xl">
      <div className="pb-1">
        <b className="uppercase">{sign.name}</b>
        <span className="text-base text-gray-500">: {sign.group_meaning}</span>
        {sign.group_ref ? (
          <BaseLink
            href={sign.group_ref}
            newTab
            className="-mb-0.5 ml-1 inline-block"
          >
            <Info className="" size="16" />
          </BaseLink>
        ) : null}
      </div>
    </div>
  )
}

function RoadSignItem({
  imgUrl,
  sign,
  signKey,
}: {
  imgUrl: string
  sign: RoadSign
  signKey: string
}) {
  return (
    <BaseLink
      href={`${constants.paths.bbgt.ROOT}/${signKey}`}
      className="item flex flex-col items-center justify-start rounded-md border px-3 py-2"
    >
      <div className="item-image-wrapper relative aspect-square w-full">
        <Image
          alt={signKey}
          src={imgUrl}
          fill={true}
          className="item-image order-none mb-1 max-h-[150px] w-full object-contain object-bottom"
        />
      </div>
      <div className="item-description line-clamp-3 text-center text-xs leading-5 text-balance text-gray-500">
        {sign.name}
      </div>
      <div className="grow" />
      <div className="item-name flex items-center gap-1 self-end text-xs text-gray-500 italic">
        {signKey}
        <ChevronRight className="inline-block h-[1.25em] w-[1.25em] align-bottom" />
      </div>
    </BaseLink>
  )
}
