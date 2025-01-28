import type { ReactNode } from 'react'

export function DocumentEnding({
  left,
  right,
}: {
  left: ReactNode
  right: ReactNode
}) {
  return (
    <div className="flex justify-between gap-4 overflow-auto pb-4 text-nowrap whitespace-nowrap">
      <div>{left}</div>
      <div className="text-center">{right}</div>
    </div>
  )
}
