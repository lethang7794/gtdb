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
  const wrapperClass = left
    ? 'flex flex-col-reverse md:flex-row justify-between gap-6 overflow-auto mb-4 text-center whitespace-nowrap text-nowrap'
    : 'flex justify-between overflow-auto text-center whitespace-nowrap text-nowrap'

  return (
    <div className="flex flex-col gap-4 mb-4">
      <div className={wrapperClass}>
        <div className="self-start md:self-auto">{left}</div>
        <div className="self-end md:self-auto">
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
