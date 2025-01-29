'use client'

import {
  ReadonlyURLSearchParams,
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation'
import React, { useLayoutEffect } from 'react'

const DEFAULT_LAYOUT = 'more-cols'

type PostsSearchProps = {
  placeholder: string
}

type ListOptionsProps = {
  children?: React.ReactNode
}

export function ListOptions({ children }: ListOptionsProps) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const [layout, setLayout] = React.useState(() => {
    return getLayout(searchParams)
  })

  useLayoutEffect(() => {
    const layout = getLayout(searchParams)

    const handleChangeLayout = (
      searchParams: ReadonlyURLSearchParams,
      layout: string = ''
    ) => {
      const wrapper = document.getElementById('bbgt-layout-wrapper')
      if (!wrapper) {
        return
      }
      wrapper.className = layout
      wrapper.classList.remove('opacity-0')
    }

    handleChangeLayout(searchParams, layout)
  }, [pathname, replace, searchParams])

  const handleChangeLayoutState = (
    searchParams: ReadonlyURLSearchParams,
    layout: string
  ) => {
    const params = new URLSearchParams(searchParams)

    if (layout) {
      params.set('layout', layout)
    } else {
      params.delete('layout')
    }

    setLayout(layout)

    replace(`${pathname}?${params.toString()}`, {
      scroll: false,
    })
  }

  return (
    <>
      Current layout: {layout}
      <div
        onClick={(e) => {
          handleChangeLayoutState(searchParams, 'one-col')
        }}
      >
        One
      </div>
      <div
        onClick={(e) => {
          handleChangeLayoutState(searchParams, 'less-cols')
        }}
      >
        Small
      </div>
      <div
        onClick={(e) => {
          handleChangeLayoutState(searchParams, 'more-cols')
        }}
      >
        Big
      </div>
      {children}
    </>
  )
}
function getLayout(searchParams: ReadonlyURLSearchParams) {
  const params = new URLSearchParams(searchParams)
  const layout = params.get('layout')
  return layout || DEFAULT_LAYOUT
}
