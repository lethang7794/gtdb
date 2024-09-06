'use client'

import { LoadingSpinner } from '@/components/ui/loading-spinner'
import { useEffect, useRef, useState } from 'react'
import { XMindEmbedViewer } from 'xmind-embed-viewer'

const EXAMPLE_XMIND_URL = '' // TODO

export default function XmindRender({ fileURL }: { fileURL?: string }) {
  const [loading, setLoading] = useState(true)

  const viewerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    async function initXmind() {
      if (!viewerRef.current) {
        return
      }

      const res = await fetch(fileURL || EXAMPLE_XMIND_URL)

      const viewer = new XMindEmbedViewer({
        el: '#xmind-viewer',
        file: await res.arrayBuffer(),
        region: 'global',
        styles: {
          height: '100vh',
          width: '100%',
        },
      })
      viewer.addEventListener('map-ready', () => {
        setLoading(false)
      })
    }

    initXmind()
  }, [])

  return (
    <div className="h-full">
      {loading ? (
        <div className="absolute h-full w-full grid place-items-center">
          <LoadingSpinner />
        </div>
      ) : null}
      <div id="xmind-viewer" ref={viewerRef} />
    </div>
  )
}
