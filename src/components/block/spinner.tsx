export function Spinner({ id = 'spinner' }: { id: string }) {
  return (
    <div
      id={id}
      className="fixed inset-0 flex items-center justify-center z-10"
      style={{
        color: 'var(--fgColor-default)',
        backgroundColor: 'var(--bgColor-default)',
      }}
    >
      <div className="flex justify-center items-center space-x-1">
        <svg
          fill="none"
          className="w-12 h-w-12 animate-spin"
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
