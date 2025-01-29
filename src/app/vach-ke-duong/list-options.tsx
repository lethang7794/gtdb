'use client'

import {
  ReadonlyURLSearchParams,
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation'
import React, { useLayoutEffect } from 'react'
import { GalleryVerticalEnd, Grid2x2, Grid3x3 } from 'lucide-react'
import { cn } from '@/lib/utils'

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
      const wrapper = document.getElementById('layout-wrapper')
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
      <div className="mt-4 flex items-center">
        Hiển thị:
        <div
          onClick={(e) => {
            handleChangeLayoutState(searchParams, 'one-col')
          }}
          className={cn(
            'ml-2 flex flex-wrap justify-center gap-1 border p-3',
            layout === 'one-col' && 'bg-gray-500 text-white'
          )}
        >
          <GalleryVerticalEnd size="24" />1 cột
        </div>
        <div
          onClick={(e) => {
            handleChangeLayoutState(searchParams, 'less-cols')
          }}
          className={cn(
            'flex flex-wrap justify-center gap-1 border border-l-0 p-3',
            layout === 'less-cols' && 'bg-gray-500 text-white'
          )}
        >
          <Grid2x2 size="24" />
          Ít cột
        </div>
        <div
          onClick={(e) => {
            handleChangeLayoutState(searchParams, 'more-cols')
          }}
          className={cn(
            'flex flex-wrap justify-center gap-1 border border-l-0 p-3',
            layout === 'more-cols' && 'bg-gray-500 text-white'
          )}
        >
          <Grid3x3 size="24" />
          Nhiều cột
        </div>
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
