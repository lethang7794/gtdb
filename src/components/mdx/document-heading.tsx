import type { ReactNode } from 'react'

export function DocumentHeading({
  left,
  right,
  title,
}: {
  left: ReactNode
  right: ReactNode
  title: ReactNode
}) {
  return (
    <div className="flex flex-col gap-4 mb-4">
      <div className="flex gap-4 overflow-auto text-center whitespace-nowrap text-nowrap">
        <div>{left}</div>
        <div className="flex-grow" />
        <div>
          <div className="font-bold">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</div>
          <div className="font-bold">Độc lập - Tự do - Hạnh phúc</div>
          <div>----------</div>
          <div className="italic">{right}</div>
        </div>
      </div>
      <div className="text-center text-3xl font-bold">{title}</div>
    </div>
  )
}
