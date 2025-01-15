import { Logo } from '@/components/block/logo'
import BaseLink from '@/components/base-link'

export function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 border-t">
      <div className="w-full max-w-screen-xl mx-auto p-4 px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <BaseLink
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Logo className="min-w-24" />
          </BaseLink>
          <ul className="flex flex-wrap items-center mb-4 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="/about" className="hover:underline me-4">
                Giới thiệu
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-4 border-gray-200 sm:mx-auto dark:border-gray-700" />
        <span className="block text-sm text-gray-500 text-center dark:text-gray-400">
          ©{' '}
          <BaseLink href="/about" className="hover:underline">
            gtdb
          </BaseLink>
        </span>
      </div>
    </footer>
  )
}
