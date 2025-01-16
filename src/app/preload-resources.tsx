'use client'

import ReactDOM from 'react-dom'

export function PreloadResources() {
  ReactDOM.preload('/logo-landscape.svg', { as: 'image', fetchPriority: 'high' })

  return null
}
