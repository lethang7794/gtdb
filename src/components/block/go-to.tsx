'use client'

import { cn } from '@/lib/utils'
import {
  isDiem,
  isKhoan,
  isDieu,
  isChuong,
  isMuc,
} from '@/lib/vbpl-explain-section'
import { useLayoutEffect, useState } from 'react'

export default function GoTo() {
  const [sections, setSections] = useState<{
    firstId?: string
    firstPrefix?: string
    firstShortId?: string
    secondId?: string
    secondPrefix?: string
    secondShortId?: string
    thirdId?: string
    thirdPrefix?: string
    thirdShortId?: string
  }>({})

  useLayoutEffect(() => {
    const hash = window.location.hash
    const id = decodeURI(hash.replace('#', ''))

    if (!id) {
      return
    }

    let firstId = ''
    let secondId = ''
    let thirdId = ''
    let firstShortId = ''
    let secondShortId = ''
    let thirdShortId = ''
    let firstPrefix = ''
    let secondPrefix = ''
    let thirdPrefix = ''
    if (isDiem(id)) {
      const [dieuId, khoanId, diemId] = id.split('.')
      firstId = dieuId
      secondId = `${dieuId}.${khoanId}`
      thirdId = id
      firstShortId = dieuId
      secondShortId = khoanId
      thirdShortId = diemId
      firstPrefix = 'Điều'
      secondPrefix = 'khoản'
      thirdPrefix = 'điểm'
    }
    if (isKhoan(id)) {
      const [dieuId, khoanId] = id.split('.')
      firstId = dieuId
      secondId = `${dieuId}.${khoanId}`
      firstShortId = dieuId
      secondShortId = khoanId
      firstPrefix = 'Điều'
      secondPrefix = 'Khoản'
    }
    if (isDieu(id)) {
      const [dieuId] = id.split('.')
      firstId = dieuId
      firstPrefix = 'Điều'
      firstShortId = dieuId
    }
    if (isChuong(id)) {
      const [chuongId] = id.split('.')
      firstId = chuongId
      firstPrefix = 'Chương'
      firstShortId = chuongId
    }
    if (isMuc(id)) {
      const [chuongId, mucId] = id.split('.')
      firstId = chuongId
      secondId = `${chuongId}${mucId}`
      firstShortId = chuongId
      secondShortId = mucId
      firstPrefix = 'Chương'
      secondPrefix = 'Mục'
    }

    setSections({
      firstId,
      secondId,
      thirdId,
      firstPrefix,
      secondPrefix,
      thirdPrefix,
      firstShortId,
      secondShortId,
      thirdShortId,
    })
  }, [])

  const sectionsArray = [
    {
      id: sections.thirdId,
      shortId: sections.thirdShortId,
      prefix: sections.thirdPrefix,
      type: 'third',
    },
    {
      id: sections.secondId,
      shortId: sections.secondShortId,
      prefix: sections.secondPrefix,
      type: 'second',
    },
    {
      id: sections.firstId,
      shortId: sections.firstShortId,
      prefix: sections.firstPrefix,
      type: 'first',
    },
  ].filter((s) => s.id)
  return (
    <div className="flex flex-col-reverse gap-2">
      {sectionsArray?.map((s) => {
        return (
          <button
            key={s.id}
            type="button"
            onClick={() => {
              const el = document.getElementById(`${s.id}`)
              el?.scrollIntoView({ behavior: 'smooth' })
            }}
            className={cn(
              'rounded-md p-2 opacity-100 shadow-xs',
              `go-to-section-${s.type}`
            )}
          >
            {`${s.prefix} ${s.shortId}`}
          </button>
        )
      })}
    </div>
  )
}

export function ShareButtonWrapper({
  children,
  className,
}: {
  children?: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn('fixed bottom-2 left-2 z-20 flex', className)}>
      {children}
    </div>
  )
}
