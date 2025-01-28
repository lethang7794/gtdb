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
            <ChevronDown className="h-8 w-8" />
          ) : (
            <ChevronRight className="h-8 w-8" />
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
                    className="mr-2 text-blue-600 hover:underline dark:text-blue-500"
                    href={item.url}
                  >
                    {item.name}
                  </BaseLink>
                </div>
                {item.description ? (
                  <div className="text-base italic text-gray-500">
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
