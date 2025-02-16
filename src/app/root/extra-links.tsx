'use client'

import React from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'
import BaseLink from '@/components/base-link'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { EXTRA_LINKS } from '@/constant/homepage-links'

export function ExtraLinks() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger asChild>
        <button className="mt-3 flex items-center hover:underline hover:decoration-blue-500">
          <h2 className="text-2xl">Cơ sở hạ tầng GTĐB</h2>
          {isOpen ? (
            <ChevronDown className="h-8 w-8 text-blue-500" />
          ) : (
            <ChevronRight className="h-8 w-8 text-blue-500" />
          )}
        </button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <ol className="list-disc flex flex-col gap-2 p-2">
          {EXTRA_LINKS.map((item) => {
            return (
              <li key={item.name + item.url}>
                <div className="flex gap-2">
                  <BaseLink
                    className="mr-2 text-gray-800 hover:underline [&>svg]:text-blue-500"
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
