import { ImageResponse } from 'next/og'
import { env } from '@/env.mjs'

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
  return new ImageResponse(
    <div
      style={{
        backgroundColor: 'black',
        backgroundSize: '150px 150px',
        height: '100%',
        width: '100%',
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        fontFamily: 'Inter',
      }}
    >
      <div
        style={{
          fontSize: 80,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          justifyItems: 'center',
        }}
      >
        🚙🏍️🛵🚲🚶
      </div>
      <div
        style={{
          fontSize: 80,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          justifyItems: 'center',
        }}
      >
        🛣️🚦⛔🚥🚸
      </div>
      <div
        style={{
          fontSize: 80,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          justifyItems: 'center',
        }}
      >
        🚔🚨🛑👮🎫 - 🤑📸💸😭🫂
      </div>
      <div
        style={{
          display: 'flex',
          fontSize: 60,
          fontStyle: 'normal',
          letterSpacing: '-0.025em',
          color: 'white',
          marginTop: 0,
          padding: '0 120px',
          lineHeight: 1.4,
          whiteSpace: 'pre-wrap',
        }}
      >
        Nghị định 168/2024
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          justifyItems: 'center',
          gap: 8,
          fontSize: 40,
          fontStyle: 'normal',
          color: 'white',
          marginTop: 0,
          padding: '0 120px',
          lineHeight: 1.4,
          whiteSpace: 'pre-wrap',
        }}
      >
        <div>Xem chi tiết tại:</div>
        <div>{env.NEXT_PUBLIC_BRAND}</div>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    }
  )
}
