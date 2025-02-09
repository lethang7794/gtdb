import type { Metadata } from 'next'
import BaseLink from '@/components/base-link'
import { Logo } from '@/components/block/logo'
import { env } from '@/env.mjs'
import { MainLayout } from '@/components/layout/main-layout'
import { NavHeader } from '@/components/block/nav-header'
import { constants } from '@/constant'

export const metadata: Metadata = {
  title: 'Nội dung',
}

const EMAIL = env.NEXT_PUBLIC_EMAIL

export default function ContentPage() {
  return (
    <>
      <NavHeader backHref={constants.paths.root} title="Nội dung" />
      <MainLayout className="container">
        {/* <h1 className="text-center text-4xl font-bold">Nội dung</h1> */}
        <div className="mt-4 text-2xl text-gray-500">
          Tất cả văn bản pháp luật tại{' '}
          <Logo
            withBackground
            classNameWrapper="-mb-2 inline-block"
            className="h-8 w-16"
          />{' '}
          đều được trích dẫn nguyên văn từ{' '}
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
      </MainLayout>
    </>
  )
}
