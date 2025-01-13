import { ImageResponse } from 'next/og'
import { env } from '@/env.mjs'
import { LuatGT2024PreviewRoot } from '@/components/block/luat-gt-2024-preview-root'

// export const runtime = 'edge'

// Image metadata
export const alt = `Luật Trật tự, an toàn giao thông đường bộ 2024 | ${env.NEXT_PUBLIC_BRAND_SHORT}`
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

// Image generation
export default async function Image(props: { params: { slug: string } }) {
  return new ImageResponse(LuatGT2024PreviewRoot, {
    width: 1200,
    height: 630,
  })
}
