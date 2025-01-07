import type { ReactNode } from 'react'
import {
  Tooltip as TooltipRoot,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  TooltipArrow,
} from '@/components/ui/tooltip'

export function Tooltip({
  content,
  children,
}: { content: ReactNode; children: ReactNode }) {
  return (
    <TooltipProvider>
      <TooltipRoot delayDuration={0}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent>
          {content}
          <TooltipArrow />
        </TooltipContent>
      </TooltipRoot>
    </TooltipProvider>
  )
}
