import { ImageResponse } from 'next/og'

// export const runtime = 'edge'

// Image metadata
export const alt = 'About Acme'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

// Image generation
export default function Image(props: { params: { slug: string } }) {
  console.log('168 Image:', { props })
  // const url = new URL(request.url)
  // const { searchParams } = url
  // console.log({ url })

  // // ?section=<section>
  // const hasSection = searchParams.has('section')
  // const section = hasSection
  //   ? searchParams.get('section')?.slice(0, 100)
  //   : 'My default section'

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
    </div>,
    {
      width: 1200,
      height: 630,
    }
  )
}
