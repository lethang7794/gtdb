import type { Metadata } from 'next'
import BaseLink from '@/components/base-link'
import { Logo } from '@/components/block/logo'
import { env } from '@/env.mjs'

export const metadata: Metadata = {
  title: 'Nội dung',
}

const EMAIL = env.NEXT_PUBLIC_EMAIL

export default function ContentPage() {
  return (
    <main className="grow flex flex-col justify-between p-6 md:p-8">
      <div className="container">
        <h1 className="text-center text-4xl font-bold">Nội dung</h1>
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
            href={`mailto:${EMAIL}?subject=Phản ánh nội dung&body=Có sai sót ở link: X. Nội dung sai: Y. Nên sửa thành: Z`}
            className="text-blue-500 hover:underline"
          >
            {EMAIL}
          </a>
        </div>
      </div>
    </main>
  )
}
