import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { BadgeJapaneseYen } from 'lucide-react'

export default function UserProfile() {
  return (
    <div className='w-full h-14 flex gap-2 items-center mb-2'>
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
  )
}
