import { env } from '@/env.mjs'

export const NghiDinh168PreviewRoot = () => (
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
        justifyContent: 'center',
        fontSize: 80,
        fontStyle: 'normal',
        letterSpacing: '-0.025em',
        backgroundColor: 'white',
        color: 'black',
        marginTop: 24,
        padding: '0 120px',
        lineHeight: 1.4,
        whiteSpace: 'pre-wrap',
        width: '100%',
      }}
    >
      Nghị định 168/2024
    </div>
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        fontStyle: 'normal',
        color: 'white',
        marginTop: 16,
        padding: '0 120px',
        lineHeight: 1.4,
        whiteSpace: 'pre-wrap',
      }}
    >
      <div style={{ fontSize: 32 }}>Xem chi tiết tại:</div>
      <div style={{ fontSize: 40 }}>{env.NEXT_PUBLIC_BRAND}</div>
    </div>
  </div>
)
