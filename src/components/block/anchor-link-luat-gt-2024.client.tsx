'use client'

import type { ReactNode } from 'react'
import React from 'react'
import { CircleCheckBig, Link2 } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import { shareOrCopy } from '@/lib/copy-to-clipboard'
import { getShareLinkFromId } from '@/lib/get-share-link-from-id'
import { cn } from '@/lib/utils'
import { isDieu, isKhoan } from '@/lib/vbpl-explain-section'
import { constants } from '@/constant'

const LAW_NAME = constants.laws.luatGT2024.short_name

type Props = {
  id: string
  children: ReactNode
  explain?: string
  element?: JSX.ElementType
}

export default function AnchorLinkLuatGT2024Client({
  id,
  children,
  explain,
  element: El = 'span',
}: Props) {
  const { toast } = useToast()

  const [hasCopied, setHasCopied] = React.useState(false)

  React.useEffect(() => {
    if (!hasCopied) return
    const timer = setTimeout(() => setHasCopied(false), 2000)
    return () => clearTimeout(timer)
  }, [hasCopied])

  return (
    <El
      id={`${id}`}
      role={El === 'span' ? 'button' : undefined}
      tabIndex={El === 'span' ? 0 : undefined}
      aria-label={`Chia sẻ ${explain || id}`}
      onKeyDown={(event: React.KeyboardEvent<HTMLElement>) => {
        if (El === 'span' && (event.key === 'Enter' || event.key === ' ')) {
          event.preventDefault()
          event.currentTarget.click()
        }
      }}
      onClick={async (e: React.SyntheticEvent) => {
        e.preventDefault()
        e.stopPropagation()
        const shareLink = getShareLinkFromId(id)

        const shareData = {
          title: `${explain} ${LAW_NAME}`,
          text: `Xem chi tiết ${explain} ${LAW_NAME} tại: `,
          url: shareLink,
        }
        try {
          if ((await shareOrCopy(shareData)) === 'copied') {
            setHasCopied(true)
            toast({
              title: `✅ Đã sao chép: ${explain}`,
              description: shareLink,
            })
          }
        } catch {
          toast({
            title: 'Không thể chia sẻ hoặc sao chép liên kết',
            description: shareLink,
            variant: 'destructive',
          })
        }
      }}
      className={cn(
        'anchor-link absolute inline-block min-w-6 cursor-pointer rounded-md text-center',
        isDieu(id) && 'section-dieu',
        isKhoan(id) && 'section-khoan'
      )}
    >
      {hasCopied ? (
        <CircleCheckBig
          color="hsl(142, 100%, 25.1%)"
          className="check-icon absolute"
        />
      ) : (
        <Link2 className="absolute" />
      )}
      {children}
    </El>
  )
}
