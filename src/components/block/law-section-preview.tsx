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
        <Logo />
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

const Logo = () => (
  // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="svg537795"
    width="180"
    height="90"
    version="1.1"
    viewBox="0 0 1024 512"
  >
    <title></title>
    <g id="logo-group" transform="matrix(1.3832 0 0 1.3832 -196.204 -275.16)">
      <g id="logo-center" fontStyle="normal" textAnchor="middle">
        <g
          id="title"
          strokeMiterlimit="2"
          strokeWidth="0"
          fontFamily="Brandmark Sans 50 Spectrum"
          fontSize="72"
          fontWeight="normal"
          style={{
            lineHeight: '1',
            fontVariantLigatures: 'normal',
            textAlign: 'center',
          }}
        >
          <g id="path537804">
            <path
              fill="#37dd3e"
              stroke="#37dd3e"
              strokeWidth="0"
              d="M245.592 454.8c4.158 0 8.119 1.584 11.089 4.555 9.703 9.504 19.604 12.277 32.673 12.277 12.87 0 22.772-2.773 32.276-12.08 2.97-2.574 6.931-4.356 11.09-4.356 9.108 0 16.237 7.327 16.237 16.238 0 4.95-2.178 9.108-5.347 12.277-16.04 14.455-34.85 20.593-54.256 20.593s-38.614-6.336-54.851-21.187c-3.168-3.169-5.347-7.327-5.347-11.881 0-8.911 7.13-16.436 16.436-16.436Z"
              className="c3"
            />
            <path
              fill="#00a600"
              stroke="#00a600"
              strokeWidth="0"
              d="M289.354 314.406c-36.238 0-66.534 29.702-66.534 66.138 0 37.029 30.296 66.73 66.534 66.73 36.436 0 66.138-29.701 66.138-66.73 0-36.436-29.702-66.138-66.138-66.138Zm0 100.196c-18.614 0-34.06-15.05-34.06-34.058 0-18.613 15.446-33.663 34.06-33.663 18.416 0 33.465 15.05 33.465 33.663 0 19.009-15.05 34.058-33.465 34.058Z"
              className="c1"
            />
          </g>
          <g id="path537806">
            <path
              fill="#00a600"
              stroke="#00a600"
              strokeWidth="0"
              d="M454.492 414.69c-.089 0-.173-.011-.26-.011h.26c-18.512 0-33.634-15.123-33.634-34.156v-32.33h17.208c9.08 0 16.35-7.231 16.42-16.296a16.35 16.35 0 0 0-16.42-16.295h-17.208v-19.034a16.354 16.354 0 0 0-16.296-16.419 16.354 16.354 0 0 0-16.296 16.42v83.954c0 36.957 29.618 66.635 66.03 66.74.066 0 .13-.011.196-.014 8.913-.388 16.014-7.491 16.152-16.406a16.34 16.34 0 0 0-16.152-16.152Z"
              className="c1"
            />
            <path
              fill="#1bc11f"
              stroke="#1bc11f"
              strokeWidth="0"
              d="M420.858 315.602h-16.296c-9 0-16.295 7.296-16.295 16.295s7.295 16.295 16.295 16.295h16.296z"
              className="c2"
            />
            <path
              fill="#37dd3e"
              stroke="#37dd3e"
              strokeWidth="0"
              d="M438.066 348.192c9.081 0 16.35-7.23 16.42-16.296a16.353 16.353 0 0 0-16.42-16.294h-17.208v32.59z"
              className="c3"
            />
          </g>
          <g id="path537808">
            <path
              fill="#00a600"
              stroke="#00a600"
              strokeWidth="0"
              d="M562.015 314.754c12.37 0 24.043 3.466 34.059 9.474V280.15c0-9.84 8.318-17.6 18.216-16.292 8.29 1.097 14.259 8.583 14.259 16.946v99.741c0 .046-.005.09-.005.136 0 .071.005.14.005.21 0 37.029-30.296 66.732-66.534 66.732-36.435 0-66.137-29.703-66.137-66.731 0-36.435 29.702-66.139 66.137-66.139Zm0 100.197c3.257 0 6.409-.485 9.406-1.347.639-.318 1.291-.62 1.978-.858 12.24-4.277 21.371-15.505 22.54-29.212.037-.47.056-.944.073-1.42.02-.456.051-.908.054-1.37-.082-18.544-15.488-33.515-34.051-33.515-18.415 0-33.465 15.05-33.465 33.664 0 19.01 15.05 34.058 33.465 34.058Z"
              className="c1"
            />
            <path
              fill="#37dd3e"
              stroke="#37dd3e"
              strokeWidth="0"
              d="M596.074 324.228V280.15c0-9.84 8.319-17.6 18.216-16.292 8.29 1.097 14.259 8.583 14.259 16.946v99.741c0 .046-.005.09-.005.136-.078-23.91-13.198-44.896-32.47-56.454Z"
              className="c3"
            />
            <path
              fill="#1bc11f"
              stroke="#1bc11f"
              strokeWidth="0"
              d="M583.123 443.945c-10.184 3.38-20.712-4.113-20.712-14.843v-1.41c0-6.121 3.625-11.416 9.01-14.088 13.327-3.834 23.411-15.588 24.519-30.07.04-.469.05-.945.072-1.42.015-.409.062-.808.062-1.221 0-.051-.008-.098-.008-.15.001-.065.008-.131.008-.197v-56.318c19.272 11.558 32.392 32.543 32.47 56.454-.06 29.623-19.121 54.535-45.421 63.263Z"
              className="c2"
            />
          </g>
          <g id="path537810">
            <path
              fill="#00a600"
              stroke="#00a600"
              strokeWidth="0"
              d="M735.054 314.754c-12.37 0-24.044 3.466-34.06 9.474V280.15c0-9.84-8.318-17.6-18.216-16.292-8.29 1.097-14.258 8.583-14.258 16.946v99.741c0 .046.005.09.005.136 0 .071-.005.14-.005.21 0 37.029 30.295 66.732 66.534 66.732 36.435 0 66.137-29.703 66.137-66.731 0-36.435-29.702-66.139-66.137-66.139Zm0 100.197c-3.258 0-6.41-.485-9.406-1.347a17 17 0 0 0-1.978-.858c-12.24-4.277-21.372-15.505-22.541-29.212-.036-.47-.055-.944-.073-1.42-.02-.456-.05-.908-.053-1.37.081-18.544 15.487-33.515 34.05-33.515 18.416 0 33.466 15.05 33.466 33.664 0 19.01-15.05 34.058-33.465 34.058Z"
              className="c1"
            />
            <path
              fill="#37dd3e"
              stroke="#37dd3e"
              strokeWidth="0"
              d="M700.994 324.228V280.15c0-9.84-8.318-17.6-18.216-16.292-8.29 1.097-14.258 8.583-14.258 16.946v99.741c0 .046.005.09.005.136.078-23.91 13.198-44.896 32.47-56.454Z"
              className="c3"
            />
            <path
              fill="#1bc11f"
              stroke="#1bc11f"
              strokeWidth="0"
              d="M713.946 443.945c10.183 3.38 20.712-4.113 20.712-14.843v-1.41c0-6.121-3.626-11.416-9.01-14.088-13.327-3.834-23.411-15.588-24.52-30.07-.04-.469-.05-.945-.072-1.42-.015-.409-.062-.808-.062-1.221 0-.051.009-.098.009-.15-.002-.065-.009-.131-.009-.197v-56.318c-19.271 11.558-32.391 32.543-32.47 56.454.06 29.623 19.122 54.535 45.422 63.263Z"
              className="c2"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
)
