import type { TrafficLight } from '@/model/TrafficLight'
import type { CSSProperties } from 'react'

export function LawSectionPreview({
  short1,
  short2,
  short3,
  detail1,
  detail2,
  detail3,
  highlight,
  law,
}: {
  short1: string
  short2: string
  short3: string
  detail1: string
  detail2: string
  detail3: string
  highlight: TrafficLight
  law: string
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
        <div style={styleNghiDinhHeading}>{law}</div>
      </div>
      {detail1 ? (
        <div style={styleDetailWrapper}>
          <div
            style={{
              ...getStyleForColor('red', highlight),
              ...styleDetail,

              paddingLeft: '8px',

              display: 'block',
              lineClamp: detail2 && detail3 ? '2' : '3',
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
              lineClamp: detail3 ? '1' : '3',

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

const stylesByColor: Record<
  TrafficLight | 'share',
  Record<string, CSSProperties>
> = {
  share: {
    borderTransparent: {
      border: '4px solid transparent',
    },
  },
  red: {
    base: {
      padding: '0 8px',
      borderRadius: '16px',
      color: 'white',
    },
    border: {
      border: '4px solid red',
    },
    background: {
      backgroundColor: 'red',
      color: 'white',
    },
  },
  yellow: {
    base: {
      padding: '0 8px',
      borderRadius: '16px',
      color: 'white',
    },
    border: {
      border: '4px solid yellow',
    },
    background: {
      backgroundColor: 'yellow',
      color: 'black',
    },
  },
  green: {
    base: {
      padding: '0 8px',
      borderRadius: '16px',
      color: 'white',
    },
    border: {
      border: '4px solid green',
    },
    background: {
      backgroundColor: 'green',
      color: 'white',
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
      : stylesByColor[color].borderTransparent),
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
