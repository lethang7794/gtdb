import type { TrafficLight } from '@/model/TrafficLight'
import type { CSSProperties } from 'react'
import { LogoBlank } from '@/components/block/logo-blank'
import {
  hasDieu,
  hasDieu6,
  hasDieu7,
  isDiem,
  isDiemFirst,
  isDieu,
  isKhoan,
  isKhoanFirst,
} from '@/lib/vbpl-explain-section'
import { constants } from '@/constant'

export function LawSectionPreview({
  short1,
  short2,
  short3,
  detail1: detail1Prop,
  detail2: detail2Prop,
  detail3,
  highlight,
  law,
  id = '',
}: {
  short1: string
  short2: string
  short3: string
  detail1: string
  detail2: string
  detail3: string
  highlight: TrafficLight
  law: string
  id?: string
}) {
  const showMore = `Xem chi tiết ${short1} ${short2} ${short3} ${law} tại:`

  const detail1 = processDieu(detail1Prop, law, id)
  const detail2 = detail3
    ? detail2Prop.replace(/đối với.*/, '...')
    : detail2Prop

  console.log({
    id,
    'isKhoanFirst(id)': isKhoanFirst(id),
  })

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
          lineHeight: 1.2,
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
      {id && !isDieu(id) && !isKhoanFirst(id) ? (
        <div tw="text-white ml-[94px] -mt-[12px] -mb-[12px] text-xl">...</div>
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
      {id && isDiem(id) && !isDiemFirst(id) ? (
        <div tw="text-white ml-41 -mt-3 -mb-3 text-xl">...</div>
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
              lineClamp: '4',

              paddingLeft: '32px',
            }}
          >
            {detail3}
          </div>
        </div>
      ) : null}
      <div tw="absolute flex bottom-1 right-16 text-white items-center">
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
      marginTop: 4,
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
  lineHeight: 1.25,
  padding: '4px 8px 4px 0',
}

function processDieu(detail1Prop: string, law: string, id: string) {
  if (law === constants.laws.nghiDinh168.short_name) {
    if (hasDieu6(id)) {
      return 'Điều 6. ... người điều khiển xe ô tô 🚘 ... vi phạm quy tắc giao thông ...'
    }
    if (hasDieu7(id)) {
      return 'Điều 7. ... người điều khiển xe mô tô 🏍️ , xe gắn máy 🛵 ... vi phạm quy tắc giao thông ...'
    }
    if (hasDieu(id, 9)) {
      return 'Điều 9. ... người điều khiển xe đạp 🚲, xe đạp máy ... xe thô sơ ... vi phạm quy tắc giao thông ...'
    }
    if (hasDieu(id, 10)) {
      return 'Điều 10. ... người đi bộ 🚶 vi phạm quy tắc giao thông ...'
    }
    if (hasDieu(id, 13)) {
      return 'Điều 13. ... xe ô tô 🚘 ... vi phạm quy định về điều kiện của phương tiện ...'
    }
    if (hasDieu(id, 14)) {
      return 'Điều 14. ... xe mô tô 🏍️ , xe gắn máy 🛵 ... vi phạm quy định về điều kiện của phương tiện ...'
    }
  }

  return detail1Prop
}
