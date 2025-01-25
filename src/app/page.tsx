import { EXTRA_LINKS, LINKS, USEFUL_LINKS } from '@/constant/homepage-links'
import BaseLink from '@/components/base-link'
import ShareButton, {
  ShareButtonWrapper,
} from '@/components/block/share-button'
import { Paintbrush, Receipt, Scale, Signpost } from 'lucide-react'

export default async function Home() {
  return (
    <>
      <div className="flex h-full flex-col justify-start bg-[linear-gradient(to_bottom,#dbf4ff,#fff1f1)]">
        <div className="container pb-8">
          <div className="grid gap-4">
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 rounded-lg text-center font-mono text-sm leading-6 font-bold text-white">
              <div className="row-span-4 grid place-items-center gap-4 rounded-lg bg-fuchsia-500 p-4">
                <Receipt className="self-end" />
                <div className="self-start">
                  MỨC PHẠT
                  <div>(Nghị định 168/2024)</div>
                </div>
              </div>
              <div className="col-span-1 grid place-content-center rounded-lg bg-fuchsia-300 p-4 dark:bg-fuchsia-800 dark:text-fuchsia-400">
                Toàn văn
              </div>
              <div className="col-span-1 grid place-content-center rounded-lg bg-fuchsia-300 p-4 dark:bg-fuchsia-800 dark:text-fuchsia-400">
                Tóm tắt
              </div>
              <div className="col-span-1 grid place-content-center rounded-lg bg-fuchsia-300 p-4 dark:bg-fuchsia-800 dark:text-fuchsia-400">
                Xe ôtô
              </div>
              <div className="col-span-1 grid place-content-center rounded-lg bg-fuchsia-300 p-4 dark:bg-fuchsia-800 dark:text-fuchsia-400">
                Xe môtô
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 rounded-lg text-center font-mono text-sm leading-6 font-bold text-white">
              <div className="row-span-2 grid place-items-center gap-4 rounded-lg bg-fuchsia-500 p-4">
                <Scale className="self-end" />
                <div>
                  LUẬT
                  <div>(Luật TTATGTĐB 2024)</div>
                </div>
              </div>
              <div className="col-span-1 grid place-content-center rounded-lg bg-fuchsia-300 p-4 dark:bg-fuchsia-800 dark:text-fuchsia-400">
                Toàn văn
              </div>
              <div className="col-span-1 grid place-content-center rounded-lg bg-fuchsia-300 p-4 dark:bg-fuchsia-800 dark:text-fuchsia-400">
                Tóm tắt
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 rounded-lg text-center font-mono text-sm leading-6 font-bold text-white">
              <div className="row-span-2 grid justify-center place-items-center gap-4 rounded-lg bg-fuchsia-500 p-4">
                <Signpost className="self-end" />
                <div className="self-start">BIỂN BÁO</div>
              </div>
              <div className="col-span-1 grid place-content-center rounded-lg bg-fuchsia-300 p-4 dark:bg-fuchsia-800 dark:text-fuchsia-400">
                Danh sách
              </div>
              <div className="col-span-1 grid place-content-center rounded-lg bg-fuchsia-300 p-4 dark:bg-fuchsia-800 dark:text-fuchsia-400">
                So sánh
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 rounded-lg text-center font-mono text-sm leading-6 font-bold text-white">
              <div className="row-span-4 grid justify-center place-items-center gap-4 rounded-lg bg-fuchsia-500 p-4">
                <Paintbrush />
                <div>VẠCH KẺ ĐƯỜNG</div>
              </div>
              <div className="row-span-4 grid place-content-center rounded-lg bg-fuchsia-300 p-4 dark:bg-fuchsia-800 dark:text-fuchsia-400">
                Danh sách
              </div>
            </div>
          </div>

          <h2 className="mt-8 text-3xl">Văn bản pháp luật</h2>
          <ol className="flex flex-col gap-2 list-decimal p-2 ml-8 text-2xl">
            {LINKS.map((item) => {
              return (
                <li key={item.name + item.url}>
                  <div className="flex gap-2">
                    <BaseLink
                      className="text-blue-600 dark:text-blue-500 hover:underline mr-2"
                      href={item.url}
                    >
                      {item.name}
                    </BaseLink>
                    {/* {item.tags?.map((tag) => {
                      return (
                        <Badge key={tag} className="h-fit w-min">
                          {tag}
                        </Badge>
                      )
                    })} */}
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
          <h2 className="mt-8 text-3xl">Tổng hợp</h2>
          <ol className="flex flex-col gap-2 list-decimal p-2 ml-8 text-2xl">
            {USEFUL_LINKS.map((item) => {
              return (
                <li key={item.name + item.url}>
                  <div className="flex gap-2">
                    <BaseLink
                      className="text-blue-600 dark:text-blue-500 hover:underline mr-2"
                      href={item.url}
                    >
                      {item.name}
                    </BaseLink>
                    {/* {item.tags?.map((tag) => {
                      return (
                        <Badge key={tag} className="h-fit w-min">
                          {tag}
                        </Badge>
                      )
                    })} */}
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
          <h2 className="mt-8 text-3xl">Links</h2>
          <ol className="flex flex-col gap-2 list-decimal p-2 ml-8 text-2xl">
            {EXTRA_LINKS.map((item) => {
              return (
                <li key={item.name + item.url}>
                  <div className="flex gap-2">
                    <BaseLink
                      className="text-blue-600 dark:text-blue-500 hover:underline mr-2"
                      href={item.url}
                    >
                      {item.name}
                    </BaseLink>
                    {/* {item.tags?.map((tag) => {
                      return (
                        <Badge key={tag} className="h-fit w-min">
                          {tag}
                        </Badge>
                      )
                    })} */}
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
        </div>
      </div>
      <ShareButtonWrapper>
        <ShareButton title="gtdb" />
      </ShareButtonWrapper>
    </>
  )
}
