import { Button } from '@/components/ui/button'
import { BarChart } from 'lucide-react'

export default function StatsButton() {
  return (
    <Button variant='ghost' className='w-full h-full rounded-none' disabled>
      <BarChart size={24} />
    </Button>
  )
}
