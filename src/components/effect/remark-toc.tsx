'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function RemarkTOCEffect() {
  const router = useRouter()

  useEffect(() => {
    // Disable scroll
    const body = document.body
    body.style.overflow = 'hidden'
    // Add background for body
    body.classList.add('body-bg-markdown')

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

    // const href = window.location.href
    // const hash = window.location.hash
    // const parts = hash?.split('.') || []
    // if (parts.length > 1) {
    //   parts.pop()
    // }
    // const href =
    //   window.location.origin + window.location.pathname + parts.join('.')
    // console.log({ hash, parts, href, 'window.location': window.location })
    // const hash = window.location.hash
    // const id = hash.replace('#', '')
    // if (!id) {
    //   return
    // }
    // const el = document.getElementById(id)
    // el?.scrollIntoView({ behavior: 'instant' })

    setTimeout(() => {
      // Remove spinner
      const spinner = document.getElementById('spinner')
      if (spinner) {
        spinner.style.display = 'none'
      }

      // Enable scroll
      body.style.overflow = 'initial'
    }, 0)

    return () => {
      body.classList.remove('body-bg-markdown')
    }
  }, [router])
  return null
}
