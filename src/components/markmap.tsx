'use client'

import type React from 'react'
import { useRouter } from 'next/navigation'
import { useState, useRef, useEffect, type ReactNode } from 'react'
import { useKeyPress } from 'ahooks'
import { loadCSS, loadJS, Markmap } from 'markmap-view'
import { Toolbar } from 'markmap-toolbar'
import { Transformer } from 'markmap-lib'
import type { IMarkmapOptions } from 'markmap-common'
import * as markmap from 'markmap-view'
import 'markmap-toolbar/dist/style.css'
import '@/style/markmap.css'
import { cn } from '@/lib/utils'

const initValue = `# markmap

- beautiful
- useful
- easy
- interactive
`

interface MarkmapRenderProps {
  data?: string
  extra?: ReactNode
  options?: Partial<IMarkmapOptions>
  className?: string
  classNameSvg?: string
}

export default function MarkmapRender({
  data,
  extra,
  options = {},
  className,
  classNameSvg,
}: MarkmapRenderProps) {
  const router = useRouter()
  const [value, setValue] = useState(data || initValue)

  // Ref for SVG element
  const refSvg = useRef<SVGSVGElement>(null)
  // Ref for markmap object
  const refMm = useRef<Markmap>()
  // Ref for toolbar wrapper
  const refToolbar = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Create markmap and save to refMm
    if (refMm.current || !refToolbar.current || !refSvg.current) return
    const mm = Markmap.create(refSvg.current, {
      autoFit: true,
      spacingVertical: 12,
      ...options,
    })
    refMm.current = mm
    renderToolbar(refMm.current, refToolbar.current)
  }, [options])

  useEffect(() => {
    // Update data for markmap once value is changed
    const mm = refMm.current
    if (!mm) return

    const transformer = new Transformer()
    const { scripts = [], styles = [] } = transformer.getAssets()
    loadCSS(styles)
    loadJS(scripts, { getMarkmap: () => markmap })

    const { root } = transformer.transform(value)
    mm.setData(root)
    // mm.fit()
  }, [value])

  useKeyPress('f', () => {
    refMm.current?.fit()
  })
  useKeyPress('a', () => {
    refMm.current?.rescale(0.8)
  })
  useKeyPress('s', () => {
    refMm.current?.rescale(1.25)
  })
  useKeyPress('c', () => {
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    refMm.current?.ensureView(refMm.current?.state.data!, undefined)
  })
  useKeyPress('h', () => {
    refSvg.current?.scrollIntoView({ behavior: 'smooth' })
    const cleanedHref = window.location.href.split(/[?#]/)[0]
    router.replace(`${cleanedHref}#tóm-tắt`)
  })

  return (
    <div className="relative grow h-full w-full markmap-wrapper">
      <svg className={cn('h-full w-full markmap', classNameSvg)} ref={refSvg} />
      {extra}
      <div className="absolute bottom-1 right-1" ref={refToolbar} />
    </div>
  )
}

function renderToolbar(mm: Markmap, wrapper: HTMLElement) {
  while (wrapper?.firstChild) wrapper.firstChild.remove()
  if (mm && wrapper) {
    const toolbar = new Toolbar()
    toolbar.attach(mm)
    // Register custom buttons
    // toolbar.register({
    //   id: 'alert',
    //   title: 'Click to show an alert',
    //   content: 'Alert',
    //   onClick: () => alert('You made it!'),
    // })
    const items = Toolbar.defaultItems.slice(0, -1)
    const swappedItems = [items[1], items[0], items[2]]
    toolbar.setItems(swappedItems)
    wrapper.append(toolbar.render())
  }
}
