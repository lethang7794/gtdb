'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function RemarkTOCEffect() {
  const router = useRouter()

  useEffect(() => {
    // Add background for body
    const body = document.body
    body.classList.add('body-bg-markdown')

    // Go to fragment
    router.replace(window.location.href)

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

    // setTimeout(() => {
    //   // Remove spinner
    //   const spinner = document.getElementById('spinner')
    //   if (spinner) {
    //     spinner.style.display = 'none'
    //   }

    //   // Enable scroll
    //   body.style.overflow = 'initial'
    // }, 0)

    // Show TOC after go to id
    const liItems = document.querySelectorAll('h2#mục-lục + ul > li')
    for (const item of Array.from(liItems)) {
      item.classList.add('display-revert')
    }

    return () => {
      body.classList.remove('body-bg-markdown')
    }
  }, [router])
  return null
}
