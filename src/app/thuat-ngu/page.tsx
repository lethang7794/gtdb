import { CaretSortIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'

import { getGlossaries } from '@/service/glossary'

export default async function GlossariesPage() {
  const data = getGlossaries()
  const entries = Object.entries(data) || []
  console.log({ data, entries })

  return (
    <main className="flex min-h-screen flex-col justify-between p-6 md:p-8">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(400px,_1fr))] justify-between gap-4">
        {entries.map(([key, val]) => {
          return (
            <Collapsible key={key} className="border space-x-2">
              <div className="flex items-center justify-between space-x-4 pl-4 py-2 pr-2">
                <h4 className="text-lg font-semibold text-balance">
                  {val.term}
                </h4>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <CaretSortIcon className="h-4 w-4" />
                    <span className="sr-only">Toggle</span>
                  </Button>
                </CollapsibleTrigger>
              </div>
              <CollapsibleContent className="space-y-2">
                <div className="pr-4 pl-5 pb-4 font-mono text-sm shadow-sm whitespace-pre-wrap">
                  {val.explain}
                </div>
              </CollapsibleContent>
            </Collapsible>
          )
        })}
      </div>
    </main>
  )
}
