'use client'

import { useLayoutEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function NghiDinh168Effect() {
  const router = useRouter()

  useLayoutEffect(() => {
    // Cleanup TOC
    const tocItems = document.querySelectorAll('#mục-lục + ul li > a > span')
    for (const item of Array.from(tocItems)) {
      const id = item.id
      item.removeAttribute('id')
      const parent = item.parentElement
      if (parent?.tagName === 'A' && id) {
        parent.setAttribute('href', `#${id}`)
      }
    }

    // Cleanup headings
    const headingItems = document.querySelectorAll('a > span')
    for (const item of Array.from(headingItems)) {
      const id = item.id
      item.removeAttribute('id')
      const parent = item.parentElement
      if (id && parent?.tagName === 'A') {
        parent.setAttribute('href', `#${id}`)

        const grand = parent.parentElement
        if (
          id &&
          (grand?.tagName === 'H2' ||
            grand?.tagName === 'H3' ||
            grand?.tagName === 'H4' ||
            grand?.tagName === 'H5' ||
            grand?.tagName === 'H6')
        ) {
          grand.setAttribute('id', `${id}`)
        }
      }
    }

    // Go to fragment
    router.replace(window.location.href)
  }, [router.replace])
  return null
}
