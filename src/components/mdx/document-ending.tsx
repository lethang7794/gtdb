import type { ReactNode } from 'react'

export function DocumentEnding({
  left,
  right,
}: {
  left: ReactNode
  right: ReactNode
}) {
  return (
    <div className="flex whitespace-nowrap text-nowrap px-6">
      <div>{left}</div>
      <div className="flex-grow" />
      <div className="text-center">{right}</div>
    </div>
  )
}
