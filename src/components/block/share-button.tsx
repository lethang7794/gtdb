'use client'

import { useToast } from '@/hooks/use-toast'
import { copyToClipboard } from '@/lib/copy-to-clipboard'
import { cn } from '@/lib/utils'
import { Share } from 'lucide-react'

export default function ShareButton({
  path,
  title,
}: { path?: string; title?: string }) {
  const { toast } = useToast()

  return (
    <button
      type="button"
      onClick={() => {
        const shareTitle = title || document?.title || ''
        const link = path
          ? window?.location?.origin + path
          : window?.location?.origin + window?.location?.pathname
        const shareData = {
          title: shareTitle,
          text: `Xem chi tiết ${shareTitle} tại: `,
          url: link,
        }
        if (navigator.share && navigator.canShare(shareData)) {
          navigator.share(shareData)
        } else {
          copyToClipboard(link)
          toast({
            title: `✅ Đã sao chép: ${shareTitle}`,
            description: `${link}`,
          })
        }
      }}
      className="rounded-md border-2 bg-white p-2 opacity-100 shadow-sm hover:border-gray"
    >
      <Share color="black" />
    </button>
  )
}

export function ShareButtonWrapper({
  children,
  className,
}: { children?: React.ReactNode; className?: string }) {
  return (
    <div className={cn('fixed bottom-2 left-2 z-20 flex', className)}>
      {children}
    </div>
  )
}
