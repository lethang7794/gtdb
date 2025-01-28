import type { Metadata } from 'next'
import { CaretSortIcon } from '@radix-ui/react-icons'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { cn } from '@/lib/utils'
import { getGlossaries } from '@/service/glossary'

export const metadata: Metadata = {
  title: 'Giải thích từ ngữ',
}

export default async function GlossariesPage() {
  const items = await getGlossaries()

  return (
    <main className="flex h-full flex-col justify-between p-6 md:p-8">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(350px,_1fr))] justify-between gap-4">
        {items.map((item) => {
          return (
            <Collapsible
              key={item.id}
              className="space-x-2 rounded-lg border"
              // defaultOpen
            >
              <CollapsibleTrigger asChild>
                <div>
                  <div className="flex items-center justify-between space-x-4 py-2 pl-2 pr-2">
                    <div className="flex flex-wrap items-center gap-2 text-lg font-semibold">
                      <Badge
                        variant="outline"
                        className={cn(
                          'text-left text-lg',
                          !isLocalTerm(item?.term) && 'border-transparent'
                        )}
                      >
                        {item?.term}
                      </Badge>
                      <AkaBadges aka={item?.aka || ''} />
                    </div>
                    <Button variant="ghost" size="sm">
                      <CaretSortIcon className="h-4 w-4" />
                      <span className="sr-only">Toggle</span>
                    </Button>
                  </div>
                  <div className="flex justify-end">
                    {item?.source_abbr ? (
                      <div className="mr-8 text-balance pb-3 pl-3 pr-4 text-xs italic text-gray-500">
                        ({item?.source_abbr})
                      </div>
                    ) : null}
                  </div>
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-2">
                <div className="ml-3 mr-6 border-t">
                  <div className="whitespace-pre-wrap pb-4 pl-3 pr-4 pt-4 font-mono text-sm">
                    {item?.explain}
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
    return (
      <Badge
        className="text-lg"
        variant={isLocalTerm(aka) ? 'outline' : 'default'}
      >
        {aka}
      </Badge>
    )
  }
  if (aka.length > 0) {
    return aka.map((term) => (
      <Badge
        key={term}
        className="text-lg"
        variant={isLocalTerm(term) ? 'outline' : 'default'}
      >
        {term}
      </Badge>
    ))
  }
}

function isLocalTerm(aka: string) {
  return aka.match('"')
}
