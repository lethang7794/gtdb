import { isDieu, isKhoan, vbplSectionExplain } from '@/lib/vbpl-explain-section'
import type { ReactNode } from 'react'
import AnchorLinkClient from './anchor-link.client'

type Props = {
  id: string
  children: ReactNode
}

export default function AnchorLink({ id, children }: Props) {
  const explain = vbplSectionExplain(id).path
  const El = isDieu(id) || isKhoan(id) ? 'button' : 'span'

  return (
    <>
      <span id={id} />
      <AnchorLinkClient id={id} explain={explain} element={El}>
        {children}
      </AnchorLinkClient>
    </>
  )
}
