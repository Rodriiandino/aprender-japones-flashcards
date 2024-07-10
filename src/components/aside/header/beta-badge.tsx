import { cn } from '@/lib/utils'

export default function BetaBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'border-2 border-border rounded-xl text-muted-foreground text-xs font-semibold pr-1 pl-1',
        className
      )}
    >
      BETA
    </span>
  )
}
