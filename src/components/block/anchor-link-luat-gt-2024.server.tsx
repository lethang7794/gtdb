import React from 'react'
import type { ReactNode } from 'react'
import { isDieu, isKhoan, vbplSectionExplain } from '@/lib/vbpl-explain-section'

type Props = {
  id: string
  children: ReactNode
}

export default function AnchorLinkLuatGT2024({ id, children }: Props) {
  const explain = vbplSectionExplain(id).path
  const El = isDieu(id) || isKhoan(id) ? 'button' : 'span'

  return (
    <>
      <span id={id} />
      {children}
    </>
  )
}
