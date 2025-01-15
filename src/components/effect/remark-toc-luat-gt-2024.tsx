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
      if (spinner) {
        spinner.style.display = 'none'
      }

      // Enable scroll
      body.style.overflow = 'initial'
    }, 500)

    return () => {
      body.classList.remove('body-bg-markdown')
    }
  }, [router.replace])
  return null
}
