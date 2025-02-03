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
    console.log('🚀 ~ useLayoutEffect ~ { firstId, secondId, thirdId }:', {
      firstId,
      secondId,
      thirdId,
    })

    let first: Element | null = null
    let second: Element | null = null
    let third: Element | null = null
    third = document.querySelector(`p:has(.anchor-link[id*="${thirdId!}"])`)
    second = document.querySelector(`p:has(.anchor-link[id*="${secondId}"])`)
    first = document.querySelector(`h3:has(.anchor-link[id*="${firstId}"])`)
    third!?.classList.add('luat-2024-section-third')
    second!?.classList.add('luat-2024-section-second')
    first!?.classList.add('luat-2024-section-first')
  }, [router])

  useEffect(() => {
    // Cleanup TOC
    const tocItems = document.querySelectorAll('#mục-lục + ul li > a')
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
      const firstChild = item.firstElementChild
      if (firstChild?.tagName === 'SPAN') {
        firstChild.removeAttribute('id')
      }
      const secondChild = firstChild?.nextElementSibling
      if (
        secondChild?.tagName === 'BUTTON' ||
        secondChild?.tagName === 'SPAN'
      ) {
        secondChild.removeAttribute('id')
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
