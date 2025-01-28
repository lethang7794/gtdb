import BaseLink from '@/components/base-link'
import { Logo } from '@/components/block/logo'
import { constants } from '@/constant'
import { env } from '@/env.mjs'

export function Footer() {
  return (
    <footer className="border-t bg-white shadow-sm dark:bg-gray-900">
      <div className="mx-auto w-full max-w-(--breakpoint-xl) p-4 px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <BaseLink
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Logo className="min-w-24" />
          </BaseLink>
          <ul className="mb-4 flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mb-0">
            <li>
              <BaseLink
                href={constants.paths.thongTin.noiDung}
                className="me-4 hover:underline"
              >
                Nội dung
              </BaseLink>
            </li>
            <li>
              <BaseLink
                href={constants.paths.thongTin.gioiThieu}
                className="me-4 hover:underline"
              >
                Giới thiệu
              </BaseLink>
            </li>
          </ul>
        </div>
        <hr className="my-4 border-gray-200 dark:border-gray-700 sm:mx-auto" />
        <span className="block text-center text-sm text-gray-500 dark:text-gray-400">
          ©{' '}
          <BaseLink href="/about" className="hover:underline">
            {env.NEXT_PUBLIC_BRAND_SHORT}
          </BaseLink>
        </span>
      </div>
    </footer>
  )
}
