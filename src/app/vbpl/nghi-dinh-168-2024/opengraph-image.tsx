import { ImageResponse } from 'next/og'
import { env } from '@/env.mjs'
import { NghiDinh168PreviewRoot } from '@/components/block/nghi-dinh-168-preview-root'

// export const runtime = 'edge'

// Image metadata
export const alt = `Nghị định 168/2024 | ${env.NEXT_PUBLIC_BRAND}`
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

// Image generation
export default async function Image(props: { params: { slug: string } }) {
  console.log('ImageRoot', { props })
  return new ImageResponse(NghiDinh168PreviewRoot, {
    width: 1200,
    height: 630,
  })
}
