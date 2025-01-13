'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function RemarkTOCEffect() {
  const router = useRouter()

  useEffect(() => {
    // Disable scroll
    const body = document.body
    body.style.overflow = 'hidden'

    // Cleanup TOC
    const tocItems = document.querySelectorAll(
      '#mục-lục + ul li > a .anchor-link'
    )
    for (const item of Array.from(tocItems)) {
      const id = item.id
      item.removeAttribute('id')
      const parent = item.parentElement
      if (parent?.tagName === 'SPAN') {
        const grand = parent.parentElement
        if (id && grand?.tagName === 'A') {
          grand.removeAttribute('id')
          grand.setAttribute('href', `#${id}`)
        }
      }
    }

    // Go to fragment
    router.replace(window.location.href)

    setTimeout(() => {
      // Remove spinner
      const spinner = document.getElementById('spinner')
      spinner?.remove()

      // Enable scroll
      body.style.overflow = 'initial'
    }, 500)
  }, [router.replace])
  return null
}
