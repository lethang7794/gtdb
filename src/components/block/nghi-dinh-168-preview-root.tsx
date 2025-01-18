import { env } from '@/env.mjs'
import { LogoBlank } from './logo-blank'

export const NghiDinh168PreviewRoot = () => {
  return (
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
          fontStyle: 'normal',
          color: 'white',
          marginTop: 16,
          padding: '0 120px',
          lineHeight: 1.4,
          whiteSpace: 'pre-wrap',
        }}
      >
        <div tw="">Xem chi tiết tại:</div>
        <div tw="ml-1 -mr-4">www.</div>
        <LogoBlank />
        <div tw="-ml-4">.vercel.app</div>
      </div>
    </div>
  )
}
