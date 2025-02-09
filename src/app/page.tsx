import {
  ChevronRight,
  Paintbrush,
  Receipt,
  Scale,
  Signpost,
} from 'lucide-react'
import BaseLink from '@/components/base-link'
import { NavHeader } from '@/components/block/nav-header'
import { EXPIRE_LAWS, LINKS, USEFUL_LINKS } from '@/constant/homepage-links'
import { constants } from '@/constant'
import { ExtraLinks } from './root/extra-links'
import { env } from '@/env.mjs'
import { cn } from '@/lib/utils'

const PATHS = constants.paths

export default async function Home() {
  return (
    <>
      <NavHeader isHome />
      <div className="flex h-full flex-col justify-start bg-[linear-gradient(to_bottom,#dbf4ff,#fff1f1)]">
        <div className="container px-4 pb-8 md:px-8">
          <div className="grid gap-4">
            <div className="mt-4 grid grid-cols-2 gap-4 rounded-lg text-center font-mono text-base leading-6 font-bold text-white sm:grid-cols-2">
              <BaseLink
                href={PATHS.vbpl.NGHI_DINH_168}
                className={cn(
                  'grid place-items-center gap-4 rounded-lg bg-red-600 p-4',
                  env.NEXT_PUBLIC_DOMAIN_LAWS ? 'row-span-5' : 'row-span-4'
                )}
              >
                <Receipt className="h-20 w-20 self-end" />
                <div className="self-start">
                  MỨC PHẠT
                  <div className="text-sm italic">(Nghị định 168/2024)</div>
                </div>
              </BaseLink>
              <BaseLink
                href={PATHS.vbpl.NGHI_DINH_168}
                className="col-span-1 grid place-content-start rounded-lg border-4 border-red-600 bg-transparent text-black p-4"
              >
                Toàn văn 🗞️
              </BaseLink>
              <BaseLink
                href={PATHS.markmaps.NGHI_DINH_168_2024}
                className="col-span-1 grid place-content-start rounded-lg border-4 border-red-600 bg-transparent text-black p-4"
              >
                Tóm tắt
              </BaseLink>
              <BaseLink
                href={PATHS.markmaps.NGHI_DINH_168_2024_XE_OTO}
                className="col-span-1 grid place-content-start rounded-lg border-4 border-red-600 bg-transparent text-black p-4"
              >
                [Tóm tắt] Xe ôtô 🚘
              </BaseLink>
              <BaseLink
                href={PATHS.markmaps.NGHI_DINH_168_2024_XE_MOTO}
                className="col-span-1 grid place-content-start text-start rounded-lg border-4 border-red-600 bg-transparent text-black p-4"
              >
                [Tóm tắt] Xe môtô 🏍️
              </BaseLink>
              {env.NEXT_PUBLIC_DOMAIN_LAWS ? (
                <BaseLink
                  href={`https://${env.NEXT_PUBLIC_DOMAIN_LAWS}${PATHS.externals.NGHI_DINH_168}`}
                  className="col-span-1 flex items-center justify-start rounded-lg border-4 border-red-600 bg-transparent text-black p-4"
                >
                  <span className="text-start">
                    Toàn văn (tối ưu cho việc đọc)
                  </span>
                </BaseLink>
              ) : null}
            </div>
            <div className="grid grid-cols-2 gap-4 rounded-lg text-center font-mono text-base leading-6 font-bold text-white sm:grid-cols-2">
              <BaseLink
                href={PATHS.vbpl.LUAT_GT_2024}
                className={cn(
                  'grid place-items-center gap-4 rounded-lg bg-yellow-300 p-4 text-black',
                  env.NEXT_PUBLIC_DOMAIN_LAWS ? 'row-span-3' : 'row-span-2'
                )}
              >
                <Scale className="h-20 w-20 self-end" />
                <div>
                  LUẬT
                  <div className="text-sm italic">(Luật TTATGTĐB 2024)</div>
                </div>
              </BaseLink>
              <BaseLink
                href={PATHS.vbpl.LUAT_GT_2024}
                className="col-span-1 grid place-content-start rounded-lg p-4 border-4 border-yellow-300 bg-transparent text-black"
              >
                Toàn văn 🗞️
              </BaseLink>
              <BaseLink
                href={PATHS.markmaps.LUAT_TTATGTDB_2024}
                className="col-span-1 grid place-content-start rounded-lg p-4 border-4 border-yellow-300 bg-transparent text-black"
              >
                Tóm tắt
              </BaseLink>
              {env.NEXT_PUBLIC_DOMAIN_LAWS ? (
                <BaseLink
                  href={`https://${env.NEXT_PUBLIC_DOMAIN_LAWS}${PATHS.externals.LUAT_GT_2024}`}
                  className="col-span-1 flex items-center justify-start rounded-lg border-4 border-yellow-300 bg-transparent text-black p-4"
                >
                  <span className="text-start">
                    Toàn văn (tối ưu cho việc đọc)
                  </span>
                </BaseLink>
              ) : null}
            </div>
            <div className="grid grid-cols-2 gap-4 rounded-lg text-center font-mono text-base leading-6 font-bold text-white sm:grid-cols-2">
              <BaseLink
                href={PATHS.bbgt.ROOT}
                className="row-span-2 grid place-items-center justify-center gap-4 rounded-lg bg-green-400 p-4 text-black"
              >
                <Signpost className="h-20 w-20 self-end" />
                <div className="self-start">BIỂN BÁO</div>
              </BaseLink>
              <BaseLink
                href={PATHS.bbgt.ROOT}
                className="col-span-1 grid place-content-start rounded-lg p-4 border-4 border-green-400 bg-transparent text-black"
              >
                Danh sách
              </BaseLink>
              <BaseLink
                href={PATHS.bbgtSoSanh.ROOT}
                className="col-span-1 grid place-content-start rounded-lg p-4 border-4 border-green-400 bg-transparent text-black"
              >
                So sánh
              </BaseLink>
            </div>
            <div className="grid grid-cols-2 gap-4 rounded-lg text-start font-mono text-base leading-6 font-bold text-white sm:grid-cols-2">
              <BaseLink
                href={PATHS.vachKeDuong.ROOT}
                className="row-span-4 grid place-items-center justify-center gap-4 rounded-lg bg-blue-500 p-4"
              >
                <Paintbrush className="h-20 w-20" />
                <div>VẠCH KẺ ĐƯỜNG</div>
              </BaseLink>
              <BaseLink
                href={PATHS.vachKeDuong.ROOT}
                className="row-span-4 grid place-content-center justify-start rounded-lg p-4 border-4 border-blue-500 bg-transparent text-black"
              >
                Danh sách
              </BaseLink>
            </div>
          </div>

          <h2 className="mt-8 text-2xl">Tổng hợp</h2>
          <ol className="flex flex-col gap-2 p-2">
            {USEFUL_LINKS.map((item) => {
              return (
                <li key={item.name + item.url}>
                  <div className="flex gap-2">
                    <BaseLink
                      className="mr-2 py-2 text-gray-800 hover:underline"
                      href={item.url}
                    >
                      {item.name}
                      <ChevronRight className="w6 inline-block h-6 align-bottom" />
                    </BaseLink>
                  </div>
                  {item.description ? (
                    <div className="text-base text-gray-500 italic">
                      ({item.description})
                    </div>
                  ) : null}
                </li>
              )
            })}
          </ol>

          <h2 className="mt-4 text-2xl">VBPL khác</h2>
          <ol className="flex flex-col gap-2 p-2">
            {LINKS.map((item) => {
              return (
                <li key={item.name + item.url}>
                  <div className="flex gap-2">
                    <BaseLink
                      className="mr-2 py-2 text-gray-800 hover:underline"
                      href={item.url}
                    >
                      {item.name}
                      <ChevronRight className="w6 inline-block h-6 align-bottom" />
                    </BaseLink>
                  </div>
                  {item.description ? (
                    <div className="text-base text-gray-500 italic">
                      ({item.description})
                    </div>
                  ) : null}
                </li>
              )
            })}
          </ol>

          <h2 className="mt-4 text-2xl">VBPL đã hết hiệu lực</h2>
          <ol className="flex flex-col gap-2 p-2">
            {EXPIRE_LAWS.map((item) => {
              return (
                <li key={item.name + item.url}>
                  <div className="flex gap-2">
                    <BaseLink
                      className="mr-2 py-2 text-gray-800 hover:underline"
                      href={item.url}
                    >
                      {item.name}
                      <ChevronRight className="w6 inline-block h-6 align-bottom" />
                    </BaseLink>
                  </div>
                  {item.description ? (
                    <div className="text-base text-gray-500 italic">
                      ({item.description})
                    </div>
                  ) : null}
                </li>
              )
            })}
          </ol>

          <ExtraLinks />
        </div>
      </div>
    </>
  )
}
