import type { Metadata } from 'next'
import { CaretSortIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'

import { getGlossaries } from '@/service/glossary'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Giải thích từ ngữ',
}

export default async function GlossariesPage() {
  const data = await getGlossaries()
  const entries = Object.entries(data) || []

  return (
    <main className="flex h-full flex-col justify-between p-6 md:p-8">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(350px,_1fr))] justify-between gap-4">
        {entries.map(([key, val]) => {
          return (
            <Collapsible
              key={key}
              className="border rounded-lg space-x-2"
              // defaultOpen
            >
              <CollapsibleTrigger asChild>
                <div>
                  <div className="flex items-center justify-between space-x-4 pl-2 py-2 pr-2">
                    <div className="flex items-center flex-wrap gap-2 text-lg font-semibold">
                      <Badge
                        variant="outline"
                        className="text-lg border-transparent text-left"
                      >
                        {val?.term}
                      </Badge>
                      <AkaBadges aka={val?.aka || ''} />
                    </div>
                    <Button variant="ghost" size="sm">
                      <CaretSortIcon className="h-4 w-4" />
                      <span className="sr-only">Toggle</span>
                    </Button>
                  </div>
                  <div className="flex justify-end">
                    {val?.source_abbr ? (
                      <div className="mr-8 pl-3 pb-3 pr-4 text-xs text-balance italic text-gray-500">
                        ({val.source_abbr})
                      </div>
                    ) : null}
                  </div>
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-2">
                <div className="border-t mr-6 ml-3">
                  <div className="pt-4 pr-4 pl-3 pb-4 font-mono text-sm whitespace-pre-wrap">
                    {val?.explain}
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          )
        })}
      </div>
    </main>
  )
}

function AkaBadges({ aka }: { aka: string | string[] }) {
  if (!aka || aka.length === 0) {
    return null
  }
  if (typeof aka === 'string') {
    return <Badge className="text-lg">{aka}</Badge>
  }
  if (aka.length > 0) {
    return aka.map((term) => (
      <Badge key={term} className="text-lg">
        {term}
      </Badge>
    ))
  }
}
