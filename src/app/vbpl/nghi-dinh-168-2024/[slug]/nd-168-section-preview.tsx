import type { CSSProperties } from 'react'

export function Nd168SectionPreview({
  short1,
  short2,
  short3,
  detail1,
  detail2,
  detail3,
  highlight,
}: {
  short1: string
  short2: string
  short3: string
  detail1: string
  detail2: string
  detail3: string
  highlight: TrafficLight
}) {
  return (
    <div
      style={{
        // backgroundImage: 'linear-gradient(to bottom, #dbf4ff, #fff1f1)',
        backgroundColor: 'rgb(33, 40, 49)',
        height: 630,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: 12,
          fontSize: 48,
          fontStyle: 'normal',
          letterSpacing: '-0.025em',
          color: 'white',
          padding: '48px 60px 0 60px',
          lineHeight: 1.4,
        }}
      >
        {short1 ? (
          <div style={getStyleForColor('red', highlight)}>{short1}</div>
        ) : null}
        {short2 ? (
          <div style={getStyleForColor('yellow', highlight)}>{short2}</div>
        ) : null}
        {short3 ? (
          <div style={getStyleForColor('green', highlight)}>{short3}</div>
        ) : null}
        <div style={styleNghiDinhHeading}>Nghị định 168/2024</div>
      </div>
      {detail1 ? (
        <div style={styleDetailWrapper}>
          <div
            style={{
              ...getStyleForColor('red', highlight),
              ...styleDetail,

              paddingLeft: '8px',

              display: 'block',
              lineClamp: '2',
            }}
          >
            {detail1}
          </div>
        </div>
      ) : null}
      {detail2 ? (
        <div style={styleDetailWrapper}>
          <div
            style={{
              ...getStyleForColor('yellow', highlight),
              ...styleDetail,

              display: 'block',
              lineClamp: '1',

              paddingLeft: '32px',
            }}
          >
            {detail2}
          </div>
        </div>
      ) : null}
      {detail3 ? (
        <div style={styleDetailWrapper}>
          <div
            style={{
              ...getStyleForColor('green', highlight),
              ...styleDetail,

              display: 'block',
              lineClamp: '3',

              paddingLeft: '56px',
            }}
          >
            {detail3}
          </div>
        </div>
      ) : null}
    </div>
  )
}

export type TrafficLight = 'red' | 'yellow' | 'green'

const stylesByColor: Record<TrafficLight, Record<string, CSSProperties>> = {
  red: {
    base: {
      padding: '0 8px',
      borderRadius: '16px',
    },
    border: {
      color: 'white',
      border: '4px solid red',
    },
    background: {
      backgroundColor: 'red',
    },
  },
  yellow: {
    base: {
      padding: '0 8px',
      borderRadius: '16px',
    },
    border: {
      color: 'white',
      border: '4px solid yellow',
    },
    background: {
      color: 'black',
      backgroundColor: 'yellow',
    },
  },
  green: {
    base: {
      padding: '0 8px',
      borderRadius: '16px',
    },
    border: {
      color: 'white',
      border: '4px solid green',
    },
    background: {
      color: 'white',
      backgroundColor: 'green',
    },
  },
}

const styleNghiDinhHeading: CSSProperties = {
  color: 'white',
  border: '4px solid transparent',
  borderRadius: '16px',
  padding: '0 8px',
}

function getStyleForColor(color: TrafficLight, highlight: TrafficLight) {
  return {
    ...stylesByColor[color].base,
    ...(highlight === color
      ? stylesByColor[color].background
      : stylesByColor[color].border),
  }
}

const styleDetailWrapper: CSSProperties = {
  display: 'flex',
  padding: '0 60px 0 60px',
}

const styleDetail: CSSProperties = {
  fontSize: 36,
  fontStyle: 'normal',
  letterSpacing: '-0.025em',
  marginTop: 24,
  lineHeight: 1.4,
  padding: '4px 8px 4px 0',
}
