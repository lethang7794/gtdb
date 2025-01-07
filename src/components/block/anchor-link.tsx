'use client'

import React from 'react'
import type { ReactNode } from 'react'
import { Tooltip } from '@/components/block/tooltip'
// import { useToast } from '@/hooks/use-toast'
import { CircleCheckBig, Link2 } from 'lucide-react'

type Props = {
  id: string
  children: ReactNode
}

export default function AnchorLink({ id, children }: Props) {
  // const { toast } = useToast()

  const [hasCopied, setHasCopied] = React.useState(false)

  React.useEffect(() => {
    if (hasCopied) {
      setTimeout(() => {
        setHasCopied(false)
      }, 2000)
    }
  }, [hasCopied])

  return (
    <Tooltip
      content={
        hasCopied ? (
          'Đã sao chép'
        ) : (
          <span>
            Sao chép đường dẫn: <em>{explainShareLink(id)}</em>
          </span>
        )
      }
    >
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
      <span
        id={`${id}`}
        onClick={(e) => {
          e.preventDefault()
          const shareLink = getShareLinkFromId(id)
          copyLinkToClipboard(shareLink)
          setHasCopied(true)
          // toast({
          //   title: `📋 Đã sao chép: ${explainShareLink(id)}`,
          //   description: `${shareLink}`,
          // })
        }}
        className="anchor-link relative inline-block min-w-6 text-center rounded-md cursor-pointer"
      >
        {hasCopied ? (
          <CircleCheckBig
            color="hsl(142, 100%, 25.1%)"
            className="check-icon"
          />
        ) : (
          <Link2 />
        )}
        {children}
      </span>
    </Tooltip>
  )
}

function getShareLinkFromId(id: string) {
  const cleanedHref = window?.location.href.split(/[?#]/)[0]
  const cleanedHrefWithFragment = `${cleanedHref}#${id}`
  return cleanedHrefWithFragment
}

function copyLinkToClipboard(link: string) {
  navigator.clipboard.writeText(link)
}

function explainShareLink(id: string): string {
  if (id.match(/^(I|II|III|IV)$/)) {
    return `Chương ${id}`
  }
  if (id.match(/^(I|II|III|IV)\.(\d+)$/)) {
    const [chuong, muc] = id.split('.')
    return `Chương ${chuong}, mục ${muc}`
  }
  if (id.match(/^\d+$/)) {
    return `Điều ${id}`
  }
  if (id.match(/^\d+.\d+$/)) {
    const [dieu, khoan] = id.split('.')
    return `Khoản ${khoan}, điều ${dieu}`
  }
  if (id.match(/^\d+.\d+.(\w|đ)$/)) {
    const [dieu, khoan, diem] = id.split('.')
    return `Điểm ${diem}, khoản ${khoan}, điều ${dieu}`
  }
  return ''
}
