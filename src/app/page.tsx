import Link from 'next/link'
import { EXTRA_LINKS, LINKS, USEFUL_LINKS } from '@/constant/homepage-links'
import { Badge } from '@/components/ui/badge'
import { SquareArrowOutUpRight } from 'lucide-react'
import BaseLink from '@/components/base-link'
import ShareButton, {
  ShareButtonWrapper,
} from '@/components/block/share-button'
import Image from 'next/image'

export default async function Home() {
  return (
    <>
      <div className="flex h-full flex-col justify-start bg-[linear-gradient(to_bottom,#dbf4ff,#fff1f1)]">
        <div className="container pb-8">
          <div className="flex flex-col lg:flex-row h-auto lg:h-[calc(100vh-72px)] w-full items-center justify-start lg:justify-center tracking-[-2] font-bold text-center">
            <div className="h-16 lg:hidden" />
            <div className="flex flex-col text-4xl lg:text-[7.5rem] leading-[4rem] lg:leading-[10rem] w-full sm:w-[412px] md:w-[480px] px-8 lg:px-0">
              <div
                className="lg:-ml-48 text-left lg:text-center"
                style={{
                  backgroundImage:
                    'linear-gradient(90deg, rgb(0, 124, 240), rgb(0, 223, 216))',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
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
                  WebkitBackgroundClip: 'text',
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
                  WebkitBackgroundClip: 'text',
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
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
            >
              <div>
                <span className="italic">Đọc</span> mọi lúc mọi nơi
              </div>
              <div className="mt-4 text-3xl lg:text-[2.5rem] lg:leading-[4rem]">
                Ban ngày hay ban đêm
                <div className="mt-4 ml-8 flex justify-start">
                  <div className="relative w-96">
                    <div className="relative aspect-square rounded-[32px] overflow-hidden border-2 mb-16 mr-16">
                      <Image
                        fill
                        src="/assets/showcase/moi-luc-light-mode.png"
                        alt="Đọc mọi lúc với chế độ sáng"
                      />
                    </div>
                    <div className="absolute left-16 top-16 w-80">
                      <div className="aspect-square rounded-[32px] overflow-hidden">
                        <Image
                          fill
                          src="/assets/showcase/moi-luc-dark-mode.png"
                          alt="Đọc mọi lúc với chế độ tối"
                          className="rounded-[32px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-3xl lg:text-[2.5rem] lg:leading-[4rem]">
                Máy tính hay điện thoại
                <div className="mt-4 ml-8 flex justify-start">
                  <div className="relative w-96">
                    <div className="relative aspect-square rounded-[32px] overflow-hidden border-2 mb-16 mr-16">
                      <Image
                        fill
                        src="/assets/showcase/moi-noi-desktop.png"
                        alt="Đọc mọi nơi trên máy tính"
                      />
                    </div>
                    <div className="absolute left-16 top-16 w-80">
                      <div className="aspect-square rounded-[32px] overflow-hidden">
                        <Image
                          src="/assets/showcase/moi-noi-mobile.png"
                          fill
                          alt="Đọc mọi nơi trên điện thoại"
                          className="rounded-[32px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-3xl lg:text-[2.5rem] lg:leading-[4rem]">
                Tóm tắt với sơ đồ...
                <div className="mt-4 ml-8 flex justify-start">
                  <div className="relative w-96">
                    <div className="relative aspect-square rounded-[32px] overflow-hidden border-2 mb-0 mr-0">
                      <Image
                        fill
                        src="/assets/showcase/tom-tat-bang-so-do.png"
                        alt="Tóm tắt với sơ đồ tư duy"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-3xl lg:text-[2.5rem] lg:leading-[4rem]">
                ...có thể tương tác
                <div className="mt-4 ml-8 flex justify-start">
                  <div className="relative w-96">
                    <div className="relative aspect-[2/1] rounded-[32px] overflow-hidden border-2 mb-0 mr-0">
                      <Image
                        fill
                        src="/assets/showcase/tom-tat-bang-so-do-tuong-tac.png"
                        alt="Tương tác với sơ đồ tư duy"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-3xl lg:text-[2.5rem] lg:leading-[4rem]">
                Mục lục chi tiết
                <div className="mt-4 ml-8 flex justify-start">
                  <div className="relative w-96">
                    <div className="relative aspect-[1/1] rounded-[32px] overflow-hidden border-2 mb-0 mr-0">
                      <Image
                        fill
                        src="/assets/showcase/tom-tat-muc-luc.png"
                        alt="Mục lục chi tiết"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-row sm:justify-center font-bold text-4xl lg:text-[3rem] leading-[4rem] lg:leading-[4.5rem]">
            <div
              className=""
              style={{
                backgroundImage:
                  'linear-gradient(90deg, rgb(121, 40, 202), rgb(255, 0, 128))',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
            >
              <div>
                <span className="italic">Hiểu</span> đúng như luật nói
              </div>

              <div className="mt-4 text-3xl lg:text-[2.5rem] lg:leading-[4rem]">
                Số hóa đến từng chi tiết ...
              </div>
              <div className="mt-4 text-3xl lg:text-[2.5rem] lg:leading-[4rem]">
                ... dù là quốc hiệu
                <div className="mt-4 ml-8 flex justify-start">
                  <div className="relative w-96">
                    <div className="relative aspect-square rounded-[32px] overflow-hidden border-2 mb-0 mr-0">
                      <Image
                        fill
                        src="/assets/showcase/so-hoa-chi-tiet-quoc-hieu.png"
                        alt="Đọc mọi lúc với chế độ sáng"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-3xl lg:text-[2.5rem] lg:leading-[4rem]">
                ...hay người ký
                <div className="mt-4 ml-8 flex justify-start">
                  <div className="relative w-96">
                    <div className="relative aspect-square rounded-[32px] overflow-hidden border-2 mb-0 mr-0">
                      <Image
                        fill
                        src="/assets/showcase/so-hoa-chi-tiet-nguoi-ky.png"
                        alt="Đọc mọi lúc với chế độ sáng"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-3xl lg:text-[2.5rem] lg:leading-[4rem]">
                Không thiếu một biển báo
              </div>
              <div className="mt-4 ml-8 flex justify-start">
                <div className="relative w-96">
                  <div className="relative aspect-square rounded-[32px] overflow-hidden border-2 mb-32 mr-32">
                    <Image
                      fill
                      src="/assets/showcase/bien-bao-giao-thong-001.png"
                      alt="Biển báo giao thông - 1"
                    />
                  </div>
                  <div className="absolute left-16 top-16 w-64">
                    <div className="aspect-square rounded-[32px] overflow-hidden">
                      <Image
                        fill
                        src="/assets/showcase/bien-bao-giao-thong-002.png"
                        alt="Biển báo giao thông - 2"
                        className="rounded-[32px]"
                      />
                    </div>
                  </div>
                  <div className="absolute left-32 top-32 w-64">
                    <div className="aspect-square rounded-[32px] overflow-hidden">
                      <Image
                        fill
                        src="/assets/showcase/bien-bao-giao-thong-003.png"
                        alt="Biển báo giao thông - 3"
                        className="rounded-[32px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-3xl lg:text-[2.5rem] lg:leading-[4rem]">
                Bất kỳ vạch kẻ đường
              </div>
              <div className="mt-4 ml-8 flex justify-start">
                <div className="relative w-96">
                  <div className="relative aspect-square rounded-[32px] overflow-hidden border-2 mb-0 mr-0">
                    <Image
                      fill
                      src="/assets/showcase/vach-ke-duong.png"
                      alt="Vạch kẻ đường"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-8 text-3xl lg:text-[2.5rem] lg:leading-[4rem]">
                Liên kết đến giải thích
              </div>
              <div className="mt-4 ml-8 flex justify-start">
                <div className="relative w-96">
                  <div className="relative aspect-square rounded-[32px] overflow-hidden border-2 mb-0 mr-0">
                    <Image
                      fill
                      src="/assets/showcase/lien-ket-den-giai-thich.png"
                      alt="Liên kết đến giải thích"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8 text-3xl lg:text-[2.5rem] lg:leading-[4rem]">
                Chi li nhưng chí lý
              </div>
              <div className="mt-4 ml-8 flex justify-start">
                <div className="relative w-96">
                  <div className="relative aspect-square rounded-[32px] overflow-hidden border-2 mb-0 mr-0">
                    <Image
                      fill
                      src="/assets/showcase/chi-li-nhung-chi-ly.png"
                      alt="Chi li nhưng chí lý"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 flex flex-row sm:justify-end font-bold text-4xl lg:text-[3rem] leading-[4rem] lg:leading-[4.5rem]">
            <div
              className="md:pl-64 whitespace-nowrap"
              style={{
                backgroundImage:
                  'linear-gradient(90deg, rgb(255, 77, 77), rgb(249, 203, 40))',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
            >
              <div className="font-bold">
                <span className="italic">Chia sẻ</span> để cùng hiểu
              </div>

              <div className="mt-4 text-3xl lg:text-[2.5rem] lg:leading-[4rem]">
                Trong một nốt nhạc
              </div>
              <div className="mt-4 ml-8 flex justify-start">
                <div className="relative w-96">
                  <div className="relative aspect-[2/1] rounded-[32px] overflow-hidden border-2 mb-0 mr-0">
                    <Image
                      fill
                      src="/assets/showcase/chia-se-trong-mot-not-nhac.png"
                      alt="Chia sẻ trong một nốt nhác"
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-8 text-3xl lg:text-[2.5rem] lg:leading-[4rem]">
                Đến đúng điểm
              </div>
              <div className="mt-4 ml-8 flex justify-start">
                <div className="relative w-96">
                  <div className="relative aspect-[2/1] rounded-[32px] overflow-hidden border-2 mb-0 mr-0">
                    <Image
                      fill
                      src="/assets/showcase/chia-se-den-dung-diem.png"
                      alt="Đến đúng điểm"
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-8 text-3xl lg:text-[2.5rem] lg:leading-[4rem]">
                Xem trước nội dung
              </div>
              <div className="mt-4 ml-8 flex justify-start">
                <div className="relative w-96">
                  <div className="relative aspect-[1200/630] rounded-[32px] overflow-hidden border-2 mb-0 mr-0">
                    <Image
                      fill
                      src="/assets/showcase/chia-se-xem-truoc.png"
                      alt="Xem trước nội dung"
                      className="object-cover object-top"
                    />
                  </div>
                </div>
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
