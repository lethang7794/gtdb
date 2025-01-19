import type { Metadata } from 'next'
import BaseLink from '@/components/base-link'
import { Logo } from '@/components/block/logo'

export const metadata: Metadata = {
  title: 'Giới thiệu',
}

export default function AboutPage() {
  return (
    <main className="grow flex flex-col justify-between p-6 md:p-8">
      <div className="container">
        <h1 className="text-center text-4xl font-bold">Giới thiệu</h1>
        <div className="mt-8 text-2xl text-gray-500">
          <Logo className="!h-8 -mb-2" display="inline-block" /> là dự án cá
          nhân nhằm phổ biến các <b>kiến thức về an toàn giao thông đường bộ</b>{' '}
          đến tất cả mọi người dân tham gia giao thông ở Việt Nam.
        </div>
        <div className="mt-4 text-2xl text-gray-500">
          - Dự án khởi đầu là nơi để tác giả tra cứu luật, tài liệu, biển báo
          giao thông... trong quá trình học lái xe vào giữa năm 2024.
        </div>
        <div className="mt-4 text-2xl text-gray-500">
          - Đến đầu năm 2025, với mong muốn mọi người dân có thể dễ dàng{' '}
          <em>tra cứu, tìm hiểu, chia sẻ, tranh luận</em> về{' '}
          <b>Nghị định 168</b> cũng như{' '}
          <b>Luật Trật tự, an toàn giao thông đường bộ 2024</b>, tác giả đã hoàn
          thiện dự án với các tính năng mới:
          <br />
          <div className="ml-8">+ Tóm tắt với sơ đồ tư duy.</div>
          <div className="ml-8">+ Mục lục.</div>
          <div className="ml-8">+ Chia sẻ đường dẫn đến Điều/khoản/điểm.</div>
          <div className="ml-8">+ Hiện hình ảnh xem trước khi chia sẻ.</div>
        </div>

        <div className="mt-4 text-2xl text-gray-500">
          Tất cả văn bản pháp luật tại{' '}
          <Logo className="!h-8 -mb-2" display="inline-block" /> đều được trích
          dẫn nguyên văn từ{' '}
          <BaseLink
            href="https://vbpl.vn/"
            className="text-blue-500 hover:underline"
          >
            Cơ sở dữ liệu quốc gia về văn bản pháp luật
          </BaseLink>
          , nếu có sai sót xin phản ánh tới email{' '}
          <a
            href="mailto:gtdb.app@gmail.com?subject=Phản ánh nội dung&body=Có sai sót ở link: X. Nội dung sai: Y. Nên sửa thành: Z"
            className="text-blue-500 hover:underline"
          >
            gtdb.app@gmail.com
          </a>
        </div>
      </div>
    </main>
  )
}
