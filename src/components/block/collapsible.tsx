'use client'

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'

interface CollapsibleSectionProps {
  trigger: React.ReactNode
  children: React.ReactNode
}

export function CollapsibleSection({
  trigger,
  children,
}: CollapsibleSectionProps) {
  return (
    <Collapsible>
      <CollapsibleTrigger>{trigger}</CollapsibleTrigger>
      <CollapsibleContent>{children}</CollapsibleContent>
    </Collapsible>
  )
}
