'use client'

import { useEffect, useLayoutEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function RemarkTOCEffect() {
  const router = useRouter()

  useLayoutEffect(() => {
    // Add background for body
    // const body = document.body
    // body.classList.add('body-bg-markdown')

    // Go to fragment
    router.replace(window.location.href)

    // Or - doesn't work
    // const hash = window.location.hash
    // const id = hash.replace('#', '')
    // const el = document.getElementById(id)
    // el?.scrollIntoView({ behavior: 'smooth' })

    // return () => {
    //   body.classList.remove('body-bg-markdown')
    // }
  }, [router])

  useEffect(() => {
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

    // Show TOC after go to id
    const liItems = document.querySelectorAll('h2#mục-lục + ul > li')
    for (const item of Array.from(liItems)) {
      item.classList.add('display-revert')
    }

    // Remove tabIndex of markmap and toc
    setTimeout(() => {
      const markmapAnchorItems = document.querySelectorAll('#tóm-tắt a')
      for (const item of Array.from(markmapAnchorItems)) {
        item.setAttribute('tabindex', '-1')
      }

      const tocAnchorItems = document.querySelectorAll('#mục-lục + ul a')
      for (const item of Array.from(tocAnchorItems)) {
        item.setAttribute('tabindex', '-1')
      }
    }, 1000)
  }, [])
  return null
}
