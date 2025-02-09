import { NavHeader } from '@/components/block/nav-header'
import { MainLayout } from '@/components/layout/main-layout'
import { constants } from '@/constant'
import Image from 'next/image'

export default async function GioiThieuPage() {
  return (
    <>
      <NavHeader backHref={constants.paths.root} title="Giới thiệu" />
      <MainLayout className="bg-[linear-gradient(to_bottom,#dbf4ff,#fff1f1)]">
        <div className="container pb-8">
          <div className="flex h-auto w-full flex-col items-center justify-start text-center font-bold tracking-[-2] lg:h-[calc(100vh-var(--header-height))] lg:flex-row lg:justify-center">
            <div className="h-16 lg:hidden" />
            <div className="flex w-full flex-col px-8 text-4xl leading-[4rem] sm:w-[412px] md:w-[480px] lg:px-0 lg:text-[7.5rem] lg:leading-[10rem]">
              <div
                className="text-left lg:-ml-48 lg:text-center"
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
                className="text-right whitespace-nowrap lg:-mr-28 lg:text-center"
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
            <div className="ml-8 flex flex-col justify-center gap-6 text-left text-2xl lg:ml-16 lg:text-4xl">
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

          <div className="text-4xl leading-[4rem] font-bold lg:text-[3rem] lg:leading-[4.5rem]">
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
                  <div className="relative w-64 m:w-96">
                    <div className="relative mr-16 mb-16 aspect-square overflow-hidden rounded-[32px] border-2">
                      <Image
                        fill
                        src="/assets/showcase/moi-luc-light-mode.png"
                        alt="Đọc mọi lúc với chế độ sáng"
                      />
                    </div>
                    <div className="absolute top-16 left-16 w-52 m:w-80">
                      <div className="aspect-square overflow-hidden rounded-[32px]">
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
                  <div className="relative w-64 m:w-96">
                    <div className="relative mr-16 mb-16 aspect-square overflow-hidden rounded-[32px] border-2">
                      <Image
                        fill
                        src="/assets/showcase/moi-noi-desktop.png"
                        alt="Đọc mọi nơi trên máy tính"
                      />
                    </div>
                    <div className="absolute top-16 left-16 w-52 m:w-80">
                      <div className="aspect-square overflow-hidden rounded-[32px]">
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
                    <div className="relative mr-0 mb-0 aspect-square overflow-hidden rounded-[32px] border-2">
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
                    <div className="relative mr-0 mb-0 aspect-2/1 overflow-hidden rounded-[32px] border-2">
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
                    <div className="relative mr-0 mb-0 aspect-1/1 overflow-hidden rounded-[32px] border-2">
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

          <div className="mt-16 flex flex-row text-4xl leading-[4rem] font-bold sm:justify-center lg:text-[3rem] lg:leading-[4.5rem]">
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
                  <div className="relative w-64 m:w-96">
                    <div className="relative mr-0 mb-0 aspect-square overflow-hidden rounded-[32px] border-2">
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
                  <div className="relative w-64 m:w-96">
                    <div className="relative mr-0 mb-0 aspect-square overflow-hidden rounded-[32px] border-2">
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
              <div className="mt-4 -ml-8 m:ml-8 flex justify-start">
                <div className="relative w-96">
                  <div className="relative mr-32 mb-32 aspect-square overflow-hidden rounded-[32px] border-2">
                    <Image
                      fill
                      src="/assets/showcase/bien-bao-giao-thong-001.png"
                      alt="Biển báo giao thông - 1"
                    />
                  </div>
                  <div className="absolute top-16 left-16 w-64">
                    <div className="aspect-square overflow-hidden rounded-[32px]">
                      <Image
                        fill
                        src="/assets/showcase/bien-bao-giao-thong-002.png"
                        alt="Biển báo giao thông - 2"
                        className="rounded-[32px]"
                      />
                    </div>
                  </div>
                  <div className="absolute top-32 left-32 w-64">
                    <div className="aspect-square overflow-hidden rounded-[32px]">
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
                <div className="relative w-64 m:w-96">
                  <div className="relative mr-0 mb-0 aspect-square overflow-hidden rounded-[32px] border-2">
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
                <div className="relative w-64 m:w-96">
                  <div className="relative mr-0 mb-0 aspect-square overflow-hidden rounded-[32px] border-2">
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
                <div className="relative w-64 m:w-96">
                  <div className="relative mr-0 mb-0 aspect-square overflow-hidden rounded-[32px] border-2">
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
          <div className="mt-16 flex flex-row text-4xl leading-[4rem] font-bold sm:justify-end lg:text-[3rem] lg:leading-[4.5rem]">
            <div
              className="whitespace-nowrap md:pl-64"
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
                <div className="relative w-80 m:w-96">
                  <div className="relative mr-0 mb-0 aspect-2/1 overflow-hidden rounded-[32px] border-2">
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
                <div className="relative w-80 m:w-96">
                  <div className="relative mr-0 mb-0 aspect-2/1 overflow-hidden rounded-[32px] border-2">
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
                <div className="relative w-80 m:w-96">
                  <div className="relative mr-0 mb-0 aspect-1200/630 overflow-hidden rounded-[32px] border-2">
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
        </div>
      </MainLayout>
    </>
  )
}
