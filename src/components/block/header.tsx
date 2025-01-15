'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { env } from '@/env.mjs'
import { EXTRA_LINKS, LINKS, USEFUL_LINKS } from '@/constant/homepage-links'
import BaseLink from '@/components/base-link'
import { Logo } from '@/components/block/logo'

const products = LINKS.map((item) => ({
  ...item,
  href: item.url,
}))
const others = USEFUL_LINKS.map((item) => ({
  ...item,
  href: item.url,
}))
const extra = EXTRA_LINKS.map((item) => ({
  ...item,
  href: item.url,
}))

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="mx-auto !flex max-w-7xl items-center justify-between p-6 py-3 lg:px-8 border-gray-200 border-b-[1px]"
        style={{
          display: 'none',
        }}
      >
        <div className="flex lg:flex-1">
          <BaseLink href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">
              {`${env.NEXT_PUBLIC_BRAND_SHORT} - ${env.NEXT_PUBLIC_BRAND_SLOGAN}`}
            </span>
            <Logo className="min-w-24" />
          </BaseLink>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        <PopoverGroup
          className="hidden lg:!flex lg:gap-x-12"
          style={{
            display: 'none',
          }}
        >
          <Popover className="relative">
            {({ close }) => (
              <>
                <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
                  VBPL
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="size-5 flex-none text-gray-400"
                  />
                </PopoverButton>

                <PopoverPanel
                  transition
                  className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <div className="p-4">
                    {products.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                      >
                        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
                        <div className="flex-auto" onClick={() => close()}>
                          <BaseLink
                            href={item.href}
                            className="block font-semibold text-gray-900"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </BaseLink>
                          <p className="mt-1 text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </PopoverPanel>
              </>
            )}
          </Popover>

          <Popover className="relative">
            {({ close }) => (
              <>
                <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
                  Tổng hợp
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="size-5 flex-none text-gray-400"
                  />
                </PopoverButton>

                <PopoverPanel
                  transition
                  className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <div className="p-4">
                    {others.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                      >
                        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
                        <div className="flex-auto" onClick={() => close()}>
                          <BaseLink
                            href={item.href}
                            className="block font-semibold text-gray-900"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </BaseLink>
                          <p className="mt-1 text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </PopoverPanel>
              </>
            )}
          </Popover>

          <Popover className="relative">
            {({ close }) => (
              <>
                <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
                  Links
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="size-5 flex-none text-gray-400"
                  />
                </PopoverButton>

                <PopoverPanel
                  transition
                  className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <div className="p-4">
                    {extra.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                      >
                        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
                        <div className="flex-auto" onClick={() => close()}>
                          <BaseLink
                            href={item.href}
                            className="block font-semibold text-gray-900"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </BaseLink>
                          <p className="mt-1 text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </PopoverPanel>
              </>
            )}
          </Popover>

          {/* <a href="#" className="text-sm/6 font-semibold text-gray-900">
            Features
          </a>*/}
        </PopoverGroup>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {/* <a href="#" className="text-sm/6 font-semibold text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a> */}
          {/* TODO: add source code */}
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-3 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <BaseLink href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">
                {`${env.NEXT_PUBLIC_BRAND_SHORT} - ${env.NEXT_PUBLIC_BRAND_SLOGAN}`}
              </span>
              <Logo className="min-w-24" />
            </BaseLink>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure defaultOpen as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Văn bản pháp luật
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products].map((item) => (
                      // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
                      <div
                        key={item.name}
                        onClick={() => {
                          setMobileMenuOpen(false)
                        }}
                      >
                        <BaseLink
                          href={item.href}
                          className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                        >
                          {item.name}
                        </BaseLink>
                      </div>
                    ))}
                  </DisclosurePanel>
                </Disclosure>

                <Disclosure defaultOpen as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Tổng hợp
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...others].map((item) => (
                      // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
                      <div
                        key={item.name}
                        onClick={() => {
                          setMobileMenuOpen(false)
                        }}
                      >
                        <BaseLink
                          href={item.href}
                          className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                        >
                          {item.name}
                        </BaseLink>
                      </div>
                    ))}
                  </DisclosurePanel>
                </Disclosure>

                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Links
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...extra].map((item) => (
                      // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
                      <div
                        key={item.name}
                        onClick={() => {
                          setMobileMenuOpen(false)
                        }}
                      >
                        <BaseLink
                          href={item.href}
                          className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                        >
                          {item.name}
                        </BaseLink>
                      </div>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
                <div
                  onClick={() => {
                    setMobileMenuOpen(false)
                  }}
                >
                  <BaseLink
                    href="/about"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Giới thiệu
                  </BaseLink>
                </div>
              </div>
              {/* <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div> */}
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
