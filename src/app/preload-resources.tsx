'use client'

import ReactDOM from 'react-dom'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export function PreloadResources() {
  ReactDOM.preload(`${basePath}/assets/branding/logo-landscape.svg`, {
    as: 'image',
    fetchPriority: 'high',
  })

  return null
}
