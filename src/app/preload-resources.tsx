'use client'

import ReactDOM from 'react-dom'

export function PreloadResources() {
  ReactDOM.preload('/assets/branding/logo-landscape.svg', {
    as: 'image',
    fetchPriority: 'high',
  })

  return null
}
