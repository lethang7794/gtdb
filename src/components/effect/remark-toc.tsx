'use client'

import { useEffect, useLayoutEffect } from 'react'
import { useRouter } from 'next/navigation'
import { extractSectionIds } from '@/lib/extract-section-ids'

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

    const hash = window.location.hash
    const id = decodeURI(hash.replace('#', ''))

    let { firstId, secondId, thirdId } = extractSectionIds(id)

    let first: Element | null = null
    let second: Element | null = null
    let third: Element | null = null
    first =
      document.querySelector(`h4:has(.anchor-link[id*="${firstId}"])`) ||
      document.querySelector(`h2:has(.anchor-link[id*="${firstId}"])`)
    second =
      document.querySelector(`h3:has(.anchor-link[id*="${secondId}"])`) ||
      document.querySelector(`h5:has(.anchor-link[id*="${secondId}"])`)
    third = document.querySelector(`p:has(.anchor-link[id*="${thirdId!}"])`)
    third!?.classList.add('section-third')
    second!?.classList.add('section-second')
    first!?.classList.add('section-first')
  }, [router])

  useEffect(() => {
    // Cleanup TOC
    const tocItems = document.querySelectorAll(
      '#mục-lục + ul li > a .anchor-link'
    )
    for (const item of [...tocItems]) {
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
      const tocButtonItems = document.querySelectorAll('#mục-lục + ul button')
      for (const item of Array.from(tocButtonItems)) {
        item.setAttribute('tabindex', '-1')
      }
    }, 1000)
  }, [])
  return null
}
