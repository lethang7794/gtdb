'use client'

import type { ReactNode } from 'react'

type Props = {
  id: string
  children: ReactNode
}

export default function AnchorLink({ id, children }: Props) {
  function handleCopyLink(
    event: React.MouseEvent<HTMLSpanElement>,
    id: string
  ) {
    const cleanedHref = window?.location.href.split(/[?#]/)[0]
    navigator.clipboard.writeText(`${cleanedHref}#${id}`)
  }

  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <span
      id={`#${id}`}
      onClick={(e) => {
        e.preventDefault()
        handleCopyLink(e, id)
        alert(`${id} copied`)
      }}
      className="inline-block border-solid border-2 border-sky-500 px-2 rounded-md"
    >
      {children}
    </span>
  )

  // return (
  //   <div className="relative">
  //     <span
  //       className="bg-[deeppink]"
  //       onClick={(e) => {
  //         handleCopyLink(e, id)
  //       }}
  //     >
  //       Copy {id}
  //     </span>
  //     {/* biome-ignore lint/a11y/useAnchorContent: <explanation> */}
  //     <a href={`#${id}`} className="absolute" />
  //     <span id={id} className="absolute" />
  //   </div>
  // )
}
