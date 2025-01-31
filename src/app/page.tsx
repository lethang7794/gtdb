import {
  ChevronRight,
  Paintbrush,
  Receipt,
  Scale,
  Signpost,
} from 'lucide-react'
import BaseLink from '@/components/base-link'
import { EXPIRE_LAWS, LINKS, USEFUL_LINKS } from '@/constant/homepage-links'
import { constants } from '@/constant'
import { ExtraLinks } from './root/extra-links'

const PATHS = constants.paths

export default async function Home() {
  return (
    <>
      <div className="flex h-full flex-col justify-start bg-[linear-gradient(to_bottom,#dbf4ff,#fff1f1)]">
        <div className="container px-4 pb-8 md:px-8">
          <div className="grid gap-4">
            <div className="mt-4 grid grid-cols-2 gap-4 rounded-lg text-center font-mono text-sm leading-6 font-bold text-white sm:grid-cols-2">
              <BaseLink
                href={PATHS.vbpl.NGHI_DINH_168}
                className="row-span-4 grid place-items-center gap-4 rounded-lg bg-red-600 p-4"
              >
                <Receipt className="h-12 w-12 self-end" />
                <div className="self-start">
                  MỨC PHẠT
                  <div className="text-sm italic">(Nghị định 168/2024)</div>
                </div>
              </BaseLink>
              <BaseLink
                href={PATHS.vbpl.NGHI_DINH_168}
                className="col-span-1 grid place-content-center rounded-lg bg-red-400 p-4 text-white dark:bg-red-800 dark:text-red-400"
              >
                Toàn văn 🗞️
              </BaseLink>
              <BaseLink
                href={PATHS.markmaps.NGHI_DINH_168_2024}
                className="col-span-1 grid place-content-center rounded-lg bg-red-400 p-4 text-white dark:bg-red-800 dark:text-red-400"
              >
                Tóm tắt
              </BaseLink>
              <BaseLink
                href={PATHS.markmaps.NGHI_DINH_168_2024_XE_OTO}
                className="col-span-1 grid place-content-center rounded-lg bg-red-400 p-4 text-white dark:bg-red-800 dark:text-red-400"
              >
                Xe ôtô 🚘
              </BaseLink>
              <BaseLink
                href={PATHS.markmaps.NGHI_DINH_168_2024_XE_MOTO}
                className="col-span-1 grid place-content-center rounded-lg bg-red-400 p-4 text-white dark:bg-red-800 dark:text-red-400"
              >
                Xe môtô 🏍️
              </BaseLink>
            </div>
            <div className="grid grid-cols-2 gap-4 rounded-lg text-center font-mono text-sm leading-6 font-bold text-white sm:grid-cols-2">
              <BaseLink
                href={PATHS.vbpl.LUAT_GT_2024}
                className="row-span-2 grid place-items-center gap-4 rounded-lg bg-yellow-400 p-4 text-yellow-800"
              >
                <Scale className="h-12 w-12 self-end" />
                <div>
                  LUẬT
                  <div className="text-sm italic">(Luật TTATGTĐB 2024)</div>
                </div>
              </BaseLink>
              <BaseLink
                href={PATHS.vbpl.LUAT_GT_2024}
                className="col-span-1 grid place-content-center rounded-lg bg-yellow-300 p-4 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-400"
              >
                Toàn văn 🗞️
              </BaseLink>
              <BaseLink
                href={PATHS.markmaps.LUAT_TTATGTDB_2024}
                className="col-span-1 grid place-content-center rounded-lg bg-yellow-300 p-4 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-400"
              >
                Tóm tắt
              </BaseLink>
            </div>
            <div className="grid grid-cols-2 gap-4 rounded-lg text-center font-mono text-sm leading-6 font-bold text-white sm:grid-cols-2">
              <BaseLink
                href={PATHS.bbgt.ROOT}
                className="row-span-2 grid place-items-center justify-center gap-4 rounded-lg bg-green-500 p-4 text-green-800"
              >
                <Signpost className="h-12 w-12 self-end" />
                <div className="self-start">BIỂN BÁO</div>
              </BaseLink>
              <BaseLink
                href={PATHS.bbgt.ROOT}
                className="col-span-1 grid place-content-center rounded-lg bg-green-300 p-4 text-green-800 dark:bg-green-800 dark:text-green-400"
              >
                Danh sách
              </BaseLink>
              <BaseLink
                href={PATHS.bbgtSoSanh.ROOT}
                className="col-span-1 grid place-content-center rounded-lg bg-green-300 p-4 text-green-800 dark:bg-green-800 dark:text-green-400"
              >
                So sánh
              </BaseLink>
            </div>
            <div className="grid grid-cols-2 gap-4 rounded-lg text-center font-mono text-sm leading-6 font-bold text-white sm:grid-cols-2">
              <BaseLink
                href={PATHS.vachKeDuong.ROOT}
                className="row-span-4 grid place-items-center justify-center gap-4 rounded-lg bg-blue-500 p-4"
              >
                <Paintbrush className="h-12 w-12" />
                <div>VẠCH KẺ ĐƯỜNG</div>
              </BaseLink>
              <BaseLink
                href={PATHS.vachKeDuong.ROOT}
                className="row-span-4 grid place-content-center rounded-lg bg-blue-300 p-4 text-white dark:bg-blue-800 dark:text-blue-400"
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
                      className="mr-2 py-2 text-blue-600 hover:underline dark:text-blue-500"
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
                      className="mr-2 py-2 text-blue-600 hover:underline dark:text-blue-500"
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
                      className="mr-2 py-2 text-blue-600 hover:underline dark:text-blue-500"
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
