import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'

export default function SearchButton() {
  return (
    <Button variant='ghost' className='w-full h-full rounded-none' disabled>
      <Search size={24} />
    </Button>
  )
}
