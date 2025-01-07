'use client'

import React from 'react'
import type { ReactNode } from 'react'
import { useToast } from '@/hooks/use-toast'
import { CircleCheckBig, Link2 } from 'lucide-react'

type Props = {
  id: string
  children: ReactNode
}

export default function AnchorLink({ id, children }: Props) {
  const { toast } = useToast()

  const [hasCopied, setHasCopied] = React.useState(false)
  const [hasCopiedRecently, setHasCopiedRecently] = React.useState(false)

  React.useEffect(() => {
    if (hasCopied) {
      setTimeout(() => {
        setHasCopied(false)
      }, 2000)
    }

    if (hasCopied) {
      setTimeout(() => {
        setHasCopiedRecently(false)
      }, 5500)
    }
  }, [hasCopied])

  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <span
      id={`${id}`}
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        const shareLink = getShareLinkFromId(id)
        copyLinkToClipboard(shareLink)
        setHasCopied(true)
        setHasCopiedRecently(true)
        toast({
          title: `✅ Đã sao chép: ${explainShareLink(id)}`,
          description: `${shareLink}`,
        })
      }}
      className="anchor-link relative inline-block min-w-6 text-center rounded-md cursor-pointer"
    >
      {hasCopied ? (
        <CircleCheckBig
          color="hsl(142, 100%, 25.1%)"
          className="check-icon absolute"
        />
      ) : (
        <Link2 className="absolute" />
      )}
      {hasCopiedRecently && !hasCopied ? null : (
        <span className="tooltip absolute hidden h-min w-max -top-[2.25em] -left-[1em] py-1 px-2 bg-black text-white rounded-lg shadow-lg">
          {hasCopied ? (
            <span className="copied">Đã sao chép</span>
          ) : (
            <span className="copy">
              Sao chép đường dẫn: <em>{explainShareLink(id)}</em>
            </span>
          )}
        </span>
      )}
      {children}
    </span>
  )
}

function getShareLinkFromId(id: string) {
  const cleanedHref = window?.location.href.split(/[?#]/)[0]
  const cleanedHrefWithFragment = `${cleanedHref}?section=${id}#${id}`
  return cleanedHrefWithFragment
}

function copyLinkToClipboard(link: string) {
  navigator.clipboard.writeText(link)
}

export function explainShareLink(id: string): string {
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
