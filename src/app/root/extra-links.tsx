'use client'

import React from 'react'
import BaseLink from '@/components/base-link'
import { EXTRA_LINKS } from '@/constant/homepage-links'
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from '@/components/ui/collapsible'
import { ChevronDown, ChevronRight } from 'lucide-react'

export function ExtraLinks() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger asChild>
        <div className="mt-3 flex items-center">
          <h2 className="text-2xl">Cơ sở hạ tầng GTĐB</h2>
          {isOpen ? (
            <ChevronDown className="w-8 h-8" />
          ) : (
            <ChevronRight className="w-8 h-8" />
          )}
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <ol className="flex flex-col gap-2 p-2">
          {EXTRA_LINKS.map((item) => {
            return (
              <li key={item.name + item.url}>
                <div className="flex gap-2">
                  <BaseLink
                    className="text-blue-600 dark:text-blue-500 hover:underline mr-2"
                    href={item.url}
                  >
                    {item.name}
                  </BaseLink>
                </div>
                {item.description ? (
                  <div className="text-base text-gray-500 italic">
                    ({item.description})
                  </div>
                ) : null}
              </li>
            )
          })}
        </ol>
      </CollapsibleContent>
    </Collapsible>
  )
}
