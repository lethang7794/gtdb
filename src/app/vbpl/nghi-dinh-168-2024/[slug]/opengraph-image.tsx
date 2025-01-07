import { explainShareLink } from '@/lib/explain-share-link'
import { ImageResponse } from 'next/og'

// export const runtime = 'edge'

// Image metadata
export const alt = 'About Acme' // TODO
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

// Image generation
export default function Image({ params }: { params: { slug: string } }) {
  const explain = explainShareLink(params.slug || '')

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
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          justifyItems: 'center',
        }}
      >
        <img
          alt="Vercel"
          height={200}
          src="data:image/svg+xml,%3Csvg width='116' height='100' fill='white' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M57.5 0L115 100H0L57.5 0z' /%3E%3C/svg%3E"
          style={{ margin: '0 30px' }}
          width={232}
        />
      </div>
      <div
        style={{
          fontSize: 60,
          fontStyle: 'normal',
          letterSpacing: '-0.025em',
          color: 'white',
          marginTop: 30,
          padding: '0 120px',
          lineHeight: 1.4,
          whiteSpace: 'pre-wrap',
        }}
      >
        {explain}
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    }
  )
}
