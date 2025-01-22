'use client'

import React from 'react'
import type { ReactNode } from 'react'
import { CircleCheckBig, Link2 } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import { isDieu, isKhoan, vbplSectionExplain } from '@/lib/vbpl-explain-section'
import { getShareLinkFromId } from '@/lib/get-share-link-from-id'
import { copyToClipboard } from '@/lib/copy-to-clipboard'
import { constants } from '@/constant'

const LAW_NAME = constants.laws.nghiDinh168.short_name

type Props = {
  id: string
  children: ReactNode
  explain?: string
  element?: JSX.ElementType
}

export default function AnchorLinkClient({
  id,
  children,
  explain,
  element: El = 'span',
}: Props) {
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
    <El
      id={`${id}`}
      onClick={(e: React.SyntheticEvent) => {
        e.preventDefault()
        e.stopPropagation()
        const shareLink = getShareLinkFromId(id)

        const shareData = {
          title: `${explain} ${LAW_NAME}`,
          text: `Xem chi tiết ${explain} ${LAW_NAME} tại: `,
          url: shareLink,
        }
        if (navigator.share && navigator.canShare(shareData)) {
          navigator.share(shareData)
        } else {
          copyToClipboard(shareLink)
          setHasCopied(true)
          setHasCopiedRecently(true)
          toast({
            title: `✅ Đã sao chép: ${explain}`,
            description: `${shareLink}`,
          })
        }
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
              Sao chép đường dẫn: <em>{vbplSectionExplain(id).path}</em>
            </span>
          )}
        </span>
      )}
      {children}
    </El>
  )
}
