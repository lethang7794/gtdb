import type { ReactNode } from 'react'
import { isDieu, isKhoan, vbplSectionExplain } from '@/lib/vbpl-explain-section'
import AnchorLinkLuatGT2024Client from './anchor-link-luat-gt-2024.client'

type Props = {
  id: string
  children: ReactNode
}

export default function AnchorLinkLuatGT2024({ id, children }: Props) {
  const explain = vbplSectionExplain(id).path
  const El = isDieu(id) || isKhoan(id) ? 'button' : 'span'

  return (
    <>
      <span id={id} className="anchor-link-target" />
      <AnchorLinkLuatGT2024Client id={id} explain={explain} element={El}>
        {children}
      </AnchorLinkLuatGT2024Client>
    </>
  )
}
