import Link from 'next/link'
import { EXTRA_LINKS, LINKS, USEFUL_LINKS } from '@/constant/homepage-links'
import { Badge } from '@/components/ui/badge'
import { SquareArrowOutUpRight } from 'lucide-react'
import BaseLink from '@/components/base-link'
import ShareButton, {
  ShareButtonWrapper,
} from '@/components/block/share-button'

export default async function Home() {
  return (
    <>
      <div className="flex h-full flex-col justify-start ">
        <div className="container pb-8">
          <div className="flex flex-col lg:flex-row h-auto lg:h-[calc(100vh-72px)] w-full items-center justify-start lg:justify-center bg-[linear-gradient(to_bottom,#dbf4ff,#fff1f1)] tracking-[-2] font-bold text-center">
            <div className="h-16 lg:hidden" />
            <div className="flex flex-col text-4xl lg:text-[7.5rem] leading-[4rem] lg:leading-[10rem] w-full sm:w-[412px] md:w-[480px] px-8 lg:px-0">
              <div
                className="lg:-ml-48 text-left lg:text-center"
                style={{
                  backgroundImage:
                    'linear-gradient(90deg, rgb(0, 124, 240), rgb(0, 223, 216))',
                  backgroundClip: 'text',
                  '-webkit-background-clip': 'text',
                  color: 'transparent',
                }}
              >
                Đọc
              </div>
              <div
                className="-ml-12 lg:-ml-24"
                style={{
                  backgroundImage:
                    'linear-gradient(90deg, rgb(121, 40, 202), rgb(255, 0, 128))',
                  backgroundClip: 'text',
                  '-webkit-background-clip': 'text',
                  color: 'transparent',
                }}
              >
                Hiểu
              </div>
              <div
                className="lg:-mr-28 text-right lg:text-center whitespace-nowrap"
                style={{
                  backgroundImage:
                    'linear-gradient(90deg, rgb(255, 77, 77), rgb(249, 203, 40))',
                  backgroundClip: 'text',
                  '-webkit-background-clip': 'text',
                  color: 'transparent',
                }}
              >
                Chia sẻ
              </div>
            </div>
            <div className="h-16 lg:hidden" />
            <div className="ml-8 lg:ml-16 flex flex-col justify-center gap-6 text-left text-2xl lg:text-4xl">
              <div className="flex gap-3">
                <div className="min-w-12 text-center">⚖️</div>
                <div>Luật</div>
              </div>
              <div className="flex gap-3">
                <div className="min-w-12 text-center">🎫</div>
                <div>Xử phạt</div>
              </div>
              <div className="flex gap-3">
                <div className="min-w-12 text-center">🚏</div>
                <div>Biển báo giao thông</div>
              </div>
              <div className="flex gap-3">
                <div className="min-w-12 text-center">⛙</div>
                <div>Vạch kẻ đường</div>
              </div>
              <div className="pl-16">...</div>
            </div>
            <div className="h-16 lg:hidden" />
          </div>

          <div className="font-bold text-4xl lg:text-[3rem] leading-[4rem] lg:leading-[4.5rem]">
            <div
              className="text-left"
              style={{
                backgroundImage:
                  'linear-gradient(90deg, rgb(0, 124, 240), rgb(0, 223, 216))',
                backgroundClip: 'text',
                '-webkit-background-clip': 'text',
                color: 'transparent',
              }}
            >
              <div>
                <span className="italic">Đọc</span> mọi lúc mọi nơi
              </div>
              <div>Ban đêm hay ban ngày</div>
              <div>Điện thoại hay máy tính</div>
              <div>Tóm tắt với sơ đồ</div>
            </div>
          </div>
          <div className="flex flex-row md:justify-center font-bold text-4xl lg:text-[3rem] leading-[4rem] lg:leading-[4.5rem]">
            <div
              className=""
              style={{
                backgroundImage:
                  'linear-gradient(90deg, rgb(121, 40, 202), rgb(255, 0, 128))',
                backgroundClip: 'text',
                '-webkit-background-clip': 'text',
                color: 'transparent',
              }}
            >
              <div>
                <span className="italic">Hiểu</span> đúng như luật nói
              </div>
              <div>Gồm toàn bộ nội dung</div>
              <div>Liên kết đến giải thích</div>
              <div>Chi li nhưng chí lý</div>
            </div>
          </div>
          <div className="flex flex-row md:justify-end font-bold text-4xl lg:text-[3rem] leading-[4rem] lg:leading-[4.5rem]">
            <div
              className="md:pl-64 whitespace-nowrap"
              style={{
                backgroundImage:
                  'linear-gradient(90deg, rgb(255, 77, 77), rgb(249, 203, 40))',
                backgroundClip: 'text',
                '-webkit-background-clip': 'text',
                color: 'transparent',
              }}
            >
              <div className="font-bold">
                <span className="italic">Chia sẻ</span> để cùng hiểu
              </div>
              <div>Trong một nốt nhạc</div>
              <div>Đến đúng điểm</div>
              <div>Xem trước nội dung</div>
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
