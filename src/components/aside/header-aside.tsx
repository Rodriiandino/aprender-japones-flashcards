import { Heart, Search, BarChart, BadgeJapaneseYen } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'

export default function HeaderAside() {
  return (
    <header className='w-full flex flex-col gap-2'>
      <div className='w-full h-14 p-2 flex gap-2  items-center'>
        <a
          href='https://github.com/rodriiandino'
          target='_blank'
          rel='noreferrer'
        >
          <Avatar>
            <AvatarImage
              src='https://github.com/rodriiandino.png'
              alt='@RodriiAndino'
            />
            <AvatarFallback>
              <BadgeJapaneseYen size={24} />
            </AvatarFallback>
          </Avatar>
        </a>

        <div className='flex flex-col gap-1'>
          <span className='text-sm text-gray-700'>@RodriiAndino</span>
          <span className='text-xs text-gray-500'>Rodrigo Andino</span>
        </div>
      </div>
      <div>
        <Separator />
        <nav className='w-full flex justify-center items-center h-10'>
          <Button variant='ghost' className='w-full'>
            <Heart size={24} />
          </Button>
          <Separator orientation='vertical' />
          <Button variant='ghost' className='w-full'>
            <Search size={24} />
          </Button>
          <Separator orientation='vertical' />
          <Button variant='ghost' className='w-full'>
            <BarChart size={24} />
          </Button>
        </nav>
        <Separator />
      </div>
    </header>
  )
}
