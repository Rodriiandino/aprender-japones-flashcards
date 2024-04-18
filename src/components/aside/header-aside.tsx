import { Heart, Search, BarChart, BadgeJapaneseYen } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'
import TooltipCustom from '../tooltip-custom'

export default function HeaderAside() {
  return (
    <header className='w-full flex flex-col gap-2'>
      <div className='w-full h-14 flex gap-2  items-center'>
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
          <a
            href='https://github.com/rodriiandino'
            target='_blank'
            rel='noreferrer'
            className='text-sm  text-primary'
          >
            @RodriiAndino
          </a>
          <span className='text-xs text-gray-500'>Rodrigo Andino</span>
        </div>
      </div>
      <div>
        <Separator />
        {/* 
        <TooltipCustom text='feature to be implemented'>
          <nav className='w-full flex justify-center items-center h-10'>
            <Button
              variant='ghost'
              className='w-full h-full rounded-none'
              disabled
            >
              <Heart size={24} />
            </Button>
            <Separator orientation='vertical' />
            <Button
              variant='ghost'
              className='w-full h-full rounded-none'
              disabled
            >
              <Search size={24} />
            </Button>
            <Separator orientation='vertical' />
            <Button
              variant='ghost'
              className='w-full h-full rounded-none'
              disabled
            >
              <BarChart size={24} />
            </Button>
          </nav>
        </TooltipCustom>

        <Separator /> */}
      </div>
    </header>
  )
}
