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

  const shareTitle = title || document?.title || ''
  const link = path
    ? window?.location?.origin + path
    : window?.location?.origin + window?.location?.pathname

  return (
    <button
      type="button"
      onClick={() => {
        copyToClipboard(link)
        toast({
          title: `✅ Đã sao chép: ${shareTitle}`,
          description: `${link}`,
        })
      }}
      className="border-2 bg-white opacity-100 hover:border-gray rounded-md p-2 shadow-sm"
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
    <div className={cn('fixed bottom-2 left-2 flex z-20', className)}>
      {children}
    </div>
  )
}
