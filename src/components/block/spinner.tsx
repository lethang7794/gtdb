import { cn } from '@/lib/utils'

export function Spinner({
  id = 'spinner',
  className,
}: {
  id?: string
  className?: string
}) {
  return (
    <div
      id={id}
      className={cn(
        'fixed inset-0 z-20 flex items-center justify-center',
        className
      )}
      style={{
        color: 'var(--fgColor-default)',
        backgroundColor: 'var(--bgColor-default)',
      }}
    >
      <div className="flex items-center justify-center space-x-1">
        <svg
          fill="none"
          className="h-w-12 w-12 animate-spin"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Loading</title>
          <path
            clipRule="evenodd"
            d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z"
            fill="currentColor"
            fillRule="evenodd"
          />
        </svg>
      </div>
    </div>
  )
}
