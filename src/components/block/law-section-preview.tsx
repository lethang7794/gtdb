import type { TrafficLight } from '@/model/TrafficLight'
import type { CSSProperties } from 'react'
import { LogoBlank } from '@/components/block/logo-blank'

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
  const showMore = `Xem chi tiết ${short1} ${short2} ${short3} ${law} tại:`

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
          padding: '16px 60px 0 60px',
          lineHeight: 1.4,
        }}
      >
        <div style={styleNghiDinhHeading}>{law}</div>
        <div tw="-ml-2">:</div>
        {short1 ? (
          <div style={getStyleForColor('red', highlight, short1)}>{short1}</div>
        ) : null}
        {short2 ? (
          <div style={getStyleForColor('yellow', highlight, short2)}>
            {short2}
          </div>
        ) : null}
        {short3 ? (
          <div style={getStyleForColor('green', highlight, short3)}>
            {short3}
          </div>
        ) : null}
        {/* <div style={{ flexGrow: 1 }} /> */}
      </div>
      {detail1 ? (
        <div
          style={{
            ...styleDetailWrapper,
            ...getStyleForDetailColor('red', highlight, detail1),
          }}
        >
          <div
            style={{
              ...styleDetail,
              ...getStyleForColor('red', highlight, detail1),

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
        <div
          style={{
            ...styleDetailWrapper,
            ...getStyleForDetailColor('yellow', highlight, detail1),
          }}
        >
          <div
            style={{
              ...styleDetail,
              ...getStyleForColor('yellow', highlight, detail2),

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
        <div
          style={{
            ...styleDetailWrapper,
            ...getStyleForDetailColor('green', highlight, detail3),
          }}
        >
          <div
            style={{
              ...styleDetail,
              ...getStyleForColor('green', highlight, detail3),

              display: 'block',
              lineClamp: '3',

              paddingLeft: '32px',
            }}
          >
            {detail3}
          </div>
        </div>
      ) : null}
      <div tw="absolute flex bottom-4 right-16 text-white items-center">
        <div tw="">{showMore}</div>
        <div tw="ml-1 -mr-4">www.</div>
        <LogoBlank />
        <div tw="-ml-4">.vercel.app</div>
      </div>
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
    fixLetterD: {
      paddingTop: '10px',
    },
  },
  red: {
    base: {
      padding: '0 0px',
      borderRadius: '16px',
      color: 'white',
    },
    border: {
      border: '4px solid red',
    },
    background: {
      backgroundColor: 'red',
      color: 'white',
      paddingRight: '12',
      paddingLeft: '12',
    },
    detailWrapper: {},
  },
  yellow: {
    base: {
      padding: '4px 0px 0',
      borderRadius: '16px',
      color: 'white',
    },
    border: {
      border: '4px solid yellow',
    },
    background: {
      backgroundColor: 'yellow',
      color: 'black',
      paddingRight: '12',
      paddingLeft: '12',
    },
  },
  green: {
    base: {
      padding: '0 0px',
      borderRadius: '16px',
      color: 'white',
    },
    border: {
      border: '4px solid green',
    },
    background: {
      backgroundColor: 'green',
      color: 'white',
      paddingRight: '12',
      paddingLeft: '12',
    },
    detailWrapper: {
      paddingLeft: 128,
    },
  },
}

const styleNghiDinhHeading: CSSProperties = {
  color: 'white',
  border: '4px solid transparent',
  borderRadius: '16px',
  padding: '0 0px',
  // fontStyle: 'italic' // doesn't work
}

function getStyleForColor(
  color: TrafficLight,
  highlight: TrafficLight,
  text?: string
) {
  return {
    ...stylesByColor[color].base,
    ...(highlight === color
      ? stylesByColor[color].background
      : stylesByColor[color].borderTransparent),
    ...(text?.startsWith('Đ') || text?.startsWith('đ')
      ? stylesByColor.share.fixLetterD || {}
      : {}),
  }
}
function getStyleForDetailColor(
  color: TrafficLight,
  highlight: TrafficLight,
  text?: string
) {
  return {
    ...stylesByColor[color].detailWrapper,
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
  marginTop: 16,
  lineHeight: 1.4,
  padding: '4px 8px 4px 0',
}
