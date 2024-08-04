import { cn } from '@/lib/utils'

export default function BetaBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'border-2 border-border rounded-xl text-muted-foreground text-[10px] font-semibold px-2 pb-[1px]',
        className
      )}
    >
      BETA
    </span>
  )
}
