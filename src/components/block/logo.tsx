/* eslint-disable @next/next/no-img-element */

export function Logo({
  className,
  display,
}: { className?: string; display?: string }) {
  return (
    <div
      style={{
        position: 'relative',
        backgroundColor: '#353535',
        borderRadius: '1.5rem',
        height: '3rem',
        aspectRatio: '2/1',
        display,
      }}
      className={className}
    >
      <img
        alt="gtdb logo"
        src="/logo-landscape.svg"
        className="h-full w-auto"
        style={{
          height: '100%',
          width: 'auto',
        }}
      />
    </div>
  )
}
