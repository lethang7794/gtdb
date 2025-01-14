import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'inline-block bg-[#353535] rounded-3xl h-12 aspect-[2/1]',
        className
      )}
    >
      <img alt="" src="/logo-landscape.svg" className="h-full w-auto" />
    </div>
  )
}
