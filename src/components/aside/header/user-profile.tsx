import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { BadgeJapaneseYen, HelpCircle } from 'lucide-react'
import BetaBadge from './beta-badge'
import { Button } from '@/components/ui/button'
import { useModalStore } from '@/store/learn-store'

export default function UserProfile() {
  const { isHelpModalOpen, toggleHelpModal } = useModalStore()

  const handleHelpModal = () => {
    toggleHelpModal(!isHelpModalOpen)
  }

  return (
    <div className='relative w-full h-14 flex gap-2 items-center mb-2'>
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
          className='text-sm text-primary'
        >
          @RodriiAndino
        </a>
        <span className='text-xs text-gray-500'>Rodrigo Andino</span>
      </div>
      <BetaBadge className='absolute right-0 bottom-0' />
      <Button
        size={'icon'}
        variant={'ghost'}
        className='absolute right-0 top-0 opacity-50 hover:bg-transparent hover:opacity-100'
        onClick={handleHelpModal}
      >
        <HelpCircle size={18} />
      </Button>
    </div>
  )
}
