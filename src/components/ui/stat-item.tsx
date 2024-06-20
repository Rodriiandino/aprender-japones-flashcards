import { cn } from '@/lib/utils'

interface StatItemProps {
  label: string
  value: string
  className?: string
}

const StatItem = ({ label, value, className }: StatItemProps) => (
  <div className={cn('flex justify-between', className)}>
    <p className='text-sm text-muted-foreground'>{label}</p>
    <p className='text-sm text-muted-foreground'>{value}</p>
  </div>
)

export { StatItem }
